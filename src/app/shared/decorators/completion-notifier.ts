import { ToastController } from '@ionic/angular';
import { DecoratorService } from '../services/decorator.service';
import { ErrorMessageService } from '../services/error-message.service';

export function completionNotifier(onCompletionMessage: string = 'Success!', enableToast = true, errorMessage = null) {
    
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            const toastController = new ToastController();
            const translateService = DecoratorService.getService();

            if (errorMessage) {
                errorMessage = translateService.instant(errorMessage);
            }

            let toast;
            let result;
            try {
                result = await originalMethod.apply(this, args);

                if (enableToast) {
                    toast = await toastController.create({
                        message: translateService.instant(onCompletionMessage),
                        duration: 2000,
                        position: 'bottom',
                        color: 'success'
                    });

                    toast.present();
                }

            } catch (error) {
                toast = await toastController.create({
                    header:  translateService.instant('Error!'),
                    message: errorMessage || ErrorMessageService.toDisplayMessage(error),
                    duration: 20000,
                    position: 'middle',
                    color: 'primary',
                    cssClass: 'error-toast',
                    buttons: [{
                        text: translateService.instant('OK'),
                        role: 'cancel'
                    }]
                });

                toast.present();
                const element = document.querySelector('.error-toast');
                element.shadowRoot.querySelector('.toast-header').setAttribute('style', 'font-weight: bold; font-size: 1.4em');
                element.shadowRoot.querySelector('.toast-button-inner').setAttribute('style', 'font-weight: bold');

            }

            return result;
        };

        return descriptor;
    };

}

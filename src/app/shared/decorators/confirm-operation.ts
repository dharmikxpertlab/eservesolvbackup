import { AlertController } from '@ionic/angular';
import { DecoratorService } from '../services/decorator.service';

export function confirmOperation(confirmHeader: string, confirmMessage: string = 'Are you sure you want to continue?') {

    return (target, propertyKey, descriptor) => {

        const originalMethod = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            let result;
            const alertController = new AlertController();
            const translateService = DecoratorService.getService();
            const alert = await alertController.create({
                header: translateService.instant(confirmHeader),
                message: translateService.instant(confirmMessage),
                buttons: [
                    {
                        text: translateService.instant('Yes'),
                        handler: async () => {
                            try {
                                result = await originalMethod.apply(this, args);
                                return result;
                            } catch (error) {
                                alert.dismiss();
                                throw error;
                            }
                        }
                    },
                    {
                        text: translateService.instant('No'),
                        handler: async () => {
                            try {
                                return null;
                            } catch (error) {
                                alert.dismiss();
                                throw error;
                            }
                        }
                    }
                ]
            });

            await alert.present();
        };

        return descriptor;
    };
}

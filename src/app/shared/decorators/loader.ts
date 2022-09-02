import { LoadingController } from '@ionic/angular';

export function loader() {

    return (target, propertyKey, descriptor) => {

        const originalMethod = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            let result;
            const loadingController = new LoadingController();
            const loading = await loadingController.create();

            await loading.present();
            try {
                 result = await originalMethod.apply(this, args);
            } catch (error) {
                loading.dismiss();
                throw error;
            }
            loading.dismiss();
            return result;
        };

        return descriptor;
    };
}

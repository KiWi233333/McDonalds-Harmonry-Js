import router from '@system.router';

export default {
    data: {
    },
    onInit() {
        this.getIsSteppers();
    },
    getIsSteppers() {

    },
    toIndexPage() {
        router.replace({
            uri:"pages/IndexPage/IndexPage"
        })
    }
}

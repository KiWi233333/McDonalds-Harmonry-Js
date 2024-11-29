import router from '@system.router';
export default {
    data() {
        return {
            isLoginState: false,
            hiddenBack: true
        }
    },
    onInit() {
        setTimeout(()=>{
            this.isLoginState = true
        },300)
    },

}

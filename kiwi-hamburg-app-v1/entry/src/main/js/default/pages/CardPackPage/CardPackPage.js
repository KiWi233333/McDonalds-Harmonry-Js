import router from '@system.router';
export default {
    data: {
        isHttpAnim: true,
        isEmploy: false,
    },
    onInit() {
        setTimeout(()=>{
            this.isHttpAnim = false;
            this.isEmploy = true;
        },500)
    },
    //


    // 返回
    toBack() {
        router.back();
    }
}

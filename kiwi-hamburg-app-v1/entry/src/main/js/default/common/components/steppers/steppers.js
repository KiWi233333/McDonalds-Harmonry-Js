import router from '@system.router';
import storage from '@system.storage';

export default {
    data: {
    },
    onInit() {},

    nextStep() {
       this.$element("swiper").showNext()
    },

    // 跳转主页
    toIndexPage() {
        storage.set({
            key:"isStepper",
            value: JSON.stringify(true),
            success:()=>{
                console.log("存储成功");
            },
            fail:(err, code)=>{
                console.log(err+code);
            },
        })
        router.replace({
            uri: "pages/IndexPage/IndexPage"
        })
    },
}

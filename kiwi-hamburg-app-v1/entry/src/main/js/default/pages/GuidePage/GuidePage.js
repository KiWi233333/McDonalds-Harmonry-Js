import prompt from '@system.prompt';
import router from '@system.router';
import storage from '@system.storage';

export default {
    data: {
        time:3,
        timer:'',
        isStepper:false,
    },
    onInit() {
        this.getIsSteppers();
    },
    getIsSteppers() {
        storage.get({
            key:"isStepper",
            default:"false",
            success:(data)=>{
                console.log("获取成功");
                this.isStepper = JSON.parse(data)
                if(this.isStepper) {
                    // 倒计时跳转主页
                    this.timer = setInterval(()=>{
                        this.time --;
                        if(this.time == 0){
                            this.toIndexPage();
                        }
                    },1000);
                }
            },
            fail:(err, code)=>{
                this.isStepper = false;
            },
        })
    },
    toIndexPage() {
        clearInterval(this.timer)
        router.replace({
            uri:"pages/IndexPage/IndexPage"
        })
    }
}

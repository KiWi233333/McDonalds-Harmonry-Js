import http from '@ohos.net.http';
import router from '@system.router';
export default {
    data: {
        userDetail: {},
        isHttpAnim: true,// 网络请求占位动画开启
        // 确认框组件配置
        checkPrompt:{
            msg:"确认充值?"
        },
        token: "",
        moneyClass:[
            "30.0",
            "50.0",
            "100.0",
            "200.0",
            "500.0",
            "1000.0",
        ],
        balance:""

    },
    onInit() {
        // 获取token
        this.token = getApp().data.token
        // 初始化用户信息
        this.getUserInfoHttp()
    },
    // 弹窗
    showPanel(id,item) {
        this.balance = item
        this.$element(id).show();
    },
    closePanel(id) {
        this.$element(id).close();
    },

    // 确认
    sureCheckPrompt() {
        this.closePanel('checkPrompt')
        this.updateBalanceHttp();
    },

    // 修改用户的金额
    updateBalanceHttp() {
        if(!this.token) return;
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/user/balance",
            {
                method: "PUT",
                header: {
                    'Content-Type': "application/json",
                    "Authorization": this.token
                },
                extraData:{
                    "balance":this.balance
                }
            }, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result)
                if (res.status === 200) {
                    this.$element("success").show();
                    this.balance = ""
                    // 更新用户的信息
                    setTimeout(()=>{
                        this.$element("success").close();
                        this.getUserInfoHttp()
                    },1000);
                }
            } else {
                console.info(err)
            }
        }

        )
    },
    // 获取用户信息
    getUserInfoHttp() {
        this.isHttpAnim = true;
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/user/userinfo",
            {
                method: "GET",
                header: {
                    'Content-Type': "application/json",
                    "Authorization": getApp().data.token
                }
            }, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result)
                if (res.status === 200) {
                    // 展开数据
                    this.userDetail = {
                        userToken: getApp().data.userDetail.token,
                        ...res.data
                    }
                    // 全局事件总线
                    getApp().data.userDetail = this.userDetail
                }
            } else {
                console.info(err)
            }
            setTimeout(()=>{
                this.isHttpAnim = false;
            },1000)
            httpRequest.destroy()
        }
        )
    },

    // 返回
    toBack() {
        router.back();
    }
}

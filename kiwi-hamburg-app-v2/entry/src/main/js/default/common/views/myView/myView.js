import storage from '@system.storage';
import router from '@system.router';
import http from '@ohos.net.http';
import prompt from '@system.prompt';

export default {
    data() {
        return {
            // 登录状态和信息
            isLoginState: false,
            userDetail: {},
            httpUser: {},
        }
    },
    onInit() {
        this.userDetail.userToken = getApp().data.token;
        this.initUserDetail(); // 获取用户详细信息
        // 放最后同步
        this.loginStateCom(); // 同步
    },

    // token和登录状态同步
    loginStateCom() {
        this.isLoginState = getApp().data.token != "";
    },


    /**
     * @请求用户信息
    *   存储app.data
     *  过滤密码信息
     * **/
    initUserDetail() {
        if(!getApp().data.token) return;
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/user/userinfo",
            {
                method: "GET",
                header: {
                    'Content-Type': "application/json",
                    "Authorization": this.userDetail.userToken
                },
            }, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result)
                if (res.status === 200) {
                    this.httpUser = res.data;
                    this.userDetail.data
                    // 展开数据
                    this.userDetail = {
                        userToken: getApp().data.token,
                        ...res.data,
                        password: ""
                    }
                    this.isLoginState = true
                    // 全局事件总线
                    getApp().data.userDetail = this.userDetail
                }else {
                    this.isLoginState = false
                }
                return
            } else {
                console.info(err)
                this.isLoginState = false
                return
            }
        }

        )
    },
    // 退出登录
    exitLoginState() {
        // 恢复初始数据
        getApp().data.userDetail = ""
        getApp().data.token = ""
        this.userDetail = "";
        storage.delete({
            key: "loginInfo",
            success: () => {
                console.log("删除成功!")
            },
            fail: () => {
                console.log("删除失败!")
            }
        })
        storage.delete({
            key: "token",
            success: () => {
                console.log("删除成功!")
            },
            fail: () => {
                console.log("删除失败!")
            }
        })
        this.$emit("exitLogin", {})
        this.isLoginState = false;
    },

    // 去登录页
    toLoginPage() {
        router.push({
            uri: "pages/LoginPage/LoginPage"
        })
    },
    // 我的订单
    toOrder() {
        if (this.isLoginState) {
            console.log("已经登录！");
            router.push({
                uri: "pages/OrdersPage/OrdersPage"
            })
        } else {
            this.toLoginPage()
        }
    },
    // 我的订单
    toAddress() {
        if (this.isLoginState) {
            console.log("已经登录！");
            router.push({
                uri: "pages/AddressPage/AddressPage"
            })
        } else {
            this.toLoginPage();
        }
    },
    //
    toCardPackPage() {
        router.push({
            uri:"pages/CardPackPage/CardPackPage"
        })
    },
    //
    toBalancePage() {
        router.push({
            uri:"pages/BalancePage/BalancePage"
        })
    },
    /**
     * 路由
     **/
    // 去往订单栏
    toOrdersLank() {
        router.push({
            uri:"pages/OrdersPage/OrdersPage"
        })
    },
    // 去往个人信息页面
    toMyInfoPage() {
        router.push({
            uri: "pages/MyInfoPage/MyInfoPage",
            params: {
                userDetail: this.userDetail,
            }
        })
    },

    // 前往地址页面
    toAddressPage(){
        router.push({
            uri:"pages/AddressPage/AddressPage"
        })
    },

}

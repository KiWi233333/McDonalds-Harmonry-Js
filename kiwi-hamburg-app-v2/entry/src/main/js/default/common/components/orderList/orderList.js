import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';

export default {
    props:['ordersList','hiddenBack','isPayPageRouter'],
    data() {
        return {
            isLoginState:false,
            isBackRouter:false,
            isHttpAnim: true,// 网络请求占位动画开启
            isPayPageRouter:false,
            hiddenBack:false,
            ordersList: [],
            // 关于订单
            orderUid:"", // 订单编号
            balance:"0.00",// 余额
            theOrder:{
                pay_price:"",
            },
            payFrom:{// 下单
                state:false,
                btnTip:"使用钱包支付",
                isCanPay: true,
            },
            // 确认框组件配置
            checkPrompt:{
                msg:"确认是否删除?",
                state: -1,
                order:{}
            },

        }
    },
    onInit() {
        this.initData(); // 初始化数据
        this.getHttpOrdersData() // 获取订单列表
    },
    onCreate() {
    },

    // 初始化数据
    initData() {
        this.isLoginState = getApp().data.token !== ""
    },
    // 顶部导航改变 刷新数据
    orderNavChange() {

    },

    // 去登录页
    toLoginPage() {
        router.push({
            uri: "pages/LoginPage/LoginPage"
        })
    },

    // 弹窗 读取数据
    changeCheckPrompt(e){
        this.showPanel('checkPrompt');// 打开弹窗
        this.checkPrompt.order = e.detail.order;
        this.checkPrompt.state = e.detail.state;

        switch(this.checkPrompt.state) {
            case 0: // 删除
                this.checkPrompt.msg = "是否删除订单？"
                break;
            case 4: // 确认订单
                this.checkPrompt.msg = "是否取到收到餐品？"
                break;
            case 5: // 取消订单
                this.checkPrompt.msg = "是否取消订单？"
                break;
        }
    },
    // 确认
    sureCheckPrompt() {

        let order = this.checkPrompt.order;
        let state = this.checkPrompt.state;
        switch(this.checkPrompt.state) {
            case 0: // 删除
                if(order.order_uid!=='') {
                    this.deleteHttpOrder(order.order_uid);
                }
                break;
            case 4: // 确认订单
                // 更新订单状态5
                if(order.order_uid!=='') {
                    this.updateHttpOrder(order.order_uid,state)
                }
                break;
            case 5: // 取消订单
                if(order.order_uid!=='') {
                    this.updateHttpOrder(order.order_uid,state);
                }
                break;
        }
        this.closePanel('checkPrompt');
        // 清空
        this.checkPrompt.order={};
        this.checkPrompt.state=-1;
    },

    // 1、重新支付
    rePayOrder(e) {
        // 1、初始化 获取用户的钱包额度
        this.getUserInfoHttp();
        this.payFrom.isCanPay = +this.balance >= this.theOrder.pay_price; // 余额是否足够( 支付按钮禁用 )
        this.payFrom.btnTip = this.payFrom.isCanPay?"使用钱包支付":"余额不足";
        // 2、获取子组件数据
        this.orderUid =  e.detail.order.order_uid;
        this.theOrder = e.detail.order;
        // 3、打开支付页面
        this.showPanel("payFrom");
    },

    // 2、去支付中
    toPaying() {
        this.closePanel("payFrom");
        // 1.支付中
        this.payOrderHttp();

    },


    // 网络请求
    // 获取用户信息
    getUserInfoHttp() {
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/user/userinfo",
            {
                method: "GET",
                header: {
                    'Content-Type': "application/json",
                    "Authorization": getApp().data.token
                },
            }, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result)
                if (res.status === 200) {
                    // 全局事件总线
                    this.balance = res.data.balance;
                    // 是否可触发下一步
                    this.payFrom.isCanPay = +this.balance >= this.theOrder.pay_price; // 余额是否足够( 支付按钮禁用 )
                    this.payFrom.btnTip = this.payFrom.isCanPay?"使用钱包支付":"余额不足";
                }
                return
            } else {
                console.info(err)
                return
            }
            httpRequest.destroy();
        }

        )
    },

    // 弹窗
    showPanel(id) {
        this.$element(id).show();
    },
    closePanel(id) {
        this.$element(id).close();
    },


    // 获取订单信息列表
    async getHttpOrdersData() {
        this.isHttpAnim = true;
        const httpRequest = http.createHttp()
        httpRequest.request(
            getApp().data.httpUrl + "/orders/ordersinfo",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "phonenumber": getApp().data.userDetail.phonenumber
                }
            },
            (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result); // 结果
                    if (res.status === 200) {
                        this.ordersList = res.data.reverse()
                    }
                } else {
                    console.log(err);
                }
                this.isHttpAnim = false;
                httpRequest.destroy();
            });
    },

    /**
     * 网络请求
     * **/
    // 支付订单【并更新订单状态(状态码2)和更新用户余额】
    async payOrderHttp() {
        // 支付中
        this.showPanel("paying");
        const httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/orders/pay",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "orderUid": this.orderUid
                }
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        console.info(JSON.stringify(data.result));
                        setTimeout(()=>{
                            this.closePanel("paying");
                            this.showPanel("success");
                        },1000)
                    }else{
                        setTimeout(()=>{
                            this.closePanel("paying");
                        },1200)
                    }
                    setTimeout(()=>{
                        this.getHttpOrdersData();
                    },2800)
                } else {
                    console.log(err);
                    setTimeout(()=>{
                        this.closePanel("paying");
                    },1200)
                }
                setTimeout(()=>{
                    this.closePanel("success");
                },2400)
                httpRequest.destroy();
            });
    },

    // 删除订单 请求
    async deleteHttpOrder(uid) {
        this.isHttpAnim = true;// 开启动画
        const httpRequest = http.createHttp()
        httpRequest.request(
            getApp().data.httpUrl + "/orders/delete",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "orderUid": uid
                }
            },
            (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result); // 结果
                    if (res.status === 200) {
                        prompt.showToast({message:"删除成功！"});
                    }else {
                        prompt.showToast({message:"删除失败！"})
                    }
                } else {
                    prompt.showToast({message:"删除失败！"})
                    console.log(err);
                }
                this.getHttpOrdersData();
                httpRequest.destroy();
            });
    },

    // 更新订单 请求
    async updateHttpOrder(uid,stateCode) {
        this.isHttpAnim = true;// 开启动画
        const httpRequest = http.createHttp()
        httpRequest.request(
            getApp().data.httpUrl + "/orders/update",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "orderState": stateCode,
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "orderUid": uid
                }
            },
            (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result); // 结果
                    if (res.status === 200) {
                        // 更新
                        this.getHttpOrdersData();
                    }
                } else {
                    prompt.showToast({message:"操作失败！"})
                    console.log(err);
                }
                httpRequest.destroy();
            });
    },
    // 返回
    toBack() {
        if(this.isPayPageRouter) {
            router.push({
                uri: "pages/IndexPage/IndexPage",
                params: {
                    token: getApp().data.token
                }
            })
        }else {
            router.back()
        }
    },
}

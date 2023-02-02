import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';

export default {
    data: {
        // shopCarData, allGoodsPrice, shopType, goodsList 来自上一级
        addressList: [], // 地址集合
        nowAddressItem:{
            address: "",
            name: "",
            phone: "",
            default: false
        },

        isEditShopCar: false,
        allGoodsPrice: 0, // 原价
        ShippingFees: 0, // 配送费
        CouponCoupons: 0, // 优惠价
        allPrice: 0,
        orderState: 1, // 1 2 3
        isHttpAnim: true, // 网络请求占位动画开启

        // 关于订单
        orderUid:"", // 订单编号
        balance:"0.00",// 余额
        payFrom:{// 下单
            state:false,
            btnTip:"使用钱包支付",
            isCanPay: true,
        },
        payingFrom:{// 付款
            state:false
        },
        paidFrom:{// 完成
            state:false,
            message:"",
            url:"",
        }
    },
    onInit() {
        // 购买类型
        if (this.shopType === "IN") {
            this.ShippingFees = 0
        } else {
            this.ShippingFees = 8
        }
        this.initData();
    },

    // 初始化数据
    async initData() {
        setTimeout(()=>{router.clear()}, 0);
        await this.getHttpAddress();
        this.balance = getApp().data.userDetail.balance || this.balance;// 初始化钱包
        this.payFrom.isCanPay = +this.balance >= this.allPrice; // 余额是否足够( 支付按钮禁用 )
        this.payFrom.btnTip = this.payFrom.isCanPay?"使用钱包支付":"余额不足";
    },

    // 更改地址
    changeNowAddress(i, item) {
        this.nowAddressItem = item //
        this.closeAddressPanel("addressListPanel");// 关闭弹窗
    },

    // 计算总价
    getFinalPrice() {
        this.allPrice = this.allGoodsPrice + this.ShippingFees + this.CouponCoupons
        return this.allGoodsPrice + this.ShippingFees + this.CouponCoupons
    },

    // 获取用户地址信息
    getHttpAddress() {
        this.isHttpAnimAddress = true; // 开启动画遮挡
        const httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/address/addressinfo",
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
                    if (JSON.parse(data.result).status === 200) {
                        this.addressList = JSON.parse(data.result).data.addressList
                        getApp().data.addressList = JSON.parse(data.result).data.addressList
                        // 初始化首选地址
                        for (let i in this.addressList) {
                            if(this.addressList[i].default){
                                this.nowAddressItem = this.addressList[i]
                            }
                        }
                        return true
                    }
                } else {
                    console.log(err);
                    prompt.showToast({
                        message: "网络错误，请稍后再试"
                    })
                }
                httpRequest.destroy();
                setTimeout(() => {
                    this.isHttpAnimAddress = false;
                }, 200)
            });
    },

    // 返回
    toBack() {
        router.back()
    },

    // 弹窗
    showAddressPanel(id) {
        this.$element(id).show();
    },
    closeAddressPanel(id) {
        this.$element(id).close();
    },

    //** -----------订单请求----------- **//
    // 去支付的显示页面
    async toPay(){
        if(this.nowAddressItem.address!="") {
            // 1、打开下单动画
            await this.showAddressPanel("createOrderLoading");// 下单
            // 2、添加订单请求
            if(!this.isAlreadyOrder) {
                let res = await this.addOrderHttp();
                await this.updateHttpShopCarData();// 清空购物车
            }
            // 3.关闭动画
            await setTimeout(()=>{// 取消下单动画
                this.closeAddressPanel("createOrderLoading");
            },1000)
            // 4、打开支付页面
            await setTimeout(()=>{
                this.showAddressPanel("payFrom");
            },2000)
        }else {
            prompt.showToast({message:"地址不能为空"})
        }
    },

    //取消付款（跳转到订单页面）
    cancelPay() {// 取消后跳转到我的订单页面
        this.toOrderPage();
    },

    // 前往订单页面
    toOrderPage(){
        setTimeout(()=>{
            router.replace({
                uri:"pages/OrdersPage/OrdersPage",
                params:{
                    isPayPageRouter: true
                }
            })
        },300)
    },
    // 去支付中
    toPaying() {
        this.payingFrom.state = true;
        // 1.支付中
        this.payOrderHttp();
    },

    // -----------网络请求----------
    // 获取钱包余额
    getUserBalance() {
        return getApp().data.userDetail.balance
    },

    // 添加订单(未付款)
    async addOrderHttp() {
        const httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/orders/set",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "shopType": this.shopType,
                    "shopAddress": this.nowAddressItem,
                    "shopGoodsList": this.shopCarData.shop_all_goods,
                    "orderPrice": this.allGoodsPrice,
                    "discountPrice": this.CouponCoupons,
                    "payPrice": this.allPrice
                }
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        // 获取订单编号
                        this.orderUid = JSON.parse(data.result).data.orderUid
                        return
                    }
                    return
                } else {
                    console.log(err);
                    return
                }
                httpRequest.destroy();
            });
    },

    // 支付订单【并更新订单状态(状态码2)和更新用户余额】
    async payOrderHttp() {
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
                        this.payingFrom.state = false;
                        this.paidFrom.state = true;
                        this.paidFrom.url = "/common/raw/success_bg.gif"
                        this.paidFrom.message = "支付成功";
                        setTimeout(()=>{
                            this.toOrderPage();
                            this.paidFrom.state = false;
                        },1000)
                    }else if (JSON.parse(data.result).status === 1 ){
                        this.payingFrom.state = false;
                        this.paidFrom.state = true;
                        this.paidFrom.url = "/common/images/error_bg.png"
                        this.paidFrom.message = "余额不足";
                        setTimeout(()=>{
                            this.toOrderPage();
                            this.paidFrom.state = false;
                        },1000)
                    }
                } else {
                    console.log(err);
                    this.payingFrom.state = false;
                    this.paidFrom.state = true;
                    this.paidFrom.url = "/common/images/error_bg.png"
                    this.paidFrom.message = "余额不足";
                    setTimeout(()=>{
                        this.toOrderPage();
                        this.paidFrom.state = false;
                    },1000)
                }
                httpRequest.destroy();
            });
    },

    // 获取用户信息
    getUserInfoHttp() {
        if(!this.userDetail.userToken) return;
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/user/userinfo",
            {
                method: "GET",
                header: {
                    'Content-Type': "application/json",
                    "Authorization": getApp().data.userDetail.token
                },
            }, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result)
                if (res.status === 200) {
                    // 展开数据
                    this.userDetail = {
                        userToken: getApp().data.userDetail.token,
                        ...res.data,
                        password: ""
                    }
                    // 全局事件总线
                    getApp().data.userDetail = this.userDetail
                }
                return
            } else {
                console.info(err)
                return
            }
        }

        )
    },

    // 清空购物车数据
    updateHttpShopCarData() {

        const httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/shopcar/update",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "shop_all_goods": []
                }
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        console.info(JSON.stringify(data.result))
                        getApp().data.shopCarData.data.shop_all_goods = []
                    }
                } else {
                    console.log(err);
                }
                httpRequest.destroy();
            });
    },

}

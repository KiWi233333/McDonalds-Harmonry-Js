import http from '@ohos.net.http';
import router from '@system.router';
import prompt from '@system.prompt';

export default {
    props: ['ordersList', 'order', 'goods_list', 'order_state','isEase'],
    data() {
        return {
            order:{},
            isEase:false,// 评论页是否显示按钮
            // 关于订单
            orderUid: "", // 订单编号
            balance: "10000.00", // 余额
            payFrom: { // 下单
                state: false,
                btnTip: "使用钱包支付",
                isCanPay: true,
            },
            payingFrom: { // 付款
                state: false
            },
            paidFrom: { // 完成
                state: false,
                message: "",
                url: "",
            },
            // 确认框
            checkPrompt: {
                isCheck: false,
            }
        }
    },

    onInit() {
        this.initData();
    },
    // 初始化数据
    initData() {
    },
    // 计算商品件数
    getCountGoods() {
        let sum = 0;
        for (let i = 0; i < this.goods_list.length; i++) {
            if (this.goods_list[i]) {
                sum += +this.goods_list[i].sum;
            }
        }
        return sum;
    },

    //
    toOrderDetailPage() {
        router.push({
            uri:"pages/OrderDetailPage/OrderDetailPage",
            params:{
                order: this.order,
            }
        })
    },

    // 1、去支付
    toPay() {
        this.$emit("rePayOrder", {
            order: this.order
        })
    },

    // 2、取消订单
    cancelOrder() {
        this.$emit("changeCheckPrompt", {
            order: this.order,
            state: 5,
        })
    },

    // 3、删除订单
    deleteOrder() {
        this.$emit("changeCheckPrompt", {
            order: this.order,
            state: 0, // 删除
        })
    },

    // 4、确认订单
    sureOrder() {
        this.$emit("changeCheckPrompt", {
            order: this.order,
            state: 4
        })
    },

    // 5、评论订单
    toComment() {
        router.push({
            uri:"pages/CommentPage/CommentPage",
            params:{
                order: this.order,
            }
        })
    },

    // 6、重新下单
    retoOrder() {
        // 更新购物车数据this.order.goods_list
        getApp().data.shopCarData.data.shop_all_goods = this.order.goods_list;
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
                    "shop_all_goods": this.order.goods_list
                }
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        console.info("更新购物车成功");
                        router.push({
                            uri: "pages/ShopPage/ShopPage",
                            params: {
                                activesList: getApp().data.activesList,// 传入轮播图数据
                                shopType: this.order.shop_type
                            }
                        })
                    }
                } else {
                    console.log(err);
                    prompt.showToast({
                        message: "网络错误，请稍后再试"
                    })
                }
                httpRequest.destroy();
            });
    },
}

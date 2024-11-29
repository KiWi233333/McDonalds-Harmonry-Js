import router from '@system.router';
import http from '@ohos.net.http';
import prompt from '@system.prompt';


export default {
    data: {
        appData: {},
        goodsList: [],
        shopCar: { // 购物车栏样式
            shopInfo: "未选购餐品",
            shopInfoTrue: "总价",
            color: "#ffacacac",
            colorActive: "#fff",
            bgColor: "#cc7c7c7c",
            bgColorActive: "#fcb90e",
        },

        goods: {
            sum: 0,
            index: 0,
        },
        shopCarData: {
            goodsAllSum: 0, // 商品总数量
            phonenumber: "",
            shop_all_goods: [] //'[{"item":"{}","sum":"10",'allPrice':"20.0"}
        }, // 存储购物车信息
        allGoodsPrice: 0,
        detailData: {},
        userDetail: {}, // 用户的信息
        dialogAnimate: "paused",
        addressLank: "",
        token:"",
        sortList: [
            {
                title: "汉堡/牛肉堡", img: "burger_menu.png", sortId: "101011"
            },
            {
                title: "正餐", img: "burger_menu2.png", sortId: "202001"
            },
            {
                title: "饮料", img: "burger_menu3.png", sortId: "303001"
            },
            {
                title: "小食", img: "burger_menu4.png", sortId: "404001"
            },
            {
                title: "甜点", img: "burger_menu5.png", sortId: "505001"
            },
        ],
        sortIndex: "",
        isShopCar: false,
        isHttpAnim:true,// 请求动画遮罩
    },
    onInit() {
        this.initData(); // 初始化
        this.getGoodsList(); // 获取商品信息
    },
    // 初始化数据
    initData() {
        this.token = getApp().data.token; // 获取token
        this.userDetail = getApp().data.userDetail // 获取用户信息
        if(this.token!="") this.getHttpShopCarData();//

    },


    // 获取商品列表
    getGoodsList() {
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/api/goodsinfo",
            {
                method: 'GET'
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        this.goodsList = JSON.parse(data.result).data.goodsList
                    }
                } else {
                    console.log(err);
                    prompt.showToast({
                        message: "网络错误，请稍后再试"
                    })
                }
                httpRequest.destroy();
                setTimeout(()=>{
                    this.isHttpAnim = false;
                },100)
            });
    },

    // 监听子组件对副属性的改变 detail 存储形参
    changeShopCar(e) {
        if (e.detail) {
            this.shopCarData.goodsAllSum += e.detail.num;
            this.shopCarData.shop_all_goods = e.detail.shop_all_goods;
            this.allGoodsPrice += e.detail.allPrice;
        }
        // 保存服务器
        this.updateHttpShopCarData();
    },

    // 更新购物车数据
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
                    "shop_all_goods": getApp().data.shopCarData.data.shop_all_goods
                }
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        console.info(JSON.stringify(data.result))
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
    // 获取购物车数据
    getHttpShopCarData() {
        const httpRequest = http.createHttp()
        httpRequest.request(
            getApp().data.httpUrl + "/shopcar/shopcarinfo",
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
                        // 将获取的购物车信息加载到app.js
                        this.shopCarData.shop_all_goods = getApp().data.shopCarData.data.shop_all_goods = JSON.parse(data.result).data
                        this.shopCarData.phonenumber = getApp().data.shopCarData.data.phonenumber = getApp().data.userDetail.phonenumber
                        // 初始化总数量
                        let goodsAllSum = 0;
                        let goodsAllPrice = 0;
                        this.shopCarData.shop_all_goods.forEach(p => {
                            if (p !== null && p.sum>0) {
                                goodsAllSum += +p.sum
                                goodsAllPrice += parseInt(p.allPrice)
                            }
                        })
                        this.shopCarData.goodsAllSum = +goodsAllSum
                        this.allGoodsPrice = +goodsAllPrice
                    }

                } else {
                    console.log(err);
                }
                httpRequest.destroy();
            });
    },

    // 打开购物车详情
    showShopCarDialog() {
        this.$element('shopCarDialog').show();
        this.isHttpAnim = this.isShopCar = true;
        this.getHttpShopCarData();
    },
    // 关闭购物车详情
    closeShopCarDialog() {
        this.$element('shopCarDialog').close();
        this.isHttpAnim = this.isShopCar = false;
        this.getHttpShopCarData();
    },

    // 当前时间
    timeDotCom() {
        let timeDot = "";
        let nowTime = new Date();
        if (nowTime.getHours() >= 6 && nowTime.getHours() < 12) {
            timeDot = "上午";
        } else if (nowTime.getHours() == 12) {
            timeDot = "中午";
        } else if (nowTime.getHours() > 12 && nowTime.getHours() < 18) {
            timeDot = "下午";
        } else if (nowTime.getHours() >= 18) {
            timeDot = "晚上";
        } else {
            timeDot = "清晨";
        }
        return timeDot
    },

    // 打开详情
    showDetailPanel(e) {
        this.$element('popupPanel').show()
        if(e.detail){
            this.detailData = e.detail.item
            this.goods.index = e.detail.index
        }
    },

    // 关闭详情
    closeDetailPanel() {
        this.$element('popupPanel').close()
    },

    // 导航栏跳转
    scrollToPage(value) {
        let i = 0
        if (value == this.sortList[0].sortId) {
            i = 0
        }
        if (value == this.sortList[1].sortId) {
            i = 9
        }
        if (value == this.sortList[2].sortId) {
            i = 13
        }
        if (value == this.sortList[3].sortId) {
            i = 18
        }
        if (value == this.sortList[4].sortId) {
            i = 22
        }
        this.$element("centerRightGoods").scrollTo({
            index: i,
            timingFunction: 'ease-in',
            smooth: true
        })
    },

    // 去结算
    toPayPage() {
        if(this.allGoodsPrice>0 && getApp().data.token!=="") {
            router.push({
                uri:"pages/PayPage/PayPage",
                params:{
                    shopCarData:this.shopCarData,
                    allGoodsPrice:this.allGoodsPrice,
                    shopType:this.shopType,
                    goodsList:this.goodsList,
                }
            })
        }
    },

    // 去卡包
    toCarPackPage() {
        router.push({
            uri:"pages/CardPackPage/CardPackPage"
        })
    },
    // 返回
    toBack() {
        router.back()
    },
}

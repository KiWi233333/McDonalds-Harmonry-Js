import window from '@ohos.window';

export default {
    data: {
        httpUrl: "http://180.76.240.170:3000",// 请求前缀
        imageUrl: "https://www.kiwi2333.top/wp-content/gallery", // 默认图库前缀 XXX
        selectImgUrl:["/kiwishop","/swiper","/goods"],// 图库的分库 XXX
        // 活动轮播图
        activesList: [],

        // 用户基本信息
        token: "",// 用户token
        userInfo: "",// 登录信息
        userDetail: {},// 用户详细信息

        // 购物车信息
        allSum:0,// 总数
        shopCarData:{ // 购物车信息
            allSum:0,// 总数
            data: {
                goodsAllSum: 0, // 商品总数量
                phonenumber: "",// 用户信息
                shop_all_goods: [] //'[{"good_id":"101014","sum":"10"}
            },
        },

        // 用户地址信息
        addressList:[],
    },
    onCreate() {
        this.setWindowFull();
        if(this.userDetail) this.shopCarData.data.phonenumber = this.userDetail.phonenumber; // 用户手机号发送购物车
    },
    onDestroy() {
        console.info('AceApplication onDestroy');
    },

    // 设置沉浸式屏幕
    async setWindowFull() {
        try {
            const win = await window.getTopWindow()
            await win.setFullScreen(true)
        } catch (err) {
            console.log(`setFullScreen fail, code = ${err.code}`)
        }
    }
};
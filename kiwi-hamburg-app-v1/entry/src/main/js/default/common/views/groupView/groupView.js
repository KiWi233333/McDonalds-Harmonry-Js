import prompt from '@system.prompt';
import http from '@ohos.net.http';
import router from '@system.router';

export default {
    props: ['token'],
    data() {
        return {
            userDetail: {
            },
            balance:"0.0",
            nickName:"堡堡",
            goodsList: [], // 商品列表
            activesList: [], // 活动列表
            isHttpAnim: true,
            isHttpAnim2: true,
            // 评分栏目
            commentFrom: {
                ratings: 0,
                msg: ""
            },
            commentsList: [], // 评论列表
        }
    },
    // 初始化
    onInit() {
        // 公共数据获取
        this.initData();
        this.getUserDetail(); // 个人信息
        this.getGoodsList(); // 商品信息
        this.getActivesList(); // 活动信息
        this.getHttpComments(); // 评论信息
    },
    // 公共数据获取
    initData() {
        this.token = getApp().data.token
    },

    // 外卖选购跳转 OUT
    toShopPage(type) {
        router.push({
            uri: "pages/ShopPage/ShopPage",
            params: {
                activesList: this.activesList, // 传入轮播图数据
                shopType: type
            }
        })
    },

    // 钱包跳转
    toBalancePage() {
        if(getApp().data.token!=="") {
            router.push({
                uri: "pages/BalancePage/BalancePage"
            })
        }else {
            router.push({
                uri: "pages/LoginPage/LoginPage"
            })
        }
    },

    // 卡包跳转
    toCardPackPage() {
        if(getApp().data.token!=="") {
            router.push({
                uri: "pages/CardPackPage/CardPackPage"
            })
        }else {
            router.push({
                uri: "pages/LoginPage/LoginPage"
            })
        }
    },

    // 活动跳转
    toActivesPage(id) {
        let shopType = "IN";
        router.push({
            uri: "pages/ShopPage/ShopPage",
            params: {
                activesList: this.activesList,
                shopType,
                shopTypeText: "",
                goodId: id
            }
        })
    },


    // 获取活动信息
    getActivesList() {
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/api/activesinfo",
            {
                method: 'GET',
                header: {
                    'content-Type': "application/x-www-form-urlencoded "
                }
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) this.activesList = JSON.parse(data.result).data.swiperList // 获取数据
                } else {
                    console.info(err);
                }
                setTimeout(() => {
                    this.isHttpAnim = false;
                }, 300)
                httpRequest.destroy();
            });
    },


    // 评论请求(排序) 热门
    getHttpComments() {
        this.isHttpAnim2 = true;
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/api/commentsinfo?orderBy=desc&limit=10",
            {
                method: 'GET'
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        this.commentsList = JSON.parse(data.result).data.commentsList
                    }
                } else {
                    console.log(err);
                    prompt.showToast({
                        message: "网络错误，请稍后再试"
                    })
                }
                setTimeout(() => {
                    this.isHttpAnim2 = false;
                }, 300)
                httpRequest.destroy();
            });
    },

    // 获取商品列表
    getGoodsList() {
        this.isHttpAnim = true;
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
                setTimeout(() => {
                    this.isHttpAnim = false;
                }, 300)
                httpRequest.destroy();
            });
    },

    // 获取用户个人信息
    getUserDetail() {
        if (this.token === "") return;
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/user/userinfo",
            {
                method: "GET",
                header: {
                    'Content-Type': "application/json",
                    "Authorization": this.token
                },
            }, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result)
                if (res.status === 200) {
                    // 展开数据
                    this.userDetail = {
                        userToken: this.token,
                        ...res.data,
                        password: ""
                    }
                    this.balance = this.userDetail.balance
                    this.nickName = this.userDetail.nickName
                    // 全局事件总线
                    getApp().data.userDetail = this.userDetail
                }
            } else {
                console.info(err)
            }
            httpRequest.destroy();
        }

        )
    },

    // 根据当前时间计算时间段
    computed: {
        // 计算当前上下午
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
        }
    },
}
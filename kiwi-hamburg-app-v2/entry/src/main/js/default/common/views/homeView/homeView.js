import http from '@ohos.net.http';
import router from '@system.router';

export default {
    data() {
        return {
            imageUrl: "",
            selectImgUrl: "",
            userDetail: {},
            nickName: "",
            isHomeVideoPlay: false,
            activesList: [],
            sortCars: [
                {
                    sort: "汉堡站", title: "汉堡多肉", bg: "/common/images/burger-baner.png", sortId: "10"
                },
                {
                    sort: "甜品站", title: "补充能量", bg: "/common/images/ice_screm.png"
                },
                {
                    sort: "卡卷", title: "优惠更多", bg: "/common/images/coupons_car.png"
                },
            ],
        }
    },
    // 初始化
    onInit() {
        // 公共数据获取
        this.initData()
        this.getActivesList();

    },
    onReady() {
        console.log(2)
        this.getActivesList();
    },
    // 获取相应图像连接

    // 外卖选购跳转 OUT
    // 到店选购跳转 IN
    toShopPage(type) {
        router.push({
            uri: "pages/ShopPage/ShopPage",
            params: {
                activesList: this.activesList, // 传入轮播图数据
                shopType: type
            }
        })
    },
    // 卡包跳转
    toCardPackPage() {
        router.push({
            uri: "pages/CardPackPage/CardPackPage"
        })
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

    // initData
    initData() {
        this.imageUrl = getApp().data.imageUrl;
        this.selectImgUrl = getApp().data.selectImgUrl;
        this.userDetail = getApp().data.userDetail; // 获取用户数据
        this.nickName = getApp().data.userDetail.nickName
    },

    getImgUrl(i, value) {
        // return this.imageUrl + this.selectImgUrl[i] + "/" + value
        return this.imageUrl + "/" + value
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
                console.log("2333", err)
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        this.activesList = JSON.parse(data.result).data.swiperList // 获取数据
                        getApp().data.activesList = this.activesList
                    }
                } else {
                    httpRequest.destroy();
                }
            });
    },

    // 视频播放状态 遮罩层
    isPlayImgNone() {
        setTimeout(() => {
            this.isHomeVideoPlay = true;
        }, 500)
    },
    isPauseImgNone() {
        this.isHomeVideoPlay = false;
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
import storage from '@system.storage';
import router from '@system.router';

export default {
    data: {
        isAutoLogin: true,
        isActive: 0,
        token:"",// 来自loginPage
        menu: [
            {title: "首页", icon: "/common/icon/home_icon.png", onIcon: "/common/icon/onHome_icon.png"},
            {title: "社区", icon: "/common/icon/group_icon.png", onIcon: "/common/icon/onGroup_icon.png"},
            {title: "订单", icon: "/common/icon/order_icon.png", onIcon: "/common/icon/onOrder_icon.png"},
            {title: "我的", icon: "/common/icon/my_icon.png", onIcon: "/common/icon/onMy_icon.png"},
        ],
        userDetail: {
            userToken: "",
        },
        userDetails:{}
    },
    onInit() {
        if(this.token!=="")this.isAutoLogin = false
        this.getAutoLoginInfo(); // 验证自动登录 获取密码
        router.clear();
    },

    // 自动登录则获取
    getAutoLoginInfo() {
        storage.get({
            key: "token",
            default: "",
            success: (data) => {
                if (data !== "") {
                    let res = JSON.parse(data);
                    this.userDetail.userToken = res
                    this.token = res
                    getApp().data.token = res
                }
                this.isAutoLogin = false
            },
            fail: (data, code) => {
                this.isAutoLogin = false
            }
        })
    },

    // 登录后
    selectNav(i) {
        this.isActive = i;
    },
    // 导航栏变化
    guideNavChange(e) {
        this.selectNav(e.index);
    },

    // 退出登录
    exitLoginState() {
        this.isAutoLogin = true;
        setTimeout(()=>{
            this.isAutoLogin = false;
        },10)
    }

}

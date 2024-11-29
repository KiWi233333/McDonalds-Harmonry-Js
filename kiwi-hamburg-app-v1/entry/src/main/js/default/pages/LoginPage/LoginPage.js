import router from '@system.router';
import prompt from '@system.prompt';
import http from '@ohos.net.http';
import storage from '@system.storage';

export default {
    data: {
        isHttpAnim: false,
        loginState: {
            loadGif: "/common/raw/re_loading_bg.gif",
            msg: "登录中"
        },
        httpUrl: "",
        // 正则前端验证
        reg_phone: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
        reg_email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        // 用户信息
        userInfo: {
            user: "",
            password: "",
            token: "",
            saveCheck: false,
            autoCheck: false,
        },
        // 添加用户信息
        addUserInfo: {
            phone: "", // 1
            password: "", // 2
            password2: "",
            email: "" // 3
        },
        // 默认头像
        defaultUserPic: [
            "/kiwishop/default_pic5.png",
            "/kiwishop/default_pic4.png",
            "/kiwishop/default_pic3.png",
            "/kiwishop/default_pic2.png",
            "/kiwishop/default_pic.png",
        ],

        toast: {
            phoneOrEmail: "",
            phone: "",
            email: "",
            password: "",
            checkPassword: "",
        },
        timer: "",
    },
    onInit() {
        this.httpUrl = getApp().data.httpUrl; // 获取请求前链接
        this.getHistoryLoginInfo(); // 获取本地存储
    },
    /**
     * @登录首页
    *  1）登录 前后端验证
     * 2）记住密码
     * 3）自动登录
     * **/
    toIndex() {
        if (this.userInfo.user == "" || this.userInfo.password == "") {
            return
        }
        let httpRequest = http.createHttp()
        httpRequest.request(
            this.httpUrl + "/api/login",
            {
                method: "POST",
                header: {
                    'Content-Type': 'application/json'
                },
                extraData: {
                    "phonenumber": this.userInfo.user,
                    "password": this.userInfo.password,
                    "email": this.userInfo.user
                }
            },
            (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result)
                    if (res.status === 200) {
                        this.userInfo.token = res.token;
                        // 自动登录 和 记住密码
                        if (this.userInfo.saveCheck) {
                            storage.set({
                                key: "loginInfo",
                                value: JSON.stringify(this.userInfo),
                                success: () => {
                                    console.log("保存成功!")
                                },
                                fail: () => {
                                    console.log("失败!")
                                }
                            })
                        }
                        if (this.userInfo.autoCheck) {
                            storage.set({
                                key: "token",
                                value: JSON.stringify(this.userInfo.token),
                                success: () => {
                                    console.log("保存成功!")
                                },
                                fail: () => {
                                    console.log("失败!")
                                }
                            })
                        }
                        // 去登录
                        this.toIndexByToken();
                    } else {
                        this.loginState.msg = "账号密码不正确"
                        this.loginState.loadGif = "/common/raw/fail_bg.gif"
                        this.isHttpAnim = true;
                        setTimeout(() => {
                            this.isHttpAnim = false
                        }, 1000)
                    }
                } else {
                    this.loginState.msg = "账号密码不正确"
                    this.loginState.loadGif = "/common/raw/fail_bg.gif"
                    this.isHttpAnim = true
                    setTimeout(() => {
                        this.isHttpAnim = false
                    }, 1000)
                }
                httpRequest.destroy();
            }
        )
    },

    // 自动登录
    autoLogin(e) {
        this.userInfo.autoCheck = e.checked;
        if (e.checked) {
            this.userInfo.saveCheck = e.checked
        }
    },

    /**
     * @注册页 前端验证
     * **/
    // 前往注册 属性监听
    toAddUserFrom(i) {
        this.$element("swiperBox").swipeTo({
            index: i
        })
    },

    /**
     * @注册用户
    * **/
    addUserHttp() {
        // 随机头像
        let UserPic = getApp().data.imageUrl + this.defaultUserPic[Math.floor(Math.random() * this.defaultUserPic.length)]; // 随机头像
        // 注册
        let httpRequest = http.createHttp()
        httpRequest.request(
            this.httpUrl + '/api/reguser',
            {
                method: "POST",
                header: {
                    'Content-Type': 'application/json'
                },
                extraData: {
                    "userName": this.addUserInfo.phone,
                    "password": this.addUserInfo.password,
                    "nickName": "BaoBo",
                    "email": this.addUserInfo.email,
                    "phonenumber": this.addUserInfo.phone,
                    "avatar": UserPic, // 初始随机头像
                    "balance": "200.0"
                }
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        prompt.showToast({
                            message: "注册成功！即将返回登录页面",
                        })
                        // this.addHttpShopCarInit() // 注册用户购物车
                        clearTimeout(this.timer);
                        this.timer = setTimeout(() => {
                            this.toAddUserFrom(0);
                            this.userInfo.user = this.addUserInfo.phone
                            this.userInfo.password = ""
                        }, 1000)
                    }else {
                        prompt.showToast({
                            message: "该手机号或邮箱已经被注册!",
                            duration: 1000
                        })
                    }
                } else {
                    prompt.showToast({
                        message: "注册失败!",
                        duration: 1000
                    })
                }
                httpRequest.destroy();
            }
        )
    },

//    // 为用户初始化购物车信息
//    addHttpShopCarInit() {
//        const httpRequest = http.createHttp()
//        httpRequest.request(
//            this.httpUrl + '/shopcar/set',
//            {
//                method: "POST",
//                header: {
//                    'Content-Type': 'application/json',
//                    'Authorization': this.userInfo.token
//                },
//                extraData: {
//                    "phonenumber": this.userInfo.user,
//                    "shop_all_goods": []
//                }
//            },
//            (err, data) => {
//                if (!err && JSON.parse(data.result).status === 200) {
//                    console.info("为用户初始化购物车信息成功")
//                } else {
//                    console.info("为用户初始化购物车信息失败或则重复")
//                }
//            })
//    },

    // 获取本地登录信息
    getHistoryLoginInfo() {
        storage.get({
            key: "loginInfo",
            default: "",
            success: (data) => {
                if (data !== "") {
                    // 浅拷贝
                    let res = JSON.parse(data);
                    this.userInfo.user = res.user;
                    this.userInfo.password = res.password;
                    this.userInfo.saveCheck = res.saveCheck;
                    this.userInfo.autoCheck = res.autoCheck;
                    this.userInfo.token = res.token;
                }
                this.autoLoginCallBack(); // 自动登录
            },
            fail: (data, code) => {
                prompt.showToast({
                    message: "获取失败!"
                })
            }
        })
    },

    // 自动登录
    autoLoginCallBack() {

        // 定时自动登录2s 第二次进入则停止自动登录
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            if (this.userInfo.token !== "" && this.userInfo.autoCheck) {
                this.toIndexByToken()
            }
        }, 2000);
    },

    // 登录并携带userinfo的token
    toIndexByToken() {
        this.loginState.msg = "登陆成功"
        this.loginState.loadGif = "/common/raw/success_bg.gif"
        this.isHttpAnim = true
        getApp().data.token = this.userInfo.token
        setTimeout(() => {
            this.isHttpAnim = false;
            clearTimeout(this.timer)
            router.push({
                uri: "pages/IndexPage/IndexPage",
                params: {
                    token: this.userInfo.token
                }
            })
        }, 1200)
    },

    changePhone(e) {
        this.addUserInfo.phone = e.value
        // 手机
        if (!this.reg_phone.test(e.value.trim())) {
            this.toast.phone = "手机号格式错误！"
        } else {
            this.toast.phone = ""
        }
    },
    changePwd(e) {
        this.addUserInfo.password = e.value
        if (this.addUserInfo.password.length >= 6 && this.addUserInfo.password.length <= 20) {
            this.toast.password = ""
        } else {
            this.toast.password = "密码长度6-20字符"
        }
    },
    changePwd2(e) {
        this.addUserInfo.password2 = e.value
        if (this.addUserInfo.password === this.addUserInfo.password2) {
            this.toast.checkPassword = ""
        } else {
            this.toast.checkPassword = "两次密码不一致"
        }
    },
    changeEmail(e) {
        this.addUserInfo.email = e.value;
        // 邮箱
        if (e.value !== "") {
            if (!this.reg_email.test(e.value.trim())) {
                this.toast.email = "邮箱格式错误！";
            } else {
                this.toast.email = "";
            }
        } else {
            this.toast.email = "";
        }
    },

    // 手机邮箱后校验
    changeLoginUser(e) {
        if (e.value.trim() != "") {
            this.userInfo.user = e.value;
            // 手机邮箱
            if (!this.reg_phone.test(e.value.trim()) || !this.reg_email.test(e.value.trim())) {

                // 邮箱
                if (!this.reg_email.test(e.value.trim())) {
                    this.toast.phoneOrEmail = "邮箱格式错误！";
                } else {
                    this.toast.phoneOrEmail = "";
                    return;
                }
                // 手机
                if (!this.reg_phone.test(e.value.trim())) {
                    this.toast.phoneOrEmail = "手机号格式错误！"
                    return;
                } else {
                    this.toast.phoneOrEmail = ""
                    return;
                }
                // 验证完成执行

            } else {
                this.toast.phoneOrEmail = ""
            }

        }
    },
    changeLoginPwd(e) {
        this.userInfo.password = e.value;
    },

    // 自动登录
    saveInfo(e) {
        this.userInfo.saveCheck = e.checked;
    },
}

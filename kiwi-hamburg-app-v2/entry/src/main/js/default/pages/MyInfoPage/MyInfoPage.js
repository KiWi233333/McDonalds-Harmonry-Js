import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';
import storage from '@system.storage';

export default {
    data: {
        isDisable: true,
         userDetail: {},// 上一级的用户数据
        password: '',
        password1: "",
        password2: "",
        userInfo: {}, // 登录的信息
        // 错误信息
        toast: {
            phoneOrEmail: "",
            phone: "",
            email: "",
            password: "",
            password1: "",
            checkPassword: "",
        }
    },
    // 初始化
    onInit() {
        storage.get({
            key: "loginInfo",
            default: "",
            success: (data) => {
                if (data !== "") {
                    this.userInfo = JSON.parse(data);
                }
            },
            fail: (data, status) => {
                console.info("获取登录信息失败!")
            }
        })
    },
    // 提交修改按钮事件
    submitBtn(e) {
        // 前端验证 错误集
        e.disable = true
        let err = ""
        for (let i in this.toast) {
            err += this.toast[i].trim();
        }
        // 若旧密码 和 规则符合 则发起修改密码 和 修改信息 请求
        if (this.userDetail.userToken !== "" && this.password1 != "" && this.password !== "" && err === "") {
            //  修改密码
            this.updateUserPwd(e);
            //  修改基本信息
            this.updateUserInfo();
        }
    },
    // 1）修改密码请求
    updateUserPwd(e) {
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/user/set/userpwd",
            {
                method: 'POST',
                header: {
                    'Content-Type': "application/json",
                    "Authorization": this.userDetail.userToken
                },
                extraData: {
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "oldPassword": this.password,
                    "newPassword": this.password2
                }
            }, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result)
                if (res.status === 200) {
                    console.info("密码修改成功")
                    e.disable = false;
                    return
                } else {
                    this.toast.password = "旧密码不正确";
                    return
                }

            } else {
                console.info(err)
                return
            }
        })
    },
    // 2）修改普通信息
    updateUserInfo() {
        let httpRequest2 = http.createHttp();
        httpRequest2.request(
            getApp().data.httpUrl + "/user/set/userinfo",
            {
                method: "POST",
                header: {
                    'Content-Type': "application/json",
                    "Authorization": this.userDetail.userToken
                },
                extraData: {
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "email": this.userDetail.email,
                    "nickName": this.userDetail.nickName,
                    "avatar": this.userDetail.avatar
                },
            }, (err, data) => {
            if (!err) {
                let res = JSON.parse(data.result)
                if (res.status === 200) {
                    prompt.showToast({
                        message: "修改信息成功！请重新登陆",
                    })
                    this.reLogin()
                } else {
                    prompt.showToast({
                        message: "邮箱已存在有人注册！",
                    })
                    return
                }
            } else {
                prompt.showToast({
                    message: "修改失败！",
                })
                console.info(err)
                return
            }
        })
    },
    // 3）退出登录
    exitLoginState() {
        getApp().data.userDetail = {}
        storage.delete({
            key: "loginInfo",
            success: () => {
                console.log("删除成功!")
            },
            fail: () => {
                console.log("删除失败!")
            }
        })

    },
    // 4）重新登陆
    reLogin() {
        setTimeout(() => {
            // 回到登录
            this.exitLoginState();
            router.clear();
            router.replace({
                uri: "pages/LoginPage/LoginPage"
            })
        }, 1500)
    },

    // 响应式表单
    changeNckName(e) {
        this.userDetail.nickName = e.value
    },
    changePhone(e) {
        this.userDetail.phonenumber = e.value
        // 手机
        if (!this.reg_phone.test(e.value.trim())) {
            this.toast.phone = "手机号格式错误！"
        } else {
            this.toast.phone = ""
        }
    },
    changePwd(e) {
        this.password = e.value
        if (this.password.length >= 6 && this.password.length <= 20) {
            this.toast.password = ""
            if (this.userInfo.password !== this.password) {
                this.toast.password = "旧密码不正确"
            }
        } else {
            this.toast.password = "密码长度6-20字符"
        }
    },
    changePwd1(e) {
        this.password1 = e.value
        if (this.password1.length >= 6 && this.password1.length <= 20) {
            this.toast.password1 = ""
            if (this.password1 == this.password) {
                this.toast.password1 = "新旧密码相同！"
            }
        } else {
            this.toast.password1 = "密码长度6-20字符"
        }
    },
    changePwd2(e) {
        this.password2 = e.value
        if (this.password1 === this.password2) {
            this.toast.checkPassword = ""
        } else {
            this.toast.checkPassword = "两次密码不一致"
        }
    },
    changeEmail(e) {
        this.userDetail.email = e.value;
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

    // 返回上一级
    toBackRouter() {
        router.back()
    },
    // 打开编辑模式
    openEditOC() {
        this.isDisable = false
    }
}

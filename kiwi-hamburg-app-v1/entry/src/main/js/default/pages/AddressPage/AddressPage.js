import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';

export default {
    data: {
        // 正则 姓名
        name: /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/,

        isHttpAnim: true, // 网络请求占位动画开启
        addressList: [], // 用户地址信息列表
        fromData:{ // 表单信息
            address:"",
            name:"",
            phone:"",
            default:false
        },
        nowIndex:-1,// 点击的项目下标
        isFromEdit: false,// 是否编辑
        isUpdateEdit:false,// 是否更新表单
        isShowDeleteFrom: false, // 是否删除
    },
    onInit() {
        this.getHttpAddress(); // 获取用户地址信息
    },


    // 添加新地址
    addAddressItem() {
        if(this.isFromEdit) {
            let items = JSON.parse(JSON.stringify(this.fromData))
            if(this.fromData.default) {// 全部取消默认地址
                for (let p of this.addressList) {
                    p.default = false
                }
            }
            if(this.isUpdateEdit) { //1）修改时保存
                this.addressList[this.nowIndex] = items
            }else { // 2）添加时保存
                this.addressList.push(this.fromData);
            }
            // 异步更新
            this.updateHttpAddress();
        }
    },

    // 删除地址
    deleteAddressItem() {
        let obj = this.addressList[this.nowIndex]
        // 判断数据是否一致
        if(obj.name===this.fromData.name && obj.address===this.fromData.address && obj.phone===this.fromData.phone) {
            this.addressList.splice(this.nowIndex, 1);

        }
        // 异步更新
        this.updateHttpAddress();
    },

    // 显示/隐藏 dialog面板
    showAddressFrom() {
        this.isCheckNull();
        this.isFromEdit = true

        this.isUpdateEdit = false;
        this.$element("addressFrom").show();
    },
    showUpdateAddressFrom(index, item) {
        this.isCheckNull();
        this.isFromEdit = true

        this.isUpdateEdit = true;
        // 不为空则覆盖原来的
        this.nowIndex = index;
        this.fromData = JSON.parse(JSON.stringify(item));
        this.$element("addressFrom").show();
    },

    // 关闭表单
    closeAddressFromPanel() {
        this.$element("addressFrom").close();
    },
    closeAddressFrom() {
        // 初始化
        this.nowIndex = -1
        this.fromData = { // 表单信息
            address:"",
            name:"",
            phone:"",
            default:false
        },
        this.isFromEdit = false;
        this.isUpdateEdit = false;
        this.closeAddressFromPanel();
        this.getHttpAddress();
    },

    // 获取用户地址信息
    getHttpAddress() {
        this.isHttpAnim = true;// 开启动画遮挡
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
                setTimeout(()=>{
                    this.isHttpAnim = false;
                },200)
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        this.addressList = JSON.parse(data.result).data.addressList
                        getApp().data.addressList = JSON.parse(data.result).data.addressList
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

    // 更新用户的地址信息
    updateHttpAddress() {
        this.isHttpAnim = true;// 开启动画遮挡
        const httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/address/update",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "addressList": this.addressList
                }
            },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        this.addressList = JSON.parse(data.result).data.addressList
                        getApp().data.addressList = JSON.parse(data.result).data.addressList
                    }
                } else {
                    console.log(err);
                }
                httpRequest.destroy();
                // 关闭并刷新
                this.closeAddressFrom(); // 关闭表单框
            });
    },

    // 监听表单值的改变
    changeAddress(e){
        this.fromData.address = e.value.trim();
        this.isCheckNull();
    },
    changeName(e){
        this.fromData.name = e.value.trim()
        this.isCheckNull();
    },
    changePhone(e){
        this.fromData.phone = e.value.trim()
        this.isCheckNull();
    },
    changeDefault(e){
        this.fromData.default = e.checked
        this.isCheckNull();
    },
    // 检查是否为空
    isCheckNull() {
        this.isFromEdit = (this.fromData.phone!=="" && this.fromData.name!=="" && this.fromData.address!=="")
    },

    // 返回
    toBack() {
        router.back()
    },

}


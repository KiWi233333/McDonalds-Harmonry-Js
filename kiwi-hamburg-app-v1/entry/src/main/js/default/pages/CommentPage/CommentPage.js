import http from '@ohos.net.http';
import prompt from '@system.prompt';
import router from '@system.router';

export default {
    data: {
        order: {},
        commentFrom: {
            ratings: 0,
            content: "",
        }

    },
    onInit() {
    },

    // 提交评论
    async sureComment() {
        // 不为空
        if(this.commentFrom.ratings <= 0 || this.commentFrom.content === "") return prompt.showToast({message:"评分、内容不能为空！"})

        await this.updateHttpOrder(this.order.order_uid, 6);
        await this.order.goods_list.forEach(p =>{
            if(p) this.addHttpComment(p.item.good_id, this.commentFrom.content, this.commentFrom.ratings);
        })
    },

    // 改变星级
    changeRating(data) {
        this.commentFrom.ratings = data.rating;
    },

    // 评分程度
    computeRating() {
        let res = ""
        if (this.commentFrom.ratings <= 1) {
            res = "非常差"
        } else if (this.commentFrom.ratings > 1 && this.commentFrom.ratings <= 2) {
            res = "差"
        } else if (this.commentFrom.ratings >2 && this.commentFrom.ratings <= 3) {
            res = "一般"
        } else if (this.commentFrom.ratings >3 && this.commentFrom.ratings <= 4) {
            res = "满意"
        } else {
            res = "非常满意"
        }
        return res
    },
    // 内容
    changeContent(e) {
        this.commentFrom.content = e.value;
    },


    // 添加评论请求
    async addHttpComment(goodId, content, ratings) {
        const httpRequest = http.createHttp()
        httpRequest.request(
            getApp().data.httpUrl + "/comments/set",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "goodId": goodId,
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "nickName": getApp().data.userDetail.nickName,
                    "avatar": getApp().data.userDetail.avatar,
                    "content":  content,
                    "rate": ratings
                }
            },
            (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result); // 结果
                    if (res.status === 200) {
                        // 更新
                        prompt.showToast({message:"评论成功！"})
                        setTimeout(()=>{
                            router.replace({
                                uri:"pages/OrdersPage/OrdersPage",
                                params:{
                                    isPayPageRouter: true
                                }
                            })
                        },400)
                    }
                } else {
                    prompt.showToast({message:"评论失败！"})
                    console.log(err);
                }
                httpRequest.destroy();
            });
    },

    // 更新订单 请求
    async updateHttpOrder(uid,stateCode) {
        const httpRequest = http.createHttp()
        httpRequest.request(
            getApp().data.httpUrl + "/orders/update",
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json',
                    'Authorization': getApp().data.token
                },
                extraData: {
                    "orderState": stateCode,
                    "phonenumber": getApp().data.userDetail.phonenumber,
                    "orderUid": uid
                }
            },
            (err, data) => {
                if (!err) {
                    let res = JSON.parse(data.result); // 结果
                    if (res.status === 200) {
                        // 更新
                    }
                } else {
                    prompt.showToast({message:"操作失败！"})
                    console.log(err);
                }
                httpRequest.destroy();
            });
    },

    // 返回
    toBack() {
        router.back()
    },
}

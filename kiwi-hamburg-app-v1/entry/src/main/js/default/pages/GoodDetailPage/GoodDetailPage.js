import prompt from '@system.prompt';
import router from '@system.router';
import http from '@ohos.net.http';

export default {
    data: {
        isHttpAnim: true,
        detailData: {},

        // 评分栏目
        commentFrom :{
            ratings: 0,
            msg:""
        },
        // 评论列表
        commentsList:[],
    },
    onInit() {
        // 获取评论
        this.getHttpComments(this.detailData.good_id);
    },

    // 计算平均评分
    computeRating() {
        let res = 0
        if(this.commentsList.length>0){
            this.commentsList.forEach(el => {
                if(el) res += parseInt(el.rate)
            });
            res = (res/this.commentsList.length).toFixed(1)
        }
        this.commentFrom.ratings = res
        return res
    },

    // 评论请求
    getHttpComments(good_id) {
        if(good_id==="") return;
        this.isHttpAnim = true;
        let httpRequest = http.createHttp();
        httpRequest.request(
            getApp().data.httpUrl + "/api/commentsinfo?goodId="+good_id,
            { method: 'GET' },
            (err, data) => {
                if (!err) {
                    if (JSON.parse(data.result).status === 200) {
                        // 反转评论日期
                        this.commentsList = JSON.parse(data.result).data.commentsList.reverse()
                        this.computeRating();
                    }else {
                        this.commentFrom.msg = "暂无评论"
                    }
                } else {
                    console.log(err);
                    prompt.showToast({
                        message: "网络错误，请稍后再试"
                    })
                    this.commentFrom.msg = "暂无评论"
                }
                httpRequest.destroy();
                setTimeout(()=>{
                    this.isHttpAnim = false;
                },100)
            });
    },

    toBack() {
        router.back();
    }
}

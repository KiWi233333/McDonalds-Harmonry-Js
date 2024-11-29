import router from '@system.router';
export default {
    props:["item","goodsList","activesList"],
    data(){
        return {
            // 更新的表单
            good:{}
        }
    },
    onInit() {
        this.goodsList.forEach(item => {
            if(item.good_id === this.item.goodId) {
                this.good = item
            }
        });
    },


    // 评分程度
    computeRating() {
        let res = ""
        if (this.item.ratings <= 1) {
            res = "非常差"
        } else if (this.item.ratings > 1 && this.item.ratings <= 2) {
            res = "差"
        } else if (this.item.ratings >2 && this.item.ratings <= 3) {
            res = "一般"
        } else if (this.item.ratings >3 && this.item.ratings <= 4) {
            res = "满意"
        } else {
            res = "非常满意"
        }
        return res
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

}

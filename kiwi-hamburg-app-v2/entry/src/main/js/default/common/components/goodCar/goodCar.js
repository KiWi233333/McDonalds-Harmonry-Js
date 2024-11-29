import prompt from '@system.prompt';
import router from '@system.router';

export default {
    props: ['item', 'index', 'shopCarData', 'shop_all_goods', 'isEditShopCar'],
    data() {
        return {
            isEditShopCar: true,// 是否可编辑
            shopCar: { // 购物车栏样式
                shopInfo: "未选购餐品",
                shopInfoTrue: "总价",
                color: "#ffacacac",
                colorActive: "#fff",
                bgColor: "#cc7c7c7c",
                bgColorActive: "#fcb90e",
            },
            goods: {
                item:{},
                sum: 0,// 商品总数量
                allPrice:0
            },
            shopCarData: {}
        }
    },
    onInit() {
        // 初始化
        this.goods.item = this.item;
        if (this.shop_all_goods[this.index]) {
            this.goods.sum = this.shop_all_goods[this.index].sum;
            this.goods.allPrice = this.shop_all_goods[this.index].allPrice;
        }
    },

    // 商品弹窗
    showDetailPanel() {
        this.$emit("showDetailPanel",{
            item: this.item,
            index: this.index
        })
    },
    showDetailPage() {
        router.push({
            uri:"pages/GoodDetailPage/GoodDetailPage",
            params:{
                detailData: this.item
            }
        })
    },


    // 商品加减
    goodAdd(item, index) {
        // 登录后才有权限操作购物车
        if (getApp().data.token === "") {
            router.push({ uri: "pages/LoginPage/LoginPage" });
            router.clear();
            return
        }
        if (this.goods.sum < 100) {
            if (getApp().data.shopCarData.data.shop_all_goods[this.goods.index] === undefined) {
                this.goods.sum++;// 该商品总数量
                this.goods.allPrice += +item.price;// 该商品总数量
                let arr = {
                    item,  sum: this.goods.sum, allPrice : this.goods.allPrice
                }
                // 添加数据
                getApp().data.shopCarData.data.shop_all_goods[index] = arr
                // 子传父
                this.$emit("changeShopCar", {
                    num: 1,
                    allPrice: +this.item.price,
                    shop_all_goods: getApp().data.shopCarData.data.shop_all_goods
                })
            } else {
                // 更新数据
                let arr = getApp().data.shopCarData.data.shop_all_goods
                this.goods.sum = arr[this.goods.index].sum
                this.goods.allPrice = arr[this.goods.index].allPrice
                this.goods.sum++;// 该商品总数量
                this.goods.allPrice += +item.price;// 该商品总价
                getApp().data.shopCarData.data.shop_all_goods[index].sum = this.goods.sum
                getApp().data.shopCarData.data.shop_all_goods[index].allPrice = this.goods.allPrice
                // 子传父
                this.$emit("changeShopCar", {
                    num: 1,
                    allPrice: +this.item.price,
                    shop_all_goods: getApp().data.shopCarData.data.shop_all_goods
                })
            }

        }
    },
    goodReduce(item, index) {
        if (this.goods.sum > 0) {
            this.goods.sum--
            this.goods.allPrice -= item.price;// 该商品总价
            // 更新数据
            getApp().data.shopCarData.data.shop_all_goods[index].sum = this.goods.sum
            getApp().data.shopCarData.data.shop_all_goods[index].allPrice = this.goods.allPrice
            // 子传父
            this.$emit("changeShopCar", {
                num: -1,
                allPrice: -item.price,
                shop_all_goods: getApp().data.shopCarData.data.shop_all_goods
            })
        }
    },
}

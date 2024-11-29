import router from '@system.router';

export default {
    data: {
        stateTitle: "", // "已支付" 待取餐 已完成 已取消 已评价
        stateMsg: "", //
        order:{ }
    },

    onInit() {
        switch (this.order.order_state) {
            case 1:
                this.stateTitle = "待支付"
                this.stateMsg = "订单已经准备完毕"
                break;
            case 2:
                this.stateTitle = "待取餐"
                this.stateMsg = "订单已经准备完毕"
                break;
            case 3:
                this.stateTitle = "待取餐"
                this.stateMsg = "订单已经准备完毕"
                break;
            case 4:
                this.stateTitle = "已完成"
                this.stateMsg = "期待你的评价"
                break;
            case 5:
                this.stateTitle = "已取消"
                this.stateMsg = "改变主意了"
                break;
            case 6:
                this.stateTitle = "已评价"
                this.stateMsg = "感谢你真诚的评价"
                break;
        }
    },

    // 下单时间
    getShopTime(value) {
        let date = new Date(parseInt(value)).toLocaleDateString().split("/")
        return date[2]+"-"+date[0]+"-"+date[1]
    },
    // 取餐方式
    getShopType(value) {
        if (value === "OUT") {
            return "外卖"
        } else {
            return "到店取餐"
        }
    },
    // 返回
    toBack() {
        router.back()
    }
}

// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 准备actions——用于响应组件中的动作
const actions = {
    addToCart(context,value){
        context.commit("addToCart",value)
    },
    addID(context,value){
        context.commit("addID",value)
    }
}
// 准备mutations——用于操作数据（state）
const mutations = {
    // 添加到购物车
    addToCart(state,value){
        state.CartAll.push(value)
    },
    // 点击后的总价格上涨
    addPrice(state,value){
        state.sumPrice += value
    },
    // 取消选择后的总价格下降
    jianPrice(state,value){
        state.sumPrice -= value
    },
    // 是否选择所有的购物车内容
    allChoice(state,value){
        state.CartAll.filter(todo => {
            todo.car_choice = value
            if(value === true){
                state.sumPrice += todo.car_price*10000*todo.car_number
                state.sumNumber = state.CartAll.length
            }else{
                state.sumPrice = 0
                state.sumNumber = 0
            }
        })  

    },
    // 是否选择某个购物车内容
    ifChoice(state,value){
        state.CartAll.forEach(todo => {
        if(todo.id === value ) {
            todo.car_choice = !todo.car_choice
            if(todo.car_choice === true){
                state.sumNumber += 1
            }else{
                state.sumNumber -= 1
            }
        }
      });
    },
    // 删除某个购物车内容
    deleteId(state,value){
        state.CartAll = state.CartAll.filter((todo) => {
            return todo.id !== value
        }); 
        state.sumPrice = 0
        state.sumNumber = 0
    },
    // 清空所有的购物车内容
    clearAllId(state) {
        state.CartAll = state.CartAll.filter((todo) => {
            return !todo.car_choice 
        });
        state.sumPrice = 0
        state.sumNumber = 0
    },
    // 添加个人id
    addID(state,value){
        state.personalID.push(value)
    },
    // 在你购物车里面剩下没有购买的东西
    pay1(state,value){
        state.CartAll = value
        state.sumPrice = 0
        state.sumNumber = 0
    },
    // 你付完钱之后买的社么东西
    pay2(state,value){
        state.Product = []
        if(value.length){
            state.payProduct.push(value)
            for(let i = 0;i<state.payProduct.length;i++){
                if(state.payProduct[i].length >= 1){
                    for(let j = 0;j<state.payProduct[i].length;j++){
                        state.Product.push(state.payProduct[i][j])
                    }
                }
            }
        }else{
            alert("请点击商品")
        }
    },
    // 付完钱后的钱
    gaifuqianle(state,value){
        state.youMoney -= value
    },
    // 你的money
    addyouMoney(state,value){
        state.youMoney += value
    },
    // 获得cookie
    addCookie(state,value){
        state.cookie = value
    }
}
// 准备state——用于存储数据
const state = {
    Product:[],
    // 购物车的内容情况
    CartAll:[],
    sumPrice:0,
    sumNumber:0,
    personalID:[],
    payProduct:[],
    youMoney:10000000,
    cookie:""
}
// 准备getters——用于将state中的数据进行加工
const getters = {
    sumPriceEnd(state){
        return state.sumPrice*10000
    }
}

// 创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

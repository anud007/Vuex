import {createStore} from 'vuex';

export const store = createStore({
    state:{
        products:[
            {id:1,name:'Banana',price:20},
            {id:2,name:'Shiny Star',price:40},
            {id:3,name:'Green Shells',price:50},
            {id:4,name:'Red Shells',price:80},
          ] ,
          filterText:''       
    },
    getters:{
        saleProducts:state =>{
            console.log("getters")
            var saleProducts = state.products.map(product => {
                return{
                    name: product.name,
                    price: product.price,
                    discountPrice: product.price/2,
                    displayName: "pro" + product.name
                }
            });
            return saleProducts
        },
        filterProducts(state){
            var filterProducts =[]
            if (state.filterText == ''){
                filterProducts =  state.products
            }
            else{
                state.products.forEach((product) => {
                    if(product.name.toLowerCase().includes(state.filterText.toLocaleLowerCase())){
                        filterProducts.push(product)
                    }
                });
            }
            return filterProducts
        }
    },
    mutations:{
        reducePrice:state => {
                console.log("muations")
                state.products.map(product => {
                product.price -= 1
            });
        },
        filterProducts(state, payload){
            state.filterText = payload
        }
    },
    actions:{
        reducePrice(context){
            context.commit('reducePrice')
        },
        filterProducts(context, filterText){
            context.commit('filterProducts', filterText)
        }
    }
})
import {createStore} from 'vuex';

export const store = createStore({
    state:{
        products:[
            {id:1,name:'Banana',price:20},
            {id:2,name:'Shiny Star',price:40},
            {id:3,name:'Green Shells',price:50},
            {id:4,name:'Red Shells',price:80},
          ]        
    },
    getters:{
        saleProducts:state =>{
            var saleProducts = state.products.map(product => {
                return{
                    name: '**' + product.name + '**',
                    price: product.price/2
                }
            });
            return saleProducts
        }
    },
    mutations:{
        reducePrice:state => {
                state.products.forEach(product => {
                product.price -= 1
            });
        }
    },
    actions:{
        reducePrice(context){
            setTimeout(function() {
                context.commit('reducePrice')
            }, 3000)
        }
    }
})
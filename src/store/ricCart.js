import { create } from "zustand";

    
    
    export const useCartStore = create((set) => ({
        carts: [],

        addToCart: (product) => set((state) => {
            const exist = state.carts.find((item)=>item.id === product.id)
            if (exist) {
                return{
                    carts: state.carts.map((item)=>item.id == product.id 
                    ? {...item, quantity:item.quantity +1}
                    : item )

                }
            } else {
                return{
                    carts:[...state.carts , {...product, quantity:1}]
                }
            }
        }),

        increaseQuantity: (id) => set((state) =>({
            carts: state.carts.map((item)=> item.id == id ?{...item, quantity:item.quantity +1}: item)
        })
        ),

        decreaseQuantity: (id) => set((state) =>({
            carts: state.carts.map((item)=> item.id == id && item.quantity > 1  ?{...item, quantity:item.quantity -1}: item)
        })
        ),
        
        clearQuantity: (id) => set((state) =>({
            carts: []
            
        })
    ),
        removeQuantity: (id) => set((state) =>({
            carts: state.carts.filter((item)=> item.id !== id)
        })
        ),


    }))
    
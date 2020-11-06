import React, { Component } from 'react'
import poultryService from '../../services/poultry.service';

export const DataContext = React.createContext();



export class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            total: 0,
            products:[] 
        }
    }
        
     addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(product =>{
            return product.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                //  this.getTotal();

                // this.setState({
                //     total:0
                // })
                return product.id === id
            })
            this.setState({cart: [...cart,...data]})
            //  this.getTotal();

        }else{
            alert("The product has been added to cart.")
        }
        console.log("add card");
        console.log(this.state.cart);
        this.getTotal();
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(product =>{
            if(product.id === id){
                product.count === 1 ? product.count = 1 : product.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(product =>{
            if(product.id === id){
                product.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((product, index) =>{
                if(product.id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, product) => {
            return prev + (product.price * product.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
        
    };

    componentDidMount(){
        // this.reloadPoultryList();
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
            this.getTotal();
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
        
        this.reloadPoultryList();
        // this.getTotal();
    }
    
    reloadPoultryList = () => {
        poultryService.getAllPoultry()
            .then((Response) => {
                // console.log(Response)
                console.log("hiiiiiiiiiiiiiiiiiiiiiiiii");
                this.setState({products:Response.data})
                console.log(this.state.products);
            })
    }

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

// import React, { Component } from 'react'
// import poultryService from '../../services/poultry.service';

// export const DataContext = React.createContext();

// export class DataProvider extends Component {
//     constructor(){
//         super()
//        this.state = {
//         products: [] ,
//         cart: [],
//         total: 0
//     }
// }

//     addCart = (id) =>{
//         const {products, cart} = this.state;
//         const check = cart.every(product =>{
//             return product.id !== id
//         })
//         if(check){
//             const data = products.filter(product =>{
//                 return product.id === id
//             })
//             this.setState({cart: [...cart,...data]})
//         }else{
//             alert("The product has been added to cart.")
//         }
//         this.getTotal()
//     };

//     reduction = id =>{
//         const { cart } = this.state;
//         cart.forEach(product =>{
           
//             if(product.id === id){
//                 console.log(id)
//                 product.count === 0.5 ? product.count = 0.5 : product.count -=0.5;
//             }
//         })
//         this.setState({cart: cart});
//         this.getTotal();
//     };

//     increase = id =>{
//         const { cart } = this.state;
//         cart.forEach(product =>{
//             if(product.id === id){
//                 product.count += 0.5;
//             }
//         })
//         this.setState({cart: cart});
//         this.getTotal();
//     };

//     removeProduct = id =>{
//         if(window.confirm("Do you want to delete this product?")){
//             const {cart} = this.state;
//             cart.forEach((product, index) =>{
//                 if(product.id === id){
//                     cart.splice(index, 1)
//                 }
//             })
//             this.setState({cart: cart});
//             this.getTotal();
//         }
       
//     };

//     getTotal = ()=>{
//         const{cart} = this.state;
//         const res = cart.reduce((prev, product) => {
//             return prev + (product.price * product.count);
//         },0)
//         this.setState({total: res})
//     };
   
//     componentDidUpdate(){
//         localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
//         localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
//     };

//     componentDidMount(){
//         const dataCart = JSON.parse(localStorage.getItem('dataCart'));
//         if(dataCart !== null){
//             this.setState({cart: dataCart});
//         }
//         const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
//         if(dataTotal !== null){
//             this.setState({total: dataTotal});
//         }

//         poultryService.getAllPoultry()
//         .then((response)=>{
//             console.log(response)
//             this.setState({
//                products:response.data
//             })
//         }
//         )
//     }
   

//     render() {
//         const {products, cart,total} = this.state;
//         const {addCart,reduction,increase,removeProduct,getTotal} = this;
//         return (
//             <DataContext.Provider
//             value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
//                 {this.props.children}
//             </DataContext.Provider>
//         )
//     }
// }




// import React, { Component } from 'react'
// import {DataContext} from './Context'
// import {Link} from 'react-router-dom'
// import Colors from './Colors'
// import '../Css/Details.css'


// export class Details extends Component {
//     static contextType = DataContext;
//     state = {
//         product: []
//     }

//     getProduct = () =>{
//         if(this.props.match.params.id){
//             const res = this.context.products;
//             const data = res.filter(product =>{
//                 return product.id === this.props.match.params.id
//             })
//             this.setState({product: data})
//         }
//     };

//     componentDidMount(){
//         this.getProduct();
//     }



//     render() {
//         const {product} = this.state;
//         const {addCart} = this.context;
//         return (
//             <>
//                 {
//                     product.map(product =>(
//                         <div className="details" key={product._id}>
//                             <img src={product.src} alt=""/>
//                             <div className="box">
//                                 <div className="row">
//                                     <h2>{product.title}</h2>
//                                     <span>${product.price}</span>
//                                 </div>
//                                 {/* <Colors colors={item.colors}/> */}
//                                 <p>{product.description}</p>
//                                 <p>{product.content}</p>
//                                 <Link to="/cart" className="cart" onClick={() => addCart(product.id)}>
//                                     Add to cart
//                                 </Link>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </>
//         )
//     }
// }

// export default Details
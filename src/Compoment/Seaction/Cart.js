import React, { Component } from 'react'
import {DataContext} from './Context'
import {Link} from 'react-router-dom'
import '../Css/Details.css'
import '../Css/Cart.css'
import Button from '@material-ui/core/Button';

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
        console.log('hiiiiiii')
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(product =>(
                            
                            <div className="details cart" key={product.id}>
                                 <img src={product.url} alt=""/>

                                <div className="box">

                                    <div className="amount">
                                          <h3 style={{color:"blue",fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20}}>
                                              <Link to={`/product/${product.id}`}>{product.name}</Link>
                                          </h3>
                                          
                                           <p>{product.describtion}</p>
                                           <div className="row">
                                       <span>{product.price * product.count}</span>
                                    </div>
                                        <button className="count" onClick={() => reduction(product.id)}> - </button>
                                        <span>{product.count}</span>
                                        <button className="count" onClick={() => increase(product.id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(product.id)}>X</div>
                            </div>
                        
                        ))
                    }
                    <div className="total">
                        {console.log(total)}
                    <Button href="/BuyNow" style={{backgroundColor:"lightgreen",color:"black"}}>Payment</Button>
                        <h3>Total: {total}</h3>
                    </div>
                </>
                )
            }
        }
}

export default Cart;
























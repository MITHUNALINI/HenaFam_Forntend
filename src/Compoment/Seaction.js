import React, { Component } from 'react'
import Products from './Seaction/Products'
import Details from './Seaction/Details'
import {Route} from 'react-router-dom'
import Cart from './Seaction/Cart'
import Payment from './Seaction/Payment'

export default class Seaction extends Component {
    render() {
        return (
            <section>
                 <Route path="/" component={Products} exact />
                <Route path="/produt" component={Products} exact/>
                <Route path="/produt/:id" component={Details}/>
                <Route path="/cart" component={Cart} />
                <Route path="/payment" component={Payment} />
                

            </section>
        )
    }
}

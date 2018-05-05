import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Item from '../checkout-item/checkout-item'
import './checkout.css'
import store from '../../store';
import { addCart, deleteCart, add, reduce } from '../../actions';
import { connect } from 'react-redux'
import Quantity from '../quantity/quantity'
const R = require('ramda')

const mapStateToProps = state => {
	return { cart: state.cart };
};

class CheckoutComponent extends Component {

	render() {
		const cart = this.props.cart
		
		return <div className="form-container">
			<h2>Order Summary</h2>
			<hr />
			<table><tr><td>Items({cart.length})</td><td className="mid">Qty</td><td>Price</td></tr>

				{cart.map((obj, index) => <tr><td key={index}><Item name={obj.name} img_url={obj.img_url} deleteHandler={this.deleteHandler(obj.itemId)} /></td> <td> <Quantity className="left" quantity={obj.quantity} addHandler={this.addHandler(obj)} reduceHandler={this.reduceHandler(obj)} /></td><td>{obj.quantity * obj.price}</td></tr>)}

			</table>

		</div>
	}

	deleteHandler = R.curry((index, event) => {
		console.log("delete:", index)
		store.dispatch(deleteCart(index))
		if (this.props.cart.length == 1) {
			this.props.history.push('/')
		}
		
	})
	reduceHandler = R.curry((obj, event) => {
		store.dispatch(reduce(obj))
	})
	addHandler = R.curry((obj, event) => {
		store.dispatch(add(obj))
	})
}

const Checkout = connect(mapStateToProps)(CheckoutComponent)

export default Checkout
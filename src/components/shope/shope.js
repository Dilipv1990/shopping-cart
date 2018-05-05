import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './shope.css'
import Card from '../item-card/item-card'
import { ADD_CART } from '../../constants/action-types'
import { addToCart } from '../../actions/index'
import store from '../../store/index'
const R = require('ramda')



export default class Shope extends Component {
	itemId = 0;

	objs = [{ "id": 9090, "name": "Item1", "price": 200, "discount": 10, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9091, "name": "Item2", "price": 250, "discount": 15, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9092, "name": "Item3", "price": 320, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9093, "name": "Item4", "price": 290, "discount": 0, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9094, "name": "Item1", "price": 500, "discount": 25, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9095, "name": "Item2", "price": 150, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9096, "name": "Item3", "price": 700, "discount": 22, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9097, "name": "Item4", "price": 350, "discount": 18, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }]

	constructor(props) {
		super(props)
		this.state = {
			cart: [],
			item: ""
		}
	}


	render() {
		return <div className="form-container"><h3 className="left">All Items</h3><div className="alert"> {this.state.item + " has been added to your cart."}</div><button className="btn-primary right" onClick={this.goCart}>Go to cart <img src="./res/cart.svg"></img></button><hr ></hr><div className="cards">{this.objs.map((obj) => { return <Card img_url={obj.img_url} name={obj.name} price={obj.price} key={obj.id} discount={obj.discount} onClickHandler={this.addToCart(obj)} id={obj.id}></Card> })}</div></div>
	}

	addToCart = R.curry((obj, event) => {
		store.dispatch(addToCart({ ...obj }))
		this.setState({ "item": obj.name })
		document.getElementsByClassName("alert")[0].style.display = 'block';
		setTimeout(() => {
			if (document.getElementsByClassName("alert")[0])
				document.getElementsByClassName("alert")[0].style.display = 'none';
		}, 3000)
	})

	goCart = () => {
		this.props.history.push('/checkout')
	}
}



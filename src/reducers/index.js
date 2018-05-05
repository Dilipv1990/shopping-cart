import { ADD_CART, DELET_CART, REDUCE, ADD } from "../constants/action-types"
const R = require('ramda')
let initialState = {
	cart: [],
	index: 0
};
(function () {
	if (window.localStorage && window.localStorage.getItem("shoppingcart.state")) {
		initialState = JSON.parse(window.localStorage.getItem("shoppingcart.state"))
	}
})()
const rootReducer = (state = initialState, action) => {
	let newState, payload
	switch (action.type) {
		case ADD_CART:
			action.payload.itemId = state.index
			let item = R.find(R.propEq('id', action.payload.id))(state.cart)
			console.log("add cart:" + action.payload.id, item)
			if (item) {
				item.quantity = item.quantity ? item.quantity + 1 : 1
				newState = { ...state, cart: [...state.cart.filter((obj) => obj.id !== item.id), item] }
			}
			else {
				action.payload.quantity = 1
				newState = { ...state, cart: [...state.cart, action.payload] }
			}
			newState.cart.sort(sort)
			
			newState.index += 1
			if (window.localStorage) {
				window.localStorage.setItem("shoppingcart.state", JSON.stringify(newState))
			}
			return newState
		case DELET_CART:
			console.log("payload:", action)
			newState = { ...state, cart: [...state.cart.filter((obj) => obj.itemId !== action.payload)] }
			newState.cart.sort(sort)
			
			if (window.localStorage) {
				window.localStorage.setItem("shoppingcart.state", JSON.stringify(newState))
			}
			if (!newState)
				newState.index = 0
			return newState
		case REDUCE:
			console.log("reduce:", action.payload)
			payload = { ...action.payload, quantity: action.payload.quantity - 1 }
			if (action.payload.quantity === 0)
				return state
			newState = {
				...state, cart: [...state.cart.filter((obj) => obj.id !== payload.id), payload]
			}
			newState.cart.sort(sort)
			
			if (window.localStorage) {
				window.localStorage.setItem("shoppingcart.state", JSON.stringify(newState))
			}
			if (!newState)
				newState.index = 0
			return newState
		case ADD:
			console.log("add:", state)
			payload = { ...action.payload, quantity: action.payload.quantity + 1 }
			newState = {
				...state, cart: [...state.cart.filter((obj) => obj.id !== payload.id), payload]
			}
			newState.cart.sort(sort)
			if (window.localStorage) {
				window.localStorage.setItem("shoppingcart.state", JSON.stringify(newState))
			}
			if (!newState)
				newState.index = 0

			return newState
		default:
			return state
	}

};

let sort = (a, b) => { return a.id > b.id }
export default rootReducer;
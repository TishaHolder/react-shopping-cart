import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from "./contexts/ProductContext.js";
import { CartContext } from "./contexts/CartContext.js";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	//localStorage.getItem gets an item out of local storage by giving it the key of the item you want
	//we can only store strings in local storage so we have to parse the item's value
	//if cart is in localStorage parse the contents using JSON.parse
	//every time the value in cart changes we want to save it in local storage using getItem
	//we use JSON.stringify when we input the value into local storage and when we get it out we have to parse it
	//back into a javascript array
	//the word "cart" in strings is just a key that refers to the item you want to retrieve and not the same
	//as the cart array

	//const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

	//every time the value of cart changes we call localStorage.setItem and give it the key to store the value under (cart)
	//and the value to place in there. because cart is not a string we have to stringify it using JSON.stringify
	/*useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));

	}, [cart]);*/

	const addItem = item => {
		setCart([...cart, item]);
	};

	//udate cart so it no longer contains books with the specified id
	const removeItem = (id) => {
		//set cart to an array of products that no longer contain products with the id received from ShoppingCartItem.js
		//filter returns true for items we want to keep and false for items we don't want to keep
		setCart(cart.filter(product => product.id !== id))		

	};

	return (
		<ProductContext.Provider value = {{products, addItem}}>

			<CartContext.Provider value = {{cart, removeItem}} >

				<div className="App">

					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component = {Products}
					/>

					<Route
						path="/cart"
						component = {ShoppingCart} 
					/>

				</div>

			</CartContext.Provider>

		</ProductContext.Provider>
	);
}

export default App;

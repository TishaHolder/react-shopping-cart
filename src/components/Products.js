import React from 'react';
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.js";


// Components
import Product from './Product';

const Products = () => {

	//instead of object destructurig we could use const value  = useContext(ProductContext); 
	//and use value.products.map and value.addItem
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;

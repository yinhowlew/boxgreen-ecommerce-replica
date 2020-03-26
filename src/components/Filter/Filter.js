import React, { useState, useEffect } from 'react';
import './filter.css';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../actions";

const Filter = () => {

	const original_products = useSelector(state => state.productReducer.products);

	const dispatch = useDispatch();

	const ingredientList = ["peanut", "granola", "cashew", "almond", "cranberry", "edamame", "peacan"];
	const ingredientOptions = ingredientList.map(option => (
		<div className='filter-option' key={option}>				
			<input 
			onClick={() => dispatch(allActions.productActions.filterProductsByAll(original_products))}
			type='checkbox' id={option}></input>
			{option}
		</div>	
	))

	// add listener to window resize event so ingredient toggle can update
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
			setIngredientOpen((window.innerWidth > 600) ? true : false)
		}
		window.addEventListener('resize', handleResize)
		return _ => {
			window.removeEventListener('resize', handleResize)
		}
	})

	// for ingredient drop-down list toggle
	const [ingredientOpen, setIngredientOpen] = useState(
		(width > 600) ? true : false
	);

	const ingredientToggle = () => {
		if (ingredientOpen) {
			setIngredientOpen(false);
		} else if (!ingredientOpen) {
			setIngredientOpen(true);
		}
	}

	return (
		<div className='filter-bar-container'> 
			<div className='filter-group'>
				<p className='filter-title'>sale</p>
				<div className='filter-option'>
					<input 
					onClick={() => dispatch(allActions.productActions.filterProductsByAll(original_products))}					
					type='checkbox' id='promo'></input>
					promo
				</div>
			</div>
			<div className='filter-group'>
				<p className='filter-title'>popular</p>
				<div className='filter-option'>
					<input 
					onClick={() => dispatch(allActions.productActions.filterProductsByAll(original_products))}					
					type='checkbox' id='best'></input>
					best-seller
				</div>
			</div>			
			<div className='filter-group ingredient-container'>
				<p className='filter-title'>ingredients
					<i 
						onClick={ingredientToggle}
						className={ingredientOpen ? 'fa fa-caret-up ingredient-icon' : 'fa fa-caret-down ingredient-icon'}
					></i>				
				</p>
				<div className={ingredientOpen ? 'ingredient-option-open' : 'ingredient-option-closed'}>
					{ingredientOptions}	
				</div>																				
			</div>	
		</div>
	)
}

export default Filter;
import React from 'react';
import './actionbar.css';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../actions";

// under select:   value={sort} onChange={(e) => dispatch(sortProducts(filteredProducts, e.target.value))}

const ActionBar = () => {

	const products = useSelector(state => state.productReducer.products);
	const filteredProducts = useSelector(state => state.productReducer.filteredProducts);
	const price = useSelector(state => state.productReducer.price);

	const dispatch = useDispatch();

	return (
		<div className='action-bar-container'> 
			<div className='breadcrumb-container'>
				<p>shop > all snacks</p>
			</div>
			<div className='actions-container'>
				<div className='sort-container'>
					<select className="form-control sort-edit" value={price} onChange={(e) => dispatch(allActions.productActions.sortProducts(filteredProducts, e.target.value))}>
                        <option value="">sort by price</option>
                        <option value="lowestprice">Lowest to highest</option>
                        <option value="highestprice">Highest to lowest</option>
                    </select>
				</div>
				<div className='search-container'>
					<input 
					onChange={(event) => dispatch(allActions.productActions.searchProducts(event.target.value, products))}
					type="search" placeholder="search"></input>
					<i className='fa fa-search'></i>
				</div>
			</div>
		</div>
	)
}

export default ActionBar;
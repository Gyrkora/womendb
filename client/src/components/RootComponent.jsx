import { useState, useEffect } from 'react';
import axios from 'axios';
import { Categories } from '../pages/Categories';
import { Loader } from './UI/Loader';

const RootComponent = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		axios
			.get('https://womendb-api.onrender.com/tasks/api/v1/categories/')
			.then((response) => {
				setCategories(response.data);
				setLoading(false);
			})
			.catch((error) => console.error('Error fetching categories:', error));
		setLoading(false);
	});

	if (loading) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<div>
			{categories ? (
				<Categories categories={categories} />
			) : (
				<p>No objects loaded</p>
			)}
		</div>
	);
};

export default RootComponent;

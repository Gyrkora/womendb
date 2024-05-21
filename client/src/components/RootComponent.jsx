import { useState, useEffect } from 'react';
import axios from 'axios';
import { Categories } from '../pages/Categories';

const RootComponent = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios
			.get('http://127.0.0.1:8000/tasks/api/v1/categories/')
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => console.error('Error fetching categories:', error));
	}, []);

	return <Categories categories={categories} />;
};

export default RootComponent;

import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CardCategory, CategoriesContainer } from '../styles/Categories.styles';
import { SearchInput } from '../components/SearchInput';
import { getAllCategories, getAllWomen } from '../api/tasks.api';

export const WomenByCategory = () => {
	const { categoryId } = useParams();
	const [women, setWomen] = useState([]);
	const [category, setCategory] = useState({});
	const [query, setQuery] = useState('');
	const [filteredResults, setFilteredResults] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			try {
				const response = await getAllCategories(categoryId);
				setCategory(response.data);
			} catch (error) {
				console.error('An error occurred while fetching category:', error);
			}
		}

		async function loadWomen() {
			try {
				const response = await getAllWomen(categoryId);
				setWomen(response.data);
				setFilteredResults(response.data);
			} catch (error) {
				console.error('An error occurred while fetching category:', error);
			}
		}

		loadCategories();
		loadWomen();
	}, [categoryId]);

	const handleInputChange = (e) => {
		const newQuery = e.target.value;
		setQuery(newQuery);
		if (newQuery.lenght === 0) {
			setFilteredResults(women);
		} else {
			const newFilteredResults = women.filter((woman) =>
				woman.name.toLowerCase().includes(newQuery.toLowerCase())
			);
			setFilteredResults(newFilteredResults);
		}
	};
	return (
		<div>
			<SearchInput
				type="search"
				placeholder="Search"
				value={query}
				onChange={handleInputChange}
			/>
			<CategoriesContainer $bgforimage={category.bgImage}>
				{filteredResults.map((woman) => (
					<CardCategory key={woman.id}>
						<h3>{woman.name}</h3>
						<img src={woman.image} alt={woman.name} />
						<p>{woman.description}</p>
					</CardCategory>
				))}
			</CategoriesContainer>
		</div>
	);
};
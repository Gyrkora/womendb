import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '';

export const getAllCategoriesList = () => {
	return axios.get(`${API_BASE}/tasks/api/v1/categories/`);
};

export const getAllCategories = (categoryId) => {
	return axios.get(`${API_BASE}/tasks/api/v1/categories/${categoryId}/`);
};

export const getAllWomen = (categoryId) => {
	return axios.get(`${API_BASE}/tasks/api/v1/women/?category=${categoryId}`);
};

/*

una forma de llamarla en los componentes:

	 axios
			  .get(`${API_BASE}/tasks/api/v1/women/?category=${categoryId}`)
			  .then((response) => {
					setWomen(response.data);
			  })

			.catch((error) => console.error('Error fetching women:', error));
*/

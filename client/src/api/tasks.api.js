import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '';

export const getAllCategoriesList = (lang = 'es') => {
	return axios.get(`${API_BASE}/tasks/api/v1/categories/`, {
		params: { lang },
	});
};

export const getAllCategories = (categoryId, lang = 'es') => {
	return axios.get(`${API_BASE}/tasks/api/v1/categories/${categoryId}/`, {
		params: { lang },
	});
};

export const getAllWomen = (categoryId, lang = 'es') => {
	return axios.get(`${API_BASE}/tasks/api/v1/women/`, {
		params: { category: categoryId, lang },
	});
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

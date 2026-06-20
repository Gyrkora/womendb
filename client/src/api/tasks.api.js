import axios from 'axios';

export const getAllCategoriesList = () => {
	return axios.get('http://127.0.0.1:8000/tasks/api/v1/categories/');
};

export const getAllCategories = (categoryId) => {
	return axios.get(
		`http://127.0.0.1:8000/tasks/api/v1/categories/${categoryId}/`
	);
};

export const getAllWomen = (categoryId) => {
	return axios.get(
		`http://127.0.0.1:8000/tasks/api/v1/women/?category=${categoryId}`
	);
};

/*


una forma de llamarla en los componentes:

	 axios
			  .get(`http://127.0.0.1:8000/tasks/api/v1/women/?category=${categoryId}`)
			  .then((response) => {
					setWomen(response.data);
			  })

			.catch((error) => console.error('Error fetching women:', error));
*/

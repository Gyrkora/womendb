import { SearchInputContainer } from '../styles/Categories.styles';

export function SearchInput({ value, onChange, placeholder }) {
	return (
		<SearchInputContainer
			type="search"
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
}

/* 


https://www.guvi.in/blog/build-a-search-filter-component-in-react/ 

chagpt







*/

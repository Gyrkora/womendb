import styled from 'styled-components';

export const CategoriesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 0 auto;
	flex-wrap: wrap;
	background-image: url(${(props) => props.$bgforimage});
	background-size: repeat;
	background-position: center;
	position: relative;
	min-height: 100vh;
	width: 100%;
	gap: 30px;

	@media (min-width: 768px) {
		background-size: cover;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}
`;

export const CardCategory = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	text-align: center;
	z-index: 10;

	width: 200px;
	height: 380px;             /* más alto → más vertical, menos cuadrada */
	margin: 0;
	padding: 1rem;

	border-radius: 10px;
	color: black;
	border: 5px solid #980e0e;
	background-color: rgba(255, 255, 255, 0.6);

	h2, h3 {                   /* ajusta al tag real */
		min-height: 3em;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0 0.75rem;
		font-size: 1.1rem;
		line-height: 1.2;
	}

	img {
		width: 90%;            /* deja aire a los lados, como antes */
		height: 190px;         /* más alta que ancha → vertical */
		object-fit: cover;
		object-position: center top;   /* prioriza la cara al recortar */
		border-radius: 6px;
		margin: 0;
		flex-shrink: 0;
	}

	p {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0.75rem 0 0;
		font-size: 0.95rem;
	}
`;

export const SearchInputContainer = styled.input`
	width: 20%;
	height: 20px;
	font-size: 12px;
	padding: 10px 0;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	margin: 10px auto;
`;

// Categories mainpage

export const CategoriesMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 0 auto;
	/* flex-wrap: wrap; */
	background-image: url(${(props) => props.$bgforimage});
	background-size: repeat;
	background-position: center;
	position: relative;
	/* min-height: 100vh; */
	width: 100%;
	margin-top: 50px;
	/* background-color: black; */
	gap: 35px;

	a {
		text-decoration: none;
		font-size: 25px;
		color: black;
		font-weight: bold;
		transition: all 0.2s ease-in-out;
	}

	@media (min-width: 768px) {
		background-size: cover;
		flex-direction: row;
		flex-wrap: wrap;

		/* 
		&:hover p {
			color: black;
			background-color: #cdc5ceef;

			border: 5px solid #980e0e;
			border-radius: 10px;
			padding: 2px;
		} */
	}
`;

export const CardCategoriesMain = styled(CardCategory)`
	height: 150px;
	border-width: 8px;
	transition: all 0.2s ease-in-out;
	background-color: rgb(255, 255, 255, 0.6);

	@media (min-width: 768px) {
		&:hover {
			background-image: url(${(props) => props.$cardCategoryImage});
			background-size: cover;
			background-position: center;
			cursor: pointer;
			width: 300px;

			p {
				color: black;
				background-color: #cdc5ceef;

				border: 5px solid #980e0e;
				border-radius: 10px;
				padding: 2px;
			}
		}
	}
`;

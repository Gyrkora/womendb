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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
	gap: 1.5rem;
	max-width: 1100px;
	margin: 0 auto;
	padding: 3rem 1rem 4rem;
	position: relative;
	width: 100%;

	a {
		display: block;
		text-decoration: none;
		color: inherit;
	}
`;

export const CardCategoriesMain = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	min-height: 220px;
	height: 220px;
	overflow: hidden;
	padding: 1rem;
	background: #111;
	border: 1px solid #2a2a2a;
	border-radius: 0;
	color: #f5f5f0;
	transition: border-color 0.2s ease, transform 0.2s ease;
	isolation: isolate;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -2;
		background-image: url(${(props) => props.$cardCategoryImage});
		background-size: cover;
		background-position: center;
		filter: grayscale(1) brightness(0.35);
		transition: filter 0.25s ease, transform 0.25s ease;
	}

	&::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 4px;
		background: #e63946;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.2s ease;
	}

	p {
		margin: 0;
		color: #f5f5f0;
		font-family: 'Anton', sans-serif;
		font-size: clamp(1.7rem, 7vw, 2.45rem);
		line-height: 0.95;
		letter-spacing: 0.03em;
		text-align: left;
		text-transform: uppercase;
		text-shadow: 0 2px 18px rgba(0, 0, 0, 0.8);
	}

	@media (min-width: 768px) {
		&:hover {
			cursor: pointer;
			border-color: #e63946;
			transform: translateY(-4px);
		}

		&:hover::before {
			filter: grayscale(0) brightness(0.6);
			transform: scale(1.03);
		}

		&:hover::after {
			transform: scaleX(1);
		}
	}
`;

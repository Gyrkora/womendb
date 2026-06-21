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
	background-position: center;
	position: relative;
	min-height: 100vh;
	width: 100%;
	gap: 30px;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(18, 11, 11, 0.5);
		z-index: 1;
	}

	/* desktop / tablet: sin collage, solo negro */
	@media (min-width: 768px) {
		// background-image: none;
		background-image: url(${(props) => props.$bgforimage});
	background-position: center;
		background-color: #0a0a0a;

		&::before {
			display: none;
		}
	}
`;


export const CardCategory = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	text-align: center;
	z-index: 10;
	overflow: hidden;

	width: 250px;
	height: 450px;
	padding: 1.25rem;

	background-color: #100b0b;
	border: 1px solid #241818;
	transition: all 0.25s ease;

	h3 {
		font-family: 'Anton', sans-serif;
		font-size: 1.15rem;
		letter-spacing: 0.03em;
		text-transform: uppercase;
		color: #f5f5f0;
		line-height: 1.15;
		min-height: 2.3em;          /* reserva 2 líneas → fotos alineadas */
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 0 0.85rem;
	}

	img {
		width: 100%;
		height: 210px;
		object-fit: cover;
		object-position: center top;
		border-radius: 6px;

		filter: grayscale(0.4);     /* toque sutil — quítalo o ajústalo a gusto */
		transition: filter 0.35s ease;
		flex-shrink: 0;
	}

	p {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Space Mono', monospace;
		font-size: 0.8rem;
		line-height: 1.5;
		// color: #9a9a9a;
		color: white;
		margin: 0.85rem 0 0;
	}

	/* barra roja inferior */
	&::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 4px;
		background: #e63946;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s ease;
	}

	@media (min-width: 768px) {
		border-color: #e63946;

		&:hover {
			transform: translateY(-4px);

			img { filter: grayscale(0); }
			&::after { transform: scaleX(1); }
		}
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

	margin: 40px auto;
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

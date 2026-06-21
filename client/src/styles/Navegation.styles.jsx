import styled from 'styled-components';

export const NavigationContainer = styled.div`
	position: relative;
	overflow: hidden;
	margin: 0;
	text-align: ${({ $compact }) => ($compact ? 'left' : 'center')};
	background-color: #0a0a0a;
	padding: ${({ $compact }) => ($compact ? '0.75rem 4.75rem 0.75rem 1rem' : '2rem 1rem 1.75rem')};
	border-bottom: 2px solid #e63946;
	transition: padding 0.25s ease, text-align 0.25s ease;
	isolation: isolate;

	&::before,
	&::after {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	&::before {
		z-index: -2;
		background-image: ${({ $bg }) => ($bg ? `url(${$bg})` : 'none')};
		background-size: cover;
		background-position: center;
		filter: grayscale(1) brightness(0.45);
	}

	&::after {
		z-index: -1;
		background: rgba(10, 10, 10, 0.65);
	}

	a {
		position: relative;
		z-index: 1;
		display: inline-flex;
		flex-direction: ${({ $compact }) => ($compact ? 'row' : 'column')};
		align-items: center;
		justify-content: ${({ $compact }) => ($compact ? 'flex-start' : 'center')};
		gap: ${({ $compact }) => ($compact ? '0.65rem' : '0.45rem')};
		text-decoration: none;
		color: #f5f5f0;
		transition: gap 0.25s ease;
	}

	p {
		margin: 0;
	}

	img {
		width: ${({ $compact }) => ($compact ? '34px' : '52px')};
		height: ${({ $compact }) => ($compact ? '34px' : '52px')};
		object-fit: contain;
		transition: width 0.25s ease, height 0.25s ease;
	}

	.wordmark {
		font-family: 'Anton', sans-serif;
		font-size: ${({ $compact }) => ($compact ? 'clamp(1.3rem, 4vw, 1.9rem)' : 'clamp(2.3rem, 8vw, 4.75rem)')};
		line-height: 0.9;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		transition: font-size 0.25s ease;
	}

	.wordmark span {
		color: #e63946;
	}

	.tagline {
		display: ${({ $compact }) => ($compact ? 'none' : 'block')};
		max-width: 760px;
		color: #7a7a7a;
		font-family: 'Space Mono', monospace;
		font-size: clamp(0.68rem, 2vw, 0.85rem);
		letter-spacing: 0.24em;
		line-height: 1.6;
		text-transform: uppercase;
	}

	button {
		position: absolute;
		z-index: 1;
		top: 1rem;
		right: 1rem;
		padding: 0.55rem 0.7rem;
		background: transparent;
		border: 1px solid #e63946;
		border-radius: 0;
		color: #f5f5f0;
		font-family: 'Space Mono', monospace;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		cursor: pointer;
		transition: background 0.2s ease, color 0.2s ease, top 0.25s ease;
	}

	button:hover {
		background: #e63946;
		color: #0a0a0a;
	}

	@media (max-width: 480px) {
		padding: ${({ $compact }) => ($compact ? '0.65rem 4.25rem 0.65rem 0.85rem' : '1.75rem 0.85rem 1.5rem')};

		button {
			top: ${({ $compact }) => ($compact ? '0.6rem' : '0.85rem')};
			right: 0.85rem;
			padding: 0.45rem 0.55rem;
			font-size: 0.68rem;
		}
	}
`;

import styled from 'styled-components';

export const NavigationContainer = styled.div`
	position: relative;
	margin: 0;
	text-align: center;
	background-color: #0a0a0a;
	padding: 2rem 1rem 1.75rem;
	border-bottom: 2px solid #e63946;

	a {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		gap: 0.45rem;
		text-decoration: none;
		color: #f5f5f0;
	}

	p {
		margin: 0;
	}

	img {
		width: 52px;
		height: 52px;
		object-fit: contain;
	}

	.wordmark {
		font-family: 'Anton', sans-serif;
		font-size: clamp(2.3rem, 8vw, 4.75rem);
		line-height: 0.9;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.wordmark span {
		color: #e63946;
	}

	.tagline {
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
	}

	button:hover {
		background: #e63946;
		color: #0a0a0a;
	}
`;

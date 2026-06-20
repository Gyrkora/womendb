import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		background: #0a0a0a;
		color: #f5f5f0;
		font-family: 'Space Mono', monospace;
	}

	img {
		max-width: 100%;
	}
`;

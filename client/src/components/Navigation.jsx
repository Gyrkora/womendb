import { Link } from 'react-router-dom';
import { NavigationContainer } from '../styles/Navegation.styles';
import logo from '../assets/logo.svg';

export function Navigation() {
	return (
		<NavigationContainer>
			<Link to="/">
				<img src={logo} alt="logo" />
				<p className="wordmark">WOMEN <span>DB</span></p>
				<p className="tagline">la base de datos universal de mujeres en la historia y en la actualidad</p>
			</Link>
		</NavigationContainer>
	);
}

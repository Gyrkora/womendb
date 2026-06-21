import { Link } from 'react-router-dom';
import { NavigationContainer } from '../styles/Navegation.styles';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.svg';

export function Navigation() {
	const { changeLanguage, t } = useLanguage();

	return (
		<NavigationContainer>
			<Link to="/">
				<img src={logo} alt="logo" />
				<p className="wordmark">WOMEN <span>DB</span></p>
				<p className="tagline">{t('tagline')}</p>
			</Link>
			<button
				type="button"
				aria-label={t('languageLabel')}
				onClick={() => changeLanguage()}
			>
				{t('languageToggle')}
			</button>
		</NavigationContainer>
	);
}

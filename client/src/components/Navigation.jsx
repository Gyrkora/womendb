import { Link, useLocation } from 'react-router-dom';
import { NavigationContainer } from '../styles/Navegation.styles';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.svg';

// TODO: poner aquí la URL del collage
const headerBg = null;

export function Navigation() {
	const { changeLanguage, t } = useLanguage();
	const location = useLocation();
	const compact = location.pathname.startsWith('/category');

	return (
		<NavigationContainer $compact={compact} $bg={headerBg}>
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

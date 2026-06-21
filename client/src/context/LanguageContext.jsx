/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'womendb-language';
const DEFAULT_LANGUAGE = 'es';

const dictionary = {
	es: {
		tagline: 'la base de datos universal de mujeres en la historia y en la actualidad',
		search: 'Buscar',
		searchWoman: 'Buscar mujer',
		loading: 'Cargando...',
		noObjectsLoaded: 'No se cargaron datos',
		languageToggle: 'EN',
		languageLabel: 'Cambiar idioma a inglés',
	},
	en: {
		tagline: 'the universal database of women in history and today',
		search: 'Search',
		searchWoman: 'Search woman',
		loading: 'Loading...',
		noObjectsLoaded: 'No objects loaded',
		languageToggle: 'ES',
		languageLabel: 'Switch language to Spanish',
	},
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState(() => {
		const storedLanguage = localStorage.getItem(STORAGE_KEY);
		return storedLanguage === 'en' || storedLanguage === 'es'
			? storedLanguage
			: DEFAULT_LANGUAGE;
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, language);
	}, [language]);

	const changeLanguage = (nextLanguage) => {
		setLanguage((currentLanguage) => {
			if (nextLanguage === 'en' || nextLanguage === 'es') {
				return nextLanguage;
			}

			return currentLanguage === 'es' ? 'en' : 'es';
		});
	};

	const t = (key) => dictionary[language][key] || dictionary.en[key] || key;

	return (
		<LanguageContext.Provider value={{ language, changeLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}

	return context;
}

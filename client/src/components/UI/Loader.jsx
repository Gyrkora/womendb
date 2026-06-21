import {
	LoaderContainer,
	LoaderMainContainer,
} from '../../styles/Loader.styles';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/loaderexample.css';

export const Loader = () => {
	const { t } = useLanguage();

	return (
		<LoaderMainContainer>
			<LoaderContainer></LoaderContainer>
			<p>{t('loading')}</p>

			{/* <div className="loader">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div> */}
		</LoaderMainContainer>
	);
};

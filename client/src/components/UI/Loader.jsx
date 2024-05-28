import {
	LoaderContainer,
	LoaderMainContainer,
} from '../../styles/Loader.styles';
import '../../styles/loaderexample.css';

export const Loader = () => {
	return (
		<LoaderMainContainer>
			<LoaderContainer></LoaderContainer>
			<p>wait a moment, please 👀</p>

			{/* <div className="loader">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div> */}
		</LoaderMainContainer>
	);
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTools } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const UnderConstruction = () => {
return (
	<div className="container under-construction">
		<FontAwesomeIcon id="icon" icon={faTools} size="6x" />
		<h2>Page under construction</h2>
  </div>
	);
};

export default UnderConstruction;
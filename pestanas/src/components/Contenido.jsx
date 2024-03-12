import PropTypes from 'prop-types';
import '../App.css';

const Contenido = ({content}) => {
    return (
        <div className="content">
            <p>Anime: {content}</p>
        </div>
    )
}

Contenido.propTypes = {
    content: PropTypes.string.isRequired
};

export default Contenido;
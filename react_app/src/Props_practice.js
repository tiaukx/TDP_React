import PropTypes from 'prop-types';

const PropPractice = ({name, age, likes}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Likes: {likes}</p>
        </div>
    )
}

export default PropPractice;

PropPractice.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    likes: PropTypes.string.isRequired,
}
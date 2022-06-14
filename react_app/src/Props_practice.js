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
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    likes: propTypes.string.isRequired,
}
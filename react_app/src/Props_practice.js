import PropTypes from 'prop-types';

const PropPractice = ({name, age, likes, dislikes}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Likes: {likes}</p>
            <p>Dislikes: {dislikes}</p>
        </div>
    )
}

export default PropPractice;

PropPractice.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    likes: PropTypes.string.isRequired,
    dislikes: PropTypes.string.isRequired,
}
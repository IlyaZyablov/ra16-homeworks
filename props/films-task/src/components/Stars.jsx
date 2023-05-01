import PropTypes from 'prop-types';
import Star from './Star';

export default function Stars({ count }) {
  
  const starsArray = [];

  for (let i = 0; i < count; i++) {
    starsArray.push(i + 1);
  }
  
  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray.map(el => 
        <Star key={el} />
      )}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};

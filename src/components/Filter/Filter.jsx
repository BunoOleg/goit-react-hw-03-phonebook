import styles from './Filter.module.css';
import PropTypes from 'prop-types';





const Filter = ({ onFilterInput, value }) => {
  return (
      <label className={styles.label}>
      Find contacts by name
          <input
              className={styles.input}
        type="text"
        value={value}
        onChange={onFilterInput}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
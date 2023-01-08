import React from 'react';
import './error.css'
import PropTypes from 'prop-types';

function Error({ message }) {
  return (
    <div
      className="Error"
    >
      {message}
    </div>
  );
}

Error.defaultProps = {
  message: 'Произошла ошибка при загрузке данных!',
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
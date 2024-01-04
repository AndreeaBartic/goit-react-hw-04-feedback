import React from 'react';
import PropTypes from 'prop-types';

const Sections = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Sections.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Sections;

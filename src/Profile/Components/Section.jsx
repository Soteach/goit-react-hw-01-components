import PropTypes from 'prop-types';

function Section({ user, children }) {
  return (
    <div>
      {user && <h2>{user}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = { user: PropTypes.string };

export default Section;

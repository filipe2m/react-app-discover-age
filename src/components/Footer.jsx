import PropTypes from 'prop-types';

const Footer = ({ text }) => {
  return (
    <footer>{ text }</footer>
  );
};

Footer.defaultProps = {
  text: 'Your Name and LastName',
};

Footer.propTypes = {
  text: PropTypes.string,
};

export default Footer;
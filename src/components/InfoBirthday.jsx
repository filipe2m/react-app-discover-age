import PropTypes from 'prop-types';

const InfoBirthday = ({ classes, infoBirthdays }) => {
  return (
    <>
      {infoBirthdays.map((infoBirthday) => (
        <p className={classes} key={infoBirthday.id}>{infoBirthday.text}</p>
      ))}
    </>
  );
};

InfoBirthday.defaultProps = {
  classes: '',
  infoBirthdays: [],
};

InfoBirthday.propTypes = {
  classes: PropTypes.string,
  infoBirthdays: PropTypes.array,
};

export default InfoBirthday;
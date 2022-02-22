import PropTypes from 'prop-types';

const ListBirthday = ({ birthdays, showBirthday }) => {
  return (
    <div className="column-right">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
            {birthdays.map((birthday) => (
              <tr key={birthday.id} onClick={() => showBirthday(birthday.name, birthday.country, birthday.birthdate)}>
                <td>{birthday.name}</td>
                <td>{birthday.country}</td>
                <td>{birthday.birthdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ListBirthday.defaultProps = {
  birthdays: '',
  showBirthday: null,
};

ListBirthday.propTypes = {
  birthdays: PropTypes.array,
  showBirthday: PropTypes.func,
};

export default ListBirthday;
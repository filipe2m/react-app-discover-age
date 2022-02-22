import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import InfoBirthday from "./InfoBirthday";


const AddBirthday = ({ submitBirthday, infoBirthdays }) => {
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [country, setCountry] = useState('Countries');
  const [date, setDate] = useState('');

  // Fetch Countries to list on select
  const [listCountries, setListCountries] = useState({});

  const fetchCountries = async () => {
    const api = 'https://restcountries.com/v2/all?fields=name';
    const response = await fetch(api);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getCountries = async () => {
      const countriesFromApi = await fetchCountries();
      setListCountries(countriesFromApi);
    };

    getCountries();
  }, []);

  const getDate = new Date();
  const todayMonth = getDate.getMonth() + 1;
  
  const todayDate = `${getDate.getFullYear()}-${todayMonth < 10 ? "0"+todayMonth : todayMonth}-${getDate.getDate()}`;

  const onSubmit = (e) => {
    e.preventDefault();

    if(!firstname) {
      alert('Please add a name');
      return;
    }

    if(!surname) {
      alert('Please add a surname');
      return;
    }

    const name = `${firstname} ${surname}`;

    if(country === 'Countries') {
      alert('Please select a Country');
      return;
    }


    let birthdate;
    if(date === ''){
      alert('Please select a birthday');
      return;
    }else{
      const splitDate = String(date).split('-');
      birthdate = `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
    }

    submitBirthday({ name, country, birthdate });

    setFirstname('');
    setSurname('');
    setCountry('Countries');
    setDate('');
  };

  return (
    <div className="column-left">
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={firstname} 
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="name here"
          />
        </p>
        <p>
          <label htmlFor="surname">Surname:</label>
          <input 
            type="text" 
            id="surname" 
            name="surname" 
            value={surname} 
            onChange={(e) => setSurname(e.target.value)}
            placeholder="surname here" 
          />
        </p>
        <p>
          <label htmlFor="countries">Countries:</label>
          <select 
            name="countries" 
            id="countries" 
            value={country} 
            onChange={
              (e) => setCountry(e.target.value)
            }
          >
            <option value="Countries" disabled>Countries</option>
            {
              Object.values(listCountries).map((listCountry) => (
                <option key={listCountry.id} value={listCountry.name}>
                  {listCountry.name}
               </option>
              ))
            }
          </select>
        </p>
        <p>
          <label htmlFor="birthday">Birthday:</label>
          <input 
            type="date" 
            name="birthday"
            value={date}
            max={todayDate}
            onChange={(e) => setDate(e.target.value)} 
            id="birthday" 
          />
        </p>
        <input type="submit" className='btn' value="Save" />
      </form>
      <InfoBirthday classes="info" infoBirthdays={infoBirthdays} />
    </div>
  );
};

AddBirthday.defaultProps = {
  infoBirthdays: [],
};

AddBirthday.propTypes = {
  submitBirthday: PropTypes.func,
  infoBirthdays: PropTypes.array,
};

export default AddBirthday;
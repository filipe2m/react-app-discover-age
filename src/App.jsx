import { useState } from 'react';

import AddBirthday from './components/AddBirthday';
import ListBirthday from './components/ListBirthday';
import Footer from './components/Footer';

function App() {
  const [birthdays, setBirthdays] = useState([
    {
      id: 1,
      name: 'Julio Dias',
      country: 'Portugal',
      birthdate: '12/05/1988',
    },
    {
      id: 2,
      name: 'Rodrigo Pinto',
      country: 'Portugal',
      birthdate: '11/08/1977',
    },
  ]);

  // Add Birthday
  const addBirthday = (birthday) => {
    const id = Object.keys(birthdays).length + 1;
    const newBirthday = { id, ...birthday };
    setBirthdays([...birthdays, newBirthday]);
    showBirthday(birthday.name, birthday.country, birthday.birthdate);
  };


  const [infoBirthdays, setInfoBirthdays] = useState([
    {
      id: "",
      text: "",
    }
  ]);

  const showBirthday = ( name, country, birthdate ) => {
    const monthNames = [
      "January",
      "February", 
      "March", 
      "April", 
      "May", 
      "June",
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"
    ];

    //Split state's string date to get day, month and year and convert to Number 
    const splitDate = birthdate.split('/');
    const birthDay = parseInt(splitDate[1]);
    const birthMonth = parseInt(splitDate[0]);
    const birthMonthName = monthNames[birthMonth-1];
    const birthYear =  parseInt(splitDate[2]);

    //Get Current day, month and year
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1; 
    const todayYear = today.getFullYear();
    
    //Caclculate current age of selected birthday
    let age;
    if(todayMonth < birthMonth || todayMonth === birthMonth && todayDay <= birthDay ){
      age = todayYear - birthYear;
    }else{
      age = (todayYear - birthYear) + 1;
    }

    //Create new info text with all required information
    const text = `Hello ${name} from ${country}, on ${birthDay} of ${birthMonthName} you will have ${age}`;

    const id = 1;
    setInfoBirthdays([{ id, text }]);
  };

  return (
    <>
      <div className="grid-container">
        <AddBirthday  submitBirthday={addBirthday} infoBirthdays={infoBirthdays} />
        <ListBirthday birthdays={birthdays} showBirthday={showBirthday} />
      </div>
      <Footer text='Project made in 2022' />
    </>
  );
}

export default App;

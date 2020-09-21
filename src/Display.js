import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Display({isThere, Disappear}){
    const [startDate, setStartDate] = useState(new Date());
    const [age, setAge] = useState(10);
    const [name, setName] = useState("Иван Попов");
    const [coach, setCoach] = useState("1");
    const [time, setTime] = useState("8:00");
    if (isThere)
    {
        return(
            <form>
            <div>Имя и Фамилия <input type="text"  value={name} onChange={(e) => setName(e.currentTarget.value)} />Возраст <input type="text" value={age} onChange={(e) => setAge(e.currentTarget.value)}/>Время<input type="text"  value={time} onChange={(e) => setTime(e.currentTarget.value)} /> Дата <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> <select value={coach} onChange={(e) => setCoach(e.currentTarget.value)}>
            <option value="1">Высоцкая Элеонора</option>
            <option value="2">Гайсина Гузель</option>
            <option value="3">Гиголо Анна</option>
            <option value="4">Горбукова Юлия</option>
            <option value="5">Марков Руслан</option>

          </select>   <button onClick={() => Disappear(name, age, startDate, coach, time)}>OK</button> </div>
          </form>
        );
    }
    else
    {
        return <div></div>;
    }
}

export default Display;

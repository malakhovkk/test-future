import React, { useState } from 'react';
import logo from './logo.svg';
import SideBar from './SideBar';
import Top from './Top';
import FirstColumn from './FirstColumn';
import Display from './Display';
import './App.css';

function App() {
  const info = {
    coaches: [{
      id:"1",
      name:'Высоцкая Элеонора',
      color:'#DF1B7D'
    },
    {
      id:"2",
      name:'Гайсина Гузель',
      color:'#52AD5B'
    },
    {
      id:"3",
      name:'Гиголо Анна',
      color:'#FE8900'
    },
    {
      id:"4",
      name:'Горбукова Юлия',
      color:'#00459B'
    },
    {
      id:"5",
      name:'Марков Руслан',
      color:'#2E71F3'
    }],
  };
  const [lessons, setLessons] = useState([]);
  const [isThere, setIsThere] = useState(false);
  function addDisplay()
  {
    setIsThere(true);
  }
  function Disappear(name, age, date, coach, time)
  {
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    setLessons([...lessons, {name, age, day, month, coach, time}]);
    console.log(name, age, day+ "." + month, coach, time);
    setIsThere(false);
  }

  let data = lessons.filter(el => el.day <= 26 && el.day >= 20 && el.month === 9);

  let week = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
  let lessonsForKids = [];
  console.log(lessons);
  console.log(data);
  for(let i = 20; i <= 26; i++){
    for(let n = 0; n < data.length; n++){
      if(data[n].day === i){
        if(!lessonsForKids[i - 20]) lessonsForKids[i - 20] = [data[n]];
        else lessonsForKids[i - 20].push(data[n]);
      }
    }
  }
  let res = [];
  console.log(lessonsForKids)
  for(let i = 0; i < 7; i++){
    let it = lessonsForKids[i];
    let cur = [];
    for(let n = 0;it && n < it.length; n++){
      console.log(lessonsForKids[i][n].time.split(':')[0] * 2, lessonsForKids[i][n].time.split(':')[1] )
      let margin = 33 * ((lessonsForKids[i][n].time.split(':')[0] - 8) * 4 + lessonsForKids[i][n].time.split(':')[1]/30 * 2) ;
      cur.push (<div className="schedule__content" style={{marginTop:margin, borderColor: info.coaches.find(el => el.id === lessonsForKids[i][n].coach).color  }} key={n}>
      <div className="schedule__content__image" >
        <img src="img/profile.png"/>
      </div>
      {lessonsForKids[i][n].name}, {lessonsForKids[i][n].age} лет
    </div>);
    }
   // console.log(cur);
   res.push(<div className="schedule__column" key={i}>
   <div className="schedule__item">
  <div className="date3">{i + 20}.07</div>
     <div className="day">{week[i]}</div>
   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">
   
   </div>
   <div className="schedule__item">
 
   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">
   
   </div>
   <div className="schedule__item">
 
   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">
  
   </div>
   <div className="schedule__item">

   </div>
   <div className="schedule__item">
  
   </div>


   {cur}
 </div>)
    
   // lessonsForKids[i].name
  }
  console.log(res);
    return (

    <div>
    <SideBar/>
    <div className="wrapper">
        <Top add={addDisplay}/>
        <Display isThere={isThere} Disappear={Disappear}/>
        <div className="schedule">
          <div className="schedule__title">20 сентября - 26 сентября 2020 года</div>
      <div className="coaches2">
    {info.coaches.map((el, i) => <div className="coach" key={i}><div className="dot" style={{backgroundColor:el.color}}></div><div className="name_coach"> {el.name}</div></div>)}
      </div>
          <div className="schedule__table">

            <FirstColumn/>
            {res}

          </div>


        </div>
    </div>
</div>

  );
}

export default App;

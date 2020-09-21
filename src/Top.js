import React from 'react';

function Top({add}){
    return(
        <div>
        <div className="top">
        <div className="left">
         <div className="search">
           <div className="find_logo" ></div>
           <input className="find" type="text" placeholder="Поиск клиентов..." />
          </div>
        </div>
        <div className="right">
          <div className="notification">
            <img src="img/notification.png"/>
          </div> 
          <div className="name">
            Alexander Gerasimuk
          </div> 
          <div className="avatar">
            <img src="img/avatar.png"/>
          </div>
        </div>
      </div>
      <div className="top date">
        <div className="left">
          <div className="active_date pick week">
            Неделя
          </div>
          <div className="pick day">
            День
          </div>

        </div>
        <div className="right">
          <div className="add" onClick={add}>
            Добавить 
          </div>
          <div className="filter">
            Фильтр 
          </div>
          <div className="choose_style">
            <div className="list style1">
              <img src="img/list.png"/>
            </div>
            <div className="date2 style1">
              <img src="img/date.png"/>
            </div>
            <div className="book style1">
              <img src="img/book.png"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Top;



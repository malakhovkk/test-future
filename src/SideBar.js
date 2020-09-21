import React from 'react';

function SideBar(){
    return(
    <aside className="side_bar">
        <div className="side_bar__logo">
            <div className="side_bar__logo__img">
                <img src="./img/logo.png"/>
            </div>
        </div>
        <ul className="menu">
            <li className="menu__item exercises">Занятия</li>
            <li className="menu__item students">Учащиеся</li>
            <li className="menu__item coaches active">Тренеры</li>
            <li className="menu__item finance">Финансы</li>
            <li className="menu__item abonements">Абонементы</li>
            <li className="menu__item crm">Доступ в CRM</li>
            <li className="menu__item email">Рассылки</li>
            <li className="menu__item chart">Отчеты</li>
            <li className="menu__item settings">Настройки</li>
        </ul>
    </aside>
    );
}

export default SideBar;
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './styles.scss';
import messi1 from './messi1.gif';
import messi2 from './messi2.png';
import messi3 from './messi3.jpg';



const Sup = () => {
    return (
        <div>
            <h1>Sup Bra?</h1>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga excepturi sunt deserunt, voluptatibus soluta labore saepe, omnis velit veniam ratione explicabo sapiente doloribus quas delectus quam obcaecati. Eligendi, id.</div>
            <img src={messi1} />
            <img src={messi2} />
            <img src={messi3} />
        </div>
    )
}

render(<Sup />, document.getElementById('root'));

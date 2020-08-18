import React from 'react';
import { render } from 'react-dom';
import './css/styles.scss';

import MuiComponent from './components/MuiComponent';

const App = () => {
    const stuff = 5;
    console.log('hey man')

    
    return (
        <div>
            <MuiComponent />
        </div>
    )
}

render(<App />, document.getElementById('root'));

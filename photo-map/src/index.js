import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/**
 *  Main file that will take care of rendering
 *  everything on the top level. 
 */

ReactDOM.render(<App />, document.getElementById('head'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as auth from './Scripts/Authentication';
import * as firebase from './firebase';
/**
 *  Main file that will take care of rendering
 *  everything on the top level.
 */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

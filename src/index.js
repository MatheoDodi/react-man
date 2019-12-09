import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// You can enable the service worker by changing the method below
// to .register(). Please make sure to also uncomment the necessary
// code inside the public/index.html file
serviceWorker.unregister();

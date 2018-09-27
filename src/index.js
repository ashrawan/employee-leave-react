import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './App.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

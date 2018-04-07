import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ERoute from "./router"
import "./style/common.less"
ReactDOM.render(<ERoute/>, document.getElementById('root'));
registerServiceWorker();

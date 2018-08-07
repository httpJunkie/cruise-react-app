import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

import './index.css';
import 'font-awesome/css/font-awesome.css';
import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

registerServiceWorker();
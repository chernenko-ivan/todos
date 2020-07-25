import {render} from 'react-dom';
import {Root} from '../components/Root';
import * as React from 'react';
import {store} from '../stores/createStore';
import './index.less';

render(<Root store={store} />, document.getElementById('root'));

import reportWebVitals from './reportWebVitals';
import {rerenderDOM} from './render'
import state from './redux/state'
  
rerenderDOM(state);

reportWebVitals();

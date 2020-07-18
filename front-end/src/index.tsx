import {render} from "react-dom";
import {Root} from "./components/root";
import * as React from "react";
import {store} from "./stores/createStore";

render(<Root store={store}/>, document.getElementById('root'));


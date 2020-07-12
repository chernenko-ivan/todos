import {render} from "react-dom";
import {Root} from "./components/root";
import * as React from "react";
import {store, tasks} from "./stores/tasks/tasksReducer";

render(<Root/>, document.getElementById('root'));


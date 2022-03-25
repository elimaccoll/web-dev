import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes"
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <div>
            <Link to="hello/">
                <h1>Hello</h1>
            </Link>
            <Link to="tuiter/">
                <h1>Tuiter</h1>
            </Link>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <TodoList/>
            <ReduxExamples/>
        </div>
    )
};
export default Labs;
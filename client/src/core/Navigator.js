import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Auth from '../modules/auth/index'
import ToDoList from '../modules/toDoList/index'

class Navigator extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/auth" component={Auth}></Route>
                <Route path="/ToDoList" component={ToDoList}></Route>
            </Switch>       
        )
    }
}

export default Navigator
import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Navigator from './core/Navigator'
import { RootReducer } from './core/RootReducer'

const store = createStore(RootReducer)

class App extends React.Component {
 render () {
    return <Navigator/>
 }
}


ReactDom.render(
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>,
    document.getElementById('root'),
)
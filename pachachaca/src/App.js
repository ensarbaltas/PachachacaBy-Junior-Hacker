import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Programm from './Components/Programm/Programm'
import Who from './Components/Who/Who'
import Mission from './Components/Mission/Mission'
import Photos from './Components/Photos/Photos'
import Newsletters from './Components/Newsletters/Newsletters'
import Donate from './Components/Donate/Donate'


class App extends Component {
    render() {

        return (
    <div className="App">
        <BrowserRouter>
            <div>
                <Switch> 
                    <Route exact path= '/' component={Home}/>
                    <Route exact path= '/programm' component={Programm}/>
                    <Route exact path= '/who' component={Who}/>
                    <Route exact path= '/mission' component={Mission}/>
                    <Route exact path= '/photos' component={Photos}/>
                    <Route exact path= '/newsletters' component={Newsletters}/>
                    <Route exact path= '/donate' component={Donate}/>
                </Switch>   
            </div>
        </BrowserRouter>
    </div>
        );
    }
}
export default App;
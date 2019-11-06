import React, { Component } from 'react'
import Header from './components/Header'
import {HashRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import jh from './container/homezj/jh';
import all from './container/homezj/all';
import share from './container/homezj/share';
import ask from './container/homezj/ask';
import login from './container/login';

import text from './container/homezj/text';




export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">
                        <Route exact path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/login' component={login}/>

                        <Route exact path='/jh' component={jh}/>
                        <Route exact path='/all' component={all}/>
                        <Route exact path='/share' component={share}/>
                        <Route exact path='/ask' component={ask}/>
                       

                        <Route exact path='/home/:id' component={Home}/>
                        <Route exact path='/jh/:id' component={jh}/>
                        <Route exact path='/all/:id' component={all}/>
                        <Route exact path='/share/:id' component={share}/>
                        <Route exact path='/ask/:id' component={ask}/>
                        <Route exact path='/text/:id' component={text}/>
                        



                    </div>
                    <div className="right">

                    </div>
                </div>
            </Router>
        )
    }
}
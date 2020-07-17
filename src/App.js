import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect,Link, Switch,withRouter,HashRouter} from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';
// import Test from './pages/test'
import TabBar from './pages/member/TabBar'
import Navbar from "./pages/member/NavBar";
import Home from "./pages/member/Home";
import SignIn from "./signIn";

// import {TabBar} from "antd-mobile/lib/tab-bar";

function App() {
  return (

    <div className="App">
        <Router>
        <Navbar/>
        <TabBar/>
        </Router>
    </div>

  );
}

export default App;

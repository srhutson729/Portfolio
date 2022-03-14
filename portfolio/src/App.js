import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './components/App.css';
import Home from './components/Home'; 
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

import 'bootstrap/dist/css/bootstrap.min.css'
import './components/App.css'
import '../node_modules/animate.css/animate.min.css'



function App() {
   return (
     <>
       <Router>
         <Navbar />
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/about' component={About} />
           <Route path='/projects' component={Projects} />
           <Route path='/resume' component={Resume} />
         </Switch>
       </Router>
     </>
   ); 
}


export default App;
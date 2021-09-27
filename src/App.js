import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/Navbar.js';
import {orginals,action,horror,romance,comedy} from './urls'
import {Route} from 'react-router-dom'
import Castcrew from './components/castcrew/Castcrew';


function App() {
  
  return (
   
    <div>
      <Route exact path='/netflix-clone'>
      <Navbar/>
      </Route>
      <Route exact path='/netflix-clone'>
      <Banner/>
      </Route>
      <Route exact path='/netflix-clone'>
      <Card title='Netflix orginals' url={orginals} />
      <Card title='Action' url={action} isSmall />
      <Card title='Horror' url={horror} isSmall />
      <Card title='romance' url={romance} isSmall />
      <Card title='comedy' url={comedy} isSmall/>
      </Route>

      <Route  path='/crew' component={Castcrew}/>
      <Route exact path='/netflix-clone'>
      <Footer/>
      </Route>
      </div>
   
  );
}

export default App;

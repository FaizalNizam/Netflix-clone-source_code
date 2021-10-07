import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import Footer from './components/footer/Footer';
import Navbar from './components/navBar/Navbar.js';
import {orginals,action,horror,romance,comedy,documentaries} from './urls'
import {Route} from 'react-router-dom'
import Castcrew from './components/castcrew/Castcrew';
import Navbar2 from './components/navbar2/Navbar2';

function App() {
  return (
    <div >
      <Route exact path='/netflix-clone'>
      <Navbar/>
      </Route>
      <Route exact path='/netflix-clone'>
      <Banner/>
      </Route>
      <Route exact path='/netflix-clone'>
      <Card title='Popular on Netflix' url={orginals} />
      <Card title='Action Movies' url={action} />
      <Card title='Horror Movies' url={horror}  />
      <Card title='Romantic Movies ' url={romance}/>
      <Card title='Comedy Movies' url={comedy} />
      <Card title='Documentaries' url={documentaries}/>
      </Route>

      <Route path='/crew'>
        <Navbar2/>
        <Castcrew/>
        <Footer/>
      </Route>

      <Route path='/crew2'>
        <Navbar/>
        <Castcrew/>
        <Footer/>
      </Route>

      <Route exact path='/netflix-clone'>
      <Footer/>
      </Route>
    </div>
   
  );
}

export default App;

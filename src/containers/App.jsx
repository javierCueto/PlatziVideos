import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories>
      <Carrusel>
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
        <CarruselItem />
      </Carrusel>
    </Categories>
    <Footer />
  </div>
);

export default App;


import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusel from '../components/Carrusel';
import CarruselItem from '../components/CarruselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carrusel>
            <CarruselItem />
          </Carrusel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carrusel>
          {initialState.trends.map((item) =>
            <CarruselItem key={item.id} {...item} />
          )}
        </Carrusel>
      </Categories>
      <Categories title='Originales de platzi videos'>
        <Carrusel>
          {initialState.originals.map((item) =>
            <CarruselItem key={item.id} {...item} />
          )}
        </Carrusel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout.jsx';
import { Home } from '../containers/Home.jsx';
import { About } from '../containers/About.jsx';
import { UrbanMotorcycles } from '../containers/UrbanMotorcycles.jsx';
import { SportMotorcycles } from '../containers/SportMotorcycles.jsx';
import { AutomaticMotorcycles } from '../containers/AutomaticMotorcycles.jsx';
import { HighEndMotorcycles } from '../containers/HighEndMotorcycles.jsx';
import { Detail } from '../containers/Detail.jsx';
import { Credit } from '../containers/Credit.jsx';
import { Header } from '../components/Header.jsx';
import { AppContext } from '../context/AppContext.js';
import { useInitialState } from '../hooks/useInitialState.js';
import '../css/App.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/motos/urbanas" element={<UrbanMotorcycles />} />
            <Route
              exact
              path="/motos/deportivas"
              element={<SportMotorcycles />}
            />
            <Route
              exact
              path="/motos/automaticas"
              element={<AutomaticMotorcycles />}
            />
            <Route
              exact
              path="/motos/alta-gama"
              element={<HighEndMotorcycles />}
            />
            <Route
              exact
              path="/motos/detalle-moto"
              element={
                <Detail
                  name={initialState.showDetail.name}
                  price={initialState.showDetail.price}
                  description={initialState.showDetail.description}
                  motor={initialState.showDetail.motor}
                  cil={initialState.showDetail.cil}
                  pm={initialState.showDetail.pm}
                  refg={initialState.showDetail.refg}
                  trns={initialState.showDetail.trns}
                  comb={initialState.showDetail.comb}
                  bk_b={initialState.showDetail.bk_b}
                  bk_f={initialState.showDetail.bk_f}
                  wgh={initialState.showDetail.wgh}
                />
              }
            />
            <Route exact path="/sobre-nosotros" element={<About />} />
            <Route exact path="/credito" element={<Credit />} />
            <Route path="*" element={<Header />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };

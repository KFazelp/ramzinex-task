import React, { FC } from 'react';
import { Provider } from 'react-redux';
import './styles/index.scss';
import store from './core/store/store';
import { AllCurrencies } from './views/allCurrencies/allCurrencies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SingleCurrency } from './views/singleCurrency/singleCurrency';

const App: FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<AllCurrencies />} />
            <Route path='/currency/:id' element={<SingleCurrency />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

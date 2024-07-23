import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '../config/routes';
import Main from '../pages/Main';
import History from '../pages/History';
import MenuList from '../widget/MenuList';
import DoneTask from '../pages/DoneTask';
import { Provider } from 'react-redux';
import { store } from '../redux/store';


function App() {
 
  return (
    <Provider store={store}>
       <BrowserRouter>
        <header className="header">
          <MenuList />
        </header>
        <div className="content">
          <Routes>
            <Route path={routes.main.path} element={<Main />} />
            <Route path={routes.done.path} element={<DoneTask />} />
            <Route path={routes.history.path} element={<History />} />
          </Routes>
        </div>
        <footer className='footer'></footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/style.css'
import Headers from './component/Headers/Headers';
import HomePages from './pages/HomePages/HomePages';
import DetailPages from './pages/DetailPages/DetailPages';
import MasterBooks from './pages/MasterData/dataBook/MasterBookPages';
import MasterAuthors from './pages/MasterData/dataAuthors/MasterAuthorPages';
import MasterGenre from './pages/MasterData/dataGenre/MasterGenrePages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/detailPages/:id' element={<DetailPages/>}/>
        <Route path='/DataBook' element={<MasterBooks/>}/>
        <Route path='/DataAuthors' element={<MasterAuthors/>}/>
        <Route path='/DataGenre' element={<MasterGenre/>}/>
        <Route path='*' />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

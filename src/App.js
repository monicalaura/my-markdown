import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyMarkdown from './components/MyMarkdown';


function App() {
  return (
    <div>
      <Header />
  <div className="container-fluid">
    <MyMarkdown />
    </div>

    </div>
  );
}

export default App;

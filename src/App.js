import React from 'react';
import styles from './styles/style.css'
import Search from './components/Search_movie'
function App() {
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <Search/>
    </div>
  );
}

export default App;

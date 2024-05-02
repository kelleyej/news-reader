import NavBar from './NavBar';
import Articles from './Articles';
import { useState, useEffect } from 'react';
import data from './mockdata';
import { Routes, Route } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';

function App() {
const [allArticles, setAllArticles] = useState([])

useEffect(() => {
  setAllArticles(data)
}, [])
console.log(allArticles)

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Articles allArticles={allArticles}/> }/>
        <Route path="/articles/details" element={ <ArticleDetails /> } />
      </Routes>
      
    </div>
  );
}

export default App;

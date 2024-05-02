import NavBar from './NavBar';
import Articles from './Articles';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import NotFound from './NotFound';
import './App.css';

function App() {
const [allArticles, setAllArticles] = useState([])

useEffect(() => {
  getTopHeadlines()
}, [])

function getTopHeadlines() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=020fb8678e4a4f80a349b777eed308c6')
  .then(res => res.json())
  .then(data => setAllArticles(data.articles))
}
console.log(allArticles)
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Articles allArticles={allArticles}/> }/>
        <Route path="/articles/:title" element={ <ArticleDetails allArticles={allArticles}/> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;

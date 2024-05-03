import NavBar from '../NavBar/NavBar';
import Articles from '../Articles/Articles';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ArticleDetails from '../ArticleDetails/ArticleDetails';
import NotFound from '../NotFound/NotFound';
import './App.css';
import Error from '../Error/Error';

function App() {
const [allArticles, setAllArticles] = useState([])
const [error, setError] = useState(null)
useEffect(() => {
  getTopHeadlines()
}, [])

function getTopHeadlines() {
  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`)
  .then(res => {
    if(!res.ok){
      setError(`${res.status}`)
    } else {
      return res.json()
    }
  }) 
  .then(data => setAllArticles(data.articles))
  .catch(error => setError(error.message))
}
console.log(allArticles)
  return (
    <div className="App">
      <NavBar />
      {error ? <Error error={error}/> : 
      <Routes>
        <Route path="/" element={ <Articles allArticles={allArticles}/> }/>
        <Route path="/articles/:title" element={ <ArticleDetails allArticles={allArticles}/> } />
        <Route path="*" element={<NotFound />} />
      </Routes>}
      
    </div>
  );
}

export default App;

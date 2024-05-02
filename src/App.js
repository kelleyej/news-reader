import NavBar from './NavBar';
import Articles from './Articles';
import { useState, useEffect } from 'react';
import data from './mockdata';

function App() {
const [articles, setArticles] = useState([])

useEffect(() => {
  setArticles(data)
}, [])
console.log(articles)

  return (
    <div className="App">
      <NavBar />
      <Articles />
    </div>
  );
}

export default App;

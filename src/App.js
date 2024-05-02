import NavBar from './NavBar';
import Articles from './Articles';
import { useState, useEffect } from 'react';
import data from './mockdata';

function App() {
const [allArticles, setAllArticles] = useState([])

useEffect(() => {
  setAllArticles(data)
}, [])
console.log(allArticles)

  return (
    <div className="App">
      <NavBar />
      <Articles allArticles={allArticles}/>
    </div>
  );
}

export default App;

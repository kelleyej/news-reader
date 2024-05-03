import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ArticleDetails.css';
import NotFound from '../NotFound/NotFound';

export default function ArticleDetails({ allArticles }) {
    const [articleDetails, setArticleDetails] = useState([])
    const [loading, setLoading] = useState(true)

    const articleTitle = useParams().title
    useEffect(() => {
        getArticleDetails()
    }, [])

    function getArticleDetails() {
        const specificArticle = allArticles.filter(article => article.title === articleTitle)
        setArticleDetails(specificArticle)
        setLoading(false)
    }

    if(!articleDetails.length){
        return (
            <NotFound />
        )
    } else {
        
        return (
        <div>
           <Link to="/"><button>⬅</button></Link>
           {(loading) ? <p>Loading...</p> : 
           <div className='details-container'>
             <h2 className='title'>{articleDetails[0].title}</h2>
                <p>{(new Date(articleDetails[0].publishedAt)).toLocaleString()}</p>
                {(!articleDetails[0].urlToImage) ? <div className='no-image'><p>No image available.</p></div> : <img src={articleDetails[0].urlToImage} />}
                <p className='content'>{articleDetails[0].content}</p>
                <p className='source'>Source: {articleDetails[0].source.name}</p>
           </div>
           }
               
        </div> 
    )}
      
    
}
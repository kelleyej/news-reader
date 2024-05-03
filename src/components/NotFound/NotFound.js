import './NotFound.css';
import { Link } from 'react-router-dom'; 

export default function NotFound() {
    return (
        <section className='error-container'>
            <h4 className='error-message'>Oh no! We can't seem to find that page. Please try again later.</h4>
            <Link to='/'><button className='home'>Home</button></Link>
        </section>
    )
}
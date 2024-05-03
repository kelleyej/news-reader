import './Error.css';

export default function Error({ error }) {

    return (
        <section className='err-container'>
            <h2 className='error-heading'>{error}</h2>
            <h3 className='error-mess'>Oh no! Looks like something went wrong. Please try again later.</h3>
        </section>
    )
}
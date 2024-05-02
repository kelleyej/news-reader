import './NotFound.css';

export default function NotFound() {
    return (
        <section className='error-container'>
            <h4 className='error-message'>Oh no! We can't seem to find that page. Please try again later.</h4>
            <img className='not-found' src="https://assets-v2.lottiefiles.com/a/b5641ed8-1152-11ee-ada0-8f4e8e17569e/Y6ez38CH2M.gif" />
        </section>
    )
}
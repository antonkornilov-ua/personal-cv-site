import Header from './../components/header/Header'
const Home = () => {
    return (
        <>
            <Header />
            <main className='section'>
                <div className='container'>
                    <ul className='content-list'>
                        <li className='content-list__item'>
                            <h2 className='title-2'>Frontend</h2>
                            <p>JavaScript, ReactJS, Typescript, Next.JS, HTML, CSS, Tailwind CSS, SCSS, NPM, BootStrap</p>
                        </li>
                        <li className='content-list__item'>
                            <h2 className='title-2'>Works with</h2>
                            <p>Git, Figma, Netlify, Vercel, MongoDB </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Home
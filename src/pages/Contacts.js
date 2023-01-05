function Contacts() {
    return (
        <main className='section'>
            <div className='container'>
                <h1 className='title-1'>Contacts</h1>

                <ul className='content-list'>
                    <li className='content-list__item'>
                        <h2 className='title-2'>Location</h2>
                        <p>Kyiv, Ukraine</p>
                    </li>
                    <li className='content-list__item'>
                        <h2 className='title-2'>Telegram / Viber</h2>
                        <p>
                            <a href='tel:+380990501992'>+380 (99) 050-19-92</a>
                        </p>
                    </li>
                    <li className='content-list__item'>
                        <h2 className='title-2'>Email</h2>
                        <p>
                            <a href='mailto:anton.kornilov@hotmail.com'>anton.kornilov@hotmail.com</a>
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Contacts;

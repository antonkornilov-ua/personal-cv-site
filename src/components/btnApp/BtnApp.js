import './style.css';

const BtnApp = ({ link }) => {
    return (
        <a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
            Link to app
        </a>
        
    );
};

export default BtnApp;

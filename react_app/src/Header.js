import logo from './pusheen.jpg';

const Header = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-sm'>
                <a
                    className='nav-brand'
                    href='www.qa.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img alt='logo' src={logo} width='100'/>
                </a>
                <a href='/' className='navbar-brand'>
                    Todo App
                </a>
            </nav>
        </header>
    )
};

export default Header; 
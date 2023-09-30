import '../styles/navbar.scss'
import { Link  } from 'react-router-dom'
import { ArrowIcon } from "../components/arrow-icon";
import { Logo } from "../components/logo";


function Navbar() {

    return (
        <header className='header-container'>
            <Logo/>
            <nav className='menu-options'>
                <a>
                    <Link to="/">Sobre nós</Link>
                </a>
                <a>
                    <Link to="/ourService">Nossos serviços</Link>
                </a>
                <a>
                    <Link to="/howWeWork">Nosso trabalho</Link>
                </a>
            </nav>
            <button >
            <div className='btn-face-white'>
                <Link to="/contactUs">Fale Conosco</Link>
                <ArrowIcon/>
            </div>
            <div className='btn-face-purple'>
                <Link to="/contactUs">Fale Conosco</Link>
                <ArrowIcon />
            </div>
            </button>
        </header>
    );
}

export default Navbar;
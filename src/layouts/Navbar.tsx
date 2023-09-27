import '../styles/navbar.scss'
import { ArrowIcon } from "../components/arrow-icon";
import { Logo } from "../components/logo";


function Navbar() {

    return (
        <header className='header-container'>
            <Logo/>
            <nav className='menu-options'>
                <a>Sobre nós</a>
                <a>Nossos serviços</a>
                <a>Portfolio</a>
            </nav>
            <button >
            <div className='btn-face-white'>
                Contact us
                <ArrowIcon/>
            </div>
            <div className='btn-face-purple'>
                Contact us
                <ArrowIcon />
            </div>
            </button>
        </header>
    );
}

export default Navbar;
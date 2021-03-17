import img from '../../img/logo.png'
import NavbarSearchBox from './NavbarSearchBox'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/index'>
                    <div className="navbar-brand"><img src={img} className="img-fluid" alt="logo"/></div>                
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto text-capitalize">
                        <Link to="/index">
                            <li className="nav-item active">
                                <a className="nav-link active" href="/#">Inicio</a>
                            </li>
                        </Link>
                        <Link to="/perfil">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Sua conta</a>
                            </li>
                        </Link>
                        <Link to="/chat">
                            <li className="nav-item">
                                <a className="nav-link" href="href=/#">Suas Mensagens</a>
                            </li>
                        </Link>
                        <Link to="/index">
                            <li className="nav-item">
                                <a className="nav-link" href="href=/#">Seus anúncios</a>
                            </li>
                        </Link>                        
                        <Link to="/criarAnuncio">
                            <li className="nav-item">
                                <a className="nav-link" href="/criarAnuncio">Criar Anúncio</a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sair</a>
                        </li>
                    </ul>
                    <NavbarSearchBox/>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
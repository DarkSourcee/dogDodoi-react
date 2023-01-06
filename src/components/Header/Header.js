import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

function Header(){
    const location = useLocation();
    const [pageAtual, setPageAtual] = useState(location.pathname);

    useEffect(() => {
        setPageAtual(location.pathname)
    }, [location]);    

    return(
        <div className="header">
            <div className="header-img">
                <img src="/img/logo.png" alt="Logo" />
            </div>
            <div className="header-nav">
                <nav>
                    {pageAtual === "/Contact" ? (
                        <NavLink  className="btn btn-outline-danger" to="/">Voltar</NavLink>
                    ) : (
                        <NavLink  className="btn btn-outline-danger" to="/Contact">Avaliação Grátis</NavLink>
                    )}                   
                </nav>
            </div>
        </div>
    )
}

export default Header
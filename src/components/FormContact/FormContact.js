import Titles from "../Titles/Titles"
import './FormContact.css'

function FormContact(){
    return(
        <div className="contact">
            <Titles title="Marque uma avaliação gratuita" 
                    subTitle="Consulte nossos veterinários profissionais hoje."
            />
            <form className="FormContact">
                <div className="divPai">
                    <div className="Name">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Informe seu nome" required />
                    </div>
                    <div className="Email">
                        <label for="email">E-Mail</label>
                        <input type="email" id="email" name="email" placeholder="Informe seu email" required />
                    </div>
                    <div className="Fone">
                        <label for="fone">Telefone</label>
                        <input type="phone" id="fone" name="fone" placeholder="Informe seu telefone" required />
                    </div>
                    <button className="btn btn-danger">Quero minha avaliação <span className="negrito">GRÁSTIS!</span></button>
                </div>
            </form>
        </div>
    )
}

export default FormContact
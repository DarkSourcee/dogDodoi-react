import './Banner.css'

function Banner(){
    return(
        <div className='Banner'>
            <h1>Especialistas apaixonados</h1>
            <p>Os melhores cuidados para o seu amigo mais fiel.</p>
            <button className='btn btn-danger'>Quero uma avaliação <span className='negrito'>grátis</span></button>
        </div>
    )
}

export default Banner
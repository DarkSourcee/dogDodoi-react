function Beneficios({icon, title}){
    return(
        <div className="beneficios">
            <img src={icon} alt="Icons" />
            <p>{title}</p>
        </div>
    )
}

export default Beneficios
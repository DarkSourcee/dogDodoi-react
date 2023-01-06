import './Titles.css'

function Titles({ title, subTitle }) {
    return(
        <div className='Titles'>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
    )
}

export default Titles
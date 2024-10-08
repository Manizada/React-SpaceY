import './Card.css'

function Card({styles, photo, photosub, title, subscription}) {
    return (
        <>
            <div className="card">
                <img src={photo} alt={photosub} style={styles}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subscription}</p>
                    <a href="#">Veja Mais</a>
                </div>
            </div>
        </>
    )
}

export default Card
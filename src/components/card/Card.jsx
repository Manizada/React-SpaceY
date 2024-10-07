import './Card.css'

function Card({photo, photosub, tittle, subscription}) {
    return (
        <>
            <div className="card">
                <img src={photo} alt={photosub} />
                <div className="card-body">
                    <h5 className="card-title">{tittle}</h5>
                    <p className="card-text">{subscription}</p>
                    <a href="#">Veja Mais</a>
                </div>
            </div>
        </>
    )
}

export default Card
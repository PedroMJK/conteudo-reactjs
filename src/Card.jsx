import Picture from "./assets/Goku.webp"

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={Picture} alt="Goku" />
            <h2 className="card-title">Goku</h2>
            <p className="card-text">He is a Saiyan who was created on Earth.</p>
        </div>
    );
}

export default Card;
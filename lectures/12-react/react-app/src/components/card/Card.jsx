const Card = ({title, description, image, platform}) => {
    return (
        <article className="game__cod2">
            <div className="cod2__general">
                <div className="cod2__general--img">
                    <img src={image} alt="Game image"/>
                </div>
                <div className="cod2__general--desc">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <ul className="cod2__description">
                <li>Platform - {platform}</li>
            </ul>
        </article>
    );
}

export default Card;

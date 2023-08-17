
const ExpandCard = ({image, title, description}) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <img src={image}/>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ExpandCard;
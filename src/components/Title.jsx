
const Title = ({title, subTitle = "Blog Application"}) => {
    return (
        <div>
            <div>
                <h1 className="text-center">{title}</h1>
                <p className="text-center">{subTitle}</p>
            </div>

        </div>
    );
};

export default Title;
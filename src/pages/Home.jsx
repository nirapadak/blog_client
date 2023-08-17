import Title from "../components/Title.jsx";
import Card from "../components/card/Card.jsx";

const Home = () => {
    return (

        <div>
            <Title title="Home page" subTitle="this is Home page"/>
            <div className="m-2 p-3 container">
                <Card/>
            </div>

        </div>
    );
};

export default Home;
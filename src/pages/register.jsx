import Title from "../components/Title.jsx";
import RegisterCard from "../components/RegisterCard.jsx";

const Register = () => {
    return (
        <div>
            <div>
                <div>
                    <Title title="Register page" subTitle="this is Regster page"/>
                    <div className="p-3 m-2 bg-body-secondary align-content-center card-body">
                        <RegisterCard/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;
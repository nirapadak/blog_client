import {Col,Row,Container,} from "react-bootstrap"
import '/src/assets/css/registerCard.css'
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {useAuth} from "../context/auth.jsx";

const RegisterCard = () => {

    let navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post("https://impossible-lamb-outfit.cyclic.cloud/api/v1/register", {
                name,
                email,
                password,
            });
            console.log(data);

            if (data?.error) {
                toast.error(data.error);
            } else {
                // localStore data update ---------------------
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, token: data.token, user: data.user });
                sessionStorage.setItem("token", data.token);
            
                toast.success("Registration successful");
                navigate('/')

            }
        } catch (err) {
            console.log(err);
            toast.error("Registration failed. Try again.");
        }
    };


    return (

            <Container className="register-container">
                <Row className="justify-content-center align-items-center">
                    <Col md={12} lg={12} xl={100}>
                        <div className="register-form">
                            <h2 className="text-center mb-4">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="form-control mb-4 p-2"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoFocus
                                />

                                <input
                                    type="email"
                                    className="form-control mb-4 p-2"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <input
                                    type="password"
                                    className="form-control mb-4 p-2"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button className="btn btn-primary" type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

    );
};

export default RegisterCard;
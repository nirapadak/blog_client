import { Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";



const CardLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const token = localStorage.getItem("auth");

            if (!token) {
                console.error("Unauthorized user. Please log in.");
                navigate("/login"); // Redirect to login page
                return;
            }

            // Set the Authorization header with the token
            const  config = {
                headers: {
                    Authorization: `${token}`,
                },
            };




            const { data } = await axios.post("https://impossible-lamb-outfit.cyclic.cloud/api/v1/login", {
                email,
                password,
                config
            });
            console.log(data);

            if (data?.error) {
                toast.error(data.error);
            } else {
                localStorage.setItem("auth", JSON.stringify(data));
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

                toast.success("login successful");
                navigate('/')

            }
        } catch (err) {
            console.log(err);
            toast.error("login failed. Try again.");
        }
    };






    return (
        <div>
            <div className="login-container">
                <Container className="register-container">
                    <Row className="justify-content-center align-items-center">
                        <Col md={12} lg={12} xl={100}>
                            <div className="register-form">
                                <h2 className="text-center mb-4">Login</h2>
                                <form onSubmit={handleSubmit}>
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
            </div>
        </div>
    );
};

export default CardLogin;
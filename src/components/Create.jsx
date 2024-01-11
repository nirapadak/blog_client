import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const Create = ({myTitle}) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [blogCategory, setBlogCategory] = useState("");
    const [author, setAuthor] = useState("");

    let {id} = useParams();





    const handleSubmit = async (e) => {
        e.preventDefault();
        try {



            let url = "https://impossible-lamb-outfit.cyclic.cloud/api/v1/update/"+id
            if(!id){
                url = "https://impossible-lamb-outfit.cyclic.cloud/api/v1/blog"
            }

            
            const { data } = await axios.post(url, {
                    title,
                    description,
                    image,
                    blogCategory,
                    author,
            });
            console.log(data);
            

            if (data?.error) {
                toast.error(data.error);
            } else {
                localStorage.setItem("auth", JSON.stringify(data));
                toast.success("save changes");
                navigate('/')

            }
        } catch (err) {
            console.log(err);
            toast.error("Request failed. Try again.");
        }
    };



    return (
        <div>
            <Container className="register-container">
                <Row className="justify-content-center align-items-center">
                    <Col md={12} lg={12} xl={100}>
                        <div className="register-form">
                            <h2 className="text-center mb-4">{myTitle}</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="form-control mb-4 p-2"
                                    placeholder="Enter your Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    autoFocus
                                />


                                <input
                                    type="Decription"
                                    className="form-control mb-4 p-2"
                                    placeholder="Enter your Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <input
                                    type="text"
                                    className="form-control mb-4 p-2"
                                    placeholder="Enter image Url"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-4 p-2"
                                    placeholder="Enter Caregory"
                                    value={blogCategory}
                                    onChange={(e) => setBlogCategory(e.target.value)}
                                    autoFocus
                                />
                                <input
                                    type="text"
                                    className="form-control mb-4 p-2"
                                    placeholder="Author Name"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    autoFocus
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
    );
};

export default Create;
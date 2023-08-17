import {useEffect, useState} from "react";
import axios from "axios";
// import {useNavigate} from "react-router-dom";
import '/src/assets/css/card.css'
import '/src/assets/card.js'
import {Link} from "react-router-dom";

const Card = () => {

    // const navigate =useNavigate()

    const [data, setData] = useState([])
    const [id, setId] = useState(0);

    useEffect(() => {
        (async ()=>{
            const response = await axios.get("https://impossible-lamb-outfit.cyclic.cloud/api/v1/list");
            setData(response.data);
        })()
    }, [id]);


    const onDelete =async (id)=>{
    let url = "https://impossible-lamb-outfit.cyclic.cloud/api/v1/delete/"+id;
    await axios.delete(url)
        setId(id)

    }








    return (
        <div className="cards">
            {
                data.map((item, index)=>{
                    return(
                        <div key={index}>

                            <div className="card">
                                <div className="card__image-holder">
                                    <img className="card__image" src={item['image']} alt="wave" />
                                </div>
                                <div className="card-title">
                                    <a href="#" className="toggle-info btn">
                                        <span className="left"></span>
                                        <span className="right"></span>
                                    </a>
                                    <h2 className="myTitle">
                                        {item['title']}
                                    </h2>
                                </div>
                                <div className="card-flap flap1">
                                    <div className="card-description">
                                        {item['description']}
                                    </div>
                                    <div className="card-flap flap2">
                                        <div className="card-actions">
                                            <Link to={'/update/'+item['_id']} className="btn btn-primary">Edit</Link>
                                            <a onClick={async ()=>{onDelete(item['_id'])}} className="btn btn-danger">Delete</a>
                                            <a className="btn">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Card;
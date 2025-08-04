import "./Card.css";
import { useState } from "react";


function Card(props) {
    const totalStars = 5;
    const rate = parseFloat(props.rate);
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate - fullStars >= 0.25 && rate - fullStars <= 0.75;
    const stars = [];
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    for (let i = 0; i < totalStars; i++) {
        if (i < fullStars) {
            stars.push(<span key={i} className="fa fa-star checked"></span>);
        } else if (i === fullStars && hasHalfStar) {
            stars.push(<span key={i} className="fa fa-star-half-o half-checked"></span>);
        } else {
            stars.push(<span key={i} className="fa fa-star unchecked"></span>);
        }
    }

    const conformOrder = () => {
        setToastMsg(`✅ Order confirmed! Your dish is ${props.name}. Pay ${props.price} only!`);
        setShowToast(true);

        setTimeout(() => {
        setToastMsg("🙏 Thank you! Visit again!");
        }, 5000);

        setTimeout(() => {
        setShowToast(false);
        }, 9000);
    };



    return (
        <div className="card-container">
            <div className="card">
                <div className="img">
                    <img src={props.img} alt={props.name} />
                </div>
                <div className="rating">
                    <h3 id="rat">Rating : {props.rate}</h3>
                    {stars}
                </div>
                <div className="name">
                    <h3>Name: {props.name}</h3>
                </div>
                <div className="price">
                    <h3>Price: {props.price}</h3>
                </div>
                <div className="order">
                    <button onClick = {conformOrder}>Order Now</button>
                </div>
            </div>

            {showToast && (
        <div className="custom-toast">
          {toastMsg}
        </div>
      )}
            
        </div>
    );
}

export default Card;

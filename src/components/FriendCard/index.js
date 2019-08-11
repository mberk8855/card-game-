import React from "react";
import "./style.css";

function FriendCard(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.onclickcard(props.id)} />
      </div>
    
    </div>
  );
}

export default FriendCard;

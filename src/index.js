import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Batman"
      img="https://akns-images.eonline.com/eol_images/Entire_Site/2019414/rs_600x600-190514063109-600-George-Clooney-Batman-LT-051419-GettyImages-607408286.jpg?fit=around%7C300:300&output-quality=90&crop=300:300;center,top"
      alt="avatar_img"
      phone="+123 456 789"
      email="batman@batman.com"
    />
    />
  </div>,
  document.getElementById("root")
);

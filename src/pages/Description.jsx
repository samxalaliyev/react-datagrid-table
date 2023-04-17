import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Description = () => {
  const [proDetails, setproDetails] = useState({});
  const [proDetails2, setproDetails2] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setproDetails(res.data);
      setproDetails2(res.data.rating);

      console.log(res.data.rating);
    });
  }, []);

  const { title, image, price, category, description } = proDetails;
  const { rate } = proDetails2;
  return (
    // <div className='details'>
    //   <h2>Category: {category} </h2>
    //   <img src={image} alt="img" />
    //   <h2>Rate: {rate}</h2>
    //   <h2>Price: {price} </h2>
    //   <h3>{title}</h3>
    //   <p>{description}</p>

    // </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Description;

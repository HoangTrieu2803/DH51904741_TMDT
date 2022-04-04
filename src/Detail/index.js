import React,{useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Slider from "react-slick";
import data from "../HomePage/Product/data.json"
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
export default function Detail() {
  const {id} = useParams();
  const handleRender = () =>{
    return data.map((item,index)=>{
      if(item.id == id){
        return(
          <>
           <div className="col-sm-6 left-body">
             <img height="500px" src ={`../${item.hinhAnh}`} />
           </div>
           <div className="col-sm-6 right-body">
             <h4>Name : {item.tenSP}</h4>
             <p>Brand</p>
             <p>Price : {item.giaSP}</p>
             <button className="btn btn-success">BUY</button>
           </div>
           </>
         );
      }
    })
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const renderData = () =>{
      return data.map((item,index)=>{
        return(
            <div key={index} className="pb-5">
                <img width="90%" src="../img/product.png"/>
                <p className="pt-3" style={{color:"white"}}>{item.giaSP}</p>
            </div>
        )
      })
  }
  return (
    <div className="detail pt-5">
      <h1 className="title">Product Details</h1>
      <div className="detail-body row">
          {handleRender()}
      </div>
      <div className="decs container">
        <h1 className="title">Description</h1>
        <p>
          <span>Ingredient :</span> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Animi, nihil quas
          nesciunt obcaecati a facere.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere.
        </p>
        <p>
          <span>Nutritional :</span> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Animi, nihil quas
          nesciunt obcaecati a facere.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere.
        </p>
        <p className="pb-5">
          <span>Description :</span> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Animi, nihil quas
          nesciunt obcaecati a facere.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Animi, nihil quas
          nesciunt obcaecati a facere.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Animi, nihil quas
          nesciunt obcaecati a facere. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Animi, nihil quas
          nesciunt obcaecati a facere.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Animi, nihil quas nesciunt obcaecati a facere.
        </p>
        <hr />
      </div>
      <div className="similar-product">
        <h1 className="title">Similar Product</h1>
        <div className="container">
          <Slider {...settings}>
            {renderData()}
          </Slider>
        </div>
      </div>
    </div>
  );
}

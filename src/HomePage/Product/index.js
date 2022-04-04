import React, { useState,useEffect } from "react";
import newArrival from "./data.json";
import Special from "./data1.json"
import bestSeller from "./data2.json"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./style.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux"
import { actDetail } from "../../Action/detail";
export default function Product() {
  const dispatch = useDispatch();
  const [product , setProduct] = useState([])
  const findIndex = (id) =>{
    return product.findIndex((item)=>{
        return item.id === id
    });
  }
  const selectItem = (item) =>{
    const list = [...product]
    const index = findIndex(item.id)
    if(index !== -1){
      product[index].soLuong += 1;
    }
    else{
      const listProduct= {
        id : item.id,
        tenSP: item.tenSP,
        giaSP: item.giaSP,
        hinhAnh: item.hinhAnh,
        soLuong: 1
      }

      list.push(listProduct)
    }
    setProduct(list)
  }
  useEffect(()=>{
    dispatch(actDetail(product))
  })
  const handleRenderProduct = () => {
    return newArrival.map((item, index) => {
      return (
        <div key={index} className="col-sm-4">
          <div className="card" style={{ width: "16rem" }}>
            <Link to={`/detail/${item.id}`}>
            <img height="250px" style={{objectFit:"cover"}} src={`./${item.hinhAnh}`} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
             <div className="row">
                 <div className="col-sm-8">
                 <h3>{item.tenSP}</h3>
              <p>{item.giaSP}</p>
                 </div>
                 <a onClick={()=>{
                   selectItem(item)
                 }} style={{cursor:"pointer"}} className="col-sm-2 ml-4">
                    <AddShoppingCartIcon/>
                 </a>
             </div>
            </div>
          </div>
        </div>
      );
    });
  }
  const handleRenderProduct1 = () =>{
    return Special.map((item, index) => {
        return (
          <div key={index} className="col-sm-4">
            <div className="card" style={{ width: "16rem" }}>
              <img src="./img/product.png" className="card-img-top" alt="..." />
              <div className="card-body">
               <div className="row">
                   <div className="col-sm-8">
                   <h3>{item.tenSP}</h3>
                <p>{item.giaSP}</p>
                   </div>
                   <div className="col-sm-2 ml-4">
                      <AddShoppingCartIcon/>
                   </div>
               </div>
              </div>
            </div>
          </div>
        );
      });
  }
  const handleRenderProduct2 = () =>{
    return bestSeller.map((item, index) => {
        return (
          <div key={index} className="col-sm-4">
            <div className="card" style={{ width: "16rem" }}>
              <img src="./img/product.png" className="card-img-top" alt="..." />
              <div className="card-body">
               <div className="row">
                   <div className="col-sm-8">
                   <h3>{item.tenSP}</h3>
                <p>{item.giaSP}</p>
                   </div>
                   <div className="col-sm-2 ml-4">
                      <AddShoppingCartIcon/>
                   </div>
               </div>
              </div>
            </div>
          </div>
        );
      });
  }
  return (
    <div className="product">
      <h1 className="title">Products</h1>
      <div>
        <ul
          className="nav nav-pills mb-3 d-flex justify-content-around"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              New Arrival
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Special
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Best Seller
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row container product-item">
                {handleRenderProduct()}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row container product-item">
            {handleRenderProduct1()}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
           <div className="row container product-item">
                {handleRenderProduct2()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

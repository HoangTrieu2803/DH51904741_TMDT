import React, { useState, useEffect } from "react";
import "./style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector,useDispatch } from "react-redux";
import { actListProduct } from "../../Action/listproduct";
export default function CartModal() {
  const product = useSelector((state) => state.detailReducer.product);
  const [listProduct, setListProduct] = useState([]);
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(actListProduct(listProduct))
  // })
  const [select, setSelect] = useState(false);
  const findIndex = (id) => {
    return product.findIndex((item) => {
      return item.id === id;
    });
  };
  const handleUpdateQuantity = (id, status) => {
    const index = findIndex(id);
    if (index !== -1) {
      let listCart = [...product];
      if (status) {
        listCart[index].soLuong += 1
      }
      else {
        if (listCart[index].soLuong > 1) {
          listCart[index].soLuong -= 1
        }else if(listCart[index].soLuong <= 1)
        {
          listCart.splice(index, 1)
        }
      }
      setListProduct(listCart);
    }
  };
  const handleDelete = (id) => {
    const index = findIndex(id);
    let listCart = [...product];
    if (index !== -1) {
      listCart.splice(index, 1);
    }
    setListProduct(listCart)
  };
  const renderProduct = () => {
    return product?.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <img
              width="50px"
              height="50px"
              style={{ objectFit: "cover" }}
              src={`./${item.hinhAnh}`}
            />
          </td>
          <td>
            <button
              onClick={()=>{
                handleUpdateQuantity(item.id, false)
              }}
              className="btn"
            >
              -
            </button>
            {item.soLuong} <button onClick={()=>{
              handleUpdateQuantity(item.id,true)
            }} className="btn">+</button>
          </td>
          <td style={{lineHeight:"30px"}}>{item.giaSP * item.soLuong}</td>
          <td><button onClick={()=>{
            handleDelete(item.id)
          }} className="btn btn-danger">x</button></td>

        </tr>
      );
    });
  };
  return (
    <div>
      <a
        onClick={() => {
          select ? setSelect(false) : setSelect(true);
        }}
        style={{ cursor: "pointer" }}
        id="cart-select"
      >
        <ShoppingCartIcon style={{ color: "white" }} />
      </a>
      <div
        style={{ display: `${select ? "block" : "none"}`, zIndex: "1000" }}
        className="cart-modal"
      >
        <table className="table text-center cart-item">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Count</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>{renderProduct()}</tbody>
        </table>
      </div>
    </div>
  );
}

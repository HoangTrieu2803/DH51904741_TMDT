import React from 'react'
import "./style.css"
import {useSelector} from "react-redux"
export default function Paid() {
  const product = useSelector((state)=> state.detailReducer.product)
  console.log(product)
  return (
    <div className='cart'>
        <h1 className='title'>Cart</h1>
         <div className="container">
      <table class="table" id="top-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" style={{ color: "red" }}>
              Tên sản phẩm
            </th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Tổng đơn hàng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td className="table-img">
              <img src="./img/product.png" />{" "}
              <span style={{ fontWeight: "bold" }}>Sản phẩm</span>
            </td>
            <td>180.000</td>
            <td>1</td>
            <td style={{ color: "red" }}>180.000đ</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              Tạm tính:{" "}
              <span style={{ color: "red" }} className="pl-4">
                180.000đ
              </span>{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <div className="row bottom-content">
          <div className="col-md-6 payment-method">
            <div className="payment">
              <div className="form-group row">
                <label htmlFor className="col-md-5">
                  Mã khuyến mãi
                </label>
                <div className="col-md-7 discount">
                  <input
                    className="form-control"
                    id="discount_code"
                    name="discount_code"
                    placeholder="Nhập mã"
                  />
                  <button
                    type="button"
                    id="discount-apply"
                    className="btn btn-danger btn-block"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor className="col-md-5">
                  Thời gian giao hàng
                </label>
                <div className="col-md-7">
                  <select
                    className="form-control"
                    id="delivery_time"
                    name="delivery_time"
                  >
                    <option value>Thời gian giao hàng</option>
                    <option value={3}>10:00 - 11:00</option>
                    <option value={1}>11:00 - 12:00</option>
                    <option value={2}>16:00 - 17:00</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor className="col-md-5">
                  Phương thức thanh toán
                </label>
                <div className="col-md-7">
                  <select className="form-control" name="pay_method">
                    <option value="Zalo">Thanh toán Zalo Pay</option>
                    <option value="MOMO">Momo</option>
                    <option value="BANK TCB">Chuyển khoản Techcombank</option>
                    <option value="BANK VCB">Chuyển khoản Vietcombank</option>
                  </select>
                </div>
              </div>
              <div className="form-group mt-md-4">
                <label htmlFor>Note</label>
                <textarea
                  className="form-control"
                  name="note_order"
                  placeholder="Thời gian có thể nhận hàng cụ thể nếu có"
                  defaultValue={""}
                />
              </div>
              <div className="form-group mt-md-4">
                <label htmlFor>Note</label>
                <textarea
                  className="form-control"
                  name="note"
                  placeholder="Ghi chú về địa chỉ giao hàng (block chung cư, tên tòa nhà văn phòng...)"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-lg-2 col-lg-4 mb-3 text-right payment-summary">
            <div className="row mb-md-2">
              <div className="col-7">Phí ship</div>
              <div className="col-5 price">0đ</div>
            </div>
            <div className="row mb-md-2">
              <div className="col-7">Giảm giá</div>
              <div className="col-5 price">0đ</div>
            </div>
            <div className="row total mt-md-4">
              <div className="col-7">Tổng đơn hàng:</div>
              <div className="col-5 text-price">
                <strong style={{color:"red"}}>180.000đ</strong>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{textAlign:"right"}}>
          <button className="btn btn-danger">Hoàn thành</button>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

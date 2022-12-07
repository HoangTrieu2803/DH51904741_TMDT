import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./style.css";
export default function Footer() {
  return (
    <div className="top-footer pt-5" id="my-footer">
      <div className="row">
        <div className="col-sm-5">
          <h5 className="footer-title">CÔNG TY TNHH GRIVAL</h5>
          <p>
            <LocationOnIcon /> 180 Cao Lỗ, Phường 4, Quận 8
          </p>
          <p>
            <LocalPhoneIcon /> (+84) 123 456 789 [hotline] - (+84) 123 456 789
            [sms]
          </p>
          <p>
            <EmailIcon /> info@grival.vn. For business inquiries:
            business@grival.vn
          </p>
          <p>
            MST 0313272749 do Sở kế hoạch và đầu tư TPHCM cấp ngày 26/05/2015
          </p>
        </div>
        <div className="col-sm-3">
          <h5 className="footer-title">ĐIỀU KHOẢN CHUNG</h5>
          <p>Chính Sách Quy Định Chung</p>
          <p>Quy Định Hình Thức Thanh Toán</p>
          <p>Chính Sách Vận Chuyển Giao Hàng</p>
          <p>Chính Sách Bảo Mật Thông Tin</p>
        </div>
        <div className="col-sm-3 footer-img">
          <h5 className="footer-title">FOLLOW US</h5>
          <p>
            <FacebookIcon /> <InstagramIcon /> <YouTubeIcon /> <TwitterIcon />{" "}
          </p>
          <form>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="button" className="btn btn-success">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

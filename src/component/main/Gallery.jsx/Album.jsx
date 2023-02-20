import dulich from "../../assets/img/web1.png";
import raily from "../../assets/img/web2.png";
import aawindows from "../../assets/img/web3.png";
export default function Album(props) {
  return (
    <>
      <div className="container-box-gallery">
        <div className="img-box">
          <img src={dulich} className="img-color"alt="dulichthanhtuan"/>
          <div>
            <p>Cho thuê xe du lịch Thanh Tuấn</p>
            <p>
              <span>Website:</span>
              <a href="https://chothuedulich4c7c16c.com/">
                https://chothuedulich4c7c16c.com/
              </a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src={raily} className="img-color" alt="railystore" />
          <div>
            <p>Raily Store</p>
            <p>
              <span>Website:</span>
              <a href="https://raily.vn/">https://raily.vn/</a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src={aawindows} className="img-color" alt="aawindows" />
          <div>
            <p>Công ty TNHH SX TM AA WINDOWS</p>
            <p>
              <span>Website:</span>
              <a href="http://aawindows.vn/">http://aawindows.vn/</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

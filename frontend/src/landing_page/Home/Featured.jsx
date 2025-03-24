import "./Featured.css";

function Featured() {
  return (
    <div className="container featured-container">
      <div className="row first-row-feature">
        <div className="col-6">
          <h2 style={{fontSize:"3rem"}}>Featured Categories</h2>
        </div>
        <div className="col-4"></div>
        <div className="col-2 featured-btn">
          <button className="btn-left">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button  className="btn-right">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="row second-row-feature">
        <div className="col colls">
          <div className="sideTable-img"></div>
          <div className="sideTable-des description">
            <h6 className="sideTable-heading">Side Table</h6>
            <p  className="sideTable-det">Discover 120Products</p>
          </div>
        </div>
        <div className="col colls">
          <div className="armChair-img"></div>
          <div className="armChair-des description">
            <h6 className="armChair-heading">Arm Chair</h6>
            <p className="armChair-det">Discover 145Products</p>
          </div>
        </div>
        <div className="col colls">
          <div className="dinnerTable-img"></div>
          <div className="dinnerTable-des description">
            <h6 className="dinnerTable-heading">Dinner Table</h6>
            <p className="dinnerTable-det">Discover 120Products</p>
          </div>
        </div>
        <div className="col colls">
          <div className="pillow-img"></div>

          <div className="pillow-des description">
            <h6 className="pillow-heading">Pillow</h6>
            <p className="pillow-det">Discover 150Products</p>
          </div>
        </div>
        <div className="col colls">
          <div className="wallClock-img"></div>
          <div className="wallClock-des description">
            <h6 className="wallClock-heading">Wall Clock</h6>
            <p className="wallClock-det">Discover 40Products</p>
          </div>
        </div>
      </div>
      <div className=" third-row-feature">
        <div className="col-4"></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Featured;

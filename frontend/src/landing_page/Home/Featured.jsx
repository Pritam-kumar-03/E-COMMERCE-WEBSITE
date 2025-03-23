import "./Featured.css";

function Featured() {
  return (
    <div className="container ">
      <div className="row first-row-feature">
        <div className="col-4">
          <h2>Featured Categories</h2>
        </div>
        <div className="col-6"></div>
        <div className="col-2">
          <button>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="row second-row-feature">
        <div className="col">
          1<div className="sideTable-img"></div>
          <div className="sideTable-des">
            <h6 className="sideTable-heading">Side Table</h6>
            <p className="sideTable-det">Discover 120Products</p>
          </div>
        </div>
        <div className="col">
          1<div className="armChair-img"></div>
          <div className="armChair-des">
            <h6 className="armChair-heading">Arm Chair</h6>
            <p className="armChair-det">Discover 145Products</p>
          </div>
        </div>
        <div className="col">
          1<div className="dinnerTable-imgs"></div>
          <div className="dinnerTable-des">
            <h6 className="dinnerTable-heading">Dinner Table</h6>
            <p className="dinnerTable-det">Discover 120Products</p>
          </div>
        </div>
        <div className="col">
          1<div className="pilow-img"></div>
          <div className="pillow-des">
            <h6 className="pillow-heading">Pillow</h6>
            <p className="pillow-det">Discover 150Products</p>
          </div>
        </div>
        <div className="col">
          1<div className="wallClock-img"></div>
          <div className="wallClock-des">
            <h6 className="wallClock-heading">Wall Clock</h6>
            <p className="wallClock-det">Discover 40Products</p>
          </div>
        </div>
      </div>
      <div className="row third-row-feature">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Featured;

import "./Support.css";

function Support() {
  return (
    <div className="conatiner mt-5">
      <div className="row">
        <div className="col-3">
          <span className="support-icon1">
            <i class="fa-solid fa-truck"></i>
          </span><br></br>
          <span>
            Fast & Free <br /> Shipping
          </span>
        </div>
        <div className="col-3">
          <span className="support-icon2">
            <i class="fa-solid fa-bag-shopping"></i>
          </span><br></br>
          <span>
            Easy to <br />
            Shop
          </span>
        </div>
        <div className="col-3">
          <span className="support-icon3">
            <i class="fa-solid fa-phone-volume"></i>
          </span><br></br>
          <span>
            24/7 <br />
            Support
          </span>
        </div>
        <div className="col-3">
          <span className="support-icon3">
            <i class="fa-solid fa-arrows-rotate"></i>
          </span><br></br>
          <span>
            Hassle Free <br />
            Returns
          </span>
        </div>
      </div>
    </div>
  );
}

export default Support;

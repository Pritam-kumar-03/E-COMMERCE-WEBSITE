import "./Support.css";

function Support() {
  return (
    <div className="container mt-5 support-container ">
      <div className="row support-row mb-5">
        <div className="col-3 support-first-col">
          <span className="support-icon1">
            <i class="fa-solid fa-truck"></i>
          </span><br></br>
          <div className="suppot-state">
            Fast & Free <br /> Shipping
          </div>
        </div>
        <div className="col-3">
          <span className="support-icon2">
            <i class="fa-solid fa-bag-shopping"></i>
          </span><br></br>
          <div className="suppot-state">
            Easy to <br />
            Shop
          </div>
        </div>
        <div className="col-3">
          <span className="support-icon3">
            <i class="fa-solid fa-phone-volume"></i>
          </span><br></br>
          <div className="suppot-state">
            24/7 <br />
            Support
          </div>
        </div>
        <div className="col-3">
          <span className="support-icon3">
            <i class="fa-solid fa-arrows-rotate"></i>
          </span><br></br>
          <div className="suppot-state">
            Hassle Free <br />
            Returns
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;

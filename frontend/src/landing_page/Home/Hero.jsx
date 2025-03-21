import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid hero-container  ">
      <div className="row hero-row">
        <div className="col-6 hero-first-col">
          <div>
            <span className="hero-des-head">FURNITURE DESIGNS IDEA</span>
          </div>
          <div>
            <h2 className="hero-heading">
              Modern Interior <br></br>
              Design Studio
            </h2>
          </div>
          <div>
            <p className="Hero-paragrah">
              Choosing the right furniture for your home online will add{" "}
              <br></br>elegance and functionality to your interior while{" "}
              <br></br>it will also be cost-effective and long-lasting.
            </p>
          </div>
          <div className="btn-div-hero mb-5">
            <span>
              <button className="btn-shop">
                Shop Now<i class="fa-solid fa-arrow-right"></i>{" "}
              </button>
            </span>
            <span className="follow">
              <a href="https://www.instagram.com/invites/contact/?igsh=145ttsw03rosi&utm_content=ql5qpwr">
                Follow Instagram
              </a>
            </span>
          </div>
        </div>
        <div className="col-6 hero-second-col">
          <div className="row">
            <div className="col-8 hero-img-bedroom">
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginLeft: "30px",
                  marginBottom: "30px",
                }}
              >
                Bed Room
              </span>
              <span style={{ marginLeft: "150px", marginBottom: "30px" }}>
                <span style={{ fontSize: "20px", fontWeight: "500" }}>
                  1200+
                </span>{" "}
                item
              </span>
            </div>
            <div className="col-2 hero-img-living">
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginLeft: "30px",
                  marginBottom: "30px",
                }}
              >
                Living Room
              </span>
              <span style={{ marginLeft: "150px", marginBottom: "30px" }}>
                <span style={{ fontSize: "20px", fontWeight: "500" }}>
                  1000+
                </span>{" "}
                item
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row bottom-row pb-5">
        <div
          className="col-6"
          style={{ paddingLeft: "12rem", paddingRight: "8rem", marginTop:"1.2rem" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h6>2500+</h6>
              <p>Unique Styles</p>
            </div>
            <div>
              <h6>5000+</h6>
              <p>Happy Customer</p>
            </div>
            <div>
              <h6>300+</h6>
              <p>Certified Outlets</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div style={{marginTop:"30px"}}>
            <button className=" btn-Next "><i class="fa-solid fa-arrow-left"></i></button>
            <button className="btn-Next mx-3"><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

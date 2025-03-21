import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid hero p-5">
      <div className="row hero-row">
        <div className="col-6 hero-first-col">
          <div>
            <h6>FURNITURE DESIGNS IDEA</h6>
          </div>
          <div>
            <h2>
              Modern Interior <br></br>
              Design Studio
            </h2>
          </div>
          <div>
            <p>
              Choosing the right furniture for your home online will add{" "}
              <br></br>elegance and functionality to your interior while{" "}
              <br></br>it will also be cost-effective and long-lasting.
            </p>
          </div>
          <div>
            <span>
              <button>
                Shop NOW<i class="fa-solid fa-arrow-right"></i>{" "}
              </button>
            </span>
            <span>Follow Instagram</span>
          </div>
          <div style={{ display: "flex" }}>
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
        <div className="col-6 hero-second-col">
          <div className="row">
            <div className="col-8 hero-img-bedroom">
              <span>Bedroom</span>
              <span>1200+ item</span>
            </div>
            <div className="col-2 hero-img-living"></div>
          
            
           

          </div>
          <div>
            <button>1</button>
            <button>2</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

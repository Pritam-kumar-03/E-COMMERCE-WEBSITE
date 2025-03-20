import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid hero">
      <div className="row hero-row">
        <div className="col-5 hero-first-col">
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
          <div>
            <span>
              2500+
              Unique Styles
            </span>
            <span>
              5000+
              Happy Clients
            </span>
            <span>
                300+
                Cerified Outlets
            </span>
          </div>
        </div>
        <div className="col-7 hero-second-col">2</div>
      </div>
    </div>
  );
}

export default Hero;

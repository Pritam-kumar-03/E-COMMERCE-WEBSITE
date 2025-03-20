import "./Navbar.css"

function Navbar() {
  return (
    <div className="container-fluid Navbar">
      <div className="row Navbar_row ">
        <div className="col-3 nav-first-col ">
          <span> 
            <h1  className="Nav-heading">FurniFlex</h1>
          </span>
        </div>
        <div className="col-6 nav-second-col  ">
          <div className="nav-second-col-div pt-2">
            <ul className="nav-second-col-ul">
              <li className="nav-links">
                {" "}
                <a href="">Home</a>
              </li>
              <li className="nav-links">
                {" "}
                <a href="">Products</a>
              </li>
              <li className="nav-links">
                {" "}
                <a href="">About us</a>
              </li>
              <li className="nav-links">
                {" "}
                <a href=""> Contact us</a>
              </li>
              <li className="nav-links">
                {" "}
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3 nav-third-col">
          <span className="nav-icons">
            <i class="fa-solid fa-search"></i>
            
          </span>
          <span className="nav-icons">
            <i class="fa-regular fa-heart"></i>
          </span>
          <span className="nav-icons">
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="nav-icons">
            <i class="fa-regular fa-user"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

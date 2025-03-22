import "./collection.css";

function Collection() {
  return (
    <div className="container collection-container mt-5">
      <div className="row collection-row">
        <div className="col-7 row-first-col">
          <div className="row first-col-firstrow">
            <div className="col-12 center-table">
              <div className=" center-table-row">
                <div className=" center-table-des">
                  <p style={{borderR:""}}>NEW COLLECTION</p>
                  <h5>Center Table</h5>
                  <ul>
                    <li>Square table</li>
                    <li>Round table</li>
                    <li>Wooden table</li>
                    <li>Glass table</li>
                  </ul>
                  <a href="">
                    View All <i class="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className=" center-table-img"></div>
                </div>

               
              </div>
            </div>
          </div>
          <div className="row first-col-secondrow">
            <div className="col-6 lighting-lamp">
              <p className="col-7 lighting-lamp-des">
                {" "}
                <p>NEW COLLECTION</p>
                <h5>Lighting Lamp</h5>
                <ul>
                  <li>Flore lamps</li>
                  <li>Tripod lamps</li>
                  <li>Table lamps</li>
                  <li>Study lamps</li>
                </ul>
                <a href="">
                  View All <i class="fa-solid fa-arrow-right"></i>
                </a>
              </p>
              <div className="col-5 lighting-lamp-img"></div>
            </div>
            <div className="col-6 discount20">4</div>
          </div>
        </div>
        <div className="col-5 row-second-col">
          <p className="ancent-chair-des">
          <p>NEW COLLECTION</p>
                   <h5>Accent Chairs</h5>
                   <ul>
                    <li>Arm Chair</li>
                    <li>Wing Chair</li>
                    <li>Cafe Chair</li>
                    <li>Wheels Chair</li>
                   </ul>
                  <a href="">View All <i class="fa-solid fa-arrow-right"></i></a>
          </p>
          <div className="accentchair"></div>
        </div>
      </div>
    </div>
  );
}

export default Collection;

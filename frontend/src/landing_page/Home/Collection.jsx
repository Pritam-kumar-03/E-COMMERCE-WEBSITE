import "./collection.css";

function Collection() {
  return (
    <div className="container collection-container mt-5 mb-5">
      <div className="row collection-row">
        <div className="col-7 row-first-col">
          <div className="row first-col-firstrow">
            <div className="col-12 center-table">
              <div className=" center-table-row">
                <div className=" center-table-des">
                  <p className="collection-head">NEW COLLECTION</p>
                  <h5 className="img-name">Center Table</h5>
                  <div style={{ lineHeight: "29px" }}>
                    <span className="li-collection">Square table</span> <br />
                    <span className="li-collection">Round table</span> <br />
                    <span className="li-collection">Wooden table</span> <br />
                    <span className="li-collection">Glass table</span>
                    <br />
                  </div>
                  <div style={{ paddingTop: "15px" }}>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#327176",
                        borderBottom: "2px solid #327176",
                      }}
                      href=""
                    >
                      View All <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className=" center-table-img"></div>
              </div>
            </div>
          </div>
          <div className="row first-col-secondrow">
            <div className="col-6 lighting-lamp">
              <div className="col-7 lighting-lamp-des">
                {" "}
                <p className="collection-head">NEW COLLECTION</p>
                <h5 className="img-name">Lighting Lamp</h5>
                <div style={{ lineHeight: "29px" }}>
                  <span className="li-collection">Flore lamps</span>
                  <br />
                  <span className="li-collection">Tripod lamps</span>
                  <br />
                  <span className="li-collection">Table lamps</span>
                  <br />
                  <span className="li-collection">Study lamps</span>
                </div>
                <div style={{ paddingTop: "15px" }}>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#327176",
                      borderBottom: "2px solid #327176",
                    }}
                    href=""
                  >
                    View All <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-5 lighting-lamp-img"></div>
            </div>
            <div className="col-6 discount20">
              <div className="btn-div-dis">
                <button className="btn-discount"> GET DISCOUNT</button>
                <br />
                <span
                  style={{
                    fontSize: "1.9rem",
                    fontWeight: "500",
                    color: "#fff",
                  }}
                >
                  20% OFFER
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 row-second-col">
          <div className="ancent-chair-des">
            <p className="collection-head">NEW COLLECTION</p>
            <h5 className="img-name">Accent Chairs</h5>
            <div style={{ lineHeight: "29px" }}>
              <span className="li-collection">Arm Chair</span>
              <br />
              <span className="li-collection">Wing Chair</span>
              <br />
              <span className="li-collection">Cafe Chair</span>
              <br />
              <span className="li-collection">Wheels Chair</span>
              <br />
            </div>
            <div style={{ paddingTop: "15px" }}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#327176",
                  borderBottom: "2px solid #327176",
                }}
                href=""
              >
                View All <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="accentchair"></div>
        </div>
      </div>
    </div>
  );
}

export default Collection;

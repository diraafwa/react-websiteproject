// import ScriptTag from "react-script-tag";
export const Header = (props) => {
  // <ScriptTag type="text/javascript" src="/public/js/nav.js" />;
  return (
    <header id="header">
      <div className="intro">
        {/* {/* <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img
              src="img/logo/logo1.png"
              alt="Chania"
              width="460"
              height="345"
            />
            <div class="carousel-caption">
              <h3>Chania</h3>
              <p>
                The atmosphere in Chania has a touch of Florence and Venice.
              </p>
            </div>
          </div>

          <div class="item">
            <img
              src="img/logo/logo2.png"
              alt="Chania"
              width="460"
              height="345"
            />
            <div class="carousel-caption">
              <h3>Chania</h3>
              <p>
                The atmosphere in Chania has a touch of Florence and Venice.
              </p>
            </div>
          </div>
        </div> */}
        <div className="overlay"> */
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Selengkapnya
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

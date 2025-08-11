

function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide mb-5" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require("../assest/images/carousel1.jpeg")} class="d-block w-100" alt="..." style={{ height: "550px" }} />
          </div>
          <div class="carousel-item">
            <img src={require("../assest/images/carousel2.jpg")} class="d-block w-100" alt="..." style={{ height: "550px" }} />
          </div>
          <div class="carousel-item">
            <img src={require("../assest/images/carousel3.jpg")} class="d-block w-100" alt="..." style={{ height: "550px" }} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />


      {/* ---------------------------------------------------------------------------------------------------- */}
      <section class="py-5 bg-light">
        <div class="container text-center">
          <h2 class="fw-bold">One-stop shop for all things <span class="text-danger">interiors</span></h2>
          <p class="text-muted">Be it end-to-end interiors, renovation, or modular solutions, we have it all for your home or office. <br />
             With a wide range of furniture & decor, we have your back from start to finish.</p>

          <div class="row mt-4 g-3">
            {/* <!-- Card 1 --> */}
            <div class="col-md-3">
              <div class="card border-0 shadow-sm" style={{height:'370px'}}>
                <img src={require('../assest/images/modular-interior.jpg')} class="card-img-top" alt="Modular Interiors"/>
                  <div class="card-body text-center">
                    <h5 class="fw-bold">Modular Interiors</h5>
                    <p class="text-muted">Functional kitchen, wardrobe</p>
                    <a href="#" class="text-dark fw-bold"><i class="fa-solid fa-arrow-right"></i></a>
                  </div>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="col-md-3">
              <div class="card border-0 shadow-sm" style={{height:'370px'}}>
                <img src={require('../assest/images/full-home.jpg')} class="card-img-top" alt="Full Home Interiors"/>
                  <div class="card-body text-center">
                    <h5 class="fw-bold">Full Home Interiors</h5>
                    <p class="text-muted">Turnkey interior solutions for home</p>
                    <a href="/project" class="text-dark fw-bold"><i class="fa-solid fa-arrow-right"></i></a>
                  </div>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="col-md-3">
              <div class="card border-0 shadow-sm" style={{height:'370px'}}>
                <img src={require('../assest/images/luxury-interiore.jpg')} class="card-img-top" alt="Luxury Interiors"/>
                  <div class="card-body text-center">
                    <h5 class="fw-bold">Luxury Interiors</h5>
                    <p class="text-muted">Tailored interiors that redefine elegance</p>
                    <a href="#" class="text-dark fw-bold"><i class="fa-solid fa-arrow-right"></i></a>
                  </div>
              </div>
            </div>

            {/* <!-- Card 4 --> */}
            <div class="col-md-3">
              <div class="card border-0 shadow-sm" style={{height:'370px'}}>
                <img src={require('../assest/images/renovations.jpg')} class="card-img-top" alt="Renovations"/>
                  <div class="card-body text-center">
                    <h5 class="fw-bold">Renovations</h5>
                    <p class="text-muted">Expert solutions to upgrade your home</p>
                    <a href="#" class="text-dark fw-bold"><i class="fa-solid fa-arrow-right"></i></a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      
      

    </>
  )
};

export default Home;
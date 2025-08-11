import { Link } from 'react-router-dom';


function About() {
  return (
    <>
      {/* <h1>about component</h1> */}

      {/* -------------banner----------- */}

      <div class="position-relative text-center text-white mt-5 mb-5">
        <img src={require('../assest/images/banner.jpg')} class="img-fluid w-100" style={{ filter: 'brightness(0.5)', height: '40 0px', objectFit: 'cover' }} />
        <div class="position-absolute top-50 start-50 translate-middle">
          <h1 class="fw-bold text-danger">Your Vision, Our Design.</h1>
          <p class="fs-5">Bringing Warmth, Style, and Functionality to Your Home.</p>
          {/* <a href="#" class="btn btn-outline-info btn-lg">Discover More</a> */}
        </div>
      </div>


      <section class="container-fluid my-5">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="bg-light p-5 rounded-4 shadow text-center">
              <h2 class="fw-bold text-dark">How It Started</h2>
              <p class="fs-5 text-muted">
                It all started when college friends,Anuj Srivastava and Ramakant Sharma, set upon their journeys to design their dream homes.
                It didn’t take them long to realize how fragmented the industry was and how factors like identifying the right professionals, coordination of tasks,
                and ensuring fair price and quality were pain points faced by many.
              </p>
              <p class="fs-5 text-muted">
                Determined to fix this and offer a happier experience to homeowners, they built a much-needed bridge for the industry.
                <strong>Livspace</strong> was founded in 2014. It is now the trusted brand for complete home interior design and renovation for thousands of homeowners.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* ------------------------------------------------------------------------------------ */}

      <div className='rounded-4 bg-secondary shadow-lg text-center my-5'>
        <div class="container py-5 ">
          <div class="row text-center text-light">
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="p-4 border rounded">
                <i class="bi bi-bar-chart-line display-3 mb-2"></i>
                <h3 class="fw-bold">8000</h3>
                <h4>Project Done</h4>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="p-4 border rounded">
              <i class="bi bi-clock-history display-3 mb-2"></i>
                <h3 class="fw-bold">3000</h3>
                <h4>Time of Work</h4>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="p-4 border rounded">
              <i class="bi bi-lightbulb display-3 mb-2"></i>
                <h3 class="fw-bold">2000</h3>
                <h4>Ideas</h4>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="p-4 border rounded">
              <i class="bi bi-people display-3 mb-2"></i>
                <h3 class="fw-bold">5000</h3>
                <h4>Clients</h4>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Our Team Section --> */}

      <div class="container py-5 mt-4">
        <div class="text-center mb-5">
          <h5 class="text-uppercase text-muted">Meet Our Team</h5>
          <h2 class="fw-bold">Our Team</h2>
        </div>
        <div class="row">

          {/* <!-- Team Member 1 --> */}
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card border-0 shadow text-center">
              <img src={require('../assest/images/team/architect.jpg')} class="card-img-top rounded" alt="Cloe Marena"/>
                <div class="card-body">
                  <h5 class="fw-bold">Shamal Patil</h5>
                  <p class="text-muted">Architect</p>
                  <div class="d-flex justify-content-center">
                    <a href="#" class="btn btn-outline-primary btn-sm me-2"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="btn btn-outline-info btn-sm me-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="btn btn-outline-danger btn-sm"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
            </div>
          </div>

          {/* <!-- Team Member 2 --> */}
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card border-0 shadow text-center">
              <img src={require('../assest/images/team/designer.jpg')} class="card-img-top rounded" alt="Nathalie Channie"/>
                <div class="card-body">
                  <h5 class="fw-bold">Arjun Patil</h5>
                  <p class="text-muted">Designer</p>
                  <div class="d-flex justify-content-center">
                    <a href="#" class="btn btn-outline-primary btn-sm me-2"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="btn btn-outline-info btn-sm me-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="btn btn-outline-danger btn-sm"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
            </div>
          </div>

          {/* <!-- Team Member 3 --> */}
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card border-0 shadow text-center">
              <img src={require('../assest/images/team/designer1.jpg')} class="card-img-top rounded" alt="Will Turner" style={{height:'320px'}}/>
                <div class="card-body">
                  <h5 class="fw-bold">Rutvika Jaddhav</h5>
                  <p class="text-muted">Designer</p>
                  <div class="d-flex justify-content-center">
                    <a href="#" class="btn btn-outline-primary btn-sm me-2"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="btn btn-outline-info btn-sm me-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="btn btn-outline-danger btn-sm"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
            </div>
          </div>

          {/* <!-- Team Member 4 --> */}
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card border-0 shadow text-center">
              <img src={require('../assest/images/team/engineer.jpg')} class="card-img-top rounded" alt="Nicolas Stainer" style={{height:'320px'}}/>
                <div class="card-body">
                  <h5 class="fw-bold">Aditya Patil</h5>
                  <p class="text-muted">Engineer</p>
                  <div class="d-flex justify-content-center">
                    <a href="#" class="btn btn-outline-primary btn-sm me-2"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="btn btn-outline-info btn-sm me-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="btn btn-outline-danger btn-sm"><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>


      {/* <!-- Why Choose Us Section --> */}
      <section class="container-fluid bg-light py-5 mb-5">
        <div class="container">
          <h2 class="text-center fw-bold mb-4">Why Choose Us?</h2>
          <p class="text-center text-muted mb-5">We blend creativity, quality, and sustainability to craft interiors that inspire.</p>

          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center">
            {/* <!-- Experience & Expertise --> */}
            <div class="col">
              <div class="card border-0 shadow-sm p-4">
                <i class="bi bi-award text-dark display-4 mb-3"></i>
                <h5 class="fw-bold">10+ Years Experience</h5>
                <p class="text-muted">With over a decade in the industry, we deliver top-tier design solutions.</p>
              </div>
            </div>

            {/* <!-- Tailored Designs --> */}
            <div class="col">
              <div class="card border-0 shadow-sm p-4">
                <i class="bi bi-brush text-dark display-4 mb-3"></i>
                <h5 class="fw-bold">Tailored Designs</h5>
                <p class="text-muted">Every space is uniquely crafted to match your personal style & vision.</p>
              </div>
            </div>

            {/* <!-- Eco-Friendly Solutions --> */}
            <div class="col">
              <div class="card border-0 shadow-sm p-4">
                <i class="bi bi-tree text-dark display-4 mb-3"></i>
                <h5 class="fw-bold">Eco-Friendly Materials</h5>
                <p class="text-muted">We prioritize sustainability with eco-conscious materials & designs.</p>
              </div>
            </div>

            {/* <!-- Customer-Centric Approach --> */}
            <div class="col">
              <div class="card border-0 shadow-sm p-4">
                <i class="bi bi-people text-dark display-4 mb-3"></i>
                <h5 class="fw-bold">Customer Focused</h5>
                <p class="text-muted">Your satisfaction is our priority, ensuring seamless collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>









      {/* <!-- Call to Action --> */}
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="d-flex bg-dark text-white rounded-4 overflow-hidden shadow-lg">
              <div class="p-4 d-flex flex-column justify-content-center" style={{ maxWidth: '700px' }}>
                <h2 class="fw-bold">Come, see endless designs at our
                  <span class="text-danger">Ready to Transform Your Space?</span>
                </h2>
                <p class="text-white-50 mb-3">Let’s discuss your dream project today.</p>
                <button class="btn btn-danger rounded-pill fw-bold">Schedule a Consultation →</button>
              </div>
              <div class="flex-grow-1">
                <img src={require('../assest/images/banner_desktop.jpg.avif')} alt="Experience Centre" class="img-fluid w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default About;

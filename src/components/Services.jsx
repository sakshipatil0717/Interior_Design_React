import { useState } from 'react';

function Services() {
    /* FULL HOME INTERIOR ESTIMATE */
    const [AddFullHomeModal, setAddFullHomeModal] = useState(false);
    const [formData, setFormData] = useState({
        bhk: "",
        roomsDesign: "",
        package: ""
    });

    const handleChangeFullHome = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /* KITCHEN INTERIOR ESTIMATE */
    const [AddKitchenModal, setAddKitchenModal] = useState(false);
    const [formKitchen, setFormKitchen] = useState({
        kitchenLayout: "",
        measurements: "",
        packageKitchen: ""
    });

    const handleChangeKitchen = (e) => {
        setFormKitchen({ ...formKitchen, [e.target.name]: e.target.value });
    };

    /* WARDROBE INTERIOR ESTIMATE */
    const [AddWardrobeModal, setAddWardrobeModal] = useState(false);
    const [formWardrobe, setFormWardrobe] = useState({
        length: "",
        type: "",
        finish: "",
        material: "",
        accessories: ""
    });

    const handleChangeWardrobe = (e) => {
        setFormWardrobe({ ...formWardrobe, [e.target.name]: e.target.value });
    };

    return (
        <>
            <br />

            <div class="text-center mt-5">
                <h1 class="fw-bold">Our <span class="text-danger">Services</span></h1>
                <div class="py-5 px-5 rounded-4 shadow-lg mb-5 mx-4">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card text-center shadow-lg border-0 rounded-4 p-4 hover-shadow">
                            <i class="bi bi-lightbulb display-3 text-secondary mb-3"></i>
                                <h5 class="fw-bold">Creative Solutions</h5>
                                <p>We bring innovative ideas to reality, ensuring every project has a unique and creative touch.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card text-center shadow-lg border-0 rounded-4 p-4 hover-shadow">
                            <i class="bi bi-brush display-3 text-secondary mb-3"></i>
                                <h5 class="fw-bold">Design Interior</h5>
                                <p>Transforming spaces with elegant and functional interior designs tailored to your needs.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card text-center shadow-lg border-0 rounded-4 p-4 hover-shadow">
                            <i class="bi bi-compass display-3 text-secondary mb-3"></i>
                                <h5 class="fw-bold">Intuitive Design</h5>
                                <p>Our designs ensure user-friendly and practical solutions for a seamless experience.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card text-center shadow-lg border-0 rounded-4 p-4 hover-shadow">
                            <i class="bi bi-house-door display-3 text-secondary mb-3"></i>
                                <h5 class="fw-bold">Modern Architecture</h5>
                                <p>Innovative architectural designs that blend style, functionality, and sustainability.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card text-center shadow-lg border-0 rounded-4 p-4 hover-shadow">
                            <i class="bi bi-rulers display-3 text-secondary mb-3"></i>
                                <h5 class="fw-bold">Precise Measurements</h5>
                                <p>Accurate and detailed measurements for flawless execution of every project.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card text-center shadow-lg border-0 rounded-4 p-4 hover-shadow">
                            <i class="bi bi-box-seam display-3 text-secondary mb-3"></i>
                                <h5 class="fw-bold">Furniture Planning</h5>
                                <p>Optimal furniture layout strategies that enhance comfort and space utilization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Our Process Section --> */}
            <div className="container p-5 rounded-4 shadow-lg mb-5">
                <div className="row align-items-center">
                    {/* <!-- Image Section --> */}
                    <div className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
                        <img src={require('../assest/images/process-img.jpg')}
                            alt="Image"
                            className="img-fluid rounded-4 shadow"
                            style={{ height: '600px', width: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* <!-- Features Section --> */}
                    <div className="col-lg-6">
                        <h1 class="fw-bold my-4">Our <span class="text-danger">Process</span></h1>

                        <div className="row g-3">
                            <div className="col-6">
                                <div className="card text-center p-4 shadow-lg border-0 rounded-4 d-flex flex-column h-100" style={{ minHeight: '200px' }}>
                                    <i className="bi bi-chat-dots display-4 text-dark mb-3"></i>
                                    <h5 className="fw-bold">1. Consultation</h5>
                                    <p className="text-muted">Understanding your needs and preferences.</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card text-center p-4 shadow-lg border-0 rounded-4 d-flex flex-column h-100" style={{ minHeight: '200px' }}>
                                    <i className="bi bi-pencil display-4 text-dark mb-3"></i>
                                    <h5 className="fw-bold">2. Design Planning</h5>
                                    <p className="text-muted">Creating stunning concepts and 3D models.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3 mt-3">
                            <div className="col-6">
                                <div className="card text-center p-4 shadow-lg border-0 rounded-4 d-flex flex-column h-100" style={{ minHeight: '200px' }}>
                                    <i className="bi bi-hammer display-4 text-dark mb-3"></i>
                                    <h5 className="fw-bold">3. Execution</h5>
                                    <p className="text-muted">Bringing designs to life with precision.</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card text-center p-4 shadow-lg border-0 rounded-4 d-flex flex-column h-100" style={{ minHeight: '200px' }}>
                                    <i className="bi bi-check2-circle display-4 text-dark mb-3"></i>
                                    <h5 className="fw-bold">4. Final Touches</h5>
                                    <p className="text-muted">Adding the finishing elements for perfection.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* ------------estimate--------------------- */}
            <div className='bg-light shadow-lg mb-5'>
                <div className="container py-3">
                    <div className="text-center section-header">
                        <h1>Get an <span className="text-danger">estimate </span>for your home.</h1>
                        <p className="text-muted">Calculate the cost of doing up your home interiors now.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-4 mb-4">
                            <div className="card p-4 text-center">
                                <div class="d-flex justify-content-around align-items-center mb-3">
                                    <img src={require('../assest/images/full.jpg')} alt="Wardrobe" class="img-fluid me-2" style={{ width: '50px' }} />
                                    <img src={require('../assest/images/calculator.jpg')} alt="Calculator" class="img-fluid" style={{ width: '50px' }} />
                                </div>
                                <h4 className="fw-bold">Full Home</h4>
                                <p className="text-muted">Get an approximate costing for your full home interiors</p>
                                <button onClick={() => setAddFullHomeModal(true)} className="btn btn-danger rounded-pill btn-sm">CALCULATE</button>
                                {AddFullHomeModal && (
                                    <div className="modal fade show d-block" tabIndex="-1">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Full Home Estimate</h5>
                                                    <button type="button" className="btn-close" onClick={() => setAddFullHomeModal(false)}></button>
                                                </div>
                                                <div className="modal-body">
                                                    <label className="fw-bold">BHK Types</label>
                                                    <input type="text" className="form-control mb-3" name='bhk' value={formData.bhk} onChange={handleChangeFullHome} />

                                                    <label className="fw-bold">Rooms to design</label>
                                                    <input type="text" className="form-control mb-3" name='roomsDesign' value={formData.roomsDesign} onChange={handleChangeFullHome} />

                                                    <label className="fw-bold">Package</label>
                                                    <input type="text" className="form-control mb-3" name='package' value={formData.package} onChange={handleChangeFullHome} />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">ADD</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => setAddFullHomeModal(false)}>Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card p-4 text-center">
                                <div className="d-flex justify-content-around align-items-center mb-3">
                                    <img src={require('../assest/images/kitchen.jpg')} alt="Kitchen" className="img-fluid me-2" style={{ width: '50px' }} />
                                    <img src={require('../assest/images/calculator.jpg')} alt="Calculator" className="img-fluid" style={{ width: '50px' }} />
                                </div>
                                <h5 className="fw-bold">Kitchen</h5>
                                <p className="text-muted">Get an approximate costing for your kitchen interiors.</p>
                                <button onClick={() => setAddKitchenModal(true)} className="btn btn-danger rounded-pill btn-sm">CALCULATE</button>

                                {AddKitchenModal && (
                                    <div className="modal fade show d-block" tabIndex="-1">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Kitchen Estimate</h5>
                                                    <button type="button" className="btn-close" onClick={() => setAddKitchenModal(false)}></button>
                                                </div>
                                                <div className="modal-body">
                                                    <label className='fw-bold'>Kitchen Layout</label>
                                                    <input type="text" className="form-control mb-3" name='kitchenLayout' value={formKitchen.kitchenLayout} onChange={handleChangeKitchen} />

                                                    <label className='fw-bold'>Measurements</label>
                                                    <input type="text" className="form-control mb-3" name='measurements' value={formKitchen.measurements} onChange={handleChangeKitchen} />

                                                    <label className='fw-bold'>Package Kitchen</label>
                                                    <input type="text" className="form-control mb-3" name='packageKitchen' value={formKitchen.packageKitchen} onChange={handleChangeKitchen} />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">ADD</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => setAddKitchenModal(false)}>Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Wardrobe Estimate */}
                        <div className="col-md-4 mb-4">
                            <div className="card p-4 text-center">
                                <div className="d-flex justify-content-around align-items-center mb-3">
                                    <img src={require('../assest/images/wardrobe.jpg')} alt="Wardrobe" className="img-fluid me-2" style={{ width: '50px' }} />
                                    <img src={require('../assest/images/calculator.jpg')} alt="Calculator" className="img-fluid" style={{ width: '50px' }} />
                                </div>
                                <h5 className="fw-bold">Wardrobe</h5>
                                <p className="text-muted">Get an approximate costing for your wardrobe interiors.</p>
                                <button onClick={() => setAddWardrobeModal(true)} className="btn btn-danger rounded-pill btn-sm">CALCULATE</button>

                                {AddWardrobeModal && (
                                    <div className="modal fade show d-block" tabIndex="-1">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Wardrobe Estimate</h5>
                                                    <button type="button" className="btn-close" onClick={() => setAddWardrobeModal(false)}></button>
                                                </div>
                                                <div className="modal-body">
                                                    <label className='fw-bold'>Length</label>
                                                    <input type="text" className="form-control mb-3" name='length' value={formWardrobe.length} onChange={handleChangeWardrobe} />

                                                    <label className='fw-bold'>Type</label>
                                                    <input type="text" className="form-control mb-3" name='type' value={formWardrobe.type} onChange={handleChangeWardrobe} />

                                                    <label className='fw-bold'>Finish</label>
                                                    <input type="text" className="form-control mb-3" name='finish' value={formWardrobe.finish} onChange={handleChangeWardrobe} />

                                                    <label className='fw-bold'>Material</label>
                                                    <input type="text" className="form-control mb-3" name='material' value={formWardrobe.material} onChange={handleChangeWardrobe} />

                                                    <label className='fw-bold'>Accessories</label>
                                                    <input type="text" className="form-control mb-3" name='accessories' value={formWardrobe.accessories} onChange={handleChangeWardrobe} />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">ADD</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => setAddWardrobeModal(false)}>Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </>
    )
}


export default Services;
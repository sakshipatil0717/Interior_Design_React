import React from 'react'

function Project() {
    return (
        <>
            {/* <h1>Project</h1> */}

            <div className="container mt-5 shadow-lg p-2 mb-5 rounded-5" style={{backgroundColor:'#ECEFF1'}}>
                <h2>A Wide Range of Home Design Ideas Available!</h2>
                <p>Free Home Design Templates for Every Space: Bedrooms, Living Rooms, Kitchens, & More!</p>
            </div>

            <div className="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img src={require('../assest/images/gall_img1.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" style={{ height: '230px', width: '200px' }} />

                        <img src={require('../assest/images/gall_img2.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" style={{ height: '350px' }} />

                        {/* <img src={require('../assest/images/vertical.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />

                         <img src={require('../assest/images/horizontal.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" style={{ height: '350px'}} /> */}

                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img src={require('../assest/images/gall_img3.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" style={{ height: '350px' }} />

                        <img src={require('../assest/images/gall_img4.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" style={{ height: '230px', width: '250px' }} />

                        {/* <img src={require('../assest/images/vertical.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" style={{ height: '350px'}}/>

                        <img src={require('../assest/images/horizontal.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" /> */}


                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img src={require('../assest/images/gall_img5.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" style={{ height: '230px', width: '250px' }} />

                        <img src={require('../assest/images/gall_img6.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" style={{ height: '350px' }} />

                        {/* <img src={require('../assest/images/gall_img5.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />

                         <img src={require('../assest/images/gall_img6.jpg')} class="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" style={{ height: '350px'}} /> */}
                    </div>
                </div>


                <div class="idea-footer mb-5">
                    <a class="to-ideas-link" href="https://www.coohom.com/ideas" target="_blank" kpm="off">
                        <button class="view-all-btn btn btn-dark btn-lg text-dark" style={{ backgroundColor: '#E8EAF6' }}>View All Home Design Ideas</button>
                    </a>
                </div>
            </div>
{/* ------------------------------------------------------------------------------------------------ */}






        </>
    )
};

export default Project
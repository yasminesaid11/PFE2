import React from 'react'
import '../Admin/Admin.css'
import logo_ct from '../../images/logo-ct.png'
import team_1 from '../../images/team-1.jpg'
import team_2 from '../../images/team-2.jpg'
import team_3 from '../../images/team-3.jpg'
import team_4 from '../../images/team-4.jpg'
import bruce from '../../images/bruce-mars.jpg'
import projet1 from '../../images/projet1.webp'
import projet2 from '../../images/projet2.png'
import projet3 from '../../images/projet3.webp'
import projet4 from '../../images/projet4.webp'
import SideBar from '../SideBar/SideBar';

import admin from '../../images/admin.png'
import projet from '../../images/projet1.png'
import dash from '../../images/dash.png'
import payement from '../../images/payement.png'
const Profil = () => {
  return (
 <div>
  <body class="g-sidenav-show  bg-gray-200">

  <div class="main-content position-relative max-height-vh-100 h-100 bg-gray-200">
    
    
    <div class="container-fluid px-2 px-md-4 bg-gray-200">
    <div class="page-header min-height-300 border-radius-xl mt-4 background-image:  url(../../images/profil.png);" >
        <span class="mask  bg-gradient-primary  opacity-6"></span>
      </div>
    <div class="card1 card1-body mx-3 mx-md-4 mt-n6">
    <div class="row gx-4 mb-2">
          <div class="col-auto">
            <div class="avatar avatar-xl position-relative">
              <img src={bruce} alt="profile_image" class="w-100 border-radius-lg shadow-sm" />
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h2 class="mb-1">
                Richard Davis
              </h2>
              <p class="mb-0 font-weight-normal text-sm">
                CEO / Co-Founder
              </p>
            </div>
          </div>
          
        </div>
        <div class="row">
          <div class="row">
            
            <div class="col-12 col-xl-8">
              <div class="card1 card1-plain h-100">
                <div class="card1-header pb-0 p-3">
                  <div class="row">
                    <div class="col-md-8 d-flex align-items-center">
                      <h4 class="mb-0">Profile Information</h4>
                    </div>
                    <div class="col-md-4 text-end">
                      <a href="javascript:;">
                        <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card1-body p-3">
                  <p class="text-sm">
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                  </p>
                  <hr class="horizontal gray-light my-4"/>
                  <ul class="list-group">
                    <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> &nbsp; Alec M. Thompson</li>
                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; alecthompson@mail.com</li>
                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Location:</strong> &nbsp; USA</li>
                    <li class="list-group-item border-0 ps-0 pb-0">
                      <strong class="text-dark text-sm">Social:</strong> &nbsp;
                      <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                        <i class="fab fa-facebook fa-lg"></i>
                      </a>
                      <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                        <i class="fab fa-twitter fa-lg"></i>
                      </a>
                      <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                        <i class="fab fa-instagram fa-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-4">
              <div class="card1 card1-plain h-100">
                <div class="card1-header pb-0 p-3">
                  <h4 class="mb-0">Conversations</h4>
                </div>
                <div class="card1-body p-3">
                  <ul class="list-group">
                    <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
                      <div class="avatar me-3">
                        <img src={team_3} alt="kal" class="border-radius-lg shadow" />
                      </div>
                      <div class="d-flex align-items-start flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Sophie B.</h6>
                        <p class="mb-0 text-xs">Hi! I need more information..</p>
                      </div>
                      <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                      <div class="avatar me-3">
                        <img src={team_1} alt="kal" class="border-radius-lg shadow"/>
                      </div>
                      <div class="d-flex align-items-start flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Anne Marie</h6>
                        <p class="mb-0 text-xs">Awesome work, can you..</p>
                      </div>
                      <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                      <div class="avatar me-3">
                        <img src={team_2} alt="kal" class="border-radius-lg shadow"/>
                      </div>
                      <div class="d-flex align-items-start flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Ivanna</h6>
                        <p class="mb-0 text-xs">About files I can..</p>
                      </div>
                      <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                      <div class="avatar me-3">
                        <img src={team_4} alt="kal" class="border-radius-lg shadow"/>
                      </div>
                      <div class="d-flex align-items-start flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Peterson</h6>
                        <p class="mb-0 text-xs">Have a great afternoon..</p>
                      </div>
                      <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                    </li>
                    <li class="list-group-item border-0 d-flex align-items-center px-0">
                      <div class="avatar me-3">
                        <img src={team_3} alt="kal" class="border-radius-lg shadow"/>
                      </div>
                      <div class="d-flex align-items-start flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Nick Daniel</h6>
                        <p class="mb-0 text-xs">Hi! I need more information..</p>
                      </div>
                      <a class="btn btn-link pe-3 ps-0 mb-0 ms-auto w-25 w-md-auto" href="javascript:;">Reply</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 mt-4" >
              <div class="mb-5 ps-3">
                <h4 class="mb-1">Projects</h4>
                <p class="text-sm">Architects design houses</p>
              </div>
              <div class="row">
                <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                  <div class="card1 card1-blog card1-plain">
                    <div class="card1-header p-0 mt-n4 mx-3">
                      <a class="d-block shadow-xl border-radius-xl">
                        <img src={projet1} alt="img-blur-shadow" class="img-fluid shadow border-radius-xl"/>
                      </a>
                    </div>
                    <div class="card1-body p-3">
                      <p class="mb-0 text-sm">Project #2</p>
                      <a href="javascript:;">
                        <h5>
                          Modern
                        </h5>
                      </a>
                      <p class="mb-4 text-sm">
                        As Uber works through a huge amount of internal management turmoil.
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <button type="button" class="btn btn-outline-primary btn-sm mb-0">View Project</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                  <div class="card1 card1-blog card1-plain">
                    <div class="card1-header p-0 mt-n4 mx-3">
                      <a class="d-block shadow-xl border-radius-xl"/>
                        <img src={projet2} alt="img-blur-shadow" class="img-fluid shadow border-radius-lg"/>
                    </div>
                    <div class="card1-body p-3">
                      <p class="mb-0 text-sm">Project #1</p>
                      <a href="javascript:;">
                        <h5>
                          Scandinavian
                        </h5>
                      </a>
                      <p class="mb-4 text-sm">
                        Music is something that every person has his or her own specific opinion about.
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <button type="button" class="btn btn-outline-primary btn-sm mb-0">View Project</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                  <div class="card1 card1-blog card1-plain">
                    <div class="card1-header p-0 mt-n4 mx-3">
                      <a class="d-block shadow-xl border-radius-xl">
                        <img src={projet3} alt="img-blur-shadow" class="img-fluid shadow border-radius-xl"/>
                      </a>
                    </div>
                    <div class="card1-body p-3">
                      <p class="mb-0 text-sm">Project #3</p>
                      <a href="javascript:;">
                        <h5>
                          Minimalist
                        </h5>
                      </a>
                      <p class="mb-4 text-sm">
                        Different people have different taste, and various types of music.
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <button type="button" class="btn btn-outline-primary btn-sm mb-0">View Project</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                  <div class="card1 card1-blog card1-plain">
                    <div class="card1-header p-0 mt-n4 mx-3">
                      <a class="d-block shadow-xl border-radius-xl">
                        <img src={projet1} alt="img-blur-shadow" class="img-fluid shadow border-radius-xl"/>
                      </a>
                    </div>
                    <div class="card1-body p-3">
                      <p class="mb-0 text-sm">Project #4</p>
                      <a href="javascript:;">
                        <h5>
                          Gothic
                        </h5>
                      </a>
                      <p class="mb-4 text-sm">
                        Why would anyone pick blue over pink? Pink is obviously a better color.
                      </p>
                      <div class="d-flex align-items-center justify-content-between">
                        <button type="button" class="btn btn-outline-primary btn-sm mb-0">View Project</button>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
            </div>
            </div>
    </div>
    </div>




    </div>
  </body>

        </div>
  )
}

export default Profil


/*

I don't have time to look through this but there are some red line errors, I think it's just
syntax stuff like closing tags -Nick

import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './ProfileLikePostPage.css'


function ProfileLikePostPage() {
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="view-account">
          <section className="module">
            <div className="module-inner">
              <div className="side-bar">
                <div className="user-info">
                <div className="user-likes">
                  <img
                    className="img-profile img-circle img-responsive center-block"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt=""
                  />

                  <ul className="meta list list-unstyled">
                    <li className="name">
                      John Doe
                      <br />
                      <label className="label label-info">Developer</label>
                    </li>
                    <li className="email">
                      <a href="#">John.Doe@gmail.com</a>
                    </li>
                    <li className="activity">Last logged in: Today at 6:00pm</li>
                  </ul>
                </div>
                <nav className="side-menu">
                  <ul className="nav">
                    <li className="active">
                      <a href="#">
                        <span className="fa fa-user"></span> Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-cog"></span> Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-credit-card"></span> Billing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-envelope"></span> Messages
                      </a>
                    </li>

                    <li>
                      <a href="user-drive.html">
                        <span className="fa fa-th"></span> Liked
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-clock-o"></span> Archived
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="content-panel">
                <h2 className="title">

                <span className="Postsliked"></span> Archived
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            

                  Profile<span className="pro-label label label-warning"></span>
                </h2>
                <div className="col-xl-8">
                  <div className="card mb-4">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                      <form>
                        <div className="mb-3">
                          <label className="small mb-1" htmlFor="inputUsername">
                            Username 
                          </label>
                          <input
                            className="form-control"
                            id="inputUsername"
                            type="text"
                            placeholder="Enter your username"
                            value="username"
                          />
                        </div>

                        <div className="row gx-3 mb-3">
                          <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputFirstName">
                              First name
                            </label>
                            <input
                              className="form-control"
                              id="inputFirstName"
                              type="text"
                              placeholder="Enter your first name"
                              value="first name"
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputLastName">
                              Last name
                            </label>
                            <input
                              className="form-control"
                              id="inputLastName"
                              type="text"
                              placeholder="Enter your last name"
                              value=" last name"
                            />
                          </div>
                        </div>

                        <div class="row gx-3 mb-3">

                        <div className="col-md-6">
                            <label className="liked posts" htmlFor="Liked posts">
                              posts
                            </label>
                            <input
                              className="form-control"
                              id="clickedLikes"
                              type="click"
                              placeholder="Liked posts:"
                              value=" liked posts"
                            />
                          </div>
                        </div>

                            
                          
                          
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Location</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="sacramento"/>
                            </div>
                        </div>
                     
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="example@gmail.com"/>
                        </div>
                        
                        <div class="row gx-3 mb-3">
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="123-45-678"/>
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Birthday</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="MM/DD/YYYY"/>
                            </div>
                        </div>






                        <div className="form-group">
                          <div className="col-md-offset-2 col-md-4">
                          <button class="btn btn-primary" type="button">Save changes</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ProfileLikePostPage;
*/
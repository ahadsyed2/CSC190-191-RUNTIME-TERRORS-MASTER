import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from '../components/hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserSettings.css'

//page that shows up when user clicks on settings icon from UserProfile Page
//added route in app
//need to figure out can enter text
// MOVE to componenets
// make new branch in git put
// call component in userfile
//edit profile
//edit listing

function UserSettings() {
    return (
        <>
          <div className="editing-setting">
            <div className="profile-title">
              <h2>Edit Profile Settings</h2> <span className="pro-label label label-warning"></span>
            </div>
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
                            />
                          </div>
                        </div>

                        <div class="row gx-3 mb-3">
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Location</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location"/>
                            </div>
                        </div>
                    
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address"/>
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
        </>
  );
}
export default UserSettings
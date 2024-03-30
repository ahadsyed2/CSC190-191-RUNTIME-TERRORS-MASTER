import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu2 } from '../components/hamburgerMenu2';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserProfile.css'
import SecondNavbar from '../components/SecondNavbar';
import UserProfileComponent from '../components/UserProfileComponent';
//New imports
import { usePostContext } from '../hooks/usePostContext';
import { useAuthContext } from '../hooks/useAuthContext';


const UserProfile = () => {

  const [sidebar, setSidebar] = useState(false);
  const {posts, dispatch} = usePostContext(); //Pulling posts
  const { user } = useAuthContext(); //Getting User object 

  //Pulling All Posts
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/postRoutes");
      const json = await response.json();

        console.log('response Ok')
        dispatch({type: 'SET_POSTS', payload: json})
      }
    
    fetchPosts();
  }, []);

  //New added for delete 
  const deletePost = async (id) => {
    //Deletes on MongoDB
    const response = await fetch('/api/postRoutes' + id, {
      method: 'DELETE'
    })
    
    //This is the body of the reponses, aka the array of documents
    const json = await response.json()

    //Deletes on Local Machine to keep syncronized
    if(response.ok){
      dispatch({type: 'DELETE_POST', payload: json})
    }
  }

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (option) => {
    // Add your logic here for handling the click on dropdown items
    console.log(`Clicked on ${option}`);
  };

  const [carbutton, setCarbutton] = useState(false);
  const showCarButton = () => {
    setCarbutton(!carbutton);
  };

  const deleteButton = (id) => {

    deletePost(id);
    /*
    const userConfirmed = window.confirm("Are you sure you want to delete?");

    if (userConfirmed) {
      // User clicked "OK"
      setBoxVisibility(false);
    } else {
      // User clicked "Cancel"
      console.log("Delete canceled"); */
    
  };

  const editListing = (id) => {

  } 

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [indexOfLastPost, setIndexOfLastPost] = useState(currentPage * postsPerPage);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(indexOfLastPost - postsPerPage);
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  if(posts && numberOfPosts == 0){
    setNumberOfPosts(posts.length);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setIndexOfLastPost(currentPage * postsPerPage);
    setIndexOfFirstPost(indexOfLastPost - postsPerPage);
  };
  
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setIndexOfLastPost(currentPage * postsPerPage);
    setIndexOfFirstPost(indexOfLastPost - postsPerPage);
  };

  var postCounter = 0;
  const filter = (post) => {
    //Handle Pages
    if(posts.indexOf(post) < ((currentPage * postsPerPage) - 5) || posts.indexOf(post) > ((currentPage * postsPerPage))){
      return false;
    }

    if(postCounter > 5){
      return false;
    }

    postCounter++;
    return true;
  }


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to="#" className='hamburger-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

          <div className="carmony-logo w-1/10 flex justify-center items-center p-0 1rem" style={{ width: "15rem", marginLeft: "2rem" }}>
            <img src="CARMONY_ICON2.png" alt="Logo" className="w-500 mt-3" />
          </div>

          <SecondNavbar />
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className='hamburger-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {hamburgerMenu2.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>

      <div className="user-container">
        <div className="view-account">
          <div className="module">
            <div className="module-inner">
              <div className="side-bar">
                <div className="user-info">
                  <img
                    className="img-profile img-circle img-responsive center-block"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt=""
                  />

                  <ul className="meta list list-unstyled">
                    <li className="name">
                      <UserProfileComponent />
                      <br />
                      <label className="label label-info">Developer</label>
                    </li>
                    <li className="email">
                      <a href="#">John.Doe@gmail.com</a>
                    </li>
                    <li className="activity">Last logged in: Today at 6:00pm</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dashboard-container">
              <div className="current-righBox">
                <div className="current-listingBox">
                  <h1>Current Listings</h1>
                  {posts && posts.map((post, index) => (
                    filter(post) &&
                    <div className="inside-currentBox" key={index}>
                      <div className="detail-currentBox">
                        <div className="car-image">
                        <img
                          className="img-profile img-circle img-responsive center-block"
                          src={"https://ahadsyed1.s3.us-west-1.amazonaws.com/" + post._id}
                          alt=""
                        />
                        {console.log("https://ahadsyed1.s3.us-west-1.amazonaws.com/" + post._id)}
                          <div className="image-box">
                            {/* Additional image rendering logic if needed */}
                          </div>
                          <div className="current-carDetail">
                            <div className="carDetail-box">
                              <div className="carDetail-rightBox">
                                <div className="carName">
                                  <div className="carName-left"><h4>{post.year} {post.make} {post.model}</h4></div>
                                </div>
                                <div className="car-price">
                                  <div className="carPrice-right"><h4>${post.price}</h4></div>
                                </div>
                              </div>
                              {/* Additional detail rendering logic */}
                            </div>
                            <div className="car-button">
                              <div className="view-button">
                                <Link to={"/CarInfo/" + post._id}>
                                  <button>View</button>
                                </Link>
                              </div>
                              <div className="edit-button">
                                <button onClick={editListing(post._id)}>Edit</button>
                              </div>
                              <div className="delete-button">
                                <button onClick={() => deleteButton(post._id)}>Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="arrows">
        {currentPage > 1 && (
          <span onClick={prevPage} style={{ backgroundColor: 'red' }}>Go to Previous Page</span>
        )}
        {posts && posts.length > (currentPage * postsPerPage) && (
          <span onClick={nextPage} style={{ backgroundColor: 'green' }}>Go to Next Page</span>
        )}
      </div>

      </div>
    </>
  );
}

export default UserProfile;
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { hamburgerMenu } from '../components/hamburgerMenu';
import { hamburgerMenu2 } from '../components/hamburgerMenu2';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './UserProfile.css'
import NavbarMenu from '../components/navbarMenu';
import UserProfileComponent from '../components/UserProfileComponent';
//New imports
import { usePostContext } from '../hooks/usePostContext';
import { useAuthContext } from '../hooks/useAuthContext';


const UserProfile = () => {

  const [sidebar, setSidebar] = useState(false);
  const {posts, dispatch} = usePostContext(); //Pulling posts
  const { user } = useAuthContext(); //Getting User object 
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [location, setLocation] = useState('');

  //Pulling All Posts
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://api-carmony-onrender-com.onrender.com/api/postRoutes");
      const json = await response.json();

        console.log('response Ok')
        dispatch({type: 'SET_POSTS', payload: json})
        calculatePages();
      }
    
      user && setFirstName(user.firstname);
      user && setLastName(user.lastname);
      user && setLocation(user.location);
      user && console.log("firstname: "+user.firstname)

    fetchPosts();
    
  }, []);

  //New added for delete 
  const deletePost = async (id) => {
    //Deletes on MongoDB
    const response = await fetch('/api/postRoutes/' + id, {
      method: 'DELETE'
    })
    
    //This is the body of the reponses, aka the array of documents
    const json = await response.json()

    //Deletes on Local Machine to keep syncronized
    if(response.ok){
      dispatch({type: 'DELETE_POST', payload: json})

    const newNumberOfPosts = numberOfPosts - 1;
    
    setNumberOfPosts(newNumberOfPosts);
    calculatePages();
    }
  }

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [carbutton, setCarbutton] = useState(false);
  const showCarButton = () => {
    setCarbutton(!carbutton);
  };

  const deleteButton = (id) => {

    deletePost(id);
   
    
  };

  const editListing = (id) => {

  } 

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;
  const [numberOfPosts, setNumberOfPosts] = useState(0);
  const [index, setIndex] = useState(0);
  const [array, setArray] = useState([]);

  if(posts && numberOfPosts == 0){
    setNumberOfPosts(posts.length);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 2);
    console.log("Next Page");
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 2);
    console.log("Prev Page");
  };

  const filter = (post) => {

    if(post.user == undefined && posts){
      return false;
    }

    //Check if posted by this user
    if(user.email != post.user){
      return false;
    }

    console.log("index A = "+ array[currentPage]);
    console.log("index B = "+ array[currentPage + 1]);
    //if(posts.indexOf(post) < array[currentPage] || posts.indexOf(post) > array[currentPage+1]){
    //  return false;
    //}
    //Show all at once I can't get pages to work
    console.log("Index of true: " + posts.indexOf(post));
    return true;
  }

  const calculatePages = () => {
    var start = 0;
    var end = 0;
    var count = 0;
    var newArray = []; // Create a new array to hold the calculated values
    posts && posts.forEach((post, index) => { // Use forEach instead of map

      if (post.user === user.email) {
        console.log("In calc: index = " + posts.indexOf(post)+ " count: "+count);
        if(count == 0){
          start = index;
        }
        count++;
      }
      if (count > 5) {
        count = 0;
        newArray.push(start); // Use push to add values to the array
        end = index;
        newArray.push(end);
        start = end + 1;
      }
    });
    for(var i =0; i < newArray.length; i++){
      console.log("new array: "+newArray[i]);
    }
    setArray(newArray); // Update the state with the new array
  };


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbarMenu flex items-center'>
          <Link to="#" className='hamburger-bars'>
            <FaBars onClick={showSidebar} />
          </Link>

          <div className="carmony-logo w-1/10 flex justify-center items-center p-0 1rem" style={{ width: "15rem", marginLeft: "2rem" }}>
            <img src="CARMONY_ICON2.png" alt="Logo" className="w-500 mt-3" />
          </div>

          <NavbarMenu />
        </div>

        <nav className={sidebar ? 'nav-bar-menu active' : 'nav-bar-menu'}>
          <ul className='nav-bar-menu-items' onClick={showSidebar}>
            <li className="nav-bar-toggle">
              <Link to="#" className='hamburger-bars'>
                <AiOutlineClose />
              </Link>
            </li>
            {!user && hamburgerMenu.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            {user && hamburgerMenu2.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}
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
                    src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
                    alt=""
                  />

                  <ul className="meta list list-unstyled">
                    <li className="email">
                      {user && ( <a href="#">{user.email}</a>)}
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
                  {posts && Array.isArray(posts) && posts.map((post, index) => (
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
        {(currentPage * 2)+ 1 < array.length && (
          <span onClick={nextPage} style={{ backgroundColor: 'green' }}>Go to Next Page</span>
        )}
      </div>

      </div>
    </>
  );
}


export default UserProfile;

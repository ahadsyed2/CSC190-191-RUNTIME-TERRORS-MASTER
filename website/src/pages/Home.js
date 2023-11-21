import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Home.css';


function Home() {
    const [sidebar, setSidebar] = useState(false) 
    /*setSidebar=update*/ /*false means the current value is not showing*/
    const showSidebar = () =>  setSidebar(!sidebar)
    /* utilize set side bar and this is going to update the value to whatever the opposite of it is currently*/
    /*(!sidebar) it's reversing the value true/false*/

    function myFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("mySearch");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myMenu");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }

  return (
    <>
      <IconContext.Provider value= {{color: '#fff'}}>
      <div className='navbar'>
        <Link to="#" className='hamburger-bars'>
            <FaBars onClick={showSidebar} />
        </Link>

        <div className="logo">
          <img src="https://www.clker.com/cliparts/u/O/L/Q/c/m/car-icon-hi.png" alt="Logo" />
        </div>

        <div className="top-rightbox">
          <div className='Post'>
              <ul>
                <li>
                <Link to="/Posting">+ Create a listing
                </Link>
                </li>
              </ul>
          </div>
            <div className="Login">
              <ul>
                <li>
                <Link to="/Login"><FontAwesomeIcon icon={faUser} className="user-icon" /> Login
                </Link>
                </li>
              </ul>
            </div>
            <div className="SignUp">
              <ul>
                <li>
                <Link to="/Signup"><FontAwesomeIcon icon={faUser} className="user-icon" /> Sign Up
                </Link>
                </li>
              </ul>
            </div>
          </div>
      </div>
      
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className='hamburger-bars'>
                    <AiOutlineClose />
                </Link>
            </li>
            {hamburgerMenu.map((item, index) => {
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

      <div className="box">
          <div className="left-box">
            <div className="filter">
              <div className="filter-header">
                <h2>Filter by</h2>
                <Link to="/"><h3>clear filter</h3></Link>
              </div>
            </div>
            <input
              type="text"
              className="mySearch"
              onKeyUp={() => myFunction()}
              placeholder="Search..."
              title="Type in a category"
            />
            <div className="myMenu">
              <div className="customer-choices">
                <div className="choices">
                <Link to="/"><h3>All</h3></Link>
                <Link to="/"><h3>Dealers</h3></Link>
                <Link to="/"><h3>Owners</h3></Link>
                </div>
              </div>

              <li><h3><Link to="/">Make</Link></h3></li>
              <li><h3><Link to="/">Model</Link></h3></li>
              <li><h3><Link to="/">Years</Link></h3></li>
              <li><h3><Link to="/">Price</Link></h3></li>
              <li><h3><Link to="/">Mileage</Link></h3></li>
            </div>
          </div>
          
          <div className="container">
              <div className="products-con">
                <div className="products-item">
                  <div className="products-img">
                    <img 
                      src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    KIA Optimal 2010
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1594611342073-4bb7683c27ad?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1612911912327-57b3aff278c4?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>
                
                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1588086272079-8b1556abdb53?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY0fHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1528500474434-2675c175491e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc0fHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1609326005487-361f2e1c2640?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img 
                      src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    KIA Optimal 2010
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1594611342073-4bb7683c27ad?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1594611342073-4bb7683c27ad?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1594611342073-4bb7683c27ad?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img 
                      src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    KIA Optimal 2010
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

                <div className="products-item">
                  <div className="products-img">
                    <img
                      src="https://images.unsplash.com/photo-1594611342073-4bb7683c27ad?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjYXJ8ZW58MHx8MHx8fDA%3D"
                      alt="Product"
                      width="60"
                      height="180"
                    />
                  </div>
                  <div className="products-detail">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tenetur aspernatur commodi sint illo tempora deserunt ratione eveniet distinctio soluta consequatur voluptatibus corrupti vero placeat optio sunt atque reprehenderit quas.
                  </div>
                  <div className="products-price">
                    <div className="products-left">$000000000
                    </div>
                  </div>
                </div>

              </div>
          </div>
      </div>

      
        <div className='footer'>
        <p>2023</p>
        </div>
     

    </>
  )
}

export default Home
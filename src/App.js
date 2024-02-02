import './App.css';
import { IoIosArrowDown,IoMdSearch,IoMdCart} from "react-icons/io";
import {IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaBars,FaFacebook,FaTwitter,FaBehance,FaDribbble} from "react-icons/fa";
import logo from './images/logo.png';
import slider from './images/slider1.jpeg';
import item1 from './images/item1.jpeg';
import item2 from './images/item2.jpeg';
import item3 from './images/item3.jpeg';
import p1 from './images/p1.jpeg';
import p2 from './images/p2.jpeg';
import p3 from './images/p3.jpeg';
import p4 from './images/p4.jpeg';
import p5 from './images/p5.jpeg';
import p3c from './images/p3c.jpeg';
import p7 from './images/p7.jpeg';
import p8 from './images/p8.jpeg';
import p9 from './images/p9.jpeg';
import p10 from './images/p10.jpeg';
import n1 from './images/n1.jpeg';
import n2 from './images/n2.jpeg';
import n3 from './images/n3.png';
import n4 from './images/n4.png';
import n5 from './images/n5.jpeg';
import l1 from './images/l1.jpeg';
import l2 from './images/l2.jpeg';
import l3 from './images/l3.jpeg';
import l4 from './images/l4.jpeg';
import l5 from './images/l5.jpeg';
import b1 from './images/b1.jpeg';
import b2 from './images/b2.jpeg';
import b3 from './images/b3.jpeg';
import logo2 from './images/logo2.png';

function App() {
  return (

<div>
    <div className="top_header">
      <div className="container">
        <div className="d_flex space_between item_center">
          <div>
            <img src={logo}></img>
          </div>

          <nav class="center">
                <ul class="main_menu d_flex">
                    <li><a href="">Home<i><IoIosArrowDown></IoIosArrowDown></i></a></li>
                    <li><a href="">Shop<i><IoIosArrowDown></IoIosArrowDown></i></a></li>
                    <li><a href="">Blog<i><IoIosArrowDown></IoIosArrowDown></i></a></li>
                    <li><a href="">Pages<i><IoIosArrowDown></IoIosArrowDown></i></a></li>
                    <li><a href="">Contact<i><IoIosArrowDown></IoIosArrowDown></i></a></li>
                </ul>
          </nav>

            <div class="right">
                <ul class="main_menu d_flex">
                    <li><a href=""><i><IoMdSearch></IoMdSearch></i>Search</a></li>
                    <li><a href=""><i><IoMdCart></IoMdCart></i>Cart(0)</a></li>
                    <li><a><i><FaBars></FaBars></i></a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    <div className='slider'>
            <div className='item'>
              <img src={slider}></img>
            </div>
    <div className="container pd-y">
      <div className="d_flex space_between item_center">
        <div className='slider d_flex'>

          <div className='content'>
              <h2>Think Different &<br></br>Do it otherwise</h2>
              <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
              <button className='btn0'>DISCOVER NOW</button>
          </div>    
              
        </div>
      </div>
    </div>
  </div>
  {/* ======================slider end============== */}
  
  {/* ================slider about start============ */}
  
  <div className='small'>        
    <div className='container'>
      <div className='d_flex slider1'>
        
        <div className='box'>
          <img src={item1}></img>
          <div className='box1'>
            <h4>Lighting & Chair</h4>
            <h5>Discover Now</h5>
          </div>
        </div>
        
        <div className='box'>
          <img src={item2}></img>
          <div className='box1'>
            <h4>Decoration & Accessories</h4>
            <h5>Discover Now</h5>
          </div>
        </div>
        
        <div className='box'>
          <img src={item3}></img>
          <div className='box1'>
            <h4>Clothing & Oil</h4>
            <h5>Discover Now</h5>
          </div>
        </div>
      
      </div>    
    </div>
  </div>

  {/* ================slider about end============ */}

  {/*  =================== Trending Products start ============  */}

    <div className='productnew'>
      
    <div className='pd-y container product'>
            
            <div className='title1 text_center'>
              <h1>Trending Products</h1>
              <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
            </div>

            <div className='d_flex main'>
              <div className='w-25 con'>
                <img src={p1}></img>
                <h4>Wooden container Bowl</h4>
                <h4>$90.00 $110</h4>
              </div>
              <div className='w-25 con'>
                <img src={p2}></img>
                <h4>Euvira Rocking Chair</h4>
                <h4>$90.00 $110</h4>
              </div>
              <div className='w-25 con'>
                <img src={p3}></img>
                <h4>Set of 2 baskets</h4>
                <h4>$230.00 $250</h4>
              </div>
              <div className='w-25 con'>
                <img src={p4}></img>
                <h4>Tailored Fit Mesh-Panel</h4>
                <h4>$67.00 $80</h4>
              </div>
            </div>

            <div className='d_flex main'>
            <div className='w-25 con p11'>
                <img src={p3c}></img>
                <h4>Bottle With Wooden Cork</h4>
                <h4>$270.00 $290</h4>
              </div>
              <div className='w-25 con'>
                <img src={p5}></img>
                <h4>Rosmo Namino</h4>
                <h4>$180.00 $200</h4>
              </div>
              
              <div className='w-25 con'>
                <img src={p7}></img>
                <h4>Hauteville Plywood Chair</h4>
                <h4>$320.00 $325</h4>
              </div>
              <div className='w-25 con'>
                <img src={p8}></img>
                <h4>Juicy Pendant Lamp</h4>
                <h4>$350.00 $380</h4>
              </div>
            </div>

            <div className='btn1'>
              <p>LOAD MORE</p>
            </div>
      </div>
      
    </div>

  {/*  =================== Trending Products end ============ */ }
  
  <div className='one'>
    <div className='pd-y trad'>
      <div className='d_flex neno'>
       
      <div className='box2 boxx2'>
          <img src={p9}></img>
          <div className='box3'>
          <h4>Products Accessories</h4>
            <h3>Wooden container Bowl</h3>
            <p>BUY NOW /<span> $96</span></p>
          </div>
        </div>
        
        <div className='box2 boxx2'>
          <img src={p10}></img>
          <div className='box3'>
            <h4>Products Clothing</h4>
            <h3>Set Of 2 baskets</h3>
            <p>BUY NOW /<span> $230</span></p>
          </div>
        </div>
        
      </div>
    </div>
  </div>

{ /* =================== Sale Off start====================== */ }
<div className='prod'>
      
      <div className='container pro'>
              
              <div className='title2 text_center'>
                <h1>Sale Off</h1>
                <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
              </div>
  
              <div className=' d_flex text_center main2 '>
                <div className='w-20 con1'>
                  <img src={n1}></img>
                  <h4>Tailored Fit Mesh-Panel</h4>
                  <p>$67.00 / $80.00</p>
                </div>
                <div className='w-20 con1'>
                  <img src={n2}></img>
                  <h4>Big sale canvas basket</h4>
                  <p>$400.00</p>
                </div>
                <div className='w-20 con1'>
                  <img src={n3}></img>
                  <h4>Haggar Men's Heather</h4>
                  <p>$420.00</p>
                </div>
                <div className='w-20 con1'>
                  <img src={n4}></img>
                  <h4>Cotton Twill Suit</h4>
                  <p>$450.00</p>
                </div>
                <div className='w-20 con1'>
                  <img src={n5}></img>
                  <h4>Big sale canvas basket</h4>
                  <p>$480.00</p>
                </div>
              </div>
      </div>
</div>
  

{ /* =================== Sale Off end====================== */ }

{/*===================== slider logo start ====================*/}

<div className='logoslider'>
  <div className='container pd-y'>
    <div className='lomain d_flex text_center'>
      <div className='w-20'><img src={l1}></img></div>
      <div className='w-20'><img src={l2}></img></div>
      <div className='w-20'><img src={l3}></img></div>
      <div className='w-20'><img src={l4}></img></div>
      <div className='w-20'><img src={l5}></img></div>
    </div>
  </div>
</div>

{/*===================== slider logo end ====================*/}

{/* ===================== Our Blog Posts start ======================= */}

<div className='our'>
    <div className='container '>
      <div className='blogcon text_center'>
          <h1>Our Blog Posts</h1>
          <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
      </div>
      <div className='d_flex text_center space_between'>
        
        <div className='blogimg'>
          <img src={b1}></img>
          <h2>Hanging fruit to identify</h2>
          <h3>By / Naim Ahmed / November 14,2023</h3>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
          <button className='btn2'>READ MORE</button>
        </div>
        
        <div className='blogimg'>
          <img src={b2}></img
          
          >
          <h2>The information highway will.</h2>
          <h3>By / John Smith / November 14,2023</h3>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
          <button className='btn2'>READ MORE</button>
        </div>
        
        <div className='blogimg'>
          <img src={b3}></img
          
          >
          <h2>Anteposuerit litterarum formas.</h2>
          <h3>By / Shahnewaz Sakil / November 14,2023</h3>
          <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
          <button className='btn2'>READ MORE</button>
        </div>
      
      </div>
    </div>
</div>

{/* ===================== Our Blog Posts end ======================= */}

{/* ===================== Get Discount Info start ======================= */}
    
    <div className='get'>
      <div className='continer pd-y'>
        <hr className='hr1'></hr>
        <div className='get1'>
          <h1>Get Discount Info</h1>
          <p>Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers and other <br></br> discount information.</p>
        </div>
        <hr className='hr2'></hr>
          <button className='btn3'>SUBSCRIBE</button>
      </div>
    </div>
    
{/* ===================== Get Discount Info end ======================= */}

{/* =================== FOOTER start ======================== */}

<div className='foot'>
    <div className='container pd-y'>
      <div className='d_flex space_between'>
        <div className='fleft  w-33'>
          <img src={logo2}></img>
          <p className='f1'>Outstock is a premium Templates theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p>
          <p className='f2'><IoLocationOutline></IoLocationOutline>  Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
          <p className='f2'><MdOutlineMail></MdOutlineMail>  Email: Contact@basictheme.com</p>
          <p className='f2'><IoCallOutline></IoCallOutline>  Phone Number: (800) 123 456 789</p>
        </div>
        <div className='fcenter w-33'>
          <h4>Information</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Delivery Inforamtion</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
        <div className='fcenter w-33'>
          <h4>Customer Service</h4>
          <p>Shipping Policy</p>
          <p>Help & Contact Us</p>
          <p>Returns & Refunds</p>
          <p>Online Stores</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
</div>
{/* =================== FOOTER END ======================== */}

{/* copy right start*/}
<div className='copy'>
<hr></hr>
  <div className='container'>
    <div className='d_flex space_between'>
      <div className='leftcopy'>
          <p>Copyright © Outstockall rights reserved. Powered byTheme_pure</p>
      </div>
      <div className='rightcopy d_flex'>
        <a><FaFacebook></FaFacebook></a>
        <a><FaTwitter></FaTwitter></a>
        <a><FaBehance></FaBehance></a>
        <a><FaDribbble></FaDribbble></a>
      </div>
    </div>
  </div>

</div>

{/* copy right end*/}

</div>

  );
}

export default App;

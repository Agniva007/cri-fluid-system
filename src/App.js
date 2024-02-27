import './App.css';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { BsFacebook } from "react-icons/bs";
import { MdOutlineTravelExplore } from "react-icons/md";

function App() {
  return (
    <div className="App">

      <div className="logoContainer">
        <img src="../assets/logo.png" alt="Logo" className="logo" />
      </div>

      <div className="contentContainer">
        <div className="imageContainer">
          <img src="../assets/1.png" alt="Image" className="image" />
        </div>
        <div className="textContainer">
          <h4>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <ul>
            <li>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of LESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <div className='imageContainerDiv'>
            <img src="../assets/2.png" alt="Image" className="image" />
          </div>
          <p>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State</p>
        </div>
      </div>

      <div className="contentContainer">
        <div className="contentDiv">
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
          <div className='imageContentDiv'>
            <img src="../assets/3.png" alt="Image" className="image" />
            <p>Valves - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
          </div>
        </div>
      </div>

      <div className='contentContainer'>
        <div className='endContentDiv'>
          <h4>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
          <p>
            <span>CHEMICALS & PROCESS</span>
            <span>POWER</span>
            <span>WATER & WASTE WATER</span>
            <span>OILS & GAS</span>
            <span>PHARMA</span>
            <span>SUGARS & DISTILLERIES</span>
            <span>PAPER & PULP</span>
            <span>MARINE & DEFENCE</span>
            <span>METAL & MINING</span>
            <span>FOOD & BEVERAGE</span>
            <span>PETROCHEMICAL & REFINERIES</span>
            <span>SOLAR</span>
            <span>BUILDING</span>
            <span>HVAC</span>
            <span>FIRE FIGHTING</span>
            <span>AGRICULTURE & RESIDENTIAL</span>
          </p>
        </div>
      </div>

      <footer class="footer">
        <div class="footerContainer">
          <div class="social-links">
            <a href="tel:1800 200 1234"><FaPhoneSquareAlt /> Toll free <b>1800 200 1234</b></a>
            <a href="https://www.facebook.com/cripumps"><BsFacebook /> www.facebook.com/cripumps</a>
            <a href="https:// www.crigroups.com"><MdOutlineTravelExplore />  www.crigroups.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

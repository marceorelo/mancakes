import '../style.css';
import '../bootstrap.min.css';
import {Link, NavLink} from "react-router-dom"
import logo from "./img/logo.png"
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router-dom"

function NavBar()  {
  const date = new Date()
    return (
    
      
      <div className="container-fluid p-3 mb-2 text-dark">
          
          <div className="row">  
              <div className="col-md-2">
                  <img src={logo} alt={""} />                   
              </div>   
              <div className="col-md-4">
                  <h1 className="display-5">Mandala CAKES</h1>                       
              </div> 
              <div className="col-md-6">
                  <ul className="nav justify-content-end">
                      <li className="nav-item">
                      <Link to={`/`} className="nav-link">Inicio </Link>
                      </li>
                      <li className="nav-item">
                      <Link to={`/categoria/tortas`} className="nav-link">Tortas</Link>
                      </li>                        
                      <li className="nav-item">
                      <Link to={`/categoria/boxs`} className="nav-link">Box Dulces</Link>
                      </li>
                      <li class="nav-item">
                      <Link to={`/`} className="nav-link">Ubicación</Link>
                      </li>
                      <li className="nav-item">
                      <Link to={`/`} className="nav-link">Contacto</Link>
                      </li>
                      <li className="nav-item">
                      <Link to={`/carrito`} className="nav-link"><CartWidget /> </Link>
                      </li>
                    </ul>    
                    
                </div>                 
          </div>   

 </div>

     
  
    );
  }

  export default NavBar;
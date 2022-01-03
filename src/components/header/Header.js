import "./header.scss";
import { Person, Email } from "@material-ui/icons";

export const Header = ({menuOpen, setMenuOpen}) => {
  return (
    <div className= {"header " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Mykey
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>503 555 5555 </span>
          </div>
          <div className="itemContainer">
              <Email className = "icon" />
            <span>@mail.com</span>
          </div>
        </div>
        <div className="right">
            <div className = "hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className = "line1"></span>
            <span className = "line2"></span>
            <span className = "line3"></span>
            </div>
        </div>
      </div>
    </div>
  );
};

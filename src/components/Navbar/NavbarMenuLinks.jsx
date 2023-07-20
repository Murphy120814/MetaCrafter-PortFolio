import { Link } from 'react-router-dom';

function NavbarMenuLinks() {
  return (
    <>
      <p><Link to="/home">Home</Link></p>
      <p><Link to="/projects">Projects</Link></p>
      <p><Link to="/contact">Contact</Link></p>
      <p><Link to="/resume"><button className="call_to_action_btn" type="button">Resume </button></Link></p>
    </>
  );
}

export default NavbarMenuLinks;

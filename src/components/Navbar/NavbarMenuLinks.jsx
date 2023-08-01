import { Link } from 'react-scroll';

function NavbarMenuLinks() {
  return (
    <>
      <p><Link to="home" smooth duration={800} offset={-80}>Home</Link></p>
      <p><Link to="projects" smooth duration={1000} offset={-80}>Projects</Link></p>
      <p><Link to="contact" smooth duration={1000} offset={-120}>Contact</Link></p>
      <p><Link to="resume" smooth duration={800} offset={-120}><button className="call_to_action_btn" type="button">Resume </button></Link></p>
    </>
  );
}

export default NavbarMenuLinks;

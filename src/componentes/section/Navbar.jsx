import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){

    return(
        <div className={styles.nav}>
          <ul>
            <li><Nav.Link href='#projeto'>Projetos</Nav.Link></li>
            <li><Nav.Link href='#projeto'>Tecnologia</Nav.Link></li>
            <li><Nav.Link href='#habilidades'>Sobre mim</Nav.Link></li>
          </ul>

          <ul>
            <li><a href='https://github.com/eronkakau'><FaGithub size ={30}/></a></li>
            <li><a href='https://www.linkedin.com/in/eron-pinheiro-567598119/'><FaLinkedin size ={30}/></a></li>
            <li><a href='https://github.com/eronkakau'><FaInstagram size ={30}/></a></li>
           
          </ul>

        </div>
    )
}
export default Navbar

import styles from './Footer.module.css'
import { FaGithub, FaLinkedin,  FaFigma, FaInstagram } from "react-icons/fa";

function Footer(){

    return(
        <div className={styles.ft}>
           
          <ul>
          <h1>
             E-mail: eranio51@gmail.com
             </h1>
             <h1>
             Number: (92)98519-9378
             </h1>
             <li><a href='https://www.instagram.com/?hl=en'><FaInstagram size ={30}/></a></li>
            <li><a href='https://github.com/eronkakau '><FaGithub size ={30}/></a></li>
            <li><a href='https://www.linkedin.com/in/eron-pinheiro-567598119/'><FaLinkedin size ={30}/></a></li>
            <li><a href='https://www.figma.com/file/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks?type=design&node-id=1-190&mode=design&t=mZjbIE2rQVZoupTR-0'><FaFigma size={30}/></a></li>
          </ul>
        </div>
    )
}

export default Footer
import styles from './ButtonB.module.css'
import { useState } from 'react'

function ButtonB({text, lik}){

  const [cont, setcont] = useState(0);
  const incrementCont = () => {
    setcont(cont + 1);
  };
 
    return(

          <div>
            <p>Contagem:{cont}</p>
            <a href={lik}>
            <button onClick={incrementCont} className={styles.bt}>{text}</button>
            </a>
          </div>
    )
}
export default ButtonB
import ButtonA from '../elements/ButtonA'
import styles from './Habilidades.module.css'
import { useEffect, useState } from 'react'


function Habilidades(){

    const [text, setText] = useState('');
    const toRotate = ['Chrislen Eron Cacau  ','Desenvolvedor front-end', 'Analista de Tecnologia'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setInDeleting] = useState(false);
    const period = 180;
    const [delta, setDelta] = useState(100)
    


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    },[text])
     
    const toType = ()=>{
    let i = loop % toRotate.length;
    let fullText = toRotate[i]
    let updateText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)
    
    setText(updateText);

    if(!isDeleting && updateText === fullText){
      setInDeleting(true);
      setDelta(period);
    }else if(isDeleting && updateText === ''){

        setInDeleting(false);
        setDelta(period);
        setLoop(loop+1);
    }


    }

    return(
        <div className={styles.tec} id='habilidades'>
        
        <p>Olá me chamo {text}, tenho 33 anos, <br />
            ao longo da minha vida sempre procuro <br />
            desafios novos, como por exemplo em me <br />
            tornar programador. Tenho habilidades em <br />
            MySql Server Banco de dados, Rede de computadores <br />
            Java desktop, html5, css, Javascript, AWS, <br />
            Computação em Nuvem

        </p>
        <ButtonA link='https://github.com/eronkakau' text='Saiba mais'/>

        </div>
    )
}

export default Habilidades
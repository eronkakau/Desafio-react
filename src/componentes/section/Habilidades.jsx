import ButtonA from '../elements/ButtonA'
import styles from './Habilidades.module.css'


function Habilidades(){

    return(
        <div className={styles.tec} id='habilidades'>
        <p>Olá me chamo Chrislen Eron, sou formado <br />
            em Sistemas de Informação, tenho 33 anos, <br />
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
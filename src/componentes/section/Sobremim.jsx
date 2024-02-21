import timeline from '../imagem/timeline.svg'
import styles from './Sobremim.module.css'

function Sobremim(){
    return(
    
        <div className={styles.sb} id= 'Sobre mim'>
            <h1>Sobre mim</h1>
            <div>
                <ul>
                    <li>2021</li>
                    <li>2022</li>
                    <li>2023</li>
                    <li>2024</li>
                </ul>
                <img src={timeline}/>
                <ul>
                    <li>Pandemia me deixou em casa <br />
                    tudo fechado não tinha o que fazer <br />
                    na rua.
                    </li>
                    <li>Estava estudando no Cetam  <br />
                        Computação em Nuvem</li>
                    <li> Trabalhando na Area de Tecnologia <br />
                        como autônomo.
                    </li>
                    <li>Estudando Formação em Tecnologia <br />
                        pela School DNC.
                    </li>
                </ul>

            </div>
        </div>
    )
}
export default Sobremim
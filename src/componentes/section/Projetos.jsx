import styles from './Projetos.module.css'
import googl from '../imagem/googl.svg'
import cssa from '../imagem/cssa.svg'
import htmll from '../imagem/htmll.svg'
import reactt from '../imagem/reactt.svg'
import ButtonB from '../elements/ButtonB'

function Projetos(){

  

    return(
    <div>
        <h1 className={styles.h}>Projetos</h1>
        <section className={styles.sct}>
            
            <div className={styles.pro} id='projeto'>
            
                <div>
                    <a href="https://www.google.com/">
                    <img src={googl} />
                    </a>
                </div>
                <p >
                    A história do Google começou com a missão de <br />
                    organizar as informações para que fossem  <br />
                    universalmente acessíveis e úteis para todos. <br />
                    O famoso buscador está está presente atualmente <br />
                    no cotidiano de bilhões de pessoas ao redor <br />
                    do planeta.
                </p>

                <ButtonB text='Clique aqui' lik='https://www.google.com/'  />

               
            </div>

            <div className={styles.csa} id='projeto'>

                <div>
                    <a href="https://coodesh.com/blog/dicionario/o-que-e-css/">
                    <img src={cssa} />
                    </a>
                </div>
                <p>
                CSS significa Cascading Style Sheets <br />
                (Folha de Estilo em Cascatas). Ele <br />
                tem esse nome porque aplica-se as <br />
                estruturas de “cima para baixo”, ou seja, <br />
                por meio de regras com prioridades para seguir.
                </p>

                <ButtonB text='Clique aqui' lik='https://coodesh.com/blog/dicionario/o-que-e-css/' />
            </div>
        </section>
        
        <section className={styles.sct}>
                
                <div className={styles.htm} id='projeto'>

                    <div>
                        <a href='https://pt.wikipedia.org/wiki/HTML'>

                        <img src={htmll}/>
                        </a>
                    </div>
                    <p>
                    O HTML foi inventado por Tim Berners-Lee, <br />
                    um físico do centro de pesquisas CERN, na <br />
                    Suíça. Ele surgiu com a ideia de um sistema <br />
                    de hipertexto na internet. Hipertexto significa <br />
                    um texto que possui referências (links) para <br />
                    outros textos que podem ser acessados imediatamente.
                    </p>

                    <ButtonB text='Clique aqui' lik='https://pt.wikipedia.org/wiki/HTML' />
                </div>

                <div className={styles.rca} id='projeto'>

                    <div>
                        <a href='https://pt.wikipedia.org/wiki/React_(JavaScript)'>
                        <img src={reactt} />
                        </a>
                    </div>
                    <p>
                    O React também denominado React.js ou ReactJS <br />
                    é uma biblioteca front-end JavaScript de código <br />
                    aberto com foco em criar interfaces de usuário <br />
                    em páginas web. <br />
                    Criado em 2011 pelo Facebook, com a criação de <br />
                    views declarativas e baseando-se em componentes,<br />
                    sincronização de atividades simultâneas no feed <br />
                    de notícias da rede social e melhorar a manutenção de código.
                    </p>

                    <ButtonB text='Clique aqui' lik='https://pt.wikipedia.org/wiki/React_(JavaScript)' />
                </div>
            </section>
           
            </div>
    )
}
export default Projetos
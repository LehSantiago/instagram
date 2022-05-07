
import './style.css'

export function Suggestion() {


    

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://64.media.tumblr.com/b3c0ecd0a786822e0c230dc25174de84/310483aed1bb5238-c1/s540x810/a7ed7ccb57befaccfd40d01c37fb9a99dab23e0f.jpg`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>leticiasantiagoh</span>
                        <p>Gostaria que fosse a minha foto mas meu note não está baixando mais, só está pegando se for url :(</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >

                     <div className="infos-suggestion">
                        <img src= "https://pm1.narvii.com/7846/6ecca58ee80159dd8148b508822101bf84e963e8r1-1572-2048v2_hq.jpg"/>
    
                        <div className="info-suggestion" >
                            <span>Joha.pearl</span>

                            <p>Seguido por Doosik.pearl</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    

                 
            </div>

            
            <div className="user-suggestion" >

                     <div className="infos-suggestion">
                        <img src= "https://i.pinimg.com/originals/b1/3a/03/b13a031a4fde233853d761e1648ad1d1.jpg"/>
    
                        <div className="info-suggestion" >
                            <span>Doosik.pearl</span>

                            <p>Seguido por GOJO</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    

                 
            </div>

            
            <div className="user-suggestion" >

                     <div className="infos-suggestion">
                        <img src= "https://i.pinimg.com/originals/d3/00/0a/d3000a571e0c1872e92c220e3e50ee7e.jpg"/>
    
                        <div className="info-suggestion" >
                            <span>Rezef_boladao</span>

                            <p>Seguido por Ninguém</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    

                 
            </div>

            
            <div className="user-suggestion" >

                     <div className="infos-suggestion">
                        <img src= "https://i.pinimg.com/736x/6b/9c/e2/6b9ce24040ffaa53833b80b38c0e5167.jpg"/>
    
                        <div className="info-suggestion" >
                            <span>Cayena.princess</span>

                            <p>Seguido por Misaki</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    

                 
            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2021 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}
import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://th.bing.com/th/id/R.ed03e2116df19aeec9e77f12a9612b53?rik=eh7BI2Ki8WWe%2bQ&pid=ImgRaw&r=0" />

                    <p>Instituto.proa</p>
                </div>



                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://th.bing.com/th/id/R.2ed3ebf341b16d6581688cc6881238e4?rik=A60Bigg7nXusMA&pid=ImgRaw&r=0"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>15.445 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>Instituto.proa</span>  ...
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 7 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
        </>

    )
}
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import { IconContext } from 'react-icons'

import './styles.css'

export function Header() {

    return (
        <header className="header" >

            <div className="container" >

                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-fake">
                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                    
                    <input placeholder="pesquisar" />
                </div>

                <div className="menu-icons" >
                    <IconContext.Provider value={{ size: '26px' }}>
                        <div>
                            <AiFillHome />
                        </div>

                        
                        <div>
                            <RiMessengerLine />
                        </div>

                        <div>
                            <BsPlusSquare />
                        </div>

                        <div>
                            <MdOutlineExplore />
                        </div>

                        <div>
                            <FiHeart />
                        </div>
                        

                    </IconContext.Provider>
                    <img className="img-user" src="https://64.media.tumblr.com/b3c0ecd0a786822e0c230dc25174de84/310483aed1bb5238-c1/s540x810/a7ed7ccb57befaccfd40d01c37fb9a99dab23e0f.jpg" />
                </div>

            </div>

        </header>
    )

}
import './style.css'
import User from '../../assets/user.png'
import Js from '../../assets/js.png'
import Java from '../../assets/java.png'
import React from '../../assets/react.png'

function Main() {
    return (
        <div className="main">
            <img src={User} alt="Foto de perfil" />
            <h1>Priscila Faleiro Butzke</h1>
            <h2>Estudante no Colégio Ulbra São Lucas</h2>
            <p>Tecnologias que mais conheço: </p>

            <div className='linguagens'>
                <div className='link'>
                    <img src={Js} alt="logo javaScript" />
                    <p>JavaScript</p>
                </div>
                <div className='link'>
                    <img className='java' src={Java} alt="logo javaScript" />
                    <p>Java</p>
                </div>
                <div className='link'>
                    <img src={React} alt="logo javaScript" />
                    <p>React</p>
                </div>
            </div>

        </div>
    )
}
export default Main
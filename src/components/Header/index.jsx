import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import './style.css'

function Header() {
    return (
        <header>
             <div className="title">
                <h1>Curriculo</h1>
            </div>
            <div className="links">
                <a href="https://github.com/seu-usuario" target="_blank">
                    <img src={Github}  alt="Icone do Github" />
                </a>
                <a href="https://linkedin.com/in/seu-usuario" target="_blank">
                    <img src={Linkedin}alt="Icone do Linkedin" />
                </a>
            </div>
           
        </header>
    )
}
export default Header
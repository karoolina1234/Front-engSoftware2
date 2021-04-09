import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram , faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../menu/menu.css'
function Footer(){
    return(
<div className='footer container'>


<div className="infos-logo">
 <FontAwesomeIcon icon = {faBook}  className="icon-footer"/>
</div>
<div className="infos-footer">
    <ul>
        <li>Paginas de conteúdo</li>
        <li><a>Sobre Nós</a></li>
    </ul>
</div>

<div className="infos-redesSociais">
    <ul>
        <li>Redes Socias</li>
        <li><a><FontAwesomeIcon icon = {faInstagram} className='icon-redes'/> Instagram</a></li>
        <li><a><FontAwesomeIcon icon = {faFacebook}  className='icon-redes'/> Facebook</a></li>
        <li><a><FontAwesomeIcon icon = {faLinkedin}  className='icon-redes'/>Linkedin</a></li>
    </ul>
</div>

     </div>
        
    )
}
export default Footer

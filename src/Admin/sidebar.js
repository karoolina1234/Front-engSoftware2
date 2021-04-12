import React from 'react'
import { Link } from 'react-router-dom'
import '../components/menu/usuario.css'
function SideBar(){
    return(<>
        <nav class="col-md-2  sidebar">
            <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link to="/prod" class="nav-link active">
                  Ver produtos
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                </svg>
                </Link>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Editar Produtos
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                </svg>
                </a>
              </li>
              <li class="nav-item">
                <Link to="/add" class="nav-link">
                   Adicionar produtos
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                </svg>
                </Link>
              </li>
            </ul>
            </div>
           </nav>

        
        </>
    )
}


export default SideBar;
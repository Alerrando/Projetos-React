import { useState } from 'react'
import reactLogo from './assets/favicon.ico'
import './App.css'

export function App() {
  const [menuToggle, setMenuToggle] = useState<string>("none")

  function verificarMenu(){
      if(menuToggle == "none")
          setMenuToggle("open");
      else
      {
          setMenuToggle("none");
      }
  }

  return (
      <header>
        <div className="header-logo alinhamento">
          <h1 className="h1">React</h1>
          <div className="logo-img">
            <img src="https://www.svgrepo.com/show/354259/react.svg" alt="logo do reactjs" />
          </div>
        </div>

        <nav className={menuToggle}>
          <li>Home</li>
          <li>Serviços</li>
          <li>Produtos</li>
          <li>Contatos</li>
          <button className='btn'>Inscreva-se</button>

        </nav>
        <i 
          id="menu" 
          className={menuToggle == "none" ? "ph-list-bold" : "ph-x-bold"}
          onClick={verificarMenu}
        >

          </i>
      </header>
  )
}


const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <li>
        <a href="./public/index.html" className="navBarButtons">Inicio</a>
        </li>
        <li>
          <button class="btn navBarButtons" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Marcas
          </button>
           <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="-">GT</a></li>
            <li><a class="dropdown-item" href="-">OLMO</a></li>
            <li><a class="dropdown-item" href="-">VAIRO</a></li>
            <li><a class="dropdown-item" href="-">OXFORD</a></li>
            <li><a class="dropdown-item" href="-">SPECIALIZED</a></li>
           </ul>
        </li>
        <li>
          <a href="-" className="navBarButtons">Repuestos</a>
        </li>
        <li>
          <a href="-" className="navBarButtons">Accesorios</a>
        </li>
        <li>
          <a href="-" className="navBarButtons">Contacto</a>
        </li>
        <li>
          <button className="navBarButtons"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg></button>
        </li>
      </div>
    </nav>
  )
}

export default NavBar
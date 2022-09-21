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
      </div>
    </nav>
  )
}

export default NavBar
const logof1 = <img class="logoF1"  src="./f1_logo.png" alt="logo"/>
const Navbar = () => {
    return(
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <div>{logof1}</div>
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page">Inicio</a>
                <a class="nav-link active">Fechas</a>
                <a class="nav-link active">Pilotos</a>
                <a class="nav-link active">Boletos</a>
                <a class="nav-link active">Merch</a>
              </div>
            </div>
          </div>
        </nav>
    )
    }
    
  export default Navbar;
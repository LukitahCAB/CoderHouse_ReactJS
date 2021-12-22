import React from 'react';
const logof1 = <img className='logoF1'  src='./f1_logo.png' alt='logo'/>
const Navbar = () => {
    return(
      <nav className='navbar navbar-expand-lg navbar navbar-dark bg-dark'>
          <div>{logof1}</div>
          <div  className='container-fluid'>
            <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
              <span class='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
                <a className='nav-link active' aria-current='page'>Inicio</a>
                <a className='nav-link active'>Fechas</a>
                <a className='nav-link active'>Pilotos</a>
                <a className='nav-link active'>Boletos</a>
                <a className='nav-link active'>Merch</a>
              </div>
            </div>
          </div>
        </nav>
    )
    }
    
  export default Navbar;
import React, { Component } from 'react';
import '../CSS/PagoB.css';
import { Link, Outlet } from 'react-router-dom';

class PagoBanco extends Component {
  render() {
    return (
      <body>
        <div className='container'>
          <div className="pagoGrid">
              <h1>CONFIRMACION DEL PAGO</h1>
              <p>El monto a cancelar es de Bs. 100</p>
              <div>
                <Link to='/Reserva'>
                  <button>Confirmar pago y volver</button>
                </Link>
                <Link to='/Reserva'>
                  <button>No confirmar pago y volver</button>
                </Link>
              </div>
            </div>
        </div>
      </body>
    );
  }
}

export default PagoBanco;

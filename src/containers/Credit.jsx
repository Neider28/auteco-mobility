import React from 'react';
import '../css/Credit.css';

const Credit = () => {
  return (
    <section className="Credit-container">
      <div className="credit-data--content">
        <h2>Selecciona la moto que deseas</h2>
        <div className="credit-data--card">
          <form>
            <label htmlFor="marcas">Nuestras marcas</label>
            <select id="marcas" name="marcas">
              <option value>Selecciona una marca</option>
              <option value="benelli">BENELLI</option>
              <option value="benelli-bike">BENELLI BIKE</option>
              <option value="ceronte">CERONTE</option>
              <option value="combat">COMBAT</option>
              <option value="dongfeng">DONGFENG</option>
              <option value="jac">JAC</option>
              <option value="kawasaki">KAWASAKI</option>
              <option value="kymco">KYMCO</option>
              <option value="piaggio">PIAGGIO</option>
              <option value="segway">SEGWAY</option>
              <option value="stark">STARK</option>
              <option value="starker">STARKER</option>
              <option value="super-soco">SUPER SOCO</option>
              <option value="velocifero">VELOCIFERO</option>
              <option value="victory">VICTORY</option>
              <option value="wolf">WOLF</option>
              <option value="zhidou">ZHIDOU</option>
            </select>
            <label htmlFor="modelo">Modelos de moto</label>
            <select id="modelo" name="modelo">
              <option value="Selecciona">Selecciona una moto</option>
            </select>
          </form>
        </div>
        <div className="credit-data--card">
          <form>
            <label htmlFor="costo">Cuota inicial</label>
            <input
              type="number"
              id="costo"
              name="costo"
              placeholder="Por ejemplo: $500.000"
            />
            <label htmlFor="meses">Plazo para pagar</label>
            <select id="meses" name="meses">
              <option value>Selecciona un plazo</option>
              <option value={3}>3 meses</option>
              <option value={6}>6 meses</option>
              <option value={12}>12 meses (1 año)</option>
              <option value={24}>24 meses (2 años)</option>
              <option value={36}>36 meses (3 años)</option>
              <option value={48}>48 meses (4 años)</option>
              <option value={60}>60 meses (5 años)</option>
              <option value={72}>72 meses (6 años)</option>
            </select>
          </form>
        </div>
        <div className="credit-data--card">
          <span>Ingresa tus datos</span>
          <form>
            <input type="number" placeholder="Número de identificación" />
            <input type="text" placeholder="Nombre completo" />
            <input type="email" placeholder="micorreo@gmail.com" />
            <input type="number" placeholder="Celular" />
            <input type="text" placeholder="Departamento" />
            <input type="text" placeholder="Cuidad" />
          </form>
        </div>
        <div className="credit-data-autorization--card">
          <form>
            <input
              type="checkbox"
              id="autorization"
              name="autorizacion"
              value="Acepto"
            />
            <label htmlFor="autorization" id="autorization-text">
              Autorizo a Auteco Mobility S.A.S para que mis datos personales
              sean tratados conforme al manual interno de políticas y
              procedimientos de datos personales que se encuentra publicada en
              la página web{' '}
              <a href="https://mas.autecomobility.com/">
                www.autecomobility.com
              </a>
              ,{' '}
              <a href="https://www.autecomobility.com/manual-de-politicas-y-procedimientos-de-datos?_ga=2.256193931.1074075641.1652666850-1859204028.1650746186">
                disponible aquí.
              </a>
            </label>
          </form>
          <button className="button-data">CALCULA TU CUOTA MENSUAL</button>
        </div>
      </div>
    </section>
  );
};

export { Credit };

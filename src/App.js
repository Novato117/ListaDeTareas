import './App.css';
import Noble from './imagenes/Noble.png';
/*import TareaFormulario from './componentes/TareaFormulario.js';*/
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-de-tareas">
      <div className='tareas-logo-contenedor'>
        <img
          src={Noble}
          className='tareas-logo'
          alt='' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div >
  );
}



export default App;

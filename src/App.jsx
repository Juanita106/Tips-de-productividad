import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // 1. Array de objetos con los nuevos tips
  const tips_productividad = [
    { id: 1, tip: "Agrupá tareas similares en bloques de tiempo (Batching)." },
    { id: 2, tip: "Divide tareas grandes en pequeñas." },
    { id: 3, tip: "Aplicá la regla de los dos minutos para tareas rápidas." },
    { id: 4, tip: "Priorizá tus tres tareas más importantes (MITs) cada mañana." },
    { id: 5, tip: "Revisá tus avances al final de cada jornada." },
    { id: 6, tip: "Establecer límites de tiempo y fechas de entrega claras." }
  ];
const [indice, setIndice] = useState(0);

  // Usamos esta forma de función que es la más compatible
  const siguienteTip = () => {
    // Generamos el número aleatorio (entre 0 y 5)
    const azar = Math.floor(Math.random() * tips_productividad.length);
    
    // Forzamos el cambio de estado
    setIndice(azar);
    
    // Esto es para que vos veas en la consola si el botón "despierta"
    console.log("Nuevo índice generado:", azar);
  };

  return (
    <div className="container">
      <header className="header-tips">
        <h1>💡 Tips de Productividad</h1>
      </header>
      
      <main className="card-container">
        <div className="tip-card">
          <div className="tip-header">
            <span>📋</span>
            <h3>Tip actual</h3>
          </div>

          <div className="quote-box">
            <span className="quote-icon">“</span>
            <p className="tip-text">"{tips_productividad[indice].tip}"</p>
          </div>
          
          <div className="actions">
            {/* ASEGURATE QUE ESTO DIGA EXACTAMENTE ASÍ */}
            <button className="btn-next" onClick={siguienteTip}>
              Siguiente tip 🔄
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const tips_productividad = [
    { id: 1, tip: "Agrupá tareas similares en bloques de tiempo (Batching)." },
    { id: 2, tip: "Divide tareas grandes en pequeñas." },
    { id: 3, tip: "Aplicá la regla de los dos minutos para tareas rápidas." },
    { id: 4, tip: "Priorizá tus tres tareas más importantes (MITs) cada mañana." },
    { id: 5, tip: "Revisá tus avances al final de cada jornada." },
    { id: 6, tip: "Establecer límites de tiempo y fechas de entrega claras." }
  ];

  // ESTADOS
  const [indice, setIndice] = useState(0);
  
  // Estado para los votos: empezamos con todos en 0
  const [votos, setVotos] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });

  // FUNCIONES
  const siguienteTip = () => {
    const azar = Math.floor(Math.random() * tips_productividad.length);
    setIndice(azar);
  };

  const votarTip = () => {
    const idActual = tips_productividad[indice].id;
    // Creamos una copia de los votos y le sumamos 1 al ID actual
    setVotos({
      ...votos,
      [idActual]: votos[idActual] + 1
    });
  };

  // Lógica para encontrar el tip más votado [cite: 41]
  const obtenerGanador = () => {
    let maxVotos = 0;
    let textoGanador = "";

    // Recorremos los tips para ver cuál tiene más puntos
    tips_productividad.forEach((item) => {
      if (votos[item.id] > maxVotos) {
        maxVotos = votos[item.id];
        textoGanador = item.tip;
      }
    });

    return { textoGanador, maxVotos };
  };

  const { textoGanador, maxVotos } = obtenerGanador();

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
            <p className="tip-text">"{tips_productividad[indice].tip}</p>
            {/* Mostramos los votos actuales del tip */}
            <p className="votos-count">⭐ Votos: {votos[tips_productividad[indice].id]}</p>
          </div>
          
          <div className="actions">
            {/* Botón de Votar en Verde */}
            <button className="btn-vote" onClick={votarTip}>
              Votar ⭐
            </button>

            {/* Botón de Siguiente en Azul */}
            <button className="btn-next" onClick={siguienteTip}>
              Siguiente tip 🔄
            </button>
          </div>
        </div>
        {/* BLOQUE MÁS VOTADO (con la copa 🏆) */}
        <div className="card-ganador">
          <h2 className="titulo-ganador">🏆 Tip más votado</h2>
          
          {maxVotos > 0 ? (
            <div className="info-ganador">
              <p className="texto-ganador">"{textoGanador}"</p>
              <p className="cantidad-ganador">Votos: {maxVotos}</p>
            </div>
          ) : (
            <p className="sin-votos">Todavía no hay votos.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
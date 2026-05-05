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

// 2. Estado (el único que manejás)
  const [indice, setIndice] = useState(0);

  // 3. Función simplificada con un IF manual
  function siguienteTip() {
    if (indice < 5) { 
      // Si el índice es 0, 1, 2, 3 o 4, sumamos uno
      setIndice(indice + 1);
    } else {
      // Si el índice es 5 (el último), volvemos a 0
      setIndice(0);
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Tips de Productividad</h1>
      
      <div style={{ border: '1px solid black', padding: '20px' }}>
        {/* Mostramos el tip que toca según el número del estado */}
        <h3>Tip #{tips_productividad[indice].id}</h3>
        <p>"{tips_productividad[indice].tip}"</p>
        
        {/* Botón que llama a la función */}
        <button onClick={siguienteTip}>
          Siguiente tip
        </button>
      </div>
    </div>
  );
}

export default App;
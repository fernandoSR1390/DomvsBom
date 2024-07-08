if (!('webkitSpeechRecognition' in window)) {
    alert('Lo siento tu navegador no soporta la mAPI de reconocimiento de voz');
} else {
    // Crear una instancia del reconocimiento de voz
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'es-ES'; // Establecer el idioma a español
  recognition.continuous = false; // No continuar reconociendo después de una pausa
  recognition.interimResults = false; // No mostrar resultados intermedios

  // Obtener referencias a los elementos del DOM
  const startButton = document.getElementById('start-recording');
  const status = document.getElementById('status');
  const output = document.getElementById('output');

  // Evento para manejar los resultados del reconocimiento de voz
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = `Reconocido: ${transcript}`;
    
    // Guardar el resultado en localStorage
    localStorage.setItem('reconocimiento', transcript);
  };

  // Evento para manejar errores
  recognition.onerror = (event) => {
    status.textContent = `Error: ${event.error}`;
  };

  // Evento para actualizar el estado cuando el reconocimiento empieza
  recognition.onstart = () => {
    status.textContent = 'Estado: Grabando...';
  };

  // Evento para actualizar el estado cuando el reconocimiento termina
  recognition.onend = () => {
    status.textContent = 'Estado: Inactivo';
  };

  // Iniciar el reconocimiento de voz cuando se hace clic en el botón
  startButton.addEventListener('click', () => {
    recognition.start();
  });
}
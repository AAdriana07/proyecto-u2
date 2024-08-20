import { encriptarTexto, desencriptarTexto, limpiar } from "./module1.js";

document.addEventListener("DOMContentLoaded", () => {
    const botonEncriptar = document.querySelector("#btn-encrypt");
    const botonDesencriptar = document.querySelector("#btn-decrypt");
    const botonLimpiar = document.querySelector("#btn-clear");
    const cajatexto = document.querySelector("#input-text");
    const resultado = document.querySelector("#output-text");
    const metodoSelect = document.querySelector("#encryption-type");
    const shiftInput = document.querySelector("#shift");


    const gatoImagen = document.querySelector("#gato-imagen");
    const mensajeDiv = document.querySelector("#mensaje-gato");

    
    // Mensajes graciosos del gato
    const mensajesGato = [
        '¡Miau! ¡Tengo más secretos que tu diario! 🐱🔒',
        '¿Sabías que los gatos son genios del espionaje? 🤫',
        '¡No te preocupes! Solo estoy aquí para asegurarme de que no toques mi comida. 🍽️',
        '¿Puedo ayudar con tu código? Solo si no es muy complicado... 🧩',
        '¡Mi cola está en modo radar! ¡Estoy detectando diversión! 🚀',
        '¡Miau! ¿Puedo ser tu ayudante secreto? 🕵️‍♂️',
        'Si ves algo raro en el código, ¡es culpa del ratón! 🐭',
        '¡Mi patita derecha es mi mejor herramienta de debugging! 🐾',
        '¡Cuidado! Tengo un sentido agudo para detectar diversión y errores. 🕵️‍♀️',
        '¡Sigo aprendiendo sobre programación, pero por ahora solo sé cómo dormir en el teclado! 💤',
        '¡Estoy aquí para supervisar tus habilidades de programación y para asegurarme de que no olvides jugar! 🎮',
        '¡No dejes que el código te vuelva loco! Si lo haces, yo estaré aquí para darte mimos. 🐾',
        '¿Sabías que los gatos tienen un 99% de probabilidades de encontrar el lugar más cómodo del sofá? 🛋️',
        '¡Voy a ser tu compañero de programación! O al menos, tu compañero de siestas. 💤',
        '¿Puedo ayudarte a depurar? Solo si me das un poco de atún primero. 🐟',
        '¡Estoy aquí para hacer que el proceso de depuración sea un poco más divertido! 😸',
        '¡No dejes que el código te estrese! Piensa en mí, siempre relajado y durmiendo. 💤',
        '¡Miau! Si estás atascado, solo recuerda que los gatos siempre encuentran una salida. 🗝️',
        '¡No puedo escribir código, pero puedo ofrecerte un montón de ternura! 🐱'
    ];

    function obtenerMensajeAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * mensajesGato.length);
        return mensajesGato[indiceAleatorio];
    }

    function mostrarMensajeGato() {
        const mensajeAleatorio = obtenerMensajeAleatorio();
        mensajeDiv.textContent = mensajeAleatorio;
        mensajeDiv.style.display = 'block';

        // Ocultar el mensaje después de 10 segundos
        setTimeout(() => {
            mensajeDiv.style.display = 'none';
        }, 10000); // 10 segundos
    }

    function iniciarCicloMensajes() {
        // Mostrar el primer mensaje inmediatamente
        mostrarMensajeGato();

        // Configurar el intervalo para cambiar el mensaje cada 20 segundos
        setInterval(() => {
            mostrarMensajeGato();
        }, 20000); // 20 segundos (10s visible + 10s de espera)
    }

    // Mostrar u ocultar el campo de desplazamiento según el método seleccionado
    metodoSelect.addEventListener('change', function() {
        const seleccion = metodoSelect.value;
        if (seleccion === 'cifrado-cesar') {
            shiftInput.parentElement.style.display = 'block'; // Mostrar el campo de desplazamiento
        } else {
            shiftInput.parentElement.style.display = 'none'; // Ocultar el campo de desplazamiento
        }

        // Ocultar todas las secciones de información
        const infos = document.querySelectorAll('.option');
        infos.forEach(function(option) {
            option.style.display = 'none';
        });

        // Mostrar la sección correspondiente a la opción seleccionada
        if (seleccion) {
            document.getElementById(seleccion).style.display = 'block';
        }
    });

    // Iniciar el ciclo de mensajes cuando el documento esté listo
    iniciarCicloMensajes();

    // Función para manejar el clic en el botón de encriptar
    botonEncriptar.onclick = function() {
        const metodo = metodoSelect.value;
        const texto = cajatexto.value;
        resultado.value = encriptarTexto(texto, metodo);
    }

    // Función para manejar el clic en el botón de desencriptar
    botonDesencriptar.onclick = function() {
        const metodo = metodoSelect.value;
        const texto = cajatexto.value;
        resultado.value = desencriptarTexto(texto, metodo);
    }

    // Función para manejar el clic en el botón de limpiar
    botonLimpiar.onclick = limpiar;

    // Manejar la selección de métodos de encriptación
    metodoSelect.addEventListener('change', function() {
        // Ocultar todas las secciones de información
        const infos = document.querySelectorAll('.option');
        infos.forEach(function(option) {
            option.style.display = 'none';
        });

        // Mostrar la sección correspondiente a la opción seleccionada
        const seleccion = metodoSelect.value;
        if (seleccion) {
            document.getElementById(seleccion).style.display = 'block';
        }
    });
});

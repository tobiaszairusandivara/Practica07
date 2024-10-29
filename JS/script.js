// Lógica para mostrar/ocultar el menú lateral
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('menu-toggle');

// Manejar el clic en el botón de menú
toggleButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar que el botón altere la URL
  if (sidebar) {
    sidebar.classList.toggle('show'); // Alternar la visibilidad del sidebar
  }
});

// Cerrar el menú al mover el mouse fuera del sidebar
if (sidebar) {
  sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('show'); // Cerrar el sidebar
  });
}

// Manejar clic en los enlaces del sidebar
const sidebarLinks = sidebar ? sidebar.querySelectorAll('.nav-link') : [];
sidebarLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el enlace cambie la URL
    hideForms(); // Ocultar formularios si se hace clic en un enlace

    // Navegar a las secciones correspondientes
    const targetId = this.getAttribute('href').substring(1); // Obtener el ID del destino
    const targetElement = document.getElementById(targetId); // Obtener el elemento destino

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazarse hacia el elemento
    }
  });
});

// Función para ocultar formularios
function hideForms() {
  const forms = ['signup-form', 'login-form', 'turnos-form', 'servicios-form', 'comentarios-form'];
  forms.forEach(formId => {
    const form = document.getElementById(formId);
    if (form) {
      form.classList.add('d-none'); // Ocultar formularios
    }
  });
}

// Manejar clic en íconos de navegación
document.addEventListener('click', function(event) {
  const navIcons = document.querySelectorAll('.icon-link'); // Selector para los enlaces de íconos
  const isNavIcon = Array.from(navIcons).some(icon => icon.contains(event.target));

  if (isNavIcon) {
    hideForms(); // Ocultar formularios si el clic fue en íconos
  }
});

// Función para mostrar un formulario
function showForm(formId) {
  hideForms(); // Ocultar todos los formularios

  const formToShow = document.getElementById(formId + '-form');
  if (formToShow) {
    formToShow.classList.remove('d-none'); // Mostrar el formulario correspondiente
  }
}

// Manejar clic en los botones de Login y Sign Up
const signupButton = document.getElementById('signup-btn'); // Botón de Sign Up
const loginButton = document.getElementById('login-btn'); // Botón de Login

if (signupButton) {
  signupButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón
    showForm('signup'); // Mostrar el formulario de Sign Up
  });
}

if (loginButton) {
  loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón
    showForm('login'); // Mostrar el formulario de Login
  });
}

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});





let turnos = [
  { id: 1, fecha: '2023-06-19', hora: '10:00', cliente: 'Juan Pérez' },
  { id: 2, fecha: '2023-06-20', hora: '11:00', cliente: 'María González' },
  { id: 3, fecha: '2023-06-21', hora: '12:00', cliente: 'Luis Fernández' },
  // Agregar más turnos aquí
];

$(document).ready(function() {
  // Inicializar la tabla de turnos por cliente
  let turnosPorCliente = {};
  turnos.forEach(turno => {
    if (!turnosPorCliente[turno.cliente]) {
      turnosPorCliente[turno.cliente] = 1;
    } else {
      turnosPorCliente[turno.cliente]++;
    }
  });
  Object.keys(turnosPorCliente).forEach(cliente => {
    $('#turnos-por-cliente').append(`
      <tr>
        <td>${cliente.split(' ')[0]}</td>
        <td>${cliente.split(' ')[1]}</td>
        <td>${turnosPorCliente[cliente]}</td>
      </tr>
    `);
  });

  // Inicializar la tabla de lista de turnos
  turnos.forEach(turno => {
    $('#turnos-lista').append(`
      <tr>
        <td>${turno.id}</td>
        <td>${turno.fecha}</td>
        <td>${turno.hora}</td>
        <td>${turno.cliente}</td>
      </tr>
    `);
  });

  // Función para crear un nuevo turno
  $('#nuevo-turno-form').submit(function(event) {
    event.preventDefault();
    let turno = {
      id: parseInt($('#turno-id').val()),
      fecha: $('#turno-fecha').val(),
      hora: $('#turno-hora').val(),
      cliente: $('#turno-cliente').val()
    };
    turnos.push(turno);
    $('#turnos-lista').append(`
      <tr>
        <td>${turno.id}</td>
        <td>${turno.fecha}</td>
        <td>${turno.hora}</td>
        <td>${turno.cliente}</td>
      </tr>
    `);
    showSection('lista-turnos');
  });
});



  // Función para crear un nuevo turno
$('#nuevo-turno-form').submit(function(event) {
    event.preventDefault();
    let turno = {
      id: parseInt($('#turno-id').val()),
      fecha: $('#turno-fecha').val(),
      hora: $('#turno-hora').val(),
      cliente: $('#turno-cliente').val()
    };
    turnos.push(turno);
    $('#turnos-lista').append(`
      <tr>
        <td>${turno.id}</td>
        <td>${turno.fecha}</td>
        <td>${turno.hora}</td>
        <td>${turno.cliente}</td>
      </tr>
    `);
    showSection('lista-turnos');
});


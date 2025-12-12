// ============================================
// BASE DE DATOS SIMULADA DE ARTESANOS
// ============================================

const artesanosDB = {
    'nahuatzen': {
        id: 'nahuatzen',
        nombre: 'Artesanías Nahuatzen',
        tipo: 'Cooperativa Comunitaria',
        logo: 'Imagenes/Artesanias.jpg',
        descripcion: 'Somos una cooperativa de artesanos purépechas dedicados a la creación de textiles tradicionales y muebles de madera. Nuestro trabajo preserva técnicas ancestrales transmitidas por generaciones, combinando la tradición con diseños contemporáneos que honran nuestra identidad cultural.',
        ubicacion: 'Nahuatzen, Michoacán',
        especialidad: 'Textiles y carpintería tradicional',
        anio: '1985',
        // PARTE D: Productos
        productos: [
            {
                nombre: 'Rebozo Tradicional',
                precio: '$850',
                imagen: 'imagenes/Reboso.jpg',
                descripcion: 'Rebozo tejido a mano con técnica tradicional purépecha'
            },
            {
                nombre: 'Mesa de Madera',
                precio: '$3,200',
                imagen: 'imagenes/Mesa.jpg',
                descripcion: 'Mesa artesanal de madera de pino con tallados tradicionales'
            },
            {
                nombre: 'Tapete Decorativo',
                precio: '$650',
                imagen: 'imagenes/Tapete.jpg',
                descripcion: 'Tapete tejido con diseños geométricos ancestrales'
            },
            {
                nombre: 'Silla Artesanal',
                precio: '$1,450',
                imagen: 'imagenes/Silla.jpg',
                descripcion: 'Silla de madera con asiento tejido a mano'
            }
        ],
        // PARTE E: Contacto
        contacto: {
            email: 'contacto@nahuatzen.mx',
            telefono: '+52 443 123 4567',
            whatsapp: '+52 443 123 4567',
            direccion: 'Calle Hidalgo #45, Nahuatzen, Michoacán',
            horario: 'Lunes a Sábado: 9:00 AM - 6:00 PM',
            redes: {
                facebook: 'facebook.com/nahuatzen',
                instagram: '@nahuatzen_artesanias',
                twitter: '@nahuatzen'
            },
            coordenadas: '19.6667,-101.9000'
        },
        // PARTE F: Testimonios
        testimonios: [
            {
                nombre: 'María González',
                calificacion: 5,
                fecha: 'Hace 2 semanas',
                comentario: 'Productos de excelente calidad. El rebozo que compré es hermoso y muy bien elaborado. ¡Totalmente recomendado!'
            },
            {
                nombre: 'Carlos Martínez',
                calificacion: 5,
                fecha: 'Hace 1 mes',
                comentario: 'La mesa que pedí llegó en perfectas condiciones. Se nota el trabajo artesanal y el amor por preservar las tradiciones.'
            },
            {
                nombre: 'Ana Jiménez',
                calificacion: 4,
                fecha: 'Hace 2 meses',
                comentario: 'Muy buena atención y productos auténticos. El tiempo de entrega fue un poco largo, pero valió la pena.'
            }
        ],
        rating: 4.8,
        totalReviews: 48
    },
    'oaxaca-textiles': {
        id: 'oaxaca-textiles',
        nombre: 'Textiles Zapotecas de Oaxaca',
        tipo: 'Taller Familiar',
        logo: 'imagenes/Textiles.jpg',
        descripcion: 'Taller familiar con más de tres generaciones dedicadas al arte del tejido zapoteca. Utilizamos tintes naturales extraídos de plantas y minerales de la región, creando piezas únicas que cuentan historias de nuestra tierra y tradiciones.',
        ubicacion: 'Teotitlán del Valle, Oaxaca',
        especialidad: 'Tejidos zapotecas con tintes naturales',
        anio: '1950',
        productos: [
            {
                nombre: 'Tapete Zapoteca Grande',
                precio: '$4,500',
                imagen: 'imagenes/Tapetez.jpg',
                descripcion: 'Tapete de 2x3 metros con diseños tradicionales zapotecas'
            },
            {
                nombre: 'Camino de Mesa',
                precio: '$850',
                imagen: 'imagenes/Camino.jpg',
                descripcion: 'Camino de mesa tejido con tintes naturales de cochinilla'
            },
            {
                nombre: 'Cojín Decorativo',
                precio: '$450',
                imagen: 'imagenes/Cojin.jpg',
                descripcion: 'Cojín con diseños geométricos zapotecas'
            }
        ],
        contacto: {
            email: 'info@textileszapotecas.mx',
            telefono: '+52 951 234 5678',
            whatsapp: '+52 951 234 5678',
            direccion: 'Av. Juárez #23, Teotitlán del Valle, Oaxaca',
            horario: 'Lunes a Domingo: 8:00 AM - 7:00 PM',
            redes: {
                facebook: 'facebook.com/textileszapotecas',
                instagram: '@textiles_zapotecas',
                twitter: null
            },
            coordenadas: '17.0333,-96.5333'
        },
        testimonios: [
            {
                nombre: 'Roberto Silva',
                calificacion: 5,
                fecha: 'Hace 1 semana',
                comentario: 'Los colores son increíbles y saber que son tintes naturales hace que la pieza sea aún más especial.'
            },
            {
                nombre: 'Patricia Ramírez',
                calificacion: 5,
                fecha: 'Hace 3 semanas',
                comentario: 'Compré un tapete para mi sala y todos mis invitados preguntan dónde lo conseguí. Arte puro.'
            }
        ],
        rating: 4.9,
        totalReviews: 37
    },
    'chiapas-ceramica': {
        id: 'chiapas-ceramica',
        nombre: 'Cerámica Maya Contemporánea',
        tipo: 'Colectivo de Artistas',
        logo: 'imagenes/Ceramica.jpg',
        descripcion: 'Colectivo de ceramistas que fusiona técnicas mayas tradicionales con diseño moderno. Cada pieza es modelada a mano y cocida en hornos de leña, manteniendo vivos los métodos ancestrales de nuestros antepasados mientras exploramos nuevas formas de expresión.',
        ubicacion: 'San Cristóbal de las Casas, Chiapas',
        especialidad: 'Cerámica maya artesanal',
        anio: '2010',
        productos: [
            {
                nombre: 'Juego de Tazas Maya',
                precio: '$680',
                imagen: 'imagenes/Tazas.jpg',
                descripcion: 'Set de 4 tazas con diseños mayas contemporáneos'
            },
            {
                nombre: 'Vasija Decorativa',
                precio: '$1,200',
                imagen: 'imagenes/Vasija.jpg',
                descripcion: 'Vasija grande con acabado tradicional y símbolos mayas'
            },
            {
                nombre: 'Platos de Barro',
                precio: '$450',
                imagen: 'imagenes/Platos.jpg',
                descripcion: 'Set de 6 platos artesanales de barro negro'
            }
        ],
        contacto: {
            email: 'ceramica@mayacontemporanea.mx',
            telefono: '+52 967 345 6789',
            whatsapp: '+52 967 345 6789',
            direccion: 'Real de Guadalupe #12, San Cristóbal, Chiapas',
            horario: 'Martes a Domingo: 10:00 AM - 8:00 PM',
            redes: {
                facebook: 'facebook.com/ceramicamaya',
                instagram: '@ceramica_maya_contemporanea',
                twitter: '@ceramicamaya'
            },
            coordenadas: '16.7370,-92.6376'
        },
        testimonios: [
            {
                nombre: 'Lucía Fernández',
                calificacion: 5,
                fecha: 'Hace 5 días',
                comentario: 'Las tazas son preciosas y muy funcionales. Me encanta tomar mi café en estas piezas de arte.'
            },
            {
                nombre: 'Diego Torres',
                calificacion: 4,
                fecha: 'Hace 2 semanas',
                comentario: 'Excelente trabajo artesanal. La vasija que compré es única y el acabado es impecable.'
            }
        ],
        rating: 4.7,
        totalReviews: 29
    },
    'yucatan-hamacas': {
        id: 'yucatan-hamacas',
        nombre: 'Hamacas Tradicionales Yucatecas',
        tipo: 'Empresa Familiar',
        logo: 'imagenes/Hamaca.jpg',
        descripcion: 'Fabricantes de hamacas tejidas a mano siguiendo la tradición maya. Cada hamaca requiere días de trabajo meticuloso y representa la comodidad y calidad que han caracterizado a Yucatán por siglos.',
        ubicacion: 'Mérida, Yucatán',
        especialidad: 'Hamacas tejidas a mano',
        anio: '1978',
        productos: [
            {
                nombre: 'Hamaca Matrimonial',
                precio: '$1,850',
                imagen: 'imagenes/Matri.jpg',
                descripcion: 'Hamaca matrimonial de algodón 100% tejida a mano'
            },
            {
                nombre: 'Hamaca Individual',
                precio: '$950',
                imagen: 'imagenes/Indiv.jpg',
                descripcion: 'Hamaca individual de algodón con diseños tradicionales'
            },
            {
                nombre: 'Hamaca King Size',
                precio: '$2,500',
                imagen: 'imagenes/Grande.jpg',
                descripcion: 'Hamaca extra grande con acabado de lujo'
            }
        ],
        contacto: {
            email: 'ventas@hamacasyucatan.mx',
            telefono: '+52 999 456 7890',
            whatsapp: '+52 999 456 7890',
            direccion: 'Calle 60 #234, Centro, Mérida, Yucatán',
            horario: 'Lunes a Viernes: 9:00 AM - 6:00 PM, Sábados: 9:00 AM - 2:00 PM',
            redes: {
                facebook: 'facebook.com/hamacasyucatan',
                instagram: '@hamacas_yucatan',
                twitter: null
            },
            coordenadas: '20.9674,-89.5926'
        },
        testimonios: [
            {
                nombre: 'Fernando López',
                calificacion: 5,
                fecha: 'Hace 1 semana',
                comentario: 'La mejor hamaca que he tenido. Súper cómoda y se nota la calidad del tejido.'
            },
            {
                nombre: 'Sandra Morales',
                calificacion: 5,
                fecha: 'Hace 3 semanas',
                comentario: 'Compré una para mi terraza y ahora es mi lugar favorito de la casa. Excelente servicio.'
            }
        ],
        rating: 4.9,
        totalReviews: 52
    }
};

// ============================================
// FUNCIONES PARA LA PÁGINA PRINCIPAL
// ============================================

function cargarListaArtesanos() {
    const lista = document.getElementById('artesanosList');
    if (!lista) return;

    lista.innerHTML = '';
    
    for (const [id, artesano] of Object.entries(artesanosDB)) {
        const card = document.createElement('div');
        card.className = 'artesano-card';
        card.innerHTML = `
            <img src="${artesano.logo}" alt="${artesano.nombre}">
            <h4>${artesano.nombre}</h4>
            <p>${artesano.ubicacion}</p>
            <button onclick="verMicrositio('${id}')">Ver Micrositio</button>
        `;
        lista.appendChild(card);
    }
}

function verMicrositio(id) {
    window.location.href = `micrositio.html?artesano=${id}`;
}

function irAMicrositio() {
    const input = document.getElementById('artesanoInput');
    const id = input.value.trim().toLowerCase();
    
    if (artesanosDB[id]) {
        verMicrositio(id);
    } else {
        alert('❌ Artesano no encontrado. Intenta con: nahuatzen, oaxaca-textiles, chiapas-ceramica o yucatan-hamacas');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('artesanoInput');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                irAMicrositio();
            }
        });
    }
    cargarListaArtesanos();
});

// ============================================
// FUNCIONES PARA EL MICROSITIO
// ============================================

function cargarDatosMicrositio() {
    const urlParams = new URLSearchParams(window.location.search);
    const artesanoId = urlParams.get('artesano');
    
    const artesano = artesanosDB[artesanoId];
    
    if (!artesano) {
        alert('Artesano no encontrado');
        window.location.href = 'index.html';
        return;
    }
    
    // PARTE A-C: Información básica
    cargarInfoBasica(artesano);
    
    // PARTE D: Productos
    cargarProductos(artesano);
    
    // PARTE E: Contacto
    cargarContacto(artesano);
    
    // PARTE F: Testimonios
    cargarTestimonios(artesano);
}

// ============================================
// PARTE A-C: INFORMACIÓN BÁSICA
// ============================================

function cargarInfoBasica(artesano) {
    // Ruta dinámica
    const routeDisplay = document.getElementById('currentRoute');
    if (routeDisplay) {
        const ruta1 = `plataforma.mx/artesano/${artesano.id}`;
        const ruta2 = `${artesano.id}.plataforma.mx`;
        routeDisplay.innerHTML = `
            <div>${ruta1}</div>
            <div style="margin-top: 5px; opacity: 0.7;">o también: ${ruta2}</div>
        `;
    }
    
    // Logo
    const logo = document.getElementById('artesanoLogo');
    if (logo) {
        logo.src = artesano.logo;
        logo.alt = `Logo de ${artesano.nombre}`;
    }
    
    // Nombre y tipo
    const nombre = document.getElementById('artesanoNombre');
    if (nombre) nombre.textContent = artesano.nombre;
    
    const tipo = document.getElementById('artesanoTipo');
    if (tipo) tipo.textContent = artesano.tipo;
    
    // Descripción
    const descripcion = document.getElementById('artesanoDescripcion');
    if (descripcion) descripcion.textContent = artesano.descripcion;
    
    // Ubicación, especialidad, año
    const ubicacion = document.getElementById('artesanoUbicacion');
    if (ubicacion) ubicacion.textContent = artesano.ubicacion;
    
    const especialidad = document.getElementById('artesanoEspecialidad');
    if (especialidad) especialidad.textContent = artesano.especialidad;
    
    const anio = document.getElementById('artesanoAnio');
    if (anio) anio.textContent = artesano.anio;
    
    document.title = `${artesano.nombre} - México Profundo`;
}

// ============================================
// PARTE D: PRODUCTOS Y SERVICIOS
// ============================================

function cargarProductos(artesano) {
    const grid = document.getElementById('productosGrid');
    if (!grid || !artesano.productos) return;
    
    grid.innerHTML = '';
    
    artesano.productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <p class="producto-precio">${producto.precio}</p>
                <button class="btn-comprar">Consultar disponibilidad</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ============================================
// PARTE E: CONTACTO Y UBICACIÓN
// ============================================

function cargarContacto(artesano) {
    if (!artesano.contacto) return;
    
    const contacto = artesano.contacto;
    
    // Email
    const email = document.getElementById('contactoEmail');
    if (email) email.textContent = contacto.email;
    
    // Teléfono
    const telefono = document.getElementById('contactoTelefono');
    if (telefono) telefono.textContent = contacto.telefono;
    
    // WhatsApp
    const whatsapp = document.getElementById('contactoWhatsapp');
    if (whatsapp) {
        whatsapp.innerHTML = `<a href="https://wa.me/${contacto.whatsapp.replace(/[^0-9]/g, '')}" target="_blank">${contacto.whatsapp}</a>`;
    }
    
    // Dirección
    const direccion = document.getElementById('direccionCompleta');
    if (direccion) direccion.textContent = contacto.direccion;
    
    // Horario
    const horario = document.getElementById('horarioAtencion');
    if (horario) horario.textContent = contacto.horario;
    
    // Redes sociales
    const redesContainer = document.getElementById('redesSociales');
    if (redesContainer && contacto.redes) {
        redesContainer.innerHTML = '';
        if (contacto.redes.facebook) {
            redesContainer.innerHTML += `<a href="https://${contacto.redes.facebook}" target="_blank">📘 Facebook</a>`;
        }
        if (contacto.redes.instagram) {
            redesContainer.innerHTML += `<a href="https://instagram.com/${contacto.redes.instagram.replace('@', '')}" target="_blank">📷 Instagram</a>`;
        }
        if (contacto.redes.twitter) {
            redesContainer.innerHTML += `<a href="https://twitter.com/${contacto.redes.twitter.replace('@', '')}" target="_blank">🐦 Twitter</a>`;
        }
    }
    
    // Guardar coordenadas para el botón del mapa
    window.currentCoords = contacto.coordenadas;
}

function abrirMapa() {
    if (window.currentCoords) {
        window.open(`https://www.google.com/maps?q=${window.currentCoords}`, '_blank');
    }
}

// ============================================
// PARTE F: TESTIMONIOS Y RESEÑAS
// ============================================

function cargarTestimonios(artesano) {
    if (!artesano.testimonios) return;
    
    // Calificación promedio
    const ratingNumber = document.getElementById('ratingNumber');
    if (ratingNumber) ratingNumber.textContent = artesano.rating.toFixed(1);
    
    const starsPromedio = document.getElementById('starsPromedio');
    if (starsPromedio) starsPromedio.innerHTML = generarEstrellas(artesano.rating);
    
    const totalReviews = document.getElementById('totalReviews');
    if (totalReviews) totalReviews.textContent = `${artesano.totalReviews} reseñas`;
    
    // Lista de testimonios
    const lista = document.getElementById('testimoniosList');
    if (!lista) return;
    
    lista.innerHTML = '';
    
    artesano.testimonios.forEach(testimonio => {
        const card = document.createElement('div');
        card.className = 'testimonio-card';
        card.innerHTML = `
            <div class="testimonio-header">
                <div class="testimonio-avatar">${testimonio.nombre.charAt(0)}</div>
                <div class="testimonio-info">
                    <h4>${testimonio.nombre}</h4>
                    <div class="testimonio-stars">${generarEstrellas(testimonio.calificacion)}</div>
                    <p class="testimonio-fecha">${testimonio.fecha}</p>
                </div>
            </div>
            <p class="testimonio-comentario">${testimonio.comentario}</p>
        `;
        lista.appendChild(card);
    });
}

function generarEstrellas(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let html = '';
    
    for (let i = 0; i < fullStars; i++) {
        html += '<span class="star-full">★</span>';
    }
    if (hasHalfStar) {
        html += '<span class="star-half">★</span>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        html += '<span class="star-empty">☆</span>';
    }
    
    return html;
}

function mostrarFormularioResena() {
    alert('Funcionalidad de reseñas: En esta demostración, esta función abriría un formulario para que los clientes dejen sus comentarios y calificaciones.');
}

console.log('✅ Sistema completo de micrositios cargado');
console.log('📊 Artesanos disponibles:', Object.keys(artesanosDB).length);
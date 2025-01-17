import { getCookie, setCookie, buscarLiteral } from "./utils.js";
var usuario_logueado
window.onload = ()=>{

    var lenguaje_actual = getCookie("idioma")
    if (lenguaje_actual == null) {
        setCookie("idioma", "es", 7)
    } else {
        setCookie("idioma", lenguaje_actual, 7) //actualiza la cookie
    }

    let url = '../../back/controladores/getUsuarioLogeado.php'
    let params = {
        method: 'GET',
    }
    fetch(url, params)
        .then(req => req.json())
        .then( usuario => {
            usuario_logueado = usuario
            if (usuario_logueado.premium == 0) {
                //TO-DO sweet alert no puedes acceder a esta zona si no eres un usuario premium
            } else {
                cargarChat()
            }
        })
}

function cargarChat() {
    cargarFooter()
    let bodyContent = {
        id_html: 'chatPrivado',
    }
    let url = '../../back/controladores/cargarLiterales.php'
    let params = {
        method: 'POST',
        body: JSON.stringify(bodyContent)
    }
    fetch(url, params)
        .then(req => req.json())
        .then( literales => {
            cargarCabecera(literales)
            cargarMain(literales)
        })
}

function cargarCabecera(literales) {
    let header = document.body.children[0]

    let imagen_logo_cuore = document.createElement('img')
    imagen_logo_cuore.id = "logo"
    imagen_logo_cuore.src = "front/img/imgLogo/logo.png"
    imagen_logo_cuore.title = "Logo"
    imagen_logo_cuore.onclick = () => {
        location.href = "home.php"
    }

    let div_botones_login = document.createElement('div')
    div_botones_login.id = "botones_login"

    let boton_espana = document.createElement('button')
    boton_espana.id = "boton_espana"
    boton_espana.classList.add("botonIdiomas")
    boton_espana.onclick = () => {
        if (getCookie("idioma") != "es") {
            setCookie("idioma", "es", 7)
            location.reload()
        }
    }

    let imagen_bandera_espana = document.createElement('img')
    imagen_bandera_espana.id = "espana"
    imagen_bandera_espana.src = "front/img/imgPaises/espana.png"
    boton_espana.appendChild(imagen_bandera_espana)

    let boton_reino_unido = document.createElement('button')
    boton_reino_unido.id = "boton_reino_unido"
    boton_reino_unido.classList.add("botonIdiomas")
    boton_reino_unido.onclick = () => {
        if (getCookie("idioma") != "en") {
            setCookie("idioma", "en", 7)
            location.reload()
        }
    }

    let imagen_bandera_reino_unido = document.createElement('img')
    imagen_bandera_reino_unido.id = "reino-unido"
    imagen_bandera_reino_unido.src = "front/img/imgPaises/reino-unido.png"
    boton_reino_unido.appendChild(imagen_bandera_reino_unido)

    let boton_francia = document.createElement('button')
    boton_francia.id = "boton_francia"
    boton_francia.classList.add("botonIdiomas")
    boton_francia.onclick = () => {
        if (getCookie("idioma") != "fr") {
            setCookie("idioma", "fr", 7)
            location.reload()
        }
    }

    let imagen_bandera_francia = document.createElement('img')
    imagen_bandera_francia.id = "francia"
    imagen_bandera_francia.src = "front/img/imgPaises/francia.png"
    boton_francia.appendChild(imagen_bandera_francia)

    let boton_alemania = document.createElement('button')
    boton_alemania.id = "boton_alemania"
    boton_alemania.classList.add("botonIdiomas")
    boton_alemania.onclick = () => {
        if (getCookie("idioma") != "de") {
            setCookie("idioma", "de", 7)
            location.reload()
        }
    }

    let imagen_bandera_alemania = document.createElement('img')
    imagen_bandera_alemania.id = "alemania"
    imagen_bandera_alemania.src = "front/img/imgPaises/alemania.png"
    boton_alemania.appendChild(imagen_bandera_alemania)

    let boton_menu = document.createElement('button')
    boton_menu.id = "boton_menu"
    boton_menu.classList.add("botonIdiomas")
    boton_menu.onclick = () => {
        div_contenedor_menu.classList.toggle("ocultar")
    }

    let imagen_menu = document.createElement('img')
    imagen_menu.id = "menu"
    imagen_menu.src = "front/img/imgMenu/menu.png"
    boton_menu.appendChild(imagen_menu)

    let div_contenedor_menu = document.createElement('div')
    div_contenedor_menu.id = "disMenu"
    div_contenedor_menu.classList.add("ocultar")

    let div_tabla_menu = document.createElement('div')
    div_tabla_menu.id = "tablaMenu"

    let boton_menu1 = document.createElement('button')
    boton_menu1.id = "boton_menu1"
    boton_menu1.classList.add("btnMenu")
    boton_menu1.onclick = (e) => {
        e.preventDefault()
        location.href = './perfil.php' 
    }

    let p_menu1 = document.createElement('p')
    p_menu1.id = "p_menu1"
    p_menu1.innerHTML = buscarLiteral(literales, p_menu1.id) //Caja1

    boton_menu1.appendChild(p_menu1)

    let boton_menu2 = document.createElement('button')
    boton_menu2.id = "boton_menu2"
    boton_menu2.classList.add("btnMenu")
    boton_menu2.onclick = (e) => {
        e.preventDefault()
        // location.href = './sugerenciasCuore.php' 
    }

    let p_menu2 = document.createElement('p')
    p_menu2.id = "p_menu2"
    p_menu2.innerHTML = buscarLiteral(literales, p_menu2.id) //Caja2

    boton_menu2.appendChild(p_menu2)

    let boton_menu3 = document.createElement('button')
    boton_menu3.id = "boton_menu3"
    boton_menu3.classList.add("btnMenu")
    boton_menu3.onclick = (e) => {
        e.preventDefault()
        // location.href = './contactanos.php' 
    }

    let p_menu3 = document.createElement('p')
    p_menu3.id = "p_menu3"
    p_menu3.innerHTML = buscarLiteral(literales, p_menu3.id) //Caja3

    boton_menu3.appendChild(p_menu3)

    let boton_menu4 = document.createElement('button')
    boton_menu4.id = "boton_menu4"
    boton_menu4.classList.add("btnMenu")
    boton_menu4.onclick = (e) => {
        e.preventDefault()
        location.href = 'back/controladores/cerrarSesion.php' 
    }

    let p_menu4 = document.createElement('p')
    p_menu4.id = "p_menu4"
    p_menu4.innerHTML = buscarLiteral(literales, p_menu4.id) //Caja4

    boton_menu4.appendChild(p_menu4)   

    div_tabla_menu.appendChild(boton_menu1)
    div_tabla_menu.appendChild(boton_menu2)
    div_tabla_menu.appendChild(boton_menu3)
    div_tabla_menu.appendChild(boton_menu4)

    div_contenedor_menu.appendChild(div_tabla_menu)

    div_botones_login.appendChild(boton_espana)
    div_botones_login.appendChild(boton_reino_unido)
    div_botones_login.appendChild(boton_francia)
    div_botones_login.appendChild(boton_alemania)
    div_botones_login.appendChild(boton_menu)

    header.appendChild(imagen_logo_cuore)
    header.appendChild(div_botones_login)
    header.appendChild(div_contenedor_menu)

}

function cargarMain(literales) {
    let url = '../../back/controladores/getUsuariosPremium.php'
    let params = {
        method: 'GET',
    }
    fetch(url, params)
        .then(req => req.json())
        .then( usuarios => {
            cargarBuscador(usuarios, literales)
            input_buscador.onkeyup = (e) => {
                if (e.key === 'Escape') {
                    console.log("esc")
                    let usu_buscador = document.getElementById('usuarios_buscador')
                    usu_buscador.classList.add('ocultar')
                    e.target.blur()
                } else {
                    let usuarios_filtrados = JSON.parse(JSON.stringify(usuarios));
                    usuarios_filtrados = usuarios_filtrados.filter(usuario => {return usuario.nick.indexOf(e.target.value)>-1})
                    cargarBuscador(usuarios_filtrados, literales)
                }
            }
        })
    
    let url2 = '../../back/controladores/getUsuariosChat.php'
    let params2 = {
        method: 'GET',
    }
    fetch(url2, params2)
        .then(req => req.json())
        .then( usuarios => {
            cargarUsuarios(usuarios, literales)
        })

    let main = document.body.children[1]
    main.innerHTML = ""

    let bloque1 = document.createElement('div')
    bloque1.id = "bloque1"

    let caja_buscador = document.createElement('div')
    caja_buscador.id = "caja_buscador"

    let input_buscador = document.createElement('input')
    input_buscador.id = "input_buscador"
    input_buscador.type = "text"
    input_buscador.name = "input_buscador"
    input_buscador.placeholder = buscarLiteral(literales, input_buscador.id)
    input_buscador.onfocus = () => {
        caja_usuarios.classList.add("ocultar")
    }
    input_buscador.onblur = () => {
        caja_usuarios.classList.remove("ocultar")
    }

    let caja_buscador_imagen = document.createElement('div')
    caja_buscador_imagen.classList.add('caja_buscador_imagen')

    let imagen_buscador = document.createElement('img')
    imagen_buscador.id = "imagen_buscador"
    imagen_buscador.src = "front/img/imgChatPrivado/lupa.png"

    caja_buscador_imagen.appendChild(imagen_buscador)

    caja_buscador.appendChild(caja_buscador_imagen)
    caja_buscador.appendChild(input_buscador)

    let caja_usuarios = document.createElement('div')
    caja_usuarios.classList.add("caja_usuarios")

    bloque1.appendChild(caja_buscador)
    bloque1.appendChild(caja_usuarios)

    let bloque2 = document.createElement('div')
    bloque2.id = "bloque2"

    let chat = document.createElement('div')
    chat.id = "chat"

    let comentario_chatPrivado = document.createElement('textarea')
    comentario_chatPrivado.id = "comentario"
    comentario_chatPrivado.placeholder = buscarLiteral(literales, comentario_chatPrivado.id)
    comentario_chatPrivado.disabled = true
    comentario_chatPrivado.onkeypress = (e) => {
        if (e.keyCode == 13 && !e.shiftKey) {
            let mensaje = e.target.value
            let bodyContent = {
                usuario_destino: e.target.previousSibling.classList[0],
                texto: mensaje.trim(),
            }
            let url = '../../back/controladores/enviarMensaje.php'
            let params = {
                method: 'POST',
                body: JSON.stringify(bodyContent)
            }
            fetch(url, params)
                .then(req => req.json())
                .then( datos => { 
                    if (!datos.id) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: buscarLiteral(literales, "server_error_" + datos),
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    } else {
                        e.target.value=""
                    }
                })
        }
    }

    bloque2.appendChild(chat)
    bloque2.appendChild(comentario_chatPrivado)

    main.appendChild(bloque1)
    main.appendChild(bloque2)
}

function cargarBuscador(usuarios, literales) {
    let buscador = document.getElementById("caja_buscador")
    if (document.getElementById("usuarios_buscador")) {
        document.getElementById("usuarios_buscador").remove()
    }
    let usuarios_buscador = document.createElement('div')
    usuarios_buscador.id = "usuarios_buscador" 
    buscador.appendChild(usuarios_buscador)
    for (const usuario of usuarios) {
        let caja_usuario = document.createElement('div')
        caja_usuario.id = "caja_usuario"
        caja_usuario.onclick = () => {
            console.log("clickado")
            document.getElementById("chat").classList = usuario.nick
            cargarChatDe(usuario.nick, literales)
        }
        
        let caja_imagen = document.createElement('div')
        caja_imagen.classList.add("caja_imagen")

        let imagen_usuario = document.createElement('img')
        imagen_usuario.id = "imagen_usuario"
        imagen_usuario.src = usuario.imagen

        caja_imagen.appendChild(imagen_usuario)

        let nick_usuario = document.createElement('h1')
        nick_usuario.id = "nick_usuario"
        nick_usuario.innerHTML = usuario.nick 

        caja_usuario.appendChild(caja_imagen)
        caja_usuario.appendChild(nick_usuario)

        usuarios_buscador.appendChild(caja_usuario)
    }
}

function cargarUsuarios(usuarios, literales) {
    let caja = document.getElementsByClassName("caja_usuarios")[0]
    for (const usuario of usuarios) {
        let caja_usuario = document.createElement('div')
        caja_usuario.id = "caja_usuario"
        caja_usuario.onclick = () => {
            document.getElementById("chat").classList = usuario.nick
            cargarChatDe(usuario.nick, literales)
        }

        let caja_imagen = document.createElement('div')
        caja_imagen.classList.add("caja_imagen")

        let imagen_usuario = document.createElement('img')
        imagen_usuario.id = "imagen_usuario"
        imagen_usuario.src = usuario.imagen

        caja_imagen.appendChild(imagen_usuario)

        let nick_usuario = document.createElement('h1')
        nick_usuario.id = "nick_usuario"
        nick_usuario.innerHTML = usuario.nick 

        caja_usuario.appendChild(caja_imagen)
        caja_usuario.appendChild(nick_usuario)

        caja.appendChild(caja_usuario)
    }
}

function cargarChatDe(nick, literales) {
    let bodyContent = {
        nick_destino: nick,
    }
    let url = '../../back/controladores/cargarMensajes.php'
    let params = {
        method: 'POST',
        body: JSON.stringify(bodyContent)
    }
    fetch(url, params)
        .then(req => req.json())
        .then( mensajes => {
            let chat = document.getElementById('chat')
            chat.innerHTML = ""

            for (const mensaje of mensajes) {
                let parrafo_chat = document.createElement('p')
                parrafo_chat.id = mensaje.idMensaje

                let fecha_chat = document.createElement('span')
                fecha_chat.classList.add('fecha_chat')
                fecha_chat.innerHTML = mensaje.creado

                let usuario_origen = document.createElement('span')
                usuario_origen.classList.add('usuario_origen')
                if (mensaje.nick_origen != usuario_logueado.nick) {
                    usuario_origen.classList.add('not_me')
                }
                usuario_origen.innerHTML = " " + mensaje.nick_origen
                usuario_origen.onclick = () => {
                    location.href = "perfil.php?usuario=" + usuario_origen.innerHTML.trim()
                }

                let texto_mensaje = document.createElement('span')
                texto_mensaje.classList.add('texto_chat')
                texto_mensaje.innerHTML = ":\n" + mensaje.texto

                parrafo_chat.appendChild(fecha_chat)
                parrafo_chat.appendChild(usuario_origen)
                parrafo_chat.appendChild(texto_mensaje)

                chat.appendChild(parrafo_chat)

            }
            chat.scrollTop = chat.scrollHeight;

            /* CONTROLADOR DE SOCKET PARA CHAT */

            //create a new WebSocket object. 
            var msgBox = $('#chat');
            var wsUri = "ws://localhost:9000/demo/server.php";     
            var websocket = new WebSocket(wsUri);
            
            websocket.onopen = function(ev) { // connection is open 
                $('#comentario').prop('disabled', false)
            }
            // Message received from server 
            websocket.onmessage = function(ev) {
                var response         = JSON.parse(ev.data); //PHP sends Json data 
                var res_type         = response.type; //message type 
                var user_message     = response.message; //message text 
                var user_name         = response.name; //user name 
                var usuario_actual        = $('#chat').attr('class') //usuario

                switch(res_type){
                    case 'usermsg':
                        if (user_name == usuario_actual || user_name == usuario_logueado.nick) {
                            let parrafo_chat = document.createElement('p')

                            let fecha_chat = document.createElement('span')
                            fecha_chat.classList.add('fecha_chat')
                            let fecha_actual = new Date()
                            fecha_chat.innerHTML = ("0" + fecha_actual.getFullYear()).slice(-4) + "-" + 
                                                    ("0" + (fecha_actual.getMonth() + 1)).slice(-2) + "-" +
                                                    ("0" + fecha_actual.getDate()).slice(-2) + " " + 
                                                    ("0" + fecha_actual.getHours()).slice(-2) + ":" + 
                                                    ("0" + fecha_actual.getMinutes()).slice(-2) + ":" + 
                                                    ("0" + fecha_actual.getSeconds()).slice(-2)
                            let usuario_origen = document.createElement('span')
                            usuario_origen.classList.add('usuario_origen')
                            if (user_name == usuario_actual) {
                                usuario_origen.classList.add('not_me')
                            }
                            usuario_origen.innerHTML = " " + user_name
                            usuario_origen.onclick = () => {
                                location.href = "perfil.php?usuario=" + usuario_origen.innerHTML.trim()
                            }
                            let texto_mensaje = document.createElement('span')
                            texto_mensaje.classList.add('texto_chat')
                            texto_mensaje.innerHTML = ":\n" + user_message

                            parrafo_chat.appendChild(fecha_chat)
                            parrafo_chat.appendChild(usuario_origen)
                            parrafo_chat.appendChild(texto_mensaje)
                            msgBox.append(parrafo_chat);
                            msgBox[0].scrollTop = msgBox[0].scrollHeight; //scroll message 
                        } 
                        break;
                }
            };
            
            websocket.onerror    = function(ev){ 
                msgBox.append('<div class="error_chat">'+ buscarLiteral(literales, 'error_chat') +'</div>')
                $('#comentario').prop('disabled', true)
            };
            // websocket.onclose     = function(ev){ msgBox.append('<div class="system_msg">Connection Closed</div>'); };
            //Message send button 
            // $('#send-message').click(function(){
            //     send_message();
            // });
            
            //User hits enter key 
            $( "#comentario" ).on( "keypress", function( event ) {
                if(event.which==13 && !event.shiftKey){
                    send_message();
                }
            });
            
            //Send message 
            function send_message(){
                var message_input = $('#comentario'); //user message text 
                var name_input = usuario_logueado.nick //user name 
                
                if(message_input.val() == ""){ //empty name? 
                    // alert("Enter your Name please!");
                    return;
                }
                if(message_input.val() == ""){ //emtpy message? 
                    // alert("Enter Some message Please!");
                    return;
                }
                //prepare json data 
                var msg = {
                    message: message_input.val(),
                    name: name_input,
                };
                //convert and send data to server 
                websocket.send(JSON.stringify(msg));    
                message_input.val(''); //reset message input 
            }

            /* FIN DEL SOCKET PARA CHAT */



        })
}


function cargarFooter() {
    let footer = document.body.children[2]

    let p1 = document.createElement('p')
    p1.id ="copyRight"
    p1.innerHTML = "© Copyright 2022"

    let cajaDirecciones = document.createElement('div')
    cajaDirecciones.id = "cajaDirecciones"

    let p2 = document.createElement('p')
    p2.id ="p2"
    p2.innerHTML = "Cuore: "

    let instagram = document.createElement('img')
    instagram.src = "front/img/imgFooter/instagram.png"

    let instagram_enlace = document.createElement('a')
    instagram_enlace.id ="instagram_enlace"
    instagram_enlace.targer = "_blank"
    instagram_enlace.rel = "noopener noreferrer"
    instagram_enlace.href = "https://www.instagram.com/cuore__soporte/"

    instagram_enlace.appendChild(instagram)

    let twitter = document.createElement('img')
    twitter.src = "front/img/imgFooter/gorjeo.png"

    let twitter_enlace = document.createElement('a')
    twitter_enlace.id ="twitter_enlace"
    twitter_enlace.targer = "_blank"
    twitter_enlace.rel = "noopener noreferrer"
    twitter_enlace.href = "https://twitter.com/cuore_soporte"

    twitter_enlace.appendChild(twitter)

    let gmail = document.createElement('img')
    gmail.src = "front/img/imgFooter/gmail.png"

    let gmail_enlace = document.createElement('a')
    gmail_enlace.id ="gmail_enlace"
    gmail_enlace.targer = "_blank"
    gmail_enlace.rel = "noopener noreferrer"
    gmail_enlace.href = "mailto:cuore.soporte@gmail.com"

    gmail_enlace.appendChild(gmail)

    let linkedin = document.createElement('img')
    linkedin.src = "front/img/imgFooter/linkedin.png"

    let linkedin_enlace = document.createElement('a')
    linkedin_enlace.id ="linkedin_enlace"
    linkedin_enlace.targer = "_blank"
    linkedin_enlace.rel = "noopener noreferrer"
    linkedin_enlace.href = "https://www.linkedin.com/in/cuore-soporte-80310525b/"

    linkedin_enlace.appendChild(linkedin)

    let maps = document.createElement('img')
    maps.src = "front/img/imgFooter/marcador-de-posicion.png"

    let maps_enlace = document.createElement('a')
    maps_enlace.id ="maps_enlace"
    maps_enlace.targer = "_blank"
    maps_enlace.rel = "noopener noreferrer"
    maps_enlace.href = "https://goo.gl/maps/gX2vJPVcAYoJWxxd8"

    maps_enlace.appendChild(maps)

    cajaDirecciones.appendChild(p2)
    cajaDirecciones.appendChild(instagram_enlace)
    cajaDirecciones.appendChild(twitter_enlace)
    cajaDirecciones.appendChild(gmail_enlace)
    cajaDirecciones.appendChild(linkedin_enlace)
    cajaDirecciones.appendChild(maps_enlace)

    footer.appendChild(p1)
    footer.appendChild(cajaDirecciones)

}
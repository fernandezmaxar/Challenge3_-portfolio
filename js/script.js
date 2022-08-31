//Asignamos el boton de contacto a una variable
var boton = document.querySelector(".contacto__boton");


//Asignamos las listas a variables para imprimir errores
var error_nombre = document.querySelector("#errores-nombre");
var error_email = document.querySelector("#errores-email");
var error_asunto = document.querySelector("#errores-asunto");
var error_mensaje = document.querySelector("#errores-mensaje");

//Variable para informar que los datos han sido enviados correctamente
var mensaje_enviado = document.querySelector(".contacto__Info__datos");


//Creamos un evento al presionar el boton de contacto
boton.addEventListener("click",function(){

    var formulario = document.querySelector(".contacto__contenedor");
    var cliente = capturarDatos(formulario);

    //Determinamos si existen errores en el formulario
    errores = validarFormulario(cliente);

    //Si se detectan errores, el evento para en este if
    if(errores){

        //Ocultamos el mensaje de los datos enviados en caso de errores
        mensaje_enviado.classList.remove("mostrar");
        return;
    }
    
    //Reseteamos los datos
    formulario.reset();

    //Mostramos el mensaje de los datos enviados
    mensaje_enviado.classList.add("mostrar");

})

//Funcion para capturar datos del formulario
function capturarDatos(datos){

    var cliente = {
        nombre: datos.nombre_apellido.value,
        email: datos.email.value,
        asunto: datos.Asunto.value,
        mensaje: datos.mensaje.value,
    }

    return cliente;

}

//Funcion para validar el formulario
function validarFormulario(datos){

    errores = false;

    //Errores del input nombre
    if(datos.nombre.length == 0){
        errores = imprimirErrores(error_nombre,"El nombre no puede estar vacio");
    }
    else{

        if(datos.nombre.length > 50){
            errores = imprimirErrores(error_nombre,"El nombre debe tener máximo 50 caracteres");    
        }
        else{
            error_nombre.innerHTML = "";
        }
    }


    //Errores del input email
    if(datos.email.length == 0){
        errores = imprimirErrores(error_email,"El email no puede estar vacio");
    }
    else{   
        if(!datos.email.includes("@") || !datos.email.includes(".") ){
            errores = imprimirErrores(error_email,"Por favor ingrese un email válido");
        }
        else{
            error_email.innerHTML = "";
        }    
    }

    //Errores del input asunto
    if(datos.asunto.length == 0){
        errores = imprimirErrores(error_asunto,"El asunto no puede estar vacio");
    }
    else{

        if(datos.asunto.length > 50){
            errores = imprimirErrores(error_asunto,"El asunto debe tener máximo 50 caracteres");    
        }
        else{
            error_asunto.innerHTML = "";
        }
    }

    //Errores del input mensaje
    if(datos.mensaje.length == 0){
        errores = imprimirErrores(error_mensaje,"El mensaje no puede estar vacio");
    }
    else{

        if(datos.mensaje.length > 300){
            errores = imprimirErrores(error_mensaje,"El mensaje debe tener máximo 300 caracteres");    
        }
        else{
            error_mensaje.innerHTML = "";
        }
    }


    return errores;
}


//Funcion para imprimir errores
function imprimirErrores(ul,mensaje){
    ul.innerHTML = "";
    var error = document.createElement("li");
    error.textContent = mensaje;
    ul.appendChild(error);
    errores = true;

    return errores;
}
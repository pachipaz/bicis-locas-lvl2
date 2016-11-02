function validateForm(){
	var ingresoNombre = document.getElementById('name').value;
	if (ingresoNombre==null||ingresoNombre.length==0 ||/[0-9]/.test(ingresoNombre)){
		//alert ('campo obligatorio ingrese su nombre');
		var divcaja=document.getElementsByClassName('name-container')[0];
		var black=document.createElement('span');
		var msj=document.createTextNode('campo obligatorio ingrese su nombre');
		black.appendChild(msj);
		divcaja.appendChild(black);
		return false;
	}
	else if (ingresoNombre.charAt(0)!=ingresoNombre.charAt(0).toUpperCase()){
		//alert('ingrese la primera letra con mayuscula');
		var divcaja=document.getElementsByClassName('name-container')[0];
		var black=document.createElement('span');
		var msj=document.createTextNode('ingrese la primera letra con mayuscula');
		black.appendChild(msj);
		divcaja.appendChild(black);
		return false;
	}

	var ingresoApellido=document.getElementById('lastname').value;
	if (ingresoApellido==null||ingresoApellido.length==0 ||/[0-9]/.test(ingresoApellido)){
		//alert ('campo obligatorio ingrese su apellido');
		var divcaja=document.getElementsByClassName('lastname-container')[0];
		var black=document.createElement('span');
		var msj=document.createTextNode('campo obligatorio ingrese su apellido');
		black.appendChild(msj);
		divcaja.appendChild(black);
		return false;
	}
	else if (ingresoApellido.charAt(0)!=ingresoApellido.charAt(0).toUpperCase()){
		//alert('ingrese la primera letra con mayuscula');
		var divcaja=document.getElementsByClassName('lastname-container')[0];
		var black=document.createElement('span');
		var msj=document.createTextNode('ingrese la primera letra con mayuscula');
		black.appendChild(msj);
		divcaja.appendChild(black);
		return false;
	}

	var ingresoMail=document.getElementById('input-email').value;
	if  (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(ingresoMail))){
        //alert("ingrese dirección de correo electrónico valida");
        var divcaja=document.getElementsByClassName('email-container')[0];
		var black=document.createElement('span');
		var msj=document.createTextNode('ingrese dirección de correo electrónico valida');
		black.appendChild(msj);
		divcaja.appendChild(black);
        return false;
   }
	var ingresoClave=document.getElementById('input-password').value;
	if (ingresoClave.length<6|| ingresoClave=='password'||ingresoClave==123456||ingresoClave==098754){

		//alert ('ingrese una contraseña valida');
		var divcaja=document.getElementsByClassName('form-group')[0];
		var black=document.createElement('span');
		var msj=document.createTextNode('ingrese una contraseña valida');
		black.appendChild(msj);
		divcaja.appendChild(black);
		return false; 
	}

	var ingresoBici=document.getElementsByTagName('select').selectedIndex;
	if (ingresoBici==null||ingresoBici==0){
		//alert ('selecciona tu tipo de bici');
		var cletas =document.getElementsByClassName('form-group input-box')[1].classList.add('ingresoBici');
		var divcaja=document.getElementsByClassName('ingresoBici')[0];
		var black=document.createElement('span');
		var msj=document.createTextNode('ingrese una contraseña valida');
		black.appendChild(msj);
		divcaja.appendChild(black);

		return false;
	}
}

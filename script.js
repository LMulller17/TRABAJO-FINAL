//Consultar si es mayor de edad para ingresar
/*let consulta = prompt ("¿cuantos años tienes?");
if (consulta >= 18){
    alert("Bienvenido a Drinkedin_ ");
} else {
    alert("No puedes ingresar");
}*/

Swal.fire({
	 title: "Bienvenido",
	 text: "Confirmar si eres mayor de edad",
	// html:
	 icon: "warning",
	 confirmButtonText: "Confirmar",
	 footer: "Estas es informacion importante",
	 width: "90%",
	 padding: "1rem",
	// background: "blue",///////
	// grow:
	 backdrop: "true",
	// timer:
	// timerProgressBar:
	// toast:
	 position: "center",
	 allowOutsideClick: "false",
	 allowEscapeKey: "false",
	 allowEnterKey: "false",
	 stopKeydownPropagation: "false",

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	 //customClass:
	 	//container:
	 	//popup:
	 	//header:
	 	//title:
	 	//closeButton:
	 	//icon:
	 	//image:
	 	//content:
	 	//input:
	 	//actions:
	 	//confirmButton:
	 	//cancelButton:s
	 	//footer:	
     

	 showConfirmButton: "true",
	// confirmButtonColor:
	 confirmButtonAriaLabel: "Confirtmar",

	 showCancelButton: "true",
	 cancelButtonText: "Cancelar",
	// cancelButtonColor:
	 cancelButtonAriaLabel: "Cancelar",
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	//imageUrl: 
	//imageWidth: ,
	// imageHeight:
	// imageAlt: 
});
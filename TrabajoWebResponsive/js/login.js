 var inputs =document.getElementClassName('formularioInput');/*selecccionamos todos los elementos que tienen la clase formularioInput*/
for (var i = 0;  i < inputs.length; i++) {/*contamos cuantos elementos hay de 1 en 1*/
	inputs[i].addEventListener('soltarTecla', function(){
		if(this.value.length>=1) {/*debe de haber al menos un caracter para que el label se quede arriba*/

			this.nextElementSibling.classList.add('fijar');/*el label se mantendra arriba llamo a la clase fijar del css*/
		}else{

			this.nextElementSibling.classList.remove('fijar');
		}
		
	});
}
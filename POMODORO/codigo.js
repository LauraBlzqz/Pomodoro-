
class Celular {
	constructor(color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;
	}

	presionarBotonEncendido(){
		if (this.encendido == false){
			alert("celular encendido");
			this.encendido = true;
		}else{ 
			alert("Celular apagado")
			this.encendido = false;
		}
		}
	
	reinicar(){
		if (this.encendio == true){
			alert("Reinicisnfo el celular");
		}else{
			alert("el celular esta apagado");
		}
	}
	tomarFotos(){
		alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
	}
	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`);
	}
	mobileInfo(){
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
		Memoria Ram: <b>${this.memoriaRam}</b></br>
		`;

	}
	}
class CelularAltaGama extends Celular {
	constructor(color,peso,tamaño,rdc,ram,rdce){
		super(color,peso,tamaño,rdc,ram);
		this.resolucionDeCamaraExtra = rdce;
	}
	grabarVideoLento(){
		alert("estas grabando en camara lenta")
	}
	reconociemientoFacial(){
		alert("vamos a iniciar un reconociemiento facial")
	}
	infoAltaGama(){
		return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`;
	}
}
	//celular1 = new Celular("rojo","150g","5","full hd","2GB");
	//celular2 = new Celular("negro","155g","5.4","full hd","2GB");
	//celular3 = new Celular("blanco","160g","5.9","full hd","2GB");


	//celular.presionarBotonEncendido()
	//celular1.tomarFoto();
	//celular1.grabarVideo()
	//celular1.reinicar();
	//celular1.presionarBotonEncendido();

	celular1 = new CelularAltaGama("rojo","130g","5.2","4K","3GB","full hd");
	celular2 = new CelularAltaGama("negro","140g","5.6","4K","4GB","hd");

document.write(`
	${celular1.infoAltaGama()} <br>
	${celular2.infoAltaGama()} <br>
	
`);


	

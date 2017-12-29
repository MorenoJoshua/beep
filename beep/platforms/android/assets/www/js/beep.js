//
class Beep {
    constructor() {
        this.cargarVista = this.cargarVista.bind(this);
        this.templates = new BeepTemplates();
        this.testCallBack = this.testCallBack.bind(this);
    }

    cargarVista(vista, callback = null) {
        $.get(vista, function (data) {
            document.getElementById('contenedor').innerHTML = data;
        });
        callback != null ? this[callback]() : false;
    }

    testCallBack() {
        return alert('callback');
    }

    insertarCard(donde = 'wall', contenido = '', tipo = 'nuevo') {
        var nuevatarjeta = this.templates.basicCard(contenido.icono, contenido.titulo, contenido.contenido, contenido.menu);
        var lugar = tipo == 'nuevo' ? 'afterBegin' : 'beforeEnd';
        document.getElementById(donde).insertAdjacentHTML(lugar, nuevatarjeta);
    }

    insertarGaleriaCard(donde = 'wall', contenido = '', tipo = 'nuevo') {
        var nuevatarjeta = this.templates.galeriaCard(contenido.icono, contenido.titulo, contenido.contenido, contenido.menu);
        var lugar = tipo == 'nuevo' ? 'afterBegin' : 'beforeEnd';
        document.getElementById(donde).insertAdjacentHTML(lugar, nuevatarjeta);
    }

    card(tipo, json, lugar = 'wall', orden = 'nuevo') {
        var nuevaTarjeta = this.templates.card(tipo, json);
        var donde = orden == 'nuevo' ? 'afterBegin' : 'beforeEnd';
        document.getElementById(lugar).insertAdjacentHTML(donde, this.templates.card(tipo, json));
    }

}
var beep = new Beep();

var demo = {
    titulo: 'Titulo Demo',
    contenido: 'Probando el contenido de una tarjeta',
    menu: false
};
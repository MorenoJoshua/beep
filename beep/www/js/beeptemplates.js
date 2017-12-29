class BeepTemplates {
    basicCard(icono = '', titulo = '', contenido = '', menu = '') {
        return `<div class="card p-a-0">
    <div class="card-header bg-primary"><i class="material-icons">${icono}</i>${titulo} <i class="material-icons pull-xs-right">more_vert</i></div>
    <div class="card-block p-a-0">
    ${contenido}
    </div>
</div>`
    }

    card(tipo, jsonContenido) {
        switch (tipo) {
            case '':
            case 'basic':
            case 'basico':
                return this.basicCard(jsonContenido.icono, jsonContenido.titulo, jsonContenido.constructor, jsonContenido.menu);
                break;
            case 'galeria':
                return this.galeriaCard('insert_photo', jsonContenido.titulo, jsonContenido.imagenes, jsonContenido.menu);
                break;
            case 'hobbies':
                return this.hobbiesCard('motorcycle', jsonContenido.titulo, jsonContenido.hobbies, jsonContenido.menu);
                break;
        }
    }

    hobbiesCard(icono, json) {
        var hobbies = '';
        for (var h in json.hobbies) {
            hobbies += `<div class="col-xs-4 p-a-0 bg-faded">${json.hobbies[h].titulo}</div>`
        }
        var hobbiesTemp = `<div class="col-xs-12 p-a-0">${hobbies}</div>`;
    }

    galeriaCard(icono, titulo, contenido, menu) {
        if (contenido.length == 3) {
            var galeriaTemp = `<div class="">
    <div class="col-xs-12 p-a-0">
        <div class="embed-responsive embed-responsive-21by9">
            <img src="${contenido[0].url}" alt="" class="embed-responsive-item">
            <div class="embed-responsive-item">${contenido[0].titulo}</div>
        </div>
    </div>
    <div class="col-xs-6 p-a-0 m-a-0">
        <div class="embed-responsive embed-responsive-1by1">
            <img src="${contenido[1].url}" alt="" class="embed-responsive-item">
            <div class="embed-responsive-item">${contenido[1].titulo}</div>
        </div>
    </div>
    <div class="col-xs-6 p-a-0 m-a-0">
        <div class="embed-responsive embed-responsive-1by1">
            <img src="${contenido[2].url}" alt="" class="embed-responsive-item">
            <div class="embed-responsive embed-responsive-item">${contenido[2].titulo}</div>
        </div>
    </div>
</div>
`;
            return this.basicCard(icono, titulo, galeriaTemp, menu)
        }
    }


}

var galeriaDemo =
{
    titulo: 'Galeria',
    icono: 'insert_photo',
    menu: false,
    imagenes: [
        {
            url: 'http://lorempixel.com/400/200/',
            titulo: 'Fotos Demo1',
        },
        {
            url: 'http://lorempixel.com/200/200/',
            titulo: 'Fotos Demo Demo',
        },
        {
            url: 'http://lorempixel.com/200/200/',
            titulo: 'Fotos Otro Demo',
        },
    ]
};

var hobbiesDemo = {
    titulo: 'Hobbies',
    icono: 'motorcycle',
    menu: false,
    hobbies: [
        {titulo: 'Hobbies'},
        {titulo: 'Libros'},
        {titulo: 'Peliculas'},
        {titulo: 'Musica'},
        {titulo: 'Juegos'},
        {titulo: 'Deportes'},
    ]
}

const estanteria = {
    libros: [{
        nombre: 'Orgullo y prejuicio',
        autor: 'Jane Austen',
        leido: false
    },
    {
        nombre: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        leido: true
    },
    {
        nombre: 'Shigeki no Kyojin',
        autor: 'Hajime Isayama',
        leido: true
    },
    {
        nombre: 'Fullmetal alchemist',
        autor: 'Hiromu Arakawa',
        leido: false
    },
    {
        nombre: 'El principito',
        autor: 'Antoine de Saint-Exupéry',
        leido: true
    },
    {
        nombre: 'El diario de Ana Frank',
        autor: 'Ana Frank',
        leido: false
    }],

    log() {
        const { libros } = this;
        let resultado = '';
        for (const libro of libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado}
            ${prefijo} leido ${libro.nombre} de ${libro.autor}`;
        }
        console.log(resultado);
    },

    sugerencia() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido);
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random());
        const elementoRandom = librosNoLeidos[indiceRandom];
        console.log(`Te sugiero "${elementoRandom.nombre} de ${elementoRandom.autor}`);
    }
}

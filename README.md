<div align="justify">
  
# lol-exercise
#### 📜 Autor: Nabil León Álvarez ([@nalleon](https://github.com/nalleon)) 

<br>

Práctica de JavaScript, HTML y CSS desarrollada para el módulo de Desarrollo de interfaces (DAD) durante el curso 2024-2025 en IES Puerto de la Cruz.


## Índice

- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura](#estructura)
- [Despliegue](#despliegue)

### Tecnologías utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)

### Estructura

```
JavaLoL/
    │── src/
        │── assets/
            │── img/
        │── css/
        │── script/
```

### Despliegue

Para el despliegue se ha utilizado `parcel gh-pages` de la siguiente manera:

1. Accedemos a la carpeta `JavaLoL/` del proyecto:

```bash
cd code
```

2. Instalamos `parcel gh-pages`

```bash
npm install --save-dev parcel gh-pages

```
3. Configuramos el `package.json` añadiendo lo siguiente en scripts:
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "parcel serve -d dist src/index.html",
    "build": "parcel build src/index.html --public-url /lol-exercise/",
        "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```
4. Creamos la build:

```bash
npm run build
```

5. Desplegamos:

```basg
npm run deploy
```


</div>

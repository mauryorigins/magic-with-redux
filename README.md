# template-client-react-app-webpack5

- Repositorio: [client-react-app](https://bitbucket.org/steve-barquet/client-react-app/src/master/)

### Arquitectura y flujo de datos
Plantilla lista para trabajar y desplegar con un proyecto javascript configurado con webpack usando wpck5-react-typescript: [Draw io diagram](https://drive.google.com/file/d/14trVpSB3yZO4V3kqLJbfCBnJdNxSbKiV/view?usp=sharing)

### Herramientas y tecnologías utilizadas.

- ✏️ Linter con [ESLint](https://eslint.org) (default react, react Core Web Vitals y Airbnb)
- ✏️ Code Formatter with [Prettier](https://prettier.io)
- 🛠 Libreria de componentes de ui para react [Ant-Design](https://ant.design)
- 🛠 [Redux](https://redux.js.org/) Nos permite consumir estados globalmente en cualquier componente de react optimizando renders, evitando bugs y comportamientos inesperados. Además de persistir nuestro estado de redux en _local storage_ para conservar inicios de sesion y otros datos que mejorarán el _UX_ del usuario.

### Requisitos (desarrollo)
- Eslint (vsCode Plugin)
- Prettier (vsCode Plugin)
-
### Ejecutar en desarrollo

1. En tu terminal ubicate en la raiz de tu proyecto:

```
$ cd /path-of-repo
```

2. Instala librerias del proyecto:

```
$ npm i
```

3. Corre el server de desarrollo:

```
$ npm run dev
```

### Requisitos (producción en docker)

- Docker 19.x o superior
- Graphql server corriendo y apuntando al respectivo endpoint en `src/javascript/appConfig/globalConfig.ts` en environment.backend (en éste caso es a http://165.232.135.235:4000/graphql)

# Ejecutar prod en docker

1. Compila la version de produccion con:

```
$ npm run build
```

2. Desde la raiz de éste repositorio construye la imagen de docker con:

```
$ docker build -t graphql_front_image .
```

3. Desde la raiz de éste repositorio corre la imagen de docker con:

```
$ docker run --name graphql-front-container -p 3000:3000 -d --restart unless-stopped graphql_front_image
```

4. Verifica que el contenedor este arriba con:

```
$ docker container logs graphql-front-container
```

# Actualizar prod en docker

1. Borra el contenedor actual con:

```
$ docker container rm -f graphql-front-container
```

2. Actualiza el repositorio y asegurate de tener los ultimos cambios con:

```
$ git pull
```

3. Repite todos los pasos de **Run prod in docker** para actualizar
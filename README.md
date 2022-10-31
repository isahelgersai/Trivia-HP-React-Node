# Setup

Ejecutar los siguientes comandos para iniciar el proyecto localmente:

### Backend y Frontend

```

$ cd ../project_folder

$ npm install

$ npm start

```

Esta aplicación se encarga de manejar una trivia de Harry Potter, basada en una serie de preguntas creadas por mí y servidas desde un endpoint, que luego de terminar la trivia, la aplicación le redirecciona a una sección de resultados, donde el usuario podrá ver qué preguntas respondió correcta e incorrectamente, así como su puntuación final.

El stack usado en este proyecto estuvo implementado usando en el frontend ReactJS, así como también haciendo uso uso del framework de CSS Tailwind. El frontend está manejando el enrutamiento con React Router, y las peticiones al backend con Axios.

Hice uso de este stack en frontend ya que me siento cómodo manejando las tecnologías mencionadas, así como la versatilidad que brinda React al momento de manejar los datos mediante el uso del state y sus componentes. A su vez, hice uso del framework TailwindCSS ya que facilita el manejo de CSS, aplicando los estilos directamente en el JSX sin necesidad de crear un archivo de estilos para cada uno, permitiendome ahorrar tiempo.

El backend del proyecto se implementó usando NodeJS y Express, manejando la data inicial desde un arreglo de objetos de JavaScript y sirviendo las preguntas de la trivia mediante un método GET, así como también recibiendo las respuestas mediante un POST. Finalmente, se envían los resultados de la trivia mendiante un tercer endpoint de tipo GET, el cual se mostrará en la sección de resultados de la aplicación.

Si tuviera más tiempo para desarrollar esta aplicación, implementaría un backend más elaborado, haciendo uso de una base de datos con MongoDB, para así poder almacenar la data de forma permanente y que no se almacene en memoria como está implementado hasta el momento, permitiendo el acceso a resultados previamente almacenados dentro de dicha base de datos. De igual forma me tomaría el tiempo de evaluar la implementación del manejo de las preguntas en el frontend y determinar si existe una forma un poco más eficiente de manejar todo el flow de los datos.

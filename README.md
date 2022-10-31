# Setup

Ejecutar los siguientes comandos para iniciar el proyecto localmente:

### Backend y Frontend

```

$ cd ../project_folder

$ npm install

$ npm start

```

Esta aplicación se encarga de manejar una trivia de Harry Potter, basada en una serie de preguntas creadas por mí y servidas desde un endpoint, luego de terminar la trivia, la aplicación lo redirecciona a una sección de resultados, donde el usuario podrá ver qué preguntas respondió correctamente e incorrectamente, así como su puntuación final.
El stack usado en este proyecto estuvo implementado usando en el frontend ReactJS, así como también haciendo uso uso del framework de CSS Tailwind. El frontend está manejando el enrutamiento con React Router, y las peticiones al backend con Axios. Hice uso de este stack en frontend ya que me siento cómodo manejando las tecnologías mencionadas, así como la versatilidad que te da React al momento de manejar los datos mendiante el state. De igual forma, hice uso del framework TailwindCSS ya que me facilita el manejo de CSS, aplicando los estilos directamente en el JSX sin necesidad de crear un archivo de estilos para cada uno, básicamente para ahorrar tiempo.

El backend del proyecto se implementó usando NodeJS y Express, manejando la data inicial desde un arreglo de objetos de JavaScript y sirviendo las preguntas de la trivia mediante un método GET, así como también recibiendo las respuestas mediante un POST. Finalmente, se envían los resultados de la trivia mendiante un tercer enpoint de tipo GET, el cual se mostrará en la sección de resultados de la aplicación.

Si tuviera más tiempo para desarrollar esta aplicación, implementaría un backend más robusto, haciendo uso de una base de datos con MongoDB por ejemplo, para así poder almacenar la data indefinidamente y que no se almacene en memoria, como está implementado hasta el momento. También me tomaría el tiempo de evaluar la implementación del manejo de las preguntas en el frontend y determinar si existe una forma un poco más eficiente de manejar todo el flow de los datos.

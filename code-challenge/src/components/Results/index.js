import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getResults } from "../../services";

const Results = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResults().then((data) => setResults(data));
    setLoading(false);
  }, []);

  const totalPoints = results.reduce((acc, curr) => (acc += curr.points), 0);

  return (
    <div className="h-full w-full flex items-center flex-col">
      {loading && <span className="text-blue-700">Loading...</span>}
      {results.map((result) => (
        <div
          key={result.id}
          className="w-1/2 mb-8 border-2 border-blue-300 rounded-md py-3 px-5 bg-beige"
        >
          <h3 className="font-bold mb-1">{result.question}</h3>
          <div className="pl-2">
            <p className="text-gray-800">Respuesta: {result.name}</p>
            <p
              className={`${
                result.points === 10 ? "text-green-600" : "text-red-500"
              } font-bold`}
            >
              {result.points === 10
                ? `Correcta ¡10 puntos para ${houses[randomNumber - 1]}!`
                : "Incorrecta"}
            </p>
          </div>
        </div>
      ))}
      <div className="w-1/5 mb-8 border-2 border-blue-300 rounded-md py-4 px-5 bg-white text-center">
        <h2 className="font-bold mb-2 text-lg">
          Puntuación total: {totalPoints}/100
        </h2>
        <Link to="/" className="font-bold text-blue-500">
          {`<- Volver a Inicio`}
        </Link>
      </div>
    </div>
  );
};

export default Results;

const houses = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
const randomNumber = Math.floor(Math.random() * 4) + 1;

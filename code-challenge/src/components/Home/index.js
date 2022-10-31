import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions, sendAnswers } from "../../services";

const Home = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getQuestions().then((data) => setQuestions(data));
    setLoading(false);
  }, []);

  const handleChange = (answer) => {
    const foundAnswer = answers.find(
      (answ) => answ.questionId === answer.questionId,
    );
    if (foundAnswer) {
      const newAnswers = answers.map((answ) =>
        answ.questionId === answer.questionId ? { ...answer } : answ,
      );
      setAnswers([...newAnswers]);
    } else {
      setAnswers([...answers, answer]);
    }
  };

  const isSelected = (answer) => {
    return answers.find((answ) => answ.id === answer.id) ? true : false;
  };

  const onSubmit = () => {
    sendAnswers(answers).then((res) => {
      if (res === 200) {
        navigate("/results");
      }
    });
  };

  return (
    <div className="h-full w-full flex items-center flex-col">
      {loading && <span className="text-blue-700">Loading...</span>}
      {questions.map((question) => (
        <div
          key={question.id}
          className="w-1/2 mb-8 border-2 border-blue-300 rounded-md py-3 px-5 bg-beige"
        >
          <h2 className="font-bold mb-2">{question.value}</h2>
          {question.answers.map((answer) => (
            <div key={answer.id} className="mb-1">
              <input
                type="radio"
                id={answer.id}
                value={answer.points}
                className="mr-2 cursor-pointer"
                checked={isSelected(answer) ? true : false}
                onChange={() =>
                  handleChange({
                    ...answer,
                    questionId: question.id,
                    question: question.value,
                  })
                }
              />
              <label htmlFor={answer.id} className="cursor-pointer">
                {answer.name}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button
        disabled={answers.length !== 10}
        className="px-4 py-3 bg-blue-500 text-white rounded-md w-64 text-center disabled:cursor-not-allowed font-bold"
        onClick={onSubmit}
      >
        Enviar
      </button>
    </div>
  );
};

export default Home;

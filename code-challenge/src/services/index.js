import axios from "axios";

const API_ROUTE = "http://localhost:8080";

export const getQuestions = async () => {
  const response = await axios.get(`${API_ROUTE}/questions`);
  const { data } = response;
  return data.questions;
};

export const sendAnswers = async (answers) => {
  const response = await axios.post(`${API_ROUTE}/answers`, { answers });
  return response.status;
};

export const getResults = async () => {
  const response = await axios.get(`${API_ROUTE}/results`);
  const { data } = response;
  return data;
};

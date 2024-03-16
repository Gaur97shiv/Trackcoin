import axios from "axios";
const NEWS_API_ENDPOINT =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=75d982224e9440c69e6bc23c6f704fd6";
const CRYPTO_API_ENDPOINT =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
export const getNews = async () => {
  let response;
  try {
    response = await axios.get(NEWS_API_ENDPOINT);
    response = response.data.articles.slice(0, 15);
  } catch (error) {}
  return response;
};
export const getCrypto = async () => {
  let response;
  try {
    response = await axios.get(CRYPTO_API_ENDPOINT);
    response = response.data;
  } catch (error) {}

  return response;
};

import { APIResponse } from "./types"

const API_URL = "https://opentdb.com/api.php?amount=10&type=boolean";

export async function getNewQuestions() {
  return fetch(API_URL)
    .then(api_data => api_data.json())
    .then((json_response: APIResponse) => {
      return {
        "questions": json_response.results,
        "answers": json_response.results.map(() => false)
      }
    });
}

export function decodeHtml(html: string) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
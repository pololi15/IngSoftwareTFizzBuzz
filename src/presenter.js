import { fizzbuzzSequence } from "./fizzbuzz.js";

const input = document.querySelector("#numero-fizzbuzz");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numero = Number.parseInt(input.value);
  const resultado = fizzbuzzSequence(numero);

  div.innerHTML = "<p>" + resultado.join(", ") + "</p>";
});
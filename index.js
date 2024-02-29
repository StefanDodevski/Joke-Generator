const jokeBtn = document.getElementById("joke-btn");
const joke = document.getElementById("joke");

const apiKey = "PlnecGaSRZiURRtN0RJCGA==kMS9aRc5PG73B93D";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};
async function getJoke() {
  joke.innerHTML = "Loading joke...";
  jokeBtn.disabled = true;
  jokeBtn.style.backgroundColor = "rgba(0,0,0,0.2)";
  jokeBtn.style.pointerEvents = "none";
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  console.log(data);
  joke.innerHTML = data[0].joke;
  jokeBtn.disabled = false;
  jokeBtn.style.pointerEvents = "auto";
  jokeBtn.style.backgroundColor = " rgb(88, 206, 88)";
}

jokeBtn.addEventListener("click", getJoke);

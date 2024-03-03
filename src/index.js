function showPoem(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionsElement = document.querySelector("#haiku-instruction");

  let apikey = "14t6c91085afoc51fbb78bec011a39b3";
  let prompt = ` User Instructions:generate a haiku poem on ${instructionsElement.value}`;
  let context =
    "you are a good haiku poet and  you love to write nice haiku poems.your mission is to generate a haiku poem in basic HTML .Do not include a title to the poem ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  let PoemElement = document.querySelector("#haiku");
  PoemElement.classList.remove("hidden");
  PoemElement.innerHTML = ` <div class="generating">Generating a haiku poem about ${instructionsElement.value}</div>`;

  axios.get(apiUrl).then(showPoem);
}
let haikuPoemElement = document.querySelector("#haiku-poem-form");

haikuPoemElement.addEventListener("submit", generatePoem);

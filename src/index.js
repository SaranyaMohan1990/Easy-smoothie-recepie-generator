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
  let haikuElement = document.querySelector("#haiku");
  let apikey = "14t6c91085afoc51fbb78bec011a39b3";
  let prompt = ` User Instructions:generate a haiku poem on ${instructionsElement.value}`;
  let context =
    "you are a good haiku poet and your mission is to generate a haiku poem in basic HTML.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiUrl).then(showPoem);
}
let haikuPoemElement = document.querySelector("#haiku-poem-form");

haikuPoemElement.addEventListener("submit", generatePoem);

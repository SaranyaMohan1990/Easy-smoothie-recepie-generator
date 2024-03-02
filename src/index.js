function generateRecepie(event) {
  event.preventDefault();
  let smoothieElement = document.querySelector("#smoothie");

  new Typewriter("#smoothie", {
    strings:
      "This green smoothie is deliciously sweet, slightly tangy, and so good for you",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let smoothieRecepieElement = document.querySelector("#smoothie-recepie-form");

smoothieRecepieElement.addEventListener("submit", generateRecepie);

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggoBtn = document.querySelector(".get-dog");

doggoBtn.addEventListener("click", () => {
  fetch(DOG_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      const imgUrl = responseJson.message;

      const imgTag = document.createElement("img");
      imgTag.src = imgUrl;
      imgTag.alt = "cute doggo photo";

      const doggoWrapper = document.querySelector(".doggo-wrapper");

      doggoWrapper.appendChild(imgTag);
    })
    .catch((e) => console.log(e));
});

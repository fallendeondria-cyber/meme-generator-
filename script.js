document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("meme-form");
  const memeContainer = document.getElementById("meme-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const topText = document.getElementById("top-text").value.trim();
    const bottomText = document.getElementById("bottom-text").value.trim();
    const imageUrl = document.getElementById("image-url").value.trim();

    if (!topText || !bottomText || !imageUrl) {
      alert("All fields are required!");
      return;
    }

    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    const img = document.createElement("img");
    img.src = imageUrl;

    const topDiv = document.createElement("div");
    topDiv.classList.add("meme-text", "top-text");
    topDiv.innerText = topText;

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("meme-text", "bottom-text");
    bottomDiv.innerText = bottomText;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "X";

    deleteBtn.addEventListener("click", function () {
      memeDiv.remove();
    });

    memeDiv.appendChild(img);
    memeDiv.appendChild(topDiv);
    memeDiv.appendChild(bottomDiv);
    memeDiv.appendChild(deleteBtn);

    memeContainer.appendChild(memeDiv);

    form.reset();
  });

});


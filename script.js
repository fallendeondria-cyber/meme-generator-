document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("meme-form");
  const memeContainer = document.getElementById("meme-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const topText = document.getElementById("top-text").value.trim();
    const bottomText = document.getElementById("bottom-text").value.trim();
    const imageUrl = document.getElementById("image-url").value.trim();

    // Validation
    if (!topText || !bottomText || !imageUrl) {
      alert("All fields are required!");
      return;
    }

    // Create meme container
    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    // Image
    const img = document.createElement("img");
    img.src = imageUrl;

    // Top text
    const topDiv = document.createElement("div");
    topDiv.classList.add("meme-text", "top-text");
    topDiv.innerText = topText;

    // Bottom text
    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("meme-text", "bottom-text");
    bottomDiv.innerText = bottomText;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "X";

    deleteBtn.addEventListener("click", function () {
      memeDiv.remove();
    });

    // Assemble meme
    memeDiv.appendChild(img);
    memeDiv.appendChild(topDiv);
    memeDiv.appendChild(bottomDiv);
    memeDiv.appendChild(deleteBtn);

    memeContainer.appendChild(memeDiv);

    // Clear form
    form.reset();
  });

});

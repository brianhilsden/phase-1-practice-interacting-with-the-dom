const pause = document.getElementById("pause");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const submit = document.getElementById("submit");
const likes = document.getElementsByClassName("likes");
const form = document.getElementById("comment-form");
const comments = document.getElementById("list");
let counter = document.getElementById("counter");
let likeCount = 0;


plus.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});

minus.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) - 1;
});

heart.addEventListener("click", () => {
    likeCount++;
    if (likeCount === 1) {
      let like = document.createElement("li");
      like.id = counter.textContent;
      like.textContent = `${counter.textContent} has been liked ${likeCount} time`;
      likes[0].appendChild(like);
    } else {
      let createdElement = document.getElementById(counter.textContent);
      createdElement.textContent = `${counter.textContent} has been liked ${likeCount} time${likeCount > 1 ? "s" : ""}`;
    }
  });

let timing = setInterval(() => {
  counter.textContent = parseInt(counter.textContent) + 1;
  likeCount = 0;
}, 1000);

pause.addEventListener("click", () => {
  pause.textContent = pause.innerText === "pause" ? "resume" : "pause";
  if (pause.innerText === "resume") {
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    clearInterval(timing);
  } else {
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    timing = setInterval(() => {
      counter.textContent = parseInt(counter.textContent) + 1;
      likeCount = 0;
    }, 1000);
  }
});



form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("comment-input");
  let inputItem = document.createElement("p");
  inputItem.textContent = input.value;
  comments.appendChild(inputItem);
});

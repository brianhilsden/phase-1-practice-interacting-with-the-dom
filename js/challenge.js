const pause = document.getElementById("pause");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const submit = document.getElementById("submit");
const likes = document.getElementsByClassName("likes");
const form = document.getElementById("comment-form");
const comments = document.getElementById("list");
let counter = document.getElementById("counter"); //Also note that the initial counter value is 0
let likeCount = 0; //define an initial like count to be incremented later

//when plus is clicked, the counter value is incremented by 1
plus.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) + 1;
});

//when minus is clicked, the counter value is decremented by 1
minus.addEventListener("click", () => {
  counter.textContent = parseInt(counter.textContent) - 1;
});

/*when heart is clicked, like count increases for the current counter value. A statement with the details of the current counter value and how many likes it has, is also displayed on the page*/
heart.addEventListener("click", () => {
    likeCount++;

    /*First checks if it's the first like the counter value has, before creating a new element/statement and appending it to the likes list.*/
    if (likeCount === 1) { 
      let like = document.createElement("li");
      like.id = counter.textContent; //give the created statement an id so as to use it for reference
      like.textContent = `${counter.textContent} has been liked ${likeCount} time`;
      likes[0].appendChild(like);
    } else { /*this executes if the counter value has more than 1 like. Does not create new element/statement but it modifies the existing one*/
      let createdElement = document.getElementById(counter.textContent);
      createdElement.textContent = `${counter.textContent} has been liked ${likeCount} time${likeCount > 1 ? "s" : ""}`; 
    }
  });

  /*sets interval so that counter is incremented every 1000ms(1 second). Like count is also reset to 0 after 1 second so that each like on a counter value starts from 0.*/
let timing = setInterval(() => {
  counter.textContent = parseInt(counter.textContent) + 1;
  likeCount = 0;
}, 1000);

/*When pause button is pressed, certain buttons are disabled and the time interval(timer) stopped. it's content also changes to resume. When it is pressed again, the buttons are enabled,content of button changes back to pause, and timer continues*/
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
      likeCount = 0; //like count is once again set to default to 0 after every second in this new timer interval
    }, 1000);
  }
});


//when comment form is submitted, a new paragraph is created and the value of the form input is added to it. The paragraph is then appended to the comments div hence appearing on the screen
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("comment-input");
  let inputItem = document.createElement("p");
  inputItem.textContent = input.value;
  comments.appendChild(inputItem);
});

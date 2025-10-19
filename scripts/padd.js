const numContentLines = 9;

const statusbars = document.querySelector(".top__statusbar_rightbars");

// Insert Bars in Status Bar
for (let i = 0; i < 10; i++) {
  const bar = document.createElement("div");
  bar.classList.add("top__statusbar_bar");
  statusbars.appendChild(bar);
}

// Generate Content
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const numbersPlusSpace = numbers + "   ";

// String of Characters
function generateCharString(length) {
  let s = " ";
  for (let i = 0; i < length; i++) {
    s += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return s;
}

// String of Numbers
function generateNumString(length) {
  let s = " ";
  for (let i = 0; i < length; i++) {
    s += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return s;
}

// Long String of Numbers
function generateLongNumString(maxLength) {
  const varLength = Math.floor(Math.random() * (maxLength - 6 + 1) + 6);

  let s = " ";
  for (let i = 0; i < varLength; i++) {
    s += numbersPlusSpace.charAt(
      Math.floor(Math.random() * numbersPlusSpace.length)
    );
  }
  return s;
}

// Select the Content Container
const content = document.querySelector(".top__screen_content");

// Generate Content Lines
for (let i = 0; i < numContentLines; i++) {
  const list = document.createElement("ul");
  list.classList.add("top__screen_contentline");

  const spec47 = document.createElement("li");
  spec47.classList.add("top__screen_contentitem");

  const spec23 = document.createElement("li");
  spec23.classList.add("top__screen_contentitem");

  const firstline = generateCharString(4) + " " + generateNumString(7);

  spec47.innerText = firstline;
  spec23.innerText = firstline;

  const spec12 = document.createElement("li");
  spec12.classList.add("top__screen_contentitem");

  const thirdline = generateLongNumString(24);
  spec12.innerText = thirdline;

  const report = document.createElement("li");
  report.classList.add("top__screen_contentitem");

  const fourthline = generateCharString(8);
  report.innerText = fourthline;

  list.appendChild(spec47);
  list.appendChild(spec23);
  list.appendChild(spec12);
  list.appendChild(report);

  content.appendChild(list);
}

// Reference Image
const ref = document.querySelector(".reference");

ref.addEventListener("click", (evt) => {
  console.log("clicked");
  ref.classList.toggle("reference--zoom");
});

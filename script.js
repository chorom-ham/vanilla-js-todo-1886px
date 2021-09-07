const form = document.querySelector("form");
const newList = form.querySelector("input");

const handleSubmit = (event) => {
  event.preventDefault();
};

form.addEventListener("submit", handleSubmit);

const search_button = document.querySelector(".search-button");
const input_text = document.querySelector("input");
let counter = 0;
const tasks = [];
function message(msg) {
  alert(msg);
}
search_button.addEventListener("click", () => {
  if (input_text.value === "") return;
  counter++;
  tasks.push(input_text.value);
  const newd = document.createElement("div");
  const newh1 = document.createElement("h1");
  const newd2 = document.createElement("div");
  const newh2 = document.createElement("h1");
  const button_div = document.createElement("div");
  const newp = document.createElement("button");
  const newedit = document.createElement("button");

  newd.classList.add("new-container");
  newh1.textContent = input_text.value.toUpperCase();
  newd2.classList.add("text_container");
  newd2.appendChild(newh2);
  newd2.appendChild(newh1);

  button_div.classList.add("button-container");
  newp.innerHTML = "delete";
  newedit.innerHTML = "edit";
  newh2.textContent = counter + ") ";
  newd.appendChild(newd2);
  newd.appendChild(button_div);

  button_div.appendChild(newp);
  button_div.appendChild(newedit);
  document.querySelector("body").appendChild(newd);
  input_text.value = "";

  newedit.addEventListener("click", () => {
    const string = prompt("Enter the update task:", newh1.textContent);
    if (string && string.trim() != "") {
      newh1.textContent = string.toUpperCase;
    }
    message("✅ Tasks are updated successfully");
  });

  newp.addEventListener("click", () => {
    newd.remove();
    counter--;
    message("✅ Tasks are remove successfully");
  });
});

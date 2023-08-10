const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");
const faIcon = document.querySelector('.fa-angle-down')
const body = document.querySelector('body')

//show & hide options list
select.addEventListener("click", () => {
  options_list.classList.toggle("active");
  faIcon.classList.toggle('active')

});

//select option
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {option.classList.remove('selected')});
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_list.classList.toggle("active");
    faIcon.classList.toggle('active')

  });
});
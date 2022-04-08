
/*localstronger*/ 

var l = localStorage;

first_name.addEventListener("focusout", function() {
  l.setItem("fn", first_name.value);
})

last_name.addEventListener("focusout", function() {
  l.setItem("ln", last_name.value);
})

email.addEventListener("focusout", function() {
  l.setItem("em", email.value);
})

profile.addEventListener("focusout", function() {
  l.setItem("pr", profile.value);
})

function recuperoValores() {
  first_name.value = l.getItem("fn");
  last_name.value = l.getItem("ln");
  email.value = l.getItem("em");
  profile.value = l.getItem("pr");
}

document.addEventListener("DOMContentLoaded", recuperoValores);
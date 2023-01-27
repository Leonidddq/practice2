let elem = document.querySelector("#elem")
let button = document.querySelector("#button")
button.addEventListener("click",func)
function func(){
  let a = ""
  let b = "qwertyuiop[]asdfghjkl;'zxcvbnm,./1234567890+-*/!@#$%^&*()_+|№;%:?*()_+"
  for(let i = 0; i<8; i++){
    a += b.charAt(Math.floor(Math.random() * b.length))
  }
  elem.value = a
}
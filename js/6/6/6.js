let elem1 = document.querySelector("#elem1")

elem1.addEventListener("blur",func)
function func(){
    let a = elem1.value
    let arr = []
    arr.push(a)
    arr = a.split(" ")
   for(let i = 0; i<arr.length; i++){
    arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)
}
    elem1.value = arr.join(" ")
}
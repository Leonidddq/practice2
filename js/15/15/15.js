let elem = document.querySelector("#elem")
elem.addEventListener("blur", func)
function func(){
   let a = elem.value
   let b = a.split(".")
   let date = new Date(b[2], b[1]-1, b[0]);
   let day = date.getDay();
   let days = ['воскресение','понедельник','вторник','среда','четверг','пятница','суббота']
   elem.value = (days[day])

}
let a = document.querySelectorAll("a")
func()
   function func(){
      for (let i = 0; i < a.length; i++)
      if(a[i].href.indexOf("http://") == 0){
         a[i].textContent = a[i].textContent + '→' + a[i].href
      }
      else{
         a[i].textContent = a[i].textContent + a[i].href
      } 
}
   

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  }); 


  const setUi=(user)=>{
    const nnn=document.querySelector('.nnn')
    const loggedin=document.querySelectorAll('.logged-in')
    const loggedout=document.querySelectorAll('.logged-out')
      if(user){
        nnn.innerHTML=`<button class="btnn "><a href="index2.html">Go Donate</a></button>
        <br><br><br><br>
        `
        loggedin.forEach(item=>{
            item.style.display='block'
        })

        loggedout.forEach(item=>{
            item.style.display='none'
        })  
      }else{
        nnn.innerHTML=`<h5 class="center white-text">please login or signup to donate</h5>
        <br><br><br><br>
        `
        loggedout.forEach(item=>{
            item.style.display='block'
        }) 
        
        loggedin.forEach(item=>{
            item.style.display='none'
        })
      }
  }
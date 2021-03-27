
  
   


auth.onAuthStateChanged((user)=>{
    const nnn=document.querySelector('.nnn')
    const loggedin=document.querySelectorAll('.logged-in')
    const loggedout=document.querySelectorAll('.logged-out')
    
    if(user){

        loggedin.forEach(item=>{
            item.style.display='block'
        })

        loggedout.forEach(item=>{
            item.style.display='none'
        }) 
         
        db.collection("Orders").orderBy('time').onSnapshot((snapshot)=>{
            setUpGuides(snapshot.docs)
             
           })
        
      
   
    }else{

        
        
            loggedout.forEach(item=>{
                item.style.display='block'
            }) 
            
            loggedin.forEach(item=>{
                item.style.display='none'
            })

        kkc.innerHTML=`<h2 class="white-text">No orders available</h2>`
    }
        
    }


)
    

const signupForm=document.querySelector("#signup-form")
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
     const email=signupForm['signup-email'].value
     const password=signupForm['signup-password'].value
     
     auth.createUserWithEmailAndPassword(email,password).then(
         (cred)=>{
            console.log(cred)
         }
     )
        }
)



const loginForm=document.querySelector('#login-form')
 loginForm.addEventListener('submit',(e)=>{
e.preventDefault()
const email=loginForm['login-email'].value
     const password=loginForm['login-password'].value
     auth.signInWithEmailAndPassword(email,password).then((cred)=>{
         
alert(`${cred.user.email} logged in`)
const modal=document.querySelector("#modal-login")
        M.Modal.getInstance(modal).close()
        loginForm.reset()
         return name=cred.user.email
     }) 

 })



 const logout=document.querySelector("#logout")
logout.addEventListener('click',(e)=>{
e.preventDefault()
auth.signOut().then(()=>{
    alert("logged out")
})
})

document.querySelector(".kkkkj").addEventListener('click',(e)=>{
    e.preventDefault()
auth.signOut().then(()=>{
    alert("logged out")
})
})
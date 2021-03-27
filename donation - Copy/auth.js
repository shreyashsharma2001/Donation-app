
auth.onAuthStateChanged((user)=>{
    const nnn=document.querySelector('.nnn')
    const loggedin=document.querySelectorAll('.logged-in')
    const loggedout=document.querySelectorAll('.logged-out')
    
    if(user){
  setUi(user)  
 
    }else{
        setUi(user) 
    }
})

 


  






const signupForm=document.querySelector("#signup-form")
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
     const email=signupForm['signup-email'].value
     const password=signupForm['signup-password'].value
     const firstName=signupForm['signup-name'].value
     const lastName=signupForm['signup-last'].value
     const Address=signupForm['signup-address'].value
     
     auth.createUserWithEmailAndPassword(email,password).then(
         (cred)=>{
            console.log(cred)

 db.collection(cred.user.email).add({
     
 }).then(()=>{
     db.collection("userInfo").doc(name).set({
         firstName:firstName,
         lastName:lastName,
         
          
     })
 })

            
         
    
         }
     ).then(
         ()=>{
            const signupForm=document.querySelector("#signup-form")
            const modal=document.querySelector("#modal-signup")
        M.Modal.getInstance(modal).close()
        signupForm.reset()
         }
     )

})

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

 

const logout=document.querySelector("#logout" )
logout.addEventListener('click',(e)=>{
    console.log("hloooo")
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
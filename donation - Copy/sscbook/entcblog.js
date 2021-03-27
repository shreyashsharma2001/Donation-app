db.collection("sscbook").onSnapshot((snapshot)=>{
    setUpGuides(snapshot.docs)
     
   })
 

    
   const save=document.querySelector(".save")
    

   save.addEventListener("click",()=>{
    const bookName=document.querySelector(".na").value
    const purpose=document.querySelector(".pur").value
    const email=document.querySelector(".emai").value
    const price=document.querySelector(".price").value

    db.collection("sscbook").add({
        bookName,
        email,
        purpose,
        price

    })
   })
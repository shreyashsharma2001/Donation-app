 
db.collection("entcbblog").onSnapshot((snapshot)=>{
   setUpGuides(snapshot.docs)
    
  })

  document.querySelector(".save").addEventListener("click",()=>{
      const title=document.querySelector(".tt").value
      const content=document.querySelector(".ccnn").value
console.log(title,content)
      db.collection("entcbblog").add({
        Title:title,
        Content:content
      })
  })





 
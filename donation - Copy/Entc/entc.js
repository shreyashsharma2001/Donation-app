  

console.log("Entc")
db.collection("Entc").onSnapshot((snapshot)=>{
   setUpGuides(snapshot.docs)
    
  })





var uploader=document.querySelector("#uploader2")
 var button=document.querySelector("#fileButton2")
  var jj=document.querySelector('.btn')
button.addEventListener('change',(e)=>{
   var file=e.target.files[0]
    
    name=document.querySelector('.ss2').value
   ll=storage.ref("Entc/"+name)
    
     

    ll.put(file).then(()=>{
       var star=storage.ref(  "Entc/"+name)
       star.getDownloadURL().then((url)=>{
           db.collection("Entc").add({
               name:name,
               url:url
                
           })
           console.log("Completed")
       })

        
    })

     
    
//     task.on("state_changed",(snapshot)=>{
// var percentage=(snapshot.bytesTransferred/snapshot.totalBytes)*100
// uploader.value=percentage
//     } ).then(()=>{
//         console.log("Completed")
   // })

})

//  document.querySelector('.btn',()=>{
//      console.log("afdafa")
//     starsRef.getDownloadURL()
// .then((url) => {
//   // Insert url into an <img> tag to "download"
//   console.log("hloooo")
// })
//  })

// document.querySelector('.btn').addEventListener('click',()=>{
//     console.log("starting.....")
//     var star=storage.ref('Entc/'+name)
//  star.getDownloadURL()
// .then((url) => {
//    document.querySelector('.dd').innerHTML=`<a href=${url}>click it</a>`
// })
// })
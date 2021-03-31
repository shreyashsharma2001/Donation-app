console.log(name)
db.collection(name).orderBy('time').onSnapshot((snapshot)=>{
   setUpGuides(snapshot.docs)
    
  })
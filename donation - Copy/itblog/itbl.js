const guides=document.querySelector('.content')

const setUpGuides=(data1)=>{
     
    if(data1.length){
        let html=""
        data1.forEach(element => {
    
            const guide=element.data()
            console.log(guide)
            const li=`  
            <li>
      <div class="collapsible-header ch"><i class="material-icons">filter_drama</i>${guide.Title}</div>
      <div class="collapsible-body white-text cc"> <form class="col s12 ">
       
          <textarea id="textarea1" class="materialize-textarea white-text ccnn  kkkk"   >${guide.Content}</textarea>
           
       
    </form></div>
    </li>
`
    
            html=html+li
        });
        guides.innerHTML=html
    }else{
         guides.innerHTML=`<h2 class="white-text">No data available</h2>`
    }
        
    }
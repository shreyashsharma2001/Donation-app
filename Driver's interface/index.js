const kkc=document.querySelector(".kkc")
 const setUpGuides=(data1)=>{
    if(data1.length){
        let html=""
        data1.forEach(element => {
    
            const guide=element.data()
            console.log(guide)
           
            const li=`  <li class="collection-item avatar">
            <i class="material-icons circle">folder</i>
            <span class="title">${guide.feild}</span>
            <p>${guide.Time} <br>
               Address: ${guide.Address}<br>
               Chat id: ${guide.id}<br>
               <button><a href="https://ro1idgdexfwzbaduzwwyug-on.drv.tw/chat/">Chat</a></button>
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
`
    console.log(name)
            html=html+li
        });
        kkc.innerHTML=html
    }else{
         kkc.innerHTML=`<h2 class=" ">No orders available</h2>`
    }
 }
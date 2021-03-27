const guides=document.querySelector('.cl')

 



const setUpGuides=(data1)=>{
     
    if(data1.length){
        let html=""
        data1.forEach(element => {
    
            const guide=element.data()
            // function mm(ss){
            //     if(guide.ss==undefined){
            //         return ''
            //     }else{
            //         return guide.ss
            //     }
            //     }
            console.log(guide)
            const li=`<li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>Feild: ${guide.feild} <br> Time: ${guide.Time}</div>
            <div class="collapsible-body"><span>${guide.nonVegFood==undefined ? '' : guide.nonVegFood}</span>
            <span>${guide.vegFood==undefined ? '' : guide.vegFood}</span>
            <span>${guide.kidsWear==undefined ? '' : guide.kidsWear}</span>
            <span>${guide.mensWear==undefined ? '' : guide.mensWear}</span>
            <span>${guide.warmCloths==undefined ? '' : guide.warmCloths}</span>
            <span>${guide.womensWear==undefined ? '' : guide.womensWear}</span>
            <span>${guide.Books==undefined ? '' : guide.Books}</span>
            <span>${guide.Equipments==undefined ? '' : guide.Equipments}</span>
            <span>${guide.otherStuff==undefined ? '' : guide.otherStuff}</span>
            <span>${guide.Ammount==undefined ? '' : guide.Ammount}</span>
            </div>
          </li>
`
    
            html=html+li
        });
        guides.innerHTML=html
    }else{
         guides.innerHTML=`<h2 class="white-text">login or sign up to see data</h2>`
    }
        
    }
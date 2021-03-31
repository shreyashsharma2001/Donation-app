const guides=document.querySelector('.coll')

const setUpGuides=(data1)=>{
     
    if(data1.length){
        let html=""
        data1.forEach(element => {
    
            const guide=element.data()
            console.log(guide)
            const li=` <div class="col s12 m7">
            <h3 class="header">${guide.bookName}</h3>
            <div class="card horizontal">
              <div class="card-image">
                <img src="https://images.pexels.com/photos/3563625/pexels-photo-3563625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="200px" height="200px">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p>purpose: ${guide.purpose}</p>
                  <br>
                  <p>price: ${guide.price}</p>
                  <br>
                  <p>Email for contacting: ${guide.email}</p>
                  

                </div>
                 
              </div>
            </div>
          </div>
          
`
    
            html=html+li
        });
        guides.innerHTML=html
    }else{
         guides.innerHTML=`<h2 class="white-text">Nothing for sale</h2>`
    }
        
    }
    
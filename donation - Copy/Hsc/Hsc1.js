



const guides=document.querySelector('.pdf2')

const setUpGuides=(data1)=>{
     
    if(data1.length){
        let html=""
        data1.forEach(element => {
    
            const guide=element.data()
            console.log(guide)
            const li=` <div class="col s12 m7 hh" style="height: 150px;" style="background-color: #242322; padding: 20px;">
             
            <div class="card horizontal" style="height: 150px;background-color: #242322;padding: 20ox;">
              <div class="card-image"  >
                <img src="https://seeklogo.com/images/A/acrobat-file-pdf-logo-37A1BFDE35-seeklogo.com.png" width="150px" height="150px">
              </div>
              <div class="card-stacked"  >
                <div class="card-content white-text" >
                  <p>${guide.name}</p>
                </div>
                <div class="card-action" style="height: 70px;">
                  <a href=" ${guide.url}" target="_blank">Download</a>
                </div>
              </div>
            </div>
          </div>
`
    
            html=html+li
        });
        guides.innerHTML=html
    }else{
         guides.innerHTML=`<h2 class="white-text">login or sign up to see data</h2>`
    }
        
    }
    
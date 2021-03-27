const sttSubmit=document.querySelector(".donate-stt")

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);

    window.open("https://ro1idgdexfwzbaduzwwyug-on.drv.tw/chat/");
  }

  function confirm(){
    document.querySelector('.id4').innerHTML=`<button class="cd">Conform Donation</button>`
    document.querySelector(".cd").addEventListener('click',()=>{
        db.collection("Orders").doc(name).delete().then(alert("Driver is on the way please make sure that the you are present on the location if any problem please chat with driver"))
    })

}


sttSubmit.addEventListener("click",()=>{
    const stuff=document.querySelector(".stuff").value
    const eqip=document.querySelector(".equip").value
    const books=document.querySelector(".book").value
    const add=document.querySelector(".add").value
    var d = new Date();


    function create_UUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    const c=create_UUID()



    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    db.collection(name).add({
        feild:"Stationary",
        Books:books,
        Eqipments:eqip,
        otherStuff:stuff,
        time:timestamp,
        Time:d.toString()
    }).then(()=>{
        db.collection("Orders").doc(name).set({
            feild:"Stationary",
            Time:d.toString(),
            time:timestamp,
            id:c,
            Address:add
        })
    }).then(()=>{
        document.querySelector(".id").innerHTML=`
        <input type="text" value="${c}" id="myInput"><button onclick="myFunction()">Copy chat id and chat</button>
        `

         myFunction()

         confirm()
    })

})
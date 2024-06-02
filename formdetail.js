const scriptURL = 'https://script.google.com/macros/s/AKfycby6WRCaWFaTOi6yvJFz-zcjNxFwCh2Zswd_uvamXg2izNnZxlUsx-k9lPPkJHnB8C9b/exec'
        const form = document.forms['submit-to-google-sheet']
        let pages=document.querySelector(".contain")
        let pages1=document.querySelector(".contain1")
        let pages2=document.querySelector(".contain2")
        let ra=document.querySelector(".ra")
        let btn2=document.querySelector("#btn2")
        let mp1=document.querySelector(".container")
        let mp2=document.querySelector(".thank")
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
            mp1.style.display="None";
            mp2.style.display="block";
            
        })
        var width = 34;
        let i=0
        function act(){
            move();
            unhide();
            function unhide(){
                if(i==0){
                    pages.style.display = "none";
                    pages1.style.display = "block";
                    i++;
                }
                else if(i==1){
                    pages1.style.display = "none";
                    pages2.style.display = "block";
                    btn2.style.display= "none";

                }
            }
            function move(){
                var elem = document.getElementById("myBar");
                width=width+33;
                elem.style.width = width + "%";
            }
        }
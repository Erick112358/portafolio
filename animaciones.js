

function light_dark(){
    let status=true
    const luz=document.querySelector(".mode");
    const body=document.querySelector("body");
    const vinculos=document.querySelectorAll("a");
    console.log(vinculos)
    luz.addEventListener(
        "click",
        ()=>{
            if(status){
                body.style.color="white";
                body.style.backgroundColor="#333";
                status=false;
                vinculos.forEach(vinculo=>{
                    vinculo.style.color="white";
                });
            }
            else{
                body.style.color="black";
                body.style.backgroundColor="white";
                vinculos.forEach(vinculo=>{
                    vinculo.style.color="black";
                });
                status=true;
            }
        }
    )
}
document.addEventListener(
    "DOMContentLoaded",
    light_dark
)
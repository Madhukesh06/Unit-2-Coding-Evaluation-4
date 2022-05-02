// write js code here corresponding to favourites.html

var favAr=JSON.parse(localStorage.getItem("favourites")) ||[];
displayFunction(favAr)
console.log("hello")

function displayFunction(mAr){
    document.querySelector("tbody").innerHTML="";
    mAr.forEach(function(el,index){
        
        var TR=document.createElement("tr")

        var C1=document.createElement("td")
        var C2=document.createElement("td")
        var C3=document.createElement("td")
        var C4=document.createElement("td")
        var C5=document.createElement("td")
        var C6=document.createElement("td")

        C1.innerText=el.mNum
        C2.innerText=el.teamA
        C3.innerText=el.teamB
        C4.innerText=el.date
        C5.innerText=el.venue
        C6.innerText="Delete"
        C6.style.color="red"
        C6.style.cursor="pointer"

        C6.addEventListener("click",function(){
            deleteFunction(el,index)
        })

        TR.append(C1,C2,C3,C4,C5,C6)

        document.querySelector("tbody").append(TR)

        function deleteFunction(el,index){
            favAr.splice(index,1)
            localStorage.setItem("favourites",JSON.stringify(favAr))
            window.location.reload()
        }  
    })
}
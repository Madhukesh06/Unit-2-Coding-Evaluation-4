// write js code here corresponding to matches.html


//filter by venue
function filterByVenue(){
    var select=document.querySelector("#filterVenue").value;
    var filtered=mAr.filter(function(el){
        return el.venue===select;
    })
    displayFunction(filtered);
}


var mAr=JSON.parse(localStorage.getItem("schedule")) || []
displayFunction(mAr)

var favAr=JSON.parse(localStorage.getItem("favourites")) ||[];

function displayFunction(mAr){

    document.querySelector("tbody").innerHTML="";

    mAr.forEach(function(el){
        
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
        C6.innerText="Favourites"
        C6.style.color="green"
        C6.style.cursor="pointer"
        C6.addEventListener("click",function(){
            addFavourite(el)
        })

        TR.append(C1,C2,C3,C4,C5,C6)

        document.querySelector("tbody").append(TR)
        
        function addFavourite(el){
            favAr.push(el)
            localStorage.setItem("favourites", JSON.stringify(favAr))
            alert("added as favourite")
        }
    })
}


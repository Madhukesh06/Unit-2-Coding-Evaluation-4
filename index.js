// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",submitFunction);

var mAr=JSON.parse(localStorage.getItem("schedule")) || [];

function submitFunction(){
    event.preventDefault();
    var ob={
        mNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamA.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    };
    mAr.push(ob)
    localStorage.setItem("schedule", JSON.stringify(mAr))
}



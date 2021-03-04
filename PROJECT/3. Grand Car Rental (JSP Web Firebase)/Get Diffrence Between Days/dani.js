let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');

let carprice = parseInt(document.getElementById('carprice').value) ;

function myGetTime(selectedDate) {
return parseInt(new Date(selectedDate.value).getTime());
}



function sumdani(){
    const date1Value = myGetTime(date1);
    const date2Value = myGetTime(date2);
   
    
    let diff = date2Value - date1Value;
    let msInDay = 1000 * 3600 * 24;
    
    var resultdani = (diff / msInDay) * carprice;
    if(!isNaN(resultdani)){
        document.getElementById('total').value = resultdani
    }
    else{
        alert('Plese input your date')
    }
    
}




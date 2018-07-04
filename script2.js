var People = [
 {
     "name" : "Rohan Reddy",
     "email": "drohanreddy@gmail.com"
 },
 {
    "name" : "Nikita Sahare",
    "email": "nikitasahare@gmail.com"
 }
]

function loadDataInFormat(numbe){
    var ourdata = JSON.parse(People[numbe]);
    showData(ourdata);

}

function showData(data) {
   var Placetodisplay = document.getElementById("showinfo");
   var htmlString = "";
   htmlString += "<h3> Name :" + data.name + "<h3>";
   Placetodisplay.insertAjacentHTML('beforend',htmlString);

}

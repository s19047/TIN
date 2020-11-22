function addRow(){
  var text = document.getElementById("text").value;
  var row = document.getElementById("table").insertRow(-1);
  var span = document.getElementById("span").value;
  if(span == "")
    span = 3;
    
  var cell = row.insertCell(0);
  cell.innerHTML = text;
  cell.colSpan = span;
}
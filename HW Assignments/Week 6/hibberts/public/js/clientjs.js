  function insertButton(){
  var req = new XMLHttpRequest();
  var input = {input:null};
  input.name = document.getElementById('name').value;
  input.reps = document.getElementById('reps').value;
  input.weight = document.getElementById('weight').value;
  input.date = document.getElementById('date').value;
  input.lbs = document.getElementById('lbs').value;
  req.open("POST", "http://flip3.engr.oregonstate.edu:3978/insert", true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.addEventListener('load',function(){
	if(req.status >= 200 && req.status < 400){
		var response = JSON.parse(req.responseText);
		var table = document.getElementById('myTable');
		for(var i = table.rows.length - 1; i > 0; i--){
			table.deleteRow(i);
		}	
		for (var i = 0; i < response.length; i++){
			var row = table.insertRow(i + 1);
			row.setAttribute("id", response[i].id);
			var cell = row.insertCell(0);
			cell.innerHTML = response[i].name;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(1);
			cell.innerHTML = response[i].reps;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(2);
			cell.innerHTML = response[i].weight;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(3);
			cell.innerHTML = response[i].date;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(4);
			cell.innerHTML = response[i].lbs;
			cell.setAttribute("contenteditable", "true");
			var update = document.createElement("INPUT");
			update.setAttribute("type", "button");
			update.setAttribute("value", "Update");
			update.setAttribute("id", "updateSubmit");
			update.setAttribute("onclick", "updateButton(" +response[i].id+ ")");
			cell = row.insertCell(5);
			cell.appendChild(update);
			
			var deleted = document.createElement("INPUT");
			deleted.setAttribute("type", "button");
			deleted.setAttribute("value", "Delete");
			deleted.setAttribute("id", "deleteSubmit");
			deleted.setAttribute("onclick", "deleteButton(" +response[i].id+ ")");
			cell = row.insertCell(6);
			cell.appendChild(deleted);
			
			var id = document.createElement("INPUT");
			id.setAttribute("type", "hidden");
			id.setAttribute("value", response[i].id);
			cell = row.insertCell(6);
			cell.appendChild(id);
		}	
	} else {
		console.log("Error in network request: " + req.statusText);
	}
  });
  var data = JSON.stringify(input);
  req.send(data);
  event.preventDefault(); 
 } 
 
function deleteButton(rowID){
  var req = new XMLHttpRequest();
  var input = {input:null};
  input.id = rowID;
  req.open('POST', 'http://flip3.engr.oregonstate.edu:3978/delete', true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.addEventListener('load',function(){
	if(req.status >= 200 && req.status < 400){
		var response = JSON.parse(req.responseText);
		var table = document.getElementById('myTable');
		for(var i = table.rows.length - 1; i > 0; i--){
			table.deleteRow(i);
		}	
		for (var i = 0; i < response.length; i++){
			var row = table.insertRow(i + 1);
			row.setAttribute("id", response[i].id);
			var cell = row.insertCell(0);
			cell.innerHTML = response[i].name;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(1);
			cell.innerHTML = response[i].reps;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(2);
			cell.innerHTML = response[i].weight;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(3);
			cell.innerHTML = response[i].date;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(4);
			cell.innerHTML = response[i].lbs;
			cell.setAttribute("contenteditable", "true");
			var update = document.createElement("INPUT");
			update.setAttribute("type", "button");
			update.setAttribute("value", "Update");
			update.setAttribute("id", "updateSubmit");
			update.setAttribute("onclick", "updateButton(" +response[i].id+ ")");
			cell = row.insertCell(5);
			cell.appendChild(update);
			var deleted = document.createElement("INPUT");
			deleted.setAttribute("type", "button");
			deleted.setAttribute("value", "Delete");
			deleted.setAttribute("id", "deleteSubmit");
			deleted.setAttribute("onclick", "deleteButton(" +response[i].id+ ")");
			cell = row.insertCell(6);
			cell.appendChild(deleted);
			var id = document.createElement("INPUT");
			id.setAttribute("type", "hidden");
			id.setAttribute("value", response[i].id);
			cell = row.insertCell(6);
			cell.appendChild(id);
		}	
	} else {
		console.log("Error in network request: " + req.statusText);
	}
  });
  var data = JSON.stringify(input);
  req.send(data);
  event.preventDefault(); 
}
 
 function updateButton(rowID){
  var req = new XMLHttpRequest();
  var input = {input:null};
  var row = document.getElementById(rowID);
  input.id = rowID;
  input.name = row.cells[0].innerText;
  input.reps = row.cells[1].innerText;
  input.weight = row.cells[2].innerText;
  input.date = row.cells[3].innerText;
  input.lbs = row.cells[4].innerText;
  req.open("POST", "http://flip3.engr.oregonstate.edu:3978/update", true);
  req.setRequestHeader('Content-Type', 'application/json');
  req.addEventListener('load',function(){
	if(req.status >= 200 && req.status < 400){
		var response = JSON.parse(req.responseText);
		var table = document.getElementById('myTable');
		
		for(var i = table.rows.length - 1; i > 0; i--){
			table.deleteRow(i);
		}	
		for (var i = 0; i < response.length; i++){
			var row = table.insertRow(i + 1);
			row.setAttribute("id", response[i].id);
			var cell = row.insertCell(0);
			cell.innerHTML = response[i].name;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(1);
			cell.innerHTML = response[i].reps;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(2);
			cell.innerHTML = response[i].weight;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(3);
			cell.innerHTML = response[i].date;
			cell.setAttribute("contenteditable", "true");
			cell = row.insertCell(4);
			cell.innerHTML = response[i].lbs;
			cell.setAttribute("contenteditable", "true");
			var update = document.createElement("INPUT");
			update.setAttribute("type", "button");
			update.setAttribute("value", "Update");
			update.setAttribute("id", "updateSubmit");
			update.setAttribute("onclick", "updateButton(" +response[i].id+ ")");
			cell = row.insertCell(5);
			cell.appendChild(update);
			
			var deleted = document.createElement("INPUT");
			deleted.setAttribute("type", "button");
			deleted.setAttribute("value", "Delete");
			deleted.setAttribute("id", "deleteSubmit");
			deleted.setAttribute("onclick", "deleteButton(" +response[i].id+ ")");
			cell = row.insertCell(6);
			cell.appendChild(deleted);
			
			var id = document.createElement("INPUT");
			id.setAttribute("type", "hidden");
			id.setAttribute("value", response[i].id);
			cell = row.insertCell(6);
			cell.appendChild(id);
		}	
	} else {
		console.log("Error in network request: " + req.statusText);
	}
  });
  var data = JSON.stringify(input);
  req.send(data);
  event.preventDefault(); 
}
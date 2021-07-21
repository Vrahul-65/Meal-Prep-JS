var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var searchItem = document.getElementById("search");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
searchItem.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  var value = document.getElementById("item").value;

  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode('🍴' + value ));

  var newBtn = document.createElement("button");
  newBtn.className = "btn btn-danger btn-sm float-right myStyle remove";


  newBtn.appendChild(document.createTextNode("X"));

  li.appendChild(newBtn);
  itemList.appendChild(li);

}

function removeItem(e) {
  if (e.target.classList.contains('remove')) {
    if (confirm("are you sure bro?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var listItems = document.getElementsByTagName("li");

  Array.from(listItems).forEach(function(value) {
    var item = value.firstChild.textContent;

    console.log(item);

    if (item.toLowerCase().indexOf(text) != -1) {
      value.style.display = "block";
      console.log(value);
    }
    else {
      value.style.display = "none";
    }



  });

}

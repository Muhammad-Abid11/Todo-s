
press = (a) => {
    if (a.value === '') {
        alert('Please Enter');
    } else {

        var inputValues = document.getElementById("inputValue").value;
        var list = document.getElementById("list");
        var li = document.createElement("li");
        var t = document.createTextNode(inputValues);
        li.appendChild(t);

        var delBtn = document.createElement("button");
        var delText = document.createTextNode("Delete");
        delBtn.setAttribute("class", "btn");
        delBtn.setAttribute("onclick", "deleteItem(this)");
        delBtn.appendChild(delText);
        li.appendChild(delBtn);
        list.appendChild(li);

        var editBtn = document.createElement("button");
        var editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        li.appendChild(editBtn);
        editBtn.setAttribute("class", "btn");
        editBtn.setAttribute("onclick", "editIt(this)");



        document.getElementById("inputValue").value = "";
        // inputValues.innerHTML = "";


        deleteAllItem = () => {
            list.innerHTML = "";
        }
        deleteItem = (e) => {
            // console.log(e);
            e.parentNode.remove()
        }
        editIt = (e) => {
            // console.log(e.parentNode.childNodes[0]);
            // console.log(e.parentNode.firstChild);
            var editValue = prompt("Enter New Value", e.parentNode.firstChild.nodeValue);
            e.parentNode.firstChild.nodeValue = editValue

        }

    }
}


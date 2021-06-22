var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData(){
    var formData={};
    formData["fullName"]=document.getElementById("fullName").value;
    formData["mobile"]=document.getElementById("mobile").value;
    formData["address"]=document.getElementById("address").value;
    formData["fees"]=document.getElementById("fees").value;
    return formData;
}

function insertNewRecord(data) {
    
    var table = document.getElementById("patientData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var b=3*data.fees;
    // function foo() {
        alert("Total Bill is "+b+"\nCheck your RMN");
        alert("Gpay confirmed your payment of "+b);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mobile;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = 3*data.fees;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a class="button" onClick="onEdit(this)">Edit</a>
                       <a class="button" onClick="onDelete(this)">Delete/Repay</a>`;
                      
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("address").value = "";
    document.getElementById("fees").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fees").value = selectedRow.cells[3].innerHTML/3;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.mobile;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = 3*formData.fees;
    var a=3*formData.fees;
    // function foo() {
        alert("Updated Bill is "+a+"\nCheck your RMN");
        alert("Gpay confirmed your payment of "+a);
        // return true;
    //  }
}
function onDelete(td) {
    
    if (confirm('Are you sure to delete this record ?')) {
        alert("Payement Refunded");
        row = td.parentElement.parentElement;
        document.getElementById("patientData").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function foo() {
    alert("Data Submitted");
    return true;
 }

 function gen() {
    alert("Bill generated");
    return true;
 }
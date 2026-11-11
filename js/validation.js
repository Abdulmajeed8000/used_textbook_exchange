function checkRequired(fieldId, errorId) {
    var fieldValue = document.getElementById(fieldId).value;

    if (fieldValue == "") {
        showError(fieldId, errorId, "هذا الحقل مطلوب");
        return false;
    } else {
        clearError(fieldId, errorId);
        return true;
    }
}

function showError(fieldId, errorId, message) {
    var fieldStyle = document.getElementById(fieldId).style;
    var errorElement = document.getElementById(errorId);

    fieldStyle.backgroundColor = "#fdecea";
    fieldStyle.borderColor = "#c0392b";

    errorElement.innerHTML = message;
}


function clearError(fieldId, errorId) {
    var fieldStyle = document.getElementById(fieldId).style;
    var errorElement = document.getElementById(errorId);

    fieldStyle.backgroundColor = "#ffffff";
    fieldStyle.borderColor = "#ccc";

    errorElement.innerHTML = "";
}
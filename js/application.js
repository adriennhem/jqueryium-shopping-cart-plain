$(window).ready(function() {


var createButton = $('#createButton');
var itemName = $('#itemName');
var itemPrice = $('#itemPrice');
var count = 0;

// add item
createButton.on('click', function() {
    if (itemName.val() != '' && itemPrice.val() != '') {
        count++;
        var newItem = $(`<tr data-item=${count}>
                            <td>${itemName.val()}</td>
                            <td>$ ${itemPrice.val()}</td>
                            <td>
                                <strong>QTY</strong>
                                <input class='itemQuantity' type="text">
                                <button class='cancelButton' data-item=${count}>Cancel</button>
                            </td>
                        </tr>`)
        $('#inputRow').before(newItem);
    }
});

// delete item
$(document).on('click', '.cancelButton', function() {
    var itemId = $(this).attr('data-item');
    $(`tr[data-item=${itemId}]`).remove();
});



});
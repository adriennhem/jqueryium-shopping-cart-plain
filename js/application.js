$(window).ready(function() {

// useful variables
var createButton = $('#createButton');
var itemName = $('#itemName');
var itemPrice = $('#itemPrice');
var count = 0;

// add item
createButton.on('click', function() {
    if (itemName.val() != '' && itemPrice.val() != '') {
        count++;
        var newItem = $(`<tr data-item=${count}>
                            <td class='itemName'>${itemName.val()}</td>
                            <td class='itemPrice'>$ <span>${itemPrice.val()}</span></td>
                            <td>
                                <strong>QTY</strong>
                                <input class='itemQuantity' data-item=${count} type="text">
                                <button class='cancelButton' data-item=${count}>Cancel</button>
                            </td>
                            <td class='itemSubtotal'>$ <span>${itemPrice.val()}</span></td>
                        </tr>`)
        $('#inputRow').before(newItem);
    }
});

// delete item
$(document).on('click', '.cancelButton', function() {
    var itemId = $(this).attr('data-item');
    $(`tr[data-item=${itemId}]`).remove();
});


// calculate subtotal for items
$(document).on('change', 'input.itemQuantity', function() {
    var quantity = Number($(this).val());
    var itemId = $(this).attr('data-item');
    var price = $(`tr[data-item=${itemId}] td.itemPrice span`).text();
    price = parseFloat(price);
    var itemSubtotal = quantity * price;
    $(`tr[data-item=${itemId}] td.itemSubtotal span`).text(itemSubtotal);
});


// calculate total price
$(document).on('click', '.btn-success', function() {
   var totalPrice = $('.itemSubtotal span').map(function(index, element) {
        return Number($(this).text());
    }).get().reduce((a, b) => a + b);

    $('#totalPrice').text(`$ ${totalPrice}`);
});


});
var messageCount = $('p').length;

console.log(messageCount)

$('#compteur').text(messageCount);

// capture poubelle

$('body').on("click", '.trash',
    function() {
        $(this).parent().remove();
        var messageCount = $('p').length;
        $('#compteur').text(messageCount);
})

$('#btn-add').click(function() {
    var newMessageText = $("#text-input").val();
    $('body').append(
        `<div class="row">
        <img class="avatar" src="avatar-1.jpg">
        <div>
            <h6>Britney</h6>
            <p>${newMessageText}</p>
        </div>
        <img class="trash" src="trash.png" alt="poubelle">
    </div>`
    )

    $("#text-input").val('');

    var messageCount = $('p').length;
    $('#compteur').text(messageCount);

}
)

$('#btn-search').click(function() {
    $('h6').each( function() {
        if ($(this).text()!== $('#search-txt').val()) {
            $(this).parent().parent().hide();
        }
        else {
            $(this).parent().parent().show();
        }
    }    
    )
})





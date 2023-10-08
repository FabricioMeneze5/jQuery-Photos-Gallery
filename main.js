$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#button-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const newImageAddress = $('#address-new-image').val();
        const newItem = $('<li style="display:none;"></li>');
        $(`<img src="${newImageAddress}" />`).appendTo(newItem);
        $(`
            <div class="overlay-image-link">
                <a href="${newImageAddress}" target="_blank" title="View full size image">
                View full size image
                </a>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#address-new-image').val('');
    })
})
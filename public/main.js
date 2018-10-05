$(document).ready(function(){
    $('#ajax_form button').click(function(event){
        event.preventDefault();

        $.ajax({
            method: 'get',
            url: './ajax_data',
            data: {
                fname: $("#ajax_form input[name='fname']").val(),
                lname: $("#ajax_form input[name='lname']").val()
            },
            success: function(data){
                $('#ajax_content').text(data);
            }
        })
    })
})
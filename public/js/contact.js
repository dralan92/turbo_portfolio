
        (function(){
            console.log('HELLO!')
            $('#btn-contact-submit').click(function(event){
                
                if(event)
                    event.preventDefault()
                
                var visitor = {
                    name: $('#contact-form-name').val(),
                    email: $('#contact-form-name').val(),
                    message: $('#contact-form-name').val()
                }

                console.log(JSON.stringify(visitor))
                $.ajax({
                    url: '/api/subscriber',
                    type: 'POST',
                    data: visitor,
                    success: function(){
                        console.log('SUB CREATED:' + JSON.stringify(visitor))
                    },
                    error: function(){

                    }
                })
            })
        })()

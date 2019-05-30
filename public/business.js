function hideAll() {
    $('#signInSection').hide();
    $('#signUpSection').hide();
    $('#registration').hide();
    $('#seller').hide();
    $('#technical').hide();
    $('#manager').hide();
}

function show
$(document).ready(() => {
    hideAll();
    $('#signInSection').show();

    //login session
    $('#signUpBtn').click(function (){
        hideAll();
        $('#signUpSection').show();
    })

    //sign up session
    $('#cancelButton').click(function (){
        hideAll();
        $('#signInSection').show();
    })
    $('#signUpButton1').click(function (){
        hideAll();
        $('#signInSection').show();
    })
    
})
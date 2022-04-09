
//creer variable initialise messagesCount et compte les class name

let messagesCount = $('.trash').length;

console.log (messagesCount);
$('#count').text(` vous avez ${messagesCount} messages`
);
// affecte la valeur messagesCount à html id='count'
// initialise le compteur (devrait être à la fin?)

// met un écouteur click sur chaque poubelle, remove la div parentNode (.parent), 
//met à jour le compteur ??

$('.trash').click(
    function(){
        $(this).parent().remove();
        messagesCount=messagesCount-1;
        $('#count').text(
        `tu as ${ messagesCount }  messages`)
    }
);


// sur click bouton add ajout d'une nouvelle div

$('#btn-add').click(
    function(){

        var newMessage = $('#add-message').val();

    $('body').append(`
    <div class="row last-row">
        <img class="avatar" src="avatar-5.jpg">
        <div>
            <h6>Lady Gaga</h6>
            <p>${newMessage}</p>
        </div>
        <img class="trash" src="trash.png">
    </div>`
);

    messagesCount = $('.trash').length;
    console.log (messagesCount);
        $('#count').text
        (
        ` vous avez ${messagesCount} messages`
        //remet à jour le compteur
        );


    }
    )
;

    //reinitialise le champ de saisie
        document.getElementById('add-message').value = "";
        
     

        
       
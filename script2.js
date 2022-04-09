
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
    var mainDiv = document.createElement("div");
        mainDiv.className = "row";
        document.body.appendChild(mainDiv);

    var image = document.createElement("img");
        image.className = "avatar";
        image.src = "avatar-1.jpg";
        mainDiv.appendChild(image);
    
    var nameMessageDiv = document.createElement("div");
        mainDiv.appendChild(nameMessageDiv);

    var h6 = document.createElement('h6');
        h6.textContent = "Eric Dupont";
        nameMessageDiv.appendChild(h6);

    var content = document.createElement('p');
        content.textContent = document.getElementById('add-message').value;
        nameMessageDiv.appendChild(content);

    var trash = document.createElement('img');
    trash.src = "trash.png";
    trash.className = "trash";
    mainDiv.appendChild(trash);
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
        
     

        
       
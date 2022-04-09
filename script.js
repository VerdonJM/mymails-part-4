
//creer variable initialise messagesCount et compte les class name
// affecte la valeur messagesCount à html id='count'
var messagesCount = document.getElementsByTagName('p').length;
document.getElementById('count').textContent = messagesCount;


// met un écouteur click sur chaque poubelle, remove la div parentNode, 
//met à jour le compteur
for(var i=0; i<document.getElementsByClassName('trash').length; i++){
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function(){
        this.parentNode.remove();
        var messagesCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messagesCount;
    }
    )

}
// bouton add ajout d'un écouteur, et d'une nouvelle div
document.getElementById('btn-add').addEventListener("click",
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
            h6.textContent = "Jean-Marc Paris";
            nameMessageDiv.appendChild(h6);

        var content = document.createElement('p');
            content.textContent = document.getElementById('add-message').value;
            nameMessageDiv.appendChild(content);

        var trash = document.createElement('img');
        trash.src = "trash.png";
        trash.className = "trash";
        mainDiv.appendChild(trash);

        document.getElementById('add-message').value = "";
        // remet à jour le compteur
        var messagesCount = document.getElementsByTagName('p').length;
        document.getElementById('count').textContent = messagesCount;

        //sur click poubelle supprime le parent de la poubelle et remet à jour 
        // le compteur 
        trash.addEventListener("click", 
            function(){
                this.parentNode.remove();
                var messagesCount = document.getElementsByTagName('p').length;
                document.getElementById('count').textContent = messagesCount;

            }
        )
    }
)
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');

var followersPublic = document.getElementById('followersPublic');
var followingPublic = document.getElementById('followingPublic');

var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];

followersPublic.onclick= function(){
    modal4.style.display = "block";
}

followingPublic.onclick= function(){
    modal5.style.display = "block";
}

span4.onclick = function() {
    modal4.style.display = "none";
}

span5.onclick = function() {
    modal5.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    } else if (event.target == modal5) {
    	modal5.style.display = "none";
    }
}
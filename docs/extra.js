window.onload = function() {
    var anchors = document.getElementsByTagName('img');
    for(var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {
            window.open(this.src);
        }
    }
}
window.onload = function() {
    var anchors = document.getElementsByTagName('img');
    for(var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {
            window.open(this.src);
        }
    }

    document.getElementById("isetta-logo").onclick = null;
		
    var anchors = document.getElementsByClassName('video-wrapper');
    for(var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {
            window.open(this.getElementsByTagName('source')[0].src);
        }
    }

    var scrollToTops = document.getElementsByClassName("back_to_top");
    for(var i = 0; i < scrollToTops.length; i++) {
        scrollToTops[i].onclick = function() {
            document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
    }
}
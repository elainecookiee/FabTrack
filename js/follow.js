$('.follow').click(function(){
    var $this = $(this);
    $this.toggleClass('follow');
    if($this.hasClass('follow')){
        $this.html('Follow');
        $this.css("background-color", "white"); 
        $this.css("color", "grey");     
    } else {
        $this.html('Following');
        $this.css("background-color", "grey");
        $this.css("color", "white");
    }
});
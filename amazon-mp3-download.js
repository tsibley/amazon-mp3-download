(function($){
    var songs = $(".songList tbody input[type=checkbox][itemtype=song]");
    var queue = songs.toArray();

    function downloadOneSong(){
        if (!queue.length) return;

        songs.each(function(i,s){
            if (s.checked)
                s.click()
        });

        var song = queue.shift();
        song.click();

        setTimeout(function(){
            $(".downloadButton").get(0).click();
            setTimeout(downloadOneSong, 2000);
        }, 1000);
    }

    downloadOneSong();
})(jQuery);

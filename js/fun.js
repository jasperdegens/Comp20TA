function canadia() {
    $('#canada').on('mouseenter', function() {
        $('#flag').show();
        var song = document.getElementById('canadaSong');
        song.play()
    }).on('mouseleave', function() {
        $('#flag').hide();
        var song = document.getElementById('canadaSong');
        song.pause();
    });
}

$(function() {
    canadia();
});

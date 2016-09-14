/*Nina Kong*/
$(document).ready(function(){
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $("#add").click(function(event) {
        $(".Content p").addClass("paraClass");
    });

    $('#show').click(function() {
        $('.displayPart').show('slow');
    });
    $('#hide').click(function() {
        $('.displayPart').hide(1500, 'linear');
    });
    $('#toggle').click(function() {
        $('.displayPart').toggle('fast', done);
    });
    function done() {
        $(this).text('Finished.');
    }
});

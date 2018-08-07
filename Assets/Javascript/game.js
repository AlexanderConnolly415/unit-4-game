<script>

var numLosses = 0;
var numWins = 0;
var YourScore = 0;
var UserTotal = 0;
var numbertoMatch = random_result;

    $(".crystals").empty(); 

    random_result = Math.floor(Math.random() * 69 ) + 30;

    $("#result").html('Random Result: ' + random_result);
    
    for(var i = 0; i < 3; i++);{
    
        var random_result = Math.floor(math.random() * 11) + 1; 
        console.log(random);
        };
    
        var crystal = $("<div>");
        crystal.attr({
            "class":'crystal',
            "data-random":random,
        });
    
        $(".crystals".append(crystal);



    $(".crystal").attr('class');

    <input type= "btn1" value="img src= assets/images/bluecrystal.jpg">
    <input type= "btn2" value="img src= assets/images/redcrystal.jpg">
    <input type= "btn3" value="img src= assets/images/greencrystal.jpg">
    <input type= "btn4" value="img src= assets/images/yellowcrystal.jpg">
    
    </input>

});

$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    console.log(previous);

    if(UserTotal > random_result){

        numLosses++;
        
        $("#numLosses").html(lost);

        previous = 0;

        StartGame();
    }

    else if(UserTotal === random_result){

        numWins++};

        $("#numWins").html(numWins);

        previous = 0;

        StartGame();
    }


$(".crystal").on('click', function () {

    var num = parseInt($(this).attr('data-random'));

    console.log($(this));

});

    crystal.html(random);

$(".crystals").append(crystal);

$(".crystal").on('click', function () {

    $("previous").html("Total score: " + previous);

    console.log(previous);


    }

});
});

</script>
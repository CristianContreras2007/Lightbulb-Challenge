function Switch() {
    var image = document.getElementById('Lightbulb'); 
    if(image.src.match("BULB03")) {
     image.src = "https://d29fhpw069ctt2.cloudfront.net/clipart/image/104351/BULB01.png"; 
    } else{
     image.src = "https://d29fhpw069ctt2.cloudfront.net/clipart/image/106294/BULB03.png";
    }
 }
     
window.onload = function(){
  if (document.getElementById('marqueeForAll')) {
    var marquee = '1000px';
    var marqueeWidth = document.getElementById('marqueeForAll');
    marqueeWidth.style.left = '1000px';
    var totalWidth = document.getElementById('marqueeForAll').offsetWidth;

    setInterval(function(){
      if (parseInt(marqueeWidth.style.left)>(totalWidth*(-1))) {
      marqueeWidth.style.left = parseInt(marqueeWidth.style.left)-2+"px";
    } else {
      marqueeWidth.style.left = parseInt(marquee)-5+"px";
    }
    }, 30);
  }
};

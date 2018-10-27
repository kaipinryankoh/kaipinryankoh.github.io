function myFunction() {
  var scene = document.getElementById('scene')
  /* if (scene.classList.contains('scenic')) {
    reset()
    scene.value = "Click Me"
  } else { */
    scene.classList.add('scenic')
    var time = getComputedStyle(document.querySelector('.scenic')).animationDuration
    time = parseInt(time) * 1000
    setTimeout(function(){ reset() }, time);
  }
//}

function reset() {
  document.getElementById('scene').classList.remove('scenic')
}
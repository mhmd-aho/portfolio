    let img = document.getElementById('myPic');
    let info = document.getElementById('info');
    img.onmouseover = () => {
        info.style.visibility = "visible";
        img.style.filter = 'grayscale(0)'
    }
    img.onmouseout = () =>{
      info.style.visibility = "hidden"
    }
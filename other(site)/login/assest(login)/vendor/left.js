const images = document.querySelectorAll('.left_img');
let idx = 0; 

function slide() {
  images.forEach(img => {
    img.style.display = 'none'; 
  });
  
  idx++;
  if(idx >= images.length) idx = 0;
  
  images[idx].style.display = 'block';
}

setInterval(slide, 2000); // Thay đổi thời gian chuyển slide (ms)
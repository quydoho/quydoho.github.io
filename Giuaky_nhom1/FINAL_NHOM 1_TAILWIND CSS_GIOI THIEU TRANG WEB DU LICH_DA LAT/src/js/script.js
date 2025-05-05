document.addEventListener('DOMContentLoaded', () => {
  function adjustLayout() {
    const body = document.querySelector('body');
    const width = window.innerWidth;
    
    if (width < 768) {
      // Thiết bị di động
      body.classList.add('mobile');
      body.classList.remove('tablet', 'desktop');
    } else if (width < 1024) {
      // Máy tính bảng
      body.classList.add('tablet');
      body.classList.remove('mobile', 'desktop');
    } else {
      // Màn hình máy tính để bàn
      body.classList.add('desktop');
      body.classList.remove('mobile', 'tablet');
    }
  }
  
  adjustLayout();
  window.addEventListener('resize', adjustLayout);
});
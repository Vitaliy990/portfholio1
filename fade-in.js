document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav.sidebar ul li a');
    const contentItems = document.querySelectorAll('.content-item');
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); 
  
        contentItems.forEach(item => {
          if(item.dataset.id === targetId){
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      });
    });
  });
  
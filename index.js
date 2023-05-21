var darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('change', function() {
      var body = document.body;
      
      if (darkModeToggle.checked) {
        // Set dark background
        body.style.backgroundColor = ' black';
        body.style.color = 'white';
      } else {
        // Set default background
        body.style.backgroundColor = '#f4f4f5';
        body.style.color = '';
      }
    });

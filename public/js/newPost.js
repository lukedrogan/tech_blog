const blogPostHandler = async (event) => {
    event.preventDefault();
  
    const blogtitle = document.querySelector('#blog-title').value.trim();
    const blogtext = document.querySelector('#blog-text').value.trim();
      
    if (blogtitle && blogtext) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ blogtitle, blogtext }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.new-post-div')
    .addEventListener('submit', blogPostHandler);
  
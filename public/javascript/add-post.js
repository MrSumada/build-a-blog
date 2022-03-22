async function addPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const blog_text = document.querySelector('input[name="blog-text"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            blog_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {z
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', addPostHandler);
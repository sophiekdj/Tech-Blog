const commentFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new post form
  const postId = document.querySelector('input[name="post-id"]').value.trim();
  const content = document
    .querySelector('textarea[name="comment-content"]')
    .value.trim();

  if (content) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ postId, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentFormHandler);

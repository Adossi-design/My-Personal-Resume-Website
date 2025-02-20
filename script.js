// Toggle mobile navbar
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active'); // Toggle the 'active' class
});

// Show More Button
const showMoreBtn = document.getElementById('show-more-btn');
const moreDetails = document.getElementById('more-details');

showMoreBtn.addEventListener('click', () => {
  moreDetails.classList.toggle('hidden'); // Toggle visibility of more details
  showMoreBtn.textContent = moreDetails.classList.contains('hidden') ? 'Show More' : 'Show Less';
});

// Comment Section
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');
const showCommentsLink = document.getElementById('show-comments-link');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById('comment-name').value;
  const text = document.getElementById('comment-text').value;

  if (name && text) {
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `<strong>${name}:</strong> ${text}`;
    commentList.appendChild(commentItem);

    // Clear the form
    commentForm.reset();
  } else {
    alert('Please fill out both fields.');
  }
});

// Show/Hide Comments
showCommentsLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent link from navigating
  commentList.classList.toggle('hidden'); // Toggle visibility of comments
  showCommentsLink.textContent = commentList.classList.contains('hidden') ? 'Show Comments' : 'Hide Comments';
});
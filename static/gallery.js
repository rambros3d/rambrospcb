// Gallery Modal/Lightbox with Navigation
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('gallery-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalLink = document.getElementById('modal-link');
  const closeBtn = document.querySelector('.modal-close');
  const prevBtn = document.querySelector('.modal-prev');
  const nextBtn = document.querySelector('.modal-next');

  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;

  // Update modal content
  function updateModal(index) {
    const item = galleryItems[index];
    const image = item.querySelector('.gallery-image');

    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalTitle.textContent = item.dataset.title;
    modalDescription.textContent = item.dataset.description;
    modalLink.href = item.dataset.url;

    currentIndex = index;
  }

  // Open modal when gallery image is clicked
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      updateModal(index);
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Navigate to previous project
  prevBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateModal(newIndex);
  });

  // Navigate to next project
  nextBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % galleryItems.length;
    updateModal(newIndex);
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      updateModal(newIndex);
    } else if (e.key === 'ArrowRight') {
      const newIndex = (currentIndex + 1) % galleryItems.length;
      updateModal(newIndex);
    }
  });
});

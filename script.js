function openModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeModalOutside(event, id) {
  const modal = document.getElementById('modal-' + id);
  if (event.target === modal) {
    closeModal(id);
  }
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(function(modal) {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

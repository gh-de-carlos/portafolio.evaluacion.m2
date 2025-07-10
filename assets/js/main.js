"use strict"
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('.card').on('click', '.card-body', function () {
  const card = $(this).closest('.card');
  card.toggleClass('active');
});

$('.card').on('mouseleave', function () {
  $(this).removeClass('active');
});

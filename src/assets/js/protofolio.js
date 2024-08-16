function WorkWithUs() {
  alert("Thank you for your interest! We'll get in touch soon.");
}
document.querySelector('.work-section').addEventListener('mouseenter', () => {
  document.querySelector('.work-content').classList.add('hovered');
});
document.querySelector('.work-section').addEventListener('mouseleave', () => {
  document.querySelector('.work-content').classList.remove('hovered');
});
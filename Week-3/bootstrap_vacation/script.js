
 // When the page is loaded
document.addEventListener("DOMContentLoaded", function () {
   // Show the Modal when the "Send a message" button is clicked
   document.getElementById("showModalBtn").addEventListener("click", function () {
     $("#contact-modal").modal("show");
   });
 
   // When the "Send message" button in the Modal is clicked
   document.getElementById("sendMessageBtn").addEventListener("click", function () {
     // Hide the Modal
     $("#contact-modal").modal("hide");
     // Show the Alert
     document.getElementById("conf-alert").classList.remove("collapse");
   });
 });
 
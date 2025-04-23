// js/script.js

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const registeredPatients = document.getElementById('registeredPatients');
  
    if (registerForm) {
      registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
  
        const patient = { name, age, gender, email, contact };
        let patients = JSON.parse(localStorage.getItem('patients')) || [];
  
        patients.push(patient);
        localStorage.setItem('patients', JSON.stringify(patients));
  
        alert('Patient Registered Successfully!');
        registerForm.reset();
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const doctor = form.doctor.value;
    const date = form.date.value;
    const message = form.message.value.trim();

    if (!name || !email || !phone || !doctor || !date) {
      alert("Please fill in all required fields!");
      return;
    }

    alert(`✅ Appointment booked with ${doctor} on ${date}!\nThank you, ${name}.`);
    form.reset();
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all the fields!");
        return;
      }
  
      alert(`✅ Your message has been sent!\nThank you, ${name}. We'll get back to you soon.`);
      contactForm.reset();
    });
  });
  

  // Search doctor feature
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
  
    if (searchBar) {
      searchBar.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const cards = document.querySelectorAll(".doctor-card");
  
        cards.forEach(card => {
          const text = card.innerText.toLowerCase();
          card.style.display = text.includes(query) ? "block" : "none";
        });
      });
    }
  });
 
  


  const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

var _a, _b;
// Function to toggle the visibility of the Skills section
function toggleSkills() {
    var skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        // Toggling the display between 'block' and 'none'
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
}
// Function to show/hide contact information
function toggleContact() {
    var contactSection = document.querySelector('.contact-info');
    if (contactSection) {
        // Toggling the display between 'block' and 'none'
        contactSection.style.display = contactSection.style.display === 'none' ? 'block' : 'none';
    }
}
// Adding event listeners to buttons
(_a = document.getElementById('toggle-skills-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', toggleSkills);
(_b = document.getElementById('toggle-contact-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', toggleContact);

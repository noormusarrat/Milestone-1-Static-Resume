// Function to toggle the visibility of the Skills section
function toggleSkills(): void {
    const skillsSection = document.getElementById('skills-section') as HTMLElement | null;
    if (skillsSection) {
        // Toggling the display between 'block' and 'none'
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to show/hide contact information
function toggleContact(): void {
    const contactSection = document.querySelector('.contact-info') as HTMLElement | null;
    if (contactSection) {
        // Toggling the display between 'block' and 'none'
        contactSection.style.display = contactSection.style.display === 'none' ? 'block' : 'none';
    }
}

// Adding event listeners to buttons
document.getElementById('toggle-skills-btn')?.addEventListener('click', toggleSkills);
document.getElementById('toggle-contact-btn')?.addEventListener('click', toggleContact);

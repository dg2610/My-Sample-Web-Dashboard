// Function to scroll to a section by its ID
function scrollToSection(sectionId) {
    console.log('Scrolling to section:', sectionId); // Add this line for debugging
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('Section not found:', sectionId); // Add this line for debugging
    }
}

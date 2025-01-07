// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website initialized');
    
    // Initialize recipe search
    initializeSearch();
    
    // Initialize recipe cards
    initializeRecipeCards();
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            // Get form data
            const formData = new FormData(contactForm);
            const formDetails = {};
            formData.forEach((value, key) => {
                formDetails[key] = value;
            });
            
            console.log('Form details:', formDetails);
            
            // Show success message (you can customize this)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    initializeDarkMode();
});

function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            console.log('Searching for:', e.target.value);
            // Add search logic here
        });
    }
}

function initializeRecipeCards() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log('Recipe card clicked:', card.querySelector('h3').textContent);
            // Add card click handling logic
        });
    });
}

// Recipe rating system
function rateRecipe(rating) {
    console.log('Recipe rated:', rating);
    // Add rating logic here
}

// Share recipe functionality
function shareRecipe(recipeId) {
    console.log('Sharing recipe:', recipeId);
    // Add sharing logic here
}

function initializeRecipeFilters() {
    console.log('Initializing recipe filters');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Filter clicked:', btn.dataset.filter);
            
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            
            recipeCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Add search functionality
function initializeSearch() {
    console.log('Initializing search functionality');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        console.log('Searching for:', searchTerm);

        recipeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Initialize all recipe page functionality
if (document.querySelector('.recipe-search')) {
    initializeRecipeFilters();
    initializeSearch();
}

// Dark Mode Functionality
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        console.log('Theme switched to:', newTheme);
    });
} 
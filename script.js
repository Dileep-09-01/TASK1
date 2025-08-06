// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and display elements
    const recommendationBtn = document.getElementById('recommendation-btn');
    const recommendationDisplay = document.getElementById('recommendation-display');
    
    // Array of recommendations (books and movies)
    const recommendations = [
        {
            title: "The Great Gatsby",
            type: "Book",
            author: "F. Scott Fitzgerald",
            description: "A classic American novel about the Jazz Age and the American Dream.",
            emoji: "📚"
        },
        {
            title: "1984",
            type: "Book", 
            author: "George Orwell",
            description: "A dystopian novel about totalitarianism and surveillance society.",
            emoji: "📚"
        },
        {
            title: "To Kill a Mockingbird",
            type: "Book",
            author: "Harper Lee", 
            description: "A powerful story about racial injustice and growing up in the American South.",
            emoji: "📚"
        },
        {
            title: "The Shawshank Redemption",
            type: "Movie",
            author: "Frank Darabont",
            description: "A story of hope and friendship in the face of adversity.",
            emoji: "🎬"
        },
        {
            title: "Inception",
            type: "Movie",
            author: "Christopher Nolan",
            description: "A mind-bending thriller about dreams within dreams.",
            emoji: "🎬"
        },
        {
            title: "The Dark Knight",
            type: "Movie",
            author: "Christopher Nolan",
            description: "A masterpiece of superhero cinema with complex themes.",
            emoji: "🎬"
        }
    ];
    
    // Add click event listener to the button
    recommendationBtn.addEventListener('click', function() {
        // Get a random recommendation
        const randomRecommendation = getRandomRecommendation();
        
        // Display the recommendation
        displayRecommendation(randomRecommendation);
        
        // Add a fun animation effect
        animateButton();
    });
    
    // Function to get a random recommendation
    function getRandomRecommendation() {
        const randomIndex = Math.floor(Math.random() * recommendations.length);
        return recommendations[randomIndex];
    }
    
    // Function to display the recommendation
    function displayRecommendation(recommendation) {
        // Create the recommendation HTML
        const recommendationHTML = `
            <div class="recommendation-content">
                <h3>${recommendation.emoji} ${recommendation.title}</h3>
                <p><strong>Type:</strong> ${recommendation.type}</p>
                <p><strong>${recommendation.type === 'Book' ? 'Author' : 'Director'}:</strong> ${recommendation.author}</p>
                <p><strong>Description:</strong> ${recommendation.description}</p>
                <p class="recommendation-message">🎉 This is one of my absolute favorites! You should definitely check it out!</p>
            </div>
        `;
        
        // Update the display
        recommendationDisplay.innerHTML = recommendationHTML;
        
        // Show the display with animation
        recommendationDisplay.classList.add('show');
        
        // Hide the display after 5 seconds
        setTimeout(() => {
            recommendationDisplay.classList.remove('show');
        }, 5000);
    }
    
    // Function to animate the button
    function animateButton() {
        // Add a temporary class for animation
        recommendationBtn.classList.add('clicked');
        
        // Remove the class after animation completes
        setTimeout(() => {
            recommendationBtn.classList.remove('clicked');
        }, 200);
    }
    
    // Add some interactive features to the cards
    const cards = document.querySelectorAll('.recommendation-card');
    
    cards.forEach(card => {
        // Add click event to show more details
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const author = this.querySelector('.author').textContent;
            const description = this.querySelector('.description').textContent;
            
            // Show an alert with more details
            alert(`📖 ${title}\n\n${author}\n\n${description}\n\n⭐ This is one of my top recommendations!`);
        });
        
        // Add hover effect with cursor pointer
        card.style.cursor = 'pointer';
    });
    
    // Add some fun console messages
    console.log('🎬 Welcome to My Favorite Books and Movies!');
    console.log('📚 Click on any card to learn more about my recommendations!');
    console.log('🎯 Try the recommendation button for a surprise!');
});

// Add some additional CSS for the button animation
const style = document.createElement('style');
style.textContent = `
    .recommendation-button.clicked {
        transform: scale(0.95);
    }
    
    .recommendation-content {
        text-align: left;
    }
    
    .recommendation-content h3 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }
    
    .recommendation-content p {
        margin-bottom: 0.5rem;
        color: #555;
    }
    
    .recommendation-message {
        color: #27ae60 !important;
        font-weight: bold;
        font-style: italic;
        margin-top: 1rem;
        padding: 0.5rem;
        background: rgba(39, 174, 96, 0.1);
        border-radius: 5px;
    }
`;
document.head.appendChild(style); 
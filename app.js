document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            button.classList.add("active");

            // Get the filter category
            const filterValue = button.getAttribute("data-filter");

            // Filter logic
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || filterValue === cardCategory) {
                    // Show matching cards (remove hidden class)
                    card.classList.remove("hidden");
                    // Reset opacity and transform for a clean transition effect if desired
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    // Hide non-matching cards
                    card.classList.add("hidden");
                }
            });
        });
    });
});
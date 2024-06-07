function toggleMenu() {
        var menuToggle = document.getElementById("check");
        var navLinks = document.querySelector(".nav-links");
        
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

        // Close the menu when a menu item is clicked
        var menuItems = document.querySelectorAll(".nav-links a");
        menuItems.forEach(function(item) {
            item.addEventListener("click", function() {
                menuToggle.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

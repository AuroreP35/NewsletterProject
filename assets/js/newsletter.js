document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si le formulaire existe sur la page
    const form = document.querySelector('form[name="newsletter"]');
    if (!form) return;  // Sortir si le formulaire n'existe pas

    // Vérifier si l'input email existe
    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput) return;  // Sortir si l'input n'existe pas

    form.addEventListener('submit', function(e) {
        // Supprimer l'ancien message d'erreur s'il existe
        const existingError = emailInput.parentNode.querySelector('.text-red-500');
        if (existingError) {
            existingError.remove();
        }

        const email = emailInput.value.trim();  // Enlever les espaces
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            e.preventDefault();
            emailInput.classList.add('border-red-500');
            // Ajouter le nouveau message d'erreur
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-red-500 text-sm mt-1';
            errorDiv.textContent = 'Veuillez entrer une adresse email valide';
            emailInput.parentNode.appendChild(errorDiv);
        }
    });
});

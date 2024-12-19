document.addEventListener('DOMContentLoaded', function() {
    const previewButton = document.getElementById('previewButton');
    if (!previewButton) return;

    previewButton.addEventListener('click', function() {
        const subject = document.querySelector('input[name="newsletter_content[subject]"]').value;
        const content = document.querySelector('textarea[name="newsletter_content[content]"]').value;

        // Créer une nouvelle fenêtre pour la prévisualisation
        const previewWindow = window.open('', '_blank');
        previewWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Prévisualisation - ${subject}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                    </style>
                </head>
                <body>
                    <h2>${subject}</h2>
                    <div>${content}</div>
                </body>
            </html>
        `);
    });
});

// Function to load content from a JSON file
function loadContent() {
    fetch('assets/content.json')
        .then(response => response.json())
        .then(data => {
            // Load Coke Can Process text
            document.getElementById('coke-can-text').innerHTML = data.cokeCanProcess.text;
            // Load Coke Bottle Process text
            document.getElementById('coke-bottle-text').innerHTML = data.cokeBottleProcess.text;
            // Load Sprite Can Process text
            document.getElementById('sprite-can-text').innerHTML = data.spriteCanProcess.text;
            // Load Sprite Bottle Process text
            document.getElementById('sprite-bottle-text').innerHTML = data.spriteBottleProcess.text;
            // Load Fanta Can Process text
            document.getElementById('fanta-can-text').innerHTML = data.fantaCanProcess.text;
            // Load Fanta Bottle Process text
            document.getElementById('fanta-bottle-text').innerHTML = data.fantaBottleProcess.text;
            // Load Coke Info text
            document.getElementById('coke-info-text').innerHTML = data.CokeInfo.text;
            // Load Sprite Info text
            document.getElementById('sprite-info-text').innerHTML = data.SpriteInfo.text;
            document.getElementById('fanta-info-text').innerHTML = data.FantaInfo.text;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Call the function to load content when the page is ready
document.addEventListener('DOMContentLoaded', loadContent);

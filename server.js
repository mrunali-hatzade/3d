const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Automatically copy the story images from the local brain folder to the public folder
const brainDir = 'C:/Users/HP/.gemini/antigravity-ide/brain/0dffca1c-6e73-4362-977a-5ed0e88ed0e1';
const publicDir = path.join(__dirname, 'public');

const filesToCopy = [
    { src: 'story_1_origins_1781724647150.png', dest: 'story-1.png' },
    { src: 'story_2_process_1781724660415.png', dest: 'story-2.png' },
    { src: 'story_3_luxury_1781724679183.png', dest: 'story-3.png' }
];

filesToCopy.forEach(file => {
    const srcPath = path.join(brainDir, file.src);
    const destPath = path.join(publicDir, file.dest);
    if (fs.existsSync(srcPath)) {
        try {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Successfully copied ${file.src} to public/${file.dest}`);
        } catch (err) {
            console.error(`Failed to copy ${file.src}:`, err);
        }
    } else {
        console.warn(`Source file not found: ${srcPath}`);
    }
});

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.listen(3000, () => console.log('Running at http://localhost:3000'));


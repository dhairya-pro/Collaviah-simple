const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public', 'images');

// Helper to write SVG
function writeSvg(filePath, content) {
  const fullPath = path.join(publicDir, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
}

// Strawberry
writeSvg('fruit/strawberry.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 110" width="100" height="110">
  <path d="M 20 30 C 5 50, 15 85, 48 102 C 52 102, 85 85, 95 50 C 105 20, 75 18, 50 25 C 30 18, 25 22, 20 30 Z" fill="#D7263D"/>
  <path d="M 50 25 L 30 12 L 40 22 L 20 20 L 36 28 L 50 10 L 64 28 L 80 20 L 60 22 L 70 12 Z" fill="#74A82E"/>
</svg>`);

// Lime Slice
writeSvg('fruit/lime.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <circle cx="50" cy="50" r="46" fill="#8CC63F"/>
  <circle cx="50" cy="50" r="40" fill="#F4FBE4"/>
  <circle cx="50" cy="50" r="35" fill="#B5E052"/>
</svg>`);

// Cranberry
writeSvg('fruit/cranberry.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <circle cx="40" cy="55" r="24" fill="#8E1B3A"/>
  <circle cx="65" cy="50" r="28" fill="#C41C48"/>
</svg>`);

// Monk fruit
writeSvg('fruit/monk-fruit.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <ellipse cx="50" cy="56" rx="36" ry="38" fill="#785B28"/>
  <path d="M 50 20 Q 52 8 60 5" stroke="#463110" stroke-width="3" stroke-linecap="round" fill="none"/>
</svg>`);

// Florals
writeSvg('florals/petals.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60">
  <path d="M 30 5 C 48 5, 55 25, 45 42 C 38 54, 30 56, 30 56 C 30 56, 22 54, 15 42 C 5 25, 12 5, 30 5 Z" fill="#F6D9DD"/>
</svg>`);

// Packs
[6, 12, 24].forEach(size => {
  writeSvg(`pack-${size}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
    <rect x="20" y="30" width="260" height="140" rx="12" fill="#F6EDE4" stroke="#B07A2E" stroke-width="2"/>
    <text x="150" y="85" text-anchor="middle" font-family="serif" font-size="22" font-weight="bold" fill="#1A1A1A">COLLAVIAH</text>
    <text x="150" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#B5124A">WHOLESALE PACK OF ${size}</text>
    <text x="150" y="135" text-anchor="middle" font-family="monospace" font-size="10" fill="#4A4340">250ml Slim Cans • Master Carton</text>
  </svg>`);
});

console.log('Vector fallback assets generated successfully.');


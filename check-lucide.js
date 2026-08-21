const lucide = require('lucide-react');
const keys = Object.keys(lucide);
console.log('GitHub related:', keys.filter(k => k.toLowerCase().includes('git')));
console.log('LinkedIn related:', keys.filter(k => k.toLowerCase().includes('link')));
console.log('Mail related:', keys.filter(k => k.toLowerCase().includes('mail')));
console.log('All keys:', keys.join(', '));
const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

translate( locale , text ){
    let translation = text

    if( locale === 'american-to-british' ){
     Object.keys(americanOnly).forEach((word)=>{
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const replacement = americanOnly[word]
        translation = translation.replace(regex, replacement);        
      })
      translation = translation.replace(/\b(\d{1,2}):(\d{2})\b/g, '$1.$2');

      Object.keys(americanToBritishSpelling).forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const replacement = americanToBritishSpelling[word];
        translation =  translation.replace(regex, replacement);
      });

      Object.keys(americanToBritishTitles).forEach((title) => {
        const regex = new RegExp(`\\b${title}(?=[\\s\\.])`, 'gi');
        const replacement = americanToBritishTitles[title];
        translation = translation.replace(regex,(match) => {
          if (match[0] === match[0].toUpperCase()) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1);
          }
          else {
            return replacement.toLowerCase();
          }
        });
      });
      
    }
    if (locale === 'british-to-american') {

      Object.keys(britishOnly).sort((a, b) => b.length - a.length).forEach((word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        const replacement = britishOnly[word];
        translation = translation.replace(regex, replacement);
      });

      Object.keys(americanToBritishSpelling).forEach((word) => {
        const regex = new RegExp(`\\b${americanToBritishSpelling[word]}\\b`, 'gi');
        const replacement = word;
        translation = translation.replace(regex, replacement);
        
      });
      translation = translation.replace(/\b(\d{1,2}).(\d{2})\b/g, '$1:$2');

      Object.keys(americanToBritishTitles).forEach((title) => {
        const regex = new RegExp(`\\b${title.slice(0, -1)}(?=[\\s\\.])`, 'gi');
        const replacement = americanToBritishTitles[title];
        translation = translation.replace(regex,(match) => {
          if (match[0] === match[0].toUpperCase()) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1)+".";
          }
          else {
            return replacement.toLowerCase();
          }
        });
      });

    }
    return translation ;
}

highlightDifferences(text, translation) {
  const originalWords = text.split(' ');
  const translationWords = translation.split(' ');
  let highlightedText = '';

  translationWords.forEach((word, i) => {
    if (word !== originalWords[i]) {
      highlightedText += `<span class="highlight">${word}</span> `;
    } else {
      highlightedText += `${word} `;
    }
  });

  if(highlightedText.trim() == text ){
    return "Everything looks good to me!"
  }

  return highlightedText.trim();
}

}

module.exports = Translator;
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const SHEET_ID = process.env.SHEET_ID;
const API_KEY = process.env.GOOGLE_API_KEY;
const SHEET_NAME = 'Sheet1';

const OUTPUT_DIR = path.resolve(__dirname, '../src/locales/');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const sanitizeString = str => {
  if (!str) return '';

  return str
    .normalize('NFC') // Normalize Unicode characters
    .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces & invisible Unicode characters
    .replace(/[\b]/g, '') // Remove backspaces (\b)
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '') // Remove ASCII control characters
    .trim(); // Trim remaining spaces
};

// Function to fetch and clean translations from Google Sheets
const fetchTranslations = async () => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
    const response = await axios.get(url);

    if (!response.data.values || response.data.values.length === 0) {
      console.error('❌ Error: No data found in the Google Sheet.');
      return;
    }

    const [headers, ...rows] = response.data.values;
    const languages = headers.slice(1).map(lang => sanitizeString(lang)); // Trim language headers
    const translations = {};

    // Initialize language objects
    languages.forEach(lang => (translations[lang] = {}));

    // Populate translations
    rows.forEach(row => {
      const key = sanitizeString(row[0]); // Trim & clean key
      if (!key) return; // Skip empty keys

      languages.forEach((lang, index) => {
        const value = sanitizeString(row[index + 1]) || ''; // Trim & clean value
        translations[lang][key] = value;
      });
    });

    // Write to JSON files
    Object.entries(translations).forEach(([lang, content]) => {
      const filePath = path.join(OUTPUT_DIR, `${lang}.json`);
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`✅ Generated: ${filePath}`);
    });

    console.log('🚀 Translations successfully updated from Google Sheets!');
  } catch (error) {
    console.error('❌ Error fetching translations:', error);
  }
};

fetchTranslations();

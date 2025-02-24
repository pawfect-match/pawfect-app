require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const SHEET_ID = process.env.SHEET_ID; // Your Google Sheet ID
const API_KEY = process.env.GOOGLE_API_KEY; // Your Google Sheets API Key
const SHEET_NAME = 'Sheet1'; // Change if your sheet has a different name

const OUTPUT_DIR = '.src/locales/';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Function to fetch translations from Google Sheets
const fetchTranslations = async () => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
    const response = await axios.get(url);

    const [headers, ...rows] = response.data.values;
    const languages = headers.slice(1);
    const translations = {};

    // Initialize language objects
    languages.forEach(lang => (translations[lang] = {}));

    // Populate translations
    rows.forEach(row => {
      const key = row[0];
      languages.forEach((lang, index) => {
        translations[lang][key] = row[index + 1] || '';
      });
    });

    // Write to JSON files
    Object.entries(translations).forEach(([lang, content]) => {
      const filePath = `${OUTPUT_DIR}${lang}.json`;
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`Generated: ${filePath}`);
    });

    console.log('✅ Translations updated from Google Sheets!');
  } catch (error) {
    console.error('❌ Error fetching translations:', error);
  }
};

fetchTranslations();

// Get references to the relevant HTML elements
const themeSelector = document.getElementById('theme-selector');
const primaryColor = document.getElementById('primary-color');
const body = document.getElementsByTagName('body')[0];
const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];

// Function to apply a new theme
function applyTheme(theme) {
  // Set the primary color
  primaryColor.style.backgroundColor = theme.colors.primary;
  
  // Set the gradient colors
  header.style.backgroundImage = `linear-gradient(to right, ${theme.colors['gradient-1']}, ${theme.colors['gradient-2']})`;
  main.style.backgroundImage = `linear-gradient(to right, ${theme.colors['gradient-3']}, ${theme.colors['gradient-4']})`;
  
  // Set the font theme
  body.style.fontFamily = FONT_THEMES[theme.font];
}

// Add event listener to the theme selector
themeSelector.addEventListener('change', () => {
  const selectedTheme = COLOR_THEMES[themeSelector.value];
  applyTheme(selectedTheme);
});

// Apply default theme on page load
applyTheme(COLOR_THEMES.default);

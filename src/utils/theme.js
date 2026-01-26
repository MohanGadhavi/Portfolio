/**
 * Converts a hex color to an RGB string (files "r g b")
 * @param {string} hex - The hex color string (e.g., "#ffffff" or "#fff")
 * @returns {string} - The space-separated RGB values (e.g., "255 255 255")
 */
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16,
      )}`
    : null;
};

/**
 * Applies the theme colors from the configuration to CSS variables
 * @param {Object} themeConfig - The theme configuration object
 */
export const applyTheme = (themeConfig) => {
  if (!themeConfig) return;

  const root = document.documentElement;

  // Define color mappings for light and dark modes based on the logic in index.css
  // Light Mode: Primary = Charcoal (#1a1a1a), Secondary = Off-White (#f5f5f5)
  // Dark Mode: Primary = Off-White, Secondary = Charcoal
  // This seems inverted in the original CSS variable logic:
  // Original CSS:
  // :root (Light) -> --primary: 26 26 26 (Dark Color), --secondary: 245 245 245 (Light Color)
  // .dark         -> --primary: 245 245 245 (Light Color), --secondary: 26 26 26 (Dark Color)
  //
  // So 'primary' in the config (Charcoal) effectively maps to --primary in Light mode.
  // And 'secondary' in the config (Off-White) maps to --secondary in Light mode.

  const primaryRgb = hexToRgb(themeConfig.primary);
  const secondaryRgb = hexToRgb(themeConfig.secondary);
  const accentRgb = hexToRgb(themeConfig.accent);

  if (primaryRgb) {
    root.style.setProperty("--color-primary-default", primaryRgb);
  }
  if (secondaryRgb) {
    root.style.setProperty("--color-secondary-default", secondaryRgb);
  }
  if (accentRgb) {
    root.style.setProperty("--color-accent", accentRgb);
  }
};

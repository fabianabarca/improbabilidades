import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  // Custom CSS rules can be added here
  rules: [
    // Example: [/^text-(.*)$/, ([, c]) => ({ color: `#${c}` })],
  ],
  // Shortcuts for commonly used combinations
  shortcuts: [
    ["cell", "flex flex-col rounded p-4 bg-gray-50 dark:bg-neutral-900 h-full"],
    ["cell-header", "flex items-center mb-2"],
    ["cell-title", "text-xl font-bold"],
    ["cell-content", "flex-1 mb-2"],
    ["cell-footer", "text-sm text-gray-500 dark:text-gray-400 mt-auto"],
    ["cell-icon", "ml-auto"],
  ],
});

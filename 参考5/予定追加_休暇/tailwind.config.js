/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "wwwdiabrowsercomblack-60": "var(--wwwdiabrowsercomblack-60)",
      },
      fontFamily: {
        "www-diabrowser-com-helvetica-regular":
          "var(--www-diabrowser-com-helvetica-regular-font-family)",
        "www-diabrowser-com-noto-sans-JP-regular":
          "var(--www-diabrowser-com-noto-sans-JP-regular-font-family)",
        "www-diabrowser-com-noto-sans-JP-regular-underline":
          "var(--www-diabrowser-com-noto-sans-JP-regular-underline-font-family)",
        "www-diabrowser-com-noto-sans-JP-regular-underline-upper":
          "var(--www-diabrowser-com-noto-sans-JP-regular-underline-upper-font-family)",
        "www-diabrowser-com-noto-sans-JP-regular-upper":
          "var(--www-diabrowser-com-noto-sans-JP-regular-upper-font-family)",
        "www-diabrowser-com-semantic-blockquote":
          "var(--www-diabrowser-com-semantic-blockquote-font-family)",
        "www-diabrowser-com-semantic-button":
          "var(--www-diabrowser-com-semantic-button-font-family)",
        "www-diabrowser-com-semantic-heading-1":
          "var(--www-diabrowser-com-semantic-heading-1-font-family)",
        "www-diabrowser-com-semantic-heading-2":
          "var(--www-diabrowser-com-semantic-heading-2-font-family)",
        "www-diabrowser-com-semantic-heading-3-upper":
          "var(--www-diabrowser-com-semantic-heading-3-upper-font-family)",
        "www-diabrowser-com-semantic-link":
          "var(--www-diabrowser-com-semantic-link-font-family)",
      },
    },
  },
  plugins: [],
};

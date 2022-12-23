/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["Prompt", "sans-serif"],
      },
      colors: ({ colors }) => ({
        background: colors.zinc[200],
        onBackground: colors.zinc[900],
        surface: colors.zinc[300],
        onSurface: colors.zinc[900],
        surfaceVariant: colors.zinc[900],
        onSurfaceVariant: colors.zinc[200],
        primary: colors.cyan[900],
        onPrimary: colors.cyan[200],
        primaryVariant: colors.cyan[200],
        onPrimaryVariant: colors.cyan[900],
        error: colors.red[900],
        onError: colors.red[200],
        errorVariant: colors.red[200],
        onErrorVariant: colors.red[900],
        success: colors.green[900],
        onSuccess: colors.green[200],
        successVariant: colors.green[200],
        onSuccessVariant: colors.green[900],
        warning: colors.yellow[900],
        onWarning: colors.yellow[200],
        warningVariant: colors.yellow[200],
        onWarningVariant: colors.yellow[900],
      }),
      borderRadius: { DEFAULT: "1rem" },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include src folder
    "index.html", // Include HTML files if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",

        // Sidebar
        "sidebar-text": "#B1B1B1",
        "sidebar-text-selected": "#232323",

        // Cards
        "card-border": "#DFEAF2",
        "card-details-title": "#FFFFFFB2",
        "card-details-title-gray": "#718EBF",

        // Amounts
        "amount-green": "#41D4A8",
        "amount-red": "#FF4B4A",

        //Date
        "date-light-blue": "#718EBF",

        //input
        "input-field": "#EDF1F7",
      },
      spacing: {
        // Cards
        "card-container": "45.625rem", // 730px
        "card-container-height": "17.625rem", // 282px
        "card-width": "21.875rem", // 350px
        "card-height": "14.688rem", // 235px
        "card-number-height": "4.375rem", // 70px

        // Sidebar
        "sidebar-item-left-offset": "2.75rem", // 44px
        "sidebar-item-height": "2.75rem", // 44px
        "sidebar-container-width": "10.625rem", // 170px
        "sidebar-container-height": "33.5625rem", // 537px
        "sidebar-width": "15.625rem", // 250px
        "sidebar-height": "100%", // Full height

        // Navbar & Search
        "navbar-height": "6.313rem", // 101px
        "search-width": "15.938rem", // 255px
        "search-height": "3.125rem", // 50px
        "top-search-left": "1.563rem", // 25px

        // Icons & Profile
        "icon-dimensions": "3.125rem", // 50px
        "profile-width": "3.75rem", // 60px
        "profile-height": "3.75rem", // 60px
        "icon-width": "3.438rem", // 55px
        "icon-height": "3.438rem", // 55px

        //BarChart
        "bar-chart-container-width": "45.625rem", // 730px
        "bar-chart-container-height": "20.125rem", // 322px

        //pieChart
        "pie-chart-container-width": "21.875", // 350px
        "pie-chart-container-height": "20.125rem", // 322px

        //lineChart
        "line-chart-container-width": "39.688rem", //276px
        "line-chart-container-height": "17.25rem", //276px

        //quick transfer
        "quick-transfer-card-container-width": "27.813rem", // 445px
        "quick-transfer-card-container-height": "17.25rem", //276px
        "quick-transfer-card-y-padding": "2.186rem", //35px
        "quick-transfer-card-x-padding": "1.563rem", //25px
        "quick-transfer-input-field-padding-left": "1.875rem", //30px
        "quick-transfer-amount-section-top-distance": '1.875rem', //30px
        
        //avatar
        "avatar-card-name-margin-top": "0.938rem", //15px

        // MOBILE VERSION
        "container": "20.313rem", //325px
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        "heading-one": "1.75rem", // 28px
        "card-details": "0.938rem", // 15px
        "card-number": "1.375rem", // 22px
      },
      lineHeight: {
        "heading-one": "2.118rem", // 33.89px
        "card-details-title": "0.9", // 14.4px
        "card-details": "1.125", // Normal line-height
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};

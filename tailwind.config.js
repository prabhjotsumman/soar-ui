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
        charcoal: "#232323",

        //Dashboard
        "dashboard-heading-color": "#343C6A",

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
        "input-placeholder": "#718EBF",

        //icons
        "light-orange": "#FFF5D9",
        "light-purple": "#E7EDFF",
        "light-green": "#DCFAF8",
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
        "quick-transfer-amount-section-top-distance": "1.875rem", //30px

        //avatar
        "avatar-card-name-margin-top": "0.938rem", //15px
        "avatar-image": "4.375rem", //70px

        //Settings Page
        "settings-profile-pic": "5.625rem", //90px
        "settings-tab-padding": "1.875rem", //30px

        //Tabs
        "tabs-top-padding": "2.563rem", // 41px

        "save-btn-x-padding": "4.625rem", //74px

        // MOBILE VERSION ***********************************
        container: "20.313rem", //325px

        //profile
        "profile-width-mobile": "2.188rem", // 60px
        "profile-height-mobile": "2.188rem", // 60px

        //card
        "card-width-mobile": "16.563rem", // 265px
        "card-height-mobile": "10.625rem", // 170px
        "card-number-height-mobile": "3.125rem", // 50px
        "card-ellipse-mobile": "1.151rem", //18.41px

        //avatar
        "avatar-image-mobile": "3.125rem", //50px

        //quick transfer
        "quick-transfer-input-field-padding-left-mobile": "0.938rem", //15px
        "quick-transfer-card-y-padding-mobile": "1.25rem", //35px
        "quick-transfer-card-x-padding-mobile": "1.125rem", //18px

        //recent Transaction
        "recent-transaction-icon": '3.125rem', //50px

        // Icons & Profile
        "icon-dimensions-mobile": "2.5rem", // 40px

        //Settings Page
        "settings-profile-pic-mobile": "6.25rem", //100px

        //Form
        "form-gap": "1.375rem", //22px
        "input-field-x-padding-mobile": "0.938rem", //15px,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        "heading-one": "1.75rem", // 28px
        "card-details": "0.938rem", // 15px
        "card-number": "1.375rem", // 22px
        "dashboard-headings": "1.375rem", // 22px

        // MOBILE
        "card-details-title-mobile": "0.625rem", //10px
        "card-details-details-mobile": "0.813rem", //13px"

        "tabs-heading-mobile": "0.813rem", //13px
      },
      lineHeight: {
        "heading-one": "2.118rem", // 33.89px
        "card-details-title": "0.9", // 14.4px
        "card-details": "1.125", // Normal line-height

        "dashboard-heading-line-height": "1.664rem", // 26.63px
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
};

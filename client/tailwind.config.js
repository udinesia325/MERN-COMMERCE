module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    	backgroundImage: {
    		'bgLogin': "url('./Component/img/bgLogin.png')",
        'bgSignUp': "url('./Component/img/signupbg.jpg')"
    	},
      fontFamily: {
        'poppins' : ["'Poppins'", "sans-serif"]
      }
    },
  },
  plugins: [],
};

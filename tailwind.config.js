module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // تأكد من أن ملفاتك التي تستخدم الفئات موجودة هنا
  ],
  theme: {
    extend: {
      fontFamily: {
        agbalumo: ['Agbalumo', 'sans-serif'],
        kavoon: ['Kavoon', 'cursive'],
    }},
    
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dung: ['DungGeunMo', 'sans-serif'],
      },
      colors: {
        // 전역용 배경색
        background: '#101b38',
        // input 테두리나 배경에 쓰일 색
        'input-border': 'rgb(127 127 127 / 73%)',
        // 강조(CTA)용 색상
        accent: 'rgb(16 27 56 / 31%)',
        // 강조 텍스트용 색상
        'accent-foreground': '#101b38',
        // focus ring 색
        ring: '#51c4d3',
      },
    },
  },
  plugins: [],
}
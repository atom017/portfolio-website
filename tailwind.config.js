/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1034px',
    },
    // colors:{
    //   secondary:'#40A2E3',
    //   primary:'#0D9276',
    //   pale:'#FFF6E9'
    // },
    extend: {},
  },
  plugins: [],
}


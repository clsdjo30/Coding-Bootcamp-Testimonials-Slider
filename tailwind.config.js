module.exports = {
  content: ["index.html"],
  theme: {
  
    extend: {
      fontFamily: {
        body: ['Inter']
      }
    },
    keyframes: {
      slider: {
        '0%': {
          opacity: '0',      
          transform: 'translateX(-500px)'
        },
        '100%': {
          opacity: '1',          
          transform: 'translateX(0.9)'
        },
      }
    },
    animation: {
      slider: 'slider 1s ease-in'
    }


  },
  plugins: [],
}

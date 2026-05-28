tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#FF9900',
                dark: '#2A2A2A',
                light: '#555555', /* Changed from #888888 for better WCAG color contrast */
                bgLight: '#FFFDF9'
            }
        }
    }
}
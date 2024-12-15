Several approaches can address this issue:

1. **Adjust PurgeCSS configuration:**  You might need to add more permissive patterns in your `tailwind.config.js` file to include dynamically generated classes.  For example, you can add patterns to include all classes within specific components or even all HTML elements.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add more permissive patterns here if needed
    '!(node_modules)/**/*.js', //Example
    //Add more selectors here as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. **Use `@apply` directive (limited use-case):** If you know the classes ahead of time, `@apply` can pre-process and merge your styles directly into the component's class, making them easier for PurgeCSS to detect.

3. **Disable PurgeCSS (Not recommended):** As a last resort, you can disable PurgeCSS entirely (remove it from your Tailwind config), but this will increase the bundle size significantly.

4. **Use a different approach to style the components:**  Consider using CSS-in-JS solutions or other methods to handle styling dynamically generated content if the above solutions don't solve the problem. 

Choose the solution that best fits your project's needs and complexity.  Adjusting the PurgeCSS configuration is often the most effective approach without significantly altering your codebase.
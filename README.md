### Hi Hive, this is Siena! 

In this React app, you will find a `components` folder inside of `src` with my implementation of a Dropdown component. To see this component in action in `App.js`, first `npm install` to install dependencies, then run `npm start`. 

### Dropdown usage
Import the Dropdown component using the `/components/Dropdown` path and call it using `Dropdown`, passing in 3 props: 
    1. label, which is the default placeholder text inside the dropdown menu
    2. options, a list of strings containing the options in the dropdown
    3. multiple, an optional boolean that, if true, creates a multiple select dropdown

To customize dropdown style (e.g. dropdown height and width, color scheme, font family), feel free to change the global variables at the top of the `Dropdown.scss` file.

### Potential future improvements
- This dropdown requires a list of unique options. Duplicates is an edge case to consider in the future!
- An improvement to consider is a prop for the parent component to pass in an onClick function, which would be called whenever the user clicks in the dropdown. This is in the event that the user wants to pull the value that is displayed in the dropdown into the parent component (for example, to submit in a form).
- If two dropdowns are displayed over one another, they look a little funky. If I had more time, I would play around with backgrounds, opacity, and z-indices to make sure that dropdowns don't break when they display over other items. 


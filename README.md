# Complete Intro to React, v7 - Brian Holt

If you want to improve this app and have some more practice with React, here are some ideas.

# Paginate the Results
Our home page doesn't paginate doesn't results. With some nice buttons, you could paginate through the various results so a user isn't stuck looking at the top ten results. http://pets-v2.dev-apis.com/pets?animal=dog&page=1 will give you the second page of dogs (pages for this API start at 0).

# Use a Real API
[Use the Petfinder API!](https://www.petfinder.com/developers/) In previous versions of this course we did actually use the Petfinder API but it was occasionally unreliable so I made the fake API you're using to make sure you could always work through the code okay.

[They even have a JavaScript library!](https://github.com/petfinder-com/petfinder-js-sdk) You'll have to sign up for API credentials (secret and key) on their website, install the library, and then use the library everywhere we were using fetch(url) you need to change it to pf.animal.search() or whatever calls. This API returns different shape of data.

# Deploy your Code

You should deploy your code to the cloud and tweet it at me! Great options for places for you to deploy include:

* Netlify
* Vercel
* Azure Static Web Apps
* Google Firebase
* AWS Amplify

# Use the Theme Selector in More Places

We could do better than just using the theme selector just on buttons. Make a dark mode! Make a party mode! Add animations! This would be great when paired with the Tailwind section from Intermediate React.

# Add a Navigation Bar

Right now we don't have a great navigation story for our little pet finding app. Add a navigation bar at the top so users can easily navigate our site.

# Play with other tools

I showed you how to use Parcel but consider trying one of the newer build systems like [Vite](https://vitejs.dev), [Snowpack](https://www.snowpack.dev), [ESBuild](https://esbuild.github.io) or any of the others. You could also use one of the popular mainstays like [Webpack](https://webpack.js.org) or [Rollup](https://www.rollupjs.org/guide/en/).
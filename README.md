# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](./Screenshot(69).png)
![](./Screenshot(70).png)

### Links

- Solution URL: [Github Repo](https://github.com/Kelechikizito/social-media-dashboard-with-theme-switcher-master)
- Live Site URL: [Github Pages](https://kelechikizito.github.io/social-media-dashboard-with-theme-switcher-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JQuery
- Javascript


### What I learned

I learnt how to effectively use the toggleClass and how to create a toggle button.

To see how you can add code snippets, see below:

```html
      <div class="toggler">
        <span>Dark Mode</span>
        <label class="toggle">
          <input type="checkbox">
          <span class="slider"></span>
        </label>        
      </div>
```

```css
.toggler {
    align-self: center;
    display: flex;
    gap: 1rem;
}

/* Style for the container */
.toggle {
    position: relative;
    display: inline-block;
    width: 2.5rem;
    height: 1.25rem;
  }
  
  /* Hide the default checkbox */
  .toggle input {
    display: none;
  }
  
  /* Style for the slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(230, 22%, 74%);
    border-radius: 34px;
    transition: 0.4s;
  }
  
  /* Style for the slider when checked */
  .slider:before {
    position: absolute;
    content: "";
    height: 1rem;
    width: 1rem;
    left: 0.2rem;
    bottom: 0.1rem;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
  
  /* Adjust style when checkbox is checked */
  .toggle input:checked + .slider {
    background-image: linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  }
  
  .toggle input:checked + .slider:before {
    background-color: hsl(230, 17%, 14%);
    transform: translateX(1.1rem);
  }
```

```js
slider.click(function (e) { 
    
    const body = $('body')
    body.toggleClass('dark-theme');
    $('.grid-item:nth-child(2) >div').toggleClass('dark-theme');
    $('.grid-item:nth-child(4) >div').toggleClass('dark-theme');
    
});
```

<!-- ### Continued development


### Useful resources -->


## Author

- Website - [Kelechi Kizito Ugwu](https://github.com/Kelechikizito)
- Frontend Mentor - [@kelechikizto](https://www.frontendmentor.io/profile/Kelechikizito)
- Twitter - [@kelechiikizito](https://www.x.com/kelechiikizito)

<!-- ## Acknowledgments -->


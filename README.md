## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop](./screenshot.jpg)
![Mobile](./screenshot.jpg)

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```js
// Disabling a button for a certain amount of time to prevent click spamming when fetching data
const getAdvice = async () => {
  setShowAdvice(false);
  setButtonDisabled(true);
  if (buttonDisabled) {
    return;
  }

  // fetching using api
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceNumber(data.slip.id);
    setShowAdvice(true);
  } catch (error) {
    console.log("Error fetching advice:", error);
  } finally {
    // After advice is fetched wait 2 seconds before allowing button to be clicked again so it doesnt show same advice twice after clicking
    setTimeout(() => {
      setButtonDisabled(false);
    }, 2000);
  }
};

// When site first loads fetch advice to prevent it being empty
useEffect(() => {
  getAdvice();
}, []);
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus11)

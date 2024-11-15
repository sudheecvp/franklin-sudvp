import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {


    const profileDivs = block.querySelectorAll('div > div:nth-child(2)');

    // Iterate over each profile div
    profileDivs.forEach(profileDiv => {
      // Create a new div with the class 'socials'
      const socialsDiv = document.createElement('div');
      socialsDiv.className = 'socials';
  
      // Select all button-container paragraphs within the current profile div
      const buttonContainers = profileDiv.querySelectorAll('.button-container');
  
      // Iterate over each button container
      buttonContainers.forEach(container => {
        // Select the anchor tag within the current button-container
        const link = container.querySelector('a');
  
        // Create a new img element
        const img = document.createElement('img');
        img.style.marginLeft = '8px'; // Add some margin for spacing
  
        // Determine the image source based on the link's title attribute
        switch (link.title) {
          case 'Facebook':
            img.src = '/icons/fb1.svg';
            break;
          case 'Twitter':
            img.src = '/icons/twitter1.svg';
            break;
          case 'Instagram':
            img.src = '/icons/insta1.svg';
            break;
          default:
            return; // If the title doesn't match, do nothing
        }
  
        // Append the img element to the link
        link.appendChild(img);

        // Remove the text node from the link
      if (link.firstChild.nodeType === Node.TEXT_NODE) {
        link.firstChild.remove();
      }
  
        // Move the button container into the socials div
        socialsDiv.appendChild(container);
      });
  
      // Append the socials div to the profile div
      profileDiv.appendChild(socialsDiv);
    });


      // Select all top-level divs that contain the picture and profile information
  const topLevelDivs = block.querySelectorAll('div');

  const allDivs = document.querySelectorAll('div');

  // Iterate over each div
  allDivs.forEach(div => {
    // Check if the parent of the div has the class 'avatar'
    if (div.parentElement && div.parentElement.classList.contains('avatars')) {
      // Apply the class 'avatar-item' to the div
      div.classList.add('avatar-item');
    }
  });

 // Select all the profile containers
 /*
 const profileContainers = block.querySelectorAll('div > div');

  // Iterate over each profile container
  profileContainers.forEach(profileDiv => {
    // Create a new div with class 'socials'
    const socialsDiv = document.createElement('div');
    socialsDiv.className = 'socials';

    // Select all <p> elements within the current profile
    const pTags = profileDiv.querySelectorAll('div > p');

    // Ensure that there are <p> elements to move
    if (pTags.length > 0) {
      // Move each <p> element into the new 'socials' div
      pTags.forEach(pTag => {
        socialsDiv.appendChild(pTag);
      });

      // Append the 'socials' div back to the profile div
      // Place it after the existing <h3> and <h5> elements
      const textContainer = profileDiv.querySelector('div:last-of-type');

      // Check if textContainer exists
      if (textContainer) {
        textContainer.appendChild(socialsDiv);
      } else {
        console.error("Text container not found for profile:", profileDiv);
      }
    } else {
      console.error("No <p> elements found in profile:", profileDiv);
    }
  });*/

  /*const profileDiv = block.querySelector(' div > div > div:last-of-type');

  // Check if the profileDiv exists
  if (profileDiv) {
    // Select all <a> elements within the profile div
    const links = profileDiv.querySelectorAll('a');

    // Iterate over each <a> element
    links.forEach(link => {
      // Create a new <img> element
      const img = document.createElement('img');
      img.loading = 'lazy'; // Set loading attribute for lazy loading

      // Set the src attribute based on the title of the <a> element
      switch (link.title) {
        case 'Facebook':
          img.src = '/icons/fb1.svg';
          break;
        case 'Twitter':
          img.src = '/icons/twitter1.svg';
          break;
        case 'Instagram':
          img.src = '/icons/insta1.svg';
          break;
        default:
          console.warn('Unknown link title:', link.title);
          return; // Skip to the next iteration if the title is unknown
      }

      // Clear the existing content of the <a> element and append the <img>
      link.textContent = ''; // Clear existing text
      link.appendChild(img); // Append the new image
    });
  } else {
    console.error('Profile div not found');
  }*/

      // Select all anchor tags within the button-container class
  /*const links = block.querySelectorAll('.button-container a');

  // Iterate over each link
  links.forEach(link => {
    // Create a new img element
    const img = document.createElement('img');
    img.style.marginLeft = '8px'; // Add some margin for spacing

    // Determine the image source based on the link's title attribute
    switch (link.title) {
      case 'Facebook':
        img.src = '/icons/fb1.svg';
        break;
      case 'Twitter':
        img.src = '/icons/twitter1.svg';
        break;
      case 'Instagram':
        img.src = '/icons/insta1.svg';
        break;
      default:
        return; // If the title doesn't match, do nothing
    }

    // Append the img element to the link
    link.appendChild(img);
  });*/
}

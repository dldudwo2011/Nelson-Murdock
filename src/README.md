# dmit-1530-lab-05

## Lab 05: Form Validation & Sticky Positioning

**Due**: Sunday @ 23:55 Edmonton Time

**Weight**: 5% of your final grade

---

## Instructions

Clone a copy of this repository to your device so that you can develop it locally. When you finish, make sure to push your latest commit to GitHub Classroom. 

For this Lab, you will create a contact page for a fictitious law firm in Hell's Kitchen, Manhattan. You have been provided with all of the images, markup, and scripts that you will need to complete the layout. You have also been given the styles for elements covered in previous Labs, such as the responsive header and the fluid footer.

As a class, you will follow the steps below in order to complete this website.

### Sticky Header

Although the top-level navigation is already fully-responsive and style appropriately, you will need to make it 'sticky'. This means that, when you scroll down the page, it should remain at the top of the viewport. 

Be mindful of your z-index and any elements that may overlap your header further down in the document.

### Hero Banner

The hero banner should span the entire viewport. It should also be tall enough to cover the entire height of the viewport, minus whatever space the top-level navigation already occupies.

> *Hint*: This means that you will need to measure the height of the top-level navigation using your browser developer tools and include it in a ``calc()`` function.

Center the typographic elements using flexbox properties. Make sure that the background image is *fixed* in order to create a parallax scroll effect.

### Form Styles & Validation

Style the contact form as per the provided screenshots of the completed website. 

In the mobile view, the form will be a single column. In the tablet view, the form will switch to two columns. Finally, in the desktop view, the form will switch to a fixed-width centred layout.

Next, use the ``:valid`` and ``:invalid`` pseudo-class selectors to visually indicate which fields have valid entries and which fields have invalid entries.

> *Hint*: This will require background images and absolute positioning. There are empty ``<span>`` elements immediately following each input for this purpose.

### Contact Information & Flex Layout

Finally, style the contact information. The background should cover the entire container. 

The contact information section should be on the bottom of the page, after the form, except for in the desktop view. In the desktop view, make sure to use flex properties to reorder the elements, placing the contact information on the left-hand side of the form. 
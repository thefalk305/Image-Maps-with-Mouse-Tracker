// mouseTracker.js
// const coordDisplay = document.createElement('div');
// coordDisplay.style.position = 'fixed';
// coordDisplay.style.bottom = '10px';
// coordDisplay.style.left = '10px';
// coordDisplay.style.padding = '8px 12px';
// coordDisplay.style.background = 'rgba(0, 0, 0, 0.7)';
// coordDisplay.style.color = '#fff';
// coordDisplay.style.fontFamily = 'sans-serif';
// coordDisplay.style.fontSize = '14px';
// coordDisplay.style.borderRadius = '5px';
// coordDisplay.style.zIndex = '1000';
// coordDisplay.style.pointerEvents = 'none';
// document.body.appendChild(coordDisplay);

// // Wait until image is loaded to get accurate position
// window.addEventListener('load', () => {
//   const image = document.querySelector('img[usemap="#workmap"]');

//   function updateMousePosition(event) {
//     const rect = image.getBoundingClientRect();
//     const relativeX = event.clientX - rect.left;
//     const relativeY = event.clientY - rect.top;

//     if (
//       event.clientX >= rect.left &&
//       event.clientX <= rect.right &&
//       event.clientY >= rect.top &&
//       event.clientY <= rect.bottom
//     ) {
//       coordDisplay.textContent = `Image-relative X: ${Math.floor(relativeX)}, Y: ${Math.floor(relativeY)}`;
//     } else {
//       coordDisplay.textContent = `Mouse outside image`;
//     }
//   }

//   window.addEventListener('mousemove', updateMousePosition);
// });

// mouseTracker.js
window.addEventListener('load', () => {
  const image = document.querySelector('img[usemap="#workmap"]');
  const output = document.getElementById('mouse-position');

  function updateMousePosition(event) {
    if (!image || !output) return;

    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const insideImage =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    output.textContent = insideImage
      ? `(${Math.floor(x)}, ${Math.floor(y)})`
      : `(outside image)`;
  }

  window.addEventListener('mousemove', updateMousePosition);
});
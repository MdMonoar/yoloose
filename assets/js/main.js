//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// document.addEventListener("DOMContentLoaded", function() {
//   const rows = document.querySelectorAll('.row'); // Select all rows

//   rows.forEach(row => {
//       const headers = row.querySelectorAll('.gallery-card-header'); // Select all headers in the row
//       let maxHeight = 0;
//       console.log(headers);

//       // Calculate the maximum height
//       headers.forEach(header => {
//           const height = header.offsetHeight;
//           if (height > maxHeight) {
//               maxHeight = height;
//           }
//       });

//       // Set the maximum height for all headers in the row
//       headers.forEach(header => {
//           header.style.height = maxHeight + 'px';
//       });
//   });
// });


const max_height_in_row = (row, elm_cls, return_elms = true) => {
  const elms = row.querySelectorAll(elm_cls);
  let max_height = 0;

  elms.forEach(elm => {
    const height = elm.offsetHeight;
    if (height > max_height) {
      max_height = height;
    }
  });

  return return_elms ? [elms, max_height] : max_height;
}

// document.addEventListener("DOMContentLoaded", function() {
window.addEventListener("load", function() {
  const rows = document.querySelectorAll('.row'); // Select all rows

  rows.forEach(row => {
      let [headers, max_header_height] = max_height_in_row(row, '.gallery-card-header');
      let [videos, max_video_height] = max_height_in_row(row, '.gallery-card-video');
      // console.log(headers, max_header_height, videos, max_video_height);
      // Set the maximum height for all headers in the row
      headers.forEach(header => {
          header.style.height = max_header_height + 'px';
      });

      videos.forEach(video => {
        video.style.height = max_video_height + 'px';
    });
  });
});
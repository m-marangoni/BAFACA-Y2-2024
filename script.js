// Get all the student name divs
const studentDivs = document.querySelectorAll(".student-name");

// Function to generate random positions
function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

// Assign random positions to each student div
studentDivs.forEach((div) => {
  const randomX = getRandomPosition(window.innerWidth - 100); // Adjust width for div size
  const randomY = getRandomPosition(window.innerHeight - 50); // Adjust height for div size
  div.style.left = `${randomX}px`;
  div.style.top = `${randomY}px`;
});

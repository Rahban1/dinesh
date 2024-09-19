// const slideIn = document.getElementById('slideIn');
//         const closeBtn = document.getElementById('closeBtn');
//         const nextBtn = document.getElementById('nextBtn');
//         const prevBtn = document.getElementById('prevBtn');
//         let timerInterval;
//         let timeLeft = 30;

//         function updateTimer() {
//             const timerElement = document.querySelector('.timer');
//             const minutes = Math.floor(timeLeft / 60);
//             const seconds = timeLeft % 60;
//             timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
//             if (timeLeft === 0) {
//                 clearInterval(timerInterval);
//                 alert('Time\'s up!');
//             } else {
//                 timeLeft--;
//             }
//         }

//         function startTimer() {
//             clearInterval(timerInterval);
//             timeLeft = 30;
//             updateTimer();
//             timerInterval = setInterval(updateTimer, 1000);
//         }

//         nextBtn.addEventListener('click', () => {
//             alert('Next question');
//             startTimer();
//         });

//         prevBtn.addEventListener('click', () => {
//             alert('Previous question');
//             startTimer();
//         });

//         closeBtn.addEventListener('click', () => {
//             slideIn.classList.remove('active');
//         });

//         // Simulating opening the slide-in panel after 5 seconds
//         setTimeout(() => {
//             slideIn.classList.add('active');
//         }, 5000);

//         // Start the timer when the page loads
//         startTimer();
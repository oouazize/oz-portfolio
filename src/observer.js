// const observer = new IntersectionObserver((entries) => {
// 	entries.forEach((entry) => {
// 		console.log(entry)
// 		if (entry.isIntersecting) {
// 			entry.target.classList.remove('animate__animated animate__fadeIn animate__fadeOutUpBig animate__slower')
// 			entry.target.classList.add("animate__animated animate__fadeIn animate__delay-1s");
// 		}
// 		else {
// 			entry.target.classList.remove("animate__animated animate__fadeIn animate__delay-1s")
// 			entry.target.classList.add('animate__animated animate__fadeIn animate__fadeOutUpBig animate__slower')
// 		}
// 	});
// });

// const hiddenElements = document.querySelectorAll(".animatoo");
// hiddenElements.forEach((el) => observer.observe(el));

// function reveal() {
// 	var reveals = document.querySelectorAll(".animatoo");
  
// 	for (var i = 0; i < reveals.length; i++) {
// 	  var windowHeight = window.innerHeight;
// 	  var elementTop = reveals[i].getBoundingClientRect().top;
// 	  var elementVisible = 150;
  
// 	  if (elementTop < windowHeight - elementVisible) {
// 		reveals[i].classList.add("show");
// 	  } else {
// 		reveals[i].classList.remove("show");
// 	  }
// 	}
//   }
  
//   window.addEventListener("scroll", reveal);
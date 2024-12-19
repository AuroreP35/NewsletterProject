(self["webpackChunk"] = self["webpackChunk"] || []).push([["newsletter"],{

/***/ "./assets/js/newsletter.js":
/*!*********************************!*\
  !*** ./assets/js/newsletter.js ***!
  \*********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // Vérifier si le formulaire existe sur la page
  var form = document.querySelector('form[name="newsletter"]');
  if (!form) return; // Sortir si le formulaire n'existe pas

  // Vérifier si l'input email existe
  var emailInput = form.querySelector('input[type="email"]');
  if (!emailInput) return; // Sortir si l'input n'existe pas

  form.addEventListener('submit', function (e) {
    // Supprimer l'ancien message d'erreur s'il existe
    var existingError = emailInput.parentNode.querySelector('.text-red-500');
    if (existingError) {
      existingError.remove();
    }
    var email = emailInput.value.trim(); // Enlever les espaces
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      emailInput.classList.add('border-red-500');
      // Ajouter le nouveau message d'erreur
      var errorDiv = document.createElement('div');
      errorDiv.className = 'text-red-500 text-sm mt-1';
      errorDiv.textContent = 'Veuillez entrer une adresse email valide';
      emailInput.parentNode.appendChild(errorDiv);
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/newsletter.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQ7RUFDQSxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBQzlELElBQUksQ0FBQ0QsSUFBSSxFQUFFLE9BQU8sQ0FBRTs7RUFFcEI7RUFDQSxJQUFNRSxVQUFVLEdBQUdGLElBQUksQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQzVELElBQUksQ0FBQ0MsVUFBVSxFQUFFLE9BQU8sQ0FBRTs7RUFFMUJGLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVNJLENBQUMsRUFBRTtJQUN4QztJQUNBLElBQU1DLGFBQWEsR0FBR0YsVUFBVSxDQUFDRyxVQUFVLENBQUNKLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFDMUUsSUFBSUcsYUFBYSxFQUFFO01BQ2ZBLGFBQWEsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7SUFDMUI7SUFFQSxJQUFNQyxLQUFLLEdBQUdMLFVBQVUsQ0FBQ00sS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUU7SUFDeEMsSUFBTUMsVUFBVSxHQUFHLDRCQUE0QjtJQUUvQyxJQUFJLENBQUNBLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDSixLQUFLLENBQUMsRUFBRTtNQUN6QkosQ0FBQyxDQUFDUyxjQUFjLENBQUMsQ0FBQztNQUNsQlYsVUFBVSxDQUFDVyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztNQUMxQztNQUNBLElBQU1DLFFBQVEsR0FBR2pCLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDOUNELFFBQVEsQ0FBQ0UsU0FBUyxHQUFHLDJCQUEyQjtNQUNoREYsUUFBUSxDQUFDRyxXQUFXLEdBQUcsMENBQTBDO01BQ2pFaEIsVUFBVSxDQUFDRyxVQUFVLENBQUNjLFdBQVcsQ0FBQ0osUUFBUSxDQUFDO0lBQy9DO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25ld3NsZXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gVsOpcmlmaWVyIHNpIGxlIGZvcm11bGFpcmUgZXhpc3RlIHN1ciBsYSBwYWdlXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwibmV3c2xldHRlclwiXScpO1xyXG4gICAgaWYgKCFmb3JtKSByZXR1cm47ICAvLyBTb3J0aXIgc2kgbGUgZm9ybXVsYWlyZSBuJ2V4aXN0ZSBwYXNcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgc2kgbCdpbnB1dCBlbWFpbCBleGlzdGVcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xyXG4gICAgaWYgKCFlbWFpbElucHV0KSByZXR1cm47ICAvLyBTb3J0aXIgc2kgbCdpbnB1dCBuJ2V4aXN0ZSBwYXNcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAvLyBTdXBwcmltZXIgbCdhbmNpZW4gbWVzc2FnZSBkJ2VycmV1ciBzJ2lsIGV4aXN0ZVxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRXJyb3IgPSBlbWFpbElucHV0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnRleHQtcmVkLTUwMCcpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nRXJyb3IucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWUudHJpbSgpOyAgLy8gRW5sZXZlciBsZXMgZXNwYWNlc1xyXG4gICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcclxuXHJcbiAgICAgICAgaWYgKCFlbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZW1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdib3JkZXItcmVkLTUwMCcpO1xyXG4gICAgICAgICAgICAvLyBBam91dGVyIGxlIG5vdXZlYXUgbWVzc2FnZSBkJ2VycmV1clxyXG4gICAgICAgICAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBlcnJvckRpdi5jbGFzc05hbWUgPSAndGV4dC1yZWQtNTAwIHRleHQtc20gbXQtMSc7XHJcbiAgICAgICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gJ1ZldWlsbGV6IGVudHJlciB1bmUgYWRyZXNzZSBlbWFpbCB2YWxpZGUnO1xyXG4gICAgICAgICAgICBlbWFpbElucHV0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwiZW1haWxJbnB1dCIsImUiLCJleGlzdGluZ0Vycm9yIiwicGFyZW50Tm9kZSIsInJlbW92ZSIsImVtYWlsIiwidmFsdWUiLCJ0cmltIiwiZW1haWxSZWdleCIsInRlc3QiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImFkZCIsImVycm9yRGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9
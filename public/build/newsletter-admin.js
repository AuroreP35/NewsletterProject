(self["webpackChunk"] = self["webpackChunk"] || []).push([["newsletter-admin"],{

/***/ "./assets/js/newsletter-admin.js":
/*!***************************************!*\
  !*** ./assets/js/newsletter-admin.js ***!
  \***************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var previewButton = document.getElementById('previewButton');
  if (!previewButton) return;
  previewButton.addEventListener('click', function () {
    var subject = document.querySelector('input[name="newsletter_content[subject]"]').value;
    var content = document.querySelector('textarea[name="newsletter_content[content]"]').value;

    // Créer une nouvelle fenêtre pour la prévisualisation
    var previewWindow = window.open('', '_blank');
    previewWindow.document.write("\n            <!DOCTYPE html>\n            <html>\n                <head>\n                    <title>Pr\xE9visualisation - ".concat(subject, "</title>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                            line-height: 1.6;\n                            color: #333;\n                            max-width: 600px;\n                            margin: 0 auto;\n                            padding: 20px;\n                        }\n                    </style>\n                </head>\n                <body>\n                    <h2>").concat(subject, "</h2>\n                    <div>").concat(content, "</div>\n                </body>\n            </html>\n        "));
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/newsletter-admin.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci1hZG1pbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7RUFDckQsSUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFDOUQsSUFBSSxDQUFDRCxhQUFhLEVBQUU7RUFFcEJBLGFBQWEsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7SUFDL0MsSUFBTUcsT0FBTyxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDQyxLQUFLO0lBQ3pGLElBQU1DLE9BQU8sR0FBR1AsUUFBUSxDQUFDSyxhQUFhLENBQUMsOENBQThDLENBQUMsQ0FBQ0MsS0FBSzs7SUFFNUY7SUFDQSxJQUFNRSxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7SUFDL0NGLGFBQWEsQ0FBQ1IsUUFBUSxDQUFDVyxLQUFLLGdJQUFBQyxNQUFBLENBSVlSLE9BQU8sNmVBQUFRLE1BQUEsQ0FhN0JSLE9BQU8sc0NBQUFRLE1BQUEsQ0FDTkwsT0FBTyxtRUFHekIsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9uZXdzbGV0dGVyLWFkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHByZXZpZXdCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlld0J1dHRvbicpO1xyXG4gICAgaWYgKCFwcmV2aWV3QnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgcHJldmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHN1YmplY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmV3c2xldHRlcl9jb250ZW50W3N1YmplY3RdXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJuZXdzbGV0dGVyX2NvbnRlbnRbY29udGVudF1cIl0nKS52YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIHVuZSBub3V2ZWxsZSBmZW7DqnRyZSBwb3VyIGxhIHByw6l2aXN1YWxpc2F0aW9uXHJcbiAgICAgICAgY29uc3QgcHJldmlld1dpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgcHJldmlld1dpbmRvdy5kb2N1bWVudC53cml0ZShgXHJcbiAgICAgICAgICAgIDwhRE9DVFlQRSBodG1sPlxyXG4gICAgICAgICAgICA8aHRtbD5cclxuICAgICAgICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5QcsOpdmlzdWFsaXNhdGlvbiAtICR7c3ViamVjdH08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvaGVhZD5cclxuICAgICAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4ke3N1YmplY3R9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICAgICAgPC9odG1sPlxyXG4gICAgICAgIGApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmlld0J1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwic3ViamVjdCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImNvbnRlbnQiLCJwcmV2aWV3V2luZG93Iiwid2luZG93Iiwib3BlbiIsIndyaXRlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==
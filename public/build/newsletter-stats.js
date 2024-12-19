"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["newsletter-stats"],{

/***/ "./assets/js/newsletter-stats.js":
/*!***************************************!*\
  !*** ./assets/js/newsletter-stats.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");

document.addEventListener('DOMContentLoaded', function () {
  // Graphique circulaire pour le taux d'ouverture
  var openRateCtx = document.getElementById('openRateChart');
  if (openRateCtx) {
    var openRate = parseFloat(openRateCtx.dataset.openRate);
    new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](openRateCtx, {
      type: 'doughnut',
      data: {
        labels: ['Ouvert', 'Non ouvert'],
        datasets: [{
          data: [openRate, 100 - openRate],
          backgroundColor: ['#34D399', '#E5E7EB'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // Graphique en barres pour les clics
  var clicksCtx = document.getElementById('clicksChart');
  if (clicksCtx) {
    var clicksData = JSON.parse(clicksCtx.dataset.clicks);
    new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](clicksCtx, {
      type: 'bar',
      data: {
        labels: clicksData.map(function (item) {
          return item.url;
        }),
        datasets: [{
          label: 'Nombre de clics',
          data: clicksData.map(function (item) {
            return item.count;
          }),
          backgroundColor: '#818CF8',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_chart_js_auto_auto_js"], () => (__webpack_exec__("./assets/js/newsletter-stats.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci1zdGF0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrQztBQUVsQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFXO0VBQ3JEO0VBQ0EsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFDNUQsSUFBSUQsV0FBVyxFQUFFO0lBQ2IsSUFBTUUsUUFBUSxHQUFHQyxVQUFVLENBQUNILFdBQVcsQ0FBQ0ksT0FBTyxDQUFDRixRQUFRLENBQUM7SUFDekQsSUFBSUwscURBQUssQ0FBQ0csV0FBVyxFQUFFO01BQ25CSyxJQUFJLEVBQUUsVUFBVTtNQUNoQkMsSUFBSSxFQUFFO1FBQ0ZDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7UUFDaENDLFFBQVEsRUFBRSxDQUFDO1VBQ1BGLElBQUksRUFBRSxDQUFDSixRQUFRLEVBQUUsR0FBRyxHQUFHQSxRQUFRLENBQUM7VUFDaENPLGVBQWUsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7VUFDdkNDLFdBQVcsRUFBRTtRQUNqQixDQUFDO01BQ0wsQ0FBQztNQUNEQyxPQUFPLEVBQUU7UUFDTEMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLE9BQU8sRUFBRTtVQUNMQyxNQUFNLEVBQUU7WUFDSkMsUUFBUSxFQUFFO1VBQ2Q7UUFDSjtNQUNKO0lBQ0osQ0FBQyxDQUFDO0VBQ047O0VBRUE7RUFDQSxJQUFNQyxTQUFTLEdBQUdsQixRQUFRLENBQUNHLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDeEQsSUFBSWUsU0FBUyxFQUFFO0lBQ1gsSUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsU0FBUyxDQUFDWixPQUFPLENBQUNnQixNQUFNLENBQUM7SUFDdkQsSUFBSXZCLHFEQUFLLENBQUNtQixTQUFTLEVBQUU7TUFDakJYLElBQUksRUFBRSxLQUFLO01BQ1hDLElBQUksRUFBRTtRQUNGQyxNQUFNLEVBQUVVLFVBQVUsQ0FBQ0ksR0FBRyxDQUFDLFVBQUFDLElBQUk7VUFBQSxPQUFJQSxJQUFJLENBQUNDLEdBQUc7UUFBQSxFQUFDO1FBQ3hDZixRQUFRLEVBQUUsQ0FBQztVQUNQZ0IsS0FBSyxFQUFFLGlCQUFpQjtVQUN4QmxCLElBQUksRUFBRVcsVUFBVSxDQUFDSSxHQUFHLENBQUMsVUFBQUMsSUFBSTtZQUFBLE9BQUlBLElBQUksQ0FBQ0csS0FBSztVQUFBLEVBQUM7VUFDeENoQixlQUFlLEVBQUUsU0FBUztVQUMxQmlCLFlBQVksRUFBRTtRQUNsQixDQUFDO01BQ0wsQ0FBQztNQUNEZixPQUFPLEVBQUU7UUFDTEMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLE9BQU8sRUFBRTtVQUNMQyxNQUFNLEVBQUU7WUFDSmEsT0FBTyxFQUFFO1VBQ2I7UUFDSixDQUFDO1FBQ0RDLE1BQU0sRUFBRTtVQUNKQyxDQUFDLEVBQUU7WUFDQ0MsV0FBVyxFQUFFLElBQUk7WUFDakJDLEtBQUssRUFBRTtjQUNIQyxRQUFRLEVBQUU7WUFDZDtVQUNKO1FBQ0o7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25ld3NsZXR0ZXItc3RhdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzL2F1dG8nO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gR3JhcGhpcXVlIGNpcmN1bGFpcmUgcG91ciBsZSB0YXV4IGQnb3V2ZXJ0dXJlXHJcbiAgICBjb25zdCBvcGVuUmF0ZUN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuUmF0ZUNoYXJ0Jyk7XHJcbiAgICBpZiAob3BlblJhdGVDdHgpIHtcclxuICAgICAgICBjb25zdCBvcGVuUmF0ZSA9IHBhcnNlRmxvYXQob3BlblJhdGVDdHguZGF0YXNldC5vcGVuUmF0ZSk7XHJcbiAgICAgICAgbmV3IENoYXJ0KG9wZW5SYXRlQ3R4LCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogWydPdXZlcnQnLCAnTm9uIG91dmVydCddLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW29wZW5SYXRlLCAxMDAgLSBvcGVuUmF0ZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJyMzNEQzOTknLCAnI0U1RTdFQiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHcmFwaGlxdWUgZW4gYmFycmVzIHBvdXIgbGVzIGNsaWNzXHJcbiAgICBjb25zdCBjbGlja3NDdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xpY2tzQ2hhcnQnKTtcclxuICAgIGlmIChjbGlja3NDdHgpIHtcclxuICAgICAgICBjb25zdCBjbGlja3NEYXRhID0gSlNPTi5wYXJzZShjbGlja3NDdHguZGF0YXNldC5jbGlja3MpO1xyXG4gICAgICAgIG5ldyBDaGFydChjbGlja3NDdHgsIHtcclxuICAgICAgICAgICAgdHlwZTogJ2JhcicsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogY2xpY2tzRGF0YS5tYXAoaXRlbSA9PiBpdGVtLnVybCksXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05vbWJyZSBkZSBjbGljcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY2xpY2tzRGF0YS5tYXAoaXRlbSA9PiBpdGVtLmNvdW50KSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjODE4Q0Y4JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDRcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQ2hhcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuUmF0ZUN0eCIsImdldEVsZW1lbnRCeUlkIiwib3BlblJhdGUiLCJwYXJzZUZsb2F0IiwiZGF0YXNldCIsInR5cGUiLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJXaWR0aCIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwiY2xpY2tzQ3R4IiwiY2xpY2tzRGF0YSIsIkpTT04iLCJwYXJzZSIsImNsaWNrcyIsIm1hcCIsIml0ZW0iLCJ1cmwiLCJsYWJlbCIsImNvdW50IiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsInNjYWxlcyIsInkiLCJiZWdpbkF0WmVybyIsInRpY2tzIiwic3RlcFNpemUiXSwic291cmNlUm9vdCI6IiJ9
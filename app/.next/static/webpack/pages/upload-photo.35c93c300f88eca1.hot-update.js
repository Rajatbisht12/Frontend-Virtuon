/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload-photo",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[8].use[2]!./pages/UploadPhoto.module.css":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[8].use[2]!./pages/UploadPhoto.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".UploadPhoto_container__P0f5L {\\n    max-width: 600px;\\n    margin: 0 auto;\\n    padding: 20px;\\n    background-color: rgb(252, 245, 245);\\n    color: black;\\n  }\\n  \\n  .UploadPhoto_header__I0e2y {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .UploadPhoto_backButton__mPWpP {\\n    background: none;\\n    border: none;\\n    font-size: 24px;\\n    cursor: pointer;\\n    color: black;\\n  }\\n  \\n  .UploadPhoto_cartIcon__c7CaH {\\n    font-size: 24px;\\n    color: black;\\n  }\\n  \\n  .UploadPhoto_progressBar__SIAGh {\\n    height: 4px;\\n    background-color: #333;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .UploadPhoto_progressBar__SIAGh::before {\\n    content: '';\\n    display: block;\\n    height: 100%;\\n    width: 100%;\\n    background-color: #007bff;\\n  }\\n  \\n  .UploadPhoto_title__ABZHs {\\n    font-size: 24px;\\n    margin-bottom: 10px;\\n  }\\n  \\n  .UploadPhoto_subtitle__wGV58 {\\n    font-size: 14px;\\n    color: #aaa;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .UploadPhoto_uploadOptions__Nkw4S {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 10px;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .UploadPhoto_uploadButton__2PWhL, .UploadPhoto_clickPhotoButton__XTCje {\\n    width: 100%;\\n    padding: 10px;\\n    border: 1px solid #444;\\n    border-radius: 4px;\\n    background-color: #222;\\n    color: white;\\n    font-size: 16px;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  \\n  .UploadPhoto_uploadIcon__SxMqd, .UploadPhoto_cameraIcon__ZFddx {\\n    margin-right: 10px;\\n  }\\n  \\n  .UploadPhoto_orText__CRjsA {\\n    font-size: 14px;\\n    color: #aaa;\\n  }\\n  \\n  .UploadPhoto_termsContainer__IWLwW {\\n    display: flex;\\n    align-items: flex-start;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .UploadPhoto_termsContainer__IWLwW input {\\n    margin-right: 10px;\\n  }\\n  \\n  .UploadPhoto_termsContainer__IWLwW label {\\n    font-size: 12px;\\n    color: #aaa;\\n  }\\n  \\n  .UploadPhoto_uploadButton__2PWhL:last-child {\\n    background-color: #007bff;\\n    border: none;\\n  }\\n  \\n  .UploadPhoto_uploadButton__2PWhL:disabled {\\n    background-color: #555;\\n    cursor: not-allowed;\\n  }\\n\\n  .UploadPhoto_cameraContainer__hu96x {\\n    position: relative;\\n    width: 100%;\\n    max-width: 400px;\\n    margin: 20px auto;\\n  }\\n  \\n  .UploadPhoto_cameraContainer__hu96x video {\\n    width: 100%;\\n    height: auto;\\n  }\\n  \\n  .UploadPhoto_captureButton__awMqD {\\n    position: absolute;\\n    bottom: 10px;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    padding: 10px 20px;\\n    background-color: #007bff;\\n    color: white;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n  }\\n  \\n  .UploadPhoto_selectedFile__DgvOp {\\n    margin-top: 10px;\\n    font-size: 14px;\\n    color: #aaa;\\n  }\\n  \\n  @media (max-width: 480px) {\\n    .UploadPhoto_container__P0f5L {\\n      padding: 10px;\\n    }\\n  \\n    .UploadPhoto_title__ABZHs {\\n      font-size: 20px;\\n    }\\n  \\n    .UploadPhoto_subtitle__wGV58 {\\n      font-size: 12px;\\n    }\\n  \\n    .UploadPhoto_uploadButton__2PWhL, .UploadPhoto_clickPhotoButton__XTCje {\\n      font-size: 14px;\\n    }\\n  }\", \"\",{\"version\":3,\"sources\":[\"webpack://pages/UploadPhoto.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,oCAAoC;IACpC,YAAY;EACd;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,WAAW;IACX,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,cAAc;IACd,YAAY;IACZ,WAAW;IACX,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,WAAW;EACb;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,2BAA2B;IAC3B,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,eAAe;IACf,WAAW;EACb;;EAEA;IACE;MACE,aAAa;IACf;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,eAAe;IACjB;EACF\",\"sourcesContent\":[\".container {\\n    max-width: 600px;\\n    margin: 0 auto;\\n    padding: 20px;\\n    background-color: rgb(252, 245, 245);\\n    color: black;\\n  }\\n  \\n  .header {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .backButton {\\n    background: none;\\n    border: none;\\n    font-size: 24px;\\n    cursor: pointer;\\n    color: black;\\n  }\\n  \\n  .cartIcon {\\n    font-size: 24px;\\n    color: black;\\n  }\\n  \\n  .progressBar {\\n    height: 4px;\\n    background-color: #333;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .progressBar::before {\\n    content: '';\\n    display: block;\\n    height: 100%;\\n    width: 100%;\\n    background-color: #007bff;\\n  }\\n  \\n  .title {\\n    font-size: 24px;\\n    margin-bottom: 10px;\\n  }\\n  \\n  .subtitle {\\n    font-size: 14px;\\n    color: #aaa;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .uploadOptions {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 10px;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .uploadButton, .clickPhotoButton {\\n    width: 100%;\\n    padding: 10px;\\n    border: 1px solid #444;\\n    border-radius: 4px;\\n    background-color: #222;\\n    color: white;\\n    font-size: 16px;\\n    cursor: pointer;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  \\n  .uploadIcon, .cameraIcon {\\n    margin-right: 10px;\\n  }\\n  \\n  .orText {\\n    font-size: 14px;\\n    color: #aaa;\\n  }\\n  \\n  .termsContainer {\\n    display: flex;\\n    align-items: flex-start;\\n    margin-bottom: 20px;\\n  }\\n  \\n  .termsContainer input {\\n    margin-right: 10px;\\n  }\\n  \\n  .termsContainer label {\\n    font-size: 12px;\\n    color: #aaa;\\n  }\\n  \\n  .uploadButton:last-child {\\n    background-color: #007bff;\\n    border: none;\\n  }\\n  \\n  .uploadButton:disabled {\\n    background-color: #555;\\n    cursor: not-allowed;\\n  }\\n\\n  .cameraContainer {\\n    position: relative;\\n    width: 100%;\\n    max-width: 400px;\\n    margin: 20px auto;\\n  }\\n  \\n  .cameraContainer video {\\n    width: 100%;\\n    height: auto;\\n  }\\n  \\n  .captureButton {\\n    position: absolute;\\n    bottom: 10px;\\n    left: 50%;\\n    transform: translateX(-50%);\\n    padding: 10px 20px;\\n    background-color: #007bff;\\n    color: white;\\n    border: none;\\n    border-radius: 4px;\\n    cursor: pointer;\\n  }\\n  \\n  .selectedFile {\\n    margin-top: 10px;\\n    font-size: 14px;\\n    color: #aaa;\\n  }\\n  \\n  @media (max-width: 480px) {\\n    .container {\\n      padding: 10px;\\n    }\\n  \\n    .title {\\n      font-size: 20px;\\n    }\\n  \\n    .subtitle {\\n      font-size: 12px;\\n    }\\n  \\n    .uploadButton, .clickPhotoButton {\\n      font-size: 14px;\\n    }\\n  }\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"UploadPhoto_container__P0f5L\",\n\t\"header\": \"UploadPhoto_header__I0e2y\",\n\t\"backButton\": \"UploadPhoto_backButton__mPWpP\",\n\t\"cartIcon\": \"UploadPhoto_cartIcon__c7CaH\",\n\t\"progressBar\": \"UploadPhoto_progressBar__SIAGh\",\n\t\"title\": \"UploadPhoto_title__ABZHs\",\n\t\"subtitle\": \"UploadPhoto_subtitle__wGV58\",\n\t\"uploadOptions\": \"UploadPhoto_uploadOptions__Nkw4S\",\n\t\"uploadButton\": \"UploadPhoto_uploadButton__2PWhL\",\n\t\"clickPhotoButton\": \"UploadPhoto_clickPhotoButton__XTCje\",\n\t\"uploadIcon\": \"UploadPhoto_uploadIcon__SxMqd\",\n\t\"cameraIcon\": \"UploadPhoto_cameraIcon__ZFddx\",\n\t\"orText\": \"UploadPhoto_orText__CRjsA\",\n\t\"termsContainer\": \"UploadPhoto_termsContainer__IWLwW\",\n\t\"cameraContainer\": \"UploadPhoto_cameraContainer__hu96x\",\n\t\"captureButton\": \"UploadPhoto_captureButton__awMqD\",\n\t\"selectedFile\": \"UploadPhoto_selectedFile__DgvOp\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxM10ub25lT2ZbOF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEzXS5vbmVPZls4XS51c2VbMl0hLi9wYWdlcy9VcGxvYWRQaG90by5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSx5RUFBeUUsdUJBQXVCLHFCQUFxQixvQkFBb0IsMkNBQTJDLG1CQUFtQixLQUFLLG9DQUFvQyxvQkFBb0IscUNBQXFDLDBCQUEwQiwwQkFBMEIsS0FBSyx3Q0FBd0MsdUJBQXVCLG1CQUFtQixzQkFBc0Isc0JBQXNCLG1CQUFtQixLQUFLLHNDQUFzQyxzQkFBc0IsbUJBQW1CLEtBQUsseUNBQXlDLGtCQUFrQiw2QkFBNkIsMEJBQTBCLEtBQUssaURBQWlELGtCQUFrQixxQkFBcUIsbUJBQW1CLGtCQUFrQixnQ0FBZ0MsS0FBSyxtQ0FBbUMsc0JBQXNCLDBCQUEwQixLQUFLLHNDQUFzQyxzQkFBc0Isa0JBQWtCLDBCQUEwQixLQUFLLDJDQUEyQyxvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsMEJBQTBCLEtBQUssZ0ZBQWdGLGtCQUFrQixvQkFBb0IsNkJBQTZCLHlCQUF5Qiw2QkFBNkIsbUJBQW1CLHNCQUFzQixzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsS0FBSyx3RUFBd0UseUJBQXlCLEtBQUssb0NBQW9DLHNCQUFzQixrQkFBa0IsS0FBSyw0Q0FBNEMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyxrREFBa0QseUJBQXlCLEtBQUssa0RBQWtELHNCQUFzQixrQkFBa0IsS0FBSyxxREFB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LGtCQUFrQix3QkFBd0IsT0FBTyxxQkFBcUIsd0JBQXdCLE9BQU8sNENBQTRDLHdCQUF3QixPQUFPLEtBQUssbUJBQW1CO0FBQ3ZuTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVXBsb2FkUGhvdG8ubW9kdWxlLmNzcz8zNTE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVXBsb2FkUGhvdG9fY29udGFpbmVyX19QMGY1TCB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyNDUsIDI0NSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG4gIFxcbiAgLlVwbG9hZFBob3RvX2hlYWRlcl9fSTBlMnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC5VcGxvYWRQaG90b19iYWNrQnV0dG9uX19tUFdwUCB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG4gIFxcbiAgLlVwbG9hZFBob3RvX2NhcnRJY29uX19jN0NhSCB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuVXBsb2FkUGhvdG9fcHJvZ3Jlc3NCYXJfX1NJQUdoIHtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC5VcGxvYWRQaG90b19wcm9ncmVzc0Jhcl9fU0lBR2g6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gIH1cXG4gIFxcbiAgLlVwbG9hZFBob3RvX3RpdGxlX19BQlpIcyB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIFxcbiAgLlVwbG9hZFBob3RvX3N1YnRpdGxlX193R1Y1OCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC5VcGxvYWRQaG90b191cGxvYWRPcHRpb25zX19Oa3c0UyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG4gIFxcbiAgLlVwbG9hZFBob3RvX3VwbG9hZEJ1dHRvbl9fMlBXaEwsIC5VcGxvYWRQaG90b19jbGlja1Bob3RvQnV0dG9uX19YVENqZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuVXBsb2FkUGhvdG9fdXBsb2FkSWNvbl9fU3hNcWQsIC5VcGxvYWRQaG90b19jYW1lcmFJY29uX19aRmRkeCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLlVwbG9hZFBob3RvX29yVGV4dF9fQ1Jqc0Ege1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgfVxcbiAgXFxuICAuVXBsb2FkUGhvdG9fdGVybXNDb250YWluZXJfX0lXTHdXIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC5VcGxvYWRQaG90b190ZXJtc0NvbnRhaW5lcl9fSVdMd1cgaW5wdXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcXG4gIC5VcGxvYWRQaG90b190ZXJtc0NvbnRhaW5lcl9fSVdMd1cgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgfVxcbiAgXFxuICAuVXBsb2FkUGhvdG9fdXBsb2FkQnV0dG9uX18yUFdoTDpsYXN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbiAgXFxuICAuVXBsb2FkUGhvdG9fdXBsb2FkQnV0dG9uX18yUFdoTDpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICB9XFxuXFxuICAuVXBsb2FkUGhvdG9fY2FtZXJhQ29udGFpbmVyX19odTk2eCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgfVxcbiAgXFxuICAuVXBsb2FkUGhvdG9fY2FtZXJhQ29udGFpbmVyX19odTk2eCB2aWRlbyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuICBcXG4gIC5VcGxvYWRQaG90b19jYXB0dXJlQnV0dG9uX19hd01xRCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG4gIC5VcGxvYWRQaG90b19zZWxlY3RlZEZpbGVfX0Rndk9wIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2FhYTtcXG4gIH1cXG4gIFxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5VcGxvYWRQaG90b19jb250YWluZXJfX1AwZjVMIHtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB9XFxuICBcXG4gICAgLlVwbG9hZFBob3RvX3RpdGxlX19BQlpIcyB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICBcXG4gICAgLlVwbG9hZFBob3RvX3N1YnRpdGxlX193R1Y1OCB7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuICBcXG4gICAgLlVwbG9hZFBob3RvX3VwbG9hZEJ1dHRvbl9fMlBXaEwsIC5VcGxvYWRQaG90b19jbGlja1Bob3RvQnV0dG9uX19YVENqZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL1VwbG9hZFBob3RvLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjQ1LCAyNDUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuICBcXG4gIC5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC5iYWNrQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcbiAgXFxuICAuY2FydEljb24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG4gIFxcbiAgLnByb2dyZXNzQmFyIHtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC5wcm9ncmVzc0Jhcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgfVxcbiAgXFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICBcXG4gIC5zdWJ0aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC51cGxvYWRPcHRpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgfVxcbiAgXFxuICAudXBsb2FkQnV0dG9uLCAuY2xpY2tQaG90b0J1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAudXBsb2FkSWNvbiwgLmNhbWVyYUljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICBcXG4gIC5vclRleHQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgfVxcbiAgXFxuICAudGVybXNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRlcm1zQ29udGFpbmVyIGlucHV0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXFxuICAudGVybXNDb250YWluZXIgbGFiZWwge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiAjYWFhO1xcbiAgfVxcbiAgXFxuICAudXBsb2FkQnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuICBcXG4gIC51cGxvYWRCdXR0b246ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgfVxcblxcbiAgLmNhbWVyYUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgfVxcbiAgXFxuICAuY2FtZXJhQ29udGFpbmVyIHZpZGVvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLmNhcHR1cmVCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuICAuc2VsZWN0ZWRGaWxlIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogI2FhYTtcXG4gIH1cXG4gIFxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG4gIFxcbiAgICAudGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgXFxuICAgIC5zdWJ0aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuICBcXG4gICAgLnVwbG9hZEJ1dHRvbiwgLmNsaWNrUGhvdG9CdXR0b24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlVwbG9hZFBob3RvX2NvbnRhaW5lcl9fUDBmNUxcIixcblx0XCJoZWFkZXJcIjogXCJVcGxvYWRQaG90b19oZWFkZXJfX0kwZTJ5XCIsXG5cdFwiYmFja0J1dHRvblwiOiBcIlVwbG9hZFBob3RvX2JhY2tCdXR0b25fX21QV3BQXCIsXG5cdFwiY2FydEljb25cIjogXCJVcGxvYWRQaG90b19jYXJ0SWNvbl9fYzdDYUhcIixcblx0XCJwcm9ncmVzc0JhclwiOiBcIlVwbG9hZFBob3RvX3Byb2dyZXNzQmFyX19TSUFHaFwiLFxuXHRcInRpdGxlXCI6IFwiVXBsb2FkUGhvdG9fdGl0bGVfX0FCWkhzXCIsXG5cdFwic3VidGl0bGVcIjogXCJVcGxvYWRQaG90b19zdWJ0aXRsZV9fd0dWNThcIixcblx0XCJ1cGxvYWRPcHRpb25zXCI6IFwiVXBsb2FkUGhvdG9fdXBsb2FkT3B0aW9uc19fTmt3NFNcIixcblx0XCJ1cGxvYWRCdXR0b25cIjogXCJVcGxvYWRQaG90b191cGxvYWRCdXR0b25fXzJQV2hMXCIsXG5cdFwiY2xpY2tQaG90b0J1dHRvblwiOiBcIlVwbG9hZFBob3RvX2NsaWNrUGhvdG9CdXR0b25fX1hUQ2plXCIsXG5cdFwidXBsb2FkSWNvblwiOiBcIlVwbG9hZFBob3RvX3VwbG9hZEljb25fX1N4TXFkXCIsXG5cdFwiY2FtZXJhSWNvblwiOiBcIlVwbG9hZFBob3RvX2NhbWVyYUljb25fX1pGZGR4XCIsXG5cdFwib3JUZXh0XCI6IFwiVXBsb2FkUGhvdG9fb3JUZXh0X19DUmpzQVwiLFxuXHRcInRlcm1zQ29udGFpbmVyXCI6IFwiVXBsb2FkUGhvdG9fdGVybXNDb250YWluZXJfX0lXTHdXXCIsXG5cdFwiY2FtZXJhQ29udGFpbmVyXCI6IFwiVXBsb2FkUGhvdG9fY2FtZXJhQ29udGFpbmVyX19odTk2eFwiLFxuXHRcImNhcHR1cmVCdXR0b25cIjogXCJVcGxvYWRQaG90b19jYXB0dXJlQnV0dG9uX19hd01xRFwiLFxuXHRcInNlbGVjdGVkRmlsZVwiOiBcIlVwbG9hZFBob3RvX3NlbGVjdGVkRmlsZV9fRGd2T3BcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[13].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[13].oneOf[8].use[2]!./pages/UploadPhoto.module.css\n"));

/***/ })

});
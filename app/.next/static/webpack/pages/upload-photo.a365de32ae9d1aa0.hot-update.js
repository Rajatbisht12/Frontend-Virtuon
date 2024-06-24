"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload-photo",{

/***/ "./pages/upload-photo.js":
/*!*******************************!*\
  !*** ./pages/upload-photo.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadPhoto.module.css */ \"./pages/UploadPhoto.module.css\");\n/* harmony import */ var _UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UploadPhoto = ()=>{\n    _s();\n    const [agreedToTerms, setAgreedToTerms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [showCamera, setShowCamera] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleUpload = ()=>{\n        if (agreedToTerms) {\n            if (selectedFile) {\n                console.log(\"Photo upload initiated\", selectedFile);\n            // Implement actual upload logic here\n            } else {\n                alert(\"Please select a photo first\");\n            }\n        } else {\n            alert(\"Please agree to the Terms and Conditions\");\n        }\n    };\n    const handleFileSelect = (event)=>{\n        const file = event.target.files[0];\n        if (file) {\n            setSelectedFile(file);\n            console.log(\"File selected:\", file.name);\n        }\n    };\n    const openFileDialog = ()=>{\n        fileInputRef.current.click();\n    };\n    const startCamera = async ()=>{\n        try {\n            const stream = await navigator.mediaDevices.getUserMedia({\n                video: true\n            });\n            if (videoRef.current) {\n                videoRef.current.srcObject = stream;\n                setShowCamera(true);\n            }\n        } catch (err) {\n            console.error(\"Error accessing camera:\", err);\n            alert(\"Unable to access camera. Please make sure you've granted permission.\");\n        }\n    };\n    const capturePhoto = ()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.width = videoRef.current.videoWidth;\n        canvas.height = videoRef.current.videoHeight;\n        canvas.getContext(\"2d\").drawImage(videoRef.current, 0, 0);\n        canvas.toBlob((blob)=>{\n            const file = new File([\n                blob\n            ], \"captured_photo.jpg\", {\n                type: \"image/jpeg\"\n            });\n            setSelectedFile(file);\n            setShowCamera(false);\n            stopCamera();\n        }, \"image/jpeg\");\n    };\n    const stopCamera = ()=>{\n        if (videoRef.current && videoRef.current.srcObject) {\n            videoRef.current.srcObject.getTracks().forEach((track)=>track.stop());\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().backButton),\n                        children: \"←\"\n                    }, void 0, false, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().cartIcon),\n                        children: \"\\uD83D\\uDED2\"\n                    }, void 0, false, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar)\n            }, void 0, false, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Upload photo\"\n            }, void 0, false, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle),\n                children: \"Upload or click a photo in order for us to superimpose the garments on you\"\n            }, void 0, false, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadOptions),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        ref: fileInputRef,\n                        onChange: handleFileSelect,\n                        accept: \"image/*\",\n                        style: {\n                            display: \"none\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadButton),\n                        onClick: openFileDialog,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadIcon),\n                                children: \"⬆️\"\n                            }, void 0, false, {\n                                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined),\n                            \" Upload photo\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().orText),\n                        children: \"or\"\n                    }, void 0, false, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().clickPhotoButton),\n                        onClick: startCamera,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().cameraIcon),\n                                children: \"\\uD83D\\uDCF7\"\n                            }, void 0, false, {\n                                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            \" Click photo\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            showCamera && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().cameraContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        ref: videoRef,\n                        autoPlay: true,\n                        playsInline: true\n                    }, void 0, false, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: capturePhoto,\n                        className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().captureButton),\n                        children: \"Capture\"\n                    }, void 0, false, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, undefined),\n            selectedFile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().selectedFile),\n                children: [\n                    \"Selected: \",\n                    selectedFile.name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().termsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: \"terms\",\n                        checked: agreedToTerms,\n                        onChange: ()=>setAgreedToTerms(!agreedToTerms)\n                    }, void 0, false, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"terms\",\n                        children: \"By checking this you agree to our Terms and Conditions and have read our Privacy Policy\"\n                    }, void 0, false, {\n                        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_UploadPhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadButton),\n                onClick: handleUpload,\n                disabled: !agreedToTerms || !selectedFile,\n                children: \"Upload\"\n            }, void 0, false, {\n                fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rajat-bisht11/Desktop/app/pages/upload-photo.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UploadPhoto, \"V8/efzsWrdC+A/VUW2gsEGctouM=\");\n_c = UploadPhoto;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadPhoto);\nvar _c;\n$RefreshReg$(_c, \"UploadPhoto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91cGxvYWQtcGhvdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFZ0Q7QUFDRjtBQUU5QyxNQUFNSSxjQUFjOztJQUNsQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNUSxlQUFlUCw2Q0FBTUEsQ0FBQztJQUM1QixNQUFNUSxXQUFXUiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNLENBQUNTLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFFN0MsTUFBTVksZUFBZTtRQUNuQixJQUFJUixlQUFlO1lBQ2pCLElBQUlFLGNBQWM7Z0JBQ2hCTyxRQUFRQyxHQUFHLENBQUMsMEJBQTBCUjtZQUN0QyxxQ0FBcUM7WUFDdkMsT0FBTztnQkFDTFMsTUFBTTtZQUNSO1FBQ0YsT0FBTztZQUNMQSxNQUFNO1FBQ1I7SUFDRjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QixNQUFNQyxPQUFPRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLElBQUlGLE1BQU07WUFDUlgsZ0JBQWdCVztZQUNoQkwsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkksS0FBS0csSUFBSTtRQUN6QztJQUNGO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3JCZCxhQUFhZSxPQUFPLENBQUNDLEtBQUs7SUFDNUI7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCLElBQUk7WUFDRixNQUFNQyxTQUFTLE1BQU1DLFVBQVVDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUFFQyxPQUFPO1lBQUs7WUFDdkUsSUFBSXJCLFNBQVNjLE9BQU8sRUFBRTtnQkFDcEJkLFNBQVNjLE9BQU8sQ0FBQ1EsU0FBUyxHQUFHTDtnQkFDN0JmLGNBQWM7WUFDaEI7UUFDRixFQUFFLE9BQU9xQixLQUFLO1lBQ1puQixRQUFRb0IsS0FBSyxDQUFDLDJCQUEyQkQ7WUFDekNqQixNQUFNO1FBQ1I7SUFDRjtJQUVBLE1BQU1tQixlQUFlO1FBQ25CLE1BQU1DLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csS0FBSyxHQUFHN0IsU0FBU2MsT0FBTyxDQUFDZ0IsVUFBVTtRQUMxQ0osT0FBT0ssTUFBTSxHQUFHL0IsU0FBU2MsT0FBTyxDQUFDa0IsV0FBVztRQUM1Q04sT0FBT08sVUFBVSxDQUFDLE1BQU1DLFNBQVMsQ0FBQ2xDLFNBQVNjLE9BQU8sRUFBRSxHQUFHO1FBQ3ZEWSxPQUFPUyxNQUFNLENBQUMsQ0FBQ0M7WUFDYixNQUFNM0IsT0FBTyxJQUFJNEIsS0FBSztnQkFBQ0Q7YUFBSyxFQUFFLHNCQUFzQjtnQkFBRUUsTUFBTTtZQUFhO1lBQ3pFeEMsZ0JBQWdCVztZQUNoQlAsY0FBYztZQUNkcUM7UUFDRixHQUFHO0lBQ0w7SUFFQSxNQUFNQSxhQUFhO1FBQ2pCLElBQUl2QyxTQUFTYyxPQUFPLElBQUlkLFNBQVNjLE9BQU8sQ0FBQ1EsU0FBUyxFQUFFO1lBQ2xEdEIsU0FBU2MsT0FBTyxDQUFDUSxTQUFTLENBQUNrQixTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsQ0FBQUEsUUFBU0EsTUFBTUMsSUFBSTtRQUNwRTtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdwRCwwRUFBZ0I7OzBCQUM5Qiw4REFBQ21EO2dCQUFJQyxXQUFXcEQsdUVBQWE7O2tDQUMzQiw4REFBQ3VEO3dCQUFPSCxXQUFXcEQsMkVBQWlCO2tDQUFFOzs7Ozs7a0NBQ3RDLDhEQUFDbUQ7d0JBQUlDLFdBQVdwRCx5RUFBZTtrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ21EO2dCQUFJQyxXQUFXcEQsNEVBQWtCOzs7Ozs7MEJBQ2xDLDhEQUFDMkQ7Z0JBQUdQLFdBQVdwRCxzRUFBWTswQkFBRTs7Ozs7OzBCQUM3Qiw4REFBQzZEO2dCQUFFVCxXQUFXcEQseUVBQWU7MEJBQUU7Ozs7OzswQkFHL0IsOERBQUNtRDtnQkFBSUMsV0FBV3BELDhFQUFvQjs7a0NBQ2xDLDhEQUFDZ0U7d0JBQ0NuQixNQUFLO3dCQUNMb0IsS0FBSzNEO3dCQUNMNEQsVUFBVXBEO3dCQUNWcUQsUUFBTzt3QkFDUEMsT0FBTzs0QkFBRUMsU0FBUzt3QkFBTzs7Ozs7O2tDQUUzQiw4REFBQ2Q7d0JBQU9ILFdBQVdwRCw2RUFBbUI7d0JBQUV1RSxTQUFTbkQ7OzBDQUMvQyw4REFBQ29EO2dDQUFLcEIsV0FBV3BELDJFQUFpQjswQ0FBRTs7Ozs7OzRCQUFTOzs7Ozs7O2tDQUUvQyw4REFBQzZEO3dCQUFFVCxXQUFXcEQsdUVBQWE7a0NBQUU7Ozs7OztrQ0FDN0IsOERBQUN1RDt3QkFBT0gsV0FBV3BELGlGQUF1Qjt3QkFBRXVFLFNBQVNoRDs7MENBQ25ELDhEQUFDaUQ7Z0NBQUtwQixXQUFXcEQsMkVBQWlCOzBDQUFFOzs7Ozs7NEJBQVM7Ozs7Ozs7Ozs7Ozs7WUFHaERRLDRCQUNDLDhEQUFDMkM7Z0JBQUlDLFdBQVdwRCxnRkFBc0I7O2tDQUNwQyw4REFBQzRCO3dCQUFNcUMsS0FBSzFEO3dCQUFVdUUsUUFBUTt3QkFBQ0MsV0FBVzs7Ozs7O2tDQUMxQyw4REFBQ3hCO3dCQUFPZ0IsU0FBU3ZDO3dCQUFjb0IsV0FBV3BELDhFQUFvQjtrQ0FBRTs7Ozs7Ozs7Ozs7O1lBR25FSSw4QkFDQyw4REFBQ3lEO2dCQUFFVCxXQUFXcEQsNkVBQW1COztvQkFBRTtvQkFBV0ksYUFBYWUsSUFBSTs7Ozs7OzswQkFFakUsOERBQUNnQztnQkFBSUMsV0FBV3BELCtFQUFxQjs7a0NBQ25DLDhEQUFDZ0U7d0JBQ0NuQixNQUFLO3dCQUNMcUMsSUFBRzt3QkFDSEMsU0FBU2pGO3dCQUNUZ0UsVUFBVSxJQUFNL0QsaUJBQWlCLENBQUNEOzs7Ozs7a0NBRXBDLDhEQUFDa0Y7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7Ozs7Ozs7OzswQkFJekIsOERBQUM5QjtnQkFDQ0gsV0FBV3BELDZFQUFtQjtnQkFDOUJ1RSxTQUFTN0Q7Z0JBQ1Q0RSxVQUFVLENBQUNwRixpQkFBaUIsQ0FBQ0U7MEJBQzlCOzs7Ozs7Ozs7Ozs7QUFLUDtHQXhITUg7S0FBQUE7QUEwSE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXBsb2FkLXBob3RvLmpzPzBlMDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVXBsb2FkUGhvdG8ubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFVwbG9hZFBob3RvID0gKCkgPT4ge1xuICBjb25zdCBbYWdyZWVkVG9UZXJtcywgc2V0QWdyZWVkVG9UZXJtc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3Nob3dDYW1lcmEsIHNldFNob3dDYW1lcmFdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpID0+IHtcbiAgICBpZiAoYWdyZWVkVG9UZXJtcykge1xuICAgICAgaWYgKHNlbGVjdGVkRmlsZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnUGhvdG8gdXBsb2FkIGluaXRpYXRlZCcsIHNlbGVjdGVkRmlsZSk7XG4gICAgICAgIC8vIEltcGxlbWVudCBhY3R1YWwgdXBsb2FkIGxvZ2ljIGhlcmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IGEgcGhvdG8gZmlyc3QnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBhZ3JlZSB0byB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnMnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZVNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHNldFNlbGVjdGVkRmlsZShmaWxlKTtcbiAgICAgIGNvbnNvbGUubG9nKCdGaWxlIHNlbGVjdGVkOicsIGZpbGUubmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9wZW5GaWxlRGlhbG9nID0gKCkgPT4ge1xuICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50LmNsaWNrKCk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRDYW1lcmEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSk7XG4gICAgICBpZiAodmlkZW9SZWYuY3VycmVudCkge1xuICAgICAgICB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgc2V0U2hvd0NhbWVyYSh0cnVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhY2Nlc3NpbmcgY2FtZXJhOlwiLCBlcnIpO1xuICAgICAgYWxlcnQoXCJVbmFibGUgdG8gYWNjZXNzIGNhbWVyYS4gUGxlYXNlIG1ha2Ugc3VyZSB5b3UndmUgZ3JhbnRlZCBwZXJtaXNzaW9uLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FwdHVyZVBob3RvID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy53aWR0aCA9IHZpZGVvUmVmLmN1cnJlbnQudmlkZW9XaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gdmlkZW9SZWYuY3VycmVudC52aWRlb0hlaWdodDtcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodmlkZW9SZWYuY3VycmVudCwgMCwgMCk7XG4gICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKFtibG9iXSwgXCJjYXB0dXJlZF9waG90by5qcGdcIiwgeyB0eXBlOiBcImltYWdlL2pwZWdcIiB9KTtcbiAgICAgIHNldFNlbGVjdGVkRmlsZShmaWxlKTtcbiAgICAgIHNldFNob3dDYW1lcmEoZmFsc2UpO1xuICAgICAgc3RvcENhbWVyYSgpO1xuICAgIH0sICdpbWFnZS9qcGVnJyk7XG4gIH07XG5cbiAgY29uc3Qgc3RvcENhbWVyYSA9ICgpID0+IHtcbiAgICBpZiAodmlkZW9SZWYuY3VycmVudCAmJiB2aWRlb1JlZi5jdXJyZW50LnNyY09iamVjdCkge1xuICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrQnV0dG9ufT7ihpA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ0SWNvbn0+8J+bkjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQmFyfT48L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VXBsb2FkIHBob3RvPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5cbiAgICAgICAgVXBsb2FkIG9yIGNsaWNrIGEgcGhvdG8gaW4gb3JkZXIgZm9yIHVzIHRvIHN1cGVyaW1wb3NlIHRoZSBnYXJtZW50cyBvbiB5b3VcbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkT3B0aW9uc30+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZVNlbGVjdH1cbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRCdXR0b259IG9uQ2xpY2s9e29wZW5GaWxlRGlhbG9nfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRJY29ufT7irIbvuI88L3NwYW4+IFVwbG9hZCBwaG90b1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMub3JUZXh0fT5vcjwvcD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbGlja1Bob3RvQnV0dG9ufSBvbkNsaWNrPXtzdGFydENhbWVyYX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2FtZXJhSWNvbn0+8J+Ttzwvc3Bhbj4gQ2xpY2sgcGhvdG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93Q2FtZXJhICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYW1lcmFDb250YWluZXJ9PlxuICAgICAgICAgIDx2aWRlbyByZWY9e3ZpZGVvUmVmfSBhdXRvUGxheSBwbGF5c0lubGluZSAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FwdHVyZVBob3RvfSBjbGFzc05hbWU9e3N0eWxlcy5jYXB0dXJlQnV0dG9ufT5DYXB0dXJlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtzZWxlY3RlZEZpbGUgJiYgKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RlZEZpbGV9PlNlbGVjdGVkOiB7c2VsZWN0ZWRGaWxlLm5hbWV9PC9wPlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVybXNDb250YWluZXJ9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGlkPVwidGVybXNcIlxuICAgICAgICAgIGNoZWNrZWQ9e2FncmVlZFRvVGVybXN9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldEFncmVlZFRvVGVybXMoIWFncmVlZFRvVGVybXMpfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlcm1zXCI+XG4gICAgICAgICAgQnkgY2hlY2tpbmcgdGhpcyB5b3UgYWdyZWUgdG8gb3VyIFRlcm1zIGFuZCBDb25kaXRpb25zIGFuZCBoYXZlIHJlYWQgb3VyIFByaXZhY3kgUG9saWN5XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZEJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlVXBsb2FkfVxuICAgICAgICBkaXNhYmxlZD17IWFncmVlZFRvVGVybXMgfHwgIXNlbGVjdGVkRmlsZX1cbiAgICAgID5cbiAgICAgICAgVXBsb2FkXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZFBob3RvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiVXBsb2FkUGhvdG8iLCJhZ3JlZWRUb1Rlcm1zIiwic2V0QWdyZWVkVG9UZXJtcyIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsImZpbGVJbnB1dFJlZiIsInZpZGVvUmVmIiwic2hvd0NhbWVyYSIsInNldFNob3dDYW1lcmEiLCJoYW5kbGVVcGxvYWQiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJoYW5kbGVGaWxlU2VsZWN0IiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwib3BlbkZpbGVEaWFsb2ciLCJjdXJyZW50IiwiY2xpY2siLCJzdGFydENhbWVyYSIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwic3JjT2JqZWN0IiwiZXJyIiwiZXJyb3IiLCJjYXB0dXJlUGhvdG8iLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJoZWlnaHQiLCJ2aWRlb0hlaWdodCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJ0b0Jsb2IiLCJibG9iIiwiRmlsZSIsInR5cGUiLCJzdG9wQ2FtZXJhIiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInRyYWNrIiwic3RvcCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhlYWRlciIsImJ1dHRvbiIsImJhY2tCdXR0b24iLCJjYXJ0SWNvbiIsInByb2dyZXNzQmFyIiwiaDEiLCJ0aXRsZSIsInAiLCJzdWJ0aXRsZSIsInVwbG9hZE9wdGlvbnMiLCJpbnB1dCIsInJlZiIsIm9uQ2hhbmdlIiwiYWNjZXB0Iiwic3R5bGUiLCJkaXNwbGF5IiwidXBsb2FkQnV0dG9uIiwib25DbGljayIsInNwYW4iLCJ1cGxvYWRJY29uIiwib3JUZXh0IiwiY2xpY2tQaG90b0J1dHRvbiIsImNhbWVyYUljb24iLCJjYW1lcmFDb250YWluZXIiLCJhdXRvUGxheSIsInBsYXlzSW5saW5lIiwiY2FwdHVyZUJ1dHRvbiIsInRlcm1zQ29udGFpbmVyIiwiaWQiLCJjaGVja2VkIiwibGFiZWwiLCJodG1sRm9yIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/upload-photo.js\n"));

/***/ })

});
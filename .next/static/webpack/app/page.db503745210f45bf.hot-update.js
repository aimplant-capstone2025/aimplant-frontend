"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/UploadImage.tsx":
/*!****************************************!*\
  !*** ./src/components/UploadImage.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_uploadthing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/uploadthing */ \"(app-pages-browser)/./src/utils/uploadthing.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction UploadImage(props) {\n    _s();\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [imageLoading, setImageLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showImage, setShowImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showChangeButton, setShowChangeButton] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (imageUrl) {\n            props.setImageUrl(imageUrl);\n        }\n    }, [\n        imageUrl\n    ]);\n    const handleImageLoad = ()=>{\n        setImageLoading(false);\n        setShowImage(true);\n    };\n    const handleImageError = ()=>{\n        setImageError(true);\n    };\n    const deleteImage = async (fileUrl)=>{\n        try {\n            const response = await fetch(\"/api/uploadthing\", {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    url: fileUrl\n                })\n            });\n            if (!response.ok) {\n                setImageError(true);\n                const errorData = await response.json();\n                console.error(\"Failed to delete image:\", errorData.error || \"Unknown error\");\n                throw new Error(errorData.error || \"Failed to delete image\");\n            }\n            console.log(\"Image deleted successfully\");\n            setShowChangeButton(false);\n            setShowImage(false);\n            setImageLoading(true);\n            setImageUrl(null);\n        } catch (error) {\n            console.error(\"Error deleting image:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"block text-purple-800 font-medium mb-2\",\n                children: \"Upload image\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-purple-50 border-2 border-dashed border-purple-300 rounded-lg p-6 text-center\",\n                children: [\n                    imageError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-error-default ml-2\",\n                        children: \"Error: image cannot be loaded.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    showImage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: imageLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-4 justify-center items-center \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Loading...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            alt: \"Uploaded Image\",\n                            src: imageUrl || \"\",\n                            layout: \"fill\",\n                            objectFit: \"cover\",\n                            className: \"rounded-xl transition duration-500 ease-out \".concat(imageLoading ? \"blur-md\" : \"blur-0\"),\n                            onError: handleImageError,\n                            onLoadingComplete: handleImageLoad\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-4 justify-center items-center border-4 border-gray-100 rounded-xl w-full h-[400px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-center justify-center py-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"w-12 h-12 text-purple-600 mb-2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-purple-700 mb-1\",\n                                        children: \"Upload a panoramic X-ray image\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-purple-500 text-sm\",\n                                        children: \"(max 5MB)\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_uploadthing__WEBPACK_IMPORTED_MODULE_1__.UploadButton, {\n                                appearance: {\n                                    button: \"p-4 !text-labelText-blue ut-ready:bg-labelFill-green ut-uploading:cursor-not-allowed rounded-md bg-labelFill-blue bg-none after:bg-labelFill-orange hover:shadow-md\",\n                                    container: \"w-max flex-row rounded-md border-cyan-300\",\n                                    allowedContent: \"flex h-8 flex-col items-center justify-center px-2 text-black\"\n                                },\n                                endpoint: \"imageUploader\",\n                                onClientUploadComplete: (res)=>{\n                                    // Update the image URL state when the upload completes\n                                    console.log(\"Files: \", res);\n                                    setImageUrl(res[0].ufsUrl);\n                                    setShowImage(true);\n                                    setImageLoading(false);\n                                    setShowChangeButton(true);\n                                //alert(\"Upload Completed\");\n                                },\n                                onUploadError: (error)=>{\n                                    setImageError(true);\n                                    alert(\"ERROR! \".concat(error.message));\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    showChangeButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"default\",\n                        onClick: ()=>deleteImage(imageUrl || \"\"),\n                        children: \"Change Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fahfi\\\\capstone\\\\web\\\\prae\\\\aimplant-frontend\\\\src\\\\components\\\\UploadImage.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadImage, \"NinanOl8otEG/dYgzAgXm4EVKgQ=\");\n_c = UploadImage;\nvar _c;\n$RefreshReg$(_c, \"UploadImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEltYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ1A7QUFDYjtBQUNNO0FBQ0U7QUFXdkIsU0FBU00sWUFBWUMsS0FFbkM7O0lBQ0MsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFnQjtJQUN4RCxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBVTtJQUMxRCxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQVU7SUFDdEQsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFVO0lBQ3BELE1BQU0sQ0FBQ2Msa0JBQWtCQyxvQkFBb0IsR0FBR2YsK0NBQVFBLENBQVU7SUFFbEVELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sVUFBVTtZQUNaRCxNQUFNRSxXQUFXLENBQUNEO1FBQ3BCO0lBQ0YsR0FBRztRQUFDQTtLQUFTO0lBRWIsTUFBTVUsa0JBQWtCO1FBQ3RCUCxnQkFBZ0I7UUFDaEJJLGFBQWE7SUFDZjtJQUVBLE1BQU1JLG1CQUFtQjtRQUN2Qk4sY0FBYztJQUNoQjtJQUVBLE1BQU1PLGNBQWMsT0FBT0M7UUFDekIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxvQkFBb0I7Z0JBQy9DQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUMsS0FBS1I7Z0JBQVE7WUFDdEM7WUFFQSxJQUFJLENBQUNDLFNBQVNRLEVBQUUsRUFBRTtnQkFDaEJqQixjQUFjO2dCQUNkLE1BQU1rQixZQUFZLE1BQU1ULFNBQVNVLElBQUk7Z0JBQ3JDQyxRQUFRQyxLQUFLLENBQ1gsMkJBQ0FILFVBQVVHLEtBQUssSUFBSTtnQkFFckIsTUFBTSxJQUFJQyxNQUFNSixVQUFVRyxLQUFLLElBQUk7WUFDckM7WUFFQUQsUUFBUUcsR0FBRyxDQUFDO1lBQ1puQixvQkFBb0I7WUFDcEJGLGFBQWE7WUFDYkosZ0JBQWdCO1lBQ2hCRixZQUFZO1FBQ2QsRUFBRSxPQUFPeUIsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMseUJBQXlCQTtRQUN6QztJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBTUQsV0FBVTswQkFBeUM7Ozs7OzswQkFDMUQsOERBQUNEO2dCQUFJQyxXQUFVOztvQkFDZDFCLDRCQUNDLDhEQUFDNEI7d0JBQUVGLFdBQVU7a0NBQTBCOzs7Ozs7b0JBS3hDeEIsMEJBQ0MsOERBQUN1Qjt3QkFBSUMsV0FBVTtrQ0FDWjVCLDZCQUNDLDhEQUFDMkI7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNFOzBDQUFFOzs7Ozs7Ozs7O2lEQUdMLDhEQUFDckMsa0RBQUtBOzRCQUNKc0MsS0FBSTs0QkFDSkMsS0FBS2xDLFlBQVk7NEJBQ2pCbUMsUUFBTzs0QkFDUEMsV0FBVTs0QkFDVk4sV0FBVywrQ0FBbUYsT0FBcEM1QixlQUFlLFlBQVk7NEJBQ3JGbUMsU0FBUzFCOzRCQUNUMkIsbUJBQW1CNUI7Ozs7Ozs7Ozs7NkNBS3pCLDhEQUFDbUI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ0QsOERBQUNqQyxrRkFBTUE7d0NBQUNpQyxXQUFVOzs7Ozs7a0RBQ2xCLDhEQUFDRTt3Q0FBRUYsV0FBVTtrREFBdUI7Ozs7OztrREFDcEMsOERBQUNFO3dDQUFFRixXQUFVO2tEQUEwQjs7Ozs7Ozs7Ozs7OzBDQUdyRCw4REFBQ3RDLDREQUFZQTtnQ0FDWCtDLFlBQVk7b0NBQ1ZDLFFBQ0U7b0NBQ0ZDLFdBQVc7b0NBQ1hDLGdCQUNFO2dDQUNKO2dDQUVBQyxVQUFTO2dDQUNUQyx3QkFBd0IsQ0FBQ0M7b0NBQ3ZCLHVEQUF1RDtvQ0FDdkRwQixRQUFRRyxHQUFHLENBQUMsV0FBV2lCO29DQUN2QjVDLFlBQVk0QyxHQUFHLENBQUMsRUFBRSxDQUFDQyxNQUFNO29DQUN6QnZDLGFBQWE7b0NBQ2JKLGdCQUFnQjtvQ0FDaEJNLG9CQUFvQjtnQ0FDcEIsNEJBQTRCO2dDQUM5QjtnQ0FDQXNDLGVBQWUsQ0FBQ3JCO29DQUNkckIsY0FBYztvQ0FDZDJDLE1BQU0sVUFBd0IsT0FBZHRCLE1BQU11QixPQUFPO2dDQUMvQjs7Ozs7Ozs7Ozs7O29CQUtMekMsa0NBQ0MsOERBQUNaLDhDQUFNQTt3QkFBQ3NELFNBQVE7d0JBQVVDLFNBQVMsSUFBTXZDLFlBQVlaLFlBQVk7a0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5RTtHQTlId0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEltYWdlLnRzeD80MjM5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBVcGxvYWRCdXR0b24gfSBmcm9tICdAL3V0aWxzL3VwbG9hZHRoaW5nJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3VpL2J1dHRvbidcclxuaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBmYVBsdXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhSW1hZ2UgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucydcclxuXHJcbmludGVyZmFjZSBVcGxvYWRSZXNwb25zZSB7XHJcbiAgdWZzVXJsOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICBrZXk6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRJbWFnZShwcm9wczoge1xyXG4gIHNldEltYWdlVXJsOiAodXJsOiBzdHJpbmcpID0+IHZvaWRcclxufSkge1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0SW1hZ2VVcmxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICBjb25zdCBbaW1hZ2VMb2FkaW5nLCBzZXRJbWFnZUxvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW2ltYWdlRXJyb3IsIHNldEltYWdlRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgY29uc3QgW3Nob3dJbWFnZSwgc2V0U2hvd0ltYWdlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93Q2hhbmdlQnV0dG9uLCBzZXRTaG93Q2hhbmdlQnV0dG9uXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlVXJsKSB7XHJcbiAgICAgIHByb3BzLnNldEltYWdlVXJsKGltYWdlVXJsKVxyXG4gICAgfVxyXG4gIH0sIFtpbWFnZVVybF0pXHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VMb2FkID0gKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VMb2FkaW5nKGZhbHNlKVxyXG4gICAgc2V0U2hvd0ltYWdlKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVJbWFnZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VFcnJvcih0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlSW1hZ2UgPSBhc3luYyAoZmlsZVVybDogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VwbG9hZHRoaW5nJywge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXJsOiBmaWxlVXJsIH0pLFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHNldEltYWdlRXJyb3IodHJ1ZSlcclxuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgJ0ZhaWxlZCB0byBkZWxldGUgaW1hZ2U6JyxcclxuICAgICAgICAgIGVycm9yRGF0YS5lcnJvciB8fCAnVW5rbm93biBlcnJvcidcclxuICAgICAgICApXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRmFpbGVkIHRvIGRlbGV0ZSBpbWFnZScpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBkZWxldGVkIHN1Y2Nlc3NmdWxseScpXHJcbiAgICAgIHNldFNob3dDaGFuZ2VCdXR0b24oZmFsc2UpXHJcbiAgICAgIHNldFNob3dJbWFnZShmYWxzZSlcclxuICAgICAgc2V0SW1hZ2VMb2FkaW5nKHRydWUpXHJcbiAgICAgIHNldEltYWdlVXJsKG51bGwpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBpbWFnZTonLCBlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtcHVycGxlLTgwMCBmb250LW1lZGl1bSBtYi0yXCI+VXBsb2FkIGltYWdlPC9sYWJlbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItcHVycGxlLTMwMCByb3VuZGVkLWxnIHAtNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICB7aW1hZ2VFcnJvciAmJiAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lcnJvci1kZWZhdWx0IG1sLTJcIj5cclxuICAgICAgICAgIEVycm9yOiBpbWFnZSBjYW5ub3QgYmUgbG9hZGVkLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtzaG93SW1hZ2UgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICB7aW1hZ2VMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGFsdD1cIlVwbG9hZGVkIEltYWdlXCJcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsIHx8ICcnfVxyXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLXhsIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Utb3V0ICR7aW1hZ2VMb2FkaW5nID8gJ2JsdXItbWQnIDogJ2JsdXItMCd9YH1cclxuICAgICAgICAgICAgICBvbkVycm9yPXtoYW5kbGVJbWFnZUVycm9yfVxyXG4gICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlPXtoYW5kbGVJbWFnZUxvYWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci00IGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLXhsIHctZnVsbCBoLVs0MDBweF1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkIGNsYXNzTmFtZT1cInctMTIgaC0xMiB0ZXh0LXB1cnBsZS02MDAgbWItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTcwMCBtYi0xXCI+VXBsb2FkIGEgcGFub3JhbWljIFgtcmF5IGltYWdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS01MDAgdGV4dC1zbVwiPihtYXggNU1CKTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8VXBsb2FkQnV0dG9uXHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U9e3tcclxuICAgICAgICAgICAgICBidXR0b246XHJcbiAgICAgICAgICAgICAgICBcInAtNCAhdGV4dC1sYWJlbFRleHQtYmx1ZSB1dC1yZWFkeTpiZy1sYWJlbEZpbGwtZ3JlZW4gdXQtdXBsb2FkaW5nOmN1cnNvci1ub3QtYWxsb3dlZCByb3VuZGVkLW1kIGJnLWxhYmVsRmlsbC1ibHVlIGJnLW5vbmUgYWZ0ZXI6YmctbGFiZWxGaWxsLW9yYW5nZSBob3ZlcjpzaGFkb3ctbWRcIiwgIC8vIFVzZSByb3VuZGVkLW1kIGhlcmVcclxuICAgICAgICAgICAgICBjb250YWluZXI6IFwidy1tYXggZmxleC1yb3cgcm91bmRlZC1tZCBib3JkZXItY3lhbi0zMDBcIixcclxuICAgICAgICAgICAgICBhbGxvd2VkQ29udGVudDpcclxuICAgICAgICAgICAgICAgIFwiZmxleCBoLTggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTIgdGV4dC1ibGFja1wiLFxyXG4gICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgZW5kcG9pbnQ9XCJpbWFnZVVwbG9hZGVyXCJcclxuICAgICAgICAgICAgb25DbGllbnRVcGxvYWRDb21wbGV0ZT17KHJlczogVXBsb2FkUmVzcG9uc2VbXSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaW1hZ2UgVVJMIHN0YXRlIHdoZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXNcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmlsZXM6ICcsIHJlcylcclxuICAgICAgICAgICAgICBzZXRJbWFnZVVybChyZXNbMF0udWZzVXJsKVxyXG4gICAgICAgICAgICAgIHNldFNob3dJbWFnZSh0cnVlKVxyXG4gICAgICAgICAgICAgIHNldEltYWdlTG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICBzZXRTaG93Q2hhbmdlQnV0dG9uKHRydWUpXHJcbiAgICAgICAgICAgICAgLy9hbGVydChcIlVwbG9hZCBDb21wbGV0ZWRcIik7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uVXBsb2FkRXJyb3I9eyhlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJbWFnZUVycm9yKHRydWUpXHJcbiAgICAgICAgICAgICAgYWxlcnQoYEVSUk9SISAke2Vycm9yLm1lc3NhZ2V9YClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7c2hvd0NoYW5nZUJ1dHRvbiAmJiAoXHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUltYWdlKGltYWdlVXJsIHx8ICcnKX0+XHJcbiAgICAgICAgICBDaGFuZ2UgSW1hZ2VcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJVcGxvYWRCdXR0b24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQnV0dG9uIiwiVXBsb2FkIiwiVXBsb2FkSW1hZ2UiLCJwcm9wcyIsImltYWdlVXJsIiwic2V0SW1hZ2VVcmwiLCJpbWFnZUxvYWRpbmciLCJzZXRJbWFnZUxvYWRpbmciLCJpbWFnZUVycm9yIiwic2V0SW1hZ2VFcnJvciIsInNob3dJbWFnZSIsInNldFNob3dJbWFnZSIsInNob3dDaGFuZ2VCdXR0b24iLCJzZXRTaG93Q2hhbmdlQnV0dG9uIiwiaGFuZGxlSW1hZ2VMb2FkIiwiaGFuZGxlSW1hZ2VFcnJvciIsImRlbGV0ZUltYWdlIiwiZmlsZVVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cmwiLCJvayIsImVycm9yRGF0YSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwicCIsImFsdCIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsIm9uRXJyb3IiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImFwcGVhcmFuY2UiLCJidXR0b24iLCJjb250YWluZXIiLCJhbGxvd2VkQ29udGVudCIsImVuZHBvaW50Iiwib25DbGllbnRVcGxvYWRDb21wbGV0ZSIsInJlcyIsInVmc1VybCIsIm9uVXBsb2FkRXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UploadImage.tsx\n"));

/***/ })

});
/******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
        /***/ './src/components/Box/Box.tsx':
            /*!************************************!*\
  !*** ./src/components/Box/Box.tsx ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */ defaultMarginMap: () => /* binding */ defaultMarginMap,
                    /* harmony export */ defaultMargins: () => /* binding */ defaultMargins,
                    /* harmony export */ standardMargins: () => /* binding */ standardMargins,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! global-styles/variables/spacing */ './src/global-styles/variables/spacing.js',
                    );
                /* harmony import */ var global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var lib_hocs_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/hocs/adaptive/adaptive */ './src/lib/hocs/adaptive/adaptive.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
                /* harmony import */ var _Box_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./Box.css */ './src/components/Box/Box.css',
                );
                const _excluded = [
                    'className',
                    'width',
                    'height',
                    'm',
                    'mt',
                    'mr',
                    'mb',
                    'ml',
                    'column',
                    'row',
                    'flexDirection',
                    'flexStart',
                    'center',
                    'flexEnd',
                    'spaceBetween',
                    'spaceAround',
                    'justifyContent',
                    'alignItems',
                    'alignSelf',
                    'wrap',
                    'flexWrap',
                    'grow',
                    'shrink',
                    'flex',
                    'style',
                    'children',
                ];

                function _extends() {
                    _extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                            return target;
                        };
                    return _extends.apply(this, arguments);
                }

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                /* eslint-disable react/no-multi-comp */

                const standardMargins = Object.keys(
                    global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_1___default(),
                );
                const defaultXlMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__XL,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__XL,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__XL,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__XL,
                };
                const defaultLgMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__LG,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__LG,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__LG,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__LG,
                };
                const defaultMdpMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__MDp,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__MDp,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__MDp,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__MDp,
                };
                const defaultMdMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__MD,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__MD,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__MD,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__MD,
                };
                const defaultSmpMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__SMp,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__SMp,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__SMp,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__SMp,
                };
                const defaultSmMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__SM,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__SM,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__SM,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__SM,
                };
                const defaultXsMargins = {
                    mt: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mt__XS,
                    mr: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mr__XS,
                    mb: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].mb__XS,
                    ml: _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].ml__XS,
                };
                const defaultMarginMap = {
                    XL: defaultXlMargins,
                    LG: defaultLgMargins,
                    MDp: defaultMdpMargins,
                    MD: defaultMdMargins,
                    SMp: defaultSmpMargins,
                    SM: defaultSmMargins,
                    XS: defaultXsMargins,
                };
                const defaultMargins = Object.keys(defaultMarginMap);
                const marginKeyList = ['mt', 'mr', 'mb', 'ml'];

                const getMarginClassNames = (marginMap) => {
                    return marginKeyList.reduce((classNames, key) => {
                        const value = marginMap[key];

                        if (!value || typeof value === 'number') {
                            return classNames;
                        }

                        return classNames.concat(defaultMarginMap[value === true ? 'MD' : value][key]);
                    }, []);
                };

                const marginKeyPropertyMap = {
                    mt: 'marginTop',
                    mr: 'marginRight',
                    mb: 'marginBottom',
                    ml: 'marginLeft',
                };

                const getMarginStyle = (marginMap) => {
                    return marginKeyList.reduce((style, key) => {
                        const value = marginMap[key];

                        if (typeof value === 'number') {
                            const property = marginKeyPropertyMap[key];
                            style[property] = value + 'rem';
                        }

                        return style;
                    }, {});
                };

                /**
                 * This component generates a div with applied layout.
                 *
                 * @param {Object} BoxProps - Object containing the following:
                 *   @param {string} [className] - Additional class(es) to be added to the component.
                 *   @param {CSSProperties['width']} [width] - Width of the box. Supports standard CSS units, numeric values are transformed to rem.
                 *   @param {CSSProperties['height']} [height] - Height of the box. Supports standard CSS units, numeric values are transformed to rem.
                 *   @param {SpacingType} [m] - Margin value to be applied to all sides of the box. Supports XL, LG, MDp, MD, SMp, SM, XS, true for MD margin, numeric values are transformed to rem.
                 *   @param {SpacingType} [mt=m] - Margin value to be applied to the top of the box.
                 *   @param {SpacingType} [mr=m] - Margin value to be applied to the right of the box.
                 *   @param {SpacingType} [mb=m] - Margin value to be applied to the bottom of the box.
                 *   @param {SpacingType} [ml=m] - Margin value to be applied to the left of the box.
                 *   @param {boolean} [column] - Specifies whether the flex container should be displayed as a column.
                 *   @param {boolean} [row] - Specifies whether the flex container should be displayed as a row.
                 *   @param {CSSProperties["flexDirection"]} [flexDirection] - Specifies the direction of the flex container.
                 *   @param {boolean} [flexStart] - Specifies whether the flex items should be aligned to the start of the container.
                 *   @param {boolean} [center] - Specifies whether the flex items should be centered within the container.
                 *   @param {boolean} [flexEnd] - Specifies whether the flex items should be aligned to the end of the container.
                 *   @param {boolean} [spaceBetween] - Specifies whether the flex items should be evenly spaced with space between them.
                 *   @param {boolean} [spaceAround] - Specifies whether the flex items should be evenly spaced with space around them.
                 *   @param {CSSProperties["justifyContent"]} [justifyContent] - Specifies how the flex items should be aligned along the main axis.
                 *   @param {CSSProperties["alignItems"]} [alignItems] - Specifies how the flex items should be aligned along the cross axis.
                 *   @param {CSSProperties["alignSelf"]} [alignSelf] - Specifies how a flex item should align itself along the cross axis.
                 *   @param {boolean} [wrap] - Specifies whether the flex items should wrap if they exceed the container's width.
                 *   @param {CSSProperties["flexWrap"]} [flexWrap] - Specifies whether the flex items should wrap if they exceed the container's width.
                 *   @param {boolean} [grow] - Specifies the flex grow factor of the flex item.
                 *   @param {boolean} [shrink] - Specifies the flex shrink factor of the flex item.
                 *   @param {CSSProperties["flex"]} [flex] - Specifies the flex grow, flex shrink, and flex basis of the flex item.
                 *   @param {CSSProperties} [style] - Custom styles to be applied to the component.
                 *   @param {ReactNode} [children] - Child components to be rendered within the component.
                 *   @param {Object} [...restProps] - Additional HTML div properties.
                 * @return {JSX.Element} A box element.
                 */
                const Box = (_ref) => {
                    let className = _ref.className,
                        width = _ref.width,
                        height = _ref.height,
                        m = _ref.m,
                        _ref$mt = _ref.mt,
                        mt = _ref$mt === void 0 ? m : _ref$mt,
                        _ref$mr = _ref.mr,
                        mr = _ref$mr === void 0 ? m : _ref$mr,
                        _ref$mb = _ref.mb,
                        mb = _ref$mb === void 0 ? m : _ref$mb,
                        _ref$ml = _ref.ml,
                        ml = _ref$ml === void 0 ? m : _ref$ml,
                        column = _ref.column,
                        row = _ref.row,
                        _ref$flexDirection = _ref.flexDirection,
                        flexDirection =
                            _ref$flexDirection === void 0
                                ? (column && 'column') || (row && 'row') || undefined
                                : _ref$flexDirection,
                        flexStart = _ref.flexStart,
                        center = _ref.center,
                        flexEnd = _ref.flexEnd,
                        spaceBetween = _ref.spaceBetween,
                        spaceAround = _ref.spaceAround,
                        _ref$justifyContent = _ref.justifyContent,
                        justifyContent =
                            _ref$justifyContent === void 0
                                ? (flexStart && 'flex-start') ||
                                  (center && 'center') ||
                                  (flexEnd && 'flex-end') ||
                                  (spaceBetween && 'space-between') ||
                                  (spaceAround && 'space-around') ||
                                  undefined
                                : _ref$justifyContent,
                        _ref$alignItems = _ref.alignItems,
                        alignItems =
                            _ref$alignItems === void 0
                                ? (flexStart && 'flex-start') ||
                                  (center && 'center') ||
                                  (flexEnd && 'flex-end') ||
                                  undefined
                                : _ref$alignItems,
                        alignSelf = _ref.alignSelf,
                        wrap = _ref.wrap,
                        _ref$flexWrap = _ref.flexWrap,
                        flexWrap = _ref$flexWrap === void 0 ? (wrap && 'wrap') || undefined : _ref$flexWrap,
                        grow = _ref.grow,
                        shrink = _ref.shrink,
                        _ref$flex = _ref.flex,
                        flex =
                            _ref$flex === void 0
                                ? grow || shrink
                                    ? `${grow ? 1 : 0} ${shrink ? 1 : 0} auto`
                                    : undefined
                                : _ref$flex,
                        style = _ref.style,
                        children = _ref.children,
                        restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const _useMemo = (0, react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
                            const marginMap = {
                                mt,
                                mr,
                                mb,
                                ml,
                            };
                            const computedClassNames = getMarginClassNames(marginMap);
                            const marginStyle = getMarginStyle(marginMap);
                            return {
                                computedStyle: Object.assign({}, style, marginStyle, {
                                    width: width !== undefined && typeof width === 'number' ? width + 'rem' : width,
                                    height:
                                        height !== undefined && typeof height === 'number' ? height + 'rem' : height,
                                    flex,
                                    alignSelf,
                                    display: flexDirection || alignItems ? 'flex' : undefined,
                                    flexDirection,
                                    flexWrap,
                                    justifyContent,
                                    alignItems,
                                }),
                                computedClassNames,
                            };
                        }, [
                            width,
                            height,
                            mt,
                            mr,
                            mb,
                            ml,
                            style,
                            flex,
                            alignSelf,
                            flexDirection,
                            flexWrap,
                            justifyContent,
                            alignItems,
                        ]),
                        computedStyle = _useMemo.computedStyle,
                        computedClassNames = _useMemo.computedClassNames;

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(
                        'div',
                        _extends(
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Box_css__WEBPACK_IMPORTED_MODULE_4__['default'].base,
                                    ...computedClassNames,
                                    className,
                                ),
                                style: computedStyle,
                            },
                            restProps,
                        ),
                        children,
                    );
                };

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
                lib_hocs_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_2__['default'])(Box);

                /***/
            },

        /***/ './src/components/FormatText/FormatText.tsx':
            /*!**************************************************!*\
  !*** ./src/components/FormatText/FormatText.tsx ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ FormatText: () => /* binding */ FormatText,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var lib_string_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/string-utils */ './src/lib/string-utils.ts',
                );
                /* harmony import */ var _FormatText_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./FormatText.css */ './src/components/FormatText/FormatText.css',
                );

                const FormatText = ({
                    binding,
                    text = '',
                    classMix,
                    alignment = lib_string_utils__WEBPACK_IMPORTED_MODULE_2__.Alignment.left,
                }) => {
                    if (text === null) {
                        console.error("FormatText was supplied with 'null'");
                        return null;
                    }

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                        null,
                        text.split('\n').map((textLine, lineId) =>
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                'div',
                                {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                                        _FormatText_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                                        classMix,
                                    ),
                                    key: `${textLine}-${lineId}`,
                                },
                                (0, lib_string_utils__WEBPACK_IMPORTED_MODULE_2__.formatString)(
                                    textLine,
                                    alignment,
                                    binding,
                                ).map((text, wordId) =>
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                        react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                        {
                                            key: `${wordId}-${text}`,
                                        },
                                        text,
                                    ),
                                ),
                            ),
                        ),
                    );
                };

                /***/
            },

        /***/ './src/components/MediaQuery/MediaContext.ts':
            /*!***************************************************!*\
  !*** ./src/components/MediaQuery/MediaContext.ts ***!
  \***************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaContext: () => /* binding */ MediaContext,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./static */ './src/components/MediaQuery/static.ts',
                );
                /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./utils */ './src/components/MediaQuery/utils.ts',
                );

                const _env$client$getSize = lib_env__WEBPACK_IMPORTED_MODULE_0__.env.client.getSize('rem'),
                    initialWidth = _env$client$getSize.width,
                    initialHeight = _env$client$getSize.height;

                const initialValue = Object.assign(
                    {
                        width: initialWidth,
                        height: initialHeight,
                    },
                    (0, _utils__WEBPACK_IMPORTED_MODULE_3__.getSizes)(
                        initialWidth,
                        initialHeight,
                        _static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS,
                    ),
                );
                /**
                 * Use useMedia hook from 'lib/hooks/useMedia' directly in your react components
                 *
                 * Usage and tech doc: https://confluence.lesta.group/pages/viewpage.action?pageId=1923252276
                 *
                 * @deprecated
                 */

                const MediaContext = (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialValue);

                /***/
            },

        /***/ './src/components/MediaQuery/MediaProvider.tsx':
            /*!*****************************************************!*\
  !*** ./src/components/MediaQuery/MediaProvider.tsx ***!
  \*****************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaProvider: () => /* binding */ MediaProvider,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_hooks_useCallOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/hooks/useCallOnce */ './src/lib/hooks/useCallOnce.ts',
                );
                /* harmony import */ var _MediaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./MediaContext */ './src/components/MediaQuery/MediaContext.ts',
                );
                /* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./static */ './src/components/MediaQuery/static.ts',
                );
                /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./utils */ './src/components/MediaQuery/utils.ts',
                );
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );

                const Provider = ({ children }) => {
                    const context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                        _MediaContext__WEBPACK_IMPORTED_MODULE_2__.MediaContext,
                    );

                    const _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(context),
                        value = _useState[0],
                        setValue = _useState[1];

                    const handleResize = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((width, height) => {
                        const preparedWidth = lib_env__WEBPACK_IMPORTED_MODULE_5__.env.view.pxToRem(width);
                        const preparedHeight = lib_env__WEBPACK_IMPORTED_MODULE_5__.env.view.pxToRem(height);
                        setValue(
                            Object.assign(
                                {
                                    width: preparedWidth,
                                    height: preparedHeight,
                                },
                                (0, _utils__WEBPACK_IMPORTED_MODULE_4__.getSizes)(
                                    preparedWidth,
                                    preparedHeight,
                                    _static__WEBPACK_IMPORTED_MODULE_3__.BREAKPOINTS,
                                ),
                            ),
                        );
                    }, []);
                    (0, lib_hooks_useCallOnce__WEBPACK_IMPORTED_MODULE_1__['default'])(() => {
                        engine.on('clientResized', handleResize);
                    });
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        return () => engine.off('clientResized', handleResize);
                    }, [handleResize]);
                    const valueAsProp = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                        () => Object.assign({}, value),
                        [value],
                    );
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                        _MediaContext__WEBPACK_IMPORTED_MODULE_2__.MediaContext.Provider,
                        {
                            value: valueAsProp,
                        },
                        children,
                    );
                };

                const MediaProvider = (0, react__WEBPACK_IMPORTED_MODULE_0__.memo)(Provider);

                /***/
            },

        /***/ './src/components/MediaQuery/MediaQuery.tsx':
            /*!**************************************************!*\
  !*** ./src/components/MediaQuery/MediaQuery.tsx ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaQuery: () => /* binding */ MediaQuery,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _getByHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./getByHeight */ './src/components/MediaQuery/getByHeight.tsx',
                );
                /* harmony import */ var _MediaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./MediaContext */ './src/components/MediaQuery/MediaContext.ts',
                );
                const _excluded = ['children'];

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const defaultProps = {
                    extraLarge: false,
                    large: false,
                    medium: false,
                    small: false,
                    extraSmall: false,
                    extraLargeWidth: false,
                    largeWidth: false,
                    mediumWidth: false,
                    smallWidth: false,
                    extraSmallWidth: false,
                    extraLargeHeight: false,
                    largeHeight: false,
                    mediumHeight: false,
                    smallHeight: false,
                    extraSmallHeight: false,
                };

                const Media = (_ref) => {
                    let children = _ref.children,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const _useContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                            _MediaContext__WEBPACK_IMPORTED_MODULE_2__.MediaContext,
                        ),
                        extraLarge = _useContext.extraLarge,
                        large = _useContext.large,
                        medium = _useContext.medium,
                        small = _useContext.small,
                        extraSmall = _useContext.extraSmall,
                        extraLargeWidth = _useContext.extraLargeWidth,
                        largeWidth = _useContext.largeWidth,
                        mediumWidth = _useContext.mediumWidth,
                        smallWidth = _useContext.smallWidth,
                        extraSmallWidth = _useContext.extraSmallWidth,
                        extraLargeHeight = _useContext.extraLargeHeight,
                        largeHeight = _useContext.largeHeight,
                        mediumHeight = _useContext.mediumHeight,
                        smallHeight = _useContext.smallHeight,
                        extraSmallHeight = _useContext.extraSmallHeight;

                    const breakpointProps = {
                        extraLarge: extraLargeHeight,
                        large: largeHeight,
                        medium: mediumHeight,
                        small: smallHeight,
                        extraSmall: extraSmallHeight,
                    };

                    if (rest.extraLarge || rest.large || rest.medium || rest.small || rest.extraSmall) {
                        if (rest.extraLarge && extraLarge) {
                            return children;
                        }

                        if (rest.large && large) {
                            return children;
                        }

                        if (rest.medium && medium) {
                            return children;
                        }

                        if (rest.small && small) {
                            return children;
                        }

                        if (rest.extraSmall && extraSmall) {
                            return children;
                        }
                    } else {
                        if (rest.extraLargeWidth && extraLargeWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (rest.largeWidth && largeWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (rest.mediumWidth && mediumWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (rest.smallWidth && smallWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (rest.extraSmallWidth && extraSmallWidth) {
                            return (0, _getByHeight__WEBPACK_IMPORTED_MODULE_1__.getByHeight)(
                                children,
                                rest,
                                breakpointProps,
                            );
                        }

                        if (
                            !rest.extraLargeWidth &&
                            !rest.largeWidth &&
                            !rest.mediumWidth &&
                            !rest.smallWidth &&
                            !rest.extraSmallWidth
                        ) {
                            if (rest.extraLargeHeight && extraLargeHeight) {
                                return children;
                            }

                            if (rest.largeHeight && largeHeight) {
                                return children;
                            }

                            if (rest.mediumHeight && mediumHeight) {
                                return children;
                            }

                            if (rest.smallHeight && smallHeight) {
                                return children;
                            }

                            if (rest.extraSmallHeight && extraSmallHeight) {
                                return children;
                            }
                        }
                    }

                    return null;
                };

                Media.defaultProps = defaultProps;
                const MediaQuery = (0, react__WEBPACK_IMPORTED_MODULE_0__.memo)(Media);

                /***/
            },

        /***/ './src/components/MediaQuery/getByHeight.tsx':
            /*!***************************************************!*\
  !*** ./src/components/MediaQuery/getByHeight.tsx ***!
  \***************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ getByHeight: () => /* binding */ getByHeight,
                    /* harmony export */
                });
                const getByHeight = (children, rest, breakpointProps) => {
                    if (
                        !rest.extraLargeHeight &&
                        !rest.largeHeight &&
                        !rest.mediumHeight &&
                        !rest.smallHeight &&
                        !rest.extraSmallHeight
                    ) {
                        return children;
                    }

                    if (rest.extraLargeHeight && breakpointProps.extraLarge) {
                        return children;
                    }

                    if (rest.largeHeight && breakpointProps.large) {
                        return children;
                    }

                    if (rest.mediumHeight && breakpointProps.medium) {
                        return children;
                    }

                    if (rest.smallHeight && breakpointProps.small) {
                        return children;
                    }

                    if (rest.extraSmallHeight && breakpointProps.extraSmall) {
                        return children;
                    }

                    return null;
                };

                /***/
            },

        /***/ './src/components/MediaQuery/index.ts':
            /*!********************************************!*\
  !*** ./src/components/MediaQuery/index.ts ***!
  \********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaContext: () =>
                        /* reexport safe */ _MediaContext__WEBPACK_IMPORTED_MODULE_2__.MediaContext,
                    /* harmony export */ MediaProvider: () =>
                        /* reexport safe */ _MediaProvider__WEBPACK_IMPORTED_MODULE_1__.MediaProvider,
                    /* harmony export */ MediaQuery: () =>
                        /* reexport safe */ _MediaQuery__WEBPACK_IMPORTED_MODULE_0__.MediaQuery,
                    /* harmony export */
                });
                /* harmony import */ var _MediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./MediaQuery */ './src/components/MediaQuery/MediaQuery.tsx',
                );
                /* harmony import */ var _MediaProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./MediaProvider */ './src/components/MediaQuery/MediaProvider.tsx',
                );
                /* harmony import */ var _MediaContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./MediaContext */ './src/components/MediaQuery/MediaContext.ts',
                );

                /***/
            },

        /***/ './src/components/MediaQuery/static.ts':
            /*!*********************************************!*\
  !*** ./src/components/MediaQuery/static.ts ***!
  \*********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ BREAKPOINTS: () => /* binding */ BREAKPOINTS,
                    /* harmony export */
                });
                const BREAKPOINTS = {
                    extraLarge: {
                        weight: 4,
                        width: 2560,
                        height: 1440,
                    },
                    large: {
                        weight: 3,
                        width: 1920,
                        height: 1080,
                    },
                    medium: {
                        weight: 2,
                        width: 1600,
                        height: 900,
                    },
                    small: {
                        weight: 1,
                        width: 1366,
                        height: 768,
                    },
                    extraSmall: {
                        weight: 0,
                        width: 1024,
                        height: 768,
                    },
                };

                /***/
            },

        /***/ './src/components/MediaQuery/utils.ts':
            /*!********************************************!*\
  !*** ./src/components/MediaQuery/utils.ts ***!
  \********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Sizes: () => /* binding */ Sizes,
                    /* harmony export */ getSizes: () => /* binding */ getSizes,
                    /* harmony export */
                });
                function getWidthBPWeight(width, breakpoints) {
                    switch (true) {
                        case width >= breakpoints.extraLarge.width:
                            return breakpoints.extraLarge.weight;

                        case width >= breakpoints.large.width && width < breakpoints.extraLarge.width:
                            return breakpoints.large.weight;

                        case width >= breakpoints.medium.width && width < breakpoints.large.width:
                            return breakpoints.medium.weight;

                        case width >= breakpoints.small.width && width < breakpoints.medium.width:
                            return breakpoints.small.weight;

                        default:
                            return breakpoints.extraSmall.weight;
                    }
                }

                function getHeightBPWeight(height, breakpoints) {
                    switch (true) {
                        case height >= breakpoints.extraLarge.height:
                            return breakpoints.extraLarge.weight;

                        case height >= breakpoints.large.height && height < breakpoints.extraLarge.height:
                            return breakpoints.large.weight;

                        case height >= breakpoints.medium.height && height < breakpoints.large.height:
                            return breakpoints.medium.weight;

                        case height >= breakpoints.small.height && height < breakpoints.medium.height:
                            return breakpoints.small.weight;

                        default:
                            return breakpoints.extraSmall.weight;
                    }
                }

                var Sizes;

                (function (Sizes) {
                    Sizes['extraLarge'] = 'extraLarge';
                    Sizes['large'] = 'large';
                    Sizes['medium'] = 'medium';
                    Sizes['small'] = 'small';
                    Sizes['extraSmall'] = 'extraSmall';
                    Sizes['extraLargeWidth'] = 'extraLargeWidth';
                    Sizes['largeWidth'] = 'largeWidth';
                    Sizes['mediumWidth'] = 'mediumWidth';
                    Sizes['smallWidth'] = 'smallWidth';
                    Sizes['extraSmallWidth'] = 'extraSmallWidth';
                    Sizes['extraLargeHeight'] = 'extraLargeHeight';
                    Sizes['largeHeight'] = 'largeHeight';
                    Sizes['mediumHeight'] = 'mediumHeight';
                    Sizes['smallHeight'] = 'smallHeight';
                    Sizes['extraSmallHeight'] = 'extraSmallHeight';
                })(Sizes || (Sizes = {}));

                function getSizes(width, height, breakpoints) {
                    const widthBPWeight = getWidthBPWeight(width, breakpoints);
                    const heightBPWeight = getHeightBPWeight(height, breakpoints);
                    const weight = Math.min(widthBPWeight, heightBPWeight);
                    return {
                        extraLarge: weight === breakpoints.extraLarge.weight,
                        large: weight === breakpoints.large.weight,
                        medium: weight === breakpoints.medium.weight,
                        small: weight === breakpoints.small.weight,
                        extraSmall: weight === breakpoints.extraSmall.weight,
                        extraLargeWidth: widthBPWeight === breakpoints.extraLarge.weight,
                        largeWidth: widthBPWeight === breakpoints.large.weight,
                        mediumWidth: widthBPWeight === breakpoints.medium.weight,
                        smallWidth: widthBPWeight === breakpoints.small.weight,
                        extraSmallWidth: widthBPWeight === breakpoints.extraSmall.weight,
                        extraLargeHeight: heightBPWeight === breakpoints.extraLarge.weight,
                        largeHeight: heightBPWeight === breakpoints.large.weight,
                        mediumHeight: heightBPWeight === breakpoints.medium.weight,
                        smallHeight: heightBPWeight === breakpoints.small.weight,
                        extraSmallHeight: heightBPWeight === breakpoints.extraSmall.weight,
                    };
                }

                /***/
            },

        /***/ './src/components/Text/Text.tsx':
            /*!**************************************!*\
  !*** ./src/components/Text/Text.tsx ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */ defaultMarginMap: () => /* binding */ defaultMarginMap,
                    /* harmony export */ defaultMargins: () => /* binding */ defaultMargins,
                    /* harmony export */ standardColors: () => /* binding */ standardColors,
                    /* harmony export */ standardMargins: () => /* binding */ standardMargins,
                    /* harmony export */ variantMarginSizeMap: () => /* binding */ variantMarginSizeMap,
                    /* harmony export */ variants: () => /* binding */ variants,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var components_Box_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! components/Box/Box */ './src/components/Box/Box.tsx',
                );
                /* harmony import */ var components_FormatText_FormatText__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! components/FormatText/FormatText */ './src/components/FormatText/FormatText.tsx',
                    );
                /* harmony import */ var global_styles_variables_colors__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! global-styles/variables/colors */ './src/global-styles/variables/colors.js',
                    );
                /* harmony import */ var global_styles_variables_colors__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(global_styles_variables_colors__WEBPACK_IMPORTED_MODULE_3__);
                /* harmony import */ var global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_4__ =
                    __webpack_require__(
                        /*! global-styles/variables/spacing */ './src/global-styles/variables/spacing.js',
                    );
                /* harmony import */ var global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var lib_hocs_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! lib/hocs/adaptive/adaptive */ './src/lib/hocs/adaptive/adaptive.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
                /* harmony import */ var _Text_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ./Text.css */ './src/components/Text/Text.css',
                );
                const _excluded = [
                    'text',
                    'variant',
                    'className',
                    'color',
                    'm',
                    'mt',
                    'mr',
                    'mb',
                    'ml',
                    'style',
                    'format',
                ];

                function _extends() {
                    _extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                            return target;
                        };
                    return _extends.apply(this, arguments);
                }

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const standardMargins = Object.keys(
                    global_styles_variables_spacing__WEBPACK_IMPORTED_MODULE_4___default(),
                );
                const standardColors = Object.keys(
                    global_styles_variables_colors__WEBPACK_IMPORTED_MODULE_3___default(),
                );
                const xlStyleMargins = {
                    mt: 'XL',
                    mr: 'LG',
                    mb: 'LG',
                    ml: 'LG',
                };
                const lgStyleMargins = {
                    mt: 'LG',
                    mr: 'MD',
                    mb: 'MD',
                    ml: 'MD',
                };
                const mdStyleMargins = {
                    mt: 'MD',
                    mr: 'SM',
                    mb: 'SM',
                    ml: 'SM',
                };
                const smStyleMargins = {
                    mt: 'SM',
                    mr: 'XS',
                    mb: 'XS',
                    ml: 'XS',
                };
                const xsStyleMargins = {
                    mt: 'XS',
                    mr: 'XS',
                    mb: 'XS',
                    ml: 'XS',
                };
                const defaultXlMargins = {
                    mt: 'XL',
                    mr: 'XL',
                    mb: 'XL',
                    ml: 'XL',
                };
                const defaultLgMargins = {
                    mt: 'LG',
                    mr: 'LG',
                    mb: 'LG',
                    ml: 'LG',
                };
                const defaultMdpMargins = {
                    mt: 'MDp',
                    mr: 'MDp',
                    mb: 'MDp',
                    ml: 'MDp',
                };
                const defaultMdMargins = {
                    mt: 'MD',
                    mr: 'MD',
                    mb: 'MD',
                    ml: 'MD',
                };
                const defaultSmpMargins = {
                    mt: 'SMp',
                    mr: 'SMp',
                    mb: 'SMp',
                    ml: 'SMp',
                };
                const defaultSmMargins = {
                    mt: 'SM',
                    mr: 'SM',
                    mb: 'SM',
                    ml: 'SM',
                };
                const defaultXsMargins = {
                    mt: 'XS',
                    mr: 'XS',
                    mb: 'XS',
                    ml: 'XS',
                };
                const defaultMarginMap = {
                    XL: defaultXlMargins,
                    LG: defaultLgMargins,
                    MDp: defaultMdpMargins,
                    MD: defaultMdMargins,
                    SMp: defaultSmpMargins,
                    SM: defaultSmMargins,
                    XS: defaultXsMargins,
                };
                const defaultMargins = Object.keys(defaultMarginMap);
                const variantMarginSizeMap = {
                    'heading-H144': xlStyleMargins,
                    'heading-H73': lgStyleMargins,
                    'heading-H56': mdStyleMargins,
                    'heading-H36': mdStyleMargins,
                    'heading-H28': smStyleMargins,
                    'heading-H24': smStyleMargins,
                    'heading-H24R': smStyleMargins,
                    'heading-H22': smStyleMargins,
                    'heading-H20R': smStyleMargins,
                    'heading-H18': smStyleMargins,
                    'heading-H15': xsStyleMargins,
                    'heading-H14': xsStyleMargins,
                    'paragraph-P24': smStyleMargins,
                    'paragraph-P18': smStyleMargins,
                    'paragraph-P16': smStyleMargins,
                    'paragraph-P14': xsStyleMargins,
                    'paragraph-P12': xsStyleMargins,
                    'paragraph-P10': xsStyleMargins,
                };
                const variants = Object.keys(variantMarginSizeMap);

                const isDefaultColor = (color) => standardColors.includes(color);

                const getColorStyleOrClassName = (color) => {
                    if (!color) {
                        return {};
                    }

                    if (isDefaultColor(color)) {
                        return {
                            colorClassName: _Text_css__WEBPACK_IMPORTED_MODULE_7__['default'][color],
                        };
                    }

                    return {
                        colorStyle: {
                            color,
                        },
                    };
                };

                /**
                 * Renders the text passed in as a prop with styling and formatting options.
                 *
                 * @param {object} props - The props object containing:
                 *   @param {string} text - The text to be rendered.
                 *   @param {VariantType | string} variant - The variant of the text styling.
                 *   @param {string} className - The class name(s) to be applied to the text component.
                 *   @param {ColorType} color - The color of the text, e.g. "WHITE_SPANISH" or "#f00".
                 *   @param {SpacingType} m - The margin applied to all sides, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {SpacingType} mt - The applied margin-top, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {SpacingType} mr - The applied margin-right, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {SpacingType} mb - The applied margin-bottom, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {SpacingType} ml - The applied margin-left, e.g. XL, LG, MDp, MD, SMp, SM, XS, true defaults to a size based on the variant prop, number translates to rems.
                 *   @param {CSSProperties} style - The style object to be applied to the text component.
                 *   @param {FormatTextProps} format - The formatting props of FormatText.
                 *   @param {BoxProps} restProps - other props of internal Box component.
                 * @return {JSX.Element} The Text element.
                 */
                const Text = (_ref) => {
                    let text = _ref.text,
                        variant = _ref.variant,
                        className = _ref.className,
                        color = _ref.color,
                        m = _ref.m,
                        _ref$mt = _ref.mt,
                        mt = _ref$mt === void 0 ? m : _ref$mt,
                        _ref$mr = _ref.mr,
                        mr = _ref$mr === void 0 ? m : _ref$mr,
                        _ref$mb = _ref.mb,
                        mb = _ref$mb === void 0 ? m : _ref$mb,
                        _ref$ml = _ref.ml,
                        ml = _ref$ml === void 0 ? m : _ref$ml,
                        style = _ref.style,
                        format = _ref.format,
                        restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const _useMemo = (0, react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
                            const _getColorStyleOrClass = getColorStyleOrClassName(color),
                                colorClassName = _getColorStyleOrClass.colorClassName,
                                _getColorStyleOrClass2 = _getColorStyleOrClass.colorStyle,
                                colorStyle = _getColorStyleOrClass2 === void 0 ? {} : _getColorStyleOrClass2;

                            return {
                                computedStyle: Object.assign({}, style, colorStyle),
                                colorClassName,
                            };
                        }, [style, color]),
                        computedStyle = _useMemo.computedStyle,
                        colorClassName = _useMemo.colorClassName;

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                        components_Box_Box__WEBPACK_IMPORTED_MODULE_1__['default'],
                        _extends(
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Text_css__WEBPACK_IMPORTED_MODULE_7__['default'].base,
                                    variant && _Text_css__WEBPACK_IMPORTED_MODULE_7__['default'][variant],
                                    colorClassName,
                                    className,
                                ),
                                style: computedStyle,
                                mt: mt === true ? variantMarginSizeMap[variant || 'paragraph-P16'].mt : mt,
                                mr: mr === true ? variantMarginSizeMap[variant || 'paragraph-P16'].mr : mr,
                                mb: mb === true ? variantMarginSizeMap[variant || 'paragraph-P16'].mb : mb,
                                ml: ml === true ? variantMarginSizeMap[variant || 'paragraph-P16'].ml : ml,
                            },
                            restProps,
                        ),
                        format !== undefined
                            ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                  components_FormatText_FormatText__WEBPACK_IMPORTED_MODULE_2__.FormatText,
                                  _extends({}, format, {
                                      text: text,
                                  }),
                              )
                            : text,
                    );
                };

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (0,
                lib_hocs_adaptive_adaptive__WEBPACK_IMPORTED_MODULE_5__['default'])(Text);

                /***/
            },

        /***/ './src/components/TooltipDecorator/TooltipDecorator.tsx':
            /*!**************************************************************!*\
  !*** ./src/components/TooltipDecorator/TooltipDecorator.tsx ***!
  \**************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ TooltipDecorator: () => /* binding */ TooltipDecorator,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var lib_hooks_useMountUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/hooks/useMountUnmount */ './src/lib/hooks/useMountUnmount.ts',
                );
                /* harmony import */ var lib_hooks_useSkipFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! lib/hooks/useSkipFrame */ './src/lib/hooks/useSkipFrame.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./TooltipDecorator.css */ './src/components/TooltipDecorator/TooltipDecorator.css',
                );
                const _excluded = ['children', 'className', 'theme'];

                function _extends() {
                    _extends =
                        Object.assign ||
                        function (target) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = arguments[i];
                                for (var key in source) {
                                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                                        target[key] = source[key];
                                    }
                                }
                            }
                            return target;
                        };
                    return _extends.apply(this, arguments);
                }

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const TooltipDecorator = react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef(
                    function TooltipDecorator(_ref, ref) {
                        let children = _ref.children,
                            className = _ref.className,
                            _ref$theme = _ref.theme,
                            theme = _ref$theme === void 0 ? 'default' : _ref$theme,
                            restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

                        const skipFrame = (0, lib_hooks_useSkipFrame__WEBPACK_IMPORTED_MODULE_3__.useSkipFrame)();
                        const baseRef = react__WEBPACK_IMPORTED_MODULE_4___default().useRef(null);
                        (0, lib_hooks_useMountUnmount__WEBPACK_IMPORTED_MODULE_2__.useMount)(() => {
                            skipFrame.run(() => {
                                const base = baseRef.current;

                                if (!base) {
                                    return;
                                }

                                const contentWidth = base.scrollWidth;
                                const contentHeight = base.scrollHeight;
                                lib_env__WEBPACK_IMPORTED_MODULE_1__.env.view.resize(contentWidth, contentHeight);
                                const style = window.getComputedStyle(base);
                                lib_env__WEBPACK_IMPORTED_MODULE_1__.env.view.setSidePaddingsRem({
                                    left: parseInt(style.getPropertyValue('padding-left'), 10),
                                    top: parseInt(style.getPropertyValue('padding-top'), 10),
                                    right: parseInt(style.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(style.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        });

                        function setRefs(node) {
                            baseRef.current = node;

                            if (typeof ref === 'function') {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                        }

                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            'div',
                            _extends({}, restProps, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'].base,
                                    _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'][
                                        `base__theme-${theme}`
                                    ],
                                    className,
                                ),
                                ref: setRefs,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _TooltipDecorator_css__WEBPACK_IMPORTED_MODULE_5__['default'].decorator,
                                },
                                children,
                            ),
                        );
                    },
                );

                /***/
            },

        /***/ './src/global-styles/variables/colors.js':
            /*!***********************************************!*\
  !*** ./src/global-styles/variables/colors.js ***!
  \***********************************************/
            /***/ (module) => {
                module.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };

                /***/
            },

        /***/ './src/global-styles/variables/spacing.js':
            /*!************************************************!*\
  !*** ./src/global-styles/variables/spacing.js ***!
  \************************************************/
            /***/ (module) => {
                module.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };

                /***/
            },

        /***/ './src/lib/data-layer/data-layer.ts':
            /*!******************************************!*\
  !*** ./src/lib/data-layer/data-layer.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ create: () => /* binding */ create,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                function _createForOfIteratorHelperLoose(o, allowArrayLike) {
                    var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
                    if (it) return (it = it.call(o)).next.bind(it);
                    if (
                        Array.isArray(o) ||
                        (it = _unsupportedIterableToArray(o)) ||
                        (allowArrayLike && o && typeof o.length === 'number')
                    ) {
                        if (it) o = it;
                        var i = 0;
                        return function () {
                            if (i >= o.length) return { done: true };
                            return { done: false, value: o[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }

                function _unsupportedIterableToArray(o, minLen) {
                    if (!o) return;
                    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    if (n === 'Object' && o.constructor) n = o.constructor.name;
                    if (n === 'Map' || n === 'Set') return Array.from(o);
                    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _arrayLikeToArray(o, minLen);
                }

                function _arrayLikeToArray(arr, len) {
                    if (len == null || len > arr.length) len = arr.length;
                    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
                    return arr2;
                }

                /* eslint-disable @typescript-eslint/no-explicit-any */

                const getRootDefault = (rootId) => {
                    if (rootId === 0) {
                        return window;
                    }

                    return window.subViews.get(rootId);
                };

                function create({ initializer = true, rootId = 0, getRoot = getRootDefault, context = 'model' } = {}) {
                    const subscribers = new Map();
                    engine.whenReady.then(() => {
                        engine.on('viewEnv.onDataChanged', (data, _, callbackIDs) => {
                            callbackIDs.forEach((callbackID) => {
                                const callback = subscribers.get(callbackID);

                                if (callback !== undefined) {
                                    callback(data);
                                }
                            });
                        });
                    });

                    function unsubscribe(id, resId = 0) {
                        if (viewEnv.removeDataChangedCallback(id, resId)) {
                            subscribers.delete(id);
                        } else {
                            console.error("Can't remove callback by id:", id);
                        }
                    }

                    const readByPath = (path) => {
                        const root = getRoot(rootId);
                        const model = context.split('.').reduce((result, key) => {
                            return result[key];
                        }, root);

                        if (typeof path !== 'string' || path.length === 0) {
                            return model;
                        }

                        return path.split('.').reduce((result, key) => {
                            const element = result[key];

                            if (typeof element === 'function') {
                                return element.bind(result);
                            }

                            return element;
                        }, model);
                    };

                    const subscribe = (subscriber, path) => {
                        const subscribePath = typeof path === 'string' ? `${context}.${path}` : context;
                        const trackInDepth = true;
                        const id = lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.addModelObserver(
                            subscribePath,
                            rootId,
                            trackInDepth,
                        );
                        subscribers.set(id, subscriber);

                        if (initializer) {
                            subscriber(readByPath(path));
                        }

                        return id;
                    };

                    const createCallback = (argsMap, path) => {
                        const fn = readByPath(path);
                        return (...args) => {
                            fn(argsMap(...args));
                        };
                    };

                    const createCallbackNoArgs = (path) => {
                        const fn = readByPath(path);
                        return () => {
                            fn();
                        };
                    };

                    function dispose() {
                        for (
                            var _iterator = _createForOfIteratorHelperLoose(subscribers.keys()), _step;
                            !(_step = _iterator()).done;
                        ) {
                            const subscriberId = _step.value;
                            unsubscribe(subscriberId, rootId);
                        }
                    }

                    return {
                        subscribe,
                        readByPath,
                        createCallback,
                        createCallbackNoArgs,
                        dispose,
                        unsubscribe,
                    };
                }

                /***/
            },

        /***/ './src/lib/data-layer/index.tsx':
            /*!**************************************!*\
  !*** ./src/lib/data-layer/index.tsx ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ dataLayer: () =>
                        /* reexport module object */ _data_layer__WEBPACK_IMPORTED_MODULE_2__,
                    /* harmony export */ initializeModelWithContext: () => /* binding */ initializeModelWithContext,
                    /* harmony export */
                });
                /* harmony import */ var lib_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/function */ './src/lib/function.ts',
                );
                /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! mobx */ './node_modules/mobx/dist/mobx.esm.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _data_layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./data-layer */ './src/lib/data-layer/data-layer.ts',
                );
                /* eslint-disable @typescript-eslint/no-explicit-any */

                /* eslint-disable react/function-component-definition */

                /**
                 * Create ModelProvider and useModel for your data-layer:
                 * ```ts
                 * export const [ModelProvider, useModel] = initializeModelWithContext<<MODEL_TYPE>>()(
                 *     () => {}, // for model
                 *     () => {}, // for controls (functions)
                 * );
                 * ```
                 * Where `<MODEL_TYPE>` is your model type.
                 */
                const initializeModelWithContext = () => {
                    return (modelCreator, controlsCreator) => {
                        const Context = (0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
                        return [
                            function DataLayerProvider({ mode: dataMode = 'real', options, children, mocks }) {
                                const cleanupsRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);

                                const createContextValue = (mode, options, mocks) => {
                                    var _mocks$getter;

                                    const dataLayerInstance = _data_layer__WEBPACK_IMPORTED_MODULE_2__.create(options);
                                    const externalModel =
                                        mode === 'real'
                                            ? dataLayerInstance
                                            : Object.assign({}, dataLayerInstance, {
                                                  readByPath:
                                                      (_mocks$getter = mocks == null ? void 0 : mocks.getter) != null
                                                          ? _mocks$getter
                                                          : () => undefined,
                                              });

                                    const readByPath = (path) => {
                                        if (mode === 'mocks') {
                                            return mocks == null ? void 0 : mocks.getter(path);
                                        } else {
                                            return externalModel.readByPath(path);
                                        }
                                    };

                                    const observableArray = (path, init) => {
                                        const initObservable = (() => {
                                            return init != null ? init : readByPath(path);
                                        })();

                                        const model = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(initObservable, {
                                            equals: lib_function__WEBPACK_IMPORTED_MODULE_0__.constFalse,
                                        });

                                        if (mode === 'real') {
                                            externalModel.subscribe(
                                                (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) =>
                                                    model.set(data),
                                                ),
                                                path,
                                            );
                                        }

                                        return model;
                                    };

                                    const observableObject = (path, init) => {
                                        const initObservable = (() => {
                                            return init != null ? init : readByPath(path);
                                        })();

                                        const model = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(initObservable, {
                                            equals: lib_function__WEBPACK_IMPORTED_MODULE_0__.constFalse,
                                        });

                                        if (mode === 'real') {
                                            externalModel.subscribe(
                                                (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) =>
                                                    model.set(data),
                                                ),
                                                path,
                                            );
                                        }

                                        return model;
                                    };

                                    const observablePrimitives = (keys, path) => {
                                        const initObservable = readByPath(path);

                                        if (Array.isArray(keys)) {
                                            const model = keys.reduce((acc, key) => {
                                                acc[key] = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(
                                                    initObservable[key],
                                                    {},
                                                );
                                                return acc;
                                            }, {});

                                            if (mode === 'real') {
                                                externalModel.subscribe(
                                                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) => {
                                                        keys.forEach((key) => {
                                                            model[key].set(data[key]);
                                                        });
                                                    }),
                                                    path,
                                                );
                                            }

                                            return model;
                                        } else {
                                            const keysRecord = keys;
                                            const keysEntries = Object.entries(keysRecord);
                                            const model = keysEntries.reduce((acc, [keyFrom, keyTo]) => {
                                                acc[keyTo] = mobx__WEBPACK_IMPORTED_MODULE_3__.observable.box(
                                                    initObservable[keyFrom],
                                                    {},
                                                );
                                                return acc;
                                            }, {});

                                            if (mode === 'real') {
                                                externalModel.subscribe(
                                                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.action)((data) => {
                                                        keysEntries.forEach(([keyFrom, keyTo]) => {
                                                            model[keyTo].set(data[keyFrom]);
                                                        });
                                                    }),
                                                    path,
                                                );
                                            }

                                            return model;
                                        }
                                    };

                                    const cleanup = (fn) => cleanupsRef.current.push(fn);

                                    const model = modelCreator({
                                        mode,
                                        readByPath,
                                        externalModel,
                                        observableModel: {
                                            array: observableArray,
                                            object: observableObject,
                                            primitives: observablePrimitives,
                                        },
                                        cleanup,
                                    });
                                    const controlsArgs = {
                                        mode,
                                        model,
                                        externalModel,
                                        cleanup,
                                    };
                                    const controls =
                                        mode === 'mocks' && mocks
                                            ? mocks.controls(controlsArgs)
                                            : controlsCreator(controlsArgs);
                                    return {
                                        model,
                                        controls,
                                        externalModel,
                                        mode,
                                    };
                                };

                                const startedRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);

                                const _useState = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(dataMode),
                                    mode = _useState[0],
                                    changeMode = _useState[1];

                                const _useState2 = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(() =>
                                        createContextValue(dataMode, options, mocks),
                                    ),
                                    value = _useState2[0],
                                    setValue = _useState2[1];

                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                                    if (!startedRef.current) {
                                        startedRef.current = true;
                                        return;
                                    }

                                    setValue(createContextValue(mode, options, mocks));
                                }, [mocks, mode, options]);
                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
                                    changeMode(dataMode);
                                }, [dataMode]);
                                (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
                                    () => () => {
                                        value.externalModel.dispose();
                                        cleanupsRef.current.forEach((fn) => fn());
                                    },
                                    [value],
                                );
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                    Context.Provider,
                                    {
                                        value: value,
                                    },
                                    children,
                                );
                            },
                            () => (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context),
                        ];
                    };
                };

                /***/
            },

        /***/ './src/lib/env/client/events.ts':
            /*!**************************************!*\
  !*** ./src/lib/env/client/events.ts ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ mouse: () => /* binding */ mouse,
                    /* harmony export */ onResize: () => /* binding */ onResize,
                    /* harmony export */
                });
                /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../helpers */ './src/lib/env/helpers.ts',
                );
                /* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./internal */ './src/lib/env/client/internal.ts',
                );

                const onResize = (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('clientResized');
                const internalMouse = {
                    down: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mousedown'),
                    up: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mouseup'),
                    move: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('mousemove'),
                };

                /**
                 * Calculate mouse position relative to the view is expensive operation.
                 * This decorator separate track mouse events between inside and outside.
                 * When cursor is outside of the view.
                 * When mouse cursor is inside of the view, it will be tracked by internal default events.
                 *
                 * Function encapsulate logic and state inside.
                 */
                function initMouseEvents() {
                    const state = {
                        listeners: 0,
                        enabled: true,
                        initialized: false,
                    };

                    function handleMouseEnter() {
                        if (state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                        }
                    }

                    function handleMouseLeave() {
                        if (state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(true);
                        }
                    }

                    function updateLazyTrack() {
                        if (!state.enabled) {
                            (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                            return;
                        }

                        if (state.listeners < 1) {
                            state.initialized = false;
                            document.body.removeEventListener('mouseenter', handleMouseEnter);
                            document.body.removeEventListener('mouseleave', handleMouseLeave);
                        } else if (!state.initialized) {
                            state.initialized = true;
                            document.body.addEventListener('mouseenter', handleMouseEnter);
                            document.body.addEventListener('mouseleave', handleMouseLeave);
                        }
                    }

                    function makeEvent(name) {
                        return (listener) => {
                            state.listeners += 1;
                            let active = true; // prevent double dispose(unsubscribe)

                            const windowEvent = `mouse${name}`;
                            const dispose = internalMouse[name]((event) => listener([event, 'outside']));

                            function handleWindowEvent(event) {
                                listener([event, 'inside']);
                            }

                            window.addEventListener(windowEvent, handleWindowEvent);
                            updateLazyTrack();
                            return () => {
                                if (!active) {
                                    return;
                                }

                                dispose();
                                window.removeEventListener(windowEvent, handleWindowEvent);
                                state.listeners -= 1;
                                updateLazyTrack();
                                active = false;
                            };
                        };
                    }

                    const events = ['down', 'up', 'move'];
                    const subscribeApi = events.reduce((acc, name) => {
                        acc[name] = makeEvent(name);
                        return acc;
                    }, {});
                    return Object.assign({}, subscribeApi, {
                        disable() {
                            state.enabled = false;
                            updateLazyTrack();
                        },

                        enable() {
                            state.enabled = true;
                            updateLazyTrack();
                        },

                        enableOutside() {
                            if (state.enabled) {
                                (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(true);
                            }
                        },

                        disableOutside() {
                            if (state.enabled) {
                                (0, _internal__WEBPACK_IMPORTED_MODULE_1__.setTrackMouseOutside)(false);
                            }
                        },
                    });
                }

                const mouse = initMouseEvents();

                /***/
            },

        /***/ './src/lib/env/client/index.ts':
            /*!*************************************!*\
  !*** ./src/lib/env/client/index.ts ***!
  \*************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ events: () =>
                        /* reexport module object */ _events__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */ getMouseGlobalPosition: () => /* binding */ getMouseGlobalPosition,
                    /* harmony export */ getSize: () => /* binding */ getSize,
                    /* harmony export */ graphicsQuality: () => /* binding */ graphicsQuality,
                    /* harmony export */
                });
                /* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./events */ './src/lib/env/client/events.ts',
                );

                function getSize(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function getMouseGlobalPosition(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const graphicsQuality = {
                    isLow: () => viewEnv.getGraphicsQuality() === 1,
                    isHigh: () => viewEnv.getGraphicsQuality() === 0,
                    get: () => viewEnv.getGraphicsQuality(),
                };

                /***/
            },

        /***/ './src/lib/env/client/internal.ts':
            /*!****************************************!*\
  !*** ./src/lib/env/client/internal.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ setTrackMouseOutside: () => /* binding */ setTrackMouseOutside,
                    /* harmony export */
                });
                function setTrackMouseOutside(value) {
                    viewEnv.setTrackMouseOnStage(value);
                }

                /***/
            },

        /***/ './src/lib/env/helpers.ts':
            /*!********************************!*\
  !*** ./src/lib/env/helpers.ts ***!
  \********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ makeEngineEvent: () => /* binding */ makeEngineEvent,
                    /* harmony export */
                });
                function makeEngineEvent(eventName) {
                    return (handler) => {
                        engine.on(eventName, handler);
                        return () => {
                            engine.off(eventName, handler);
                        };
                    };
                }

                /***/
            },

        /***/ './src/lib/env/index.ts':
            /*!******************************!*\
  !*** ./src/lib/env/index.ts ***!
  \******************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ env: () => /* binding */ env,
                    /* harmony export */
                });
                /* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./client */ './src/lib/env/client/index.ts',
                );
                /* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./view */ './src/lib/env/view/index.ts',
                );

                const env = {
                    view: _view__WEBPACK_IMPORTED_MODULE_1__,
                    client: _client__WEBPACK_IMPORTED_MODULE_0__,
                };

                if (true) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.env = env;
                }

                /***/
            },

        /***/ './src/lib/env/view/children.ts':
            /*!**************************************!*\
  !*** ./src/lib/env/view/children.ts ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ getBgUrl: () => /* binding */ getBgUrl,
                    /* harmony export */ getTextureUrl: () => /* binding */ getTextureUrl,
                    /* harmony export */
                });
                function getTextureUrl(childId, size, scale = 1) {
                    return viewEnv.getChildTexturePath(childId, size.width, size.height, scale);
                }
                function getBgUrl(childId, size, scale) {
                    return `url(${getTextureUrl(childId, size, scale)})`;
                }

                /***/
            },

        /***/ './src/lib/env/view/common.ts':
            /*!************************************!*\
  !*** ./src/lib/env/view/common.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ displayStatus: () => /* binding */ displayStatus,
                    /* harmony export */
                });
                const displayStatus = {
                    showing: 0,
                    shown: 1,
                    hiding: 2,
                    hidden: 3,
                };

                /***/
            },

        /***/ './src/lib/env/view/events.ts':
            /*!************************************!*\
  !*** ./src/lib/env/view/events.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ events: () => /* binding */ events,
                    /* harmony export */
                });
                /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../helpers */ './src/lib/env/helpers.ts',
                );

                const events = {
                    onTextureFrozen: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onTextureFrozen'),
                    onTextureReady: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onTextureReady'),
                    onDomBuilt: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onDomBuilt'),
                    onLoaded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onLoaded'),
                    onDisplayChanged: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                        'self.onShowingStatusChanged',
                    ),
                    onFocusUpdated: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onAdded'),
                        onLoaded: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onLoaded'),
                        onRemoved: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onRemoved'),
                        onAttached: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)('children.onAttached'),
                        onTextureReady: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                            'children.onTextureReady',
                        ),
                        onRequestPosition: (0, _helpers__WEBPACK_IMPORTED_MODULE_0__.makeEngineEvent)(
                            'children.requestPosition',
                        ),
                    },
                };

                /***/
            },

        /***/ './src/lib/env/view/index.ts':
            /*!***********************************!*\
  !*** ./src/lib/env/view/index.ts ***!
  \***********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ addModelObserver: () => /* binding */ addModelObserver,
                    /* harmony export */ addPreloadTexture: () => /* binding */ addPreloadTexture,
                    /* harmony export */ children: () =>
                        /* reexport module object */ _children__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */ displayStatus: () =>
                        /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.displayStatus,
                    /* harmony export */ displayStatusIs: () => /* binding */ displayStatusIs,
                    /* harmony export */ events: () => /* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_2__.events,
                    /* harmony export */ extraSize: () => /* binding */ extraSize,
                    /* harmony export */ forceTriggerMouseMove: () => /* binding */ forceTriggerMouseMove,
                    /* harmony export */ freezeTextureBeforeResize: () => /* binding */ freezeTextureBeforeResize,
                    /* harmony export */ getBrowserTexturePath: () => /* binding */ getBrowserTexturePath,
                    /* harmony export */ getDisplayStatus: () => /* binding */ getDisplayStatus,
                    /* harmony export */ getScale: () => /* binding */ getScale,
                    /* harmony export */ getSize: () => /* binding */ getSize,
                    /* harmony export */ getViewGlobalPosition: () => /* binding */ getViewGlobalPosition,
                    /* harmony export */ isEventHandled: () => /* binding */ isEventHandled,
                    /* harmony export */ isFocused: () => /* binding */ isFocused,
                    /* harmony export */ pxToRem: () => /* binding */ pxToRem,
                    /* harmony export */ remToPx: () => /* binding */ remToPx,
                    /* harmony export */ resize: () => /* binding */ resize,
                    /* harmony export */ sendEvent: () =>
                        /* reexport safe */ _sendEvent__WEBPACK_IMPORTED_MODULE_3__.sendEvent,
                    /* harmony export */ setAnimateWindow: () => /* binding */ setAnimateWindow,
                    /* harmony export */ setEventHandled: () => /* binding */ setEventHandled,
                    /* harmony export */ setInputPaddingsRem: () => /* binding */ setInputPaddingsRem,
                    /* harmony export */ setSidePaddingsRem: () => /* binding */ setSidePaddingsRem,
                    /* harmony export */ whenTutorialReady: () => /* binding */ whenTutorialReady,
                    /* harmony export */
                });
                /* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./children */ './src/lib/env/view/children.ts',
                );
                /* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./common */ './src/lib/env/view/common.ts',
                );
                /* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./events */ './src/lib/env/view/events.ts',
                );
                /* harmony import */ var _sendEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./sendEvent */ './src/lib/env/view/sendEvent.ts',
                );

                const ALL_SIDES = 0xf;
                function addPreloadTexture(path) {
                    viewEnv.addPreloadTexture(path);
                }
                function setInputPaddingsRem(paddings) {
                    viewEnv.setHitAreaPaddingsRem(paddings, paddings, paddings, paddings, ALL_SIDES);
                }
                function getBrowserTexturePath(id, width, height, scale = 1) {
                    return viewEnv.getWebBrowserTexturePath(id, width, height, scale);
                }
                function addModelObserver(path, resId, trackSubItems) {
                    return viewEnv.addDataChangedCallback(path, resId, trackSubItems);
                }
                function setSidePaddingsRem(paddings) {
                    viewEnv.setHitAreaPaddingsRem(
                        paddings.top,
                        paddings.right,
                        paddings.bottom,
                        paddings.left,
                        ALL_SIDES,
                    );
                }
                function getSize(unit = 'px') {
                    return unit === 'rem' ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function resize(width, height, unit = 'px') {
                    return unit === 'rem' ? viewEnv.resizeViewRem(width, height) : viewEnv.resizeViewPx(width, height);
                }
                function getViewGlobalPosition(unit = 'rem') {
                    const value = viewEnv.getViewGlobalPositionRem();
                    return unit === 'rem'
                        ? value
                        : {
                              x: remToPx(value.x),
                              y: remToPx(value.y),
                          };
                }
                function freezeTextureBeforeResize() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function getScale() {
                    return viewEnv.getScale();
                }
                function pxToRem(px) {
                    return viewEnv.pxToRem(px);
                }
                function remToPx(rem) {
                    return viewEnv.remToPx(rem);
                }
                function setAnimateWindow(showing, hiding) {
                    viewEnv.setAnimateWindow(showing, hiding);
                }
                function isFocused() {
                    return viewEnv.isFocused();
                }
                function setEventHandled() {
                    return viewEnv.setEventHandled();
                }
                function isEventHandled() {
                    return viewEnv.isEventHandled();
                }
                function forceTriggerMouseMove() {
                    viewEnv.forceTriggerMouseMove();
                }
                function getDisplayStatus() {
                    return viewEnv.getShowingStatus();
                }
                const displayStatusIs = Object.keys(_common__WEBPACK_IMPORTED_MODULE_1__.displayStatus).reduce(
                    (acc, key) => {
                        acc[key] = () =>
                            viewEnv.getShowingStatus() === _common__WEBPACK_IMPORTED_MODULE_1__.displayStatus[key];

                        return acc;
                    },
                    {},
                );
                const extraSize = {
                    /** Rem units */
                    set: (width, height) => {
                        viewEnv.setExtraSizeRem(width, height);
                    },

                    /** Rem units */
                    get: (width, height) => {
                        viewEnv.getExtraSizeRem(width, height);
                    },
                };
                const whenTutorialReady = Promise.all([
                    new Promise((resolve) => {
                        if (window.isDomBuilt) {
                            resolve();
                        } else {
                            _events__WEBPACK_IMPORTED_MODULE_2__.events.onDomBuilt(resolve);
                        }
                    }),
                    engine.whenReady,
                ]);

                /***/
            },

        /***/ './src/lib/env/view/sendEvent.ts':
            /*!***************************************!*\
  !*** ./src/lib/env/view/sendEvent.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ sendEvent: () => /* binding */ sendEvent,
                    /* harmony export */ sendViewEvent: () => /* binding */ sendViewEvent,
                    /* harmony export */ viewEventTypes: () => /* binding */ viewEventTypes,
                    /* harmony export */
                });
                const _excluded = ['args'];

                function _objectWithoutPropertiesLoose(source, excluded) {
                    if (source == null) return {};
                    var target = {};
                    var sourceKeys = Object.keys(source);
                    var key, i;
                    for (i = 0; i < sourceKeys.length; i++) {
                        key = sourceKeys[i];
                        if (excluded.indexOf(key) >= 0) continue;
                        target[key] = source[key];
                    }
                    return target;
                }

                const viewEventTypes = {
                    closePopover: 2,
                    move: 16,
                    close: 32,
                    minimize: 64,
                };

                const createViewEventArguments = (data) => {
                    return Object.entries(data).map(([name, value]) => {
                        const __Type = 'GFValueProxy';

                        switch (typeof value) {
                            case 'number':
                                return {
                                    __Type,
                                    name,
                                    number: value,
                                };

                            case 'boolean':
                                return {
                                    __Type,
                                    name,
                                    bool: value,
                                };

                            default:
                            case 'string':
                                return {
                                    __Type,
                                    name,
                                    string: value.toString(),
                                };
                        }
                    });
                };

                const sendViewEvent = (type, options) => {
                    const __Type = 'GFViewEventProxy';

                    if (options !== undefined) {
                        const args = options.args,
                            restOptions = _objectWithoutPropertiesLoose(options, _excluded);

                        if (args !== undefined) {
                            return viewEnv.handleViewEvent(
                                Object.assign(
                                    {
                                        __Type,
                                        type,
                                    },
                                    restOptions,
                                    {
                                        arguments: createViewEventArguments(args),
                                    },
                                ),
                            );
                        } else {
                            return viewEnv.handleViewEvent(
                                Object.assign(
                                    {
                                        __Type,
                                        type,
                                    },
                                    restOptions,
                                ),
                            );
                        }
                    } else {
                        return viewEnv.handleViewEvent({
                            __Type,
                            type,
                        });
                    }
                };
                const sendEvent = {
                    close(type) {
                        if (type === 'popover') {
                            sendViewEvent(viewEventTypes.closePopover);
                        } else {
                            sendViewEvent(viewEventTypes.close);
                        }
                    },

                    minimize() {
                        sendViewEvent(viewEventTypes.minimize);
                    },

                    move(start) {
                        sendViewEvent(viewEventTypes.move, {
                            isMouseEvent: true,
                            on: start,
                        });
                    },
                };

                /***/
            },

        /***/ './src/lib/function.ts':
            /*!*****************************!*\
  !*** ./src/lib/function.ts ***!
  \*****************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ constFalse: () => /* binding */ constFalse,
                    /* harmony export */ constTrue: () => /* binding */ constTrue,
                    /* harmony export */ emptyFunction: () => /* binding */ emptyFunction,
                    /* harmony export */ identity: () => /* binding */ identity,
                    /* harmony export */ log: () => /* binding */ log,
                    /* harmony export */ noop: () => /* binding */ noop,
                    /* harmony export */
                });
                /** Empty function */
                function noop() {} // eslint-disable-line @typescript-eslint/no-empty-function

                /** Alias of noop */

                const emptyFunction = noop;
                /**
                 * This helper function for corner case
                 * For example:
                 * ```js
                 * Object.keys(obj).map(identity) // -> [..]
                 * ```
                 */

                function identity(a) {
                    return a;
                }
                /**
                 * Can be used like this:
                 * ```
                 * computed(() => some.value, { equals: constFalse })
                 * ```
                 * Means that value will trigger updates by mutate
                 */

                function constFalse() {
                    return false;
                }
                /**
                 * Can be used like this:
                 * ```
                 * computed(() => some.value, { equals: constTrue })
                 * ```
                 * Means that value will **never** trigger updates by mutate
                 */

                function constTrue() {
                    return true;
                }
                /**
                 * This helper function for logging callbacks inside Data Layer Mocks without linter issues
                 *
                 * For example:
                 * ```js
                 *     controls: () => {
                 *         return makeActions({
                 *             goToBranchReset: () => log('onGoToBranchReset'),
                 *         });
                 *     },
                 * ```
                 */
                // eslint-disable-next-line no-console

                const log = console.log;

                /***/
            },

        /***/ './src/lib/hocs/adaptive/adaptive.tsx':
            /*!********************************************!*\
  !*** ./src/lib/hocs/adaptive/adaptive.tsx ***!
  \********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ adaptiveSuffixSequence: () => /* binding */ adaptiveSuffixSequence,
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */ getAdaptiveController: () => /* binding */ getAdaptiveController,
                    /* harmony export */ getDraftedAdaptiveProps: () => /* binding */ getDraftedAdaptiveProps,
                    /* harmony export */ hasDefinedAdaptiveProps: () => /* binding */ hasDefinedAdaptiveProps,
                    /* harmony export */ normalizeAdaptiveProps: () => /* binding */ normalizeAdaptiveProps,
                    /* harmony export */
                });
                /* harmony import */ var lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/hooks/useMedia */ './src/lib/hooks/useMedia.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* eslint-disable react/no-multi-comp */

                const adaptiveSuffixSequence = ['xl', 'lg', 'md', 'sm', 'xs'];

                const isAdaptiveSuffix = (key) => {
                    return adaptiveSuffixSequence.includes(key);
                };

                const isAdaptivePropName = (key) => {
                    return key.includes('_') && isAdaptiveSuffix(key.split('_').at(-1));
                };

                const mediaSizeSequence = [
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.ExtraLarge,
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.Large,
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.Medium,
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.Small,
                    lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.MediaSize.ExtraSmall,
                ];
                const hasDefinedAdaptiveProps = (propName, props) => {
                    return adaptiveSuffixSequence.some((suffix) => props[`${propName}_${suffix}`] !== undefined);
                };
                /**
                 * Normalizes all adaptive properties by picking the largest property from a list, for example `m_xl, m_lg, m_md, m_sm, m_xs` that is not larger than MediaSize and returning it as `m` in a new object with only the normalized props.
                 *
                 * @param {Object} props - An object with adaptive properties.
                 * @param {MediaSize} mediaSize - A media size to normalize adaptive props for.
                 * @return {Object} - A new object with normalized properties.
                 */

                const normalizeAdaptiveProps = (props, mediaSize) => {
                    return Object.keys(props).reduce((output, propName) => {
                        // If key is already in output, it means it is a base for an adaptive prop which was already processed -> skip
                        if (propName in output) {
                            return output;
                        }

                        if (isAdaptivePropName(propName)) {
                            const basePropName = propName.split('_').slice(0, -1).join('_'); // if base prop is already in output, it must have been already processed -> skip

                            if (basePropName in output) {
                                return output;
                            }

                            const mediaSizeIndex = mediaSizeSequence.indexOf(mediaSize); // filter out adaptive properties that are larger than mediaSize

                            const relevantAdaptiveSuffixes =
                                mediaSizeIndex !== -1 ? adaptiveSuffixSequence.slice(mediaSizeIndex) : [];
                            const relevantPropertyNames = relevantAdaptiveSuffixes.map(
                                (suffix) => basePropName + '_' + suffix,
                            );
                            const resolvedPropName = relevantPropertyNames.find(
                                (propName) => props[propName] !== undefined,
                            );
                            const resolvedPropValue = resolvedPropName ? props[resolvedPropName] : undefined; // assign baseProp with value of the first relevant adaptive prop or base prop

                            output[basePropName] =
                                resolvedPropValue !== undefined ? resolvedPropValue : props[basePropName];
                            return output;
                        }

                        const value = props[propName]; // skip props that are undefined or have some adaptive properties set

                        if (value === undefined || hasDefinedAdaptiveProps(propName, props)) {
                            return output;
                        }

                        output[propName] = value;
                        return output;
                    }, {});
                };
                /**
                 * Returns a component that normalizes adaptive properties based on the current media size and passes it to the Component.
                 *
                 * @param {React.ComponentType<StaticProps>} Component - React component that handles static props.
                 * @param {typeof normalizeAdaptiveProps} normalizeProps - optional custom function that normalizes adaptive props, useful mainly for testing.
                 * @return {JSX.Element} the Box component with normalized adaptive properties
                 */

                const getAdaptiveComponent =
                    (Component, normalizeProps = normalizeAdaptiveProps) =>
                    (props) => {
                        const _useMedia = (0, lib_hooks_useMedia__WEBPACK_IMPORTED_MODULE_0__.useMedia)(),
                            mediaSize = _useMedia.mediaSize;

                        const normalizedProps = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                            () => normalizeProps(props, mediaSize),
                            [props, mediaSize],
                        );
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            Component,
                            normalizedProps,
                        );
                    };
                /**
                 * Returns either an AdaptiveComponent or a Component depending on whether adaptive props are present in the props object.
                 * Generic types StaticProps (e.g. CompProps) and AdaptiveKeys (e.g. CompAdaptivePropNames) are optional. Adaptive logic would work
                 * on any props in runtime, but adding the types will filter which keys are validated by Typescript so that adaptive props
                 * that do not make sense are not suggested by intellisense.
                 * @usage (in root scope) const AdaptiveComp = getAdaptiveController<CompProps, CompAdaptivePropNames>(Comp);
                 *  export type CompAdaptivePropNames = 'size' | 'className';
                 *  export type CompProps = CompStaticProps & AdaptiveProps<CompStaticProps, CompAdaptivePropNamesType>;
                 *  export default AdaptiveComp;
                 *
                 * @param {React.ComponentType<StaticProps>} Component - React component that handles static props.
                 * @param {typeof normalizeAdaptiveProps} normalizeProps - optional custom function that normalizes adaptive props, useful mainly for testing.
                 * @return {JSX.Element} Either an AdaptiveBox or a Box component.
                 */

                const getAdaptiveController = (Component, normalizeProps = normalizeAdaptiveProps) => {
                    const AdaptiveComponent = getAdaptiveComponent(Component, normalizeProps);
                    return react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
                        const hasAdaptiveProps = Object.keys(props).some(
                            (key) => isAdaptivePropName(key) && props[key] !== undefined,
                        );
                        return hasAdaptiveProps
                            ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                  AdaptiveComponent,
                                  props,
                              )
                            : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                  Component,
                                  props,
                              );
                    });
                };
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = getAdaptiveController;
                const getDraftedAdaptiveProps = (propName, draftProps) =>
                    adaptiveSuffixSequence.reduce((props, suffix) => {
                        props[propName + '_' + suffix] = draftProps;
                        return props;
                    }, {});

                /***/
            },

        /***/ './src/lib/hooks/useCallOnce.ts':
            /*!**************************************!*\
  !*** ./src/lib/hooks/useCallOnce.ts ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

                const useCallOnce = (f) => {
                    const calledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

                    if (!calledRef.current) {
                        f();
                        calledRef.current = true;
                    }
                };

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = useCallOnce;

                /***/
            },

        /***/ './src/lib/hooks/useMedia.ts':
            /*!***********************************!*\
  !*** ./src/lib/hooks/useMedia.ts ***!
  \***********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaHeight: () => /* binding */ MediaHeight,
                    /* harmony export */ MediaSize: () => /* binding */ MediaSize,
                    /* harmony export */ MediaWidth: () => /* binding */ MediaWidth,
                    /* harmony export */ useMedia: () => /* binding */ useMedia,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _components_MediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../../components/MediaQuery */ './src/components/MediaQuery/index.ts',
                );
                /* harmony import */ var _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ../../components/MediaQuery/static */ './src/components/MediaQuery/static.ts',
                    );

                let MediaSize;

                (function (MediaSize) {
                    MediaSize[
                        (MediaSize['ExtraSmall'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraSmall.width)
                    ] = 'ExtraSmall';
                    MediaSize[
                        (MediaSize['Small'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.small.width)
                    ] = 'Small';
                    MediaSize[
                        (MediaSize['Medium'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.medium.width)
                    ] = 'Medium';
                    MediaSize[
                        (MediaSize['Large'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.large.width)
                    ] = 'Large';
                    MediaSize[
                        (MediaSize['ExtraLarge'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraLarge.width)
                    ] = 'ExtraLarge';
                })(MediaSize || (MediaSize = {}));

                let MediaWidth;

                (function (MediaWidth) {
                    MediaWidth[
                        (MediaWidth['ExtraSmall'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraSmall.width)
                    ] = 'ExtraSmall';
                    MediaWidth[
                        (MediaWidth['Small'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.small.width)
                    ] = 'Small';
                    MediaWidth[
                        (MediaWidth['Medium'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.medium.width)
                    ] = 'Medium';
                    MediaWidth[
                        (MediaWidth['Large'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.large.width)
                    ] = 'Large';
                    MediaWidth[
                        (MediaWidth['ExtraLarge'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraLarge.width)
                    ] = 'ExtraLarge';
                })(MediaWidth || (MediaWidth = {}));

                let MediaHeight;

                (function (MediaHeight) {
                    MediaHeight[
                        (MediaHeight['ExtraSmall'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraSmall.height)
                    ] = 'ExtraSmall';
                    MediaHeight[
                        (MediaHeight['Small'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.small.height)
                    ] = 'Small';
                    MediaHeight[
                        (MediaHeight['Medium'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.medium.height)
                    ] = 'Medium';
                    MediaHeight[
                        (MediaHeight['Large'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.large.height)
                    ] = 'Large';
                    MediaHeight[
                        (MediaHeight['ExtraLarge'] =
                            _components_MediaQuery_static__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS.extraLarge.height)
                    ] = 'ExtraLarge';
                })(MediaHeight || (MediaHeight = {}));

                const convertToMediaSize = (mediaContext) => {
                    switch (true) {
                        case mediaContext.extraLarge:
                            return MediaSize.ExtraLarge;

                        case mediaContext.large:
                            return MediaSize.Large;

                        case mediaContext.medium:
                            return MediaSize.Medium;

                        case mediaContext.small:
                            return MediaSize.Small;

                        case mediaContext.extraSmall:
                            return MediaSize.ExtraSmall;

                        default:
                            console.error('Unreachable media context resolution');
                            return MediaSize.ExtraSmall;
                    }
                };

                const convertToMediaWidth = (mediaContext) => {
                    switch (true) {
                        case mediaContext.extraLargeWidth:
                            return MediaWidth.ExtraLarge;

                        case mediaContext.largeWidth:
                            return MediaWidth.Large;

                        case mediaContext.mediumWidth:
                            return MediaWidth.Medium;

                        case mediaContext.smallWidth:
                            return MediaWidth.Small;

                        case mediaContext.extraSmallWidth:
                            return MediaWidth.ExtraSmall;

                        default:
                            console.error('Unreachable media context resolution');
                            return MediaWidth.ExtraSmall;
                    }
                };

                const convertToMediaHeight = (mediaContext) => {
                    switch (true) {
                        case mediaContext.extraLargeHeight:
                            return MediaHeight.ExtraLarge;

                        case mediaContext.largeHeight:
                            return MediaHeight.Large;

                        case mediaContext.mediumHeight:
                            return MediaHeight.Medium;

                        case mediaContext.smallHeight:
                            return MediaHeight.Small;

                        case mediaContext.extraSmallHeight:
                            return MediaHeight.ExtraSmall;

                        default:
                            console.error('Unreachable media context resolution');
                            return MediaHeight.ExtraSmall;
                    }
                };

                const useMedia = () => {
                    const mediaContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(
                        _components_MediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaContext,
                    );
                    const width = mediaContext.width,
                        height = mediaContext.height;
                    const mediaSize = convertToMediaSize(mediaContext);
                    const mediaWidth = convertToMediaWidth(mediaContext);
                    const mediaHeight = convertToMediaHeight(mediaContext);
                    return {
                        mediaSize,
                        mediaWidth,
                        mediaHeight,
                        remScreenWidth: width,
                        remScreenHeight: height,
                    };
                };

                /***/
            },

        /***/ './src/lib/hooks/useMountUnmount.ts':
            /*!******************************************!*\
  !*** ./src/lib/hooks/useMountUnmount.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useMount: () => /* binding */ useMount,
                    /* harmony export */ useUnmount: () => /* binding */ useUnmount,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

                const useMount = (fn) => {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(fn, []);
                };
                const useUnmount = (fn) => {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => fn, []);
                };

                /***/
            },

        /***/ './src/lib/hooks/useSkipFrame.ts':
            /*!***************************************!*\
  !*** ./src/lib/hooks/useSkipFrame.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useSkipFrame: () => /* binding */ useSkipFrame,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _useMountUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./useMountUnmount */ './src/lib/hooks/useMountUnmount.ts',
                );

                const NO_RAF_ID = 0;
                /**
                 * This hook will correctly work with async skip frame.
                 * It will be cleared when your component is automatically unmounted.
                 * Each time function starts, it will clear the previous run.
                 *
                 * Examples to usage:
                 * ```ts
                 * const skipFrame = useSkipFrame()
                 *
                 * useEffect(() => {
                 *   if (state === 'animating') {
                 *     skipFrame.run(() => setState(...))
                 *   }
                 * }, [state, skipFrame])
                 * ```
                 */

                function useSkipFrame() {
                    const rafIdRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(NO_RAF_ID);
                    (0, _useMountUnmount__WEBPACK_IMPORTED_MODULE_1__.useUnmount)(() => {
                        window.cancelAnimationFrame(rafIdRef.current);
                    });
                    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                        () => ({
                            run: (handler) => {
                                window.cancelAnimationFrame(rafIdRef.current);
                                rafIdRef.current = window.requestAnimationFrame(() => {
                                    rafIdRef.current = window.requestAnimationFrame(() => {
                                        handler();
                                        rafIdRef.current = NO_RAF_ID;
                                    });
                                });
                            },
                            clear: () => {
                                window.cancelAnimationFrame(rafIdRef.current);
                                rafIdRef.current = NO_RAF_ID;
                            },

                            get isRunning() {
                                return rafIdRef.current !== NO_RAF_ID;
                            },
                        }),
                        [],
                    );
                }

                /***/
            },

        /***/ './src/lib/string-utils.ts':
            /*!*********************************!*\
  !*** ./src/lib/string-utils.ts ***!
  \*********************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Alignment: () => /* binding */ Alignment,
                    /* harmony export */ convertNbsp: () => /* binding */ convertNbsp,
                    /* harmony export */ convertZwnbsp: () => /* binding */ convertZwnbsp,
                    /* harmony export */ format: () => /* binding */ format,
                    /* harmony export */ formatPrintf: () => /* binding */ formatPrintf,
                    /* harmony export */ formatString: () => /* binding */ formatString,
                    /* harmony export */ normalizeResource: () => /* binding */ normalizeResource,
                    /* harmony export */ snakeToCamel: () => /* binding */ snakeToCamel,
                    /* harmony export */ splitChinese: () => /* binding */ splitChinese,
                    /* harmony export */ splitEuropean: () => /* binding */ splitEuropean,
                    /* harmony export */ splitWords: () => /* binding */ splitWords,
                    /* harmony export */ upCaseFirstChar: () => /* binding */ upCaseFirstChar,
                    /* harmony export */
                });
                let Alignment;

                (function (Alignment) {
                    Alignment[(Alignment['left'] = 0)] = 'left';
                    Alignment[(Alignment['right'] = 1)] = 'right';
                })(Alignment || (Alignment = {}));

                /**
                 * Replace in string named params set in python style through braces: 'blalbla {param1} blalbla {param1} ...'
                 * @param str
                 * @param mapping is key/value params object
                 * @returns {void|*|XML|string}
                 */
                function format(str, mapping) {
                    return str.replace(/\{\w+\}/g, (match) => String(mapping[match.slice(1, -1)]));
                }
                /**
                 * Replace in string named params set in printf-style style: 'blalbla %(param1)s blalbla %(param1)s ...'
                 * @param str
                 * @param mapping is key/value params object
                 * @returns {void|*|XML|string}
                 */

                function formatPrintf(str, mapping) {
                    return str.replace(/(\{|%\()\w+(\}|\)s)/g, (match) => {
                        const pad = match.indexOf('%') === 0 ? 2 : 1;
                        return String(mapping[match.slice(pad, -pad)]);
                    });
                }
                /**
                 * Convert snake_case string to camelCase'
                 * @param {string} str
                 * @returns {string}
                 */

                function snakeToCamel(str) {
                    return str.replace(/_\w/g, (match) => {
                        return match[1].toUpperCase();
                    });
                }
                /**
                 * Convert file name to R class name'
                 * @param str
                 * @returns {string}
                 */

                function normalizeResource(str) {
                    return str.replace(/-/g, '_');
                }
                /**
                 * convert first char to upper case
                 * @param str
                 * @returns {string}
                 */

                function upCaseFirstChar(str) {
                    return str[0].toUpperCase() + str.slice(1);
                }
                /**
                 * replace &nbsp; to \xa0
                 * @param str
                 * @returns {string}
                 */

                const convertNbsp = (str) => {
                    return str.replace(/&nbsp;/g, '\xa0');
                };
                /**
                 * replace &zwnbsp; to \ufeff
                 * @param str
                 * @returns {string}
                 */

                const convertZwnbsp = (str) => {
                    return str.replace(/&zwnbsp;/g, '\ufeff');
                };

                const addSeparatorToRight = (acc, item, index) => {
                    if (!(index % 2)) {
                        return [...acc, item];
                    } else {
                        const last = acc.pop();
                        return [...acc, last + item];
                    }
                };

                const addSeparatorToLeft = (acc, item, index) => {
                    if (index === 0) {
                        return [item];
                    } else if (index % 2) {
                        return [...acc, item === ' ' ? '\xa0' : item];
                    } else {
                        const last = acc.pop();
                        return [...acc, last + item];
                    }
                };
                /**
                 * Split text string with RegExp separator and then add separator to the proper side
                 */

                const splitAndFormat = (stringToSplit, separator, alignment = Alignment.left) =>
                    stringToSplit
                        .split(separator)
                        .reduce(alignment === Alignment.left ? addSeparatorToRight : addSeparatorToLeft, []);

                const splitEuropean = (stringToSplit, alignment = Alignment.left) => {
                    let splitResult = [];
                    const splitRegex =
                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu; // exclude special words like vehicle names KV-2 etc

                    const stringWithNbsp = convertNbsp(stringToSplit);
                    splitAndFormat(stringWithNbsp, /( )/, alignment).forEach(
                        (word) => (splitResult = splitResult.concat(splitAndFormat(word, splitRegex, Alignment.left))),
                    );
                    return splitResult;
                };
                const splitChinese = (() => {
                    /* eslint-disable no-useless-escape */
                    // Escaping is necessary for unicode RegExp.
                    // Symbols used for latin vehicle names, ranges etc. expected not be wrapped from each other or following punctuation mark.
                    // You can add new ones to the third pair of [] (currently the list is [a-zA-Z0-9-–— %….\{3\}/])
                    const latinInjections =
                        /[\(\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[ %\+\x2D-9A-Za-\{\}\xA0\xC0-\u0237\u2013\u2014\u2026]+[\)\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1A\uFF1B\uFF1F\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu; // This rule prevents wrapping of some symbols neighboring to the brackets/quotes.
                    // Pairs of opening (left) and closing (right) symbols are described.
                    // Only use separate unicode symbols for left and right part(«»), but NOT universal ones (").
                    // In case if universal symbol is used in the translation, the translation must be fixed, not the rule.

                    const bracketsAndQuotes =
                        /[\(\xAB\u201C\u275D][\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?|[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}][\0-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u3004\u3006\u3008-\u3020\u302A-\u3037\u303C-\u33FF\u4DC0-\u4DFF\uA000-\uF8FF\uFA6E\uFA6F\uFADA-\u{16FE1}\u{16FE4}-\u{16FEF}\u{16FF2}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}]?[\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?[\)\xBB\u201D\u275E][\u3002\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]?/gmu; // Rule describes that previous hieroglyph should not be wrapped.
                    // Only unicode punctuation marks are used for asian languages.
                    // Otherwise string should be fixed to use unicode punctuation marks, not the rule.

                    const punctuationMarks =
                        /[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]?[ \):;\u2022\u3001\u3002\u300A-\u300D\uFF01\uFF0C\uFF1A\uFF1B\uFF1F]|[\(,1A-Za-\{\}\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342E}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B150}-\u{1B152}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu; // This rule makes it possible to wrap any neighboring pair of hieroglyphs.

                    const neighboringHieroglyphs =
                        /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9\u{16FE2}\u{16FE3}\u{16FF0}\u{16FF1}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B738}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}]/gmu;
                    /* eslint-enable */
                    // Order is important.

                    const mainRegex = new RegExp(
                        latinInjections.source +
                            '|' +
                            bracketsAndQuotes.source +
                            '|' +
                            punctuationMarks.source +
                            '|' +
                            neighboringHieroglyphs.source,
                        'gum',
                    );
                    return (stringsToSplit) =>
                        stringsToSplit
                            .replace(/&nbsp;/g, '\xa0')
                            .replace(/ /g, '\xa0')
                            .match(mainRegex);
                })();
                const CHINESE_LANGUAGE_CODES = ['zh_cn', 'zh_sg', 'zh_tw'];
                /**
                 * Split one line of localized text to array of words which then can be line-wrapped by gameface.
                 * @param stringToSplit supports &nbsp, hyphens and dashes for asian languages.
                 * @param alignment set to `right` for right-aligned text
                 * See tests for example
                 */

                const splitWords = (stringToSplit, alignment = Alignment.left) => {
                    const language = R.strings.settings.LANGUAGE_CODE().toLowerCase();

                    if (CHINESE_LANGUAGE_CODES.includes(language)) {
                        return splitChinese(stringToSplit);
                    }

                    return splitEuropean(stringToSplit, alignment);
                };
                const formatString = (text, alignment, binding) =>
                    text.split(/%\((.*?)\)(?:[sd])?/g).map((subString) => {
                        if (!binding) {
                            return splitWords(subString, alignment);
                        }

                        return subString in binding ? binding[subString] : splitWords(subString, alignment);
                    });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/ArmoryYardWalletNotAvailableTooltipView.tsx':
            /*!**********************************************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/ArmoryYardWalletNotAvailableTooltipView.tsx ***!
  \**********************************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var components_TooltipDecorator_TooltipDecorator__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! components/TooltipDecorator/TooltipDecorator */ './src/components/TooltipDecorator/TooltipDecorator.tsx',
                    );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react-dom */ './node_modules/@wotfe/react-dom/index.js',
                );
                /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./components/App */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.tsx',
                );
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./model */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/model.ts',
                );

                engine.whenReady.then(() => {
                    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _model__WEBPACK_IMPORTED_MODULE_4__.ModelProvider,
                            null,
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                components_TooltipDecorator_TooltipDecorator__WEBPACK_IMPORTED_MODULE_0__.TooltipDecorator,
                                null,
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                    _components_App__WEBPACK_IMPORTED_MODULE_3__.App,
                                    null,
                                ),
                            ),
                        ),
                        document.getElementById('root'),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.tsx':
            /*!*********************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.tsx ***!
  \*********************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ App: () => /* binding */ App,
                    /* harmony export */
                });
                /* harmony import */ var components_Text_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! components/Text/Text */ './src/components/Text/Text.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./App.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.css',
                );

                const App = react__WEBPACK_IMPORTED_MODULE_1___default().memo(() => {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'div',
                        {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('div', {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].bg,
                        }),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('div', {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].metal,
                        }),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('div', {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].warningIcon,
                        }),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                            {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_2__['default'].body,
                                text: R.strings.armory_shop.shopBuyView.tooltip.buyNotAvailable(),
                            },
                        ),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/model.ts':
            /*!***********************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/model.ts ***!
  \***********************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ModelProvider: () => /* binding */ ModelProvider,
                    /* harmony export */ useModel: () => /* binding */ useModel,
                    /* harmony export */
                });
                /* harmony import */ var lib_data_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/data-layer */ './src/lib/data-layer/index.tsx',
                );
                /* eslint-disable @typescript-eslint/no-unused-vars */

                const _initializeModelWithC = (0,
                    lib_data_layer__WEBPACK_IMPORTED_MODULE_0__.initializeModelWithContext)()(
                        ({ observableModel }) => {
                            const model = {
                                root: observableModel.object(),
                            };
                            return Object.assign({}, model, {
                                computes: {},
                            });
                        },
                        ({ externalModel }) => ({}),
                    ),
                    ModelProvider = _initializeModelWithC[0],
                    useModel = _initializeModelWithC[1];

                /***/
            },

        /***/ './src/components/Box/Box.css':
            /*!************************************!*\
  !*** ./src/components/Box/Box.css ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    mt__XS: 'Box_mt__XS_0c',
                    mt__SM: 'Box_mt__SM_eb',
                    mt__SMp: 'Box_mt__SMp_cf',
                    mt__MD: 'Box_mt__MD_25',
                    mt__MDp: 'Box_mt__MDp_49',
                    mt__LG: 'Box_mt__LG_e8',
                    mt__XL: 'Box_mt__XL_83',
                    mr__XS: 'Box_mr__XS_7c',
                    mr__SM: 'Box_mr__SM_08',
                    mr__SMp: 'Box_mr__SMp_06',
                    mr__MD: 'Box_mr__MD_4a',
                    mr__MDp: 'Box_mr__MDp_b6',
                    mr__LG: 'Box_mr__LG_d0',
                    mr__XL: 'Box_mr__XL_db',
                    mb__XS: 'Box_mb__XS_bb',
                    mb__SM: 'Box_mb__SM_83',
                    mb__SMp: 'Box_mb__SMp_04',
                    mb__MD: 'Box_mb__MD_ed',
                    mb__MDp: 'Box_mb__MDp_65',
                    mb__LG: 'Box_mb__LG_c8',
                    mb__XL: 'Box_mb__XL_f8',
                    ml__XS: 'Box_ml__XS_8a',
                    ml__SM: 'Box_ml__SM_e6',
                    ml__SMp: 'Box_ml__SMp_fb',
                    ml__MD: 'Box_ml__MD_2b',
                    ml__MDp: 'Box_ml__MDp_c7',
                    ml__LG: 'Box_ml__LG_39',
                    ml__XL: 'Box_ml__XL_4a',
                };

                /***/
            },

        /***/ './src/components/FormatText/FormatText.css':
            /*!**************************************************!*\
  !*** ./src/components/FormatText/FormatText.css ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = { base: 'FormatText_base_d0' };

                /***/
            },

        /***/ './src/components/Text/Text.css':
            /*!**************************************!*\
  !*** ./src/components/Text/Text.css ***!
  \**************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    'paragraph-P10': 'Text_paragraph-P10_2c',
                    'paragraph-P12': 'Text_paragraph-P12_22',
                    'paragraph-P14': 'Text_paragraph-P14_a7',
                    'paragraph-P16': 'Text_paragraph-P16_90',
                    'paragraph-P18': 'Text_paragraph-P18_50',
                    'paragraph-P24': 'Text_paragraph-P24_33',
                    'heading-H14': 'Text_heading-H14_8b',
                    'heading-H15': 'Text_heading-H15_9e',
                    'heading-H18': 'Text_heading-H18_b7',
                    'heading-H20R': 'Text_heading-H20R_f6',
                    'heading-H22': 'Text_heading-H22_27',
                    'heading-H24R': 'Text_heading-H24R_be',
                    'heading-H24': 'Text_heading-H24_0c',
                    'heading-H28': 'Text_heading-H28_78',
                    'heading-H36': 'Text_heading-H36_32',
                    'heading-H56': 'Text_heading-H56_c3',
                    'heading-H73': 'Text_heading-H73_8f',
                    'heading-H144': 'Text_heading-H144_a9',
                    BLACK_REAL: 'Text_BLACK_REAL_30',
                    WHITE_REAL: 'Text_WHITE_REAL_bc',
                    WHITE: 'Text_WHITE_62',
                    WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                    WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                    PAR: 'Text_PAR_15',
                    PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                    PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                    INFO_RED: 'Text_INFO_RED_30',
                    RED: 'Text_RED_66',
                    RED_DARK: 'Text_RED_DARK_d8',
                    YELLOW: 'Text_YELLOW_ed',
                    ORANGE: 'Text_ORANGE_be',
                    CREAM: 'Text_CREAM_57',
                    BROWN: 'Text_BROWN_18',
                    GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                    GREEN: 'Text_GREEN_e3',
                    GREEN_DARK: 'Text_GREEN_DARK_f1',
                    BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                    BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                    CRED: 'Text_CRED_f7',
                    GOLD: 'Text_GOLD_28',
                    BOND: 'Text_BOND_be',
                    PROM: 'Text_PROM_65',
                };

                /***/
            },

        /***/ './src/components/TooltipDecorator/TooltipDecorator.css':
            /*!**************************************************************!*\
  !*** ./src/components/TooltipDecorator/TooltipDecorator.css ***!
  \**************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'TooltipDecorator_base_c9',
                    'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                    decorator: 'TooltipDecorator_decorator_3d',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.css':
            /*!*********************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/components/App.css ***!
  \*********************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'App_base_8a',
                    bg: 'App_bg_a6',
                    metal: 'App_metal_33',
                    warningIcon: 'App_warningIcon_93',
                    body: 'App_body_b0',
                };

                /***/
            },

        /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (__webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/chunk loaded */
    /******/ (() => {
        /******/ var deferred = [];
        /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
            /******/ if (chunkIds) {
                /******/ priority = priority || 0;
                /******/ for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
                    deferred[i] = deferred[i - 1];
                /******/ deferred[i] = [chunkIds, fn, priority];
                /******/ return;
                /******/
            }
            /******/ var notFulfilled = Infinity;
            /******/ for (var i = 0; i < deferred.length; i++) {
                /******/ var [chunkIds, fn, priority] = deferred[i];
                /******/ var fulfilled = true;
                /******/ for (var j = 0; j < chunkIds.length; j++) {
                    /******/ if (
                        (priority & (1 === 0) || notFulfilled >= priority) &&
                        Object.keys(__webpack_require__.O).every((key) => __webpack_require__.O[key](chunkIds[j]))
                    ) {
                        /******/ chunkIds.splice(j--, 1);
                        /******/
                    } else {
                        /******/ fulfilled = false;
                        /******/ if (priority < notFulfilled) notFulfilled = priority;
                        /******/
                    }
                    /******/
                }
                /******/ if (fulfilled) {
                    /******/ deferred.splice(i--, 1);
                    /******/ var r = fn();
                    /******/ if (r !== undefined) result = r;
                    /******/
                }
                /******/
            }
            /******/ return result;
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = (module) => {
            /******/ var getter =
                module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
            /******/ __webpack_require__.d(getter, { a: getter });
            /******/ return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = (exports, definition) => {
            /******/ for (var key in definition) {
                /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/global */
    /******/ (() => {
        /******/ __webpack_require__.g = (function () {
            /******/ if (typeof globalThis === 'object') return globalThis;
            /******/ try {
                /******/ return this || new Function('return this')();
                /******/
            } catch (e) {
                /******/ if (typeof window === 'object') return window;
                /******/
            }
            /******/
        })();
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
        /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = (exports) => {
            /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
            /******/ Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
    /******/
    /******/ /* webpack/runtime/jsonp chunk loading */
    /******/ (() => {
        /******/ // no baseURI
        /******/
        /******/ // object to store loaded and loading chunks
        /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/ var installedChunks = {
            /******/ 'lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/ArmoryYardWalletNotAvailableTooltipView': 0,
            /******/
        };
        /******/
        /******/ // no chunk on demand loading
        /******/
        /******/ // no prefetching
        /******/
        /******/ // no preloaded
        /******/
        /******/ // no HMR
        /******/
        /******/ // no HMR manifest
        /******/
        /******/ __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
        /******/
        /******/ // install a JSONP callback for chunk loading
        /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            /******/ var [chunkIds, moreModules, runtime] = data;
            /******/ // add "moreModules" to the modules object,
            /******/ // then flag all "chunkIds" as loaded and fire callback
            /******/ var moduleId,
                chunkId,
                i = 0;
            /******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
                /******/ for (moduleId in moreModules) {
                    /******/ if (__webpack_require__.o(moreModules, moduleId)) {
                        /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
                        /******/
                    }
                    /******/
                }
                /******/ if (runtime) var result = runtime(__webpack_require__);
                /******/
            }
            /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/ for (; i < chunkIds.length; i++) {
                /******/ chunkId = chunkIds[i];
                /******/ if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/ installedChunks[chunkId][0]();
                    /******/
                }
                /******/ installedChunks[chunkId] = 0;
                /******/
            }
            /******/ return __webpack_require__.O(result);
            /******/
        };
        /******/
        /******/ var chunkLoadingGlobal = (self['webpackChunkgameface'] = self['webpackChunkgameface'] || []);
        /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
            null,
            chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
        );
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module depends on other loaded chunks and execution need to be delayed
    /******/ var __webpack_exports__ = __webpack_require__.O(undefined, ['lib/vendors'], () =>
        __webpack_require__(
            '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/tooltips/ArmoryYardWalletNotAvailableTooltipView/ArmoryYardWalletNotAvailableTooltipView.tsx',
        ),
    );
    /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9iYnkvZmVhdHVyZS90b29sdGlwcy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcvQXJtb3J5WWFyZFdhbGxldE5vdEF2YWlsYWJsZVRvb2x0aXBWaWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJTyxNQUFNTSxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCx3RUFBWixDQUF4QjtBQUlQLE1BQU1RLGdCQUFnQixHQUFHO0FBQUVDLEVBQUFBLEVBQUUsRUFBRUwsdURBQU47QUFBcUJPLEVBQUFBLEVBQUUsRUFBRVAsdURBQXpCO0FBQXdDUyxFQUFBQSxFQUFFLEVBQUVULHVEQUE1QztBQUEyRFcsRUFBQUEsRUFBRSxFQUFFWCx1REFBYVk7QUFBNUUsQ0FBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUFFUixFQUFBQSxFQUFFLEVBQUVMLHVEQUFOO0FBQXFCTyxFQUFBQSxFQUFFLEVBQUVQLHVEQUF6QjtBQUF3Q1MsRUFBQUEsRUFBRSxFQUFFVCx1REFBNUM7QUFBMkRXLEVBQUFBLEVBQUUsRUFBRVgsdURBQWFpQjtBQUE1RSxDQUF6QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHO0FBQUViLEVBQUFBLEVBQUUsRUFBRUwsd0RBQU47QUFBc0JPLEVBQUFBLEVBQUUsRUFBRVAsd0RBQTFCO0FBQTBDUyxFQUFBQSxFQUFFLEVBQUVULHdEQUE5QztBQUE4RFcsRUFBQUEsRUFBRSxFQUFFWCx3REFBY3NCO0FBQWhGLENBQTFCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUc7QUFBRWxCLEVBQUFBLEVBQUUsRUFBRUwsdURBQU47QUFBcUJPLEVBQUFBLEVBQUUsRUFBRVAsdURBQXpCO0FBQXdDUyxFQUFBQSxFQUFFLEVBQUVULHVEQUE1QztBQUEyRFcsRUFBQUEsRUFBRSxFQUFFWCx1REFBYTJCO0FBQTVFLENBQXpCO0FBQ0EsTUFBTUMs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O1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0JveC9Cb3gudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvRm9ybWF0VGV4dC9Gb3JtYXRUZXh0LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvTWVkaWFDb250ZXh0LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9NZWRpYVByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvTWVkaWFRdWVyeS50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVF1ZXJ5L2dldEJ5SGVpZ2h0LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVF1ZXJ5L3N0YXRpYy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9UZXh0L1RleHQudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvVG9vbHRpcERlY29yYXRvci9Ub29sdGlwRGVjb3JhdG9yLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9nbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvc3BhY2luZy5qcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZGF0YS1sYXllci9kYXRhLWxheWVyLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9kYXRhLWxheWVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9jbGllbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9jbGllbnQvaW50ZXJuYWwudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9oZWxwZXJzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L2NoaWxkcmVuLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvdmlldy9jb21tb24udHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L2V2ZW50cy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L3NlbmRFdmVudC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2hvY3MvYWRhcHRpdmUvYWRhcHRpdmUudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9ob29rcy91c2VDYWxsT25jZS50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlTWVkaWEudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2hvb2tzL3VzZU1vdW50VW5tb3VudC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlU2tpcEZyYW1lLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9zdHJpbmctdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvdG9vbHRpcHMvQXJtb3J5WWFyZFdhbGxldE5vdEF2YWlsYWJsZVRvb2x0aXBWaWV3L0FybW9yeVlhcmRXYWxsZXROb3RBdmFpbGFibGVUb29sdGlwVmlldy50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvdG9vbHRpcHMvQXJtb3J5WWFyZFdhbGxldE5vdEF2YWlsYWJsZVRvb2x0aXBWaWV3L2NvbXBvbmVudHMvQXBwLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS90b29sdGlwcy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Cb3gvQm94LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0Zvcm1hdFRleHQvRm9ybWF0VGV4dC5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9UZXh0L1RleHQuY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvVG9vbHRpcERlY29yYXRvci9Ub29sdGlwRGVjb3JhdG9yLmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS90b29sdGlwcy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcvY29tcG9uZW50cy9BcHAuY3NzIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc3BhY2luZyBmcm9tICdnbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9zcGFjaW5nJztcclxuaW1wb3J0IGdldEFkYXB0aXZlQ29udHJvbGxlciwgeyBBZGFwdGl2ZVByb3BzIH0gZnJvbSAnbGliL2hvY3MvYWRhcHRpdmUvYWRhcHRpdmUnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Cb3guY3NzJztcclxuXHJcbmV4cG9ydCB0eXBlIFN0YW5kYXJkU3BhY2luZ1R5cGUgPSBrZXlvZiB0eXBlb2Ygc3BhY2luZztcclxuZXhwb3J0IHR5cGUgU3BhY2luZ1R5cGUgPSBTdGFuZGFyZFNwYWNpbmdUeXBlIHwgYm9vbGVhbiB8IG51bWJlcjtcclxuZXhwb3J0IGNvbnN0IHN0YW5kYXJkTWFyZ2lucyA9IE9iamVjdC5rZXlzKHNwYWNpbmcpIGFzIFN0YW5kYXJkU3BhY2luZ1R5cGVbXTtcclxuXHJcbmV4cG9ydCB0eXBlIEN1c3RvbUNvbXBvbmVudFJlcXVpcmVkUHJvcHMgPSB7IGNsYXNzTmFtZT86IHN0cmluZzsgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzOyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH07XHJcblxyXG5jb25zdCBkZWZhdWx0WGxNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19YTCwgbXI6IHN0eWxlcy5tcl9fWEwsIG1iOiBzdHlsZXMubWJfX1hMLCBtbDogc3R5bGVzLm1sX19YTCB9O1xyXG5jb25zdCBkZWZhdWx0TGdNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19MRywgbXI6IHN0eWxlcy5tcl9fTEcsIG1iOiBzdHlsZXMubWJfX0xHLCBtbDogc3R5bGVzLm1sX19MRyB9O1xyXG5jb25zdCBkZWZhdWx0TWRwTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fTURwLCBtcjogc3R5bGVzLm1yX19NRHAsIG1iOiBzdHlsZXMubWJfX01EcCwgbWw6IHN0eWxlcy5tbF9fTURwIH07XHJcbmNvbnN0IGRlZmF1bHRNZE1hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX01ELCBtcjogc3R5bGVzLm1yX19NRCwgbWI6IHN0eWxlcy5tYl9fTUQsIG1sOiBzdHlsZXMubWxfX01EIH07XHJcbmNvbnN0IGRlZmF1bHRTbXBNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19TTXAsIG1yOiBzdHlsZXMubXJfX1NNcCwgbWI6IHN0eWxlcy5tYl9fU01wLCBtbDogc3R5bGVzLm1sX19TTXAgfTtcclxuY29uc3QgZGVmYXVsdFNtTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fU00sIG1yOiBzdHlsZXMubXJfX1NNLCBtYjogc3R5bGVzLm1iX19TTSwgbWw6IHN0eWxlcy5tbF9fU00gfTtcclxuY29uc3QgZGVmYXVsdFhzTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fWFMsIG1yOiBzdHlsZXMubXJfX1hTLCBtYjogc3R5bGVzLm1iX19YUywgbWw6IHN0eWxlcy5tbF9fWFMgfTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5NYXAgPSB7XHJcbiAgICBYTDogZGVmYXVsdFhsTWFyZ2lucyxcclxuICAgIExHOiBkZWZhdWx0TGdNYXJnaW5zLFxyXG4gICAgTURwOiBkZWZhdWx0TWRwTWFyZ2lucyxcclxuICAgIE1EOiBkZWZhdWx0TWRNYXJnaW5zLFxyXG4gICAgU01wOiBkZWZhdWx0U21wTWFyZ2lucyxcclxuICAgIFNNOiBkZWZhdWx0U21NYXJnaW5zLFxyXG4gICAgWFM6IGRlZmF1bHRYc01hcmdpbnMsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdE1hcmdpbnMgPSBPYmplY3Qua2V5cyhkZWZhdWx0TWFyZ2luTWFwKSBhcyAoa2V5b2YgdHlwZW9mIGRlZmF1bHRNYXJnaW5NYXApW107XHJcblxyXG5jb25zdCBtYXJnaW5LZXlMaXN0ID0gWydtdCcsICdtcicsICdtYicsICdtbCddIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgZ2V0TWFyZ2luQ2xhc3NOYW1lcyA9IChtYXJnaW5NYXA6IHsgbXQ/OiBTcGFjaW5nVHlwZTsgbXI/OiBTcGFjaW5nVHlwZTsgbWI/OiBTcGFjaW5nVHlwZTsgbWw/OiBTcGFjaW5nVHlwZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gbWFyZ2luS2V5TGlzdC5yZWR1Y2UoKGNsYXNzTmFtZXMsIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFyZ2luTWFwW2tleV07XHJcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjbGFzc05hbWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcy5jb25jYXQoZGVmYXVsdE1hcmdpbk1hcFt2YWx1ZSA9PT0gdHJ1ZSA/ICdNRCcgOiB2YWx1ZV1ba2V5XSk7XHJcbiAgICB9LCBbXSBhcyBzdHJpbmdbXSk7XHJcbn07XHJcblxyXG5jb25zdCBtYXJnaW5LZXlQcm9wZXJ0eU1hcCA9IHtcclxuICAgIG10OiAnbWFyZ2luVG9wJyxcclxuICAgIG1yOiAnbWFyZ2luUmlnaHQnLFxyXG4gICAgbWI6ICdtYXJnaW5Cb3R0b20nLFxyXG4gICAgbWw6ICdtYXJnaW5MZWZ0JyxcclxufSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGdldE1hcmdpblN0eWxlID0gKG1hcmdpbk1hcDogeyBtdD86IFNwYWNpbmdUeXBlOyBtcj86IFNwYWNpbmdUeXBlOyBtYj86IFNwYWNpbmdUeXBlOyBtbD86IFNwYWNpbmdUeXBlIH0pID0+IHtcclxuICAgIHJldHVybiBtYXJnaW5LZXlMaXN0LnJlZHVjZSgoc3R5bGUsIGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFyZ2luTWFwW2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBtYXJnaW5LZXlQcm9wZXJ0eU1hcFtrZXldO1xyXG4gICAgICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZSArICdyZW0nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9LCB7fSBhcyBDU1NQcm9wZXJ0aWVzKTtcclxufTtcclxuXHJcbnR5cGUgQmFzZUJveFByb3BzID0ge1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgbT86IFNwYWNpbmdUeXBlO1xyXG4gICAgbXQ/OiBTcGFjaW5nVHlwZTtcclxuICAgIG1yPzogU3BhY2luZ1R5cGU7XHJcbiAgICBtYj86IFNwYWNpbmdUeXBlO1xyXG4gICAgbWw/OiBTcGFjaW5nVHlwZTtcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuICAgIGNvbHVtbj86IGJvb2xlYW47XHJcbiAgICByb3c/OiBib29sZWFuO1xyXG4gICAgc3BhY2VCZXR3ZWVuPzogYm9vbGVhbjtcclxuICAgIHNwYWNlQXJvdW5kPzogYm9vbGVhbjtcclxuICAgIGZsZXhTdGFydD86IGJvb2xlYW47XHJcbiAgICBjZW50ZXI/OiBib29sZWFuO1xyXG4gICAgZmxleEVuZD86IGJvb2xlYW47XHJcbiAgICBncm93PzogYm9vbGVhbjtcclxuICAgIHNocmluaz86IGJvb2xlYW47XHJcbiAgICB3cmFwPzogYm9vbGVhbjtcclxufSAmIFBpY2s8XHJcbiAgICBDU1NQcm9wZXJ0aWVzLFxyXG4gICAgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2ZsZXgnIHwgJ2ZsZXhEaXJlY3Rpb24nIHwgJ2ZsZXhXcmFwJyB8ICdqdXN0aWZ5Q29udGVudCcgfCAnYWxpZ25JdGVtcycgfCAnYWxpZ25TZWxmJ1xyXG4+O1xyXG5cclxuZXhwb3J0IHR5cGUgQm94U3RhdGljUHJvcHMgPSBSZWFkb25seTxCYXNlQm94UHJvcHM+ICYgT21pdDxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4sIGtleW9mIEJhc2VCb3hQcm9wcz47XHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgZ2VuZXJhdGVzIGEgZGl2IHdpdGggYXBwbGllZCBsYXlvdXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBCb3hQcm9wcyAtIE9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgQHBhcmFtIHtzdHJpbmd9IFtjbGFzc05hbWVdIC0gQWRkaXRpb25hbCBjbGFzcyhlcykgdG8gYmUgYWRkZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbJ3dpZHRoJ119IFt3aWR0aF0gLSBXaWR0aCBvZiB0aGUgYm94LiBTdXBwb3J0cyBzdGFuZGFyZCBDU1MgdW5pdHMsIG51bWVyaWMgdmFsdWVzIGFyZSB0cmFuc2Zvcm1lZCB0byByZW0uXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzWydoZWlnaHQnXX0gW2hlaWdodF0gLSBIZWlnaHQgb2YgdGhlIGJveC4gU3VwcG9ydHMgc3RhbmRhcmQgQ1NTIHVuaXRzLCBudW1lcmljIHZhbHVlcyBhcmUgdHJhbnNmb3JtZWQgdG8gcmVtLlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIGFsbCBzaWRlcyBvZiB0aGUgYm94LiBTdXBwb3J0cyBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGZvciBNRCBtYXJnaW4sIG51bWVyaWMgdmFsdWVzIGFyZSB0cmFuc2Zvcm1lZCB0byByZW0uXHJcbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gW210PW1dIC0gTWFyZ2luIHZhbHVlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHRvcCBvZiB0aGUgYm94LlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttcj1tXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSByaWdodCBvZiB0aGUgYm94LlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttYj1tXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBib3R0b20gb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbWw9bV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgbGVmdCBvZiB0aGUgYm94LlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW2NvbHVtbl0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBjb250YWluZXIgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBhIGNvbHVtbi5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtyb3ddIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggY29udGFpbmVyIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYSByb3cuXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzW1wiZmxleERpcmVjdGlvblwiXX0gW2ZsZXhEaXJlY3Rpb25dIC0gU3BlY2lmaWVzIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGZsZXggY29udGFpbmVyLlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW2ZsZXhTdGFydF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgYmUgYWxpZ25lZCB0byB0aGUgc3RhcnQgb2YgdGhlIGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtjZW50ZXJdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGNlbnRlcmVkIHdpdGhpbiB0aGUgY29udGFpbmVyLlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW2ZsZXhFbmRdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgdG8gdGhlIGVuZCBvZiB0aGUgY29udGFpbmVyLlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW3NwYWNlQmV0d2Vlbl0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgYmUgZXZlbmx5IHNwYWNlZCB3aXRoIHNwYWNlIGJldHdlZW4gdGhlbS5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtzcGFjZUFyb3VuZF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgYmUgZXZlbmx5IHNwYWNlZCB3aXRoIHNwYWNlIGFyb3VuZCB0aGVtLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImp1c3RpZnlDb250ZW50XCJdfSBbanVzdGlmeUNvbnRlbnRdIC0gU3BlY2lmaWVzIGhvdyB0aGUgZmxleCBpdGVtcyBzaG91bGQgYmUgYWxpZ25lZCBhbG9uZyB0aGUgbWFpbiBheGlzLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImFsaWduSXRlbXNcIl19IFthbGlnbkl0ZW1zXSAtIFNwZWNpZmllcyBob3cgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgYWxvbmcgdGhlIGNyb3NzIGF4aXMuXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzW1wiYWxpZ25TZWxmXCJdfSBbYWxpZ25TZWxmXSAtIFNwZWNpZmllcyBob3cgYSBmbGV4IGl0ZW0gc2hvdWxkIGFsaWduIGl0c2VsZiBhbG9uZyB0aGUgY3Jvc3MgYXhpcy5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFt3cmFwXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCB3cmFwIGlmIHRoZXkgZXhjZWVkIHRoZSBjb250YWluZXIncyB3aWR0aC5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJmbGV4V3JhcFwiXX0gW2ZsZXhXcmFwXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCB3cmFwIGlmIHRoZXkgZXhjZWVkIHRoZSBjb250YWluZXIncyB3aWR0aC5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtncm93XSAtIFNwZWNpZmllcyB0aGUgZmxleCBncm93IGZhY3RvciBvZiB0aGUgZmxleCBpdGVtLlxyXG4gKiAgIEBwYXJhbSB7Ym9vbGVhbn0gW3Nocmlua10gLSBTcGVjaWZpZXMgdGhlIGZsZXggc2hyaW5rIGZhY3RvciBvZiB0aGUgZmxleCBpdGVtLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImZsZXhcIl19IFtmbGV4XSAtIFNwZWNpZmllcyB0aGUgZmxleCBncm93LCBmbGV4IHNocmluaywgYW5kIGZsZXggYmFzaXMgb2YgdGhlIGZsZXggaXRlbS5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXN9IFtzdHlsZV0gLSBDdXN0b20gc3R5bGVzIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cclxuICogICBAcGFyYW0ge1JlYWN0Tm9kZX0gW2NoaWxkcmVuXSAtIENoaWxkIGNvbXBvbmVudHMgdG8gYmUgcmVuZGVyZWQgd2l0aGluIHRoZSBjb21wb25lbnQuXHJcbiAqICAgQHBhcmFtIHtPYmplY3R9IFsuLi5yZXN0UHJvcHNdIC0gQWRkaXRpb25hbCBIVE1MIGRpdiBwcm9wZXJ0aWVzLlxyXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gQSBib3ggZWxlbWVudC5cclxuICovXHJcbmNvbnN0IEJveCA9ICh7XHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB3aWR0aCxcclxuICAgIGhlaWdodCxcclxuICAgIG0sXHJcbiAgICBtdCA9IG0sXHJcbiAgICBtciA9IG0sXHJcbiAgICBtYiA9IG0sXHJcbiAgICBtbCA9IG0sXHJcbiAgICBjb2x1bW4sXHJcbiAgICByb3csXHJcbiAgICBmbGV4RGlyZWN0aW9uID0gKGNvbHVtbiAmJiAnY29sdW1uJykgfHwgKHJvdyAmJiAncm93JykgfHwgdW5kZWZpbmVkLFxyXG4gICAgZmxleFN0YXJ0LFxyXG4gICAgY2VudGVyLFxyXG4gICAgZmxleEVuZCxcclxuICAgIHNwYWNlQmV0d2VlbixcclxuICAgIHNwYWNlQXJvdW5kLFxyXG4gICAganVzdGlmeUNvbnRlbnQgPSAoZmxleFN0YXJ0ICYmICdmbGV4LXN0YXJ0JykgfHxcclxuICAgICAgICAoY2VudGVyICYmICdjZW50ZXInKSB8fFxyXG4gICAgICAgIChmbGV4RW5kICYmICdmbGV4LWVuZCcpIHx8XHJcbiAgICAgICAgKHNwYWNlQmV0d2VlbiAmJiAnc3BhY2UtYmV0d2VlbicpIHx8XHJcbiAgICAgICAgKHNwYWNlQXJvdW5kICYmICdzcGFjZS1hcm91bmQnKSB8fFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgIGFsaWduSXRlbXMgPSAoZmxleFN0YXJ0ICYmICdmbGV4LXN0YXJ0JykgfHwgKGNlbnRlciAmJiAnY2VudGVyJykgfHwgKGZsZXhFbmQgJiYgJ2ZsZXgtZW5kJykgfHwgdW5kZWZpbmVkLFxyXG4gICAgYWxpZ25TZWxmLFxyXG4gICAgd3JhcCxcclxuICAgIGZsZXhXcmFwID0gKHdyYXAgJiYgJ3dyYXAnKSB8fCB1bmRlZmluZWQsXHJcbiAgICBncm93LFxyXG4gICAgc2hyaW5rLFxyXG4gICAgZmxleCA9IGdyb3cgfHwgc2hyaW5rID8gYCR7Z3JvdyA/IDEgOiAwfSAke3NocmluayA/IDEgOiAwfSBhdXRvYCA6IHVuZGVmaW5lZCxcclxuICAgIHN0eWxlLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICAuLi5yZXN0UHJvcHNcclxufTogQm94U3RhdGljUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgY29tcHV0ZWRTdHlsZSwgY29tcHV0ZWRDbGFzc05hbWVzIH0gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBjb25zdCBtYXJnaW5NYXAgPSB7XHJcbiAgICAgICAgICAgIG10LFxyXG4gICAgICAgICAgICBtcixcclxuICAgICAgICAgICAgbWIsXHJcbiAgICAgICAgICAgIG1sLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZWRDbGFzc05hbWVzID0gZ2V0TWFyZ2luQ2xhc3NOYW1lcyhtYXJnaW5NYXApO1xyXG4gICAgICAgIGNvbnN0IG1hcmdpblN0eWxlID0gZ2V0TWFyZ2luU3R5bGUobWFyZ2luTWFwKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb21wdXRlZFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICAgIC4uLm1hcmdpblN0eWxlLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJyA/IHdpZHRoICsgJ3JlbScgOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGhlaWdodCA9PT0gJ251bWJlcicgPyBoZWlnaHQgKyAncmVtJyA6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIGZsZXgsXHJcbiAgICAgICAgICAgICAgICBhbGlnblNlbGYsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4RGlyZWN0aW9uIHx8IGFsaWduSXRlbXMgPyAnZmxleCcgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXAsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudCxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXB1dGVkQ2xhc3NOYW1lcyxcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3dpZHRoLCBoZWlnaHQsIG10LCBtciwgbWIsIG1sLCBzdHlsZSwgZmxleCwgYWxpZ25TZWxmLCBmbGV4RGlyZWN0aW9uLCBmbGV4V3JhcCwganVzdGlmeUNvbnRlbnQsIGFsaWduSXRlbXNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5iYXNlLCAuLi5jb21wdXRlZENsYXNzTmFtZXMsIGNsYXNzTmFtZSl9IHN0eWxlPXtjb21wdXRlZFN0eWxlfSB7Li4ucmVzdFByb3BzfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbnR5cGUgQm94QWRhcHRpdmVQcm9wTmFtZXNUeXBlID1cclxuICAgIHwgJ3dpZHRoJ1xyXG4gICAgfCAnaGVpZ2h0J1xyXG4gICAgfCAnbSdcclxuICAgIHwgJ210J1xyXG4gICAgfCAnbXInXHJcbiAgICB8ICdtYidcclxuICAgIHwgJ21sJ1xyXG4gICAgfCAnZmxleERpcmVjdGlvbidcclxuICAgIHwgJ2p1c3RpZnlDb250ZW50J1xyXG4gICAgfCAnYWxpZ25JdGVtcydcclxuICAgIHwgJ2FsaWduU2VsZidcclxuICAgIHwgJ2ZsZXhXcmFwJ1xyXG4gICAgfCAnZmxleCc7XHJcblxyXG5leHBvcnQgdHlwZSBCb3hQcm9wcyA9IEJveFN0YXRpY1Byb3BzICYgQWRhcHRpdmVQcm9wczxCb3hTdGF0aWNQcm9wcywgQm94QWRhcHRpdmVQcm9wTmFtZXNUeXBlPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEFkYXB0aXZlQ29udHJvbGxlcjxCb3hTdGF0aWNQcm9wcywgQm94QWRhcHRpdmVQcm9wTmFtZXNUeXBlPihCb3gpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB7IGZvcm1hdFN0cmluZywgQWxpZ25tZW50IH0gZnJvbSAnbGliL3N0cmluZy11dGlscyc7XG5cbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9ybWF0VGV4dC5jc3MnO1xuXG5leHBvcnQgY29uc3QgRm9ybWF0VGV4dCA9ICh7IGJpbmRpbmcsIHRleHQgPSAnJywgY2xhc3NNaXgsIGFsaWdubWVudCA9IEFsaWdubWVudC5sZWZ0IH06IFByb3BzKSA9PiB7XG4gICAgaWYgKHRleHQgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZvcm1hdFRleHQgd2FzIHN1cHBsaWVkIHdpdGggJ251bGwnXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7dGV4dC5zcGxpdCgnXFxuJykubWFwKCh0ZXh0TGluZSwgbGluZUlkKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5iYXNlLCBjbGFzc01peCl9IGtleT17YCR7dGV4dExpbmV9LSR7bGluZUlkfWB9PlxuICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0U3RyaW5nKHRleHRMaW5lLCBhbGlnbm1lbnQsIGJpbmRpbmcpLm1hcCgodGV4dCwgd29yZElkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtgJHt3b3JkSWR9LSR7dGV4dH1gfT57dGV4dH08L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IHsgZW52IH0gZnJvbSAnbGliL2Vudic7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4vc3RhdGljJztcbmltcG9ydCB7IGdldFNpemVzIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHsgd2lkdGg6IGluaXRpYWxXaWR0aCwgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0IH0gPSBlbnYuY2xpZW50LmdldFNpemUoJ3JlbScpO1xuXG5leHBvcnQgdHlwZSBNZWRpYUNvbnRleHRUeXBlID0ge1xuICAgIGV4dHJhU21hbGw6IGJvb2xlYW47XG4gICAgc21hbGw6IGJvb2xlYW47XG4gICAgbWVkaXVtOiBib29sZWFuO1xuICAgIGxhcmdlOiBib29sZWFuO1xuICAgIGV4dHJhTGFyZ2U6IGJvb2xlYW47XG4gICAgZXh0cmFTbWFsbFdpZHRoOiBib29sZWFuO1xuICAgIHNtYWxsV2lkdGg6IGJvb2xlYW47XG4gICAgbWVkaXVtV2lkdGg6IGJvb2xlYW47XG4gICAgbGFyZ2VXaWR0aDogYm9vbGVhbjtcbiAgICBleHRyYUxhcmdlV2lkdGg6IGJvb2xlYW47XG4gICAgZXh0cmFTbWFsbEhlaWdodDogYm9vbGVhbjtcbiAgICBzbWFsbEhlaWdodDogYm9vbGVhbjtcbiAgICBtZWRpdW1IZWlnaHQ6IGJvb2xlYW47XG4gICAgbGFyZ2VIZWlnaHQ6IGJvb2xlYW47XG4gICAgZXh0cmFMYXJnZUhlaWdodDogYm9vbGVhbjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xufTtcblxuY29uc3QgaW5pdGlhbFZhbHVlOiBNZWRpYUNvbnRleHRUeXBlID0ge1xuICAgIHdpZHRoOiBpbml0aWFsV2lkdGgsXG4gICAgaGVpZ2h0OiBpbml0aWFsSGVpZ2h0LFxuICAgIC4uLmdldFNpemVzKGluaXRpYWxXaWR0aCwgaW5pdGlhbEhlaWdodCwgQlJFQUtQT0lOVFMpLFxufTtcblxuLyoqXG4gKiBVc2UgdXNlTWVkaWEgaG9vayBmcm9tICdsaWIvaG9va3MvdXNlTWVkaWEnIGRpcmVjdGx5IGluIHlvdXIgcmVhY3QgY29tcG9uZW50c1xuICpcbiAqIFVzYWdlIGFuZCB0ZWNoIGRvYzogaHR0cHM6Ly9jb25mbHVlbmNlLmxlc3RhLmdyb3VwL3BhZ2VzL3ZpZXdwYWdlLmFjdGlvbj9wYWdlSWQ9MTkyMzI1MjI3NlxuICpcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBNZWRpYUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxWYWx1ZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VDYWxsT25jZSBmcm9tICdsaWIvaG9va3MvdXNlQ2FsbE9uY2UnO1xuXG5pbXBvcnQgeyBNZWRpYUNvbnRleHQgfSBmcm9tICcuL01lZGlhQ29udGV4dCc7XG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4vc3RhdGljJztcbmltcG9ydCB7IGdldFNpemVzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICdsaWIvZW52JztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KE1lZGlhQ29udGV4dCk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IHVzZUNhbGxiYWNrKCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBwcmVwYXJlZFdpZHRoID0gZW52LnZpZXcucHhUb1JlbSh3aWR0aCk7XG4gICAgICAgIGNvbnN0IHByZXBhcmVkSGVpZ2h0ID0gZW52LnZpZXcucHhUb1JlbShoZWlnaHQpO1xuXG4gICAgICAgIHNldFZhbHVlKHtcbiAgICAgICAgICAgIHdpZHRoOiBwcmVwYXJlZFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBwcmVwYXJlZEhlaWdodCxcbiAgICAgICAgICAgIC4uLmdldFNpemVzKHByZXBhcmVkV2lkdGgsIHByZXBhcmVkSGVpZ2h0LCBCUkVBS1BPSU5UUyksXG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUNhbGxPbmNlKCgpID0+IHtcbiAgICAgICAgZW5naW5lLm9uKCdjbGllbnRSZXNpemVkJywgaGFuZGxlUmVzaXplKTtcbiAgICB9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiBlbmdpbmUub2ZmKCdjbGllbnRSZXNpemVkJywgaGFuZGxlUmVzaXplKTtcbiAgICB9LCBbaGFuZGxlUmVzaXplXSk7XG5cbiAgICBjb25zdCB2YWx1ZUFzUHJvcCA9IHVzZU1lbW8oKCkgPT4gKHsgLi4udmFsdWUgfSksIFt2YWx1ZV0pO1xuXG4gICAgcmV0dXJuIDxNZWRpYUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlQXNQcm9wfT57Y2hpbGRyZW59PC9NZWRpYUNvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuY29uc3QgTWVkaWFQcm92aWRlciA9IG1lbW8oUHJvdmlkZXIpO1xuXG5leHBvcnQgeyBNZWRpYVByb3ZpZGVyIH07XG4iLCJpbXBvcnQgeyBtZW1vLCB1c2VDb250ZXh0LCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldEJ5SGVpZ2h0IH0gZnJvbSAnLi9nZXRCeUhlaWdodCc7XG5pbXBvcnQgeyBNZWRpYUNvbnRleHQgfSBmcm9tICcuL01lZGlhQ29udGV4dCc7XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBleHRyYUxhcmdlOiBmYWxzZSxcbiAgICBsYXJnZTogZmFsc2UsXG4gICAgbWVkaXVtOiBmYWxzZSxcbiAgICBzbWFsbDogZmFsc2UsXG4gICAgZXh0cmFTbWFsbDogZmFsc2UsXG4gICAgZXh0cmFMYXJnZVdpZHRoOiBmYWxzZSxcbiAgICBsYXJnZVdpZHRoOiBmYWxzZSxcbiAgICBtZWRpdW1XaWR0aDogZmFsc2UsXG4gICAgc21hbGxXaWR0aDogZmFsc2UsXG4gICAgZXh0cmFTbWFsbFdpZHRoOiBmYWxzZSxcbiAgICBleHRyYUxhcmdlSGVpZ2h0OiBmYWxzZSxcbiAgICBsYXJnZUhlaWdodDogZmFsc2UsXG4gICAgbWVkaXVtSGVpZ2h0OiBmYWxzZSxcbiAgICBzbWFsbEhlaWdodDogZmFsc2UsXG4gICAgZXh0cmFTbWFsbEhlaWdodDogZmFsc2UsXG59O1xuXG5leHBvcnQgdHlwZSBEZWZhdWx0UHJvcHMgPSB0eXBlb2YgZGVmYXVsdFByb3BzO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ7XG59ICYgUGFydGlhbDxEZWZhdWx0UHJvcHM+O1xuXG5leHBvcnQgdHlwZSBCcmVha3BvaW50UHJvcHMgPSBSZWFkb25seTxQaWNrPFByb3BzLCAnZXh0cmFMYXJnZScgfCAnbGFyZ2UnIHwgJ21lZGl1bScgfCAnc21hbGwnIHwgJ2V4dHJhU21hbGwnPj5cblxuY29uc3QgTWVkaWEgPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgZXh0cmFMYXJnZSwgbGFyZ2UsIG1lZGl1bSwgc21hbGwsIGV4dHJhU21hbGwsXG4gICAgICAgIGV4dHJhTGFyZ2VXaWR0aCwgbGFyZ2VXaWR0aCwgbWVkaXVtV2lkdGgsIHNtYWxsV2lkdGgsIGV4dHJhU21hbGxXaWR0aCxcbiAgICAgICAgZXh0cmFMYXJnZUhlaWdodCwgbGFyZ2VIZWlnaHQsIG1lZGl1bUhlaWdodCwgc21hbGxIZWlnaHQsIGV4dHJhU21hbGxIZWlnaHQsXG4gICAgfSA9IHVzZUNvbnRleHQoTWVkaWFDb250ZXh0KTtcblxuICAgIGNvbnN0IGJyZWFrcG9pbnRQcm9wczogQnJlYWtwb2ludFByb3BzID0ge1xuICAgICAgICBleHRyYUxhcmdlOiBleHRyYUxhcmdlSGVpZ2h0LFxuICAgICAgICBsYXJnZTogbGFyZ2VIZWlnaHQsXG4gICAgICAgIG1lZGl1bTogbWVkaXVtSGVpZ2h0LFxuICAgICAgICBzbWFsbDogc21hbGxIZWlnaHQsXG4gICAgICAgIGV4dHJhU21hbGw6IGV4dHJhU21hbGxIZWlnaHQsXG4gICAgfTtcblxuICAgIGlmIChyZXN0LmV4dHJhTGFyZ2UgfHwgcmVzdC5sYXJnZSB8fCByZXN0Lm1lZGl1bSB8fCByZXN0LnNtYWxsIHx8IHJlc3QuZXh0cmFTbWFsbCkge1xuICAgICAgICBpZiAocmVzdC5leHRyYUxhcmdlICYmIGV4dHJhTGFyZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LmxhcmdlICYmIGxhcmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5tZWRpdW0gJiYgbWVkaXVtKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5zbWFsbCAmJiBzbWFsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QuZXh0cmFTbWFsbCAmJiBleHRyYVNtYWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmVzdC5leHRyYUxhcmdlV2lkdGggJiYgZXh0cmFMYXJnZVdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QnlIZWlnaHQoY2hpbGRyZW4sIHJlc3QsIGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5sYXJnZVdpZHRoICYmIGxhcmdlV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCeUhlaWdodChjaGlsZHJlbiwgcmVzdCwgYnJlYWtwb2ludFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0Lm1lZGl1bVdpZHRoICYmIG1lZGl1bVdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QnlIZWlnaHQoY2hpbGRyZW4sIHJlc3QsIGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5zbWFsbFdpZHRoICYmIHNtYWxsV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCeUhlaWdodChjaGlsZHJlbiwgcmVzdCwgYnJlYWtwb2ludFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LmV4dHJhU21hbGxXaWR0aCAmJiBleHRyYVNtYWxsV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCeUhlaWdodChjaGlsZHJlbiwgcmVzdCwgYnJlYWtwb2ludFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzdC5leHRyYUxhcmdlV2lkdGggJiYgIXJlc3QubGFyZ2VXaWR0aCAmJiAhcmVzdC5tZWRpdW1XaWR0aCAmJiAhcmVzdC5zbWFsbFdpZHRoICYmICFyZXN0LmV4dHJhU21hbGxXaWR0aCkge1xuICAgICAgICAgICAgaWYgKHJlc3QuZXh0cmFMYXJnZUhlaWdodCAmJiBleHRyYUxhcmdlSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdC5sYXJnZUhlaWdodCAmJiBsYXJnZUhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3QubWVkaXVtSGVpZ2h0ICYmIG1lZGl1bUhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3Quc21hbGxIZWlnaHQgJiYgc21hbGxIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN0LmV4dHJhU21hbGxIZWlnaHQgJiYgZXh0cmFTbWFsbEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxuTWVkaWEuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5jb25zdCBNZWRpYVF1ZXJ5ID0gbWVtbyhNZWRpYSk7XG5cbmV4cG9ydCB7IE1lZGlhUXVlcnkgfTtcbiIsImltcG9ydCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IERlZmF1bHRQcm9wcywgQnJlYWtwb2ludFByb3BzIH0gZnJvbSAnLi9NZWRpYVF1ZXJ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCeUhlaWdodCA9IChjaGlsZHJlbjogUmVhY3RFbGVtZW50LCByZXN0OiBQYXJ0aWFsPERlZmF1bHRQcm9wcz4sIGJyZWFrcG9pbnRQcm9wczogQnJlYWtwb2ludFByb3BzKTogUmVhY3RFbGVtZW50IHwgbnVsbCA9PiB7XHJcbiAgICBpZiAoIXJlc3QuZXh0cmFMYXJnZUhlaWdodCAmJiAhcmVzdC5sYXJnZUhlaWdodCAmJiAhcmVzdC5tZWRpdW1IZWlnaHQgJiYgIXJlc3Quc21hbGxIZWlnaHQgJiYgIXJlc3QuZXh0cmFTbWFsbEhlaWdodCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdC5leHRyYUxhcmdlSGVpZ2h0ICYmIGJyZWFrcG9pbnRQcm9wcy5leHRyYUxhcmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0LmxhcmdlSGVpZ2h0ICYmIGJyZWFrcG9pbnRQcm9wcy5sYXJnZSkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdC5tZWRpdW1IZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLm1lZGl1bSkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdC5zbWFsbEhlaWdodCAmJiBicmVha3BvaW50UHJvcHMuc21hbGwpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3QuZXh0cmFTbWFsbEhlaWdodCAmJiBicmVha3BvaW50UHJvcHMuZXh0cmFTbWFsbCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuIiwiaW1wb3J0IHsgTWVkaWFDb250ZXh0VHlwZSB9IGZyb20gJy4vTWVkaWFDb250ZXh0JztcblxuZXhwb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJy4vTWVkaWFRdWVyeSc7XG5leHBvcnQgeyBNZWRpYVByb3ZpZGVyIH0gZnJvbSAnLi9NZWRpYVByb3ZpZGVyJztcbmV4cG9ydCB7IE1lZGlhQ29udGV4dCB9IGZyb20gJy4vTWVkaWFDb250ZXh0JztcbmV4cG9ydCB0eXBlIHsgTWVkaWFDb250ZXh0VHlwZSB9O1xuIiwiZXhwb3J0IGNvbnN0IEJSRUFLUE9JTlRTID0ge1xuICAgIGV4dHJhTGFyZ2U6IHtcbiAgICAgICAgd2VpZ2h0OiA0LFxuICAgICAgICB3aWR0aDogMjU2MCxcbiAgICAgICAgaGVpZ2h0OiAxNDQwLFxuICAgIH0sXG4gICAgbGFyZ2U6IHtcbiAgICAgICAgd2VpZ2h0OiAzLFxuICAgICAgICB3aWR0aDogMTkyMCxcbiAgICAgICAgaGVpZ2h0OiAxMDgwLFxuICAgIH0sXG4gICAgbWVkaXVtOiB7XG4gICAgICAgIHdlaWdodDogMixcbiAgICAgICAgd2lkdGg6IDE2MDAsXG4gICAgICAgIGhlaWdodDogOTAwLFxuICAgIH0sXG4gICAgc21hbGw6IHtcbiAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICB3aWR0aDogMTM2NixcbiAgICAgICAgaGVpZ2h0OiA3NjgsXG4gICAgfSxcbiAgICBleHRyYVNtYWxsOiB7XG4gICAgICAgIHdlaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDEwMjQsXG4gICAgICAgIGhlaWdodDogNzY4LFxuICAgIH0sXG59O1xuIiwiaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuL3N0YXRpYyc7XHJcblxyXG5mdW5jdGlvbiBnZXRXaWR0aEJQV2VpZ2h0KHdpZHRoOiBudW1iZXIsIGJyZWFrcG9pbnRzOiB0eXBlb2YgQlJFQUtQT0lOVFMpOiBudW1iZXIge1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSAod2lkdGggPj0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53aWR0aCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5leHRyYUxhcmdlLndlaWdodDtcclxuICAgICAgICBjYXNlICh3aWR0aCA+PSBicmVha3BvaW50cy5sYXJnZS53aWR0aCkgJiYgKHdpZHRoIDwgYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53aWR0aCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5sYXJnZS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAod2lkdGggPj0gYnJlYWtwb2ludHMubWVkaXVtLndpZHRoKSAmJiAod2lkdGggPCBicmVha3BvaW50cy5sYXJnZS53aWR0aCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5tZWRpdW0ud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKHdpZHRoID49IGJyZWFrcG9pbnRzLnNtYWxsLndpZHRoKSAmJiAod2lkdGggPCBicmVha3BvaW50cy5tZWRpdW0ud2lkdGgpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuc21hbGwud2VpZ2h0O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5leHRyYVNtYWxsLndlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SGVpZ2h0QlBXZWlnaHQoaGVpZ2h0OiBudW1iZXIsIGJyZWFrcG9pbnRzOiB0eXBlb2YgQlJFQUtQT0lOVFMpOiBudW1iZXIge1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSAoaGVpZ2h0ID49IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2UuaGVpZ2h0KTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKGhlaWdodCA+PSBicmVha3BvaW50cy5sYXJnZS5oZWlnaHQpICYmIChoZWlnaHQgPCBicmVha3BvaW50cy5leHRyYUxhcmdlLmhlaWdodCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5sYXJnZS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAoaGVpZ2h0ID49IGJyZWFrcG9pbnRzLm1lZGl1bS5oZWlnaHQpICYmIChoZWlnaHQgPCBicmVha3BvaW50cy5sYXJnZS5oZWlnaHQpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMubWVkaXVtLndlaWdodDtcclxuICAgICAgICBjYXNlIChoZWlnaHQgPj0gYnJlYWtwb2ludHMuc21hbGwuaGVpZ2h0KSAmJiAoaGVpZ2h0IDwgYnJlYWtwb2ludHMubWVkaXVtLmhlaWdodCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5zbWFsbC53ZWlnaHQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmV4dHJhU21hbGwud2VpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5lbnVtIFNpemVzIHtcclxuICAgIGV4dHJhTGFyZ2UgPSAnZXh0cmFMYXJnZScsXHJcbiAgICBsYXJnZSA9ICdsYXJnZScsXHJcbiAgICBtZWRpdW0gPSAnbWVkaXVtJyxcclxuICAgIHNtYWxsID0gJ3NtYWxsJyxcclxuICAgIGV4dHJhU21hbGwgPSAnZXh0cmFTbWFsbCcsXHJcbiAgICBleHRyYUxhcmdlV2lkdGggPSAnZXh0cmFMYXJnZVdpZHRoJyxcclxuICAgIGxhcmdlV2lkdGggPSAnbGFyZ2VXaWR0aCcsXHJcbiAgICBtZWRpdW1XaWR0aCA9ICdtZWRpdW1XaWR0aCcsXHJcbiAgICBzbWFsbFdpZHRoID0gJ3NtYWxsV2lkdGgnLFxyXG4gICAgZXh0cmFTbWFsbFdpZHRoID0gJ2V4dHJhU21hbGxXaWR0aCcsXHJcbiAgICBleHRyYUxhcmdlSGVpZ2h0ID0gJ2V4dHJhTGFyZ2VIZWlnaHQnLFxyXG4gICAgbGFyZ2VIZWlnaHQgPSAnbGFyZ2VIZWlnaHQnLFxyXG4gICAgbWVkaXVtSGVpZ2h0ID0gJ21lZGl1bUhlaWdodCcsXHJcbiAgICBzbWFsbEhlaWdodCA9ICdzbWFsbEhlaWdodCcsXHJcbiAgICBleHRyYVNtYWxsSGVpZ2h0ID0gJ2V4dHJhU21hbGxIZWlnaHQnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNpemVzKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBicmVha3BvaW50czogdHlwZW9mIEJSRUFLUE9JTlRTKToge1trZXkgaW4gU2l6ZXNdOiBib29sZWFufSB7XHJcbiAgICBjb25zdCB3aWR0aEJQV2VpZ2h0OiBudW1iZXIgPSBnZXRXaWR0aEJQV2VpZ2h0KHdpZHRoLCBicmVha3BvaW50cyk7XHJcbiAgICBjb25zdCBoZWlnaHRCUFdlaWdodDogbnVtYmVyID0gZ2V0SGVpZ2h0QlBXZWlnaHQoaGVpZ2h0LCBicmVha3BvaW50cyk7XHJcbiAgICBjb25zdCB3ZWlnaHQ6IG51bWJlciA9IE1hdGgubWluKHdpZHRoQlBXZWlnaHQsIGhlaWdodEJQV2VpZ2h0KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGV4dHJhTGFyZ2U6ICh3ZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBsYXJnZTogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMubGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBtZWRpdW06ICh3ZWlnaHQgPT09IGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQpLFxyXG4gICAgICAgIHNtYWxsOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5zbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhU21hbGw6ICh3ZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhU21hbGwud2VpZ2h0KSxcclxuICAgICAgICBleHRyYUxhcmdlV2lkdGg6ICh3aWR0aEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYUxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbGFyZ2VXaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbWVkaXVtV2lkdGg6ICh3aWR0aEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5tZWRpdW0ud2VpZ2h0KSxcclxuICAgICAgICBzbWFsbFdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuc21hbGwud2VpZ2h0KSxcclxuICAgICAgICBleHRyYVNtYWxsV2lkdGg6ICh3aWR0aEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYVNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFMYXJnZUhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYUxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbGFyZ2VIZWlnaHQ6IChoZWlnaHRCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMubGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBtZWRpdW1IZWlnaHQ6IChoZWlnaHRCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMubWVkaXVtLndlaWdodCksXHJcbiAgICAgICAgc21hbGxIZWlnaHQ6IChoZWlnaHRCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuc21hbGwud2VpZ2h0KSxcclxuICAgICAgICBleHRyYVNtYWxsSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhU21hbGwud2VpZ2h0KSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNpemVzLCBnZXRTaXplcyB9O1xyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCb3gsIHsgQm94U3RhdGljUHJvcHMgfSBmcm9tICdjb21wb25lbnRzL0JveC9Cb3gnO1xuaW1wb3J0IHsgRm9ybWF0VGV4dCB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybWF0VGV4dC9Gb3JtYXRUZXh0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9Gb3JtYXRUZXh0L3R5cGVzJztcbmltcG9ydCBoZWFkaW5nU3R5bGVzIGZyb20gJ2dsb2JhbC1zdHlsZXMvbWl4aW5zL2hlYWRpbmcnO1xuaW1wb3J0IHBhcmFncmFwaFN0eWxlcyBmcm9tICdnbG9iYWwtc3R5bGVzL21peGlucy9wYXJhZ3JhcGgnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICdnbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9jb2xvcnMnO1xuaW1wb3J0IHNwYWNpbmcgZnJvbSAnZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvc3BhY2luZyc7XG5pbXBvcnQgZ2V0QWRhcHRpdmVDb250cm9sbGVyLCB7IEFkYXB0aXZlUHJvcHMgfSBmcm9tICdsaWIvaG9jcy9hZGFwdGl2ZS9hZGFwdGl2ZSc7XG5pbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHQuY3NzJztcblxuZXhwb3J0IHR5cGUgU3RhbmRhcmRTcGFjaW5nVHlwZSA9IGtleW9mIHR5cGVvZiBzcGFjaW5nO1xuZXhwb3J0IHR5cGUgU3BhY2luZ1R5cGUgPSBTdGFuZGFyZFNwYWNpbmdUeXBlIHwgYm9vbGVhbiB8IG51bWJlcjtcbmV4cG9ydCBjb25zdCBzdGFuZGFyZE1hcmdpbnMgPSBPYmplY3Qua2V5cyhzcGFjaW5nKSBhcyBTdGFuZGFyZFNwYWNpbmdUeXBlW107XG5cbmV4cG9ydCB0eXBlIFN0YW5kYXJkQ29sb3JUeXBlID0ga2V5b2YgdHlwZW9mIGNvbG9ycztcbmV4cG9ydCBjb25zdCBzdGFuZGFyZENvbG9ycyA9IE9iamVjdC5rZXlzKGNvbG9ycykgYXMgU3RhbmRhcmRDb2xvclR5cGVbXTtcblxuY29uc3QgeGxTdHlsZU1hcmdpbnMgPSB7IG10OiAnWEwnLCBtcjogJ0xHJywgbWI6ICdMRycsIG1sOiAnTEcnIH0gYXMgY29uc3Q7XG5jb25zdCBsZ1N0eWxlTWFyZ2lucyA9IHsgbXQ6ICdMRycsIG1yOiAnTUQnLCBtYjogJ01EJywgbWw6ICdNRCcgfSBhcyBjb25zdDtcbmNvbnN0IG1kU3R5bGVNYXJnaW5zID0geyBtdDogJ01EJywgbXI6ICdTTScsIG1iOiAnU00nLCBtbDogJ1NNJyB9IGFzIGNvbnN0O1xuY29uc3Qgc21TdHlsZU1hcmdpbnMgPSB7IG10OiAnU00nLCBtcjogJ1hTJywgbWI6ICdYUycsIG1sOiAnWFMnIH0gYXMgY29uc3Q7XG5jb25zdCB4c1N0eWxlTWFyZ2lucyA9IHsgbXQ6ICdYUycsIG1yOiAnWFMnLCBtYjogJ1hTJywgbWw6ICdYUycgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRYbE1hcmdpbnMgPSB7IG10OiAnWEwnLCBtcjogJ1hMJywgbWI6ICdYTCcsIG1sOiAnWEwnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0TGdNYXJnaW5zID0geyBtdDogJ0xHJywgbXI6ICdMRycsIG1iOiAnTEcnLCBtbDogJ0xHJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdE1kcE1hcmdpbnMgPSB7IG10OiAnTURwJywgbXI6ICdNRHAnLCBtYjogJ01EcCcsIG1sOiAnTURwJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdE1kTWFyZ2lucyA9IHsgbXQ6ICdNRCcsIG1yOiAnTUQnLCBtYjogJ01EJywgbWw6ICdNRCcgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRTbXBNYXJnaW5zID0geyBtdDogJ1NNcCcsIG1yOiAnU01wJywgbWI6ICdTTXAnLCBtbDogJ1NNcCcgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRTbU1hcmdpbnMgPSB7IG10OiAnU00nLCBtcjogJ1NNJywgbWI6ICdTTScsIG1sOiAnU00nIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0WHNNYXJnaW5zID0geyBtdDogJ1hTJywgbXI6ICdYUycsIG1iOiAnWFMnLCBtbDogJ1hTJyB9IGFzIGNvbnN0O1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5NYXAgPSB7XG4gICAgWEw6IGRlZmF1bHRYbE1hcmdpbnMsXG4gICAgTEc6IGRlZmF1bHRMZ01hcmdpbnMsXG4gICAgTURwOiBkZWZhdWx0TWRwTWFyZ2lucyxcbiAgICBNRDogZGVmYXVsdE1kTWFyZ2lucyxcbiAgICBTTXA6IGRlZmF1bHRTbXBNYXJnaW5zLFxuICAgIFNNOiBkZWZhdWx0U21NYXJnaW5zLFxuICAgIFhTOiBkZWZhdWx0WHNNYXJnaW5zLFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5zID0gT2JqZWN0LmtleXMoZGVmYXVsdE1hcmdpbk1hcCkgYXMgKGtleW9mIHR5cGVvZiBkZWZhdWx0TWFyZ2luTWFwKVtdO1xuXG5leHBvcnQgY29uc3QgdmFyaWFudE1hcmdpblNpemVNYXA6IHtcbiAgICBba2V5IGluIFZhcmlhbnRUeXBlXTogeyBba2V5IGluICdtdCcgfCAnbXInIHwgJ21iJyB8ICdtbCddOiBTcGFjaW5nVHlwZSB9O1xufSA9IHtcbiAgICAnaGVhZGluZy1IMTQ0JzogeGxTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDczJzogbGdTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDU2JzogbWRTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDM2JzogbWRTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDI4Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDI0Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDI0Uic6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyMic6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyMFInOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMTgnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMTUnOiB4c1N0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMTQnOiB4c1N0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAyNCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDE4Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMTYnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAxNCc6IHhzU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDEyJzogeHNTdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMTAnOiB4c1N0eWxlTWFyZ2lucyxcbn07XG5cbmV4cG9ydCBjb25zdCB2YXJpYW50cyA9IE9iamVjdC5rZXlzKHZhcmlhbnRNYXJnaW5TaXplTWFwKSBhcyAoa2V5b2YgdHlwZW9mIHZhcmlhbnRNYXJnaW5TaXplTWFwKVtdO1xuXG50eXBlIFZhcmlhbnRUeXBlID0ga2V5b2YgdHlwZW9mIGhlYWRpbmdTdHlsZXMgfCBrZXlvZiB0eXBlb2YgcGFyYWdyYXBoU3R5bGVzO1xuXG50eXBlIEJhc2VUZXh0UHJvcHMgPSB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHZhcmlhbnQ/OiBWYXJpYW50VHlwZTtcbiAgICBjb2xvcj86IFN0YW5kYXJkQ29sb3JUeXBlIHwgQ1NTUHJvcGVydGllc1snY29sb3InXTtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgbT86IFNwYWNpbmdUeXBlO1xuICAgIG10PzogU3BhY2luZ1R5cGU7XG4gICAgbXI/OiBTcGFjaW5nVHlwZTtcbiAgICBtYj86IFNwYWNpbmdUeXBlO1xuICAgIG1sPzogU3BhY2luZ1R5cGU7XG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuICAgIGZvcm1hdD86IE9taXQ8UHJvcHMsICd0ZXh0Jz47XG59O1xuXG5jb25zdCBpc0RlZmF1bHRDb2xvciA9IChjb2xvcjogc3RyaW5nKTogY29sb3IgaXMgU3RhbmRhcmRDb2xvclR5cGUgPT4gKHN0YW5kYXJkQ29sb3JzIGFzIHN0cmluZ1tdKS5pbmNsdWRlcyhjb2xvcik7XG5cbmNvbnN0IGdldENvbG9yU3R5bGVPckNsYXNzTmFtZSA9IChjb2xvcj86IFN0YW5kYXJkQ29sb3JUeXBlIHwgQ1NTUHJvcGVydGllc1snY29sb3InXSkgPT4ge1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAoaXNEZWZhdWx0Q29sb3IoY29sb3IpKSB7XG4gICAgICAgIHJldHVybiB7IGNvbG9yQ2xhc3NOYW1lOiBzdHlsZXNbY29sb3JdIH07XG4gICAgfVxuICAgIHJldHVybiB7IGNvbG9yU3R5bGU6IHsgY29sb3IgfSB9O1xufTtcblxuZXhwb3J0IHR5cGUgVGV4dFN0YXRpY1Byb3BzID0gUmVhZG9ubHk8QmFzZVRleHRQcm9wcyAmIE9taXQ8Qm94U3RhdGljUHJvcHMsICdjaGlsZHJlbic+PjtcbmV4cG9ydCB0eXBlIFRleHRQcm9wcyA9IFRleHRTdGF0aWNQcm9wcyAmIEFkYXB0aXZlUHJvcHM8VGV4dFN0YXRpY1Byb3BzLCBUZXh0QWRhcHRpdmVQcm9wTmFtZXNUeXBlPjtcbmV4cG9ydCB0eXBlIFRleHRBZGFwdGl2ZVByb3BOYW1lc1R5cGUgPSAndmFyaWFudCcgfCAnY29sb3InIHwgJ20nIHwgJ210JyB8ICdtcicgfCAnbWInIHwgJ21sJztcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSB0ZXh0IHBhc3NlZCBpbiBhcyBhIHByb3Agd2l0aCBzdHlsaW5nIGFuZCBmb3JtYXR0aW5nIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIC0gVGhlIHByb3BzIG9iamVjdCBjb250YWluaW5nOlxuICogICBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSB0ZXh0IHRvIGJlIHJlbmRlcmVkLlxuICogICBAcGFyYW0ge1ZhcmlhbnRUeXBlIHwgc3RyaW5nfSB2YXJpYW50IC0gVGhlIHZhcmlhbnQgb2YgdGhlIHRleHQgc3R5bGluZy5cbiAqICAgQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtIFRoZSBjbGFzcyBuYW1lKHMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHRleHQgY29tcG9uZW50LlxuICogICBAcGFyYW0ge0NvbG9yVHlwZX0gY29sb3IgLSBUaGUgY29sb3Igb2YgdGhlIHRleHQsIGUuZy4gXCJXSElURV9TUEFOSVNIXCIgb3IgXCIjZjAwXCIuXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IG0gLSBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gYWxsIHNpZGVzLCBlLmcuIFhMLCBMRywgTURwLCBNRCwgU01wLCBTTSwgWFMsIHRydWUgZGVmYXVsdHMgdG8gYSBzaXplIGJhc2VkIG9uIHRoZSB2YXJpYW50IHByb3AsIG51bWJlciB0cmFuc2xhdGVzIHRvIHJlbXMuXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IG10IC0gVGhlIGFwcGxpZWQgbWFyZ2luLXRvcCwgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtciAtIFRoZSBhcHBsaWVkIG1hcmdpbi1yaWdodCwgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtYiAtIFRoZSBhcHBsaWVkIG1hcmdpbi1ib3R0b20sIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gbWwgLSBUaGUgYXBwbGllZCBtYXJnaW4tbGVmdCwgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXN9IHN0eWxlIC0gVGhlIHN0eWxlIG9iamVjdCB0byBiZSBhcHBsaWVkIHRvIHRoZSB0ZXh0IGNvbXBvbmVudC5cbiAqICAgQHBhcmFtIHtGb3JtYXRUZXh0UHJvcHN9IGZvcm1hdCAtIFRoZSBmb3JtYXR0aW5nIHByb3BzIG9mIEZvcm1hdFRleHQuXG4gKiAgIEBwYXJhbSB7Qm94UHJvcHN9IHJlc3RQcm9wcyAtIG90aGVyIHByb3BzIG9mIGludGVybmFsIEJveCBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gVGhlIFRleHQgZWxlbWVudC5cbiAqL1xuY29uc3QgVGV4dCA9ICh7XG4gICAgdGV4dCxcbiAgICB2YXJpYW50LFxuICAgIGNsYXNzTmFtZSxcbiAgICBjb2xvcixcbiAgICBtLFxuICAgIG10ID0gbSxcbiAgICBtciA9IG0sXG4gICAgbWIgPSBtLFxuICAgIG1sID0gbSxcbiAgICBzdHlsZSxcbiAgICBmb3JtYXQsXG4gICAgLi4ucmVzdFByb3BzXG59OiBUZXh0U3RhdGljUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNvbXB1dGVkU3R5bGUsIGNvbG9yQ2xhc3NOYW1lIH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjb2xvckNsYXNzTmFtZSwgY29sb3JTdHlsZSA9IHt9IH0gPSBnZXRDb2xvclN0eWxlT3JDbGFzc05hbWUoY29sb3IpO1xuICAgICAgICByZXR1cm4geyBjb21wdXRlZFN0eWxlOiB7IC4uLnN0eWxlLCAuLi5jb2xvclN0eWxlIH0sIGNvbG9yQ2xhc3NOYW1lIH07XG4gICAgfSwgW3N0eWxlLCBjb2xvcl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5iYXNlLCB2YXJpYW50ICYmIHN0eWxlc1t2YXJpYW50XSwgY29sb3JDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICBzdHlsZT17Y29tcHV0ZWRTdHlsZX1cbiAgICAgICAgICAgIG10PXttdCA9PT0gdHJ1ZSA/IHZhcmlhbnRNYXJnaW5TaXplTWFwW3ZhcmlhbnQgfHwgJ3BhcmFncmFwaC1QMTYnXS5tdCA6IG10fVxuICAgICAgICAgICAgbXI9e21yID09PSB0cnVlID8gdmFyaWFudE1hcmdpblNpemVNYXBbdmFyaWFudCB8fCAncGFyYWdyYXBoLVAxNiddLm1yIDogbXJ9XG4gICAgICAgICAgICBtYj17bWIgPT09IHRydWUgPyB2YXJpYW50TWFyZ2luU2l6ZU1hcFt2YXJpYW50IHx8ICdwYXJhZ3JhcGgtUDE2J10ubWIgOiBtYn1cbiAgICAgICAgICAgIG1sPXttbCA9PT0gdHJ1ZSA/IHZhcmlhbnRNYXJnaW5TaXplTWFwW3ZhcmlhbnQgfHwgJ3BhcmFncmFwaC1QMTYnXS5tbCA6IG1sfVxuICAgICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAge2Zvcm1hdCAhPT0gdW5kZWZpbmVkID8gPEZvcm1hdFRleHQgey4uLmZvcm1hdH0gdGV4dD17dGV4dH0gLz4gOiB0ZXh0fVxuICAgICAgICA8L0JveD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QWRhcHRpdmVDb250cm9sbGVyPFRleHRTdGF0aWNQcm9wcywgVGV4dEFkYXB0aXZlUHJvcE5hbWVzVHlwZT4oVGV4dCk7XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IGVudiB9IGZyb20gJ2xpYi9lbnYnO1xyXG5pbXBvcnQgeyB1c2VNb3VudCB9IGZyb20gJ2xpYi9ob29rcy91c2VNb3VudFVubW91bnQnO1xyXG5pbXBvcnQgeyB1c2VTa2lwRnJhbWUgfSBmcm9tICdsaWIvaG9va3MvdXNlU2tpcEZyYW1lJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub29sdGlwRGVjb3JhdG9yLmNzcyc7XHJcblxyXG5leHBvcnQgdHlwZSBQcm9wcyA9IFJlYWN0LkNvbXBvbmVudFByb3BzPCdkaXYnPiAmIHtcclxuICAgIHRoZW1lPzogJ25vbmUnIHwgJ2RlZmF1bHQnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvb2x0aXBEZWNvcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBQcm9wcz4oZnVuY3Rpb24gVG9vbHRpcERlY29yYXRvcihcclxuICAgIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgdGhlbWUgPSAnZGVmYXVsdCcsIC4uLnJlc3RQcm9wcyB9LFxyXG4gICAgcmVmLFxyXG4pIHtcclxuICAgIGNvbnN0IHNraXBGcmFtZSA9IHVzZVNraXBGcmFtZSgpO1xyXG4gICAgY29uc3QgYmFzZVJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIHVzZU1vdW50KCgpID0+IHtcclxuICAgICAgICBza2lwRnJhbWUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZSA9IGJhc2VSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgaWYgKCFiYXNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gYmFzZS5zY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IGJhc2Uuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgZW52LnZpZXcucmVzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGJhc2UpO1xyXG4gICAgICAgICAgICBlbnYudmlldy5zZXRTaWRlUGFkZGluZ3NSZW0oe1xyXG4gICAgICAgICAgICAgICAgbGVmdDogcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1sZWZ0JyksIDEwKSxcclxuICAgICAgICAgICAgICAgIHRvcDogcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSwgMTApLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSwgMTApLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpLCAxMCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UmVmcyhub2RlOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgICAgIGJhc2VSZWYuY3VycmVudCA9IG5vZGU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZWYgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmVmKG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVmKSB7XHJcbiAgICAgICAgICAgIChyZWYgYXMgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4pLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgey4uLnJlc3RQcm9wc30gY2xhc3NOYW1lPXtjeChzdHlsZXMuYmFzZSwgc3R5bGVzW2BiYXNlX190aGVtZS0ke3RoZW1lfWBdLCBjbGFzc05hbWUpfSByZWY9e3NldFJlZnN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlY29yYXRvcn0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgJ0JMQUNLX1JFQUwnOiAnIzAwMDAwMCcsXHJcbiAgICAnV0hJVEVfUkVBTCc6ICcjRkZGRkZGJyxcclxuICAgICdXSElURSc6ICcjRjJGMkY3JyxcclxuICAgICdXSElURV9PUkFOR0UnOiAnI0ZFRkVFQycsXHJcbiAgICAnV0hJVEVfU1BBTklTSCc6ICcjRTlFMkJGJyxcclxuICAgICdQQVInOiAnIzhDOEM3RScsXHJcbiAgICAnUEFSX1NFQ09OREFSWSc6ICcjNTk1OTUwJyxcclxuICAgICdQQVJfVEVSVElBUlknOiAnIzM3MzYyRScsXHJcbiAgICAnSU5GT19SRUQnOiAnI0ZGMDAwMCcsXHJcbiAgICAnUkVEJzogJyNGRjI3MTcnLFxyXG4gICAgJ1JFRF9EQVJLJzogJyNCNzAwMDAnLFxyXG4gICAgJ1lFTExPVyc6ICcjRkVBQjM0JyxcclxuICAgICdPUkFOR0UnOiAnI0VFNzAwMCcsXHJcbiAgICAnQ1JFQU0nOiAnI0ZGREQ5OScsXHJcbiAgICAnQlJPV04nOiAnI0NCQUM3NycsXHJcbiAgICAnR1JFRU5fQlJJR0hUJzogJyM4MEQ0M0EnLFxyXG4gICAgJ0dSRUVOJzogJyM3QUIzMDAnLFxyXG4gICAgJ0dSRUVOX0RBUksnOiAnIzQ5NzIxMicsXHJcbiAgICAnQkxVRV9CT09TVEVSJzogJyNDQ0ZGRkYnLFxyXG4gICAgJ0JMVUVfVEVBTUtJTExFUic6ICcjMDlFMkZGJyxcclxuICAgICdDUkVEJzogJyNDRUQ5RDknLFxyXG4gICAgJ0dPTEQnOiAnI0ZGQzM2MycsXHJcbiAgICAnQk9ORCc6ICcjQzlDOUI2JyxcclxuICAgICdQUk9NJzogJyNBMjlCNzAnLFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICdYUyc6ICc0cmVtJyxcclxuICAgICdTTSc6ICc4cmVtJyxcclxuICAgICdTTXAnOiAnMTByZW0nLFxyXG4gICAgJ01EJzogJzE2cmVtJyxcclxuICAgICdNRHAnOiAnMjByZW0nLFxyXG4gICAgJ0xHJzogJzMycmVtJyxcclxuICAgICdYTCc6ICc2NHJlbScsXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IGVudiB9IGZyb20gJ2xpYi9lbnYnO1xuaW1wb3J0IHsgVHlwZUJ5U3RyaW5nUGF0aCB9IGZyb20gJ2xpYi90eXBlLWhlbHBlcnMnO1xuXG5leHBvcnQgdHlwZSBNb2RlbFN1YnNjcmliZXI8VD4gPSAobW9kZWw6IFQpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIERhdGFMYXllckNyZWF0ZU9wdGlvbnMgPSB7XG4gICAgaW5pdGlhbGl6ZXI/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICAgIGNvbnRleHQ/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcm9vdElkPzogbnVtYmVyO1xuICAgIGdldFJvb3Q/OiAocm9vdElkOiBudW1iZXIpID0+IHVua25vd247XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFMYXllcjxUIGV4dGVuZHMge30+IHtcbiAgICBzdWJzY3JpYmU8UCBleHRlbmRzIHN0cmluZz4oc3Vic2NyaWJlcjogTW9kZWxTdWJzY3JpYmVyPFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4+LCBwYXRoPzogUCk6IG51bWJlcjtcbiAgICByZWFkQnlQYXRoPFAgZXh0ZW5kcyBzdHJpbmc+KHBhdGg/OiBQKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPjtcbiAgICBjcmVhdGVDYWxsYmFjazxBcmdzTWFwIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBFeHRlcm5BcmdzLCBFeHRlcm5BcmdzIGV4dGVuZHMge30sIFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBhcmdzTWFwOiBBcmdzTWFwLFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoLi4uYXJnczogUGFyYW1ldGVyczxBcmdzTWFwPikgPT4gdm9pZCA6IHVua25vd247XG4gICAgY3JlYXRlQ2FsbGJhY2tOb0FyZ3M8UCBleHRlbmRzIHN0cmluZz4oXG4gICAgICAgIHBhdGg6IFAsXG4gICAgKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCA/ICgpID0+IHZvaWQgOiB1bmtub3duO1xuICAgIGRpc3Bvc2U6ICgpID0+IHZvaWQ7XG4gICAgdW5zdWJzY3JpYmU6IChpZDogbnVtYmVyLCByZXNJZD86IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgZ2V0Um9vdERlZmF1bHQgPSAocm9vdElkOiBudW1iZXIpID0+IHtcbiAgICBpZiAocm9vdElkID09PSAwKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3cuc3ViVmlld3MuZ2V0KHJvb3RJZCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlPFQgZXh0ZW5kcyB7fT4oe1xuICAgIGluaXRpYWxpemVyID0gdHJ1ZSxcbiAgICByb290SWQgPSAwLFxuICAgIGdldFJvb3QgPSBnZXRSb290RGVmYXVsdCxcbiAgICBjb250ZXh0ID0gJ21vZGVsJyxcbn06IERhdGFMYXllckNyZWF0ZU9wdGlvbnMgPSB7fSk6IERhdGFMYXllcjxUPiB7XG4gICAgY29uc3Qgc3Vic2NyaWJlcnMgPSBuZXcgTWFwPG51bWJlciwgTW9kZWxTdWJzY3JpYmVyPGFueT4+KCk7XG5cbiAgICBlbmdpbmUud2hlblJlYWR5LnRoZW4oKCkgPT4ge1xuICAgICAgICBlbmdpbmUub24oJ3ZpZXdFbnYub25EYXRhQ2hhbmdlZCcsIChkYXRhOiBhbnksIF86IHVua25vd24sIGNhbGxiYWNrSURzOiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2tJRHMuZm9yRWFjaCgoY2FsbGJhY2tJRCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc3Vic2NyaWJlcnMuZ2V0KGNhbGxiYWNrSUQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoaWQ6IG51bWJlciwgcmVzSWQgPSAwKSB7XG4gICAgICAgIGlmICh2aWV3RW52LnJlbW92ZURhdGFDaGFuZ2VkQ2FsbGJhY2soaWQsIHJlc0lkKSkge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCByZW1vdmUgY2FsbGJhY2sgYnkgaWQ6XCIsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlYWRCeVBhdGggPSA8UCBleHRlbmRzIHN0cmluZz4ocGF0aD86IFApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+ID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGdldFJvb3Qocm9vdElkKTtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBjb250ZXh0LnNwbGl0KCcuJykucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChyZXN1bHQgYXMgYW55KVtrZXldO1xuICAgICAgICB9LCByb290IGFzIFQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbCBhcyB1bmtub3duIGFzIFR5cGVCeVN0cmluZ1BhdGg8VCwgUD47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAocmVzdWx0IGFzIGFueSlba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmJpbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9LCBtb2RlbCkgYXMgVHlwZUJ5U3RyaW5nUGF0aDxULCBQPjtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3Vic2NyaWJlID0gPFAgZXh0ZW5kcyBzdHJpbmc+KHN1YnNjcmliZXI6IE1vZGVsU3Vic2NyaWJlcjxUeXBlQnlTdHJpbmdQYXRoPFQsIFA+PiwgcGF0aD86IFApID0+IHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlUGF0aCA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyA/IGAke2NvbnRleHR9LiR7cGF0aH1gIDogY29udGV4dDtcbiAgICAgICAgY29uc3QgdHJhY2tJbkRlcHRoID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaWQgPSBlbnYudmlldy5hZGRNb2RlbE9ic2VydmVyKHN1YnNjcmliZVBhdGgsIHJvb3RJZCwgdHJhY2tJbkRlcHRoKTtcbiAgICAgICAgc3Vic2NyaWJlcnMuc2V0KGlkLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKGluaXRpYWxpemVyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyKHJlYWRCeVBhdGgocGF0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ2FsbGJhY2sgPSA8QXJnc01hcCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gRXh0ZXJuQXJncywgRXh0ZXJuQXJncyBleHRlbmRzIHt9LCBQIGV4dGVuZHMgc3RyaW5nPihcbiAgICAgICAgYXJnc01hcDogQXJnc01hcCxcbiAgICAgICAgcGF0aDogUCxcbiAgICApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkID8gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8QXJnc01hcD4pID0+IHZvaWQgOiB1bmtub3duID0+IHtcbiAgICAgICAgY29uc3QgZm4gPSByZWFkQnlQYXRoKHBhdGgpIGFzIChhcmdzPzogRXh0ZXJuQXJncykgPT4gdm9pZDtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgZm4oYXJnc01hcCguLi5hcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUNhbGxiYWNrTm9BcmdzID0gPFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoKSA9PiB2b2lkIDogdW5rbm93biA9PiB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVhZEJ5UGF0aChwYXRoKSBhcyAoYXJncz86IHsgYXJnczogYW55IH0pID0+IHZvaWQ7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBmbigpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YnNjcmliZXJJZCBvZiBzdWJzY3JpYmVycy5rZXlzKCkpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKHN1YnNjcmliZXJJZCwgcm9vdElkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHN1YnNjcmliZSwgcmVhZEJ5UGF0aCwgY3JlYXRlQ2FsbGJhY2ssIGNyZWF0ZUNhbGxiYWNrTm9BcmdzLCBkaXNwb3NlLCB1bnN1YnNjcmliZSB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mdW5jdGlvbi1jb21wb25lbnQtZGVmaW5pdGlvbiAqL1xyXG5pbXBvcnQgeyBjb25zdEZhbHNlIH0gZnJvbSAnbGliL2Z1bmN0aW9uJztcclxuaW1wb3J0IHsgVHlwZUJ5U3RyaW5nUGF0aCB9IGZyb20gJ2xpYi90eXBlLWhlbHBlcnMnO1xyXG5pbXBvcnQgeyBhY3Rpb24sIG9ic2VydmFibGUgfSBmcm9tICdtb2J4JztcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IERhdGFMYXllciwgRGF0YUxheWVyQ3JlYXRlT3B0aW9ucyB9IGZyb20gJy4vZGF0YS1sYXllcic7XHJcbmltcG9ydCAqIGFzIGRhdGFMYXllciBmcm9tICcuL2RhdGEtbGF5ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlTW9kZWwgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCB7IGRhdGFMYXllciB9O1xyXG5leHBvcnQgdHlwZSB7IERhdGFMYXllckNyZWF0ZU9wdGlvbnMsIERhdGFMYXllciB9O1xyXG4vKiogQ3VycmVudCBkYXRhIG1vZGUgKG1vY2tzIG9yIHJlYWwpICovXHJcbmV4cG9ydCB0eXBlIE1vZGUgPSAnbW9ja3MnIHwgJ3JlYWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ29udGV4dDxNb2RlbCwgQ29udHJvbHM+ID0ge1xyXG4gICAgbW9kZWw6IE1vZGVsO1xyXG4gICAgY29udHJvbHM6IENvbnRyb2xzO1xyXG4gICAgbW9kZTogTW9kZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBXaWxsIGJlIGNhbGwgYmVmb3JlIE1vZGVsUHJvdmlkZXIgd2lsbCB1bm1vdW50XHJcbiAqIGBgYHRzeFxyXG4gKiBsZXQgdGltZW91dElkID0gMFxyXG4gKiBjbGVhbnVwKCgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpKVxyXG4gKlxyXG4gKiAvLyAuLi5cclxuICpcclxuICogKCkgPT4gdGltZW91dElkID0gc2V0VGltZW91dChkb1NvbWV0aGluZywgNTAwKVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIENsZWFudXAgPSAoY2xlYW51cEZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBDb250ZXh0UHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7XHJcbiAgICBtb2RlPzogTW9kZTtcclxuICAgIG9wdGlvbnM/OiBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zO1xyXG59PjtcclxuXHJcbmV4cG9ydCB0eXBlIFJlYWRCeVBhdGg8VCBleHRlbmRzIHt9PiA9IDxQIGV4dGVuZHMgc3RyaW5nIHwgdW5kZWZpbmVkPihcclxuICAgIHBhdGg6IFAsXHJcbikgPT4gUCBleHRlbmRzIHN0cmluZyA/IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gOiBUO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kZWxDcmVhdG9yQXJnczxUIGV4dGVuZHMge30+ID0ge1xyXG4gICAgbW9kZTogTW9kZTtcclxuICAgIC8qKiBUaGlzIGlzIEFQSSBmb3IgSlMgPC0+IEMrKywgcmVhZCBvZiBjcmVhdGUgZG9jIGluIHtAbGluayBkYXRhTGF5ZXIuY3JlYXRlfSAqL1xyXG4gICAgZXh0ZXJuYWxNb2RlbDogRGF0YUxheWVyPFQ+O1xyXG4gICAgLyoqIEBzZWUge0BsaW5rIENsZWFudXB9IGZvciBmdXJ0aGVyIGluZm9ybWF0aW9uLiAqL1xyXG4gICAgY2xlYW51cDogQ2xlYW51cDtcclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgb2JzZXJ2YWJsZSBib3ggYWJvdmUgcGFydCBvZiBtb2RlbCBhbmQgc3Vic2NyaWJlIHRvIHVwZGF0ZSBieSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBvcHRpb25hbCByZWxhdGl2ZSBwYXRoIG9mIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gaW5pdCBvcHRpb25hbCBpbml0IGRhdGEgb2YgcGF0aCAod2lsbCByZWFkIGZyb20gbW9kZWwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2YWJsZU1vZGVsOiBPYnNlcnZhYmxlTW9kZWw8VD47XHJcbiAgICByZWFkQnlQYXRoOiBSZWFkQnlQYXRoPFQ+O1xyXG59O1xyXG5leHBvcnQgdHlwZSBDb250cm9sc0NyZWF0b3JBcmdzPE1vZGVsLCBUIGV4dGVuZHMge30+ID0ge1xyXG4gICAgbW9kZTogTW9kZTtcclxuICAgIC8qKiBNb2RlbCB3aGF0IHJldHVybmVkIGZyb20gZmlyc3QgZnVuY3Rpb24gLSB7QGxpbmsgTW9kZWxDcmVhdG9yQXJnczxUPn0gKi9cclxuICAgIG1vZGVsOiBNb2RlbDtcclxuICAgIC8qKlxyXG4gICAgICogTWFrZXMgb2JzZXJ2YWJsZSBib3ggYWJvdmUgcGFydCBvZiBtb2RlbCBhbmQgc3Vic2NyaWJlIHRvIHVwZGF0ZSBieSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gcGF0aCBvcHRpb25hbCByZWxhdGl2ZSBwYXRoIG9mIG1vZGVsXHJcbiAgICAgKiBAcGFyYW0gaW5pdCBvcHRpb25hbCBpbml0IGRhdGEgb2YgcGF0aCAod2lsbCByZWFkIGZyb20gbW9kZWwgYnkgZGVmYXVsdClcclxuICAgICAqL1xyXG4gICAgZXh0ZXJuYWxNb2RlbDogRGF0YUxheWVyPFQ+O1xyXG4gICAgLyoqIEBzZWUge0BsaW5rIENsZWFudXB9IGZvciBmdXJ0aGVyIGluZm9ybWF0aW9uLiAqL1xyXG4gICAgY2xlYW51cDogQ2xlYW51cDtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIE1vY2tzPE1vZGVsLCBDb250cm9scz4gPSB7XHJcbiAgICBnZXR0ZXI6IChwYXRoPzogc3RyaW5nKSA9PiBhbnk7XHJcbiAgICBjb250cm9sczogKGFyZ3M6IHsgbW9kZTogTW9kZTsgbW9kZWw6IE1vZGVsOyBjbGVhbnVwOiBDbGVhbnVwIH0pID0+IENvbnRyb2xzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqICMjIyMgTWFrZXMgdHlwZSBmb3IgbWFrZSBtb2NrcyBlYXNpZXJcclxuICogYGBgdHNcclxuICogIGNvbnN0IG1vY2tzOiBNb2Nrc09mPHR5cGVvZiB1c2VNb2RlbD4gPSB7XHJcbiAqICAgICAgLy8gLi4uXHJcbiAqICB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTW9ja3NPZjxVc2VNb2RlbCBleHRlbmRzICgpID0+IGFueT4gPSBSZXR1cm5UeXBlPFVzZU1vZGVsPiBleHRlbmRzIENvbnRleHQ8aW5mZXIgTW9kZWwsIGluZmVyIENvbnRyb2xzPlxyXG4gICAgPyBNb2NrczxNb2RlbCwgQ29udHJvbHM+XHJcbiAgICA6IG5ldmVyO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBNb2RlbFByb3ZpZGVyIGFuZCB1c2VNb2RlbCBmb3IgeW91ciBkYXRhLWxheWVyOlxyXG4gKiBgYGB0c1xyXG4gKiBleHBvcnQgY29uc3QgW01vZGVsUHJvdmlkZXIsIHVzZU1vZGVsXSA9IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0PDxNT0RFTF9UWVBFPj4oKShcclxuICogICAgICgpID0+IHt9LCAvLyBmb3IgbW9kZWxcclxuICogICAgICgpID0+IHt9LCAvLyBmb3IgY29udHJvbHMgKGZ1bmN0aW9ucylcclxuICogKTtcclxuICogYGBgXHJcbiAqIFdoZXJlIGA8TU9ERUxfVFlQRT5gIGlzIHlvdXIgbW9kZWwgdHlwZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplTW9kZWxXaXRoQ29udGV4dCA9IDxUIGV4dGVuZHMge30+KCkgPT4ge1xyXG4gICAgcmV0dXJuIDxNb2RlbCwgQ29udHJvbHM+KFxyXG4gICAgICAgIG1vZGVsQ3JlYXRvcjogKGFyZ3M6IE1vZGVsQ3JlYXRvckFyZ3M8VD4pID0+IE1vZGVsLFxyXG4gICAgICAgIGNvbnRyb2xzQ3JlYXRvcjogKGFyZ3M6IENvbnRyb2xzQ3JlYXRvckFyZ3M8TW9kZWwsIFQ+KSA9PiBDb250cm9scyxcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHQ8TW9kZWwsIENvbnRyb2xzPj4oe30gYXMgdW5rbm93biBhcyBDb250ZXh0PE1vZGVsLCBDb250cm9scz4pO1xyXG5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBEYXRhTGF5ZXJQcm92aWRlcih7XHJcbiAgICAgICAgICAgICAgICBtb2RlOiBkYXRhTW9kZSA9ICdyZWFsJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICAgICAgICAgIG1vY2tzLFxyXG4gICAgICAgICAgICB9OiBDb250ZXh0UHJvcHMgJiB7IG1vY2tzPzogTW9ja3M8TW9kZWwsIENvbnRyb2xzPiB9KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwc1JlZiA9IHVzZVJlZjwoKCkgPT4gdm9pZClbXT4oW10pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlQ29udGV4dFZhbHVlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6IE1vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz86IERhdGFMYXllckNyZWF0ZU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9ja3M/OiBNb2NrczxNb2RlbCwgQ29udHJvbHM+LFxyXG4gICAgICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUxheWVySW5zdGFuY2UgPSBkYXRhTGF5ZXIuY3JlYXRlPFQ+KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsTW9kZWwgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID09PSAncmVhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YUxheWVySW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGF0YUxheWVySW5zdGFuY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQnlQYXRoOiBtb2Nrcz8uZ2V0dGVyID8/ICgoKSA9PiB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlIE9ic2VydmFibGVNb2RlbExvY2FsID0gT2JzZXJ2YWJsZU1vZGVsPFQ+O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkQnlQYXRoOiBSZWFkQnlQYXRoPFQ+ID0gKHBhdGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdtb2NrcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2Nrcz8uZ2V0dGVyKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4dGVybmFsTW9kZWwucmVhZEJ5UGF0aChwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGVBcnJheTogT2JzZXJ2YWJsZU1vZGVsTG9jYWxbJ2FycmF5J10gPSAocGF0aCwgaW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0T2JzZXJ2YWJsZSA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5pdCA/PyByZWFkQnlQYXRoKHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBvYnNlcnZhYmxlLmJveDxhbnk+KGluaXRPYnNlcnZhYmxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHM6IGNvbnN0RmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKGRhdGE6IGFueSkgPT4gbW9kZWwuc2V0KGRhdGEpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZU9iamVjdDogT2JzZXJ2YWJsZU1vZGVsTG9jYWxbJ29iamVjdCddID0gKHBhdGgsIGluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdE9ic2VydmFibGUgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQgPz8gcmVhZEJ5UGF0aChwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gb2JzZXJ2YWJsZS5ib3goaW5pdE9ic2VydmFibGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxdWFsczogY29uc3RGYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsTW9kZWwuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiBtb2RlbC5zZXQoZGF0YSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZVByaW1pdGl2ZXM6IE9ic2VydmFibGVNb2RlbExvY2FsWydwcmltaXRpdmVzJ10gPSAoa2V5czogdW5rbm93biwgcGF0aD86IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbml0T2JzZXJ2YWJsZSA9IHJlYWRCeVBhdGgocGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nba2V5XSA9IG9ic2VydmFibGUuYm94KChpbml0T2JzZXJ2YWJsZSBhcyBSZWNvcmQ8c3RyaW5nLCBUPilba2V5XSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSBhcyBhbnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAncmVhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxba2V5XS5zZXQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5c1JlY29yZCA9IGtleXMgYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoa2V5c1JlY29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IGtleXNFbnRyaWVzLnJlZHVjZSgoYWNjLCBba2V5RnJvbSwga2V5VG9dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjW2tleVRvXSA9IG9ic2VydmFibGUuYm94KChpbml0T2JzZXJ2YWJsZSBhcyBSZWNvcmQ8c3RyaW5nLCBUPilba2V5RnJvbV0sIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30gYXMgYW55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzRW50cmllcy5mb3JFYWNoKChba2V5RnJvbSwga2V5VG9dKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxba2V5VG9dLnNldChkYXRhW2tleUZyb21dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cDogQ2xlYW51cCA9IChmbikgPT4gY2xlYW51cHNSZWYuY3VycmVudC5wdXNoKGZuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBtb2RlbENyZWF0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkQnlQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlTW9kZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5OiBvYnNlcnZhYmxlQXJyYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IG9ic2VydmFibGVPYmplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltaXRpdmVzOiBvYnNlcnZhYmxlUHJpbWl0aXZlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udHJvbHNBcmdzID0geyBtb2RlLCBtb2RlbCwgZXh0ZXJuYWxNb2RlbCwgY2xlYW51cCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gJ21vY2tzJyAmJiBtb2NrcyA/IG1vY2tzLmNvbnRyb2xzKGNvbnRyb2xzQXJncykgOiBjb250cm9sc0NyZWF0b3IoY29udHJvbHNBcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbW9kZWwsIGNvbnRyb2xzLCBleHRlcm5hbE1vZGVsLCBtb2RlIH07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW21vZGUsIGNoYW5nZU1vZGVdID0gdXNlU3RhdGU8TW9kZT4oZGF0YU1vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiBjcmVhdGVDb250ZXh0VmFsdWUoZGF0YU1vZGUsIG9wdGlvbnMsIG1vY2tzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0ZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGNyZWF0ZUNvbnRleHRWYWx1ZShtb2RlLCBvcHRpb25zLCBtb2NrcykpO1xyXG4gICAgICAgICAgICAgICAgfSwgW21vY2tzLCBtb2RlLCBvcHRpb25zXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb2RlKGRhdGFNb2RlKTtcclxuICAgICAgICAgICAgICAgIH0sIFtkYXRhTW9kZV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdChcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmV4dGVybmFsTW9kZWwuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwc1JlZi5jdXJyZW50LmZvckVhY2goKGZuKSA9PiBmbigpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV0sXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpLFxyXG4gICAgICAgIF0gYXMgY29uc3Q7XHJcbiAgICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBtYWtlRW5naW5lRXZlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgc2V0VHJhY2tNb3VzZU91dHNpZGUgfSBmcm9tICcuL2ludGVybmFsJztcclxuXHJcbmV4cG9ydCB0eXBlIEdGTW91c2VFdmVudCA9IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGJ1dHRvbjogbnVtYmVyO1xyXG4gICAgYnV0dG9uczogbnVtYmVyO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgY2xpZW50WDogbnVtYmVyO1xyXG4gICAgY2xpZW50WTogbnVtYmVyO1xyXG4gICAgc2NyZWVuWDogbnVtYmVyO1xyXG4gICAgc2NyZWVuWTogbnVtYmVyO1xyXG4gICAgYWx0S2V5OiBib29sZWFuO1xyXG4gICAgY3RybEtleTogYm9vbGVhbjtcclxuICAgIHNoaWZ0S2V5OiBib29sZWFuO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9uUmVzaXplID0gbWFrZUVuZ2luZUV2ZW50PCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4gdm9pZD4oJ2NsaWVudFJlc2l6ZWQnKTtcclxuXHJcbmV4cG9ydCB0eXBlIEdGTW91c2VIYW5kbGVyID0gKGV2ZW50OiBHRk1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEdGTW91c2VFdmVudE5hbWUgPSAnZG93bicgfCAndXAnIHwgJ21vdmUnO1xyXG5leHBvcnQgdHlwZSBFeHRNb3VzZUV2ZW50ID0gW2V2ZW50OiBHRk1vdXNlRXZlbnQsIHR5cGU6ICdvdXRzaWRlJ10gfCBbZXZlbnQ6IE1vdXNlRXZlbnQsIHR5cGU6ICdpbnNpZGUnXTtcclxuXHJcbmV4cG9ydCB0eXBlIE1vdXNlTGlzdGVuZXIgPSAoZXZlbnQ6IEV4dE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5jb25zdCBpbnRlcm5hbE1vdXNlID0ge1xyXG4gICAgZG93bjogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2Vkb3duJyksXHJcbiAgICB1cDogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2V1cCcpLFxyXG4gICAgbW92ZTogbWFrZUVuZ2luZUV2ZW50PEdGTW91c2VIYW5kbGVyPignbW91c2Vtb3ZlJyksXHJcbn07XHJcblxyXG50eXBlIE1vdXNlRXZlbnRzQVBJID0gUmVjb3JkPEdGTW91c2VFdmVudE5hbWUsIChsaXN0ZW5lcjogTW91c2VMaXN0ZW5lcikgPT4gKCkgPT4gdm9pZD4gJiB7XHJcbiAgICBkaXNhYmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgZW5hYmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgZW5hYmxlT3V0c2lkZTogKCkgPT4gdm9pZDtcclxuICAgIGRpc2FibGVPdXRzaWRlOiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBtb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgdmlldyBpcyBleHBlbnNpdmUgb3BlcmF0aW9uLlxyXG4gKiBUaGlzIGRlY29yYXRvciBzZXBhcmF0ZSB0cmFjayBtb3VzZSBldmVudHMgYmV0d2VlbiBpbnNpZGUgYW5kIG91dHNpZGUuXHJcbiAqIFdoZW4gY3Vyc29yIGlzIG91dHNpZGUgb2YgdGhlIHZpZXcuXHJcbiAqIFdoZW4gbW91c2UgY3Vyc29yIGlzIGluc2lkZSBvZiB0aGUgdmlldywgaXQgd2lsbCBiZSB0cmFja2VkIGJ5IGludGVybmFsIGRlZmF1bHQgZXZlbnRzLlxyXG4gKlxyXG4gKiBGdW5jdGlvbiBlbmNhcHN1bGF0ZSBsb2dpYyBhbmQgc3RhdGUgaW5zaWRlLlxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdE1vdXNlRXZlbnRzKCk6IE1vdXNlRXZlbnRzQVBJIHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIGxpc3RlbmVyczogMCxcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcigpIHtcclxuICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICBzZXRUcmFja01vdXNlT3V0c2lkZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxhenlUcmFjaygpIHtcclxuICAgICAgICBpZiAoIXN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RhdGUubGlzdGVuZXJzIDwgMSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghc3RhdGUuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgc3RhdGUuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VFdmVudChuYW1lOiBHRk1vdXNlRXZlbnROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIChsaXN0ZW5lcjogTW91c2VMaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMgKz0gMTtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHRydWU7IC8vIHByZXZlbnQgZG91YmxlIGRpc3Bvc2UodW5zdWJzY3JpYmUpXHJcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd0V2ZW50ID0gYG1vdXNlJHtuYW1lfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3Bvc2UgPSBpbnRlcm5hbE1vdXNlW25hbWVdKChldmVudCkgPT4gbGlzdGVuZXIoW2V2ZW50LCAnb3V0c2lkZSddKSk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVdpbmRvd0V2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihbZXZlbnQsICdpbnNpZGUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIod2luZG93RXZlbnQsIGhhbmRsZVdpbmRvd0V2ZW50KTtcclxuICAgICAgICAgICAgdXBkYXRlTGF6eVRyYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvd0V2ZW50LCBoYW5kbGVXaW5kb3dFdmVudCk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5saXN0ZW5lcnMgLT0gMTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBldmVudHM6IFR1cGxpZnk8R0ZNb3VzZUV2ZW50TmFtZT4gPSBbJ2Rvd24nLCAndXAnLCAnbW92ZSddO1xyXG5cclxuICAgIGNvbnN0IHN1YnNjcmliZUFwaSA9IGV2ZW50cy5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xyXG4gICAgICAgIGFjY1tuYW1lXSA9IG1ha2VFdmVudChuYW1lKTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgPFBpY2s8TW91c2VFdmVudHNBUEksIEdGTW91c2VFdmVudE5hbWU+Pnt9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN1YnNjcmliZUFwaSxcclxuICAgICAgICBkaXNhYmxlKCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5hYmxlKCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdXBkYXRlTGF6eVRyYWNrKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmFibGVPdXRzaWRlKCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpc2FibGVPdXRzaWRlKCkge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb3VzZSA9IGluaXRNb3VzZUV2ZW50cygpO1xyXG4iLCJleHBvcnQgKiBhcyBldmVudHMgZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZSh1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5nZXRDbGllbnRTaXplUmVtKCkgOiB2aWV3RW52LmdldENsaWVudFNpemVQeCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW91c2VHbG9iYWxQb3NpdGlvbih1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5nZXRNb3VzZUdsb2JhbFBvc2l0aW9uUmVtKCkgOiB2aWV3RW52LmdldE1vdXNlR2xvYmFsUG9zaXRpb25QeCgpO1xufVxuXG5leHBvcnQgY29uc3QgZ3JhcGhpY3NRdWFsaXR5ID0ge1xuICAgIGlzTG93OiAoKSA9PiB2aWV3RW52LmdldEdyYXBoaWNzUXVhbGl0eSgpID09PSAxLFxuICAgIGlzSGlnaDogKCkgPT4gdmlld0Vudi5nZXRHcmFwaGljc1F1YWxpdHkoKSA9PT0gMCxcbiAgICBnZXQ6ICgpID0+IHZpZXdFbnYuZ2V0R3JhcGhpY3NRdWFsaXR5KCksXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldFRyYWNrTW91c2VPdXRzaWRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB2aWV3RW52LnNldFRyYWNrTW91c2VPblN0YWdlKHZhbHVlKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUVuZ2luZUV2ZW50PFQgZXh0ZW5kcyBGdW5jdGlvbj4oZXZlbnROYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAoaGFuZGxlcjogVCkgPT4ge1xyXG4gICAgICAgIGVuZ2luZS5vbihldmVudE5hbWUsIGhhbmRsZXIgYXMgbmV2ZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVuZ2luZS5vZmYoZXZlbnROYW1lLCBoYW5kbGVyIGFzIG5ldmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBjbGllbnQgZnJvbSAnLi9jbGllbnQnO1xyXG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52ID0ge1xyXG4gICAgdmlldyxcclxuICAgIGNsaWVudCxcclxufTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICh3aW5kb3cgYXMgYW55KS5lbnYgPSBlbnY7XHJcbn1cclxuIiwiaW1wb3J0IHsgU2l6ZSB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRleHR1cmVVcmwoY2hpbGRJZDogbnVtYmVyLCBzaXplOiBTaXplLCBzY2FsZSA9IDEpIHtcbiAgICByZXR1cm4gdmlld0Vudi5nZXRDaGlsZFRleHR1cmVQYXRoKGNoaWxkSWQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCZ1VybChjaGlsZElkOiBudW1iZXIsIHNpemU6IFNpemUsIHNjYWxlPzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGB1cmwoJHtnZXRUZXh0dXJlVXJsKGNoaWxkSWQsIHNpemUsIHNjYWxlKX0pYDtcbn1cbiIsImV4cG9ydCB0eXBlIFNpemUgPSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBvaW50ID0ge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVN0YXR1cyA9IHtcbiAgICBzaG93aW5nOiAwLFxuICAgIHNob3duOiAxLFxuICAgIGhpZGluZzogMixcbiAgICBoaWRkZW46IDMsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBEaXNwbGF5U3RhdHVzID0gVmFsdWVPZjx0eXBlb2YgZGlzcGxheVN0YXR1cz47XG4iLCJpbXBvcnQgeyBtYWtlRW5naW5lRXZlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHsgRGlzcGxheVN0YXR1cywgUG9pbnQgfSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5leHBvcnQgdHlwZSBDaGlsZHJlbkV2ZW50SGFuZGxlciA9ICh2aWV3SWQ6IG51bWJlciwgaW5zdGFuY2VJZDogbnVtYmVyLCByZXNJZDogbnVtYmVyKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBSZXF1ZXN0UG9zaXRpb25IYW5kbGVyID0gKHZpZXdJZDogbnVtYmVyLCBwb3NpdGlvbjogUG9pbnQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIENoYW5nZURpc3BsYXlIYW5kbGVyID0gKHByZXZTdGF0dXM6IERpc3BsYXlTdGF0dXMsIGN1cnJlbnRTdGF0dXM6IERpc3BsYXlTdGF0dXMpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEZvY3VzVXBkYXRlZEhhbmRsZXIgPSAocHJldlN0YXR1czogRGlzcGxheVN0YXR1cywgY3VycmVudFN0YXR1czogRGlzcGxheVN0YXR1cykgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XHJcbiAgICBvblRleHR1cmVGcm96ZW46IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vblRleHR1cmVGcm96ZW4nKSxcclxuICAgIG9uVGV4dHVyZVJlYWR5OiBtYWtlRW5naW5lRXZlbnQ8KCkgPT4gdm9pZD4oJ3NlbGYub25UZXh0dXJlUmVhZHknKSxcclxuICAgIG9uRG9tQnVpbHQ6IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vbkRvbUJ1aWx0JyksXHJcbiAgICBvbkxvYWRlZDogbWFrZUVuZ2luZUV2ZW50PCgpID0+IHZvaWQ+KCdzZWxmLm9uTG9hZGVkJyksXHJcbiAgICBvbkRpc3BsYXlDaGFuZ2VkOiBtYWtlRW5naW5lRXZlbnQ8Q2hhbmdlRGlzcGxheUhhbmRsZXI+KCdzZWxmLm9uU2hvd2luZ1N0YXR1c0NoYW5nZWQnKSxcclxuICAgIG9uRm9jdXNVcGRhdGVkOiBtYWtlRW5naW5lRXZlbnQ8Rm9jdXNVcGRhdGVkSGFuZGxlcj4oJ3NlbGYub25Gb2N1c0NoYW5nZWQnKSxcclxuICAgIGNoaWxkcmVuOiB7XHJcbiAgICAgICAgb25BZGRlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25BZGRlZCcpLFxyXG4gICAgICAgIG9uTG9hZGVkOiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vbkxvYWRlZCcpLFxyXG4gICAgICAgIG9uUmVtb3ZlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25SZW1vdmVkJyksXHJcbiAgICAgICAgb25BdHRhY2hlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25BdHRhY2hlZCcpLFxyXG4gICAgICAgIG9uVGV4dHVyZVJlYWR5OiBtYWtlRW5naW5lRXZlbnQ8Q2hpbGRyZW5FdmVudEhhbmRsZXI+KCdjaGlsZHJlbi5vblRleHR1cmVSZWFkeScpLFxyXG4gICAgICAgIG9uUmVxdWVzdFBvc2l0aW9uOiBtYWtlRW5naW5lRXZlbnQ8UmVxdWVzdFBvc2l0aW9uSGFuZGxlcj4oJ2NoaWxkcmVuLnJlcXVlc3RQb3NpdGlvbicpLFxyXG4gICAgfSxcclxufTtcclxuIiwiaW1wb3J0ICogYXMgY2hpbGRyZW4gZnJvbSAnLi9jaGlsZHJlbic7XG5pbXBvcnQgeyBEaXNwbGF5U3RhdHVzLCBkaXNwbGF5U3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgc2VuZEV2ZW50IH0gZnJvbSAnLi9zZW5kRXZlbnQnO1xuXG5leHBvcnQgdHlwZSB7IFBvaW50LCBTaXplLCBEaXNwbGF5U3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgeyBldmVudHMsIHNlbmRFdmVudCwgY2hpbGRyZW4sIGRpc3BsYXlTdGF0dXMgfTtcblxuZXhwb3J0IHR5cGUgU2lkZXMgPSB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG59O1xuXG5jb25zdCBBTExfU0lERVMgPSAweGY7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcmVsb2FkVGV4dHVyZShwYXRoOiBzdHJpbmcpIHtcbiAgICB2aWV3RW52LmFkZFByZWxvYWRUZXh0dXJlKHBhdGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0SW5wdXRQYWRkaW5nc1JlbShwYWRkaW5nczogbnVtYmVyKSB7XG4gICAgdmlld0Vudi5zZXRIaXRBcmVhUGFkZGluZ3NSZW0ocGFkZGluZ3MsIHBhZGRpbmdzLCBwYWRkaW5ncywgcGFkZGluZ3MsIEFMTF9TSURFUyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyVGV4dHVyZVBhdGgoaWQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNjYWxlID0gMSkge1xuICAgIHJldHVybiB2aWV3RW52LmdldFdlYkJyb3dzZXJUZXh0dXJlUGF0aChpZCwgd2lkdGgsIGhlaWdodCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kZWxPYnNlcnZlcihwYXRoOiBzdHJpbmcsIHJlc0lkOiBudW1iZXIsIHRyYWNrU3ViSXRlbXM6IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdmlld0Vudi5hZGREYXRhQ2hhbmdlZENhbGxiYWNrKHBhdGgsIHJlc0lkLCB0cmFja1N1Ykl0ZW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpZGVQYWRkaW5nc1JlbShwYWRkaW5nczogU2lkZXMpIHtcbiAgICB2aWV3RW52LnNldEhpdEFyZWFQYWRkaW5nc1JlbShwYWRkaW5ncy50b3AsIHBhZGRpbmdzLnJpZ2h0LCBwYWRkaW5ncy5ib3R0b20sIHBhZGRpbmdzLmxlZnQsIEFMTF9TSURFUyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXplKHVuaXQ6ICdweCcgfCAncmVtJyA9ICdweCcpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2aWV3RW52LmdldFZpZXdTaXplUmVtKCkgOiB2aWV3RW52LmdldFZpZXdTaXplUHgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdW5pdDogJ3B4JyB8ICdyZW0nID0gJ3B4Jykge1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZpZXdFbnYucmVzaXplVmlld1JlbSh3aWR0aCwgaGVpZ2h0KSA6IHZpZXdFbnYucmVzaXplVmlld1B4KHdpZHRoLCBoZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld0dsb2JhbFBvc2l0aW9uKHVuaXQ6ICdweCcgfCAncmVtJyA9ICdyZW0nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB2aWV3RW52LmdldFZpZXdHbG9iYWxQb3NpdGlvblJlbSgpO1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZhbHVlIDogeyB4OiByZW1Ub1B4KHZhbHVlLngpLCB5OiByZW1Ub1B4KHZhbHVlLnkpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmVlemVUZXh0dXJlQmVmb3JlUmVzaXplKCkge1xuICAgIHZpZXdFbnYuZnJlZXplVGV4dHVyZUJlZm9yZVJlc2l6ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGUoKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuZ2V0U2NhbGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB4VG9SZW0ocHg6IG51bWJlcikge1xuICAgIHJldHVybiB2aWV3RW52LnB4VG9SZW0ocHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW06IG51bWJlcikge1xuICAgIHJldHVybiB2aWV3RW52LnJlbVRvUHgocmVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFuaW1hdGVXaW5kb3coc2hvd2luZzogYm9vbGVhbiwgaGlkaW5nOiBib29sZWFuKSB7XG4gICAgdmlld0Vudi5zZXRBbmltYXRlV2luZG93KHNob3dpbmcsIGhpZGluZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZpZXdFbnYuaXNGb2N1c2VkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRFdmVudEhhbmRsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZpZXdFbnYuc2V0RXZlbnRIYW5kbGVkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW50SGFuZGxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmlld0Vudi5pc0V2ZW50SGFuZGxlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yY2VUcmlnZ2VyTW91c2VNb3ZlKCkge1xuICAgIHZpZXdFbnYuZm9yY2VUcmlnZ2VyTW91c2VNb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5U3RhdHVzKCkge1xuICAgIHJldHVybiB2aWV3RW52LmdldFNob3dpbmdTdGF0dXMoKSBhcyBEaXNwbGF5U3RhdHVzO1xufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheVN0YXR1c0lzID0gT2JqZWN0LmtleXMoZGlzcGxheVN0YXR1cykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGFjY1trZXldID0gKCkgPT4gdmlld0Vudi5nZXRTaG93aW5nU3RhdHVzKCkgPT09IGRpc3BsYXlTdGF0dXNba2V5XTtcbiAgICByZXR1cm4gYWNjO1xufSwge30gYXMgUmVjb3JkPGtleW9mIHR5cGVvZiBkaXNwbGF5U3RhdHVzLCAoKSA9PiBib29sZWFuPik7XG5cbmV4cG9ydCBjb25zdCBleHRyYVNpemUgPSB7XG4gICAgLyoqIFJlbSB1bml0cyAqL1xuICAgIHNldDogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZpZXdFbnYuc2V0RXh0cmFTaXplUmVtKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG4gICAgLyoqIFJlbSB1bml0cyAqL1xuICAgIGdldDogKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHZpZXdFbnYuZ2V0RXh0cmFTaXplUmVtKHdpZHRoLCBoZWlnaHQpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3Qgd2hlblR1dG9yaWFsUmVhZHkgPSBQcm9taXNlLmFsbDx2b2lkPihbXG4gICAgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pc0RvbUJ1aWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudHMub25Eb21CdWlsdChyZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIGVuZ2luZS53aGVuUmVhZHksXG5dKTtcbiIsImV4cG9ydCB0eXBlIFZpZXdFdmVudEFyZ3MgPSB7IFtrZXk6IHN0cmluZ106IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgVmlld0V2ZW50T3B0aW9ucyA9IFBpY2s8XG4gICAgR0ZWaWV3RXZlbnRQcm94eSxcbiAgICAnY29udGVudElEJyB8ICdkZWNvcmF0b3JJRCcgfCAnaXNNb3VzZUV2ZW50JyB8ICdvbicgfCAnZGlyZWN0aW9uJyB8ICdiYm94J1xuPiAmIHsgYXJncz86IFZpZXdFdmVudEFyZ3MgfTtcblxuZXhwb3J0IGNvbnN0IHZpZXdFdmVudFR5cGVzID0ge1xuICAgIGNsb3NlUG9wb3ZlcjogMixcbiAgICBtb3ZlOiAxNixcbiAgICBjbG9zZTogMzIsXG4gICAgbWluaW1pemU6IDY0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgVmlld0V2ZW50VHlwZSA9IFZhbHVlT2Y8dHlwZW9mIHZpZXdFdmVudFR5cGVzPjtcblxuY29uc3QgY3JlYXRlVmlld0V2ZW50QXJndW1lbnRzID0gKGRhdGE6IFZpZXdFdmVudEFyZ3MpOiBHRlZhbHVlUHJveHlbXSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBfX1R5cGUgPSAnR0ZWYWx1ZVByb3h5JztcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGJvb2w6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZzogdmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFZpZXdFdmVudCA9ICh0eXBlOiBWaWV3RXZlbnRUeXBlLCBvcHRpb25zPzogVmlld0V2ZW50T3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IF9fVHlwZSA9ICdHRlZpZXdFdmVudFByb3h5JztcbiAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHsgYXJncywgLi4ucmVzdE9wdGlvbnMgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGFyZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAuLi5yZXN0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGNyZWF0ZVZpZXdFdmVudEFyZ3VtZW50cyhhcmdzKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAuLi5yZXN0T3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kRXZlbnQgPSB7XG4gICAgY2xvc2UodHlwZT86ICdwb3BvdmVyJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3BvcG92ZXInKSB7XG4gICAgICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLmNsb3NlUG9wb3Zlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLmNsb3NlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWluaW1pemUoKSB7XG4gICAgICAgIHNlbmRWaWV3RXZlbnQodmlld0V2ZW50VHlwZXMubWluaW1pemUpO1xuICAgIH0sXG4gICAgbW92ZShzdGFydDogYm9vbGVhbikge1xuICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLm1vdmUsIHtcbiAgICAgICAgICAgIGlzTW91c2VFdmVudDogdHJ1ZSxcbiAgICAgICAgICAgIG9uOiBzdGFydCxcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG4iLCIvKiogRW1wdHkgZnVuY3Rpb24gKi9cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cblxuLyoqIEFsaWFzIG9mIG5vb3AgKi9cbmV4cG9ydCBjb25zdCBlbXB0eUZ1bmN0aW9uID0gbm9vcDtcblxuLyoqXG4gKiBUaGlzIGhlbHBlciBmdW5jdGlvbiBmb3IgY29ybmVyIGNhc2VcbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqIE9iamVjdC5rZXlzKG9iaikubWFwKGlkZW50aXR5KSAvLyAtPiBbLi5dXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5PEE+KGE6IEEpIHtcbiAgICByZXR1cm4gYTtcbn1cblxuLyoqXG4gKiBDYW4gYmUgdXNlZCBsaWtlIHRoaXM6XG4gKiBgYGBcbiAqIGNvbXB1dGVkKCgpID0+IHNvbWUudmFsdWUsIHsgZXF1YWxzOiBjb25zdEZhbHNlIH0pXG4gKiBgYGBcbiAqIE1lYW5zIHRoYXQgdmFsdWUgd2lsbCB0cmlnZ2VyIHVwZGF0ZXMgYnkgbXV0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdEZhbHNlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDYW4gYmUgdXNlZCBsaWtlIHRoaXM6XG4gKiBgYGBcbiAqIGNvbXB1dGVkKCgpID0+IHNvbWUudmFsdWUsIHsgZXF1YWxzOiBjb25zdFRydWUgfSlcbiAqIGBgYFxuICogTWVhbnMgdGhhdCB2YWx1ZSB3aWxsICoqbmV2ZXIqKiB0cmlnZ2VyIHVwZGF0ZXMgYnkgbXV0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdFRydWUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogVGhpcyBoZWxwZXIgZnVuY3Rpb24gZm9yIGxvZ2dpbmcgY2FsbGJhY2tzIGluc2lkZSBEYXRhIExheWVyIE1vY2tzIHdpdGhvdXQgbGludGVyIGlzc3Vlc1xuICpcbiAqIEZvciBleGFtcGxlOlxuICogYGBganNcbiAqICAgICBjb250cm9sczogKCkgPT4ge1xuICogICAgICAgICByZXR1cm4gbWFrZUFjdGlvbnMoe1xuICogICAgICAgICAgICAgZ29Ub0JyYW5jaFJlc2V0OiAoKSA9PiBsb2coJ29uR29Ub0JyYW5jaFJlc2V0JyksXG4gKiAgICAgICAgIH0pO1xuICogICAgIH0sXG4gKiBgYGBcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmV4cG9ydCBjb25zdCBsb2cgPSBjb25zb2xlLmxvZztcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cclxuaW1wb3J0IHsgRHJhZnRQcm9wcyB9IGZyb20gJ2xpYi9kcmFmdGVkL3R5cGVzJztcclxuaW1wb3J0IHsgTWVkaWFTaXplLCB1c2VNZWRpYSB9IGZyb20gJ2xpYi9ob29rcy91c2VNZWRpYSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBTdGF0aWNLZXlUeXBlPEFkYXB0aXZlS2V5IGV4dGVuZHMgc3RyaW5nPiA9IEFkYXB0aXZlS2V5IGV4dGVuZHMgYCR7aW5mZXIgQmFzZX1fJHtBZGFwdGl2ZVN1ZmZpeFR5cGV9YFxyXG4gICAgPyBCYXNlXHJcbiAgICA6IG5ldmVyO1xyXG5cclxudHlwZSBBZGFwdGl2ZVN1ZmZpeFR5cGUgPSAneGwnIHwgJ2xnJyB8ICdtZCcgfCAnc20nIHwgJ3hzJztcclxudHlwZSBBZGFwdGl2ZUtleXNUeXBlPEtleXMgZXh0ZW5kcyBzdHJpbmc+ID0gYCR7S2V5c31fJHtBZGFwdGl2ZVN1ZmZpeFR5cGV9YDtcclxudHlwZSBBZGFwdGl2ZVByb3BzT25seTxQcm9wcyBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LCBBZGFwdGl2ZVByb3BOYW1lcyBleHRlbmRzIGtleW9mIFByb3BzPiA9IHtcclxuICAgIFtrZXkgaW4gQWRhcHRpdmVLZXlzVHlwZTxFeGNsdWRlPEFkYXB0aXZlUHJvcE5hbWVzLCBudW1iZXIgfCBzeW1ib2w+Pl0/OiBQcm9wc1tTdGF0aWNLZXlUeXBlPGtleT5dO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcyBleHRlbmRzIHt9LCBBZGFwdGl2ZUtleXMgZXh0ZW5kcyBrZXlvZiBTdGF0aWNQcm9wcz4gPSBTdGF0aWNQcm9wcyAmXHJcbiAgICBBZGFwdGl2ZVByb3BzT25seTxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlID0gWyd4bCcsICdsZycsICdtZCcsICdzbScsICd4cyddIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgaXNBZGFwdGl2ZVN1ZmZpeCA9IChrZXk/OiBzdHJpbmcpOiBrZXkgaXMgQWRhcHRpdmVTdWZmaXhUeXBlID0+IHtcclxuICAgIHJldHVybiBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlLmluY2x1ZGVzKGtleSBhcyBBZGFwdGl2ZVN1ZmZpeFR5cGUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNBZGFwdGl2ZVByb3BOYW1lID0gKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4ga2V5LmluY2x1ZGVzKCdfJykgJiYgaXNBZGFwdGl2ZVN1ZmZpeChrZXkuc3BsaXQoJ18nKS5hdCgtMSkpO1xyXG59O1xyXG5cclxuY29uc3QgbWVkaWFTaXplU2VxdWVuY2UgPSBbXHJcbiAgICBNZWRpYVNpemUuRXh0cmFMYXJnZSxcclxuICAgIE1lZGlhU2l6ZS5MYXJnZSxcclxuICAgIE1lZGlhU2l6ZS5NZWRpdW0sXHJcbiAgICBNZWRpYVNpemUuU21hbGwsXHJcbiAgICBNZWRpYVNpemUuRXh0cmFTbWFsbCxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNEZWZpbmVkQWRhcHRpdmVQcm9wcyA9IChwcm9wTmFtZTogc3RyaW5nLCBwcm9wczogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pID0+IHtcclxuICAgIHJldHVybiBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlLnNvbWUoKHN1ZmZpeCkgPT4gcHJvcHNbYCR7cHJvcE5hbWV9XyR7c3VmZml4fWBdICE9PSB1bmRlZmluZWQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgYWxsIGFkYXB0aXZlIHByb3BlcnRpZXMgYnkgcGlja2luZyB0aGUgbGFyZ2VzdCBwcm9wZXJ0eSBmcm9tIGEgbGlzdCwgZm9yIGV4YW1wbGUgYG1feGwsIG1fbGcsIG1fbWQsIG1fc20sIG1feHNgIHRoYXQgaXMgbm90IGxhcmdlciB0aGFuIE1lZGlhU2l6ZSBhbmQgcmV0dXJuaW5nIGl0IGFzIGBtYCBpbiBhIG5ldyBvYmplY3Qgd2l0aCBvbmx5IHRoZSBub3JtYWxpemVkIHByb3BzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBBbiBvYmplY3Qgd2l0aCBhZGFwdGl2ZSBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge01lZGlhU2l6ZX0gbWVkaWFTaXplIC0gQSBtZWRpYSBzaXplIHRvIG5vcm1hbGl6ZSBhZGFwdGl2ZSBwcm9wcyBmb3IuXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBIG5ldyBvYmplY3Qgd2l0aCBub3JtYWxpemVkIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplQWRhcHRpdmVQcm9wcyA9IChwcm9wczogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sIG1lZGlhU2l6ZTogTWVkaWFTaXplKSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZSgob3V0cHV0LCBwcm9wTmFtZSkgPT4ge1xyXG4gICAgICAgIC8vIElmIGtleSBpcyBhbHJlYWR5IGluIG91dHB1dCwgaXQgbWVhbnMgaXQgaXMgYSBiYXNlIGZvciBhbiBhZGFwdGl2ZSBwcm9wIHdoaWNoIHdhcyBhbHJlYWR5IHByb2Nlc3NlZCAtPiBza2lwXHJcbiAgICAgICAgaWYgKHByb3BOYW1lIGluIG91dHB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBZGFwdGl2ZVByb3BOYW1lKHByb3BOYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlUHJvcE5hbWUgPSBwcm9wTmFtZS5zcGxpdCgnXycpLnNsaWNlKDAsIC0xKS5qb2luKCdfJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIGJhc2UgcHJvcCBpcyBhbHJlYWR5IGluIG91dHB1dCwgaXQgbXVzdCBoYXZlIGJlZW4gYWxyZWFkeSBwcm9jZXNzZWQgLT4gc2tpcFxyXG4gICAgICAgICAgICBpZiAoYmFzZVByb3BOYW1lIGluIG91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtZWRpYVNpemVJbmRleCA9IG1lZGlhU2l6ZVNlcXVlbmNlLmluZGV4T2YobWVkaWFTaXplKTtcclxuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBhZGFwdGl2ZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGxhcmdlciB0aGFuIG1lZGlhU2l6ZVxyXG4gICAgICAgICAgICBjb25zdCByZWxldmFudEFkYXB0aXZlU3VmZml4ZXMgPSBtZWRpYVNpemVJbmRleCAhPT0gLTEgPyBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlLnNsaWNlKG1lZGlhU2l6ZUluZGV4KSA6IFtdO1xyXG4gICAgICAgICAgICBjb25zdCByZWxldmFudFByb3BlcnR5TmFtZXMgPSByZWxldmFudEFkYXB0aXZlU3VmZml4ZXMubWFwKChzdWZmaXgpID0+IGJhc2VQcm9wTmFtZSArICdfJyArIHN1ZmZpeCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkUHJvcE5hbWUgPSByZWxldmFudFByb3BlcnR5TmFtZXMuZmluZCgocHJvcE5hbWUpID0+IHByb3BzW3Byb3BOYW1lXSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRQcm9wVmFsdWUgPSByZXNvbHZlZFByb3BOYW1lID8gcHJvcHNbcmVzb2x2ZWRQcm9wTmFtZV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBiYXNlUHJvcCB3aXRoIHZhbHVlIG9mIHRoZSBmaXJzdCByZWxldmFudCBhZGFwdGl2ZSBwcm9wIG9yIGJhc2UgcHJvcFxyXG4gICAgICAgICAgICBvdXRwdXRbYmFzZVByb3BOYW1lXSA9IHJlc29sdmVkUHJvcFZhbHVlICE9PSB1bmRlZmluZWQgPyByZXNvbHZlZFByb3BWYWx1ZSA6IHByb3BzW2Jhc2VQcm9wTmFtZV07XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xyXG4gICAgICAgIC8vIHNraXAgcHJvcHMgdGhhdCBhcmUgdW5kZWZpbmVkIG9yIGhhdmUgc29tZSBhZGFwdGl2ZSBwcm9wZXJ0aWVzIHNldFxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGhhc0RlZmluZWRBZGFwdGl2ZVByb3BzKHByb3BOYW1lLCBwcm9wcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0cHV0W3Byb3BOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LCB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGNvbXBvbmVudCB0aGF0IG5vcm1hbGl6ZXMgYWRhcHRpdmUgcHJvcGVydGllcyBiYXNlZCBvbiB0aGUgY3VycmVudCBtZWRpYSBzaXplIGFuZCBwYXNzZXMgaXQgdG8gdGhlIENvbXBvbmVudC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db21wb25lbnRUeXBlPFN0YXRpY1Byb3BzPn0gQ29tcG9uZW50IC0gUmVhY3QgY29tcG9uZW50IHRoYXQgaGFuZGxlcyBzdGF0aWMgcHJvcHMuXHJcbiAqIEBwYXJhbSB7dHlwZW9mIG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHN9IG5vcm1hbGl6ZVByb3BzIC0gb3B0aW9uYWwgY3VzdG9tIGZ1bmN0aW9uIHRoYXQgbm9ybWFsaXplcyBhZGFwdGl2ZSBwcm9wcywgdXNlZnVsIG1haW5seSBmb3IgdGVzdGluZy5cclxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IHRoZSBCb3ggY29tcG9uZW50IHdpdGggbm9ybWFsaXplZCBhZGFwdGl2ZSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG5jb25zdCBnZXRBZGFwdGl2ZUNvbXBvbmVudCA9XHJcbiAgICA8U3RhdGljUHJvcHMgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSwgQWRhcHRpdmVLZXlzIGV4dGVuZHMga2V5b2YgU3RhdGljUHJvcHM+KFxyXG4gICAgICAgIENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxTdGF0aWNQcm9wcz4sXHJcbiAgICAgICAgbm9ybWFsaXplUHJvcHM6IHR5cGVvZiBub3JtYWxpemVBZGFwdGl2ZVByb3BzID0gbm9ybWFsaXplQWRhcHRpdmVQcm9wcyxcclxuICAgICkgPT5cclxuICAgIChwcm9wczogQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbWVkaWFTaXplIH0gPSB1c2VNZWRpYSgpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQcm9wcyA9IHVzZU1lbW8oKCkgPT4gbm9ybWFsaXplUHJvcHMocHJvcHMsIG1lZGlhU2l6ZSksIFtwcm9wcywgbWVkaWFTaXplXSk7XHJcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLihub3JtYWxpemVkUHJvcHMgYXMgU3RhdGljUHJvcHMpfSAvPjtcclxuICAgIH07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBlaXRoZXIgYW4gQWRhcHRpdmVDb21wb25lbnQgb3IgYSBDb21wb25lbnQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYWRhcHRpdmUgcHJvcHMgYXJlIHByZXNlbnQgaW4gdGhlIHByb3BzIG9iamVjdC5cclxuICogR2VuZXJpYyB0eXBlcyBTdGF0aWNQcm9wcyAoZS5nLiBDb21wUHJvcHMpIGFuZCBBZGFwdGl2ZUtleXMgKGUuZy4gQ29tcEFkYXB0aXZlUHJvcE5hbWVzKSBhcmUgb3B0aW9uYWwuIEFkYXB0aXZlIGxvZ2ljIHdvdWxkIHdvcmtcclxuICogb24gYW55IHByb3BzIGluIHJ1bnRpbWUsIGJ1dCBhZGRpbmcgdGhlIHR5cGVzIHdpbGwgZmlsdGVyIHdoaWNoIGtleXMgYXJlIHZhbGlkYXRlZCBieSBUeXBlc2NyaXB0IHNvIHRoYXQgYWRhcHRpdmUgcHJvcHNcclxuICogdGhhdCBkbyBub3QgbWFrZSBzZW5zZSBhcmUgbm90IHN1Z2dlc3RlZCBieSBpbnRlbGxpc2Vuc2UuXHJcbiAqIEB1c2FnZSAoaW4gcm9vdCBzY29wZSkgY29uc3QgQWRhcHRpdmVDb21wID0gZ2V0QWRhcHRpdmVDb250cm9sbGVyPENvbXBQcm9wcywgQ29tcEFkYXB0aXZlUHJvcE5hbWVzPihDb21wKTtcclxuICogIGV4cG9ydCB0eXBlIENvbXBBZGFwdGl2ZVByb3BOYW1lcyA9ICdzaXplJyB8ICdjbGFzc05hbWUnO1xyXG4gKiAgZXhwb3J0IHR5cGUgQ29tcFByb3BzID0gQ29tcFN0YXRpY1Byb3BzICYgQWRhcHRpdmVQcm9wczxDb21wU3RhdGljUHJvcHMsIENvbXBBZGFwdGl2ZVByb3BOYW1lc1R5cGU+O1xyXG4gKiAgZXhwb3J0IGRlZmF1bHQgQWRhcHRpdmVDb21wO1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudFR5cGU8U3RhdGljUHJvcHM+fSBDb21wb25lbnQgLSBSZWFjdCBjb21wb25lbnQgdGhhdCBoYW5kbGVzIHN0YXRpYyBwcm9wcy5cclxuICogQHBhcmFtIHt0eXBlb2Ygbm9ybWFsaXplQWRhcHRpdmVQcm9wc30gbm9ybWFsaXplUHJvcHMgLSBvcHRpb25hbCBjdXN0b20gZnVuY3Rpb24gdGhhdCBub3JtYWxpemVzIGFkYXB0aXZlIHByb3BzLCB1c2VmdWwgbWFpbmx5IGZvciB0ZXN0aW5nLlxyXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gRWl0aGVyIGFuIEFkYXB0aXZlQm94IG9yIGEgQm94IGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXIgPSA8XHJcbiAgICBTdGF0aWNQcm9wcyBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LFxyXG4gICAgQWRhcHRpdmVLZXlzIGV4dGVuZHMga2V5b2YgU3RhdGljUHJvcHMsXHJcbj4oXHJcbiAgICBDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8U3RhdGljUHJvcHM+LFxyXG4gICAgbm9ybWFsaXplUHJvcHM6IHR5cGVvZiBub3JtYWxpemVBZGFwdGl2ZVByb3BzID0gbm9ybWFsaXplQWRhcHRpdmVQcm9wcyxcclxuKSA9PiB7XHJcbiAgICBjb25zdCBBZGFwdGl2ZUNvbXBvbmVudCA9IGdldEFkYXB0aXZlQ29tcG9uZW50KENvbXBvbmVudCwgbm9ybWFsaXplUHJvcHMpIGFzIFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgICAgICAgQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPlxyXG4gICAgPjtcclxuICAgIHJldHVybiBSZWFjdC5tZW1vKChwcm9wczogQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc0FkYXB0aXZlUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcykuc29tZShcclxuICAgICAgICAgICAgKGtleSkgPT5cclxuICAgICAgICAgICAgICAgIGlzQWRhcHRpdmVQcm9wTmFtZShrZXkpICYmIHByb3BzW2tleSBhcyBrZXlvZiBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+XSAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGhhc0FkYXB0aXZlUHJvcHMgPyA8QWRhcHRpdmVDb21wb25lbnQgey4uLnByb3BzfSAvPiA6IDxDb21wb25lbnQgey4uLihwcm9wcyBhcyBTdGF0aWNQcm9wcyl9IC8+O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXI7XHJcblxyXG50eXBlIERyYWZ0UHJvcE1hcCA9IHsgW2tleTogc3RyaW5nXTogRHJhZnRQcm9wcyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERyYWZ0ZWRBZGFwdGl2ZVByb3BzID0gKHByb3BOYW1lOiBzdHJpbmcsIGRyYWZ0UHJvcHM6IERyYWZ0UHJvcHMpID0+XHJcbiAgICBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlLnJlZHVjZSgocHJvcHMsIHN1ZmZpeCkgPT4ge1xyXG4gICAgICAgIHByb3BzW3Byb3BOYW1lICsgJ18nICsgc3VmZml4XSA9IGRyYWZ0UHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgfSwge30gYXMgRHJhZnRQcm9wTWFwKTtcclxuIiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlQ2FsbE9uY2UgPSAoZjogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGNhbGxlZFJlZiA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gICAgaWYgKCFjYWxsZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGYoKTtcclxuICAgICAgICBjYWxsZWRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDYWxsT25jZTtcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVkaWFDb250ZXh0LCBNZWRpYUNvbnRleHRUeXBlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZWRpYVF1ZXJ5JztcbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NZWRpYVF1ZXJ5L3N0YXRpYyc7XG5cbmV4cG9ydCBlbnVtIE1lZGlhU2l6ZSB7XG4gICAgRXh0cmFTbWFsbCA9IEJSRUFLUE9JTlRTLmV4dHJhU21hbGwud2lkdGgsXG4gICAgU21hbGwgPSBCUkVBS1BPSU5UUy5zbWFsbC53aWR0aCxcbiAgICBNZWRpdW0gPSBCUkVBS1BPSU5UUy5tZWRpdW0ud2lkdGgsXG4gICAgTGFyZ2UgPSBCUkVBS1BPSU5UUy5sYXJnZS53aWR0aCxcbiAgICBFeHRyYUxhcmdlID0gQlJFQUtQT0lOVFMuZXh0cmFMYXJnZS53aWR0aCxcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFXaWR0aCB7XG4gICAgRXh0cmFTbWFsbCA9IEJSRUFLUE9JTlRTLmV4dHJhU21hbGwud2lkdGgsXG4gICAgU21hbGwgPSBCUkVBS1BPSU5UUy5zbWFsbC53aWR0aCxcbiAgICBNZWRpdW0gPSBCUkVBS1BPSU5UUy5tZWRpdW0ud2lkdGgsXG4gICAgTGFyZ2UgPSBCUkVBS1BPSU5UUy5sYXJnZS53aWR0aCxcbiAgICBFeHRyYUxhcmdlID0gQlJFQUtQT0lOVFMuZXh0cmFMYXJnZS53aWR0aCxcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFIZWlnaHQge1xuICAgIEV4dHJhU21hbGwgPSBCUkVBS1BPSU5UUy5leHRyYVNtYWxsLmhlaWdodCxcbiAgICBTbWFsbCA9IEJSRUFLUE9JTlRTLnNtYWxsLmhlaWdodCxcbiAgICBNZWRpdW0gPSBCUkVBS1BPSU5UUy5tZWRpdW0uaGVpZ2h0LFxuICAgIExhcmdlID0gQlJFQUtQT0lOVFMubGFyZ2UuaGVpZ2h0LFxuICAgIEV4dHJhTGFyZ2UgPSBCUkVBS1BPSU5UUy5leHRyYUxhcmdlLmhlaWdodCxcbn1cblxuY29uc3QgY29udmVydFRvTWVkaWFTaXplID0gKG1lZGlhQ29udGV4dDogTWVkaWFDb250ZXh0VHlwZSkgPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5leHRyYUxhcmdlOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5FeHRyYUxhcmdlO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5sYXJnZTpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVNpemUuTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0Lm1lZGl1bTpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVNpemUuTWVkaXVtO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5zbWFsbDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVNpemUuU21hbGw7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhU21hbGw6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFTaXplLkV4dHJhU21hbGw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbnJlYWNoYWJsZSBtZWRpYSBjb250ZXh0IHJlc29sdXRpb24nKTtcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVNpemUuRXh0cmFTbWFsbDtcbiAgICB9XG59O1xuXG5jb25zdCBjb252ZXJ0VG9NZWRpYVdpZHRoID0gKG1lZGlhQ29udGV4dDogTWVkaWFDb250ZXh0VHlwZSkgPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5leHRyYUxhcmdlV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5FeHRyYUxhcmdlO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5sYXJnZVdpZHRoOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0Lm1lZGl1bVdpZHRoOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguTWVkaXVtO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5zbWFsbFdpZHRoOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguU21hbGw7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhU21hbGxXaWR0aDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVdpZHRoLkV4dHJhU21hbGw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbnJlYWNoYWJsZSBtZWRpYSBjb250ZXh0IHJlc29sdXRpb24nKTtcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVdpZHRoLkV4dHJhU21hbGw7XG4gICAgfVxufTtcblxuY29uc3QgY29udmVydFRvTWVkaWFIZWlnaHQgPSAobWVkaWFDb250ZXh0OiBNZWRpYUNvbnRleHRUeXBlKSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhTGFyZ2VIZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuRXh0cmFMYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubGFyZ2VIZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0Lm1lZGl1bUhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5NZWRpdW07XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LnNtYWxsSGVpZ2h0OlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0LlNtYWxsO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5leHRyYVNtYWxsSGVpZ2h0OlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0LkV4dHJhU21hbGw7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbnJlYWNoYWJsZSBtZWRpYSBjb250ZXh0IHJlc29sdXRpb24nKTtcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5FeHRyYVNtYWxsO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1c2VNZWRpYSA9ICgpID0+IHtcbiAgICBjb25zdCBtZWRpYUNvbnRleHQgPSB1c2VDb250ZXh0KE1lZGlhQ29udGV4dCk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBtZWRpYUNvbnRleHQ7XG4gICAgY29uc3QgbWVkaWFTaXplID0gY29udmVydFRvTWVkaWFTaXplKG1lZGlhQ29udGV4dCk7XG4gICAgY29uc3QgbWVkaWFXaWR0aCA9IGNvbnZlcnRUb01lZGlhV2lkdGgobWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCBtZWRpYUhlaWdodCA9IGNvbnZlcnRUb01lZGlhSGVpZ2h0KG1lZGlhQ29udGV4dCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtZWRpYVNpemUsXG4gICAgICAgIG1lZGlhV2lkdGgsXG4gICAgICAgIG1lZGlhSGVpZ2h0LFxuICAgICAgICByZW1TY3JlZW5XaWR0aDogd2lkdGgsXG4gICAgICAgIHJlbVNjcmVlbkhlaWdodDogaGVpZ2h0LFxuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgRWZmZWN0Q2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNb3VudCA9IChmbjogRWZmZWN0Q2FsbGJhY2spID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIHVzZUVmZmVjdChmbiwgW10pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVubW91bnQgPSAoZm46ICgpID0+IHZvaWQpID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiBmbiwgW10pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VVbm1vdW50IH0gZnJvbSAnLi91c2VNb3VudFVubW91bnQnO1xyXG5cclxuY29uc3QgTk9fUkFGX0lEID0gMCBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGhvb2sgd2lsbCBjb3JyZWN0bHkgd29yayB3aXRoIGFzeW5jIHNraXAgZnJhbWUuXHJcbiAqIEl0IHdpbGwgYmUgY2xlYXJlZCB3aGVuIHlvdXIgY29tcG9uZW50IGlzIGF1dG9tYXRpY2FsbHkgdW5tb3VudGVkLlxyXG4gKiBFYWNoIHRpbWUgZnVuY3Rpb24gc3RhcnRzLCBpdCB3aWxsIGNsZWFyIHRoZSBwcmV2aW91cyBydW4uXHJcbiAqXHJcbiAqIEV4YW1wbGVzIHRvIHVzYWdlOlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBza2lwRnJhbWUgPSB1c2VTa2lwRnJhbWUoKVxyXG4gKlxyXG4gKiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gKiAgIGlmIChzdGF0ZSA9PT0gJ2FuaW1hdGluZycpIHtcclxuICogICAgIHNraXBGcmFtZS5ydW4oKCkgPT4gc2V0U3RhdGUoLi4uKSlcclxuICogICB9XHJcbiAqIH0sIFtzdGF0ZSwgc2tpcEZyYW1lXSlcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU2tpcEZyYW1lKCkge1xyXG4gICAgY29uc3QgcmFmSWRSZWYgPSB1c2VSZWY8bnVtYmVyPihOT19SQUZfSUQpO1xyXG5cclxuICAgIHVzZVVubW91bnQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZFJlZi5jdXJyZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2VNZW1vKFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgIHJ1bjogKGhhbmRsZXI6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZFJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHJhZklkUmVmLmN1cnJlbnQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByYWZJZFJlZi5jdXJyZW50ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFmSWRSZWYuY3VycmVudCA9IE5PX1JBRl9JRDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmFmSWRSZWYuY3VycmVudCA9IE5PX1JBRl9JRDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IGlzUnVubmluZygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByYWZJZFJlZi5jdXJyZW50ICE9PSBOT19SQUZfSUQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgW10sXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IHR5cGUgTWFwcGluZyA9IHtcbiAgICBba2V5OiBzdHJpbmddOlxuICAgICAgICB8IHN0cmluZ1xuICAgICAgICB8IG51bWJlclxuICAgICAgICB8IGJvb2xlYW5cbiAgICAgICAgfCBSZWFjdE5vZGVcbiAgICAgICAgfCBIVE1MRWxlbWVudFxuICAgICAgICB8IG51bWJlcltdXG4gICAgICAgIHwgc3RyaW5nW11cbiAgICAgICAgfCBSZWFjdE5vZGVbXVxuICAgICAgICB8IEhUTUxFbGVtZW50W107XG59O1xuXG5leHBvcnQgZW51bSBBbGlnbm1lbnQge1xuICAgIGxlZnQsXG4gICAgcmlnaHQsXG59XG5cbmV4cG9ydCB0eXBlIEJpbmRpbmcgPSB7XG4gICAgW2tleTogc3RyaW5nXTogUmVhY3QuUmVhY3ROb2RlO1xufTtcblxuLyoqXG4gKiBSZXBsYWNlIGluIHN0cmluZyBuYW1lZCBwYXJhbXMgc2V0IGluIHB5dGhvbiBzdHlsZSB0aHJvdWdoIGJyYWNlczogJ2JsYWxibGEge3BhcmFtMX0gYmxhbGJsYSB7cGFyYW0xfSAuLi4nXG4gKiBAcGFyYW0gc3RyXG4gKiBAcGFyYW0gbWFwcGluZyBpcyBrZXkvdmFsdWUgcGFyYW1zIG9iamVjdFxuICogQHJldHVybnMge3ZvaWR8KnxYTUx8c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHN0cjogc3RyaW5nLCBtYXBwaW5nOiBNYXBwaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHtcXHcrXFx9L2csIChtYXRjaCkgPT4gU3RyaW5nKG1hcHBpbmdbbWF0Y2guc2xpY2UoMSwgLTEpXSkpO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgaW4gc3RyaW5nIG5hbWVkIHBhcmFtcyBzZXQgaW4gcHJpbnRmLXN0eWxlIHN0eWxlOiAnYmxhbGJsYSAlKHBhcmFtMSlzIGJsYWxibGEgJShwYXJhbTEpcyAuLi4nXG4gKiBAcGFyYW0gc3RyXG4gKiBAcGFyYW0gbWFwcGluZyBpcyBrZXkvdmFsdWUgcGFyYW1zIG9iamVjdFxuICogQHJldHVybnMge3ZvaWR8KnxYTUx8c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpbnRmKHN0cjogc3RyaW5nLCBtYXBwaW5nOiBNYXBwaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFx7fCVcXCgpXFx3KyhcXH18XFwpcykvZywgKG1hdGNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZCA9IG1hdGNoLmluZGV4T2YoJyUnKSA9PT0gMCA/IDIgOiAxO1xuICAgICAgICByZXR1cm4gU3RyaW5nKG1hcHBpbmdbbWF0Y2guc2xpY2UocGFkLCAtcGFkKV0pO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgc25ha2VfY2FzZSBzdHJpbmcgdG8gY2FtZWxDYXNlJ1xuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNuYWtlVG9DYW1lbChzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvX1xcdy9nLCAobWF0Y2gpID0+IHtcbiAgICAgICAgcmV0dXJuIG1hdGNoWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydCBmaWxlIG5hbWUgdG8gUiBjbGFzcyBuYW1lJ1xuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVJlc291cmNlKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tL2csICdfJyk7XG59XG5cbi8qKlxuICogY29udmVydCBmaXJzdCBjaGFyIHRvIHVwcGVyIGNhc2VcbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cENhc2VGaXJzdENoYXIoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbi8qKlxuICogcmVwbGFjZSAmbmJzcDsgdG8gXFx4YTBcbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0TmJzcCA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJm5ic3A7L2csICdcXHhhMCcpO1xufTtcblxuLyoqXG4gKiByZXBsYWNlICZ6d25ic3A7IHRvIFxcdWZlZmZcbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0WnduYnNwID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8menduYnNwOy9nLCAnXFx1ZmVmZicpO1xufTtcblxuZXhwb3J0IHR5cGUgQWRkU2VwYXJhdG9yRnVuYyA9IChhY2M6IHN0cmluZ1tdLCBpdGVtOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHN0cmluZ1tdO1xuXG5jb25zdCBhZGRTZXBhcmF0b3JUb1JpZ2h0OiBBZGRTZXBhcmF0b3JGdW5jID0gKGFjYywgaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoIShpbmRleCAlIDIpKSB7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBpdGVtXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsYXN0ID0gYWNjLnBvcCgpO1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgbGFzdCArIGl0ZW1dO1xuICAgIH1cbn07XG5cbmNvbnN0IGFkZFNlcGFyYXRvclRvTGVmdDogQWRkU2VwYXJhdG9yRnVuYyA9IChhY2MsIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbaXRlbV07XG4gICAgfSBlbHNlIGlmIChpbmRleCAlIDIpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGl0ZW0gPT09ICcgJyA/ICdcXHhhMCcgOiBpdGVtXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBsYXN0ID0gYWNjLnBvcCgpO1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgbGFzdCArIGl0ZW1dO1xuICAgIH1cbn07XG5cbi8qKlxuICogU3BsaXQgdGV4dCBzdHJpbmcgd2l0aCBSZWdFeHAgc2VwYXJhdG9yIGFuZCB0aGVuIGFkZCBzZXBhcmF0b3IgdG8gdGhlIHByb3BlciBzaWRlXG4gKi9cbmNvbnN0IHNwbGl0QW5kRm9ybWF0ID0gKHN0cmluZ1RvU3BsaXQ6IHN0cmluZywgc2VwYXJhdG9yOiBSZWdFeHAsIGFsaWdubWVudCA9IEFsaWdubWVudC5sZWZ0KTogc3RyaW5nW10gPT5cbiAgICBzdHJpbmdUb1NwbGl0LnNwbGl0KHNlcGFyYXRvcikucmVkdWNlKGFsaWdubWVudCA9PT0gQWxpZ25tZW50LmxlZnQgPyBhZGRTZXBhcmF0b3JUb1JpZ2h0IDogYWRkU2VwYXJhdG9yVG9MZWZ0LCBbXSk7XG5cbmV4cG9ydCBjb25zdCBzcGxpdEV1cm9wZWFuID0gKHN0cmluZ1RvU3BsaXQ6IHN0cmluZywgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQpOiBzdHJpbmdbXSA9PiB7XG4gICAgbGV0IHNwbGl0UmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3Qgc3BsaXRSZWdleCA9IC8oPzw9XFxwe0xsfSkoLSkoPz1cXHB7TGx9KS9ndTsgLy8gZXhjbHVkZSBzcGVjaWFsIHdvcmRzIGxpa2UgdmVoaWNsZSBuYW1lcyBLVi0yIGV0Y1xuICAgIGNvbnN0IHN0cmluZ1dpdGhOYnNwID0gY29udmVydE5ic3Aoc3RyaW5nVG9TcGxpdCk7XG4gICAgc3BsaXRBbmRGb3JtYXQoc3RyaW5nV2l0aE5ic3AsIC8oICkvLCBhbGlnbm1lbnQpLmZvckVhY2goXG4gICAgICAgICh3b3JkKSA9PiAoc3BsaXRSZXN1bHQgPSBzcGxpdFJlc3VsdC5jb25jYXQoc3BsaXRBbmRGb3JtYXQod29yZCwgc3BsaXRSZWdleCwgQWxpZ25tZW50LmxlZnQpKSksXG4gICAgKTtcbiAgICByZXR1cm4gc3BsaXRSZXN1bHQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc3BsaXRDaGluZXNlID0gKCgpID0+IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqLyAvLyBFc2NhcGluZyBpcyBuZWNlc3NhcnkgZm9yIHVuaWNvZGUgUmVnRXhwLlxuICAgIC8vIFN5bWJvbHMgdXNlZCBmb3IgbGF0aW4gdmVoaWNsZSBuYW1lcywgcmFuZ2VzIGV0Yy4gZXhwZWN0ZWQgbm90IGJlIHdyYXBwZWQgZnJvbSBlYWNoIG90aGVyIG9yIGZvbGxvd2luZyBwdW5jdHVhdGlvbiBtYXJrLlxuICAgIC8vIFlvdSBjYW4gYWRkIG5ldyBvbmVzIHRvIHRoZSB0aGlyZCBwYWlyIG9mIFtdIChjdXJyZW50bHkgdGhlIGxpc3QgaXMgW2EtekEtWjAtOS3igJPigJQgJeKApi5cXHszXFx9L10pXG4gICAgY29uc3QgbGF0aW5JbmplY3Rpb25zID1cbiAgICAgICAgL1tcXHB7c2M9SGFuaX0oXT9b44CC77yM77ya77yb77yB77yfXT9bYS16QS1aw4AtyLcwLTkt4oCT4oCUIFxceGEwJeKApi4rXFx7M1xcfS9dK1tcXHB7c2M9SGFuaX3jgILvvIzvvJrvvJvvvIHvvJ8pXT9b44CC77yM77ya77yb77yB77yfXT8vZ211O1xuICAgIC8vIFRoaXMgcnVsZSBwcmV2ZW50cyB3cmFwcGluZyBvZiBzb21lIHN5bWJvbHMgbmVpZ2hib3JpbmcgdG8gdGhlIGJyYWNrZXRzL3F1b3Rlcy5cbiAgICAvLyBQYWlycyBvZiBvcGVuaW5nIChsZWZ0KSBhbmQgY2xvc2luZyAocmlnaHQpIHN5bWJvbHMgYXJlIGRlc2NyaWJlZC5cbiAgICAvLyBPbmx5IHVzZSBzZXBhcmF0ZSB1bmljb2RlIHN5bWJvbHMgZm9yIGxlZnQgYW5kIHJpZ2h0IHBhcnQowqvCuyksIGJ1dCBOT1QgdW5pdmVyc2FsIG9uZXMgKFwiKS5cbiAgICAvLyBJbiBjYXNlIGlmIHVuaXZlcnNhbCBzeW1ib2wgaXMgdXNlZCBpbiB0aGUgdHJhbnNsYXRpb24sIHRoZSB0cmFuc2xhdGlvbiBtdXN0IGJlIGZpeGVkLCBub3QgdGhlIHJ1bGUuXG4gICAgY29uc3QgYnJhY2tldHNBbmRRdW90ZXMgPVxuICAgICAgICAvW1xcKOKdneKAnMKrXVxccHtzYz1IYW5pfVxcUHtzYz1IYW5pfT98XFxwe3NjPUhhbml9XFxQe3NjPUhhbml9P1vjgILvvIzvvJrvvJvvvIHvvJ9dP1tcXCninZ7igJ3Cu11b44CC77yM77ya77yb77yB77yfXT8vZ211O1xuICAgIC8vIFJ1bGUgZGVzY3JpYmVzIHRoYXQgcHJldmlvdXMgaGllcm9nbHlwaCBzaG91bGQgbm90IGJlIHdyYXBwZWQuXG4gICAgLy8gT25seSB1bmljb2RlIHB1bmN0dWF0aW9uIG1hcmtzIGFyZSB1c2VkIGZvciBhc2lhbiBsYW5ndWFnZXMuXG4gICAgLy8gT3RoZXJ3aXNlIHN0cmluZyBzaG91bGQgYmUgZml4ZWQgdG8gdXNlIHVuaWNvZGUgcHVuY3R1YXRpb24gbWFya3MsIG5vdCB0aGUgcnVsZS5cbiAgICBjb25zdCBwdW5jdHVhdGlvbk1hcmtzID0gL1xccHtMfT9b44CC77yMOiA7IO+8mu+8m++8ge+8n+OAiuOAi+OAjOOAjeKAoinjgIFdfFsoXFxwe0x9ezEsfV0vZ211OyAgICBcbiAgICAvLyBUaGlzIHJ1bGUgbWFrZXMgaXQgcG9zc2libGUgdG8gd3JhcCBhbnkgbmVpZ2hib3JpbmcgcGFpciBvZiBoaWVyb2dseXBocy5cbiAgICBjb25zdCBuZWlnaGJvcmluZ0hpZXJvZ2x5cGhzID0gL1xccHtzYz1IYW5pfS9nbXU7XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgLy8gT3JkZXIgaXMgaW1wb3J0YW50LlxuICAgIGNvbnN0IG1haW5SZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgIGxhdGluSW5qZWN0aW9ucy5zb3VyY2UgK1xuICAgICAgICAgICAgJ3wnICtcbiAgICAgICAgICAgIGJyYWNrZXRzQW5kUXVvdGVzLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgcHVuY3R1YXRpb25NYXJrcy5zb3VyY2UgK1xuICAgICAgICAgICAgJ3wnICtcbiAgICAgICAgICAgIG5laWdoYm9yaW5nSGllcm9nbHlwaHMuc291cmNlLFxuICAgICAgICAnZ3VtJyxcbiAgICApO1xuICAgIHJldHVybiAoc3RyaW5nc1RvU3BsaXQ6IHN0cmluZykgPT5cbiAgICAgICAgc3RyaW5nc1RvU3BsaXRcbiAgICAgICAgICAgIC5yZXBsYWNlKC8mbmJzcDsvZywgJ1xceGEwJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICdcXHhhMCcpXG4gICAgICAgICAgICAubWF0Y2gobWFpblJlZ2V4KTtcbn0pKCk7XG5cbmNvbnN0IENISU5FU0VfTEFOR1VBR0VfQ09ERVMgPSBbJ3poX2NuJywgJ3poX3NnJywgJ3poX3R3J107XG5cbi8qKlxuICogU3BsaXQgb25lIGxpbmUgb2YgbG9jYWxpemVkIHRleHQgdG8gYXJyYXkgb2Ygd29yZHMgd2hpY2ggdGhlbiBjYW4gYmUgbGluZS13cmFwcGVkIGJ5IGdhbWVmYWNlLlxuICogQHBhcmFtIHN0cmluZ1RvU3BsaXQgc3VwcG9ydHMgJm5ic3AsIGh5cGhlbnMgYW5kIGRhc2hlcyBmb3IgYXNpYW4gbGFuZ3VhZ2VzLlxuICogQHBhcmFtIGFsaWdubWVudCBzZXQgdG8gYHJpZ2h0YCBmb3IgcmlnaHQtYWxpZ25lZCB0ZXh0XG4gKiBTZWUgdGVzdHMgZm9yIGV4YW1wbGVcbiAqL1xuXG5leHBvcnQgY29uc3Qgc3BsaXRXb3JkcyA9IChzdHJpbmdUb1NwbGl0OiBzdHJpbmcsIGFsaWdubWVudCA9IEFsaWdubWVudC5sZWZ0KSA9PiB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBSLnN0cmluZ3Muc2V0dGluZ3MuTEFOR1VBR0VfQ09ERSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAoQ0hJTkVTRV9MQU5HVUFHRV9DT0RFUy5pbmNsdWRlcyhsYW5ndWFnZSkpIHtcbiAgICAgICAgcmV0dXJuIHNwbGl0Q2hpbmVzZShzdHJpbmdUb1NwbGl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRFdXJvcGVhbihzdHJpbmdUb1NwbGl0LCBhbGlnbm1lbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFN0cmluZyA9ICh0ZXh0OiBzdHJpbmcsIGFsaWdubWVudDogQWxpZ25tZW50LCBiaW5kaW5nPzogQmluZGluZyk6IEFycmF5PHN0cmluZyB8IFJlYWN0Tm9kZT4gPT5cbiAgICB0ZXh0LnNwbGl0KC8lXFwoKC4qPylcXCkoPzpbc2RdKT8vZykubWFwKChzdWJTdHJpbmc6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIWJpbmRpbmcpIHsgcmV0dXJuIHNwbGl0V29yZHMoc3ViU3RyaW5nLCBhbGlnbm1lbnQpOyB9XG4gICAgICAgIHJldHVybiBzdWJTdHJpbmcgaW4gYmluZGluZyA/IGJpbmRpbmdbc3ViU3RyaW5nXSA6IHNwbGl0V29yZHMoc3ViU3RyaW5nLCBhbGlnbm1lbnQpO1xuICAgIH0pO1xuXG4iLCJpbXBvcnQgeyBUb29sdGlwRGVjb3JhdG9yIH0gZnJvbSAnY29tcG9uZW50cy9Ub29sdGlwRGVjb3JhdG9yL1Rvb2x0aXBEZWNvcmF0b3InO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgeyBNb2RlbFByb3ZpZGVyIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5lbmdpbmUud2hlblJlYWR5LnRoZW4oKCkgPT4ge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgIDxNb2RlbFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8VG9vbHRpcERlY29yYXRvcj5cclxuICAgICAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICAgICAgPC9Ub29sdGlwRGVjb3JhdG9yPlxyXG4gICAgICAgIDwvTW9kZWxQcm92aWRlcj4sXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSxcclxuICAgICk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgVGV4dCBmcm9tICdjb21wb25lbnRzL1RleHQvVGV4dCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwID0gUmVhY3QubWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFzZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmd9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWV0YWx9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FybmluZ0ljb259IC8+XHJcbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9IHRleHQ9e1Iuc3RyaW5ncy5hcm1vcnlfc2hvcC5zaG9wQnV5Vmlldy50b29sdGlwLmJ1eU5vdEF2YWlsYWJsZSgpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBBcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXdNb2RlbCB9IGZyb20gJ2d1aS9pbXBsL2dlbi92aWV3X21vZGVscy92aWV3cy9sb2JieS9mZWF0dXJlL3Rvb2x0aXBzL2FybW9yeV95YXJkX3dhbGxldF9ub3RfYXZhaWxhYmxlX3Rvb2x0aXBfdmlld19tb2RlbCc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0IH0gZnJvbSAnbGliL2RhdGEtbGF5ZXInO1xyXG5pbXBvcnQgeyBDYXN0QWxsQXJyYXlzIH0gZnJvbSAnbGliL2xpa2VBcnJheSc7XHJcblxyXG5leHBvcnQgY29uc3QgW01vZGVsUHJvdmlkZXIsIHVzZU1vZGVsXSA9IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0PFxyXG4gICAgQ2FzdEFsbEFycmF5czxBcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXdNb2RlbD5cclxuPigpKFxyXG4gICAgKHsgb2JzZXJ2YWJsZU1vZGVsIH0pID0+IHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IHtcclxuICAgICAgICAgICAgcm9vdDogb2JzZXJ2YWJsZU1vZGVsLm9iamVjdCgpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLm1vZGVsLFxyXG4gICAgICAgICAgICBjb21wdXRlczoge30sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAoeyBleHRlcm5hbE1vZGVsIH0pID0+ICh7fSksXHJcbik7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibXRfX1hTXCI6XCJCb3hfbXRfX1hTXzBjXCIsXCJtdF9fU01cIjpcIkJveF9tdF9fU01fZWJcIixcIm10X19TTXBcIjpcIkJveF9tdF9fU01wX2NmXCIsXCJtdF9fTURcIjpcIkJveF9tdF9fTURfMjVcIixcIm10X19NRHBcIjpcIkJveF9tdF9fTURwXzQ5XCIsXCJtdF9fTEdcIjpcIkJveF9tdF9fTEdfZThcIixcIm10X19YTFwiOlwiQm94X210X19YTF84M1wiLFwibXJfX1hTXCI6XCJCb3hfbXJfX1hTXzdjXCIsXCJtcl9fU01cIjpcIkJveF9tcl9fU01fMDhcIixcIm1yX19TTXBcIjpcIkJveF9tcl9fU01wXzA2XCIsXCJtcl9fTURcIjpcIkJveF9tcl9fTURfNGFcIixcIm1yX19NRHBcIjpcIkJveF9tcl9fTURwX2I2XCIsXCJtcl9fTEdcIjpcIkJveF9tcl9fTEdfZDBcIixcIm1yX19YTFwiOlwiQm94X21yX19YTF9kYlwiLFwibWJfX1hTXCI6XCJCb3hfbWJfX1hTX2JiXCIsXCJtYl9fU01cIjpcIkJveF9tYl9fU01fODNcIixcIm1iX19TTXBcIjpcIkJveF9tYl9fU01wXzA0XCIsXCJtYl9fTURcIjpcIkJveF9tYl9fTURfZWRcIixcIm1iX19NRHBcIjpcIkJveF9tYl9fTURwXzY1XCIsXCJtYl9fTEdcIjpcIkJveF9tYl9fTEdfYzhcIixcIm1iX19YTFwiOlwiQm94X21iX19YTF9mOFwiLFwibWxfX1hTXCI6XCJCb3hfbWxfX1hTXzhhXCIsXCJtbF9fU01cIjpcIkJveF9tbF9fU01fZTZcIixcIm1sX19TTXBcIjpcIkJveF9tbF9fU01wX2ZiXCIsXCJtbF9fTURcIjpcIkJveF9tbF9fTURfMmJcIixcIm1sX19NRHBcIjpcIkJveF9tbF9fTURwX2M3XCIsXCJtbF9fTEdcIjpcIkJveF9tbF9fTEdfMzlcIixcIm1sX19YTFwiOlwiQm94X21sX19YTF80YVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIkZvcm1hdFRleHRfYmFzZV9kMFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhcmFncmFwaC1QMTBcIjpcIlRleHRfcGFyYWdyYXBoLVAxMF8yY1wiLFwicGFyYWdyYXBoLVAxMlwiOlwiVGV4dF9wYXJhZ3JhcGgtUDEyXzIyXCIsXCJwYXJhZ3JhcGgtUDE0XCI6XCJUZXh0X3BhcmFncmFwaC1QMTRfYTdcIixcInBhcmFncmFwaC1QMTZcIjpcIlRleHRfcGFyYWdyYXBoLVAxNl85MFwiLFwicGFyYWdyYXBoLVAxOFwiOlwiVGV4dF9wYXJhZ3JhcGgtUDE4XzUwXCIsXCJwYXJhZ3JhcGgtUDI0XCI6XCJUZXh0X3BhcmFncmFwaC1QMjRfMzNcIixcImhlYWRpbmctSDE0XCI6XCJUZXh0X2hlYWRpbmctSDE0XzhiXCIsXCJoZWFkaW5nLUgxNVwiOlwiVGV4dF9oZWFkaW5nLUgxNV85ZVwiLFwiaGVhZGluZy1IMThcIjpcIlRleHRfaGVhZGluZy1IMThfYjdcIixcImhlYWRpbmctSDIwUlwiOlwiVGV4dF9oZWFkaW5nLUgyMFJfZjZcIixcImhlYWRpbmctSDIyXCI6XCJUZXh0X2hlYWRpbmctSDIyXzI3XCIsXCJoZWFkaW5nLUgyNFJcIjpcIlRleHRfaGVhZGluZy1IMjRSX2JlXCIsXCJoZWFkaW5nLUgyNFwiOlwiVGV4dF9oZWFkaW5nLUgyNF8wY1wiLFwiaGVhZGluZy1IMjhcIjpcIlRleHRfaGVhZGluZy1IMjhfNzhcIixcImhlYWRpbmctSDM2XCI6XCJUZXh0X2hlYWRpbmctSDM2XzMyXCIsXCJoZWFkaW5nLUg1NlwiOlwiVGV4dF9oZWFkaW5nLUg1Nl9jM1wiLFwiaGVhZGluZy1INzNcIjpcIlRleHRfaGVhZGluZy1INzNfOGZcIixcImhlYWRpbmctSDE0NFwiOlwiVGV4dF9oZWFkaW5nLUgxNDRfYTlcIixcIkJMQUNLX1JFQUxcIjpcIlRleHRfQkxBQ0tfUkVBTF8zMFwiLFwiV0hJVEVfUkVBTFwiOlwiVGV4dF9XSElURV9SRUFMX2JjXCIsXCJXSElURVwiOlwiVGV4dF9XSElURV82MlwiLFwiV0hJVEVfT1JBTkdFXCI6XCJUZXh0X1dISVRFX09SQU5HRV81NFwiLFwiV0hJVEVfU1BBTklTSFwiOlwiVGV4dF9XSElURV9TUEFOSVNIX2RmXCIsXCJQQVJcIjpcIlRleHRfUEFSXzE1XCIsXCJQQVJfU0VDT05EQVJZXCI6XCJUZXh0X1BBUl9TRUNPTkRBUllfNWRcIixcIlBBUl9URVJUSUFSWVwiOlwiVGV4dF9QQVJfVEVSVElBUllfYzlcIixcIklORk9fUkVEXCI6XCJUZXh0X0lORk9fUkVEXzMwXCIsXCJSRURcIjpcIlRleHRfUkVEXzY2XCIsXCJSRURfREFSS1wiOlwiVGV4dF9SRURfREFSS19kOFwiLFwiWUVMTE9XXCI6XCJUZXh0X1lFTExPV19lZFwiLFwiT1JBTkdFXCI6XCJUZXh0X09SQU5HRV9iZVwiLFwiQ1JFQU1cIjpcIlRleHRfQ1JFQU1fNTdcIixcIkJST1dOXCI6XCJUZXh0X0JST1dOXzE4XCIsXCJHUkVFTl9CUklHSFRcIjpcIlRleHRfR1JFRU5fQlJJR0hUXzNmXCIsXCJHUkVFTlwiOlwiVGV4dF9HUkVFTl9lM1wiLFwiR1JFRU5fREFSS1wiOlwiVGV4dF9HUkVFTl9EQVJLX2YxXCIsXCJCTFVFX0JPT1NURVJcIjpcIlRleHRfQkxVRV9CT09TVEVSXzIxXCIsXCJCTFVFX1RFQU1LSUxMRVJcIjpcIlRleHRfQkxVRV9URUFNS0lMTEVSX2FiXCIsXCJDUkVEXCI6XCJUZXh0X0NSRURfZjdcIixcIkdPTERcIjpcIlRleHRfR09MRF8yOFwiLFwiQk9ORFwiOlwiVGV4dF9CT05EX2JlXCIsXCJQUk9NXCI6XCJUZXh0X1BST01fNjVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJUb29sdGlwRGVjb3JhdG9yX2Jhc2VfYzlcIixcImJhc2VfX3RoZW1lLWRlZmF1bHRcIjpcIlRvb2x0aXBEZWNvcmF0b3JfYmFzZV9fdGhlbWUtZGVmYXVsdF82ZFwiLFwiZGVjb3JhdG9yXCI6XCJUb29sdGlwRGVjb3JhdG9yX2RlY29yYXRvcl8zZFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIkFwcF9iYXNlXzhhXCIsXCJiZ1wiOlwiQXBwX2JnX2E2XCIsXCJtZXRhbFwiOlwiQXBwX21ldGFsXzMzXCIsXCJ3YXJuaW5nSWNvblwiOlwiQXBwX3dhcm5pbmdJY29uXzkzXCIsXCJib2R5XCI6XCJBcHBfYm9keV9iMFwifTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibG9iYnkvZmVhdHVyZS90b29sdGlwcy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcvQXJtb3J5WWFyZFdhbGxldE5vdEF2YWlsYWJsZVRvb2x0aXBWaWV3XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2dhbWVmYWNlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2dhbWVmYWNlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJsaWIvdmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS90b29sdGlwcy9Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcvQXJtb3J5WWFyZFdhbGxldE5vdEF2YWlsYWJsZVRvb2x0aXBWaWV3LnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJzcGFjaW5nIiwiZ2V0QWRhcHRpdmVDb250cm9sbGVyIiwiUmVhY3QiLCJ1c2VNZW1vIiwic3R5bGVzIiwic3RhbmRhcmRNYXJnaW5zIiwiT2JqZWN0Iiwia2V5cyIsImRlZmF1bHRYbE1hcmdpbnMiLCJtdCIsIm10X19YTCIsIm1yIiwibXJfX1hMIiwibWIiLCJtYl9fWEwiLCJtbCIsIm1sX19YTCIsImRlZmF1bHRMZ01hcmdpbnMiLCJtdF9fTEciLCJtcl9fTEciLCJtYl9fTEciLCJtbF9fTEciLCJkZWZhdWx0TWRwTWFyZ2lucyIsIm10X19NRHAiLCJtcl9fTURwIiwibWJfX01EcCIsIm1sX19NRHAiLCJkZWZhdWx0TWRNYXJnaW5zIiwibXRfX01EIiwibXJfX01EIiwibWJfX01EIiwibWxfX01EIiwiZGVmYXVsdFNtcE1hcmdpbnMiLCJtdF9fU01wIiwibXJfX1NNcCIsIm1iX19TTXAiLCJtbF9fU01wIiwiZGVmYXVsdFNtTWFyZ2lucyIsIm10X19TTSIsIm1yX19TTSIsIm1iX19TTSIsIm1sX19TTSIsImRlZmF1bHRYc01hcmdpbnMiLCJtdF9fWFMiLCJtcl9fWFMiLCJtYl9fWFMiLCJtbF9fWFMiLCJkZWZhdWx0TWFyZ2luTWFwIiwiWEwiLCJMRyIsIk1EcCIsIk1EIiwiU01wIiwiU00iLCJYUyIsImRlZmF1bHRNYXJnaW5zIiwibWFyZ2luS2V5TGlzdCIsImdldE1hcmdpbkNsYXNzTmFtZXMiLCJtYXJnaW5NYXAiLCJyZWR1Y2UiLCJrZXkiLCJ2YWx1ZSIsImNvbmNhdCIsIm1hcmdpbktleVByb3BlcnR5TWFwIiwiZ2V0TWFyZ2luU3R5bGUiLCJzdHlsZSIsInByb3BlcnR5IiwiQm94IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJtIiwiY29sdW1uIiwicm93IiwiZmxleERpcmVjdGlvbiIsInVuZGVmaW5lZCIsImZsZXhTdGFydCIsImNlbnRlciIsImZsZXhFbmQiLCJzcGFjZUJldHdlZW4iLCJzcGFjZUFyb3VuZCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduU2VsZiIsIndyYXAiLCJmbGV4V3JhcCIsImdyb3ciLCJzaHJpbmsiLCJmbGV4IiwiY2hpbGRyZW4iLCJyZXN0UHJvcHMiLCJjb21wdXRlZENsYXNzTmFtZXMiLCJtYXJnaW5TdHlsZSIsImNvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiYmFzZSIsIkZyYWdtZW50IiwiY3giLCJmb3JtYXRTdHJpbmciLCJBbGlnbm1lbnQiLCJGb3JtYXRUZXh0IiwiYmluZGluZyIsInRleHQiLCJjbGFzc01peCIsImFsaWdubWVudCIsImxlZnQiLCJjb25zb2xlIiwiZXJyb3IiLCJzcGxpdCIsIm1hcCIsInRleHRMaW5lIiwibGluZUlkIiwid29yZElkIiwiZW52IiwiY3JlYXRlQ29udGV4dCIsIkJSRUFLUE9JTlRTIiwiZ2V0U2l6ZXMiLCJjbGllbnQiLCJnZXRTaXplIiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImluaXRpYWxWYWx1ZSIsIk1lZGlhQ29udGV4dCIsIm1lbW8iLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNhbGxPbmNlIiwiUHJvdmlkZXIiLCJjb250ZXh0Iiwic2V0VmFsdWUiLCJoYW5kbGVSZXNpemUiLCJwcmVwYXJlZFdpZHRoIiwidmlldyIsInB4VG9SZW0iLCJwcmVwYXJlZEhlaWdodCIsImVuZ2luZSIsIm9uIiwib2ZmIiwidmFsdWVBc1Byb3AiLCJNZWRpYVByb3ZpZGVyIiwiZ2V0QnlIZWlnaHQiLCJkZWZhdWx0UHJvcHMiLCJleHRyYUxhcmdlIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsImV4dHJhU21hbGwiLCJleHRyYUxhcmdlV2lkdGgiLCJsYXJnZVdpZHRoIiwibWVkaXVtV2lkdGgiLCJzbWFsbFdpZHRoIiwiZXh0cmFTbWFsbFdpZHRoIiwiZXh0cmFMYXJnZUhlaWdodCIsImxhcmdlSGVpZ2h0IiwibWVkaXVtSGVpZ2h0Iiwic21hbGxIZWlnaHQiLCJleHRyYVNtYWxsSGVpZ2h0IiwiTWVkaWEiLCJyZXN0IiwiYnJlYWtwb2ludFByb3BzIiwiTWVkaWFRdWVyeSIsIndlaWdodCIsImdldFdpZHRoQlBXZWlnaHQiLCJicmVha3BvaW50cyIsImdldEhlaWdodEJQV2VpZ2h0IiwiU2l6ZXMiLCJ3aWR0aEJQV2VpZ2h0IiwiaGVpZ2h0QlBXZWlnaHQiLCJNYXRoIiwibWluIiwiY29sb3JzIiwic3RhbmRhcmRDb2xvcnMiLCJ4bFN0eWxlTWFyZ2lucyIsImxnU3R5bGVNYXJnaW5zIiwibWRTdHlsZU1hcmdpbnMiLCJzbVN0eWxlTWFyZ2lucyIsInhzU3R5bGVNYXJnaW5zIiwidmFyaWFudE1hcmdpblNpemVNYXAiLCJ2YXJpYW50cyIsImlzRGVmYXVsdENvbG9yIiwiY29sb3IiLCJpbmNsdWRlcyIsImdldENvbG9yU3R5bGVPckNsYXNzTmFtZSIsImNvbG9yQ2xhc3NOYW1lIiwiY29sb3JTdHlsZSIsIlRleHQiLCJ2YXJpYW50IiwiZm9ybWF0IiwidXNlTW91bnQiLCJ1c2VTa2lwRnJhbWUiLCJUb29sdGlwRGVjb3JhdG9yIiwiZm9yd2FyZFJlZiIsInJlZiIsInRoZW1lIiwic2tpcEZyYW1lIiwiYmFzZVJlZiIsInVzZVJlZiIsInJ1biIsImN1cnJlbnQiLCJjb250ZW50V2lkdGgiLCJzY3JvbGxXaWR0aCIsImNvbnRlbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJyZXNpemUiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0U2lkZVBhZGRpbmdzUmVtIiwicGFyc2VJbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJzZXRSZWZzIiwibm9kZSIsImRlY29yYXRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRSb290RGVmYXVsdCIsInJvb3RJZCIsInN1YlZpZXdzIiwiZ2V0IiwiY3JlYXRlIiwiaW5pdGlhbGl6ZXIiLCJnZXRSb290Iiwic3Vic2NyaWJlcnMiLCJNYXAiLCJ3aGVuUmVhZHkiLCJ0aGVuIiwiZGF0YSIsIl8iLCJjYWxsYmFja0lEcyIsImZvckVhY2giLCJjYWxsYmFja0lEIiwiY2FsbGJhY2siLCJ1bnN1YnNjcmliZSIsImlkIiwicmVzSWQiLCJ2aWV3RW52IiwicmVtb3ZlRGF0YUNoYW5nZWRDYWxsYmFjayIsImRlbGV0ZSIsInJlYWRCeVBhdGgiLCJwYXRoIiwicm9vdCIsIm1vZGVsIiwicmVzdWx0IiwibGVuZ3RoIiwiZWxlbWVudCIsImJpbmQiLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVyIiwic3Vic2NyaWJlUGF0aCIsInRyYWNrSW5EZXB0aCIsImFkZE1vZGVsT2JzZXJ2ZXIiLCJzZXQiLCJjcmVhdGVDYWxsYmFjayIsImFyZ3NNYXAiLCJmbiIsImFyZ3MiLCJjcmVhdGVDYWxsYmFja05vQXJncyIsImRpc3Bvc2UiLCJzdWJzY3JpYmVySWQiLCJjb25zdEZhbHNlIiwiYWN0aW9uIiwib2JzZXJ2YWJsZSIsImRhdGFMYXllciIsImluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0IiwibW9kZWxDcmVhdG9yIiwiY29udHJvbHNDcmVhdG9yIiwiQ29udGV4dCIsIkRhdGFMYXllclByb3ZpZGVyIiwibW9kZSIsImRhdGFNb2RlIiwib3B0aW9ucyIsIm1vY2tzIiwiY2xlYW51cHNSZWYiLCJjcmVhdGVDb250ZXh0VmFsdWUiLCJkYXRhTGF5ZXJJbnN0YW5jZSIsImV4dGVybmFsTW9kZWwiLCJnZXR0ZXIiLCJvYnNlcnZhYmxlQXJyYXkiLCJpbml0IiwiaW5pdE9ic2VydmFibGUiLCJib3giLCJlcXVhbHMiLCJvYnNlcnZhYmxlT2JqZWN0Iiwib2JzZXJ2YWJsZVByaW1pdGl2ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJhY2MiLCJrZXlzUmVjb3JkIiwia2V5c0VudHJpZXMiLCJlbnRyaWVzIiwia2V5RnJvbSIsImtleVRvIiwiY2xlYW51cCIsInB1c2giLCJvYnNlcnZhYmxlTW9kZWwiLCJhcnJheSIsIm9iamVjdCIsInByaW1pdGl2ZXMiLCJjb250cm9sc0FyZ3MiLCJjb250cm9scyIsInN0YXJ0ZWRSZWYiLCJjaGFuZ2VNb2RlIiwibWFrZUVuZ2luZUV2ZW50Iiwic2V0VHJhY2tNb3VzZU91dHNpZGUiLCJvblJlc2l6ZSIsImludGVybmFsTW91c2UiLCJkb3duIiwidXAiLCJtb3ZlIiwiaW5pdE1vdXNlRXZlbnRzIiwic3RhdGUiLCJsaXN0ZW5lcnMiLCJlbmFibGVkIiwiaW5pdGlhbGl6ZWQiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInVwZGF0ZUxhenlUcmFjayIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUV2ZW50IiwibmFtZSIsImxpc3RlbmVyIiwiYWN0aXZlIiwid2luZG93RXZlbnQiLCJldmVudCIsImhhbmRsZVdpbmRvd0V2ZW50IiwiZXZlbnRzIiwic3Vic2NyaWJlQXBpIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZU91dHNpZGUiLCJkaXNhYmxlT3V0c2lkZSIsIm1vdXNlIiwidW5pdCIsImdldENsaWVudFNpemVSZW0iLCJnZXRDbGllbnRTaXplUHgiLCJnZXRNb3VzZUdsb2JhbFBvc2l0aW9uIiwiZ2V0TW91c2VHbG9iYWxQb3NpdGlvblJlbSIsImdldE1vdXNlR2xvYmFsUG9zaXRpb25QeCIsImdyYXBoaWNzUXVhbGl0eSIsImlzTG93IiwiZ2V0R3JhcGhpY3NRdWFsaXR5IiwiaXNIaWdoIiwic2V0VHJhY2tNb3VzZU9uU3RhZ2UiLCJldmVudE5hbWUiLCJoYW5kbGVyIiwicHJvY2VzcyIsIk5PREVfRU5WIiwiZ2V0VGV4dHVyZVVybCIsImNoaWxkSWQiLCJzaXplIiwic2NhbGUiLCJnZXRDaGlsZFRleHR1cmVQYXRoIiwiZ2V0QmdVcmwiLCJkaXNwbGF5U3RhdHVzIiwic2hvd2luZyIsInNob3duIiwiaGlkaW5nIiwiaGlkZGVuIiwib25UZXh0dXJlRnJvemVuIiwib25UZXh0dXJlUmVhZHkiLCJvbkRvbUJ1aWx0Iiwib25Mb2FkZWQiLCJvbkRpc3BsYXlDaGFuZ2VkIiwib25Gb2N1c1VwZGF0ZWQiLCJvbkFkZGVkIiwib25SZW1vdmVkIiwib25BdHRhY2hlZCIsIm9uUmVxdWVzdFBvc2l0aW9uIiwic2VuZEV2ZW50IiwiQUxMX1NJREVTIiwiYWRkUHJlbG9hZFRleHR1cmUiLCJzZXRJbnB1dFBhZGRpbmdzUmVtIiwicGFkZGluZ3MiLCJzZXRIaXRBcmVhUGFkZGluZ3NSZW0iLCJnZXRCcm93c2VyVGV4dHVyZVBhdGgiLCJnZXRXZWJCcm93c2VyVGV4dHVyZVBhdGgiLCJ0cmFja1N1Ykl0ZW1zIiwiYWRkRGF0YUNoYW5nZWRDYWxsYmFjayIsImdldFZpZXdTaXplUmVtIiwiZ2V0Vmlld1NpemVQeCIsInJlc2l6ZVZpZXdSZW0iLCJyZXNpemVWaWV3UHgiLCJnZXRWaWV3R2xvYmFsUG9zaXRpb24iLCJnZXRWaWV3R2xvYmFsUG9zaXRpb25SZW0iLCJ4IiwicmVtVG9QeCIsInkiLCJmcmVlemVUZXh0dXJlQmVmb3JlUmVzaXplIiwiZ2V0U2NhbGUiLCJweCIsInJlbSIsInNldEFuaW1hdGVXaW5kb3ciLCJpc0ZvY3VzZWQiLCJzZXRFdmVudEhhbmRsZWQiLCJpc0V2ZW50SGFuZGxlZCIsImZvcmNlVHJpZ2dlck1vdXNlTW92ZSIsImdldERpc3BsYXlTdGF0dXMiLCJnZXRTaG93aW5nU3RhdHVzIiwiZGlzcGxheVN0YXR1c0lzIiwiZXh0cmFTaXplIiwic2V0RXh0cmFTaXplUmVtIiwiZ2V0RXh0cmFTaXplUmVtIiwid2hlblR1dG9yaWFsUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwicmVzb2x2ZSIsImlzRG9tQnVpbHQiLCJ2aWV3RXZlbnRUeXBlcyIsImNsb3NlUG9wb3ZlciIsImNsb3NlIiwibWluaW1pemUiLCJjcmVhdGVWaWV3RXZlbnRBcmd1bWVudHMiLCJfX1R5cGUiLCJudW1iZXIiLCJib29sIiwic3RyaW5nIiwidG9TdHJpbmciLCJzZW5kVmlld0V2ZW50IiwidHlwZSIsInJlc3RPcHRpb25zIiwiaGFuZGxlVmlld0V2ZW50IiwiYXJndW1lbnRzIiwic3RhcnQiLCJpc01vdXNlRXZlbnQiLCJub29wIiwiZW1wdHlGdW5jdGlvbiIsImlkZW50aXR5IiwiYSIsImNvbnN0VHJ1ZSIsImxvZyIsIk1lZGlhU2l6ZSIsInVzZU1lZGlhIiwiYWRhcHRpdmVTdWZmaXhTZXF1ZW5jZSIsImlzQWRhcHRpdmVTdWZmaXgiLCJpc0FkYXB0aXZlUHJvcE5hbWUiLCJhdCIsIm1lZGlhU2l6ZVNlcXVlbmNlIiwiRXh0cmFMYXJnZSIsIkxhcmdlIiwiTWVkaXVtIiwiU21hbGwiLCJFeHRyYVNtYWxsIiwiaGFzRGVmaW5lZEFkYXB0aXZlUHJvcHMiLCJwcm9wTmFtZSIsInByb3BzIiwic29tZSIsInN1ZmZpeCIsIm5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMiLCJtZWRpYVNpemUiLCJvdXRwdXQiLCJiYXNlUHJvcE5hbWUiLCJzbGljZSIsImpvaW4iLCJtZWRpYVNpemVJbmRleCIsImluZGV4T2YiLCJyZWxldmFudEFkYXB0aXZlU3VmZml4ZXMiLCJyZWxldmFudFByb3BlcnR5TmFtZXMiLCJyZXNvbHZlZFByb3BOYW1lIiwiZmluZCIsInJlc29sdmVkUHJvcFZhbHVlIiwiZ2V0QWRhcHRpdmVDb21wb25lbnQiLCJDb21wb25lbnQiLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZWRQcm9wcyIsIkFkYXB0aXZlQ29tcG9uZW50IiwiaGFzQWRhcHRpdmVQcm9wcyIsImdldERyYWZ0ZWRBZGFwdGl2ZVByb3BzIiwiZHJhZnRQcm9wcyIsImYiLCJjYWxsZWRSZWYiLCJNZWRpYVdpZHRoIiwiTWVkaWFIZWlnaHQiLCJjb252ZXJ0VG9NZWRpYVNpemUiLCJtZWRpYUNvbnRleHQiLCJjb252ZXJ0VG9NZWRpYVdpZHRoIiwiY29udmVydFRvTWVkaWFIZWlnaHQiLCJtZWRpYVdpZHRoIiwibWVkaWFIZWlnaHQiLCJyZW1TY3JlZW5XaWR0aCIsInJlbVNjcmVlbkhlaWdodCIsInVzZVVubW91bnQiLCJOT19SQUZfSUQiLCJyYWZJZFJlZiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXIiLCJpc1J1bm5pbmciLCJzdHIiLCJtYXBwaW5nIiwicmVwbGFjZSIsIm1hdGNoIiwiU3RyaW5nIiwiZm9ybWF0UHJpbnRmIiwicGFkIiwic25ha2VUb0NhbWVsIiwidG9VcHBlckNhc2UiLCJub3JtYWxpemVSZXNvdXJjZSIsInVwQ2FzZUZpcnN0Q2hhciIsImNvbnZlcnROYnNwIiwiY29udmVydFp3bmJzcCIsImFkZFNlcGFyYXRvclRvUmlnaHQiLCJpdGVtIiwiaW5kZXgiLCJsYXN0IiwicG9wIiwiYWRkU2VwYXJhdG9yVG9MZWZ0Iiwic3BsaXRBbmRGb3JtYXQiLCJzdHJpbmdUb1NwbGl0Iiwic2VwYXJhdG9yIiwic3BsaXRFdXJvcGVhbiIsInNwbGl0UmVzdWx0Iiwic3BsaXRSZWdleCIsInN0cmluZ1dpdGhOYnNwIiwid29yZCIsInNwbGl0Q2hpbmVzZSIsImxhdGluSW5qZWN0aW9ucyIsImJyYWNrZXRzQW5kUXVvdGVzIiwicHVuY3R1YXRpb25NYXJrcyIsIm5laWdoYm9yaW5nSGllcm9nbHlwaHMiLCJtYWluUmVnZXgiLCJSZWdFeHAiLCJzb3VyY2UiLCJzdHJpbmdzVG9TcGxpdCIsIkNISU5FU0VfTEFOR1VBR0VfQ09ERVMiLCJzcGxpdFdvcmRzIiwibGFuZ3VhZ2UiLCJSIiwic3RyaW5ncyIsInNldHRpbmdzIiwiTEFOR1VBR0VfQ09ERSIsInRvTG93ZXJDYXNlIiwic3ViU3RyaW5nIiwiUmVhY3RET00iLCJBcHAiLCJNb2RlbFByb3ZpZGVyIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJiZyIsIm1ldGFsIiwid2FybmluZ0ljb24iLCJhcm1vcnlfc2hvcCIsInNob3BCdXlWaWV3IiwidG9vbHRpcCIsImJ1eU5vdEF2YWlsYWJsZSIsImNvbXB1dGVzIiwidXNlTW9kZWwiXSwic291cmNlUm9vdCI6IiJ9

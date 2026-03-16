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
                }; // TODO: добавить зависимость от масштабирования x1 и x2, как минимум проблема проявляется при просетывании медиа-запросов в MediaWrapperInner

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

        /***/ './src/lib/likeArray/coherentArraysToArrays.ts':
            /*!*****************************************************!*\
  !*** ./src/lib/likeArray/coherentArraysToArrays.ts ***!
  \*****************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ coherentArraysToArrays: () => /* binding */ coherentArraysToArrays,
                    /* harmony export */ simpleTransformCoherentArrayToArray: () =>
                        /* binding */ simpleTransformCoherentArrayToArray,
                    /* harmony export */
                });
                /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./index */ './src/lib/likeArray/index.ts',
                );

                /**
                 * Transforms all **`CoherentArrayProxy`** types to standard **`Array`** types.
                 *
                 * This transformation is useful when you need to pass a value obtained from a model
                 * and transformed with **`likeArray.map`** as props in component (need to use prop: **`CoherentArraysProxyToArrays<Type>`**).
                 *
                 * ### How it works:
                 * - If the type is `CoherentArrayProxy<U>`, it recursively transforms it into `Array<U>`.
                 * - Functions (`Function`) remain unchanged.
                 * - For objects, it recursively applies the transformation to all properties.
                 * - For all other types, the original type is preserved.
                 *
                 * @template T The type to be transformed.
                 * @returns The transformed type where all `CoherentArrayProxy` types are replaced with `Array`.
                 */

                // @ts-ignore: for unknown return type
                const coherentArraysToArraysFunction = (inputValue) => {
                    if (inputValue !== null && typeof inputValue === 'object') {
                        // @ts-ignore: to ignore input value can be null, because higher we have checked
                        if (inputValue.constructor.name === 'CoherentArrayProxy') {
                            // @ts-ignore: to ignore input value can be null, because higher we have checked
                            return _index__WEBPACK_IMPORTED_MODULE_0__.likeArray.map(inputValue, (item) =>
                                typeof item === 'object' ? coherentArraysToArraysFunction(item) : item,
                            );
                        } else if (Array.isArray(inputValue)) {
                            return inputValue.map((item) =>
                                typeof item === 'object' ? coherentArraysToArraysFunction(item) : item,
                            );
                        }

                        return Object.fromEntries(
                            // @ts-ignore: to ignore input value can be null, because higher we have checked
                            Object.entries(inputValue).map(([key, value]) => {
                                return [key, typeof value === 'object' ? coherentArraysToArraysFunction(value) : value];
                            }),
                        );
                    }

                    return inputValue;
                };
                /**
                 * Recursively transforms all instances of **`CoherentArrayProxy`** within a value into standard **`Arrays`**
                 * and all objects copied to avoid accessing to destroyed object.
                 *
                 *
                 * ### How it works:
                 * - If the `inputValue` is a **`CoherentArrayProxy`**, it is converted to an **`Array`** using **`likeArray.map`**.
                 * - If the `inputValue` is an **`array`**, its elements are recursively processed.
                 * - If the `inputValue` is an **`object`**, all key-value pairs are **recursively** processed.
                 * - Non-object values are returned as-is.
                 *
                 * @returns The transformed value with all `CoherentArrayProxy` instances replaced by standard arrays
                 * and all objects copied to avoid accessing to destroyed object.
                 *
                 * @example
                 * const getStages = computedFn(
                 *   () => coherentArraysToArrays<CoherentArrayProxy<ChapterModel>>(model.stages.get()),
                 *   {
                 *     equals: constFalse,
                 *   },
                 * );
                 */

                const coherentArraysToArrays = (inputValue) => {
                    return coherentArraysToArraysFunction(inputValue);
                };
                /**
                 * Transforms **`CoherentArrayProxy`** within a value into standard **`Arrays`**
                 * and all objects inside copied to avoid accessing to destroyed object.
                 *
                 * @returns Standard Array and all objects inside copied to avoid accessing to destroyed object.
                 *
                 * @example
                 * const getNodes = computedFn(() => simpleTransformCoherentArrayToArray<NodeTechTreeModel>(model.nodes.get()),{
                 *       equals: constFalse,
                 * });
                 */

                const simpleTransformCoherentArrayToArray = (inputValue) => {
                    return _index__WEBPACK_IMPORTED_MODULE_0__.likeArray.map(inputValue || [], (item) => {
                        return item !== null && typeof item === 'object' ? Object.assign({}, item) : item;
                    });
                };

                /***/
            },

        /***/ './src/lib/likeArray/index.ts':
            /*!************************************!*\
  !*** ./src/lib/likeArray/index.ts ***!
  \************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ coherentArraysToArrays: () =>
                        /* reexport safe */ _coherentArraysToArrays__WEBPACK_IMPORTED_MODULE_1__.coherentArraysToArrays,
                    /* harmony export */ likeArray: () =>
                        /* reexport module object */ _likeArray__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */ simpleTransformCoherentArrayToArray: () =>
                        /* reexport safe */ _coherentArraysToArrays__WEBPACK_IMPORTED_MODULE_1__.simpleTransformCoherentArrayToArray,
                    /* harmony export */
                });
                /* harmony import */ var _likeArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./likeArray */ './src/lib/likeArray/likeArray.ts',
                );
                /* harmony import */ var _coherentArraysToArrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./coherentArraysToArrays */ './src/lib/likeArray/coherentArraysToArrays.ts',
                );

                /***/
            },

        /***/ './src/lib/likeArray/likeArray.ts':
            /*!****************************************!*\
  !*** ./src/lib/likeArray/likeArray.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ contains: () => /* binding */ contains,
                    /* harmony export */ every: () => /* binding */ every,
                    /* harmony export */ filter: () => /* binding */ filter,
                    /* harmony export */ filterMap: () => /* binding */ filterMap,
                    /* harmony export */ find: () => /* binding */ find,
                    /* harmony export */ findIndex: () => /* binding */ findIndex,
                    /* harmony export */ findIndexLast: () => /* binding */ findIndexLast,
                    /* harmony export */ findLast: () => /* binding */ findLast,
                    /* harmony export */ get: () => /* binding */ get,
                    /* harmony export */ includes: () => /* binding */ includes,
                    /* harmony export */ join: () => /* binding */ join,
                    /* harmony export */ lastElement: () => /* binding */ lastElement,
                    /* harmony export */ lastIndex: () => /* binding */ lastIndex,
                    /* harmony export */ lastIndexZero: () => /* binding */ lastIndexZero,
                    /* harmony export */ map: () => /* binding */ map,
                    /* harmony export */ mapExists: () => /* binding */ mapExists,
                    /* harmony export */ pop: () => /* binding */ pop,
                    /* harmony export */ push: () => /* binding */ push,
                    /* harmony export */ reduce: () => /* binding */ reduce,
                    /* harmony export */ set: () => /* binding */ set,
                    /* harmony export */ slice: () => /* binding */ slice,
                    /* harmony export */ some: () => /* binding */ some,
                    /* harmony export */ splice: () => /* binding */ splice,
                    /* harmony export */ tail: () => /* binding */ tail,
                    /* harmony export */ unsafeGet: () => /* binding */ unsafeGet,
                    /* harmony export */ unwrapItem: () => /* binding */ unwrapItem,
                    /* harmony export */
                });
                /* harmony import */ var lib_nullable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/nullable */ './src/lib/nullable.ts',
                );
                /* eslint-disable @typescript-eslint/no-unused-vars */

                /* eslint-disable @typescript-eslint/no-explicit-any */

                /** Read value from LikeArray by index */
                function get(array, index) {
                    var _array$index;

                    if (index >= array.length) {
                        return undefined;
                    }

                    if (Array.isArray(array)) {
                        return array[index];
                    }

                    return (_array$index = array[index]) == null ? void 0 : _array$index.value;
                }
                const unsafeGet = get;
                /** Returns item.value if it's coherent array item or just item */

                function unwrapItem(item) {
                    var _constructor;

                    if (
                        item &&
                        'value' in item &&
                        (_constructor = item.constructor) != null &&
                        _constructor.name.includes('ArrayItem')
                    ) {
                        return item == null ? void 0 : item.value;
                    }

                    return item;
                }
                /**
                 * Works like default method of array but element will be item.value or item
                 * @see {@link Array.prototype.map}
                 */

                function map(array, fn) {
                    if (Array.isArray(array)) {
                        return array.map(fn);
                    }

                    return array.map((element, index, arr) => fn(element == null ? void 0 : element.value, index, arr));
                }
                /**
                 * Works like default method 'every' of array, but element will be item.value or item
                 * @see {@link Array.prototype.every}
                 */

                function every(array, fn) {
                    if (Array.isArray(array)) {
                        return array.every(fn);
                    }

                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);

                        if (!fn(element, index, array)) {
                            return false;
                        }
                    }

                    return true;
                }
                /**
                 * Works like default method 'some' of array, but element will be item.value or item
                 * @see {@link Array.prototype.some}
                 */

                function some(array, fn) {
                    if (Array.isArray(array)) {
                        return array.some(fn);
                    }

                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);

                        if (fn(element, index, array)) {
                            return true;
                        }
                    }

                    return false;
                }
                /**
                 * Works like default method of array but element will be item.value or item
                 * @see {@link Array.prototype.filter}
                 */

                function filter(array, predicate) {
                    if (Array.isArray(array)) {
                        return array.filter(predicate);
                    }

                    const result = [];

                    for (let index = 0; index < array.length; index++) {
                        var _array$index2;

                        const element = (_array$index2 = array[index]) == null ? void 0 : _array$index2.value;

                        if (predicate(element, index, array)) {
                            result.push(element);
                        }
                    }

                    return result;
                }
                /**
                 * Works like default method of array
                 *
                 * **But will throw error if you try to change {@link CoherentArrayProxy<T>}**
                 * @see {@link Array.prototype.push}
                 */

                function push(array, item) {
                    if (Array.isArray(array)) {
                        array.push(item);
                        return array;
                    }

                    throw new Error(`Mutate CoherentArrayProxy is not available`);
                }
                /**
                 * Just set item by index
                 *
                 * **But will throw error if you try to change {@link CoherentArrayProxy<T>}**
                 * ```ts
                 * likeArray(array, 0, item)
                 * // equals to:
                 * array[0] = item
                 * ```
                 * @see {@link Array.prototype.push}
                 */

                function set(array, index, item) {
                    if (Array.isArray(array)) {
                        array[index] = item;
                        return array;
                    }

                    throw new Error(`Mutate CoherentArrayProxy is not available`);
                }
                /**
                 * Works like default method of array. But has second parameter for remove index and get the value.
                 *
                 * **Will throw error if you try to change {@link CoherentArrayProxy<T>}**
                 * @see {@link Array.prototype.pop}
                 */

                function pop(array, index = array.length - 1) {
                    if (Array.isArray(array)) {
                        return array.splice(index, 1)[0];
                    }

                    throw new Error(`Mutate CoherentArrayProxy is not available`);
                }
                /**
                 * Works like includes but find by function
                 * ```ts
                 * const array = [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }]
                 * likeArray.contains(array, ({ name }) => name === 'foo')) // true
                 * likeArray.contains(array, ({ name }) => name === 'foo-bar-baz')) // false
                 * ```
                 */

                function contains(array, item, predicate) {
                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);

                        if (predicate && predicate(element)) {
                            return true;
                        } else if (item === element) {
                            return true;
                        }
                    }

                    return false;
                }
                /** Returns last index of array or -1 if it's empty */

                function lastIndex(array) {
                    return array.length - 1;
                }
                /** Works like {@link lastIndex} but returns 0 if array is empty */

                function lastIndexZero(array) {
                    return Math.max(0, array.length - 1);
                }
                /** Returns last element of array or `undefined` it's empty */

                function lastElement(array) {
                    if (array.length === 0) {
                        return undefined;
                    }

                    return get(array, array.length - 1);
                }
                /**
                 * Returns iterator from range. Start index cannot be less than `0` (it will be clamped).
                 * Also end index cannot be more than array length (it will be clamped).
                 * Last index **inclusive**.
                 * ```ts
                 * const items = [1,2,3,4,5,6,7,8,9]
                 * const sliceItems = [...likeArray.slice(items, 0, 2)] // [1,2,3]
                 * ```
                 */

                function slice(array, indexFrom = 0, indexTo = array.length - 1) {
                    return {
                        [Symbol.iterator]() {
                            let nextIndex = Math.max(indexFrom, 0);
                            const endIndex = Math.min(indexTo, lastIndexZero(array));
                            return {
                                next: function next() {
                                    if (nextIndex > endIndex) {
                                        return {
                                            done: true,
                                            value: null,
                                        };
                                    }

                                    const item = array[nextIndex++];

                                    if (item) {
                                        return {
                                            value: unwrapItem(item),
                                            done: false,
                                        };
                                    } else {
                                        return {
                                            done: true,
                                            value: null,
                                        };
                                    }
                                },
                            };
                        },
                    };
                }
                /**
                 * Returns slice of last elements by count parameter
                 * ```ts
                 * const items = [1,2,3,4,5,6,7,8,9]
                 * const lastTheeItems = [...likeArray.tail(items, 3)] // [7,8,9]
                 * ```
                 */

                function tail(array, count) {
                    return slice(array, Math.max(0, array.length - 1 - count), lastIndex(array));
                }
                /**
                 * Works like default method of array.
                 *
                 * **Will throw error if you try to change {@link CoherentArrayProxy<T>}**
                 * @see {@link Array.prototype.splice}
                 */

                function splice(array, start, deleteCount) {
                    if (Array.isArray(array)) {
                        return array.splice(start, deleteCount);
                    }

                    throw new Error(`Mutate CoherentArrayProxy is not available`);
                }
                /**
                 * Works like {@link Array.prototype.find} method of array, but find from tail.
                 * If it's {@link CoherentArrayProxy<T>} then `item.value` will pass in predicate.
                 */

                function findLast(array, predicate) {
                    for (let index = array.length - 1; index >= 0; index--) {
                        const element = unwrapItem(array[index]);

                        if (predicate(element, index, array)) {
                            return element;
                        }
                    }

                    return undefined;
                }
                /**
                 * Works like {@link Array.prototype.find} method of array.
                 * If it's {@link CoherentArrayProxy<T>} then `item.value` will pass in predicate.
                 */

                function find(array, predicate) {
                    for (let index = 0; index < array.length; index++) {
                        const element = unwrapItem(array[index]);

                        if (predicate(element, index, array)) {
                            return element;
                        }
                    }

                    return undefined;
                }
                /**
                 * Works like {@link Array.prototype.includes} method of array.
                 */

                function includes(array, item) {
                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);

                        if (element === item) {
                            return true;
                        }
                    }

                    return false;
                }
                /**
                 * Using like `array.filter().map()` but for {@link LikeArray<T>} and works in one cycle.
                 * ```ts
                 * const array = [1, 2, 3, 4, 5]
                 * likeArray.filterMap(array, (n) => n % 2 === 0, (n) => n * n) // [4, 16]
                 * ```
                 */

                function filterMap(array, predicate, fn) {
                    const result = [];

                    for (let index = 0; index < array.length; index++) {
                        const item = unsafeGet(array, index);

                        if (predicate(item, index, array)) {
                            result.push(fn(item, index, array));
                        }
                    }

                    return result;
                }
                /**
                 * See also {@link filterMap}. Works like filter non-empty elements and apply function.
                 * Creating new array.
                 * ```ts
                 * const array = [null, 0, undefined, 1]
                 * likeArray.mapExists(array, (n) => n * 2) // [0, 2]
                 * ```
                 */

                function mapExists(array, fn) {
                    return filterMap(array, lib_nullable__WEBPACK_IMPORTED_MODULE_0__.isNonNullable, fn);
                }
                /**
                 * Works like default method of array.
                 * @see {@link Array.prototype.findIndex}
                 */

                function findIndex(array, predicate) {
                    for (let index = 0; index < array.length; index++) {
                        const item = unsafeGet(array, index);

                        if (predicate(item, index, array)) {
                            return index;
                        }
                    }

                    return undefined;
                }
                /**
                 * Works like default method of array `findIndex` but from tail.
                 * @see {@link Array.prototype.findIndex}
                 */

                function findIndexLast(array, predicate) {
                    for (let index = array.length - 1; index >= 0; index--) {
                        const item = unsafeGet(array, index);

                        if (predicate(item, index, array)) {
                            return index;
                        }
                    }

                    return undefined;
                }
                /**
                 * Works like default method of array `join` except array-like objects (for LikeArray type only).
                 * @see {@link Array.prototype.join}
                 *
                 * Implementation according to:
                 * {@link https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.join}
                 */

                function join(array, separator = ',') {
                    let result = '';

                    for (let index = 0; index < array.length; index++) {
                        if (index > 0) {
                            result += separator;
                        }

                        const element = unsafeGet(array, index);
                        const next = element === undefined || element === null ? '' : String(element);
                        result += next;
                    }

                    return result;
                }
                /**
                 * Works like {@link Array.prototype.reduce} method of array.
                 * ```ts
                 * const array = [1, 2, 3, 4]
                 * likeArray.reduce(array, (previous, current) => previous += current, 0) // 10
                 * ```
                 */

                function reduce(array, predicate, initialValue) {
                    if (Array.isArray(array)) {
                        return array.reduce(predicate, initialValue);
                    }

                    let result = initialValue;

                    for (let index = 0; index < array.length; index++) {
                        const element = unsafeGet(array, index);
                        result = predicate(result, element, index, array);
                    }

                    return result;
                }

                /***/
            },

        /***/ './src/lib/nullable.ts':
            /*!*****************************!*\
  !*** ./src/lib/nullable.ts ***!
  \*****************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ isNonNullable: () => /* binding */ isNonNullable,
                    /* harmony export */ isNullable: () => /* binding */ isNullable,
                    /* harmony export */
                });
                function isNullable(item) {
                    return item === null || item === undefined;
                }
                function isNonNullable(item) {
                    return isNullable(item) === false;
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

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/PersonalMissionsOldCampaignTooltipView.tsx':
            /*!********************************************************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/PersonalMissionsOldCampaignTooltipView.tsx ***!
  \********************************************************************************************************************************/
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
                    /*! ./components/App */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.tsx',
                );
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./model */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/model.ts',
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

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.tsx':
            /*!********************************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.tsx ***!
  \********************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ App: () => /* binding */ App,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var components_Text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! components/Text/Text */ './src/components/Text/Text.tsx',
                );
                /* harmony import */ var gui_impl_gen_view_models_views_lobby_pm_announce_tooltips_personal_missions_old_campaign_tooltip_rewards_model__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! gui/impl/gen/view_models/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_rewards_model */ './typings/impl/gen/view_models/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_rewards_model.ts',
                    );
                /* harmony import */ var gui_impl_gen_view_models_views_lobby_pm_announce_tooltips_personal_missions_old_campaign_tooltip_view_model__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! gui/impl/gen/view_models/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_view_model */ './typings/impl/gen/view_models/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_view_model.ts',
                    );
                /* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! mobx-react-lite */ './node_modules/mobx-react-lite/es/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ../helpers */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/helpers.ts',
                );
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ../model */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/model.ts',
                );
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! ../types */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/types.ts',
                );
                /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! ./App.css */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.css',
                );

                const MAX_REWARDS_IN_ROW = 4;
                const FIRST_CAMPAIGN_OPERATIONS = 4;
                const TEXTS = R.strings.pm_announce.oldTooltip;
                const App = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_4__.observer)(() => {
                    const _useModel = (0, _model__WEBPACK_IMPORTED_MODULE_7__.useModel)(),
                        model = _useModel.model;

                    const _model$root$get = model.root.get(),
                        missionStatus = _model$root$get.missionStatus;

                    const operations = model.computes.getOperations();
                    const rewards = model.computes.getRewards();
                    const isMissionActive =
                        missionStatus ===
                        gui_impl_gen_view_models_views_lobby_pm_announce_tooltips_personal_missions_old_campaign_tooltip_view_model__WEBPACK_IMPORTED_MODULE_3__
                            .MissionStatus.Active;
                    const isMissionCompletedPerfect =
                        missionStatus ===
                        gui_impl_gen_view_models_views_lobby_pm_announce_tooltips_personal_missions_old_campaign_tooltip_view_model__WEBPACK_IMPORTED_MODULE_3__
                            .MissionStatus.CompletedPerfect;
                    const isDisabled =
                        missionStatus ===
                        gui_impl_gen_view_models_views_lobby_pm_announce_tooltips_personal_missions_old_campaign_tooltip_view_model__WEBPACK_IMPORTED_MODULE_3__
                            .MissionStatus.Disabled;
                    const footerLabelText = (0, react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
                        if (isMissionActive) {
                            return TEXTS.complete();
                        }

                        return isMissionCompletedPerfect ? TEXTS.completedPerfect.header() : TEXTS.completed.header();
                    }, [isMissionCompletedPerfect, isMissionActive]);

                    if (isDisabled) {
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                            'div',
                            {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].disabled,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].disabledHeader,
                                    text: TEXTS.header(),
                                },
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].disabledBody,
                                    text: TEXTS.disabled.subtitle(),
                                },
                            ),
                        );
                    }

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                        'div',
                        {
                            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].base,
                                _App_css__WEBPACK_IMPORTED_MODULE_9__['default'][`base__${missionStatus}`],
                            ),
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement('div', {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].bg,
                        }),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                            'div',
                            {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].content,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].header,
                                    text: TEXTS.header(),
                                },
                            ),
                            !isMissionCompletedPerfect &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                    react__WEBPACK_IMPORTED_MODULE_5___default().Fragment,
                                    null,
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                        components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                        {
                                            className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].subTitle,
                                            text: isMissionActive ? TEXTS.subtitle() : TEXTS.subtitlePerfect(),
                                        },
                                    ),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                        'div',
                                        {
                                            className:
                                                _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].operationsWrapper,
                                        },
                                        operations.map((operation, index) => {
                                            const operationStyle = (0,
                                            _helpers__WEBPACK_IMPORTED_MODULE_6__.checkIsCompleted)(
                                                operation.completed,
                                                operation.all,
                                            );
                                            const isActive =
                                                operationStyle ===
                                                _types__WEBPACK_IMPORTED_MODULE_8__.OperationType.Active;
                                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                react__WEBPACK_IMPORTED_MODULE_5___default().Fragment,
                                                {
                                                    key: operation.name,
                                                },
                                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                    'div',
                                                    {
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                            _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].operation,
                                                            index === operations.length - 1 &&
                                                                _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                    .operation__last,
                                                        ),
                                                    },
                                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                        'div',
                                                        {
                                                            className:
                                                                _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].dot,
                                                        },
                                                    ),
                                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                        components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                                        {
                                                            className:
                                                                classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .operationText,
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .operationText__name,
                                                                ),
                                                            text: TEXTS.operation(),
                                                            format: {
                                                                binding: {
                                                                    title: operation.name,
                                                                },
                                                            },
                                                        },
                                                    ),
                                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                        components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                                        {
                                                            className:
                                                                classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .operationText,
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .operationText__done,
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default'][
                                                                        `operationText__${operationStyle}`
                                                                    ],
                                                                ),
                                                            text: String(operation.completed),
                                                        },
                                                    ),
                                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                        components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                                        {
                                                            className:
                                                                classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .operationText,
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .operationText__divider,
                                                                    !isActive &&
                                                                        _App_css__WEBPACK_IMPORTED_MODULE_9__[
                                                                            'default'
                                                                        ][`operationText__${operationStyle}`],
                                                                ),
                                                            text: TEXTS.divider(),
                                                        },
                                                    ),
                                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                        components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                                        {
                                                            className:
                                                                classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .operationText,
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .all,
                                                                    !isActive &&
                                                                        _App_css__WEBPACK_IMPORTED_MODULE_9__[
                                                                            'default'
                                                                        ][`operationText__${operationStyle}`],
                                                                ),
                                                            text: String(operation.all),
                                                        },
                                                    ),
                                                ),
                                                index + 1 === FIRST_CAMPAIGN_OPERATIONS &&
                                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                        'div',
                                                        {
                                                            className:
                                                                classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .divider,
                                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                        .divider__operations,
                                                                ),
                                                        },
                                                    ),
                                            );
                                        }),
                                    ),
                                    isMissionActive
                                        ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                              'div',
                                              {
                                                  className:
                                                      _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].rewardsSection,
                                              },
                                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                  'div',
                                                  {
                                                      className:
                                                          _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].ribbon,
                                                  },
                                              ),
                                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                  components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                                  {
                                                      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                          _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].subTitle,
                                                          _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                              .subTitle__rewards,
                                                      ),
                                                      text: TEXTS.rewardTitle(),
                                                  },
                                              ),
                                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                  'div',
                                                  {
                                                      className:
                                                          _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                              .rewardsWrapper,
                                                  },
                                                  rewards.map((reward, index) => {
                                                      const isLastReward =
                                                          (index + 1) % MAX_REWARDS_IN_ROW === 0 ||
                                                          index + 1 === rewards.length;
                                                      return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                          'div',
                                                          {
                                                              key: reward.name,
                                                              className:
                                                                  classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                      _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                          .reward,
                                                                      _App_css__WEBPACK_IMPORTED_MODULE_9__['default'][
                                                                          `reward__${reward.status}`
                                                                      ],
                                                                      isLastReward &&
                                                                          _App_css__WEBPACK_IMPORTED_MODULE_9__[
                                                                              'default'
                                                                          ].reward__lastInRow,
                                                                  ),
                                                          },
                                                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                              'div',
                                                              {
                                                                  className:
                                                                      _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                          .rewardIcon,
                                                                  style: {
                                                                      backgroundImage: `url(${reward.icon})`,
                                                                  },
                                                              },
                                                          ),
                                                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                              'div',
                                                              {
                                                                  className:
                                                                      _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                          .rewardName,
                                                              },
                                                              reward.status !==
                                                                  gui_impl_gen_view_models_views_lobby_pm_announce_tooltips_personal_missions_old_campaign_tooltip_rewards_model__WEBPACK_IMPORTED_MODULE_2__
                                                                      .RewardStatus.Available &&
                                                                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                                      'div',
                                                                      {
                                                                          className:
                                                                              classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                                  _App_css__WEBPACK_IMPORTED_MODULE_9__[
                                                                                      'default'
                                                                                  ].labelIcon,
                                                                                  _App_css__WEBPACK_IMPORTED_MODULE_9__[
                                                                                      'default'
                                                                                  ][`labelIcon__${reward.status}`],
                                                                              ),
                                                                      },
                                                                  ),
                                                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                                  components_Text_Text__WEBPACK_IMPORTED_MODULE_1__[
                                                                      'default'
                                                                  ],
                                                                  {
                                                                      text: reward.name,
                                                                      className:
                                                                          classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                                              _App_css__WEBPACK_IMPORTED_MODULE_9__[
                                                                                  'default'
                                                                              ].rewardText,
                                                                          ),
                                                                  },
                                                              ),
                                                          ),
                                                      );
                                                  }),
                                              ),
                                          )
                                        : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                              'div',
                                              {
                                                  className:
                                                      _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].rewardCollected,
                                              },
                                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                  'div',
                                                  {
                                                      className:
                                                          _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                              .rewardCollectedBg,
                                                  },
                                              ),
                                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                  'div',
                                                  {
                                                      className:
                                                          _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                              .rewardCollectedLabel,
                                                  },
                                                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                      'div',
                                                      {
                                                          className:
                                                              _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                  .rewardCollectedLabelIcon,
                                                      },
                                                  ),
                                                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                                      components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                                      {
                                                          className:
                                                              _App_css__WEBPACK_IMPORTED_MODULE_9__['default']
                                                                  .rewardCollectedLabelText,
                                                          text: TEXTS.collectVehicle(),
                                                      },
                                                  ),
                                              ),
                                          ),
                                ),
                            missionStatus !==
                                gui_impl_gen_view_models_views_lobby_pm_announce_tooltips_personal_missions_old_campaign_tooltip_view_model__WEBPACK_IMPORTED_MODULE_3__
                                    .MissionStatus.Completed &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement('div', {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].divider,
                                }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].footer,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                    'div',
                                    {
                                        className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].footerLabel,
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement('div', {
                                        className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].footerLabelIcon,
                                    }),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                        components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                        {
                                            text: footerLabelText,
                                            className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].footerLabelText,
                                        },
                                    ),
                                ),
                                !isMissionActive &&
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                        'div',
                                        {
                                            className:
                                                _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].footerBottomWrapper,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_5___default().createElement(
                                            components_Text_Text__WEBPACK_IMPORTED_MODULE_1__['default'],
                                            {
                                                className:
                                                    _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].footerBottomText,
                                                text: isMissionCompletedPerfect
                                                    ? TEXTS.completedPerfect.body()
                                                    : TEXTS.completed.body(),
                                            },
                                        ),
                                    ),
                            ),
                        ),
                    );
                });

                /***/
            },

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/helpers.ts':
            /*!************************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/helpers.ts ***!
  \************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ checkIsCompleted: () => /* binding */ checkIsCompleted,
                    /* harmony export */
                });
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./types */ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/types.ts',
                );

                const checkIsCompleted = (completed, all) => {
                    if (!completed) {
                        return _types__WEBPACK_IMPORTED_MODULE_0__.OperationType.Empty;
                    }

                    return completed < all
                        ? _types__WEBPACK_IMPORTED_MODULE_0__.OperationType.Active
                        : _types__WEBPACK_IMPORTED_MODULE_0__.OperationType.Completed;
                };

                /***/
            },

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/model.ts':
            /*!**********************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/model.ts ***!
  \**********************************************************************************************/
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
                /* harmony import */ var lib_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/function */ './src/lib/function.ts',
                );
                /* harmony import */ var lib_likeArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/likeArray */ './src/lib/likeArray/index.ts',
                );
                /* harmony import */ var mobx_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! mobx-utils */ './node_modules/mobx-utils/mobx-utils.module.js',
                );

                const _initializeModelWithC = (0,
                    lib_data_layer__WEBPACK_IMPORTED_MODULE_0__.initializeModelWithContext)()(({ observableModel }) => {
                        const model = {
                            root: observableModel.object(),
                            operations: observableModel.array('operations'),
                            rewards: observableModel.array('rewards'),
                        };
                        const getOperations = (0, mobx_utils__WEBPACK_IMPORTED_MODULE_3__.computedFn)(
                            () =>
                                lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                    model.operations.get(),
                                    (operation) => Object.assign({}, operation),
                                ),
                            {
                                equals: lib_function__WEBPACK_IMPORTED_MODULE_1__.constFalse,
                            },
                        );
                        const getRewards = (0, mobx_utils__WEBPACK_IMPORTED_MODULE_3__.computedFn)(
                            () =>
                                lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                    model.rewards.get(),
                                    (reward) => Object.assign({}, reward),
                                ),
                            {
                                equals: lib_function__WEBPACK_IMPORTED_MODULE_1__.constFalse,
                            },
                        );
                        return Object.assign({}, model, {
                            computes: {
                                getOperations,
                                getRewards,
                            },
                        });
                    }, lib_function__WEBPACK_IMPORTED_MODULE_1__.noop),
                    ModelProvider = _initializeModelWithC[0],
                    useModel = _initializeModelWithC[1];

                /***/
            },

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/types.ts':
            /*!**********************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/types.ts ***!
  \**********************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ OperationType: () => /* binding */ OperationType,
                    /* harmony export */
                });
                const OperationType = {
                    Completed: 'completed',
                    Active: 'active',
                    Empty: 'empty',
                };

                /***/
            },

        /***/ './typings/impl/gen/view_models/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_rewards_model.ts':
            /*!*******************************************************************************************************************************!*\
  !*** ./typings/impl/gen/view_models/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_rewards_model.ts ***!
  \*******************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ RewardStatus: () => /* binding */ RewardStatus,
                    /* harmony export */
                });
                /**
                 * This file was generated using wgpygen
                 *   template: configs/templates/view_model.ts.jinja2
                 *   source: configs/definitions/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_view_model.yaml
                 * Please, don't edit this file manually.
                 */
                let RewardStatus;
                /**
                 *  Generated view model.
                 */

                (function (RewardStatus) {
                    RewardStatus['Completed'] = 'completed';
                    RewardStatus['Available'] = 'available';
                    RewardStatus['Locked'] = 'locked';
                })(RewardStatus || (RewardStatus = {}));

                /***/
            },

        /***/ './typings/impl/gen/view_models/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_view_model.ts':
            /*!****************************************************************************************************************************!*\
  !*** ./typings/impl/gen/view_models/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_view_model.ts ***!
  \****************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MissionStatus: () => /* binding */ MissionStatus,
                    /* harmony export */
                });
                /**
                 * This file was generated using wgpygen
                 *   template: configs/templates/view_model.ts.jinja2
                 *   source: configs/definitions/views/lobby/pm_announce/tooltips/personal_missions_old_campaign_tooltip_view_model.yaml
                 * Please, don't edit this file manually.
                 */
                let MissionStatus;
                /**
                 *  Generated view model.
                 */

                (function (MissionStatus) {
                    MissionStatus['Active'] = 'active';
                    MissionStatus['Completed'] = 'completed';
                    MissionStatus['CompletedPerfect'] = 'completedPerfect';
                    MissionStatus['Disabled'] = 'disabled';
                })(MissionStatus || (MissionStatus = {}));

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

        /***/ './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.css':
            /*!********************************************************************************************************!*\
  !*** ./src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/components/App.css ***!
  \********************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'App_base_89',
                    base__completed: 'App_base__completed_14',
                    base__completedPerfect: 'App_base__completedPerfect_ee',
                    bg: 'App_bg_c2',
                    content: 'App_content_85',
                    header: 'App_header_bf',
                    subTitle: 'App_subTitle_b0',
                    subTitle__rewards: 'App_subTitle__rewards_dc',
                    operationsWrapper: 'App_operationsWrapper_51',
                    operation: 'App_operation_8b',
                    operation__last: 'App_operation__last_74',
                    operationText: 'App_operationText_b9',
                    operationText__done: 'App_operationText__done_fd',
                    operationText__divider: 'App_operationText__divider_76',
                    operationText__name: 'App_operationText__name_d5',
                    operationText__completed: 'App_operationText__completed_68',
                    operationText__active: 'App_operationText__active_8b',
                    operationText__empty: 'App_operationText__empty_3c',
                    dot: 'App_dot_10',
                    rewardsSection: 'App_rewardsSection_2e',
                    rewardsWrapper: 'App_rewardsWrapper_81',
                    reward: 'App_reward_39',
                    reward__lastInRow: 'App_reward__lastInRow_6e',
                    reward__completed: 'App_reward__completed_98',
                    rewardIcon: 'App_rewardIcon_7c',
                    rewardName: 'App_rewardName_ff',
                    rewardText: 'App_rewardText_29',
                    ribbon: 'App_ribbon_af',
                    labelIcon: 'App_labelIcon_e2',
                    labelIcon__completed: 'App_labelIcon__completed_0a',
                    labelIcon__locked: 'App_labelIcon__locked_e4',
                    rewardCollected: 'App_rewardCollected_f2',
                    rewardCollectedBg: 'App_rewardCollectedBg_f0',
                    rewardCollectedLabel: 'App_rewardCollectedLabel_04',
                    rewardCollectedLabelIcon: 'App_rewardCollectedLabelIcon_d2',
                    rewardCollectedLabelText: 'App_rewardCollectedLabelText_b7',
                    divider: 'App_divider_34',
                    divider__operations: 'App_divider__operations_57',
                    footer: 'App_footer_ab',
                    footerLabel: 'App_footerLabel_d0',
                    footerLabelIcon: 'App_footerLabelIcon_15',
                    footerLabelText: 'App_footerLabelText_c0',
                    footerBottomWrapper: 'App_footerBottomWrapper_0a',
                    footerBottomText: 'App_footerBottomText_24',
                    disabled: 'App_disabled_4a',
                    disabledHeader: 'App_disabledHeader_90',
                    disabledBody: 'App_disabledBody_58',
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
            /******/ 'lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/PersonalMissionsOldCampaignTooltipView': 0,
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
    /******/ var __webpack_exports__ = __webpack_require__.O(undefined, ['lib/lobby/pm_announce/vendors'], () =>
        __webpack_require__(
            './src/views/lobby/pm_announce/tooltips/PersonalMissionsOldCampaignTooltipView/PersonalMissionsOldCampaignTooltipView.tsx',
        ),
    );
    /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlPLE1BQU1NLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlQLHdFQUFaLENBQXhCO0FBSVAsTUFBTVEsZ0JBQWdCLEdBQUc7QUFBRUMsRUFBQUEsRUFBRSxFQUFFTCx1REFBTjtBQUFxQk8sRUFBQUEsRUFBRSxFQUFFUCx1REFBekI7QUFBd0NTLEVBQUFBLEVBQUUsRUFBRVQsdURBQTVDO0FBQTJEVyxFQUFBQSxFQUFFLEVBQUVYLHVEQUFhWTtBQUE1RSxDQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHO0FBQUVSLEVBQUFBLEVBQUUsRUFBRUwsdURBQU47QUFBcUJPLEVBQUFBLEVBQUUsRUFBRVAsdURBQXpCO0FBQXdDUyxFQUFBQSxFQUFFLEVBQUVULHVEQUE1QztBQUEyRFcsRUFBQUEsRUFBRSxFQUFFWCx1REFBYWlCO0FBQTVFLENBQXpCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUc7QUFBRWIsRUFBQUEsRUFBRSxFQUFFTCx3REFBTjtBQUFzQk8sRUFBQUEsRUFBRSxFQUFFUCx3REFBMUI7QUFBMENTLEVBQUFBLEVBQUUsRUFBRVQsd0RBQTlDO0FBQThEVyxFQUFBQSxFQUFFLEVBQUVYLHdEQUFjc0I7QUFBaEYsQ0FBMUI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRztBQUFFbEIsRUFBQUEsRUFBRSxFQUFFTCx1REFBTjtBQUFxQk8sRUFBQUEsRUFBRSxFQUFFUCx1REFBekI7QUFBd0NTLEVBQUFBLEVBQUUsRUFBRVQsdURBQTVDO0FBQTJEVyxFQUFBQSxFQUFFLEVBQUVYLHVEQUFhMkI7QUFBNUUsQ0FBekI7QUFDQSxNQUFN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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvQm94L0JveC50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Gb3JtYXRUZXh0L0Zvcm1hdFRleHQudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9NZWRpYUNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVF1ZXJ5L01lZGlhUHJvdmlkZXIudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9NZWRpYVF1ZXJ5LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvZ2V0QnlIZWlnaHQudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvc3RhdGljLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS91dGlscy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwRGVjb3JhdG9yL1Rvb2x0aXBEZWNvcmF0b3IudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2dsb2JhbC1zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9nbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9zcGFjaW5nLmpzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9kYXRhLWxheWVyL2RhdGEtbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2RhdGEtbGF5ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvY2xpZW50L2V2ZW50cy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvY2hpbGRyZW4udHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L2NvbW1vbi50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvZXZlbnRzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvdmlldy9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvc2VuZEV2ZW50LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9jcy9hZGFwdGl2ZS9hZGFwdGl2ZS50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2hvb2tzL3VzZUNhbGxPbmNlLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9ob29rcy91c2VNZWRpYS50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlTW91bnRVbm1vdW50LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9ob29rcy91c2VTa2lwRnJhbWUudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2xpa2VBcnJheS9jb2hlcmVudEFycmF5c1RvQXJyYXlzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9saWtlQXJyYXkvbGlrZUFycmF5LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9udWxsYWJsZS50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvc3RyaW5nLXV0aWxzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL3ZpZXdzL2xvYmJ5L3BtX2Fubm91bmNlL3Rvb2x0aXBzL1BlcnNvbmFsTWlzc2lvbnNPbGRDYW1wYWlnblRvb2x0aXBWaWV3L1BlcnNvbmFsTWlzc2lvbnNPbGRDYW1wYWlnblRvb2x0aXBWaWV3LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy92aWV3cy9sb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9QZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlldy9jb21wb25lbnRzL0FwcC50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvdmlld3MvbG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcvaGVscGVycy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy92aWV3cy9sb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9QZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlldy9tb2RlbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy92aWV3cy9sb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9QZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlldy90eXBlcy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3R5cGluZ3MvaW1wbC9nZW4vdmlld19tb2RlbHMvdmlld3MvbG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvcGVyc29uYWxfbWlzc2lvbnNfb2xkX2NhbXBhaWduX3Rvb2x0aXBfcmV3YXJkc19tb2RlbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3R5cGluZ3MvaW1wbC9nZW4vdmlld19tb2RlbHMvdmlld3MvbG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvcGVyc29uYWxfbWlzc2lvbnNfb2xkX2NhbXBhaWduX3Rvb2x0aXBfdmlld19tb2RlbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0JveC9Cb3guY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvRm9ybWF0VGV4dC9Gb3JtYXRUZXh0LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwRGVjb3JhdG9yL1Rvb2x0aXBEZWNvcmF0b3IuY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL3ZpZXdzL2xvYmJ5L3BtX2Fubm91bmNlL3Rvb2x0aXBzL1BlcnNvbmFsTWlzc2lvbnNPbGRDYW1wYWlnblRvb2x0aXBWaWV3L2NvbXBvbmVudHMvQXBwLmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHNwYWNpbmcgZnJvbSAnZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvc3BhY2luZyc7XHJcbmltcG9ydCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXIsIHsgQWRhcHRpdmVQcm9wcyB9IGZyb20gJ2xpYi9ob2NzL2FkYXB0aXZlL2FkYXB0aXZlJztcclxuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQm94LmNzcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTdGFuZGFyZFNwYWNpbmdUeXBlID0ga2V5b2YgdHlwZW9mIHNwYWNpbmc7XHJcbmV4cG9ydCB0eXBlIFNwYWNpbmdUeXBlID0gU3RhbmRhcmRTcGFjaW5nVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI7XHJcbmV4cG9ydCBjb25zdCBzdGFuZGFyZE1hcmdpbnMgPSBPYmplY3Qua2V5cyhzcGFjaW5nKSBhcyBTdGFuZGFyZFNwYWNpbmdUeXBlW107XHJcblxyXG5leHBvcnQgdHlwZSBDdXN0b21Db21wb25lbnRSZXF1aXJlZFByb3BzID0geyBjbGFzc05hbWU/OiBzdHJpbmc7IHN0eWxlPzogQ1NTUHJvcGVydGllczsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9O1xyXG5cclxuY29uc3QgZGVmYXVsdFhsTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fWEwsIG1yOiBzdHlsZXMubXJfX1hMLCBtYjogc3R5bGVzLm1iX19YTCwgbWw6IHN0eWxlcy5tbF9fWEwgfTtcclxuY29uc3QgZGVmYXVsdExnTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fTEcsIG1yOiBzdHlsZXMubXJfX0xHLCBtYjogc3R5bGVzLm1iX19MRywgbWw6IHN0eWxlcy5tbF9fTEcgfTtcclxuY29uc3QgZGVmYXVsdE1kcE1hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX01EcCwgbXI6IHN0eWxlcy5tcl9fTURwLCBtYjogc3R5bGVzLm1iX19NRHAsIG1sOiBzdHlsZXMubWxfX01EcCB9O1xyXG5jb25zdCBkZWZhdWx0TWRNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19NRCwgbXI6IHN0eWxlcy5tcl9fTUQsIG1iOiBzdHlsZXMubWJfX01ELCBtbDogc3R5bGVzLm1sX19NRCB9O1xyXG5jb25zdCBkZWZhdWx0U21wTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fU01wLCBtcjogc3R5bGVzLm1yX19TTXAsIG1iOiBzdHlsZXMubWJfX1NNcCwgbWw6IHN0eWxlcy5tbF9fU01wIH07XHJcbmNvbnN0IGRlZmF1bHRTbU1hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX1NNLCBtcjogc3R5bGVzLm1yX19TTSwgbWI6IHN0eWxlcy5tYl9fU00sIG1sOiBzdHlsZXMubWxfX1NNIH07XHJcbmNvbnN0IGRlZmF1bHRYc01hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX1hTLCBtcjogc3R5bGVzLm1yX19YUywgbWI6IHN0eWxlcy5tYl9fWFMsIG1sOiBzdHlsZXMubWxfX1hTIH07XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TWFyZ2luTWFwID0ge1xyXG4gICAgWEw6IGRlZmF1bHRYbE1hcmdpbnMsXHJcbiAgICBMRzogZGVmYXVsdExnTWFyZ2lucyxcclxuICAgIE1EcDogZGVmYXVsdE1kcE1hcmdpbnMsXHJcbiAgICBNRDogZGVmYXVsdE1kTWFyZ2lucyxcclxuICAgIFNNcDogZGVmYXVsdFNtcE1hcmdpbnMsXHJcbiAgICBTTTogZGVmYXVsdFNtTWFyZ2lucyxcclxuICAgIFhTOiBkZWZhdWx0WHNNYXJnaW5zLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5zID0gT2JqZWN0LmtleXMoZGVmYXVsdE1hcmdpbk1hcCkgYXMgKGtleW9mIHR5cGVvZiBkZWZhdWx0TWFyZ2luTWFwKVtdO1xyXG5cclxuY29uc3QgbWFyZ2luS2V5TGlzdCA9IFsnbXQnLCAnbXInLCAnbWInLCAnbWwnXSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGdldE1hcmdpbkNsYXNzTmFtZXMgPSAobWFyZ2luTWFwOiB7IG10PzogU3BhY2luZ1R5cGU7IG1yPzogU3BhY2luZ1R5cGU7IG1iPzogU3BhY2luZ1R5cGU7IG1sPzogU3BhY2luZ1R5cGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIG1hcmdpbktleUxpc3QucmVkdWNlKChjbGFzc05hbWVzLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmdpbk1hcFtrZXldO1xyXG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXMuY29uY2F0KGRlZmF1bHRNYXJnaW5NYXBbdmFsdWUgPT09IHRydWUgPyAnTUQnIDogdmFsdWVdW2tleV0pO1xyXG4gICAgfSwgW10gYXMgc3RyaW5nW10pO1xyXG59O1xyXG5cclxuY29uc3QgbWFyZ2luS2V5UHJvcGVydHlNYXAgPSB7XHJcbiAgICBtdDogJ21hcmdpblRvcCcsXHJcbiAgICBtcjogJ21hcmdpblJpZ2h0JyxcclxuICAgIG1iOiAnbWFyZ2luQm90dG9tJyxcclxuICAgIG1sOiAnbWFyZ2luTGVmdCcsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBnZXRNYXJnaW5TdHlsZSA9IChtYXJnaW5NYXA6IHsgbXQ/OiBTcGFjaW5nVHlwZTsgbXI/OiBTcGFjaW5nVHlwZTsgbWI/OiBTcGFjaW5nVHlwZTsgbWw/OiBTcGFjaW5nVHlwZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gbWFyZ2luS2V5TGlzdC5yZWR1Y2UoKHN0eWxlLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmdpbk1hcFtrZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gbWFyZ2luS2V5UHJvcGVydHlNYXBba2V5XTtcclxuICAgICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWUgKyAncmVtJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfSwge30gYXMgQ1NTUHJvcGVydGllcyk7XHJcbn07XHJcblxyXG50eXBlIEJhc2VCb3hQcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIG0/OiBTcGFjaW5nVHlwZTtcclxuICAgIG10PzogU3BhY2luZ1R5cGU7XHJcbiAgICBtcj86IFNwYWNpbmdUeXBlO1xyXG4gICAgbWI/OiBTcGFjaW5nVHlwZTtcclxuICAgIG1sPzogU3BhY2luZ1R5cGU7XHJcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcbiAgICBjb2x1bW4/OiBib29sZWFuO1xyXG4gICAgcm93PzogYm9vbGVhbjtcclxuICAgIHNwYWNlQmV0d2Vlbj86IGJvb2xlYW47XHJcbiAgICBzcGFjZUFyb3VuZD86IGJvb2xlYW47XHJcbiAgICBmbGV4U3RhcnQ/OiBib29sZWFuO1xyXG4gICAgY2VudGVyPzogYm9vbGVhbjtcclxuICAgIGZsZXhFbmQ/OiBib29sZWFuO1xyXG4gICAgZ3Jvdz86IGJvb2xlYW47XHJcbiAgICBzaHJpbms/OiBib29sZWFuO1xyXG4gICAgd3JhcD86IGJvb2xlYW47XHJcbn0gJiBQaWNrPFxyXG4gICAgQ1NTUHJvcGVydGllcyxcclxuICAgICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdmbGV4JyB8ICdmbGV4RGlyZWN0aW9uJyB8ICdmbGV4V3JhcCcgfCAnanVzdGlmeUNvbnRlbnQnIHwgJ2FsaWduSXRlbXMnIHwgJ2FsaWduU2VsZidcclxuPjtcclxuXHJcbmV4cG9ydCB0eXBlIEJveFN0YXRpY1Byb3BzID0gUmVhZG9ubHk8QmFzZUJveFByb3BzPiAmIE9taXQ8UmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+LCBrZXlvZiBCYXNlQm94UHJvcHM+O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IGdlbmVyYXRlcyBhIGRpdiB3aXRoIGFwcGxpZWQgbGF5b3V0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQm94UHJvcHMgLSBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIEBwYXJhbSB7c3RyaW5nfSBbY2xhc3NOYW1lXSAtIEFkZGl0aW9uYWwgY2xhc3MoZXMpIHRvIGJlIGFkZGVkIHRvIHRoZSBjb21wb25lbnQuXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzWyd3aWR0aCddfSBbd2lkdGhdIC0gV2lkdGggb2YgdGhlIGJveC4gU3VwcG9ydHMgc3RhbmRhcmQgQ1NTIHVuaXRzLCBudW1lcmljIHZhbHVlcyBhcmUgdHJhbnNmb3JtZWQgdG8gcmVtLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1snaGVpZ2h0J119IFtoZWlnaHRdIC0gSGVpZ2h0IG9mIHRoZSBib3guIFN1cHBvcnRzIHN0YW5kYXJkIENTUyB1bml0cywgbnVtZXJpYyB2YWx1ZXMgYXJlIHRyYW5zZm9ybWVkIHRvIHJlbS5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byBhbGwgc2lkZXMgb2YgdGhlIGJveC4gU3VwcG9ydHMgWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBmb3IgTUQgbWFyZ2luLCBudW1lcmljIHZhbHVlcyBhcmUgdHJhbnNmb3JtZWQgdG8gcmVtLlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttdD1tXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSB0b3Agb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbXI9bV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgcmlnaHQgb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbWI9bV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgYm90dG9tIG9mIHRoZSBib3guXHJcbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gW21sPW1dIC0gTWFyZ2luIHZhbHVlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGxlZnQgb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtjb2x1bW5dIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggY29udGFpbmVyIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYSBjb2x1bW4uXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbcm93XSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGNvbnRhaW5lciBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGEgcm93LlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImZsZXhEaXJlY3Rpb25cIl19IFtmbGV4RGlyZWN0aW9uXSAtIFNwZWNpZmllcyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBmbGV4IGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtmbGV4U3RhcnRdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjb250YWluZXIuXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbY2VudGVyXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBjZW50ZXJlZCB3aXRoaW4gdGhlIGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtmbGV4RW5kXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBhbGlnbmVkIHRvIHRoZSBlbmQgb2YgdGhlIGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtzcGFjZUJldHdlZW5dIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGV2ZW5seSBzcGFjZWQgd2l0aCBzcGFjZSBiZXR3ZWVuIHRoZW0uXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbc3BhY2VBcm91bmRdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGV2ZW5seSBzcGFjZWQgd2l0aCBzcGFjZSBhcm91bmQgdGhlbS5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJqdXN0aWZ5Q29udGVudFwiXX0gW2p1c3RpZnlDb250ZW50XSAtIFNwZWNpZmllcyBob3cgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgYWxvbmcgdGhlIG1haW4gYXhpcy5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJhbGlnbkl0ZW1zXCJdfSBbYWxpZ25JdGVtc10gLSBTcGVjaWZpZXMgaG93IHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBhbGlnbmVkIGFsb25nIHRoZSBjcm9zcyBheGlzLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImFsaWduU2VsZlwiXX0gW2FsaWduU2VsZl0gLSBTcGVjaWZpZXMgaG93IGEgZmxleCBpdGVtIHNob3VsZCBhbGlnbiBpdHNlbGYgYWxvbmcgdGhlIGNyb3NzIGF4aXMuXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbd3JhcF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgd3JhcCBpZiB0aGV5IGV4Y2VlZCB0aGUgY29udGFpbmVyJ3Mgd2lkdGguXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzW1wiZmxleFdyYXBcIl19IFtmbGV4V3JhcF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgd3JhcCBpZiB0aGV5IGV4Y2VlZCB0aGUgY29udGFpbmVyJ3Mgd2lkdGguXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbZ3Jvd10gLSBTcGVjaWZpZXMgdGhlIGZsZXggZ3JvdyBmYWN0b3Igb2YgdGhlIGZsZXggaXRlbS5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtzaHJpbmtdIC0gU3BlY2lmaWVzIHRoZSBmbGV4IHNocmluayBmYWN0b3Igb2YgdGhlIGZsZXggaXRlbS5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJmbGV4XCJdfSBbZmxleF0gLSBTcGVjaWZpZXMgdGhlIGZsZXggZ3JvdywgZmxleCBzaHJpbmssIGFuZCBmbGV4IGJhc2lzIG9mIHRoZSBmbGV4IGl0ZW0uXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzfSBbc3R5bGVdIC0gQ3VzdG9tIHN0eWxlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXHJcbiAqICAgQHBhcmFtIHtSZWFjdE5vZGV9IFtjaGlsZHJlbl0gLSBDaGlsZCBjb21wb25lbnRzIHRvIGJlIHJlbmRlcmVkIHdpdGhpbiB0aGUgY29tcG9uZW50LlxyXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBbLi4ucmVzdFByb3BzXSAtIEFkZGl0aW9uYWwgSFRNTCBkaXYgcHJvcGVydGllcy5cclxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IEEgYm94IGVsZW1lbnQuXHJcbiAqL1xyXG5jb25zdCBCb3ggPSAoe1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHQsXHJcbiAgICBtLFxyXG4gICAgbXQgPSBtLFxyXG4gICAgbXIgPSBtLFxyXG4gICAgbWIgPSBtLFxyXG4gICAgbWwgPSBtLFxyXG4gICAgY29sdW1uLFxyXG4gICAgcm93LFxyXG4gICAgZmxleERpcmVjdGlvbiA9IChjb2x1bW4gJiYgJ2NvbHVtbicpIHx8IChyb3cgJiYgJ3JvdycpIHx8IHVuZGVmaW5lZCxcclxuICAgIGZsZXhTdGFydCxcclxuICAgIGNlbnRlcixcclxuICAgIGZsZXhFbmQsXHJcbiAgICBzcGFjZUJldHdlZW4sXHJcbiAgICBzcGFjZUFyb3VuZCxcclxuICAgIGp1c3RpZnlDb250ZW50ID0gKGZsZXhTdGFydCAmJiAnZmxleC1zdGFydCcpIHx8XHJcbiAgICAgICAgKGNlbnRlciAmJiAnY2VudGVyJykgfHxcclxuICAgICAgICAoZmxleEVuZCAmJiAnZmxleC1lbmQnKSB8fFxyXG4gICAgICAgIChzcGFjZUJldHdlZW4gJiYgJ3NwYWNlLWJldHdlZW4nKSB8fFxyXG4gICAgICAgIChzcGFjZUFyb3VuZCAmJiAnc3BhY2UtYXJvdW5kJykgfHxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICBhbGlnbkl0ZW1zID0gKGZsZXhTdGFydCAmJiAnZmxleC1zdGFydCcpIHx8IChjZW50ZXIgJiYgJ2NlbnRlcicpIHx8IChmbGV4RW5kICYmICdmbGV4LWVuZCcpIHx8IHVuZGVmaW5lZCxcclxuICAgIGFsaWduU2VsZixcclxuICAgIHdyYXAsXHJcbiAgICBmbGV4V3JhcCA9ICh3cmFwICYmICd3cmFwJykgfHwgdW5kZWZpbmVkLFxyXG4gICAgZ3JvdyxcclxuICAgIHNocmluayxcclxuICAgIGZsZXggPSBncm93IHx8IHNocmluayA/IGAke2dyb3cgPyAxIDogMH0gJHtzaHJpbmsgPyAxIDogMH0gYXV0b2AgOiB1bmRlZmluZWQsXHJcbiAgICBzdHlsZSxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgLi4ucmVzdFByb3BzXHJcbn06IEJveFN0YXRpY1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbXB1dGVkU3R5bGUsIGNvbXB1dGVkQ2xhc3NOYW1lcyB9ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luTWFwID0ge1xyXG4gICAgICAgICAgICBtdCxcclxuICAgICAgICAgICAgbXIsXHJcbiAgICAgICAgICAgIG1iLFxyXG4gICAgICAgICAgICBtbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVkQ2xhc3NOYW1lcyA9IGdldE1hcmdpbkNsYXNzTmFtZXMobWFyZ2luTWFwKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5TdHlsZSA9IGdldE1hcmdpblN0eWxlKG1hcmdpbk1hcCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAuLi5tYXJnaW5TdHlsZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicgPyB3aWR0aCArICdyZW0nIDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInID8gaGVpZ2h0ICsgJ3JlbScgOiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBmbGV4LFxyXG4gICAgICAgICAgICAgICAgYWxpZ25TZWxmLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleERpcmVjdGlvbiB8fCBhbGlnbkl0ZW1zID8gJ2ZsZXgnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wdXRlZENsYXNzTmFtZXMsXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt3aWR0aCwgaGVpZ2h0LCBtdCwgbXIsIG1iLCBtbCwgc3R5bGUsIGZsZXgsIGFsaWduU2VsZiwgZmxleERpcmVjdGlvbiwgZmxleFdyYXAsIGp1c3RpZnlDb250ZW50LCBhbGlnbkl0ZW1zXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYmFzZSwgLi4uY29tcHV0ZWRDbGFzc05hbWVzLCBjbGFzc05hbWUpfSBzdHlsZT17Y29tcHV0ZWRTdHlsZX0gey4uLnJlc3RQcm9wc30+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG50eXBlIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZSA9XHJcbiAgICB8ICd3aWR0aCdcclxuICAgIHwgJ2hlaWdodCdcclxuICAgIHwgJ20nXHJcbiAgICB8ICdtdCdcclxuICAgIHwgJ21yJ1xyXG4gICAgfCAnbWInXHJcbiAgICB8ICdtbCdcclxuICAgIHwgJ2ZsZXhEaXJlY3Rpb24nXHJcbiAgICB8ICdqdXN0aWZ5Q29udGVudCdcclxuICAgIHwgJ2FsaWduSXRlbXMnXHJcbiAgICB8ICdhbGlnblNlbGYnXHJcbiAgICB8ICdmbGV4V3JhcCdcclxuICAgIHwgJ2ZsZXgnO1xyXG5cclxuZXhwb3J0IHR5cGUgQm94UHJvcHMgPSBCb3hTdGF0aWNQcm9wcyAmIEFkYXB0aXZlUHJvcHM8Qm94U3RhdGljUHJvcHMsIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZT47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXI8Qm94U3RhdGljUHJvcHMsIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZT4oQm94KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgeyBmb3JtYXRTdHJpbmcsIEFsaWdubWVudCB9IGZyb20gJ2xpYi9zdHJpbmctdXRpbHMnO1xuXG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm1hdFRleHQuY3NzJztcblxuZXhwb3J0IGNvbnN0IEZvcm1hdFRleHQgPSAoeyBiaW5kaW5nLCB0ZXh0ID0gJycsIGNsYXNzTWl4LCBhbGlnbm1lbnQgPSBBbGlnbm1lbnQubGVmdCB9OiBQcm9wcykgPT4ge1xuICAgIGlmICh0ZXh0ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGb3JtYXRUZXh0IHdhcyBzdXBwbGllZCB3aXRoICdudWxsJ1wiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAge3RleHQuc3BsaXQoJ1xcbicpLm1hcCgodGV4dExpbmUsIGxpbmVJZCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYmFzZSwgY2xhc3NNaXgpfSBrZXk9e2Ake3RleHRMaW5lfS0ke2xpbmVJZH1gfT5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFN0cmluZyh0ZXh0TGluZSwgYWxpZ25tZW50LCBiaW5kaW5nKS5tYXAoKHRleHQsIHdvcmRJZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17YCR7d29yZElkfS0ke3RleHR9YH0+e3RleHR9PC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufTtcbiIsImltcG9ydCB7IGVudiB9IGZyb20gJ2xpYi9lbnYnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuL3N0YXRpYyc7XG5pbXBvcnQgeyBnZXRTaXplcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCB7IHdpZHRoOiBpbml0aWFsV2lkdGgsIGhlaWdodDogaW5pdGlhbEhlaWdodCB9ID0gZW52LmNsaWVudC5nZXRTaXplKCdyZW0nKTtcblxuZXhwb3J0IHR5cGUgTWVkaWFDb250ZXh0VHlwZSA9IHtcbiAgICBleHRyYVNtYWxsOiBib29sZWFuO1xuICAgIHNtYWxsOiBib29sZWFuO1xuICAgIG1lZGl1bTogYm9vbGVhbjtcbiAgICBsYXJnZTogYm9vbGVhbjtcbiAgICBleHRyYUxhcmdlOiBib29sZWFuO1xuICAgIGV4dHJhU21hbGxXaWR0aDogYm9vbGVhbjtcbiAgICBzbWFsbFdpZHRoOiBib29sZWFuO1xuICAgIG1lZGl1bVdpZHRoOiBib29sZWFuO1xuICAgIGxhcmdlV2lkdGg6IGJvb2xlYW47XG4gICAgZXh0cmFMYXJnZVdpZHRoOiBib29sZWFuO1xuICAgIGV4dHJhU21hbGxIZWlnaHQ6IGJvb2xlYW47XG4gICAgc21hbGxIZWlnaHQ6IGJvb2xlYW47XG4gICAgbWVkaXVtSGVpZ2h0OiBib29sZWFuO1xuICAgIGxhcmdlSGVpZ2h0OiBib29sZWFuO1xuICAgIGV4dHJhTGFyZ2VIZWlnaHQ6IGJvb2xlYW47XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmNvbnN0IGluaXRpYWxWYWx1ZTogTWVkaWFDb250ZXh0VHlwZSA9IHtcbiAgICB3aWR0aDogaW5pdGlhbFdpZHRoLFxuICAgIGhlaWdodDogaW5pdGlhbEhlaWdodCxcbiAgICAuLi5nZXRTaXplcyhpbml0aWFsV2lkdGgsIGluaXRpYWxIZWlnaHQsIEJSRUFLUE9JTlRTKSxcbn07XG5cbi8qKlxuICogVXNlIHVzZU1lZGlhIGhvb2sgZnJvbSAnbGliL2hvb2tzL3VzZU1lZGlhJyBkaXJlY3RseSBpbiB5b3VyIHJlYWN0IGNvbXBvbmVudHNcbiAqXG4gKiBVc2FnZSBhbmQgdGVjaCBkb2M6IGh0dHBzOi8vY29uZmx1ZW5jZS5sZXN0YS5ncm91cC9wYWdlcy92aWV3cGFnZS5hY3Rpb24/cGFnZUlkPTE5MjMyNTIyNzZcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgTWVkaWFDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsVmFsdWUpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgdXNlQ2FsbE9uY2UgZnJvbSAnbGliL2hvb2tzL3VzZUNhbGxPbmNlJztcblxuaW1wb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSAnLi9NZWRpYUNvbnRleHQnO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuL3N0YXRpYyc7XG5pbXBvcnQgeyBnZXRTaXplcyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnbGliL2Vudic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbmNvbnN0IFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChNZWRpYUNvbnRleHQpO1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSB1c2VDYWxsYmFjaygod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJlcGFyZWRXaWR0aCA9IGVudi52aWV3LnB4VG9SZW0od2lkdGgpO1xuICAgICAgICBjb25zdCBwcmVwYXJlZEhlaWdodCA9IGVudi52aWV3LnB4VG9SZW0oaGVpZ2h0KTtcblxuICAgICAgICBzZXRWYWx1ZSh7XG4gICAgICAgICAgICB3aWR0aDogcHJlcGFyZWRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcHJlcGFyZWRIZWlnaHQsXG4gICAgICAgICAgICAuLi5nZXRTaXplcyhwcmVwYXJlZFdpZHRoLCBwcmVwYXJlZEhlaWdodCwgQlJFQUtQT0lOVFMpLFxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VDYWxsT25jZSgoKSA9PiB7XG4gICAgICAgIGVuZ2luZS5vbignY2xpZW50UmVzaXplZCcsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4gZW5naW5lLm9mZignY2xpZW50UmVzaXplZCcsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfSwgW2hhbmRsZVJlc2l6ZV0pO1xuXG4gICAgY29uc3QgdmFsdWVBc1Byb3AgPSB1c2VNZW1vKCgpID0+ICh7IC4uLnZhbHVlIH0pLCBbdmFsdWVdKTtcblxuICAgIHJldHVybiA8TWVkaWFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZUFzUHJvcH0+e2NoaWxkcmVufTwvTWVkaWFDb250ZXh0LlByb3ZpZGVyPjtcbn07XG5cbmNvbnN0IE1lZGlhUHJvdmlkZXIgPSBtZW1vKFByb3ZpZGVyKTtcblxuZXhwb3J0IHsgTWVkaWFQcm92aWRlciB9O1xuIiwiaW1wb3J0IHsgbWVtbywgdXNlQ29udGV4dCwgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRCeUhlaWdodCB9IGZyb20gJy4vZ2V0QnlIZWlnaHQnO1xuaW1wb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSAnLi9NZWRpYUNvbnRleHQnO1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZXh0cmFMYXJnZTogZmFsc2UsXG4gICAgbGFyZ2U6IGZhbHNlLFxuICAgIG1lZGl1bTogZmFsc2UsXG4gICAgc21hbGw6IGZhbHNlLFxuICAgIGV4dHJhU21hbGw6IGZhbHNlLFxuICAgIGV4dHJhTGFyZ2VXaWR0aDogZmFsc2UsXG4gICAgbGFyZ2VXaWR0aDogZmFsc2UsXG4gICAgbWVkaXVtV2lkdGg6IGZhbHNlLFxuICAgIHNtYWxsV2lkdGg6IGZhbHNlLFxuICAgIGV4dHJhU21hbGxXaWR0aDogZmFsc2UsXG4gICAgZXh0cmFMYXJnZUhlaWdodDogZmFsc2UsXG4gICAgbGFyZ2VIZWlnaHQ6IGZhbHNlLFxuICAgIG1lZGl1bUhlaWdodDogZmFsc2UsXG4gICAgc21hbGxIZWlnaHQ6IGZhbHNlLFxuICAgIGV4dHJhU21hbGxIZWlnaHQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IHR5cGUgRGVmYXVsdFByb3BzID0gdHlwZW9mIGRlZmF1bHRQcm9wcztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogUmVhY3RFbGVtZW50O1xufSAmIFBhcnRpYWw8RGVmYXVsdFByb3BzPjtcblxuZXhwb3J0IHR5cGUgQnJlYWtwb2ludFByb3BzID0gUmVhZG9ubHk8UGljazxQcm9wcywgJ2V4dHJhTGFyZ2UnIHwgJ2xhcmdlJyB8ICdtZWRpdW0nIHwgJ3NtYWxsJyB8ICdleHRyYVNtYWxsJz4+XG5cbmNvbnN0IE1lZGlhID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGV4dHJhTGFyZ2UsIGxhcmdlLCBtZWRpdW0sIHNtYWxsLCBleHRyYVNtYWxsLFxuICAgICAgICBleHRyYUxhcmdlV2lkdGgsIGxhcmdlV2lkdGgsIG1lZGl1bVdpZHRoLCBzbWFsbFdpZHRoLCBleHRyYVNtYWxsV2lkdGgsXG4gICAgICAgIGV4dHJhTGFyZ2VIZWlnaHQsIGxhcmdlSGVpZ2h0LCBtZWRpdW1IZWlnaHQsIHNtYWxsSGVpZ2h0LCBleHRyYVNtYWxsSGVpZ2h0LFxuICAgIH0gPSB1c2VDb250ZXh0KE1lZGlhQ29udGV4dCk7XG5cbiAgICBjb25zdCBicmVha3BvaW50UHJvcHM6IEJyZWFrcG9pbnRQcm9wcyA9IHtcbiAgICAgICAgZXh0cmFMYXJnZTogZXh0cmFMYXJnZUhlaWdodCxcbiAgICAgICAgbGFyZ2U6IGxhcmdlSGVpZ2h0LFxuICAgICAgICBtZWRpdW06IG1lZGl1bUhlaWdodCxcbiAgICAgICAgc21hbGw6IHNtYWxsSGVpZ2h0LFxuICAgICAgICBleHRyYVNtYWxsOiBleHRyYVNtYWxsSGVpZ2h0LFxuICAgIH07XG5cbiAgICBpZiAocmVzdC5leHRyYUxhcmdlIHx8IHJlc3QubGFyZ2UgfHwgcmVzdC5tZWRpdW0gfHwgcmVzdC5zbWFsbCB8fCByZXN0LmV4dHJhU21hbGwpIHtcbiAgICAgICAgaWYgKHJlc3QuZXh0cmFMYXJnZSAmJiBleHRyYUxhcmdlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5sYXJnZSAmJiBsYXJnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QubWVkaXVtICYmIG1lZGl1bSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3Quc21hbGwgJiYgc21hbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LmV4dHJhU21hbGwgJiYgZXh0cmFTbWFsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHJlc3QuZXh0cmFMYXJnZVdpZHRoICYmIGV4dHJhTGFyZ2VXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QubGFyZ2VXaWR0aCAmJiBsYXJnZVdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QnlIZWlnaHQoY2hpbGRyZW4sIHJlc3QsIGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5tZWRpdW1XaWR0aCAmJiBtZWRpdW1XaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3Quc21hbGxXaWR0aCAmJiBzbWFsbFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QnlIZWlnaHQoY2hpbGRyZW4sIHJlc3QsIGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5leHRyYVNtYWxsV2lkdGggJiYgZXh0cmFTbWFsbFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QnlIZWlnaHQoY2hpbGRyZW4sIHJlc3QsIGJyZWFrcG9pbnRQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3QuZXh0cmFMYXJnZVdpZHRoICYmICFyZXN0LmxhcmdlV2lkdGggJiYgIXJlc3QubWVkaXVtV2lkdGggJiYgIXJlc3Quc21hbGxXaWR0aCAmJiAhcmVzdC5leHRyYVNtYWxsV2lkdGgpIHtcbiAgICAgICAgICAgIGlmIChyZXN0LmV4dHJhTGFyZ2VIZWlnaHQgJiYgZXh0cmFMYXJnZUhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3QubGFyZ2VIZWlnaHQgJiYgbGFyZ2VIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN0Lm1lZGl1bUhlaWdodCAmJiBtZWRpdW1IZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN0LnNtYWxsSGVpZ2h0ICYmIHNtYWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdC5leHRyYVNtYWxsSGVpZ2h0ICYmIGV4dHJhU21hbGxIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbk1lZGlhLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuY29uc3QgTWVkaWFRdWVyeSA9IG1lbW8oTWVkaWEpO1xuXG5leHBvcnQgeyBNZWRpYVF1ZXJ5IH07XG4iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBEZWZhdWx0UHJvcHMsIEJyZWFrcG9pbnRQcm9wcyB9IGZyb20gJy4vTWVkaWFRdWVyeSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QnlIZWlnaHQgPSAoY2hpbGRyZW46IFJlYWN0RWxlbWVudCwgcmVzdDogUGFydGlhbDxEZWZhdWx0UHJvcHM+LCBicmVha3BvaW50UHJvcHM6IEJyZWFrcG9pbnRQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwgPT4ge1xyXG4gICAgaWYgKCFyZXN0LmV4dHJhTGFyZ2VIZWlnaHQgJiYgIXJlc3QubGFyZ2VIZWlnaHQgJiYgIXJlc3QubWVkaXVtSGVpZ2h0ICYmICFyZXN0LnNtYWxsSGVpZ2h0ICYmICFyZXN0LmV4dHJhU21hbGxIZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3QuZXh0cmFMYXJnZUhlaWdodCAmJiBicmVha3BvaW50UHJvcHMuZXh0cmFMYXJnZSkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdC5sYXJnZUhlaWdodCAmJiBicmVha3BvaW50UHJvcHMubGFyZ2UpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3QubWVkaXVtSGVpZ2h0ICYmIGJyZWFrcG9pbnRQcm9wcy5tZWRpdW0pIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3Quc21hbGxIZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLnNtYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0LmV4dHJhU21hbGxIZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLmV4dHJhU21hbGwpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbiIsImltcG9ydCB7IE1lZGlhQ29udGV4dFR5cGUgfSBmcm9tICcuL01lZGlhQ29udGV4dCc7XG5cbmV4cG9ydCB7IE1lZGlhUXVlcnkgfSBmcm9tICcuL01lZGlhUXVlcnknO1xuZXhwb3J0IHsgTWVkaWFQcm92aWRlciB9IGZyb20gJy4vTWVkaWFQcm92aWRlcic7XG5leHBvcnQgeyBNZWRpYUNvbnRleHQgfSBmcm9tICcuL01lZGlhQ29udGV4dCc7XG5leHBvcnQgdHlwZSB7IE1lZGlhQ29udGV4dFR5cGUgfTtcbiIsImV4cG9ydCBjb25zdCBCUkVBS1BPSU5UUyA9IHtcbiAgICBleHRyYUxhcmdlOiB7XG4gICAgICAgIHdlaWdodDogNCxcbiAgICAgICAgd2lkdGg6IDI1NjAsXG4gICAgICAgIGhlaWdodDogMTQ0MCxcbiAgICB9LFxuICAgIGxhcmdlOiB7XG4gICAgICAgIHdlaWdodDogMyxcbiAgICAgICAgd2lkdGg6IDE5MjAsXG4gICAgICAgIGhlaWdodDogMTA4MCxcbiAgICB9LFxuICAgIG1lZGl1bToge1xuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIHdpZHRoOiAxNjAwLFxuICAgICAgICBoZWlnaHQ6IDkwMCxcbiAgICB9LFxuICAgIHNtYWxsOiB7XG4gICAgICAgIHdlaWdodDogMSxcbiAgICAgICAgd2lkdGg6IDEzNjYsXG4gICAgICAgIGhlaWdodDogNzY4LFxuICAgIH0sXG4gICAgZXh0cmFTbWFsbDoge1xuICAgICAgICB3ZWlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiAxMDI0LFxuICAgICAgICBoZWlnaHQ6IDc2OCxcbiAgICB9LFxufTtcbiIsImltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi9zdGF0aWMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2lkdGhCUFdlaWdodCh3aWR0aDogbnVtYmVyLCBicmVha3BvaW50czogdHlwZW9mIEJSRUFLUE9JTlRTKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgKHdpZHRoID49IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2lkdGgpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAod2lkdGggPj0gYnJlYWtwb2ludHMubGFyZ2Uud2lkdGgpICYmICh3aWR0aCA8IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2lkdGgpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMubGFyZ2Uud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKHdpZHRoID49IGJyZWFrcG9pbnRzLm1lZGl1bS53aWR0aCkgJiYgKHdpZHRoIDwgYnJlYWtwb2ludHMubGFyZ2Uud2lkdGgpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMubWVkaXVtLndlaWdodDtcclxuICAgICAgICBjYXNlICh3aWR0aCA+PSBicmVha3BvaW50cy5zbWFsbC53aWR0aCkgJiYgKHdpZHRoIDwgYnJlYWtwb2ludHMubWVkaXVtLndpZHRoKTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEhlaWdodEJQV2VpZ2h0KGhlaWdodDogbnVtYmVyLCBicmVha3BvaW50czogdHlwZW9mIEJSRUFLUE9JTlRTKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgKGhlaWdodCA+PSBicmVha3BvaW50cy5leHRyYUxhcmdlLmhlaWdodCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5leHRyYUxhcmdlLndlaWdodDtcclxuICAgICAgICBjYXNlIChoZWlnaHQgPj0gYnJlYWtwb2ludHMubGFyZ2UuaGVpZ2h0KSAmJiAoaGVpZ2h0IDwgYnJlYWtwb2ludHMuZXh0cmFMYXJnZS5oZWlnaHQpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMubGFyZ2Uud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKGhlaWdodCA+PSBicmVha3BvaW50cy5tZWRpdW0uaGVpZ2h0KSAmJiAoaGVpZ2h0IDwgYnJlYWtwb2ludHMubGFyZ2UuaGVpZ2h0KTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAoaGVpZ2h0ID49IGJyZWFrcG9pbnRzLnNtYWxsLmhlaWdodCkgJiYgKGhlaWdodCA8IGJyZWFrcG9pbnRzLm1lZGl1bS5oZWlnaHQpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuc21hbGwud2VpZ2h0O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5leHRyYVNtYWxsLndlaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuZW51bSBTaXplcyB7XHJcbiAgICBleHRyYUxhcmdlID0gJ2V4dHJhTGFyZ2UnLFxyXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxyXG4gICAgbWVkaXVtID0gJ21lZGl1bScsXHJcbiAgICBzbWFsbCA9ICdzbWFsbCcsXHJcbiAgICBleHRyYVNtYWxsID0gJ2V4dHJhU21hbGwnLFxyXG4gICAgZXh0cmFMYXJnZVdpZHRoID0gJ2V4dHJhTGFyZ2VXaWR0aCcsXHJcbiAgICBsYXJnZVdpZHRoID0gJ2xhcmdlV2lkdGgnLFxyXG4gICAgbWVkaXVtV2lkdGggPSAnbWVkaXVtV2lkdGgnLFxyXG4gICAgc21hbGxXaWR0aCA9ICdzbWFsbFdpZHRoJyxcclxuICAgIGV4dHJhU21hbGxXaWR0aCA9ICdleHRyYVNtYWxsV2lkdGgnLFxyXG4gICAgZXh0cmFMYXJnZUhlaWdodCA9ICdleHRyYUxhcmdlSGVpZ2h0JyxcclxuICAgIGxhcmdlSGVpZ2h0ID0gJ2xhcmdlSGVpZ2h0JyxcclxuICAgIG1lZGl1bUhlaWdodCA9ICdtZWRpdW1IZWlnaHQnLFxyXG4gICAgc21hbGxIZWlnaHQgPSAnc21hbGxIZWlnaHQnLFxyXG4gICAgZXh0cmFTbWFsbEhlaWdodCA9ICdleHRyYVNtYWxsSGVpZ2h0J1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTaXplcyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgYnJlYWtwb2ludHM6IHR5cGVvZiBCUkVBS1BPSU5UUyk6IHtba2V5IGluIFNpemVzXTogYm9vbGVhbn0ge1xyXG4gICAgY29uc3Qgd2lkdGhCUFdlaWdodDogbnVtYmVyID0gZ2V0V2lkdGhCUFdlaWdodCh3aWR0aCwgYnJlYWtwb2ludHMpO1xyXG4gICAgY29uc3QgaGVpZ2h0QlBXZWlnaHQ6IG51bWJlciA9IGdldEhlaWdodEJQV2VpZ2h0KGhlaWdodCwgYnJlYWtwb2ludHMpO1xyXG4gICAgY29uc3Qgd2VpZ2h0OiBudW1iZXIgPSBNYXRoLm1pbih3aWR0aEJQV2VpZ2h0LCBoZWlnaHRCUFdlaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBleHRyYUxhcmdlOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYUxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbGFyZ2U6ICh3ZWlnaHQgPT09IGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbWVkaXVtOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5tZWRpdW0ud2VpZ2h0KSxcclxuICAgICAgICBzbWFsbDogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMuc21hbGwud2VpZ2h0KSxcclxuICAgICAgICBleHRyYVNtYWxsOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYVNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFMYXJnZVdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIGxhcmdlV2lkdGg6ICh3aWR0aEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5sYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIG1lZGl1bVdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMubWVkaXVtLndlaWdodCksXHJcbiAgICAgICAgc21hbGxXaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFTbWFsbFdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhTGFyZ2VIZWlnaHQ6IChoZWlnaHRCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIGxhcmdlSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodCksXHJcbiAgICAgICAgbWVkaXVtSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQpLFxyXG4gICAgICAgIHNtYWxsSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFTbWFsbEhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5leHRyYVNtYWxsLndlaWdodCksXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBTaXplcywgZ2V0U2l6ZXMgfTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94LCB7IEJveFN0YXRpY1Byb3BzIH0gZnJvbSAnY29tcG9uZW50cy9Cb3gvQm94JztcbmltcG9ydCB7IEZvcm1hdFRleHQgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1hdFRleHQvRm9ybWF0VGV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybWF0VGV4dC90eXBlcyc7XG5pbXBvcnQgaGVhZGluZ1N0eWxlcyBmcm9tICdnbG9iYWwtc3R5bGVzL21peGlucy9oZWFkaW5nJztcbmltcG9ydCBwYXJhZ3JhcGhTdHlsZXMgZnJvbSAnZ2xvYmFsLXN0eWxlcy9taXhpbnMvcGFyYWdyYXBoJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcbmltcG9ydCBzcGFjaW5nIGZyb20gJ2dsb2JhbC1zdHlsZXMvdmFyaWFibGVzL3NwYWNpbmcnO1xuaW1wb3J0IGdldEFkYXB0aXZlQ29udHJvbGxlciwgeyBBZGFwdGl2ZVByb3BzIH0gZnJvbSAnbGliL2hvY3MvYWRhcHRpdmUvYWRhcHRpdmUnO1xuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0LmNzcyc7XG5cbmV4cG9ydCB0eXBlIFN0YW5kYXJkU3BhY2luZ1R5cGUgPSBrZXlvZiB0eXBlb2Ygc3BhY2luZztcbmV4cG9ydCB0eXBlIFNwYWNpbmdUeXBlID0gU3RhbmRhcmRTcGFjaW5nVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI7XG5leHBvcnQgY29uc3Qgc3RhbmRhcmRNYXJnaW5zID0gT2JqZWN0LmtleXMoc3BhY2luZykgYXMgU3RhbmRhcmRTcGFjaW5nVHlwZVtdO1xuXG5leHBvcnQgdHlwZSBTdGFuZGFyZENvbG9yVHlwZSA9IGtleW9mIHR5cGVvZiBjb2xvcnM7XG5leHBvcnQgY29uc3Qgc3RhbmRhcmRDb2xvcnMgPSBPYmplY3Qua2V5cyhjb2xvcnMpIGFzIFN0YW5kYXJkQ29sb3JUeXBlW107XG5cbmNvbnN0IHhsU3R5bGVNYXJnaW5zID0geyBtdDogJ1hMJywgbXI6ICdMRycsIG1iOiAnTEcnLCBtbDogJ0xHJyB9IGFzIGNvbnN0O1xuY29uc3QgbGdTdHlsZU1hcmdpbnMgPSB7IG10OiAnTEcnLCBtcjogJ01EJywgbWI6ICdNRCcsIG1sOiAnTUQnIH0gYXMgY29uc3Q7XG5jb25zdCBtZFN0eWxlTWFyZ2lucyA9IHsgbXQ6ICdNRCcsIG1yOiAnU00nLCBtYjogJ1NNJywgbWw6ICdTTScgfSBhcyBjb25zdDtcbmNvbnN0IHNtU3R5bGVNYXJnaW5zID0geyBtdDogJ1NNJywgbXI6ICdYUycsIG1iOiAnWFMnLCBtbDogJ1hTJyB9IGFzIGNvbnN0O1xuY29uc3QgeHNTdHlsZU1hcmdpbnMgPSB7IG10OiAnWFMnLCBtcjogJ1hTJywgbWI6ICdYUycsIG1sOiAnWFMnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0WGxNYXJnaW5zID0geyBtdDogJ1hMJywgbXI6ICdYTCcsIG1iOiAnWEwnLCBtbDogJ1hMJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdExnTWFyZ2lucyA9IHsgbXQ6ICdMRycsIG1yOiAnTEcnLCBtYjogJ0xHJywgbWw6ICdMRycgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRNZHBNYXJnaW5zID0geyBtdDogJ01EcCcsIG1yOiAnTURwJywgbWI6ICdNRHAnLCBtbDogJ01EcCcgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRNZE1hcmdpbnMgPSB7IG10OiAnTUQnLCBtcjogJ01EJywgbWI6ICdNRCcsIG1sOiAnTUQnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0U21wTWFyZ2lucyA9IHsgbXQ6ICdTTXAnLCBtcjogJ1NNcCcsIG1iOiAnU01wJywgbWw6ICdTTXAnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0U21NYXJnaW5zID0geyBtdDogJ1NNJywgbXI6ICdTTScsIG1iOiAnU00nLCBtbDogJ1NNJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdFhzTWFyZ2lucyA9IHsgbXQ6ICdYUycsIG1yOiAnWFMnLCBtYjogJ1hTJywgbWw6ICdYUycgfSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TWFyZ2luTWFwID0ge1xuICAgIFhMOiBkZWZhdWx0WGxNYXJnaW5zLFxuICAgIExHOiBkZWZhdWx0TGdNYXJnaW5zLFxuICAgIE1EcDogZGVmYXVsdE1kcE1hcmdpbnMsXG4gICAgTUQ6IGRlZmF1bHRNZE1hcmdpbnMsXG4gICAgU01wOiBkZWZhdWx0U21wTWFyZ2lucyxcbiAgICBTTTogZGVmYXVsdFNtTWFyZ2lucyxcbiAgICBYUzogZGVmYXVsdFhzTWFyZ2lucyxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWFyZ2lucyA9IE9iamVjdC5rZXlzKGRlZmF1bHRNYXJnaW5NYXApIGFzIChrZXlvZiB0eXBlb2YgZGVmYXVsdE1hcmdpbk1hcClbXTtcblxuZXhwb3J0IGNvbnN0IHZhcmlhbnRNYXJnaW5TaXplTWFwOiB7XG4gICAgW2tleSBpbiBWYXJpYW50VHlwZV06IHsgW2tleSBpbiAnbXQnIHwgJ21yJyB8ICdtYicgfCAnbWwnXTogU3BhY2luZ1R5cGUgfTtcbn0gPSB7XG4gICAgJ2hlYWRpbmctSDE0NCc6IHhsU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUg3Myc6IGxnU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUg1Nic6IG1kU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgzNic6IG1kU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyOCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyNCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyNFInOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMjInOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMjBSJzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDE4Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDE1JzogeHNTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDE0JzogeHNTdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMjQnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAxOCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDE2Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMTQnOiB4c1N0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAxMic6IHhzU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDEwJzogeHNTdHlsZU1hcmdpbnMsXG59O1xuXG5leHBvcnQgY29uc3QgdmFyaWFudHMgPSBPYmplY3Qua2V5cyh2YXJpYW50TWFyZ2luU2l6ZU1hcCkgYXMgKGtleW9mIHR5cGVvZiB2YXJpYW50TWFyZ2luU2l6ZU1hcClbXTtcblxudHlwZSBWYXJpYW50VHlwZSA9IGtleW9mIHR5cGVvZiBoZWFkaW5nU3R5bGVzIHwga2V5b2YgdHlwZW9mIHBhcmFncmFwaFN0eWxlcztcblxudHlwZSBCYXNlVGV4dFByb3BzID0ge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB2YXJpYW50PzogVmFyaWFudFR5cGU7XG4gICAgY29sb3I/OiBTdGFuZGFyZENvbG9yVHlwZSB8IENTU1Byb3BlcnRpZXNbJ2NvbG9yJ107XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIG0/OiBTcGFjaW5nVHlwZTtcbiAgICBtdD86IFNwYWNpbmdUeXBlO1xuICAgIG1yPzogU3BhY2luZ1R5cGU7XG4gICAgbWI/OiBTcGFjaW5nVHlwZTtcbiAgICBtbD86IFNwYWNpbmdUeXBlO1xuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgICBmb3JtYXQ/OiBPbWl0PFByb3BzLCAndGV4dCc+O1xufTtcblxuY29uc3QgaXNEZWZhdWx0Q29sb3IgPSAoY29sb3I6IHN0cmluZyk6IGNvbG9yIGlzIFN0YW5kYXJkQ29sb3JUeXBlID0+IChzdGFuZGFyZENvbG9ycyBhcyBzdHJpbmdbXSkuaW5jbHVkZXMoY29sb3IpO1xuXG5jb25zdCBnZXRDb2xvclN0eWxlT3JDbGFzc05hbWUgPSAoY29sb3I/OiBTdGFuZGFyZENvbG9yVHlwZSB8IENTU1Byb3BlcnRpZXNbJ2NvbG9yJ10pID0+IHtcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKGlzRGVmYXVsdENvbG9yKGNvbG9yKSkge1xuICAgICAgICByZXR1cm4geyBjb2xvckNsYXNzTmFtZTogc3R5bGVzW2NvbG9yXSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBjb2xvclN0eWxlOiB7IGNvbG9yIH0gfTtcbn07XG5cbmV4cG9ydCB0eXBlIFRleHRTdGF0aWNQcm9wcyA9IFJlYWRvbmx5PEJhc2VUZXh0UHJvcHMgJiBPbWl0PEJveFN0YXRpY1Byb3BzLCAnY2hpbGRyZW4nPj47XG5leHBvcnQgdHlwZSBUZXh0UHJvcHMgPSBUZXh0U3RhdGljUHJvcHMgJiBBZGFwdGl2ZVByb3BzPFRleHRTdGF0aWNQcm9wcywgVGV4dEFkYXB0aXZlUHJvcE5hbWVzVHlwZT47XG5leHBvcnQgdHlwZSBUZXh0QWRhcHRpdmVQcm9wTmFtZXNUeXBlID0gJ3ZhcmlhbnQnIHwgJ2NvbG9yJyB8ICdtJyB8ICdtdCcgfCAnbXInIHwgJ21iJyB8ICdtbCc7XG5cbi8qKlxuICogUmVuZGVycyB0aGUgdGV4dCBwYXNzZWQgaW4gYXMgYSBwcm9wIHdpdGggc3R5bGluZyBhbmQgZm9ybWF0dGluZyBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyAtIFRoZSBwcm9wcyBvYmplY3QgY29udGFpbmluZzpcbiAqICAgQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUaGUgdGV4dCB0byBiZSByZW5kZXJlZC5cbiAqICAgQHBhcmFtIHtWYXJpYW50VHlwZSB8IHN0cmluZ30gdmFyaWFudCAtIFRoZSB2YXJpYW50IG9mIHRoZSB0ZXh0IHN0eWxpbmcuXG4gKiAgIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZShzKSB0byBiZSBhcHBsaWVkIHRvIHRoZSB0ZXh0IGNvbXBvbmVudC5cbiAqICAgQHBhcmFtIHtDb2xvclR5cGV9IGNvbG9yIC0gVGhlIGNvbG9yIG9mIHRoZSB0ZXh0LCBlLmcuIFwiV0hJVEVfU1BBTklTSFwiIG9yIFwiI2YwMFwiLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtIC0gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIGFsbCBzaWRlcywgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtdCAtIFRoZSBhcHBsaWVkIG1hcmdpbi10b3AsIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gbXIgLSBUaGUgYXBwbGllZCBtYXJnaW4tcmlnaHQsIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gbWIgLSBUaGUgYXBwbGllZCBtYXJnaW4tYm90dG9tLCBlLmcuIFhMLCBMRywgTURwLCBNRCwgU01wLCBTTSwgWFMsIHRydWUgZGVmYXVsdHMgdG8gYSBzaXplIGJhc2VkIG9uIHRoZSB2YXJpYW50IHByb3AsIG51bWJlciB0cmFuc2xhdGVzIHRvIHJlbXMuXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IG1sIC0gVGhlIGFwcGxpZWQgbWFyZ2luLWxlZnQsIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzfSBzdHlsZSAtIFRoZSBzdHlsZSBvYmplY3QgdG8gYmUgYXBwbGllZCB0byB0aGUgdGV4dCBjb21wb25lbnQuXG4gKiAgIEBwYXJhbSB7Rm9ybWF0VGV4dFByb3BzfSBmb3JtYXQgLSBUaGUgZm9ybWF0dGluZyBwcm9wcyBvZiBGb3JtYXRUZXh0LlxuICogICBAcGFyYW0ge0JveFByb3BzfSByZXN0UHJvcHMgLSBvdGhlciBwcm9wcyBvZiBpbnRlcm5hbCBCb3ggY29tcG9uZW50LlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IFRoZSBUZXh0IGVsZW1lbnQuXG4gKi9cbmNvbnN0IFRleHQgPSAoe1xuICAgIHRleHQsXG4gICAgdmFyaWFudCxcbiAgICBjbGFzc05hbWUsXG4gICAgY29sb3IsXG4gICAgbSxcbiAgICBtdCA9IG0sXG4gICAgbXIgPSBtLFxuICAgIG1iID0gbSxcbiAgICBtbCA9IG0sXG4gICAgc3R5bGUsXG4gICAgZm9ybWF0LFxuICAgIC4uLnJlc3RQcm9wc1xufTogVGV4dFN0YXRpY1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjb21wdXRlZFN0eWxlLCBjb2xvckNsYXNzTmFtZSB9ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JDbGFzc05hbWUsIGNvbG9yU3R5bGUgPSB7fSB9ID0gZ2V0Q29sb3JTdHlsZU9yQ2xhc3NOYW1lKGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHsgY29tcHV0ZWRTdHlsZTogeyAuLi5zdHlsZSwgLi4uY29sb3JTdHlsZSB9LCBjb2xvckNsYXNzTmFtZSB9O1xuICAgIH0sIFtzdHlsZSwgY29sb3JdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYmFzZSwgdmFyaWFudCAmJiBzdHlsZXNbdmFyaWFudF0sIGNvbG9yQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e2NvbXB1dGVkU3R5bGV9XG4gICAgICAgICAgICBtdD17bXQgPT09IHRydWUgPyB2YXJpYW50TWFyZ2luU2l6ZU1hcFt2YXJpYW50IHx8ICdwYXJhZ3JhcGgtUDE2J10ubXQgOiBtdH1cbiAgICAgICAgICAgIG1yPXttciA9PT0gdHJ1ZSA/IHZhcmlhbnRNYXJnaW5TaXplTWFwW3ZhcmlhbnQgfHwgJ3BhcmFncmFwaC1QMTYnXS5tciA6IG1yfVxuICAgICAgICAgICAgbWI9e21iID09PSB0cnVlID8gdmFyaWFudE1hcmdpblNpemVNYXBbdmFyaWFudCB8fCAncGFyYWdyYXBoLVAxNiddLm1iIDogbWJ9XG4gICAgICAgICAgICBtbD17bWwgPT09IHRydWUgPyB2YXJpYW50TWFyZ2luU2l6ZU1hcFt2YXJpYW50IHx8ICdwYXJhZ3JhcGgtUDE2J10ubWwgOiBtbH1cbiAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtmb3JtYXQgIT09IHVuZGVmaW5lZCA/IDxGb3JtYXRUZXh0IHsuLi5mb3JtYXR9IHRleHQ9e3RleHR9IC8+IDogdGV4dH1cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFkYXB0aXZlQ29udHJvbGxlcjxUZXh0U3RhdGljUHJvcHMsIFRleHRBZGFwdGl2ZVByb3BOYW1lc1R5cGU+KFRleHQpO1xuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBlbnYgfSBmcm9tICdsaWIvZW52JztcclxuaW1wb3J0IHsgdXNlTW91bnQgfSBmcm9tICdsaWIvaG9va3MvdXNlTW91bnRVbm1vdW50JztcclxuaW1wb3J0IHsgdXNlU2tpcEZyYW1lIH0gZnJvbSAnbGliL2hvb2tzL3VzZVNraXBGcmFtZSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9vbHRpcERlY29yYXRvci5jc3MnO1xyXG5cclxuZXhwb3J0IHR5cGUgUHJvcHMgPSBSZWFjdC5Db21wb25lbnRQcm9wczwnZGl2Jz4gJiB7XHJcbiAgICB0aGVtZT86ICdub25lJyB8ICdkZWZhdWx0JztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb29sdGlwRGVjb3JhdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgUHJvcHM+KGZ1bmN0aW9uIFRvb2x0aXBEZWNvcmF0b3IoXHJcbiAgICB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIHRoZW1lID0gJ2RlZmF1bHQnLCAuLi5yZXN0UHJvcHMgfSxcclxuICAgIHJlZixcclxuKSB7XHJcbiAgICBjb25zdCBza2lwRnJhbWUgPSB1c2VTa2lwRnJhbWUoKTtcclxuICAgIGNvbnN0IGJhc2VSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgICB1c2VNb3VudCgoKSA9PiB7XHJcbiAgICAgICAgc2tpcEZyYW1lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBiYXNlUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGlmICghYmFzZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGJhc2Uuc2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBiYXNlLnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGVudi52aWV3LnJlc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiYXNlKTtcclxuICAgICAgICAgICAgZW52LnZpZXcuc2V0U2lkZVBhZGRpbmdzUmVtKHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpLCAxMCksXHJcbiAgICAgICAgICAgICAgICB0b3A6IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJyksIDEwKSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JyksIDEwKSxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKSwgMTApLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFJlZnMobm9kZTogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgICAgICBiYXNlUmVmLmN1cnJlbnQgPSBub2RlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJlZihub2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlZikge1xyXG4gICAgICAgICAgICAocmVmIGFzIFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+KS5jdXJyZW50ID0gbm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHsuLi5yZXN0UHJvcHN9IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJhc2UsIHN0eWxlc1tgYmFzZV9fdGhlbWUtJHt0aGVtZX1gXSwgY2xhc3NOYW1lKX0gcmVmPXtzZXRSZWZzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWNvcmF0b3J9PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICdCTEFDS19SRUFMJzogJyMwMDAwMDAnLFxyXG4gICAgJ1dISVRFX1JFQUwnOiAnI0ZGRkZGRicsXHJcbiAgICAnV0hJVEUnOiAnI0YyRjJGNycsXHJcbiAgICAnV0hJVEVfT1JBTkdFJzogJyNGRUZFRUMnLFxyXG4gICAgJ1dISVRFX1NQQU5JU0gnOiAnI0U5RTJCRicsXHJcbiAgICAnUEFSJzogJyM4QzhDN0UnLFxyXG4gICAgJ1BBUl9TRUNPTkRBUlknOiAnIzU5NTk1MCcsXHJcbiAgICAnUEFSX1RFUlRJQVJZJzogJyMzNzM2MkUnLFxyXG4gICAgJ0lORk9fUkVEJzogJyNGRjAwMDAnLFxyXG4gICAgJ1JFRCc6ICcjRkYyNzE3JyxcclxuICAgICdSRURfREFSSyc6ICcjQjcwMDAwJyxcclxuICAgICdZRUxMT1cnOiAnI0ZFQUIzNCcsXHJcbiAgICAnT1JBTkdFJzogJyNFRTcwMDAnLFxyXG4gICAgJ0NSRUFNJzogJyNGRkREOTknLFxyXG4gICAgJ0JST1dOJzogJyNDQkFDNzcnLFxyXG4gICAgJ0dSRUVOX0JSSUdIVCc6ICcjODBENDNBJyxcclxuICAgICdHUkVFTic6ICcjN0FCMzAwJyxcclxuICAgICdHUkVFTl9EQVJLJzogJyM0OTcyMTInLFxyXG4gICAgJ0JMVUVfQk9PU1RFUic6ICcjQ0NGRkZGJyxcclxuICAgICdCTFVFX1RFQU1LSUxMRVInOiAnIzA5RTJGRicsXHJcbiAgICAnQ1JFRCc6ICcjQ0VEOUQ5JyxcclxuICAgICdHT0xEJzogJyNGRkMzNjMnLFxyXG4gICAgJ0JPTkQnOiAnI0M5QzlCNicsXHJcbiAgICAnUFJPTSc6ICcjQTI5QjcwJyxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAnWFMnOiAnNHJlbScsXHJcbiAgICAnU00nOiAnOHJlbScsXHJcbiAgICAnU01wJzogJzEwcmVtJyxcclxuICAgICdNRCc6ICcxNnJlbScsXHJcbiAgICAnTURwJzogJzIwcmVtJyxcclxuICAgICdMRyc6ICczMnJlbScsXHJcbiAgICAnWEwnOiAnNjRyZW0nLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBlbnYgfSBmcm9tICdsaWIvZW52JztcbmltcG9ydCB7IFR5cGVCeVN0cmluZ1BhdGggfSBmcm9tICdsaWIvdHlwZS1oZWxwZXJzJztcblxuZXhwb3J0IHR5cGUgTW9kZWxTdWJzY3JpYmVyPFQ+ID0gKG1vZGVsOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zID0ge1xuICAgIGluaXRpYWxpemVyPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICBjb250ZXh0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHJvb3RJZD86IG51bWJlcjtcbiAgICBnZXRSb290PzogKHJvb3RJZDogbnVtYmVyKSA9PiB1bmtub3duO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhTGF5ZXI8VCBleHRlbmRzIHt9PiB7XG4gICAgc3Vic2NyaWJlPFAgZXh0ZW5kcyBzdHJpbmc+KHN1YnNjcmliZXI6IE1vZGVsU3Vic2NyaWJlcjxUeXBlQnlTdHJpbmdQYXRoPFQsIFA+PiwgcGF0aD86IFApOiBudW1iZXI7XG4gICAgcmVhZEJ5UGF0aDxQIGV4dGVuZHMgc3RyaW5nPihwYXRoPzogUCk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD47XG4gICAgY3JlYXRlQ2FsbGJhY2s8QXJnc01hcCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gRXh0ZXJuQXJncywgRXh0ZXJuQXJncyBleHRlbmRzIHt9LCBQIGV4dGVuZHMgc3RyaW5nPihcbiAgICAgICAgYXJnc01hcDogQXJnc01hcCxcbiAgICAgICAgcGF0aDogUCxcbiAgICApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkID8gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8QXJnc01hcD4pID0+IHZvaWQgOiB1bmtub3duO1xuICAgIGNyZWF0ZUNhbGxiYWNrTm9BcmdzPFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoKSA9PiB2b2lkIDogdW5rbm93bjtcbiAgICBkaXNwb3NlOiAoKSA9PiB2b2lkO1xuICAgIHVuc3Vic2NyaWJlOiAoaWQ6IG51bWJlciwgcmVzSWQ/OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGdldFJvb3REZWZhdWx0ID0gKHJvb3RJZDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHJvb3RJZCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93LnN1YlZpZXdzLmdldChyb290SWQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZTxUIGV4dGVuZHMge30+KHtcbiAgICBpbml0aWFsaXplciA9IHRydWUsXG4gICAgcm9vdElkID0gMCxcbiAgICBnZXRSb290ID0gZ2V0Um9vdERlZmF1bHQsXG4gICAgY29udGV4dCA9ICdtb2RlbCcsXG59OiBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zID0ge30pOiBEYXRhTGF5ZXI8VD4ge1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gbmV3IE1hcDxudW1iZXIsIE1vZGVsU3Vic2NyaWJlcjxhbnk+PigpO1xuXG4gICAgZW5naW5lLndoZW5SZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgZW5naW5lLm9uKCd2aWV3RW52Lm9uRGF0YUNoYW5nZWQnLCAoZGF0YTogYW55LCBfOiB1bmtub3duLCBjYWxsYmFja0lEczogbnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrSURzLmZvckVhY2goKGNhbGxiYWNrSUQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHN1YnNjcmliZXJzLmdldChjYWxsYmFja0lEKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIsIHJlc0lkID0gMCkge1xuICAgICAgICBpZiAodmlld0Vudi5yZW1vdmVEYXRhQ2hhbmdlZENhbGxiYWNrKGlkLCByZXNJZCkpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgcmVtb3ZlIGNhbGxiYWNrIGJ5IGlkOlwiLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWFkQnlQYXRoID0gPFAgZXh0ZW5kcyBzdHJpbmc+KHBhdGg/OiBQKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiA9PiB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBnZXRSb290KHJvb3RJZCk7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gY29udGV4dC5zcGxpdCgnLicpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0IGFzIGFueSlba2V5XTtcbiAgICAgICAgfSwgcm9vdCBhcyBUKTtcblxuICAgICAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnIHx8IHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWwgYXMgdW5rbm93biBhcyBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gKHJlc3VsdCBhcyBhbnkpW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5iaW5kKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSwgbW9kZWwpIGFzIFR5cGVCeVN0cmluZ1BhdGg8VCwgUD47XG4gICAgfTtcblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IDxQIGV4dGVuZHMgc3RyaW5nPihzdWJzY3JpYmVyOiBNb2RlbFN1YnNjcmliZXI8VHlwZUJ5U3RyaW5nUGF0aDxULCBQPj4sIHBhdGg/OiBQKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZVBhdGggPSB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgPyBgJHtjb250ZXh0fS4ke3BhdGh9YCA6IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHRyYWNrSW5EZXB0aCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGlkID0gZW52LnZpZXcuYWRkTW9kZWxPYnNlcnZlcihzdWJzY3JpYmVQYXRoLCByb290SWQsIHRyYWNrSW5EZXB0aCk7XG4gICAgICAgIHN1YnNjcmliZXJzLnNldChpZCwgc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChpbml0aWFsaXplcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlcihyZWFkQnlQYXRoKHBhdGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUNhbGxiYWNrID0gPEFyZ3NNYXAgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IEV4dGVybkFyZ3MsIEV4dGVybkFyZ3MgZXh0ZW5kcyB7fSwgUCBleHRlbmRzIHN0cmluZz4oXG4gICAgICAgIGFyZ3NNYXA6IEFyZ3NNYXAsXG4gICAgICAgIHBhdGg6IFAsXG4gICAgKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCA/ICguLi5hcmdzOiBQYXJhbWV0ZXJzPEFyZ3NNYXA+KSA9PiB2b2lkIDogdW5rbm93biA9PiB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVhZEJ5UGF0aChwYXRoKSBhcyAoYXJncz86IEV4dGVybkFyZ3MpID0+IHZvaWQ7XG4gICAgICAgIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICAgIGZuKGFyZ3NNYXAoLi4uYXJncykpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVDYWxsYmFja05vQXJncyA9IDxQIGV4dGVuZHMgc3RyaW5nPihcbiAgICAgICAgcGF0aDogUCxcbiAgICApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkID8gKCkgPT4gdm9pZCA6IHVua25vd24gPT4ge1xuICAgICAgICBjb25zdCBmbiA9IHJlYWRCeVBhdGgocGF0aCkgYXMgKGFyZ3M/OiB7IGFyZ3M6IGFueSB9KSA9PiB2b2lkO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVySWQgb2Ygc3Vic2NyaWJlcnMua2V5cygpKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZShzdWJzY3JpYmVySWQsIHJvb3RJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWJzY3JpYmUsIHJlYWRCeVBhdGgsIGNyZWF0ZUNhbGxiYWNrLCBjcmVhdGVDYWxsYmFja05vQXJncywgZGlzcG9zZSwgdW5zdWJzY3JpYmUgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuaW1wb3J0IHsgY29uc3RGYWxzZSB9IGZyb20gJ2xpYi9mdW5jdGlvbic7XHJcbmltcG9ydCB7IFR5cGVCeVN0cmluZ1BhdGggfSBmcm9tICdsaWIvdHlwZS1oZWxwZXJzJztcclxuaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBEYXRhTGF5ZXIsIERhdGFMYXllckNyZWF0ZU9wdGlvbnMgfSBmcm9tICcuL2RhdGEtbGF5ZXInO1xyXG5pbXBvcnQgKiBhcyBkYXRhTGF5ZXIgZnJvbSAnLi9kYXRhLWxheWVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGVsIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgeyBkYXRhTGF5ZXIgfTtcclxuZXhwb3J0IHR5cGUgeyBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zLCBEYXRhTGF5ZXIgfTtcclxuLyoqIEN1cnJlbnQgZGF0YSBtb2RlIChtb2NrcyBvciByZWFsKSAqL1xyXG5leHBvcnQgdHlwZSBNb2RlID0gJ21vY2tzJyB8ICdyZWFsJztcclxuXHJcbmV4cG9ydCB0eXBlIENvbnRleHQ8TW9kZWwsIENvbnRyb2xzPiA9IHtcclxuICAgIG1vZGVsOiBNb2RlbDtcclxuICAgIGNvbnRyb2xzOiBDb250cm9scztcclxuICAgIG1vZGU6IE1vZGU7XHJcbn07XHJcblxyXG4vKipcclxuICogV2lsbCBiZSBjYWxsIGJlZm9yZSBNb2RlbFByb3ZpZGVyIHdpbGwgdW5tb3VudFxyXG4gKiBgYGB0c3hcclxuICogbGV0IHRpbWVvdXRJZCA9IDBcclxuICogY2xlYW51cCgoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKSlcclxuICpcclxuICogLy8gLi4uXHJcbiAqXHJcbiAqICgpID0+IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZG9Tb21ldGhpbmcsIDUwMClcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDbGVhbnVwID0gKGNsZWFudXBGbjogKCkgPT4gdm9pZCkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgQ29udGV4dFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xyXG4gICAgbW9kZT86IE1vZGU7XHJcbiAgICBvcHRpb25zPzogRGF0YUxheWVyQ3JlYXRlT3B0aW9ucztcclxufT47XHJcblxyXG5leHBvcnQgdHlwZSBSZWFkQnlQYXRoPFQgZXh0ZW5kcyB7fT4gPSA8UCBleHRlbmRzIHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgICBwYXRoOiBQLFxyXG4pID0+IFAgZXh0ZW5kcyBzdHJpbmcgPyBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IDogVDtcclxuXHJcbmV4cG9ydCB0eXBlIE1vZGVsQ3JlYXRvckFyZ3M8VCBleHRlbmRzIHt9PiA9IHtcclxuICAgIG1vZGU6IE1vZGU7XHJcbiAgICAvKiogVGhpcyBpcyBBUEkgZm9yIEpTIDwtPiBDKyssIHJlYWQgb2YgY3JlYXRlIGRvYyBpbiB7QGxpbmsgZGF0YUxheWVyLmNyZWF0ZX0gKi9cclxuICAgIGV4dGVybmFsTW9kZWw6IERhdGFMYXllcjxUPjtcclxuICAgIC8qKiBAc2VlIHtAbGluayBDbGVhbnVwfSBmb3IgZnVydGhlciBpbmZvcm1hdGlvbi4gKi9cclxuICAgIGNsZWFudXA6IENsZWFudXA7XHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIG9ic2VydmFibGUgYm94IGFib3ZlIHBhcnQgb2YgbW9kZWwgYW5kIHN1YnNjcmliZSB0byB1cGRhdGUgYnkgdHlwZVxyXG4gICAgICogQHBhcmFtIHBhdGggb3B0aW9uYWwgcmVsYXRpdmUgcGF0aCBvZiBtb2RlbFxyXG4gICAgICogQHBhcmFtIGluaXQgb3B0aW9uYWwgaW5pdCBkYXRhIG9mIHBhdGggKHdpbGwgcmVhZCBmcm9tIG1vZGVsIGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmFibGVNb2RlbDogT2JzZXJ2YWJsZU1vZGVsPFQ+O1xyXG4gICAgcmVhZEJ5UGF0aDogUmVhZEJ5UGF0aDxUPjtcclxufTtcclxuZXhwb3J0IHR5cGUgQ29udHJvbHNDcmVhdG9yQXJnczxNb2RlbCwgVCBleHRlbmRzIHt9PiA9IHtcclxuICAgIG1vZGU6IE1vZGU7XHJcbiAgICAvKiogTW9kZWwgd2hhdCByZXR1cm5lZCBmcm9tIGZpcnN0IGZ1bmN0aW9uIC0ge0BsaW5rIE1vZGVsQ3JlYXRvckFyZ3M8VD59ICovXHJcbiAgICBtb2RlbDogTW9kZWw7XHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIG9ic2VydmFibGUgYm94IGFib3ZlIHBhcnQgb2YgbW9kZWwgYW5kIHN1YnNjcmliZSB0byB1cGRhdGUgYnkgdHlwZVxyXG4gICAgICogQHBhcmFtIHBhdGggb3B0aW9uYWwgcmVsYXRpdmUgcGF0aCBvZiBtb2RlbFxyXG4gICAgICogQHBhcmFtIGluaXQgb3B0aW9uYWwgaW5pdCBkYXRhIG9mIHBhdGggKHdpbGwgcmVhZCBmcm9tIG1vZGVsIGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIGV4dGVybmFsTW9kZWw6IERhdGFMYXllcjxUPjtcclxuICAgIC8qKiBAc2VlIHtAbGluayBDbGVhbnVwfSBmb3IgZnVydGhlciBpbmZvcm1hdGlvbi4gKi9cclxuICAgIGNsZWFudXA6IENsZWFudXA7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBNb2NrczxNb2RlbCwgQ29udHJvbHM+ID0ge1xyXG4gICAgZ2V0dGVyOiAocGF0aD86IHN0cmluZykgPT4gYW55O1xyXG4gICAgY29udHJvbHM6IChhcmdzOiB7IG1vZGU6IE1vZGU7IG1vZGVsOiBNb2RlbDsgY2xlYW51cDogQ2xlYW51cCB9KSA9PiBDb250cm9scztcclxufTtcclxuXHJcbi8qKlxyXG4gKiAjIyMjIE1ha2VzIHR5cGUgZm9yIG1ha2UgbW9ja3MgZWFzaWVyXHJcbiAqIGBgYHRzXHJcbiAqICBjb25zdCBtb2NrczogTW9ja3NPZjx0eXBlb2YgdXNlTW9kZWw+ID0ge1xyXG4gKiAgICAgIC8vIC4uLlxyXG4gKiAgfVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIE1vY2tzT2Y8VXNlTW9kZWwgZXh0ZW5kcyAoKSA9PiBhbnk+ID0gUmV0dXJuVHlwZTxVc2VNb2RlbD4gZXh0ZW5kcyBDb250ZXh0PGluZmVyIE1vZGVsLCBpbmZlciBDb250cm9scz5cclxuICAgID8gTW9ja3M8TW9kZWwsIENvbnRyb2xzPlxyXG4gICAgOiBuZXZlcjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgTW9kZWxQcm92aWRlciBhbmQgdXNlTW9kZWwgZm9yIHlvdXIgZGF0YS1sYXllcjpcclxuICogYGBgdHNcclxuICogZXhwb3J0IGNvbnN0IFtNb2RlbFByb3ZpZGVyLCB1c2VNb2RlbF0gPSBpbml0aWFsaXplTW9kZWxXaXRoQ29udGV4dDw8TU9ERUxfVFlQRT4+KCkoXHJcbiAqICAgICAoKSA9PiB7fSwgLy8gZm9yIG1vZGVsXHJcbiAqICAgICAoKSA9PiB7fSwgLy8gZm9yIGNvbnRyb2xzIChmdW5jdGlvbnMpXHJcbiAqICk7XHJcbiAqIGBgYFxyXG4gKiBXaGVyZSBgPE1PREVMX1RZUEU+YCBpcyB5b3VyIG1vZGVsIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQgPSA8VCBleHRlbmRzIHt9PigpID0+IHtcclxuICAgIHJldHVybiA8TW9kZWwsIENvbnRyb2xzPihcclxuICAgICAgICBtb2RlbENyZWF0b3I6IChhcmdzOiBNb2RlbENyZWF0b3JBcmdzPFQ+KSA9PiBNb2RlbCxcclxuICAgICAgICBjb250cm9sc0NyZWF0b3I6IChhcmdzOiBDb250cm9sc0NyZWF0b3JBcmdzPE1vZGVsLCBUPikgPT4gQ29udHJvbHMsXHJcbiAgICApID0+IHtcclxuICAgICAgICBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0PE1vZGVsLCBDb250cm9scz4+KHt9IGFzIHVua25vd24gYXMgQ29udGV4dDxNb2RlbCwgQ29udHJvbHM+KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgZnVuY3Rpb24gRGF0YUxheWVyUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICAgICAgbW9kZTogZGF0YU1vZGUgPSAncmVhbCcsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICBtb2NrcyxcclxuICAgICAgICAgICAgfTogQ29udGV4dFByb3BzICYgeyBtb2Nrcz86IE1vY2tzPE1vZGVsLCBDb250cm9scz4gfSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cHNSZWYgPSB1c2VSZWY8KCgpID0+IHZvaWQpW10+KFtdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNvbnRleHRWYWx1ZSA9IChcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM/OiBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vY2tzPzogTW9ja3M8TW9kZWwsIENvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFMYXllckluc3RhbmNlID0gZGF0YUxheWVyLmNyZWF0ZTxUPihvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbE1vZGVsID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gJ3JlYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGFMYXllckluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGFMYXllckluc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEJ5UGF0aDogbW9ja3M/LmdldHRlciA/PyAoKCkgPT4gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSBPYnNlcnZhYmxlTW9kZWxMb2NhbCA9IE9ic2VydmFibGVNb2RlbDxUPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZEJ5UGF0aDogUmVhZEJ5UGF0aDxUPiA9IChwYXRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnbW9ja3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ja3M/LmdldHRlcihwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHRlcm5hbE1vZGVsLnJlYWRCeVBhdGgocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlQXJyYXk6IE9ic2VydmFibGVNb2RlbExvY2FsWydhcnJheSddID0gKHBhdGgsIGluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdE9ic2VydmFibGUgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQgPz8gcmVhZEJ5UGF0aChwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gb2JzZXJ2YWJsZS5ib3g8YW55Pihpbml0T2JzZXJ2YWJsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxzOiBjb25zdEZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uKChkYXRhOiBhbnkpID0+IG1vZGVsLnNldChkYXRhKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGVPYmplY3Q6IE9ic2VydmFibGVNb2RlbExvY2FsWydvYmplY3QnXSA9IChwYXRoLCBpbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRPYnNlcnZhYmxlID0gKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0ID8/IHJlYWRCeVBhdGgocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IG9ic2VydmFibGUuYm94KGluaXRPYnNlcnZhYmxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHM6IGNvbnN0RmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKGRhdGE6IGFueSkgPT4gbW9kZWwuc2V0KGRhdGEpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGVQcmltaXRpdmVzOiBPYnNlcnZhYmxlTW9kZWxMb2NhbFsncHJpbWl0aXZlcyddID0gKGtleXM6IHVua25vd24sIHBhdGg/OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdE9ic2VydmFibGUgPSByZWFkQnlQYXRoKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5cykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0ga2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjW2tleV0gPSBvYnNlcnZhYmxlLmJveCgoaW5pdE9ic2VydmFibGUgYXMgUmVjb3JkPHN0cmluZywgVD4pW2tleV0sIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30gYXMgYW55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsW2tleV0uc2V0KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXNSZWNvcmQgPSBrZXlzIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGtleXNSZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBrZXlzRW50cmllcy5yZWR1Y2UoKGFjYywgW2tleUZyb20sIGtleVRvXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY1trZXlUb10gPSBvYnNlcnZhYmxlLmJveCgoaW5pdE9ic2VydmFibGUgYXMgUmVjb3JkPHN0cmluZywgVD4pW2tleUZyb21dLCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9IGFzIGFueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsTW9kZWwuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5c0VudHJpZXMuZm9yRWFjaCgoW2tleUZyb20sIGtleVRvXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsW2tleVRvXS5zZXQoZGF0YVtrZXlGcm9tXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFudXA6IENsZWFudXAgPSAoZm4pID0+IGNsZWFudXBzUmVmLmN1cnJlbnQucHVzaChmbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gbW9kZWxDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEJ5UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZU1vZGVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheTogb2JzZXJ2YWJsZUFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYnNlcnZhYmxlT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlczogb2JzZXJ2YWJsZVByaW1pdGl2ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzQXJncyA9IHsgbW9kZSwgbW9kZWwsIGV4dGVybmFsTW9kZWwsIGNsZWFudXAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPT09ICdtb2NrcycgJiYgbW9ja3MgPyBtb2Nrcy5jb250cm9scyhjb250cm9sc0FyZ3MpIDogY29udHJvbHNDcmVhdG9yKGNvbnRyb2xzQXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG1vZGVsLCBjb250cm9scywgZXh0ZXJuYWxNb2RlbCwgbW9kZSB9O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFttb2RlLCBjaGFuZ2VNb2RlXSA9IHVzZVN0YXRlPE1vZGU+KGRhdGFNb2RlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4gY3JlYXRlQ29udGV4dFZhbHVlKGRhdGFNb2RlLCBvcHRpb25zLCBtb2NrcykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFydGVkUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShjcmVhdGVDb250ZXh0VmFsdWUobW9kZSwgb3B0aW9ucywgbW9ja3MpKTtcclxuICAgICAgICAgICAgICAgIH0sIFttb2NrcywgbW9kZSwgb3B0aW9uc10pO1xyXG5cclxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9kZShkYXRhTW9kZSk7XHJcbiAgICAgICAgICAgICAgICB9LCBbZGF0YU1vZGVdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1c2VFZmZlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5leHRlcm5hbE1vZGVsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cHNSZWYuY3VycmVudC5mb3JFYWNoKChmbikgPT4gZm4oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KSxcclxuICAgICAgICBdIGFzIGNvbnN0O1xyXG4gICAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgbWFrZUVuZ2luZUV2ZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IHNldFRyYWNrTW91c2VPdXRzaWRlIH0gZnJvbSAnLi9pbnRlcm5hbCc7XHJcblxyXG5leHBvcnQgdHlwZSBHRk1vdXNlRXZlbnQgPSB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBidXR0b246IG51bWJlcjtcclxuICAgIGJ1dHRvbnM6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGNsaWVudFg6IG51bWJlcjtcclxuICAgIGNsaWVudFk6IG51bWJlcjtcclxuICAgIHNjcmVlblg6IG51bWJlcjtcclxuICAgIHNjcmVlblk6IG51bWJlcjtcclxuICAgIGFsdEtleTogYm9vbGVhbjtcclxuICAgIGN0cmxLZXk6IGJvb2xlYW47XHJcbiAgICBzaGlmdEtleTogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblJlc2l6ZSA9IG1ha2VFbmdpbmVFdmVudDwod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWQ+KCdjbGllbnRSZXNpemVkJyk7XHJcblxyXG5leHBvcnQgdHlwZSBHRk1vdXNlSGFuZGxlciA9IChldmVudDogR0ZNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBHRk1vdXNlRXZlbnROYW1lID0gJ2Rvd24nIHwgJ3VwJyB8ICdtb3ZlJztcclxuZXhwb3J0IHR5cGUgRXh0TW91c2VFdmVudCA9IFtldmVudDogR0ZNb3VzZUV2ZW50LCB0eXBlOiAnb3V0c2lkZSddIHwgW2V2ZW50OiBNb3VzZUV2ZW50LCB0eXBlOiAnaW5zaWRlJ107XHJcblxyXG5leHBvcnQgdHlwZSBNb3VzZUxpc3RlbmVyID0gKGV2ZW50OiBFeHRNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuY29uc3QgaW50ZXJuYWxNb3VzZSA9IHtcclxuICAgIGRvd246IG1ha2VFbmdpbmVFdmVudDxHRk1vdXNlSGFuZGxlcj4oJ21vdXNlZG93bicpLFxyXG4gICAgdXA6IG1ha2VFbmdpbmVFdmVudDxHRk1vdXNlSGFuZGxlcj4oJ21vdXNldXAnKSxcclxuICAgIG1vdmU6IG1ha2VFbmdpbmVFdmVudDxHRk1vdXNlSGFuZGxlcj4oJ21vdXNlbW92ZScpLFxyXG59O1xyXG5cclxudHlwZSBNb3VzZUV2ZW50c0FQSSA9IFJlY29yZDxHRk1vdXNlRXZlbnROYW1lLCAobGlzdGVuZXI6IE1vdXNlTGlzdGVuZXIpID0+ICgpID0+IHZvaWQ+ICYge1xyXG4gICAgZGlzYWJsZTogKCkgPT4gdm9pZDtcclxuICAgIGVuYWJsZTogKCkgPT4gdm9pZDtcclxuICAgIGVuYWJsZU91dHNpZGU6ICgpID0+IHZvaWQ7XHJcbiAgICBkaXNhYmxlT3V0c2lkZTogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgbW91c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHZpZXcgaXMgZXhwZW5zaXZlIG9wZXJhdGlvbi5cclxuICogVGhpcyBkZWNvcmF0b3Igc2VwYXJhdGUgdHJhY2sgbW91c2UgZXZlbnRzIGJldHdlZW4gaW5zaWRlIGFuZCBvdXRzaWRlLlxyXG4gKiBXaGVuIGN1cnNvciBpcyBvdXRzaWRlIG9mIHRoZSB2aWV3LlxyXG4gKiBXaGVuIG1vdXNlIGN1cnNvciBpcyBpbnNpZGUgb2YgdGhlIHZpZXcsIGl0IHdpbGwgYmUgdHJhY2tlZCBieSBpbnRlcm5hbCBkZWZhdWx0IGV2ZW50cy5cclxuICpcclxuICogRnVuY3Rpb24gZW5jYXBzdWxhdGUgbG9naWMgYW5kIHN0YXRlIGluc2lkZS5cclxuICovXHJcbmZ1bmN0aW9uIGluaXRNb3VzZUV2ZW50cygpOiBNb3VzZUV2ZW50c0FQSSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICBsaXN0ZW5lcnM6IDAsXHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMYXp5VHJhY2soKSB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmxpc3RlbmVycyA8IDEpIHtcclxuICAgICAgICAgICAgc3RhdGUuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGFuZGxlTW91c2VFbnRlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLmluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGFuZGxlTW91c2VFbnRlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlRXZlbnQobmFtZTogR0ZNb3VzZUV2ZW50TmFtZSkge1xyXG4gICAgICAgIHJldHVybiAobGlzdGVuZXI6IE1vdXNlTGlzdGVuZXIpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzICs9IDE7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSB0cnVlOyAvLyBwcmV2ZW50IGRvdWJsZSBkaXNwb3NlKHVuc3Vic2NyaWJlKVxyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3dFdmVudCA9IGBtb3VzZSR7bmFtZX1gO1xyXG4gICAgICAgICAgICBjb25zdCBkaXNwb3NlID0gaW50ZXJuYWxNb3VzZVtuYW1lXSgoZXZlbnQpID0+IGxpc3RlbmVyKFtldmVudCwgJ291dHNpZGUnXSkpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVXaW5kb3dFdmVudChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoW2V2ZW50LCAnaW5zaWRlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHdpbmRvd0V2ZW50LCBoYW5kbGVXaW5kb3dFdmVudCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3dFdmVudCwgaGFuZGxlV2luZG93RXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzIC09IDE7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXp5VHJhY2soKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXZlbnRzOiBUdXBsaWZ5PEdGTW91c2VFdmVudE5hbWU+ID0gWydkb3duJywgJ3VwJywgJ21vdmUnXTtcclxuXHJcbiAgICBjb25zdCBzdWJzY3JpYmVBcGkgPSBldmVudHMucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcclxuICAgICAgICBhY2NbbmFtZV0gPSBtYWtlRXZlbnQobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIDxQaWNrPE1vdXNlRXZlbnRzQVBJLCBHRk1vdXNlRXZlbnROYW1lPj57fSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdWJzY3JpYmVBcGksXHJcbiAgICAgICAgZGlzYWJsZSgpIHtcclxuICAgICAgICAgICAgc3RhdGUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB1cGRhdGVMYXp5VHJhY2soKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZSgpIHtcclxuICAgICAgICAgICAgc3RhdGUuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5hYmxlT3V0c2lkZSgpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlT3V0c2lkZSgpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbW91c2UgPSBpbml0TW91c2VFdmVudHMoKTtcclxuIiwiZXhwb3J0ICogYXMgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpemUodW5pdDogJ3B4JyB8ICdyZW0nID0gJ3B4Jykge1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZpZXdFbnYuZ2V0Q2xpZW50U2l6ZVJlbSgpIDogdmlld0Vudi5nZXRDbGllbnRTaXplUHgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdXNlR2xvYmFsUG9zaXRpb24odW5pdDogJ3B4JyB8ICdyZW0nID0gJ3B4Jykge1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZpZXdFbnYuZ2V0TW91c2VHbG9iYWxQb3NpdGlvblJlbSgpIDogdmlld0Vudi5nZXRNb3VzZUdsb2JhbFBvc2l0aW9uUHgoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdyYXBoaWNzUXVhbGl0eSA9IHtcbiAgICBpc0xvdzogKCkgPT4gdmlld0Vudi5nZXRHcmFwaGljc1F1YWxpdHkoKSA9PT0gMSxcbiAgICBpc0hpZ2g6ICgpID0+IHZpZXdFbnYuZ2V0R3JhcGhpY3NRdWFsaXR5KCkgPT09IDAsXG4gICAgZ2V0OiAoKSA9PiB2aWV3RW52LmdldEdyYXBoaWNzUXVhbGl0eSgpLFxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRUcmFja01vdXNlT3V0c2lkZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdmlld0Vudi5zZXRUcmFja01vdXNlT25TdGFnZSh2YWx1ZSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VFbmdpbmVFdmVudDxUIGV4dGVuZHMgRnVuY3Rpb24+KGV2ZW50TmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGhhbmRsZXI6IFQpID0+IHtcclxuICAgICAgICBlbmdpbmUub24oZXZlbnROYW1lLCBoYW5kbGVyIGFzIG5ldmVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBlbmdpbmUub2ZmKGV2ZW50TmFtZSwgaGFuZGxlciBhcyBuZXZlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgY2xpZW50IGZyb20gJy4vY2xpZW50JztcclxuaW1wb3J0ICogYXMgdmlldyBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudiA9IHtcclxuICAgIHZpZXcsXHJcbiAgICBjbGllbnQsXHJcbn07XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAod2luZG93IGFzIGFueSkuZW52ID0gZW52O1xyXG59XHJcbiIsImltcG9ydCB7IFNpemUgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0dXJlVXJsKGNoaWxkSWQ6IG51bWJlciwgc2l6ZTogU2l6ZSwgc2NhbGUgPSAxKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuZ2V0Q2hpbGRUZXh0dXJlUGF0aChjaGlsZElkLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmdVcmwoY2hpbGRJZDogbnVtYmVyLCBzaXplOiBTaXplLCBzY2FsZT86IG51bWJlcikge1xuICAgIHJldHVybiBgdXJsKCR7Z2V0VGV4dHVyZVVybChjaGlsZElkLCBzaXplLCBzY2FsZSl9KWA7XG59XG4iLCJleHBvcnQgdHlwZSBTaXplID0ge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBQb2ludCA9IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlTdGF0dXMgPSB7XG4gICAgc2hvd2luZzogMCxcbiAgICBzaG93bjogMSxcbiAgICBoaWRpbmc6IDIsXG4gICAgaGlkZGVuOiAzLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgRGlzcGxheVN0YXR1cyA9IFZhbHVlT2Y8dHlwZW9mIGRpc3BsYXlTdGF0dXM+O1xuIiwiaW1wb3J0IHsgbWFrZUVuZ2luZUV2ZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IERpc3BsYXlTdGF0dXMsIFBvaW50IH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2hpbGRyZW5FdmVudEhhbmRsZXIgPSAodmlld0lkOiBudW1iZXIsIGluc3RhbmNlSWQ6IG51bWJlciwgcmVzSWQ6IG51bWJlcikgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgUmVxdWVzdFBvc2l0aW9uSGFuZGxlciA9ICh2aWV3SWQ6IG51bWJlciwgcG9zaXRpb246IFBvaW50KSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBDaGFuZ2VEaXNwbGF5SGFuZGxlciA9IChwcmV2U3RhdHVzOiBEaXNwbGF5U3RhdHVzLCBjdXJyZW50U3RhdHVzOiBEaXNwbGF5U3RhdHVzKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBGb2N1c1VwZGF0ZWRIYW5kbGVyID0gKHByZXZTdGF0dXM6IERpc3BsYXlTdGF0dXMsIGN1cnJlbnRTdGF0dXM6IERpc3BsYXlTdGF0dXMpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gICAgb25UZXh0dXJlRnJvemVuOiBtYWtlRW5naW5lRXZlbnQ8KCkgPT4gdm9pZD4oJ3NlbGYub25UZXh0dXJlRnJvemVuJyksXHJcbiAgICBvblRleHR1cmVSZWFkeTogbWFrZUVuZ2luZUV2ZW50PCgpID0+IHZvaWQ+KCdzZWxmLm9uVGV4dHVyZVJlYWR5JyksXHJcbiAgICBvbkRvbUJ1aWx0OiBtYWtlRW5naW5lRXZlbnQ8KCkgPT4gdm9pZD4oJ3NlbGYub25Eb21CdWlsdCcpLFxyXG4gICAgb25Mb2FkZWQ6IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vbkxvYWRlZCcpLFxyXG4gICAgb25EaXNwbGF5Q2hhbmdlZDogbWFrZUVuZ2luZUV2ZW50PENoYW5nZURpc3BsYXlIYW5kbGVyPignc2VsZi5vblNob3dpbmdTdGF0dXNDaGFuZ2VkJyksXHJcbiAgICBvbkZvY3VzVXBkYXRlZDogbWFrZUVuZ2luZUV2ZW50PEZvY3VzVXBkYXRlZEhhbmRsZXI+KCdzZWxmLm9uRm9jdXNDaGFuZ2VkJyksXHJcbiAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIG9uQWRkZWQ6IG1ha2VFbmdpbmVFdmVudDxDaGlsZHJlbkV2ZW50SGFuZGxlcj4oJ2NoaWxkcmVuLm9uQWRkZWQnKSxcclxuICAgICAgICBvbkxvYWRlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25Mb2FkZWQnKSxcclxuICAgICAgICBvblJlbW92ZWQ6IG1ha2VFbmdpbmVFdmVudDxDaGlsZHJlbkV2ZW50SGFuZGxlcj4oJ2NoaWxkcmVuLm9uUmVtb3ZlZCcpLFxyXG4gICAgICAgIG9uQXR0YWNoZWQ6IG1ha2VFbmdpbmVFdmVudDxDaGlsZHJlbkV2ZW50SGFuZGxlcj4oJ2NoaWxkcmVuLm9uQXR0YWNoZWQnKSxcclxuICAgICAgICBvblRleHR1cmVSZWFkeTogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25UZXh0dXJlUmVhZHknKSxcclxuICAgICAgICBvblJlcXVlc3RQb3NpdGlvbjogbWFrZUVuZ2luZUV2ZW50PFJlcXVlc3RQb3NpdGlvbkhhbmRsZXI+KCdjaGlsZHJlbi5yZXF1ZXN0UG9zaXRpb24nKSxcclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCAqIGFzIGNoaWxkcmVuIGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgRGlzcGxheVN0YXR1cywgZGlzcGxheVN0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHNlbmRFdmVudCB9IGZyb20gJy4vc2VuZEV2ZW50JztcblxuZXhwb3J0IHR5cGUgeyBQb2ludCwgU2l6ZSwgRGlzcGxheVN0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IHsgZXZlbnRzLCBzZW5kRXZlbnQsIGNoaWxkcmVuLCBkaXNwbGF5U3RhdHVzIH07XG5cbmV4cG9ydCB0eXBlIFNpZGVzID0ge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xufTtcblxuY29uc3QgQUxMX1NJREVTID0gMHhmO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJlbG9hZFRleHR1cmUocGF0aDogc3RyaW5nKSB7XG4gICAgdmlld0Vudi5hZGRQcmVsb2FkVGV4dHVyZShwYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElucHV0UGFkZGluZ3NSZW0ocGFkZGluZ3M6IG51bWJlcikge1xuICAgIHZpZXdFbnYuc2V0SGl0QXJlYVBhZGRpbmdzUmVtKHBhZGRpbmdzLCBwYWRkaW5ncywgcGFkZGluZ3MsIHBhZGRpbmdzLCBBTExfU0lERVMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlclRleHR1cmVQYXRoKGlkOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzY2FsZSA9IDEpIHtcbiAgICByZXR1cm4gdmlld0Vudi5nZXRXZWJCcm93c2VyVGV4dHVyZVBhdGgoaWQsIHdpZHRoLCBoZWlnaHQsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGVsT2JzZXJ2ZXIocGF0aDogc3RyaW5nLCByZXNJZDogbnVtYmVyLCB0cmFja1N1Ykl0ZW1zOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuYWRkRGF0YUNoYW5nZWRDYWxsYmFjayhwYXRoLCByZXNJZCwgdHJhY2tTdWJJdGVtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTaWRlUGFkZGluZ3NSZW0ocGFkZGluZ3M6IFNpZGVzKSB7XG4gICAgdmlld0Vudi5zZXRIaXRBcmVhUGFkZGluZ3NSZW0ocGFkZGluZ3MudG9wLCBwYWRkaW5ncy5yaWdodCwgcGFkZGluZ3MuYm90dG9tLCBwYWRkaW5ncy5sZWZ0LCBBTExfU0lERVMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZSh1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5nZXRWaWV3U2l6ZVJlbSgpIDogdmlld0Vudi5nZXRWaWV3U2l6ZVB4KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHVuaXQ6ICdweCcgfCAncmVtJyA9ICdweCcpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2aWV3RW52LnJlc2l6ZVZpZXdSZW0od2lkdGgsIGhlaWdodCkgOiB2aWV3RW52LnJlc2l6ZVZpZXdQeCh3aWR0aCwgaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdHbG9iYWxQb3NpdGlvbih1bml0OiAncHgnIHwgJ3JlbScgPSAncmVtJykge1xuICAgIGNvbnN0IHZhbHVlID0gdmlld0Vudi5nZXRWaWV3R2xvYmFsUG9zaXRpb25SZW0oKTtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2YWx1ZSA6IHsgeDogcmVtVG9QeCh2YWx1ZS54KSwgeTogcmVtVG9QeCh2YWx1ZS55KSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJlZXplVGV4dHVyZUJlZm9yZVJlc2l6ZSgpIHtcbiAgICB2aWV3RW52LmZyZWV6ZVRleHR1cmVCZWZvcmVSZXNpemUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxlKCkge1xuICAgIHJldHVybiB2aWV3RW52LmdldFNjYWxlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBweFRvUmVtKHB4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmlld0Vudi5weFRvUmVtKHB4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbVRvUHgocmVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmlld0Vudi5yZW1Ub1B4KHJlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBbmltYXRlV2luZG93KHNob3dpbmc6IGJvb2xlYW4sIGhpZGluZzogYm9vbGVhbikge1xuICAgIHZpZXdFbnYuc2V0QW5pbWF0ZVdpbmRvdyhzaG93aW5nLCBoaWRpbmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2aWV3RW52LmlzRm9jdXNlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RXZlbnRIYW5kbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2aWV3RW52LnNldEV2ZW50SGFuZGxlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVudEhhbmRsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZpZXdFbnYuaXNFdmVudEhhbmRsZWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcmNlVHJpZ2dlck1vdXNlTW92ZSgpIHtcbiAgICB2aWV3RW52LmZvcmNlVHJpZ2dlck1vdXNlTW92ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheVN0YXR1cygpIHtcbiAgICByZXR1cm4gdmlld0Vudi5nZXRTaG93aW5nU3RhdHVzKCkgYXMgRGlzcGxheVN0YXR1cztcbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlTdGF0dXNJcyA9IE9iamVjdC5rZXlzKGRpc3BsYXlTdGF0dXMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9ICgpID0+IHZpZXdFbnYuZ2V0U2hvd2luZ1N0YXR1cygpID09PSBkaXNwbGF5U3RhdHVzW2tleV07XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9IGFzIFJlY29yZDxrZXlvZiB0eXBlb2YgZGlzcGxheVN0YXR1cywgKCkgPT4gYm9vbGVhbj4pO1xuXG5leHBvcnQgY29uc3QgZXh0cmFTaXplID0ge1xuICAgIC8qKiBSZW0gdW5pdHMgKi9cbiAgICBzZXQ6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICB2aWV3RW52LnNldEV4dHJhU2l6ZVJlbSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9LFxuICAgIC8qKiBSZW0gdW5pdHMgKi9cbiAgICBnZXQ6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICB2aWV3RW52LmdldEV4dHJhU2l6ZVJlbSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHdoZW5UdXRvcmlhbFJlYWR5ID0gUHJvbWlzZS5hbGw8dm9pZD4oW1xuICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaXNEb21CdWlsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzLm9uRG9tQnVpbHQocmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBlbmdpbmUud2hlblJlYWR5LFxuXSk7XG4iLCJleHBvcnQgdHlwZSBWaWV3RXZlbnRBcmdzID0geyBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIFZpZXdFdmVudE9wdGlvbnMgPSBQaWNrPFxuICAgIEdGVmlld0V2ZW50UHJveHksXG4gICAgJ2NvbnRlbnRJRCcgfCAnZGVjb3JhdG9ySUQnIHwgJ2lzTW91c2VFdmVudCcgfCAnb24nIHwgJ2RpcmVjdGlvbicgfCAnYmJveCdcbj4gJiB7IGFyZ3M/OiBWaWV3RXZlbnRBcmdzIH07XG5cbmV4cG9ydCBjb25zdCB2aWV3RXZlbnRUeXBlcyA9IHtcbiAgICBjbG9zZVBvcG92ZXI6IDIsXG4gICAgbW92ZTogMTYsXG4gICAgY2xvc2U6IDMyLFxuICAgIG1pbmltaXplOiA2NCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZpZXdFdmVudFR5cGUgPSBWYWx1ZU9mPHR5cGVvZiB2aWV3RXZlbnRUeXBlcz47XG5cbmNvbnN0IGNyZWF0ZVZpZXdFdmVudEFyZ3VtZW50cyA9IChkYXRhOiBWaWV3RXZlbnRBcmdzKTogR0ZWYWx1ZVByb3h5W10gPT4ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgX19UeXBlID0gJ0dGVmFsdWVQcm94eSc7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBib29sOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IHZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRWaWV3RXZlbnQgPSAodHlwZTogVmlld0V2ZW50VHlwZSwgb3B0aW9ucz86IFZpZXdFdmVudE9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBfX1R5cGUgPSAnR0ZWaWV3RXZlbnRQcm94eSc7XG4gICAgaWYgKG9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB7IGFyZ3MsIC4uLnJlc3RPcHRpb25zIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChhcmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XG4gICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgLi4ucmVzdE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBjcmVhdGVWaWV3RXZlbnRBcmd1bWVudHMoYXJncyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XG4gICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgLi4ucmVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XG4gICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZEV2ZW50ID0ge1xuICAgIGNsb3NlKHR5cGU/OiAncG9wb3ZlcicpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwb3BvdmVyJykge1xuICAgICAgICAgICAgc2VuZFZpZXdFdmVudCh2aWV3RXZlbnRUeXBlcy5jbG9zZVBvcG92ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFZpZXdFdmVudCh2aWV3RXZlbnRUeXBlcy5jbG9zZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1pbmltaXplKCkge1xuICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLm1pbmltaXplKTtcbiAgICB9LFxuICAgIG1vdmUoc3RhcnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc2VuZFZpZXdFdmVudCh2aWV3RXZlbnRUeXBlcy5tb3ZlLCB7XG4gICAgICAgICAgICBpc01vdXNlRXZlbnQ6IHRydWUsXG4gICAgICAgICAgICBvbjogc3RhcnQsXG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuIiwiLyoqIEVtcHR5IGZ1bmN0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG5cbi8qKiBBbGlhcyBvZiBub29wICovXG5leHBvcnQgY29uc3QgZW1wdHlGdW5jdGlvbiA9IG5vb3A7XG5cbi8qKlxuICogVGhpcyBoZWxwZXIgZnVuY3Rpb24gZm9yIGNvcm5lciBjYXNlXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYGpzXG4gKiBPYmplY3Qua2V5cyhvYmopLm1hcChpZGVudGl0eSkgLy8gLT4gWy4uXVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTxBPihhOiBBKSB7XG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQ2FuIGJlIHVzZWQgbGlrZSB0aGlzOlxuICogYGBgXG4gKiBjb21wdXRlZCgoKSA9PiBzb21lLnZhbHVlLCB7IGVxdWFsczogY29uc3RGYWxzZSB9KVxuICogYGBgXG4gKiBNZWFucyB0aGF0IHZhbHVlIHdpbGwgdHJpZ2dlciB1cGRhdGVzIGJ5IG11dGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RGYWxzZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIGJlIHVzZWQgbGlrZSB0aGlzOlxuICogYGBgXG4gKiBjb21wdXRlZCgoKSA9PiBzb21lLnZhbHVlLCB7IGVxdWFsczogY29uc3RUcnVlIH0pXG4gKiBgYGBcbiAqIE1lYW5zIHRoYXQgdmFsdWUgd2lsbCAqKm5ldmVyKiogdHJpZ2dlciB1cGRhdGVzIGJ5IG11dGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RUcnVlKCkge1xuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGZvciBsb2dnaW5nIGNhbGxiYWNrcyBpbnNpZGUgRGF0YSBMYXllciBNb2NrcyB3aXRob3V0IGxpbnRlciBpc3N1ZXNcbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYGpzXG4gKiAgICAgY29udHJvbHM6ICgpID0+IHtcbiAqICAgICAgICAgcmV0dXJuIG1ha2VBY3Rpb25zKHtcbiAqICAgICAgICAgICAgIGdvVG9CcmFuY2hSZXNldDogKCkgPT4gbG9nKCdvbkdvVG9CcmFuY2hSZXNldCcpLFxuICogICAgICAgICB9KTtcbiAqICAgICB9LFxuICogYGBgXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5leHBvcnQgY29uc3QgbG9nID0gY29uc29sZS5sb2c7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1tdWx0aS1jb21wICovXHJcbmltcG9ydCB7IERyYWZ0UHJvcHMgfSBmcm9tICdsaWIvZHJhZnRlZC90eXBlcyc7XHJcbmltcG9ydCB7IE1lZGlhU2l6ZSwgdXNlTWVkaWEgfSBmcm9tICdsaWIvaG9va3MvdXNlTWVkaWEnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgU3RhdGljS2V5VHlwZTxBZGFwdGl2ZUtleSBleHRlbmRzIHN0cmluZz4gPSBBZGFwdGl2ZUtleSBleHRlbmRzIGAke2luZmVyIEJhc2V9XyR7QWRhcHRpdmVTdWZmaXhUeXBlfWBcclxuICAgID8gQmFzZVxyXG4gICAgOiBuZXZlcjtcclxuXHJcbnR5cGUgQWRhcHRpdmVTdWZmaXhUeXBlID0gJ3hsJyB8ICdsZycgfCAnbWQnIHwgJ3NtJyB8ICd4cyc7XHJcbnR5cGUgQWRhcHRpdmVLZXlzVHlwZTxLZXlzIGV4dGVuZHMgc3RyaW5nPiA9IGAke0tleXN9XyR7QWRhcHRpdmVTdWZmaXhUeXBlfWA7XHJcbnR5cGUgQWRhcHRpdmVQcm9wc09ubHk8UHJvcHMgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSwgQWRhcHRpdmVQcm9wTmFtZXMgZXh0ZW5kcyBrZXlvZiBQcm9wcz4gPSB7XHJcbiAgICBba2V5IGluIEFkYXB0aXZlS2V5c1R5cGU8RXhjbHVkZTxBZGFwdGl2ZVByb3BOYW1lcywgbnVtYmVyIHwgc3ltYm9sPj5dPzogUHJvcHNbU3RhdGljS2V5VHlwZTxrZXk+XTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEFkYXB0aXZlUHJvcHM8U3RhdGljUHJvcHMgZXh0ZW5kcyB7fSwgQWRhcHRpdmVLZXlzIGV4dGVuZHMga2V5b2YgU3RhdGljUHJvcHM+ID0gU3RhdGljUHJvcHMgJlxyXG4gICAgQWRhcHRpdmVQcm9wc09ubHk8U3RhdGljUHJvcHMsIEFkYXB0aXZlS2V5cz47XHJcblxyXG5leHBvcnQgY29uc3QgYWRhcHRpdmVTdWZmaXhTZXF1ZW5jZSA9IFsneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGlzQWRhcHRpdmVTdWZmaXggPSAoa2V5Pzogc3RyaW5nKToga2V5IGlzIEFkYXB0aXZlU3VmZml4VHlwZSA9PiB7XHJcbiAgICByZXR1cm4gYWRhcHRpdmVTdWZmaXhTZXF1ZW5jZS5pbmNsdWRlcyhrZXkgYXMgQWRhcHRpdmVTdWZmaXhUeXBlKTtcclxufTtcclxuXHJcbmNvbnN0IGlzQWRhcHRpdmVQcm9wTmFtZSA9IChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGtleS5pbmNsdWRlcygnXycpICYmIGlzQWRhcHRpdmVTdWZmaXgoa2V5LnNwbGl0KCdfJykuYXQoLTEpKTtcclxufTtcclxuXHJcbmNvbnN0IG1lZGlhU2l6ZVNlcXVlbmNlID0gW1xyXG4gICAgTWVkaWFTaXplLkV4dHJhTGFyZ2UsXHJcbiAgICBNZWRpYVNpemUuTGFyZ2UsXHJcbiAgICBNZWRpYVNpemUuTWVkaXVtLFxyXG4gICAgTWVkaWFTaXplLlNtYWxsLFxyXG4gICAgTWVkaWFTaXplLkV4dHJhU21hbGwsXHJcbl0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgaGFzRGVmaW5lZEFkYXB0aXZlUHJvcHMgPSAocHJvcE5hbWU6IHN0cmluZywgcHJvcHM6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KSA9PiB7XHJcbiAgICByZXR1cm4gYWRhcHRpdmVTdWZmaXhTZXF1ZW5jZS5zb21lKChzdWZmaXgpID0+IHByb3BzW2Ake3Byb3BOYW1lfV8ke3N1ZmZpeH1gXSAhPT0gdW5kZWZpbmVkKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBOb3JtYWxpemVzIGFsbCBhZGFwdGl2ZSBwcm9wZXJ0aWVzIGJ5IHBpY2tpbmcgdGhlIGxhcmdlc3QgcHJvcGVydHkgZnJvbSBhIGxpc3QsIGZvciBleGFtcGxlIGBtX3hsLCBtX2xnLCBtX21kLCBtX3NtLCBtX3hzYCB0aGF0IGlzIG5vdCBsYXJnZXIgdGhhbiBNZWRpYVNpemUgYW5kIHJldHVybmluZyBpdCBhcyBgbWAgaW4gYSBuZXcgb2JqZWN0IHdpdGggb25seSB0aGUgbm9ybWFsaXplZCBwcm9wcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gQW4gb2JqZWN0IHdpdGggYWRhcHRpdmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtNZWRpYVNpemV9IG1lZGlhU2l6ZSAtIEEgbWVkaWEgc2l6ZSB0byBub3JtYWxpemUgYWRhcHRpdmUgcHJvcHMgZm9yLlxyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gQSBuZXcgb2JqZWN0IHdpdGggbm9ybWFsaXplZCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMgPSAocHJvcHM6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LCBtZWRpYVNpemU6IE1lZGlhU2l6ZSkgPT4ge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoKG91dHB1dCwgcHJvcE5hbWUpID0+IHtcclxuICAgICAgICAvLyBJZiBrZXkgaXMgYWxyZWFkeSBpbiBvdXRwdXQsIGl0IG1lYW5zIGl0IGlzIGEgYmFzZSBmb3IgYW4gYWRhcHRpdmUgcHJvcCB3aGljaCB3YXMgYWxyZWFkeSBwcm9jZXNzZWQgLT4gc2tpcFxyXG4gICAgICAgIGlmIChwcm9wTmFtZSBpbiBvdXRwdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQWRhcHRpdmVQcm9wTmFtZShwcm9wTmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgYmFzZVByb3BOYW1lID0gcHJvcE5hbWUuc3BsaXQoJ18nKS5zbGljZSgwLCAtMSkuam9pbignXycpO1xyXG4gICAgICAgICAgICAvLyBpZiBiYXNlIHByb3AgaXMgYWxyZWFkeSBpbiBvdXRwdXQsIGl0IG11c3QgaGF2ZSBiZWVuIGFscmVhZHkgcHJvY2Vzc2VkIC0+IHNraXBcclxuICAgICAgICAgICAgaWYgKGJhc2VQcm9wTmFtZSBpbiBvdXRwdXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWVkaWFTaXplSW5kZXggPSBtZWRpYVNpemVTZXF1ZW5jZS5pbmRleE9mKG1lZGlhU2l6ZSk7XHJcbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgYWRhcHRpdmUgcHJvcGVydGllcyB0aGF0IGFyZSBsYXJnZXIgdGhhbiBtZWRpYVNpemVcclxuICAgICAgICAgICAgY29uc3QgcmVsZXZhbnRBZGFwdGl2ZVN1ZmZpeGVzID0gbWVkaWFTaXplSW5kZXggIT09IC0xID8gYWRhcHRpdmVTdWZmaXhTZXF1ZW5jZS5zbGljZShtZWRpYVNpemVJbmRleCkgOiBbXTtcclxuICAgICAgICAgICAgY29uc3QgcmVsZXZhbnRQcm9wZXJ0eU5hbWVzID0gcmVsZXZhbnRBZGFwdGl2ZVN1ZmZpeGVzLm1hcCgoc3VmZml4KSA9PiBiYXNlUHJvcE5hbWUgKyAnXycgKyBzdWZmaXgpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNvbHZlZFByb3BOYW1lID0gcmVsZXZhbnRQcm9wZXJ0eU5hbWVzLmZpbmQoKHByb3BOYW1lKSA9PiBwcm9wc1twcm9wTmFtZV0gIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkUHJvcFZhbHVlID0gcmVzb2x2ZWRQcm9wTmFtZSA/IHByb3BzW3Jlc29sdmVkUHJvcE5hbWVdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAvLyBhc3NpZ24gYmFzZVByb3Agd2l0aCB2YWx1ZSBvZiB0aGUgZmlyc3QgcmVsZXZhbnQgYWRhcHRpdmUgcHJvcCBvciBiYXNlIHByb3BcclxuICAgICAgICAgICAgb3V0cHV0W2Jhc2VQcm9wTmFtZV0gPSByZXNvbHZlZFByb3BWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcmVzb2x2ZWRQcm9wVmFsdWUgOiBwcm9wc1tiYXNlUHJvcE5hbWVdO1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcclxuICAgICAgICAvLyBza2lwIHByb3BzIHRoYXQgYXJlIHVuZGVmaW5lZCBvciBoYXZlIHNvbWUgYWRhcHRpdmUgcHJvcGVydGllcyBzZXRcclxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCBoYXNEZWZpbmVkQWRhcHRpdmVQcm9wcyhwcm9wTmFtZSwgcHJvcHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dHB1dFtwcm9wTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfSwge30gYXMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBjb21wb25lbnQgdGhhdCBub3JtYWxpemVzIGFkYXB0aXZlIHByb3BlcnRpZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgbWVkaWEgc2l6ZSBhbmQgcGFzc2VzIGl0IHRvIHRoZSBDb21wb25lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50VHlwZTxTdGF0aWNQcm9wcz59IENvbXBvbmVudCAtIFJlYWN0IGNvbXBvbmVudCB0aGF0IGhhbmRsZXMgc3RhdGljIHByb3BzLlxyXG4gKiBAcGFyYW0ge3R5cGVvZiBub3JtYWxpemVBZGFwdGl2ZVByb3BzfSBub3JtYWxpemVQcm9wcyAtIG9wdGlvbmFsIGN1c3RvbSBmdW5jdGlvbiB0aGF0IG5vcm1hbGl6ZXMgYWRhcHRpdmUgcHJvcHMsIHVzZWZ1bCBtYWlubHkgZm9yIHRlc3RpbmcuXHJcbiAqIEByZXR1cm4ge0pTWC5FbGVtZW50fSB0aGUgQm94IGNvbXBvbmVudCB3aXRoIG5vcm1hbGl6ZWQgYWRhcHRpdmUgcHJvcGVydGllc1xyXG4gKi9cclxuY29uc3QgZ2V0QWRhcHRpdmVDb21wb25lbnQgPVxyXG4gICAgPFN0YXRpY1Byb3BzIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sIEFkYXB0aXZlS2V5cyBleHRlbmRzIGtleW9mIFN0YXRpY1Byb3BzPihcclxuICAgICAgICBDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8U3RhdGljUHJvcHM+LFxyXG4gICAgICAgIG5vcm1hbGl6ZVByb3BzOiB0eXBlb2Ygbm9ybWFsaXplQWRhcHRpdmVQcm9wcyA9IG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMsXHJcbiAgICApID0+XHJcbiAgICAocHJvcHM6IEFkYXB0aXZlUHJvcHM8U3RhdGljUHJvcHMsIEFkYXB0aXZlS2V5cz4pID0+IHtcclxuICAgICAgICBjb25zdCB7IG1lZGlhU2l6ZSB9ID0gdXNlTWVkaWEoKTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkUHJvcHMgPSB1c2VNZW1vKCgpID0+IG5vcm1hbGl6ZVByb3BzKHByb3BzLCBtZWRpYVNpemUpLCBbcHJvcHMsIG1lZGlhU2l6ZV0pO1xyXG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi4obm9ybWFsaXplZFByb3BzIGFzIFN0YXRpY1Byb3BzKX0gLz47XHJcbiAgICB9O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgZWl0aGVyIGFuIEFkYXB0aXZlQ29tcG9uZW50IG9yIGEgQ29tcG9uZW50IGRlcGVuZGluZyBvbiB3aGV0aGVyIGFkYXB0aXZlIHByb3BzIGFyZSBwcmVzZW50IGluIHRoZSBwcm9wcyBvYmplY3QuXHJcbiAqIEdlbmVyaWMgdHlwZXMgU3RhdGljUHJvcHMgKGUuZy4gQ29tcFByb3BzKSBhbmQgQWRhcHRpdmVLZXlzIChlLmcuIENvbXBBZGFwdGl2ZVByb3BOYW1lcykgYXJlIG9wdGlvbmFsLiBBZGFwdGl2ZSBsb2dpYyB3b3VsZCB3b3JrXHJcbiAqIG9uIGFueSBwcm9wcyBpbiBydW50aW1lLCBidXQgYWRkaW5nIHRoZSB0eXBlcyB3aWxsIGZpbHRlciB3aGljaCBrZXlzIGFyZSB2YWxpZGF0ZWQgYnkgVHlwZXNjcmlwdCBzbyB0aGF0IGFkYXB0aXZlIHByb3BzXHJcbiAqIHRoYXQgZG8gbm90IG1ha2Ugc2Vuc2UgYXJlIG5vdCBzdWdnZXN0ZWQgYnkgaW50ZWxsaXNlbnNlLlxyXG4gKiBAdXNhZ2UgKGluIHJvb3Qgc2NvcGUpIGNvbnN0IEFkYXB0aXZlQ29tcCA9IGdldEFkYXB0aXZlQ29udHJvbGxlcjxDb21wUHJvcHMsIENvbXBBZGFwdGl2ZVByb3BOYW1lcz4oQ29tcCk7XHJcbiAqICBleHBvcnQgdHlwZSBDb21wQWRhcHRpdmVQcm9wTmFtZXMgPSAnc2l6ZScgfCAnY2xhc3NOYW1lJztcclxuICogIGV4cG9ydCB0eXBlIENvbXBQcm9wcyA9IENvbXBTdGF0aWNQcm9wcyAmIEFkYXB0aXZlUHJvcHM8Q29tcFN0YXRpY1Byb3BzLCBDb21wQWRhcHRpdmVQcm9wTmFtZXNUeXBlPjtcclxuICogIGV4cG9ydCBkZWZhdWx0IEFkYXB0aXZlQ29tcDtcclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db21wb25lbnRUeXBlPFN0YXRpY1Byb3BzPn0gQ29tcG9uZW50IC0gUmVhY3QgY29tcG9uZW50IHRoYXQgaGFuZGxlcyBzdGF0aWMgcHJvcHMuXHJcbiAqIEBwYXJhbSB7dHlwZW9mIG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHN9IG5vcm1hbGl6ZVByb3BzIC0gb3B0aW9uYWwgY3VzdG9tIGZ1bmN0aW9uIHRoYXQgbm9ybWFsaXplcyBhZGFwdGl2ZSBwcm9wcywgdXNlZnVsIG1haW5seSBmb3IgdGVzdGluZy5cclxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IEVpdGhlciBhbiBBZGFwdGl2ZUJveCBvciBhIEJveCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0QWRhcHRpdmVDb250cm9sbGVyID0gPFxyXG4gICAgU3RhdGljUHJvcHMgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSxcclxuICAgIEFkYXB0aXZlS2V5cyBleHRlbmRzIGtleW9mIFN0YXRpY1Byb3BzLFxyXG4+KFxyXG4gICAgQ29tcG9uZW50OiBSZWFjdC5Db21wb25lbnRUeXBlPFN0YXRpY1Byb3BzPixcclxuICAgIG5vcm1hbGl6ZVByb3BzOiB0eXBlb2Ygbm9ybWFsaXplQWRhcHRpdmVQcm9wcyA9IG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMsXHJcbikgPT4ge1xyXG4gICAgY29uc3QgQWRhcHRpdmVDb21wb25lbnQgPSBnZXRBZGFwdGl2ZUNvbXBvbmVudChDb21wb25lbnQsIG5vcm1hbGl6ZVByb3BzKSBhcyBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgICAgIEFkYXB0aXZlUHJvcHM8U3RhdGljUHJvcHMsIEFkYXB0aXZlS2V5cz5cclxuICAgID47XHJcbiAgICByZXR1cm4gUmVhY3QubWVtbygocHJvcHM6IEFkYXB0aXZlUHJvcHM8U3RhdGljUHJvcHMsIEFkYXB0aXZlS2V5cz4pID0+IHtcclxuICAgICAgICBjb25zdCBoYXNBZGFwdGl2ZVByb3BzID0gT2JqZWN0LmtleXMocHJvcHMpLnNvbWUoXHJcbiAgICAgICAgICAgIChrZXkpID0+XHJcbiAgICAgICAgICAgICAgICBpc0FkYXB0aXZlUHJvcE5hbWUoa2V5KSAmJiBwcm9wc1trZXkgYXMga2V5b2YgQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPl0gIT09IHVuZGVmaW5lZCxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBoYXNBZGFwdGl2ZVByb3BzID8gPEFkYXB0aXZlQ29tcG9uZW50IHsuLi5wcm9wc30gLz4gOiA8Q29tcG9uZW50IHsuLi4ocHJvcHMgYXMgU3RhdGljUHJvcHMpfSAvPjtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWRhcHRpdmVDb250cm9sbGVyO1xyXG5cclxudHlwZSBEcmFmdFByb3BNYXAgPSB7IFtrZXk6IHN0cmluZ106IERyYWZ0UHJvcHMgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREcmFmdGVkQWRhcHRpdmVQcm9wcyA9IChwcm9wTmFtZTogc3RyaW5nLCBkcmFmdFByb3BzOiBEcmFmdFByb3BzKSA9PlxyXG4gICAgYWRhcHRpdmVTdWZmaXhTZXF1ZW5jZS5yZWR1Y2UoKHByb3BzLCBzdWZmaXgpID0+IHtcclxuICAgICAgICBwcm9wc1twcm9wTmFtZSArICdfJyArIHN1ZmZpeF0gPSBkcmFmdFByb3BzO1xyXG4gICAgICAgIHJldHVybiBwcm9wcztcclxuICAgIH0sIHt9IGFzIERyYWZ0UHJvcE1hcCk7XHJcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHVzZUNhbGxPbmNlID0gKGY6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBjYWxsZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuICAgIGlmICghY2FsbGVkUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBmKCk7XHJcbiAgICAgICAgY2FsbGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ2FsbE9uY2U7XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lZGlhQ29udGV4dCwgTWVkaWFDb250ZXh0VHlwZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVkaWFRdWVyeSc7XG5pbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9zdGF0aWMnO1xuXG5leHBvcnQgZW51bSBNZWRpYVNpemUge1xuICAgIEV4dHJhU21hbGwgPSBCUkVBS1BPSU5UUy5leHRyYVNtYWxsLndpZHRoLFxuICAgIFNtYWxsID0gQlJFQUtQT0lOVFMuc21hbGwud2lkdGgsXG4gICAgTWVkaXVtID0gQlJFQUtQT0lOVFMubWVkaXVtLndpZHRoLFxuICAgIExhcmdlID0gQlJFQUtQT0lOVFMubGFyZ2Uud2lkdGgsXG4gICAgRXh0cmFMYXJnZSA9IEJSRUFLUE9JTlRTLmV4dHJhTGFyZ2Uud2lkdGgsXG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhV2lkdGgge1xuICAgIEV4dHJhU21hbGwgPSBCUkVBS1BPSU5UUy5leHRyYVNtYWxsLndpZHRoLFxuICAgIFNtYWxsID0gQlJFQUtQT0lOVFMuc21hbGwud2lkdGgsXG4gICAgTWVkaXVtID0gQlJFQUtQT0lOVFMubWVkaXVtLndpZHRoLFxuICAgIExhcmdlID0gQlJFQUtQT0lOVFMubGFyZ2Uud2lkdGgsXG4gICAgRXh0cmFMYXJnZSA9IEJSRUFLUE9JTlRTLmV4dHJhTGFyZ2Uud2lkdGgsXG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhSGVpZ2h0IHtcbiAgICBFeHRyYVNtYWxsID0gQlJFQUtQT0lOVFMuZXh0cmFTbWFsbC5oZWlnaHQsXG4gICAgU21hbGwgPSBCUkVBS1BPSU5UUy5zbWFsbC5oZWlnaHQsXG4gICAgTWVkaXVtID0gQlJFQUtQT0lOVFMubWVkaXVtLmhlaWdodCxcbiAgICBMYXJnZSA9IEJSRUFLUE9JTlRTLmxhcmdlLmhlaWdodCxcbiAgICBFeHRyYUxhcmdlID0gQlJFQUtQT0lOVFMuZXh0cmFMYXJnZS5oZWlnaHQsXG59XG5cbmNvbnN0IGNvbnZlcnRUb01lZGlhU2l6ZSA9IChtZWRpYUNvbnRleHQ6IE1lZGlhQ29udGV4dFR5cGUpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFMYXJnZTpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVNpemUuRXh0cmFMYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubGFyZ2U6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFTaXplLkxhcmdlO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5tZWRpdW06XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFTaXplLk1lZGl1bTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuc21hbGw6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFTaXplLlNtYWxsO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5leHRyYVNtYWxsOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5FeHRyYVNtYWxsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5yZWFjaGFibGUgbWVkaWEgY29udGV4dCByZXNvbHV0aW9uJyk7XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFTaXplLkV4dHJhU21hbGw7XG4gICAgfVxufTtcblxuY29uc3QgY29udmVydFRvTWVkaWFXaWR0aCA9IChtZWRpYUNvbnRleHQ6IE1lZGlhQ29udGV4dFR5cGUpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFMYXJnZVdpZHRoOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguRXh0cmFMYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubGFyZ2VXaWR0aDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVdpZHRoLkxhcmdlO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5tZWRpdW1XaWR0aDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVdpZHRoLk1lZGl1bTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuc21hbGxXaWR0aDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVdpZHRoLlNtYWxsO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5leHRyYVNtYWxsV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5FeHRyYVNtYWxsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5yZWFjaGFibGUgbWVkaWEgY29udGV4dCByZXNvbHV0aW9uJyk7XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5FeHRyYVNtYWxsO1xuICAgIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRUb01lZGlhSGVpZ2h0ID0gKG1lZGlhQ29udGV4dDogTWVkaWFDb250ZXh0VHlwZSkgPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5leHRyYUxhcmdlSGVpZ2h0OlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0LkV4dHJhTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmxhcmdlSGVpZ2h0OlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0LkxhcmdlO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5tZWRpdW1IZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuTWVkaXVtO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5zbWFsbEhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5TbWFsbDtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFTbWFsbEhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5FeHRyYVNtYWxsO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5yZWFjaGFibGUgbWVkaWEgY29udGV4dCByZXNvbHV0aW9uJyk7XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuRXh0cmFTbWFsbDtcbiAgICB9XG59O1xuXG4vLyBUT0RPOiDQtNC+0LHQsNCy0LjRgtGMINC30LDQstC40YHQuNC80L7RgdGC0Ywg0L7RgiDQvNCw0YHRiNGC0LDQsdC40YDQvtCy0LDQvdC40Y8geDEg0LggeDIsINC60LDQuiDQvNC40L3QuNC80YPQvCDQv9GA0L7QsdC70LXQvNCwINC/0YDQvtGP0LLQu9GP0LXRgtGB0Y8g0L/RgNC4INC/0YDQvtGB0LXRgtGL0LLQsNC90LjQuCDQvNC10LTQuNCwLdC30LDQv9GA0L7RgdC+0LIg0LIgTWVkaWFXcmFwcGVySW5uZXJcbmV4cG9ydCBjb25zdCB1c2VNZWRpYSA9ICgpID0+IHtcbiAgICBjb25zdCBtZWRpYUNvbnRleHQgPSB1c2VDb250ZXh0KE1lZGlhQ29udGV4dCk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBtZWRpYUNvbnRleHQ7XG4gICAgY29uc3QgbWVkaWFTaXplID0gY29udmVydFRvTWVkaWFTaXplKG1lZGlhQ29udGV4dCk7XG4gICAgY29uc3QgbWVkaWFXaWR0aCA9IGNvbnZlcnRUb01lZGlhV2lkdGgobWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCBtZWRpYUhlaWdodCA9IGNvbnZlcnRUb01lZGlhSGVpZ2h0KG1lZGlhQ29udGV4dCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtZWRpYVNpemUsXG4gICAgICAgIG1lZGlhV2lkdGgsXG4gICAgICAgIG1lZGlhSGVpZ2h0LFxuICAgICAgICByZW1TY3JlZW5XaWR0aDogd2lkdGgsXG4gICAgICAgIHJlbVNjcmVlbkhlaWdodDogaGVpZ2h0LFxuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgRWZmZWN0Q2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNb3VudCA9IChmbjogRWZmZWN0Q2FsbGJhY2spID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIHVzZUVmZmVjdChmbiwgW10pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVubW91bnQgPSAoZm46ICgpID0+IHZvaWQpID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIHVzZUVmZmVjdCgoKSA9PiBmbiwgW10pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyB1c2VVbm1vdW50IH0gZnJvbSAnLi91c2VNb3VudFVubW91bnQnO1xyXG5cclxuY29uc3QgTk9fUkFGX0lEID0gMCBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGhvb2sgd2lsbCBjb3JyZWN0bHkgd29yayB3aXRoIGFzeW5jIHNraXAgZnJhbWUuXHJcbiAqIEl0IHdpbGwgYmUgY2xlYXJlZCB3aGVuIHlvdXIgY29tcG9uZW50IGlzIGF1dG9tYXRpY2FsbHkgdW5tb3VudGVkLlxyXG4gKiBFYWNoIHRpbWUgZnVuY3Rpb24gc3RhcnRzLCBpdCB3aWxsIGNsZWFyIHRoZSBwcmV2aW91cyBydW4uXHJcbiAqXHJcbiAqIEV4YW1wbGVzIHRvIHVzYWdlOlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBza2lwRnJhbWUgPSB1c2VTa2lwRnJhbWUoKVxyXG4gKlxyXG4gKiB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gKiAgIGlmIChzdGF0ZSA9PT0gJ2FuaW1hdGluZycpIHtcclxuICogICAgIHNraXBGcmFtZS5ydW4oKCkgPT4gc2V0U3RhdGUoLi4uKSlcclxuICogICB9XHJcbiAqIH0sIFtzdGF0ZSwgc2tpcEZyYW1lXSlcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU2tpcEZyYW1lKCkge1xyXG4gICAgY29uc3QgcmFmSWRSZWYgPSB1c2VSZWY8bnVtYmVyPihOT19SQUZfSUQpO1xyXG5cclxuICAgIHVzZVVubW91bnQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZFJlZi5jdXJyZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB1c2VNZW1vKFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgIHJ1bjogKGhhbmRsZXI6ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZFJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIHJhZklkUmVmLmN1cnJlbnQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByYWZJZFJlZi5jdXJyZW50ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFmSWRSZWYuY3VycmVudCA9IE5PX1JBRl9JRDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGVhcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklkUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgcmFmSWRSZWYuY3VycmVudCA9IE5PX1JBRl9JRDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0IGlzUnVubmluZygpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByYWZJZFJlZi5jdXJyZW50ICE9PSBOT19SQUZfSUQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgW10sXHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IENhc3RBbGxBcnJheXMsIGxpa2VBcnJheSB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgYWxsICoqYENvaGVyZW50QXJyYXlQcm94eWAqKiB0eXBlcyB0byBzdGFuZGFyZCAqKmBBcnJheWAqKiB0eXBlcy5cclxuICpcclxuICogVGhpcyB0cmFuc2Zvcm1hdGlvbiBpcyB1c2VmdWwgd2hlbiB5b3UgbmVlZCB0byBwYXNzIGEgdmFsdWUgb2J0YWluZWQgZnJvbSBhIG1vZGVsXHJcbiAqIGFuZCB0cmFuc2Zvcm1lZCB3aXRoICoqYGxpa2VBcnJheS5tYXBgKiogYXMgcHJvcHMgaW4gY29tcG9uZW50IChuZWVkIHRvIHVzZSBwcm9wOiAqKmBDb2hlcmVudEFycmF5c1Byb3h5VG9BcnJheXM8VHlwZT5gKiopLlxyXG4gKlxyXG4gKiAjIyMgSG93IGl0IHdvcmtzOlxyXG4gKiAtIElmIHRoZSB0eXBlIGlzIGBDb2hlcmVudEFycmF5UHJveHk8VT5gLCBpdCByZWN1cnNpdmVseSB0cmFuc2Zvcm1zIGl0IGludG8gYEFycmF5PFU+YC5cclxuICogLSBGdW5jdGlvbnMgKGBGdW5jdGlvbmApIHJlbWFpbiB1bmNoYW5nZWQuXHJcbiAqIC0gRm9yIG9iamVjdHMsIGl0IHJlY3Vyc2l2ZWx5IGFwcGxpZXMgdGhlIHRyYW5zZm9ybWF0aW9uIHRvIGFsbCBwcm9wZXJ0aWVzLlxyXG4gKiAtIEZvciBhbGwgb3RoZXIgdHlwZXMsIHRoZSBvcmlnaW5hbCB0eXBlIGlzIHByZXNlcnZlZC5cclxuICpcclxuICogQHRlbXBsYXRlIFQgVGhlIHR5cGUgdG8gYmUgdHJhbnNmb3JtZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB0cmFuc2Zvcm1lZCB0eXBlIHdoZXJlIGFsbCBgQ29oZXJlbnRBcnJheVByb3h5YCB0eXBlcyBhcmUgcmVwbGFjZWQgd2l0aCBgQXJyYXlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29oZXJlbnRBcnJheXNQcm94eVRvQXJyYXlzPFQ+ID0gVCBleHRlbmRzIENvaGVyZW50QXJyYXlQcm94eTxpbmZlciBVPlxyXG4gICAgPyBBcnJheTxDb2hlcmVudEFycmF5c1Byb3h5VG9BcnJheXM8VT4+XHJcbiAgICA6IFQgZXh0ZW5kcyBGdW5jdGlvblxyXG4gICAgPyBUXHJcbiAgICA6IFQgZXh0ZW5kcyBvYmplY3RcclxuICAgID8geyBbSyBpbiBrZXlvZiBUXTogQ29oZXJlbnRBcnJheXNQcm94eVRvQXJyYXlzPFRbS10+IH1cclxuICAgIDogVDtcclxuXHJcbi8vIEB0cy1pZ25vcmU6IGZvciB1bmtub3duIHJldHVybiB0eXBlXHJcbmNvbnN0IGNvaGVyZW50QXJyYXlzVG9BcnJheXNGdW5jdGlvbiA9IChpbnB1dFZhbHVlOiB1bmtub3duKSA9PiB7XHJcbiAgICBpZiAoaW5wdXRWYWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgaW5wdXRWYWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlOiB0byBpZ25vcmUgaW5wdXQgdmFsdWUgY2FuIGJlIG51bGwsIGJlY2F1c2UgaGlnaGVyIHdlIGhhdmUgY2hlY2tlZFxyXG4gICAgICAgIGlmIChpbnB1dFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdDb2hlcmVudEFycmF5UHJveHknKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IHRvIGlnbm9yZSBpbnB1dCB2YWx1ZSBjYW4gYmUgbnVsbCwgYmVjYXVzZSBoaWdoZXIgd2UgaGF2ZSBjaGVja2VkXHJcbiAgICAgICAgICAgIHJldHVybiBsaWtlQXJyYXkubWFwKGlucHV0VmFsdWUsIChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnID8gY29oZXJlbnRBcnJheXNUb0FycmF5c0Z1bmN0aW9uKGl0ZW0pIDogaXRlbSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUubWFwKChpdGVtKSA9PiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnID8gY29oZXJlbnRBcnJheXNUb0FycmF5c0Z1bmN0aW9uKGl0ZW0pIDogaXRlbSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiB0byBpZ25vcmUgaW5wdXQgdmFsdWUgY2FuIGJlIG51bGwsIGJlY2F1c2UgaGlnaGVyIHdlIGhhdmUgY2hlY2tlZFxyXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhpbnB1dFZhbHVlKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyBjb2hlcmVudEFycmF5c1RvQXJyYXlzRnVuY3Rpb24odmFsdWUpIDogdmFsdWVdO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlucHV0VmFsdWU7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVjdXJzaXZlbHkgdHJhbnNmb3JtcyBhbGwgaW5zdGFuY2VzIG9mICoqYENvaGVyZW50QXJyYXlQcm94eWAqKiB3aXRoaW4gYSB2YWx1ZSBpbnRvIHN0YW5kYXJkICoqYEFycmF5c2AqKlxyXG4gKiBhbmQgYWxsIG9iamVjdHMgY29waWVkIHRvIGF2b2lkIGFjY2Vzc2luZyB0byBkZXN0cm95ZWQgb2JqZWN0LlxyXG4gKlxyXG4gKlxyXG4gKiAjIyMgSG93IGl0IHdvcmtzOlxyXG4gKiAtIElmIHRoZSBgaW5wdXRWYWx1ZWAgaXMgYSAqKmBDb2hlcmVudEFycmF5UHJveHlgKiosIGl0IGlzIGNvbnZlcnRlZCB0byBhbiAqKmBBcnJheWAqKiB1c2luZyAqKmBsaWtlQXJyYXkubWFwYCoqLlxyXG4gKiAtIElmIHRoZSBgaW5wdXRWYWx1ZWAgaXMgYW4gKipgYXJyYXlgKiosIGl0cyBlbGVtZW50cyBhcmUgcmVjdXJzaXZlbHkgcHJvY2Vzc2VkLlxyXG4gKiAtIElmIHRoZSBgaW5wdXRWYWx1ZWAgaXMgYW4gKipgb2JqZWN0YCoqLCBhbGwga2V5LXZhbHVlIHBhaXJzIGFyZSAqKnJlY3Vyc2l2ZWx5KiogcHJvY2Vzc2VkLlxyXG4gKiAtIE5vbi1vYmplY3QgdmFsdWVzIGFyZSByZXR1cm5lZCBhcy1pcy5cclxuICpcclxuICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWVkIHZhbHVlIHdpdGggYWxsIGBDb2hlcmVudEFycmF5UHJveHlgIGluc3RhbmNlcyByZXBsYWNlZCBieSBzdGFuZGFyZCBhcnJheXNcclxuICogYW5kIGFsbCBvYmplY3RzIGNvcGllZCB0byBhdm9pZCBhY2Nlc3NpbmcgdG8gZGVzdHJveWVkIG9iamVjdC5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgZ2V0U3RhZ2VzID0gY29tcHV0ZWRGbihcclxuICogICAoKSA9PiBjb2hlcmVudEFycmF5c1RvQXJyYXlzPENvaGVyZW50QXJyYXlQcm94eTxDaGFwdGVyTW9kZWw+Pihtb2RlbC5zdGFnZXMuZ2V0KCkpLFxyXG4gKiAgIHtcclxuICogICAgIGVxdWFsczogY29uc3RGYWxzZSxcclxuICogICB9LFxyXG4gKiApO1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvaGVyZW50QXJyYXlzVG9BcnJheXMgPSA8VD4oaW5wdXRWYWx1ZTogQ2FzdEFsbEFycmF5czxUPik6IENvaGVyZW50QXJyYXlzUHJveHlUb0FycmF5czxUPiA9PiB7XHJcbiAgICByZXR1cm4gY29oZXJlbnRBcnJheXNUb0FycmF5c0Z1bmN0aW9uKGlucHV0VmFsdWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zZm9ybXMgKipgQ29oZXJlbnRBcnJheVByb3h5YCoqIHdpdGhpbiBhIHZhbHVlIGludG8gc3RhbmRhcmQgKipgQXJyYXlzYCoqXHJcbiAqIGFuZCBhbGwgb2JqZWN0cyBpbnNpZGUgY29waWVkIHRvIGF2b2lkIGFjY2Vzc2luZyB0byBkZXN0cm95ZWQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcmV0dXJucyBTdGFuZGFyZCBBcnJheSBhbmQgYWxsIG9iamVjdHMgaW5zaWRlIGNvcGllZCB0byBhdm9pZCBhY2Nlc3NpbmcgdG8gZGVzdHJveWVkIG9iamVjdC5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgZ2V0Tm9kZXMgPSBjb21wdXRlZEZuKCgpID0+IHNpbXBsZVRyYW5zZm9ybUNvaGVyZW50QXJyYXlUb0FycmF5PE5vZGVUZWNoVHJlZU1vZGVsPihtb2RlbC5ub2Rlcy5nZXQoKSkse1xyXG4gKiAgICAgICBlcXVhbHM6IGNvbnN0RmFsc2UsXHJcbiAqIH0pO1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNpbXBsZVRyYW5zZm9ybUNvaGVyZW50QXJyYXlUb0FycmF5ID0gPFQ+KGlucHV0VmFsdWU6IENvaGVyZW50QXJyYXlQcm94eTxUPik6IEFycmF5PFQ+ID0+IHtcclxuICAgIHJldHVybiBsaWtlQXJyYXkubWFwKGlucHV0VmFsdWUgfHwgW10sIChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IG51bGwgJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnID8geyAuLi5pdGVtIH0gOiBpdGVtO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuXG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSAnbGliL251bGxhYmxlJztcblxuZXhwb3J0IHR5cGUgTGlrZUFycmF5PFQ+ID0gQ29oZXJlbnRBcnJheVByb3h5PFQ+IHwgVFtdO1xuZXhwb3J0IHR5cGUgQXJyYXlJdGVtPFQ+ID0gVCB8IENvaGVyZW50QXJyYXlJdGVtPFQ+O1xuZXhwb3J0IHR5cGUgQ2FzdEFsbEFycmF5czxUPiA9IFQgZXh0ZW5kcyBDb2hlcmVudEFycmF5UHJveHk8aW5mZXIgQ29oSXRlbT5cbiAgICA/IExpa2VBcnJheTxDYXN0QWxsQXJyYXlzPENvaEl0ZW0+PlxuICAgIDogVCBleHRlbmRzIEZ1bmN0aW9uXG4gICAgPyBUXG4gICAgOiBUIGV4dGVuZHMgQXJyYXk8aW5mZXIgQXJySXRlbT5cbiAgICA/IExpa2VBcnJheTxDYXN0QWxsQXJyYXlzPEFyckl0ZW0+PlxuICAgIDogVCBleHRlbmRzIHt9XG4gICAgPyB7IFtQIGluIGtleW9mIFRdOiBDYXN0QWxsQXJyYXlzPFRbUF0+IH1cclxuICAgIDogVDtcclxuLyoqXHJcbiBAZGVwcmVjYXRlZCB1c2UgZnJvbSBjb2hlcmVudEFycmF5c1RvQXJyYXlzLnRzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb2hlcmVudEFycmF5c1Byb3h5VG9BcnJheXM8VD4gPSBUIGV4dGVuZHMgQ29oZXJlbnRBcnJheVByb3h5PGluZmVyIFU+XHJcbiAgICA/IEFycmF5PENvaGVyZW50QXJyYXlzUHJveHlUb0FycmF5czxVPj5cclxuICAgIDogVCBleHRlbmRzIEZ1bmN0aW9uXG4gICAgPyBUXG4gICAgOiBUIGV4dGVuZHMgb2JqZWN0XG4gICAgPyB7IFtLIGluIGtleW9mIFRdOiBDb2hlcmVudEFycmF5c1Byb3h5VG9BcnJheXM8VFtLXT4gfVxuICAgIDogVDtcblxuLyoqIFJlYWQgdmFsdWUgZnJvbSBMaWtlQXJyYXkgYnkgaW5kZXggKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXQ8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaW5kZXg6IG51bWJlcik6IFQgfCB1bmRlZmluZWQge1xuICAgIGlmIChpbmRleCA+PSBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheVtpbmRleF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5W2luZGV4XT8udmFsdWU7XG59XG5cbmV4cG9ydCBjb25zdCB1bnNhZmVHZXQgPSBnZXQgYXMgPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGluZGV4OiBudW1iZXIpID0+IFQ7XG5cbi8qKiBSZXR1cm5zIGl0ZW0udmFsdWUgaWYgaXQncyBjb2hlcmVudCBhcnJheSBpdGVtIG9yIGp1c3QgaXRlbSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVud3JhcEl0ZW08VD4oaXRlbTogQXJyYXlJdGVtPFQ+KTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGl0ZW0gJiYgJ3ZhbHVlJyBpbiBpdGVtICYmIChpdGVtIGFzIGFueSkuY29uc3RydWN0b3I/Lm5hbWUuaW5jbHVkZXMoJ0FycmF5SXRlbScpKSB7XG4gICAgICAgIHJldHVybiBpdGVtPy52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbSBhcyBUO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2Qgb2YgYXJyYXkgYnV0IGVsZW1lbnQgd2lsbCBiZSBpdGVtLnZhbHVlIG9yIGl0ZW1cbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5tYXB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXA8VCwgVT4oYXJyYXk6IExpa2VBcnJheTxUPiwgZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBVKTogVVtdIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5Lm1hcChmbik7XG4gICAgfVxuICAgIHJldHVybiBhcnJheS5tYXAoKGVsZW1lbnQsIGluZGV4LCBhcnIpID0+IGZuKGVsZW1lbnQ/LnZhbHVlLCBpbmRleCwgYXJyKSk7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSBkZWZhdWx0IG1ldGhvZCAnZXZlcnknIG9mIGFycmF5LCBidXQgZWxlbWVudCB3aWxsIGJlIGl0ZW0udmFsdWUgb3IgaXRlbVxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmV2ZXJ5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXZlcnk8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5ldmVyeShmbik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmICghZm4oZWxlbWVudCwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSBkZWZhdWx0IG1ldGhvZCAnc29tZScgb2YgYXJyYXksIGJ1dCBlbGVtZW50IHdpbGwgYmUgaXRlbS52YWx1ZSBvciBpdGVtXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUuc29tZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNvbWU8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5zb21lKGZuKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB1bnNhZmVHZXQoYXJyYXksIGluZGV4KTtcbiAgICAgICAgaWYgKGZuKGVsZW1lbnQsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2Qgb2YgYXJyYXkgYnV0IGVsZW1lbnQgd2lsbCBiZSBpdGVtLnZhbHVlIG9yIGl0ZW1cbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5maWx0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXI8VD4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxUPixcbiAgICBwcmVkaWNhdGU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuLFxuKTogVFtdIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihwcmVkaWNhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IFtdIGFzIFRbXTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XT8udmFsdWU7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoZWxlbWVudCwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2Qgb2YgYXJyYXlcbiAqXG4gKiAqKkJ1dCB3aWxsIHRocm93IGVycm9yIGlmIHlvdSB0cnkgdG8gY2hhbmdlIHtAbGluayBDb2hlcmVudEFycmF5UHJveHk8VD59KipcbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5wdXNofVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaDxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBpdGVtOiBUKTogVFtdIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE11dGF0ZSBDb2hlcmVudEFycmF5UHJveHkgaXMgbm90IGF2YWlsYWJsZWApO1xufVxuXG4vKipcbiAqIEp1c3Qgc2V0IGl0ZW0gYnkgaW5kZXhcbiAqXG4gKiAqKkJ1dCB3aWxsIHRocm93IGVycm9yIGlmIHlvdSB0cnkgdG8gY2hhbmdlIHtAbGluayBDb2hlcmVudEFycmF5UHJveHk8VD59KipcbiAqIGBgYHRzXG4gKiBsaWtlQXJyYXkoYXJyYXksIDAsIGl0ZW0pXG4gKiAvLyBlcXVhbHMgdG86XG4gKiBhcnJheVswXSA9IGl0ZW1cbiAqIGBgYFxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnB1c2h9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXQ8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaW5kZXg6IG51bWJlciwgaXRlbTogVCk6IFRbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIGFycmF5W2luZGV4XSA9IGl0ZW07XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBNdXRhdGUgQ29oZXJlbnRBcnJheVByb3h5IGlzIG5vdCBhdmFpbGFibGVgKTtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5LiBCdXQgaGFzIHNlY29uZCBwYXJhbWV0ZXIgZm9yIHJlbW92ZSBpbmRleCBhbmQgZ2V0IHRoZSB2YWx1ZS5cbiAqXG4gKiAqKldpbGwgdGhyb3cgZXJyb3IgaWYgeW91IHRyeSB0byBjaGFuZ2Uge0BsaW5rIENvaGVyZW50QXJyYXlQcm94eTxUPn0qKlxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnBvcH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvcDxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIDEpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LnNwbGljZShpbmRleCwgMSlbMF07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgTXV0YXRlIENvaGVyZW50QXJyYXlQcm94eSBpcyBub3QgYXZhaWxhYmxlYCk7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSBpbmNsdWRlcyBidXQgZmluZCBieSBmdW5jdGlvblxuICogYGBgdHNcbiAqIGNvbnN0IGFycmF5ID0gW3sgbmFtZTogJ2ZvbycgfSwgeyBuYW1lOiAnYmFyJyB9LCB7IG5hbWU6ICdiYXonIH1dXG4gKiBsaWtlQXJyYXkuY29udGFpbnMoYXJyYXksICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gJ2ZvbycpKSAvLyB0cnVlXG4gKiBsaWtlQXJyYXkuY29udGFpbnMoYXJyYXksICh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gJ2Zvby1iYXItYmF6JykpIC8vIGZhbHNlXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhaW5zPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGl0ZW06IFQsIHByZWRpY2F0ZT86IChpdGVtOiBUKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChwcmVkaWNhdGUgJiYgcHJlZGljYXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtID09PSBlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBSZXR1cm5zIGxhc3QgaW5kZXggb2YgYXJyYXkgb3IgLTEgaWYgaXQncyBlbXB0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3RJbmRleDxUPihhcnJheTogTGlrZUFycmF5PFQ+KTogbnVtYmVyIHtcbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoIC0gMTtcbn1cblxuLyoqIFdvcmtzIGxpa2Uge0BsaW5rIGxhc3RJbmRleH0gYnV0IHJldHVybnMgMCBpZiBhcnJheSBpcyBlbXB0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3RJbmRleFplcm88VD4oYXJyYXk6IExpa2VBcnJheTxUPik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIDEpO1xufVxuXG4vKiogUmV0dXJucyBsYXN0IGVsZW1lbnQgb2YgYXJyYXkgb3IgYHVuZGVmaW5lZGAgaXQncyBlbXB0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3RFbGVtZW50PFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4pOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBnZXQoYXJyYXksIGFycmF5Lmxlbmd0aCAtIDEpO1xufVxuXG4vKipcbiAqIFJldHVybnMgaXRlcmF0b3IgZnJvbSByYW5nZS4gU3RhcnQgaW5kZXggY2Fubm90IGJlIGxlc3MgdGhhbiBgMGAgKGl0IHdpbGwgYmUgY2xhbXBlZCkuXG4gKiBBbHNvIGVuZCBpbmRleCBjYW5ub3QgYmUgbW9yZSB0aGFuIGFycmF5IGxlbmd0aCAoaXQgd2lsbCBiZSBjbGFtcGVkKS5cbiAqIExhc3QgaW5kZXggKippbmNsdXNpdmUqKi5cbiAqIGBgYHRzXG4gKiBjb25zdCBpdGVtcyA9IFsxLDIsMyw0LDUsNiw3LDgsOV1cbiAqIGNvbnN0IHNsaWNlSXRlbXMgPSBbLi4ubGlrZUFycmF5LnNsaWNlKGl0ZW1zLCAwLCAyKV0gLy8gWzEsMiwzXVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbGljZTxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBpbmRleEZyb20gPSAwLCBpbmRleFRvID0gYXJyYXkubGVuZ3RoIC0gMSk6IEl0ZXJhYmxlPFQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSBNYXRoLm1heChpbmRleEZyb20sIDApO1xuICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBNYXRoLm1pbihpbmRleFRvLCBsYXN0SW5kZXhaZXJvKGFycmF5KSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpOiBJdGVyYXRvclJlc3VsdDxUPiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SW5kZXggPiBlbmRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG51bGwgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gYXJyYXlbbmV4dEluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHVud3JhcEl0ZW0oaXRlbSkgYXMgVCwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBudWxsIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgc2xpY2Ugb2YgbGFzdCBlbGVtZW50cyBieSBjb3VudCBwYXJhbWV0ZXJcbiAqIGBgYHRzXG4gKiBjb25zdCBpdGVtcyA9IFsxLDIsMyw0LDUsNiw3LDgsOV1cbiAqIGNvbnN0IGxhc3RUaGVlSXRlbXMgPSBbLi4ubGlrZUFycmF5LnRhaWwoaXRlbXMsIDMpXSAvLyBbNyw4LDldXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhaWw8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgY291bnQ6IG51bWJlcikge1xuICAgIHJldHVybiBzbGljZShhcnJheSwgTWF0aC5tYXgoMCwgYXJyYXkubGVuZ3RoIC0gMSAtIGNvdW50KSwgbGFzdEluZGV4KGFycmF5KSk7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSBkZWZhdWx0IG1ldGhvZCBvZiBhcnJheS5cbiAqXG4gKiAqKldpbGwgdGhyb3cgZXJyb3IgaWYgeW91IHRyeSB0byBjaGFuZ2Uge0BsaW5rIENvaGVyZW50QXJyYXlQcm94eTxUPn0qKlxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnNwbGljZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZTxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBzdGFydDogbnVtYmVyLCBkZWxldGVDb3VudD86IG51bWJlciB8IHVuZGVmaW5lZCk6IFRbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBNdXRhdGUgQ29oZXJlbnRBcnJheVByb3h5IGlzIG5vdCBhdmFpbGFibGVgKTtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIHtAbGluayBBcnJheS5wcm90b3R5cGUuZmluZH0gbWV0aG9kIG9mIGFycmF5LCBidXQgZmluZCBmcm9tIHRhaWwuXG4gKiBJZiBpdCdzIHtAbGluayBDb2hlcmVudEFycmF5UHJveHk8VD59IHRoZW4gYGl0ZW0udmFsdWVgIHdpbGwgcGFzcyBpbiBwcmVkaWNhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdDxUPihcbiAgICBhcnJheTogTGlrZUFycmF5PFQ+LFxuICAgIHByZWRpY2F0ZTogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8VD4pID0+IGJvb2xlYW4sXG4pOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHVud3JhcEl0ZW0oYXJyYXlbaW5kZXhdKSBhcyBUO1xuICAgICAgICBpZiAocHJlZGljYXRlKGVsZW1lbnQsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIHtAbGluayBBcnJheS5wcm90b3R5cGUuZmluZH0gbWV0aG9kIG9mIGFycmF5LlxuICogSWYgaXQncyB7QGxpbmsgQ29oZXJlbnRBcnJheVByb3h5PFQ+fSB0aGVuIGBpdGVtLnZhbHVlYCB3aWxsIHBhc3MgaW4gcHJlZGljYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZDxUPihcbiAgICBhcnJheTogTGlrZUFycmF5PFQ+LFxuICAgIHByZWRpY2F0ZTogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8VD4pID0+IGJvb2xlYW4sXG4pOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB1bndyYXBJdGVtKGFycmF5W2luZGV4XSkgYXMgVDtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShlbGVtZW50LCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzfSBtZXRob2Qgb2YgYXJyYXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlczxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBpdGVtOiBUKTogYm9vbGVhbiB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBVc2luZyBsaWtlIGBhcnJheS5maWx0ZXIoKS5tYXAoKWAgYnV0IGZvciB7QGxpbmsgTGlrZUFycmF5PFQ+fSBhbmQgd29ya3MgaW4gb25lIGN5Y2xlLlxuICogYGBgdHNcbiAqIGNvbnN0IGFycmF5ID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBsaWtlQXJyYXkuZmlsdGVyTWFwKGFycmF5LCAobikgPT4gbiAlIDIgPT09IDAsIChuKSA9PiBuICogbikgLy8gWzQsIDE2XVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJNYXA8VCwgVT4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxUPixcbiAgICBwcmVkaWNhdGU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuLFxuICAgIGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gVSxcbik6IFVbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBVW10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB1bnNhZmVHZXQoYXJyYXksIGluZGV4KTtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChmbihpdGVtLCBpbmRleCwgYXJyYXkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFNlZSBhbHNvIHtAbGluayBmaWx0ZXJNYXB9LiBXb3JrcyBsaWtlIGZpbHRlciBub24tZW1wdHkgZWxlbWVudHMgYW5kIGFwcGx5IGZ1bmN0aW9uLlxuICogQ3JlYXRpbmcgbmV3IGFycmF5LlxuICogYGBgdHNcbiAqIGNvbnN0IGFycmF5ID0gW251bGwsIDAsIHVuZGVmaW5lZCwgMV1cbiAqIGxpa2VBcnJheS5tYXBFeGlzdHMoYXJyYXksIChuKSA9PiBuICogMikgLy8gWzAsIDJdXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcEV4aXN0czxULCBVPihcbiAgICBhcnJheTogTGlrZUFycmF5PFQgfCBudWxsIHwgdW5kZWZpbmVkPixcbiAgICBmbjogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8VD4pID0+IFUsXG4pOiBVW10ge1xuICAgIHJldHVybiBmaWx0ZXJNYXAoYXJyYXkgYXMgTGlrZUFycmF5PE5vbk51bGxhYmxlPFQ+PiwgaXNOb25OdWxsYWJsZSwgZm4pO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2Qgb2YgYXJyYXkuXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGV4PFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIHByZWRpY2F0ZTogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8VD4pID0+IGJvb2xlYW4pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB1bnNhZmVHZXQoYXJyYXksIGluZGV4KTtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShpdGVtLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2Qgb2YgYXJyYXkgYGZpbmRJbmRleGAgYnV0IGZyb20gdGFpbC5cbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXh9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5kZXhMYXN0PFQ+KFxuICAgIGFycmF5OiBMaWtlQXJyYXk8VD4sXG4gICAgcHJlZGljYXRlOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbixcbikge1xuICAgIGZvciAobGV0IGluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICBjb25zdCBpdGVtID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5IGBqb2luYCBleGNlcHQgYXJyYXktbGlrZSBvYmplY3RzIChmb3IgTGlrZUFycmF5IHR5cGUgb25seSkuXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUuam9pbn1cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBhY2NvcmRpbmcgdG86XG4gKiB7QGxpbmsgaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvbXVsdGlwYWdlL2luZGV4ZWQtY29sbGVjdGlvbnMuaHRtbCNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqb2luPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIHNlcGFyYXRvciA9ICcsJykge1xuICAgIGxldCByZXN1bHQgPSAnJztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHNlcGFyYXRvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB1bnNhZmVHZXQoYXJyYXksIGluZGV4KTtcbiAgICAgICAgY29uc3QgbmV4dCA9IGVsZW1lbnQgPT09IHVuZGVmaW5lZCB8fCBlbGVtZW50ID09PSBudWxsID8gJycgOiBTdHJpbmcoZWxlbWVudCk7XG4gICAgICAgIHJlc3VsdCArPSBuZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnJlZHVjZX0gbWV0aG9kIG9mIGFycmF5LlxuICogYGBgdHNcbiAqIGNvbnN0IGFycmF5ID0gWzEsIDIsIDMsIDRdXG4gKiBsaWtlQXJyYXkucmVkdWNlKGFycmF5LCAocHJldmlvdXMsIGN1cnJlbnQpID0+IHByZXZpb3VzICs9IGN1cnJlbnQsIDApIC8vIDEwXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZTxBLCBCPihcbiAgICBhcnJheTogTGlrZUFycmF5PEE+LFxuICAgIHByZWRpY2F0ZTogKHByZXZpb3VzVmFsdWU6IEIsIGN1cnJlbnRWYWx1ZTogQSwgY3VycmVudEluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8QT4pID0+IEIsXG4gICAgaW5pdGlhbFZhbHVlOiBCLFxuKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5yZWR1Y2UocHJlZGljYXRlLCBpbml0aWFsVmFsdWUpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ6IEIgPSBpbml0aWFsVmFsdWU7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB1bnNhZmVHZXQoYXJyYXksIGluZGV4KTtcbiAgICAgICAgcmVzdWx0ID0gcHJlZGljYXRlKHJlc3VsdCwgZWxlbWVudCwgaW5kZXgsIGFycmF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiZXhwb3J0IHR5cGUgTnVsbGFibGU8VD4gPSBUIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxhYmxlPFQ+KGl0ZW06IE51bGxhYmxlPFQ+KTogaXRlbSBpcyBOdWxsYWJsZTxUPiB7XHJcbiAgICByZXR1cm4gaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vbk51bGxhYmxlPFQ+KGl0ZW06IE51bGxhYmxlPFQ+KTogaXRlbSBpcyBOb25OdWxsYWJsZTxUPiB7XHJcbiAgICByZXR1cm4gaXNOdWxsYWJsZShpdGVtKSA9PT0gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdHlwZSBNYXBwaW5nID0ge1xuICAgIFtrZXk6IHN0cmluZ106XG4gICAgICAgIHwgc3RyaW5nXG4gICAgICAgIHwgbnVtYmVyXG4gICAgICAgIHwgYm9vbGVhblxuICAgICAgICB8IFJlYWN0Tm9kZVxuICAgICAgICB8IEhUTUxFbGVtZW50XG4gICAgICAgIHwgbnVtYmVyW11cbiAgICAgICAgfCBzdHJpbmdbXVxuICAgICAgICB8IFJlYWN0Tm9kZVtdXG4gICAgICAgIHwgSFRNTEVsZW1lbnRbXTtcbn07XG5cbmV4cG9ydCBlbnVtIEFsaWdubWVudCB7XG4gICAgbGVmdCxcbiAgICByaWdodCxcbn1cblxuZXhwb3J0IHR5cGUgQmluZGluZyA9IHtcbiAgICBba2V5OiBzdHJpbmddOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG4vKipcbiAqIFJlcGxhY2UgaW4gc3RyaW5nIG5hbWVkIHBhcmFtcyBzZXQgaW4gcHl0aG9uIHN0eWxlIHRocm91Z2ggYnJhY2VzOiAnYmxhbGJsYSB7cGFyYW0xfSBibGFsYmxhIHtwYXJhbTF9IC4uLidcbiAqIEBwYXJhbSBzdHJcbiAqIEBwYXJhbSBtYXBwaW5nIGlzIGtleS92YWx1ZSBwYXJhbXMgb2JqZWN0XG4gKiBAcmV0dXJucyB7dm9pZHwqfFhNTHxzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoc3RyOiBzdHJpbmcsIG1hcHBpbmc6IE1hcHBpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xce1xcdytcXH0vZywgKG1hdGNoKSA9PiBTdHJpbmcobWFwcGluZ1ttYXRjaC5zbGljZSgxLCAtMSldKSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBpbiBzdHJpbmcgbmFtZWQgcGFyYW1zIHNldCBpbiBwcmludGYtc3R5bGUgc3R5bGU6ICdibGFsYmxhICUocGFyYW0xKXMgYmxhbGJsYSAlKHBhcmFtMSlzIC4uLidcbiAqIEBwYXJhbSBzdHJcbiAqIEBwYXJhbSBtYXBwaW5nIGlzIGtleS92YWx1ZSBwYXJhbXMgb2JqZWN0XG4gKiBAcmV0dXJucyB7dm9pZHwqfFhNTHxzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmludGYoc3RyOiBzdHJpbmcsIG1hcHBpbmc6IE1hcHBpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXHt8JVxcKClcXHcrKFxcfXxcXClzKS9nLCAobWF0Y2gpID0+IHtcbiAgICAgICAgY29uc3QgcGFkID0gbWF0Y2guaW5kZXhPZignJScpID09PSAwID8gMiA6IDE7XG4gICAgICAgIHJldHVybiBTdHJpbmcobWFwcGluZ1ttYXRjaC5zbGljZShwYWQsIC1wYWQpXSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogQ29udmVydCBzbmFrZV9jYXNlIHN0cmluZyB0byBjYW1lbENhc2UnXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc25ha2VUb0NhbWVsKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9fXFx3L2csIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGZpbGUgbmFtZSB0byBSIGNsYXNzIG5hbWUnXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUmVzb3VyY2Uoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLy0vZywgJ18nKTtcbn1cblxuLyoqXG4gKiBjb252ZXJ0IGZpcnN0IGNoYXIgdG8gdXBwZXIgY2FzZVxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwQ2FzZUZpcnN0Q2hhcihzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiByZXBsYWNlICZuYnNwOyB0byBcXHhhMFxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnROYnNwID0gKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mbmJzcDsvZywgJ1xceGEwJyk7XG59O1xuXG4vKipcbiAqIHJlcGxhY2UgJnp3bmJzcDsgdG8gXFx1ZmVmZlxuICogQHBhcmFtIHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRad25ic3AgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyZ6d25ic3A7L2csICdcXHVmZWZmJyk7XG59O1xuXG5leHBvcnQgdHlwZSBBZGRTZXBhcmF0b3JGdW5jID0gKGFjYzogc3RyaW5nW10sIGl0ZW06IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nW107XG5cbmNvbnN0IGFkZFNlcGFyYXRvclRvUmlnaHQ6IEFkZFNlcGFyYXRvckZ1bmMgPSAoYWNjLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmICghKGluZGV4ICUgMikpIHtcbiAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGl0ZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBhY2MucG9wKCk7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBsYXN0ICsgaXRlbV07XG4gICAgfVxufTtcblxuY29uc3QgYWRkU2VwYXJhdG9yVG9MZWZ0OiBBZGRTZXBhcmF0b3JGdW5jID0gKGFjYywgaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtpdGVtXTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ICUgMikge1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgaXRlbSA9PT0gJyAnID8gJ1xceGEwJyA6IGl0ZW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBhY2MucG9wKCk7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBsYXN0ICsgaXRlbV07XG4gICAgfVxufTtcblxuLyoqXG4gKiBTcGxpdCB0ZXh0IHN0cmluZyB3aXRoIFJlZ0V4cCBzZXBhcmF0b3IgYW5kIHRoZW4gYWRkIHNlcGFyYXRvciB0byB0aGUgcHJvcGVyIHNpZGVcbiAqL1xuY29uc3Qgc3BsaXRBbmRGb3JtYXQgPSAoc3RyaW5nVG9TcGxpdDogc3RyaW5nLCBzZXBhcmF0b3I6IFJlZ0V4cCwgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQpOiBzdHJpbmdbXSA9PlxuICAgIHN0cmluZ1RvU3BsaXQuc3BsaXQoc2VwYXJhdG9yKS5yZWR1Y2UoYWxpZ25tZW50ID09PSBBbGlnbm1lbnQubGVmdCA/IGFkZFNlcGFyYXRvclRvUmlnaHQgOiBhZGRTZXBhcmF0b3JUb0xlZnQsIFtdKTtcblxuZXhwb3J0IGNvbnN0IHNwbGl0RXVyb3BlYW4gPSAoc3RyaW5nVG9TcGxpdDogc3RyaW5nLCBhbGlnbm1lbnQgPSBBbGlnbm1lbnQubGVmdCk6IHN0cmluZ1tdID0+IHtcbiAgICBsZXQgc3BsaXRSZXN1bHQ6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBzcGxpdFJlZ2V4ID0gLyg/PD1cXHB7TGx9KSgtKSg/PVxccHtMbH0pL2d1OyAvLyBleGNsdWRlIHNwZWNpYWwgd29yZHMgbGlrZSB2ZWhpY2xlIG5hbWVzIEtWLTIgZXRjXG4gICAgY29uc3Qgc3RyaW5nV2l0aE5ic3AgPSBjb252ZXJ0TmJzcChzdHJpbmdUb1NwbGl0KTtcbiAgICBzcGxpdEFuZEZvcm1hdChzdHJpbmdXaXRoTmJzcCwgLyggKS8sIGFsaWdubWVudCkuZm9yRWFjaChcbiAgICAgICAgKHdvcmQpID0+IChzcGxpdFJlc3VsdCA9IHNwbGl0UmVzdWx0LmNvbmNhdChzcGxpdEFuZEZvcm1hdCh3b3JkLCBzcGxpdFJlZ2V4LCBBbGlnbm1lbnQubGVmdCkpKSxcbiAgICApO1xuICAgIHJldHVybiBzcGxpdFJlc3VsdDtcbn07XG5cbmV4cG9ydCBjb25zdCBzcGxpdENoaW5lc2UgPSAoKCkgPT4ge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovIC8vIEVzY2FwaW5nIGlzIG5lY2Vzc2FyeSBmb3IgdW5pY29kZSBSZWdFeHAuXG4gICAgLy8gU3ltYm9scyB1c2VkIGZvciBsYXRpbiB2ZWhpY2xlIG5hbWVzLCByYW5nZXMgZXRjLiBleHBlY3RlZCBub3QgYmUgd3JhcHBlZCBmcm9tIGVhY2ggb3RoZXIgb3IgZm9sbG93aW5nIHB1bmN0dWF0aW9uIG1hcmsuXG4gICAgLy8gWW91IGNhbiBhZGQgbmV3IG9uZXMgdG8gdGhlIHRoaXJkIHBhaXIgb2YgW10gKGN1cnJlbnRseSB0aGUgbGlzdCBpcyBbYS16QS1aMC05LeKAk+KAlCAl4oCmLlxcezNcXH0vXSlcbiAgICBjb25zdCBsYXRpbkluamVjdGlvbnMgPVxuICAgICAgICAvW1xccHtzYz1IYW5pfShdP1vjgILvvIzvvJrvvJvvvIHvvJ9dP1thLXpBLVrDgC3ItzAtOS3igJPigJQgXFx4YTAl4oCmLitcXHszXFx9L10rW1xccHtzYz1IYW5pfeOAgu+8jO+8mu+8m++8ge+8nyldP1vjgILvvIzvvJrvvJvvvIHvvJ9dPy9nbXU7XG4gICAgLy8gVGhpcyBydWxlIHByZXZlbnRzIHdyYXBwaW5nIG9mIHNvbWUgc3ltYm9scyBuZWlnaGJvcmluZyB0byB0aGUgYnJhY2tldHMvcXVvdGVzLlxuICAgIC8vIFBhaXJzIG9mIG9wZW5pbmcgKGxlZnQpIGFuZCBjbG9zaW5nIChyaWdodCkgc3ltYm9scyBhcmUgZGVzY3JpYmVkLlxuICAgIC8vIE9ubHkgdXNlIHNlcGFyYXRlIHVuaWNvZGUgc3ltYm9scyBmb3IgbGVmdCBhbmQgcmlnaHQgcGFydCjCq8K7KSwgYnV0IE5PVCB1bml2ZXJzYWwgb25lcyAoXCIpLlxuICAgIC8vIEluIGNhc2UgaWYgdW5pdmVyc2FsIHN5bWJvbCBpcyB1c2VkIGluIHRoZSB0cmFuc2xhdGlvbiwgdGhlIHRyYW5zbGF0aW9uIG11c3QgYmUgZml4ZWQsIG5vdCB0aGUgcnVsZS5cbiAgICBjb25zdCBicmFja2V0c0FuZFF1b3RlcyA9XG4gICAgICAgIC9bXFwo4p2d4oCcwqtdXFxwe3NjPUhhbml9XFxQe3NjPUhhbml9P3xcXHB7c2M9SGFuaX1cXFB7c2M9SGFuaX0/W+OAgu+8jO+8mu+8m++8ge+8n10/W1xcKeKdnuKAncK7XVvjgILvvIzvvJrvvJvvvIHvvJ9dPy9nbXU7XG4gICAgLy8gUnVsZSBkZXNjcmliZXMgdGhhdCBwcmV2aW91cyBoaWVyb2dseXBoIHNob3VsZCBub3QgYmUgd3JhcHBlZC5cbiAgICAvLyBPbmx5IHVuaWNvZGUgcHVuY3R1YXRpb24gbWFya3MgYXJlIHVzZWQgZm9yIGFzaWFuIGxhbmd1YWdlcy5cbiAgICAvLyBPdGhlcndpc2Ugc3RyaW5nIHNob3VsZCBiZSBmaXhlZCB0byB1c2UgdW5pY29kZSBwdW5jdHVhdGlvbiBtYXJrcywgbm90IHRoZSBydWxlLlxuICAgIGNvbnN0IHB1bmN0dWF0aW9uTWFya3MgPSAvXFxwe0x9P1vjgILvvIw6IDsg77ya77yb77yB77yf44CK44CL44CM44CN4oCiKeOAgV18WyhcXHB7TH17MSx9XS9nbXU7ICAgIFxuICAgIC8vIFRoaXMgcnVsZSBtYWtlcyBpdCBwb3NzaWJsZSB0byB3cmFwIGFueSBuZWlnaGJvcmluZyBwYWlyIG9mIGhpZXJvZ2x5cGhzLlxuICAgIGNvbnN0IG5laWdoYm9yaW5nSGllcm9nbHlwaHMgPSAvXFxwe3NjPUhhbml9L2dtdTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAvLyBPcmRlciBpcyBpbXBvcnRhbnQuXG4gICAgY29uc3QgbWFpblJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgbGF0aW5JbmplY3Rpb25zLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgYnJhY2tldHNBbmRRdW90ZXMuc291cmNlICtcbiAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICBwdW5jdHVhdGlvbk1hcmtzLnNvdXJjZSArXG4gICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgbmVpZ2hib3JpbmdIaWVyb2dseXBocy5zb3VyY2UsXG4gICAgICAgICdndW0nLFxuICAgICk7XG4gICAgcmV0dXJuIChzdHJpbmdzVG9TcGxpdDogc3RyaW5nKSA9PlxuICAgICAgICBzdHJpbmdzVG9TcGxpdFxuICAgICAgICAgICAgLnJlcGxhY2UoLyZuYnNwOy9nLCAnXFx4YTAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyAvZywgJ1xceGEwJylcbiAgICAgICAgICAgIC5tYXRjaChtYWluUmVnZXgpO1xufSkoKTtcblxuY29uc3QgQ0hJTkVTRV9MQU5HVUFHRV9DT0RFUyA9IFsnemhfY24nLCAnemhfc2cnLCAnemhfdHcnXTtcblxuLyoqXG4gKiBTcGxpdCBvbmUgbGluZSBvZiBsb2NhbGl6ZWQgdGV4dCB0byBhcnJheSBvZiB3b3JkcyB3aGljaCB0aGVuIGNhbiBiZSBsaW5lLXdyYXBwZWQgYnkgZ2FtZWZhY2UuXG4gKiBAcGFyYW0gc3RyaW5nVG9TcGxpdCBzdXBwb3J0cyAmbmJzcCwgaHlwaGVucyBhbmQgZGFzaGVzIGZvciBhc2lhbiBsYW5ndWFnZXMuXG4gKiBAcGFyYW0gYWxpZ25tZW50IHNldCB0byBgcmlnaHRgIGZvciByaWdodC1hbGlnbmVkIHRleHRcbiAqIFNlZSB0ZXN0cyBmb3IgZXhhbXBsZVxuICovXG5cbmV4cG9ydCBjb25zdCBzcGxpdFdvcmRzID0gKHN0cmluZ1RvU3BsaXQ6IHN0cmluZywgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQpID0+IHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IFIuc3RyaW5ncy5zZXR0aW5ncy5MQU5HVUFHRV9DT0RFKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChDSElORVNFX0xBTkdVQUdFX0NPREVTLmluY2x1ZGVzKGxhbmd1YWdlKSkge1xuICAgICAgICByZXR1cm4gc3BsaXRDaGluZXNlKHN0cmluZ1RvU3BsaXQpO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdEV1cm9wZWFuKHN0cmluZ1RvU3BsaXQsIGFsaWdubWVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0U3RyaW5nID0gKHRleHQ6IHN0cmluZywgYWxpZ25tZW50OiBBbGlnbm1lbnQsIGJpbmRpbmc/OiBCaW5kaW5nKTogQXJyYXk8c3RyaW5nIHwgUmVhY3ROb2RlPiA9PlxuICAgIHRleHQuc3BsaXQoLyVcXCgoLio/KVxcKSg/OltzZF0pPy9nKS5tYXAoKHN1YlN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghYmluZGluZykgeyByZXR1cm4gc3BsaXRXb3JkcyhzdWJTdHJpbmcsIGFsaWdubWVudCk7IH1cbiAgICAgICAgcmV0dXJuIHN1YlN0cmluZyBpbiBiaW5kaW5nID8gYmluZGluZ1tzdWJTdHJpbmddIDogc3BsaXRXb3JkcyhzdWJTdHJpbmcsIGFsaWdubWVudCk7XG4gICAgfSk7XG5cbiIsImltcG9ydCB7IFRvb2x0aXBEZWNvcmF0b3IgfSBmcm9tICdjb21wb25lbnRzL1Rvb2x0aXBEZWNvcmF0b3IvVG9vbHRpcERlY29yYXRvcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XHJcbmltcG9ydCB7IE1vZGVsUHJvdmlkZXIgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmVuZ2luZS53aGVuUmVhZHkudGhlbigoKSA9PiB7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPE1vZGVsUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxUb29sdGlwRGVjb3JhdG9yPlxyXG4gICAgICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXBEZWNvcmF0b3I+XHJcbiAgICAgICAgPC9Nb2RlbFByb3ZpZGVyPixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpLFxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVGV4dC9UZXh0JztcbmltcG9ydCB7IFJld2FyZFN0YXR1cyB9IGZyb20gJ2d1aS9pbXBsL2dlbi92aWV3X21vZGVscy92aWV3cy9sb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9wZXJzb25hbF9taXNzaW9uc19vbGRfY2FtcGFpZ25fdG9vbHRpcF9yZXdhcmRzX21vZGVsJztcbmltcG9ydCB7IE1pc3Npb25TdGF0dXMgfSBmcm9tICdndWkvaW1wbC9nZW4vdmlld19tb2RlbHMvdmlld3MvbG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvcGVyc29uYWxfbWlzc2lvbnNfb2xkX2NhbXBhaWduX3Rvb2x0aXBfdmlld19tb2RlbCc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY2hlY2tJc0NvbXBsZXRlZCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlTW9kZWwgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgeyBPcGVyYXRpb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5jc3MnO1xuXG5jb25zdCBNQVhfUkVXQVJEU19JTl9ST1cgPSA0O1xuXG5jb25zdCBGSVJTVF9DQU1QQUlHTl9PUEVSQVRJT05TID0gNDtcblxuY29uc3QgVEVYVFMgPSBSLnN0cmluZ3MucG1fYW5ub3VuY2Uub2xkVG9vbHRpcDtcblxuZXhwb3J0IGNvbnN0IEFwcCA9IG9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCB7IG1vZGVsIH0gPSB1c2VNb2RlbCgpO1xuICAgIGNvbnN0IHsgbWlzc2lvblN0YXR1cyB9ID0gbW9kZWwucm9vdC5nZXQoKTtcblxuICAgIGNvbnN0IG9wZXJhdGlvbnMgPSBtb2RlbC5jb21wdXRlcy5nZXRPcGVyYXRpb25zKCk7XG4gICAgY29uc3QgcmV3YXJkcyA9IG1vZGVsLmNvbXB1dGVzLmdldFJld2FyZHMoKTtcblxuICAgIGNvbnN0IGlzTWlzc2lvbkFjdGl2ZSA9IG1pc3Npb25TdGF0dXMgPT09IE1pc3Npb25TdGF0dXMuQWN0aXZlO1xuICAgIGNvbnN0IGlzTWlzc2lvbkNvbXBsZXRlZFBlcmZlY3QgPSBtaXNzaW9uU3RhdHVzID09PSBNaXNzaW9uU3RhdHVzLkNvbXBsZXRlZFBlcmZlY3Q7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IG1pc3Npb25TdGF0dXMgPT09IE1pc3Npb25TdGF0dXMuRGlzYWJsZWQ7XG5cbiAgICBjb25zdCBmb290ZXJMYWJlbFRleHQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGlzTWlzc2lvbkFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFRFWFRTLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzTWlzc2lvbkNvbXBsZXRlZFBlcmZlY3QgPyBURVhUUy5jb21wbGV0ZWRQZXJmZWN0LmhlYWRlcigpIDogVEVYVFMuY29tcGxldGVkLmhlYWRlcigpO1xuICAgIH0sIFtpc01pc3Npb25Db21wbGV0ZWRQZXJmZWN0LCBpc01pc3Npb25BY3RpdmVdKTtcblxuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpc2FibGVkfT5cbiAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e3N0eWxlcy5kaXNhYmxlZEhlYWRlcn0gdGV4dD17VEVYVFMuaGVhZGVyKCl9IC8+XG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWJsZWRCb2R5fSB0ZXh0PXtURVhUUy5kaXNhYmxlZC5zdWJ0aXRsZSgpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5iYXNlLCBzdHlsZXNbYGJhc2VfXyR7bWlzc2lvblN0YXR1c31gXSl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ30gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfSB0ZXh0PXtURVhUUy5oZWFkZXIoKX0gLz5cbiAgICAgICAgICAgICAgICB7IWlzTWlzc2lvbkNvbXBsZXRlZFBlcmZlY3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpc01pc3Npb25BY3RpdmUgPyBURVhUUy5zdWJ0aXRsZSgpIDogVEVYVFMuc3VidGl0bGVQZXJmZWN0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcGVyYXRpb25zV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wZXJhdGlvbnMubWFwKChvcGVyYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdGlvblN0eWxlID0gY2hlY2tJc0NvbXBsZXRlZChvcGVyYXRpb24uY29tcGxldGVkLCBvcGVyYXRpb24uYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBvcGVyYXRpb25TdHlsZSA9PT0gT3BlcmF0aW9uVHlwZS5BY3RpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtvcGVyYXRpb24ubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBvcGVyYXRpb25zLmxlbmd0aCAtIDEgJiYgc3R5bGVzLm9wZXJhdGlvbl9fbGFzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG90fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMub3BlcmF0aW9uVGV4dCwgc3R5bGVzLm9wZXJhdGlvblRleHRfX25hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17VEVYVFMub3BlcmF0aW9uKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaW5kaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBvcGVyYXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm9wZXJhdGlvblRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm9wZXJhdGlvblRleHRfX2RvbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2BvcGVyYXRpb25UZXh0X18ke29wZXJhdGlvblN0eWxlfWBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1N0cmluZyhvcGVyYXRpb24uY29tcGxldGVkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm9wZXJhdGlvblRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm9wZXJhdGlvblRleHRfX2RpdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzQWN0aXZlICYmIHN0eWxlc1tgb3BlcmF0aW9uVGV4dF9fJHtvcGVyYXRpb25TdHlsZX1gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtURVhUUy5kaXZpZGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5vcGVyYXRpb25UZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzQWN0aXZlICYmIHN0eWxlc1tgb3BlcmF0aW9uVGV4dF9fJHtvcGVyYXRpb25TdHlsZX1gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtTdHJpbmcob3BlcmF0aW9uLmFsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMSA9PT0gRklSU1RfQ0FNUEFJR05fT1BFUkFUSU9OUyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuZGl2aWRlciwgc3R5bGVzLmRpdmlkZXJfX29wZXJhdGlvbnMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc01pc3Npb25BY3RpdmUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXdhcmRzU2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmliYm9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuc3ViVGl0bGUsIHN0eWxlcy5zdWJUaXRsZV9fcmV3YXJkcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtURVhUUy5yZXdhcmRUaXRsZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJld2FyZHNXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXdhcmRzLm1hcCgocmV3YXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTGFzdFJld2FyZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleCArIDEpICUgTUFYX1JFV0FSRFNfSU5fUk9XID09PSAwIHx8IGluZGV4ICsgMSA9PT0gcmV3YXJkcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyZXdhcmQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLnJld2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbYHJld2FyZF9fJHtyZXdhcmQuc3RhdHVzfWBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGFzdFJld2FyZCAmJiBzdHlsZXMucmV3YXJkX19sYXN0SW5Sb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmV3YXJkSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtyZXdhcmQuaWNvbn0pYCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmV3YXJkTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Jld2FyZC5zdGF0dXMgIT09IFJld2FyZFN0YXR1cy5BdmFpbGFibGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5sYWJlbEljb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2BsYWJlbEljb25fXyR7cmV3YXJkLnN0YXR1c31gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0PXtyZXdhcmQubmFtZX0gY2xhc3NOYW1lPXtjeChzdHlsZXMucmV3YXJkVGV4dCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXdhcmRDb2xsZWN0ZWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJld2FyZENvbGxlY3RlZEJnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJld2FyZENvbGxlY3RlZExhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmV3YXJkQ29sbGVjdGVkTGFiZWxJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMucmV3YXJkQ29sbGVjdGVkTGFiZWxUZXh0fSB0ZXh0PXtURVhUUy5jb2xsZWN0VmVoaWNsZSgpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge21pc3Npb25TdGF0dXMgIT09IE1pc3Npb25TdGF0dXMuQ29tcGxldGVkICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxhYmVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyTGFiZWxJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dD17Zm9vdGVyTGFiZWxUZXh0fSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJMYWJlbFRleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7IWlzTWlzc2lvbkFjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJvdHRvbVdyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckJvdHRvbVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNaXNzaW9uQ29tcGxldGVkUGVyZmVjdCA/IFRFWFRTLmNvbXBsZXRlZFBlcmZlY3QuYm9keSgpIDogVEVYVFMuY29tcGxldGVkLmJvZHkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59KTtcbiIsImltcG9ydCB7IE9wZXJhdGlvblR5cGUgfSBmcm9tICcuL3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0lzQ29tcGxldGVkID0gKGNvbXBsZXRlZDogbnVtYmVyLCBhbGw6IG51bWJlcik6IE9wZXJhdGlvblR5cGUgPT4ge1xyXG4gICAgaWYgKCFjb21wbGV0ZWQpIHtcclxuICAgICAgICByZXR1cm4gT3BlcmF0aW9uVHlwZS5FbXB0eTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb21wbGV0ZWQgPCBhbGwgPyBPcGVyYXRpb25UeXBlLkFjdGl2ZSA6IE9wZXJhdGlvblR5cGUuQ29tcGxldGVkO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBQZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlld01vZGVsIH0gZnJvbSAnZ3VpL2ltcGwvZ2VuL3ZpZXdfbW9kZWxzL3ZpZXdzL2xvYmJ5L3BtX2Fubm91bmNlL3Rvb2x0aXBzL3BlcnNvbmFsX21pc3Npb25zX29sZF9jYW1wYWlnbl90b29sdGlwX3ZpZXdfbW9kZWwnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplTW9kZWxXaXRoQ29udGV4dCB9IGZyb20gJ2xpYi9kYXRhLWxheWVyJztcclxuaW1wb3J0IHsgY29uc3RGYWxzZSwgbm9vcCB9IGZyb20gJ2xpYi9mdW5jdGlvbic7XHJcbmltcG9ydCB7IENhc3RBbGxBcnJheXMsIGxpa2VBcnJheSB9IGZyb20gJ2xpYi9saWtlQXJyYXknO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZuIH0gZnJvbSAnbW9ieC11dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgW01vZGVsUHJvdmlkZXIsIHVzZU1vZGVsXSA9IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0PFxyXG4gICAgQ2FzdEFsbEFycmF5czxQZXJzb25hbE1pc3Npb25zT2xkQ2FtcGFpZ25Ub29sdGlwVmlld01vZGVsPlxyXG4+KCkoKHsgb2JzZXJ2YWJsZU1vZGVsIH0pID0+IHtcclxuICAgIGNvbnN0IG1vZGVsID0ge1xyXG4gICAgICAgIHJvb3Q6IG9ic2VydmFibGVNb2RlbC5vYmplY3QoKSxcclxuICAgICAgICBvcGVyYXRpb25zOiBvYnNlcnZhYmxlTW9kZWwuYXJyYXkoJ29wZXJhdGlvbnMnKSxcclxuICAgICAgICByZXdhcmRzOiBvYnNlcnZhYmxlTW9kZWwuYXJyYXkoJ3Jld2FyZHMnKSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0T3BlcmF0aW9ucyA9IGNvbXB1dGVkRm4oKCkgPT4gbGlrZUFycmF5Lm1hcChtb2RlbC5vcGVyYXRpb25zLmdldCgpLCAob3BlcmF0aW9uKSA9PiAoeyAuLi5vcGVyYXRpb24gfSkpLCB7XHJcbiAgICAgICAgZXF1YWxzOiBjb25zdEZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0UmV3YXJkcyA9IGNvbXB1dGVkRm4oKCkgPT4gbGlrZUFycmF5Lm1hcChtb2RlbC5yZXdhcmRzLmdldCgpLCAocmV3YXJkKSA9PiAoeyAuLi5yZXdhcmQgfSkpLCB7XHJcbiAgICAgICAgZXF1YWxzOiBjb25zdEZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5tb2RlbCxcclxuICAgICAgICBjb21wdXRlczogeyBnZXRPcGVyYXRpb25zLCBnZXRSZXdhcmRzIH0sXHJcbiAgICB9O1xyXG59LCBub29wKTtcclxuIiwiZXhwb3J0IHR5cGUgVmFsdWVPZjxUPiA9IFRba2V5b2YgVF07XHJcblxyXG5leHBvcnQgY29uc3QgT3BlcmF0aW9uVHlwZSA9IHtcclxuICAgIENvbXBsZXRlZDogJ2NvbXBsZXRlZCcsXHJcbiAgICBBY3RpdmU6ICdhY3RpdmUnLFxyXG4gICAgRW1wdHk6ICdlbXB0eScsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgdHlwZSBPcGVyYXRpb25UeXBlID0gVmFsdWVPZjx0eXBlb2YgT3BlcmF0aW9uVHlwZT47XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZCB1c2luZyB3Z3B5Z2VuXHJcbiAqICAgdGVtcGxhdGU6IGNvbmZpZ3MvdGVtcGxhdGVzL3ZpZXdfbW9kZWwudHMuamluamEyXHJcbiAqICAgc291cmNlOiBjb25maWdzL2RlZmluaXRpb25zL3ZpZXdzL2xvYmJ5L3BtX2Fubm91bmNlL3Rvb2x0aXBzL3BlcnNvbmFsX21pc3Npb25zX29sZF9jYW1wYWlnbl90b29sdGlwX3ZpZXdfbW9kZWwueWFtbFxyXG4gKiBQbGVhc2UsIGRvbid0IGVkaXQgdGhpcyBmaWxlIG1hbnVhbGx5LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBlbnVtIFJld2FyZFN0YXR1cyB7XHJcbiAgICBDb21wbGV0ZWQgPSAnY29tcGxldGVkJyxcclxuICAgIEF2YWlsYWJsZSA9ICdhdmFpbGFibGUnLFxyXG4gICAgTG9ja2VkID0gJ2xvY2tlZCdcclxufVxyXG5cclxuLyoqXHJcbiAqICBHZW5lcmF0ZWQgdmlldyBtb2RlbC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFJld2FyZHNNb2RlbCBleHRlbmRzIEdGVmlld01vZGVsIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIHN0YXR1czogUmV3YXJkU3RhdHVzO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgd2FzIGdlbmVyYXRlZCB1c2luZyB3Z3B5Z2VuXHJcbiAqICAgdGVtcGxhdGU6IGNvbmZpZ3MvdGVtcGxhdGVzL3ZpZXdfbW9kZWwudHMuamluamEyXHJcbiAqICAgc291cmNlOiBjb25maWdzL2RlZmluaXRpb25zL3ZpZXdzL2xvYmJ5L3BtX2Fubm91bmNlL3Rvb2x0aXBzL3BlcnNvbmFsX21pc3Npb25zX29sZF9jYW1wYWlnbl90b29sdGlwX3ZpZXdfbW9kZWwueWFtbFxyXG4gKiBQbGVhc2UsIGRvbid0IGVkaXQgdGhpcyBmaWxlIG1hbnVhbGx5LlxyXG4gKi9cclxuaW1wb3J0IHsgUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcE9wZXJhdGlvbnNNb2RlbCB9IGZyb20gJ2d1aS9pbXBsL2dlbi92aWV3X21vZGVscy92aWV3cy9sb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9wZXJzb25hbF9taXNzaW9uc19vbGRfY2FtcGFpZ25fdG9vbHRpcF9vcGVyYXRpb25zX21vZGVsJztcclxuaW1wb3J0IHsgUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFJld2FyZHNNb2RlbCB9IGZyb20gJ2d1aS9pbXBsL2dlbi92aWV3X21vZGVscy92aWV3cy9sb2JieS9wbV9hbm5vdW5jZS90b29sdGlwcy9wZXJzb25hbF9taXNzaW9uc19vbGRfY2FtcGFpZ25fdG9vbHRpcF9yZXdhcmRzX21vZGVsJztcclxuXHJcbmV4cG9ydCBlbnVtIE1pc3Npb25TdGF0dXMge1xyXG4gICAgQWN0aXZlID0gJ2FjdGl2ZScsXHJcbiAgICBDb21wbGV0ZWQgPSAnY29tcGxldGVkJyxcclxuICAgIENvbXBsZXRlZFBlcmZlY3QgPSAnY29tcGxldGVkUGVyZmVjdCcsXHJcbiAgICBEaXNhYmxlZCA9ICdkaXNhYmxlZCdcclxufVxyXG5cclxuLyoqXHJcbiAqICBHZW5lcmF0ZWQgdmlldyBtb2RlbC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXdNb2RlbCBleHRlbmRzIEdGVmlld01vZGVsIHtcclxuICAgIG1pc3Npb25TdGF0dXM6IE1pc3Npb25TdGF0dXM7XHJcbiAgICBvcGVyYXRpb25zOiBDb2hlcmVudEFycmF5UHJveHk8UGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcE9wZXJhdGlvbnNNb2RlbD47XHJcbiAgICByZXdhcmRzOiBDb2hlcmVudEFycmF5UHJveHk8UGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFJld2FyZHNNb2RlbD47XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJtdF9fWFNcIjpcIkJveF9tdF9fWFNfMGNcIixcIm10X19TTVwiOlwiQm94X210X19TTV9lYlwiLFwibXRfX1NNcFwiOlwiQm94X210X19TTXBfY2ZcIixcIm10X19NRFwiOlwiQm94X210X19NRF8yNVwiLFwibXRfX01EcFwiOlwiQm94X210X19NRHBfNDlcIixcIm10X19MR1wiOlwiQm94X210X19MR19lOFwiLFwibXRfX1hMXCI6XCJCb3hfbXRfX1hMXzgzXCIsXCJtcl9fWFNcIjpcIkJveF9tcl9fWFNfN2NcIixcIm1yX19TTVwiOlwiQm94X21yX19TTV8wOFwiLFwibXJfX1NNcFwiOlwiQm94X21yX19TTXBfMDZcIixcIm1yX19NRFwiOlwiQm94X21yX19NRF80YVwiLFwibXJfX01EcFwiOlwiQm94X21yX19NRHBfYjZcIixcIm1yX19MR1wiOlwiQm94X21yX19MR19kMFwiLFwibXJfX1hMXCI6XCJCb3hfbXJfX1hMX2RiXCIsXCJtYl9fWFNcIjpcIkJveF9tYl9fWFNfYmJcIixcIm1iX19TTVwiOlwiQm94X21iX19TTV84M1wiLFwibWJfX1NNcFwiOlwiQm94X21iX19TTXBfMDRcIixcIm1iX19NRFwiOlwiQm94X21iX19NRF9lZFwiLFwibWJfX01EcFwiOlwiQm94X21iX19NRHBfNjVcIixcIm1iX19MR1wiOlwiQm94X21iX19MR19jOFwiLFwibWJfX1hMXCI6XCJCb3hfbWJfX1hMX2Y4XCIsXCJtbF9fWFNcIjpcIkJveF9tbF9fWFNfOGFcIixcIm1sX19TTVwiOlwiQm94X21sX19TTV9lNlwiLFwibWxfX1NNcFwiOlwiQm94X21sX19TTXBfZmJcIixcIm1sX19NRFwiOlwiQm94X21sX19NRF8yYlwiLFwibWxfX01EcFwiOlwiQm94X21sX19NRHBfYzdcIixcIm1sX19MR1wiOlwiQm94X21sX19MR18zOVwiLFwibWxfX1hMXCI6XCJCb3hfbWxfX1hMXzRhXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiRm9ybWF0VGV4dF9iYXNlX2QwXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFyYWdyYXBoLVAxMFwiOlwiVGV4dF9wYXJhZ3JhcGgtUDEwXzJjXCIsXCJwYXJhZ3JhcGgtUDEyXCI6XCJUZXh0X3BhcmFncmFwaC1QMTJfMjJcIixcInBhcmFncmFwaC1QMTRcIjpcIlRleHRfcGFyYWdyYXBoLVAxNF9hN1wiLFwicGFyYWdyYXBoLVAxNlwiOlwiVGV4dF9wYXJhZ3JhcGgtUDE2XzkwXCIsXCJwYXJhZ3JhcGgtUDE4XCI6XCJUZXh0X3BhcmFncmFwaC1QMThfNTBcIixcInBhcmFncmFwaC1QMjRcIjpcIlRleHRfcGFyYWdyYXBoLVAyNF8zM1wiLFwiaGVhZGluZy1IMTRcIjpcIlRleHRfaGVhZGluZy1IMTRfOGJcIixcImhlYWRpbmctSDE1XCI6XCJUZXh0X2hlYWRpbmctSDE1XzllXCIsXCJoZWFkaW5nLUgxOFwiOlwiVGV4dF9oZWFkaW5nLUgxOF9iN1wiLFwiaGVhZGluZy1IMjBSXCI6XCJUZXh0X2hlYWRpbmctSDIwUl9mNlwiLFwiaGVhZGluZy1IMjJcIjpcIlRleHRfaGVhZGluZy1IMjJfMjdcIixcImhlYWRpbmctSDI0UlwiOlwiVGV4dF9oZWFkaW5nLUgyNFJfYmVcIixcImhlYWRpbmctSDI0XCI6XCJUZXh0X2hlYWRpbmctSDI0XzBjXCIsXCJoZWFkaW5nLUgyOFwiOlwiVGV4dF9oZWFkaW5nLUgyOF83OFwiLFwiaGVhZGluZy1IMzZcIjpcIlRleHRfaGVhZGluZy1IMzZfMzJcIixcImhlYWRpbmctSDU2XCI6XCJUZXh0X2hlYWRpbmctSDU2X2MzXCIsXCJoZWFkaW5nLUg3M1wiOlwiVGV4dF9oZWFkaW5nLUg3M184ZlwiLFwiaGVhZGluZy1IMTQ0XCI6XCJUZXh0X2hlYWRpbmctSDE0NF9hOVwiLFwiQkxBQ0tfUkVBTFwiOlwiVGV4dF9CTEFDS19SRUFMXzMwXCIsXCJXSElURV9SRUFMXCI6XCJUZXh0X1dISVRFX1JFQUxfYmNcIixcIldISVRFXCI6XCJUZXh0X1dISVRFXzYyXCIsXCJXSElURV9PUkFOR0VcIjpcIlRleHRfV0hJVEVfT1JBTkdFXzU0XCIsXCJXSElURV9TUEFOSVNIXCI6XCJUZXh0X1dISVRFX1NQQU5JU0hfZGZcIixcIlBBUlwiOlwiVGV4dF9QQVJfMTVcIixcIlBBUl9TRUNPTkRBUllcIjpcIlRleHRfUEFSX1NFQ09OREFSWV81ZFwiLFwiUEFSX1RFUlRJQVJZXCI6XCJUZXh0X1BBUl9URVJUSUFSWV9jOVwiLFwiSU5GT19SRURcIjpcIlRleHRfSU5GT19SRURfMzBcIixcIlJFRFwiOlwiVGV4dF9SRURfNjZcIixcIlJFRF9EQVJLXCI6XCJUZXh0X1JFRF9EQVJLX2Q4XCIsXCJZRUxMT1dcIjpcIlRleHRfWUVMTE9XX2VkXCIsXCJPUkFOR0VcIjpcIlRleHRfT1JBTkdFX2JlXCIsXCJDUkVBTVwiOlwiVGV4dF9DUkVBTV81N1wiLFwiQlJPV05cIjpcIlRleHRfQlJPV05fMThcIixcIkdSRUVOX0JSSUdIVFwiOlwiVGV4dF9HUkVFTl9CUklHSFRfM2ZcIixcIkdSRUVOXCI6XCJUZXh0X0dSRUVOX2UzXCIsXCJHUkVFTl9EQVJLXCI6XCJUZXh0X0dSRUVOX0RBUktfZjFcIixcIkJMVUVfQk9PU1RFUlwiOlwiVGV4dF9CTFVFX0JPT1NURVJfMjFcIixcIkJMVUVfVEVBTUtJTExFUlwiOlwiVGV4dF9CTFVFX1RFQU1LSUxMRVJfYWJcIixcIkNSRURcIjpcIlRleHRfQ1JFRF9mN1wiLFwiR09MRFwiOlwiVGV4dF9HT0xEXzI4XCIsXCJCT05EXCI6XCJUZXh0X0JPTkRfYmVcIixcIlBST01cIjpcIlRleHRfUFJPTV82NVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIlRvb2x0aXBEZWNvcmF0b3JfYmFzZV9jOVwiLFwiYmFzZV9fdGhlbWUtZGVmYXVsdFwiOlwiVG9vbHRpcERlY29yYXRvcl9iYXNlX190aGVtZS1kZWZhdWx0XzZkXCIsXCJkZWNvcmF0b3JcIjpcIlRvb2x0aXBEZWNvcmF0b3JfZGVjb3JhdG9yXzNkXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiQXBwX2Jhc2VfODlcIixcImJhc2VfX2NvbXBsZXRlZFwiOlwiQXBwX2Jhc2VfX2NvbXBsZXRlZF8xNFwiLFwiYmFzZV9fY29tcGxldGVkUGVyZmVjdFwiOlwiQXBwX2Jhc2VfX2NvbXBsZXRlZFBlcmZlY3RfZWVcIixcImJnXCI6XCJBcHBfYmdfYzJcIixcImNvbnRlbnRcIjpcIkFwcF9jb250ZW50Xzg1XCIsXCJoZWFkZXJcIjpcIkFwcF9oZWFkZXJfYmZcIixcInN1YlRpdGxlXCI6XCJBcHBfc3ViVGl0bGVfYjBcIixcInN1YlRpdGxlX19yZXdhcmRzXCI6XCJBcHBfc3ViVGl0bGVfX3Jld2FyZHNfZGNcIixcIm9wZXJhdGlvbnNXcmFwcGVyXCI6XCJBcHBfb3BlcmF0aW9uc1dyYXBwZXJfNTFcIixcIm9wZXJhdGlvblwiOlwiQXBwX29wZXJhdGlvbl84YlwiLFwib3BlcmF0aW9uX19sYXN0XCI6XCJBcHBfb3BlcmF0aW9uX19sYXN0Xzc0XCIsXCJvcGVyYXRpb25UZXh0XCI6XCJBcHBfb3BlcmF0aW9uVGV4dF9iOVwiLFwib3BlcmF0aW9uVGV4dF9fZG9uZVwiOlwiQXBwX29wZXJhdGlvblRleHRfX2RvbmVfZmRcIixcIm9wZXJhdGlvblRleHRfX2RpdmlkZXJcIjpcIkFwcF9vcGVyYXRpb25UZXh0X19kaXZpZGVyXzc2XCIsXCJvcGVyYXRpb25UZXh0X19uYW1lXCI6XCJBcHBfb3BlcmF0aW9uVGV4dF9fbmFtZV9kNVwiLFwib3BlcmF0aW9uVGV4dF9fY29tcGxldGVkXCI6XCJBcHBfb3BlcmF0aW9uVGV4dF9fY29tcGxldGVkXzY4XCIsXCJvcGVyYXRpb25UZXh0X19hY3RpdmVcIjpcIkFwcF9vcGVyYXRpb25UZXh0X19hY3RpdmVfOGJcIixcIm9wZXJhdGlvblRleHRfX2VtcHR5XCI6XCJBcHBfb3BlcmF0aW9uVGV4dF9fZW1wdHlfM2NcIixcImRvdFwiOlwiQXBwX2RvdF8xMFwiLFwicmV3YXJkc1NlY3Rpb25cIjpcIkFwcF9yZXdhcmRzU2VjdGlvbl8yZVwiLFwicmV3YXJkc1dyYXBwZXJcIjpcIkFwcF9yZXdhcmRzV3JhcHBlcl84MVwiLFwicmV3YXJkXCI6XCJBcHBfcmV3YXJkXzM5XCIsXCJyZXdhcmRfX2xhc3RJblJvd1wiOlwiQXBwX3Jld2FyZF9fbGFzdEluUm93XzZlXCIsXCJyZXdhcmRfX2NvbXBsZXRlZFwiOlwiQXBwX3Jld2FyZF9fY29tcGxldGVkXzk4XCIsXCJyZXdhcmRJY29uXCI6XCJBcHBfcmV3YXJkSWNvbl83Y1wiLFwicmV3YXJkTmFtZVwiOlwiQXBwX3Jld2FyZE5hbWVfZmZcIixcInJld2FyZFRleHRcIjpcIkFwcF9yZXdhcmRUZXh0XzI5XCIsXCJyaWJib25cIjpcIkFwcF9yaWJib25fYWZcIixcImxhYmVsSWNvblwiOlwiQXBwX2xhYmVsSWNvbl9lMlwiLFwibGFiZWxJY29uX19jb21wbGV0ZWRcIjpcIkFwcF9sYWJlbEljb25fX2NvbXBsZXRlZF8wYVwiLFwibGFiZWxJY29uX19sb2NrZWRcIjpcIkFwcF9sYWJlbEljb25fX2xvY2tlZF9lNFwiLFwicmV3YXJkQ29sbGVjdGVkXCI6XCJBcHBfcmV3YXJkQ29sbGVjdGVkX2YyXCIsXCJyZXdhcmRDb2xsZWN0ZWRCZ1wiOlwiQXBwX3Jld2FyZENvbGxlY3RlZEJnX2YwXCIsXCJyZXdhcmRDb2xsZWN0ZWRMYWJlbFwiOlwiQXBwX3Jld2FyZENvbGxlY3RlZExhYmVsXzA0XCIsXCJyZXdhcmRDb2xsZWN0ZWRMYWJlbEljb25cIjpcIkFwcF9yZXdhcmRDb2xsZWN0ZWRMYWJlbEljb25fZDJcIixcInJld2FyZENvbGxlY3RlZExhYmVsVGV4dFwiOlwiQXBwX3Jld2FyZENvbGxlY3RlZExhYmVsVGV4dF9iN1wiLFwiZGl2aWRlclwiOlwiQXBwX2RpdmlkZXJfMzRcIixcImRpdmlkZXJfX29wZXJhdGlvbnNcIjpcIkFwcF9kaXZpZGVyX19vcGVyYXRpb25zXzU3XCIsXCJmb290ZXJcIjpcIkFwcF9mb290ZXJfYWJcIixcImZvb3RlckxhYmVsXCI6XCJBcHBfZm9vdGVyTGFiZWxfZDBcIixcImZvb3RlckxhYmVsSWNvblwiOlwiQXBwX2Zvb3RlckxhYmVsSWNvbl8xNVwiLFwiZm9vdGVyTGFiZWxUZXh0XCI6XCJBcHBfZm9vdGVyTGFiZWxUZXh0X2MwXCIsXCJmb290ZXJCb3R0b21XcmFwcGVyXCI6XCJBcHBfZm9vdGVyQm90dG9tV3JhcHBlcl8wYVwiLFwiZm9vdGVyQm90dG9tVGV4dFwiOlwiQXBwX2Zvb3RlckJvdHRvbVRleHRfMjRcIixcImRpc2FibGVkXCI6XCJBcHBfZGlzYWJsZWRfNGFcIixcImRpc2FibGVkSGVhZGVyXCI6XCJBcHBfZGlzYWJsZWRIZWFkZXJfOTBcIixcImRpc2FibGVkQm9keVwiOlwiQXBwX2Rpc2FibGVkQm9keV81OFwifTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibG9iYnkvcG1fYW5ub3VuY2UvdG9vbHRpcHMvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXcvUGVyc29uYWxNaXNzaW9uc09sZENhbXBhaWduVG9vbHRpcFZpZXdcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZ2FtZWZhY2VcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZ2FtZWZhY2VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImxpYi9sb2JieS9wbV9hbm5vdW5jZS92ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3ZpZXdzL2xvYmJ5L3BtX2Fubm91bmNlL3Rvb2x0aXBzL1BlcnNvbmFsTWlzc2lvbnNPbGRDYW1wYWlnblRvb2x0aXBWaWV3L1BlcnNvbmFsTWlzc2lvbnNPbGRDYW1wYWlnblRvb2x0aXBWaWV3LnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJzcGFjaW5nIiwiZ2V0QWRhcHRpdmVDb250cm9sbGVyIiwiUmVhY3QiLCJ1c2VNZW1vIiwic3R5bGVzIiwic3RhbmRhcmRNYXJnaW5zIiwiT2JqZWN0Iiwia2V5cyIsImRlZmF1bHRYbE1hcmdpbnMiLCJtdCIsIm10X19YTCIsIm1yIiwibXJfX1hMIiwibWIiLCJtYl9fWEwiLCJtbCIsIm1sX19YTCIsImRlZmF1bHRMZ01hcmdpbnMiLCJtdF9fTEciLCJtcl9fTEciLCJtYl9fTEciLCJtbF9fTEciLCJkZWZhdWx0TWRwTWFyZ2lucyIsIm10X19NRHAiLCJtcl9fTURwIiwibWJfX01EcCIsIm1sX19NRHAiLCJkZWZhdWx0TWRNYXJnaW5zIiwibXRfX01EIiwibXJfX01EIiwibWJfX01EIiwibWxfX01EIiwiZGVmYXVsdFNtcE1hcmdpbnMiLCJtdF9fU01wIiwibXJfX1NNcCIsIm1iX19TTXAiLCJtbF9fU01wIiwiZGVmYXVsdFNtTWFyZ2lucyIsIm10X19TTSIsIm1yX19TTSIsIm1iX19TTSIsIm1sX19TTSIsImRlZmF1bHRYc01hcmdpbnMiLCJtdF9fWFMiLCJtcl9fWFMiLCJtYl9fWFMiLCJtbF9fWFMiLCJkZWZhdWx0TWFyZ2luTWFwIiwiWEwiLCJMRyIsIk1EcCIsIk1EIiwiU01wIiwiU00iLCJYUyIsImRlZmF1bHRNYXJnaW5zIiwibWFyZ2luS2V5TGlzdCIsImdldE1hcmdpbkNsYXNzTmFtZXMiLCJtYXJnaW5NYXAiLCJyZWR1Y2UiLCJrZXkiLCJ2YWx1ZSIsImNvbmNhdCIsIm1hcmdpbktleVByb3BlcnR5TWFwIiwiZ2V0TWFyZ2luU3R5bGUiLCJzdHlsZSIsInByb3BlcnR5IiwiQm94IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJtIiwiY29sdW1uIiwicm93IiwiZmxleERpcmVjdGlvbiIsInVuZGVmaW5lZCIsImZsZXhTdGFydCIsImNlbnRlciIsImZsZXhFbmQiLCJzcGFjZUJldHdlZW4iLCJzcGFjZUFyb3VuZCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduU2VsZiIsIndyYXAiLCJmbGV4V3JhcCIsImdyb3ciLCJzaHJpbmsiLCJmbGV4IiwiY2hpbGRyZW4iLCJyZXN0UHJvcHMiLCJjb21wdXRlZENsYXNzTmFtZXMiLCJtYXJnaW5TdHlsZSIsImNvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiYmFzZSIsIkZyYWdtZW50IiwiY3giLCJmb3JtYXRTdHJpbmciLCJBbGlnbm1lbnQiLCJGb3JtYXRUZXh0IiwiYmluZGluZyIsInRleHQiLCJjbGFzc01peCIsImFsaWdubWVudCIsImxlZnQiLCJjb25zb2xlIiwiZXJyb3IiLCJzcGxpdCIsIm1hcCIsInRleHRMaW5lIiwibGluZUlkIiwid29yZElkIiwiZW52IiwiY3JlYXRlQ29udGV4dCIsIkJSRUFLUE9JTlRTIiwiZ2V0U2l6ZXMiLCJjbGllbnQiLCJnZXRTaXplIiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImluaXRpYWxWYWx1ZSIsIk1lZGlhQ29udGV4dCIsIm1lbW8iLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNhbGxPbmNlIiwiUHJvdmlkZXIiLCJjb250ZXh0Iiwic2V0VmFsdWUiLCJoYW5kbGVSZXNpemUiLCJwcmVwYXJlZFdpZHRoIiwidmlldyIsInB4VG9SZW0iLCJwcmVwYXJlZEhlaWdodCIsImVuZ2luZSIsIm9uIiwib2ZmIiwidmFsdWVBc1Byb3AiLCJNZWRpYVByb3ZpZGVyIiwiZ2V0QnlIZWlnaHQiLCJkZWZhdWx0UHJvcHMiLCJleHRyYUxhcmdlIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsImV4dHJhU21hbGwiLCJleHRyYUxhcmdlV2lkdGgiLCJsYXJnZVdpZHRoIiwibWVkaXVtV2lkdGgiLCJzbWFsbFdpZHRoIiwiZXh0cmFTbWFsbFdpZHRoIiwiZXh0cmFMYXJnZUhlaWdodCIsImxhcmdlSGVpZ2h0IiwibWVkaXVtSGVpZ2h0Iiwic21hbGxIZWlnaHQiLCJleHRyYVNtYWxsSGVpZ2h0IiwiTWVkaWEiLCJyZXN0IiwiYnJlYWtwb2ludFByb3BzIiwiTWVkaWFRdWVyeSIsIndlaWdodCIsImdldFdpZHRoQlBXZWlnaHQiLCJicmVha3BvaW50cyIsImdldEhlaWdodEJQV2VpZ2h0IiwiU2l6ZXMiLCJ3aWR0aEJQV2VpZ2h0IiwiaGVpZ2h0QlBXZWlnaHQiLCJNYXRoIiwibWluIiwiY29sb3JzIiwic3RhbmRhcmRDb2xvcnMiLCJ4bFN0eWxlTWFyZ2lucyIsImxnU3R5bGVNYXJnaW5zIiwibWRTdHlsZU1hcmdpbnMiLCJzbVN0eWxlTWFyZ2lucyIsInhzU3R5bGVNYXJnaW5zIiwidmFyaWFudE1hcmdpblNpemVNYXAiLCJ2YXJpYW50cyIsImlzRGVmYXVsdENvbG9yIiwiY29sb3IiLCJpbmNsdWRlcyIsImdldENvbG9yU3R5bGVPckNsYXNzTmFtZSIsImNvbG9yQ2xhc3NOYW1lIiwiY29sb3JTdHlsZSIsIlRleHQiLCJ2YXJpYW50IiwiZm9ybWF0IiwidXNlTW91bnQiLCJ1c2VTa2lwRnJhbWUiLCJUb29sdGlwRGVjb3JhdG9yIiwiZm9yd2FyZFJlZiIsInJlZiIsInRoZW1lIiwic2tpcEZyYW1lIiwiYmFzZVJlZiIsInVzZVJlZiIsInJ1biIsImN1cnJlbnQiLCJjb250ZW50V2lkdGgiLCJzY3JvbGxXaWR0aCIsImNvbnRlbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJyZXNpemUiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0U2lkZVBhZGRpbmdzUmVtIiwicGFyc2VJbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJzZXRSZWZzIiwibm9kZSIsImRlY29yYXRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRSb290RGVmYXVsdCIsInJvb3RJZCIsInN1YlZpZXdzIiwiZ2V0IiwiY3JlYXRlIiwiaW5pdGlhbGl6ZXIiLCJnZXRSb290Iiwic3Vic2NyaWJlcnMiLCJNYXAiLCJ3aGVuUmVhZHkiLCJ0aGVuIiwiZGF0YSIsIl8iLCJjYWxsYmFja0lEcyIsImZvckVhY2giLCJjYWxsYmFja0lEIiwiY2FsbGJhY2siLCJ1bnN1YnNjcmliZSIsImlkIiwicmVzSWQiLCJ2aWV3RW52IiwicmVtb3ZlRGF0YUNoYW5nZWRDYWxsYmFjayIsImRlbGV0ZSIsInJlYWRCeVBhdGgiLCJwYXRoIiwicm9vdCIsIm1vZGVsIiwicmVzdWx0IiwibGVuZ3RoIiwiZWxlbWVudCIsImJpbmQiLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVyIiwic3Vic2NyaWJlUGF0aCIsInRyYWNrSW5EZXB0aCIsImFkZE1vZGVsT2JzZXJ2ZXIiLCJzZXQiLCJjcmVhdGVDYWxsYmFjayIsImFyZ3NNYXAiLCJmbiIsImFyZ3MiLCJjcmVhdGVDYWxsYmFja05vQXJncyIsImRpc3Bvc2UiLCJzdWJzY3JpYmVySWQiLCJjb25zdEZhbHNlIiwiYWN0aW9uIiwib2JzZXJ2YWJsZSIsImRhdGFMYXllciIsImluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0IiwibW9kZWxDcmVhdG9yIiwiY29udHJvbHNDcmVhdG9yIiwiQ29udGV4dCIsIkRhdGFMYXllclByb3ZpZGVyIiwibW9kZSIsImRhdGFNb2RlIiwib3B0aW9ucyIsIm1vY2tzIiwiY2xlYW51cHNSZWYiLCJjcmVhdGVDb250ZXh0VmFsdWUiLCJkYXRhTGF5ZXJJbnN0YW5jZSIsImV4dGVybmFsTW9kZWwiLCJnZXR0ZXIiLCJvYnNlcnZhYmxlQXJyYXkiLCJpbml0IiwiaW5pdE9ic2VydmFibGUiLCJib3giLCJlcXVhbHMiLCJvYnNlcnZhYmxlT2JqZWN0Iiwib2JzZXJ2YWJsZVByaW1pdGl2ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJhY2MiLCJrZXlzUmVjb3JkIiwia2V5c0VudHJpZXMiLCJlbnRyaWVzIiwia2V5RnJvbSIsImtleVRvIiwiY2xlYW51cCIsInB1c2giLCJvYnNlcnZhYmxlTW9kZWwiLCJhcnJheSIsIm9iamVjdCIsInByaW1pdGl2ZXMiLCJjb250cm9sc0FyZ3MiLCJjb250cm9scyIsInN0YXJ0ZWRSZWYiLCJjaGFuZ2VNb2RlIiwibWFrZUVuZ2luZUV2ZW50Iiwic2V0VHJhY2tNb3VzZU91dHNpZGUiLCJvblJlc2l6ZSIsImludGVybmFsTW91c2UiLCJkb3duIiwidXAiLCJtb3ZlIiwiaW5pdE1vdXNlRXZlbnRzIiwic3RhdGUiLCJsaXN0ZW5lcnMiLCJlbmFibGVkIiwiaW5pdGlhbGl6ZWQiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInVwZGF0ZUxhenlUcmFjayIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwibWFrZUV2ZW50IiwibmFtZSIsImxpc3RlbmVyIiwiYWN0aXZlIiwid2luZG93RXZlbnQiLCJldmVudCIsImhhbmRsZVdpbmRvd0V2ZW50IiwiZXZlbnRzIiwic3Vic2NyaWJlQXBpIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZU91dHNpZGUiLCJkaXNhYmxlT3V0c2lkZSIsIm1vdXNlIiwidW5pdCIsImdldENsaWVudFNpemVSZW0iLCJnZXRDbGllbnRTaXplUHgiLCJnZXRNb3VzZUdsb2JhbFBvc2l0aW9uIiwiZ2V0TW91c2VHbG9iYWxQb3NpdGlvblJlbSIsImdldE1vdXNlR2xvYmFsUG9zaXRpb25QeCIsImdyYXBoaWNzUXVhbGl0eSIsImlzTG93IiwiZ2V0R3JhcGhpY3NRdWFsaXR5IiwiaXNIaWdoIiwic2V0VHJhY2tNb3VzZU9uU3RhZ2UiLCJldmVudE5hbWUiLCJoYW5kbGVyIiwicHJvY2VzcyIsIk5PREVfRU5WIiwiZ2V0VGV4dHVyZVVybCIsImNoaWxkSWQiLCJzaXplIiwic2NhbGUiLCJnZXRDaGlsZFRleHR1cmVQYXRoIiwiZ2V0QmdVcmwiLCJkaXNwbGF5U3RhdHVzIiwic2hvd2luZyIsInNob3duIiwiaGlkaW5nIiwiaGlkZGVuIiwib25UZXh0dXJlRnJvemVuIiwib25UZXh0dXJlUmVhZHkiLCJvbkRvbUJ1aWx0Iiwib25Mb2FkZWQiLCJvbkRpc3BsYXlDaGFuZ2VkIiwib25Gb2N1c1VwZGF0ZWQiLCJvbkFkZGVkIiwib25SZW1vdmVkIiwib25BdHRhY2hlZCIsIm9uUmVxdWVzdFBvc2l0aW9uIiwic2VuZEV2ZW50IiwiQUxMX1NJREVTIiwiYWRkUHJlbG9hZFRleHR1cmUiLCJzZXRJbnB1dFBhZGRpbmdzUmVtIiwicGFkZGluZ3MiLCJzZXRIaXRBcmVhUGFkZGluZ3NSZW0iLCJnZXRCcm93c2VyVGV4dHVyZVBhdGgiLCJnZXRXZWJCcm93c2VyVGV4dHVyZVBhdGgiLCJ0cmFja1N1Ykl0ZW1zIiwiYWRkRGF0YUNoYW5nZWRDYWxsYmFjayIsImdldFZpZXdTaXplUmVtIiwiZ2V0Vmlld1NpemVQeCIsInJlc2l6ZVZpZXdSZW0iLCJyZXNpemVWaWV3UHgiLCJnZXRWaWV3R2xvYmFsUG9zaXRpb24iLCJnZXRWaWV3R2xvYmFsUG9zaXRpb25SZW0iLCJ4IiwicmVtVG9QeCIsInkiLCJmcmVlemVUZXh0dXJlQmVmb3JlUmVzaXplIiwiZ2V0U2NhbGUiLCJweCIsInJlbSIsInNldEFuaW1hdGVXaW5kb3ciLCJpc0ZvY3VzZWQiLCJzZXRFdmVudEhhbmRsZWQiLCJpc0V2ZW50SGFuZGxlZCIsImZvcmNlVHJpZ2dlck1vdXNlTW92ZSIsImdldERpc3BsYXlTdGF0dXMiLCJnZXRTaG93aW5nU3RhdHVzIiwiZGlzcGxheVN0YXR1c0lzIiwiZXh0cmFTaXplIiwic2V0RXh0cmFTaXplUmVtIiwiZ2V0RXh0cmFTaXplUmVtIiwid2hlblR1dG9yaWFsUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwicmVzb2x2ZSIsImlzRG9tQnVpbHQiLCJ2aWV3RXZlbnRUeXBlcyIsImNsb3NlUG9wb3ZlciIsImNsb3NlIiwibWluaW1pemUiLCJjcmVhdGVWaWV3RXZlbnRBcmd1bWVudHMiLCJfX1R5cGUiLCJudW1iZXIiLCJib29sIiwic3RyaW5nIiwidG9TdHJpbmciLCJzZW5kVmlld0V2ZW50IiwidHlwZSIsInJlc3RPcHRpb25zIiwiaGFuZGxlVmlld0V2ZW50IiwiYXJndW1lbnRzIiwic3RhcnQiLCJpc01vdXNlRXZlbnQiLCJub29wIiwiZW1wdHlGdW5jdGlvbiIsImlkZW50aXR5IiwiYSIsImNvbnN0VHJ1ZSIsImxvZyIsIk1lZGlhU2l6ZSIsInVzZU1lZGlhIiwiYWRhcHRpdmVTdWZmaXhTZXF1ZW5jZSIsImlzQWRhcHRpdmVTdWZmaXgiLCJpc0FkYXB0aXZlUHJvcE5hbWUiLCJhdCIsIm1lZGlhU2l6ZVNlcXVlbmNlIiwiRXh0cmFMYXJnZSIsIkxhcmdlIiwiTWVkaXVtIiwiU21hbGwiLCJFeHRyYVNtYWxsIiwiaGFzRGVmaW5lZEFkYXB0aXZlUHJvcHMiLCJwcm9wTmFtZSIsInByb3BzIiwic29tZSIsInN1ZmZpeCIsIm5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMiLCJtZWRpYVNpemUiLCJvdXRwdXQiLCJiYXNlUHJvcE5hbWUiLCJzbGljZSIsImpvaW4iLCJtZWRpYVNpemVJbmRleCIsImluZGV4T2YiLCJyZWxldmFudEFkYXB0aXZlU3VmZml4ZXMiLCJyZWxldmFudFByb3BlcnR5TmFtZXMiLCJyZXNvbHZlZFByb3BOYW1lIiwiZmluZCIsInJlc29sdmVkUHJvcFZhbHVlIiwiZ2V0QWRhcHRpdmVDb21wb25lbnQiLCJDb21wb25lbnQiLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZWRQcm9wcyIsIkFkYXB0aXZlQ29tcG9uZW50IiwiaGFzQWRhcHRpdmVQcm9wcyIsImdldERyYWZ0ZWRBZGFwdGl2ZVByb3BzIiwiZHJhZnRQcm9wcyIsImYiLCJjYWxsZWRSZWYiLCJNZWRpYVdpZHRoIiwiTWVkaWFIZWlnaHQiLCJjb252ZXJ0VG9NZWRpYVNpemUiLCJtZWRpYUNvbnRleHQiLCJjb252ZXJ0VG9NZWRpYVdpZHRoIiwiY29udmVydFRvTWVkaWFIZWlnaHQiLCJtZWRpYVdpZHRoIiwibWVkaWFIZWlnaHQiLCJyZW1TY3JlZW5XaWR0aCIsInJlbVNjcmVlbkhlaWdodCIsInVzZVVubW91bnQiLCJOT19SQUZfSUQiLCJyYWZJZFJlZiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXIiLCJpc1J1bm5pbmciLCJsaWtlQXJyYXkiLCJjb2hlcmVudEFycmF5c1RvQXJyYXlzRnVuY3Rpb24iLCJpbnB1dFZhbHVlIiwiY29uc3RydWN0b3IiLCJpdGVtIiwiZnJvbUVudHJpZXMiLCJjb2hlcmVudEFycmF5c1RvQXJyYXlzIiwic2ltcGxlVHJhbnNmb3JtQ29oZXJlbnRBcnJheVRvQXJyYXkiLCJpc05vbk51bGxhYmxlIiwiaW5kZXgiLCJ1bnNhZmVHZXQiLCJ1bndyYXBJdGVtIiwiYXJyIiwiZXZlcnkiLCJmaWx0ZXIiLCJwcmVkaWNhdGUiLCJFcnJvciIsInBvcCIsInNwbGljZSIsImNvbnRhaW5zIiwibGFzdEluZGV4IiwibGFzdEluZGV4WmVybyIsIm1heCIsImxhc3RFbGVtZW50IiwiaW5kZXhGcm9tIiwiaW5kZXhUbyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibmV4dEluZGV4IiwiZW5kSW5kZXgiLCJuZXh0IiwiZG9uZSIsInRhaWwiLCJjb3VudCIsImRlbGV0ZUNvdW50IiwiZmluZExhc3QiLCJmaWx0ZXJNYXAiLCJtYXBFeGlzdHMiLCJmaW5kSW5kZXgiLCJmaW5kSW5kZXhMYXN0Iiwic2VwYXJhdG9yIiwiU3RyaW5nIiwiaXNOdWxsYWJsZSIsInN0ciIsIm1hcHBpbmciLCJyZXBsYWNlIiwibWF0Y2giLCJmb3JtYXRQcmludGYiLCJwYWQiLCJzbmFrZVRvQ2FtZWwiLCJ0b1VwcGVyQ2FzZSIsIm5vcm1hbGl6ZVJlc291cmNlIiwidXBDYXNlRmlyc3RDaGFyIiwiY29udmVydE5ic3AiLCJjb252ZXJ0WnduYnNwIiwiYWRkU2VwYXJhdG9yVG9SaWdodCIsImxhc3QiLCJhZGRTZXBhcmF0b3JUb0xlZnQiLCJzcGxpdEFuZEZvcm1hdCIsInN0cmluZ1RvU3BsaXQiLCJzcGxpdEV1cm9wZWFuIiwic3BsaXRSZXN1bHQiLCJzcGxpdFJlZ2V4Iiwic3RyaW5nV2l0aE5ic3AiLCJ3b3JkIiwic3BsaXRDaGluZXNlIiwibGF0aW5JbmplY3Rpb25zIiwiYnJhY2tldHNBbmRRdW90ZXMiLCJwdW5jdHVhdGlvbk1hcmtzIiwibmVpZ2hib3JpbmdIaWVyb2dseXBocyIsIm1haW5SZWdleCIsIlJlZ0V4cCIsInNvdXJjZSIsInN0cmluZ3NUb1NwbGl0IiwiQ0hJTkVTRV9MQU5HVUFHRV9DT0RFUyIsInNwbGl0V29yZHMiLCJsYW5ndWFnZSIsIlIiLCJzdHJpbmdzIiwic2V0dGluZ3MiLCJMQU5HVUFHRV9DT0RFIiwidG9Mb3dlckNhc2UiLCJzdWJTdHJpbmciLCJSZWFjdERPTSIsIkFwcCIsIk1vZGVsUHJvdmlkZXIiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIlJld2FyZFN0YXR1cyIsIk1pc3Npb25TdGF0dXMiLCJvYnNlcnZlciIsImNoZWNrSXNDb21wbGV0ZWQiLCJ1c2VNb2RlbCIsIk9wZXJhdGlvblR5cGUiLCJNQVhfUkVXQVJEU19JTl9ST1ciLCJGSVJTVF9DQU1QQUlHTl9PUEVSQVRJT05TIiwiVEVYVFMiLCJwbV9hbm5vdW5jZSIsIm9sZFRvb2x0aXAiLCJtaXNzaW9uU3RhdHVzIiwib3BlcmF0aW9ucyIsImNvbXB1dGVzIiwiZ2V0T3BlcmF0aW9ucyIsInJld2FyZHMiLCJnZXRSZXdhcmRzIiwiaXNNaXNzaW9uQWN0aXZlIiwiQWN0aXZlIiwiaXNNaXNzaW9uQ29tcGxldGVkUGVyZmVjdCIsIkNvbXBsZXRlZFBlcmZlY3QiLCJpc0Rpc2FibGVkIiwiRGlzYWJsZWQiLCJmb290ZXJMYWJlbFRleHQiLCJjb21wbGV0ZSIsImNvbXBsZXRlZFBlcmZlY3QiLCJoZWFkZXIiLCJjb21wbGV0ZWQiLCJkaXNhYmxlZCIsImRpc2FibGVkSGVhZGVyIiwiZGlzYWJsZWRCb2R5Iiwic3VidGl0bGUiLCJiZyIsImNvbnRlbnQiLCJzdWJUaXRsZSIsInN1YnRpdGxlUGVyZmVjdCIsIm9wZXJhdGlvbnNXcmFwcGVyIiwib3BlcmF0aW9uIiwib3BlcmF0aW9uU3R5bGUiLCJpc0FjdGl2ZSIsIm9wZXJhdGlvbl9fbGFzdCIsImRvdCIsIm9wZXJhdGlvblRleHQiLCJvcGVyYXRpb25UZXh0X19uYW1lIiwidGl0bGUiLCJvcGVyYXRpb25UZXh0X19kb25lIiwib3BlcmF0aW9uVGV4dF9fZGl2aWRlciIsImRpdmlkZXIiLCJkaXZpZGVyX19vcGVyYXRpb25zIiwicmV3YXJkc1NlY3Rpb24iLCJyaWJib24iLCJzdWJUaXRsZV9fcmV3YXJkcyIsInJld2FyZFRpdGxlIiwicmV3YXJkc1dyYXBwZXIiLCJyZXdhcmQiLCJpc0xhc3RSZXdhcmQiLCJzdGF0dXMiLCJyZXdhcmRfX2xhc3RJblJvdyIsInJld2FyZEljb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpY29uIiwicmV3YXJkTmFtZSIsIkF2YWlsYWJsZSIsImxhYmVsSWNvbiIsInJld2FyZFRleHQiLCJyZXdhcmRDb2xsZWN0ZWQiLCJyZXdhcmRDb2xsZWN0ZWRCZyIsInJld2FyZENvbGxlY3RlZExhYmVsIiwicmV3YXJkQ29sbGVjdGVkTGFiZWxJY29uIiwicmV3YXJkQ29sbGVjdGVkTGFiZWxUZXh0IiwiY29sbGVjdFZlaGljbGUiLCJDb21wbGV0ZWQiLCJmb290ZXIiLCJmb290ZXJMYWJlbCIsImZvb3RlckxhYmVsSWNvbiIsImZvb3RlckJvdHRvbVdyYXBwZXIiLCJmb290ZXJCb3R0b21UZXh0IiwiRW1wdHkiLCJjb21wdXRlZEZuIl0sInNvdXJjZVJvb3QiOiIifQ==

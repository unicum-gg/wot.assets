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

        /***/ './src/components/Button/CButton.tsx':
            /*!*******************************************!*\
  !*** ./src/components/Button/CButton.tsx ***!
  \*******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ButtonSize: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.ButtonSize,
                    /* harmony export */ ButtonType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_4__.ButtonType,
                    /* harmony export */ CButton: () => /* binding */ CButton,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/sound */ './src/lib/sound.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _CButton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./CButton.css */ './src/components/Button/CButton.css',
                );
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./types */ './src/components/Button/types.ts',
                );

                const Button = ({
                    children,
                    size,
                    isFocused,
                    type,
                    disabled,
                    mixClass,
                    soundHover,
                    soundClick,
                    onMouseEnter,
                    onMouseMove,
                    onMouseDown,
                    onMouseUp,
                    onMouseLeave,
                    onClick,
                }) => {
                    const button = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

                    const _useState = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(isFocused),
                        buttonFocus = _useState[0],
                        setButtonFocus = _useState[1];

                    const _useState2 = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
                        isHighlightActive = _useState2[0],
                        setHighlightActive = _useState2[1];

                    const _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
                        isFirstHovered = _useState3[0],
                        setFirstHovered = _useState3[1];

                    const setFocusOnButton = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
                        if (disabled) {
                            return;
                        }

                        if (button.current) {
                            button.current.focus();
                            setButtonFocus(true);
                        }
                    }, [disabled]);
                    const handleMouseDownOutside = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (event) => {
                            if (buttonFocus && button.current !== null && !button.current.contains(event.target)) {
                                setButtonFocus(false);
                            }
                        },
                        [buttonFocus],
                    );
                    const handleClick = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (onClick) {
                                onClick(e);
                            }
                        },
                        [disabled, onClick],
                    );
                    const handleMouseEnter = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (soundHover !== null) {
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_1__.playSound)(soundHover);
                            }

                            if (onMouseEnter) {
                                onMouseEnter(e);
                            }

                            setFirstHovered(true);
                        },
                        [disabled, soundHover, onMouseEnter],
                    );
                    const handleMouseMove = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (onMouseMove) {
                                onMouseMove(e);
                            }
                        },
                        [onMouseMove],
                    );
                    const handleMouseUp = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (onMouseUp) {
                                onMouseUp(e);
                            }

                            setHighlightActive(false);
                        },
                        [disabled, onMouseUp],
                    );
                    const handleMouseDown = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (soundClick !== null) {
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_1__.playSound)(soundClick);
                            }

                            if (onMouseDown) {
                                onMouseDown(e);
                            }

                            if (isFocused) {
                                setFocusOnButton();
                            }

                            setHighlightActive(true);
                        },
                        [disabled, soundClick, onMouseDown, setFocusOnButton, isFocused],
                    );
                    const handleMouseLeave = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
                        (e) => {
                            if (disabled) {
                                return;
                            }

                            if (onMouseLeave) {
                                onMouseLeave(e);
                            }

                            setHighlightActive(false);
                        },
                        [disabled, onMouseLeave],
                    );
                    const classBase = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                        _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`base__${type}`],
                        {
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base__disabled]: disabled,
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`base__${size}`]]: size,
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base__focus]: buttonFocus,
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base__highlightActive]:
                                isHighlightActive,
                            [_CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base__firstHover]: isFirstHovered,
                        },
                        mixClass,
                    );
                    const classState = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].state,
                        _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].state__default,
                    );
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        document.addEventListener('mousedown', handleMouseDownOutside);
                        return () => {
                            document.removeEventListener('mousedown', handleMouseDownOutside);
                        };
                    }, [handleMouseDownOutside]);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        setButtonFocus(isFocused);
                    }, [isFocused]);
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                        'div',
                        {
                            ref: button,
                            className: classBase,
                            onMouseEnter: handleMouseEnter,
                            onMouseMove: handleMouseMove,
                            onMouseUp: handleMouseUp,
                            onMouseDown: handleMouseDown,
                            onMouseLeave: handleMouseLeave,
                            onClick: handleClick,
                        },
                        type !== _types__WEBPACK_IMPORTED_MODULE_4__.ButtonType.ghost &&
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                react__WEBPACK_IMPORTED_MODULE_2___default().Fragment,
                                null,
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('div', {
                                    className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].back,
                                }),
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('span', {
                                    className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].texture,
                                }),
                            ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'span',
                            {
                                className: classState,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('span', {
                                className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].stateDisabled,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('span', {
                                className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].stateHighlightHover,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('span', {
                                className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].stateHighlightActive,
                            }),
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'span',
                            {
                                className: _CButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].content,
                                lang: R.strings.settings.LANGUAGE_CODE(),
                            },
                            children,
                        ),
                    );
                };

                Button.defaultProps = {
                    type: _types__WEBPACK_IMPORTED_MODULE_4__.ButtonType.primary,
                    isFocused: false,
                    soundHover: 'highlight',
                    soundClick: 'play',
                };
                const CButton = (0, react__WEBPACK_IMPORTED_MODULE_2__.memo)(Button);

                /***/
            },

        /***/ './src/components/Button/types.ts':
            /*!****************************************!*\
  !*** ./src/components/Button/types.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ButtonSize: () => /* binding */ ButtonSize,
                    /* harmony export */ ButtonType: () => /* binding */ ButtonType,
                    /* harmony export */
                });
                let ButtonType;

                (function (ButtonType) {
                    ButtonType['main'] = 'main';
                    ButtonType['primary'] = 'primary';
                    ButtonType['primaryGreen'] = 'primaryGreen';
                    ButtonType['primaryRed'] = 'primaryRed';
                    ButtonType['secondary'] = 'secondary';
                    ButtonType['ghost'] = 'ghost';
                })(ButtonType || (ButtonType = {}));

                let ButtonSize;

                (function (ButtonSize) {
                    ButtonSize['extraSmall'] = 'extraSmall';
                    ButtonSize['small'] = 'small';
                    ButtonSize['medium'] = 'medium';
                })(ButtonSize || (ButtonSize = {}));

                /***/
            },

        /***/ './src/components/Currency/Currency.tsx':
            /*!**********************************************!*\
  !*** ./src/components/Currency/Currency.tsx ***!
  \**********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Currency: () => /* binding */ Currency,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./types */ './src/components/Currency/types.ts',
                );
                /* harmony import */ var components_FormatNumber_FormatNumber__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! components/FormatNumber/FormatNumber */ './src/components/FormatNumber/FormatNumber.tsx',
                    );
                /* harmony import */ var _Currency_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./Currency.css */ './src/components/Currency/Currency.css',
                );

                const CurrencyComponent = ({
                    isDiscount,
                    isInteractiveDiscount,
                    size,
                    type,
                    isEnough,
                    value,
                    discountValue,
                    showPlus,
                    stockBackgroundName = _types__WEBPACK_IMPORTED_MODULE_2__.StockBackgroundName.Red,
                }) => {
                    const valueClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].value,
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'][`value__${type}`],
                        !isEnough && _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].value__notEnough,
                    );
                    const iconClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].icon,
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'][`icon__${type}-${size}`],
                    );
                    const discountClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].stock,
                        discountValue && _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].stock__indent,
                        isInteractiveDiscount &&
                            _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].stock__interactive,
                    );
                    const plus = showPlus && value > 0 && '+';
                    const baseClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].base,
                        _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'][`base__${size}`],
                    );
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'span',
                        {
                            className: baseClasses,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'span',
                            {
                                className: valueClasses,
                            },
                            plus,
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                components_FormatNumber_FormatNumber__WEBPACK_IMPORTED_MODULE_3__.FormatNumber,
                                {
                                    value: value,
                                    format:
                                        type === _types__WEBPACK_IMPORTED_MODULE_2__.CurrencyType.gold
                                            ? 'gold'
                                            : 'integral',
                                },
                            ),
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('span', {
                            className: iconClasses,
                        }),
                        isDiscount &&
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                'span',
                                {
                                    className: discountClasses,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement('span', {
                                    className: _Currency_css__WEBPACK_IMPORTED_MODULE_4__['default'].stockBackground,
                                    style: {
                                        backgroundImage: `url(R.images.gui.maps.icons.library.${stockBackgroundName})`,
                                    },
                                }),
                                Boolean(discountValue) && discountValue,
                            ),
                    );
                };

                CurrencyComponent.defaultProps = {
                    isEnough: true,
                };
                const Currency = react__WEBPACK_IMPORTED_MODULE_1___default().memo(CurrencyComponent);

                /***/
            },

        /***/ './src/components/Currency/types.ts':
            /*!******************************************!*\
  !*** ./src/components/Currency/types.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ CurrencySize: () => /* binding */ CurrencySize,
                    /* harmony export */ CurrencyType: () => /* binding */ CurrencyType,
                    /* harmony export */ StockBackgroundName: () => /* binding */ StockBackgroundName,
                    /* harmony export */
                });
                let CurrencySize;

                (function (CurrencySize) {
                    CurrencySize['small'] = 'small';
                    CurrencySize['big'] = 'big';
                    CurrencySize['large'] = 'large';
                    CurrencySize['extraLarge'] = 'extraLarge';
                })(CurrencySize || (CurrencySize = {}));

                let CurrencyType;

                (function (CurrencyType) {
                    CurrencyType['credits'] = 'credits';
                    CurrencyType['gold'] = 'gold';
                    CurrencyType['crystal'] = 'crystal';
                    CurrencyType['xp'] = 'xp';
                    CurrencyType['freeXP'] = 'freeXP';
                    CurrencyType['equipCoin'] = 'equipCoin';
                })(CurrencyType || (CurrencyType = {}));

                let StockBackgroundName;

                (function (StockBackgroundName) {
                    StockBackgroundName['Red'] = 'RedActionBG';
                    StockBackgroundName['Blue'] = 'BlueActionBG';
                })(StockBackgroundName || (StockBackgroundName = {}));

                /***/
            },

        /***/ './src/components/FormatNumber/FormatNumber.tsx':
            /*!******************************************************!*\
  !*** ./src/components/FormatNumber/FormatNumber.tsx ***!
  \******************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ FormatNumber: () => /* binding */ FormatNumber,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/view-env-helper */ './src/lib/view-env-helper/index.ts',
                );

                class FormatNumber extends react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent {
                    render() {
                        let format;

                        switch (this.props.format) {
                            case 'gold':
                                format = lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__.NumberFormatType.GOLD;
                                break;

                            case 'integral':
                            default:
                                format = lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__.NumberFormatType.INTEGRAL;
                                break;
                        }

                        const numberFormat =
                            lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__.SystemLocale.getNumberFormat(
                                this.props.value,
                                format,
                            );

                        if (this.props.value !== undefined && numberFormat !== undefined) {
                            return numberFormat;
                        }

                        return null;
                    }
                }

                FormatNumber.defaultProps = {
                    format: 'integral',
                };

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

        /***/ './src/components/Rewards/constants.ts':
            /*!*********************************************!*\
  !*** ./src/components/Rewards/constants.ts ***!
  \*********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ BonusNames: () => /* binding */ BonusNames,
                    /* harmony export */ HighlightClasses: () => /* binding */ HighlightClasses,
                    /* harmony export */ ImageSize: () => /* binding */ ImageSize,
                    /* harmony export */ OverlayClasses: () => /* binding */ OverlayClasses,
                    /* harmony export */ RewardType: () => /* binding */ RewardType,
                    /* harmony export */ Specials: () => /* binding */ Specials,
                    /* harmony export */ ValueTypes: () => /* binding */ ValueTypes,
                    /* harmony export */
                });
                let RewardType; // TODO: looks like we have to do some refactoring for rewards in FE and GP sides

                (function (RewardType) {
                    RewardType['Items'] = 'items';
                    RewardType['Equipment'] = 'equipment';
                    RewardType['Xp'] = 'xp';
                    RewardType['XpFactor'] = 'xpFactor';
                    RewardType['Blueprints'] = 'blueprints';
                    RewardType['BlueprintsAny'] = 'blueprintsAny';
                    RewardType['Goodies'] = 'goodies';
                    RewardType['Berths'] = 'berths';
                    RewardType['Slots'] = 'slots';
                    RewardType['Tokens'] = 'tokens';
                    RewardType['CrewSkins'] = 'crewSkins';
                    RewardType['CrewBooks'] = 'crewBooks';
                    RewardType['Customizations'] = 'customizations';
                    RewardType['CreditsFactor'] = 'creditsFactor';
                    RewardType['Currency'] = 'currency';
                    RewardType['TankmenXp'] = 'tankmenXP';
                    RewardType['TankmenXpFactor'] = 'tankmenXPFactor';
                    RewardType['FreeXpFactor'] = 'freeXPFactor';
                    RewardType['BattleToken'] = 'battleToken';
                    RewardType['PremiumUniversal'] = 'premium_universal';
                    RewardType['Gold'] = 'gold';
                    RewardType['Credits'] = 'credits';
                    RewardType['Crystal'] = 'crystal';
                    RewardType['FreeXp'] = 'freeXP';
                    RewardType['Premium'] = 'premium';
                    RewardType['PremiumPlus'] = 'premium_plus';
                    RewardType['BattlePassPoints'] = 'battlePassPoints';
                    RewardType['BattlePassSelectToken'] = 'battlePassSelectToken';
                    RewardType['SelectableBonus'] = 'selectableBonus';
                    RewardType['StyleProgressToken'] = 'styleProgressToken';
                    RewardType['TmanToken'] = 'tmanToken';
                    RewardType['NaturalCover'] = 'naturalCover';
                    RewardType['BpCoin'] = 'bpcoin';
                    RewardType['BattlaPassFinalAchievement'] = 'dossier_achievement';
                    RewardType['BattleBadge'] = 'dossier_badge';
                    RewardType['NewYearAlbumsAccess'] = 'newYearAlbumsAccess';
                    RewardType['NewYearFillers'] = 'ny22Fillers';
                    RewardType['NewYearInvoice'] = 'newYearInvoice';
                    RewardType['NewYearToyFragments'] = 'ny22ToyFragments';
                    RewardType['NewYearSlot'] = 'newYearSlot';
                    RewardType['BonusX5'] = 'battle_bonus_x5';
                    RewardType['CrewBonusX3'] = 'crew_bonus_x3';
                    RewardType['Vehicles'] = 'vehicles';
                    RewardType['EpicSelectToken'] = 'epicSelectToken';
                    RewardType['CollectionItem'] = 'collectionItem';
                    RewardType['Comp7TokenWeeklyReward'] = 'comp7TokenWeeklyReward';
                    RewardType['Comp7TokenCouponReward'] = 'comp7TokenCouponReward';
                    RewardType['BattleBoosterGift'] = 'battleBooster_gift';
                    RewardType['CosmicLootboxSilver'] = 'lootBoxToken';
                    RewardType['CosmicLootboxCommon'] = 'cosmic_2024_2';
                    RewardType['Branch'] = 'branch';
                    RewardType['VehicleSelect'] = 'vehicleSelect';
                    RewardType['StyleProgress'] = 'styleProgress';
                    RewardType['ParagonsUnlocks'] = 'paragonsUnlocks';
                })(RewardType || (RewardType = {}));

                let BonusNames;

                (function (BonusNames) {
                    BonusNames['Gold'] = 'gold';
                    BonusNames['Credits'] = 'credits';
                    BonusNames['Crystal'] = 'crystal';
                    BonusNames['Premium'] = 'premium';
                    BonusNames['PremiumPlus'] = 'premium_plus';
                    BonusNames['Vehicles'] = 'vehicles';
                    BonusNames['Customizations'] = 'customizations';
                    BonusNames['Blueprints'] = 'blueprints';
                    BonusNames['BlueprintsAny'] = 'blueprintsAny';
                    BonusNames['BlueprintsFinal'] = 'finalBlueprints';
                    BonusNames['Goodies'] = 'goodies';
                    BonusNames['CrewSkins'] = 'crewSkins';
                    BonusNames['Xp'] = 'xp';
                    BonusNames['XpFactor'] = 'xpFactor';
                    BonusNames['FreeXp'] = 'freeXP';
                    BonusNames['FreeXPFactor'] = 'freeXPFactor';
                    BonusNames['TankmenXP'] = 'tankmenXP';
                    BonusNames['TankmenXPFactor'] = 'tankmenXPFactor';
                    BonusNames['DailyXPFactor'] = 'dailyXPFactor';
                    BonusNames['CreditsFactor'] = 'creditsFactor';
                    BonusNames['Items'] = 'items';
                    BonusNames['StrBonus'] = 'strBonus';
                    BonusNames['Groups'] = 'groups';
                    BonusNames['Berths'] = 'berths';
                    BonusNames['Slots'] = 'slots';
                    BonusNames['Meta'] = 'meta';
                    BonusNames['Tokens'] = 'tokens';
                    BonusNames['Dossier'] = 'dossier';
                    BonusNames['OneOf'] = 'oneof';
                    BonusNames['PremiumUniversal'] = 'premium_universal';
                    BonusNames['BadgesGroup'] = 'badgesGroup';
                    BonusNames['Entitlements'] = 'entitlements';
                    BonusNames['RankedDailyBattles'] = 'rankedDailyBattles';
                    BonusNames['RankedBonusBattles'] = 'rankedBonusBattles';
                    BonusNames['BattlePassPoints'] = 'battlePassPoints';
                    BonusNames['BattleBadge'] = 'dossier_badge';
                    BonusNames['BattleAchievement'] = 'dossier_achievement';
                })(BonusNames || (BonusNames = {}));

                let ImageSize;

                (function (ImageSize) {
                    ImageSize['Big'] = 'big';
                    ImageSize['Small'] = 'small';
                    ImageSize['Mini'] = 'mini';
                    ImageSize['S600x450'] = 's600x450';
                    ImageSize['S400x300'] = 's400x300';
                    ImageSize['S296x222'] = 's296x222';
                    ImageSize['S232x174'] = 's232x174';
                    ImageSize['S180x135'] = 's180x135';
                    ImageSize['S128x100'] = 's128x100';
                    ImageSize['S80x80'] = 's80x80';
                    ImageSize['S48x48'] = 's48x48';
                })(ImageSize || (ImageSize = {}));

                let ValueTypes;

                (function (ValueTypes) {
                    ValueTypes['MULTI'] = 'multi';
                    ValueTypes['CURRENCY'] = 'currency';
                    ValueTypes['PREMIUM_PLUS'] = 'premium_plus';
                    ValueTypes['NUMBER'] = 'number';
                    ValueTypes['STRING'] = 'string';
                })(ValueTypes || (ValueTypes = {}));

                let Specials;

                (function (Specials) {
                    Specials['BATTLE_BOOSTER'] = 'battleBooster';
                    Specials['BATTLE_BOOSTER_REPLACE'] = 'battleBoosterReplace';
                    Specials['BUILT_IN_EQUIPMENT'] = 'builtInEquipment';
                    Specials['EQUIPMENT_PLUS'] = 'equipmentPlus';
                    Specials['EQUIPMENT_TROPHY_BASIC'] = 'equipmentTrophyBasic';
                    Specials['EQUIPMENT_TROPHY_UPGRADED'] = 'equipmentTrophyUpgraded';
                    Specials['EQUIPMENT_MODERNIZED_UPGRADED_1'] = 'equipmentModernized_1';
                    Specials['EQUIPMENT_MODERNIZED_UPGRADED_2'] = 'equipmentModernized_2';
                    Specials['EQUIPMENT_MODERNIZED_UPGRADED_3'] = 'equipmentModernized_3';
                    Specials['PROGRESSION_STYLE_UPGRADED_1'] = 'progressionStyleUpgraded_1';
                    Specials['PROGRESSION_STYLE_UPGRADED_2'] = 'progressionStyleUpgraded_2';
                    Specials['PROGRESSION_STYLE_UPGRADED_3'] = 'progressionStyleUpgraded_3';
                    Specials['PROGRESSION_STYLE_UPGRADED_4'] = 'progressionStyleUpgraded_4';
                })(Specials || (Specials = {}));

                let HighlightClasses;

                (function (HighlightClasses) {
                    HighlightClasses['BATTLE_BOOSTER'] = 'battleBooster';
                })(HighlightClasses || (HighlightClasses = {}));

                let OverlayClasses;

                (function (OverlayClasses) {
                    OverlayClasses['BATTLE_BOOSTER'] = 'battleBooster';
                    OverlayClasses['BATTLE_BOOSTER_REPLACE'] = 'battleBoosterReplace';
                    OverlayClasses['BUILT_IN_EQUIPMENT'] = 'builtInEquipment';
                    OverlayClasses['EQUIPMENT_PLUS'] = 'equipmentPlus';
                    OverlayClasses['EQUIPMENT_TROPHY_BASIC'] = 'equipmentTrophyBasic';
                    OverlayClasses['EQUIPMENT_TROPHY_UPGRADED'] = 'equipmentTrophyUpgraded';
                    OverlayClasses['EQUIPMENT_MODERNIZED_UPGRADED_1'] = 'equipmentModernized_1';
                    OverlayClasses['EQUIPMENT_MODERNIZED_UPGRADED_2'] = 'equipmentModernized_2';
                    OverlayClasses['EQUIPMENT_MODERNIZED_UPGRADED_3'] = 'equipmentModernized_3';
                    OverlayClasses['PROGRESSION_STYLE_UPGRADED_1'] = 'progressionStyleUpgraded_1';
                    OverlayClasses['PROGRESSION_STYLE_UPGRADED_2'] = 'progressionStyleUpgraded_2';
                    OverlayClasses['PROGRESSION_STYLE_UPGRADED_3'] = 'progressionStyleUpgraded_3';
                    OverlayClasses['PROGRESSION_STYLE_UPGRADED_4'] = 'progressionStyleUpgraded_4';
                })(OverlayClasses || (OverlayClasses = {}));

                /***/
            },

        /***/ './src/components/TextButton/TextButton.tsx':
            /*!**************************************************!*\
  !*** ./src/components/TextButton/TextButton.tsx ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ TextButton: () => /* binding */ TextButton,
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
                /* harmony import */ var lib_sound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/sound */ './src/lib/sound.js',
                );
                /* harmony import */ var _TextButton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./TextButton.css */ './src/components/TextButton/TextButton.css',
                );
                const _excluded = [
                    'caption',
                    'onClick',
                    'goto',
                    'side',
                    'type',
                    'classNames',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onMouseUp',
                    'soundClick',
                    'soundHover',
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

                /* eslint-disable react/no-unused-state */
                // waiting for focus implement

                /**
                 * @link https://confluence.lesta.group/pages/viewpage.action?pageId=2040066804
                 * what back_shine is used when button doesn't have any text?
                 * text shadow not enough
                 */
                class TextButton extends react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent {
                    constructor(...args) {
                        super(...args);
                        this.state = {
                            hover: false,
                            click: false,
                        };

                        this._onMouseEnter = (handler) => (event) => {
                            if (handler) {
                                handler(event);
                            }

                            this.setState({
                                hover: true,
                            });

                            if (this.props.soundHover) {
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_2__.playSound)(this.props.soundHover);
                            }
                        };

                        this._onMouseLeave = (handler) => (event) => {
                            if (handler) {
                                handler(event);
                            }

                            this.setState({
                                hover: false,
                                click: false,
                            });
                        };

                        this._onMouseDown = (handler) => (event) => {
                            if (handler) {
                                handler(event);
                            }

                            this.setState({
                                click: true,
                            });

                            if (this.props.soundClick) {
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_2__.playSound)(this.props.soundClick);
                            }
                        };

                        this._onMouseUp = (handler) => (event) => {
                            if (handler) {
                                handler(event);
                            }

                            this.setState({
                                click: false,
                            });
                        };

                        this.handleFocus = () =>
                            this.setState({
                                focus: true,
                            });

                        this.handleBlur = () =>
                            this.setState({
                                focus: false,
                            });
                    }

                    render() {
                        const _this$props = this.props,
                            caption = _this$props.caption,
                            onClick = _this$props.onClick,
                            goto = _this$props.goto,
                            side = _this$props.side,
                            type = _this$props.type,
                            classes = _this$props.classNames,
                            onMouseEnter = _this$props.onMouseEnter,
                            onMouseLeave = _this$props.onMouseLeave,
                            onMouseDown = _this$props.onMouseDown,
                            onMouseUp = _this$props.onMouseUp,
                            soundClick = _this$props.soundClick,
                            soundHover = _this$props.soundHover,
                            rest = _objectWithoutPropertiesLoose(_this$props, _excluded);

                        const classBase = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`base__${type}`],
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`base__${side}`],
                            classes == null ? void 0 : classes.base,
                        );
                        const classIcon = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].icon,
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`icon__${type}`],
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`icon__${side}`],
                            classes == null ? void 0 : classes.icon,
                        );
                        const classGlow = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].glow,
                            classes == null ? void 0 : classes.glow,
                        );
                        const classCaption = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].caption,
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`caption__${type}`],
                            classes == null ? void 0 : classes.caption,
                        );
                        const classGoto = classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                            _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].goto,
                            classes == null ? void 0 : classes.goto,
                        );
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                            'div',
                            _extends(
                                {
                                    className: classBase,
                                    onMouseEnter: this._onMouseEnter(onMouseEnter),
                                    onMouseLeave: this._onMouseLeave(onMouseLeave),
                                    onMouseDown: this._onMouseDown(onMouseDown),
                                    onMouseUp: this._onMouseUp(onMouseUp),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: onClick,
                                },
                                rest,
                            ),
                            type !== 'info' &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
                                    className: _TextButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].shine,
                                }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                'div',
                                {
                                    className: classIcon,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', {
                                    className: classGlow,
                                }),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                'div',
                                {
                                    className: classCaption,
                                },
                                caption,
                            ),
                            goto &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                                    'div',
                                    {
                                        className: classGoto,
                                    },
                                    goto,
                                ),
                        );
                    }
                }

                TextButton.defaultProps = {
                    side: 'left',
                    type: 'back',
                    soundHover: 'highlight',
                    soundClick: 'play',
                };

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

        /***/ './src/components/Tooltip/Tooltip.tsx':
            /*!********************************************!*\
  !*** ./src/components/Tooltip/Tooltip.tsx ***!
  \********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Tooltip: () => /* binding */ Tooltip,
                    /* harmony export */
                });
                /* harmony import */ var lib_get_from_callstack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/get-from-callstack */ './src/lib/get-from-callstack.ts',
                );
                /* harmony import */ var lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/view-env-helper */ './src/lib/view-env-helper/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                const _excluded = [
                    'children',
                    'contentId',
                    'args',
                    'onMouseEnter',
                    'onMouseLeave',
                    'onMouseDown',
                    'onClick',
                    'ignoreShowDelay',
                    'ignoreMouseClick',
                    'decoratorId',
                    'isEnabled',
                    'targetId',
                    'onShow',
                    'onHide',
                ];

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

                const SHOW_DELAY_MIN = 100;
                const SHOW_DELAY_DEFAULT = 400;

                function getViewEventArguments(args) {
                    return Object.entries(args || {}).map(([key, value]) => {
                        const out = {
                            __Type: 'GFValueProxy',
                            name: key,
                        };

                        switch (typeof value) {
                            case 'number':
                                out.number = value;
                                break;

                            case 'boolean':
                                out.bool = value;
                                break;

                            case 'undefined':
                                break;

                            default:
                                out.string = value.toString();
                        }

                        return out;
                    });
                }

                const handleViewEvent = (contentId, decoratorId, options = {}, targetID = 0) => {
                    viewEnv.handleViewEvent(
                        Object.assign(
                            {
                                __Type: 'GFViewEventProxy',
                                type: lib_view_env_helper__WEBPACK_IMPORTED_MODULE_1__.ViewEventType.TOOLTIP,
                                contentID: contentId,
                                decoratorID: decoratorId,
                                targetID: targetID,
                            },
                            options,
                        ),
                    );
                };

                const Tooltip = (_ref) => {
                    let children = _ref.children,
                        contentId = _ref.contentId,
                        args = _ref.args,
                        onMouseEnter = _ref.onMouseEnter,
                        onMouseLeave = _ref.onMouseLeave,
                        onMouseDown = _ref.onMouseDown,
                        onClick = _ref.onClick,
                        _ref$ignoreShowDelay = _ref.ignoreShowDelay,
                        ignoreShowDelay = _ref$ignoreShowDelay === void 0 ? false : _ref$ignoreShowDelay,
                        _ref$ignoreMouseClick = _ref.ignoreMouseClick,
                        ignoreMouseClick = _ref$ignoreMouseClick === void 0 ? false : _ref$ignoreMouseClick,
                        _ref$decoratorId = _ref.decoratorId,
                        decoratorId = _ref$decoratorId === void 0 ? 0 : _ref$decoratorId,
                        _ref$isEnabled = _ref.isEnabled,
                        isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled,
                        _ref$targetId = _ref.targetId,
                        targetId = _ref$targetId === void 0 ? 0 : _ref$targetId,
                        onShow = _ref.onShow,
                        onHide = _ref.onHide,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const ref = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)({
                        timeoutId: 0,
                        isVisible: false,
                        prevTarget: null,
                        hideTimerId: null,
                    });
                    const resId = (0, react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
                        () =>
                            targetId ||
                            (0, lib_get_from_callstack__WEBPACK_IMPORTED_MODULE_0__.getFromCallStack)().resId,
                        [targetId],
                    );
                    const show = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
                        // we handle show() only if tooltip is HIDDEN now OR timeout for show has already RESET
                        if (!ref.current.isVisible || !ref.current.timeoutId) {
                            handleViewEvent(
                                contentId,
                                decoratorId,
                                {
                                    isMouseEvent: true,
                                    on: true,
                                    arguments: getViewEventArguments(args),
                                },
                                resId,
                            );
                            onShow && onShow();
                            ref.current.isVisible = true;
                        }
                    }, [contentId, decoratorId, args, resId, onShow]);
                    const hide = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
                        // we handle hide() only if tooltip is VISIBLE now OR timeout for show has already SET
                        if (ref.current.isVisible || ref.current.timeoutId) {
                            const timer = ref.current.timeoutId;

                            if (timer > 0) {
                                clearTimeout(timer);
                                ref.current.timeoutId = 0;
                            }

                            handleViewEvent(
                                contentId,
                                decoratorId,
                                {
                                    on: false,
                                },
                                resId,
                            );

                            if (ref.current.isVisible && onHide) {
                                onHide();
                            }

                            ref.current.isVisible = false;
                        }
                    }, [contentId, decoratorId, resId, onHide]);
                    const onScroll = (0, react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e) => {
                        // we handle scroll only if tooltip is VISIBLE
                        if (!ref.current.isVisible) {
                            return;
                        }

                        ref.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY);
                        ref.current.hideTimerId = window.setTimeout(() => {
                            const target = document.elementFromPoint(e.clientX, e.clientY);

                            if (target && !target.isSameNode(ref.current.prevTarget)) {
                                hide();
                            }
                        }, 200); // eslint-disable-next-line
                    }, []);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        const hideTimer = ref.current.hideTimerId;
                        document.addEventListener('wheel', onScroll, {
                            capture: true,
                        });
                        return () => {
                            document.removeEventListener('wheel', onScroll, {
                                capture: true,
                            });
                            hideTimer && window.clearTimeout(hideTimer);
                        }; // eslint-disable-next-line
                    }, []);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        if (isEnabled === false) {
                            hide();
                        }
                    }, [isEnabled, hide]);
                    (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
                        window.addEventListener('mouseleave', hide);
                        return () => {
                            window.removeEventListener('mouseleave', hide);
                            hide();
                        };
                    }, [hide]);

                    const handleMouseEnter = (childEvent) => (event) => {
                        // window used here for correct ReturnType: number
                        if (event.clientX === window.innerWidth && event.clientY === window.innerHeight) {
                            // TODO: we need this hack to fix https://jira-archive.lesta.group/browse/WOTD-158427 issue.
                            //  This check can be removed when mouseEnter event that fired on resize will be fixed at GF integration side.
                            //  Probably we can check it after https://jira-archive.lesta.group/browse/WOTD-154564 bug fix,
                            //  when view border events resolving will work properly.
                            return;
                        }

                        ref.current.timeoutId = window.setTimeout(
                            show,
                            ignoreShowDelay ? SHOW_DELAY_MIN : SHOW_DELAY_DEFAULT,
                        );
                        onMouseEnter && onMouseEnter(event);
                        childEvent && childEvent(event);
                    };

                    const handleMouseLeave = (childEvent) => (event) => {
                        hide();
                        onMouseLeave == null ? void 0 : onMouseLeave(event);
                        childEvent == null ? void 0 : childEvent(event);
                    };

                    const handleClick = (childEvent) => (event) => {
                        if (ignoreMouseClick === false) {
                            hide();
                        }

                        onClick == null ? void 0 : onClick(event);
                        childEvent == null ? void 0 : childEvent(event);
                    };

                    const handleMouseDown = (childEvent) => (event) => {
                        if (ignoreMouseClick === false) {
                            hide();
                        }

                        onMouseDown == null ? void 0 : onMouseDown(event);
                        childEvent == null ? void 0 : childEvent(event);
                    };

                    return !isEnabled
                        ? children
                        : (0, react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(
                              children,
                              Object.assign(
                                  {
                                      onMouseEnter: handleMouseEnter(children.props.onMouseEnter),
                                      onMouseLeave: handleMouseLeave(children.props.onMouseLeave),
                                      onClick: handleClick(children.props.onClick),
                                      onMouseDown: handleMouseDown(children.props.onMouseDown),
                                  },
                                  rest,
                              ),
                          );
                };

                /***/
            },

        /***/ './src/global-styles/mixins/mediaCss.js':
            /*!**********************************************!*\
  !*** ./src/global-styles/mixins/mediaCss.js ***!
  \**********************************************/
            /***/ (module) => {
                const MEDIA_CSS = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
                module.exports = MEDIA_CSS;

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

        /***/ './src/lib/get-from-callstack.ts':
            /*!***************************************!*\
  !*** ./src/lib/get-from-callstack.ts ***!
  \***************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ getFromCallStack: () => /* binding */ getFromCallStack,
                    /* harmony export */
                });
                const getFromCallStack = (line = 1) => {
                    const stack = new Error().stack;
                    let resId = R.invalid('resId');
                    let caller;

                    if (stack) {
                        caller = stack.split('\n')[line].split('.js')[0].split('/').pop() || '';

                        if (window.__feature && window.__feature !== caller) {
                            if (window.subViews[caller]) {
                                resId = window.subViews[caller].id;
                            }
                        }
                    }

                    return {
                        caller,
                        stack,
                        resId,
                    };
                };

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

        /***/ './src/lib/hooks/useKeydownListener.ts':
            /*!*********************************************!*\
  !*** ./src/lib/hooks/useKeydownListener.ts ***!
  \*********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useCallbackOnEsc: () => /* binding */ useCallbackOnEsc,
                    /* harmony export */ useCloseOnEsc: () => /* binding */ useCloseOnEsc,
                    /* harmony export */ useCloseOnKeyPress: () => /* binding */ useCloseOnKeyPress,
                    /* harmony export */ useKeydownListener: () => /* binding */ useKeydownListener,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var lib_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/keycodes */ './src/lib/keycodes.ts',
                );
                /* harmony import */ var lib_view_env_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/view-env-helper */ './src/lib/view-env-helper/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

                const defaultCallback = (event) => {
                    console.error(event.type + ': useKeydownListener hook :: Callback is not defined');
                };

                function useKeydownListener(
                    key = lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.NONE,
                    listener = defaultCallback,
                    preventPropagation = false,
                ) {
                    (0, react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
                        if (key === lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.NONE) {
                            return;
                        }

                        function handleKeyPress(event) {
                            if (event.keyCode === key) {
                                if (lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.isEventHandled()) {
                                    return;
                                }

                                lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.setEventHandled();
                                listener(event);

                                if (preventPropagation) {
                                    event.stopPropagation();
                                }
                            }
                        }

                        window.addEventListener('keydown', handleKeyPress, preventPropagation);
                        return () => {
                            window.removeEventListener('keydown', handleKeyPress, preventPropagation);
                        };
                    }, [listener, key, preventPropagation]);
                }
                function useCloseOnKeyPress(key = lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.ESCAPE) {
                    useKeydownListener(key, lib_view_env_helper__WEBPACK_IMPORTED_MODULE_2__.sendCloseEvent, true);
                }
                function useCallbackOnEsc(callback) {
                    useKeydownListener(lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.ESCAPE, callback);
                }
                function useCloseOnEsc() {
                    useCloseOnKeyPress(lib_keycodes__WEBPACK_IMPORTED_MODULE_1__.KEY_CODES.ESCAPE);
                }

                /***/
            },

        /***/ './src/lib/hooks/useLayoutReady.ts':
            /*!*****************************************!*\
  !*** ./src/lib/hooks/useLayoutReady.ts ***!
  \*****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useLayoutReady: () => /* binding */ useLayoutReady,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                // eslint-disable-next-line

                const useLayoutReady = (callback, deps) => {
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        let timeoutId = null;
                        timeoutId = requestAnimationFrame(() => {
                            timeoutId = requestAnimationFrame(() => {
                                timeoutId = null;
                                callback();
                            });
                        });
                        return () => {
                            if (timeoutId !== null) {
                                cancelAnimationFrame(timeoutId);
                            }
                        }; // eslint-disable-next-line
                    }, deps);
                };

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

        /***/ './src/lib/hooks/useScaleState.ts':
            /*!****************************************!*\
  !*** ./src/lib/hooks/useScaleState.ts ***!
  \****************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ useScaleState: () => /* binding */ useScaleState,
                    /* harmony export */
                });
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../env */ './src/lib/env/index.ts',
                );

                const useScaleState = () => {
                    const _useState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(
                            _env__WEBPACK_IMPORTED_MODULE_1__.env.view.getScale(),
                        ),
                        scale = _useState[0],
                        setScale = _useState[1];

                    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                        const handleResize = () => {
                            setScale(_env__WEBPACK_IMPORTED_MODULE_1__.env.view.getScale());
                        };

                        window.addEventListener('resize', handleResize);
                        return () => {
                            window.removeEventListener('resize', handleResize);
                        };
                    }, []);
                    return scale;
                };

                /***/
            },

        /***/ './src/lib/keycodes.ts':
            /*!*****************************!*\
  !*** ./src/lib/keycodes.ts ***!
  \*****************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ KEY_CODES: () => /* binding */ KEY_CODES,
                    /* harmony export */ KEY_MODIFIERS: () => /* binding */ KEY_MODIFIERS,
                    /* harmony export */
                });
                let KEY_CODES;

                (function (KEY_CODES) {
                    KEY_CODES[(KEY_CODES['NONE'] = -1)] = 'NONE';
                    KEY_CODES[(KEY_CODES['ALT'] = 165)] = 'ALT';
                    KEY_CODES[(KEY_CODES['ENTER'] = 13)] = 'ENTER';
                    KEY_CODES[(KEY_CODES['ESCAPE'] = 27)] = 'ESCAPE';
                    KEY_CODES[(KEY_CODES['SPACE'] = 32)] = 'SPACE';
                    KEY_CODES[(KEY_CODES['END'] = 35)] = 'END';
                    KEY_CODES[(KEY_CODES['HOME'] = 36)] = 'HOME';
                    KEY_CODES[(KEY_CODES['ARROW_LEFT'] = 37)] = 'ARROW_LEFT';
                    KEY_CODES[(KEY_CODES['ARROW_UP'] = 38)] = 'ARROW_UP';
                    KEY_CODES[(KEY_CODES['ARROW_RIGHT'] = 39)] = 'ARROW_RIGHT';
                    KEY_CODES[(KEY_CODES['ARROW_DOWN'] = 40)] = 'ARROW_DOWN';
                    KEY_CODES[(KEY_CODES['NUM_PLUS'] = 107)] = 'NUM_PLUS';
                    KEY_CODES[(KEY_CODES['NUM_MINUS'] = 109)] = 'NUM_MINUS';
                    KEY_CODES[(KEY_CODES['PLUS'] = 187)] = 'PLUS';
                    KEY_CODES[(KEY_CODES['MINUS'] = 189)] = 'MINUS';
                    KEY_CODES[(KEY_CODES['PAGE_UP'] = 33)] = 'PAGE_UP';
                    KEY_CODES[(KEY_CODES['PAGE_DOWN'] = 34)] = 'PAGE_DOWN';
                    KEY_CODES[(KEY_CODES['BACKSPACE'] = 8)] = 'BACKSPACE';
                    KEY_CODES[(KEY_CODES['DELETE'] = 46)] = 'DELETE';
                    KEY_CODES[(KEY_CODES['TAB'] = 9)] = 'TAB';
                    KEY_CODES[(KEY_CODES['KEY_N'] = 78)] = 'KEY_N';
                    KEY_CODES[(KEY_CODES['KEY_1'] = 49)] = 'KEY_1';
                    KEY_CODES[(KEY_CODES['KEY_2'] = 50)] = 'KEY_2';
                    KEY_CODES[(KEY_CODES['KEY_3'] = 51)] = 'KEY_3';
                    KEY_CODES[(KEY_CODES['KEY_4'] = 52)] = 'KEY_4';
                    KEY_CODES[(KEY_CODES['KEY_5'] = 53)] = 'KEY_5';
                    KEY_CODES[(KEY_CODES['KEY_6'] = 54)] = 'KEY_6';
                    KEY_CODES[(KEY_CODES['KEY_7'] = 55)] = 'KEY_7';
                    KEY_CODES[(KEY_CODES['KEY_8'] = 56)] = 'KEY_8';
                    KEY_CODES[(KEY_CODES['KEY_9'] = 57)] = 'KEY_9';
                    KEY_CODES[(KEY_CODES['CAPS_LOCK'] = 20)] = 'CAPS_LOCK';
                    KEY_CODES[(KEY_CODES['INSERT'] = 45)] = 'INSERT';
                    KEY_CODES[(KEY_CODES['F1'] = 112)] = 'F1';
                    KEY_CODES[(KEY_CODES['F2'] = 113)] = 'F2';
                    KEY_CODES[(KEY_CODES['F3'] = 114)] = 'F3';
                    KEY_CODES[(KEY_CODES['F4'] = 115)] = 'F4';
                    KEY_CODES[(KEY_CODES['F5'] = 116)] = 'F5';
                    KEY_CODES[(KEY_CODES['F6'] = 117)] = 'F6';
                    KEY_CODES[(KEY_CODES['F7'] = 118)] = 'F7';
                    KEY_CODES[(KEY_CODES['F8'] = 119)] = 'F8';
                    KEY_CODES[(KEY_CODES['F9'] = 120)] = 'F9';
                    KEY_CODES[(KEY_CODES['F10'] = 121)] = 'F10';
                    KEY_CODES[(KEY_CODES['F11'] = 122)] = 'F11';
                    KEY_CODES[(KEY_CODES['F12'] = 123)] = 'F12';
                    KEY_CODES[(KEY_CODES['SELECT'] = 93)] = 'SELECT';
                    KEY_CODES[(KEY_CODES['NUMPAD_0'] = 96)] = 'NUMPAD_0';
                    KEY_CODES[(KEY_CODES['NUMPAD_1'] = 97)] = 'NUMPAD_1';
                    KEY_CODES[(KEY_CODES['NUMPAD_2'] = 98)] = 'NUMPAD_2';
                    KEY_CODES[(KEY_CODES['NUMPAD_3'] = 99)] = 'NUMPAD_3';
                    KEY_CODES[(KEY_CODES['NUMPAD_4'] = 100)] = 'NUMPAD_4';
                    KEY_CODES[(KEY_CODES['NUMPAD_5'] = 101)] = 'NUMPAD_5';
                    KEY_CODES[(KEY_CODES['NUMPAD_6'] = 102)] = 'NUMPAD_6';
                    KEY_CODES[(KEY_CODES['NUMPAD_7'] = 103)] = 'NUMPAD_7';
                    KEY_CODES[(KEY_CODES['NUMPAD_8'] = 104)] = 'NUMPAD_8';
                    KEY_CODES[(KEY_CODES['NUMPAD_9'] = 105)] = 'NUMPAD_9';
                    KEY_CODES[(KEY_CODES['NUM_DECIMAL'] = 110)] = 'NUM_DECIMAL';
                    KEY_CODES[(KEY_CODES['STAR'] = 106)] = 'STAR';
                    KEY_CODES[(KEY_CODES['NUM_SLASH'] = 111)] = 'NUM_SLASH';
                    KEY_CODES[(KEY_CODES['FORWARD_SLASH'] = 191)] = 'FORWARD_SLASH';
                    KEY_CODES[(KEY_CODES['COMMA'] = 188)] = 'COMMA';
                    KEY_CODES[(KEY_CODES['DASH'] = 189)] = 'DASH';
                    KEY_CODES[(KEY_CODES['PERIOD'] = 190)] = 'PERIOD';
                })(KEY_CODES || (KEY_CODES = {}));

                let KEY_MODIFIERS;

                (function (KEY_MODIFIERS) {
                    KEY_MODIFIERS['ALT'] = 'Alt';
                    KEY_MODIFIERS['ALT_GRAPH'] = 'AltGraph';
                    KEY_MODIFIERS['CAPS_LOCK'] = 'CapsLock';
                    KEY_MODIFIERS['CONTROL'] = 'Control';
                    KEY_MODIFIERS['FN'] = 'Fn';
                    KEY_MODIFIERS['FN_LOCK'] = 'FnLock';
                    KEY_MODIFIERS['META'] = 'Meta';
                    KEY_MODIFIERS['NUM_LOCK'] = 'NumLock';
                    KEY_MODIFIERS['SCROLL_LOCK'] = 'ScrollLock';
                    KEY_MODIFIERS['SHIFT'] = 'Shift';
                    KEY_MODIFIERS['SYMBOL'] = 'Symbol';
                    KEY_MODIFIERS['SYMBOL_LOCK'] = 'SymbolLock';
                })(KEY_MODIFIERS || (KEY_MODIFIERS = {}));

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
                    /* harmony export */ likeArray: () =>
                        /* reexport module object */ _likeArray__WEBPACK_IMPORTED_MODULE_0__,
                    /* harmony export */
                });
                /* harmony import */ var _likeArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./likeArray */ './src/lib/likeArray/likeArray.ts',
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

        /***/ './src/lib/mouse-selection.js':
            /*!************************************!*\
  !*** ./src/lib/mouse-selection.js ***!
  \************************************/
            /***/ () => {
                // Mouse drag selection for input fields
                (function () {
                    // State variables
                    let focusedSelectableElement;
                    let selectionBounds;
                    let startIndex = -1;
                    document.addEventListener('mousedown', (event) => {
                        // Deselect any generic text
                        document.getSelection().empty(); // Get the selection target on mousedown

                        if (event.target.select && startIndex === -1) {
                            focusedSelectableElement = event.target;
                            selectionBounds = focusedSelectableElement.getBoundingClientRect();
                            focusedSelectableElement.setSelectionRange(0, 0);
                        }
                    });
                    document.addEventListener('mousemove', (event) => {
                        // Get the selection start index on mousemove as it is not available on mousedown
                        if (startIndex === -1 && event.target.select && event.target === focusedSelectableElement) {
                            startIndex = focusedSelectableElement.selectionStart;
                        } // Update the selection in real time

                        if (startIndex > -1) {
                            // Clamp mouse position to element bounds
                            const x = Math.min(Math.max(event.x, selectionBounds.left), selectionBounds.right);
                            const y = Math.min(Math.max(event.y, selectionBounds.top), selectionBounds.bottom); // Get selection index from mouse position
                            // Send a 'mousedown' event to move the caret at current mouse coordinates

                            const evObj = document.createEvent('MouseEvent');
                            evObj.initMouseEvent(
                                'mousedown',
                                true,
                                true,
                                null,
                                1,
                                x,
                                y,
                                x,
                                y,
                                false,
                                false,
                                false,
                                false,
                                0,
                                null,
                            );
                            focusedSelectableElement.dispatchEvent(evObj); // Get the position of the caret

                            const selectionIndex = focusedSelectableElement.selectionEnd; // Make bidirectional selection

                            if (selectionIndex > startIndex) {
                                focusedSelectableElement.setSelectionRange(startIndex, selectionIndex, 'forward');
                            } else {
                                focusedSelectableElement.setSelectionRange(selectionIndex, startIndex, 'backward');
                            }
                        }
                    });
                    document.addEventListener('mouseup', () => {
                        // Reset states
                        focusedSelectableElement = null;
                        startIndex = -1;
                    });
                    let element;
                    let content;
                    let indexCursorPosition;
                    let indexSelectionStart;
                    let indexSelectionEnd; // Double click selection text

                    document.addEventListener('dblclick', (event) => {
                        if (!event.target.select) {
                            return;
                        }

                        document.getSelection().empty();
                        element = event.target;
                        content = event.target.value;
                        indexCursorPosition = element.selectionStart;
                        indexSelectionStart =
                            content.lastIndexOf(' ', indexCursorPosition) !== -1
                                ? content.lastIndexOf(' ', indexCursorPosition) + 1
                                : 0;
                        indexSelectionEnd =
                            content.indexOf(' ', indexCursorPosition) !== -1
                                ? content.indexOf(' ', indexCursorPosition)
                                : content.length;
                        element.setSelectionRange(indexSelectionStart, indexSelectionEnd, 'forward');
                    });
                })(); // Mouse drag selection for generic text

                (function () {
                    // State variables
                    let anchorCaretPosition = null;
                    document.addEventListener('mousedown', (event) => {
                        // Reset any current selection
                        document.getSelection().empty(); // Get the anchor node and offset

                        if (event.button === 0 && !event.target.select && !anchorCaretPosition) {
                            anchorCaretPosition = document.caretPositionFromPoint(event.x, event.y);
                        }
                    });
                    document.addEventListener('mousemove', (event) => {
                        // Get the focus node and offset and make a selection
                        if (event.button === 0 && !event.target.select && anchorCaretPosition) {
                            const focusCaretPosition = document.caretPositionFromPoint(event.x, event.y);

                            if (!focusCaretPosition.offsetNode || !anchorCaretPosition.offsetNode) {
                                return;
                            }

                            const selection = document.getSelection();
                            selection.setBaseAndExtent(
                                anchorCaretPosition.offsetNode,
                                anchorCaretPosition.offset,
                                focusCaretPosition.offsetNode,
                                focusCaretPosition.offset,
                            );
                        }
                    });
                    document.addEventListener('mouseup', () => {
                        // Reset state
                        anchorCaretPosition = null;
                    });
                })();

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

        /***/ './src/lib/sound.js':
            /*!**************************!*\
  !*** ./src/lib/sound.js ***!
  \**************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Sound: () => /* binding */ Sound,
                    /* harmony export */ playSound: () => /* binding */ playSound,
                    /* harmony export */
                });
                function playSound(soundName) {
                    engine.call('PlaySound', soundName);
                }
                const Sound = {
                    playHighlight() {
                        playSound('highlight');
                    },

                    playClick() {
                        playSound('play');
                    },

                    playYes() {
                        playSound('yes1');
                    },
                };

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

        /***/ './src/lib/view-env-helper/ClickOutsideManager.ts':
            /*!********************************************************!*\
  !*** ./src/lib/view-env-helper/ClickOutsideManager.ts ***!
  \********************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                class ClickOutsideManager {
                    constructor() {
                        this.entries = [];
                        this._listenMouse = false;

                        this.onMouseDown = (event) => {
                            this.entries.forEach(({ container, callback }) => {
                                let target = event.target;

                                do {
                                    if (target === container) {
                                        // this is a click in inner area or close button. need to check close button too,
                                        // because mousedown
                                        // its parent is not popover content block, so popover closes incorrectly
                                        // do nothing, just return.
                                        return;
                                    } // go up the DOM

                                    target = target.parentNode;
                                } while (target); // this is a click outside.

                                callback();
                            });
                        };
                    }

                    static get instance() {
                        if (!ClickOutsideManager.__instance) {
                            ClickOutsideManager.__instance = new ClickOutsideManager();
                        }

                        return ClickOutsideManager.__instance;
                    }

                    register(container, callback) {
                        this.addMouseListener();
                        this.entries.push({
                            container,
                            callback,
                        });
                    }

                    unregister(container, callback) {
                        const targetContainer = container;
                        const targetCallback = callback;
                        this.entries = this.entries.filter(({ container, callback }) => {
                            return container !== targetContainer || callback !== targetCallback;
                        });
                        this.removeMouseListener();
                    }

                    addMouseListener() {
                        if (!this._listenMouse) {
                            document.addEventListener('mousedown', this.onMouseDown);
                            this._listenMouse = true;
                        }
                    }

                    removeMouseListener() {
                        if (this._listenMouse && this.entries.length === 0) {
                            document.removeEventListener('mousedown', this.onMouseDown);
                            this._listenMouse = false;
                        }
                    }
                }

                ClickOutsideManager.__instance = void 0;
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ClickOutsideManager;

                /***/
            },

        /***/ './src/lib/view-env-helper/DataTracker.ts':
            /*!************************************************!*\
  !*** ./src/lib/view-env-helper/DataTracker.ts ***!
  \************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/env */ './src/lib/env/index.ts',
                );
                /* eslint-disable @typescript-eslint/no-explicit-any */

                class DataTracker {
                    constructor() {
                        this._callbacks = void 0;
                        this._updateHandler = void 0;
                        this._views = void 0;

                        this.clearViewCallbacks = (viewId) => {
                            if (this._views[viewId]) {
                                this._views[viewId].forEach((callbackId) => {
                                    // tracker cleaned up on integration side
                                    // this.removeCallback(callbackId, viewId);
                                    delete this._callbacks[callbackId];
                                });

                                delete this._views[viewId];
                            }
                        };

                        this._callbacks = {};
                        this._views = {};
                        this._updateHandler = undefined;
                    }

                    static get instance() {
                        // we should have one instance for different bundles
                        if (!window.__dataTracker) {
                            window.__dataTracker = new DataTracker();
                        }

                        return window.__dataTracker;
                    }

                    clear() {
                        if (this._updateHandler !== undefined) {
                            this._updateHandler.clear();

                            this._updateHandler = undefined;
                        }

                        this._callbacks = {};
                    }

                    addCallback(path, callback, resId = 0, trackInDepth = true) {
                        if (this._updateHandler === undefined) {
                            this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this);
                        }

                        const callbackID = lib_env__WEBPACK_IMPORTED_MODULE_0__.env.view.addModelObserver(
                            path,
                            resId,
                            trackInDepth,
                        );

                        if (callbackID > 0) {
                            this._callbacks[callbackID] = callback;

                            if (resId > 0) {
                                if (this._views[resId]) {
                                    this._views[resId].push(callbackID);
                                } else {
                                    this._views[resId] = [callbackID];
                                }
                            }
                        } else {
                            console.error("Can't add callback for model:", path);
                        }

                        return callbackID;
                    }

                    removeCallback(callbackID, resId = 0) {
                        let result = false;

                        if (callbackID !== undefined && this._callbacks[callbackID] !== undefined) {
                            result = viewEnv.removeDataChangedCallback(callbackID, resId);
                            delete this._callbacks[callbackID];
                        }

                        if (!result) {
                            console.error("Can't remove callback by id:", callbackID);
                        }

                        return result;
                    }

                    _emmitDataChanged(data, indexes, callbackIDs) {
                        callbackIDs.forEach((callbackID) => {
                            const callback = this._callbacks[callbackID];

                            if (callback !== undefined) {
                                callback(data, indexes);
                            }
                        });
                    }
                }

                DataTracker.__instance = void 0;
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = DataTracker;

                /***/
            },

        /***/ './src/lib/view-env-helper/ViewModel.ts':
            /*!**********************************************!*\
  !*** ./src/lib/view-env-helper/ViewModel.ts ***!
  \**********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                /* harmony import */ var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./DataTracker */ './src/lib/view-env-helper/DataTracker.ts',
                );
                /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./index */ './src/lib/view-env-helper/index.ts',
                );
                /* eslint-disable @typescript-eslint/no-explicit-any */

                class ViewModel {
                    constructor(path, watchingFields = []) {
                        this.dataTracker = void 0;
                        this.modelPath = void 0;
                        this.callbacks = void 0;
                        this.data = void 0;

                        this._notifyObservers = () => {
                            this.data = eval(this.modelPath);
                            this.callbacks.forEach((callback) => {
                                callback(this.data);
                            });
                        };

                        this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__['default']();
                        this.modelPath = path;
                        this.callbacks = new Set();
                        (0, _index__WEBPACK_IMPORTED_MODULE_1__.onBindingsReady)().then(() => {
                            this._addCallback(path);

                            watchingFields.forEach((suffix) => {
                                this._addCallback(path + '.' + suffix);
                            });

                            this._notifyObservers();
                        });
                    }

                    subscribe(callback) {
                        this.callbacks.add(callback);

                        if (this.data !== null && this.data !== undefined) {
                            callback(this.data);
                        }
                    }

                    unsubscribe(callback) {
                        this.callbacks.delete(callback);
                    }

                    destroy() {
                        this.dataTracker.clear();
                        this.callbacks.clear();
                    }

                    _addCallback(path) {
                        this.dataTracker.addCallback(path, this._notifyObservers);
                    }
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;

                /***/
            },

        /***/ './src/lib/view-env-helper/dumpViewModel.ts':
            /*!**************************************************!*\
  !*** ./src/lib/view-env-helper/dumpViewModel.ts ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ dumpViewModel: () => /* binding */ dumpViewModel,
                    /* harmony export */
                });
                /* eslint-disable @typescript-eslint/no-explicit-any */
                function dumpViewModel(model) {
                    const result = {};

                    if (typeof model !== 'object') {
                        return model;
                    }

                    for (const property in model) {
                        if (Object.prototype.hasOwnProperty.call(model, property)) {
                            const type = Object.prototype.toString.call(model[property]);

                            if (type.startsWith('[object CoherentArrayProxy]')) {
                                const array = model[property];
                                result[property] = [];

                                for (let i = 0; i < array.length; i++) {
                                    result[property].push({
                                        value: dumpViewModel(array[i].value),
                                    });
                                }
                            } else if (type.startsWith('[object class BW::WULF::ViewModel')) {
                                result[property] = dumpViewModel(model[property]);
                            } else {
                                result[property] = model[property];
                            }
                        }
                    }

                    return result;
                }

                /***/
            },

        /***/ './src/lib/view-env-helper/index.ts':
            /*!******************************************!*\
  !*** ./src/lib/view-env-helper/index.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ClickOutsideManager: () => /* binding */ ClickOutsideManager,
                    /* harmony export */ DataTracker: () =>
                        /* reexport safe */ _DataTracker__WEBPACK_IMPORTED_MODULE_2__['default'],
                    /* harmony export */ DateFormatType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.DateFormatType,
                    /* harmony export */ NumberFormatType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.NumberFormatType,
                    /* harmony export */ RealFormatType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.RealFormatType,
                    /* harmony export */ SystemLocale: () =>
                        /* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_4__.SystemLocale,
                    /* harmony export */ TimeFormatType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.TimeFormatType,
                    /* harmony export */ UserLocale: () =>
                        /* reexport safe */ _locale__WEBPACK_IMPORTED_MODULE_4__.UserLocale,
                    /* harmony export */ ViewEventType: () =>
                        /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_5__.ViewEventType,
                    /* harmony export */ ViewModel: () =>
                        /* reexport safe */ _ViewModel__WEBPACK_IMPORTED_MODULE_7__['default'],
                    /* harmony export */ addEscapeListener: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.addEscapeListener,
                    /* harmony export */ closeOnEsc: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.closeOnEsc,
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */ dumpViewModel: () =>
                        /* reexport safe */ _dumpViewModel__WEBPACK_IMPORTED_MODULE_3__.dumpViewModel,
                    /* harmony export */ handleViewEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.handleViewEvent,
                    /* harmony export */ isContextMenuShown: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.isContextMenuShown,
                    /* harmony export */ isPopOverShown: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.isPopOverShown,
                    /* harmony export */ isTooltipShown: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.isTooltipShown,
                    /* harmony export */ makeGlobalBoundingBox: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.makeGlobalBoundingBox,
                    /* harmony export */ onBindingsReady: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.onBindingsReady,
                    /* harmony export */ onLayoutReady: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.onLayoutReady,
                    /* harmony export */ sendCloseEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendCloseEvent,
                    /* harmony export */ sendClosePopOverEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendClosePopOverEvent,
                    /* harmony export */ sendMoveEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendMoveEvent,
                    /* harmony export */ sendShowContextMenuEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendShowContextMenuEvent,
                    /* harmony export */ sendShowPopOverEvent: () =>
                        /* reexport safe */ _view_events__WEBPACK_IMPORTED_MODULE_6__.sendShowPopOverEvent,
                    /* harmony export */
                });
                /* harmony import */ var _showModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./showModel */ './src/lib/view-env-helper/showModel.ts',
                );
                /* harmony import */ var _showModel__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(_showModel__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var _ClickOutsideManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./ClickOutsideManager */ './src/lib/view-env-helper/ClickOutsideManager.ts',
                );
                /* harmony import */ var _DataTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./DataTracker */ './src/lib/view-env-helper/DataTracker.ts',
                );
                /* harmony import */ var _dumpViewModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./dumpViewModel */ './src/lib/view-env-helper/dumpViewModel.ts',
                );
                /* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./locale */ './src/lib/view-env-helper/locale.ts',
                );
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./types */ './src/lib/view-env-helper/types.ts',
                );
                /* harmony import */ var _view_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ./view-events */ './src/lib/view-env-helper/view-events.ts',
                );
                /* harmony import */ var _ViewModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ./ViewModel */ './src/lib/view-env-helper/ViewModel.ts',
                );

                const ClickOutsideManager = _ClickOutsideManager__WEBPACK_IMPORTED_MODULE_1__['default'].instance;

                const ViewEnvHelper = {
                    DataTracker: _DataTracker__WEBPACK_IMPORTED_MODULE_2__['default'],
                    ViewModel: _ViewModel__WEBPACK_IMPORTED_MODULE_7__['default'],
                    ViewEventType: _types__WEBPACK_IMPORTED_MODULE_5__.ViewEventType,
                    NumberFormatType: _types__WEBPACK_IMPORTED_MODULE_5__.NumberFormatType,
                    RealFormatType: _types__WEBPACK_IMPORTED_MODULE_5__.RealFormatType,
                    TimeFormatType: _types__WEBPACK_IMPORTED_MODULE_5__.TimeFormatType,
                    DateFormatType: _types__WEBPACK_IMPORTED_MODULE_5__.DateFormatType,
                    makeGlobalBoundingBox: _view_events__WEBPACK_IMPORTED_MODULE_6__.makeGlobalBoundingBox,
                    sendMoveEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendMoveEvent,
                    sendCloseEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendCloseEvent,
                    sendClosePopOverEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendClosePopOverEvent,
                    sendShowContextMenuEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendShowContextMenuEvent,
                    sendShowPopOverEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.sendShowPopOverEvent,
                    addEscapeListener: _view_events__WEBPACK_IMPORTED_MODULE_6__.addEscapeListener,
                    closeOnEsc: _view_events__WEBPACK_IMPORTED_MODULE_6__.closeOnEsc,
                    handleViewEvent: _view_events__WEBPACK_IMPORTED_MODULE_6__.handleViewEvent,
                    onBindingsReady: _view_events__WEBPACK_IMPORTED_MODULE_6__.onBindingsReady,
                    onLayoutReady: _view_events__WEBPACK_IMPORTED_MODULE_6__.onLayoutReady,
                    isTooltipShown: _view_events__WEBPACK_IMPORTED_MODULE_6__.isTooltipShown,
                    isContextMenuShown: _view_events__WEBPACK_IMPORTED_MODULE_6__.isContextMenuShown,
                    isPopOverShown: _view_events__WEBPACK_IMPORTED_MODULE_6__.isPopOverShown,
                    dumpViewModel: _dumpViewModel__WEBPACK_IMPORTED_MODULE_3__.dumpViewModel,
                    ClickOutsideManager,
                    SystemLocale: _locale__WEBPACK_IMPORTED_MODULE_4__.SystemLocale,
                    UserLocale: _locale__WEBPACK_IMPORTED_MODULE_4__.UserLocale,
                };
                window.ViewEnvHelper = ViewEnvHelper;
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ViewEnvHelper;

                /***/
            },

        /***/ './src/lib/view-env-helper/locale.ts':
            /*!*******************************************!*\
  !*** ./src/lib/view-env-helper/locale.ts ***!
  \*******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ SystemLocale: () => /* binding */ SystemLocale,
                    /* harmony export */ UserLocale: () => /* binding */ UserLocale,
                    /* harmony export */
                });
                const SystemLocale = {
                    getNumberFormat(value, type) {
                        return systemLocale.getNumberFormat(value, type);
                    },

                    getRealFormat(value, type) {
                        return systemLocale.getRealFormat(value, type);
                    },

                    getTimeFormat(utc, type) {
                        return systemLocale.getTimeFormat(utc, type);
                    },

                    getDateFormat(utc, type) {
                        return systemLocale.getDateFormat(utc, type);
                    },

                    toUpperCase(str) {
                        return systemLocale.toUpperCase(str);
                    },

                    toLowerCase(str) {
                        return systemLocale.toUpperCase(str);
                    },
                };
                const UserLocale = {
                    getNumberFormat(value) {
                        return userLocale.getNumberFormat(value);
                    },

                    /**
                     * Returns string presentation of data and time using pattern.
                     * @param pattern The string containing conversion specifiers,
                     *      see std::put_time to get available specifiers, for example.
                     * @param utc The number containing time in seconds since the Epoch.
                     * @param timeToLocal Is time converted to local time.
                     * @returns The string containing presentation of data and time.
                     */
                    getTimeFormat(pattern, utc, timeToLocal) {
                        return userLocale.getTimeFormat(pattern, utc, timeToLocal === undefined ? true : timeToLocal);
                    },

                    /**
                     * Returns string presentation of data and time using ID of string resource.
                     * @param resourceID The ID of string resource where place conversion specifiers.
                     * @param utc The number containing time in seconds since the Epoch.
                     * @param timeToLocal Is time converted to local time.
                     * @returns The string containing presentation of data and time.
                     */
                    getTimeString(resourceID, utc, timeToLocal) {
                        return userLocale.getTimeString(
                            resourceID,
                            utc,
                            timeToLocal === undefined ? true : timeToLocal,
                        );
                    },
                };

                /***/
            },

        /***/ './src/lib/view-env-helper/showModel.ts':
            /*!**********************************************!*\
  !*** ./src/lib/view-env-helper/showModel.ts ***!
  \**********************************************/
            /***/ () => {
                /* eslint-disable @typescript-eslint/no-explicit-any */
                if (true) {
                    const showModel = (model = window.model, depth = 16) => {
                        if (depth < 0) {
                            console.warn(`Depth limit has been reached.
            You can change the limit with second argument.
            Use _showModel(model, <number>) for this. 16 is default.`);
                            return 'Depth limit has been reached';
                        }

                        if (model === null) {
                            return null;
                        }

                        switch (typeof model) {
                            case 'number':
                            case 'string':
                            case 'boolean':
                            case 'bigint':
                            case 'undefined':
                                return model;

                            case 'function':
                                return 'function';

                            case 'object': {
                                var _model$constructor$na, _model$constructor;

                                const type =
                                    (_model$constructor$na =
                                        (_model$constructor = model.constructor) == null
                                            ? void 0
                                            : _model$constructor.name) != null
                                        ? _model$constructor$na
                                        : 'UNKNOWN';

                                switch (true) {
                                    case type.includes('CoherentArrayProxy'):
                                        return [...model.values()].map((item) => showModel(item, depth - 1));

                                    case type === 'UNKNOWN':
                                        return 'UNKNOWN_TYPE';

                                    case type.includes('ViewModel'):
                                    default: {
                                        const result = {};

                                        for (const key in model) {
                                            if (Object.prototype.hasOwnProperty.call(model, key)) {
                                                result[key] = showModel(model[key], depth - 1);
                                            }
                                        }

                                        return result;
                                    }
                                }
                            }

                            default:
                                return `Unknown: ${String(model)}`;
                        }
                    };

                    window._showModel = showModel;
                }

                /***/
            },

        /***/ './src/lib/view-env-helper/types.ts':
            /*!******************************************!*\
  !*** ./src/lib/view-env-helper/types.ts ***!
  \******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ DateFormatType: () => /* binding */ DateFormatType,
                    /* harmony export */ NumberFormatType: () => /* binding */ NumberFormatType,
                    /* harmony export */ RealFormatType: () => /* binding */ RealFormatType,
                    /* harmony export */ TimeFormatType: () => /* binding */ TimeFormatType,
                    /* harmony export */ ViewEventType: () => /* binding */ ViewEventType,
                    /* harmony export */
                });
                let ViewEventType;

                (function (ViewEventType) {
                    ViewEventType[(ViewEventType['UNDEFINED'] = 0)] = 'UNDEFINED';
                    ViewEventType[(ViewEventType['TOOLTIP'] = 1)] = 'TOOLTIP';
                    ViewEventType[(ViewEventType['POP_OVER'] = 2)] = 'POP_OVER';
                    ViewEventType[(ViewEventType['CONTEXT_MENU'] = 4)] = 'CONTEXT_MENU';
                    ViewEventType[(ViewEventType['DROP_DOWN'] = 8)] = 'DROP_DOWN';
                    ViewEventType[(ViewEventType['MOVE'] = 16)] = 'MOVE';
                    ViewEventType[(ViewEventType['CLOSE'] = 32)] = 'CLOSE';
                    ViewEventType[(ViewEventType['MINIMIZE'] = 64)] = 'MINIMIZE';
                })(ViewEventType || (ViewEventType = {}));

                const NumberFormatType = Object.freeze({
                    INTEGRAL: 0,
                    GOLD: 1,
                });
                const RealFormatType = Object.freeze({
                    FRACTIONAL: 0,
                    WO_ZERO_DIGITS: 1,
                });
                const TimeFormatType = Object.freeze({
                    SHORT_FORMAT: 0,
                    LONG_FORMAT: 1,
                });
                const DateFormatType = Object.freeze({
                    SHORT_FORMAT: 0,
                    LONG_FORMAT: 1,
                    YEAR_MONTH: 2,
                });

                /***/
            },

        /***/ './src/lib/view-env-helper/view-events.ts':
            /*!************************************************!*\
  !*** ./src/lib/view-env-helper/view-events.ts ***!
  \************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ addEscapeListener: () => /* binding */ addEscapeListener,
                    /* harmony export */ callOnEsc: () => /* binding */ callOnEsc,
                    /* harmony export */ closeOnEsc: () => /* binding */ closeOnEsc,
                    /* harmony export */ handleViewEvent: () => /* binding */ handleViewEvent,
                    /* harmony export */ isContextMenuShown: () => /* binding */ isContextMenuShown,
                    /* harmony export */ isPopOverShown: () => /* binding */ isPopOverShown,
                    /* harmony export */ isTooltipShown: () => /* binding */ isTooltipShown,
                    /* harmony export */ makeGlobalBoundingBox: () => /* binding */ makeGlobalBoundingBox,
                    /* harmony export */ onBindingsReady: () => /* binding */ onBindingsReady,
                    /* harmony export */ onLayoutReady: () => /* binding */ onLayoutReady,
                    /* harmony export */ sendCloseEvent: () => /* binding */ sendCloseEvent,
                    /* harmony export */ sendClosePopOverEvent: () => /* binding */ sendClosePopOverEvent,
                    /* harmony export */ sendMinimizeEvent: () => /* binding */ sendMinimizeEvent,
                    /* harmony export */ sendMoveEvent: () => /* binding */ sendMoveEvent,
                    /* harmony export */ sendShowContextMenuEvent: () => /* binding */ sendShowContextMenuEvent,
                    /* harmony export */ sendShowPopOverEvent: () => /* binding */ sendShowPopOverEvent,
                    /* harmony export */
                });
                /* harmony import */ var lib_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/keycodes */ './src/lib/keycodes.ts',
                );
                /* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../env */ './src/lib/env/index.ts',
                );
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./types */ './src/lib/view-env-helper/types.ts',
                );
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

                function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }
                    if (info.done) {
                        resolve(value);
                    } else {
                        Promise.resolve(value).then(_next, _throw);
                    }
                }

                function _asyncToGenerator(fn) {
                    return function () {
                        var self = this,
                            args = arguments;
                        return new Promise(function (resolve, reject) {
                            var gen = fn.apply(self, args);
                            function _next(value) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                            }
                            function _throw(err) {
                                asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                            }
                            _next(undefined);
                        });
                    };
                }

                const makeGlobalBoundingBox = (clientRect) => {
                    return {
                        __Type: 'GFBoundingBox',
                        x: clientRect.x,
                        y: clientRect.y,
                        width: clientRect.width,
                        height: clientRect.height,
                    };
                };
                const onBindingsReady = /*#__PURE__*/ (function () {
                    var _ref = _asyncToGenerator(function* () {
                        if (engine._BindingsReady && engine._WindowLoaded) {
                            return true;
                        }

                        return new Promise((resolve) => {
                            engine.on('Ready', resolve);
                        });
                    });

                    return function onBindingsReady() {
                        return _ref.apply(this, arguments);
                    };
                })();
                const onLayoutReady = () =>
                    new Promise((resolve) => {
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                resolve();
                            });
                        });
                    });

                const createViewEventArguments = (data) => {
                    return Object.entries(data).map(([key, value]) => {
                        const out = {
                            __Type: 'GFValueProxy',
                            name: key,
                        };

                        switch (typeof value) {
                            case 'number':
                                out.number = value;
                                break;

                            case 'boolean':
                                out.bool = value;
                                break;

                            default:
                            case 'string':
                                out.string = value.toString();
                                break;
                        }

                        return out;
                    });
                };

                const handleViewEvent = (type, options) => {
                    const __Type = 'GFViewEventProxy';

                    if (options !== undefined) {
                        const args = options.args,
                            restOptions = _objectWithoutPropertiesLoose(options, _excluded);

                        if (args !== undefined) {
                            viewEnv.handleViewEvent(
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
                            viewEnv.handleViewEvent(
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
                        viewEnv.handleViewEvent({
                            __Type,
                            type,
                        });
                    }
                };
                /** @deprecated Use env.view.sendEvent.move method instead. */

                const sendMoveEvent = (start) =>
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.MOVE, {
                        isMouseEvent: true,
                        on: start,
                    });
                /** @deprecated Use env.view.sendEvent.close method instead. */

                const sendCloseEvent = () => handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.CLOSE);
                const sendClosePopOverEvent = () =>
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.POP_OVER, {
                        on: false,
                    });
                /** @deprecated Use env.view.sendEvent.minimize method instead. */

                const sendMinimizeEvent = () =>
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.MINIMIZE);
                const sendShowContextMenuEvent = (contentID, args, decoratorID = 0) => {
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.CONTEXT_MENU, {
                        isMouseEvent: true,
                        contentID: contentID,
                        on: true,
                        decoratorID: decoratorID,
                        args: args,
                    });
                };
                const sendShowPopOverEvent = (
                    contentID,
                    direction,
                    node,
                    decoratorID,
                    targetID = R.invalid('resId'),
                    args,
                ) => {
                    const globalPosition = _env__WEBPACK_IMPORTED_MODULE_1__.env.view.getViewGlobalPosition();

                    const _node$getBoundingClie = node.getBoundingClientRect(),
                        x = _node$getBoundingClie.x,
                        y = _node$getBoundingClie.y,
                        width = _node$getBoundingClie.width,
                        height = _node$getBoundingClie.height;

                    const clientRectPx = {
                        x: _env__WEBPACK_IMPORTED_MODULE_1__.env.view.pxToRem(x) + globalPosition.x,
                        y: _env__WEBPACK_IMPORTED_MODULE_1__.env.view.pxToRem(y) + globalPosition.y,
                        width: _env__WEBPACK_IMPORTED_MODULE_1__.env.view.pxToRem(width),
                        height: _env__WEBPACK_IMPORTED_MODULE_1__.env.view.pxToRem(height),
                    };
                    handleViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.POP_OVER, {
                        isMouseEvent: true,
                        contentID: contentID,
                        decoratorID: decoratorID || R.invalid('resId'),
                        targetID: targetID,
                        direction: direction,
                        bbox: makeGlobalBoundingBox(clientRectPx),
                        on: true,
                        args: args,
                    });
                };
                const isTooltipShown = () =>
                    viewEnv.isWindowShownByViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.TOOLTIP);
                const isContextMenuShown = () =>
                    viewEnv.isWindowShownByViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.CONTEXT_MENU);
                const isPopOverShown = () =>
                    viewEnv.isWindowShownByViewEvent(_types__WEBPACK_IMPORTED_MODULE_2__.ViewEventType.POP_OVER);
                const callOnEsc = (event, callback) => {
                    event.keyCode === lib_keycodes__WEBPACK_IMPORTED_MODULE_0__.KEY_CODES.ESCAPE && callback();
                };
                const closeOnEsc = (event) => {
                    callOnEsc(event, sendCloseEvent);
                };
                /** @deprecated Don't use it with hooks. Use useKeydownListener, useCallbackOnEsc or useCloseOnEsc hooks instead. */

                const addEscapeListener = (callback) => {
                    const handleFunc = (event) => callOnEsc(event, callback);

                    window.addEventListener('keydown', handleFunc);
                    return () => window.removeEventListener('keydown', handleFunc);
                };

                /***/
            },

        /***/ './src/lib/wrappers/MediaWrapper/MediaWrapper.tsx':
            /*!********************************************************!*\
  !*** ./src/lib/wrappers/MediaWrapper/MediaWrapper.tsx ***!
  \********************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaWrapper: () => /* binding */ MediaWrapper,
                    /* harmony export */
                });
                /* harmony import */ var components_MediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! components/MediaQuery */ './src/components/MediaQuery/index.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var _MediaWrapperInner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./MediaWrapperInner */ './src/lib/wrappers/MediaWrapper/MediaWrapperInner.tsx',
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

                const MediaWrapper = (_ref) => {
                    let children = _ref.children,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        components_MediaQuery__WEBPACK_IMPORTED_MODULE_0__.MediaProvider,
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _MediaWrapperInner__WEBPACK_IMPORTED_MODULE_2__.MediaWrapperInner,
                            rest,
                            children,
                        ),
                    );
                };

                /***/
            },

        /***/ './src/lib/wrappers/MediaWrapper/MediaWrapperInner.tsx':
            /*!*************************************************************!*\
  !*** ./src/lib/wrappers/MediaWrapper/MediaWrapperInner.tsx ***!
  \*************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaWrapperInner: () => /* binding */ MediaWrapperInner,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(/*! global-styles/mixins/mediaCss */ './src/global-styles/mixins/mediaCss.js');
                /* harmony import */ var global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default =
                    /*#__PURE__*/ __webpack_require__.n(global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../../hooks/useMedia */ './src/lib/hooks/useMedia.ts',
                );
                const _excluded = ['children', 'className'];

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

                const WIDTH_CLASSES = {
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.ExtraSmall]: '',
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.Small]:
                        global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_WIDTH,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.Medium]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_WIDTH}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.Large]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE_WIDTH}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaWidth.ExtraLarge]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE_WIDTH} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().EXTRA_LARGE_WIDTH}`,
                };
                const HEIGHT_CLASSES = {
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.ExtraSmall]: '',
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.Small]:
                        global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_HEIGHT,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.Medium]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_HEIGHT}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.Large]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE_HEIGHT}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaHeight.ExtraLarge]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE_HEIGHT} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().EXTRA_LARGE_HEIGHT}`,
                };
                const SIZE_CLASSES = {
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.ExtraSmall]: '',
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.Small]:
                        global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.Medium]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.Large]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE}`,
                    [_hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.MediaSize.ExtraLarge]:
                        `${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().SMALL} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().MEDIUM} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().LARGE} ${global_styles_mixins_mediaCss__WEBPACK_IMPORTED_MODULE_1___default().EXTRA_LARGE}`,
                };
                const MediaWrapperInner = (_ref) => {
                    let children = _ref.children,
                        className = _ref.className,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    const _useMedia = (0, _hooks_useMedia__WEBPACK_IMPORTED_MODULE_3__.useMedia)(),
                        mediaWidth = _useMedia.mediaWidth,
                        mediaHeight = _useMedia.mediaHeight,
                        mediaSize = _useMedia.mediaSize;

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                        'div',
                        _extends(
                            {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    className,
                                    WIDTH_CLASSES[mediaWidth],
                                    HEIGHT_CLASSES[mediaHeight],
                                    SIZE_CLASSES[mediaSize],
                                ),
                            },
                            rest,
                        ),
                        children,
                    );
                };

                /***/
            },

        /***/ './src/lib/wrappers/MediaWrapper/index.ts':
            /*!************************************************!*\
  !*** ./src/lib/wrappers/MediaWrapper/index.ts ***!
  \************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ MediaWrapper: () =>
                        /* reexport safe */ _MediaWrapper__WEBPACK_IMPORTED_MODULE_0__.MediaWrapper,
                    /* harmony export */
                });
                /* harmony import */ var _MediaWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./MediaWrapper */ './src/lib/wrappers/MediaWrapper/MediaWrapper.tsx',
                );

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/ArmoryYardPostProgressionBuyView.tsx':
            /*!***********************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/ArmoryYardPostProgressionBuyView.tsx ***!
  \***********************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var lib_wrappers_MediaWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/wrappers/MediaWrapper */ './src/lib/wrappers/MediaWrapper/index.ts',
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
                /* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./components/App/App */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.tsx',
                );
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./model */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/model.ts',
                );

                engine.whenReady.then(() => {
                    react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _model__WEBPACK_IMPORTED_MODULE_4__.ModelProvider,
                            null,
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                lib_wrappers_MediaWrapper__WEBPACK_IMPORTED_MODULE_0__.MediaWrapper,
                                null,
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                    _components_App_App__WEBPACK_IMPORTED_MODULE_3__.App,
                                    null,
                                ),
                            ),
                        ),
                        document.getElementById('root'),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.tsx':
            /*!*********************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.tsx ***!
  \*********************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ App: () => /* binding */ App,
                    /* harmony export */
                });
                /* harmony import */ var components_Rewards_constants__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(/*! components/Rewards/constants */ './src/components/Rewards/constants.ts');
                /* harmony import */ var components_TextButton_TextButton__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! components/TextButton/TextButton */ './src/components/TextButton/TextButton.tsx',
                    );
                /* harmony import */ var lib_hooks_useKeydownListener__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(/*! lib/hooks/useKeydownListener */ './src/lib/hooks/useKeydownListener.ts');
                /* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! mobx-react-lite */ './node_modules/mobx-react-lite/es/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ../../model */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/model.ts',
                );
                /* harmony import */ var _Description_Description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ../Description/Description */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.tsx',
                );
                /* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! ../Footer/Footer */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.tsx',
                );
                /* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! ../Header/Header */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.tsx',
                );
                /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! ./App.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.css',
                );

                const TEXTS = R.strings.armory_yard;
                const ZERO_PRICE = 0;
                viewEnv.clearInternalCacheAfterFinalize();
                const App = (0, mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__.observer)(() => {
                    var _tokenPrice$price$fin, _tokenCrystalPrice$pr;

                    const _useModel = (0, _model__WEBPACK_IMPORTED_MODULE_5__.useModel)(),
                        controls = _useModel.controls,
                        model = _useModel.model;

                    const _model$root$get = model.root.get(),
                        tokensCount = _model$root$get.tokensCount,
                        payedTokensLimit = _model$root$get.payedTokensLimit,
                        isWalletAvailable = _model$root$get.isWalletAvailable,
                        userCrystal = _model$root$get.userCrystal;

                    const tokenPrice = model.computes.getTokenPrice();
                    const tokenCrystalPrice = model.computes.getTokenCrystalPrice();
                    const tokenRate =
                        ((_tokenPrice$price$fin = tokenPrice.price.find(
                            (onePrice) =>
                                onePrice.name ===
                                components_Rewards_constants__WEBPACK_IMPORTED_MODULE_0__.RewardType.Gold,
                        )) == null
                            ? void 0
                            : _tokenPrice$price$fin.value) || ZERO_PRICE;
                    const tokenCrystalRate =
                        ((_tokenCrystalPrice$pr = tokenCrystalPrice.price.find(
                            (onePrice) =>
                                onePrice.name ===
                                components_Rewards_constants__WEBPACK_IMPORTED_MODULE_0__.RewardType.Crystal,
                        )) == null
                            ? void 0
                            : _tokenCrystalPrice$pr.value) || ZERO_PRICE;
                    (0, lib_hooks_useKeydownListener__WEBPACK_IMPORTED_MODULE_2__.useCallbackOnEsc)(controls.back);
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                        'div',
                        {
                            className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            components_TextButton_TextButton__WEBPACK_IMPORTED_MODULE_1__.TextButton,
                            {
                                caption: TEXTS.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                classNames: {
                                    base: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].close,
                                },
                                onClick: controls.cancel,
                            },
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            'div',
                            {
                                className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].content,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].header,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                    _Header_Header__WEBPACK_IMPORTED_MODULE_8__.Header,
                                    {
                                        tokensCount: tokensCount,
                                    },
                                ),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].productInfo,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                    'div',
                                    {
                                        className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].description,
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                        _Description_Description__WEBPACK_IMPORTED_MODULE_6__.Description,
                                        null,
                                    ),
                                ),
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement('div', {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].tokenImage,
                                }),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _App_css__WEBPACK_IMPORTED_MODULE_9__['default'].footer,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                    _Footer_Footer__WEBPACK_IMPORTED_MODULE_7__.Footer,
                                    {
                                        tokenRate: tokenRate,
                                        tokenCrystalRate: tokenCrystalRate,
                                        isWalletAvailable: isWalletAvailable,
                                        buy: controls.buy,
                                        payedTokensLimit: payedTokensLimit,
                                        userCrystal: userCrystal,
                                    },
                                ),
                            ),
                        ),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.tsx':
            /*!*************************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.tsx ***!
  \*************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Description: () => /* binding */ Description,
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
                /* harmony import */ var _Description_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./Description.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.css',
                );

                const TEXTS = R.strings.armory_yard.postprogression.buyTokens.description;
                const Description = (0, react__WEBPACK_IMPORTED_MODULE_1__.memo)(() => {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'div',
                        {
                            className: _Description_css__WEBPACK_IMPORTED_MODULE_2__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                            {
                                className: _Description_css__WEBPACK_IMPORTED_MODULE_2__['default'].title,
                                text: TEXTS.title(),
                            },
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                            {
                                className: _Description_css__WEBPACK_IMPORTED_MODULE_2__['default'].description,
                                text: TEXTS.body(),
                            },
                        ),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.tsx':
            /*!***************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.tsx ***!
  \***************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Footer: () => /* binding */ Footer,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var components_Button_CButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! components/Button/CButton */ './src/components/Button/CButton.tsx',
                );
                /* harmony import */ var components_Currency_Currency__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(/*! components/Currency/Currency */ './src/components/Currency/Currency.tsx');
                /* harmony import */ var components_Currency_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! components/Currency/types */ './src/components/Currency/types.ts',
                );
                /* harmony import */ var components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! components/Text/Text */ './src/components/Text/Text.tsx',
                );
                /* harmony import */ var components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! components/Tooltip/Tooltip */ './src/components/Tooltip/Tooltip.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
                /* harmony import */ var _components_TokensStepper_TokensStepper__WEBPACK_IMPORTED_MODULE_7__ =
                    __webpack_require__(
                        /*! ../../../components/TokensStepper/TokensStepper */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TokensStepper.tsx',
                    );
                /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! ../../types */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/types.ts',
                );
                /* harmony import */ var _ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
                    /*! ../ToggleButton/ToggleButton */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/ToggleButton/ToggleButton.tsx',
                );
                /* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
                    /*! ./Footer.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.css',
                );

                const TEXTS = R.strings.armory_yard.postprogression.buyTokens.footer;
                const STEP_SIZE = 1;
                const Footer = (0, react__WEBPACK_IMPORTED_MODULE_6__.memo)(
                    ({ isWalletAvailable, payedTokensLimit, tokenRate, tokenCrystalRate, userCrystal, buy }) => {
                        const _useState = (0, react__WEBPACK_IMPORTED_MODULE_6__.useState)(STEP_SIZE),
                            tokensValue = _useState[0],
                            setTokensValue = _useState[1];

                        const _useState2 = (0, react__WEBPACK_IMPORTED_MODULE_6__.useState)(tokenRate),
                            goldValue = _useState2[0],
                            setGoldValue = _useState2[1];

                        const _useState3 = (0, react__WEBPACK_IMPORTED_MODULE_6__.useState)(tokenCrystalRate),
                            crystalValue = _useState3[0],
                            setCrystalValue = _useState3[1];

                        const _useState4 = (0, react__WEBPACK_IMPORTED_MODULE_6__.useState)(
                                _types__WEBPACK_IMPORTED_MODULE_8__.ToggleType.Gold,
                            ),
                            checkedType = _useState4[0],
                            setCheckedType = _useState4[1];

                        const toggleClick = (0, react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(
                            (toggleType) => {
                                if (toggleType !== checkedType) {
                                    setCheckedType(toggleType);
                                    setGoldValue(tokenRate);
                                    setCrystalValue(tokenCrystalRate);
                                    setTokensValue(STEP_SIZE);
                                }
                            },
                            [tokenRate, tokenCrystalRate, checkedType],
                        );
                        const isGoldToggleActive = checkedType === _types__WEBPACK_IMPORTED_MODULE_8__.ToggleType.Gold;
                        const isCrystallToggleActive =
                            checkedType === _types__WEBPACK_IMPORTED_MODULE_8__.ToggleType.Crystal;
                        const isBuyAvailable = isGoldToggleActive || userCrystal >= crystalValue;
                        const activeType = isCrystallToggleActive
                            ? components_Currency_types__WEBPACK_IMPORTED_MODULE_3__.CurrencyType.crystal
                            : components_Currency_types__WEBPACK_IMPORTED_MODULE_3__.CurrencyType.gold;
                        const handleTokenIncrease = (0, react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
                            if (tokensValue < payedTokensLimit) {
                                if (isGoldToggleActive) {
                                    const newTokensValue = tokensValue + STEP_SIZE;
                                    const goldRate = newTokensValue * tokenRate;
                                    setTokensValue(newTokensValue);
                                    setGoldValue(goldRate);
                                }

                                if (isCrystallToggleActive) {
                                    const newTokensValue = tokensValue + STEP_SIZE;
                                    const crystalRate = newTokensValue * tokenCrystalRate;
                                    setTokensValue(newTokensValue);
                                    setCrystalValue(crystalRate);
                                }
                            }
                        }, [
                            isCrystallToggleActive,
                            isGoldToggleActive,
                            payedTokensLimit,
                            tokenCrystalRate,
                            tokenRate,
                            tokensValue,
                        ]);
                        const handleTokenDecrease = (0, react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
                            if (tokensValue > STEP_SIZE) {
                                if (isGoldToggleActive) {
                                    const newTokensValue = tokensValue - STEP_SIZE;
                                    const goldRate = newTokensValue * tokenRate;
                                    setTokensValue(newTokensValue);
                                    setGoldValue(goldRate);
                                }

                                if (isCrystallToggleActive) {
                                    const newTokensValue = tokensValue - STEP_SIZE;
                                    const crystalRate = newTokensValue * tokenCrystalRate;
                                    setTokensValue(newTokensValue);
                                    setCrystalValue(crystalRate);
                                }
                            }
                        }, [tokensValue, isGoldToggleActive, isCrystallToggleActive, tokenRate, tokenCrystalRate]);
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                            'div',
                            {
                                className: _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].base,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].line,
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].line__first,
                                ),
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement('div', {
                                className: _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].bg,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].line,
                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].line__second,
                                ),
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                'div',
                                {
                                    className: _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].content,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                    'div',
                                    {
                                        className: _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].finalPrice,
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                        'div',
                                        {
                                            className: _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].toggle,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            _ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_9__.ToggleButton,
                                            {
                                                toggleType: _types__WEBPACK_IMPORTED_MODULE_8__.ToggleType.Gold,
                                                onClick: toggleClick,
                                                isActive: isGoldToggleActive,
                                            },
                                        ),
                                    ),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                        'div',
                                        {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                                _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].toggle,
                                                _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].toggle__crystal,
                                            ),
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            _ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_9__.ToggleButton,
                                            {
                                                toggleType: _types__WEBPACK_IMPORTED_MODULE_8__.ToggleType.Crystal,
                                                onClick: toggleClick,
                                                isActive: isCrystallToggleActive,
                                            },
                                        ),
                                    ),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement('div', {
                                        className: _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].arrow,
                                    }),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                        'div',
                                        {
                                            className:
                                                _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].priceWrapper,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            'div',
                                            {
                                                className:
                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].priceLine,
                                            },
                                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                                components_Currency_Currency__WEBPACK_IMPORTED_MODULE_2__.Currency,
                                                {
                                                    type: activeType,
                                                    value: isCrystallToggleActive ? crystalValue : goldValue,
                                                    size: components_Currency_types__WEBPACK_IMPORTED_MODULE_3__
                                                        .CurrencySize.big,
                                                    isEnough: isBuyAvailable,
                                                },
                                            ),
                                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                                components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                                                {
                                                    contentId:
                                                        R.views.armory_yard.lobby.feature.tooltips.ArmoryYardTokenStepperTooltipView(
                                                            'resId',
                                                        ),
                                                    ignoreShowDelay: true,
                                                },
                                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default']
                                                                .productCounter,
                                                    },
                                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                                        _components_TokensStepper_TokensStepper__WEBPACK_IMPORTED_MODULE_7__.TokensStepper,
                                                        {
                                                            value: tokensValue,
                                                            handleTokenIncrease: handleTokenIncrease,
                                                            handleTokenDecrease: handleTokenDecrease,
                                                            maxValue: payedTokensLimit,
                                                            minValue: STEP_SIZE,
                                                        },
                                                    ),
                                                ),
                                            ),
                                        ),
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            components_Text_Text__WEBPACK_IMPORTED_MODULE_4__['default'],
                                            {
                                                className:
                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default']
                                                        .tokensAvailable,
                                                text: TEXTS.availableTokens(),
                                                format: {
                                                    binding: {
                                                        tokens: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                                            components_Text_Text__WEBPACK_IMPORTED_MODULE_4__[
                                                                'default'
                                                            ],
                                                            {
                                                                className:
                                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default']
                                                                        .tokensAvailable__tokens,
                                                                text: String(payedTokensLimit),
                                                            },
                                                        ),
                                                    },
                                                },
                                            },
                                        ),
                                    ),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement('div', {
                                        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                            _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].arrow,
                                            _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].arrow__last,
                                        ),
                                    }),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                        components_Button_CButton__WEBPACK_IMPORTED_MODULE_1__.CButton,
                                        {
                                            type: components_Button_CButton__WEBPACK_IMPORTED_MODULE_1__.ButtonType
                                                .main,
                                            mixClass: _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].buyButton,
                                            onClick: () => buy(tokensValue, activeType),
                                            disabled: !isBuyAvailable,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            components_Text_Text__WEBPACK_IMPORTED_MODULE_4__['default'],
                                            {
                                                text: TEXTS.buy(),
                                                className:
                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].buttonText,
                                            },
                                        ),
                                    ),
                                ),
                            ),
                            !isWalletAvailable &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                    components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                                    {
                                        contentId:
                                            R.views.armory_yard.lobby.feature.tooltips.ArmoryYardWalletNotAvailableTooltipView(
                                                'resId',
                                            ),
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                        'div',
                                        {
                                            className: _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].warning,
                                        },
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            'div',
                                            {
                                                className:
                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].warning__glow,
                                            },
                                        ),
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_6___default().createElement(
                                            'div',
                                            {
                                                className:
                                                    _Footer_css__WEBPACK_IMPORTED_MODULE_10__['default'].warning__icon,
                                            },
                                        ),
                                    ),
                                ),
                        );
                    },
                );

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.tsx':
            /*!***************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.tsx ***!
  \***************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Header: () => /* binding */ Header,
                    /* harmony export */
                });
                /* harmony import */ var components_Text_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! components/Text/Text */ './src/components/Text/Text.tsx',
                );
                /* harmony import */ var components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! components/Tooltip/Tooltip */ './src/components/Tooltip/Tooltip.tsx',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./Header.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.css',
                );

                const TEXTS = R.strings.armory_yard.postprogression.buyTokens.header;
                const Header = (0, react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ tokensCount }) => {
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                        'div',
                        {
                            className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'div',
                            {
                                className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].productTitleWrapper,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                                {
                                    className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].title,
                                    text: TEXTS.title(),
                                },
                            ),
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'div',
                            {
                                className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].tokenCount,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                                {
                                    className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].tokenCount__text,
                                    text: TEXTS.available(),
                                },
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_1__.Tooltip,
                                {
                                    contentId:
                                        R.views.armory_yard.lobby.feature.tooltips.ShopCurrencyTooltipView('resId'),
                                    ignoreShowDelay: true,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                    'div',
                                    {
                                        className:
                                            _Header_css__WEBPACK_IMPORTED_MODULE_3__['default']
                                                .tokenCount__underTooltip,
                                    },
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                                        components_Text_Text__WEBPACK_IMPORTED_MODULE_0__['default'],
                                        {
                                            className:
                                                _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].tokenCount__count,
                                            text: String(tokensCount),
                                        },
                                    ),
                                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('div', {
                                        className: _Header_css__WEBPACK_IMPORTED_MODULE_3__['default'].tokenCount__icon,
                                    }),
                                ),
                            ),
                        ),
                    );
                });

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/ToggleButton/ToggleButton.tsx':
            /*!***************************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/ToggleButton/ToggleButton.tsx ***!
  \***************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ToggleButton: () => /* binding */ ToggleButton,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/sound */ './src/lib/sound.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./ToggleButton.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/ToggleButton/ToggleButton.css',
                );

                const SOUND_CLICK = 'play';
                const SOUND_HOVER = 'highlight';
                const ToggleButton = (0, react__WEBPACK_IMPORTED_MODULE_2__.memo)(
                    ({ toggleType, onClick, isActive }) => {
                        const _useState = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
                            isHovered = _useState[0],
                            setIsHovered = _useState[1];

                        const handleClick = () => {
                            onClick(toggleType);
                            setIsHovered(false);
                            (0, lib_sound__WEBPACK_IMPORTED_MODULE_1__.playSound)(SOUND_CLICK);
                        };

                        const handleMouseEnter = () => {
                            if (!isActive) {
                                setIsHovered(true);
                                (0, lib_sound__WEBPACK_IMPORTED_MODULE_1__.playSound)(SOUND_HOVER);
                            }
                        };

                        const handleMouseLeave = () => {
                            if (!isActive) {
                                setIsHovered(false);
                            }
                        };

                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            'div',
                            {
                                className: _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].base,
                                onClick: handleClick,
                                onMouseEnter: handleMouseEnter,
                                onMouseLeave: handleMouseLeave,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('div', {
                                className: _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].bgDefault,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].bgActive,
                                    isActive &&
                                        _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].bgActive__visible,
                                ),
                            }),
                            !isActive &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('div', {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                        _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].hover,
                                        isHovered &&
                                            _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].hover__hovered,
                                    ),
                                }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__['default'].icon,
                                    _ToggleButton_css__WEBPACK_IMPORTED_MODULE_3__['default'][`icon__${toggleType}`],
                                ),
                            }),
                        );
                    },
                );

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/model.ts':
            /*!*******************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/model.ts ***!
  \*******************************************************************************************************************/
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
                    lib_data_layer__WEBPACK_IMPORTED_MODULE_0__.initializeModelWithContext)()(
                        ({ observableModel }) => {
                            const model = {
                                root: observableModel.object(),
                                price: observableModel.object('price'),
                                crystalPrice: observableModel.object('crystalPrice'),
                            };
                            const getTokenPrice = (0, mobx_utils__WEBPACK_IMPORTED_MODULE_3__.computedFn)(
                                () => {
                                    const _model$root$get = model.root.get(),
                                        price = _model$root$get.price;

                                    return Object.assign({}, price, {
                                        price: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            price.price,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                        defPrice: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            price.defPrice,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                        discount: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            price.discount,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                    });
                                },
                                {
                                    equals: lib_function__WEBPACK_IMPORTED_MODULE_1__.constFalse,
                                },
                            );
                            const getTokenCrystalPrice = (0, mobx_utils__WEBPACK_IMPORTED_MODULE_3__.computedFn)(
                                () => {
                                    const _model$root$get2 = model.root.get(),
                                        crystalPrice = _model$root$get2.crystalPrice;

                                    return Object.assign({}, crystalPrice, {
                                        price: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            crystalPrice.price,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                        defPrice: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            crystalPrice.defPrice,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                        discount: lib_likeArray__WEBPACK_IMPORTED_MODULE_2__.likeArray.map(
                                            crystalPrice.discount,
                                            lib_function__WEBPACK_IMPORTED_MODULE_1__.identity,
                                        ),
                                    });
                                },
                                {
                                    equals: lib_function__WEBPACK_IMPORTED_MODULE_1__.constFalse,
                                },
                            );
                            return Object.assign({}, model, {
                                computes: {
                                    getTokenPrice,
                                    getTokenCrystalPrice,
                                },
                            });
                        },
                        ({ externalModel }) => ({
                            cancel: externalModel.createCallbackNoArgs('onCancel'),
                            back: externalModel.createCallbackNoArgs('onBack'),
                            buy: externalModel.createCallback(
                                (tokens, currencyType) => ({
                                    tokens,
                                    currencyType,
                                }),
                                'onBuy',
                            ),
                        }),
                    ),
                    ModelProvider = _initializeModelWithC[0],
                    useModel = _initializeModelWithC[1];

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/types.ts':
            /*!*******************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/types.ts ***!
  \*******************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ ToggleType: () => /* binding */ ToggleType,
                    /* harmony export */
                });
                let ToggleType;

                (function (ToggleType) {
                    ToggleType['Gold'] = 'gold';
                    ToggleType['Crystal'] = 'crystal';
                })(ToggleType || (ToggleType = {}));

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TextInput/TextInput.tsx':
            /*!**************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TextInput/TextInput.tsx ***!
  \**************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ TextInput: () => /* binding */ TextInput,
                    /* harmony export */
                });
                /* harmony import */ var lib_mouse_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! lib/mouse-selection.js */ './src/lib/mouse-selection.js',
                );
                /* harmony import */ var lib_mouse_selection_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(lib_mouse_selection_js__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_hooks_useLayoutReady__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/hooks/useLayoutReady */ './src/lib/hooks/useLayoutReady.ts',
                );
                /* harmony import */ var lib_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/keycodes */ './src/lib/keycodes.ts',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
                const _excluded = ['value', 'className', 'autoFocus', 'onKeyDown'];

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

                const TextInputComponent = (_ref) => {
                    let value = _ref.value,
                        className = _ref.className,
                        autoFocus = _ref.autoFocus,
                        onKeyDown = _ref.onKeyDown,
                        rest = _objectWithoutPropertiesLoose(_ref, _excluded);

                    let inputRef;

                    const _useState = (0, react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
                        shouldMoveCursorToEnd = _useState[0],
                        setShouldMoveCursorToEnd = _useState[1];

                    const setInputRef = (ref) => {
                        if (ref) {
                            inputRef = ref;
                            shouldMoveCursorToEnd && ref.setSelectionRange(ref.value.length, ref.value.length);
                        }
                    };

                    (0, lib_hooks_useLayoutReady__WEBPACK_IMPORTED_MODULE_1__.useLayoutReady)(() => {
                        inputRef.focus();
                    });

                    const handleKeyDown = (event) => {
                        const currTarget = event.currentTarget;
                        const currValueLength = currTarget.value.length;
                        const currSelection = currTarget.selectionStart || 0;
                        setShouldMoveCursorToEnd(
                            currSelection === currValueLength &&
                                event.which !== lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.DELETE,
                        );

                        if (
                            (event.which === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.DELETE ||
                                event.which === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.BACKSPACE) &&
                            currValueLength === 1
                        ) {
                            setTimeout(() => {
                                currTarget.setSelectionRange(currValueLength, currValueLength);
                            });
                        }

                        if (
                            event.which === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.ESCAPE &&
                            inputRef &&
                            autoFocus
                        ) {
                            inputRef.blur();
                        }

                        onKeyDown(event);
                    };

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(
                        'input',
                        _extends(
                            {
                                type: 'text',
                                ref: setInputRef,
                                className: className,
                                value: value,
                                onKeyDown: handleKeyDown,
                            },
                            rest,
                        ),
                    );
                };

                const TextInput = (0, react__WEBPACK_IMPORTED_MODULE_3__.memo)(TextInputComponent);

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TokensStepper.tsx':
            /*!********************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TokensStepper.tsx ***!
  \********************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ TokensStepper: () => /* binding */ TokensStepper,
                    /* harmony export */
                });
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! classnames */ './node_modules/classnames/index.js',
                );
                /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var lib_hooks_useScaleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! lib/hooks/useScaleState */ './src/lib/hooks/useScaleState.ts',
                );
                /* harmony import */ var lib_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! lib/keycodes */ './src/lib/keycodes.ts',
                );
                /* harmony import */ var lib_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! lib/sound */ './src/lib/sound.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! react */ './node_modules/@wotfe/react/index.js',
                );
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default =
                    /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var _TextInput_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./TextInput/TextInput */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TextInput/TextInput.tsx',
                );
                /* harmony import */ var _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! ./TokensStepper.css */ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TokensStepper.css',
                );

                const SOUND_CLICK = 'play';
                const SOUND_HOVER = 'highlight';
                const DIGITS_REGEXP = /\d+/;
                const X2_SCALE = 2;

                const handleBtnMouseEnter = () => (0, lib_sound__WEBPACK_IMPORTED_MODULE_3__.playSound)(SOUND_HOVER);

                const TokensStepper = ({
                    value,
                    minValue,
                    maxValue,
                    iconPath,
                    iconStyles,
                    handleTokenChange,
                    handleTokenIncrease,
                    handleTokenDecrease,
                }) => {
                    const canAdd = value < maxValue;
                    const canSubtract = value > minValue;
                    const scale = (0, lib_hooks_useScaleState__WEBPACK_IMPORTED_MODULE_1__.useScaleState)();
                    const isX2Scale = scale === X2_SCALE;
                    const baseRef = (0, react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
                    const handleKeyDown = (0, react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
                        (event) => {
                            if (
                                event.which === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.ARROW_UP &&
                                canAdd
                            ) {
                                handleTokenIncrease();
                            } else if (
                                event.which === lib_keycodes__WEBPACK_IMPORTED_MODULE_2__.KEY_CODES.ARROW_DOWN &&
                                canSubtract
                            ) {
                                handleTokenDecrease();
                            }
                        },
                        [canAdd, canSubtract, handleTokenDecrease, handleTokenIncrease],
                    );
                    const handleInputChange = (0, react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
                        (event) => {
                            if (handleTokenChange) {
                                var _DIGITS_REGEXP$exec;

                                const currValue = Number(
                                    (_DIGITS_REGEXP$exec = DIGITS_REGEXP.exec(event.currentTarget.value)) == null
                                        ? void 0
                                        : _DIGITS_REGEXP$exec[0],
                                );

                                if (currValue > maxValue) {
                                    handleTokenChange(maxValue);
                                } else if (currValue <= minValue || !Number.isInteger(currValue) || !currValue) {
                                    handleTokenChange(minValue);
                                } else {
                                    handleTokenChange(currValue);
                                }
                            }
                        },
                        [handleTokenChange, maxValue, minValue],
                    );
                    const handleMouseWheel = (0, react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(
                        (event) => {
                            if (event.deltaY > 0) {
                                handleTokenIncrease();
                            } else {
                                handleTokenDecrease();
                            }
                        },
                        [handleTokenDecrease, handleTokenIncrease],
                    );

                    const handleAddBtnClick = () => {
                        if (canAdd) {
                            (0, lib_sound__WEBPACK_IMPORTED_MODULE_3__.playSound)(SOUND_CLICK);
                            handleTokenIncrease();
                        }
                    };

                    const handleSubtractBtnClick = () => {
                        if (canSubtract) {
                            (0, lib_sound__WEBPACK_IMPORTED_MODULE_3__.playSound)(SOUND_CLICK);
                            handleTokenDecrease();
                        }
                    };

                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                        'div',
                        {
                            ref: baseRef,
                            className: _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].base,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            'div',
                            {
                                className: _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].currency,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                'div',
                                {
                                    className: _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].inputWrapper,
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                                    _TextInput_TextInput__WEBPACK_IMPORTED_MODULE_5__.TextInput,
                                    {
                                        value: value,
                                        autoFocus: true,
                                        className: _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].input,
                                        onBlur: () => {
                                            var _baseRef$current;

                                            return (_baseRef$current = baseRef.current) == null
                                                ? void 0
                                                : _baseRef$current.classList.remove(
                                                      _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default']
                                                          .base__focused,
                                                  );
                                        },
                                        onFocus: () => {
                                            var _baseRef$current2;

                                            return (_baseRef$current2 = baseRef.current) == null
                                                ? void 0
                                                : _baseRef$current2.classList.add(
                                                      _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default']
                                                          .base__focused,
                                                  );
                                        },
                                        onKeyDown: handleKeyDown,
                                        onChange: handleInputChange,
                                        onWheel: handleMouseWheel,
                                    },
                                ),
                            ),
                        ),
                        iconPath &&
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].currencyIcon,
                                    iconStyles,
                                ),
                                style: {
                                    backgroundImage: `url(${iconPath})`,
                                },
                            }),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement(
                            'div',
                            {
                                className: _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].controls,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].btn,
                                    _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].btnIncrement,
                                    isX2Scale && _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].btn__scaled,
                                    !canAdd &&
                                        _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default']
                                            .btnIncrement__disabled,
                                ),
                                onMouseEnter: handleBtnMouseEnter,
                                onClick: handleAddBtnClick,
                            }),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().createElement('div', {
                                className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(
                                    _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].btn,
                                    _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].btnDecrement,
                                    isX2Scale && _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default'].btn__scaled,
                                    !canSubtract &&
                                        _TokensStepper_css__WEBPACK_IMPORTED_MODULE_6__['default']
                                            .btnDecrement__disabled,
                                ),
                                onMouseEnter: handleBtnMouseEnter,
                                onClick: handleSubtractBtnClick,
                            }),
                        ),
                    );
                };

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

        /***/ './src/components/Button/CButton.css':
            /*!*******************************************!*\
  !*** ./src/components/Button/CButton.css ***!
  \*******************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'CButton_base_40',
                    base__main: 'CButton_base__main_42',
                    base__primary: 'CButton_base__primary_7f',
                    base__primaryGreen: 'CButton_base__primaryGreen_6f',
                    base__primaryRed: 'CButton_base__primaryRed_ec',
                    base__secondary: 'CButton_base__secondary_50',
                    base__ghost: 'CButton_base__ghost_ed',
                    base__extraSmall: 'CButton_base__extraSmall_27',
                    base__small: 'CButton_base__small_df',
                    base__medium: 'CButton_base__medium_74',
                    base__disabled: 'CButton_base__disabled_d9',
                    back: 'CButton_back_e5',
                    texture: 'CButton_texture_fe',
                    state: 'CButton_state_11',
                    base__focus: 'CButton_base__focus_83',
                    stateHighlightHover: 'CButton_stateHighlightHover_ff',
                    stateHighlightActive: 'CButton_stateHighlightActive_35',
                    stateDisabled: 'CButton_stateDisabled_54',
                    base__firstHover: 'CButton_base__firstHover_d5',
                    base__highlightActive: 'CButton_base__highlightActive_b2',
                    content: 'CButton_content_cc',
                };

                /***/
            },

        /***/ './src/components/Currency/Currency.css':
            /*!**********************************************!*\
  !*** ./src/components/Currency/Currency.css ***!
  \**********************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
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

        /***/ './src/components/TextButton/TextButton.css':
            /*!**************************************************!*\
  !*** ./src/components/TextButton/TextButton.css ***!
  \**************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'TextButton_base_b6',
                    base__right: 'TextButton_base__right_39',
                    icon: 'TextButton_icon_17',
                    icon__back: 'TextButton_icon__back_43',
                    icon__forward: 'TextButton_icon__forward_59',
                    icon__close: 'TextButton_icon__close_53',
                    icon__info: 'TextButton_icon__info_33',
                    glow: 'TextButton_glow_a4',
                    caption: 'TextButton_caption_82',
                    caption__back: 'TextButton_caption__back_b9',
                    caption__forward: 'TextButton_caption__forward_4e',
                    caption__close: 'TextButton_caption__close_36',
                    caption__info: 'TextButton_caption__info_23',
                    goto: 'TextButton_goto_e7',
                    base__left: 'TextButton_base__left_ff',
                    shine: 'TextButton_shine_e2',
                };

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

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.css':
            /*!*********************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/App/App.css ***!
  \*********************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'App_base_4f',
                    close: 'App_close_ab',
                    content: 'App_content_97',
                    header: 'App_header_1e',
                    productInfo: 'App_productInfo_74',
                    description: 'App_description_f6',
                    tokenImage: 'App_tokenImage_87',
                    footer: 'App_footer_e7',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.css':
            /*!*************************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Description/Description.css ***!
  \*************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'Description_base_1d',
                    title: 'Description_title_b6',
                    description: 'Description_description_ae',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.css':
            /*!***************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Footer/Footer.css ***!
  \***************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'Footer_base_c0',
                    line: 'Footer_line_fc',
                    line__first: 'Footer_line__first_21',
                    line__second: 'Footer_line__second_73',
                    bg: 'Footer_bg_78',
                    content: 'Footer_content_b3',
                    priceWrapper: 'Footer_priceWrapper_6b',
                    priceLine: 'Footer_priceLine_b4',
                    tokensAvailable: 'Footer_tokensAvailable_f7',
                    tokensAvailable__tokens: 'Footer_tokensAvailable__tokens_bd',
                    finalPrice: 'Footer_finalPrice_41',
                    productCounter: 'Footer_productCounter_9a',
                    buyButton: 'Footer_buyButton_fe',
                    buttonText: 'Footer_buttonText_9a',
                    warning: 'Footer_warning_76',
                    warning__glow: 'Footer_warning__glow_e1',
                    warning__icon: 'Footer_warning__icon_19',
                    toggle: 'Footer_toggle_e8',
                    toggle__crystal: 'Footer_toggle__crystal_43',
                    arrow: 'Footer_arrow_f5',
                    arrow__last: 'Footer_arrow__last_a6',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.css':
            /*!***************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/Header/Header.css ***!
  \***************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'Header_base_29',
                    productTitleWrapper: 'Header_productTitleWrapper_19',
                    title: 'Header_title_42',
                    tokenCount: 'Header_tokenCount_0f',
                    tokenCount__underTooltip: 'Header_tokenCount__underTooltip_f1',
                    tokenCount__text: 'Header_tokenCount__text_a8',
                    tokenCount__count: 'Header_tokenCount__count_8e',
                    tokenCount__icon: 'Header_tokenCount__icon_67',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/ToggleButton/ToggleButton.css':
            /*!***************************************************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/components/ToggleButton/ToggleButton.css ***!
  \***************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'ToggleButton_base_3a',
                    bgDefault: 'ToggleButton_bgDefault_e2',
                    bgActive: 'ToggleButton_bgActive_0c',
                    bgActive__visible: 'ToggleButton_bgActive__visible_0a',
                    icon: 'ToggleButton_icon_f0',
                    icon__gold: 'ToggleButton_icon__gold_82',
                    icon__crystal: 'ToggleButton_icon__crystal_45',
                    hover: 'ToggleButton_hover_2d',
                    hover__hovered: 'ToggleButton_hover__hovered_07',
                };

                /***/
            },

        /***/ '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TokensStepper.css':
            /*!********************************************************************************************************************!*\
  !*** ../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/components/TokensStepper/TokensStepper.css ***!
  \********************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
                    /* harmony export */
                });
                // extracted by mini-css-extract-plugin
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = {
                    base: 'TokensStepper_base_95',
                    base__focused: 'TokensStepper_base__focused_1f',
                    currency: 'TokensStepper_currency_74',
                    inputWrapper: 'TokensStepper_inputWrapper_b1',
                    input: 'TokensStepper_input_03',
                    input__disabled: 'TokensStepper_input__disabled_52',
                    currencyIcon: 'TokensStepper_currencyIcon_7a',
                    controls: 'TokensStepper_controls_bf',
                    btn: 'TokensStepper_btn_f2',
                    btn__scaled: 'TokensStepper_btn__scaled_9a',
                    btnIncrement: 'TokensStepper_btnIncrement_d2',
                    btnIncrement__disabled: 'TokensStepper_btnIncrement__disabled_71',
                    btnDecrement: 'TokensStepper_btnDecrement_3d',
                    btnDecrement__disabled: 'TokensStepper_btnDecrement__disabled_80',
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
            /******/ 'lobby/feature/ArmoryYardPostProgressionBuyView/ArmoryYardPostProgressionBuyView': 0,
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
            '../../../wot_ext/armory_yard/gui/gameface/src/views/lobby/feature/ArmoryYardPostProgressionBuyView/ArmoryYardPostProgressionBuyView.tsx',
        ),
    );
    /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSU8sTUFBTU0sZUFBZSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsd0VBQVosQ0FBeEI7QUFJUCxNQUFNUSxnQkFBZ0IsR0FBRztBQUFFQyxFQUFBQSxFQUFFLEVBQUVMLHVEQUFOO0FBQXFCTyxFQUFBQSxFQUFFLEVBQUVQLHVEQUF6QjtBQUF3Q1MsRUFBQUEsRUFBRSxFQUFFVCx1REFBNUM7QUFBMkRXLEVBQUFBLEVBQUUsRUFBRVgsdURBQWFZO0FBQTVFLENBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUc7QUFBRVIsRUFBQUEsRUFBRSxFQUFFTCx1REFBTjtBQUFxQk8sRUFBQUEsRUFBRSxFQUFFUCx1REFBekI7QUFBd0NTLEVBQUFBLEVBQUUsRUFBRVQsdURBQTVDO0FBQTJEVyxFQUFBQSxFQUFFLEVBQUVYLHVEQUFhaUI7QUFBNUUsQ0FBekI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRztBQUFFYixFQUFBQSxFQUFFLEVBQUVMLHdEQUFOO0FBQXNCTyxFQUFBQSxFQUFFLEVBQUVQLHdEQUExQjtBQUEwQ1MsRUFBQUEsRUFBRSxFQUFFVCx3REFBOUM7QUFBOERXLEVBQUFBLEVBQUUsRUFBRVgsd0RBQWNzQjtBQUFoRixDQUExQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHO0FBQUVsQixFQUFBQSxFQUFFLEVBQUVMLHVEQUFOO0FBQXFCTyxFQUFBQSxFQUFFLEVBQUVQLHVEQUF6QjtBQUF3Q1MsRUFBQUEsRUFBRSxFQUFFVCx1REFBNUM7QUFBMkRXLEVBQUFBLEVBQUUsRUFBRVgsdURBQWEyQjtBQUE1RSxDQUF6QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHO0FBQUV2QixFQUFB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QTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtHQUFBQSxlQUFBQTs7QUF3Q0wsSUFBS0MsU0FBWjs7V0FBWUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7R0FBQUEsY0FBQUE7O0FBY0wsSUFBS0MsVUFBWjs7V0FBWUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7R0FBQUEsZUFBQUE7O0FBUUwsSUFBS0MsUUFBWjs7V0FBWUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7R0FBQUEsYUFBQUE7O0FBZ0JMLElBQUtDLGdCQUFaOztXQUFZQTtBQUFBQSxF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QUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0FBQUFBLEVBQUFBLFVBQUFBO0dBQUFBLGNBQUFBOztBQWlFTCxJQUFLNkIsYUFBWjs7V0FBWUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7QUFBQUEsRUFBQUE7R0FBQUEsa0JBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVaOztBQUNBO0FBRUE7O0FBb0NBO0FBQ08sU0FBUzlRLEdBQVQsQ0FBZ0J3RSxLQUFoQixFQUFxQ3dNLEtBQXJDLEVBQW1FO0FBQUE7O0FBQ3RFLE1BQUlBLEtBQUssSUFBSXhNLEtBQUssQ0FBQ2pELE1BQW5CLEVBQTJCO0FBQ3ZCLFdBQU9sVixTQUFQO0FBQ0g7O0FBQ0QsTUFBSXlYLEtBQUssQ0FBQ0MsT0FBTixDQUFjUyxLQUFkLENBQUosRUFBMEI7QUFDdEIsV0FBT0EsS0FBSyxDQUFDd00sS0FBRCxDQUFaO0FBQ0g7O0FBRUQseUJBQU94TSxLQUFLLENBQUN3TSxLQUFELENBQVoscUJBQU8sYUFBY3psQixLQUFyQjtBQUNIO0FBRU0sTUFBTTBsQixTQUFTLEdBQUdqUixHQUFsQjtBQUVQOztBQUNPLFNBQVNrUixVQUFULENBQXVCQyxJQUF2QixFQUEwRDtBQUFBOztBQUM3RCxNQUFJQSxJQUFJLElBQUksV0FBV0EsSUFBbkIsb0JBQTRCQSxJQUFELENBQWNDLFdBQXpDLGFBQTJCLGFBQTJCblYsSUFBM0IsQ0FBZ0NoQixRQUFoQyxDQUF5QyxXQUF6QyxDQUEvQixFQUFzRjtBQUNsRixXQUFPa1csSUFBUCxvQkFBT0EsSUFBSSxDQUFFNWxCLEtBQWI7QUFDSDs7QUFFRCxTQUFPNGxCLElBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNuYyxHQUFULENBQW1Cd1AsS0FBbkIsRUFBd0N0QyxFQUF4QyxFQUFxRztBQUN4RyxNQUFJNEIsS0FBSyxDQUFDQyxPQUFOLENBQWNTLEtBQWQsQ0FBSixFQUEwQjtBQUN0QixXQUFPQSxLQUFLLENBQUN4UCxHQUFOLENBQVVrTixFQUFWLENBQVA7QUFDSDs7QUFDRCxTQUFPc0MsS0FBSyxDQUFDeFAsR0FBTixDQUFVLENBQUN3TSxPQUFELEVBQVV3UCxLQUFWLEVBQWlCSyxHQUFqQixLQUF5Qm5QLEVBQUUsQ0FBQ1YsT0FBRCxvQkFBQ0EsT0FBTyxDQUFFalcsS0FBVixFQUFpQnlsQixLQUFqQixFQUF3QkssR0FBeEIsQ0FBckMsQ0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsS0FBVCxDQUFrQjlNLEtBQWxCLEVBQXVDdEMsRUFBdkMsRUFBOEc7QUFDakgsTUFBSTRCLEtBQUssQ0FBQ0MsT0FBTixDQUFjUyxLQUFkLENBQUosRUFBMEI7QUFDdEIsV0FBT0EsS0FBSyxDQUFDOE0sS0FBTixDQUFZcFAsRUFBWixDQUFQO0FBQ0g7O0FBRUQsT0FBSyxJQUFJOE8sS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUd4TSxLQUFLLENBQUNqRCxNQUFsQyxFQUEwQ3lQLEtBQUssRUFBL0MsRUFBbUQ7QUFDL0MsVUFBTXhQLE9BQU8sR0FBR3lQLFNBQVMsQ0FBQ3pNLEtBQUQsRUFBUXdNLEtBQVIsQ0FBekI7O0FBQ0EsUUFBSSxDQUFDOU8sRUFBRSxDQUFDVixPQUFELEVBQVV3UCxLQUFWLEVBQWlCeE0sS0FBakIsQ0FBUCxFQUFnQztBQUM1QixhQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELFNBQU8sSUFBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2dKLElBQVQsQ0FBaUJoSixLQUFqQixFQUFzQ3RDLEVBQXRDLEVBQTZHO0FBQ2hILE1BQUk0QixLQUFLLENBQUNDLE9BQU4sQ0FBY1MsS0FBZCxDQUFKLEVBQTBCO0FBQ3RCLFdBQU9BLEtBQUssQ0FBQ2dKLElBQU4sQ0FBV3RMLEVBQVgsQ0FBUDtBQUNIOztBQUVELE9BQUssSUFBSThPLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHeE0sS0FBSyxDQUFDakQsTUFBbEMsRUFBMEN5UCxLQUFLLEVBQS9DLEVBQW1EO0FBQy9DLFVBQU14UCxPQUFPLEdBQUd5UCxTQUFTLENBQUN6TSxLQUFELEVBQVF3TSxLQUFSLENBQXpCOztBQUNBLFFBQUk5TyxFQUFFLENBQUNWLE9BQUQsRUFBVXdQLEtBQVYsRUFBaUJ4TSxLQUFqQixDQUFOLEVBQStCO0FBQzNCLGFBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQsU0FBTyxLQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTK00sTUFBVCxDQUNIL00sS0FERyxFQUVIZ04sU0FGRyxFQUdBO0FBQ0gsTUFBSTFOLEtBQUssQ0FBQ0MsT0FBTixDQUFjUyxLQUFkLENBQUosRUFBMEI7QUFDdEIsV0FBT0EsS0FBSyxDQUFDK00sTUFBTixDQUFhQyxTQUFiLENBQVA7QUFDSDs7QUFFRCxRQUFNbFEsTUFBTSxHQUFHLEVBQWY7O0FBRUEsT0FBSyxJQUFJMFAsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUd4TSxLQUFLLENBQUNqRCxNQUFsQyxFQUEwQ3lQLEtBQUssRUFBL0MsRUFBbUQ7QUFBQTs7QUFDL0MsVUFBTXhQLE9BQU8sb0JBQUdnRCxLQUFLLENBQUN3TSxLQUFELENBQVIscUJBQUcsY0FBY3psQixLQUE5Qjs7QUFDQSxRQUFJaW1CLFNBQVMsQ0FBQ2hRLE9BQUQsRUFBVXdQLEtBQVYsRUFBaUJ4TSxLQUFqQixDQUFiLEVBQXNDO0FBQ2xDbEQsTUFBQUEsTUFBTSxDQUFDZ0QsSUFBUCxDQUFZOUMsT0FBWjtBQUNIO0FBQ0o7O0FBRUQsU0FBT0YsTUFBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNnRCxJQUFULENBQWlCRSxLQUFqQixFQUFzQzJNLElBQXRDLEVBQW9EO0FBQ3ZELE1BQUlyTixLQUFLLENBQUNDLE9BQU4sQ0FBY1MsS0FBZCxDQUFKLEVBQTBCO0FBQ3RCQSxJQUFBQSxLQUFLLENBQUNGLElBQU4sQ0FBVzZNLElBQVg7QUFDQSxXQUFPM00sS0FBUDtBQUNIOztBQUNELFFBQU0sSUFBSTZILEtBQUosQ0FBVyw0Q0FBWCxDQUFOO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN0SyxHQUFULENBQWdCeUMsS0FBaEIsRUFBcUN3TSxLQUFyQyxFQUFvREcsSUFBcEQsRUFBa0U7QUFDckUsTUFBSXJOLEtBQUssQ0FBQ0MsT0FBTixDQUFjUyxLQUFkLENBQUosRUFBMEI7QUFDdEJBLElBQUFBLEtBQUssQ0FBQ3dNLEtBQUQsQ0FBTCxHQUFlRyxJQUFmO0FBQ0EsV0FBTzNNLEtBQVA7QUFDSDs7QUFDRCxRQUFNLElBQUk2SCxLQUFKLENBQVcsNENBQVgsQ0FBTjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNHLEdBQVQsQ0FBZ0JoSSxLQUFoQixFQUFxQ3dNLEtBQUssR0FBR3hNLEtBQUssQ0FBQ2pELE1BQU4sR0FBZSxDQUE1RCxFQUE4RTtBQUNqRixNQUFJdUMsS0FBSyxDQUFDQyxPQUFOLENBQWNTLEtBQWQsQ0FBSixFQUEwQjtBQUN0QixXQUFPQSxLQUFLLENBQUNpTixNQUFOLENBQWFULEtBQWIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBUDtBQUNIOztBQUNELFFBQU0sSUFBSTNFLEtBQUosQ0FBVyw0Q0FBWCxDQUFOO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN6YyxRQUFULENBQXFCNFUsS0FBckIsRUFBMEMyTSxJQUExQyxFQUFtREssU0FBbkQsRUFBOEY7QUFDakcsT0FBSyxJQUFJUixLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR3hNLEtBQUssQ0FBQ2pELE1BQWxDLEVBQTBDeVAsS0FBSyxFQUEvQyxFQUFtRDtBQUMvQyxVQUFNeFAsT0FBTyxHQUFHeVAsU0FBUyxDQUFDek0sS0FBRCxFQUFRd00sS0FBUixDQUF6Qjs7QUFDQSxRQUFJUSxTQUFTLElBQUlBLFNBQVMsQ0FBQ2hRLE9BQUQsQ0FBMUIsRUFBcUM7QUFDakMsYUFBTyxJQUFQO0FBQ0gsS0FGRCxNQUVPLElBQUkyUCxJQUFJLEtBQUszUCxPQUFiLEVBQXNCO0FBQ3pCLGFBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBTyxLQUFQO0FBQ0g7QUFFRDs7QUFDTyxTQUFTa1EsU0FBVCxDQUFzQmxOLEtBQXRCLEVBQW1EO0FBQ3RELFNBQU9BLEtBQUssQ0FBQ2pELE1BQU4sR0FBZSxDQUF0QjtBQUNIO0FBRUQ7O0FBQ08sU0FBU29RLGFBQVQsQ0FBMEJuTixLQUExQixFQUF1RDtBQUMxRCxTQUFPaE0sSUFBSSxDQUFDb1osR0FBTCxDQUFTLENBQVQsRUFBWXBOLEtBQUssQ0FBQ2pELE1BQU4sR0FBZSxDQUEzQixDQUFQO0FBQ0g7QUFFRDs7QUFDTyxTQUFTc1EsV0FBVCxDQUF3QnJOLEtBQXhCLEVBQTREO0FBQy9ELE1BQUlBLEtBQUssQ0FBQ2pELE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIsV0FBT2xWLFNBQVA7QUFDSDs7QUFDRCxTQUFPMlQsR0FBRyxDQUFDd0UsS0FBRCxFQUFRQSxLQUFLLENBQUNqRCxNQUFOLEdBQWUsQ0FBdkIsQ0FBVjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN1TSxLQUFULENBQWtCdEosS0FBbEIsRUFBdUNzTixTQUFTLEdBQUcsQ0FBbkQsRUFBc0RDLE9BQU8sR0FBR3ZOLEtBQUssQ0FBQ2pELE1BQU4sR0FBZSxDQUEvRSxFQUErRjtBQUNsRyxTQUFPO0FBQ0gsS0FBQ3lRLE1BQU0sQ0FBQ0MsUUFBUixJQUFvQjtBQUNoQixVQUFJQyxTQUFTLEdBQUcxWixJQUFJLENBQUNvWixHQUFMLENBQVNFLFNBQVQsRUFBb0IsQ0FBcEIsQ0FBaEI7QUFDQSxZQUFNSyxRQUFRLEdBQUczWixJQUFJLENBQUNDLEdBQUwsQ0FBU3NaLE9BQVQsRUFBa0JKLGFBQWEsQ0FBQ25OLEtBQUQsQ0FBL0IsQ0FBakI7QUFDQSxhQUFPO0FBQ0g0TixRQUFBQSxJQUFJLEVBQUUsZ0JBQStCO0FBQ2pDLGNBQUlGLFNBQVMsR0FBR0MsUUFBaEIsRUFBMEI7QUFDdEIsbUJBQU87QUFBRUUsY0FBQUEsSUFBSSxFQUFFLElBQVI7QUFBYzltQixjQUFBQSxLQUFLLEVBQUU7QUFBckIsYUFBUDtBQUNIOztBQUNELGdCQUFNNGxCLElBQUksR0FBRzNNLEtBQUssQ0FBQzBOLFNBQVMsRUFBVixDQUFsQjs7QUFDQSxjQUFJZixJQUFKLEVBQVU7QUFDTixtQkFBTztBQUFFNWxCLGNBQUFBLEtBQUssRUFBRTJsQixVQUFVLENBQUNDLElBQUQsQ0FBbkI7QUFBZ0NrQixjQUFBQSxJQUFJLEVBQUU7QUFBdEMsYUFBUDtBQUNILFdBRkQsTUFFTztBQUNILG1CQUFPO0FBQUVBLGNBQUFBLElBQUksRUFBRSxJQUFSO0FBQWM5bUIsY0FBQUEsS0FBSyxFQUFFO0FBQXJCLGFBQVA7QUFDSDtBQUNKO0FBWEUsT0FBUDtBQWFIOztBQWpCRSxHQUFQO0FBbUJIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUyttQixJQUFULENBQWlCOU4sS0FBakIsRUFBc0MrTixLQUF0QyxFQUFxRDtBQUN4RCxTQUFPekUsS0FBSyxDQUFDdEosS0FBRCxFQUFRaE0sSUFBSSxDQUFDb1osR0FBTCxDQUFTLENBQVQsRUFBWXBOLEtBQUssQ0FBQ2pELE1BQU4sR0FBZSxDQUFmLEdBQW1CZ1IsS0FBL0IsQ0FBUixFQUErQ2IsU0FBUyxDQUFDbE4sS0FBRCxDQUF4RCxDQUFaO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2lOLE1BQVQsQ0FBbUJqTixLQUFuQixFQUF3Q29ILEtBQXhDLEVBQXVENEcsV0FBdkQsRUFBOEY7QUFDakcsTUFBSTFPLEtBQUssQ0FBQ0MsT0FBTixDQUFjUyxLQUFkLENBQUosRUFBMEI7QUFDdEIsV0FBT0EsS0FBSyxDQUFDaU4sTUFBTixDQUFhN0YsS0FBYixFQUFvQjRHLFdBQXBCLENBQVA7QUFDSDs7QUFDRCxRQUFNLElBQUluRyxLQUFKLENBQVcsNENBQVgsQ0FBTjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU29HLFFBQVQsQ0FDSGpPLEtBREcsRUFFSGdOLFNBRkcsRUFHVTtBQUNiLE9BQUssSUFBSVIsS0FBSyxHQUFHeE0sS0FBSyxDQUFDakQsTUFBTixHQUFlLENBQWhDLEVBQW1DeVAsS0FBSyxJQUFJLENBQTVDLEVBQStDQSxLQUFLLEVBQXBELEVBQXdEO0FBQ3BELFVBQU14UCxPQUFPLEdBQUcwUCxVQUFVLENBQUMxTSxLQUFLLENBQUN3TSxLQUFELENBQU4sQ0FBMUI7O0FBQ0EsUUFBSVEsU0FBUyxDQUFDaFEsT0FBRCxFQUFVd1AsS0FBVixFQUFpQnhNLEtBQWpCLENBQWIsRUFBc0M7QUFDbEMsYUFBT2hELE9BQVA7QUFDSDtBQUNKOztBQUVELFNBQU9uVixTQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTZ2lCLElBQVQsQ0FDSDdKLEtBREcsRUFFSGdOLFNBRkcsRUFHVTtBQUNiLE9BQUssSUFBSVIsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUd4TSxLQUFLLENBQUNqRCxNQUFsQyxFQUEwQ3lQLEtBQUssRUFBL0MsRUFBbUQ7QUFDL0MsVUFBTXhQLE9BQU8sR0FBRzBQLFVBQVUsQ0FBQzFNLEtBQUssQ0FBQ3dNLEtBQUQsQ0FBTixDQUExQjs7QUFDQSxRQUFJUSxTQUFTLENBQUNoUSxPQUFELEVBQVV3UCxLQUFWLEVBQWlCeE0sS0FBakIsQ0FBYixFQUFzQztBQUNsQyxhQUFPaEQsT0FBUDtBQUNIO0FBQ0o7O0FBRUQsU0FBT25WLFNBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTNE8sUUFBVCxDQUFxQnVKLEtBQXJCLEVBQTBDMk0sSUFBMUMsRUFBNEQ7QUFDL0QsT0FBSyxJQUFJSCxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR3hNLEtBQUssQ0FBQ2pELE1BQWxDLEVBQTBDeVAsS0FBSyxFQUEvQyxFQUFtRDtBQUMvQyxVQUFNeFAsT0FBTyxHQUFHeVAsU0FBUyxDQUFDek0sS0FBRCxFQUFRd00sS0FBUixDQUF6Qjs7QUFDQSxRQUFJeFAsT0FBTyxLQUFLMlAsSUFBaEIsRUFBc0I7QUFDbEIsYUFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFFRCxTQUFPLEtBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN1QixTQUFULENBQ0hsTyxLQURHLEVBRUhnTixTQUZHLEVBR0h0UCxFQUhHLEVBSUE7QUFDSCxRQUFNWixNQUFXLEdBQUcsRUFBcEI7O0FBQ0EsT0FBSyxJQUFJMFAsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUd4TSxLQUFLLENBQUNqRCxNQUFsQyxFQUEwQ3lQLEtBQUssRUFBL0MsRUFBbUQ7QUFDL0MsVUFBTUcsSUFBSSxHQUFHRixTQUFTLENBQUN6TSxLQUFELEVBQVF3TSxLQUFSLENBQXRCOztBQUNBLFFBQUlRLFNBQVMsQ0FBQ0wsSUFBRCxFQUFPSCxLQUFQLEVBQWN4TSxLQUFkLENBQWIsRUFBbUM7QUFDL0JsRCxNQUFBQSxNQUFNLENBQUNnRCxJQUFQLENBQVlwQyxFQUFFLENBQUNpUCxJQUFELEVBQU9ILEtBQVAsRUFBY3hNLEtBQWQsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0QsU0FBT2xELE1BQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3FSLFNBQVQsQ0FDSG5PLEtBREcsRUFFSHRDLEVBRkcsRUFHQTtBQUNILFNBQU93USxTQUFTLENBQUNsTyxLQUFELEVBQXFDdU0sdURBQXJDLEVBQW9EN08sRUFBcEQsQ0FBaEI7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVMwUSxTQUFULENBQXNCcE8sS0FBdEIsRUFBMkNnTixTQUEzQyxFQUFnSDtBQUNuSCxPQUFLLElBQUlSLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHeE0sS0FBSyxDQUFDakQsTUFBbEMsRUFBMEN5UCxLQUFLLEVBQS9DLEVBQW1EO0FBQy9DLFVBQU1HLElBQUksR0FBR0YsU0FBUyxDQUFDek0sS0FBRCxFQUFRd00sS0FBUixDQUF0Qjs7QUFDQSxRQUFJUSxTQUFTLENBQUNMLElBQUQsRUFBT0gsS0FBUCxFQUFjeE0sS0FBZCxDQUFiLEVBQW1DO0FBQy9CLGFBQU93TSxLQUFQO0FBQ0g7QUFDSjs7QUFFRCxTQUFPM2tCLFNBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN3bUIsYUFBVCxDQUNIck8sS0FERyxFQUVIZ04sU0FGRyxFQUdMO0FBQ0UsT0FBSyxJQUFJUixLQUFLLEdBQUd4TSxLQUFLLENBQUNqRCxNQUFOLEdBQWUsQ0FBaEMsRUFBbUN5UCxLQUFLLElBQUksQ0FBNUMsRUFBK0NBLEtBQUssRUFBcEQsRUFBd0Q7QUFDcEQsVUFBTUcsSUFBSSxHQUFHRixTQUFTLENBQUN6TSxLQUFELEVBQVF3TSxLQUFSLENBQXRCOztBQUNBLFFBQUlRLFNBQVMsQ0FBQ0wsSUFBRCxFQUFPSCxLQUFQLEVBQWN4TSxLQUFkLENBQWIsRUFBbUM7QUFDL0IsYUFBT3dNLEtBQVA7QUFDSDtBQUNKOztBQUVELFNBQU8za0IsU0FBUDtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUzBoQixJQUFULENBQWlCdkosS0FBakIsRUFBc0NzTyxTQUFTLEdBQUcsR0FBbEQsRUFBdUQ7QUFDMUQsTUFBSXhSLE1BQU0sR0FBRyxFQUFiOztBQUVBLE9BQUssSUFBSTBQLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHeE0sS0FBSyxDQUFDakQsTUFBbEMsRUFBMEN5UCxLQUFLLEVBQS9DLEVBQW1EO0FBQy9DLFFBQUlBLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWDFQLE1BQUFBLE1BQU0sSUFBSXdSLFNBQVY7QUFDSDs7QUFFRCxVQUFNdFIsT0FBTyxHQUFHeVAsU0FBUyxDQUFDek0sS0FBRCxFQUFRd00sS0FBUixDQUF6QjtBQUNBLFVBQU1vQixJQUFJLEdBQUc1USxPQUFPLEtBQUtuVixTQUFaLElBQXlCbVYsT0FBTyxLQUFLLElBQXJDLEdBQTRDLEVBQTVDLEdBQWlEdVIsTUFBTSxDQUFDdlIsT0FBRCxDQUFwRTtBQUNBRixJQUFBQSxNQUFNLElBQUk4USxJQUFWO0FBQ0g7O0FBRUQsU0FBTzlRLE1BQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNqVyxNQUFULENBQ0htWixLQURHLEVBRUhnTixTQUZHLEVBR0g1YixZQUhHLEVBSUw7QUFDRSxNQUFJa08sS0FBSyxDQUFDQyxPQUFOLENBQWNTLEtBQWQsQ0FBSixFQUEwQjtBQUN0QixXQUFPQSxLQUFLLENBQUNuWixNQUFOLENBQWFtbUIsU0FBYixFQUF3QjViLFlBQXhCLENBQVA7QUFDSDs7QUFFRCxNQUFJMEwsTUFBUyxHQUFHMUwsWUFBaEI7O0FBRUEsT0FBSyxJQUFJb2IsS0FBSyxHQUFHLENBQWpCLEVBQW9CQSxLQUFLLEdBQUd4TSxLQUFLLENBQUNqRCxNQUFsQyxFQUEwQ3lQLEtBQUssRUFBL0MsRUFBbUQ7QUFDL0MsVUFBTXhQLE9BQU8sR0FBR3lQLFNBQVMsQ0FBQ3pNLEtBQUQsRUFBUXdNLEtBQVIsQ0FBekI7QUFDQTFQLElBQUFBLE1BQU0sR0FBR2tRLFNBQVMsQ0FBQ2xRLE1BQUQsRUFBU0UsT0FBVCxFQUFrQndQLEtBQWxCLEVBQXlCeE0sS0FBekIsQ0FBbEI7QUFDSDs7QUFFRCxTQUFPbEQsTUFBUDtBQUNIOzs7Ozs7Ozs7O0FDemJEO0FBQ0EsQ0FBQyxZQUFZO0FBQ1Q7QUFDQSxNQUFJMFIsd0JBQUo7QUFDQSxNQUFJQyxlQUFKO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLENBQUMsQ0FBbEI7QUFFQXJpQixFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXdDbkIsS0FBRCxJQUFXO0FBQzlDO0FBQ0FrQixJQUFBQSxRQUFRLENBQUNzaUIsWUFBVCxHQUF3QkMsS0FBeEIsR0FGOEMsQ0FJOUM7O0FBQ0EsUUFBSXpqQixLQUFLLENBQUNFLE1BQU4sQ0FBYXdqQixNQUFiLElBQXVCSCxVQUFVLEtBQUssQ0FBQyxDQUEzQyxFQUE4QztBQUMxQ0YsTUFBQUEsd0JBQXdCLEdBQUdyakIsS0FBSyxDQUFDRSxNQUFqQztBQUNBb2pCLE1BQUFBLGVBQWUsR0FBR0Qsd0JBQXdCLENBQUNNLHFCQUF6QixFQUFsQjtBQUNBTixNQUFBQSx3QkFBd0IsQ0FBQ08saUJBQXpCLENBQTJDLENBQTNDLEVBQThDLENBQTlDO0FBQ0g7QUFDSixHQVZEO0FBWUExaUIsRUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF3Q25CLEtBQUQsSUFBVztBQUM5QztBQUNBLFFBQUl1akIsVUFBVSxLQUFLLENBQUMsQ0FBaEIsSUFBcUJ2akIsS0FBSyxDQUFDRSxNQUFOLENBQWF3akIsTUFBbEMsSUFBNEMxakIsS0FBSyxDQUFDRSxNQUFOLEtBQWlCbWpCLHdCQUFqRSxFQUEyRjtBQUN2RkUsTUFBQUEsVUFBVSxHQUFHRix3QkFBd0IsQ0FBQ1EsY0FBdEM7QUFDSCxLQUo2QyxDQUs5Qzs7O0FBQ0EsUUFBSU4sVUFBVSxHQUFHLENBQUMsQ0FBbEIsRUFBcUI7QUFDakI7QUFDQSxZQUFNbkosQ0FBQyxHQUFHdlIsSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ29aLEdBQUwsQ0FBU2ppQixLQUFLLENBQUNvYSxDQUFmLEVBQWtCa0osZUFBZSxDQUFDcmUsSUFBbEMsQ0FBVCxFQUFrRHFlLGVBQWUsQ0FBQzNKLEtBQWxFLENBQVY7QUFDQSxZQUFNVyxDQUFDLEdBQUd6UixJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDb1osR0FBTCxDQUFTamlCLEtBQUssQ0FBQ3NhLENBQWYsRUFBa0JnSixlQUFlLENBQUM1SixHQUFsQyxDQUFULEVBQWlENEosZUFBZSxDQUFDMUosTUFBakUsQ0FBVixDQUhpQixDQUlqQjtBQUNBOztBQUNBLFlBQU1rSyxLQUFLLEdBQUc1aUIsUUFBUSxDQUFDNmlCLFdBQVQsQ0FBcUIsWUFBckIsQ0FBZDtBQUNBRCxNQUFBQSxLQUFLLENBQUNFLGNBQU4sQ0FBcUIsV0FBckIsRUFBa0MsSUFBbEMsRUFBd0MsSUFBeEMsRUFBOEMsSUFBOUMsRUFBb0QsQ0FBcEQsRUFBdUQ1SixDQUF2RCxFQUEwREUsQ0FBMUQsRUFBNkRGLENBQTdELEVBQWdFRSxDQUFoRSxFQUFtRSxLQUFuRSxFQUEwRSxLQUExRSxFQUFpRixLQUFqRixFQUF3RixLQUF4RixFQUErRixDQUEvRixFQUFrRyxJQUFsRztBQUNBK0ksTUFBQUEsd0JBQXdCLENBQUNZLGFBQXpCLENBQXVDSCxLQUF2QyxFQVJpQixDQVNqQjs7QUFDQSxZQUFNSSxjQUFjLEdBQUdiLHdCQUF3QixDQUFDYyxZQUFoRCxDQVZpQixDQVdqQjs7QUFDQSxVQUFJRCxjQUFjLEdBQUdYLFVBQXJCLEVBQWlDO0FBQzdCRixRQUFBQSx3QkFBd0IsQ0FBQ08saUJBQXpCLENBQTJDTCxVQUEzQyxFQUF1RFcsY0FBdkQsRUFBdUUsU0FBdkU7QUFDSCxPQUZELE1BRU87QUFDSGIsUUFBQUEsd0JBQXdCLENBQUNPLGlCQUF6QixDQUEyQ00sY0FBM0MsRUFBMkRYLFVBQTNELEVBQXVFLFVBQXZFO0FBQ0g7QUFDSjtBQUNKLEdBeEJEO0FBMEJBcmlCLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsTUFBTTtBQUN2QztBQUNBa2lCLElBQUFBLHdCQUF3QixHQUFHLElBQTNCO0FBQ0FFLElBQUFBLFVBQVUsR0FBRyxDQUFDLENBQWQ7QUFDSCxHQUpEO0FBTUEsTUFBSTFSLE9BQUo7QUFDQSxNQUFJbFEsT0FBSjtBQUNBLE1BQUl5aUIsbUJBQUo7QUFDQSxNQUFJQyxtQkFBSjtBQUNBLE1BQUlDLGlCQUFKLENBdERTLENBd0RUOztBQUNBcGpCLEVBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBdUNuQixLQUFELElBQVc7QUFDN0MsUUFBSSxDQUFDQSxLQUFLLENBQUNFLE1BQU4sQ0FBYXdqQixNQUFsQixFQUEwQjtBQUN0QjtBQUNIOztBQUNEeGlCLElBQUFBLFFBQVEsQ0FBQ3NpQixZQUFULEdBQXdCQyxLQUF4QjtBQUVBNVIsSUFBQUEsT0FBTyxHQUFHN1IsS0FBSyxDQUFDRSxNQUFoQjtBQUNBeUIsSUFBQUEsT0FBTyxHQUFHM0IsS0FBSyxDQUFDRSxNQUFOLENBQWF0RSxLQUF2QjtBQUNBd29CLElBQUFBLG1CQUFtQixHQUFHdlMsT0FBTyxDQUFDZ1MsY0FBOUI7QUFDQVEsSUFBQUEsbUJBQW1CLEdBQ2YxaUIsT0FBTyxDQUFDNGlCLFdBQVIsQ0FBb0IsR0FBcEIsRUFBeUJILG1CQUF6QixNQUFrRCxDQUFDLENBQW5ELEdBQ016aUIsT0FBTyxDQUFDNGlCLFdBQVIsQ0FBb0IsR0FBcEIsRUFBeUJILG1CQUF6QixJQUFnRCxDQUR0RCxHQUVNLENBSFY7QUFJQUUsSUFBQUEsaUJBQWlCLEdBQ2IzaUIsT0FBTyxDQUFDMmMsT0FBUixDQUFnQixHQUFoQixFQUFxQjhGLG1CQUFyQixNQUE4QyxDQUFDLENBQS9DLEdBQ016aUIsT0FBTyxDQUFDMmMsT0FBUixDQUFnQixHQUFoQixFQUFxQjhGLG1CQUFyQixDQUROLEdBRU16aUIsT0FBTyxDQUFDaVEsTUFIbEI7QUFJQUMsSUFBQUEsT0FBTyxDQUFDK1IsaUJBQVIsQ0FBMEJTLG1CQUExQixFQUErQ0MsaUJBQS9DLEVBQWtFLFNBQWxFO0FBQ0gsR0FsQkQ7QUFtQkgsQ0E1RUQsS0E4RUE7OztBQUNBLENBQUMsWUFBWTtBQUNUO0FBQ0EsTUFBSUUsbUJBQW1CLEdBQUcsSUFBMUI7QUFFQXRqQixFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXdDbkIsS0FBRCxJQUFXO0FBQzlDO0FBQ0FrQixJQUFBQSxRQUFRLENBQUNzaUIsWUFBVCxHQUF3QkMsS0FBeEIsR0FGOEMsQ0FHOUM7O0FBQ0EsUUFBSXpqQixLQUFLLENBQUNYLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ1csS0FBSyxDQUFDRSxNQUFOLENBQWF3akIsTUFBcEMsSUFBOEMsQ0FBQ2MsbUJBQW5ELEVBQXdFO0FBQ3BFQSxNQUFBQSxtQkFBbUIsR0FBR3RqQixRQUFRLENBQUN1akIsc0JBQVQsQ0FBZ0N6a0IsS0FBSyxDQUFDb2EsQ0FBdEMsRUFBeUNwYSxLQUFLLENBQUNzYSxDQUEvQyxDQUF0QjtBQUNIO0FBQ0osR0FQRDtBQVNBcFosRUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF3Q25CLEtBQUQsSUFBVztBQUM5QztBQUNBLFFBQUlBLEtBQUssQ0FBQ1gsTUFBTixLQUFpQixDQUFqQixJQUFzQixDQUFDVyxLQUFLLENBQUNFLE1BQU4sQ0FBYXdqQixNQUFwQyxJQUE4Q2MsbUJBQWxELEVBQXVFO0FBQ25FLFlBQU1FLGtCQUFrQixHQUFHeGpCLFFBQVEsQ0FBQ3VqQixzQkFBVCxDQUFnQ3prQixLQUFLLENBQUNvYSxDQUF0QyxFQUF5Q3BhLEtBQUssQ0FBQ3NhLENBQS9DLENBQTNCOztBQUVBLFVBQUksQ0FBQ29LLGtCQUFrQixDQUFDQyxVQUFwQixJQUFrQyxDQUFDSCxtQkFBbUIsQ0FBQ0csVUFBM0QsRUFBdUU7QUFDbkU7QUFDSDs7QUFDRCxZQUFNQyxTQUFTLEdBQUcxakIsUUFBUSxDQUFDc2lCLFlBQVQsRUFBbEI7QUFDQW9CLE1BQUFBLFNBQVMsQ0FBQ0MsZ0JBQVYsQ0FDSUwsbUJBQW1CLENBQUNHLFVBRHhCLEVBRUlILG1CQUFtQixDQUFDTSxNQUZ4QixFQUdJSixrQkFBa0IsQ0FBQ0MsVUFIdkIsRUFJSUQsa0JBQWtCLENBQUNJLE1BSnZCO0FBTUg7QUFDSixHQWhCRDtBQWtCQTVqQixFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLE1BQU07QUFDdkM7QUFDQXFqQixJQUFBQSxtQkFBbUIsR0FBRyxJQUF0QjtBQUNILEdBSEQ7QUFJSCxDQW5DRDs7Ozs7Ozs7Ozs7Ozs7OztBQzlFTyxTQUFTTyxVQUFULENBQXVCdkQsSUFBdkIsRUFBK0Q7QUFDbEUsU0FBT0EsSUFBSSxLQUFLLElBQVQsSUFBaUJBLElBQUksS0FBSzlrQixTQUFqQztBQUNIO0FBRU0sU0FBUzBrQixhQUFULENBQTBCSSxJQUExQixFQUFxRTtBQUN4RSxTQUFPdUQsVUFBVSxDQUFDdkQsSUFBRCxDQUFWLEtBQXFCLEtBQTVCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSTSxTQUFTempCLFNBQVQsQ0FBbUJpbkIsU0FBbkIsRUFBOEI7QUFDakNuZSxFQUFBQSxNQUFNLENBQUNvZSxJQUFQLENBQVksV0FBWixFQUF5QkQsU0FBekI7QUFDSDtBQUVNLE1BQU1FLEtBQUssR0FBRztBQUNqQkMsRUFBQUEsYUFBYSxHQUFHO0FBQ1pwbkIsSUFBQUEsU0FBUyxDQUFDLFdBQUQsQ0FBVDtBQUNILEdBSGdCOztBQUlqQnFuQixFQUFBQSxTQUFTLEdBQUc7QUFDUnJuQixJQUFBQSxTQUFTLENBQUMsTUFBRCxDQUFUO0FBQ0gsR0FOZ0I7O0FBT2pCc25CLEVBQUFBLE9BQU8sR0FBRztBQUNOdG5CLElBQUFBLFNBQVMsQ0FBQyxNQUFELENBQVQ7QUFDSDs7QUFUZ0IsQ0FBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNXQSxJQUFLNEcsU0FBWjs7V0FBWUE7QUFBQUEsRUFBQUEsVUFBQUE7QUFBQUEsRUFBQUEsVUFBQUE7R0FBQUEsY0FBQUE7O0FBU1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU1IsTUFBVCxDQUFnQm1oQixHQUFoQixFQUE2QkMsT0FBN0IsRUFBK0M7QUFDbEQsU0FBT0QsR0FBRyxDQUFDRSxPQUFKLENBQVksVUFBWixFQUF5QkMsS0FBRCxJQUFXckMsTUFBTSxDQUFDbUMsT0FBTyxDQUFDRSxLQUFLLENBQUN0SCxLQUFOLENBQVksQ0FBWixFQUFlLENBQUMsQ0FBaEIsQ0FBRCxDQUFSLENBQXpDLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTdUgsWUFBVCxDQUFzQkosR0FBdEIsRUFBbUNDLE9BQW5DLEVBQXFEO0FBQ3hELFNBQU9ELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLHNCQUFaLEVBQXFDQyxLQUFELElBQVc7QUFDbEQsVUFBTUUsR0FBRyxHQUFHRixLQUFLLENBQUNuSCxPQUFOLENBQWMsR0FBZCxNQUF1QixDQUF2QixHQUEyQixDQUEzQixHQUErQixDQUEzQztBQUNBLFdBQU84RSxNQUFNLENBQUNtQyxPQUFPLENBQUNFLEtBQUssQ0FBQ3RILEtBQU4sQ0FBWXdILEdBQVosRUFBaUIsQ0FBQ0EsR0FBbEIsQ0FBRCxDQUFSLENBQWI7QUFDSCxHQUhNLENBQVA7QUFJSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsWUFBVCxDQUFzQk4sR0FBdEIsRUFBbUM7QUFDdEMsU0FBT0EsR0FBRyxDQUFDRSxPQUFKLENBQVksTUFBWixFQUFxQkMsS0FBRCxJQUFXO0FBQ2xDLFdBQU9BLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0ksV0FBVCxFQUFQO0FBQ0gsR0FGTSxDQUFQO0FBR0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLGlCQUFULENBQTJCUixHQUEzQixFQUF3QztBQUMzQyxTQUFPQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxJQUFaLEVBQWtCLEdBQWxCLENBQVA7QUFDSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU08sZUFBVCxDQUF5QlQsR0FBekIsRUFBc0M7QUFDekMsU0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPTyxXQUFQLEtBQXVCUCxHQUFHLENBQUNuSCxLQUFKLENBQVUsQ0FBVixDQUE5QjtBQUNIO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNNkgsV0FBVyxHQUFJVixHQUFELElBQWlCO0FBQ3hDLFNBQU9BLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFNBQVosRUFBdUIsTUFBdkIsQ0FBUDtBQUNILENBRk07QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1TLGFBQWEsR0FBSVgsR0FBRCxJQUFpQjtBQUMxQyxTQUFPQSxHQUFHLENBQUNFLE9BQUosQ0FBWSxXQUFaLEVBQXlCLFFBQXpCLENBQVA7QUFDSCxDQUZNOztBQU1QLE1BQU1VLG1CQUFxQyxHQUFHLENBQUM3UixHQUFELEVBQU1tTixJQUFOLEVBQVlILEtBQVosS0FBc0I7QUFDaEUsTUFBSSxFQUFFQSxLQUFLLEdBQUcsQ0FBVixDQUFKLEVBQWtCO0FBQ2QsV0FBTyxDQUFDLEdBQUdoTixHQUFKLEVBQVNtTixJQUFULENBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxVQUFNMkUsSUFBSSxHQUFHOVIsR0FBRyxDQUFDd0ksR0FBSixFQUFiO0FBQ0EsV0FBTyxDQUFDLEdBQUd4SSxHQUFKLEVBQVM4UixJQUFJLEdBQUczRSxJQUFoQixDQUFQO0FBQ0g7QUFDSixDQVBEOztBQVNBLE1BQU00RSxrQkFBb0MsR0FBRyxDQUFDL1IsR0FBRCxFQUFNbU4sSUFBTixFQUFZSCxLQUFaLEtBQXNCO0FBQy9ELE1BQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsV0FBTyxDQUFDRyxJQUFELENBQVA7QUFDSCxHQUZELE1BRU8sSUFBSUgsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNsQixXQUFPLENBQUMsR0FBR2hOLEdBQUosRUFBU21OLElBQUksS0FBSyxHQUFULEdBQWUsTUFBZixHQUF3QkEsSUFBakMsQ0FBUDtBQUNILEdBRk0sTUFFQTtBQUNILFVBQU0yRSxJQUFJLEdBQUc5UixHQUFHLENBQUN3SSxHQUFKLEVBQWI7QUFDQSxXQUFPLENBQUMsR0FBR3hJLEdBQUosRUFBUzhSLElBQUksR0FBRzNFLElBQWhCLENBQVA7QUFDSDtBQUNKLENBVEQ7QUFXQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU02RSxjQUFjLEdBQUcsQ0FBQ0MsYUFBRCxFQUF3Qm5ELFNBQXhCLEVBQTJDbmUsU0FBUyxHQUFHTCxTQUFTLENBQUNNLElBQWpFLEtBQ25CcWhCLGFBQWEsQ0FBQ2xoQixLQUFkLENBQW9CK2QsU0FBcEIsRUFBK0J6bkIsTUFBL0IsQ0FBc0NzSixTQUFTLEtBQUtMLFNBQVMsQ0FBQ00sSUFBeEIsR0FBK0JpaEIsbUJBQS9CLEdBQXFERSxrQkFBM0YsRUFBK0csRUFBL0csQ0FESjs7QUFHTyxNQUFNRyxhQUFhLEdBQUcsQ0FBQ0QsYUFBRCxFQUF3QnRoQixTQUFTLEdBQUdMLFNBQVMsQ0FBQ00sSUFBOUMsS0FBaUU7QUFDMUYsTUFBSXVoQixXQUFxQixHQUFHLEVBQTVCO0FBRUEsUUFBTUMsVUFBVSxHQUFHLHltVEFBbkIsQ0FIMEYsQ0FHekM7O0FBQ2pELFFBQU1DLGNBQWMsR0FBR1YsV0FBVyxDQUFDTSxhQUFELENBQWxDO0FBQ0FELEVBQUFBLGNBQWMsQ0FBQ0ssY0FBRCxFQUFpQixLQUFqQixFQUF3QjFoQixTQUF4QixDQUFkLENBQWlEZ00sT0FBakQsQ0FDSzJWLElBQUQsSUFBV0gsV0FBVyxHQUFHQSxXQUFXLENBQUMzcUIsTUFBWixDQUFtQndxQixjQUFjLENBQUNNLElBQUQsRUFBT0YsVUFBUCxFQUFtQjloQixTQUFTLENBQUNNLElBQTdCLENBQWpDLENBRDdCO0FBR0EsU0FBT3VoQixXQUFQO0FBQ0gsQ0FUTTtBQVdBLE1BQU1JLFlBQVksR0FBRyxDQUFDLE1BQU07QUFDL0I7QUFBdUM7QUFDdkM7QUFDQTtBQUNBLFFBQU1DLGVBQWUsR0FDakIsNHdCQURKLENBSitCLENBTS9CO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQU1DLGlCQUFpQixHQUNuQix3MENBREosQ0FWK0IsQ0FZL0I7QUFDQTtBQUNBOztBQUNBLFFBQU1DLGdCQUFnQixHQUFHLHMyaUJBQXpCLENBZitCLENBZ0IvQjs7QUFDQSxRQUFNQyxzQkFBc0IsR0FBRyxpVEFBL0I7QUFDQTtBQUVBOztBQUNBLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxNQUFKLENBQ2RMLGVBQWUsQ0FBQ00sTUFBaEIsR0FDSSxHQURKLEdBRUlMLGlCQUFpQixDQUFDSyxNQUZ0QixHQUdJLEdBSEosR0FJSUosZ0JBQWdCLENBQUNJLE1BSnJCLEdBS0ksR0FMSixHQU1JSCxzQkFBc0IsQ0FBQ0csTUFQYixFQVFkLEtBUmMsQ0FBbEI7QUFVQSxTQUFRQyxjQUFELElBQ0hBLGNBQWMsQ0FDVDVCLE9BREwsQ0FDYSxTQURiLEVBQ3dCLE1BRHhCLEVBRUtBLE9BRkwsQ0FFYSxJQUZiLEVBRW1CLE1BRm5CLEVBR0tDLEtBSEwsQ0FHV3dCLFNBSFgsQ0FESjtBQUtILENBcEMyQixHQUFyQjtBQXNDUCxNQUFNSSxzQkFBc0IsR0FBRyxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLENBQS9CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLFVBQVUsR0FBRyxDQUFDaEIsYUFBRCxFQUF3QnRoQixTQUFTLEdBQUdMLFNBQVMsQ0FBQ00sSUFBOUMsS0FBdUQ7QUFDN0UsUUFBTXNpQixRQUFRLEdBQUczbEIsQ0FBQyxDQUFDQyxPQUFGLENBQVVDLFFBQVYsQ0FBbUJDLGFBQW5CLEdBQW1DeWxCLFdBQW5DLEVBQWpCOztBQUVBLE1BQUlILHNCQUFzQixDQUFDL2IsUUFBdkIsQ0FBZ0NpYyxRQUFoQyxDQUFKLEVBQStDO0FBQzNDLFdBQU9YLFlBQVksQ0FBQ04sYUFBRCxDQUFuQjtBQUNIOztBQUVELFNBQU9DLGFBQWEsQ0FBQ0QsYUFBRCxFQUFnQnRoQixTQUFoQixDQUFwQjtBQUNILENBUk07QUFVQSxNQUFNTixZQUFZLEdBQUcsQ0FBQ0ksSUFBRCxFQUFlRSxTQUFmLEVBQXFDSCxPQUFyQyxLQUN4QkMsSUFBSSxDQUFDTSxLQUFMLENBQVcsc0JBQVgsRUFBbUNDLEdBQW5DLENBQXdDb2lCLFNBQUQsSUFBdUI7QUFDMUQsTUFBSSxDQUFDNWlCLE9BQUwsRUFBYztBQUFFLFdBQU95aUIsVUFBVSxDQUFDRyxTQUFELEVBQVl6aUIsU0FBWixDQUFqQjtBQUEwQzs7QUFDMUQsU0FBT3lpQixTQUFTLElBQUk1aUIsT0FBYixHQUF1QkEsT0FBTyxDQUFDNGlCLFNBQUQsQ0FBOUIsR0FBNENILFVBQVUsQ0FBQ0csU0FBRCxFQUFZemlCLFNBQVosQ0FBN0Q7QUFDSCxDQUhELENBREc7Ozs7Ozs7Ozs7Ozs7OztBQzlMUCxNQUFNMGlCLG1CQUFOLENBQTBCO0FBQUE7QUFBQSxTQUN0QnZiLE9BRHNCLEdBSWhCLEVBSmdCO0FBQUEsU0FLdEJ3YixZQUxzQixHQUtQLEtBTE87O0FBQUEsU0FvRHRCMW9CLFdBcERzQixHQW9EUGUsS0FBRCxJQUF1QjtBQUNqQyxXQUFLbU0sT0FBTCxDQUFhNkUsT0FBYixDQUFxQixDQUFDO0FBQUU0VyxRQUFBQSxTQUFGO0FBQWExVyxRQUFBQTtBQUFiLE9BQUQsS0FBNkI7QUFDOUMsWUFBSWhSLE1BQTBCLEdBQUdGLEtBQUssQ0FBQ0UsTUFBdkM7O0FBRUEsV0FBRztBQUNDLGNBQUlBLE1BQU0sS0FBSzBuQixTQUFmLEVBQTBCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxXQVBGLENBUUM7OztBQUNBMW5CLFVBQUFBLE1BQU0sR0FBSUEsTUFBRCxDQUF3QjJuQixVQUFqQztBQUNILFNBVkQsUUFVUzNuQixNQVZULEVBSDhDLENBZTlDOzs7QUFDQWdSLFFBQUFBLFFBQVE7QUFDWCxPQWpCRDtBQWtCSCxLQXZFcUI7QUFBQTs7QUFTSCxhQUFSNFcsUUFBUSxHQUFHO0FBQ2xCLFFBQUksQ0FBQ0osbUJBQW1CLENBQUNLLFVBQXpCLEVBQXFDO0FBQ2pDTCxNQUFBQSxtQkFBbUIsQ0FBQ0ssVUFBcEIsR0FBaUMsSUFBSUwsbUJBQUosRUFBakM7QUFDSDs7QUFFRCxXQUFPQSxtQkFBbUIsQ0FBQ0ssVUFBM0I7QUFDSDs7QUFFREMsRUFBQUEsUUFBUSxDQUFDSixTQUFELEVBQXlCMVcsUUFBekIsRUFBK0M7QUFDbkQsU0FBSytXLGdCQUFMO0FBRUEsU0FBSzliLE9BQUwsQ0FBYXdJLElBQWIsQ0FBa0I7QUFDZGlULE1BQUFBLFNBRGM7QUFFZDFXLE1BQUFBO0FBRmMsS0FBbEI7QUFJSDs7QUFFRGdYLEVBQUFBLFVBQVUsQ0FBQ04sU0FBRCxFQUF5QjFXLFFBQXpCLEVBQStDO0FBRXJELFVBQU1pWCxlQUFlLEdBQUdQLFNBQXhCO0FBQ0EsVUFBTVEsY0FBYyxHQUFHbFgsUUFBdkI7QUFFQSxTQUFLL0UsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYXlWLE1BQWIsQ0FBb0IsQ0FBQztBQUFFZ0csTUFBQUEsU0FBRjtBQUFhMVcsTUFBQUE7QUFBYixLQUFELEtBQTZCO0FBQzVELGFBQU8wVyxTQUFTLEtBQUtPLGVBQWQsSUFBaUNqWCxRQUFRLEtBQUtrWCxjQUFyRDtBQUNILEtBRmMsQ0FBZjtBQUlBLFNBQUtDLG1CQUFMO0FBQ0g7O0FBRURKLEVBQUFBLGdCQUFnQixHQUFHO0FBQ2YsUUFBSSxDQUFDLEtBQUtOLFlBQVYsRUFBd0I7QUFDcEJ6bUIsTUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxLQUFLbEMsV0FBNUM7QUFDQSxXQUFLMG9CLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKOztBQUVEVSxFQUFBQSxtQkFBbUIsR0FBRztBQUNsQixRQUFJLEtBQUtWLFlBQUwsSUFBcUIsS0FBS3hiLE9BQUwsQ0FBYXlGLE1BQWIsS0FBd0IsQ0FBakQsRUFBb0Q7QUFDaEQxUSxNQUFBQSxRQUFRLENBQUNFLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLEtBQUtuQyxXQUEvQztBQUNBLFdBQUswb0IsWUFBTCxHQUFvQixLQUFwQjtBQUNIO0FBQ0o7O0FBbERxQjs7QUFBcEJELG9CQU9LSztBQW1FWCxpRUFBZUwsbUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFFQTs7QUFFQSxNQUFNWSxXQUFOLENBQWtCO0FBYWQ3RyxFQUFBQSxXQUFXLEdBQUc7QUFBQSxTQVpkOEcsVUFZYztBQUFBLFNBVGRDLGNBU2M7QUFBQSxTQUpkQyxNQUljOztBQUFBLFNBd0JkQyxrQkF4QmMsR0F3QlFDLE1BQUQsSUFBb0I7QUFDckMsVUFBSSxLQUFLRixNQUFMLENBQVlFLE1BQVosQ0FBSixFQUF5QjtBQUNyQixhQUFLRixNQUFMLENBQVlFLE1BQVosRUFBb0IzWCxPQUFwQixDQUE2QjRYLFVBQUQsSUFBZ0I7QUFDeEM7QUFDQTtBQUNBLGlCQUFPLEtBQUtMLFVBQUwsQ0FBZ0JLLFVBQWhCLENBQVA7QUFDSCxTQUpEOztBQU1BLGVBQU8sS0FBS0gsTUFBTCxDQUFZRSxNQUFaLENBQVA7QUFDSDtBQUNKLEtBbENhOztBQUNWLFNBQUtKLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLRSxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtELGNBQUwsR0FBc0I5ckIsU0FBdEI7QUFDSDs7QUFFa0IsYUFBUm9yQixRQUFRLEdBQUc7QUFDbEI7QUFDQSxRQUFJLENBQUNuWixNQUFNLENBQUNrYSxhQUFaLEVBQTJCO0FBQ3ZCbGEsTUFBQUEsTUFBTSxDQUFDa2EsYUFBUCxHQUF1QixJQUFJUCxXQUFKLEVBQXZCO0FBQ0g7O0FBRUQsV0FBTzNaLE1BQU0sQ0FBQ2thLGFBQWQ7QUFDSDs7QUFFREMsRUFBQUEsS0FBSyxHQUFHO0FBQ0osUUFBSSxLQUFLTixjQUFMLEtBQXdCOXJCLFNBQTVCLEVBQXVDO0FBQ25DLFdBQUs4ckIsY0FBTCxDQUFvQk0sS0FBcEI7O0FBQ0EsV0FBS04sY0FBTCxHQUFzQjlyQixTQUF0QjtBQUNIOztBQUVELFNBQUs2ckIsVUFBTCxHQUFrQixFQUFsQjtBQUNIOztBQWNEUSxFQUFBQSxXQUFXLENBQ1B2WCxJQURPLEVBRVBOLFFBRk8sRUFHUGxELEtBQUssR0FBRyxDQUhELEVBSVBrRSxZQUFZLEdBQUcsSUFKUixFQUtEO0FBQ04sUUFBSSxLQUFLc1csY0FBTCxLQUF3QjlyQixTQUE1QixFQUF1QztBQUNuQyxXQUFLOHJCLGNBQUwsR0FBc0IzaEIsTUFBTSxDQUFDQyxFQUFQLENBQVUsdUJBQVYsRUFBbUMsS0FBS2tpQixpQkFBeEMsRUFBMkQsSUFBM0QsQ0FBdEI7QUFDSDs7QUFFRCxVQUFNL1gsVUFBVSxHQUFHeEwsOERBQUEsQ0FBMEIrTCxJQUExQixFQUFnQ3hELEtBQWhDLEVBQXVDa0UsWUFBdkMsQ0FBbkI7O0FBRUEsUUFBSWpCLFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNoQixXQUFLc1gsVUFBTCxDQUFnQnRYLFVBQWhCLElBQThCQyxRQUE5Qjs7QUFFQSxVQUFJbEQsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYLFlBQUksS0FBS3lhLE1BQUwsQ0FBWXphLEtBQVosQ0FBSixFQUF3QjtBQUNwQixlQUFLeWEsTUFBTCxDQUFZemEsS0FBWixFQUFtQjJHLElBQW5CLENBQXdCMUQsVUFBeEI7QUFDSCxTQUZELE1BRU87QUFDSCxlQUFLd1gsTUFBTCxDQUFZemEsS0FBWixJQUFxQixDQUFDaUQsVUFBRCxDQUFyQjtBQUNIO0FBQ0o7QUFDSixLQVZELE1BVU87QUFDSC9MLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLCtCQUFkLEVBQStDcU0sSUFBL0M7QUFDSDs7QUFFRCxXQUFPUCxVQUFQO0FBQ0g7O0FBRURnWSxFQUFBQSxjQUFjLENBQUNoWSxVQUFELEVBQXFCakQsS0FBSyxHQUFHLENBQTdCLEVBQWdDO0FBQzFDLFFBQUkyRCxNQUFNLEdBQUcsS0FBYjs7QUFFQSxRQUFJVixVQUFVLEtBQUt2VSxTQUFmLElBQTRCLEtBQUs2ckIsVUFBTCxDQUFnQnRYLFVBQWhCLE1BQWdDdlUsU0FBaEUsRUFBMkU7QUFDdkVpVixNQUFBQSxNQUFNLEdBQUczRSxPQUFPLENBQUNxRSx5QkFBUixDQUFrQ0osVUFBbEMsRUFBOENqRCxLQUE5QyxDQUFUO0FBRUEsYUFBTyxLQUFLdWEsVUFBTCxDQUFnQnRYLFVBQWhCLENBQVA7QUFDSDs7QUFFRCxRQUFJLENBQUNVLE1BQUwsRUFBYTtBQUNUek0sTUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsOEJBQWQsRUFBOEM4TCxVQUE5QztBQUNIOztBQUVELFdBQU9VLE1BQVA7QUFDSDs7QUFFRHFYLEVBQUFBLGlCQUFpQixDQUFDblksSUFBRCxFQUFZcVksT0FBWixFQUEwQm5ZLFdBQTFCLEVBQThDO0FBQzNEQSxJQUFBQSxXQUFXLENBQUNDLE9BQVosQ0FBcUJDLFVBQUQsSUFBZ0I7QUFDaEMsWUFBTUMsUUFBUSxHQUFHLEtBQUtxWCxVQUFMLENBQWdCdFgsVUFBaEIsQ0FBakI7O0FBRUEsVUFBSUMsUUFBUSxLQUFLeFUsU0FBakIsRUFBNEI7QUFDeEJ3VSxRQUFBQSxRQUFRLENBQUNMLElBQUQsRUFBT3FZLE9BQVAsQ0FBUjtBQUNIO0FBQ0osS0FORDtBQU9IOztBQXRHYTs7QUFBWlosWUFXS1A7QUE4RlgsaUVBQWVPLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dBO0FBRUE7QUFDQTs7QUFFQSxNQUFNYyxTQUFOLENBQWdCO0FBTVozSCxFQUFBQSxXQUFXLENBQUNqUSxJQUFELEVBQWU2WCxjQUFjLEdBQUcsRUFBaEMsRUFBb0M7QUFBQSxTQUwvQ0MsV0FLK0M7QUFBQSxTQUovQ0MsU0FJK0M7QUFBQSxTQUgvQ0MsU0FHK0M7QUFBQSxTQUYvQzNZLElBRStDOztBQUFBLFNBdUMvQzRZLGdCQXZDK0MsR0F1QzVCLE1BQU07QUFDckIsV0FBSzVZLElBQUwsR0FBWTZZLElBQUksQ0FBQyxLQUFLSCxTQUFOLENBQWhCO0FBRUEsV0FBS0MsU0FBTCxDQUFleFksT0FBZixDQUF3QkUsUUFBRCxJQUFjO0FBQ2pDQSxRQUFBQSxRQUFRLENBQUMsS0FBS0wsSUFBTixDQUFSO0FBQ0gsT0FGRDtBQUdILEtBN0M4Qzs7QUFDM0MsU0FBS3lZLFdBQUwsR0FBbUIsSUFBSWhCLG9EQUFKLEVBQW5CO0FBQ0EsU0FBS2lCLFNBQUwsR0FBaUIvWCxJQUFqQjtBQUNBLFNBQUtnWSxTQUFMLEdBQWlCLElBQUlHLEdBQUosRUFBakI7QUFFQVIsSUFBQUEsdURBQWUsR0FBR3ZZLElBQWxCLENBQ0ksTUFBTTtBQUNGLFdBQUtnWixZQUFMLENBQWtCcFksSUFBbEI7O0FBRUE2WCxNQUFBQSxjQUFjLENBQUNyWSxPQUFmLENBQXdCOE0sTUFBRCxJQUFZO0FBQy9CLGFBQUs4TCxZQUFMLENBQWtCcFksSUFBSSxHQUFHLEdBQVAsR0FBYXNNLE1BQS9CO0FBQ0gsT0FGRDs7QUFJQSxXQUFLMkwsZ0JBQUw7QUFDSCxLQVRMO0FBV0g7O0FBRUQxWCxFQUFBQSxTQUFTLENBQUNiLFFBQUQsRUFBaUM7QUFDdEMsU0FBS3NZLFNBQUwsQ0FBZUssR0FBZixDQUFtQjNZLFFBQW5COztBQUVBLFFBQUksS0FBS0wsSUFBTCxLQUFjLElBQWQsSUFBc0IsS0FBS0EsSUFBTCxLQUFjblUsU0FBeEMsRUFBbUQ7QUFDL0N3VSxNQUFBQSxRQUFRLENBQUMsS0FBS0wsSUFBTixDQUFSO0FBQ0g7QUFDSjs7QUFFRE0sRUFBQUEsV0FBVyxDQUFDRCxRQUFELEVBQXVCO0FBQzlCLFNBQUtzWSxTQUFMLENBQWVsWSxNQUFmLENBQXNCSixRQUF0QjtBQUNIOztBQUVENFksRUFBQUEsT0FBTyxHQUFHO0FBQ04sU0FBS1IsV0FBTCxDQUFpQlIsS0FBakI7QUFDQSxTQUFLVSxTQUFMLENBQWVWLEtBQWY7QUFDSDs7QUFFRGMsRUFBQUEsWUFBWSxDQUFDcFksSUFBRCxFQUFlO0FBQ3ZCLFNBQUs4WCxXQUFMLENBQWlCUCxXQUFqQixDQUE2QnZYLElBQTdCLEVBQW1DLEtBQUtpWSxnQkFBeEM7QUFDSDs7QUEzQ1c7O0FBc0RoQixpRUFBZUwsU0FBZjs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBRU8sU0FBU1csYUFBVCxDQUF1QnJZLEtBQXZCLEVBQW1DO0FBQ3RDLFFBQU1DLE1BSUwsR0FBRyxFQUpKOztBQU1BLE1BQUksT0FBT0QsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixXQUFPQSxLQUFQO0FBQ0g7O0FBRUQsT0FBSyxNQUFNelYsUUFBWCxJQUF1QnlWLEtBQXZCLEVBQThCO0FBQzFCLFFBQUlyWixNQUFNLENBQUMyeEIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NoRixJQUFoQyxDQUFxQ3ZULEtBQXJDLEVBQTRDelYsUUFBNUMsQ0FBSixFQUEyRDtBQUN2RCxZQUFNeUMsSUFBSSxHQUFHckcsTUFBTSxDQUFDMnhCLFNBQVAsQ0FBaUJ0ZCxRQUFqQixDQUEwQnVZLElBQTFCLENBQStCdlQsS0FBSyxDQUFDelYsUUFBRCxDQUFwQyxDQUFiOztBQUNBLFVBQUl5QyxJQUFJLENBQUN3ckIsVUFBTCxDQUFnQiw2QkFBaEIsQ0FBSixFQUFvRDtBQUNoRCxjQUFNclYsS0FBVSxHQUFHbkQsS0FBSyxDQUFDelYsUUFBRCxDQUF4QjtBQUNBMFYsUUFBQUEsTUFBTSxDQUFDMVYsUUFBRCxDQUFOLEdBQW1CLEVBQW5COztBQUNBLGFBQUssSUFBSWt1QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdFYsS0FBSyxDQUFDakQsTUFBMUIsRUFBa0N1WSxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DeFksVUFBQUEsTUFBTSxDQUFDMVYsUUFBRCxDQUFOLENBQWlCMFksSUFBakIsQ0FBc0I7QUFBRS9ZLFlBQUFBLEtBQUssRUFBRW11QixhQUFhLENBQUNsVixLQUFLLENBQUNzVixDQUFELENBQUwsQ0FBU3Z1QixLQUFWO0FBQXRCLFdBQXRCO0FBQ0g7QUFDSixPQU5ELE1BTU8sSUFBSThDLElBQUksQ0FBQ3dyQixVQUFMLENBQWdCLG1DQUFoQixDQUFKLEVBQTBEO0FBQzdEdlksUUFBQUEsTUFBTSxDQUFDMVYsUUFBRCxDQUFOLEdBQW1COHRCLGFBQWEsQ0FBQ3JZLEtBQUssQ0FBQ3pWLFFBQUQsQ0FBTixDQUFoQztBQUNILE9BRk0sTUFFQTtBQUNIMFYsUUFBQUEsTUFBTSxDQUFDMVYsUUFBRCxDQUFOLEdBQW1CeVYsS0FBSyxDQUFDelYsUUFBRCxDQUF4QjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFPMFYsTUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBRUEsTUFBTStWLG1CQUFtQixHQUFHMEMscUVBQTVCO0FBRUE7QUE0QkEsTUFBTWdCLGFBQWEsR0FBRztBQUNsQjlDLEVBQUFBLFdBRGtCO0FBRWxCYyxFQUFBQSxTQUZrQjtBQUdsQnZkLEVBQUFBLGFBSGtCO0FBSWxCN0gsRUFBQUEsZ0JBSmtCO0FBS2xCdW1CLEVBQUFBLGNBTGtCO0FBTWxCQyxFQUFBQSxjQU5rQjtBQU9sQkYsRUFBQUEsY0FQa0I7QUFRbEJRLEVBQUFBLHFCQVJrQjtBQVNsQkcsRUFBQUEsYUFUa0I7QUFVbEIxTCxFQUFBQSxjQVZrQjtBQVdsQnlMLEVBQUFBLHFCQVhrQjtBQVlsQkUsRUFBQUEsd0JBWmtCO0FBYWxCQyxFQUFBQSxvQkFia0I7QUFjbEJWLEVBQUFBLGlCQWRrQjtBQWVsQkMsRUFBQUEsVUFma0I7QUFnQmxCL2QsRUFBQUEsZUFoQmtCO0FBaUJsQndjLEVBQUFBLGVBakJrQjtBQWtCbEI0QixFQUFBQSxhQWxCa0I7QUFtQmxCRixFQUFBQSxjQW5Ca0I7QUFvQmxCRixFQUFBQSxrQkFwQmtCO0FBcUJsQkMsRUFBQUEsY0FyQmtCO0FBc0JsQmIsRUFBQUEsYUF0QmtCO0FBdUJsQnJDLEVBQUFBLG1CQXZCa0I7QUF3QmxCM2pCLEVBQUFBLFlBeEJrQjtBQXlCbEJzbUIsRUFBQUEsVUFBVUEsaURBQUFBO0FBekJRLENBQXRCO0FBNEJBMWIsTUFBTSxDQUFDeWMsYUFBUCxHQUF1QkEsYUFBdkI7QUFFQSxpRUFBZUEsYUFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGTyxNQUFNcm5CLFlBQVksR0FBRztBQUN4QlMsRUFBQUEsZUFBZSxDQUFDNUksS0FBRCxFQUFnQjhDLElBQWhCLEVBQXNDO0FBQ2pELFdBQU8yc0IsWUFBWSxDQUFDN21CLGVBQWIsQ0FBNkI1SSxLQUE3QixFQUFvQzhDLElBQXBDLENBQVA7QUFDSCxHQUh1Qjs7QUFLeEI0c0IsRUFBQUEsYUFBYSxDQUFDMXZCLEtBQUQsRUFBZ0I4QyxJQUFoQixFQUFzQztBQUMvQyxXQUFPMnNCLFlBQVksQ0FBQ0MsYUFBYixDQUEyQjF2QixLQUEzQixFQUFrQzhDLElBQWxDLENBQVA7QUFDSCxHQVB1Qjs7QUFTeEI2c0IsRUFBQUEsYUFBYSxDQUFDQyxHQUFELEVBQWM5c0IsSUFBZCxFQUFvQztBQUM3QyxXQUFPMnNCLFlBQVksQ0FBQ0UsYUFBYixDQUEyQkMsR0FBM0IsRUFBZ0M5c0IsSUFBaEMsQ0FBUDtBQUNILEdBWHVCOztBQWF4QitzQixFQUFBQSxhQUFhLENBQUNELEdBQUQsRUFBYzlzQixJQUFkLEVBQW9DO0FBQzdDLFdBQU8yc0IsWUFBWSxDQUFDSSxhQUFiLENBQTJCRCxHQUEzQixFQUFnQzlzQixJQUFoQyxDQUFQO0FBQ0gsR0FmdUI7O0FBaUJ4Qm1uQixFQUFBQSxXQUFXLENBQUNQLEdBQUQsRUFBc0I7QUFDN0IsV0FBTytGLFlBQVksQ0FBQ3hGLFdBQWIsQ0FBeUJQLEdBQXpCLENBQVA7QUFDSCxHQW5CdUI7O0FBcUJ4QmtDLEVBQUFBLFdBQVcsQ0FBQ2xDLEdBQUQsRUFBc0I7QUFDN0IsV0FBTytGLFlBQVksQ0FBQ3hGLFdBQWIsQ0FBeUJQLEdBQXpCLENBQVA7QUFDSDs7QUF2QnVCLENBQXJCO0FBMEJBLE1BQU0rRSxVQUFVLEdBQUc7QUFDdEI3bEIsRUFBQUEsZUFBZSxDQUFDNUksS0FBRCxFQUFnQjtBQUMzQixXQUFPOHZCLFVBQVUsQ0FBQ2xuQixlQUFYLENBQTJCNUksS0FBM0IsQ0FBUDtBQUNILEdBSHFCOztBQUt0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0kydkIsRUFBQUEsYUFBYSxDQUFDSSxPQUFELEVBQWtCSCxHQUFsQixFQUErQkksV0FBL0IsRUFBNkQ7QUFDdEUsV0FBT0YsVUFBVSxDQUFDSCxhQUFYLENBQXlCSSxPQUF6QixFQUFrQ0gsR0FBbEMsRUFBdUNJLFdBQVcsS0FBS2x2QixTQUFoQixHQUE0QixJQUE1QixHQUFtQ2t2QixXQUExRSxDQUFQO0FBQ0gsR0FmcUI7O0FBaUJ0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJQyxFQUFBQSxhQUFhLENBQUNDLFVBQUQsRUFBcUJOLEdBQXJCLEVBQWtDSSxXQUFsQyxFQUF3RDtBQUNqRSxXQUFPRixVQUFVLENBQUNHLGFBQVgsQ0FBeUJDLFVBQXpCLEVBQXFDTixHQUFyQyxFQUEwQ0ksV0FBVyxLQUFLbHZCLFNBQWhCLEdBQTRCLElBQTVCLEdBQW1Da3ZCLFdBQTdFLENBQVA7QUFDSDs7QUExQnFCLENBQW5COzs7Ozs7Ozs7O0FDMUJQO0FBQ0EsSUFBSW5VLElBQUosRUFBMkM7QUFDdkMsUUFBTXNVLFNBQVMsR0FBRyxDQUFDcmEsS0FBVSxHQUFHL0MsTUFBTSxDQUFDK0MsS0FBckIsRUFBNEJzYSxLQUFLLEdBQUcsRUFBcEMsS0FBZ0Q7QUFDOUQsUUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNYOW1CLE1BQUFBLE9BQU8sQ0FBQyttQixJQUFSLENBQ0s7QUFDakI7QUFDQSxxRUFIWTtBQUtBLGFBQU8sOEJBQVA7QUFDSDs7QUFFRCxRQUFJdmEsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDaEIsYUFBTyxJQUFQO0FBQ0g7O0FBRUQsWUFBUSxPQUFPQSxLQUFmO0FBQ0ksV0FBSyxRQUFMO0FBQ0EsV0FBSyxRQUFMO0FBQ0EsV0FBSyxTQUFMO0FBQ0EsV0FBSyxRQUFMO0FBQ0EsV0FBSyxXQUFMO0FBQ0ksZUFBT0EsS0FBUDs7QUFDSixXQUFLLFVBQUw7QUFDSSxlQUFPLFVBQVA7O0FBRUosV0FBSyxRQUFMO0FBQWU7QUFBQTs7QUFDWCxnQkFBTWhULElBQUksa0RBQUdnVCxLQUFLLENBQUMrUCxXQUFULHFCQUFHLG1CQUFtQm5WLElBQXRCLG9DQUE4QixTQUF4Qzs7QUFDQSxrQkFBUSxJQUFSO0FBQ0ksaUJBQUs1TixJQUFJLENBQUM0TSxRQUFMLENBQWMsb0JBQWQsQ0FBTDtBQUNJLHFCQUFPLENBQUMsR0FBR29HLEtBQUssQ0FBQ3dhLE1BQU4sRUFBSixFQUFvQjdtQixHQUFwQixDQUF5Qm1jLElBQUQsSUFBVXVLLFNBQVMsQ0FBQ3ZLLElBQUQsRUFBT3dLLEtBQUssR0FBRyxDQUFmLENBQTNDLENBQVA7O0FBRUosaUJBQUt0dEIsSUFBSSxLQUFLLFNBQWQ7QUFDSSxxQkFBTyxjQUFQOztBQUVKLGlCQUFLQSxJQUFJLENBQUM0TSxRQUFMLENBQWMsV0FBZCxDQUFMO0FBQ0E7QUFBUztBQUNMLHNCQUFNcUcsTUFBVyxHQUFHLEVBQXBCOztBQUNBLHFCQUFLLE1BQU1oVyxHQUFYLElBQWtCK1YsS0FBbEIsRUFBeUI7QUFDckIsc0JBQUlyWixNQUFNLENBQUMyeEIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NoRixJQUFoQyxDQUFxQ3ZULEtBQXJDLEVBQTRDL1YsR0FBNUMsQ0FBSixFQUFzRDtBQUNsRGdXLG9CQUFBQSxNQUFNLENBQUNoVyxHQUFELENBQU4sR0FBY293QixTQUFTLENBQUNyYSxLQUFLLENBQUMvVixHQUFELENBQU4sRUFBYXF3QixLQUFLLEdBQUcsQ0FBckIsQ0FBdkI7QUFDSDtBQUNKOztBQUNELHVCQUFPcmEsTUFBUDtBQUNIO0FBaEJMO0FBa0JIOztBQUVEO0FBQ0ksZUFBUSxZQUFXeVIsTUFBTSxDQUFDMVIsS0FBRCxDQUFRLEVBQWpDO0FBakNSO0FBbUNILEdBakREOztBQWtEQy9DLEVBQUFBLE1BQUQsQ0FBZ0J3ZCxVQUFoQixHQUE2QkosU0FBN0I7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JETSxJQUFLbGdCLGFBQVo7O1dBQVlBO0FBQUFBLEVBQUFBLGNBQUFBO0FBQUFBLEVBQUFBLGNBQUFBO0FBQUFBLEVBQUFBLGNBQUFBO0FBQUFBLEVBQUFBLGNBQUFBO0FBQUFBLEVBQUFBLGNBQUFBO0FBQUFBLEVBQUFBLGNBQUFBO0FBQUFBLEVBQUFBLGNBQUFBO0FBQUFBLEVBQUFBLGNBQUFBO0dBQUFBLGtCQUFBQTs7QUFZTCxNQUFNN0gsZ0JBQWdCLEdBQUczTCxNQUFNLENBQUMrekIsTUFBUCxDQUFjO0FBQzFDOW5CLEVBQUFBLFFBQVEsRUFBRSxDQURnQztBQUUxQ0QsRUFBQUEsSUFBSSxFQUFFO0FBRm9DLENBQWQsQ0FBekI7QUFLQSxNQUFNa21CLGNBQWMsR0FBR2x5QixNQUFNLENBQUMrekIsTUFBUCxDQUFjO0FBQ3hDQyxFQUFBQSxVQUFVLEVBQUUsQ0FENEI7QUFFeENDLEVBQUFBLGNBQWMsRUFBRTtBQUZ3QixDQUFkLENBQXZCO0FBS0EsTUFBTTlCLGNBQWMsR0FBR255QixNQUFNLENBQUMrekIsTUFBUCxDQUFjO0FBQ3hDRyxFQUFBQSxZQUFZLEVBQUUsQ0FEMEI7QUFFeENDLEVBQUFBLFdBQVcsRUFBRTtBQUYyQixDQUFkLENBQXZCO0FBS0EsTUFBTWxDLGNBQWMsR0FBR2p5QixNQUFNLENBQUMrekIsTUFBUCxDQUFjO0FBQ3hDRyxFQUFBQSxZQUFZLEVBQUUsQ0FEMEI7QUFFeENDLEVBQUFBLFdBQVcsRUFBRSxDQUYyQjtBQUd4Q0MsRUFBQUEsVUFBVSxFQUFFO0FBSDRCLENBQWQsQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JQO0FBRUE7QUFDQTtBQUVPLE1BQU0zQixxQkFBcUIsR0FBSTRCLFVBQUQsSUFBMkM7QUFDNUUsU0FBTztBQUNIcmdCLElBQUFBLE1BQU0sRUFBRSxlQURMO0FBRUgrTixJQUFBQSxDQUFDLEVBQUVzUyxVQUFVLENBQUN0UyxDQUZYO0FBR0hFLElBQUFBLENBQUMsRUFBRW9TLFVBQVUsQ0FBQ3BTLENBSFg7QUFJSGxlLElBQUFBLEtBQUssRUFBRXN3QixVQUFVLENBQUN0d0IsS0FKZjtBQUtIQyxJQUFBQSxNQUFNLEVBQUVxd0IsVUFBVSxDQUFDcndCO0FBTGhCLEdBQVA7QUFPSCxDQVJNO0FBVUEsTUFBTThzQixlQUFlO0FBQUEsK0JBQUcsYUFBWTtBQUN2QyxRQUFJdGlCLE1BQU0sQ0FBQzhsQixjQUFQLElBQXlCOWxCLE1BQU0sQ0FBQytsQixhQUFwQyxFQUFtRDtBQUMvQyxhQUFPLElBQVA7QUFDSDs7QUFFRCxXQUFPLElBQUl0UixPQUFKLENBQWFFLE9BQUQsSUFBYTtBQUM1QjNVLE1BQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVLE9BQVYsRUFBbUIwVSxPQUFuQjtBQUNILEtBRk0sQ0FBUDtBQUdILEdBUjJCOztBQUFBLGtCQUFmMk4sZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjtBQVVBLE1BQU00QixhQUFhLEdBQUcsTUFDekIsSUFBSXpQLE9BQUosQ0FBYUUsT0FBRCxJQUFhO0FBQ3JCNkUsRUFBQUEscUJBQXFCLENBQUMsTUFBTTtBQUN4QkEsSUFBQUEscUJBQXFCLENBQUMsTUFBTTtBQUN4QjdFLE1BQUFBLE9BQU87QUFDVixLQUZvQixDQUFyQjtBQUdILEdBSm9CLENBQXJCO0FBS0gsQ0FORCxDQURHOztBQVNQLE1BQU1NLHdCQUF3QixHQUFJakwsSUFBRCxJQUF5QjtBQUN0RCxTQUFPeFksTUFBTSxDQUFDOFQsT0FBUCxDQUFlMEUsSUFBZixFQUFxQnhMLEdBQXJCLENBQXlCLENBQUMsQ0FBQzFKLEdBQUQsRUFBTUMsS0FBTixDQUFELEtBQWtCO0FBQzlDLFVBQU13USxHQUFpQixHQUFHO0FBQ3RCQyxNQUFBQSxNQUFNLEVBQUUsY0FEYztBQUV0QkMsTUFBQUEsSUFBSSxFQUFFM1E7QUFGZ0IsS0FBMUI7O0FBSUEsWUFBUSxPQUFPQyxLQUFmO0FBQ0ksV0FBSyxRQUFMO0FBQ0l3USxRQUFBQSxHQUFHLENBQUNHLE1BQUosR0FBYTNRLEtBQWI7QUFDQTs7QUFDSixXQUFLLFNBQUw7QUFDSXdRLFFBQUFBLEdBQUcsQ0FBQ0ksSUFBSixHQUFXNVEsS0FBWDtBQUNBOztBQUNKO0FBQ0EsV0FBSyxRQUFMO0FBQ0l3USxRQUFBQSxHQUFHLENBQUNLLE1BQUosR0FBYTdRLEtBQUssQ0FBQzhRLFFBQU4sRUFBYjtBQUNBO0FBVlI7O0FBWUEsV0FBT04sR0FBUDtBQUNILEdBbEJNLENBQVA7QUFtQkgsQ0FwQkQ7O0FBc0JPLE1BQU1PLGVBQWUsR0FBRyxDQUFDak8sSUFBRCxFQUFzQm9PLE9BQXRCLEtBQXFEO0FBQ2hGLFFBQU1ULE1BQU0sR0FBRyxrQkFBZjs7QUFDQSxNQUFJUyxPQUFPLEtBQUtwUSxTQUFoQixFQUEyQjtBQUN2QixVQUFRd1AsSUFBUixHQUFpQ1ksT0FBakMsQ0FBUVosSUFBUjtBQUFBLFVBQWlCOFAsV0FBakIsaUNBQWlDbFAsT0FBakM7O0FBRUEsUUFBSVosSUFBSSxLQUFLeFAsU0FBYixFQUF3QjtBQUNwQnNRLE1BQUFBLE9BQU8sQ0FBQ0wsZUFBUjtBQUNJTixRQUFBQSxNQURKO0FBRUkzTixRQUFBQTtBQUZKLFNBR09zZCxXQUhQO0FBSUk3TixRQUFBQSxTQUFTLEVBQUUyTix3QkFBd0IsQ0FBQzVQLElBQUQ7QUFKdkM7QUFNSCxLQVBELE1BT087QUFDSGMsTUFBQUEsT0FBTyxDQUFDTCxlQUFSO0FBQ0lOLFFBQUFBLE1BREo7QUFFSTNOLFFBQUFBO0FBRkosU0FHT3NkLFdBSFA7QUFLSDtBQUNKLEdBakJELE1BaUJPO0FBQ0hoUCxJQUFBQSxPQUFPLENBQUNMLGVBQVIsQ0FBd0I7QUFDcEJOLE1BQUFBLE1BRG9CO0FBRXBCM04sTUFBQUE7QUFGb0IsS0FBeEI7QUFJSDtBQUNKLENBekJNO0FBMkJQOztBQUNPLE1BQU11c0IsYUFBYSxHQUFJaFAsS0FBRCxJQUN6QnRQLGVBQWUsQ0FBQ2Qsc0RBQUQsRUFBcUI7QUFDaENxQyxFQUFBQSxZQUFZLEVBQUUsSUFEa0I7QUFFaENwSCxFQUFBQSxFQUFFLEVBQUVtVjtBQUY0QixDQUFyQixDQURaO0FBS1A7O0FBQ08sTUFBTXNELGNBQWMsR0FBRyxNQUFNNVMsZUFBZSxDQUFDZCx1REFBRCxDQUE1QztBQUNBLE1BQU1tZixxQkFBcUIsR0FBRyxNQUFNcmUsZUFBZSxDQUFDZCwwREFBRCxFQUF5QjtBQUFFL0UsRUFBQUEsRUFBRSxFQUFFO0FBQU4sQ0FBekIsQ0FBbkQ7QUFDUDs7QUFDTyxNQUFNa21CLGlCQUFpQixHQUFHLE1BQU1yZ0IsZUFBZSxDQUFDZCwwREFBRCxDQUEvQztBQUVBLE1BQU1xZix3QkFBd0IsR0FBRyxDQUFDaGUsU0FBRCxFQUFvQmhCLElBQXBCLEVBQTBDaUIsV0FBVyxHQUFHLENBQXhELEtBQThEO0FBQ2xHUixFQUFBQSxlQUFlLENBQUNkLDhEQUFELEVBQTZCO0FBQ3hDcUMsSUFBQUEsWUFBWSxFQUFFLElBRDBCO0FBRXhDaEIsSUFBQUEsU0FBUyxFQUFFQSxTQUY2QjtBQUd4Q3BHLElBQUFBLEVBQUUsRUFBRSxJQUhvQztBQUl4Q3FHLElBQUFBLFdBQVcsRUFBRUEsV0FKMkI7QUFLeENqQixJQUFBQSxJQUFJLEVBQUVBO0FBTGtDLEdBQTdCLENBQWY7QUFPSCxDQVJNO0FBVUEsTUFBTWlmLG9CQUFvQixHQUFHLENBQ2hDamUsU0FEZ0MsRUFFaENpZ0IsU0FGZ0MsRUFHaENDLElBSGdDLEVBSWhDamdCLFdBSmdDLEVBS2hDSixRQUFRLEdBQUduTCxDQUFDLENBQUMrYSxPQUFGLENBQVUsT0FBVixDQUxxQixFQU1oQ3pRLElBTmdDLEtBTy9CO0FBQ0QsUUFBTW1oQixjQUFjLEdBQUc1bkIsZ0VBQUEsRUFBdkI7O0FBQ0EsZ0NBQWdDMm5CLElBQUksQ0FBQ3pKLHFCQUFMLEVBQWhDO0FBQUEsUUFBUXZKLENBQVIseUJBQVFBLENBQVI7QUFBQSxRQUFXRSxDQUFYLHlCQUFXQSxDQUFYO0FBQUEsUUFBY2xlLEtBQWQseUJBQWNBLEtBQWQ7QUFBQSxRQUFxQkMsTUFBckIseUJBQXFCQSxNQUFyQjs7QUFDQSxRQUFNaXhCLFlBQVksR0FBRztBQUNqQmxULElBQUFBLENBQUMsRUFBRTNVLGtEQUFBLENBQWlCMlUsQ0FBakIsSUFBc0JpVCxjQUFjLENBQUNqVCxDQUR2QjtBQUVqQkUsSUFBQUEsQ0FBQyxFQUFFN1Usa0RBQUEsQ0FBaUI2VSxDQUFqQixJQUFzQitTLGNBQWMsQ0FBQy9TLENBRnZCO0FBR2pCbGUsSUFBQUEsS0FBSyxFQUFFcUosa0RBQUEsQ0FBaUJySixLQUFqQixDQUhVO0FBSWpCQyxJQUFBQSxNQUFNLEVBQUVvSixrREFBQSxDQUFpQnBKLE1BQWpCO0FBSlMsR0FBckI7QUFPQXNRLEVBQUFBLGVBQWUsQ0FBQ2QsMERBQUQsRUFBeUI7QUFDcENxQyxJQUFBQSxZQUFZLEVBQUUsSUFEc0I7QUFFcENoQixJQUFBQSxTQUFTLEVBQUVBLFNBRnlCO0FBR3BDQyxJQUFBQSxXQUFXLEVBQUVBLFdBQVcsSUFBSXZMLENBQUMsQ0FBQythLE9BQUYsQ0FBVSxPQUFWLENBSFE7QUFJcEM1UCxJQUFBQSxRQUFRLEVBQUVBLFFBSjBCO0FBS3BDb2dCLElBQUFBLFNBQVMsRUFBRUEsU0FMeUI7QUFNcENJLElBQUFBLElBQUksRUFBRXpDLHFCQUFxQixDQUFDd0MsWUFBRCxDQU5TO0FBT3BDeG1CLElBQUFBLEVBQUUsRUFBRSxJQVBnQztBQVFwQ29GLElBQUFBLElBQUksRUFBRUE7QUFSOEIsR0FBekIsQ0FBZjtBQVVILENBM0JNO0FBNkJBLE1BQU0yZSxjQUFjLEdBQUcsTUFBTTdkLE9BQU8sQ0FBQ3dnQix3QkFBUixDQUFpQzNoQix5REFBakMsQ0FBN0I7QUFDQSxNQUFNOGUsa0JBQWtCLEdBQUcsTUFBTTNkLE9BQU8sQ0FBQ3dnQix3QkFBUixDQUFpQzNoQiw4REFBakMsQ0FBakM7QUFDQSxNQUFNK2UsY0FBYyxHQUFHLE1BQU01ZCxPQUFPLENBQUN3Z0Isd0JBQVIsQ0FBaUMzaEIsMERBQWpDLENBQTdCO0FBRUEsTUFBTTRoQixTQUFTLEdBQUcsQ0FBQ3p0QixLQUFELEVBQXVCa1IsUUFBdkIsS0FBZ0Q7QUFDckVsUixFQUFBQSxLQUFLLENBQUM2ZixPQUFOLEtBQWtCUCwwREFBbEIsSUFBc0NwTyxRQUFRLEVBQTlDO0FBQ0gsQ0FGTTtBQUlBLE1BQU13WixVQUFVLEdBQUkxcUIsS0FBRCxJQUEwQjtBQUNoRHl0QixFQUFBQSxTQUFTLENBQUN6dEIsS0FBRCxFQUFRdWYsY0FBUixDQUFUO0FBQ0gsQ0FGTTtBQUlQOztBQUNPLE1BQU1rTCxpQkFBaUIsR0FBSXZaLFFBQUQsSUFBMEI7QUFDdkQsUUFBTXdjLFVBQVUsR0FBSTF0QixLQUFELElBQTBCeXRCLFNBQVMsQ0FBQ3p0QixLQUFELEVBQVFrUixRQUFSLENBQXREOztBQUNBdkMsRUFBQUEsTUFBTSxDQUFDeE4sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUN1c0IsVUFBbkM7QUFDQSxTQUFPLE1BQU0vZSxNQUFNLENBQUN2TixtQkFBUCxDQUEyQixTQUEzQixFQUFzQ3NzQixVQUF0QyxDQUFiO0FBQ0gsQ0FKTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSlA7QUFDQTtBQUVBO0FBR08sTUFBTUUsWUFBWSxHQUFHLFFBQThDO0FBQUEsTUFBM0Nwd0IsUUFBMkMsUUFBM0NBLFFBQTJDO0FBQUEsTUFBOUIySyxJQUE4Qjs7QUFDdEUsc0JBQ0ksMkRBQUMsZ0VBQUQscUJBQ0ksMkRBQUMsaUVBQUQsRUFBdUJBLElBQXZCLEVBQThCM0ssUUFBOUIsQ0FESixDQURKO0FBS0gsQ0FOTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBQ0E7QUFDQTtBQUVBO0FBR0EsTUFBTXN3QixhQUFhLEdBQUc7QUFDbEIsR0FBQ3ZOLGtFQUFELEdBQXlCLEVBRFA7QUFFbEIsR0FBQ0EsNkRBQUQsR0FBb0JzTixrRkFGRjtBQUdsQixHQUFDdE4sOERBQUQsR0FBc0IsR0FBRXNOLGtGQUFnQixJQUFHQSxtRkFBaUIsRUFIMUM7QUFJbEIsR0FBQ3ROLDZEQUFELEdBQXFCLEdBQUVzTixrRkFBZ0IsSUFBR0EsbUZBQWlCLElBQUdBLGtGQUFnQixFQUo1RDtBQUtsQixHQUFDdE4sa0VBQUQsR0FBMEIsR0FBRXNOLGtGQUFnQixJQUFHQSxtRkFBaUIsSUFBR0Esa0ZBQWdCLElBQUdBLHdGQUFzQjtBQUwxRixDQUF0QjtBQVFBLE1BQU1FLGNBQWMsR0FBRztBQUNuQixHQUFDdk4sbUVBQUQsR0FBMEIsRUFEUDtBQUVuQixHQUFDQSw4REFBRCxHQUFxQnFOLG1GQUZGO0FBR25CLEdBQUNyTiwrREFBRCxHQUF1QixHQUFFcU4sbUZBQWlCLElBQUdBLG9GQUFrQixFQUg1QztBQUluQixHQUFDck4sOERBQUQsR0FBc0IsR0FBRXFOLG1GQUFpQixJQUFHQSxvRkFBa0IsSUFBR0EsbUZBQWlCLEVBSi9EO0FBS25CLEdBQUNyTixtRUFBRCxHQUEyQixHQUFFcU4sbUZBQWlCLElBQUdBLG9GQUFrQixJQUFHQSxtRkFBaUIsSUFBR0EseUZBQXVCO0FBTDlGLENBQXZCO0FBUUEsTUFBTUcsWUFBWSxHQUFHO0FBQ2pCLEdBQUNqUixpRUFBRCxHQUF3QixFQURQO0FBRWpCLEdBQUNBLDREQUFELEdBQW1COFEsNEVBRkY7QUFHakIsR0FBQzlRLDZEQUFELEdBQXFCLEdBQUU4USw0RUFBVSxJQUFHQSw2RUFBVyxFQUg5QjtBQUlqQixHQUFDOVEsNERBQUQsR0FBb0IsR0FBRThRLDRFQUFVLElBQUdBLDZFQUFXLElBQUdBLDRFQUFVLEVBSjFDO0FBS2pCLEdBQUM5USxpRUFBRCxHQUF5QixHQUFFOFEsNEVBQVUsSUFBR0EsNkVBQVcsSUFBR0EsNEVBQVUsSUFBR0Esa0ZBQWdCO0FBTGxFLENBQXJCO0FBUU8sTUFBTUYsaUJBQWlCLEdBQUcsUUFBeUQ7QUFBQSxNQUF0RG53QixRQUFzRCxRQUF0REEsUUFBc0Q7QUFBQSxNQUE1Q3JCLFNBQTRDLFFBQTVDQSxTQUE0QztBQUFBLE1BQTlCZ00sSUFBOEI7O0FBQ3RGLG9CQUErQzZVLHlEQUFRLEVBQXZEO0FBQUEsUUFBUTZELFVBQVIsYUFBUUEsVUFBUjtBQUFBLFFBQW9CQyxXQUFwQixhQUFvQkEsV0FBcEI7QUFBQSxRQUFpQzlDLFNBQWpDLGFBQWlDQSxTQUFqQzs7QUFFQSxzQkFDSTtBQUNJLGFBQVMsRUFBRTdiLGlEQUFFLENBQUNoRyxTQUFELEVBQVkyeEIsYUFBYSxDQUFDak4sVUFBRCxDQUF6QixFQUF1Q2tOLGNBQWMsQ0FBQ2pOLFdBQUQsQ0FBckQsRUFBb0VrTixZQUFZLENBQUNoUSxTQUFELENBQWhGO0FBRGpCLEtBRVE3VixJQUZSLEdBSUszSyxRQUpMLENBREo7QUFRSCxDQVhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CUDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUFxSixNQUFNLENBQUM4SixTQUFQLENBQWlCQyxJQUFqQixDQUFzQixNQUFNO0FBQ3hCcWQsRUFBQUEsdURBQUEsZUFDSSwyREFBQyxpREFBRCxxQkFDSSwyREFBQyxtRUFBRCxxQkFDSSwyREFBQyxvREFBRCxPQURKLENBREosQ0FESixFQU1JL3NCLFFBQVEsQ0FBQ2t0QixjQUFULENBQXdCLE1BQXhCLENBTko7QUFRSCxDQVREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTU0sS0FBSyxHQUFHOXNCLENBQUMsQ0FBQ0MsT0FBRixDQUFVOHNCLFdBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBRUE1aEIsT0FBTyxDQUFDNmhCLCtCQUFSO0FBRU8sTUFBTVgsR0FBRyxHQUFHRyx5REFBUSxDQUFDLE1BQU07QUFBQTs7QUFDOUIsb0JBQTRCQyxnREFBUSxFQUFwQztBQUFBLFFBQVFyWixRQUFSLGFBQVFBLFFBQVI7QUFBQSxRQUFrQnZELEtBQWxCLGFBQWtCQSxLQUFsQjs7QUFFQSwwQkFBMEVBLEtBQUssQ0FBQ0QsSUFBTixDQUFXcEIsR0FBWCxFQUExRTtBQUFBLFFBQVF5ZSxXQUFSLG1CQUFRQSxXQUFSO0FBQUEsUUFBcUJDLGdCQUFyQixtQkFBcUJBLGdCQUFyQjtBQUFBLFFBQXVDQyxpQkFBdkMsbUJBQXVDQSxpQkFBdkM7QUFBQSxRQUEwREMsV0FBMUQsbUJBQTBEQSxXQUExRDs7QUFDQSxRQUFNQyxVQUFVLEdBQUd4ZCxLQUFLLENBQUN5ZCxRQUFOLENBQWVDLGFBQWYsRUFBbkI7QUFDQSxRQUFNQyxpQkFBaUIsR0FBRzNkLEtBQUssQ0FBQ3lkLFFBQU4sQ0FBZUcsb0JBQWYsRUFBMUI7QUFFQSxRQUFNQyxTQUFTLEdBQUcsMEJBQUFMLFVBQVUsQ0FBQ00sS0FBWCxDQUFpQjlRLElBQWpCLENBQXVCK1EsUUFBRCxJQUFjQSxRQUFRLENBQUNuakIsSUFBVCxLQUFrQnZELHlFQUF0RCw0Q0FBd0VuTixLQUF4RSxLQUFpRmd6QixVQUFuRztBQUNBLFFBQU1lLGdCQUFnQixHQUNsQiwwQkFBQU4saUJBQWlCLENBQUNHLEtBQWxCLENBQXdCOVEsSUFBeEIsQ0FBOEIrUSxRQUFELElBQWNBLFFBQVEsQ0FBQ25qQixJQUFULEtBQWtCdkQsNEVBQTdELDRDQUFrRm5OLEtBQWxGLEtBQTJGZ3pCLFVBRC9GO0FBR0EzTyxFQUFBQSw4RUFBZ0IsQ0FBQ2hMLFFBQVEsQ0FBQzNULElBQVYsQ0FBaEI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRW5KLHFEQUFXMkY7QUFBM0Isa0JBQ0ksMkRBQUMsd0VBQUQ7QUFDSSxXQUFPLEVBQUU0d0IsS0FBSyxDQUFDbUIsUUFBTixDQUFlQyxLQUFmLEVBRGI7QUFFSSxRQUFJLEVBQUMsT0FGVDtBQUdJLFFBQUksRUFBQyxPQUhUO0FBSUksY0FBVSxFQUFFO0FBQUVoeUIsTUFBQUEsSUFBSSxFQUFFM0Ysc0RBQVl5akI7QUFBcEIsS0FKaEI7QUFLSSxXQUFPLEVBQUUzRyxRQUFRLENBQUM4YTtBQUx0QixJQURKLGVBUUk7QUFBSyxhQUFTLEVBQUU1M0Isd0RBQWN3SjtBQUE5QixrQkFDSTtBQUFLLGFBQVMsRUFBRXhKLHVEQUFhNjNCO0FBQTdCLGtCQUNJLDJEQUFDLGtEQUFEO0FBQVEsZUFBVyxFQUFFbEI7QUFBckIsSUFESixDQURKLGVBSUk7QUFBSyxhQUFTLEVBQUUzMkIsNERBQWtCODNCO0FBQWxDLGtCQUNJO0FBQUssYUFBUyxFQUFFOTNCLDREQUFrQiszQjtBQUFsQyxrQkFDSSwyREFBQyxpRUFBRCxPQURKLENBREosZUFJSTtBQUFLLGFBQVMsRUFBRS8zQiwyREFBaUJnNEI7QUFBakMsSUFKSixDQUpKLGVBVUk7QUFBSyxhQUFTLEVBQUVoNEIsdURBQWFpNEI7QUFBN0Isa0JBQ0ksMkRBQUMsa0RBQUQ7QUFDSSxhQUFTLEVBQUViLFNBRGY7QUFFSSxvQkFBZ0IsRUFBRUksZ0JBRnRCO0FBR0kscUJBQWlCLEVBQUVYLGlCQUh2QjtBQUlJLE9BQUcsRUFBRS9aLFFBQVEsQ0FBQ29iLEdBSmxCO0FBS0ksb0JBQWdCLEVBQUV0QixnQkFMdEI7QUFNSSxlQUFXLEVBQUVFO0FBTmpCLElBREosQ0FWSixDQVJKLENBREo7QUFnQ0gsQ0E3QzBCLENBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJQO0FBQ0E7QUFFQTtBQUVBLE1BQU1QLEtBQUssR0FBRzlzQixDQUFDLENBQUNDLE9BQUYsQ0FBVThzQixXQUFWLENBQXNCMkIsZUFBdEIsQ0FBc0NDLFNBQXRDLENBQWdETCxXQUE5RDtBQUVPLE1BQU0zQixXQUFXLEdBQUd2d0IsMkNBQUksQ0FBQyxNQUFNO0FBQ2xDLHNCQUNJO0FBQUssYUFBUyxFQUFFN0YsNkRBQVcyRjtBQUEzQixrQkFDSSwyREFBQyw0REFBRDtBQUFNLGFBQVMsRUFBRTNGLDhEQUFqQjtBQUErQixRQUFJLEVBQUV1MkIsS0FBSyxDQUFDOEIsS0FBTjtBQUFyQyxJQURKLGVBRUksMkRBQUMsNERBQUQ7QUFBTSxhQUFTLEVBQUVyNEIsb0VBQWpCO0FBQXFDLFFBQUksRUFBRXUyQixLQUFLLENBQUMxWSxJQUFOO0FBQTNDLElBRkosQ0FESjtBQU1ILENBUDhCLENBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU0wWSxLQUFLLEdBQUc5c0IsQ0FBQyxDQUFDQyxPQUFGLENBQVU4c0IsV0FBVixDQUFzQjJCLGVBQXRCLENBQXNDQyxTQUF0QyxDQUFnREgsTUFBOUQ7QUFFQSxNQUFNUSxTQUFTLEdBQUcsQ0FBbEI7QUFXTyxNQUFNcEMsTUFBTSxHQUFHeHdCLDJDQUFJLENBQ3RCLENBQUM7QUFBRWd4QixFQUFBQSxpQkFBRjtBQUFxQkQsRUFBQUEsZ0JBQXJCO0FBQXVDUSxFQUFBQSxTQUF2QztBQUFrREksRUFBQUEsZ0JBQWxEO0FBQW9FVixFQUFBQSxXQUFwRTtBQUFpRm9CLEVBQUFBO0FBQWpGLENBQUQsS0FBeUc7QUFDckcsb0JBQXNDanlCLCtDQUFRLENBQUN3eUIsU0FBRCxDQUE5QztBQUFBLFFBQU9DLFdBQVA7QUFBQSxRQUFvQkMsY0FBcEI7O0FBQ0EscUJBQWtDMXlCLCtDQUFRLENBQUNteEIsU0FBRCxDQUExQztBQUFBLFFBQU93QixTQUFQO0FBQUEsUUFBa0JDLFlBQWxCOztBQUNBLHFCQUF3QzV5QiwrQ0FBUSxDQUFDdXhCLGdCQUFELENBQWhEO0FBQUEsUUFBT3NCLFlBQVA7QUFBQSxRQUFxQkMsZUFBckI7O0FBQ0EscUJBQXNDOXlCLCtDQUFRLENBQUNzeUIsbURBQUQsQ0FBOUM7QUFBQSxRQUFPUyxXQUFQO0FBQUEsUUFBb0JDLGNBQXBCOztBQUVBLFFBQU1DLFdBQVcsR0FBR3B6QixrREFBVyxDQUMxQnF6QixVQUFELElBQWdCO0FBQ1osUUFBSUEsVUFBVSxLQUFLSCxXQUFuQixFQUFnQztBQUM1QkMsTUFBQUEsY0FBYyxDQUFDRSxVQUFELENBQWQ7QUFFQU4sTUFBQUEsWUFBWSxDQUFDekIsU0FBRCxDQUFaO0FBQ0EyQixNQUFBQSxlQUFlLENBQUN2QixnQkFBRCxDQUFmO0FBQ0FtQixNQUFBQSxjQUFjLENBQUNGLFNBQUQsQ0FBZDtBQUNIO0FBQ0osR0FUMEIsRUFVM0IsQ0FBQ3JCLFNBQUQsRUFBWUksZ0JBQVosRUFBOEJ3QixXQUE5QixDQVYyQixDQUEvQjtBQWFBLFFBQU1JLGtCQUFrQixHQUFHSixXQUFXLEtBQUtULG1EQUEzQztBQUNBLFFBQU1jLHNCQUFzQixHQUFHTCxXQUFXLEtBQUtULHNEQUEvQztBQUNBLFFBQU1lLGNBQWMsR0FBR0Ysa0JBQWtCLElBQUl0QyxXQUFXLElBQUlnQyxZQUE1RDtBQUNBLFFBQU1TLFVBQVUsR0FBR0Ysc0JBQXNCLEdBQUdwdkIsMkVBQUgsR0FBMEJBLHdFQUFuRTtBQUVBLFFBQU13dkIsbUJBQW1CLEdBQUczekIsa0RBQVcsQ0FBQyxNQUFNO0FBQzFDLFFBQUk0eUIsV0FBVyxHQUFHOUIsZ0JBQWxCLEVBQW9DO0FBQ2hDLFVBQUl3QyxrQkFBSixFQUF3QjtBQUNwQixjQUFNTSxjQUFjLEdBQUdoQixXQUFXLEdBQUdELFNBQXJDO0FBQ0EsY0FBTWtCLFFBQVEsR0FBR0QsY0FBYyxHQUFHdEMsU0FBbEM7QUFDQXVCLFFBQUFBLGNBQWMsQ0FBQ2UsY0FBRCxDQUFkO0FBQ0FiLFFBQUFBLFlBQVksQ0FBQ2MsUUFBRCxDQUFaO0FBQ0g7O0FBQ0QsVUFBSU4sc0JBQUosRUFBNEI7QUFDeEIsY0FBTUssY0FBYyxHQUFHaEIsV0FBVyxHQUFHRCxTQUFyQztBQUNBLGNBQU1tQixXQUFXLEdBQUdGLGNBQWMsR0FBR2xDLGdCQUFyQztBQUNBbUIsUUFBQUEsY0FBYyxDQUFDZSxjQUFELENBQWQ7QUFDQVgsUUFBQUEsZUFBZSxDQUFDYSxXQUFELENBQWY7QUFDSDtBQUNKO0FBQ0osR0Fmc0MsRUFlcEMsQ0FBQ1Asc0JBQUQsRUFBeUJELGtCQUF6QixFQUE2Q3hDLGdCQUE3QyxFQUErRFksZ0JBQS9ELEVBQWlGSixTQUFqRixFQUE0RnNCLFdBQTVGLENBZm9DLENBQXZDO0FBaUJBLFFBQU1tQixtQkFBbUIsR0FBRy96QixrREFBVyxDQUFDLE1BQU07QUFDMUMsUUFBSTR5QixXQUFXLEdBQUdELFNBQWxCLEVBQTZCO0FBQ3pCLFVBQUlXLGtCQUFKLEVBQXdCO0FBQ3BCLGNBQU1NLGNBQWMsR0FBR2hCLFdBQVcsR0FBR0QsU0FBckM7QUFDQSxjQUFNa0IsUUFBUSxHQUFHRCxjQUFjLEdBQUd0QyxTQUFsQztBQUNBdUIsUUFBQUEsY0FBYyxDQUFDZSxjQUFELENBQWQ7QUFDQWIsUUFBQUEsWUFBWSxDQUFDYyxRQUFELENBQVo7QUFDSDs7QUFDRCxVQUFJTixzQkFBSixFQUE0QjtBQUN4QixjQUFNSyxjQUFjLEdBQUdoQixXQUFXLEdBQUdELFNBQXJDO0FBQ0EsY0FBTW1CLFdBQVcsR0FBR0YsY0FBYyxHQUFHbEMsZ0JBQXJDO0FBQ0FtQixRQUFBQSxjQUFjLENBQUNlLGNBQUQsQ0FBZDtBQUNBWCxRQUFBQSxlQUFlLENBQUNhLFdBQUQsQ0FBZjtBQUNIO0FBQ0o7QUFDSixHQWZzQyxFQWVwQyxDQUFDbEIsV0FBRCxFQUFjVSxrQkFBZCxFQUFrQ0Msc0JBQWxDLEVBQTBEakMsU0FBMUQsRUFBcUVJLGdCQUFyRSxDQWZvQyxDQUF2QztBQWlCQSxzQkFDSTtBQUFLLGFBQVMsRUFBRXgzQix5REFBVzJGO0FBQTNCLGtCQUNJO0FBQUssYUFBUyxFQUFFcUUsaURBQUUsQ0FBQ2hLLHlEQUFELEVBQWNBLGdFQUFkO0FBQWxCLElBREosZUFFSTtBQUFLLGFBQVMsRUFBRUEsdURBQVMrNUI7QUFBekIsSUFGSixlQUdJO0FBQUssYUFBUyxFQUFFL3ZCLGlEQUFFLENBQUNoSyx5REFBRCxFQUFjQSxpRUFBZDtBQUFsQixJQUhKLGVBS0k7QUFBSyxhQUFTLEVBQUVBLDREQUFjd0o7QUFBOUIsa0JBQ0k7QUFBSyxhQUFTLEVBQUV4SiwrREFBaUJpNkI7QUFBakMsa0JBQ0k7QUFBSyxhQUFTLEVBQUVqNkIsMkRBQWFrNkI7QUFBN0Isa0JBQ0ksMkRBQUMsb0VBQUQ7QUFDSSxjQUFVLEVBQUUzQixtREFEaEI7QUFFSSxXQUFPLEVBQUVXLFdBRmI7QUFHSSxZQUFRLEVBQUVFO0FBSGQsSUFESixDQURKLGVBUUk7QUFBSyxhQUFTLEVBQUVwdkIsaURBQUUsQ0FBQ2hLLDJEQUFELEVBQWdCQSxvRUFBaEI7QUFBbEIsa0JBQ0ksMkRBQUMsb0VBQUQ7QUFDSSxjQUFVLEVBQUV1NEIsc0RBRGhCO0FBRUksV0FBTyxFQUFFVyxXQUZiO0FBR0ksWUFBUSxFQUFFRztBQUhkLElBREosQ0FSSixlQWVJO0FBQUssYUFBUyxFQUFFcjVCLDBEQUFZbzZCO0FBQTVCLElBZkosZUFnQkk7QUFBSyxhQUFTLEVBQUVwNkIsaUVBQW1CcTZCO0FBQW5DLGtCQUNJO0FBQUssYUFBUyxFQUFFcjZCLDhEQUFnQnM2QjtBQUFoQyxrQkFDSSwyREFBQyxrRUFBRDtBQUNJLFFBQUksRUFBRWYsVUFEVjtBQUVJLFNBQUssRUFBRUYsc0JBQXNCLEdBQUdQLFlBQUgsR0FBa0JGLFNBRm5EO0FBR0ksUUFBSSxFQUFFanRCLHVFQUhWO0FBSUksWUFBUSxFQUFFMnRCO0FBSmQsSUFESixlQU9JLDJEQUFDLCtEQUFEO0FBQ0ksYUFBUyxFQUFFN3ZCLENBQUMsQ0FBQyt3QixLQUFGLENBQVFoRSxXQUFSLENBQW9CaUUsS0FBcEIsQ0FBMEJDLE9BQTFCLENBQWtDQyxRQUFsQyxDQUEyQ0MsaUNBQTNDLENBQ1AsT0FETyxDQURmO0FBSUksbUJBQWU7QUFKbkIsa0JBTUk7QUFBSyxhQUFTLEVBQUU1NkIsbUVBQXFCNjZCO0FBQXJDLGtCQUNJLDJEQUFDLGtGQUFEO0FBQ0ksU0FBSyxFQUFFbkMsV0FEWDtBQUVJLHVCQUFtQixFQUFFZSxtQkFGekI7QUFHSSx1QkFBbUIsRUFBRUksbUJBSHpCO0FBSUksWUFBUSxFQUFFakQsZ0JBSmQ7QUFLSSxZQUFRLEVBQUU2QjtBQUxkLElBREosQ0FOSixDQVBKLENBREosZUF5QkksMkRBQUMsNERBQUQ7QUFDSSxhQUFTLEVBQUV6NEIsb0VBRGY7QUFFSSxRQUFJLEVBQUV1MkIsS0FBSyxDQUFDd0UsZUFBTixFQUZWO0FBR0ksVUFBTSxFQUFFO0FBQ0pydUIsTUFBQUEsT0FBTyxFQUFFO0FBQ0xzdUIsUUFBQUEsTUFBTSxlQUNGLDJEQUFDLDREQUFEO0FBQ0ksbUJBQVMsRUFBRWg3Qiw0RUFEZjtBQUVJLGNBQUksRUFBRWlyQixNQUFNLENBQUMyTCxnQkFBRDtBQUZoQjtBQUZDO0FBREw7QUFIWixJQXpCSixDQWhCSixlQXdESTtBQUFLLGFBQVMsRUFBRTVzQixpREFBRSxDQUFDaEssMERBQUQsRUFBZUEsZ0VBQWY7QUFBbEIsSUF4REosZUF5REksMkRBQUMsOERBQUQ7QUFDSSxRQUFJLEVBQUVtRyxzRUFEVjtBQUVJLFlBQVEsRUFBRW5HLDhEQUZkO0FBR0ksV0FBTyxFQUFFLE1BQU1rNEIsR0FBRyxDQUFDUSxXQUFELEVBQWNhLFVBQWQsQ0FIdEI7QUFJSSxZQUFRLEVBQUUsQ0FBQ0Q7QUFKZixrQkFNSSwyREFBQyw0REFBRDtBQUFNLFFBQUksRUFBRS9DLEtBQUssQ0FBQzJCLEdBQU4sRUFBWjtBQUF5QixhQUFTLEVBQUVsNEIsK0RBQWlCcTdCO0FBQXJELElBTkosQ0F6REosQ0FESixDQUxKLEVBeUVLLENBQUN4RSxpQkFBRCxpQkFDRywyREFBQywrREFBRDtBQUNJLGFBQVMsRUFBRXB0QixDQUFDLENBQUMrd0IsS0FBRixDQUFRaEUsV0FBUixDQUFvQmlFLEtBQXBCLENBQTBCQyxPQUExQixDQUFrQ0MsUUFBbEMsQ0FBMkNXLHVDQUEzQyxDQUNQLE9BRE87QUFEZixrQkFLSTtBQUFLLGFBQVMsRUFBRXQ3Qiw0REFBY3U3QjtBQUE5QixrQkFDSTtBQUFLLGFBQVMsRUFBRXY3QixrRUFBb0J3N0I7QUFBcEMsSUFESixlQUVJO0FBQUssYUFBUyxFQUFFeDdCLGtFQUFvQnk3QjtBQUFwQyxJQUZKLENBTEosQ0ExRVIsQ0FESjtBQXdGSCxDQW5KcUIsQ0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJQO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTWxGLEtBQUssR0FBRzlzQixDQUFDLENBQUNDLE9BQUYsQ0FBVThzQixXQUFWLENBQXNCMkIsZUFBdEIsQ0FBc0NDLFNBQXRDLENBQWdEUCxNQUE5RDtBQU1PLE1BQU12QixNQUFNLEdBQUd6d0IsMkNBQUksQ0FBQyxDQUFDO0FBQUU4d0IsRUFBQUE7QUFBRixDQUFELEtBQWtDO0FBQ3pELHNCQUNJO0FBQUssYUFBUyxFQUFFMzJCLHdEQUFXMkY7QUFBM0Isa0JBQ0k7QUFBSyxhQUFTLEVBQUUzRix1RUFBMEIwN0I7QUFBMUMsa0JBQ0ksMkRBQUMsNERBQUQ7QUFBTSxhQUFTLEVBQUUxN0IseURBQWpCO0FBQStCLFFBQUksRUFBRXUyQixLQUFLLENBQUM4QixLQUFOO0FBQXJDLElBREosQ0FESixlQUlJO0FBQUssYUFBUyxFQUFFcjRCLDhEQUFpQjI3QjtBQUFqQyxrQkFDSSwyREFBQyw0REFBRDtBQUFNLGFBQVMsRUFBRTM3QixvRUFBakI7QUFBMEMsUUFBSSxFQUFFdTJCLEtBQUssQ0FBQ3NGLFNBQU47QUFBaEQsSUFESixlQUVJLDJEQUFDLCtEQUFEO0FBQ0ksYUFBUyxFQUFFcHlCLENBQUMsQ0FBQyt3QixLQUFGLENBQVFoRSxXQUFSLENBQW9CaUUsS0FBcEIsQ0FBMEJDLE9BQTFCLENBQWtDQyxRQUFsQyxDQUEyQ21CLHVCQUEzQyxDQUFtRSxPQUFuRSxDQURmO0FBRUksbUJBQWU7QUFGbkIsa0JBSUk7QUFBSyxhQUFTLEVBQUU5N0IsNEVBQStCKzdCO0FBQS9DLGtCQUNJLDJEQUFDLDREQUFEO0FBQU0sYUFBUyxFQUFFLzdCLHFFQUFqQjtBQUEyQyxRQUFJLEVBQUVpckIsTUFBTSxDQUFDMEwsV0FBRDtBQUF2RCxJQURKLGVBRUk7QUFBSyxhQUFTLEVBQUUzMkIsb0VBQXVCaThCO0FBQXZDLElBRkosQ0FKSixDQUZKLENBSkosQ0FESjtBQW1CSCxDQXBCeUIsQ0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pQO0FBQ0E7QUFDQTtBQUdBO0FBRUEsTUFBTUMsV0FBVyxHQUFHLE1BQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFdBQXBCO0FBUU8sTUFBTTNELFlBQVksR0FBRzN5QiwyQ0FBSSxDQUFDLENBQUM7QUFBRXN6QixFQUFBQSxVQUFGO0FBQWNseUIsRUFBQUEsT0FBZDtBQUF1Qm0xQixFQUFBQTtBQUF2QixDQUFELEtBQTBEO0FBQ3ZGLG9CQUFrQ24yQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxRQUFPbzJCLFNBQVA7QUFBQSxRQUFrQkMsWUFBbEI7O0FBRUEsUUFBTXQwQixXQUFXLEdBQUcsTUFBTTtBQUN0QmYsSUFBQUEsT0FBTyxDQUFDa3lCLFVBQUQsQ0FBUDtBQUNBbUQsSUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBMTJCLElBQUFBLG9EQUFTLENBQUNzMkIsV0FBRCxDQUFUO0FBQ0gsR0FKRDs7QUFNQSxRQUFNaDBCLGdCQUFnQixHQUFHLE1BQU07QUFDM0IsUUFBSSxDQUFDazBCLFFBQUwsRUFBZTtBQUNYRSxNQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0ExMkIsTUFBQUEsb0RBQVMsQ0FBQ3UyQixXQUFELENBQVQ7QUFDSDtBQUNKLEdBTEQ7O0FBT0EsUUFBTTd6QixnQkFBZ0IsR0FBRyxNQUFNO0FBQzNCLFFBQUksQ0FBQzh6QixRQUFMLEVBQWU7QUFDWEUsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNIO0FBQ0osR0FKRDs7QUFNQSxzQkFDSTtBQUNJLGFBQVMsRUFBRXQ4Qiw4REFEZjtBQUVJLFdBQU8sRUFBRWdJLFdBRmI7QUFHSSxnQkFBWSxFQUFFRSxnQkFIbEI7QUFJSSxnQkFBWSxFQUFFSTtBQUpsQixrQkFNSTtBQUFLLGFBQVMsRUFBRXRJLG1FQUFnQnU4QjtBQUFoQyxJQU5KLGVBT0k7QUFBSyxhQUFTLEVBQUV2eUIsaURBQUUsQ0FBQ2hLLGtFQUFELEVBQWtCbzhCLFFBQVEsSUFBSXA4QiwyRUFBOUI7QUFBbEIsSUFQSixFQVFLLENBQUNvOEIsUUFBRCxpQkFBYTtBQUFLLGFBQVMsRUFBRXB5QixpREFBRSxDQUFDaEssK0RBQUQsRUFBZXE4QixTQUFTLElBQUlyOEIsd0VBQTVCO0FBQWxCLElBUmxCLGVBU0k7QUFBSyxhQUFTLEVBQUVnSyxpREFBRSxDQUFDaEssOERBQUQsRUFBY0EseURBQU0sQ0FBRSxTQUFRbTVCLFVBQVcsRUFBckIsQ0FBcEI7QUFBbEIsSUFUSixDQURKO0FBYUgsQ0FuQytCLENBQXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RQO0FBQ0E7QUFDQTtBQUNBOztBQUVPLDhCQUFrQ3ZlLDBFQUEwQixHQUcvRCxDQUFDO0FBQUU2QixFQUFBQTtBQUFGLENBQUQsS0FBeUI7QUFDckIsUUFBTWxELEtBQUssR0FBRztBQUNWRCxJQUFBQSxJQUFJLEVBQUVtRCxlQUFlLENBQUNFLE1BQWhCLEVBREk7QUFFVjBhLElBQUFBLEtBQUssRUFBRTVhLGVBQWUsQ0FBQ0UsTUFBaEIsQ0FBdUIsT0FBdkIsQ0FGRztBQUdWa2dCLElBQUFBLFlBQVksRUFBRXBnQixlQUFlLENBQUNFLE1BQWhCLENBQXVCLGNBQXZCO0FBSEosR0FBZDtBQU1BLFFBQU1zYSxhQUFhLEdBQUcyRixzREFBVSxDQUM1QixNQUFNO0FBQ0YsNEJBQWtCcmpCLEtBQUssQ0FBQ0QsSUFBTixDQUFXcEIsR0FBWCxFQUFsQjtBQUFBLFVBQVFtZixLQUFSLG1CQUFRQSxLQUFSOztBQUNBLDZCQUNPQSxLQURQO0FBRUlBLE1BQUFBLEtBQUssRUFBRXNGLHdEQUFBLENBQWN0RixLQUFLLENBQUNBLEtBQXBCLEVBQTJCcFQsa0RBQTNCLENBRlg7QUFHSTZZLE1BQUFBLFFBQVEsRUFBRUgsd0RBQUEsQ0FBY3RGLEtBQUssQ0FBQ3lGLFFBQXBCLEVBQThCN1ksa0RBQTlCLENBSGQ7QUFJSThZLE1BQUFBLFFBQVEsRUFBRUosd0RBQUEsQ0FBY3RGLEtBQUssQ0FBQzBGLFFBQXBCLEVBQThCOVksa0RBQTlCO0FBSmQ7QUFNSCxHQVQyQixFQVU1QjtBQUNJcEksSUFBQUEsTUFBTSxFQUFFckIsb0RBQVVBO0FBRHRCLEdBVjRCLENBQWhDO0FBZUEsUUFBTTJjLG9CQUFvQixHQUFHeUYsc0RBQVUsQ0FDbkMsTUFBTTtBQUNGLDZCQUF5QnJqQixLQUFLLENBQUNELElBQU4sQ0FBV3BCLEdBQVgsRUFBekI7QUFBQSxVQUFRMmtCLFlBQVIsb0JBQVFBLFlBQVI7O0FBQ0EsNkJBQ09BLFlBRFA7QUFFSXhGLE1BQUFBLEtBQUssRUFBRXNGLHdEQUFBLENBQWNFLFlBQVksQ0FBQ3hGLEtBQTNCLEVBQWtDcFQsa0RBQWxDLENBRlg7QUFHSTZZLE1BQUFBLFFBQVEsRUFBRUgsd0RBQUEsQ0FBY0UsWUFBWSxDQUFDQyxRQUEzQixFQUFxQzdZLGtEQUFyQyxDQUhkO0FBSUk4WSxNQUFBQSxRQUFRLEVBQUVKLHdEQUFBLENBQWNFLFlBQVksQ0FBQ0UsUUFBM0IsRUFBcUM5WSxrREFBckM7QUFKZDtBQU1ILEdBVGtDLEVBVW5DO0FBQ0lwSSxJQUFBQSxNQUFNLEVBQUVyQixvREFBVUE7QUFEdEIsR0FWbUMsQ0FBdkM7QUFlQSwyQkFDT2pCLEtBRFA7QUFFSXlkLElBQUFBLFFBQVEsRUFBRTtBQUFFQyxNQUFBQSxhQUFGO0FBQWlCRSxNQUFBQTtBQUFqQjtBQUZkO0FBSUgsQ0E1QzhELEVBNkMvRCxDQUFDO0FBQUU1YixFQUFBQTtBQUFGLENBQUQsTUFBd0I7QUFDcEJxYyxFQUFBQSxNQUFNLEVBQUVyYyxhQUFhLENBQUNsQixvQkFBZCxDQUFtQyxVQUFuQyxDQURZO0FBRXBCbFIsRUFBQUEsSUFBSSxFQUFFb1MsYUFBYSxDQUFDbEIsb0JBQWQsQ0FBbUMsUUFBbkMsQ0FGYztBQUdwQjZkLEVBQUFBLEdBQUcsRUFBRTNjLGFBQWEsQ0FBQ3JCLGNBQWQsQ0FDRCxDQUFDOGdCLE1BQUQsRUFBaUJnQyxZQUFqQixNQUFpRDtBQUFFaEMsSUFBQUEsTUFBRjtBQUFVZ0MsSUFBQUE7QUFBVixHQUFqRCxDQURDLEVBRUQsT0FGQztBQUhlLENBQXhCLENBN0MrRCxDQUE1RDtBQUFBLE1BQU9oSCxhQUFQO0FBQUEsTUFBc0JHLFFBQXRCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLElBQUtvQyxVQUFaOztXQUFZQTtBQUFBQSxFQUFBQTtBQUFBQSxFQUFBQTtHQUFBQSxlQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVo7QUFFQTtBQUNBO0FBQ0E7O0FBV0EsTUFBTTBFLGtCQUFrQixHQUFHLFFBQWdFO0FBQUEsTUFBN0R4NUIsS0FBNkQsUUFBN0RBLEtBQTZEO0FBQUEsTUFBdERPLFNBQXNELFFBQXREQSxTQUFzRDtBQUFBLE1BQTNDazVCLFNBQTJDLFFBQTNDQSxTQUEyQztBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFsQm50QixJQUFrQjs7QUFDdkYsTUFBSW90QixRQUFKOztBQUNBLG9CQUEwRG4zQiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEU7QUFBQSxRQUFPbzNCLHFCQUFQO0FBQUEsUUFBOEJDLHdCQUE5Qjs7QUFFQSxRQUFNQyxXQUFXLEdBQUkvbkIsR0FBRCxJQUEyQjtBQUMzQyxRQUFJQSxHQUFKLEVBQVM7QUFDTDRuQixNQUFBQSxRQUFRLEdBQUc1bkIsR0FBWDtBQUNBNm5CLE1BQUFBLHFCQUFxQixJQUFJN25CLEdBQUcsQ0FBQ2lXLGlCQUFKLENBQXNCalcsR0FBRyxDQUFDL1IsS0FBSixDQUFVZ1csTUFBaEMsRUFBd0NqRSxHQUFHLENBQUMvUixLQUFKLENBQVVnVyxNQUFsRCxDQUF6QjtBQUNIO0FBQ0osR0FMRDs7QUFPQXVPLEVBQUFBLHdFQUFjLENBQUMsTUFBTTtBQUNqQm9WLElBQUFBLFFBQVEsQ0FBQ3oxQixLQUFUO0FBQ0gsR0FGYSxDQUFkOztBQUlBLFFBQU02MUIsYUFBYSxHQUFJMzFCLEtBQUQsSUFBK0I7QUFDakQsVUFBTTQxQixVQUFVLEdBQUc1MUIsS0FBSyxDQUFDNjFCLGFBQXpCO0FBQ0EsVUFBTUMsZUFBZSxHQUFHRixVQUFVLENBQUNoNkIsS0FBWCxDQUFpQmdXLE1BQXpDO0FBQ0EsVUFBTW1rQixhQUFhLEdBQUdILFVBQVUsQ0FBQy9SLGNBQVgsSUFBNkIsQ0FBbkQ7QUFDQTRSLElBQUFBLHdCQUF3QixDQUFDTSxhQUFhLEtBQUtELGVBQWxCLElBQXFDOTFCLEtBQUssQ0FBQ2cyQixLQUFOLEtBQWdCMVcsMERBQXRELENBQXhCOztBQUVBLFFBQUksQ0FBQ3RmLEtBQUssQ0FBQ2cyQixLQUFOLEtBQWdCMVcsMERBQWhCLElBQW9DdGYsS0FBSyxDQUFDZzJCLEtBQU4sS0FBZ0IxVyw2REFBckQsS0FBNkV3VyxlQUFlLEtBQUssQ0FBckcsRUFBd0c7QUFDcEdsbkIsTUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYmduQixRQUFBQSxVQUFVLENBQUNoUyxpQkFBWCxDQUE2QmtTLGVBQTdCLEVBQThDQSxlQUE5QztBQUNILE9BRlMsQ0FBVjtBQUdIOztBQUVELFFBQUk5MUIsS0FBSyxDQUFDZzJCLEtBQU4sS0FBZ0IxVywwREFBaEIsSUFBb0NpVyxRQUFwQyxJQUFnREYsU0FBcEQsRUFBK0Q7QUFDM0RFLE1BQUFBLFFBQVEsQ0FBQ1ksSUFBVDtBQUNIOztBQUVEYixJQUFBQSxTQUFTLENBQUN0MUIsS0FBRCxDQUFUO0FBQ0gsR0FqQkQ7O0FBbUJBLHNCQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsT0FBRyxFQUFFMDFCLFdBQXhCO0FBQXFDLGFBQVMsRUFBRXY1QixTQUFoRDtBQUEyRCxTQUFLLEVBQUVQLEtBQWxFO0FBQXlFLGFBQVMsRUFBRSs1QjtBQUFwRixLQUF1R3h0QixJQUF2RyxFQURKO0FBR0gsQ0FyQ0Q7O0FBdUNPLE1BQU1pdUIsU0FBUyxHQUFHcDRCLDJDQUFJLENBQUNvM0Isa0JBQUQsQ0FBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWFBLE1BQU1mLFdBQVcsR0FBRyxNQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxXQUFwQjtBQUNBLE1BQU0rQixhQUFhLEdBQUcsS0FBdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBakI7O0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsTUFBTXg0QixvREFBUyxDQUFDdTJCLFdBQUQsQ0FBM0M7O0FBRU8sTUFBTTdELGFBQWEsR0FBRyxDQUFDO0FBQzFCNzBCLEVBQUFBLEtBRDBCO0FBRTFCNDZCLEVBQUFBLFFBRjBCO0FBRzFCQyxFQUFBQSxRQUgwQjtBQUkxQkMsRUFBQUEsUUFKMEI7QUFLMUJDLEVBQUFBLFVBTDBCO0FBTTFCQyxFQUFBQSxpQkFOMEI7QUFPMUJoRixFQUFBQSxtQkFQMEI7QUFRMUJJLEVBQUFBO0FBUjBCLENBQUQsS0FTaEI7QUFDVCxRQUFNNkUsTUFBTSxHQUFHajdCLEtBQUssR0FBRzY2QixRQUF2QjtBQUNBLFFBQU1LLFdBQVcsR0FBR2w3QixLQUFLLEdBQUc0NkIsUUFBNUI7QUFFQSxRQUFNM2UsS0FBSyxHQUFHb0osc0VBQWEsRUFBM0I7QUFDQSxRQUFNOFYsU0FBUyxHQUFHbGYsS0FBSyxLQUFLeWUsUUFBNUI7QUFFQSxRQUFNVSxPQUFPLEdBQUc3NEIsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBdEI7QUFFQSxRQUFNdzNCLGFBQWEsR0FBRzEzQixrREFBVyxDQUM1QitCLEtBQUQsSUFBMEI7QUFDdEIsUUFBSUEsS0FBSyxDQUFDZzJCLEtBQU4sS0FBZ0IxVyw0REFBaEIsSUFBc0N1WCxNQUExQyxFQUFrRDtBQUM5Q2pGLE1BQUFBLG1CQUFtQjtBQUN0QixLQUZELE1BRU8sSUFBSTV4QixLQUFLLENBQUNnMkIsS0FBTixLQUFnQjFXLDhEQUFoQixJQUF3Q3dYLFdBQTVDLEVBQXlEO0FBQzVEOUUsTUFBQUEsbUJBQW1CO0FBQ3RCO0FBQ0osR0FQNEIsRUFRN0IsQ0FBQzZFLE1BQUQsRUFBU0MsV0FBVCxFQUFzQjlFLG1CQUF0QixFQUEyQ0osbUJBQTNDLENBUjZCLENBQWpDO0FBV0EsUUFBTXVGLGlCQUFpQixHQUFHbDVCLGtEQUFXLENBQ2hDK0IsS0FBRCxJQUF3QjtBQUNwQixRQUFJNDJCLGlCQUFKLEVBQXVCO0FBQUE7O0FBQ25CLFlBQU1RLFNBQVMsR0FBR0MsTUFBTSx3QkFBQ2hCLGFBQWEsQ0FBQ2lCLElBQWQsQ0FBb0J0M0IsS0FBSyxDQUFDNjFCLGFBQVAsQ0FBMENqNkIsS0FBN0QsQ0FBRCxxQkFBQyxvQkFBc0UsQ0FBdEUsQ0FBRCxDQUF4Qjs7QUFFQSxVQUFJdzdCLFNBQVMsR0FBR1gsUUFBaEIsRUFBMEI7QUFDdEJHLFFBQUFBLGlCQUFpQixDQUFDSCxRQUFELENBQWpCO0FBQ0gsT0FGRCxNQUVPLElBQUlXLFNBQVMsSUFBSVosUUFBYixJQUF5QixDQUFDYSxNQUFNLENBQUNFLFNBQVAsQ0FBaUJILFNBQWpCLENBQTFCLElBQXlELENBQUNBLFNBQTlELEVBQXlFO0FBQzVFUixRQUFBQSxpQkFBaUIsQ0FBQ0osUUFBRCxDQUFqQjtBQUNILE9BRk0sTUFFQTtBQUNISSxRQUFBQSxpQkFBaUIsQ0FBQ1EsU0FBRCxDQUFqQjtBQUNIO0FBQ0o7QUFDSixHQWJnQyxFQWNqQyxDQUFDUixpQkFBRCxFQUFvQkgsUUFBcEIsRUFBOEJELFFBQTlCLENBZGlDLENBQXJDO0FBaUJBLFFBQU1nQixnQkFBZ0IsR0FBR3Y1QixrREFBVyxDQUMvQitCLEtBQUQsSUFBdUI7QUFDbkIsUUFBSUEsS0FBSyxDQUFDeTNCLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNsQjdGLE1BQUFBLG1CQUFtQjtBQUN0QixLQUZELE1BRU87QUFDSEksTUFBQUEsbUJBQW1CO0FBQ3RCO0FBQ0osR0FQK0IsRUFRaEMsQ0FBQ0EsbUJBQUQsRUFBc0JKLG1CQUF0QixDQVJnQyxDQUFwQzs7QUFXQSxRQUFNOEYsaUJBQWlCLEdBQUcsTUFBTTtBQUM1QixRQUFJYixNQUFKLEVBQVk7QUFDUjk0QixNQUFBQSxvREFBUyxDQUFDczJCLFdBQUQsQ0FBVDtBQUNBekMsTUFBQUEsbUJBQW1CO0FBQ3RCO0FBQ0osR0FMRDs7QUFPQSxRQUFNK0Ysc0JBQXNCLEdBQUcsTUFBTTtBQUNqQyxRQUFJYixXQUFKLEVBQWlCO0FBQ2IvNEIsTUFBQUEsb0RBQVMsQ0FBQ3MyQixXQUFELENBQVQ7QUFDQXJDLE1BQUFBLG1CQUFtQjtBQUN0QjtBQUNKLEdBTEQ7O0FBT0Esc0JBQ0k7QUFBSyxPQUFHLEVBQUVnRixPQUFWO0FBQW1CLGFBQVMsRUFBRTcrQiwrREFBVzJGO0FBQXpDLGtCQUNJO0FBQUssYUFBUyxFQUFFM0YsbUVBQWV5L0I7QUFBL0Isa0JBQ0k7QUFBSyxhQUFTLEVBQUV6L0IsdUVBQW1CMC9CO0FBQW5DLGtCQUNJLDJEQUFDLDJEQUFEO0FBQ0ksU0FBSyxFQUFFajhCLEtBRFg7QUFFSSxhQUFTLE1BRmI7QUFHSSxhQUFTLEVBQUV6RCxnRUFIZjtBQUlJLFVBQU0sRUFBRTtBQUFBOztBQUFBLGlDQUFNNitCLE9BQU8sQ0FBQ24zQixPQUFkLHFCQUFNLGlCQUFpQms0QixTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0M3L0Isd0VBQWxDLENBQU47QUFBQSxLQUpaO0FBS0ksV0FBTyxFQUFFO0FBQUE7O0FBQUEsa0NBQU02K0IsT0FBTyxDQUFDbjNCLE9BQWQscUJBQU0sa0JBQWlCazRCLFNBQWpCLENBQTJCbE8sR0FBM0IsQ0FBK0IxeEIsd0VBQS9CLENBQU47QUFBQSxLQUxiO0FBTUksYUFBUyxFQUFFdzlCLGFBTmY7QUFPSSxZQUFRLEVBQUV3QixpQkFQZDtBQVFJLFdBQU8sRUFBRUs7QUFSYixJQURKLENBREosQ0FESixFQWVLZCxRQUFRLGlCQUNMO0FBQUssYUFBUyxFQUFFdjBCLGlEQUFFLENBQUNoSyx1RUFBRCxFQUFzQncrQixVQUF0QixDQUFsQjtBQUFxRCxTQUFLLEVBQUU7QUFBRWh6QixNQUFBQSxlQUFlLEVBQUcsT0FBTSt5QixRQUFTO0FBQW5DO0FBQTVELElBaEJSLGVBa0JJO0FBQUssYUFBUyxFQUFFditCLG1FQUFlOGM7QUFBL0Isa0JBQ0k7QUFDSSxhQUFTLEVBQUU5UyxpREFBRSxDQUNUaEssOERBRFMsRUFFVEEsdUVBRlMsRUFHVDQrQixTQUFTLElBQUk1K0Isc0VBSEosRUFJVCxDQUFDMCtCLE1BQUQsSUFBVzErQixpRkFKRixDQURqQjtBQU9JLGdCQUFZLEVBQUVvK0IsbUJBUGxCO0FBUUksV0FBTyxFQUFFbUI7QUFSYixJQURKLGVBV0k7QUFDSSxhQUFTLEVBQUV2MUIsaURBQUUsQ0FDVGhLLDhEQURTLEVBRVRBLHVFQUZTLEVBR1Q0K0IsU0FBUyxJQUFJNStCLHNFQUhKLEVBSVQsQ0FBQzIrQixXQUFELElBQWdCMytCLGlGQUpQLENBRGpCO0FBT0ksZ0JBQVksRUFBRW8rQixtQkFQbEI7QUFRSSxXQUFPLEVBQUVvQjtBQVJiLElBWEosQ0FsQkosQ0FESjtBQTJDSCxDQWxITTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JQO0FBQ0EsaUVBQWUsQ0FBQyw0c0JBQTRzQjs7Ozs7Ozs7Ozs7Ozs7O0FDRDV0QjtBQUNBLGlFQUFlLENBQUMsbTNCQUFtM0I7Ozs7Ozs7Ozs7Ozs7OztBQ0RuNEI7QUFDQSxpRUFBZSxDQUFDLHdnRUFBd2dFOzs7Ozs7Ozs7Ozs7Ozs7QUNEeGhFO0FBQ0EsaUVBQWUsQ0FBQyw0QkFBNEI7Ozs7Ozs7Ozs7Ozs7OztBQ0Q1QztBQUNBLGlFQUFlLENBQUMsMG1CQUEwbUI7Ozs7Ozs7Ozs7Ozs7OztBQ0QxbkI7QUFDQSxpRUFBZSxDQUFDLGczQ0FBZzNDOzs7Ozs7Ozs7Ozs7Ozs7QUNEaDRDO0FBQ0EsaUVBQWUsQ0FBQyxnT0FBZ087Ozs7Ozs7Ozs7Ozs7OztBQ0RoUDtBQUNBLGlFQUFlLENBQUMsdUdBQXVHOzs7Ozs7Ozs7Ozs7Ozs7QUNEdkg7QUFDQSxpRUFBZSxDQUFDLHd2QkFBd3ZCOzs7Ozs7Ozs7Ozs7Ozs7QUNEeHdCO0FBQ0EsaUVBQWUsQ0FBQyw4VkFBOFY7Ozs7Ozs7Ozs7Ozs7OztBQ0Q5VztBQUNBLGlFQUFlLENBQUMsOFdBQThXOzs7Ozs7Ozs7Ozs7Ozs7QUNEOVg7QUFDQSxpRUFBZSxDQUFDLGdvQkFBZ29COzs7Ozs7VUNEaHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Cb3gvQm94LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi90eXBlcy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5L0N1cnJlbmN5LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5L3R5cGVzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvRm9ybWF0TnVtYmVyL0Zvcm1hdE51bWJlci50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Gb3JtYXRUZXh0L0Zvcm1hdFRleHQudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9NZWRpYUNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVF1ZXJ5L01lZGlhUHJvdmlkZXIudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9NZWRpYVF1ZXJ5LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvZ2V0QnlIZWlnaHQudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL01lZGlhUXVlcnkvc3RhdGljLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFRdWVyeS91dGlscy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL1Jld2FyZHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvVGV4dEJ1dHRvbi9UZXh0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL1RleHQvVGV4dC50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwL1Rvb2x0aXAudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2dsb2JhbC1zdHlsZXMvbWl4aW5zL21lZGlhQ3NzLmpzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2dsb2JhbC1zdHlsZXMvdmFyaWFibGVzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9nbG9iYWwtc3R5bGVzL3ZhcmlhYmxlcy9zcGFjaW5nLmpzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9kYXRhLWxheWVyL2RhdGEtbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2RhdGEtbGF5ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvY2xpZW50L2V2ZW50cy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2NsaWVudC9pbnRlcm5hbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvY2hpbGRyZW4udHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2Vudi92aWV3L2NvbW1vbi50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvZXZlbnRzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9lbnYvdmlldy9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZW52L3ZpZXcvc2VuZEV2ZW50LnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9mdW5jdGlvbi50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvZ2V0LWZyb20tY2FsbHN0YWNrLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9ob2NzL2FkYXB0aXZlL2FkYXB0aXZlLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlQ2FsbE9uY2UudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2hvb2tzL3VzZUtleWRvd25MaXN0ZW5lci50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvaG9va3MvdXNlTGF5b3V0UmVhZHkudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL2hvb2tzL3VzZU1lZGlhLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9ob29rcy91c2VTY2FsZVN0YXRlLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9rZXljb2Rlcy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvbGlrZUFycmF5L2xpa2VBcnJheS50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvbW91c2Utc2VsZWN0aW9uLmpzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi9udWxsYWJsZS50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvc291bmQuanMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3N0cmluZy11dGlscy50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvdmlldy1lbnYtaGVscGVyL0NsaWNrT3V0c2lkZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3ZpZXctZW52LWhlbHBlci9EYXRhVHJhY2tlci50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvdmlldy1lbnYtaGVscGVyL1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvdmlldy1lbnYtaGVscGVyL2R1bXBWaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3ZpZXctZW52LWhlbHBlci9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvdmlldy1lbnYtaGVscGVyL2xvY2FsZS50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvdmlldy1lbnYtaGVscGVyL3Nob3dNb2RlbC50cyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9saWIvdmlldy1lbnYtaGVscGVyL3R5cGVzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi92aWV3LWVudi1oZWxwZXIvdmlldy1ldmVudHMudHMiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvbGliL3dyYXBwZXJzL01lZGlhV3JhcHBlci9NZWRpYVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2xpYi93cmFwcGVycy9NZWRpYVdyYXBwZXIvTWVkaWFXcmFwcGVySW5uZXIudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9jb21wb25lbnRzL0FwcC9BcHAudHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L2NvbXBvbmVudHMvRGVzY3JpcHRpb24vRGVzY3JpcHRpb24udHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvQXJtb3J5WWFyZFBvc3RQcm9ncmVzc2lvbkJ1eVZpZXcvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9jb21wb25lbnRzL1RvZ2dsZUJ1dHRvbi9Ub2dnbGVCdXR0b24udHN4Iiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L21vZGVsLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L3R5cGVzLnRzIiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL2NvbXBvbmVudHMvVG9rZW5zU3RlcHBlci9UZXh0SW5wdXQvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9jb21wb25lbnRzL1Rva2Vuc1N0ZXBwZXIvVG9rZW5zU3RlcHBlci50c3giLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9Cb3gvQm94LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9DQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5L0N1cnJlbmN5LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uL3NyYy9jb21wb25lbnRzL0Zvcm1hdFRleHQvRm9ybWF0VGV4dC5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi9zcmMvY29tcG9uZW50cy9UZXh0QnV0dG9uL1RleHRCdXR0b24uY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4vc3JjL2NvbXBvbmVudHMvVGV4dC9UZXh0LmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9jb21wb25lbnRzL0FwcC9BcHAuY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L2NvbXBvbmVudHMvRGVzY3JpcHRpb24vRGVzY3JpcHRpb24uY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2UvLi4vLi4vLi4vd290X2V4dC9hcm1vcnlfeWFyZC9ndWkvZ2FtZWZhY2Uvc3JjL3ZpZXdzL2xvYmJ5L2ZlYXR1cmUvQXJtb3J5WWFyZFBvc3RQcm9ncmVzc2lvbkJ1eVZpZXcvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS8uLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9jb21wb25lbnRzL1RvZ2dsZUJ1dHRvbi9Ub2dnbGVCdXR0b24uY3NzIiwid2VicGFjazovL2dhbWVmYWNlLy4uLy4uLy4uL3dvdF9leHQvYXJtb3J5X3lhcmQvZ3VpL2dhbWVmYWNlL3NyYy92aWV3cy9sb2JieS9mZWF0dXJlL2NvbXBvbmVudHMvVG9rZW5zU3RlcHBlci9Ub2tlbnNTdGVwcGVyLmNzcyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FtZWZhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2dhbWVmYWNlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nYW1lZmFjZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHNwYWNpbmcgZnJvbSAnZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvc3BhY2luZyc7XHJcbmltcG9ydCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXIsIHsgQWRhcHRpdmVQcm9wcyB9IGZyb20gJ2xpYi9ob2NzL2FkYXB0aXZlL2FkYXB0aXZlJztcclxuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQm94LmNzcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTdGFuZGFyZFNwYWNpbmdUeXBlID0ga2V5b2YgdHlwZW9mIHNwYWNpbmc7XHJcbmV4cG9ydCB0eXBlIFNwYWNpbmdUeXBlID0gU3RhbmRhcmRTcGFjaW5nVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI7XHJcbmV4cG9ydCBjb25zdCBzdGFuZGFyZE1hcmdpbnMgPSBPYmplY3Qua2V5cyhzcGFjaW5nKSBhcyBTdGFuZGFyZFNwYWNpbmdUeXBlW107XHJcblxyXG5leHBvcnQgdHlwZSBDdXN0b21Db21wb25lbnRSZXF1aXJlZFByb3BzID0geyBjbGFzc05hbWU/OiBzdHJpbmc7IHN0eWxlPzogQ1NTUHJvcGVydGllczsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9O1xyXG5cclxuY29uc3QgZGVmYXVsdFhsTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fWEwsIG1yOiBzdHlsZXMubXJfX1hMLCBtYjogc3R5bGVzLm1iX19YTCwgbWw6IHN0eWxlcy5tbF9fWEwgfTtcclxuY29uc3QgZGVmYXVsdExnTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fTEcsIG1yOiBzdHlsZXMubXJfX0xHLCBtYjogc3R5bGVzLm1iX19MRywgbWw6IHN0eWxlcy5tbF9fTEcgfTtcclxuY29uc3QgZGVmYXVsdE1kcE1hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX01EcCwgbXI6IHN0eWxlcy5tcl9fTURwLCBtYjogc3R5bGVzLm1iX19NRHAsIG1sOiBzdHlsZXMubWxfX01EcCB9O1xyXG5jb25zdCBkZWZhdWx0TWRNYXJnaW5zID0geyBtdDogc3R5bGVzLm10X19NRCwgbXI6IHN0eWxlcy5tcl9fTUQsIG1iOiBzdHlsZXMubWJfX01ELCBtbDogc3R5bGVzLm1sX19NRCB9O1xyXG5jb25zdCBkZWZhdWx0U21wTWFyZ2lucyA9IHsgbXQ6IHN0eWxlcy5tdF9fU01wLCBtcjogc3R5bGVzLm1yX19TTXAsIG1iOiBzdHlsZXMubWJfX1NNcCwgbWw6IHN0eWxlcy5tbF9fU01wIH07XHJcbmNvbnN0IGRlZmF1bHRTbU1hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX1NNLCBtcjogc3R5bGVzLm1yX19TTSwgbWI6IHN0eWxlcy5tYl9fU00sIG1sOiBzdHlsZXMubWxfX1NNIH07XHJcbmNvbnN0IGRlZmF1bHRYc01hcmdpbnMgPSB7IG10OiBzdHlsZXMubXRfX1hTLCBtcjogc3R5bGVzLm1yX19YUywgbWI6IHN0eWxlcy5tYl9fWFMsIG1sOiBzdHlsZXMubWxfX1hTIH07XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TWFyZ2luTWFwID0ge1xyXG4gICAgWEw6IGRlZmF1bHRYbE1hcmdpbnMsXHJcbiAgICBMRzogZGVmYXVsdExnTWFyZ2lucyxcclxuICAgIE1EcDogZGVmYXVsdE1kcE1hcmdpbnMsXHJcbiAgICBNRDogZGVmYXVsdE1kTWFyZ2lucyxcclxuICAgIFNNcDogZGVmYXVsdFNtcE1hcmdpbnMsXHJcbiAgICBTTTogZGVmYXVsdFNtTWFyZ2lucyxcclxuICAgIFhTOiBkZWZhdWx0WHNNYXJnaW5zLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNYXJnaW5zID0gT2JqZWN0LmtleXMoZGVmYXVsdE1hcmdpbk1hcCkgYXMgKGtleW9mIHR5cGVvZiBkZWZhdWx0TWFyZ2luTWFwKVtdO1xyXG5cclxuY29uc3QgbWFyZ2luS2V5TGlzdCA9IFsnbXQnLCAnbXInLCAnbWInLCAnbWwnXSBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGdldE1hcmdpbkNsYXNzTmFtZXMgPSAobWFyZ2luTWFwOiB7IG10PzogU3BhY2luZ1R5cGU7IG1yPzogU3BhY2luZ1R5cGU7IG1iPzogU3BhY2luZ1R5cGU7IG1sPzogU3BhY2luZ1R5cGUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIG1hcmdpbktleUxpc3QucmVkdWNlKChjbGFzc05hbWVzLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmdpbk1hcFtrZXldO1xyXG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NOYW1lcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZXMuY29uY2F0KGRlZmF1bHRNYXJnaW5NYXBbdmFsdWUgPT09IHRydWUgPyAnTUQnIDogdmFsdWVdW2tleV0pO1xyXG4gICAgfSwgW10gYXMgc3RyaW5nW10pO1xyXG59O1xyXG5cclxuY29uc3QgbWFyZ2luS2V5UHJvcGVydHlNYXAgPSB7XHJcbiAgICBtdDogJ21hcmdpblRvcCcsXHJcbiAgICBtcjogJ21hcmdpblJpZ2h0JyxcclxuICAgIG1iOiAnbWFyZ2luQm90dG9tJyxcclxuICAgIG1sOiAnbWFyZ2luTGVmdCcsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5jb25zdCBnZXRNYXJnaW5TdHlsZSA9IChtYXJnaW5NYXA6IHsgbXQ/OiBTcGFjaW5nVHlwZTsgbXI/OiBTcGFjaW5nVHlwZTsgbWI/OiBTcGFjaW5nVHlwZTsgbWw/OiBTcGFjaW5nVHlwZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gbWFyZ2luS2V5TGlzdC5yZWR1Y2UoKHN0eWxlLCBrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG1hcmdpbk1hcFtrZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gbWFyZ2luS2V5UHJvcGVydHlNYXBba2V5XTtcclxuICAgICAgICAgICAgc3R5bGVbcHJvcGVydHldID0gdmFsdWUgKyAncmVtJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfSwge30gYXMgQ1NTUHJvcGVydGllcyk7XHJcbn07XHJcblxyXG50eXBlIEJhc2VCb3hQcm9wcyA9IHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIG0/OiBTcGFjaW5nVHlwZTtcclxuICAgIG10PzogU3BhY2luZ1R5cGU7XHJcbiAgICBtcj86IFNwYWNpbmdUeXBlO1xyXG4gICAgbWI/OiBTcGFjaW5nVHlwZTtcclxuICAgIG1sPzogU3BhY2luZ1R5cGU7XHJcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XHJcbiAgICBjb2x1bW4/OiBib29sZWFuO1xyXG4gICAgcm93PzogYm9vbGVhbjtcclxuICAgIHNwYWNlQmV0d2Vlbj86IGJvb2xlYW47XHJcbiAgICBzcGFjZUFyb3VuZD86IGJvb2xlYW47XHJcbiAgICBmbGV4U3RhcnQ/OiBib29sZWFuO1xyXG4gICAgY2VudGVyPzogYm9vbGVhbjtcclxuICAgIGZsZXhFbmQ/OiBib29sZWFuO1xyXG4gICAgZ3Jvdz86IGJvb2xlYW47XHJcbiAgICBzaHJpbms/OiBib29sZWFuO1xyXG4gICAgd3JhcD86IGJvb2xlYW47XHJcbn0gJiBQaWNrPFxyXG4gICAgQ1NTUHJvcGVydGllcyxcclxuICAgICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdmbGV4JyB8ICdmbGV4RGlyZWN0aW9uJyB8ICdmbGV4V3JhcCcgfCAnanVzdGlmeUNvbnRlbnQnIHwgJ2FsaWduSXRlbXMnIHwgJ2FsaWduU2VsZidcclxuPjtcclxuXHJcbmV4cG9ydCB0eXBlIEJveFN0YXRpY1Byb3BzID0gUmVhZG9ubHk8QmFzZUJveFByb3BzPiAmIE9taXQ8UmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+LCBrZXlvZiBCYXNlQm94UHJvcHM+O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IGdlbmVyYXRlcyBhIGRpdiB3aXRoIGFwcGxpZWQgbGF5b3V0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gQm94UHJvcHMgLSBPYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIEBwYXJhbSB7c3RyaW5nfSBbY2xhc3NOYW1lXSAtIEFkZGl0aW9uYWwgY2xhc3MoZXMpIHRvIGJlIGFkZGVkIHRvIHRoZSBjb21wb25lbnQuXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzWyd3aWR0aCddfSBbd2lkdGhdIC0gV2lkdGggb2YgdGhlIGJveC4gU3VwcG9ydHMgc3RhbmRhcmQgQ1NTIHVuaXRzLCBudW1lcmljIHZhbHVlcyBhcmUgdHJhbnNmb3JtZWQgdG8gcmVtLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1snaGVpZ2h0J119IFtoZWlnaHRdIC0gSGVpZ2h0IG9mIHRoZSBib3guIFN1cHBvcnRzIHN0YW5kYXJkIENTUyB1bml0cywgbnVtZXJpYyB2YWx1ZXMgYXJlIHRyYW5zZm9ybWVkIHRvIHJlbS5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byBhbGwgc2lkZXMgb2YgdGhlIGJveC4gU3VwcG9ydHMgWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBmb3IgTUQgbWFyZ2luLCBudW1lcmljIHZhbHVlcyBhcmUgdHJhbnNmb3JtZWQgdG8gcmVtLlxyXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IFttdD1tXSAtIE1hcmdpbiB2YWx1ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSB0b3Agb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbXI9bV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgcmlnaHQgb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBbbWI9bV0gLSBNYXJnaW4gdmFsdWUgdG8gYmUgYXBwbGllZCB0byB0aGUgYm90dG9tIG9mIHRoZSBib3guXHJcbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gW21sPW1dIC0gTWFyZ2luIHZhbHVlIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGxlZnQgb2YgdGhlIGJveC5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtjb2x1bW5dIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggY29udGFpbmVyIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYSBjb2x1bW4uXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbcm93XSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGNvbnRhaW5lciBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGEgcm93LlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImZsZXhEaXJlY3Rpb25cIl19IFtmbGV4RGlyZWN0aW9uXSAtIFNwZWNpZmllcyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBmbGV4IGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtmbGV4U3RhcnRdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgdG8gdGhlIHN0YXJ0IG9mIHRoZSBjb250YWluZXIuXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbY2VudGVyXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBjZW50ZXJlZCB3aXRoaW4gdGhlIGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtmbGV4RW5kXSAtIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBhbGlnbmVkIHRvIHRoZSBlbmQgb2YgdGhlIGNvbnRhaW5lci5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtzcGFjZUJldHdlZW5dIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGV2ZW5seSBzcGFjZWQgd2l0aCBzcGFjZSBiZXR3ZWVuIHRoZW0uXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbc3BhY2VBcm91bmRdIC0gU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGV2ZW5seSBzcGFjZWQgd2l0aCBzcGFjZSBhcm91bmQgdGhlbS5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJqdXN0aWZ5Q29udGVudFwiXX0gW2p1c3RpZnlDb250ZW50XSAtIFNwZWNpZmllcyBob3cgdGhlIGZsZXggaXRlbXMgc2hvdWxkIGJlIGFsaWduZWQgYWxvbmcgdGhlIG1haW4gYXhpcy5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJhbGlnbkl0ZW1zXCJdfSBbYWxpZ25JdGVtc10gLSBTcGVjaWZpZXMgaG93IHRoZSBmbGV4IGl0ZW1zIHNob3VsZCBiZSBhbGlnbmVkIGFsb25nIHRoZSBjcm9zcyBheGlzLlxyXG4gKiAgIEBwYXJhbSB7Q1NTUHJvcGVydGllc1tcImFsaWduU2VsZlwiXX0gW2FsaWduU2VsZl0gLSBTcGVjaWZpZXMgaG93IGEgZmxleCBpdGVtIHNob3VsZCBhbGlnbiBpdHNlbGYgYWxvbmcgdGhlIGNyb3NzIGF4aXMuXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbd3JhcF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgd3JhcCBpZiB0aGV5IGV4Y2VlZCB0aGUgY29udGFpbmVyJ3Mgd2lkdGguXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzW1wiZmxleFdyYXBcIl19IFtmbGV4V3JhcF0gLSBTcGVjaWZpZXMgd2hldGhlciB0aGUgZmxleCBpdGVtcyBzaG91bGQgd3JhcCBpZiB0aGV5IGV4Y2VlZCB0aGUgY29udGFpbmVyJ3Mgd2lkdGguXHJcbiAqICAgQHBhcmFtIHtib29sZWFufSBbZ3Jvd10gLSBTcGVjaWZpZXMgdGhlIGZsZXggZ3JvdyBmYWN0b3Igb2YgdGhlIGZsZXggaXRlbS5cclxuICogICBAcGFyYW0ge2Jvb2xlYW59IFtzaHJpbmtdIC0gU3BlY2lmaWVzIHRoZSBmbGV4IHNocmluayBmYWN0b3Igb2YgdGhlIGZsZXggaXRlbS5cclxuICogICBAcGFyYW0ge0NTU1Byb3BlcnRpZXNbXCJmbGV4XCJdfSBbZmxleF0gLSBTcGVjaWZpZXMgdGhlIGZsZXggZ3JvdywgZmxleCBzaHJpbmssIGFuZCBmbGV4IGJhc2lzIG9mIHRoZSBmbGV4IGl0ZW0uXHJcbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzfSBbc3R5bGVdIC0gQ3VzdG9tIHN0eWxlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXHJcbiAqICAgQHBhcmFtIHtSZWFjdE5vZGV9IFtjaGlsZHJlbl0gLSBDaGlsZCBjb21wb25lbnRzIHRvIGJlIHJlbmRlcmVkIHdpdGhpbiB0aGUgY29tcG9uZW50LlxyXG4gKiAgIEBwYXJhbSB7T2JqZWN0fSBbLi4ucmVzdFByb3BzXSAtIEFkZGl0aW9uYWwgSFRNTCBkaXYgcHJvcGVydGllcy5cclxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IEEgYm94IGVsZW1lbnQuXHJcbiAqL1xyXG5jb25zdCBCb3ggPSAoe1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHQsXHJcbiAgICBtLFxyXG4gICAgbXQgPSBtLFxyXG4gICAgbXIgPSBtLFxyXG4gICAgbWIgPSBtLFxyXG4gICAgbWwgPSBtLFxyXG4gICAgY29sdW1uLFxyXG4gICAgcm93LFxyXG4gICAgZmxleERpcmVjdGlvbiA9IChjb2x1bW4gJiYgJ2NvbHVtbicpIHx8IChyb3cgJiYgJ3JvdycpIHx8IHVuZGVmaW5lZCxcclxuICAgIGZsZXhTdGFydCxcclxuICAgIGNlbnRlcixcclxuICAgIGZsZXhFbmQsXHJcbiAgICBzcGFjZUJldHdlZW4sXHJcbiAgICBzcGFjZUFyb3VuZCxcclxuICAgIGp1c3RpZnlDb250ZW50ID0gKGZsZXhTdGFydCAmJiAnZmxleC1zdGFydCcpIHx8XHJcbiAgICAgICAgKGNlbnRlciAmJiAnY2VudGVyJykgfHxcclxuICAgICAgICAoZmxleEVuZCAmJiAnZmxleC1lbmQnKSB8fFxyXG4gICAgICAgIChzcGFjZUJldHdlZW4gJiYgJ3NwYWNlLWJldHdlZW4nKSB8fFxyXG4gICAgICAgIChzcGFjZUFyb3VuZCAmJiAnc3BhY2UtYXJvdW5kJykgfHxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICBhbGlnbkl0ZW1zID0gKGZsZXhTdGFydCAmJiAnZmxleC1zdGFydCcpIHx8IChjZW50ZXIgJiYgJ2NlbnRlcicpIHx8IChmbGV4RW5kICYmICdmbGV4LWVuZCcpIHx8IHVuZGVmaW5lZCxcclxuICAgIGFsaWduU2VsZixcclxuICAgIHdyYXAsXHJcbiAgICBmbGV4V3JhcCA9ICh3cmFwICYmICd3cmFwJykgfHwgdW5kZWZpbmVkLFxyXG4gICAgZ3JvdyxcclxuICAgIHNocmluayxcclxuICAgIGZsZXggPSBncm93IHx8IHNocmluayA/IGAke2dyb3cgPyAxIDogMH0gJHtzaHJpbmsgPyAxIDogMH0gYXV0b2AgOiB1bmRlZmluZWQsXHJcbiAgICBzdHlsZSxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgLi4ucmVzdFByb3BzXHJcbn06IEJveFN0YXRpY1Byb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbXB1dGVkU3R5bGUsIGNvbXB1dGVkQ2xhc3NOYW1lcyB9ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luTWFwID0ge1xyXG4gICAgICAgICAgICBtdCxcclxuICAgICAgICAgICAgbXIsXHJcbiAgICAgICAgICAgIG1iLFxyXG4gICAgICAgICAgICBtbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVkQ2xhc3NOYW1lcyA9IGdldE1hcmdpbkNsYXNzTmFtZXMobWFyZ2luTWFwKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5TdHlsZSA9IGdldE1hcmdpblN0eWxlKG1hcmdpbk1hcCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgLi4uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAuLi5tYXJnaW5TdHlsZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicgPyB3aWR0aCArICdyZW0nIDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInID8gaGVpZ2h0ICsgJ3JlbScgOiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBmbGV4LFxyXG4gICAgICAgICAgICAgICAgYWxpZ25TZWxmLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleERpcmVjdGlvbiB8fCBhbGlnbkl0ZW1zID8gJ2ZsZXgnIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wdXRlZENsYXNzTmFtZXMsXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt3aWR0aCwgaGVpZ2h0LCBtdCwgbXIsIG1iLCBtbCwgc3R5bGUsIGZsZXgsIGFsaWduU2VsZiwgZmxleERpcmVjdGlvbiwgZmxleFdyYXAsIGp1c3RpZnlDb250ZW50LCBhbGlnbkl0ZW1zXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYmFzZSwgLi4uY29tcHV0ZWRDbGFzc05hbWVzLCBjbGFzc05hbWUpfSBzdHlsZT17Y29tcHV0ZWRTdHlsZX0gey4uLnJlc3RQcm9wc30+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG50eXBlIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZSA9XHJcbiAgICB8ICd3aWR0aCdcclxuICAgIHwgJ2hlaWdodCdcclxuICAgIHwgJ20nXHJcbiAgICB8ICdtdCdcclxuICAgIHwgJ21yJ1xyXG4gICAgfCAnbWInXHJcbiAgICB8ICdtbCdcclxuICAgIHwgJ2ZsZXhEaXJlY3Rpb24nXHJcbiAgICB8ICdqdXN0aWZ5Q29udGVudCdcclxuICAgIHwgJ2FsaWduSXRlbXMnXHJcbiAgICB8ICdhbGlnblNlbGYnXHJcbiAgICB8ICdmbGV4V3JhcCdcclxuICAgIHwgJ2ZsZXgnO1xyXG5cclxuZXhwb3J0IHR5cGUgQm94UHJvcHMgPSBCb3hTdGF0aWNQcm9wcyAmIEFkYXB0aXZlUHJvcHM8Qm94U3RhdGljUHJvcHMsIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZT47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXI8Qm94U3RhdGljUHJvcHMsIEJveEFkYXB0aXZlUHJvcE5hbWVzVHlwZT4oQm94KTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tICdsaWIvc291bmQnO1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIE1vdXNlRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DQnV0dG9uLmNzcyc7XG5pbXBvcnQgeyBCdXR0b25TaXplLCBCdXR0b25UeXBlLCBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICAgIGNoaWxkcmVuLFxuICAgIHNpemUsXG4gICAgaXNGb2N1c2VkLFxuICAgIHR5cGUsXG4gICAgZGlzYWJsZWQsXG4gICAgbWl4Q2xhc3MsXG4gICAgc291bmRIb3ZlcixcbiAgICBzb3VuZENsaWNrLFxuICAgIG9uTW91c2VFbnRlcixcbiAgICBvbk1vdXNlTW92ZSxcbiAgICBvbk1vdXNlRG93bixcbiAgICBvbk1vdXNlVXAsXG4gICAgb25Nb3VzZUxlYXZlLFxuICAgIG9uQ2xpY2ssXG59OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgW2J1dHRvbkZvY3VzLCBzZXRCdXR0b25Gb2N1c10gPSB1c2VTdGF0ZShpc0ZvY3VzZWQpO1xuICAgIGNvbnN0IFtpc0hpZ2hsaWdodEFjdGl2ZSwgc2V0SGlnaGxpZ2h0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNGaXJzdEhvdmVyZWQsIHNldEZpcnN0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBzZXRGb2N1c09uQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnV0dG9uLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgICAgICBzZXRCdXR0b25Gb2N1cyh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtkaXNhYmxlZF0pO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VEb3duT3V0c2lkZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b25Gb2N1cyAmJiBidXR0b24uY3VycmVudCAhPT0gbnVsbCAmJiAhYnV0dG9uLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHNldEJ1dHRvbkZvY3VzKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2J1dHRvbkZvY3VzXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgb25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW2Rpc2FibGVkLCBvbkNsaWNrXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdW5kSG92ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwbGF5U291bmQoc291bmRIb3Zlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25Nb3VzZUVudGVyKSB7XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0Rmlyc3RIb3ZlcmVkKHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBbZGlzYWJsZWQsIHNvdW5kSG92ZXIsIG9uTW91c2VFbnRlcl0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9uTW91c2VNb3ZlKSB7XG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmUoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtvbk1vdXNlTW92ZV0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbk1vdXNlVXApIHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlVXAoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBbZGlzYWJsZWQsIG9uTW91c2VVcF0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNvdW5kQ2xpY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwbGF5U291bmQoc291bmRDbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25Nb3VzZURvd24pIHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgICBzZXRGb2N1c09uQnV0dG9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIFtkaXNhYmxlZCwgc291bmRDbGljaywgb25Nb3VzZURvd24sIHNldEZvY3VzT25CdXR0b24sIGlzRm9jdXNlZF0sXG4gICAgKTtcblxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbk1vdXNlTGVhdmUpIHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmUoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBbZGlzYWJsZWQsIG9uTW91c2VMZWF2ZV0sXG4gICAgKTtcblxuICAgIGNvbnN0IGNsYXNzQmFzZSA9IGNsYXNzTmFtZXMoXG4gICAgICAgIHN0eWxlcy5iYXNlLFxuICAgICAgICBzdHlsZXNbYGJhc2VfXyR7dHlwZX1gXSxcbiAgICAgICAge1xuICAgICAgICAgICAgW3N0eWxlcy5iYXNlX19kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgICAgICAgW3N0eWxlc1tgYmFzZV9fJHtzaXplfWBdXTogc2l6ZSxcbiAgICAgICAgICAgIFtzdHlsZXMuYmFzZV9fZm9jdXNdOiBidXR0b25Gb2N1cyxcbiAgICAgICAgICAgIFtzdHlsZXMuYmFzZV9faGlnaGxpZ2h0QWN0aXZlXTogaXNIaWdobGlnaHRBY3RpdmUsXG4gICAgICAgICAgICBbc3R5bGVzLmJhc2VfX2ZpcnN0SG92ZXJdOiBpc0ZpcnN0SG92ZXJlZCxcbiAgICAgICAgfSxcbiAgICAgICAgbWl4Q2xhc3MsXG4gICAgKTtcblxuICAgIGNvbnN0IGNsYXNzU3RhdGUgPSBjbGFzc05hbWVzKHN0eWxlcy5zdGF0ZSwgc3R5bGVzLnN0YXRlX19kZWZhdWx0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlRG93bk91dHNpZGUpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVNb3VzZURvd25PdXRzaWRlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaGFuZGxlTW91c2VEb3duT3V0c2lkZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0QnV0dG9uRm9jdXMoaXNGb2N1c2VkKTtcbiAgICB9LCBbaXNGb2N1c2VkXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e2J1dHRvbn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NCYXNlfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgICAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVNb3VzZURvd259XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgICAge3R5cGUgIT09IEJ1dHRvblR5cGUuZ2hvc3QgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja30gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dHVyZX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzU3RhdGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnN0YXRlRGlzYWJsZWR9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3RhdGVIaWdobGlnaHRIb3Zlcn0gLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0ZUhpZ2hsaWdodEFjdGl2ZX0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9IGxhbmc9e1Iuc3RyaW5ncy5zZXR0aW5ncy5MQU5HVUFHRV9DT0RFKCl9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogQnV0dG9uVHlwZS5wcmltYXJ5LFxuICAgIGlzRm9jdXNlZDogZmFsc2UsXG4gICAgc291bmRIb3ZlcjogJ2hpZ2hsaWdodCcsXG4gICAgc291bmRDbGljazogJ3BsYXknLFxufTtcblxuY29uc3QgQ0J1dHRvbiA9IG1lbW8oQnV0dG9uKTtcblxuZXhwb3J0IHsgQ0J1dHRvbiwgQnV0dG9uVHlwZSwgQnV0dG9uU2l6ZSB9O1xuIiwiaW1wb3J0IHsgU291bmRzIH0gZnJvbSAnZ3VpL2ltcGwvZ2VuL3Jlc291cmNlcy9zb3VuZHMnO1xuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBTb3VuZCA9IGtleW9mIFBpY2s8U291bmRzLCBFeGNsdWRlPGtleW9mIFNvdW5kcywga2V5b2YgR0ZGb2xkZXI+PjtcblxuZXhwb3J0IGVudW0gQnV0dG9uVHlwZSB7XG4gICAgbWFpbiA9ICdtYWluJyxcbiAgICBwcmltYXJ5ID0gJ3ByaW1hcnknLFxuICAgIHByaW1hcnlHcmVlbiA9ICdwcmltYXJ5R3JlZW4nLFxuICAgIHByaW1hcnlSZWQgPSAncHJpbWFyeVJlZCcsXG4gICAgc2Vjb25kYXJ5ID0gJ3NlY29uZGFyeScsXG4gICAgZ2hvc3QgPSAnZ2hvc3QnLFxufVxuXG5leHBvcnQgZW51bSBCdXR0b25TaXplIHtcbiAgICBleHRyYVNtYWxsID0gJ2V4dHJhU21hbGwnLFxuICAgIHNtYWxsID0gJ3NtYWxsJyxcbiAgICBtZWRpdW0gPSAnbWVkaXVtJyxcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBSZWFkb25seTx7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgICB0eXBlPzoga2V5b2YgdHlwZW9mIEJ1dHRvblR5cGU7XG4gICAgaXNGb2N1c2VkPzogYm9vbGVhbjtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgc2l6ZT86IGtleW9mIHR5cGVvZiBCdXR0b25TaXplO1xuICAgIG1peENsYXNzPzogc3RyaW5nO1xuICAgIHNvdW5kSG92ZXI/OiBTb3VuZCB8IG51bGw7XG4gICAgc291bmRDbGljaz86IFNvdW5kIHwgbnVsbDtcbiAgICBvbk1vdXNlRW50ZXI/OiBNb3VzZUV2ZW50SGFuZGxlcjtcbiAgICBvbk1vdXNlTW92ZT86IE1vdXNlRXZlbnRIYW5kbGVyO1xuICAgIG9uTW91c2VEb3duPzogTW91c2VFdmVudEhhbmRsZXI7XG4gICAgb25Nb3VzZVVwPzogTW91c2VFdmVudEhhbmRsZXI7XG4gICAgb25Nb3VzZUxlYXZlPzogTW91c2VFdmVudEhhbmRsZXI7XG4gICAgb25DbGljaz86IE1vdXNlRXZlbnRIYW5kbGVyO1xufT47XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDdXJyZW5jeVR5cGUsIFByb3BzIGFzIEN1cnJlbmN5UHJvcHMsIFN0b2NrQmFja2dyb3VuZE5hbWUgfSBmcm9tICcuL3R5cGVzJztcclxuZXhwb3J0IHR5cGUgeyBQcm9wcyBhcyBDdXJyZW5jeVByb3BzIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IEZvcm1hdE51bWJlciB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybWF0TnVtYmVyL0Zvcm1hdE51bWJlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3VycmVuY3kuY3NzJztcclxuXHJcbmNvbnN0IEN1cnJlbmN5Q29tcG9uZW50ID0gKHtcclxuICAgIGlzRGlzY291bnQsXHJcbiAgICBpc0ludGVyYWN0aXZlRGlzY291bnQsXHJcbiAgICBzaXplLFxyXG4gICAgdHlwZSxcclxuICAgIGlzRW5vdWdoLFxyXG4gICAgdmFsdWUsXHJcbiAgICBkaXNjb3VudFZhbHVlLFxyXG4gICAgc2hvd1BsdXMsXHJcbiAgICBzdG9ja0JhY2tncm91bmROYW1lID0gU3RvY2tCYWNrZ3JvdW5kTmFtZS5SZWQsXHJcbn06IEN1cnJlbmN5UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlQ2xhc3NlcyA9IGN4KHN0eWxlcy52YWx1ZSwgc3R5bGVzW2B2YWx1ZV9fJHt0eXBlfWBdLCAhaXNFbm91Z2ggJiYgc3R5bGVzLnZhbHVlX19ub3RFbm91Z2gpO1xyXG5cclxuICAgIGNvbnN0IGljb25DbGFzc2VzID0gY3goc3R5bGVzLmljb24sIHN0eWxlc1tgaWNvbl9fJHt0eXBlfS0ke3NpemV9YF0pO1xyXG5cclxuICAgIGNvbnN0IGRpc2NvdW50Q2xhc3NlcyA9IGN4KFxyXG4gICAgICAgIHN0eWxlcy5zdG9jayxcclxuICAgICAgICBkaXNjb3VudFZhbHVlICYmIHN0eWxlcy5zdG9ja19faW5kZW50LFxyXG4gICAgICAgIGlzSW50ZXJhY3RpdmVEaXNjb3VudCAmJiBzdHlsZXMuc3RvY2tfX2ludGVyYWN0aXZlLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwbHVzID0gc2hvd1BsdXMgJiYgdmFsdWUgPiAwICYmICcrJztcclxuXHJcbiAgICBjb25zdCBiYXNlQ2xhc3NlcyA9IGN4KHN0eWxlcy5iYXNlLCBzdHlsZXNbYGJhc2VfXyR7c2l6ZX1gXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Jhc2VDbGFzc2VzfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWx1ZUNsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAge3BsdXN9XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWF0TnVtYmVyIHZhbHVlPXt2YWx1ZX0gZm9ybWF0PXt0eXBlID09PSBDdXJyZW5jeVR5cGUuZ29sZCA/ICdnb2xkJyA6ICdpbnRlZ3JhbCd9IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3Nlc30gLz5cclxuICAgICAgICAgICAge2lzRGlzY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtkaXNjb3VudENsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0b2NrQmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFIuaW1hZ2VzLmd1aS5tYXBzLmljb25zLmxpYnJhcnkuJHtzdG9ja0JhY2tncm91bmROYW1lfSlgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7Qm9vbGVhbihkaXNjb3VudFZhbHVlKSAmJiBkaXNjb3VudFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5DdXJyZW5jeUNvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7IGlzRW5vdWdoOiB0cnVlIH07XHJcblxyXG5jb25zdCBDdXJyZW5jeSA9IFJlYWN0Lm1lbW88Q3VycmVuY3lQcm9wcz4oQ3VycmVuY3lDb21wb25lbnQpO1xyXG5cclxuZXhwb3J0IHsgQ3VycmVuY3kgfTtcclxuIiwiZXhwb3J0IGVudW0gQ3VycmVuY3lTaXplIHtcclxuICAgIHNtYWxsID0gJ3NtYWxsJyxcclxuICAgIGJpZyA9ICdiaWcnLFxyXG4gICAgbGFyZ2UgPSAnbGFyZ2UnLFxyXG4gICAgZXh0cmFMYXJnZSA9ICdleHRyYUxhcmdlJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ3VycmVuY3lUeXBlIHtcclxuICAgIGNyZWRpdHMgPSAnY3JlZGl0cycsXHJcbiAgICBnb2xkID0gJ2dvbGQnLFxyXG4gICAgY3J5c3RhbCA9ICdjcnlzdGFsJyxcclxuICAgIHhwID0gJ3hwJyxcclxuICAgIGZyZWVYUCA9ICdmcmVlWFAnLFxyXG4gICAgZXF1aXBDb2luID0gJ2VxdWlwQ29pbicsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN0b2NrQmFja2dyb3VuZE5hbWUge1xyXG4gICAgUmVkID0gJ1JlZEFjdGlvbkJHJyxcclxuICAgIEJsdWUgPSAnQmx1ZUFjdGlvbkJHJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJvcHMgPSBSZWFkb25seTx7XHJcbiAgICBpc0Rpc2NvdW50PzogYm9vbGVhbjtcclxuICAgIGlzSW50ZXJhY3RpdmVEaXNjb3VudD86IGJvb2xlYW47XHJcbiAgICBzaXplOiBrZXlvZiB0eXBlb2YgQ3VycmVuY3lTaXplO1xyXG4gICAgdHlwZToga2V5b2YgdHlwZW9mIEN1cnJlbmN5VHlwZTtcclxuICAgIGlzRW5vdWdoPzogYm9vbGVhbjtcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBkaXNjb3VudFZhbHVlPzogbnVtYmVyO1xyXG4gICAgc2hvd1BsdXM/OiBib29sZWFuO1xyXG4gICAgc3RvY2tCYWNrZ3JvdW5kTmFtZT86IFN0b2NrQmFja2dyb3VuZE5hbWU7XHJcbn0+O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTeXN0ZW1Mb2NhbGUsIE51bWJlckZvcm1hdFR5cGUgfSBmcm9tICdsaWIvdmlldy1lbnYtaGVscGVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgcmVhZG9ubHkgdmFsdWU6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZvcm1hdD86ICdpbnRlZ3JhbCcgfCAnZ29sZCc7XHJcbn1cclxuXHJcbmNsYXNzIEZvcm1hdE51bWJlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7IGZvcm1hdDogJ2ludGVncmFsJyB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgZm9ybWF0OiBudW1iZXI7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5mb3JtYXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnZ29sZCc6XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBOdW1iZXJGb3JtYXRUeXBlLkdPTEQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnaW50ZWdyYWwnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gTnVtYmVyRm9ybWF0VHlwZS5JTlRFR1JBTDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbnVtYmVyRm9ybWF0ID0gU3lzdGVtTG9jYWxlLmdldE51bWJlckZvcm1hdCh0aGlzLnByb3BzLnZhbHVlLCBmb3JtYXQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIG51bWJlckZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJGb3JtYXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgRm9ybWF0TnVtYmVyIH07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHsgZm9ybWF0U3RyaW5nLCBBbGlnbm1lbnQgfSBmcm9tICdsaWIvc3RyaW5nLXV0aWxzJztcblxuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb3JtYXRUZXh0LmNzcyc7XG5cbmV4cG9ydCBjb25zdCBGb3JtYXRUZXh0ID0gKHsgYmluZGluZywgdGV4dCA9ICcnLCBjbGFzc01peCwgYWxpZ25tZW50ID0gQWxpZ25tZW50LmxlZnQgfTogUHJvcHMpID0+IHtcbiAgICBpZiAodGV4dCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRm9ybWF0VGV4dCB3YXMgc3VwcGxpZWQgd2l0aCAnbnVsbCdcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIHt0ZXh0LnNwbGl0KCdcXG4nKS5tYXAoKHRleHRMaW5lLCBsaW5lSWQpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJhc2UsIGNsYXNzTWl4KX0ga2V5PXtgJHt0ZXh0TGluZX0tJHtsaW5lSWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXRTdHJpbmcodGV4dExpbmUsIGFsaWdubWVudCwgYmluZGluZykubWFwKCh0ZXh0LCB3b3JkSWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2Ake3dvcmRJZH0tJHt0ZXh0fWB9Pnt0ZXh0fTwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBlbnYgfSBmcm9tICdsaWIvZW52JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IHsgZ2V0U2l6ZXMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgeyB3aWR0aDogaW5pdGlhbFdpZHRoLCBoZWlnaHQ6IGluaXRpYWxIZWlnaHQgfSA9IGVudi5jbGllbnQuZ2V0U2l6ZSgncmVtJyk7XG5cbmV4cG9ydCB0eXBlIE1lZGlhQ29udGV4dFR5cGUgPSB7XG4gICAgZXh0cmFTbWFsbDogYm9vbGVhbjtcbiAgICBzbWFsbDogYm9vbGVhbjtcbiAgICBtZWRpdW06IGJvb2xlYW47XG4gICAgbGFyZ2U6IGJvb2xlYW47XG4gICAgZXh0cmFMYXJnZTogYm9vbGVhbjtcbiAgICBleHRyYVNtYWxsV2lkdGg6IGJvb2xlYW47XG4gICAgc21hbGxXaWR0aDogYm9vbGVhbjtcbiAgICBtZWRpdW1XaWR0aDogYm9vbGVhbjtcbiAgICBsYXJnZVdpZHRoOiBib29sZWFuO1xuICAgIGV4dHJhTGFyZ2VXaWR0aDogYm9vbGVhbjtcbiAgICBleHRyYVNtYWxsSGVpZ2h0OiBib29sZWFuO1xuICAgIHNtYWxsSGVpZ2h0OiBib29sZWFuO1xuICAgIG1lZGl1bUhlaWdodDogYm9vbGVhbjtcbiAgICBsYXJnZUhlaWdodDogYm9vbGVhbjtcbiAgICBleHRyYUxhcmdlSGVpZ2h0OiBib29sZWFuO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG5jb25zdCBpbml0aWFsVmFsdWU6IE1lZGlhQ29udGV4dFR5cGUgPSB7XG4gICAgd2lkdGg6IGluaXRpYWxXaWR0aCxcbiAgICBoZWlnaHQ6IGluaXRpYWxIZWlnaHQsXG4gICAgLi4uZ2V0U2l6ZXMoaW5pdGlhbFdpZHRoLCBpbml0aWFsSGVpZ2h0LCBCUkVBS1BPSU5UUyksXG59O1xuXG4vKipcbiAqIFVzZSB1c2VNZWRpYSBob29rIGZyb20gJ2xpYi9ob29rcy91c2VNZWRpYScgZGlyZWN0bHkgaW4geW91ciByZWFjdCBjb21wb25lbnRzXG4gKlxuICogVXNhZ2UgYW5kIHRlY2ggZG9jOiBodHRwczovL2NvbmZsdWVuY2UubGVzdGEuZ3JvdXAvcGFnZXMvdmlld3BhZ2UuYWN0aW9uP3BhZ2VJZD0xOTIzMjUyMjc2XG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IE1lZGlhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFZhbHVlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHVzZUNhbGxPbmNlIGZyb20gJ2xpYi9ob29rcy91c2VDYWxsT25jZSc7XG5cbmltcG9ydCB7IE1lZGlhQ29udGV4dCB9IGZyb20gJy4vTWVkaWFDb250ZXh0JztcbmltcG9ydCB7IEJSRUFLUE9JTlRTIH0gZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IHsgZ2V0U2l6ZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGVudiB9IGZyb20gJ2xpYi9lbnYnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoTWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gdXNlQ2FsbGJhY2soKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXBhcmVkV2lkdGggPSBlbnYudmlldy5weFRvUmVtKHdpZHRoKTtcbiAgICAgICAgY29uc3QgcHJlcGFyZWRIZWlnaHQgPSBlbnYudmlldy5weFRvUmVtKGhlaWdodCk7XG5cbiAgICAgICAgc2V0VmFsdWUoe1xuICAgICAgICAgICAgd2lkdGg6IHByZXBhcmVkV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHByZXBhcmVkSGVpZ2h0LFxuICAgICAgICAgICAgLi4uZ2V0U2l6ZXMocHJlcGFyZWRXaWR0aCwgcHJlcGFyZWRIZWlnaHQsIEJSRUFLUE9JTlRTKSxcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlQ2FsbE9uY2UoKCkgPT4ge1xuICAgICAgICBlbmdpbmUub24oJ2NsaWVudFJlc2l6ZWQnLCBoYW5kbGVSZXNpemUpO1xuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IGVuZ2luZS5vZmYoJ2NsaWVudFJlc2l6ZWQnLCBoYW5kbGVSZXNpemUpO1xuICAgIH0sIFtoYW5kbGVSZXNpemVdKTtcblxuICAgIGNvbnN0IHZhbHVlQXNQcm9wID0gdXNlTWVtbygoKSA9PiAoeyAuLi52YWx1ZSB9KSwgW3ZhbHVlXSk7XG5cbiAgICByZXR1cm4gPE1lZGlhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWVBc1Byb3B9PntjaGlsZHJlbn08L01lZGlhQ29udGV4dC5Qcm92aWRlcj47XG59O1xuXG5jb25zdCBNZWRpYVByb3ZpZGVyID0gbWVtbyhQcm92aWRlcik7XG5cbmV4cG9ydCB7IE1lZGlhUHJvdmlkZXIgfTtcbiIsImltcG9ydCB7IG1lbW8sIHVzZUNvbnRleHQsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0QnlIZWlnaHQgfSBmcm9tICcuL2dldEJ5SGVpZ2h0JztcbmltcG9ydCB7IE1lZGlhQ29udGV4dCB9IGZyb20gJy4vTWVkaWFDb250ZXh0JztcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGV4dHJhTGFyZ2U6IGZhbHNlLFxuICAgIGxhcmdlOiBmYWxzZSxcbiAgICBtZWRpdW06IGZhbHNlLFxuICAgIHNtYWxsOiBmYWxzZSxcbiAgICBleHRyYVNtYWxsOiBmYWxzZSxcbiAgICBleHRyYUxhcmdlV2lkdGg6IGZhbHNlLFxuICAgIGxhcmdlV2lkdGg6IGZhbHNlLFxuICAgIG1lZGl1bVdpZHRoOiBmYWxzZSxcbiAgICBzbWFsbFdpZHRoOiBmYWxzZSxcbiAgICBleHRyYVNtYWxsV2lkdGg6IGZhbHNlLFxuICAgIGV4dHJhTGFyZ2VIZWlnaHQ6IGZhbHNlLFxuICAgIGxhcmdlSGVpZ2h0OiBmYWxzZSxcbiAgICBtZWRpdW1IZWlnaHQ6IGZhbHNlLFxuICAgIHNtYWxsSGVpZ2h0OiBmYWxzZSxcbiAgICBleHRyYVNtYWxsSGVpZ2h0OiBmYWxzZSxcbn07XG5cbmV4cG9ydCB0eXBlIERlZmF1bHRQcm9wcyA9IHR5cGVvZiBkZWZhdWx0UHJvcHM7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDtcbn0gJiBQYXJ0aWFsPERlZmF1bHRQcm9wcz47XG5cbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnRQcm9wcyA9IFJlYWRvbmx5PFBpY2s8UHJvcHMsICdleHRyYUxhcmdlJyB8ICdsYXJnZScgfCAnbWVkaXVtJyB8ICdzbWFsbCcgfCAnZXh0cmFTbWFsbCc+PlxuXG5jb25zdCBNZWRpYSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH06IFByb3BzKTogUmVhY3RFbGVtZW50IHwgbnVsbCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBleHRyYUxhcmdlLCBsYXJnZSwgbWVkaXVtLCBzbWFsbCwgZXh0cmFTbWFsbCxcbiAgICAgICAgZXh0cmFMYXJnZVdpZHRoLCBsYXJnZVdpZHRoLCBtZWRpdW1XaWR0aCwgc21hbGxXaWR0aCwgZXh0cmFTbWFsbFdpZHRoLFxuICAgICAgICBleHRyYUxhcmdlSGVpZ2h0LCBsYXJnZUhlaWdodCwgbWVkaXVtSGVpZ2h0LCBzbWFsbEhlaWdodCwgZXh0cmFTbWFsbEhlaWdodCxcbiAgICB9ID0gdXNlQ29udGV4dChNZWRpYUNvbnRleHQpO1xuXG4gICAgY29uc3QgYnJlYWtwb2ludFByb3BzOiBCcmVha3BvaW50UHJvcHMgPSB7XG4gICAgICAgIGV4dHJhTGFyZ2U6IGV4dHJhTGFyZ2VIZWlnaHQsXG4gICAgICAgIGxhcmdlOiBsYXJnZUhlaWdodCxcbiAgICAgICAgbWVkaXVtOiBtZWRpdW1IZWlnaHQsXG4gICAgICAgIHNtYWxsOiBzbWFsbEhlaWdodCxcbiAgICAgICAgZXh0cmFTbWFsbDogZXh0cmFTbWFsbEhlaWdodCxcbiAgICB9O1xuXG4gICAgaWYgKHJlc3QuZXh0cmFMYXJnZSB8fCByZXN0LmxhcmdlIHx8IHJlc3QubWVkaXVtIHx8IHJlc3Quc21hbGwgfHwgcmVzdC5leHRyYVNtYWxsKSB7XG4gICAgICAgIGlmIChyZXN0LmV4dHJhTGFyZ2UgJiYgZXh0cmFMYXJnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QubGFyZ2UgJiYgbGFyZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0Lm1lZGl1bSAmJiBtZWRpdW0pIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LnNtYWxsICYmIHNtYWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdC5leHRyYVNtYWxsICYmIGV4dHJhU21hbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyZXN0LmV4dHJhTGFyZ2VXaWR0aCAmJiBleHRyYUxhcmdlV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCeUhlaWdodChjaGlsZHJlbiwgcmVzdCwgYnJlYWtwb2ludFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LmxhcmdlV2lkdGggJiYgbGFyZ2VXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QubWVkaXVtV2lkdGggJiYgbWVkaXVtV2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRCeUhlaWdodChjaGlsZHJlbiwgcmVzdCwgYnJlYWtwb2ludFByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN0LnNtYWxsV2lkdGggJiYgc21hbGxXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3QuZXh0cmFTbWFsbFdpZHRoICYmIGV4dHJhU21hbGxXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJ5SGVpZ2h0KGNoaWxkcmVuLCByZXN0LCBicmVha3BvaW50UHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN0LmV4dHJhTGFyZ2VXaWR0aCAmJiAhcmVzdC5sYXJnZVdpZHRoICYmICFyZXN0Lm1lZGl1bVdpZHRoICYmICFyZXN0LnNtYWxsV2lkdGggJiYgIXJlc3QuZXh0cmFTbWFsbFdpZHRoKSB7XG4gICAgICAgICAgICBpZiAocmVzdC5leHRyYUxhcmdlSGVpZ2h0ICYmIGV4dHJhTGFyZ2VIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN0LmxhcmdlSGVpZ2h0ICYmIGxhcmdlSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdC5tZWRpdW1IZWlnaHQgJiYgbWVkaXVtSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdC5zbWFsbEhlaWdodCAmJiBzbWFsbEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3QuZXh0cmFTbWFsbEhlaWdodCAmJiBleHRyYVNtYWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5NZWRpYS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmNvbnN0IE1lZGlhUXVlcnkgPSBtZW1vKE1lZGlhKTtcblxuZXhwb3J0IHsgTWVkaWFRdWVyeSB9O1xuIiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgRGVmYXVsdFByb3BzLCBCcmVha3BvaW50UHJvcHMgfSBmcm9tICcuL01lZGlhUXVlcnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJ5SGVpZ2h0ID0gKGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQsIHJlc3Q6IFBhcnRpYWw8RGVmYXVsdFByb3BzPiwgYnJlYWtwb2ludFByb3BzOiBCcmVha3BvaW50UHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsID0+IHtcclxuICAgIGlmICghcmVzdC5leHRyYUxhcmdlSGVpZ2h0ICYmICFyZXN0LmxhcmdlSGVpZ2h0ICYmICFyZXN0Lm1lZGl1bUhlaWdodCAmJiAhcmVzdC5zbWFsbEhlaWdodCAmJiAhcmVzdC5leHRyYVNtYWxsSGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0LmV4dHJhTGFyZ2VIZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLmV4dHJhTGFyZ2UpIHtcclxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3QubGFyZ2VIZWlnaHQgJiYgYnJlYWtwb2ludFByb3BzLmxhcmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0Lm1lZGl1bUhlaWdodCAmJiBicmVha3BvaW50UHJvcHMubWVkaXVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXN0LnNtYWxsSGVpZ2h0ICYmIGJyZWFrcG9pbnRQcm9wcy5zbWFsbCkge1xyXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdC5leHRyYVNtYWxsSGVpZ2h0ICYmIGJyZWFrcG9pbnRQcm9wcy5leHRyYVNtYWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBNZWRpYUNvbnRleHRUeXBlIH0gZnJvbSAnLi9NZWRpYUNvbnRleHQnO1xuXG5leHBvcnQgeyBNZWRpYVF1ZXJ5IH0gZnJvbSAnLi9NZWRpYVF1ZXJ5JztcbmV4cG9ydCB7IE1lZGlhUHJvdmlkZXIgfSBmcm9tICcuL01lZGlhUHJvdmlkZXInO1xuZXhwb3J0IHsgTWVkaWFDb250ZXh0IH0gZnJvbSAnLi9NZWRpYUNvbnRleHQnO1xuZXhwb3J0IHR5cGUgeyBNZWRpYUNvbnRleHRUeXBlIH07XG4iLCJleHBvcnQgY29uc3QgQlJFQUtQT0lOVFMgPSB7XG4gICAgZXh0cmFMYXJnZToge1xuICAgICAgICB3ZWlnaHQ6IDQsXG4gICAgICAgIHdpZHRoOiAyNTYwLFxuICAgICAgICBoZWlnaHQ6IDE0NDAsXG4gICAgfSxcbiAgICBsYXJnZToge1xuICAgICAgICB3ZWlnaHQ6IDMsXG4gICAgICAgIHdpZHRoOiAxOTIwLFxuICAgICAgICBoZWlnaHQ6IDEwODAsXG4gICAgfSxcbiAgICBtZWRpdW06IHtcbiAgICAgICAgd2VpZ2h0OiAyLFxuICAgICAgICB3aWR0aDogMTYwMCxcbiAgICAgICAgaGVpZ2h0OiA5MDAsXG4gICAgfSxcbiAgICBzbWFsbDoge1xuICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICAgIHdpZHRoOiAxMzY2LFxuICAgICAgICBoZWlnaHQ6IDc2OCxcbiAgICB9LFxuICAgIGV4dHJhU21hbGw6IHtcbiAgICAgICAgd2VpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMTAyNCxcbiAgICAgICAgaGVpZ2h0OiA3NjgsXG4gICAgfSxcbn07XG4iLCJpbXBvcnQgeyBCUkVBS1BPSU5UUyB9IGZyb20gJy4vc3RhdGljJztcclxuXHJcbmZ1bmN0aW9uIGdldFdpZHRoQlBXZWlnaHQod2lkdGg6IG51bWJlciwgYnJlYWtwb2ludHM6IHR5cGVvZiBCUkVBS1BPSU5UUyk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlICh3aWR0aCA+PSBicmVha3BvaW50cy5leHRyYUxhcmdlLndpZHRoKTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKHdpZHRoID49IGJyZWFrcG9pbnRzLmxhcmdlLndpZHRoKSAmJiAod2lkdGggPCBicmVha3BvaW50cy5leHRyYUxhcmdlLndpZHRoKTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodDtcclxuICAgICAgICBjYXNlICh3aWR0aCA+PSBicmVha3BvaW50cy5tZWRpdW0ud2lkdGgpICYmICh3aWR0aCA8IGJyZWFrcG9pbnRzLmxhcmdlLndpZHRoKTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAod2lkdGggPj0gYnJlYWtwb2ludHMuc21hbGwud2lkdGgpICYmICh3aWR0aCA8IGJyZWFrcG9pbnRzLm1lZGl1bS53aWR0aCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5zbWFsbC53ZWlnaHQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmV4dHJhU21hbGwud2VpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRIZWlnaHRCUFdlaWdodChoZWlnaHQ6IG51bWJlciwgYnJlYWtwb2ludHM6IHR5cGVvZiBCUkVBS1BPSU5UUyk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIChoZWlnaHQgPj0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS5oZWlnaHQpOlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQ7XHJcbiAgICAgICAgY2FzZSAoaGVpZ2h0ID49IGJyZWFrcG9pbnRzLmxhcmdlLmhlaWdodCkgJiYgKGhlaWdodCA8IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2UuaGVpZ2h0KTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLmxhcmdlLndlaWdodDtcclxuICAgICAgICBjYXNlIChoZWlnaHQgPj0gYnJlYWtwb2ludHMubWVkaXVtLmhlaWdodCkgJiYgKGhlaWdodCA8IGJyZWFrcG9pbnRzLmxhcmdlLmhlaWdodCk6XHJcbiAgICAgICAgICAgIHJldHVybiBicmVha3BvaW50cy5tZWRpdW0ud2VpZ2h0O1xyXG4gICAgICAgIGNhc2UgKGhlaWdodCA+PSBicmVha3BvaW50cy5zbWFsbC5oZWlnaHQpICYmIChoZWlnaHQgPCBicmVha3BvaW50cy5tZWRpdW0uaGVpZ2h0KTpcclxuICAgICAgICAgICAgcmV0dXJuIGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmVudW0gU2l6ZXMge1xyXG4gICAgZXh0cmFMYXJnZSA9ICdleHRyYUxhcmdlJyxcclxuICAgIGxhcmdlID0gJ2xhcmdlJyxcclxuICAgIG1lZGl1bSA9ICdtZWRpdW0nLFxyXG4gICAgc21hbGwgPSAnc21hbGwnLFxyXG4gICAgZXh0cmFTbWFsbCA9ICdleHRyYVNtYWxsJyxcclxuICAgIGV4dHJhTGFyZ2VXaWR0aCA9ICdleHRyYUxhcmdlV2lkdGgnLFxyXG4gICAgbGFyZ2VXaWR0aCA9ICdsYXJnZVdpZHRoJyxcclxuICAgIG1lZGl1bVdpZHRoID0gJ21lZGl1bVdpZHRoJyxcclxuICAgIHNtYWxsV2lkdGggPSAnc21hbGxXaWR0aCcsXHJcbiAgICBleHRyYVNtYWxsV2lkdGggPSAnZXh0cmFTbWFsbFdpZHRoJyxcclxuICAgIGV4dHJhTGFyZ2VIZWlnaHQgPSAnZXh0cmFMYXJnZUhlaWdodCcsXHJcbiAgICBsYXJnZUhlaWdodCA9ICdsYXJnZUhlaWdodCcsXHJcbiAgICBtZWRpdW1IZWlnaHQgPSAnbWVkaXVtSGVpZ2h0JyxcclxuICAgIHNtYWxsSGVpZ2h0ID0gJ3NtYWxsSGVpZ2h0JyxcclxuICAgIGV4dHJhU21hbGxIZWlnaHQgPSAnZXh0cmFTbWFsbEhlaWdodCdcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2l6ZXMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGJyZWFrcG9pbnRzOiB0eXBlb2YgQlJFQUtQT0lOVFMpOiB7W2tleSBpbiBTaXplc106IGJvb2xlYW59IHtcclxuICAgIGNvbnN0IHdpZHRoQlBXZWlnaHQ6IG51bWJlciA9IGdldFdpZHRoQlBXZWlnaHQod2lkdGgsIGJyZWFrcG9pbnRzKTtcclxuICAgIGNvbnN0IGhlaWdodEJQV2VpZ2h0OiBudW1iZXIgPSBnZXRIZWlnaHRCUFdlaWdodChoZWlnaHQsIGJyZWFrcG9pbnRzKTtcclxuICAgIGNvbnN0IHdlaWdodDogbnVtYmVyID0gTWF0aC5taW4od2lkdGhCUFdlaWdodCwgaGVpZ2h0QlBXZWlnaHQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZXh0cmFMYXJnZTogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFMYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIGxhcmdlOiAod2VpZ2h0ID09PSBicmVha3BvaW50cy5sYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIG1lZGl1bTogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMubWVkaXVtLndlaWdodCksXHJcbiAgICAgICAgc21hbGw6ICh3ZWlnaHQgPT09IGJyZWFrcG9pbnRzLnNtYWxsLndlaWdodCksXHJcbiAgICAgICAgZXh0cmFTbWFsbDogKHdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhTGFyZ2VXaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBsYXJnZVdpZHRoOiAod2lkdGhCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMubGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBtZWRpdW1XaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLm1lZGl1bS53ZWlnaHQpLFxyXG4gICAgICAgIHNtYWxsV2lkdGg6ICh3aWR0aEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5zbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhU21hbGxXaWR0aDogKHdpZHRoQlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhU21hbGwud2VpZ2h0KSxcclxuICAgICAgICBleHRyYUxhcmdlSGVpZ2h0OiAoaGVpZ2h0QlBXZWlnaHQgPT09IGJyZWFrcG9pbnRzLmV4dHJhTGFyZ2Uud2VpZ2h0KSxcclxuICAgICAgICBsYXJnZUhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5sYXJnZS53ZWlnaHQpLFxyXG4gICAgICAgIG1lZGl1bUhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5tZWRpdW0ud2VpZ2h0KSxcclxuICAgICAgICBzbWFsbEhlaWdodDogKGhlaWdodEJQV2VpZ2h0ID09PSBicmVha3BvaW50cy5zbWFsbC53ZWlnaHQpLFxyXG4gICAgICAgIGV4dHJhU21hbGxIZWlnaHQ6IChoZWlnaHRCUFdlaWdodCA9PT0gYnJlYWtwb2ludHMuZXh0cmFTbWFsbC53ZWlnaHQpLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgU2l6ZXMsIGdldFNpemVzIH07XHJcbiIsImV4cG9ydCBlbnVtIFJld2FyZFR5cGUge1xuICAgIEl0ZW1zID0gJ2l0ZW1zJyxcbiAgICBFcXVpcG1lbnQgPSAnZXF1aXBtZW50JyxcbiAgICBYcCA9ICd4cCcsXG4gICAgWHBGYWN0b3IgPSAneHBGYWN0b3InLFxuICAgIEJsdWVwcmludHMgPSAnYmx1ZXByaW50cycsXG4gICAgQmx1ZXByaW50c0FueSA9ICdibHVlcHJpbnRzQW55JyxcbiAgICBHb29kaWVzID0gJ2dvb2RpZXMnLFxuICAgIEJlcnRocyA9ICdiZXJ0aHMnLFxuICAgIFNsb3RzID0gJ3Nsb3RzJyxcbiAgICBUb2tlbnMgPSAndG9rZW5zJyxcbiAgICBDcmV3U2tpbnMgPSAnY3Jld1NraW5zJyxcbiAgICBDcmV3Qm9va3MgPSAnY3Jld0Jvb2tzJyxcbiAgICBDdXN0b21pemF0aW9ucyA9ICdjdXN0b21pemF0aW9ucycsXG4gICAgQ3JlZGl0c0ZhY3RvciA9ICdjcmVkaXRzRmFjdG9yJyxcbiAgICBDdXJyZW5jeSA9ICdjdXJyZW5jeScsXG4gICAgVGFua21lblhwID0gJ3RhbmttZW5YUCcsXG4gICAgVGFua21lblhwRmFjdG9yID0gJ3RhbmttZW5YUEZhY3RvcicsXG4gICAgRnJlZVhwRmFjdG9yID0gJ2ZyZWVYUEZhY3RvcicsXG4gICAgQmF0dGxlVG9rZW4gPSAnYmF0dGxlVG9rZW4nLFxuICAgIFByZW1pdW1Vbml2ZXJzYWwgPSAncHJlbWl1bV91bml2ZXJzYWwnLFxuICAgIEdvbGQgPSAnZ29sZCcsXG4gICAgQ3JlZGl0cyA9ICdjcmVkaXRzJyxcbiAgICBDcnlzdGFsID0gJ2NyeXN0YWwnLFxuICAgIEZyZWVYcCA9ICdmcmVlWFAnLFxuICAgIFByZW1pdW0gPSAncHJlbWl1bScsXG4gICAgUHJlbWl1bVBsdXMgPSAncHJlbWl1bV9wbHVzJyxcbiAgICBCYXR0bGVQYXNzUG9pbnRzID0gJ2JhdHRsZVBhc3NQb2ludHMnLFxuICAgIEJhdHRsZVBhc3NTZWxlY3RUb2tlbiA9ICdiYXR0bGVQYXNzU2VsZWN0VG9rZW4nLFxuICAgIFNlbGVjdGFibGVCb251cyA9ICdzZWxlY3RhYmxlQm9udXMnLFxuICAgIFN0eWxlUHJvZ3Jlc3NUb2tlbiA9ICdzdHlsZVByb2dyZXNzVG9rZW4nLFxuICAgIFRtYW5Ub2tlbiA9ICd0bWFuVG9rZW4nLFxuICAgIE5hdHVyYWxDb3ZlciA9ICduYXR1cmFsQ292ZXInLFxuICAgIEJwQ29pbiA9ICdicGNvaW4nLFxuICAgIEJhdHRsYVBhc3NGaW5hbEFjaGlldmVtZW50ID0gJ2Rvc3NpZXJfYWNoaWV2ZW1lbnQnLFxuICAgIEJhdHRsZUJhZGdlID0gJ2Rvc3NpZXJfYmFkZ2UnLFxuICAgIE5ld1llYXJBbGJ1bXNBY2Nlc3MgPSAnbmV3WWVhckFsYnVtc0FjY2VzcycsXG4gICAgTmV3WWVhckZpbGxlcnMgPSAnbnkyMkZpbGxlcnMnLFxuICAgIE5ld1llYXJJbnZvaWNlID0gJ25ld1llYXJJbnZvaWNlJyxcbiAgICBOZXdZZWFyVG95RnJhZ21lbnRzID0gJ255MjJUb3lGcmFnbWVudHMnLFxuICAgIE5ld1llYXJTbG90ID0gJ25ld1llYXJTbG90JyxcbiAgICBCb251c1g1ID0gJ2JhdHRsZV9ib251c194NScsXG4gICAgQ3Jld0JvbnVzWDMgPSAnY3Jld19ib251c194MycsXG4gICAgVmVoaWNsZXMgPSAndmVoaWNsZXMnLFxuICAgIEVwaWNTZWxlY3RUb2tlbiA9ICdlcGljU2VsZWN0VG9rZW4nLFxuICAgIENvbGxlY3Rpb25JdGVtID0gJ2NvbGxlY3Rpb25JdGVtJyxcbiAgICBDb21wN1Rva2VuV2Vla2x5UmV3YXJkID0gJ2NvbXA3VG9rZW5XZWVrbHlSZXdhcmQnLFxuICAgIENvbXA3VG9rZW5Db3Vwb25SZXdhcmQgPSAnY29tcDdUb2tlbkNvdXBvblJld2FyZCcsXG4gICAgQmF0dGxlQm9vc3RlckdpZnQgPSAnYmF0dGxlQm9vc3Rlcl9naWZ0JyxcbiAgICBDb3NtaWNMb290Ym94U2lsdmVyID0gJ2xvb3RCb3hUb2tlbicsXG4gICAgQ29zbWljTG9vdGJveENvbW1vbiA9ICdjb3NtaWNfMjAyNF8yJyxcbiAgICBCcmFuY2ggPSAnYnJhbmNoJyxcbiAgICBWZWhpY2xlU2VsZWN0ID0gJ3ZlaGljbGVTZWxlY3QnLFxuICAgIFN0eWxlUHJvZ3Jlc3MgPSAnc3R5bGVQcm9ncmVzcycsXG4gICAgUGFyYWdvbnNVbmxvY2tzID0gJ3BhcmFnb25zVW5sb2NrcycsXG59XG5cbi8vIFRPRE86IGxvb2tzIGxpa2Ugd2UgaGF2ZSB0byBkbyBzb21lIHJlZmFjdG9yaW5nIGZvciByZXdhcmRzIGluIEZFIGFuZCBHUCBzaWRlc1xuXG5leHBvcnQgZW51bSBCb251c05hbWVzIHtcbiAgICBHb2xkID0gJ2dvbGQnLFxuICAgIENyZWRpdHMgPSAnY3JlZGl0cycsXG4gICAgQ3J5c3RhbCA9ICdjcnlzdGFsJyxcbiAgICBQcmVtaXVtID0gJ3ByZW1pdW0nLFxuICAgIFByZW1pdW1QbHVzID0gJ3ByZW1pdW1fcGx1cycsXG4gICAgVmVoaWNsZXMgPSAndmVoaWNsZXMnLFxuICAgIEN1c3RvbWl6YXRpb25zID0gJ2N1c3RvbWl6YXRpb25zJyxcbiAgICBCbHVlcHJpbnRzID0gJ2JsdWVwcmludHMnLFxuICAgIEJsdWVwcmludHNBbnkgPSAnYmx1ZXByaW50c0FueScsXG4gICAgQmx1ZXByaW50c0ZpbmFsID0gJ2ZpbmFsQmx1ZXByaW50cycsXG4gICAgR29vZGllcyA9ICdnb29kaWVzJyxcbiAgICBDcmV3U2tpbnMgPSAnY3Jld1NraW5zJyxcbiAgICBYcCA9ICd4cCcsXG4gICAgWHBGYWN0b3IgPSAneHBGYWN0b3InLFxuICAgIEZyZWVYcCA9ICdmcmVlWFAnLFxuICAgIEZyZWVYUEZhY3RvciA9ICdmcmVlWFBGYWN0b3InLFxuICAgIFRhbmttZW5YUCA9ICd0YW5rbWVuWFAnLFxuICAgIFRhbmttZW5YUEZhY3RvciA9ICd0YW5rbWVuWFBGYWN0b3InLFxuICAgIERhaWx5WFBGYWN0b3IgPSAnZGFpbHlYUEZhY3RvcicsXG4gICAgQ3JlZGl0c0ZhY3RvciA9ICdjcmVkaXRzRmFjdG9yJyxcbiAgICBJdGVtcyA9ICdpdGVtcycsXG4gICAgU3RyQm9udXMgPSAnc3RyQm9udXMnLFxuICAgIEdyb3VwcyA9ICdncm91cHMnLFxuICAgIEJlcnRocyA9ICdiZXJ0aHMnLFxuICAgIFNsb3RzID0gJ3Nsb3RzJyxcbiAgICBNZXRhID0gJ21ldGEnLFxuICAgIFRva2VucyA9ICd0b2tlbnMnLFxuICAgIERvc3NpZXIgPSAnZG9zc2llcicsXG4gICAgT25lT2YgPSAnb25lb2YnLFxuICAgIFByZW1pdW1Vbml2ZXJzYWwgPSAncHJlbWl1bV91bml2ZXJzYWwnLFxuICAgIEJhZGdlc0dyb3VwID0gJ2JhZGdlc0dyb3VwJyxcbiAgICBFbnRpdGxlbWVudHMgPSAnZW50aXRsZW1lbnRzJyxcbiAgICBSYW5rZWREYWlseUJhdHRsZXMgPSAncmFua2VkRGFpbHlCYXR0bGVzJyxcbiAgICBSYW5rZWRCb251c0JhdHRsZXMgPSAncmFua2VkQm9udXNCYXR0bGVzJyxcbiAgICBCYXR0bGVQYXNzUG9pbnRzID0gJ2JhdHRsZVBhc3NQb2ludHMnLFxuICAgIEJhdHRsZUJhZGdlID0gJ2Rvc3NpZXJfYmFkZ2UnLFxuICAgIEJhdHRsZUFjaGlldmVtZW50ID0gJ2Rvc3NpZXJfYWNoaWV2ZW1lbnQnLFxufVxuXG5leHBvcnQgZW51bSBJbWFnZVNpemUge1xuICAgIEJpZyA9ICdiaWcnLFxuICAgIFNtYWxsID0gJ3NtYWxsJyxcbiAgICBNaW5pID0gJ21pbmknLFxuICAgIFM2MDB4NDUwID0gJ3M2MDB4NDUwJyxcbiAgICBTNDAweDMwMCA9ICdzNDAweDMwMCcsXG4gICAgUzI5NngyMjIgPSAnczI5NngyMjInLFxuICAgIFMyMzJ4MTc0ID0gJ3MyMzJ4MTc0JyxcbiAgICBTMTgweDEzNSA9ICdzMTgweDEzNScsXG4gICAgUzEyOHgxMDAgPSAnczEyOHgxMDAnLFxuICAgIFM4MHg4MCA9ICdzODB4ODAnLFxuICAgIFM0OHg0OCA9ICdzNDh4NDgnLFxufVxuXG5leHBvcnQgZW51bSBWYWx1ZVR5cGVzIHtcbiAgICBNVUxUSSA9ICdtdWx0aScsXG4gICAgQ1VSUkVOQ1kgPSAnY3VycmVuY3knLFxuICAgIFBSRU1JVU1fUExVUyA9ICdwcmVtaXVtX3BsdXMnLFxuICAgIE5VTUJFUiA9ICdudW1iZXInLFxuICAgIFNUUklORyA9ICdzdHJpbmcnLFxufVxuXG5leHBvcnQgZW51bSBTcGVjaWFscyB7XG4gICAgQkFUVExFX0JPT1NURVIgPSAnYmF0dGxlQm9vc3RlcicsXG4gICAgQkFUVExFX0JPT1NURVJfUkVQTEFDRSA9ICdiYXR0bGVCb29zdGVyUmVwbGFjZScsXG4gICAgQlVJTFRfSU5fRVFVSVBNRU5UID0gJ2J1aWx0SW5FcXVpcG1lbnQnLFxuICAgIEVRVUlQTUVOVF9QTFVTID0gJ2VxdWlwbWVudFBsdXMnLFxuICAgIEVRVUlQTUVOVF9UUk9QSFlfQkFTSUMgPSAnZXF1aXBtZW50VHJvcGh5QmFzaWMnLFxuICAgIEVRVUlQTUVOVF9UUk9QSFlfVVBHUkFERUQgPSAnZXF1aXBtZW50VHJvcGh5VXBncmFkZWQnLFxuICAgIEVRVUlQTUVOVF9NT0RFUk5JWkVEX1VQR1JBREVEXzEgPSAnZXF1aXBtZW50TW9kZXJuaXplZF8xJyxcbiAgICBFUVVJUE1FTlRfTU9ERVJOSVpFRF9VUEdSQURFRF8yID0gJ2VxdWlwbWVudE1vZGVybml6ZWRfMicsXG4gICAgRVFVSVBNRU5UX01PREVSTklaRURfVVBHUkFERURfMyA9ICdlcXVpcG1lbnRNb2Rlcm5pemVkXzMnLFxuICAgIFBST0dSRVNTSU9OX1NUWUxFX1VQR1JBREVEXzEgPSAncHJvZ3Jlc3Npb25TdHlsZVVwZ3JhZGVkXzEnLFxuICAgIFBST0dSRVNTSU9OX1NUWUxFX1VQR1JBREVEXzIgPSAncHJvZ3Jlc3Npb25TdHlsZVVwZ3JhZGVkXzInLFxuICAgIFBST0dSRVNTSU9OX1NUWUxFX1VQR1JBREVEXzMgPSAncHJvZ3Jlc3Npb25TdHlsZVVwZ3JhZGVkXzMnLFxuICAgIFBST0dSRVNTSU9OX1NUWUxFX1VQR1JBREVEXzQgPSAncHJvZ3Jlc3Npb25TdHlsZVVwZ3JhZGVkXzQnLFxufVxuXG5leHBvcnQgZW51bSBIaWdobGlnaHRDbGFzc2VzIHtcbiAgICBCQVRUTEVfQk9PU1RFUiA9ICdiYXR0bGVCb29zdGVyJyxcbn1cblxuZXhwb3J0IGVudW0gT3ZlcmxheUNsYXNzZXMge1xuICAgIEJBVFRMRV9CT09TVEVSID0gJ2JhdHRsZUJvb3N0ZXInLFxuICAgIEJBVFRMRV9CT09TVEVSX1JFUExBQ0UgPSAnYmF0dGxlQm9vc3RlclJlcGxhY2UnLFxuICAgIEJVSUxUX0lOX0VRVUlQTUVOVCA9ICdidWlsdEluRXF1aXBtZW50JyxcbiAgICBFUVVJUE1FTlRfUExVUyA9ICdlcXVpcG1lbnRQbHVzJyxcbiAgICBFUVVJUE1FTlRfVFJPUEhZX0JBU0lDID0gJ2VxdWlwbWVudFRyb3BoeUJhc2ljJyxcbiAgICBFUVVJUE1FTlRfVFJPUEhZX1VQR1JBREVEID0gJ2VxdWlwbWVudFRyb3BoeVVwZ3JhZGVkJyxcbiAgICBFUVVJUE1FTlRfTU9ERVJOSVpFRF9VUEdSQURFRF8xID0gJ2VxdWlwbWVudE1vZGVybml6ZWRfMScsXG4gICAgRVFVSVBNRU5UX01PREVSTklaRURfVVBHUkFERURfMiA9ICdlcXVpcG1lbnRNb2Rlcm5pemVkXzInLFxuICAgIEVRVUlQTUVOVF9NT0RFUk5JWkVEX1VQR1JBREVEXzMgPSAnZXF1aXBtZW50TW9kZXJuaXplZF8zJyxcbiAgICBQUk9HUkVTU0lPTl9TVFlMRV9VUEdSQURFRF8xID0gJ3Byb2dyZXNzaW9uU3R5bGVVcGdyYWRlZF8xJyxcbiAgICBQUk9HUkVTU0lPTl9TVFlMRV9VUEdSQURFRF8yID0gJ3Byb2dyZXNzaW9uU3R5bGVVcGdyYWRlZF8yJyxcbiAgICBQUk9HUkVTU0lPTl9TVFlMRV9VUEdSQURFRF8zID0gJ3Byb2dyZXNzaW9uU3R5bGVVcGdyYWRlZF8zJyxcbiAgICBQUk9HUkVTU0lPTl9TVFlMRV9VUEdSQURFRF80ID0gJ3Byb2dyZXNzaW9uU3R5bGVVcGdyYWRlZF80Jyxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50LCBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tICdsaWIvc291bmQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRCdXR0b24uY3NzJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1zdGF0ZSAqL1xyXG5cclxuLy8gd2FpdGluZyBmb3IgZm9jdXMgaW1wbGVtZW50XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlYWRvbmx5IGNhcHRpb246IHN0cmluZztcclxuICAgIHJlYWRvbmx5IGdvdG8/OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBzaWRlPzogJ2xlZnQnIHwgJ3JpZ2h0JztcclxuICAgIHJlYWRvbmx5IHR5cGU/OiAnYmFjaycgfCAnZm9yd2FyZCcgfCAnY2xvc2UnIHwgJ2luZm8nO1xyXG4gICAgcmVhZG9ubHkgc291bmRIb3Zlcj86IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHNvdW5kQ2xpY2s/OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBjbGFzc05hbWVzPzogUGFydGlhbDx7XHJcbiAgICAgICAgYmFzZTogc3RyaW5nO1xyXG4gICAgICAgIGljb246IHN0cmluZztcclxuICAgICAgICBnbG93OiBzdHJpbmc7XHJcbiAgICAgICAgY2FwdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIGdvdG86IHN0cmluZztcclxuICAgIH0+O1xyXG4gICAgcmVhZG9ubHkgb25DbGljaz86IE1vdXNlRXZlbnRIYW5kbGVyO1xyXG4gICAgcmVhZG9ubHkgb25Nb3VzZUVudGVyPzogTW91c2VFdmVudEhhbmRsZXI7XHJcbiAgICByZWFkb25seSBvbk1vdXNlTGVhdmU/OiBNb3VzZUV2ZW50SGFuZGxlcjtcclxuICAgIHJlYWRvbmx5IG9uTW91c2VEb3duPzogTW91c2VFdmVudEhhbmRsZXI7XHJcbiAgICByZWFkb25seSBvbk1vdXNlVXA/OiBNb3VzZUV2ZW50SGFuZGxlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBsaW5rIGh0dHBzOi8vY29uZmx1ZW5jZS5sZXN0YS5ncm91cC9wYWdlcy92aWV3cGFnZS5hY3Rpb24/cGFnZUlkPTIwNDAwNjY4MDRcclxuICogd2hhdCBiYWNrX3NoaW5lIGlzIHVzZWQgd2hlbiBidXR0b24gZG9lc24ndCBoYXZlIGFueSB0ZXh0P1xyXG4gKiB0ZXh0IHNoYWRvdyBub3QgZW5vdWdoXHJcbiAqL1xyXG5cclxuY2xhc3MgVGV4dEJ1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgc2lkZTogJ2xlZnQnLFxyXG4gICAgICAgIHR5cGU6ICdiYWNrJyxcclxuICAgICAgICBzb3VuZEhvdmVyOiAnaGlnaGxpZ2h0JyxcclxuICAgICAgICBzb3VuZENsaWNrOiAncGxheScsXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGhvdmVyOiBmYWxzZSxcclxuICAgICAgICBjbGljazogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIF9vbk1vdXNlRW50ZXIgPSAoaGFuZGxlcj86IE1vdXNlRXZlbnRIYW5kbGVyKSA9PiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc291bmRIb3Zlcikge1xyXG4gICAgICAgICAgICBwbGF5U291bmQodGhpcy5wcm9wcy5zb3VuZEhvdmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbk1vdXNlTGVhdmUgPSAoaGFuZGxlcj86IE1vdXNlRXZlbnRIYW5kbGVyKSA9PiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBob3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsaWNrOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX29uTW91c2VEb3duID0gKGhhbmRsZXI/OiBNb3VzZUV2ZW50SGFuZGxlcikgPT4gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2xpY2s6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNvdW5kQ2xpY2spIHtcclxuICAgICAgICAgICAgcGxheVNvdW5kKHRoaXMucHJvcHMuc291bmRDbGljayk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfb25Nb3VzZVVwID0gKGhhbmRsZXI/OiBNb3VzZUV2ZW50SGFuZGxlcikgPT4gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2xpY2s6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVGb2N1cyA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1czogdHJ1ZSB9KTtcclxuXHJcbiAgICBoYW5kbGVCbHVyID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBjYXB0aW9uLFxyXG4gICAgICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgICAgICBnb3RvLFxyXG4gICAgICAgICAgICBzaWRlLFxyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICBjbGFzc05hbWVzOiBjbGFzc2VzLFxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXIsXHJcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZSxcclxuICAgICAgICAgICAgb25Nb3VzZURvd24sXHJcbiAgICAgICAgICAgIG9uTW91c2VVcCxcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcbiAgICAgICAgICAgIHNvdW5kQ2xpY2ssXHJcbiAgICAgICAgICAgIHNvdW5kSG92ZXIsXHJcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXHJcbiAgICAgICAgICAgIC4uLnJlc3RcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgY2xhc3NCYXNlID0gY2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgc3R5bGVzLmJhc2UsXHJcbiAgICAgICAgICAgIHN0eWxlc1tgYmFzZV9fJHt0eXBlfWBdLFxyXG4gICAgICAgICAgICBzdHlsZXNbYGJhc2VfXyR7c2lkZX1gXSxcclxuICAgICAgICAgICAgY2xhc3Nlcz8uYmFzZSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc0ljb24gPSBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBzdHlsZXMuaWNvbixcclxuICAgICAgICAgICAgc3R5bGVzW2BpY29uX18ke3R5cGV9YF0sXHJcbiAgICAgICAgICAgIHN0eWxlc1tgaWNvbl9fJHtzaWRlfWBdLFxyXG4gICAgICAgICAgICBjbGFzc2VzPy5pY29uLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzR2xvdyA9IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIHN0eWxlcy5nbG93LFxyXG4gICAgICAgICAgICBjbGFzc2VzPy5nbG93LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzQ2FwdGlvbiA9IGNsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIHN0eWxlcy5jYXB0aW9uLFxyXG4gICAgICAgICAgICBzdHlsZXNbYGNhcHRpb25fXyR7dHlwZX1gXSxcclxuICAgICAgICAgICAgY2xhc3Nlcz8uY2FwdGlvbixcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc0dvdG8gPSBjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBzdHlsZXMuZ290byxcclxuICAgICAgICAgICAgY2xhc3Nlcz8uZ290byxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzQmFzZX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5fb25Nb3VzZUVudGVyKG9uTW91c2VFbnRlcil9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuX29uTW91c2VMZWF2ZShvbk1vdXNlTGVhdmUpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMuX29uTW91c2VEb3duKG9uTW91c2VEb3duKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VVcD17dGhpcy5fb25Nb3VzZVVwKG9uTW91c2VVcCl9XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsodHlwZSAhPT0gJ2luZm8nKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaGluZX0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NJY29ufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NHbG93fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NDYXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2dvdG8gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0dvdG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z290b31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRleHRCdXR0b24gfTtcclxuIiwiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQm94LCB7IEJveFN0YXRpY1Byb3BzIH0gZnJvbSAnY29tcG9uZW50cy9Cb3gvQm94JztcbmltcG9ydCB7IEZvcm1hdFRleHQgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1hdFRleHQvRm9ybWF0VGV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybWF0VGV4dC90eXBlcyc7XG5pbXBvcnQgaGVhZGluZ1N0eWxlcyBmcm9tICdnbG9iYWwtc3R5bGVzL21peGlucy9oZWFkaW5nJztcbmltcG9ydCBwYXJhZ3JhcGhTdHlsZXMgZnJvbSAnZ2xvYmFsLXN0eWxlcy9taXhpbnMvcGFyYWdyYXBoJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnZ2xvYmFsLXN0eWxlcy92YXJpYWJsZXMvY29sb3JzJztcbmltcG9ydCBzcGFjaW5nIGZyb20gJ2dsb2JhbC1zdHlsZXMvdmFyaWFibGVzL3NwYWNpbmcnO1xuaW1wb3J0IGdldEFkYXB0aXZlQ29udHJvbGxlciwgeyBBZGFwdGl2ZVByb3BzIH0gZnJvbSAnbGliL2hvY3MvYWRhcHRpdmUvYWRhcHRpdmUnO1xuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0LmNzcyc7XG5cbmV4cG9ydCB0eXBlIFN0YW5kYXJkU3BhY2luZ1R5cGUgPSBrZXlvZiB0eXBlb2Ygc3BhY2luZztcbmV4cG9ydCB0eXBlIFNwYWNpbmdUeXBlID0gU3RhbmRhcmRTcGFjaW5nVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI7XG5leHBvcnQgY29uc3Qgc3RhbmRhcmRNYXJnaW5zID0gT2JqZWN0LmtleXMoc3BhY2luZykgYXMgU3RhbmRhcmRTcGFjaW5nVHlwZVtdO1xuXG5leHBvcnQgdHlwZSBTdGFuZGFyZENvbG9yVHlwZSA9IGtleW9mIHR5cGVvZiBjb2xvcnM7XG5leHBvcnQgY29uc3Qgc3RhbmRhcmRDb2xvcnMgPSBPYmplY3Qua2V5cyhjb2xvcnMpIGFzIFN0YW5kYXJkQ29sb3JUeXBlW107XG5cbmNvbnN0IHhsU3R5bGVNYXJnaW5zID0geyBtdDogJ1hMJywgbXI6ICdMRycsIG1iOiAnTEcnLCBtbDogJ0xHJyB9IGFzIGNvbnN0O1xuY29uc3QgbGdTdHlsZU1hcmdpbnMgPSB7IG10OiAnTEcnLCBtcjogJ01EJywgbWI6ICdNRCcsIG1sOiAnTUQnIH0gYXMgY29uc3Q7XG5jb25zdCBtZFN0eWxlTWFyZ2lucyA9IHsgbXQ6ICdNRCcsIG1yOiAnU00nLCBtYjogJ1NNJywgbWw6ICdTTScgfSBhcyBjb25zdDtcbmNvbnN0IHNtU3R5bGVNYXJnaW5zID0geyBtdDogJ1NNJywgbXI6ICdYUycsIG1iOiAnWFMnLCBtbDogJ1hTJyB9IGFzIGNvbnN0O1xuY29uc3QgeHNTdHlsZU1hcmdpbnMgPSB7IG10OiAnWFMnLCBtcjogJ1hTJywgbWI6ICdYUycsIG1sOiAnWFMnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0WGxNYXJnaW5zID0geyBtdDogJ1hMJywgbXI6ICdYTCcsIG1iOiAnWEwnLCBtbDogJ1hMJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdExnTWFyZ2lucyA9IHsgbXQ6ICdMRycsIG1yOiAnTEcnLCBtYjogJ0xHJywgbWw6ICdMRycgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRNZHBNYXJnaW5zID0geyBtdDogJ01EcCcsIG1yOiAnTURwJywgbWI6ICdNRHAnLCBtbDogJ01EcCcgfSBhcyBjb25zdDtcbmNvbnN0IGRlZmF1bHRNZE1hcmdpbnMgPSB7IG10OiAnTUQnLCBtcjogJ01EJywgbWI6ICdNRCcsIG1sOiAnTUQnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0U21wTWFyZ2lucyA9IHsgbXQ6ICdTTXAnLCBtcjogJ1NNcCcsIG1iOiAnU01wJywgbWw6ICdTTXAnIH0gYXMgY29uc3Q7XG5jb25zdCBkZWZhdWx0U21NYXJnaW5zID0geyBtdDogJ1NNJywgbXI6ICdTTScsIG1iOiAnU00nLCBtbDogJ1NNJyB9IGFzIGNvbnN0O1xuY29uc3QgZGVmYXVsdFhzTWFyZ2lucyA9IHsgbXQ6ICdYUycsIG1yOiAnWFMnLCBtYjogJ1hTJywgbWw6ICdYUycgfSBhcyBjb25zdDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TWFyZ2luTWFwID0ge1xuICAgIFhMOiBkZWZhdWx0WGxNYXJnaW5zLFxuICAgIExHOiBkZWZhdWx0TGdNYXJnaW5zLFxuICAgIE1EcDogZGVmYXVsdE1kcE1hcmdpbnMsXG4gICAgTUQ6IGRlZmF1bHRNZE1hcmdpbnMsXG4gICAgU01wOiBkZWZhdWx0U21wTWFyZ2lucyxcbiAgICBTTTogZGVmYXVsdFNtTWFyZ2lucyxcbiAgICBYUzogZGVmYXVsdFhzTWFyZ2lucyxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWFyZ2lucyA9IE9iamVjdC5rZXlzKGRlZmF1bHRNYXJnaW5NYXApIGFzIChrZXlvZiB0eXBlb2YgZGVmYXVsdE1hcmdpbk1hcClbXTtcblxuZXhwb3J0IGNvbnN0IHZhcmlhbnRNYXJnaW5TaXplTWFwOiB7XG4gICAgW2tleSBpbiBWYXJpYW50VHlwZV06IHsgW2tleSBpbiAnbXQnIHwgJ21yJyB8ICdtYicgfCAnbWwnXTogU3BhY2luZ1R5cGUgfTtcbn0gPSB7XG4gICAgJ2hlYWRpbmctSDE0NCc6IHhsU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUg3Myc6IGxnU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUg1Nic6IG1kU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgzNic6IG1kU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyOCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyNCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdoZWFkaW5nLUgyNFInOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMjInOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAnaGVhZGluZy1IMjBSJzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDE4Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDE1JzogeHNTdHlsZU1hcmdpbnMsXG4gICAgJ2hlYWRpbmctSDE0JzogeHNTdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMjQnOiBzbVN0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAxOCc6IHNtU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDE2Jzogc21TdHlsZU1hcmdpbnMsXG4gICAgJ3BhcmFncmFwaC1QMTQnOiB4c1N0eWxlTWFyZ2lucyxcbiAgICAncGFyYWdyYXBoLVAxMic6IHhzU3R5bGVNYXJnaW5zLFxuICAgICdwYXJhZ3JhcGgtUDEwJzogeHNTdHlsZU1hcmdpbnMsXG59O1xuXG5leHBvcnQgY29uc3QgdmFyaWFudHMgPSBPYmplY3Qua2V5cyh2YXJpYW50TWFyZ2luU2l6ZU1hcCkgYXMgKGtleW9mIHR5cGVvZiB2YXJpYW50TWFyZ2luU2l6ZU1hcClbXTtcblxudHlwZSBWYXJpYW50VHlwZSA9IGtleW9mIHR5cGVvZiBoZWFkaW5nU3R5bGVzIHwga2V5b2YgdHlwZW9mIHBhcmFncmFwaFN0eWxlcztcblxudHlwZSBCYXNlVGV4dFByb3BzID0ge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB2YXJpYW50PzogVmFyaWFudFR5cGU7XG4gICAgY29sb3I/OiBTdGFuZGFyZENvbG9yVHlwZSB8IENTU1Byb3BlcnRpZXNbJ2NvbG9yJ107XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICAgIG0/OiBTcGFjaW5nVHlwZTtcbiAgICBtdD86IFNwYWNpbmdUeXBlO1xuICAgIG1yPzogU3BhY2luZ1R5cGU7XG4gICAgbWI/OiBTcGFjaW5nVHlwZTtcbiAgICBtbD86IFNwYWNpbmdUeXBlO1xuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgICBmb3JtYXQ/OiBPbWl0PFByb3BzLCAndGV4dCc+O1xufTtcblxuY29uc3QgaXNEZWZhdWx0Q29sb3IgPSAoY29sb3I6IHN0cmluZyk6IGNvbG9yIGlzIFN0YW5kYXJkQ29sb3JUeXBlID0+IChzdGFuZGFyZENvbG9ycyBhcyBzdHJpbmdbXSkuaW5jbHVkZXMoY29sb3IpO1xuXG5jb25zdCBnZXRDb2xvclN0eWxlT3JDbGFzc05hbWUgPSAoY29sb3I/OiBTdGFuZGFyZENvbG9yVHlwZSB8IENTU1Byb3BlcnRpZXNbJ2NvbG9yJ10pID0+IHtcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKGlzRGVmYXVsdENvbG9yKGNvbG9yKSkge1xuICAgICAgICByZXR1cm4geyBjb2xvckNsYXNzTmFtZTogc3R5bGVzW2NvbG9yXSB9O1xuICAgIH1cbiAgICByZXR1cm4geyBjb2xvclN0eWxlOiB7IGNvbG9yIH0gfTtcbn07XG5cbmV4cG9ydCB0eXBlIFRleHRTdGF0aWNQcm9wcyA9IFJlYWRvbmx5PEJhc2VUZXh0UHJvcHMgJiBPbWl0PEJveFN0YXRpY1Byb3BzLCAnY2hpbGRyZW4nPj47XG5leHBvcnQgdHlwZSBUZXh0UHJvcHMgPSBUZXh0U3RhdGljUHJvcHMgJiBBZGFwdGl2ZVByb3BzPFRleHRTdGF0aWNQcm9wcywgVGV4dEFkYXB0aXZlUHJvcE5hbWVzVHlwZT47XG5leHBvcnQgdHlwZSBUZXh0QWRhcHRpdmVQcm9wTmFtZXNUeXBlID0gJ3ZhcmlhbnQnIHwgJ2NvbG9yJyB8ICdtJyB8ICdtdCcgfCAnbXInIHwgJ21iJyB8ICdtbCc7XG5cbi8qKlxuICogUmVuZGVycyB0aGUgdGV4dCBwYXNzZWQgaW4gYXMgYSBwcm9wIHdpdGggc3R5bGluZyBhbmQgZm9ybWF0dGluZyBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyAtIFRoZSBwcm9wcyBvYmplY3QgY29udGFpbmluZzpcbiAqICAgQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUaGUgdGV4dCB0byBiZSByZW5kZXJlZC5cbiAqICAgQHBhcmFtIHtWYXJpYW50VHlwZSB8IHN0cmluZ30gdmFyaWFudCAtIFRoZSB2YXJpYW50IG9mIHRoZSB0ZXh0IHN0eWxpbmcuXG4gKiAgIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZShzKSB0byBiZSBhcHBsaWVkIHRvIHRoZSB0ZXh0IGNvbXBvbmVudC5cbiAqICAgQHBhcmFtIHtDb2xvclR5cGV9IGNvbG9yIC0gVGhlIGNvbG9yIG9mIHRoZSB0ZXh0LCBlLmcuIFwiV0hJVEVfU1BBTklTSFwiIG9yIFwiI2YwMFwiLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtIC0gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIGFsbCBzaWRlcywgZS5nLiBYTCwgTEcsIE1EcCwgTUQsIFNNcCwgU00sIFhTLCB0cnVlIGRlZmF1bHRzIHRvIGEgc2l6ZSBiYXNlZCBvbiB0aGUgdmFyaWFudCBwcm9wLCBudW1iZXIgdHJhbnNsYXRlcyB0byByZW1zLlxuICogICBAcGFyYW0ge1NwYWNpbmdUeXBlfSBtdCAtIFRoZSBhcHBsaWVkIG1hcmdpbi10b3AsIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gbXIgLSBUaGUgYXBwbGllZCBtYXJnaW4tcmlnaHQsIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtTcGFjaW5nVHlwZX0gbWIgLSBUaGUgYXBwbGllZCBtYXJnaW4tYm90dG9tLCBlLmcuIFhMLCBMRywgTURwLCBNRCwgU01wLCBTTSwgWFMsIHRydWUgZGVmYXVsdHMgdG8gYSBzaXplIGJhc2VkIG9uIHRoZSB2YXJpYW50IHByb3AsIG51bWJlciB0cmFuc2xhdGVzIHRvIHJlbXMuXG4gKiAgIEBwYXJhbSB7U3BhY2luZ1R5cGV9IG1sIC0gVGhlIGFwcGxpZWQgbWFyZ2luLWxlZnQsIGUuZy4gWEwsIExHLCBNRHAsIE1ELCBTTXAsIFNNLCBYUywgdHJ1ZSBkZWZhdWx0cyB0byBhIHNpemUgYmFzZWQgb24gdGhlIHZhcmlhbnQgcHJvcCwgbnVtYmVyIHRyYW5zbGF0ZXMgdG8gcmVtcy5cbiAqICAgQHBhcmFtIHtDU1NQcm9wZXJ0aWVzfSBzdHlsZSAtIFRoZSBzdHlsZSBvYmplY3QgdG8gYmUgYXBwbGllZCB0byB0aGUgdGV4dCBjb21wb25lbnQuXG4gKiAgIEBwYXJhbSB7Rm9ybWF0VGV4dFByb3BzfSBmb3JtYXQgLSBUaGUgZm9ybWF0dGluZyBwcm9wcyBvZiBGb3JtYXRUZXh0LlxuICogICBAcGFyYW0ge0JveFByb3BzfSByZXN0UHJvcHMgLSBvdGhlciBwcm9wcyBvZiBpbnRlcm5hbCBCb3ggY29tcG9uZW50LlxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IFRoZSBUZXh0IGVsZW1lbnQuXG4gKi9cbmNvbnN0IFRleHQgPSAoe1xuICAgIHRleHQsXG4gICAgdmFyaWFudCxcbiAgICBjbGFzc05hbWUsXG4gICAgY29sb3IsXG4gICAgbSxcbiAgICBtdCA9IG0sXG4gICAgbXIgPSBtLFxuICAgIG1iID0gbSxcbiAgICBtbCA9IG0sXG4gICAgc3R5bGUsXG4gICAgZm9ybWF0LFxuICAgIC4uLnJlc3RQcm9wc1xufTogVGV4dFN0YXRpY1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBjb21wdXRlZFN0eWxlLCBjb2xvckNsYXNzTmFtZSB9ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY29sb3JDbGFzc05hbWUsIGNvbG9yU3R5bGUgPSB7fSB9ID0gZ2V0Q29sb3JTdHlsZU9yQ2xhc3NOYW1lKGNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHsgY29tcHV0ZWRTdHlsZTogeyAuLi5zdHlsZSwgLi4uY29sb3JTdHlsZSB9LCBjb2xvckNsYXNzTmFtZSB9O1xuICAgIH0sIFtzdHlsZSwgY29sb3JdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYmFzZSwgdmFyaWFudCAmJiBzdHlsZXNbdmFyaWFudF0sIGNvbG9yQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e2NvbXB1dGVkU3R5bGV9XG4gICAgICAgICAgICBtdD17bXQgPT09IHRydWUgPyB2YXJpYW50TWFyZ2luU2l6ZU1hcFt2YXJpYW50IHx8ICdwYXJhZ3JhcGgtUDE2J10ubXQgOiBtdH1cbiAgICAgICAgICAgIG1yPXttciA9PT0gdHJ1ZSA/IHZhcmlhbnRNYXJnaW5TaXplTWFwW3ZhcmlhbnQgfHwgJ3BhcmFncmFwaC1QMTYnXS5tciA6IG1yfVxuICAgICAgICAgICAgbWI9e21iID09PSB0cnVlID8gdmFyaWFudE1hcmdpblNpemVNYXBbdmFyaWFudCB8fCAncGFyYWdyYXBoLVAxNiddLm1iIDogbWJ9XG4gICAgICAgICAgICBtbD17bWwgPT09IHRydWUgPyB2YXJpYW50TWFyZ2luU2l6ZU1hcFt2YXJpYW50IHx8ICdwYXJhZ3JhcGgtUDE2J10ubWwgOiBtbH1cbiAgICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtmb3JtYXQgIT09IHVuZGVmaW5lZCA/IDxGb3JtYXRUZXh0IHsuLi5mb3JtYXR9IHRleHQ9e3RleHR9IC8+IDogdGV4dH1cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFkYXB0aXZlQ29udHJvbGxlcjxUZXh0U3RhdGljUHJvcHMsIFRleHRBZGFwdGl2ZVByb3BOYW1lc1R5cGU+KFRleHQpO1xuIiwiaW1wb3J0IHsgZ2V0RnJvbUNhbGxTdGFjayB9IGZyb20gJ2xpYi9nZXQtZnJvbS1jYWxsc3RhY2snO1xyXG5pbXBvcnQgeyBWaWV3RXZlbnRUeXBlIH0gZnJvbSAnbGliL3ZpZXctZW52LWhlbHBlcic7XHJcbmltcG9ydCB7IGNsb25lRWxlbWVudCwgTW91c2VFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uVG9vbHRpcFByb3BzLCBUb29sdGlwUmVmIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBQcm9wcyA9IENvbW1vblRvb2x0aXBQcm9wcyAmXHJcbiAgICBSZWFkb25seTx7XHJcbiAgICAgICAgY29udGVudElkOiBudW1iZXI7XHJcbiAgICAgICAgZGVjb3JhdG9ySWQ/OiBudW1iZXI7XHJcbiAgICB9PjtcclxuXHJcbmNvbnN0IFNIT1dfREVMQVlfTUlOID0gMTAwO1xyXG5jb25zdCBTSE9XX0RFTEFZX0RFRkFVTFQgPSA0MDA7XHJcblxyXG5mdW5jdGlvbiBnZXRWaWV3RXZlbnRBcmd1bWVudHMoYXJnczogQ29tbW9uVG9vbHRpcFByb3BzWydhcmdzJ10pIHtcclxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhhcmdzIHx8IHt9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dDogR0ZWYWx1ZVByb3h5ID0ge1xyXG4gICAgICAgICAgICBfX1R5cGU6ICdHRlZhbHVlUHJveHknLFxyXG4gICAgICAgICAgICBuYW1lOiBrZXksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgICAgb3V0Lm51bWJlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICAgICAgb3V0LmJvb2wgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBvdXQuc3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVWaWV3RXZlbnQgPSAoY29udGVudElkOiBudW1iZXIsIGRlY29yYXRvcklkPzogbnVtYmVyLCBvcHRpb25zID0ge30sIHRhcmdldElEID0gMCkgPT4ge1xyXG4gICAgdmlld0Vudi5oYW5kbGVWaWV3RXZlbnQoe1xyXG4gICAgICAgIF9fVHlwZTogJ0dGVmlld0V2ZW50UHJveHknLFxyXG4gICAgICAgIHR5cGU6IFZpZXdFdmVudFR5cGUuVE9PTFRJUCxcclxuICAgICAgICBjb250ZW50SUQ6IGNvbnRlbnRJZCxcclxuICAgICAgICBkZWNvcmF0b3JJRDogZGVjb3JhdG9ySWQsXHJcbiAgICAgICAgdGFyZ2V0SUQ6IHRhcmdldElELFxyXG4gICAgICAgIC4uLm9wdGlvbnMsXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IFRvb2x0aXAgPSAoe1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBjb250ZW50SWQsXHJcbiAgICBhcmdzLFxyXG4gICAgb25Nb3VzZUVudGVyLFxyXG4gICAgb25Nb3VzZUxlYXZlLFxyXG4gICAgb25Nb3VzZURvd24sXHJcbiAgICBvbkNsaWNrLFxyXG4gICAgaWdub3JlU2hvd0RlbGF5ID0gZmFsc2UsXHJcbiAgICBpZ25vcmVNb3VzZUNsaWNrID0gZmFsc2UsXHJcbiAgICBkZWNvcmF0b3JJZCA9IDAsXHJcbiAgICBpc0VuYWJsZWQgPSB0cnVlLFxyXG4gICAgdGFyZ2V0SWQgPSAwLFxyXG4gICAgb25TaG93LFxyXG4gICAgb25IaWRlLFxyXG4gICAgLi4ucmVzdFxyXG59OiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPFRvb2x0aXBSZWY+KHtcclxuICAgICAgICB0aW1lb3V0SWQ6IDAsXHJcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBwcmV2VGFyZ2V0OiBudWxsLFxyXG4gICAgICAgIGhpZGVUaW1lcklkOiBudWxsLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzSWQgPSB1c2VNZW1vKCgpID0+IHRhcmdldElkIHx8IGdldEZyb21DYWxsU3RhY2soKS5yZXNJZCwgW3RhcmdldElkXSk7XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAvLyB3ZSBoYW5kbGUgc2hvdygpIG9ubHkgaWYgdG9vbHRpcCBpcyBISURERU4gbm93IE9SIHRpbWVvdXQgZm9yIHNob3cgaGFzIGFscmVhZHkgUkVTRVRcclxuICAgICAgICBpZiAoIXJlZi5jdXJyZW50LmlzVmlzaWJsZSB8fCAhcmVmLmN1cnJlbnQudGltZW91dElkKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZVZpZXdFdmVudChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRJZCxcclxuICAgICAgICAgICAgICAgIGRlY29yYXRvcklkLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTW91c2VFdmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IGdldFZpZXdFdmVudEFyZ3VtZW50cyhhcmdzKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNJZCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgb25TaG93ICYmIG9uU2hvdygpO1xyXG4gICAgICAgICAgICByZWYuY3VycmVudC5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb250ZW50SWQsIGRlY29yYXRvcklkLCBhcmdzLCByZXNJZCwgb25TaG93XSk7XHJcblxyXG4gICAgY29uc3QgaGlkZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAvLyB3ZSBoYW5kbGUgaGlkZSgpIG9ubHkgaWYgdG9vbHRpcCBpcyBWSVNJQkxFIG5vdyBPUiB0aW1lb3V0IGZvciBzaG93IGhhcyBhbHJlYWR5IFNFVFxyXG4gICAgICAgIGlmIChyZWYuY3VycmVudC5pc1Zpc2libGUgfHwgcmVmLmN1cnJlbnQudGltZW91dElkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gcmVmLmN1cnJlbnQudGltZW91dElkO1xyXG4gICAgICAgICAgICBpZiAodGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQudGltZW91dElkID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFuZGxlVmlld0V2ZW50KGNvbnRlbnRJZCwgZGVjb3JhdG9ySWQsIHsgb246IGZhbHNlIH0sIHJlc0lkKTtcclxuICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50LmlzVmlzaWJsZSAmJiBvbkhpZGUpIHtcclxuICAgICAgICAgICAgICAgIG9uSGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjb250ZW50SWQsIGRlY29yYXRvcklkLCByZXNJZCwgb25IaWRlXSk7XHJcblxyXG4gICAgY29uc3Qgb25TY3JvbGwgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIC8vIHdlIGhhbmRsZSBzY3JvbGwgb25seSBpZiB0b29sdGlwIGlzIFZJU0lCTEVcclxuICAgICAgICBpZiAoIXJlZi5jdXJyZW50LmlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZi5jdXJyZW50LnByZXZUYXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcclxuICAgICAgICByZWYuY3VycmVudC5oaWRlVGltZXJJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgIXRhcmdldC5pc1NhbWVOb2RlKHJlZi5jdXJyZW50LnByZXZUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGlkZVRpbWVyID0gcmVmLmN1cnJlbnQuaGlkZVRpbWVySWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvblNjcm9sbCwgeyBjYXB0dXJlOiB0cnVlIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25TY3JvbGwsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVyICYmIHdpbmRvdy5jbGVhclRpbWVvdXQoaGlkZVRpbWVyKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzRW5hYmxlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0VuYWJsZWQsIGhpZGVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlkZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlKTtcclxuICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaGlkZV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoY2hpbGRFdmVudDogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSA9PiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAvLyB3aW5kb3cgdXNlZCBoZXJlIGZvciBjb3JyZWN0IFJldHVyblR5cGU6IG51bWJlclxyXG4gICAgICAgIGlmIChldmVudC5jbGllbnRYID09PSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBldmVudC5jbGllbnRZID09PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0aGlzIGhhY2sgdG8gZml4IGh0dHBzOi8vamlyYS1hcmNoaXZlLmxlc3RhLmdyb3VwL2Jyb3dzZS9XT1RELTE1ODQyNyBpc3N1ZS5cclxuICAgICAgICAgICAgLy8gIFRoaXMgY2hlY2sgY2FuIGJlIHJlbW92ZWQgd2hlbiBtb3VzZUVudGVyIGV2ZW50IHRoYXQgZmlyZWQgb24gcmVzaXplIHdpbGwgYmUgZml4ZWQgYXQgR0YgaW50ZWdyYXRpb24gc2lkZS5cclxuICAgICAgICAgICAgLy8gIFByb2JhYmx5IHdlIGNhbiBjaGVjayBpdCBhZnRlciBodHRwczovL2ppcmEtYXJjaGl2ZS5sZXN0YS5ncm91cC9icm93c2UvV09URC0xNTQ1NjQgYnVnIGZpeCxcclxuICAgICAgICAgICAgLy8gIHdoZW4gdmlldyBib3JkZXIgZXZlbnRzIHJlc29sdmluZyB3aWxsIHdvcmsgcHJvcGVybHkuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmLmN1cnJlbnQudGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoc2hvdywgaWdub3JlU2hvd0RlbGF5ID8gU0hPV19ERUxBWV9NSU4gOiBTSE9XX0RFTEFZX0RFRkFVTFQpO1xyXG5cclxuICAgICAgICBvbk1vdXNlRW50ZXIgJiYgb25Nb3VzZUVudGVyKGV2ZW50KTtcclxuICAgICAgICBjaGlsZEV2ZW50ICYmIGNoaWxkRXZlbnQoZXZlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKGNoaWxkRXZlbnQ6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkgPT4gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaGlkZSgpO1xyXG5cclxuICAgICAgICBvbk1vdXNlTGVhdmU/LihldmVudCk7XHJcbiAgICAgICAgY2hpbGRFdmVudD8uKGV2ZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoY2hpbGRFdmVudDogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSA9PiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaWdub3JlTW91c2VDbGljayA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25DbGljaz8uKGV2ZW50KTtcclxuICAgICAgICBjaGlsZEV2ZW50Py4oZXZlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoY2hpbGRFdmVudDogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSA9PiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaWdub3JlTW91c2VDbGljayA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Nb3VzZURvd24/LihldmVudCk7XHJcbiAgICAgICAgY2hpbGRFdmVudD8uKGV2ZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuICFpc0VuYWJsZWRcclxuICAgICAgICA/IGNoaWxkcmVuXHJcbiAgICAgICAgOiBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI6IGhhbmRsZU1vdXNlRW50ZXIoY2hpbGRyZW4ucHJvcHMub25Nb3VzZUVudGVyKSxcclxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU6IGhhbmRsZU1vdXNlTGVhdmUoY2hpbGRyZW4ucHJvcHMub25Nb3VzZUxlYXZlKSxcclxuICAgICAgICAgICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayhjaGlsZHJlbi5wcm9wcy5vbkNsaWNrKSxcclxuICAgICAgICAgICAgICBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duKGNoaWxkcmVuLnByb3BzLm9uTW91c2VEb3duKSxcclxuICAgICAgICAgICAgICAuLi5yZXN0LFxyXG4gICAgICAgICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBUb29sdGlwIH07XHJcbiIsImNvbnN0IE1FRElBX0NTUyA9IHtcclxuICAgIFNNQUxMX1dJRFRIOiAnbWVkaWFTbWFsbFdpZHRoJyxcclxuICAgIE1FRElVTV9XSURUSDogJ21lZGlhTWVkaXVtV2lkdGgnLFxyXG4gICAgTEFSR0VfV0lEVEg6ICdtZWRpYUxhcmdlV2lkdGgnLFxyXG4gICAgRVhUUkFfTEFSR0VfV0lEVEg6ICdtZWRpYUV4dHJhTGFyZ2VXaWR0aCcsXHJcbiAgICBTTUFMTF9IRUlHSFQ6ICdtZWRpYVNtYWxsSGVpZ2h0JyxcclxuICAgIE1FRElVTV9IRUlHSFQ6ICdtZWRpYU1lZGl1bUhlaWdodCcsXHJcbiAgICBMQVJHRV9IRUlHSFQ6ICdtZWRpYUxhcmdlSGVpZ2h0JyxcclxuICAgIEVYVFJBX0xBUkdFX0hFSUdIVDogJ21lZGlhRXh0cmFMYXJnZUhlaWdodCcsXHJcbiAgICBTTUFMTDogJ21lZGlhU21hbGwnLFxyXG4gICAgTUVESVVNOiAnbWVkaWFNZWRpdW0nLFxyXG4gICAgTEFSR0U6ICdtZWRpYUxhcmdlJyxcclxuICAgIEVYVFJBX0xBUkdFOiAnbWVkaWFFeHRyYUxhcmdlJyxcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTUVESUFfQ1NTO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICdCTEFDS19SRUFMJzogJyMwMDAwMDAnLFxyXG4gICAgJ1dISVRFX1JFQUwnOiAnI0ZGRkZGRicsXHJcbiAgICAnV0hJVEUnOiAnI0YyRjJGNycsXHJcbiAgICAnV0hJVEVfT1JBTkdFJzogJyNGRUZFRUMnLFxyXG4gICAgJ1dISVRFX1NQQU5JU0gnOiAnI0U5RTJCRicsXHJcbiAgICAnUEFSJzogJyM4QzhDN0UnLFxyXG4gICAgJ1BBUl9TRUNPTkRBUlknOiAnIzU5NTk1MCcsXHJcbiAgICAnUEFSX1RFUlRJQVJZJzogJyMzNzM2MkUnLFxyXG4gICAgJ0lORk9fUkVEJzogJyNGRjAwMDAnLFxyXG4gICAgJ1JFRCc6ICcjRkYyNzE3JyxcclxuICAgICdSRURfREFSSyc6ICcjQjcwMDAwJyxcclxuICAgICdZRUxMT1cnOiAnI0ZFQUIzNCcsXHJcbiAgICAnT1JBTkdFJzogJyNFRTcwMDAnLFxyXG4gICAgJ0NSRUFNJzogJyNGRkREOTknLFxyXG4gICAgJ0JST1dOJzogJyNDQkFDNzcnLFxyXG4gICAgJ0dSRUVOX0JSSUdIVCc6ICcjODBENDNBJyxcclxuICAgICdHUkVFTic6ICcjN0FCMzAwJyxcclxuICAgICdHUkVFTl9EQVJLJzogJyM0OTcyMTInLFxyXG4gICAgJ0JMVUVfQk9PU1RFUic6ICcjQ0NGRkZGJyxcclxuICAgICdCTFVFX1RFQU1LSUxMRVInOiAnIzA5RTJGRicsXHJcbiAgICAnQ1JFRCc6ICcjQ0VEOUQ5JyxcclxuICAgICdHT0xEJzogJyNGRkMzNjMnLFxyXG4gICAgJ0JPTkQnOiAnI0M5QzlCNicsXHJcbiAgICAnUFJPTSc6ICcjQTI5QjcwJyxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAnWFMnOiAnNHJlbScsXHJcbiAgICAnU00nOiAnOHJlbScsXHJcbiAgICAnU01wJzogJzEwcmVtJyxcclxuICAgICdNRCc6ICcxNnJlbScsXHJcbiAgICAnTURwJzogJzIwcmVtJyxcclxuICAgICdMRyc6ICczMnJlbScsXHJcbiAgICAnWEwnOiAnNjRyZW0nLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBlbnYgfSBmcm9tICdsaWIvZW52JztcbmltcG9ydCB7IFR5cGVCeVN0cmluZ1BhdGggfSBmcm9tICdsaWIvdHlwZS1oZWxwZXJzJztcblxuZXhwb3J0IHR5cGUgTW9kZWxTdWJzY3JpYmVyPFQ+ID0gKG1vZGVsOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zID0ge1xuICAgIGluaXRpYWxpemVyPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICBjb250ZXh0Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHJvb3RJZD86IG51bWJlcjtcbiAgICBnZXRSb290PzogKHJvb3RJZDogbnVtYmVyKSA9PiB1bmtub3duO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhTGF5ZXI8VCBleHRlbmRzIHt9PiB7XG4gICAgc3Vic2NyaWJlPFAgZXh0ZW5kcyBzdHJpbmc+KHN1YnNjcmliZXI6IE1vZGVsU3Vic2NyaWJlcjxUeXBlQnlTdHJpbmdQYXRoPFQsIFA+PiwgcGF0aD86IFApOiBudW1iZXI7XG4gICAgcmVhZEJ5UGF0aDxQIGV4dGVuZHMgc3RyaW5nPihwYXRoPzogUCk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD47XG4gICAgY3JlYXRlQ2FsbGJhY2s8QXJnc01hcCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gRXh0ZXJuQXJncywgRXh0ZXJuQXJncyBleHRlbmRzIHt9LCBQIGV4dGVuZHMgc3RyaW5nPihcbiAgICAgICAgYXJnc01hcDogQXJnc01hcCxcbiAgICAgICAgcGF0aDogUCxcbiAgICApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkID8gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8QXJnc01hcD4pID0+IHZvaWQgOiB1bmtub3duO1xuICAgIGNyZWF0ZUNhbGxiYWNrTm9BcmdzPFAgZXh0ZW5kcyBzdHJpbmc+KFxuICAgICAgICBwYXRoOiBQLFxuICAgICk6IFR5cGVCeVN0cmluZ1BhdGg8VCwgUD4gZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPyAoKSA9PiB2b2lkIDogdW5rbm93bjtcbiAgICBkaXNwb3NlOiAoKSA9PiB2b2lkO1xuICAgIHVuc3Vic2NyaWJlOiAoaWQ6IG51bWJlciwgcmVzSWQ/OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGdldFJvb3REZWZhdWx0ID0gKHJvb3RJZDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHJvb3RJZCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93LnN1YlZpZXdzLmdldChyb290SWQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZTxUIGV4dGVuZHMge30+KHtcbiAgICBpbml0aWFsaXplciA9IHRydWUsXG4gICAgcm9vdElkID0gMCxcbiAgICBnZXRSb290ID0gZ2V0Um9vdERlZmF1bHQsXG4gICAgY29udGV4dCA9ICdtb2RlbCcsXG59OiBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zID0ge30pOiBEYXRhTGF5ZXI8VD4ge1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gbmV3IE1hcDxudW1iZXIsIE1vZGVsU3Vic2NyaWJlcjxhbnk+PigpO1xuXG4gICAgZW5naW5lLndoZW5SZWFkeS50aGVuKCgpID0+IHtcbiAgICAgICAgZW5naW5lLm9uKCd2aWV3RW52Lm9uRGF0YUNoYW5nZWQnLCAoZGF0YTogYW55LCBfOiB1bmtub3duLCBjYWxsYmFja0lEczogbnVtYmVyW10pID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrSURzLmZvckVhY2goKGNhbGxiYWNrSUQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHN1YnNjcmliZXJzLmdldChjYWxsYmFja0lEKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGlkOiBudW1iZXIsIHJlc0lkID0gMCkge1xuICAgICAgICBpZiAodmlld0Vudi5yZW1vdmVEYXRhQ2hhbmdlZENhbGxiYWNrKGlkLCByZXNJZCkpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ2FuJ3QgcmVtb3ZlIGNhbGxiYWNrIGJ5IGlkOlwiLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZWFkQnlQYXRoID0gPFAgZXh0ZW5kcyBzdHJpbmc+KHBhdGg/OiBQKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiA9PiB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBnZXRSb290KHJvb3RJZCk7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gY29udGV4dC5zcGxpdCgnLicpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAocmVzdWx0IGFzIGFueSlba2V5XTtcbiAgICAgICAgfSwgcm9vdCBhcyBUKTtcblxuICAgICAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnIHx8IHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWwgYXMgdW5rbm93biBhcyBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGguc3BsaXQoJy4nKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gKHJlc3VsdCBhcyBhbnkpW2tleV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5iaW5kKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSwgbW9kZWwpIGFzIFR5cGVCeVN0cmluZ1BhdGg8VCwgUD47XG4gICAgfTtcblxuICAgIGNvbnN0IHN1YnNjcmliZSA9IDxQIGV4dGVuZHMgc3RyaW5nPihzdWJzY3JpYmVyOiBNb2RlbFN1YnNjcmliZXI8VHlwZUJ5U3RyaW5nUGF0aDxULCBQPj4sIHBhdGg/OiBQKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZVBhdGggPSB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgPyBgJHtjb250ZXh0fS4ke3BhdGh9YCA6IGNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHRyYWNrSW5EZXB0aCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGlkID0gZW52LnZpZXcuYWRkTW9kZWxPYnNlcnZlcihzdWJzY3JpYmVQYXRoLCByb290SWQsIHRyYWNrSW5EZXB0aCk7XG4gICAgICAgIHN1YnNjcmliZXJzLnNldChpZCwgc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChpbml0aWFsaXplcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlcihyZWFkQnlQYXRoKHBhdGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUNhbGxiYWNrID0gPEFyZ3NNYXAgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IEV4dGVybkFyZ3MsIEV4dGVybkFyZ3MgZXh0ZW5kcyB7fSwgUCBleHRlbmRzIHN0cmluZz4oXG4gICAgICAgIGFyZ3NNYXA6IEFyZ3NNYXAsXG4gICAgICAgIHBhdGg6IFAsXG4gICAgKTogVHlwZUJ5U3RyaW5nUGF0aDxULCBQPiBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCA/ICguLi5hcmdzOiBQYXJhbWV0ZXJzPEFyZ3NNYXA+KSA9PiB2b2lkIDogdW5rbm93biA9PiB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVhZEJ5UGF0aChwYXRoKSBhcyAoYXJncz86IEV4dGVybkFyZ3MpID0+IHZvaWQ7XG4gICAgICAgIHJldHVybiAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICAgIGZuKGFyZ3NNYXAoLi4uYXJncykpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVDYWxsYmFja05vQXJncyA9IDxQIGV4dGVuZHMgc3RyaW5nPihcbiAgICAgICAgcGF0aDogUCxcbiAgICApOiBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkID8gKCkgPT4gdm9pZCA6IHVua25vd24gPT4ge1xuICAgICAgICBjb25zdCBmbiA9IHJlYWRCeVBhdGgocGF0aCkgYXMgKGFyZ3M/OiB7IGFyZ3M6IGFueSB9KSA9PiB2b2lkO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBzdWJzY3JpYmVySWQgb2Ygc3Vic2NyaWJlcnMua2V5cygpKSB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZShzdWJzY3JpYmVySWQsIHJvb3RJZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWJzY3JpYmUsIHJlYWRCeVBhdGgsIGNyZWF0ZUNhbGxiYWNrLCBjcmVhdGVDYWxsYmFja05vQXJncywgZGlzcG9zZSwgdW5zdWJzY3JpYmUgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZnVuY3Rpb24tY29tcG9uZW50LWRlZmluaXRpb24gKi9cclxuaW1wb3J0IHsgY29uc3RGYWxzZSB9IGZyb20gJ2xpYi9mdW5jdGlvbic7XHJcbmltcG9ydCB7IFR5cGVCeVN0cmluZ1BhdGggfSBmcm9tICdsaWIvdHlwZS1oZWxwZXJzJztcclxuaW1wb3J0IHsgYWN0aW9uLCBvYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBEYXRhTGF5ZXIsIERhdGFMYXllckNyZWF0ZU9wdGlvbnMgfSBmcm9tICcuL2RhdGEtbGF5ZXInO1xyXG5pbXBvcnQgKiBhcyBkYXRhTGF5ZXIgZnJvbSAnLi9kYXRhLWxheWVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZU1vZGVsIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgeyBkYXRhTGF5ZXIgfTtcclxuZXhwb3J0IHR5cGUgeyBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zLCBEYXRhTGF5ZXIgfTtcclxuLyoqIEN1cnJlbnQgZGF0YSBtb2RlIChtb2NrcyBvciByZWFsKSAqL1xyXG5leHBvcnQgdHlwZSBNb2RlID0gJ21vY2tzJyB8ICdyZWFsJztcclxuXHJcbmV4cG9ydCB0eXBlIENvbnRleHQ8TW9kZWwsIENvbnRyb2xzPiA9IHtcclxuICAgIG1vZGVsOiBNb2RlbDtcclxuICAgIGNvbnRyb2xzOiBDb250cm9scztcclxuICAgIG1vZGU6IE1vZGU7XHJcbn07XHJcblxyXG4vKipcclxuICogV2lsbCBiZSBjYWxsIGJlZm9yZSBNb2RlbFByb3ZpZGVyIHdpbGwgdW5tb3VudFxyXG4gKiBgYGB0c3hcclxuICogbGV0IHRpbWVvdXRJZCA9IDBcclxuICogY2xlYW51cCgoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKSlcclxuICpcclxuICogLy8gLi4uXHJcbiAqXHJcbiAqICgpID0+IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZG9Tb21ldGhpbmcsIDUwMClcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDbGVhbnVwID0gKGNsZWFudXBGbjogKCkgPT4gdm9pZCkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgQ29udGV4dFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xyXG4gICAgbW9kZT86IE1vZGU7XHJcbiAgICBvcHRpb25zPzogRGF0YUxheWVyQ3JlYXRlT3B0aW9ucztcclxufT47XHJcblxyXG5leHBvcnQgdHlwZSBSZWFkQnlQYXRoPFQgZXh0ZW5kcyB7fT4gPSA8UCBleHRlbmRzIHN0cmluZyB8IHVuZGVmaW5lZD4oXHJcbiAgICBwYXRoOiBQLFxyXG4pID0+IFAgZXh0ZW5kcyBzdHJpbmcgPyBUeXBlQnlTdHJpbmdQYXRoPFQsIFA+IDogVDtcclxuXHJcbmV4cG9ydCB0eXBlIE1vZGVsQ3JlYXRvckFyZ3M8VCBleHRlbmRzIHt9PiA9IHtcclxuICAgIG1vZGU6IE1vZGU7XHJcbiAgICAvKiogVGhpcyBpcyBBUEkgZm9yIEpTIDwtPiBDKyssIHJlYWQgb2YgY3JlYXRlIGRvYyBpbiB7QGxpbmsgZGF0YUxheWVyLmNyZWF0ZX0gKi9cclxuICAgIGV4dGVybmFsTW9kZWw6IERhdGFMYXllcjxUPjtcclxuICAgIC8qKiBAc2VlIHtAbGluayBDbGVhbnVwfSBmb3IgZnVydGhlciBpbmZvcm1hdGlvbi4gKi9cclxuICAgIGNsZWFudXA6IENsZWFudXA7XHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIG9ic2VydmFibGUgYm94IGFib3ZlIHBhcnQgb2YgbW9kZWwgYW5kIHN1YnNjcmliZSB0byB1cGRhdGUgYnkgdHlwZVxyXG4gICAgICogQHBhcmFtIHBhdGggb3B0aW9uYWwgcmVsYXRpdmUgcGF0aCBvZiBtb2RlbFxyXG4gICAgICogQHBhcmFtIGluaXQgb3B0aW9uYWwgaW5pdCBkYXRhIG9mIHBhdGggKHdpbGwgcmVhZCBmcm9tIG1vZGVsIGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmFibGVNb2RlbDogT2JzZXJ2YWJsZU1vZGVsPFQ+O1xyXG4gICAgcmVhZEJ5UGF0aDogUmVhZEJ5UGF0aDxUPjtcclxufTtcclxuZXhwb3J0IHR5cGUgQ29udHJvbHNDcmVhdG9yQXJnczxNb2RlbCwgVCBleHRlbmRzIHt9PiA9IHtcclxuICAgIG1vZGU6IE1vZGU7XHJcbiAgICAvKiogTW9kZWwgd2hhdCByZXR1cm5lZCBmcm9tIGZpcnN0IGZ1bmN0aW9uIC0ge0BsaW5rIE1vZGVsQ3JlYXRvckFyZ3M8VD59ICovXHJcbiAgICBtb2RlbDogTW9kZWw7XHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIG9ic2VydmFibGUgYm94IGFib3ZlIHBhcnQgb2YgbW9kZWwgYW5kIHN1YnNjcmliZSB0byB1cGRhdGUgYnkgdHlwZVxyXG4gICAgICogQHBhcmFtIHBhdGggb3B0aW9uYWwgcmVsYXRpdmUgcGF0aCBvZiBtb2RlbFxyXG4gICAgICogQHBhcmFtIGluaXQgb3B0aW9uYWwgaW5pdCBkYXRhIG9mIHBhdGggKHdpbGwgcmVhZCBmcm9tIG1vZGVsIGJ5IGRlZmF1bHQpXHJcbiAgICAgKi9cclxuICAgIGV4dGVybmFsTW9kZWw6IERhdGFMYXllcjxUPjtcclxuICAgIC8qKiBAc2VlIHtAbGluayBDbGVhbnVwfSBmb3IgZnVydGhlciBpbmZvcm1hdGlvbi4gKi9cclxuICAgIGNsZWFudXA6IENsZWFudXA7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBNb2NrczxNb2RlbCwgQ29udHJvbHM+ID0ge1xyXG4gICAgZ2V0dGVyOiAocGF0aD86IHN0cmluZykgPT4gYW55O1xyXG4gICAgY29udHJvbHM6IChhcmdzOiB7IG1vZGU6IE1vZGU7IG1vZGVsOiBNb2RlbDsgY2xlYW51cDogQ2xlYW51cCB9KSA9PiBDb250cm9scztcclxufTtcclxuXHJcbi8qKlxyXG4gKiAjIyMjIE1ha2VzIHR5cGUgZm9yIG1ha2UgbW9ja3MgZWFzaWVyXHJcbiAqIGBgYHRzXHJcbiAqICBjb25zdCBtb2NrczogTW9ja3NPZjx0eXBlb2YgdXNlTW9kZWw+ID0ge1xyXG4gKiAgICAgIC8vIC4uLlxyXG4gKiAgfVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIE1vY2tzT2Y8VXNlTW9kZWwgZXh0ZW5kcyAoKSA9PiBhbnk+ID0gUmV0dXJuVHlwZTxVc2VNb2RlbD4gZXh0ZW5kcyBDb250ZXh0PGluZmVyIE1vZGVsLCBpbmZlciBDb250cm9scz5cclxuICAgID8gTW9ja3M8TW9kZWwsIENvbnRyb2xzPlxyXG4gICAgOiBuZXZlcjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgTW9kZWxQcm92aWRlciBhbmQgdXNlTW9kZWwgZm9yIHlvdXIgZGF0YS1sYXllcjpcclxuICogYGBgdHNcclxuICogZXhwb3J0IGNvbnN0IFtNb2RlbFByb3ZpZGVyLCB1c2VNb2RlbF0gPSBpbml0aWFsaXplTW9kZWxXaXRoQ29udGV4dDw8TU9ERUxfVFlQRT4+KCkoXHJcbiAqICAgICAoKSA9PiB7fSwgLy8gZm9yIG1vZGVsXHJcbiAqICAgICAoKSA9PiB7fSwgLy8gZm9yIGNvbnRyb2xzIChmdW5jdGlvbnMpXHJcbiAqICk7XHJcbiAqIGBgYFxyXG4gKiBXaGVyZSBgPE1PREVMX1RZUEU+YCBpcyB5b3VyIG1vZGVsIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZU1vZGVsV2l0aENvbnRleHQgPSA8VCBleHRlbmRzIHt9PigpID0+IHtcclxuICAgIHJldHVybiA8TW9kZWwsIENvbnRyb2xzPihcclxuICAgICAgICBtb2RlbENyZWF0b3I6IChhcmdzOiBNb2RlbENyZWF0b3JBcmdzPFQ+KSA9PiBNb2RlbCxcclxuICAgICAgICBjb250cm9sc0NyZWF0b3I6IChhcmdzOiBDb250cm9sc0NyZWF0b3JBcmdzPE1vZGVsLCBUPikgPT4gQ29udHJvbHMsXHJcbiAgICApID0+IHtcclxuICAgICAgICBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0PE1vZGVsLCBDb250cm9scz4+KHt9IGFzIHVua25vd24gYXMgQ29udGV4dDxNb2RlbCwgQ29udHJvbHM+KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgZnVuY3Rpb24gRGF0YUxheWVyUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICAgICAgbW9kZTogZGF0YU1vZGUgPSAncmVhbCcsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICAgICBtb2NrcyxcclxuICAgICAgICAgICAgfTogQ29udGV4dFByb3BzICYgeyBtb2Nrcz86IE1vY2tzPE1vZGVsLCBDb250cm9scz4gfSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW51cHNSZWYgPSB1c2VSZWY8KCgpID0+IHZvaWQpW10+KFtdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUNvbnRleHRWYWx1ZSA9IChcclxuICAgICAgICAgICAgICAgICAgICBtb2RlOiBNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM/OiBEYXRhTGF5ZXJDcmVhdGVPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vY2tzPzogTW9ja3M8TW9kZWwsIENvbnRyb2xzPixcclxuICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFMYXllckluc3RhbmNlID0gZGF0YUxheWVyLmNyZWF0ZTxUPihvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbE1vZGVsID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gJ3JlYWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGFMYXllckluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGFMYXllckluc3RhbmNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEJ5UGF0aDogbW9ja3M/LmdldHRlciA/PyAoKCkgPT4gdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSBPYnNlcnZhYmxlTW9kZWxMb2NhbCA9IE9ic2VydmFibGVNb2RlbDxUPjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZEJ5UGF0aDogUmVhZEJ5UGF0aDxUPiA9IChwYXRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnbW9ja3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9ja3M/LmdldHRlcihwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHRlcm5hbE1vZGVsLnJlYWRCeVBhdGgocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlQXJyYXk6IE9ic2VydmFibGVNb2RlbExvY2FsWydhcnJheSddID0gKHBhdGgsIGluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdE9ic2VydmFibGUgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQgPz8gcmVhZEJ5UGF0aChwYXRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gb2JzZXJ2YWJsZS5ib3g8YW55Pihpbml0T2JzZXJ2YWJsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxzOiBjb25zdEZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uKChkYXRhOiBhbnkpID0+IG1vZGVsLnNldChkYXRhKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGVPYmplY3Q6IE9ic2VydmFibGVNb2RlbExvY2FsWydvYmplY3QnXSA9IChwYXRoLCBpbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluaXRPYnNlcnZhYmxlID0gKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbml0ID8/IHJlYWRCeVBhdGgocGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IG9ic2VydmFibGUuYm94KGluaXRPYnNlcnZhYmxlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcXVhbHM6IGNvbnN0RmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlcm5hbE1vZGVsLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKGRhdGE6IGFueSkgPT4gbW9kZWwuc2V0KGRhdGEpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGVQcmltaXRpdmVzOiBPYnNlcnZhYmxlTW9kZWxMb2NhbFsncHJpbWl0aXZlcyddID0gKGtleXM6IHVua25vd24sIHBhdGg/OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdE9ic2VydmFibGUgPSByZWFkQnlQYXRoKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5cykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0ga2V5cy5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjW2tleV0gPSBvYnNlcnZhYmxlLmJveCgoaW5pdE9ic2VydmFibGUgYXMgUmVjb3JkPHN0cmluZywgVD4pW2tleV0sIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30gYXMgYW55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3JlYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsW2tleV0uc2V0KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXNSZWNvcmQgPSBrZXlzIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGtleXNSZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBrZXlzRW50cmllcy5yZWR1Y2UoKGFjYywgW2tleUZyb20sIGtleVRvXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY1trZXlUb10gPSBvYnNlcnZhYmxlLmJveCgoaW5pdE9ic2VydmFibGUgYXMgUmVjb3JkPHN0cmluZywgVD4pW2tleUZyb21dLCB7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9IGFzIGFueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdyZWFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsTW9kZWwuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24oKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5c0VudHJpZXMuZm9yRWFjaCgoW2tleUZyb20sIGtleVRvXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsW2tleVRvXS5zZXQoZGF0YVtrZXlGcm9tXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFudXA6IENsZWFudXAgPSAoZm4pID0+IGNsZWFudXBzUmVmLmN1cnJlbnQucHVzaChmbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gbW9kZWxDcmVhdG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEJ5UGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZU1vZGVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheTogb2JzZXJ2YWJsZUFycmF5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBvYnNlcnZhYmxlT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWl0aXZlczogb2JzZXJ2YWJsZVByaW1pdGl2ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzQXJncyA9IHsgbW9kZSwgbW9kZWwsIGV4dGVybmFsTW9kZWwsIGNsZWFudXAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPT09ICdtb2NrcycgJiYgbW9ja3MgPyBtb2Nrcy5jb250cm9scyhjb250cm9sc0FyZ3MpIDogY29udHJvbHNDcmVhdG9yKGNvbnRyb2xzQXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG1vZGVsLCBjb250cm9scywgZXh0ZXJuYWxNb2RlbCwgbW9kZSB9O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFttb2RlLCBjaGFuZ2VNb2RlXSA9IHVzZVN0YXRlPE1vZGU+KGRhdGFNb2RlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKCkgPT4gY3JlYXRlQ29udGV4dFZhbHVlKGRhdGFNb2RlLCBvcHRpb25zLCBtb2NrcykpO1xyXG5cclxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFydGVkUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShjcmVhdGVDb250ZXh0VmFsdWUobW9kZSwgb3B0aW9ucywgbW9ja3MpKTtcclxuICAgICAgICAgICAgICAgIH0sIFttb2NrcywgbW9kZSwgb3B0aW9uc10pO1xyXG5cclxuICAgICAgICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9kZShkYXRhTW9kZSk7XHJcbiAgICAgICAgICAgICAgICB9LCBbZGF0YU1vZGVdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1c2VFZmZlY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5leHRlcm5hbE1vZGVsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cHNSZWYuY3VycmVudC5mb3JFYWNoKChmbikgPT4gZm4oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KSxcclxuICAgICAgICBdIGFzIGNvbnN0O1xyXG4gICAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgbWFrZUVuZ2luZUV2ZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IHNldFRyYWNrTW91c2VPdXRzaWRlIH0gZnJvbSAnLi9pbnRlcm5hbCc7XHJcblxyXG5leHBvcnQgdHlwZSBHRk1vdXNlRXZlbnQgPSB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBidXR0b246IG51bWJlcjtcclxuICAgIGJ1dHRvbnM6IG51bWJlcjtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIGNsaWVudFg6IG51bWJlcjtcclxuICAgIGNsaWVudFk6IG51bWJlcjtcclxuICAgIHNjcmVlblg6IG51bWJlcjtcclxuICAgIHNjcmVlblk6IG51bWJlcjtcclxuICAgIGFsdEtleTogYm9vbGVhbjtcclxuICAgIGN0cmxLZXk6IGJvb2xlYW47XHJcbiAgICBzaGlmdEtleTogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvblJlc2l6ZSA9IG1ha2VFbmdpbmVFdmVudDwod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHZvaWQ+KCdjbGllbnRSZXNpemVkJyk7XHJcblxyXG5leHBvcnQgdHlwZSBHRk1vdXNlSGFuZGxlciA9IChldmVudDogR0ZNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBHRk1vdXNlRXZlbnROYW1lID0gJ2Rvd24nIHwgJ3VwJyB8ICdtb3ZlJztcclxuZXhwb3J0IHR5cGUgRXh0TW91c2VFdmVudCA9IFtldmVudDogR0ZNb3VzZUV2ZW50LCB0eXBlOiAnb3V0c2lkZSddIHwgW2V2ZW50OiBNb3VzZUV2ZW50LCB0eXBlOiAnaW5zaWRlJ107XHJcblxyXG5leHBvcnQgdHlwZSBNb3VzZUxpc3RlbmVyID0gKGV2ZW50OiBFeHRNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuY29uc3QgaW50ZXJuYWxNb3VzZSA9IHtcclxuICAgIGRvd246IG1ha2VFbmdpbmVFdmVudDxHRk1vdXNlSGFuZGxlcj4oJ21vdXNlZG93bicpLFxyXG4gICAgdXA6IG1ha2VFbmdpbmVFdmVudDxHRk1vdXNlSGFuZGxlcj4oJ21vdXNldXAnKSxcclxuICAgIG1vdmU6IG1ha2VFbmdpbmVFdmVudDxHRk1vdXNlSGFuZGxlcj4oJ21vdXNlbW92ZScpLFxyXG59O1xyXG5cclxudHlwZSBNb3VzZUV2ZW50c0FQSSA9IFJlY29yZDxHRk1vdXNlRXZlbnROYW1lLCAobGlzdGVuZXI6IE1vdXNlTGlzdGVuZXIpID0+ICgpID0+IHZvaWQ+ICYge1xyXG4gICAgZGlzYWJsZTogKCkgPT4gdm9pZDtcclxuICAgIGVuYWJsZTogKCkgPT4gdm9pZDtcclxuICAgIGVuYWJsZU91dHNpZGU6ICgpID0+IHZvaWQ7XHJcbiAgICBkaXNhYmxlT3V0c2lkZTogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgbW91c2UgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHZpZXcgaXMgZXhwZW5zaXZlIG9wZXJhdGlvbi5cclxuICogVGhpcyBkZWNvcmF0b3Igc2VwYXJhdGUgdHJhY2sgbW91c2UgZXZlbnRzIGJldHdlZW4gaW5zaWRlIGFuZCBvdXRzaWRlLlxyXG4gKiBXaGVuIGN1cnNvciBpcyBvdXRzaWRlIG9mIHRoZSB2aWV3LlxyXG4gKiBXaGVuIG1vdXNlIGN1cnNvciBpcyBpbnNpZGUgb2YgdGhlIHZpZXcsIGl0IHdpbGwgYmUgdHJhY2tlZCBieSBpbnRlcm5hbCBkZWZhdWx0IGV2ZW50cy5cclxuICpcclxuICogRnVuY3Rpb24gZW5jYXBzdWxhdGUgbG9naWMgYW5kIHN0YXRlIGluc2lkZS5cclxuICovXHJcbmZ1bmN0aW9uIGluaXRNb3VzZUV2ZW50cygpOiBNb3VzZUV2ZW50c0FQSSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHtcclxuICAgICAgICBsaXN0ZW5lcnM6IDAsXHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgc2V0VHJhY2tNb3VzZU91dHNpZGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIGlmIChzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVMYXp5VHJhY2soKSB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0YXRlLmxpc3RlbmVycyA8IDEpIHtcclxuICAgICAgICAgICAgc3RhdGUuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGFuZGxlTW91c2VFbnRlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLmluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGFuZGxlTW91c2VFbnRlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlRXZlbnQobmFtZTogR0ZNb3VzZUV2ZW50TmFtZSkge1xyXG4gICAgICAgIHJldHVybiAobGlzdGVuZXI6IE1vdXNlTGlzdGVuZXIpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzICs9IDE7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSB0cnVlOyAvLyBwcmV2ZW50IGRvdWJsZSBkaXNwb3NlKHVuc3Vic2NyaWJlKVxyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3dFdmVudCA9IGBtb3VzZSR7bmFtZX1gO1xyXG4gICAgICAgICAgICBjb25zdCBkaXNwb3NlID0gaW50ZXJuYWxNb3VzZVtuYW1lXSgoZXZlbnQpID0+IGxpc3RlbmVyKFtldmVudCwgJ291dHNpZGUnXSkpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVXaW5kb3dFdmVudChldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoW2V2ZW50LCAnaW5zaWRlJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHdpbmRvd0V2ZW50LCBoYW5kbGVXaW5kb3dFdmVudCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3dFdmVudCwgaGFuZGxlV2luZG93RXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUubGlzdGVuZXJzIC09IDE7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVMYXp5VHJhY2soKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXZlbnRzOiBUdXBsaWZ5PEdGTW91c2VFdmVudE5hbWU+ID0gWydkb3duJywgJ3VwJywgJ21vdmUnXTtcclxuXHJcbiAgICBjb25zdCBzdWJzY3JpYmVBcGkgPSBldmVudHMucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcclxuICAgICAgICBhY2NbbmFtZV0gPSBtYWtlRXZlbnQobmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIDxQaWNrPE1vdXNlRXZlbnRzQVBJLCBHRk1vdXNlRXZlbnROYW1lPj57fSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdWJzY3JpYmVBcGksXHJcbiAgICAgICAgZGlzYWJsZSgpIHtcclxuICAgICAgICAgICAgc3RhdGUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB1cGRhdGVMYXp5VHJhY2soKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuYWJsZSgpIHtcclxuICAgICAgICAgICAgc3RhdGUuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxhenlUcmFjaygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5hYmxlT3V0c2lkZSgpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlT3V0c2lkZSgpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFRyYWNrTW91c2VPdXRzaWRlKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbW91c2UgPSBpbml0TW91c2VFdmVudHMoKTtcclxuIiwiZXhwb3J0ICogYXMgZXZlbnRzIGZyb20gJy4vZXZlbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpemUodW5pdDogJ3B4JyB8ICdyZW0nID0gJ3B4Jykge1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZpZXdFbnYuZ2V0Q2xpZW50U2l6ZVJlbSgpIDogdmlld0Vudi5nZXRDbGllbnRTaXplUHgoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vdXNlR2xvYmFsUG9zaXRpb24odW5pdDogJ3B4JyB8ICdyZW0nID0gJ3B4Jykge1xuICAgIHJldHVybiB1bml0ID09PSAncmVtJyA/IHZpZXdFbnYuZ2V0TW91c2VHbG9iYWxQb3NpdGlvblJlbSgpIDogdmlld0Vudi5nZXRNb3VzZUdsb2JhbFBvc2l0aW9uUHgoKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdyYXBoaWNzUXVhbGl0eSA9IHtcbiAgICBpc0xvdzogKCkgPT4gdmlld0Vudi5nZXRHcmFwaGljc1F1YWxpdHkoKSA9PT0gMSxcbiAgICBpc0hpZ2g6ICgpID0+IHZpZXdFbnYuZ2V0R3JhcGhpY3NRdWFsaXR5KCkgPT09IDAsXG4gICAgZ2V0OiAoKSA9PiB2aWV3RW52LmdldEdyYXBoaWNzUXVhbGl0eSgpLFxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRUcmFja01vdXNlT3V0c2lkZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdmlld0Vudi5zZXRUcmFja01vdXNlT25TdGFnZSh2YWx1ZSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VFbmdpbmVFdmVudDxUIGV4dGVuZHMgRnVuY3Rpb24+KGV2ZW50TmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKGhhbmRsZXI6IFQpID0+IHtcclxuICAgICAgICBlbmdpbmUub24oZXZlbnROYW1lLCBoYW5kbGVyIGFzIG5ldmVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBlbmdpbmUub2ZmKGV2ZW50TmFtZSwgaGFuZGxlciBhcyBuZXZlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgY2xpZW50IGZyb20gJy4vY2xpZW50JztcclxuaW1wb3J0ICogYXMgdmlldyBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudiA9IHtcclxuICAgIHZpZXcsXHJcbiAgICBjbGllbnQsXHJcbn07XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAod2luZG93IGFzIGFueSkuZW52ID0gZW52O1xyXG59XHJcbiIsImltcG9ydCB7IFNpemUgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0dXJlVXJsKGNoaWxkSWQ6IG51bWJlciwgc2l6ZTogU2l6ZSwgc2NhbGUgPSAxKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuZ2V0Q2hpbGRUZXh0dXJlUGF0aChjaGlsZElkLCBzaXplLndpZHRoLCBzaXplLmhlaWdodCwgc2NhbGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmdVcmwoY2hpbGRJZDogbnVtYmVyLCBzaXplOiBTaXplLCBzY2FsZT86IG51bWJlcikge1xuICAgIHJldHVybiBgdXJsKCR7Z2V0VGV4dHVyZVVybChjaGlsZElkLCBzaXplLCBzY2FsZSl9KWA7XG59XG4iLCJleHBvcnQgdHlwZSBTaXplID0ge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBQb2ludCA9IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlTdGF0dXMgPSB7XG4gICAgc2hvd2luZzogMCxcbiAgICBzaG93bjogMSxcbiAgICBoaWRpbmc6IDIsXG4gICAgaGlkZGVuOiAzLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgRGlzcGxheVN0YXR1cyA9IFZhbHVlT2Y8dHlwZW9mIGRpc3BsYXlTdGF0dXM+O1xuIiwiaW1wb3J0IHsgbWFrZUVuZ2luZUV2ZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCB7IERpc3BsYXlTdGF0dXMsIFBvaW50IH0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2hpbGRyZW5FdmVudEhhbmRsZXIgPSAodmlld0lkOiBudW1iZXIsIGluc3RhbmNlSWQ6IG51bWJlciwgcmVzSWQ6IG51bWJlcikgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgUmVxdWVzdFBvc2l0aW9uSGFuZGxlciA9ICh2aWV3SWQ6IG51bWJlciwgcG9zaXRpb246IFBvaW50KSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBDaGFuZ2VEaXNwbGF5SGFuZGxlciA9IChwcmV2U3RhdHVzOiBEaXNwbGF5U3RhdHVzLCBjdXJyZW50U3RhdHVzOiBEaXNwbGF5U3RhdHVzKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBGb2N1c1VwZGF0ZWRIYW5kbGVyID0gKHByZXZTdGF0dXM6IERpc3BsYXlTdGF0dXMsIGN1cnJlbnRTdGF0dXM6IERpc3BsYXlTdGF0dXMpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gICAgb25UZXh0dXJlRnJvemVuOiBtYWtlRW5naW5lRXZlbnQ8KCkgPT4gdm9pZD4oJ3NlbGYub25UZXh0dXJlRnJvemVuJyksXHJcbiAgICBvblRleHR1cmVSZWFkeTogbWFrZUVuZ2luZUV2ZW50PCgpID0+IHZvaWQ+KCdzZWxmLm9uVGV4dHVyZVJlYWR5JyksXHJcbiAgICBvbkRvbUJ1aWx0OiBtYWtlRW5naW5lRXZlbnQ8KCkgPT4gdm9pZD4oJ3NlbGYub25Eb21CdWlsdCcpLFxyXG4gICAgb25Mb2FkZWQ6IG1ha2VFbmdpbmVFdmVudDwoKSA9PiB2b2lkPignc2VsZi5vbkxvYWRlZCcpLFxyXG4gICAgb25EaXNwbGF5Q2hhbmdlZDogbWFrZUVuZ2luZUV2ZW50PENoYW5nZURpc3BsYXlIYW5kbGVyPignc2VsZi5vblNob3dpbmdTdGF0dXNDaGFuZ2VkJyksXHJcbiAgICBvbkZvY3VzVXBkYXRlZDogbWFrZUVuZ2luZUV2ZW50PEZvY3VzVXBkYXRlZEhhbmRsZXI+KCdzZWxmLm9uRm9jdXNDaGFuZ2VkJyksXHJcbiAgICBjaGlsZHJlbjoge1xyXG4gICAgICAgIG9uQWRkZWQ6IG1ha2VFbmdpbmVFdmVudDxDaGlsZHJlbkV2ZW50SGFuZGxlcj4oJ2NoaWxkcmVuLm9uQWRkZWQnKSxcclxuICAgICAgICBvbkxvYWRlZDogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25Mb2FkZWQnKSxcclxuICAgICAgICBvblJlbW92ZWQ6IG1ha2VFbmdpbmVFdmVudDxDaGlsZHJlbkV2ZW50SGFuZGxlcj4oJ2NoaWxkcmVuLm9uUmVtb3ZlZCcpLFxyXG4gICAgICAgIG9uQXR0YWNoZWQ6IG1ha2VFbmdpbmVFdmVudDxDaGlsZHJlbkV2ZW50SGFuZGxlcj4oJ2NoaWxkcmVuLm9uQXR0YWNoZWQnKSxcclxuICAgICAgICBvblRleHR1cmVSZWFkeTogbWFrZUVuZ2luZUV2ZW50PENoaWxkcmVuRXZlbnRIYW5kbGVyPignY2hpbGRyZW4ub25UZXh0dXJlUmVhZHknKSxcclxuICAgICAgICBvblJlcXVlc3RQb3NpdGlvbjogbWFrZUVuZ2luZUV2ZW50PFJlcXVlc3RQb3NpdGlvbkhhbmRsZXI+KCdjaGlsZHJlbi5yZXF1ZXN0UG9zaXRpb24nKSxcclxuICAgIH0sXHJcbn07XHJcbiIsImltcG9ydCAqIGFzIGNoaWxkcmVuIGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgRGlzcGxheVN0YXR1cywgZGlzcGxheVN0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHNlbmRFdmVudCB9IGZyb20gJy4vc2VuZEV2ZW50JztcblxuZXhwb3J0IHR5cGUgeyBQb2ludCwgU2l6ZSwgRGlzcGxheVN0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IHsgZXZlbnRzLCBzZW5kRXZlbnQsIGNoaWxkcmVuLCBkaXNwbGF5U3RhdHVzIH07XG5cbmV4cG9ydCB0eXBlIFNpZGVzID0ge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHJpZ2h0OiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xufTtcblxuY29uc3QgQUxMX1NJREVTID0gMHhmO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJlbG9hZFRleHR1cmUocGF0aDogc3RyaW5nKSB7XG4gICAgdmlld0Vudi5hZGRQcmVsb2FkVGV4dHVyZShwYXRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldElucHV0UGFkZGluZ3NSZW0ocGFkZGluZ3M6IG51bWJlcikge1xuICAgIHZpZXdFbnYuc2V0SGl0QXJlYVBhZGRpbmdzUmVtKHBhZGRpbmdzLCBwYWRkaW5ncywgcGFkZGluZ3MsIHBhZGRpbmdzLCBBTExfU0lERVMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlclRleHR1cmVQYXRoKGlkOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzY2FsZSA9IDEpIHtcbiAgICByZXR1cm4gdmlld0Vudi5nZXRXZWJCcm93c2VyVGV4dHVyZVBhdGgoaWQsIHdpZHRoLCBoZWlnaHQsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZGVsT2JzZXJ2ZXIocGF0aDogc3RyaW5nLCByZXNJZDogbnVtYmVyLCB0cmFja1N1Ykl0ZW1zOiBib29sZWFuKSB7XG4gICAgcmV0dXJuIHZpZXdFbnYuYWRkRGF0YUNoYW5nZWRDYWxsYmFjayhwYXRoLCByZXNJZCwgdHJhY2tTdWJJdGVtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTaWRlUGFkZGluZ3NSZW0ocGFkZGluZ3M6IFNpZGVzKSB7XG4gICAgdmlld0Vudi5zZXRIaXRBcmVhUGFkZGluZ3NSZW0ocGFkZGluZ3MudG9wLCBwYWRkaW5ncy5yaWdodCwgcGFkZGluZ3MuYm90dG9tLCBwYWRkaW5ncy5sZWZ0LCBBTExfU0lERVMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l6ZSh1bml0OiAncHgnIHwgJ3JlbScgPSAncHgnKSB7XG4gICAgcmV0dXJuIHVuaXQgPT09ICdyZW0nID8gdmlld0Vudi5nZXRWaWV3U2l6ZVJlbSgpIDogdmlld0Vudi5nZXRWaWV3U2l6ZVB4KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHVuaXQ6ICdweCcgfCAncmVtJyA9ICdweCcpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2aWV3RW52LnJlc2l6ZVZpZXdSZW0od2lkdGgsIGhlaWdodCkgOiB2aWV3RW52LnJlc2l6ZVZpZXdQeCh3aWR0aCwgaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXdHbG9iYWxQb3NpdGlvbih1bml0OiAncHgnIHwgJ3JlbScgPSAncmVtJykge1xuICAgIGNvbnN0IHZhbHVlID0gdmlld0Vudi5nZXRWaWV3R2xvYmFsUG9zaXRpb25SZW0oKTtcbiAgICByZXR1cm4gdW5pdCA9PT0gJ3JlbScgPyB2YWx1ZSA6IHsgeDogcmVtVG9QeCh2YWx1ZS54KSwgeTogcmVtVG9QeCh2YWx1ZS55KSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJlZXplVGV4dHVyZUJlZm9yZVJlc2l6ZSgpIHtcbiAgICB2aWV3RW52LmZyZWV6ZVRleHR1cmVCZWZvcmVSZXNpemUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxlKCkge1xuICAgIHJldHVybiB2aWV3RW52LmdldFNjYWxlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBweFRvUmVtKHB4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmlld0Vudi5weFRvUmVtKHB4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbVRvUHgocmVtOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdmlld0Vudi5yZW1Ub1B4KHJlbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBbmltYXRlV2luZG93KHNob3dpbmc6IGJvb2xlYW4sIGhpZGluZzogYm9vbGVhbikge1xuICAgIHZpZXdFbnYuc2V0QW5pbWF0ZVdpbmRvdyhzaG93aW5nLCBoaWRpbmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2aWV3RW52LmlzRm9jdXNlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RXZlbnRIYW5kbGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2aWV3RW52LnNldEV2ZW50SGFuZGxlZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVudEhhbmRsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZpZXdFbnYuaXNFdmVudEhhbmRsZWQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcmNlVHJpZ2dlck1vdXNlTW92ZSgpIHtcbiAgICB2aWV3RW52LmZvcmNlVHJpZ2dlck1vdXNlTW92ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheVN0YXR1cygpIHtcbiAgICByZXR1cm4gdmlld0Vudi5nZXRTaG93aW5nU3RhdHVzKCkgYXMgRGlzcGxheVN0YXR1cztcbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlTdGF0dXNJcyA9IE9iamVjdC5rZXlzKGRpc3BsYXlTdGF0dXMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICBhY2Nba2V5XSA9ICgpID0+IHZpZXdFbnYuZ2V0U2hvd2luZ1N0YXR1cygpID09PSBkaXNwbGF5U3RhdHVzW2tleV07XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9IGFzIFJlY29yZDxrZXlvZiB0eXBlb2YgZGlzcGxheVN0YXR1cywgKCkgPT4gYm9vbGVhbj4pO1xuXG5leHBvcnQgY29uc3QgZXh0cmFTaXplID0ge1xuICAgIC8qKiBSZW0gdW5pdHMgKi9cbiAgICBzZXQ6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICB2aWV3RW52LnNldEV4dHJhU2l6ZVJlbSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9LFxuICAgIC8qKiBSZW0gdW5pdHMgKi9cbiAgICBnZXQ6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgICB2aWV3RW52LmdldEV4dHJhU2l6ZVJlbSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHdoZW5UdXRvcmlhbFJlYWR5ID0gUHJvbWlzZS5hbGw8dm9pZD4oW1xuICAgIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuaXNEb21CdWlsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzLm9uRG9tQnVpbHQocmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9KSxcbiAgICBlbmdpbmUud2hlblJlYWR5LFxuXSk7XG4iLCJleHBvcnQgdHlwZSBWaWV3RXZlbnRBcmdzID0geyBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIFZpZXdFdmVudE9wdGlvbnMgPSBQaWNrPFxuICAgIEdGVmlld0V2ZW50UHJveHksXG4gICAgJ2NvbnRlbnRJRCcgfCAnZGVjb3JhdG9ySUQnIHwgJ2lzTW91c2VFdmVudCcgfCAnb24nIHwgJ2RpcmVjdGlvbicgfCAnYmJveCdcbj4gJiB7IGFyZ3M/OiBWaWV3RXZlbnRBcmdzIH07XG5cbmV4cG9ydCBjb25zdCB2aWV3RXZlbnRUeXBlcyA9IHtcbiAgICBjbG9zZVBvcG92ZXI6IDIsXG4gICAgbW92ZTogMTYsXG4gICAgY2xvc2U6IDMyLFxuICAgIG1pbmltaXplOiA2NCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFZpZXdFdmVudFR5cGUgPSBWYWx1ZU9mPHR5cGVvZiB2aWV3RXZlbnRUeXBlcz47XG5cbmNvbnN0IGNyZWF0ZVZpZXdFdmVudEFyZ3VtZW50cyA9IChkYXRhOiBWaWV3RXZlbnRBcmdzKTogR0ZWYWx1ZVByb3h5W10gPT4ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3QgX19UeXBlID0gJ0dGVmFsdWVQcm94eSc7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBib29sOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdHJpbmc6IHZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRWaWV3RXZlbnQgPSAodHlwZTogVmlld0V2ZW50VHlwZSwgb3B0aW9ucz86IFZpZXdFdmVudE9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBfX1R5cGUgPSAnR0ZWaWV3RXZlbnRQcm94eSc7XG4gICAgaWYgKG9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB7IGFyZ3MsIC4uLnJlc3RPcHRpb25zIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGlmIChhcmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XG4gICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgLi4ucmVzdE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzOiBjcmVhdGVWaWV3RXZlbnRBcmd1bWVudHMoYXJncyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XG4gICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgLi4ucmVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XG4gICAgICAgICAgICBfX1R5cGUsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZEV2ZW50ID0ge1xuICAgIGNsb3NlKHR5cGU/OiAncG9wb3ZlcicpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdwb3BvdmVyJykge1xuICAgICAgICAgICAgc2VuZFZpZXdFdmVudCh2aWV3RXZlbnRUeXBlcy5jbG9zZVBvcG92ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFZpZXdFdmVudCh2aWV3RXZlbnRUeXBlcy5jbG9zZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1pbmltaXplKCkge1xuICAgICAgICBzZW5kVmlld0V2ZW50KHZpZXdFdmVudFR5cGVzLm1pbmltaXplKTtcbiAgICB9LFxuICAgIG1vdmUoc3RhcnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc2VuZFZpZXdFdmVudCh2aWV3RXZlbnRUeXBlcy5tb3ZlLCB7XG4gICAgICAgICAgICBpc01vdXNlRXZlbnQ6IHRydWUsXG4gICAgICAgICAgICBvbjogc3RhcnQsXG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuIiwiLyoqIEVtcHR5IGZ1bmN0aW9uICovXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG5cbi8qKiBBbGlhcyBvZiBub29wICovXG5leHBvcnQgY29uc3QgZW1wdHlGdW5jdGlvbiA9IG5vb3A7XG5cbi8qKlxuICogVGhpcyBoZWxwZXIgZnVuY3Rpb24gZm9yIGNvcm5lciBjYXNlXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYGpzXG4gKiBPYmplY3Qua2V5cyhvYmopLm1hcChpZGVudGl0eSkgLy8gLT4gWy4uXVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTxBPihhOiBBKSB7XG4gICAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogQ2FuIGJlIHVzZWQgbGlrZSB0aGlzOlxuICogYGBgXG4gKiBjb21wdXRlZCgoKSA9PiBzb21lLnZhbHVlLCB7IGVxdWFsczogY29uc3RGYWxzZSB9KVxuICogYGBgXG4gKiBNZWFucyB0aGF0IHZhbHVlIHdpbGwgdHJpZ2dlciB1cGRhdGVzIGJ5IG11dGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RGYWxzZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ2FuIGJlIHVzZWQgbGlrZSB0aGlzOlxuICogYGBgXG4gKiBjb21wdXRlZCgoKSA9PiBzb21lLnZhbHVlLCB7IGVxdWFsczogY29uc3RUcnVlIH0pXG4gKiBgYGBcbiAqIE1lYW5zIHRoYXQgdmFsdWUgd2lsbCAqKm5ldmVyKiogdHJpZ2dlciB1cGRhdGVzIGJ5IG11dGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RUcnVlKCkge1xuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGZvciBsb2dnaW5nIGNhbGxiYWNrcyBpbnNpZGUgRGF0YSBMYXllciBNb2NrcyB3aXRob3V0IGxpbnRlciBpc3N1ZXNcbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqIGBgYGpzXG4gKiAgICAgY29udHJvbHM6ICgpID0+IHtcbiAqICAgICAgICAgcmV0dXJuIG1ha2VBY3Rpb25zKHtcbiAqICAgICAgICAgICAgIGdvVG9CcmFuY2hSZXNldDogKCkgPT4gbG9nKCdvbkdvVG9CcmFuY2hSZXNldCcpLFxuICogICAgICAgICB9KTtcbiAqICAgICB9LFxuICogYGBgXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5leHBvcnQgY29uc3QgbG9nID0gY29uc29sZS5sb2c7XG4iLCJ0eXBlIEdldEZyb21DYWxsU3RhY2sgPSAobGluZT86IG51bWJlcikgPT4ge1xyXG4gICAgY2FsbGVyPzogc3RyaW5nO1xyXG4gICAgc3RhY2s/OiBzdHJpbmc7XHJcbiAgICByZXNJZD86IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGcm9tQ2FsbFN0YWNrOiBHZXRGcm9tQ2FsbFN0YWNrID0gKGxpbmUgPSAxKSA9PiB7XHJcbiAgICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xyXG4gICAgbGV0IHJlc0lkID0gUi5pbnZhbGlkKCdyZXNJZCcpIGFzIG51bWJlcjtcclxuICAgIGxldCBjYWxsZXI7XHJcblxyXG4gICAgaWYgKHN0YWNrKSB7XHJcbiAgICAgICAgY2FsbGVyID0gc3RhY2tcclxuICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVtsaW5lXVxyXG4gICAgICAgICAgICAuc3BsaXQoJy5qcycpWzBdXHJcbiAgICAgICAgICAgIC5zcGxpdCgnLycpXHJcbiAgICAgICAgICAgIC5wb3AoKSB8fCAnJztcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5fX2ZlYXR1cmUgJiYgd2luZG93Ll9fZmVhdHVyZSAhPT0gY2FsbGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3ViVmlld3NbY2FsbGVyXSkge1xyXG4gICAgICAgICAgICAgICAgcmVzSWQgPSB3aW5kb3cuc3ViVmlld3NbY2FsbGVyXS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhbGxlcixcclxuICAgICAgICBzdGFjayxcclxuICAgICAgICByZXNJZCxcclxuICAgIH07XHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cclxuaW1wb3J0IHsgRHJhZnRQcm9wcyB9IGZyb20gJ2xpYi9kcmFmdGVkL3R5cGVzJztcclxuaW1wb3J0IHsgTWVkaWFTaXplLCB1c2VNZWRpYSB9IGZyb20gJ2xpYi9ob29rcy91c2VNZWRpYSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBTdGF0aWNLZXlUeXBlPEFkYXB0aXZlS2V5IGV4dGVuZHMgc3RyaW5nPiA9IEFkYXB0aXZlS2V5IGV4dGVuZHMgYCR7aW5mZXIgQmFzZX1fJHtBZGFwdGl2ZVN1ZmZpeFR5cGV9YFxyXG4gICAgPyBCYXNlXHJcbiAgICA6IG5ldmVyO1xyXG5cclxudHlwZSBBZGFwdGl2ZVN1ZmZpeFR5cGUgPSAneGwnIHwgJ2xnJyB8ICdtZCcgfCAnc20nIHwgJ3hzJztcclxudHlwZSBBZGFwdGl2ZUtleXNUeXBlPEtleXMgZXh0ZW5kcyBzdHJpbmc+ID0gYCR7S2V5c31fJHtBZGFwdGl2ZVN1ZmZpeFR5cGV9YDtcclxudHlwZSBBZGFwdGl2ZVByb3BzT25seTxQcm9wcyBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LCBBZGFwdGl2ZVByb3BOYW1lcyBleHRlbmRzIGtleW9mIFByb3BzPiA9IHtcclxuICAgIFtrZXkgaW4gQWRhcHRpdmVLZXlzVHlwZTxFeGNsdWRlPEFkYXB0aXZlUHJvcE5hbWVzLCBudW1iZXIgfCBzeW1ib2w+Pl0/OiBQcm9wc1tTdGF0aWNLZXlUeXBlPGtleT5dO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcyBleHRlbmRzIHt9LCBBZGFwdGl2ZUtleXMgZXh0ZW5kcyBrZXlvZiBTdGF0aWNQcm9wcz4gPSBTdGF0aWNQcm9wcyAmXHJcbiAgICBBZGFwdGl2ZVByb3BzT25seTxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlID0gWyd4bCcsICdsZycsICdtZCcsICdzbScsICd4cyddIGFzIGNvbnN0O1xyXG5cclxuY29uc3QgaXNBZGFwdGl2ZVN1ZmZpeCA9IChrZXk/OiBzdHJpbmcpOiBrZXkgaXMgQWRhcHRpdmVTdWZmaXhUeXBlID0+IHtcclxuICAgIHJldHVybiBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlLmluY2x1ZGVzKGtleSBhcyBBZGFwdGl2ZVN1ZmZpeFR5cGUpO1xyXG59O1xyXG5cclxuY29uc3QgaXNBZGFwdGl2ZVByb3BOYW1lID0gKGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4ga2V5LmluY2x1ZGVzKCdfJykgJiYgaXNBZGFwdGl2ZVN1ZmZpeChrZXkuc3BsaXQoJ18nKS5hdCgtMSkpO1xyXG59O1xyXG5cclxuY29uc3QgbWVkaWFTaXplU2VxdWVuY2UgPSBbXHJcbiAgICBNZWRpYVNpemUuRXh0cmFMYXJnZSxcclxuICAgIE1lZGlhU2l6ZS5MYXJnZSxcclxuICAgIE1lZGlhU2l6ZS5NZWRpdW0sXHJcbiAgICBNZWRpYVNpemUuU21hbGwsXHJcbiAgICBNZWRpYVNpemUuRXh0cmFTbWFsbCxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBoYXNEZWZpbmVkQWRhcHRpdmVQcm9wcyA9IChwcm9wTmFtZTogc3RyaW5nLCBwcm9wczogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0pID0+IHtcclxuICAgIHJldHVybiBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlLnNvbWUoKHN1ZmZpeCkgPT4gcHJvcHNbYCR7cHJvcE5hbWV9XyR7c3VmZml4fWBdICE9PSB1bmRlZmluZWQpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgYWxsIGFkYXB0aXZlIHByb3BlcnRpZXMgYnkgcGlja2luZyB0aGUgbGFyZ2VzdCBwcm9wZXJ0eSBmcm9tIGEgbGlzdCwgZm9yIGV4YW1wbGUgYG1feGwsIG1fbGcsIG1fbWQsIG1fc20sIG1feHNgIHRoYXQgaXMgbm90IGxhcmdlciB0aGFuIE1lZGlhU2l6ZSBhbmQgcmV0dXJuaW5nIGl0IGFzIGBtYCBpbiBhIG5ldyBvYmplY3Qgd2l0aCBvbmx5IHRoZSBub3JtYWxpemVkIHByb3BzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBBbiBvYmplY3Qgd2l0aCBhZGFwdGl2ZSBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge01lZGlhU2l6ZX0gbWVkaWFTaXplIC0gQSBtZWRpYSBzaXplIHRvIG5vcm1hbGl6ZSBhZGFwdGl2ZSBwcm9wcyBmb3IuXHJcbiAqIEByZXR1cm4ge09iamVjdH0gLSBBIG5ldyBvYmplY3Qgd2l0aCBub3JtYWxpemVkIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplQWRhcHRpdmVQcm9wcyA9IChwcm9wczogeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0sIG1lZGlhU2l6ZTogTWVkaWFTaXplKSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZSgob3V0cHV0LCBwcm9wTmFtZSkgPT4ge1xyXG4gICAgICAgIC8vIElmIGtleSBpcyBhbHJlYWR5IGluIG91dHB1dCwgaXQgbWVhbnMgaXQgaXMgYSBiYXNlIGZvciBhbiBhZGFwdGl2ZSBwcm9wIHdoaWNoIHdhcyBhbHJlYWR5IHByb2Nlc3NlZCAtPiBza2lwXHJcbiAgICAgICAgaWYgKHByb3BOYW1lIGluIG91dHB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBZGFwdGl2ZVByb3BOYW1lKHByb3BOYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlUHJvcE5hbWUgPSBwcm9wTmFtZS5zcGxpdCgnXycpLnNsaWNlKDAsIC0xKS5qb2luKCdfJyk7XHJcbiAgICAgICAgICAgIC8vIGlmIGJhc2UgcHJvcCBpcyBhbHJlYWR5IGluIG91dHB1dCwgaXQgbXVzdCBoYXZlIGJlZW4gYWxyZWFkeSBwcm9jZXNzZWQgLT4gc2tpcFxyXG4gICAgICAgICAgICBpZiAoYmFzZVByb3BOYW1lIGluIG91dHB1dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtZWRpYVNpemVJbmRleCA9IG1lZGlhU2l6ZVNlcXVlbmNlLmluZGV4T2YobWVkaWFTaXplKTtcclxuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBhZGFwdGl2ZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGxhcmdlciB0aGFuIG1lZGlhU2l6ZVxyXG4gICAgICAgICAgICBjb25zdCByZWxldmFudEFkYXB0aXZlU3VmZml4ZXMgPSBtZWRpYVNpemVJbmRleCAhPT0gLTEgPyBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlLnNsaWNlKG1lZGlhU2l6ZUluZGV4KSA6IFtdO1xyXG4gICAgICAgICAgICBjb25zdCByZWxldmFudFByb3BlcnR5TmFtZXMgPSByZWxldmFudEFkYXB0aXZlU3VmZml4ZXMubWFwKChzdWZmaXgpID0+IGJhc2VQcm9wTmFtZSArICdfJyArIHN1ZmZpeCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkUHJvcE5hbWUgPSByZWxldmFudFByb3BlcnR5TmFtZXMuZmluZCgocHJvcE5hbWUpID0+IHByb3BzW3Byb3BOYW1lXSAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRQcm9wVmFsdWUgPSByZXNvbHZlZFByb3BOYW1lID8gcHJvcHNbcmVzb2x2ZWRQcm9wTmFtZV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIC8vIGFzc2lnbiBiYXNlUHJvcCB3aXRoIHZhbHVlIG9mIHRoZSBmaXJzdCByZWxldmFudCBhZGFwdGl2ZSBwcm9wIG9yIGJhc2UgcHJvcFxyXG4gICAgICAgICAgICBvdXRwdXRbYmFzZVByb3BOYW1lXSA9IHJlc29sdmVkUHJvcFZhbHVlICE9PSB1bmRlZmluZWQgPyByZXNvbHZlZFByb3BWYWx1ZSA6IHByb3BzW2Jhc2VQcm9wTmFtZV07XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xyXG4gICAgICAgIC8vIHNraXAgcHJvcHMgdGhhdCBhcmUgdW5kZWZpbmVkIG9yIGhhdmUgc29tZSBhZGFwdGl2ZSBwcm9wZXJ0aWVzIHNldFxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGhhc0RlZmluZWRBZGFwdGl2ZVByb3BzKHByb3BOYW1lLCBwcm9wcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0cHV0W3Byb3BOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LCB7fSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGNvbXBvbmVudCB0aGF0IG5vcm1hbGl6ZXMgYWRhcHRpdmUgcHJvcGVydGllcyBiYXNlZCBvbiB0aGUgY3VycmVudCBtZWRpYSBzaXplIGFuZCBwYXNzZXMgaXQgdG8gdGhlIENvbXBvbmVudC5cclxuICpcclxuICogQHBhcmFtIHtSZWFjdC5Db21wb25lbnRUeXBlPFN0YXRpY1Byb3BzPn0gQ29tcG9uZW50IC0gUmVhY3QgY29tcG9uZW50IHRoYXQgaGFuZGxlcyBzdGF0aWMgcHJvcHMuXHJcbiAqIEBwYXJhbSB7dHlwZW9mIG5vcm1hbGl6ZUFkYXB0aXZlUHJvcHN9IG5vcm1hbGl6ZVByb3BzIC0gb3B0aW9uYWwgY3VzdG9tIGZ1bmN0aW9uIHRoYXQgbm9ybWFsaXplcyBhZGFwdGl2ZSBwcm9wcywgdXNlZnVsIG1haW5seSBmb3IgdGVzdGluZy5cclxuICogQHJldHVybiB7SlNYLkVsZW1lbnR9IHRoZSBCb3ggY29tcG9uZW50IHdpdGggbm9ybWFsaXplZCBhZGFwdGl2ZSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG5jb25zdCBnZXRBZGFwdGl2ZUNvbXBvbmVudCA9XHJcbiAgICA8U3RhdGljUHJvcHMgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSwgQWRhcHRpdmVLZXlzIGV4dGVuZHMga2V5b2YgU3RhdGljUHJvcHM+KFxyXG4gICAgICAgIENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxTdGF0aWNQcm9wcz4sXHJcbiAgICAgICAgbm9ybWFsaXplUHJvcHM6IHR5cGVvZiBub3JtYWxpemVBZGFwdGl2ZVByb3BzID0gbm9ybWFsaXplQWRhcHRpdmVQcm9wcyxcclxuICAgICkgPT5cclxuICAgIChwcm9wczogQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbWVkaWFTaXplIH0gPSB1c2VNZWRpYSgpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQcm9wcyA9IHVzZU1lbW8oKCkgPT4gbm9ybWFsaXplUHJvcHMocHJvcHMsIG1lZGlhU2l6ZSksIFtwcm9wcywgbWVkaWFTaXplXSk7XHJcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLihub3JtYWxpemVkUHJvcHMgYXMgU3RhdGljUHJvcHMpfSAvPjtcclxuICAgIH07XHJcblxyXG4vKipcclxuICogUmV0dXJucyBlaXRoZXIgYW4gQWRhcHRpdmVDb21wb25lbnQgb3IgYSBDb21wb25lbnQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgYWRhcHRpdmUgcHJvcHMgYXJlIHByZXNlbnQgaW4gdGhlIHByb3BzIG9iamVjdC5cclxuICogR2VuZXJpYyB0eXBlcyBTdGF0aWNQcm9wcyAoZS5nLiBDb21wUHJvcHMpIGFuZCBBZGFwdGl2ZUtleXMgKGUuZy4gQ29tcEFkYXB0aXZlUHJvcE5hbWVzKSBhcmUgb3B0aW9uYWwuIEFkYXB0aXZlIGxvZ2ljIHdvdWxkIHdvcmtcclxuICogb24gYW55IHByb3BzIGluIHJ1bnRpbWUsIGJ1dCBhZGRpbmcgdGhlIHR5cGVzIHdpbGwgZmlsdGVyIHdoaWNoIGtleXMgYXJlIHZhbGlkYXRlZCBieSBUeXBlc2NyaXB0IHNvIHRoYXQgYWRhcHRpdmUgcHJvcHNcclxuICogdGhhdCBkbyBub3QgbWFrZSBzZW5zZSBhcmUgbm90IHN1Z2dlc3RlZCBieSBpbnRlbGxpc2Vuc2UuXHJcbiAqIEB1c2FnZSAoaW4gcm9vdCBzY29wZSkgY29uc3QgQWRhcHRpdmVDb21wID0gZ2V0QWRhcHRpdmVDb250cm9sbGVyPENvbXBQcm9wcywgQ29tcEFkYXB0aXZlUHJvcE5hbWVzPihDb21wKTtcclxuICogIGV4cG9ydCB0eXBlIENvbXBBZGFwdGl2ZVByb3BOYW1lcyA9ICdzaXplJyB8ICdjbGFzc05hbWUnO1xyXG4gKiAgZXhwb3J0IHR5cGUgQ29tcFByb3BzID0gQ29tcFN0YXRpY1Byb3BzICYgQWRhcHRpdmVQcm9wczxDb21wU3RhdGljUHJvcHMsIENvbXBBZGFwdGl2ZVByb3BOYW1lc1R5cGU+O1xyXG4gKiAgZXhwb3J0IGRlZmF1bHQgQWRhcHRpdmVDb21wO1xyXG4gKlxyXG4gKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudFR5cGU8U3RhdGljUHJvcHM+fSBDb21wb25lbnQgLSBSZWFjdCBjb21wb25lbnQgdGhhdCBoYW5kbGVzIHN0YXRpYyBwcm9wcy5cclxuICogQHBhcmFtIHt0eXBlb2Ygbm9ybWFsaXplQWRhcHRpdmVQcm9wc30gbm9ybWFsaXplUHJvcHMgLSBvcHRpb25hbCBjdXN0b20gZnVuY3Rpb24gdGhhdCBub3JtYWxpemVzIGFkYXB0aXZlIHByb3BzLCB1c2VmdWwgbWFpbmx5IGZvciB0ZXN0aW5nLlxyXG4gKiBAcmV0dXJuIHtKU1guRWxlbWVudH0gRWl0aGVyIGFuIEFkYXB0aXZlQm94IG9yIGEgQm94IGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXIgPSA8XHJcbiAgICBTdGF0aWNQcm9wcyBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LFxyXG4gICAgQWRhcHRpdmVLZXlzIGV4dGVuZHMga2V5b2YgU3RhdGljUHJvcHMsXHJcbj4oXHJcbiAgICBDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8U3RhdGljUHJvcHM+LFxyXG4gICAgbm9ybWFsaXplUHJvcHM6IHR5cGVvZiBub3JtYWxpemVBZGFwdGl2ZVByb3BzID0gbm9ybWFsaXplQWRhcHRpdmVQcm9wcyxcclxuKSA9PiB7XHJcbiAgICBjb25zdCBBZGFwdGl2ZUNvbXBvbmVudCA9IGdldEFkYXB0aXZlQ29tcG9uZW50KENvbXBvbmVudCwgbm9ybWFsaXplUHJvcHMpIGFzIFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgICAgICAgQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPlxyXG4gICAgPjtcclxuICAgIHJldHVybiBSZWFjdC5tZW1vKChwcm9wczogQWRhcHRpdmVQcm9wczxTdGF0aWNQcm9wcywgQWRhcHRpdmVLZXlzPikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc0FkYXB0aXZlUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcykuc29tZShcclxuICAgICAgICAgICAgKGtleSkgPT5cclxuICAgICAgICAgICAgICAgIGlzQWRhcHRpdmVQcm9wTmFtZShrZXkpICYmIHByb3BzW2tleSBhcyBrZXlvZiBBZGFwdGl2ZVByb3BzPFN0YXRpY1Byb3BzLCBBZGFwdGl2ZUtleXM+XSAhPT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGhhc0FkYXB0aXZlUHJvcHMgPyA8QWRhcHRpdmVDb21wb25lbnQgey4uLnByb3BzfSAvPiA6IDxDb21wb25lbnQgey4uLihwcm9wcyBhcyBTdGF0aWNQcm9wcyl9IC8+O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRBZGFwdGl2ZUNvbnRyb2xsZXI7XHJcblxyXG50eXBlIERyYWZ0UHJvcE1hcCA9IHsgW2tleTogc3RyaW5nXTogRHJhZnRQcm9wcyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERyYWZ0ZWRBZGFwdGl2ZVByb3BzID0gKHByb3BOYW1lOiBzdHJpbmcsIGRyYWZ0UHJvcHM6IERyYWZ0UHJvcHMpID0+XHJcbiAgICBhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlLnJlZHVjZSgocHJvcHMsIHN1ZmZpeCkgPT4ge1xyXG4gICAgICAgIHByb3BzW3Byb3BOYW1lICsgJ18nICsgc3VmZml4XSA9IGRyYWZ0UHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgfSwge30gYXMgRHJhZnRQcm9wTWFwKTtcclxuIiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlQ2FsbE9uY2UgPSAoZjogRnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGNhbGxlZFJlZiA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gICAgaWYgKCFjYWxsZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGYoKTtcclxuICAgICAgICBjYWxsZWRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDYWxsT25jZTtcclxuIiwiaW1wb3J0IHsgZW52IH0gZnJvbSAnbGliL2Vudic7XHJcbmltcG9ydCB7IEtFWV9DT0RFUyB9IGZyb20gJ2xpYi9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IHNlbmRDbG9zZUV2ZW50IH0gZnJvbSAnbGliL3ZpZXctZW52LWhlbHBlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGRlZmF1bHRDYWxsYmFjayA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcihldmVudC50eXBlICsgJzogdXNlS2V5ZG93bkxpc3RlbmVyIGhvb2sgOjogQ2FsbGJhY2sgaXMgbm90IGRlZmluZWQnKTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIExpc3RlbmVyID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUtleWRvd25MaXN0ZW5lcihcclxuICAgIGtleTogbnVtYmVyID0gS0VZX0NPREVTLk5PTkUsXHJcbiAgICBsaXN0ZW5lcjogTGlzdGVuZXIgPSBkZWZhdWx0Q2FsbGJhY2ssXHJcbiAgICBwcmV2ZW50UHJvcGFnYXRpb24gPSBmYWxzZSxcclxuKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChrZXkgPT09IEtFWV9DT0RFUy5OT05FKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnYudmlldy5pc0V2ZW50SGFuZGxlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW52LnZpZXcuc2V0RXZlbnRIYW5kbGVkKCk7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihldmVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmVudFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MsIHByZXZlbnRQcm9wYWdhdGlvbik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcywgcHJldmVudFByb3BhZ2F0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2xpc3RlbmVyLCBrZXksIHByZXZlbnRQcm9wYWdhdGlvbl0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xvc2VPbktleVByZXNzKGtleTogS0VZX0NPREVTID0gS0VZX0NPREVTLkVTQ0FQRSkge1xyXG4gICAgdXNlS2V5ZG93bkxpc3RlbmVyKGtleSwgc2VuZENsb3NlRXZlbnQsIHRydWUpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDYWxsYmFja09uRXNjKGNhbGxiYWNrOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQpIHtcclxuICAgIHVzZUtleWRvd25MaXN0ZW5lcihLRVlfQ09ERVMuRVNDQVBFLCBjYWxsYmFjayk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNsb3NlT25Fc2MoKSB7XHJcbiAgICB1c2VDbG9zZU9uS2V5UHJlc3MoS0VZX0NPREVTLkVTQ0FQRSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbmNvbnN0IHVzZUxheW91dFJlYWR5ID0gKGNhbGxiYWNrOiAoKSA9PiB2b2lkLCBkZXBzPzogYW55W10pID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRpbWVvdXRJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgdGltZW91dElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgdGltZW91dElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGltZW91dElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgfSwgZGVwcyk7XHJcbn07XHJcblxyXG5leHBvcnQgeyB1c2VMYXlvdXRSZWFkeSB9O1xyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNZWRpYUNvbnRleHQsIE1lZGlhQ29udGV4dFR5cGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lZGlhUXVlcnknO1xuaW1wb3J0IHsgQlJFQUtQT0lOVFMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01lZGlhUXVlcnkvc3RhdGljJztcblxuZXhwb3J0IGVudW0gTWVkaWFTaXplIHtcbiAgICBFeHRyYVNtYWxsID0gQlJFQUtQT0lOVFMuZXh0cmFTbWFsbC53aWR0aCxcbiAgICBTbWFsbCA9IEJSRUFLUE9JTlRTLnNtYWxsLndpZHRoLFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS53aWR0aCxcbiAgICBMYXJnZSA9IEJSRUFLUE9JTlRTLmxhcmdlLndpZHRoLFxuICAgIEV4dHJhTGFyZ2UgPSBCUkVBS1BPSU5UUy5leHRyYUxhcmdlLndpZHRoLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYVdpZHRoIHtcbiAgICBFeHRyYVNtYWxsID0gQlJFQUtQT0lOVFMuZXh0cmFTbWFsbC53aWR0aCxcbiAgICBTbWFsbCA9IEJSRUFLUE9JTlRTLnNtYWxsLndpZHRoLFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS53aWR0aCxcbiAgICBMYXJnZSA9IEJSRUFLUE9JTlRTLmxhcmdlLndpZHRoLFxuICAgIEV4dHJhTGFyZ2UgPSBCUkVBS1BPSU5UUy5leHRyYUxhcmdlLndpZHRoLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYUhlaWdodCB7XG4gICAgRXh0cmFTbWFsbCA9IEJSRUFLUE9JTlRTLmV4dHJhU21hbGwuaGVpZ2h0LFxuICAgIFNtYWxsID0gQlJFQUtQT0lOVFMuc21hbGwuaGVpZ2h0LFxuICAgIE1lZGl1bSA9IEJSRUFLUE9JTlRTLm1lZGl1bS5oZWlnaHQsXG4gICAgTGFyZ2UgPSBCUkVBS1BPSU5UUy5sYXJnZS5oZWlnaHQsXG4gICAgRXh0cmFMYXJnZSA9IEJSRUFLUE9JTlRTLmV4dHJhTGFyZ2UuaGVpZ2h0LFxufVxuXG5jb25zdCBjb252ZXJ0VG9NZWRpYVNpemUgPSAobWVkaWFDb250ZXh0OiBNZWRpYUNvbnRleHRUeXBlKSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhTGFyZ2U6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFTaXplLkV4dHJhTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmxhcmdlOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5NZWRpdW07XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LnNtYWxsOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5TbWFsbDtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFTbWFsbDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVNpemUuRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhU2l6ZS5FeHRyYVNtYWxsO1xuICAgIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRUb01lZGlhV2lkdGggPSAobWVkaWFDb250ZXh0OiBNZWRpYUNvbnRleHRUeXBlKSA9PiB7XG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhTGFyZ2VXaWR0aDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYVdpZHRoLkV4dHJhTGFyZ2U7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmxhcmdlV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5NZWRpdW07XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LnNtYWxsV2lkdGg6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFXaWR0aC5TbWFsbDtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFTbWFsbFdpZHRoOlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhV2lkdGguRXh0cmFTbWFsbDtcbiAgICB9XG59O1xuXG5jb25zdCBjb252ZXJ0VG9NZWRpYUhlaWdodCA9IChtZWRpYUNvbnRleHQ6IE1lZGlhQ29udGV4dFR5cGUpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuZXh0cmFMYXJnZUhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5FeHRyYUxhcmdlO1xuICAgICAgICBjYXNlIG1lZGlhQ29udGV4dC5sYXJnZUhlaWdodDpcbiAgICAgICAgICAgIHJldHVybiBNZWRpYUhlaWdodC5MYXJnZTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQubWVkaXVtSGVpZ2h0OlxuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0Lk1lZGl1bTtcbiAgICAgICAgY2FzZSBtZWRpYUNvbnRleHQuc21hbGxIZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuU21hbGw7XG4gICAgICAgIGNhc2UgbWVkaWFDb250ZXh0LmV4dHJhU21hbGxIZWlnaHQ6XG4gICAgICAgICAgICByZXR1cm4gTWVkaWFIZWlnaHQuRXh0cmFTbWFsbDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VucmVhY2hhYmxlIG1lZGlhIGNvbnRleHQgcmVzb2x1dGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIE1lZGlhSGVpZ2h0LkV4dHJhU21hbGw7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVzZU1lZGlhID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lZGlhQ29udGV4dCA9IHVzZUNvbnRleHQoTWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lZGlhQ29udGV4dDtcbiAgICBjb25zdCBtZWRpYVNpemUgPSBjb252ZXJ0VG9NZWRpYVNpemUobWVkaWFDb250ZXh0KTtcbiAgICBjb25zdCBtZWRpYVdpZHRoID0gY29udmVydFRvTWVkaWFXaWR0aChtZWRpYUNvbnRleHQpO1xuICAgIGNvbnN0IG1lZGlhSGVpZ2h0ID0gY29udmVydFRvTWVkaWFIZWlnaHQobWVkaWFDb250ZXh0KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1lZGlhU2l6ZSxcbiAgICAgICAgbWVkaWFXaWR0aCxcbiAgICAgICAgbWVkaWFIZWlnaHQsXG4gICAgICAgIHJlbVNjcmVlbldpZHRoOiB3aWR0aCxcbiAgICAgICAgcmVtU2NyZWVuSGVpZ2h0OiBoZWlnaHQsXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vZW52JztcblxuZXhwb3J0IGNvbnN0IHVzZVNjYWxlU3RhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZShlbnYudmlldy5nZXRTY2FsZSgpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldFNjYWxlKGVudi52aWV3LmdldFNjYWxlKCkpO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHNjYWxlO1xufTtcbiIsImV4cG9ydCBlbnVtIEtFWV9DT0RFUyB7XHJcbiAgICBOT05FID0gLTEsXG4gICAgQUxUID0gMTY1LFxuICAgIEVOVEVSID0gMTMsXHJcbiAgICBFU0NBUEUgPSAyNyxcclxuICAgIFNQQUNFID0gMzIsXHJcbiAgICBFTkQgPSAzNSxcclxuICAgIEhPTUUgPSAzNixcclxuICAgIEFSUk9XX0xFRlQgPSAzNyxcclxuICAgIEFSUk9XX1VQID0gMzgsXHJcbiAgICBBUlJPV19SSUdIVCA9IDM5LFxyXG4gICAgQVJST1dfRE9XTiA9IDQwLFxyXG4gICAgTlVNX1BMVVMgPSAxMDcsXHJcbiAgICBOVU1fTUlOVVMgPSAxMDksXHJcbiAgICBQTFVTID0gMTg3LFxyXG4gICAgTUlOVVMgPSAxODksXHJcbiAgICBQQUdFX1VQID0gMzMsXHJcbiAgICBQQUdFX0RPV04gPSAzNCxcclxuICAgIEJBQ0tTUEFDRSA9IDgsXHJcbiAgICBERUxFVEUgPSA0NixcclxuICAgIFRBQiA9IDksXHJcbiAgICBLRVlfTiA9IDc4LFxuICAgIEtFWV8xID0gNDksXG4gICAgS0VZXzIgPSA1MCxcbiAgICBLRVlfMyA9IDUxLFxuICAgIEtFWV80ID0gNTIsXG4gICAgS0VZXzUgPSA1MyxcbiAgICBLRVlfNiA9IDU0LFxuICAgIEtFWV83ID0gNTUsXG4gICAgS0VZXzggPSA1NixcbiAgICBLRVlfOSA9IDU3LFxuICAgIENBUFNfTE9DSyA9IDIwLFxuICAgIElOU0VSVCA9IDQ1LFxuICAgIEYxID0gMTEyLFxuICAgIEYyID0gMTEzLFxuICAgIEYzID0gMTE0LFxuICAgIEY0ID0gMTE1LFxuICAgIEY1ID0gMTE2LFxuICAgIEY2ID0gMTE3LFxuICAgIEY3ID0gMTE4LFxuICAgIEY4ID0gMTE5LFxuICAgIEY5ID0gMTIwLFxuICAgIEYxMCA9IDEyMSxcbiAgICBGMTEgPSAxMjIsXG4gICAgRjEyID0gMTIzLFxuICAgIFNFTEVDVCA9IDkzLFxuICAgIE5VTVBBRF8wID0gOTYsXG4gICAgTlVNUEFEXzEgPSA5NyxcbiAgICBOVU1QQURfMiA9IDk4LFxuICAgIE5VTVBBRF8zID0gOTksXG4gICAgTlVNUEFEXzQgPSAxMDAsXG4gICAgTlVNUEFEXzUgPSAxMDEsXG4gICAgTlVNUEFEXzYgPSAxMDIsXG4gICAgTlVNUEFEXzcgPSAxMDMsXG4gICAgTlVNUEFEXzggPSAxMDQsXG4gICAgTlVNUEFEXzkgPSAxMDUsXG4gICAgTlVNX0RFQ0lNQUwgPSAxMTAsXG4gICAgU1RBUiA9IDEwNixcbiAgICBOVU1fU0xBU0ggPSAxMTEsXG4gICAgRk9SV0FSRF9TTEFTSCA9IDE5MSxcbiAgICBDT01NQSA9IDE4OCxcbiAgICBEQVNIID0gMTg5LFxuICAgIFBFUklPRCA9IDE5MCxcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtFWV9NT0RJRklFUlMge1xyXG4gICAgQUxUID0gJ0FsdCcsXHJcbiAgICBBTFRfR1JBUEggPSAnQWx0R3JhcGgnLFxyXG4gICAgQ0FQU19MT0NLID0gJ0NhcHNMb2NrJyxcclxuICAgIENPTlRST0wgPSAnQ29udHJvbCcsXHJcbiAgICBGTiA9ICdGbicsXHJcbiAgICBGTl9MT0NLID0gJ0ZuTG9jaycsXHJcbiAgICBNRVRBID0gJ01ldGEnLFxyXG4gICAgTlVNX0xPQ0sgPSAnTnVtTG9jaycsXHJcbiAgICBTQ1JPTExfTE9DSyA9ICdTY3JvbGxMb2NrJyxcclxuICAgIFNISUZUID0gJ1NoaWZ0JyxcclxuICAgIFNZTUJPTCA9ICdTeW1ib2wnLFxyXG4gICAgU1lNQk9MX0xPQ0sgPSAnU3ltYm9sTG9jaycsXHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5cbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdsaWIvbnVsbGFibGUnO1xuXG5leHBvcnQgdHlwZSBMaWtlQXJyYXk8VD4gPSBDb2hlcmVudEFycmF5UHJveHk8VD4gfCBUW107XG5leHBvcnQgdHlwZSBBcnJheUl0ZW08VD4gPSBUIHwgQ29oZXJlbnRBcnJheUl0ZW08VD47XG5leHBvcnQgdHlwZSBDYXN0QWxsQXJyYXlzPFQ+ID0gVCBleHRlbmRzIENvaGVyZW50QXJyYXlQcm94eTxpbmZlciBDb2hJdGVtPlxuICAgID8gTGlrZUFycmF5PENhc3RBbGxBcnJheXM8Q29oSXRlbT4+XG4gICAgOiBUIGV4dGVuZHMgRnVuY3Rpb25cbiAgICA/IFRcbiAgICA6IFQgZXh0ZW5kcyBBcnJheTxpbmZlciBBcnJJdGVtPlxuICAgID8gTGlrZUFycmF5PENhc3RBbGxBcnJheXM8QXJySXRlbT4+XG4gICAgOiBUIGV4dGVuZHMge31cbiAgICA/IHsgW1AgaW4ga2V5b2YgVF06IENhc3RBbGxBcnJheXM8VFtQXT4gfVxuICAgIDogVDtcbi8qKlxuICogVHJhbnNmb3JtcyBhbGwgKipgQ29oZXJlbnRBcnJheVByb3h5YCoqIHR5cGVzIHRvIHN0YW5kYXJkICoqYEFycmF5YCoqIHR5cGVzLlxuICpcbiAqIFRoaXMgdHJhbnNmb3JtYXRpb24gaXMgdXNlZnVsIHdoZW4geW91IG5lZWQgdG8gcGFzcyBhIHZhbHVlIG9idGFpbmVkIGZyb20gYSBtb2RlbFxuICogYW5kIHRyYW5zZm9ybWVkIHdpdGggKipgbGlrZUFycmF5Lm1hcGAqKiBhcyBwcm9wcyBpbiBjb21wb25lbnQgKG5lZWQgdG8gdXNlIHByb3A6ICoqYENvaGVyZW50QXJyYXlzUHJveHlUb0FycmF5czxUeXBlPmAqKikuXG4gKlxuICogIyMjIEhvdyBpdCB3b3JrczpcbiAqIC0gSWYgdGhlIHR5cGUgaXMgYENvaGVyZW50QXJyYXlQcm94eTxVPmAsIGl0IHJlY3Vyc2l2ZWx5IHRyYW5zZm9ybXMgaXQgaW50byBgQXJyYXk8VT5gLlxuICogLSBGdW5jdGlvbnMgKGBGdW5jdGlvbmApIHJlbWFpbiB1bmNoYW5nZWQuXG4gKiAtIEZvciBvYmplY3RzLCBpdCByZWN1cnNpdmVseSBhcHBsaWVzIHRoZSB0cmFuc2Zvcm1hdGlvbiB0byBhbGwgcHJvcGVydGllcy5cbiAqIC0gRm9yIGFsbCBvdGhlciB0eXBlcywgdGhlIG9yaWdpbmFsIHR5cGUgaXMgcHJlc2VydmVkLlxuICpcbiAqIEB0ZW1wbGF0ZSBUIFRoZSB0eXBlIHRvIGJlIHRyYW5zZm9ybWVkLlxuICogQHJldHVybnMgVGhlIHRyYW5zZm9ybWVkIHR5cGUgd2hlcmUgYWxsIGBDb2hlcmVudEFycmF5UHJveHlgIHR5cGVzIGFyZSByZXBsYWNlZCB3aXRoIGBBcnJheWAuXG4gKi9cbmV4cG9ydCB0eXBlIENvaGVyZW50QXJyYXlzUHJveHlUb0FycmF5czxUPiA9IFQgZXh0ZW5kcyBDb2hlcmVudEFycmF5UHJveHk8aW5mZXIgVT5cbiAgICA/IEFycmF5PENvaGVyZW50QXJyYXlzUHJveHlUb0FycmF5czxVPj5cbiAgICA6IFQgZXh0ZW5kcyBGdW5jdGlvblxuICAgID8gVFxuICAgIDogVCBleHRlbmRzIG9iamVjdFxuICAgID8geyBbSyBpbiBrZXlvZiBUXTogQ29oZXJlbnRBcnJheXNQcm94eVRvQXJyYXlzPFRbS10+IH1cbiAgICA6IFQ7XG5cbi8qKiBSZWFkIHZhbHVlIGZyb20gTGlrZUFycmF5IGJ5IGluZGV4ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0PFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGluZGV4OiBudW1iZXIpOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoaW5kZXggPj0gYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXlbaW5kZXhdO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheVtpbmRleF0/LnZhbHVlO1xufVxuXG5leHBvcnQgY29uc3QgdW5zYWZlR2V0ID0gZ2V0IGFzIDxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBpbmRleDogbnVtYmVyKSA9PiBUO1xuXG4vKiogUmV0dXJucyBpdGVtLnZhbHVlIGlmIGl0J3MgY29oZXJlbnQgYXJyYXkgaXRlbSBvciBqdXN0IGl0ZW0gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bndyYXBJdGVtPFQ+KGl0ZW06IEFycmF5SXRlbTxUPik6IFQgfCB1bmRlZmluZWQge1xuICAgIGlmIChpdGVtICYmICd2YWx1ZScgaW4gaXRlbSAmJiAoaXRlbSBhcyBhbnkpLmNvbnN0cnVjdG9yPy5uYW1lLmluY2x1ZGVzKCdBcnJheUl0ZW0nKSkge1xuICAgICAgICByZXR1cm4gaXRlbT8udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW0gYXMgVDtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5IGJ1dCBlbGVtZW50IHdpbGwgYmUgaXRlbS52YWx1ZSBvciBpdGVtXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUubWFwfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwPFQsIFU+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gVSk6IFVbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5tYXAoZm4pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkubWFwKChlbGVtZW50LCBpbmRleCwgYXJyKSA9PiBmbihlbGVtZW50Py52YWx1ZSwgaW5kZXgsIGFycikpO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2QgJ2V2ZXJ5JyBvZiBhcnJheSwgYnV0IGVsZW1lbnQgd2lsbCBiZSBpdGVtLnZhbHVlIG9yIGl0ZW1cbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5ldmVyeX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5PFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuZXZlcnkoZm4pO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHVuc2FmZUdldChhcnJheSwgaW5kZXgpO1xuICAgICAgICBpZiAoIWZuKGVsZW1lbnQsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2QgJ3NvbWUnIG9mIGFycmF5LCBidXQgZWxlbWVudCB3aWxsIGJlIGl0ZW0udmFsdWUgb3IgaXRlbVxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLnNvbWV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb21lPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuc29tZShmbik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChmbihlbGVtZW50LCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5IGJ1dCBlbGVtZW50IHdpbGwgYmUgaXRlbS52YWx1ZSBvciBpdGVtXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUuZmlsdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyPFQ+KFxuICAgIGFycmF5OiBMaWtlQXJyYXk8VD4sXG4gICAgcHJlZGljYXRlOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbixcbik6IFRbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIocHJlZGljYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBbXSBhcyBUW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0/LnZhbHVlO1xuICAgICAgICBpZiAocHJlZGljYXRlKGVsZW1lbnQsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5XG4gKlxuICogKipCdXQgd2lsbCB0aHJvdyBlcnJvciBpZiB5b3UgdHJ5IHRvIGNoYW5nZSB7QGxpbmsgQ29oZXJlbnRBcnJheVByb3h5PFQ+fSoqXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUucHVzaH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2g8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaXRlbTogVCk6IFRbXSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBNdXRhdGUgQ29oZXJlbnRBcnJheVByb3h5IGlzIG5vdCBhdmFpbGFibGVgKTtcbn1cblxuLyoqXG4gKiBKdXN0IHNldCBpdGVtIGJ5IGluZGV4XG4gKlxuICogKipCdXQgd2lsbCB0aHJvdyBlcnJvciBpZiB5b3UgdHJ5IHRvIGNoYW5nZSB7QGxpbmsgQ29oZXJlbnRBcnJheVByb3h5PFQ+fSoqXG4gKiBgYGB0c1xuICogbGlrZUFycmF5KGFycmF5LCAwLCBpdGVtKVxuICogLy8gZXF1YWxzIHRvOlxuICogYXJyYXlbMF0gPSBpdGVtXG4gKiBgYGBcbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5wdXNofVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0PFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGluZGV4OiBudW1iZXIsIGl0ZW06IFQpOiBUW10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICBhcnJheVtpbmRleF0gPSBpdGVtO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgTXV0YXRlIENvaGVyZW50QXJyYXlQcm94eSBpcyBub3QgYXZhaWxhYmxlYCk7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSBkZWZhdWx0IG1ldGhvZCBvZiBhcnJheS4gQnV0IGhhcyBzZWNvbmQgcGFyYW1ldGVyIGZvciByZW1vdmUgaW5kZXggYW5kIGdldCB0aGUgdmFsdWUuXG4gKlxuICogKipXaWxsIHRocm93IGVycm9yIGlmIHlvdSB0cnkgdG8gY2hhbmdlIHtAbGluayBDb2hlcmVudEFycmF5UHJveHk8VD59KipcbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5wb3B9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3A8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaW5kZXggPSBhcnJheS5sZW5ndGggLSAxKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYE11dGF0ZSBDb2hlcmVudEFycmF5UHJveHkgaXMgbm90IGF2YWlsYWJsZWApO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgaW5jbHVkZXMgYnV0IGZpbmQgYnkgZnVuY3Rpb25cbiAqIGBgYHRzXG4gKiBjb25zdCBhcnJheSA9IFt7IG5hbWU6ICdmb28nIH0sIHsgbmFtZTogJ2JhcicgfSwgeyBuYW1lOiAnYmF6JyB9XVxuICogbGlrZUFycmF5LmNvbnRhaW5zKGFycmF5LCAoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdmb28nKSkgLy8gdHJ1ZVxuICogbGlrZUFycmF5LmNvbnRhaW5zKGFycmF5LCAoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdmb28tYmFyLWJheicpKSAvLyBmYWxzZVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluczxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBpdGVtOiBULCBwcmVkaWNhdGU/OiAoaXRlbTogVCkgPT4gYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHVuc2FmZUdldChhcnJheSwgaW5kZXgpO1xuICAgICAgICBpZiAocHJlZGljYXRlICYmIHByZWRpY2F0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogUmV0dXJucyBsYXN0IGluZGV4IG9mIGFycmF5IG9yIC0xIGlmIGl0J3MgZW1wdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0SW5kZXg8VD4oYXJyYXk6IExpa2VBcnJheTxUPik6IG51bWJlciB7XG4gICAgcmV0dXJuIGFycmF5Lmxlbmd0aCAtIDE7XG59XG5cbi8qKiBXb3JrcyBsaWtlIHtAbGluayBsYXN0SW5kZXh9IGJ1dCByZXR1cm5zIDAgaWYgYXJyYXkgaXMgZW1wdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0SW5kZXhaZXJvPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4pOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBhcnJheS5sZW5ndGggLSAxKTtcbn1cblxuLyoqIFJldHVybnMgbGFzdCBlbGVtZW50IG9mIGFycmF5IG9yIGB1bmRlZmluZWRgIGl0J3MgZW1wdHkgKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXN0RWxlbWVudDxUPihhcnJheTogTGlrZUFycmF5PFQ+KTogVCB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0KGFycmF5LCBhcnJheS5sZW5ndGggLSAxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGl0ZXJhdG9yIGZyb20gcmFuZ2UuIFN0YXJ0IGluZGV4IGNhbm5vdCBiZSBsZXNzIHRoYW4gYDBgIChpdCB3aWxsIGJlIGNsYW1wZWQpLlxuICogQWxzbyBlbmQgaW5kZXggY2Fubm90IGJlIG1vcmUgdGhhbiBhcnJheSBsZW5ndGggKGl0IHdpbGwgYmUgY2xhbXBlZCkuXG4gKiBMYXN0IGluZGV4ICoqaW5jbHVzaXZlKiouXG4gKiBgYGB0c1xuICogY29uc3QgaXRlbXMgPSBbMSwyLDMsNCw1LDYsNyw4LDldXG4gKiBjb25zdCBzbGljZUl0ZW1zID0gWy4uLmxpa2VBcnJheS5zbGljZShpdGVtcywgMCwgMildIC8vIFsxLDIsM11cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2U8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaW5kZXhGcm9tID0gMCwgaW5kZXhUbyA9IGFycmF5Lmxlbmd0aCAtIDEpOiBJdGVyYWJsZTxUPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICBsZXQgbmV4dEluZGV4ID0gTWF0aC5tYXgoaW5kZXhGcm9tLCAwKTtcbiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gTWF0aC5taW4oaW5kZXhUbywgbGFzdEluZGV4WmVybyhhcnJheSkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKTogSXRlcmF0b3JSZXN1bHQ8VD4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4ID4gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBudWxsIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGFycmF5W25leHRJbmRleCsrXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB1bndyYXBJdGVtKGl0ZW0pIGFzIFQsIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbnVsbCB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHNsaWNlIG9mIGxhc3QgZWxlbWVudHMgYnkgY291bnQgcGFyYW1ldGVyXG4gKiBgYGB0c1xuICogY29uc3QgaXRlbXMgPSBbMSwyLDMsNCw1LDYsNyw4LDldXG4gKiBjb25zdCBsYXN0VGhlZUl0ZW1zID0gWy4uLmxpa2VBcnJheS50YWlsKGl0ZW1zLCAzKV0gLy8gWzcsOCw5XVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWlsPFQ+KGFycmF5OiBMaWtlQXJyYXk8VD4sIGNvdW50OiBudW1iZXIpIHtcbiAgICByZXR1cm4gc2xpY2UoYXJyYXksIE1hdGgubWF4KDAsIGFycmF5Lmxlbmd0aCAtIDEgLSBjb3VudCksIGxhc3RJbmRleChhcnJheSkpO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2UgZGVmYXVsdCBtZXRob2Qgb2YgYXJyYXkuXG4gKlxuICogKipXaWxsIHRocm93IGVycm9yIGlmIHlvdSB0cnkgdG8gY2hhbmdlIHtAbGluayBDb2hlcmVudEFycmF5UHJveHk8VD59KipcbiAqIEBzZWUge0BsaW5rIEFycmF5LnByb3RvdHlwZS5zcGxpY2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2U8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgc3RhcnQ6IG51bWJlciwgZGVsZXRlQ291bnQ/OiBudW1iZXIgfCB1bmRlZmluZWQpOiBUW10ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgTXV0YXRlIENvaGVyZW50QXJyYXlQcm94eSBpcyBub3QgYXZhaWxhYmxlYCk7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmZpbmR9IG1ldGhvZCBvZiBhcnJheSwgYnV0IGZpbmQgZnJvbSB0YWlsLlxuICogSWYgaXQncyB7QGxpbmsgQ29oZXJlbnRBcnJheVByb3h5PFQ+fSB0aGVuIGBpdGVtLnZhbHVlYCB3aWxsIHBhc3MgaW4gcHJlZGljYXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZExhc3Q8VD4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxUPixcbiAgICBwcmVkaWNhdGU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuLFxuKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgZm9yIChsZXQgaW5kZXggPSBhcnJheS5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB1bndyYXBJdGVtKGFycmF5W2luZGV4XSkgYXMgVDtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShlbGVtZW50LCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmZpbmR9IG1ldGhvZCBvZiBhcnJheS5cbiAqIElmIGl0J3Mge0BsaW5rIENvaGVyZW50QXJyYXlQcm94eTxUPn0gdGhlbiBgaXRlbS52YWx1ZWAgd2lsbCBwYXNzIGluIHByZWRpY2F0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmQ8VD4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxUPixcbiAgICBwcmVkaWNhdGU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuLFxuKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW53cmFwSXRlbShhcnJheVtpbmRleF0pIGFzIFQ7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoZWxlbWVudCwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2Uge0BsaW5rIEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc30gbWV0aG9kIG9mIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZXM8VD4oYXJyYXk6IExpa2VBcnJheTxUPiwgaXRlbTogVCk6IGJvb2xlYW4ge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHVuc2FmZUdldChhcnJheSwgaW5kZXgpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVXNpbmcgbGlrZSBgYXJyYXkuZmlsdGVyKCkubWFwKClgIGJ1dCBmb3Ige0BsaW5rIExpa2VBcnJheTxUPn0gYW5kIHdvcmtzIGluIG9uZSBjeWNsZS5cbiAqIGBgYHRzXG4gKiBjb25zdCBhcnJheSA9IFsxLCAyLCAzLCA0LCA1XVxuICogbGlrZUFycmF5LmZpbHRlck1hcChhcnJheSwgKG4pID0+IG4gJSAyID09PSAwLCAobikgPT4gbiAqIG4pIC8vIFs0LCAxNl1cbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTWFwPFQsIFU+KFxuICAgIGFycmF5OiBMaWtlQXJyYXk8VD4sXG4gICAgcHJlZGljYXRlOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IExpa2VBcnJheTxUPikgPT4gYm9vbGVhbixcbiAgICBmbjogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8VD4pID0+IFUsXG4pOiBVW10ge1xuICAgIGNvbnN0IHJlc3VsdDogVVtdID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZm4oaXRlbSwgaW5kZXgsIGFycmF5KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBTZWUgYWxzbyB7QGxpbmsgZmlsdGVyTWFwfS4gV29ya3MgbGlrZSBmaWx0ZXIgbm9uLWVtcHR5IGVsZW1lbnRzIGFuZCBhcHBseSBmdW5jdGlvbi5cbiAqIENyZWF0aW5nIG5ldyBhcnJheS5cbiAqIGBgYHRzXG4gKiBjb25zdCBhcnJheSA9IFtudWxsLCAwLCB1bmRlZmluZWQsIDFdXG4gKiBsaWtlQXJyYXkubWFwRXhpc3RzKGFycmF5LCAobikgPT4gbiAqIDIpIC8vIFswLCAyXVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXBFeGlzdHM8VCwgVT4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxUIHwgbnVsbCB8IHVuZGVmaW5lZD4sXG4gICAgZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBVLFxuKTogVVtdIHtcbiAgICByZXR1cm4gZmlsdGVyTWFwKGFycmF5IGFzIExpa2VBcnJheTxOb25OdWxsYWJsZTxUPj4sIGlzTm9uTnVsbGFibGUsIGZuKTtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5LlxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbmRleDxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBwcmVkaWNhdGU6IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PFQ+KSA9PiBib29sZWFuKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBXb3JrcyBsaWtlIGRlZmF1bHQgbWV0aG9kIG9mIGFycmF5IGBmaW5kSW5kZXhgIGJ1dCBmcm9tIHRhaWwuXG4gKiBAc2VlIHtAbGluayBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGV4TGFzdDxUPihcbiAgICBhcnJheTogTGlrZUFycmF5PFQ+LFxuICAgIHByZWRpY2F0ZTogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBMaWtlQXJyYXk8VD4pID0+IGJvb2xlYW4sXG4pIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHVuc2FmZUdldChhcnJheSwgaW5kZXgpO1xuICAgICAgICBpZiAocHJlZGljYXRlKGl0ZW0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogV29ya3MgbGlrZSBkZWZhdWx0IG1ldGhvZCBvZiBhcnJheSBgam9pbmAgZXhjZXB0IGFycmF5LWxpa2Ugb2JqZWN0cyAoZm9yIExpa2VBcnJheSB0eXBlIG9ubHkpLlxuICogQHNlZSB7QGxpbmsgQXJyYXkucHJvdG90eXBlLmpvaW59XG4gKlxuICogSW1wbGVtZW50YXRpb24gYWNjb3JkaW5nIHRvOlxuICoge0BsaW5rIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyL211bHRpcGFnZS9pbmRleGVkLWNvbGxlY3Rpb25zLmh0bWwjc2VjLWFycmF5LnByb3RvdHlwZS5qb2lufVxuICovXG5leHBvcnQgZnVuY3Rpb24gam9pbjxUPihhcnJheTogTGlrZUFycmF5PFQ+LCBzZXBhcmF0b3IgPSAnLCcpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0b3I7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIGNvbnN0IG5leHQgPSBlbGVtZW50ID09PSB1bmRlZmluZWQgfHwgZWxlbWVudCA9PT0gbnVsbCA/ICcnIDogU3RyaW5nKGVsZW1lbnQpO1xuICAgICAgICByZXN1bHQgKz0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFdvcmtzIGxpa2Uge0BsaW5rIEFycmF5LnByb3RvdHlwZS5yZWR1Y2V9IG1ldGhvZCBvZiBhcnJheS5cbiAqIGBgYHRzXG4gKiBjb25zdCBhcnJheSA9IFsxLCAyLCAzLCA0XVxuICogbGlrZUFycmF5LnJlZHVjZShhcnJheSwgKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArPSBjdXJyZW50LCAwKSAvLyAxMFxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2U8QSwgQj4oXG4gICAgYXJyYXk6IExpa2VBcnJheTxBPixcbiAgICBwcmVkaWNhdGU6IChwcmV2aW91c1ZhbHVlOiBCLCBjdXJyZW50VmFsdWU6IEEsIGN1cnJlbnRJbmRleDogbnVtYmVyLCBhcnJheTogTGlrZUFycmF5PEE+KSA9PiBCLFxuICAgIGluaXRpYWxWYWx1ZTogQixcbikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICByZXR1cm4gYXJyYXkucmVkdWNlKHByZWRpY2F0ZSwgaW5pdGlhbFZhbHVlKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0OiBCID0gaW5pdGlhbFZhbHVlO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdW5zYWZlR2V0KGFycmF5LCBpbmRleCk7XG4gICAgICAgIHJlc3VsdCA9IHByZWRpY2F0ZShyZXN1bHQsIGVsZW1lbnQsIGluZGV4LCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIi8vIE1vdXNlIGRyYWcgc2VsZWN0aW9uIGZvciBpbnB1dCBmaWVsZHNcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFN0YXRlIHZhcmlhYmxlc1xyXG4gICAgbGV0IGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudDtcclxuICAgIGxldCBzZWxlY3Rpb25Cb3VuZHM7XHJcbiAgICBsZXQgc3RhcnRJbmRleCA9IC0xO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIERlc2VsZWN0IGFueSBnZW5lcmljIHRleHRcclxuICAgICAgICBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdGlvbiB0YXJnZXQgb24gbW91c2Vkb3duXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5zZWxlY3QgJiYgc3RhcnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgZm9jdXNlZFNlbGVjdGFibGVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25Cb3VuZHMgPSBmb2N1c2VkU2VsZWN0YWJsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdGlvbiBzdGFydCBpbmRleCBvbiBtb3VzZW1vdmUgYXMgaXQgaXMgbm90IGF2YWlsYWJsZSBvbiBtb3VzZWRvd25cclxuICAgICAgICBpZiAoc3RhcnRJbmRleCA9PT0gLTEgJiYgZXZlbnQudGFyZ2V0LnNlbGVjdCAmJiBldmVudC50YXJnZXQgPT09IGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBzdGFydEluZGV4ID0gZm9jdXNlZFNlbGVjdGFibGVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHNlbGVjdGlvbiBpbiByZWFsIHRpbWVcclxuICAgICAgICBpZiAoc3RhcnRJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIENsYW1wIG1vdXNlIHBvc2l0aW9uIHRvIGVsZW1lbnQgYm91bmRzXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLm1pbihNYXRoLm1heChldmVudC54LCBzZWxlY3Rpb25Cb3VuZHMubGVmdCksIHNlbGVjdGlvbkJvdW5kcy5yaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLm1pbihNYXRoLm1heChldmVudC55LCBzZWxlY3Rpb25Cb3VuZHMudG9wKSwgc2VsZWN0aW9uQm91bmRzLmJvdHRvbSk7XHJcbiAgICAgICAgICAgIC8vIEdldCBzZWxlY3Rpb24gaW5kZXggZnJvbSBtb3VzZSBwb3NpdGlvblxyXG4gICAgICAgICAgICAvLyBTZW5kIGEgJ21vdXNlZG93bicgZXZlbnQgdG8gbW92ZSB0aGUgY2FyZXQgYXQgY3VycmVudCBtb3VzZSBjb29yZGluYXRlc1xyXG4gICAgICAgICAgICBjb25zdCBldk9iaiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50Jyk7XHJcbiAgICAgICAgICAgIGV2T2JqLmluaXRNb3VzZUV2ZW50KCdtb3VzZWRvd24nLCB0cnVlLCB0cnVlLCBudWxsLCAxLCB4LCB5LCB4LCB5LCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XHJcbiAgICAgICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2T2JqKTtcclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgY2FyZXRcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSW5kZXggPSBmb2N1c2VkU2VsZWN0YWJsZUVsZW1lbnQuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgICAgICAvLyBNYWtlIGJpZGlyZWN0aW9uYWwgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25JbmRleCA+IHN0YXJ0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydEluZGV4LCBzZWxlY3Rpb25JbmRleCwgJ2ZvcndhcmQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25JbmRleCwgc3RhcnRJbmRleCwgJ2JhY2t3YXJkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlc2V0IHN0YXRlc1xyXG4gICAgICAgIGZvY3VzZWRTZWxlY3RhYmxlRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgc3RhcnRJbmRleCA9IC0xO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnQ7XHJcbiAgICBsZXQgY29udGVudDtcclxuICAgIGxldCBpbmRleEN1cnNvclBvc2l0aW9uO1xyXG4gICAgbGV0IGluZGV4U2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBsZXQgaW5kZXhTZWxlY3Rpb25FbmQ7XHJcblxyXG4gICAgLy8gRG91YmxlIGNsaWNrIHNlbGVjdGlvbiB0ZXh0XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LnNlbGVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldFNlbGVjdGlvbigpLmVtcHR5KCk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgY29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBpbmRleEN1cnNvclBvc2l0aW9uID0gZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICBpbmRleFNlbGVjdGlvblN0YXJ0ID1cclxuICAgICAgICAgICAgY29udGVudC5sYXN0SW5kZXhPZignICcsIGluZGV4Q3Vyc29yUG9zaXRpb24pICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgPyBjb250ZW50Lmxhc3RJbmRleE9mKCcgJywgaW5kZXhDdXJzb3JQb3NpdGlvbikgKyAxXHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgaW5kZXhTZWxlY3Rpb25FbmQgPVxyXG4gICAgICAgICAgICBjb250ZW50LmluZGV4T2YoJyAnLCBpbmRleEN1cnNvclBvc2l0aW9uKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgID8gY29udGVudC5pbmRleE9mKCcgJywgaW5kZXhDdXJzb3JQb3NpdGlvbilcclxuICAgICAgICAgICAgICAgIDogY29udGVudC5sZW5ndGg7XHJcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShpbmRleFNlbGVjdGlvblN0YXJ0LCBpbmRleFNlbGVjdGlvbkVuZCwgJ2ZvcndhcmQnKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuLy8gTW91c2UgZHJhZyBzZWxlY3Rpb24gZm9yIGdlbmVyaWMgdGV4dFxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU3RhdGUgdmFyaWFibGVzXHJcbiAgICBsZXQgYW5jaG9yQ2FyZXRQb3NpdGlvbiA9IG51bGw7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gUmVzZXQgYW55IGN1cnJlbnQgc2VsZWN0aW9uXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCkuZW1wdHkoKTtcclxuICAgICAgICAvLyBHZXQgdGhlIGFuY2hvciBub2RlIGFuZCBvZmZzZXRcclxuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwICYmICFldmVudC50YXJnZXQuc2VsZWN0ICYmICFhbmNob3JDYXJldFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGFuY2hvckNhcmV0UG9zaXRpb24gPSBkb2N1bWVudC5jYXJldFBvc2l0aW9uRnJvbVBvaW50KGV2ZW50LngsIGV2ZW50LnkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIEdldCB0aGUgZm9jdXMgbm9kZSBhbmQgb2Zmc2V0IGFuZCBtYWtlIGEgc2VsZWN0aW9uXHJcbiAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAhZXZlbnQudGFyZ2V0LnNlbGVjdCAmJiBhbmNob3JDYXJldFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzQ2FyZXRQb3NpdGlvbiA9IGRvY3VtZW50LmNhcmV0UG9zaXRpb25Gcm9tUG9pbnQoZXZlbnQueCwgZXZlbnQueSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZvY3VzQ2FyZXRQb3NpdGlvbi5vZmZzZXROb2RlIHx8ICFhbmNob3JDYXJldFBvc2l0aW9uLm9mZnNldE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uLnNldEJhc2VBbmRFeHRlbnQoXHJcbiAgICAgICAgICAgICAgICBhbmNob3JDYXJldFBvc2l0aW9uLm9mZnNldE5vZGUsXHJcbiAgICAgICAgICAgICAgICBhbmNob3JDYXJldFBvc2l0aW9uLm9mZnNldCxcclxuICAgICAgICAgICAgICAgIGZvY3VzQ2FyZXRQb3NpdGlvbi5vZmZzZXROb2RlLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNDYXJldFBvc2l0aW9uLm9mZnNldCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlc2V0IHN0YXRlXHJcbiAgICAgICAgYW5jaG9yQ2FyZXRQb3NpdGlvbiA9IG51bGw7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiZXhwb3J0IHR5cGUgTnVsbGFibGU8VD4gPSBUIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bGxhYmxlPFQ+KGl0ZW06IE51bGxhYmxlPFQ+KTogaXRlbSBpcyBOdWxsYWJsZTxUPiB7XHJcbiAgICByZXR1cm4gaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vbk51bGxhYmxlPFQ+KGl0ZW06IE51bGxhYmxlPFQ+KTogaXRlbSBpcyBOb25OdWxsYWJsZTxUPiB7XHJcbiAgICByZXR1cm4gaXNOdWxsYWJsZShpdGVtKSA9PT0gZmFsc2U7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBsYXlTb3VuZChzb3VuZE5hbWUpIHtcclxuICAgIGVuZ2luZS5jYWxsKCdQbGF5U291bmQnLCBzb3VuZE5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU291bmQgPSB7XHJcbiAgICBwbGF5SGlnaGxpZ2h0KCkge1xyXG4gICAgICAgIHBsYXlTb3VuZCgnaGlnaGxpZ2h0Jyk7XHJcbiAgICB9LFxyXG4gICAgcGxheUNsaWNrKCkge1xyXG4gICAgICAgIHBsYXlTb3VuZCgncGxheScpO1xyXG4gICAgfSxcclxuICAgIHBsYXlZZXMoKSB7XHJcbiAgICAgICAgcGxheVNvdW5kKCd5ZXMxJyk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIE1hcHBpbmcgPSB7XG4gICAgW2tleTogc3RyaW5nXTpcbiAgICAgICAgfCBzdHJpbmdcbiAgICAgICAgfCBudW1iZXJcbiAgICAgICAgfCBib29sZWFuXG4gICAgICAgIHwgUmVhY3ROb2RlXG4gICAgICAgIHwgSFRNTEVsZW1lbnRcbiAgICAgICAgfCBudW1iZXJbXVxuICAgICAgICB8IHN0cmluZ1tdXG4gICAgICAgIHwgUmVhY3ROb2RlW11cbiAgICAgICAgfCBIVE1MRWxlbWVudFtdO1xufTtcblxuZXhwb3J0IGVudW0gQWxpZ25tZW50IHtcbiAgICBsZWZ0LFxuICAgIHJpZ2h0LFxufVxuXG5leHBvcnQgdHlwZSBCaW5kaW5nID0ge1xuICAgIFtrZXk6IHN0cmluZ106IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSBpbiBzdHJpbmcgbmFtZWQgcGFyYW1zIHNldCBpbiBweXRob24gc3R5bGUgdGhyb3VnaCBicmFjZXM6ICdibGFsYmxhIHtwYXJhbTF9IGJsYWxibGEge3BhcmFtMX0gLi4uJ1xuICogQHBhcmFtIHN0clxuICogQHBhcmFtIG1hcHBpbmcgaXMga2V5L3ZhbHVlIHBhcmFtcyBvYmplY3RcbiAqIEByZXR1cm5zIHt2b2lkfCp8WE1MfHN0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzdHI6IHN0cmluZywgbWFwcGluZzogTWFwcGluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx7XFx3K1xcfS9nLCAobWF0Y2gpID0+IFN0cmluZyhtYXBwaW5nW21hdGNoLnNsaWNlKDEsIC0xKV0pKTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGluIHN0cmluZyBuYW1lZCBwYXJhbXMgc2V0IGluIHByaW50Zi1zdHlsZSBzdHlsZTogJ2JsYWxibGEgJShwYXJhbTEpcyBibGFsYmxhICUocGFyYW0xKXMgLi4uJ1xuICogQHBhcmFtIHN0clxuICogQHBhcmFtIG1hcHBpbmcgaXMga2V5L3ZhbHVlIHBhcmFtcyBvYmplY3RcbiAqIEByZXR1cm5zIHt2b2lkfCp8WE1MfHN0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFByaW50ZihzdHI6IHN0cmluZywgbWFwcGluZzogTWFwcGluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxce3wlXFwoKVxcdysoXFx9fFxcKXMpL2csIChtYXRjaCkgPT4ge1xuICAgICAgICBjb25zdCBwYWQgPSBtYXRjaC5pbmRleE9mKCclJykgPT09IDAgPyAyIDogMTtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtYXBwaW5nW21hdGNoLnNsaWNlKHBhZCwgLXBhZCldKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHNuYWtlX2Nhc2Ugc3RyaW5nIHRvIGNhbWVsQ2FzZSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbmFrZVRvQ2FtZWwoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL19cXHcvZywgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgZmlsZSBuYW1lIHRvIFIgY2xhc3MgbmFtZSdcbiAqIEBwYXJhbSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVSZXNvdXJjZShzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvLS9nLCAnXycpO1xufVxuXG4vKipcbiAqIGNvbnZlcnQgZmlyc3QgY2hhciB0byB1cHBlciBjYXNlXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBDYXNlRmlyc3RDaGFyKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG4vKipcbiAqIHJlcGxhY2UgJm5ic3A7IHRvIFxceGEwXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgY29udmVydE5ic3AgPSAoc3RyOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyZuYnNwOy9nLCAnXFx4YTAnKTtcbn07XG5cbi8qKlxuICogcmVwbGFjZSAmenduYnNwOyB0byBcXHVmZWZmXG4gKiBAcGFyYW0gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgY29udmVydFp3bmJzcCA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJnp3bmJzcDsvZywgJ1xcdWZlZmYnKTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZFNlcGFyYXRvckZ1bmMgPSAoYWNjOiBzdHJpbmdbXSwgaXRlbTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmdbXTtcblxuY29uc3QgYWRkU2VwYXJhdG9yVG9SaWdodDogQWRkU2VwYXJhdG9yRnVuYyA9IChhY2MsIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKCEoaW5kZXggJSAyKSkge1xuICAgICAgICByZXR1cm4gWy4uLmFjYywgaXRlbV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGFzdCA9IGFjYy5wb3AoKTtcbiAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGxhc3QgKyBpdGVtXTtcbiAgICB9XG59O1xuXG5jb25zdCBhZGRTZXBhcmF0b3JUb0xlZnQ6IEFkZFNlcGFyYXRvckZ1bmMgPSAoYWNjLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW2l0ZW1dO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggJSAyKSB7XG4gICAgICAgIHJldHVybiBbLi4uYWNjLCBpdGVtID09PSAnICcgPyAnXFx4YTAnIDogaXRlbV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGFzdCA9IGFjYy5wb3AoKTtcbiAgICAgICAgcmV0dXJuIFsuLi5hY2MsIGxhc3QgKyBpdGVtXTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFNwbGl0IHRleHQgc3RyaW5nIHdpdGggUmVnRXhwIHNlcGFyYXRvciBhbmQgdGhlbiBhZGQgc2VwYXJhdG9yIHRvIHRoZSBwcm9wZXIgc2lkZVxuICovXG5jb25zdCBzcGxpdEFuZEZvcm1hdCA9IChzdHJpbmdUb1NwbGl0OiBzdHJpbmcsIHNlcGFyYXRvcjogUmVnRXhwLCBhbGlnbm1lbnQgPSBBbGlnbm1lbnQubGVmdCk6IHN0cmluZ1tdID0+XG4gICAgc3RyaW5nVG9TcGxpdC5zcGxpdChzZXBhcmF0b3IpLnJlZHVjZShhbGlnbm1lbnQgPT09IEFsaWdubWVudC5sZWZ0ID8gYWRkU2VwYXJhdG9yVG9SaWdodCA6IGFkZFNlcGFyYXRvclRvTGVmdCwgW10pO1xuXG5leHBvcnQgY29uc3Qgc3BsaXRFdXJvcGVhbiA9IChzdHJpbmdUb1NwbGl0OiBzdHJpbmcsIGFsaWdubWVudCA9IEFsaWdubWVudC5sZWZ0KTogc3RyaW5nW10gPT4ge1xuICAgIGxldCBzcGxpdFJlc3VsdDogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0IHNwbGl0UmVnZXggPSAvKD88PVxccHtMbH0pKC0pKD89XFxwe0xsfSkvZ3U7IC8vIGV4Y2x1ZGUgc3BlY2lhbCB3b3JkcyBsaWtlIHZlaGljbGUgbmFtZXMgS1YtMiBldGNcbiAgICBjb25zdCBzdHJpbmdXaXRoTmJzcCA9IGNvbnZlcnROYnNwKHN0cmluZ1RvU3BsaXQpO1xuICAgIHNwbGl0QW5kRm9ybWF0KHN0cmluZ1dpdGhOYnNwLCAvKCApLywgYWxpZ25tZW50KS5mb3JFYWNoKFxuICAgICAgICAod29yZCkgPT4gKHNwbGl0UmVzdWx0ID0gc3BsaXRSZXN1bHQuY29uY2F0KHNwbGl0QW5kRm9ybWF0KHdvcmQsIHNwbGl0UmVnZXgsIEFsaWdubWVudC5sZWZ0KSkpLFxuICAgICk7XG4gICAgcmV0dXJuIHNwbGl0UmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IHNwbGl0Q2hpbmVzZSA9ICgoKSA9PiB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi8gLy8gRXNjYXBpbmcgaXMgbmVjZXNzYXJ5IGZvciB1bmljb2RlIFJlZ0V4cC5cbiAgICAvLyBTeW1ib2xzIHVzZWQgZm9yIGxhdGluIHZlaGljbGUgbmFtZXMsIHJhbmdlcyBldGMuIGV4cGVjdGVkIG5vdCBiZSB3cmFwcGVkIGZyb20gZWFjaCBvdGhlciBvciBmb2xsb3dpbmcgcHVuY3R1YXRpb24gbWFyay5cbiAgICAvLyBZb3UgY2FuIGFkZCBuZXcgb25lcyB0byB0aGUgdGhpcmQgcGFpciBvZiBbXSAoY3VycmVudGx5IHRoZSBsaXN0IGlzIFthLXpBLVowLTkt4oCT4oCUICXigKYuXFx7M1xcfS9dKVxuICAgIGNvbnN0IGxhdGluSW5qZWN0aW9ucyA9XG4gICAgICAgIC9bXFxwe3NjPUhhbml9KF0/W+OAgu+8jO+8mu+8m++8ge+8n10/W2EtekEtWsOALci3MC05LeKAk+KAlCBcXHhhMCXigKYuK1xcezNcXH0vXStbXFxwe3NjPUhhbml944CC77yM77ya77yb77yB77yfKV0/W+OAgu+8jO+8mu+8m++8ge+8n10/L2dtdTtcbiAgICAvLyBUaGlzIHJ1bGUgcHJldmVudHMgd3JhcHBpbmcgb2Ygc29tZSBzeW1ib2xzIG5laWdoYm9yaW5nIHRvIHRoZSBicmFja2V0cy9xdW90ZXMuXG4gICAgLy8gUGFpcnMgb2Ygb3BlbmluZyAobGVmdCkgYW5kIGNsb3NpbmcgKHJpZ2h0KSBzeW1ib2xzIGFyZSBkZXNjcmliZWQuXG4gICAgLy8gT25seSB1c2Ugc2VwYXJhdGUgdW5pY29kZSBzeW1ib2xzIGZvciBsZWZ0IGFuZCByaWdodCBwYXJ0KMKrwrspLCBidXQgTk9UIHVuaXZlcnNhbCBvbmVzIChcIikuXG4gICAgLy8gSW4gY2FzZSBpZiB1bml2ZXJzYWwgc3ltYm9sIGlzIHVzZWQgaW4gdGhlIHRyYW5zbGF0aW9uLCB0aGUgdHJhbnNsYXRpb24gbXVzdCBiZSBmaXhlZCwgbm90IHRoZSBydWxlLlxuICAgIGNvbnN0IGJyYWNrZXRzQW5kUXVvdGVzID1cbiAgICAgICAgL1tcXCjinZ3igJzCq11cXHB7c2M9SGFuaX1cXFB7c2M9SGFuaX0/fFxccHtzYz1IYW5pfVxcUHtzYz1IYW5pfT9b44CC77yM77ya77yb77yB77yfXT9bXFwp4p2e4oCdwrtdW+OAgu+8jO+8mu+8m++8ge+8n10/L2dtdTtcbiAgICAvLyBSdWxlIGRlc2NyaWJlcyB0aGF0IHByZXZpb3VzIGhpZXJvZ2x5cGggc2hvdWxkIG5vdCBiZSB3cmFwcGVkLlxuICAgIC8vIE9ubHkgdW5pY29kZSBwdW5jdHVhdGlvbiBtYXJrcyBhcmUgdXNlZCBmb3IgYXNpYW4gbGFuZ3VhZ2VzLlxuICAgIC8vIE90aGVyd2lzZSBzdHJpbmcgc2hvdWxkIGJlIGZpeGVkIHRvIHVzZSB1bmljb2RlIHB1bmN0dWF0aW9uIG1hcmtzLCBub3QgdGhlIHJ1bGUuXG4gICAgY29uc3QgcHVuY3R1YXRpb25NYXJrcyA9IC9cXHB7TH0/W+OAgu+8jDogOyDvvJrvvJvvvIHvvJ/jgIrjgIvjgIzjgI3igKIp44CBXXxbKFxccHtMfXsxLH1dL2dtdTsgICAgXG4gICAgLy8gVGhpcyBydWxlIG1ha2VzIGl0IHBvc3NpYmxlIHRvIHdyYXAgYW55IG5laWdoYm9yaW5nIHBhaXIgb2YgaGllcm9nbHlwaHMuXG4gICAgY29uc3QgbmVpZ2hib3JpbmdIaWVyb2dseXBocyA9IC9cXHB7c2M9SGFuaX0vZ211O1xuICAgIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAgIC8vIE9yZGVyIGlzIGltcG9ydGFudC5cbiAgICBjb25zdCBtYWluUmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICBsYXRpbkluamVjdGlvbnMuc291cmNlICtcbiAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICBicmFja2V0c0FuZFF1b3Rlcy5zb3VyY2UgK1xuICAgICAgICAgICAgJ3wnICtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uTWFya3Muc291cmNlICtcbiAgICAgICAgICAgICd8JyArXG4gICAgICAgICAgICBuZWlnaGJvcmluZ0hpZXJvZ2x5cGhzLnNvdXJjZSxcbiAgICAgICAgJ2d1bScsXG4gICAgKTtcbiAgICByZXR1cm4gKHN0cmluZ3NUb1NwbGl0OiBzdHJpbmcpID0+XG4gICAgICAgIHN0cmluZ3NUb1NwbGl0XG4gICAgICAgICAgICAucmVwbGFjZSgvJm5ic3A7L2csICdcXHhhMCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvIC9nLCAnXFx4YTAnKVxuICAgICAgICAgICAgLm1hdGNoKG1haW5SZWdleCk7XG59KSgpO1xuXG5jb25zdCBDSElORVNFX0xBTkdVQUdFX0NPREVTID0gWyd6aF9jbicsICd6aF9zZycsICd6aF90dyddO1xuXG4vKipcbiAqIFNwbGl0IG9uZSBsaW5lIG9mIGxvY2FsaXplZCB0ZXh0IHRvIGFycmF5IG9mIHdvcmRzIHdoaWNoIHRoZW4gY2FuIGJlIGxpbmUtd3JhcHBlZCBieSBnYW1lZmFjZS5cbiAqIEBwYXJhbSBzdHJpbmdUb1NwbGl0IHN1cHBvcnRzICZuYnNwLCBoeXBoZW5zIGFuZCBkYXNoZXMgZm9yIGFzaWFuIGxhbmd1YWdlcy5cbiAqIEBwYXJhbSBhbGlnbm1lbnQgc2V0IHRvIGByaWdodGAgZm9yIHJpZ2h0LWFsaWduZWQgdGV4dFxuICogU2VlIHRlc3RzIGZvciBleGFtcGxlXG4gKi9cblxuZXhwb3J0IGNvbnN0IHNwbGl0V29yZHMgPSAoc3RyaW5nVG9TcGxpdDogc3RyaW5nLCBhbGlnbm1lbnQgPSBBbGlnbm1lbnQubGVmdCkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gUi5zdHJpbmdzLnNldHRpbmdzLkxBTkdVQUdFX0NPREUoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKENISU5FU0VfTEFOR1VBR0VfQ09ERVMuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG4gICAgICAgIHJldHVybiBzcGxpdENoaW5lc2Uoc3RyaW5nVG9TcGxpdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0RXVyb3BlYW4oc3RyaW5nVG9TcGxpdCwgYWxpZ25tZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRTdHJpbmcgPSAodGV4dDogc3RyaW5nLCBhbGlnbm1lbnQ6IEFsaWdubWVudCwgYmluZGluZz86IEJpbmRpbmcpOiBBcnJheTxzdHJpbmcgfCBSZWFjdE5vZGU+ID0+XG4gICAgdGV4dC5zcGxpdCgvJVxcKCguKj8pXFwpKD86W3NkXSk/L2cpLm1hcCgoc3ViU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCFiaW5kaW5nKSB7IHJldHVybiBzcGxpdFdvcmRzKHN1YlN0cmluZywgYWxpZ25tZW50KTsgfVxuICAgICAgICByZXR1cm4gc3ViU3RyaW5nIGluIGJpbmRpbmcgPyBiaW5kaW5nW3N1YlN0cmluZ10gOiBzcGxpdFdvcmRzKHN1YlN0cmluZywgYWxpZ25tZW50KTtcbiAgICB9KTtcblxuIiwiY2xhc3MgQ2xpY2tPdXRzaWRlTWFuYWdlciB7XHJcbiAgICBlbnRyaWVzOiB7XHJcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIH1bXSA9IFtdO1xyXG4gICAgX2xpc3Rlbk1vdXNlID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIF9faW5zdGFuY2U6IENsaWNrT3V0c2lkZU1hbmFnZXI7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAoIUNsaWNrT3V0c2lkZU1hbmFnZXIuX19pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBDbGlja091dHNpZGVNYW5hZ2VyLl9faW5zdGFuY2UgPSBuZXcgQ2xpY2tPdXRzaWRlTWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIENsaWNrT3V0c2lkZU1hbmFnZXIuX19pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuYWRkTW91c2VMaXN0ZW5lcigpO1xyXG5cclxuICAgICAgICB0aGlzLmVudHJpZXMucHVzaCh7XG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3Rlcihjb250YWluZXI6IEhUTUxFbGVtZW50LCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXRDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gdGhpcy5lbnRyaWVzLmZpbHRlcigoeyBjb250YWluZXIsIGNhbGxiYWNrIH0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lciAhPT0gdGFyZ2V0Q29udGFpbmVyIHx8IGNhbGxiYWNrICE9PSB0YXJnZXRDYWxsYmFjaztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVNb3VzZUxpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTW91c2VMaXN0ZW5lcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2xpc3Rlbk1vdXNlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5Nb3VzZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZU1vdXNlTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3Rlbk1vdXNlICYmIHRoaXMuZW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3Rlbk1vdXNlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbnRyaWVzLmZvckVhY2goKHsgY29udGFpbmVyLCBjYWxsYmFjayB9KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQ6IEV2ZW50VGFyZ2V0IHwgbnVsbCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBjbGljayBpbiBpbm5lciBhcmVhIG9yIGNsb3NlIGJ1dHRvbi4gbmVlZCB0byBjaGVjayBjbG9zZSBidXR0b24gdG9vLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgbW91c2Vkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRzIHBhcmVudCBpcyBub3QgcG9wb3ZlciBjb250ZW50IGJsb2NrLCBzbyBwb3BvdmVyIGNsb3NlcyBpbmNvcnJlY3RseVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmcsIGp1c3QgcmV0dXJuLlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGdvIHVwIHRoZSBET01cclxuICAgICAgICAgICAgICAgIHRhcmdldCA9ICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGEgY2xpY2sgb3V0c2lkZS5cclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWNrT3V0c2lkZU1hbmFnZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcblxyXG5pbXBvcnQgeyBlbnYgfSBmcm9tICdsaWIvZW52JztcclxuXHJcbmNsYXNzIERhdGFUcmFja2VyIHtcclxuICAgIF9jYWxsYmFja3M6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiAoZGF0YTogYW55LCBpbmRleGVzOiBhbnkpID0+IHZvaWQ7XHJcbiAgICB9O1xyXG4gICAgX3VwZGF0ZUhhbmRsZXI6XHJcbiAgICAgICAgfCB7XHJcbiAgICAgICAgICAgICAgY2xlYXI6ICgpID0+IHZvaWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfCB1bmRlZmluZWQ7XHJcbiAgICBfdmlld3M6IHsgW2lkOiBzdHJpbmddOiBudW1iZXJbXSB9O1xyXG5cclxuICAgIHN0YXRpYyBfX2luc3RhbmNlOiBEYXRhVHJhY2tlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgICAgICB0aGlzLl92aWV3cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhhbmRsZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICAvLyB3ZSBzaG91bGQgaGF2ZSBvbmUgaW5zdGFuY2UgZm9yIGRpZmZlcmVudCBidW5kbGVzXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuX19kYXRhVHJhY2tlcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuX19kYXRhVHJhY2tlciA9IG5ldyBEYXRhVHJhY2tlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5fX2RhdGFUcmFja2VyIGFzIERhdGFUcmFja2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSGFuZGxlci5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVIYW5kbGVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJWaWV3Q2FsbGJhY2tzID0gKHZpZXdJZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpZXdzW3ZpZXdJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlld3Nbdmlld0lkXS5mb3JFYWNoKChjYWxsYmFja0lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0cmFja2VyIGNsZWFuZWQgdXAgb24gaW50ZWdyYXRpb24gc2lkZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5yZW1vdmVDYWxsYmFjayhjYWxsYmFja0lkLCB2aWV3SWQpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fdmlld3Nbdmlld0lkXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFkZENhbGxiYWNrKFxyXG4gICAgICAgIHBhdGg6IHN0cmluZyxcclxuICAgICAgICBjYWxsYmFjazogKHZhbHVlPzogYW55LCBpbmRleGVzPzogQXJyYXk8bnVtYmVyPikgPT4gdm9pZCxcclxuICAgICAgICByZXNJZCA9IDAsXHJcbiAgICAgICAgdHJhY2tJbkRlcHRoID0gdHJ1ZSxcclxuICAgICk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVIYW5kbGVyID0gZW5naW5lLm9uKCd2aWV3RW52Lm9uRGF0YUNoYW5nZWQnLCB0aGlzLl9lbW1pdERhdGFDaGFuZ2VkLCB0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrSUQgPSBlbnYudmlldy5hZGRNb2RlbE9ic2VydmVyKHBhdGgsIHJlc0lkLCB0cmFja0luRGVwdGgpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2tJRCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW2NhbGxiYWNrSURdID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmlld3NbcmVzSWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmlld3NbcmVzSWRdLnB1c2goY2FsbGJhY2tJRCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdzW3Jlc0lkXSA9IFtjYWxsYmFja0lEXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDYW4ndCBhZGQgY2FsbGJhY2sgZm9yIG1vZGVsOlwiLCBwYXRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjYWxsYmFja0lEO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrSUQ6IG51bWJlciwgcmVzSWQgPSAwKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoY2FsbGJhY2tJRCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2NhbGxiYWNrc1tjYWxsYmFja0lEXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdFbnYucmVtb3ZlRGF0YUNoYW5nZWRDYWxsYmFjayhjYWxsYmFja0lELCByZXNJZCk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2NhbGxiYWNrSURdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhbid0IHJlbW92ZSBjYWxsYmFjayBieSBpZDpcIiwgY2FsbGJhY2tJRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIF9lbW1pdERhdGFDaGFuZ2VkKGRhdGE6IGFueSwgaW5kZXhlczogYW55LCBjYWxsYmFja0lEczogYW55W10pIHtcclxuICAgICAgICBjYWxsYmFja0lEcy5mb3JFYWNoKChjYWxsYmFja0lEKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2tzW2NhbGxiYWNrSURdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEsIGluZGV4ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFUcmFja2VyO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcblxyXG5pbXBvcnQgRGF0YVRyYWNrZXIgZnJvbSAnLi9EYXRhVHJhY2tlcic7XHJcbmltcG9ydCB7IG9uQmluZGluZ3NSZWFkeSB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY2xhc3MgVmlld01vZGVsIHtcclxuICAgIGRhdGFUcmFja2VyOiBEYXRhVHJhY2tlcjtcclxuICAgIG1vZGVsUGF0aDogc3RyaW5nO1xyXG4gICAgY2FsbGJhY2tzOiBTZXQ8KChkYXRhPzogYW55KSA9PiB2b2lkKT47XHJcbiAgICBkYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nLCB3YXRjaGluZ0ZpZWxkcyA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhVHJhY2tlciA9IG5ldyBEYXRhVHJhY2tlcigpO1xyXG4gICAgICAgIHRoaXMubW9kZWxQYXRoID0gcGF0aDtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgb25CaW5kaW5nc1JlYWR5KCkudGhlbihcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ2FsbGJhY2socGF0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2F0Y2hpbmdGaWVsZHMuZm9yRWFjaCgoc3VmZml4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkQ2FsbGJhY2socGF0aCArICcuJyArIHN1ZmZpeCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlKGNhbGxiYWNrOiAoZGF0YT86IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhVHJhY2tlci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZENhbGxiYWNrKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZGF0YVRyYWNrZXIuYWRkQ2FsbGJhY2socGF0aCwgdGhpcy5fbm90aWZ5T2JzZXJ2ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBfbm90aWZ5T2JzZXJ2ZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGV2YWwodGhpcy5tb2RlbFBhdGgpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayh0aGlzLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld01vZGVsO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHVtcFZpZXdNb2RlbChtb2RlbDogYW55KSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IHtcclxuICAgICAgICBba2V5OiBzdHJpbmddOiBBcnJheTx7XHJcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcclxuICAgICAgICB9PjtcclxuICAgIH0gPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIG1vZGVsICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIG1vZGVsKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2RlbCwgcHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobW9kZWxbcHJvcGVydHldKTtcclxuICAgICAgICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aCgnW29iamVjdCBDb2hlcmVudEFycmF5UHJveHldJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5OiBhbnkgPSBtb2RlbFtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbcHJvcGVydHldID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BlcnR5XS5wdXNoKHsgdmFsdWU6IGR1bXBWaWV3TW9kZWwoYXJyYXlbaV0udmFsdWUpIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUuc3RhcnRzV2l0aCgnW29iamVjdCBjbGFzcyBCVzo6V1VMRjo6Vmlld01vZGVsJykpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wZXJ0eV0gPSBkdW1wVmlld01vZGVsKG1vZGVsW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbcHJvcGVydHldID0gbW9kZWxbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiaW1wb3J0ICcuL3Nob3dNb2RlbCc7XHJcblxyXG5pbXBvcnQgQ2xpY2tPdXRzaWRlTWFuYWdlckNsYXNzIGZyb20gJy4vQ2xpY2tPdXRzaWRlTWFuYWdlcic7XHJcbmltcG9ydCBEYXRhVHJhY2tlciBmcm9tICcuL0RhdGFUcmFja2VyJztcclxuaW1wb3J0IHsgZHVtcFZpZXdNb2RlbCB9IGZyb20gJy4vZHVtcFZpZXdNb2RlbCc7XHJcbmltcG9ydCB7IFN5c3RlbUxvY2FsZSwgVXNlckxvY2FsZSB9IGZyb20gJy4vbG9jYWxlJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdFR5cGUsIE51bWJlckZvcm1hdFR5cGUsIFJlYWxGb3JtYXRUeXBlLCBUaW1lRm9ybWF0VHlwZSwgVmlld0V2ZW50VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gICAgYWRkRXNjYXBlTGlzdGVuZXIsXHJcbiAgICBjbG9zZU9uRXNjLFxyXG4gICAgaGFuZGxlVmlld0V2ZW50LFxyXG4gICAgaXNDb250ZXh0TWVudVNob3duLFxyXG4gICAgaXNQb3BPdmVyU2hvd24sXHJcbiAgICBpc1Rvb2x0aXBTaG93bixcclxuICAgIG1ha2VHbG9iYWxCb3VuZGluZ0JveCxcclxuICAgIG9uQmluZGluZ3NSZWFkeSxcclxuICAgIG9uTGF5b3V0UmVhZHksXHJcbiAgICBzZW5kQ2xvc2VFdmVudCxcclxuICAgIHNlbmRDbG9zZVBvcE92ZXJFdmVudCxcclxuICAgIHNlbmRNb3ZlRXZlbnQsXHJcbiAgICBzZW5kU2hvd0NvbnRleHRNZW51RXZlbnQsXHJcbiAgICBzZW5kU2hvd1BvcE92ZXJFdmVudCxcclxufSBmcm9tICcuL3ZpZXctZXZlbnRzJztcclxuaW1wb3J0IFZpZXdNb2RlbCBmcm9tICcuL1ZpZXdNb2RlbCc7XHJcblxyXG5jb25zdCBDbGlja091dHNpZGVNYW5hZ2VyID0gQ2xpY2tPdXRzaWRlTWFuYWdlckNsYXNzLmluc3RhbmNlO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIERhdGFUcmFja2VyLFxyXG4gICAgVmlld01vZGVsLFxyXG4gICAgVmlld0V2ZW50VHlwZSxcclxuICAgIE51bWJlckZvcm1hdFR5cGUsXHJcbiAgICBSZWFsRm9ybWF0VHlwZSxcclxuICAgIFRpbWVGb3JtYXRUeXBlLFxyXG4gICAgRGF0ZUZvcm1hdFR5cGUsXHJcbiAgICBtYWtlR2xvYmFsQm91bmRpbmdCb3gsXHJcbiAgICBzZW5kTW92ZUV2ZW50LFxyXG4gICAgc2VuZENsb3NlRXZlbnQsXHJcbiAgICBzZW5kQ2xvc2VQb3BPdmVyRXZlbnQsXHJcbiAgICBzZW5kU2hvd0NvbnRleHRNZW51RXZlbnQsXHJcbiAgICBzZW5kU2hvd1BvcE92ZXJFdmVudCxcclxuICAgIGFkZEVzY2FwZUxpc3RlbmVyLFxyXG4gICAgY2xvc2VPbkVzYyxcclxuICAgIGhhbmRsZVZpZXdFdmVudCxcclxuICAgIG9uQmluZGluZ3NSZWFkeSxcclxuICAgIG9uTGF5b3V0UmVhZHksXHJcbiAgICBpc1Rvb2x0aXBTaG93bixcclxuICAgIGlzQ29udGV4dE1lbnVTaG93bixcclxuICAgIGlzUG9wT3ZlclNob3duLFxyXG4gICAgZHVtcFZpZXdNb2RlbCxcclxuICAgIENsaWNrT3V0c2lkZU1hbmFnZXIsXHJcbiAgICBTeXN0ZW1Mb2NhbGUsXHJcbiAgICBVc2VyTG9jYWxlLFxyXG59O1xyXG5cclxuY29uc3QgVmlld0VudkhlbHBlciA9IHtcclxuICAgIERhdGFUcmFja2VyLFxyXG4gICAgVmlld01vZGVsLFxyXG4gICAgVmlld0V2ZW50VHlwZSxcclxuICAgIE51bWJlckZvcm1hdFR5cGUsXHJcbiAgICBSZWFsRm9ybWF0VHlwZSxcclxuICAgIFRpbWVGb3JtYXRUeXBlLFxyXG4gICAgRGF0ZUZvcm1hdFR5cGUsXHJcbiAgICBtYWtlR2xvYmFsQm91bmRpbmdCb3gsXHJcbiAgICBzZW5kTW92ZUV2ZW50LFxyXG4gICAgc2VuZENsb3NlRXZlbnQsXHJcbiAgICBzZW5kQ2xvc2VQb3BPdmVyRXZlbnQsXHJcbiAgICBzZW5kU2hvd0NvbnRleHRNZW51RXZlbnQsXHJcbiAgICBzZW5kU2hvd1BvcE92ZXJFdmVudCxcclxuICAgIGFkZEVzY2FwZUxpc3RlbmVyLFxyXG4gICAgY2xvc2VPbkVzYyxcclxuICAgIGhhbmRsZVZpZXdFdmVudCxcclxuICAgIG9uQmluZGluZ3NSZWFkeSxcclxuICAgIG9uTGF5b3V0UmVhZHksXHJcbiAgICBpc1Rvb2x0aXBTaG93bixcclxuICAgIGlzQ29udGV4dE1lbnVTaG93bixcclxuICAgIGlzUG9wT3ZlclNob3duLFxyXG4gICAgZHVtcFZpZXdNb2RlbCxcclxuICAgIENsaWNrT3V0c2lkZU1hbmFnZXIsXHJcbiAgICBTeXN0ZW1Mb2NhbGUsXHJcbiAgICBVc2VyTG9jYWxlLFxyXG59O1xyXG5cclxud2luZG93LlZpZXdFbnZIZWxwZXIgPSBWaWV3RW52SGVscGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlld0VudkhlbHBlcjtcclxuIiwiZXhwb3J0IGNvbnN0IFN5c3RlbUxvY2FsZSA9IHtcclxuICAgIGdldE51bWJlckZvcm1hdCh2YWx1ZTogbnVtYmVyLCB0eXBlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzeXN0ZW1Mb2NhbGUuZ2V0TnVtYmVyRm9ybWF0KHZhbHVlLCB0eXBlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UmVhbEZvcm1hdCh2YWx1ZTogbnVtYmVyLCB0eXBlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzeXN0ZW1Mb2NhbGUuZ2V0UmVhbEZvcm1hdCh2YWx1ZSwgdHlwZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFRpbWVGb3JtYXQodXRjOiBudW1iZXIsIHR5cGU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN5c3RlbUxvY2FsZS5nZXRUaW1lRm9ybWF0KHV0YywgdHlwZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldERhdGVGb3JtYXQodXRjOiBudW1iZXIsIHR5cGU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN5c3RlbUxvY2FsZS5nZXREYXRlRm9ybWF0KHV0YywgdHlwZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvVXBwZXJDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3lzdGVtTG9jYWxlLnRvVXBwZXJDYXNlKHN0cik7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvTG93ZXJDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3lzdGVtTG9jYWxlLnRvVXBwZXJDYXNlKHN0cik7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2NhbGUgPSB7XHJcbiAgICBnZXROdW1iZXJGb3JtYXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB1c2VyTG9jYWxlLmdldE51bWJlckZvcm1hdCh2YWx1ZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBzdHJpbmcgcHJlc2VudGF0aW9uIG9mIGRhdGEgYW5kIHRpbWUgdXNpbmcgcGF0dGVybi5cclxuICAgICAqIEBwYXJhbSBwYXR0ZXJuIFRoZSBzdHJpbmcgY29udGFpbmluZyBjb252ZXJzaW9uIHNwZWNpZmllcnMsXHJcbiAgICAgKiAgICAgIHNlZSBzdGQ6OnB1dF90aW1lIHRvIGdldCBhdmFpbGFibGUgc3BlY2lmaWVycywgZm9yIGV4YW1wbGUuXHJcbiAgICAgKiBAcGFyYW0gdXRjIFRoZSBudW1iZXIgY29udGFpbmluZyB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIEVwb2NoLlxyXG4gICAgICogQHBhcmFtIHRpbWVUb0xvY2FsIElzIHRpbWUgY29udmVydGVkIHRvIGxvY2FsIHRpbWUuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgc3RyaW5nIGNvbnRhaW5pbmcgcHJlc2VudGF0aW9uIG9mIGRhdGEgYW5kIHRpbWUuXHJcbiAgICAgKi9cclxuICAgIGdldFRpbWVGb3JtYXQocGF0dGVybjogc3RyaW5nLCB1dGM6IG51bWJlciwgdGltZVRvTG9jYWw6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB1c2VyTG9jYWxlLmdldFRpbWVGb3JtYXQocGF0dGVybiwgdXRjLCB0aW1lVG9Mb2NhbCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRpbWVUb0xvY2FsKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHN0cmluZyBwcmVzZW50YXRpb24gb2YgZGF0YSBhbmQgdGltZSB1c2luZyBJRCBvZiBzdHJpbmcgcmVzb3VyY2UuXHJcbiAgICAgKiBAcGFyYW0gcmVzb3VyY2VJRCBUaGUgSUQgb2Ygc3RyaW5nIHJlc291cmNlIHdoZXJlIHBsYWNlIGNvbnZlcnNpb24gc3BlY2lmaWVycy5cclxuICAgICAqIEBwYXJhbSB1dGMgVGhlIG51bWJlciBjb250YWluaW5nIHRpbWUgaW4gc2Vjb25kcyBzaW5jZSB0aGUgRXBvY2guXHJcbiAgICAgKiBAcGFyYW0gdGltZVRvTG9jYWwgSXMgdGltZSBjb252ZXJ0ZWQgdG8gbG9jYWwgdGltZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBzdHJpbmcgY29udGFpbmluZyBwcmVzZW50YXRpb24gb2YgZGF0YSBhbmQgdGltZS5cclxuICAgICAqL1xyXG4gICAgZ2V0VGltZVN0cmluZyhyZXNvdXJjZUlEOiBudW1iZXIsIHV0YzogbnVtYmVyLCB0aW1lVG9Mb2NhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiB1c2VyTG9jYWxlLmdldFRpbWVTdHJpbmcocmVzb3VyY2VJRCwgdXRjLCB0aW1lVG9Mb2NhbCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRpbWVUb0xvY2FsKTtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGNvbnN0IHNob3dNb2RlbCA9IChtb2RlbDogYW55ID0gd2luZG93Lm1vZGVsLCBkZXB0aCA9IDE2KTogYW55ID0+IHtcclxuICAgICAgICBpZiAoZGVwdGggPCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAgIGBEZXB0aCBsaW1pdCBoYXMgYmVlbiByZWFjaGVkLlxyXG4gICAgICAgICAgICBZb3UgY2FuIGNoYW5nZSB0aGUgbGltaXQgd2l0aCBzZWNvbmQgYXJndW1lbnQuXHJcbiAgICAgICAgICAgIFVzZSBfc2hvd01vZGVsKG1vZGVsLCA8bnVtYmVyPikgZm9yIHRoaXMuIDE2IGlzIGRlZmF1bHQuYCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuICdEZXB0aCBsaW1pdCBoYXMgYmVlbiByZWFjaGVkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtb2RlbCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIG1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICBjYXNlICdiaWdpbnQnOlxyXG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBtb2RlbC5jb25zdHJ1Y3Rvcj8ubmFtZSA/PyAnVU5LTk9XTic7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHR5cGUuaW5jbHVkZXMoJ0NvaGVyZW50QXJyYXlQcm94eScpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLm1vZGVsLnZhbHVlcygpXS5tYXAoKGl0ZW0pID0+IHNob3dNb2RlbChpdGVtLCBkZXB0aCAtIDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlID09PSAnVU5LTk9XTic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnVU5LTk9XTl9UWVBFJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0eXBlLmluY2x1ZGVzKCdWaWV3TW9kZWwnKTpcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZGVsLCBrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzaG93TW9kZWwobW9kZWxba2V5XSwgZGVwdGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgVW5rbm93bjogJHtTdHJpbmcobW9kZWwpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICh3aW5kb3cgYXMgYW55KS5fc2hvd01vZGVsID0gc2hvd01vZGVsO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFZpZXdFdmVudFR5cGUge1xyXG4gICAgVU5ERUZJTkVEID0gMCxcclxuICAgIFRPT0xUSVAgPSAxLFxyXG4gICAgUE9QX09WRVIgPSAyLFxyXG4gICAgQ09OVEVYVF9NRU5VID0gNCxcclxuICAgIC8vIERST1BfRE9XTiBpcyBub3QgdXNlZCBkdWUgdG8gY29tYm9ib3ggaXMgbmF0aXZlIEphdmFTY3JpcHQgY29tcG9uZW50IG9uIHRoZSBHYW1lRmFjZS5cclxuICAgIERST1BfRE9XTiA9IDgsXHJcbiAgICBNT1ZFID0gMTYsXHJcbiAgICBDTE9TRSA9IDMyLFxyXG4gICAgTUlOSU1JWkUgPSA2NCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE51bWJlckZvcm1hdFR5cGUgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIElOVEVHUkFMOiAwLFxyXG4gICAgR09MRDogMSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgUmVhbEZvcm1hdFR5cGUgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIEZSQUNUSU9OQUw6IDAsXHJcbiAgICBXT19aRVJPX0RJR0lUUzogMSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVGltZUZvcm1hdFR5cGUgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIFNIT1JUX0ZPUk1BVDogMCxcclxuICAgIExPTkdfRk9STUFUOiAxLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRlRm9ybWF0VHlwZSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgU0hPUlRfRk9STUFUOiAwLFxyXG4gICAgTE9OR19GT1JNQVQ6IDEsXHJcbiAgICBZRUFSX01PTlRIOiAyLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIENsaWVudFJlY3QgPSBSZWFkb25seTx7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn0+O1xyXG5cclxuZXhwb3J0IHR5cGUgVmlld0V2ZW50QXJncyA9IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB9O1xyXG5leHBvcnQgdHlwZSBWaWV3RXZlbnRPcHRpb25zID0gUGljazxcclxuICAgIEdGVmlld0V2ZW50UHJveHksXHJcbiAgICAnY29udGVudElEJyB8ICdkZWNvcmF0b3JJRCcgfCAndGFyZ2V0SUQnIHwgJ2lzTW91c2VFdmVudCcgfCAnb24nIHwgJ2RpcmVjdGlvbicgfCAnYmJveCdcclxuPiAmIHsgYXJncz86IFZpZXdFdmVudEFyZ3MgfTtcclxuIiwiaW1wb3J0IHsgS0VZX0NPREVTIH0gZnJvbSAnbGliL2tleWNvZGVzJztcblxuaW1wb3J0IHsgZW52IH0gZnJvbSAnLi4vZW52JztcbmltcG9ydCB7IENsaWVudFJlY3QsIFZpZXdFdmVudEFyZ3MsIFZpZXdFdmVudE9wdGlvbnMsIFZpZXdFdmVudFR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IG1ha2VHbG9iYWxCb3VuZGluZ0JveCA9IChjbGllbnRSZWN0OiBDbGllbnRSZWN0KTogR0ZCb3VuZGluZ0JveCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgX19UeXBlOiAnR0ZCb3VuZGluZ0JveCcsXG4gICAgICAgIHg6IGNsaWVudFJlY3QueCxcbiAgICAgICAgeTogY2xpZW50UmVjdC55LFxuICAgICAgICB3aWR0aDogY2xpZW50UmVjdC53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjbGllbnRSZWN0LmhlaWdodCxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG9uQmluZGluZ3NSZWFkeSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoZW5naW5lLl9CaW5kaW5nc1JlYWR5ICYmIGVuZ2luZS5fV2luZG93TG9hZGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBlbmdpbmUub24oJ1JlYWR5JywgcmVzb2x2ZSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3Qgb25MYXlvdXRSZWFkeSA9ICgpID0+XG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG5jb25zdCBjcmVhdGVWaWV3RXZlbnRBcmd1bWVudHMgPSAoZGF0YTogVmlld0V2ZW50QXJncykgPT4ge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBjb25zdCBvdXQ6IEdGVmFsdWVQcm94eSA9IHtcbiAgICAgICAgICAgIF9fVHlwZTogJ0dGVmFsdWVQcm94eScsXG4gICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIH07XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIG91dC5udW1iZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIG91dC5ib29sID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBvdXQuc3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVZpZXdFdmVudCA9ICh0eXBlOiBWaWV3RXZlbnRUeXBlLCBvcHRpb25zPzogVmlld0V2ZW50T3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IF9fVHlwZSA9ICdHRlZpZXdFdmVudFByb3h5JztcbiAgICBpZiAob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHsgYXJncywgLi4ucmVzdE9wdGlvbnMgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGFyZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmlld0Vudi5oYW5kbGVWaWV3RXZlbnQoe1xuICAgICAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIC4uLnJlc3RPcHRpb25zLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50czogY3JlYXRlVmlld0V2ZW50QXJndW1lbnRzKGFyZ3MpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3RW52LmhhbmRsZVZpZXdFdmVudCh7XG4gICAgICAgICAgICAgICAgX19UeXBlLFxuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgLi4ucmVzdE9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZXdFbnYuaGFuZGxlVmlld0V2ZW50KHtcbiAgICAgICAgICAgIF9fVHlwZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKiBAZGVwcmVjYXRlZCBVc2UgZW52LnZpZXcuc2VuZEV2ZW50Lm1vdmUgbWV0aG9kIGluc3RlYWQuICovXG5leHBvcnQgY29uc3Qgc2VuZE1vdmVFdmVudCA9IChzdGFydDogYm9vbGVhbikgPT5cbiAgICBoYW5kbGVWaWV3RXZlbnQoVmlld0V2ZW50VHlwZS5NT1ZFLCB7XG4gICAgICAgIGlzTW91c2VFdmVudDogdHJ1ZSxcbiAgICAgICAgb246IHN0YXJ0LFxuICAgIH0pO1xuLyoqIEBkZXByZWNhdGVkIFVzZSBlbnYudmlldy5zZW5kRXZlbnQuY2xvc2UgbWV0aG9kIGluc3RlYWQuICovXG5leHBvcnQgY29uc3Qgc2VuZENsb3NlRXZlbnQgPSAoKSA9PiBoYW5kbGVWaWV3RXZlbnQoVmlld0V2ZW50VHlwZS5DTE9TRSk7XG5leHBvcnQgY29uc3Qgc2VuZENsb3NlUG9wT3ZlckV2ZW50ID0gKCkgPT4gaGFuZGxlVmlld0V2ZW50KFZpZXdFdmVudFR5cGUuUE9QX09WRVIsIHsgb246IGZhbHNlIH0pO1xuLyoqIEBkZXByZWNhdGVkIFVzZSBlbnYudmlldy5zZW5kRXZlbnQubWluaW1pemUgbWV0aG9kIGluc3RlYWQuICovXG5leHBvcnQgY29uc3Qgc2VuZE1pbmltaXplRXZlbnQgPSAoKSA9PiBoYW5kbGVWaWV3RXZlbnQoVmlld0V2ZW50VHlwZS5NSU5JTUlaRSk7XG5cbmV4cG9ydCBjb25zdCBzZW5kU2hvd0NvbnRleHRNZW51RXZlbnQgPSAoY29udGVudElEOiBudW1iZXIsIGFyZ3M/OiBWaWV3RXZlbnRBcmdzLCBkZWNvcmF0b3JJRCA9IDApID0+IHtcbiAgICBoYW5kbGVWaWV3RXZlbnQoVmlld0V2ZW50VHlwZS5DT05URVhUX01FTlUsIHtcbiAgICAgICAgaXNNb3VzZUV2ZW50OiB0cnVlLFxuICAgICAgICBjb250ZW50SUQ6IGNvbnRlbnRJRCxcbiAgICAgICAgb246IHRydWUsXG4gICAgICAgIGRlY29yYXRvcklEOiBkZWNvcmF0b3JJRCxcbiAgICAgICAgYXJnczogYXJncyxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kU2hvd1BvcE92ZXJFdmVudCA9IChcbiAgICBjb250ZW50SUQ6IG51bWJlcixcbiAgICBkaXJlY3Rpb246IG51bWJlcixcbiAgICBub2RlOiBIVE1MRWxlbWVudCxcbiAgICBkZWNvcmF0b3JJRD86IG51bWJlcixcbiAgICB0YXJnZXRJRCA9IFIuaW52YWxpZCgncmVzSWQnKSxcbiAgICBhcmdzPzogVmlld0V2ZW50QXJncyxcbikgPT4ge1xuICAgIGNvbnN0IGdsb2JhbFBvc2l0aW9uID0gZW52LnZpZXcuZ2V0Vmlld0dsb2JhbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNsaWVudFJlY3RQeCA9IHtcbiAgICAgICAgeDogZW52LnZpZXcucHhUb1JlbSh4KSArIGdsb2JhbFBvc2l0aW9uLngsXG4gICAgICAgIHk6IGVudi52aWV3LnB4VG9SZW0oeSkgKyBnbG9iYWxQb3NpdGlvbi55LFxuICAgICAgICB3aWR0aDogZW52LnZpZXcucHhUb1JlbSh3aWR0aCksXG4gICAgICAgIGhlaWdodDogZW52LnZpZXcucHhUb1JlbShoZWlnaHQpLFxuICAgIH07XG5cbiAgICBoYW5kbGVWaWV3RXZlbnQoVmlld0V2ZW50VHlwZS5QT1BfT1ZFUiwge1xuICAgICAgICBpc01vdXNlRXZlbnQ6IHRydWUsXG4gICAgICAgIGNvbnRlbnRJRDogY29udGVudElELFxuICAgICAgICBkZWNvcmF0b3JJRDogZGVjb3JhdG9ySUQgfHwgUi5pbnZhbGlkKCdyZXNJZCcpLFxuICAgICAgICB0YXJnZXRJRDogdGFyZ2V0SUQsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgICBiYm94OiBtYWtlR2xvYmFsQm91bmRpbmdCb3goY2xpZW50UmVjdFB4KSxcbiAgICAgICAgb246IHRydWUsXG4gICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaXNUb29sdGlwU2hvd24gPSAoKSA9PiB2aWV3RW52LmlzV2luZG93U2hvd25CeVZpZXdFdmVudChWaWV3RXZlbnRUeXBlLlRPT0xUSVApO1xuZXhwb3J0IGNvbnN0IGlzQ29udGV4dE1lbnVTaG93biA9ICgpID0+IHZpZXdFbnYuaXNXaW5kb3dTaG93bkJ5Vmlld0V2ZW50KFZpZXdFdmVudFR5cGUuQ09OVEVYVF9NRU5VKTtcbmV4cG9ydCBjb25zdCBpc1BvcE92ZXJTaG93biA9ICgpID0+IHZpZXdFbnYuaXNXaW5kb3dTaG93bkJ5Vmlld0V2ZW50KFZpZXdFdmVudFR5cGUuUE9QX09WRVIpO1xuXG5leHBvcnQgY29uc3QgY2FsbE9uRXNjID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4ge1xuICAgIGV2ZW50LmtleUNvZGUgPT09IEtFWV9DT0RFUy5FU0NBUEUgJiYgY2FsbGJhY2soKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbG9zZU9uRXNjID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY2FsbE9uRXNjKGV2ZW50LCBzZW5kQ2xvc2VFdmVudCk7XG59O1xuXG4vKiogQGRlcHJlY2F0ZWQgRG9uJ3QgdXNlIGl0IHdpdGggaG9va3MuIFVzZSB1c2VLZXlkb3duTGlzdGVuZXIsIHVzZUNhbGxiYWNrT25Fc2Mgb3IgdXNlQ2xvc2VPbkVzYyBob29rcyBpbnN0ZWFkLiAqL1xuZXhwb3J0IGNvbnN0IGFkZEVzY2FwZUxpc3RlbmVyID0gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlRnVuYyA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gY2FsbE9uRXNjKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVGdW5jKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVGdW5jKTtcbn07XG4iLCJpbXBvcnQgeyBNZWRpYVByb3ZpZGVyIH0gZnJvbSAnY29tcG9uZW50cy9NZWRpYVF1ZXJ5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1lZGlhV3JhcHBlcklubmVyIH0gZnJvbSAnLi9NZWRpYVdyYXBwZXJJbm5lcic7XG5pbXBvcnQgeyBNZWRpYVdyYXBwZXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgTWVkaWFXcmFwcGVyID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogTWVkaWFXcmFwcGVyUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVkaWFQcm92aWRlcj5cbiAgICAgICAgICAgIDxNZWRpYVdyYXBwZXJJbm5lciB7Li4ucmVzdH0+e2NoaWxkcmVufTwvTWVkaWFXcmFwcGVySW5uZXI+XG4gICAgICAgIDwvTWVkaWFQcm92aWRlcj5cbiAgICApO1xufTtcbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBDU1MgZnJvbSAnZ2xvYmFsLXN0eWxlcy9taXhpbnMvbWVkaWFDc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTWVkaWFIZWlnaHQsIE1lZGlhU2l6ZSwgTWVkaWFXaWR0aCwgdXNlTWVkaWEgfSBmcm9tICcuLi8uLi9ob29rcy91c2VNZWRpYSc7XG5pbXBvcnQgeyBNZWRpYVdyYXBwZXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBXSURUSF9DTEFTU0VTID0ge1xuICAgIFtNZWRpYVdpZHRoLkV4dHJhU21hbGxdOiAnJyxcbiAgICBbTWVkaWFXaWR0aC5TbWFsbF06IENTUy5TTUFMTF9XSURUSCxcbiAgICBbTWVkaWFXaWR0aC5NZWRpdW1dOiBgJHtDU1MuU01BTExfV0lEVEh9ICR7Q1NTLk1FRElVTV9XSURUSH1gLFxuICAgIFtNZWRpYVdpZHRoLkxhcmdlXTogYCR7Q1NTLlNNQUxMX1dJRFRIfSAke0NTUy5NRURJVU1fV0lEVEh9ICR7Q1NTLkxBUkdFX1dJRFRIfWAsXG4gICAgW01lZGlhV2lkdGguRXh0cmFMYXJnZV06IGAke0NTUy5TTUFMTF9XSURUSH0gJHtDU1MuTUVESVVNX1dJRFRIfSAke0NTUy5MQVJHRV9XSURUSH0gJHtDU1MuRVhUUkFfTEFSR0VfV0lEVEh9YCxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IEhFSUdIVF9DTEFTU0VTID0ge1xuICAgIFtNZWRpYUhlaWdodC5FeHRyYVNtYWxsXTogJycsXG4gICAgW01lZGlhSGVpZ2h0LlNtYWxsXTogQ1NTLlNNQUxMX0hFSUdIVCxcbiAgICBbTWVkaWFIZWlnaHQuTWVkaXVtXTogYCR7Q1NTLlNNQUxMX0hFSUdIVH0gJHtDU1MuTUVESVVNX0hFSUdIVH1gLFxuICAgIFtNZWRpYUhlaWdodC5MYXJnZV06IGAke0NTUy5TTUFMTF9IRUlHSFR9ICR7Q1NTLk1FRElVTV9IRUlHSFR9ICR7Q1NTLkxBUkdFX0hFSUdIVH1gLFxuICAgIFtNZWRpYUhlaWdodC5FeHRyYUxhcmdlXTogYCR7Q1NTLlNNQUxMX0hFSUdIVH0gJHtDU1MuTUVESVVNX0hFSUdIVH0gJHtDU1MuTEFSR0VfSEVJR0hUfSAke0NTUy5FWFRSQV9MQVJHRV9IRUlHSFR9YCxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IFNJWkVfQ0xBU1NFUyA9IHtcbiAgICBbTWVkaWFTaXplLkV4dHJhU21hbGxdOiAnJyxcbiAgICBbTWVkaWFTaXplLlNtYWxsXTogQ1NTLlNNQUxMLFxuICAgIFtNZWRpYVNpemUuTWVkaXVtXTogYCR7Q1NTLlNNQUxMfSAke0NTUy5NRURJVU19YCxcbiAgICBbTWVkaWFTaXplLkxhcmdlXTogYCR7Q1NTLlNNQUxMfSAke0NTUy5NRURJVU19ICR7Q1NTLkxBUkdFfWAsXG4gICAgW01lZGlhU2l6ZS5FeHRyYUxhcmdlXTogYCR7Q1NTLlNNQUxMfSAke0NTUy5NRURJVU19ICR7Q1NTLkxBUkdFfSAke0NTUy5FWFRSQV9MQVJHRX1gLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IE1lZGlhV3JhcHBlcklubmVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9OiBNZWRpYVdyYXBwZXJQcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbWVkaWFXaWR0aCwgbWVkaWFIZWlnaHQsIG1lZGlhU2l6ZSB9ID0gdXNlTWVkaWEoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBXSURUSF9DTEFTU0VTW21lZGlhV2lkdGhdLCBIRUlHSFRfQ0xBU1NFU1ttZWRpYUhlaWdodF0sIFNJWkVfQ0xBU1NFU1ttZWRpYVNpemVdKX1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IHsgTWVkaWFXcmFwcGVyIH0gZnJvbSAnbGliL3dyYXBwZXJzL01lZGlhV3JhcHBlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9jb21wb25lbnRzL0FwcC9BcHAnO1xyXG5pbXBvcnQgeyBNb2RlbFByb3ZpZGVyIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5lbmdpbmUud2hlblJlYWR5LnRoZW4oKCkgPT4ge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgIDxNb2RlbFByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8TWVkaWFXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgICAgICA8L01lZGlhV3JhcHBlcj5cclxuICAgICAgICA8L01vZGVsUHJvdmlkZXI+LFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JyksXHJcbiAgICApO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgUmV3YXJkVHlwZSB9IGZyb20gJ2NvbXBvbmVudHMvUmV3YXJkcy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUZXh0QnV0dG9uIH0gZnJvbSAnY29tcG9uZW50cy9UZXh0QnV0dG9uL1RleHRCdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFja09uRXNjIH0gZnJvbSAnbGliL2hvb2tzL3VzZUtleWRvd25MaXN0ZW5lcic7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xyXG5pbXBvcnQgeyBEZXNjcmlwdGlvbiB9IGZyb20gJy4uL0Rlc2NyaXB0aW9uL0Rlc2NyaXB0aW9uJztcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLmNzcyc7XHJcblxyXG5jb25zdCBURVhUUyA9IFIuc3RyaW5ncy5hcm1vcnlfeWFyZDtcclxuY29uc3QgWkVST19QUklDRSA9IDA7XHJcblxyXG52aWV3RW52LmNsZWFySW50ZXJuYWxDYWNoZUFmdGVyRmluYWxpemUoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHAgPSBvYnNlcnZlcigoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbnRyb2xzLCBtb2RlbCB9ID0gdXNlTW9kZWwoKTtcclxuXHJcbiAgICBjb25zdCB7IHRva2Vuc0NvdW50LCBwYXllZFRva2Vuc0xpbWl0LCBpc1dhbGxldEF2YWlsYWJsZSwgdXNlckNyeXN0YWwgfSA9IG1vZGVsLnJvb3QuZ2V0KCk7XHJcbiAgICBjb25zdCB0b2tlblByaWNlID0gbW9kZWwuY29tcHV0ZXMuZ2V0VG9rZW5QcmljZSgpO1xyXG4gICAgY29uc3QgdG9rZW5DcnlzdGFsUHJpY2UgPSBtb2RlbC5jb21wdXRlcy5nZXRUb2tlbkNyeXN0YWxQcmljZSgpO1xyXG5cclxuICAgIGNvbnN0IHRva2VuUmF0ZSA9IHRva2VuUHJpY2UucHJpY2UuZmluZCgob25lUHJpY2UpID0+IG9uZVByaWNlLm5hbWUgPT09IFJld2FyZFR5cGUuR29sZCk/LnZhbHVlIHx8IFpFUk9fUFJJQ0U7XHJcbiAgICBjb25zdCB0b2tlbkNyeXN0YWxSYXRlID1cclxuICAgICAgICB0b2tlbkNyeXN0YWxQcmljZS5wcmljZS5maW5kKChvbmVQcmljZSkgPT4gb25lUHJpY2UubmFtZSA9PT0gUmV3YXJkVHlwZS5DcnlzdGFsKT8udmFsdWUgfHwgWkVST19QUklDRTtcclxuXHJcbiAgICB1c2VDYWxsYmFja09uRXNjKGNvbnRyb2xzLmJhY2spO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXNlfT5cclxuICAgICAgICAgICAgPFRleHRCdXR0b25cclxuICAgICAgICAgICAgICAgIGNhcHRpb249e1RFWFRTLmNsb3NlQnRuLmxhYmVsKCl9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgc2lkZT1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3sgYmFzZTogc3R5bGVzLmNsb3NlIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250cm9scy5jYW5jZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciB0b2tlbnNDb3VudD17dG9rZW5zQ291bnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHVjdEluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRva2VuSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuUmF0ZT17dG9rZW5SYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbkNyeXN0YWxSYXRlPXt0b2tlbkNyeXN0YWxSYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1dhbGxldEF2YWlsYWJsZT17aXNXYWxsZXRBdmFpbGFibGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1eT17Y29udHJvbHMuYnV5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXllZFRva2Vuc0xpbWl0PXtwYXllZFRva2Vuc0xpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyQ3J5c3RhbD17dXNlckNyeXN0YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgVGV4dCBmcm9tICdjb21wb25lbnRzL1RleHQvVGV4dCc7XHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Rlc2NyaXB0aW9uLmNzcyc7XHJcblxyXG5jb25zdCBURVhUUyA9IFIuc3RyaW5ncy5hcm1vcnlfeWFyZC5wb3N0cHJvZ3Jlc3Npb24uYnV5VG9rZW5zLmRlc2NyaXB0aW9uO1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gbWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFzZX0+XHJcbiAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSB0ZXh0PXtURVhUUy50aXRsZSgpfSAvPlxyXG4gICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0gdGV4dD17VEVYVFMuYm9keSgpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgQnV0dG9uVHlwZSwgQ0J1dHRvbiB9IGZyb20gJ2NvbXBvbmVudHMvQnV0dG9uL0NCdXR0b24nO1xyXG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJ2NvbXBvbmVudHMvQ3VycmVuY3kvQ3VycmVuY3knO1xyXG5pbXBvcnQgeyBDdXJyZW5jeVNpemUsIEN1cnJlbmN5VHlwZSB9IGZyb20gJ2NvbXBvbmVudHMvQ3VycmVuY3kvdHlwZXMnO1xyXG5pbXBvcnQgVGV4dCBmcm9tICdjb21wb25lbnRzL1RleHQvVGV4dCc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdjb21wb25lbnRzL1Rvb2x0aXAvVG9vbHRpcCc7XHJcbmltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBUb2tlbnNTdGVwcGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Ub2tlbnNTdGVwcGVyL1Rva2Vuc1N0ZXBwZXInO1xyXG5pbXBvcnQgeyBUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBUb2dnbGVCdXR0b24gfSBmcm9tICcuLi9Ub2dnbGVCdXR0b24vVG9nZ2xlQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5jc3MnO1xyXG5cclxuY29uc3QgVEVYVFMgPSBSLnN0cmluZ3MuYXJtb3J5X3lhcmQucG9zdHByb2dyZXNzaW9uLmJ1eVRva2Vucy5mb290ZXI7XHJcblxyXG5jb25zdCBTVEVQX1NJWkUgPSAxO1xyXG5cclxuZXhwb3J0IHR5cGUgRm9vdGVyUHJvcHMgPSBSZWFkb25seTx7XHJcbiAgICBpc1dhbGxldEF2YWlsYWJsZTogYm9vbGVhbjtcclxuICAgIHBheWVkVG9rZW5zTGltaXQ6IG51bWJlcjtcclxuICAgIHRva2VuUmF0ZTogbnVtYmVyO1xyXG4gICAgdG9rZW5DcnlzdGFsUmF0ZTogbnVtYmVyO1xyXG4gICAgdXNlckNyeXN0YWw6IG51bWJlcjtcclxuICAgIGJ1eTogKHRva2VuczogbnVtYmVyLCBjdXJyZW5jeVR5cGU6IEN1cnJlbmN5VHlwZSkgPT4gdm9pZDtcclxufT47XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gbWVtbyhcclxuICAgICh7IGlzV2FsbGV0QXZhaWxhYmxlLCBwYXllZFRva2Vuc0xpbWl0LCB0b2tlblJhdGUsIHRva2VuQ3J5c3RhbFJhdGUsIHVzZXJDcnlzdGFsLCBidXkgfTogRm9vdGVyUHJvcHMpID0+IHtcclxuICAgICAgICBjb25zdCBbdG9rZW5zVmFsdWUsIHNldFRva2Vuc1ZhbHVlXSA9IHVzZVN0YXRlKFNURVBfU0laRSk7XHJcbiAgICAgICAgY29uc3QgW2dvbGRWYWx1ZSwgc2V0R29sZFZhbHVlXSA9IHVzZVN0YXRlKHRva2VuUmF0ZSk7XHJcbiAgICAgICAgY29uc3QgW2NyeXN0YWxWYWx1ZSwgc2V0Q3J5c3RhbFZhbHVlXSA9IHVzZVN0YXRlKHRva2VuQ3J5c3RhbFJhdGUpO1xyXG4gICAgICAgIGNvbnN0IFtjaGVja2VkVHlwZSwgc2V0Q2hlY2tlZFR5cGVdID0gdXNlU3RhdGUoVG9nZ2xlVHlwZS5Hb2xkKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlQ2xpY2sgPSB1c2VDYWxsYmFjayhcclxuICAgICAgICAgICAgKHRvZ2dsZVR5cGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0b2dnbGVUeXBlICE9PSBjaGVja2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENoZWNrZWRUeXBlKHRvZ2dsZVR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRHb2xkVmFsdWUodG9rZW5SYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDcnlzdGFsVmFsdWUodG9rZW5DcnlzdGFsUmF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9rZW5zVmFsdWUoU1RFUF9TSVpFKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgW3Rva2VuUmF0ZSwgdG9rZW5DcnlzdGFsUmF0ZSwgY2hlY2tlZFR5cGVdLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzR29sZFRvZ2dsZUFjdGl2ZSA9IGNoZWNrZWRUeXBlID09PSBUb2dnbGVUeXBlLkdvbGQ7XHJcbiAgICAgICAgY29uc3QgaXNDcnlzdGFsbFRvZ2dsZUFjdGl2ZSA9IGNoZWNrZWRUeXBlID09PSBUb2dnbGVUeXBlLkNyeXN0YWw7XHJcbiAgICAgICAgY29uc3QgaXNCdXlBdmFpbGFibGUgPSBpc0dvbGRUb2dnbGVBY3RpdmUgfHwgdXNlckNyeXN0YWwgPj0gY3J5c3RhbFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVR5cGUgPSBpc0NyeXN0YWxsVG9nZ2xlQWN0aXZlID8gQ3VycmVuY3lUeXBlLmNyeXN0YWwgOiBDdXJyZW5jeVR5cGUuZ29sZDtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVG9rZW5JbmNyZWFzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRva2Vuc1ZhbHVlIDwgcGF5ZWRUb2tlbnNMaW1pdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzR29sZFRvZ2dsZUFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rva2Vuc1ZhbHVlID0gdG9rZW5zVmFsdWUgKyBTVEVQX1NJWkU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ29sZFJhdGUgPSBuZXdUb2tlbnNWYWx1ZSAqIHRva2VuUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbnNWYWx1ZShuZXdUb2tlbnNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0R29sZFZhbHVlKGdvbGRSYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0NyeXN0YWxsVG9nZ2xlQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VG9rZW5zVmFsdWUgPSB0b2tlbnNWYWx1ZSArIFNURVBfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcnlzdGFsUmF0ZSA9IG5ld1Rva2Vuc1ZhbHVlICogdG9rZW5DcnlzdGFsUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbnNWYWx1ZShuZXdUb2tlbnNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3J5c3RhbFZhbHVlKGNyeXN0YWxSYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtpc0NyeXN0YWxsVG9nZ2xlQWN0aXZlLCBpc0dvbGRUb2dnbGVBY3RpdmUsIHBheWVkVG9rZW5zTGltaXQsIHRva2VuQ3J5c3RhbFJhdGUsIHRva2VuUmF0ZSwgdG9rZW5zVmFsdWVdKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVG9rZW5EZWNyZWFzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRva2Vuc1ZhbHVlID4gU1RFUF9TSVpFKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNHb2xkVG9nZ2xlQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VG9rZW5zVmFsdWUgPSB0b2tlbnNWYWx1ZSAtIFNURVBfU0laRTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb2xkUmF0ZSA9IG5ld1Rva2Vuc1ZhbHVlICogdG9rZW5SYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRva2Vuc1ZhbHVlKG5ld1Rva2Vuc1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRHb2xkVmFsdWUoZ29sZFJhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzQ3J5c3RhbGxUb2dnbGVBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2tlbnNWYWx1ZSA9IHRva2Vuc1ZhbHVlIC0gU1RFUF9TSVpFO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyeXN0YWxSYXRlID0gbmV3VG9rZW5zVmFsdWUgKiB0b2tlbkNyeXN0YWxSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRva2Vuc1ZhbHVlKG5ld1Rva2Vuc1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDcnlzdGFsVmFsdWUoY3J5c3RhbFJhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW3Rva2Vuc1ZhbHVlLCBpc0dvbGRUb2dnbGVBY3RpdmUsIGlzQ3J5c3RhbGxUb2dnbGVBY3RpdmUsIHRva2VuUmF0ZSwgdG9rZW5DcnlzdGFsUmF0ZV0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhc2V9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5saW5lLCBzdHlsZXMubGluZV9fZmlyc3QpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ30gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMubGluZSwgc3R5bGVzLmxpbmVfX3NlY29uZCl9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbmFsUHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHlwZT17VG9nZ2xlVHlwZS5Hb2xkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtpc0dvbGRUb2dnbGVBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy50b2dnbGUsIHN0eWxlcy50b2dnbGVfX2NyeXN0YWwpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUeXBlPXtUb2dnbGVUeXBlLkNyeXN0YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e2lzQ3J5c3RhbGxUb2dnbGVBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmljZUxpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXthY3RpdmVUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNDcnlzdGFsbFRvZ2dsZUFjdGl2ZSA/IGNyeXN0YWxWYWx1ZSA6IGdvbGRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17Q3VycmVuY3lTaXplLmJpZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbm91Z2g9e2lzQnV5QXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudElkPXtSLnZpZXdzLmFybW9yeV95YXJkLmxvYmJ5LmZlYXR1cmUudG9vbHRpcHMuQXJtb3J5WWFyZFRva2VuU3RlcHBlclRvb2x0aXBWaWV3KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc0lkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlU2hvd0RlbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RDb3VudGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2tlbnNTdGVwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rva2Vuc1ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRva2VuSW5jcmVhc2U9e2hhbmRsZVRva2VuSW5jcmVhc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9rZW5EZWNyZWFzZT17aGFuZGxlVG9rZW5EZWNyZWFzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZT17cGF5ZWRUb2tlbnNMaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZT17U1RFUF9TSVpFfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRva2Vuc0F2YWlsYWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtURVhUUy5hdmFpbGFibGVUb2tlbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW5zQXZhaWxhYmxlX190b2tlbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1N0cmluZyhwYXllZFRva2Vuc0xpbWl0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYXJyb3csIHN0eWxlcy5hcnJvd19fbGFzdCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtCdXR0b25UeXBlLm1haW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXhDbGFzcz17c3R5bGVzLmJ1eUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJ1eSh0b2tlbnNWYWx1ZSwgYWN0aXZlVHlwZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzQnV5QXZhaWxhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0PXtURVhUUy5idXkoKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uVGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7IWlzV2FsbGV0QXZhaWxhYmxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SWQ9e1Iudmlld3MuYXJtb3J5X3lhcmQubG9iYnkuZmVhdHVyZS50b29sdGlwcy5Bcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzSWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YXJuaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FybmluZ19fZ2xvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FybmluZ19faWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcbik7XHJcbiIsImltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVGV4dC9UZXh0JztcclxuaW1wb3J0IHsgVG9vbHRpcCB9IGZyb20gJ2NvbXBvbmVudHMvVG9vbHRpcC9Ub29sdGlwJztcclxuaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLmNzcyc7XHJcblxyXG5jb25zdCBURVhUUyA9IFIuc3RyaW5ncy5hcm1vcnlfeWFyZC5wb3N0cHJvZ3Jlc3Npb24uYnV5VG9rZW5zLmhlYWRlcjtcclxuXHJcbmV4cG9ydCB0eXBlIEhlYWRlclByb3BzID0gUmVhZG9ubHk8e1xyXG4gICAgdG9rZW5zQ291bnQ6IG51bWJlcjtcclxufT47XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gbWVtbygoeyB0b2tlbnNDb3VudCB9OiBIZWFkZXJQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhc2V9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RUaXRsZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHRleHQ9e1RFWFRTLnRpdGxlKCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRva2VuQ291bnR9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW5Db3VudF9fdGV4dH0gdGV4dD17VEVYVFMuYXZhaWxhYmxlKCl9IC8+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRJZD17Ui52aWV3cy5hcm1vcnlfeWFyZC5sb2JieS5mZWF0dXJlLnRvb2x0aXBzLlNob3BDdXJyZW5jeVRvb2x0aXBWaWV3KCdyZXNJZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZVNob3dEZWxheVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW5Db3VudF9fdW5kZXJUb29sdGlwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW5Db3VudF9fY291bnR9IHRleHQ9e1N0cmluZyh0b2tlbnNDb3VudCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9rZW5Db3VudF9faWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBwbGF5U291bmQgfSBmcm9tICdsaWIvc291bmQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9nZ2xlQnV0dG9uLmNzcyc7XHJcblxyXG5jb25zdCBTT1VORF9DTElDSyA9ICdwbGF5JztcclxuY29uc3QgU09VTkRfSE9WRVIgPSAnaGlnaGxpZ2h0JztcclxuXHJcbmV4cG9ydCB0eXBlIFRvZ2dsZUJ1dHRvblByb3BzID0gUmVhZG9ubHk8e1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICB0b2dnbGVUeXBlOiBUb2dnbGVUeXBlO1xyXG4gICAgb25DbGljazogKHRvZ2dsZVR5cGU6IFRvZ2dsZVR5cGUpID0+IHZvaWQ7XHJcbn0+O1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvZ2dsZUJ1dHRvbiA9IG1lbW8oKHsgdG9nZ2xlVHlwZSwgb25DbGljaywgaXNBY3RpdmUgfTogVG9nZ2xlQnV0dG9uUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgb25DbGljayh0b2dnbGVUeXBlKTtcclxuICAgICAgICBzZXRJc0hvdmVyZWQoZmFsc2UpO1xyXG4gICAgICAgIHBsYXlTb3VuZChTT1VORF9DTElDSyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBzZXRJc0hvdmVyZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHBsYXlTb3VuZChTT1VORF9IT1ZFUik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgc2V0SXNIb3ZlcmVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5iYXNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxyXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnRGVmYXVsdH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5iZ0FjdGl2ZSwgaXNBY3RpdmUgJiYgc3R5bGVzLmJnQWN0aXZlX192aXNpYmxlKX0gLz5cclxuICAgICAgICAgICAgeyFpc0FjdGl2ZSAmJiA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmhvdmVyLCBpc0hvdmVyZWQgJiYgc3R5bGVzLmhvdmVyX19ob3ZlcmVkKX0gLz59XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuaWNvbiwgc3R5bGVzW2BpY29uX18ke3RvZ2dsZVR5cGV9YF0pfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcbiIsImltcG9ydCB7IEFybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3TW9kZWwgfSBmcm9tICdhcm1vcnlfeWFyZC9ndWkvaW1wbC9nZW4vdmlld19tb2RlbHMvdmlld3MvbG9iYnkvZmVhdHVyZS9hcm1vcnlfeWFyZF9wb3N0X3Byb2dyZXNzaW9uX2J1eV92aWV3X21vZGVsJztcclxuaW1wb3J0IHsgQ3VycmVuY3lUeXBlIH0gZnJvbSAnY29tcG9uZW50cy9DdXJyZW5jeS90eXBlcyc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0IH0gZnJvbSAnbGliL2RhdGEtbGF5ZXInO1xyXG5pbXBvcnQgeyBjb25zdEZhbHNlLCBpZGVudGl0eSB9IGZyb20gJ2xpYi9mdW5jdGlvbic7XHJcbmltcG9ydCB7IENhc3RBbGxBcnJheXMsIGxpa2VBcnJheSB9IGZyb20gJ2xpYi9saWtlQXJyYXknO1xyXG5pbXBvcnQgeyBjb21wdXRlZEZuIH0gZnJvbSAnbW9ieC11dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgW01vZGVsUHJvdmlkZXIsIHVzZU1vZGVsXSA9IGluaXRpYWxpemVNb2RlbFdpdGhDb250ZXh0PFxyXG4gICAgQ2FzdEFsbEFycmF5czxBcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlld01vZGVsPlxyXG4+KCkoXHJcbiAgICAoeyBvYnNlcnZhYmxlTW9kZWwgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0ge1xyXG4gICAgICAgICAgICByb290OiBvYnNlcnZhYmxlTW9kZWwub2JqZWN0KCksXHJcbiAgICAgICAgICAgIHByaWNlOiBvYnNlcnZhYmxlTW9kZWwub2JqZWN0KCdwcmljZScpLFxyXG4gICAgICAgICAgICBjcnlzdGFsUHJpY2U6IG9ic2VydmFibGVNb2RlbC5vYmplY3QoJ2NyeXN0YWxQcmljZScpLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGdldFRva2VuUHJpY2UgPSBjb21wdXRlZEZuKFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHByaWNlIH0gPSBtb2RlbC5yb290LmdldCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBwcmljZTogbGlrZUFycmF5Lm1hcChwcmljZS5wcmljZSwgaWRlbnRpdHkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZlByaWNlOiBsaWtlQXJyYXkubWFwKHByaWNlLmRlZlByaWNlLCBpZGVudGl0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnQ6IGxpa2VBcnJheS5tYXAocHJpY2UuZGlzY291bnQsIGlkZW50aXR5KSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVxdWFsczogY29uc3RGYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBnZXRUb2tlbkNyeXN0YWxQcmljZSA9IGNvbXB1dGVkRm4oXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgY3J5c3RhbFByaWNlIH0gPSBtb2RlbC5yb290LmdldCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jcnlzdGFsUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGxpa2VBcnJheS5tYXAoY3J5c3RhbFByaWNlLnByaWNlLCBpZGVudGl0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmUHJpY2U6IGxpa2VBcnJheS5tYXAoY3J5c3RhbFByaWNlLmRlZlByaWNlLCBpZGVudGl0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnQ6IGxpa2VBcnJheS5tYXAoY3J5c3RhbFByaWNlLmRpc2NvdW50LCBpZGVudGl0eSksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBlcXVhbHM6IGNvbnN0RmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ubW9kZWwsXHJcbiAgICAgICAgICAgIGNvbXB1dGVzOiB7IGdldFRva2VuUHJpY2UsIGdldFRva2VuQ3J5c3RhbFByaWNlIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAoeyBleHRlcm5hbE1vZGVsIH0pID0+ICh7XHJcbiAgICAgICAgY2FuY2VsOiBleHRlcm5hbE1vZGVsLmNyZWF0ZUNhbGxiYWNrTm9BcmdzKCdvbkNhbmNlbCcpLFxyXG4gICAgICAgIGJhY2s6IGV4dGVybmFsTW9kZWwuY3JlYXRlQ2FsbGJhY2tOb0FyZ3MoJ29uQmFjaycpLFxyXG4gICAgICAgIGJ1eTogZXh0ZXJuYWxNb2RlbC5jcmVhdGVDYWxsYmFjayhcclxuICAgICAgICAgICAgKHRva2VuczogbnVtYmVyLCBjdXJyZW5jeVR5cGU6IEN1cnJlbmN5VHlwZSkgPT4gKHsgdG9rZW5zLCBjdXJyZW5jeVR5cGUgfSksXHJcbiAgICAgICAgICAgICdvbkJ1eScsXHJcbiAgICAgICAgKSxcclxuICAgIH0pLFxyXG4pO1xyXG4iLCJleHBvcnQgZW51bSBUb2dnbGVUeXBlIHtcclxuICAgIEdvbGQgPSAnZ29sZCcsXHJcbiAgICBDcnlzdGFsID0gJ2NyeXN0YWwnLFxyXG59XHJcbiIsImltcG9ydCAnbGliL21vdXNlLXNlbGVjdGlvbi5qcyc7XG5cbmltcG9ydCB7IHVzZUxheW91dFJlYWR5IH0gZnJvbSAnbGliL2hvb2tzL3VzZUxheW91dFJlYWR5JztcbmltcG9ydCB7IEtFWV9DT0RFUyB9IGZyb20gJ2xpYi9rZXljb2Rlcyc7XG5pbXBvcnQgUmVhY3QsIHsgSW5wdXRIVE1MQXR0cmlidXRlcywgS2V5Ym9hcmRFdmVudCwgbWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgSW5wdXRLZXlib2FyZEV2ZW50ID0gS2V5Ym9hcmRFdmVudCAmIHtcbiAgICBjdXJyZW50VGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50O1xufTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+ICYge1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIG9uS2V5RG93bjogKGV2ZW50OiBJbnB1dEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBUZXh0SW5wdXRDb21wb25lbnQgPSAoeyB2YWx1ZSwgY2xhc3NOYW1lLCBhdXRvRm9jdXMsIG9uS2V5RG93biwgLi4ucmVzdCB9OiBQcm9wcykgPT4ge1xuICAgIGxldCBpbnB1dFJlZjogSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBbc2hvdWxkTW92ZUN1cnNvclRvRW5kLCBzZXRTaG91bGRNb3ZlQ3Vyc29yVG9FbmRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBzZXRJbnB1dFJlZiA9IChyZWY6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgICAgaW5wdXRSZWYgPSByZWY7XG4gICAgICAgICAgICBzaG91bGRNb3ZlQ3Vyc29yVG9FbmQgJiYgcmVmLnNldFNlbGVjdGlvblJhbmdlKHJlZi52YWx1ZS5sZW5ndGgsIHJlZi52YWx1ZS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHVzZUxheW91dFJlYWR5KCgpID0+IHtcbiAgICAgICAgaW5wdXRSZWYuZm9jdXMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IElucHV0S2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyVGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCBjdXJyVmFsdWVMZW5ndGggPSBjdXJyVGFyZ2V0LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY3VyclNlbGVjdGlvbiA9IGN1cnJUYXJnZXQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcbiAgICAgICAgc2V0U2hvdWxkTW92ZUN1cnNvclRvRW5kKGN1cnJTZWxlY3Rpb24gPT09IGN1cnJWYWx1ZUxlbmd0aCAmJiBldmVudC53aGljaCAhPT0gS0VZX0NPREVTLkRFTEVURSk7XG5cbiAgICAgICAgaWYgKChldmVudC53aGljaCA9PT0gS0VZX0NPREVTLkRFTEVURSB8fCBldmVudC53aGljaCA9PT0gS0VZX0NPREVTLkJBQ0tTUEFDRSkgJiYgY3VyclZhbHVlTGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyVGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKGN1cnJWYWx1ZUxlbmd0aCwgY3VyclZhbHVlTGVuZ3RoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLRVlfQ09ERVMuRVNDQVBFICYmIGlucHV0UmVmICYmIGF1dG9Gb2N1cykge1xuICAgICAgICAgICAgaW5wdXRSZWYuYmx1cigpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25LZXlEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtzZXRJbnB1dFJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IHZhbHVlPXt2YWx1ZX0gb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufSB7Li4ucmVzdH0gLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFRleHRJbnB1dCA9IG1lbW8oVGV4dElucHV0Q29tcG9uZW50KTtcbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZVNjYWxlU3RhdGUgfSBmcm9tICdsaWIvaG9va3MvdXNlU2NhbGVTdGF0ZSc7XG5pbXBvcnQgeyBLRVlfQ09ERVMgfSBmcm9tICdsaWIva2V5Y29kZXMnO1xuaW1wb3J0IHsgcGxheVNvdW5kIH0gZnJvbSAnbGliL3NvdW5kJztcbmltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgS2V5Ym9hcmRFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgV2hlZWxFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi9UZXh0SW5wdXQvVGV4dElucHV0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub2tlbnNTdGVwcGVyLmNzcyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0ge1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgbWluVmFsdWU6IG51bWJlcjtcbiAgICBtYXhWYWx1ZTogbnVtYmVyO1xuICAgIGljb25QYXRoPzogc3RyaW5nO1xuICAgIGljb25TdHlsZXM/OiBzdHJpbmc7XG4gICAgaGFuZGxlVG9rZW5DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGhhbmRsZVRva2VuSW5jcmVhc2U6ICgpID0+IHZvaWQ7XG4gICAgaGFuZGxlVG9rZW5EZWNyZWFzZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IFNPVU5EX0NMSUNLID0gJ3BsYXknO1xuY29uc3QgU09VTkRfSE9WRVIgPSAnaGlnaGxpZ2h0JztcbmNvbnN0IERJR0lUU19SRUdFWFAgPSAvXFxkKy87XG5jb25zdCBYMl9TQ0FMRSA9IDI7XG5cbmNvbnN0IGhhbmRsZUJ0bk1vdXNlRW50ZXIgPSAoKSA9PiBwbGF5U291bmQoU09VTkRfSE9WRVIpO1xuXG5leHBvcnQgY29uc3QgVG9rZW5zU3RlcHBlciA9ICh7XG4gICAgdmFsdWUsXG4gICAgbWluVmFsdWUsXG4gICAgbWF4VmFsdWUsXG4gICAgaWNvblBhdGgsXG4gICAgaWNvblN0eWxlcyxcbiAgICBoYW5kbGVUb2tlbkNoYW5nZSxcbiAgICBoYW5kbGVUb2tlbkluY3JlYXNlLFxuICAgIGhhbmRsZVRva2VuRGVjcmVhc2UsXG59OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNhbkFkZCA9IHZhbHVlIDwgbWF4VmFsdWU7XG4gICAgY29uc3QgY2FuU3VidHJhY3QgPSB2YWx1ZSA+IG1pblZhbHVlO1xuXG4gICAgY29uc3Qgc2NhbGUgPSB1c2VTY2FsZVN0YXRlKCk7XG4gICAgY29uc3QgaXNYMlNjYWxlID0gc2NhbGUgPT09IFgyX1NDQUxFO1xuXG4gICAgY29uc3QgYmFzZVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBLRVlfQ09ERVMuQVJST1dfVVAgJiYgY2FuQWRkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVG9rZW5JbmNyZWFzZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC53aGljaCA9PT0gS0VZX0NPREVTLkFSUk9XX0RPV04gJiYgY2FuU3VidHJhY3QpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUb2tlbkRlY3JlYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtjYW5BZGQsIGNhblN1YnRyYWN0LCBoYW5kbGVUb2tlbkRlY3JlYXNlLCBoYW5kbGVUb2tlbkluY3JlYXNlXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGV2ZW50OiBDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhhbmRsZVRva2VuQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VyclZhbHVlID0gTnVtYmVyKERJR0lUU19SRUdFWFAuZXhlYygoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk/LlswXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyclZhbHVlID4gbWF4VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9rZW5DaGFuZ2UobWF4VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyclZhbHVlIDw9IG1pblZhbHVlIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKGN1cnJWYWx1ZSkgfHwgIWN1cnJWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVUb2tlbkNoYW5nZShtaW5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVG9rZW5DaGFuZ2UoY3VyclZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtoYW5kbGVUb2tlbkNoYW5nZSwgbWF4VmFsdWUsIG1pblZhbHVlXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlTW91c2VXaGVlbCA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZXZlbnQ6IFdoZWVsRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVG9rZW5JbmNyZWFzZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUb2tlbkRlY3JlYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtoYW5kbGVUb2tlbkRlY3JlYXNlLCBoYW5kbGVUb2tlbkluY3JlYXNlXSxcbiAgICApO1xuXG4gICAgY29uc3QgaGFuZGxlQWRkQnRuQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjYW5BZGQpIHtcbiAgICAgICAgICAgIHBsYXlTb3VuZChTT1VORF9DTElDSyk7XG4gICAgICAgICAgICBoYW5kbGVUb2tlbkluY3JlYXNlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VidHJhY3RCdG5DbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNhblN1YnRyYWN0KSB7XG4gICAgICAgICAgICBwbGF5U291bmQoU09VTkRfQ0xJQ0spO1xuICAgICAgICAgICAgaGFuZGxlVG9rZW5EZWNyZWFzZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtiYXNlUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5iYXNlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVuY3l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gYmFzZVJlZi5jdXJyZW50Py5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5iYXNlX19mb2N1c2VkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IGJhc2VSZWYuY3VycmVudD8uY2xhc3NMaXN0LmFkZChzdHlsZXMuYmFzZV9fZm9jdXNlZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbldoZWVsPXtoYW5kbGVNb3VzZVdoZWVsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aWNvblBhdGggJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY3VycmVuY3lJY29uLCBpY29uU3R5bGVzKX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aWNvblBhdGh9KWAgfX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2xzfT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuYnRuLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmJ0bkluY3JlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzWDJTY2FsZSAmJiBzdHlsZXMuYnRuX19zY2FsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAhY2FuQWRkICYmIHN0eWxlcy5idG5JbmNyZW1lbnRfX2Rpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJ0bk1vdXNlRW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZEJ0bkNsaWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmJ0bixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5idG5EZWNyZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1gyU2NhbGUgJiYgc3R5bGVzLmJ0bl9fc2NhbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgIWNhblN1YnRyYWN0ICYmIHN0eWxlcy5idG5EZWNyZW1lbnRfX2Rpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUJ0bk1vdXNlRW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1YnRyYWN0QnRuQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibXRfX1hTXCI6XCJCb3hfbXRfX1hTXzBjXCIsXCJtdF9fU01cIjpcIkJveF9tdF9fU01fZWJcIixcIm10X19TTXBcIjpcIkJveF9tdF9fU01wX2NmXCIsXCJtdF9fTURcIjpcIkJveF9tdF9fTURfMjVcIixcIm10X19NRHBcIjpcIkJveF9tdF9fTURwXzQ5XCIsXCJtdF9fTEdcIjpcIkJveF9tdF9fTEdfZThcIixcIm10X19YTFwiOlwiQm94X210X19YTF84M1wiLFwibXJfX1hTXCI6XCJCb3hfbXJfX1hTXzdjXCIsXCJtcl9fU01cIjpcIkJveF9tcl9fU01fMDhcIixcIm1yX19TTXBcIjpcIkJveF9tcl9fU01wXzA2XCIsXCJtcl9fTURcIjpcIkJveF9tcl9fTURfNGFcIixcIm1yX19NRHBcIjpcIkJveF9tcl9fTURwX2I2XCIsXCJtcl9fTEdcIjpcIkJveF9tcl9fTEdfZDBcIixcIm1yX19YTFwiOlwiQm94X21yX19YTF9kYlwiLFwibWJfX1hTXCI6XCJCb3hfbWJfX1hTX2JiXCIsXCJtYl9fU01cIjpcIkJveF9tYl9fU01fODNcIixcIm1iX19TTXBcIjpcIkJveF9tYl9fU01wXzA0XCIsXCJtYl9fTURcIjpcIkJveF9tYl9fTURfZWRcIixcIm1iX19NRHBcIjpcIkJveF9tYl9fTURwXzY1XCIsXCJtYl9fTEdcIjpcIkJveF9tYl9fTEdfYzhcIixcIm1iX19YTFwiOlwiQm94X21iX19YTF9mOFwiLFwibWxfX1hTXCI6XCJCb3hfbWxfX1hTXzhhXCIsXCJtbF9fU01cIjpcIkJveF9tbF9fU01fZTZcIixcIm1sX19TTXBcIjpcIkJveF9tbF9fU01wX2ZiXCIsXCJtbF9fTURcIjpcIkJveF9tbF9fTURfMmJcIixcIm1sX19NRHBcIjpcIkJveF9tbF9fTURwX2M3XCIsXCJtbF9fTEdcIjpcIkJveF9tbF9fTEdfMzlcIixcIm1sX19YTFwiOlwiQm94X21sX19YTF80YVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIkNCdXR0b25fYmFzZV80MFwiLFwiYmFzZV9fbWFpblwiOlwiQ0J1dHRvbl9iYXNlX19tYWluXzQyXCIsXCJiYXNlX19wcmltYXJ5XCI6XCJDQnV0dG9uX2Jhc2VfX3ByaW1hcnlfN2ZcIixcImJhc2VfX3ByaW1hcnlHcmVlblwiOlwiQ0J1dHRvbl9iYXNlX19wcmltYXJ5R3JlZW5fNmZcIixcImJhc2VfX3ByaW1hcnlSZWRcIjpcIkNCdXR0b25fYmFzZV9fcHJpbWFyeVJlZF9lY1wiLFwiYmFzZV9fc2Vjb25kYXJ5XCI6XCJDQnV0dG9uX2Jhc2VfX3NlY29uZGFyeV81MFwiLFwiYmFzZV9fZ2hvc3RcIjpcIkNCdXR0b25fYmFzZV9fZ2hvc3RfZWRcIixcImJhc2VfX2V4dHJhU21hbGxcIjpcIkNCdXR0b25fYmFzZV9fZXh0cmFTbWFsbF8yN1wiLFwiYmFzZV9fc21hbGxcIjpcIkNCdXR0b25fYmFzZV9fc21hbGxfZGZcIixcImJhc2VfX21lZGl1bVwiOlwiQ0J1dHRvbl9iYXNlX19tZWRpdW1fNzRcIixcImJhc2VfX2Rpc2FibGVkXCI6XCJDQnV0dG9uX2Jhc2VfX2Rpc2FibGVkX2Q5XCIsXCJiYWNrXCI6XCJDQnV0dG9uX2JhY2tfZTVcIixcInRleHR1cmVcIjpcIkNCdXR0b25fdGV4dHVyZV9mZVwiLFwic3RhdGVcIjpcIkNCdXR0b25fc3RhdGVfMTFcIixcImJhc2VfX2ZvY3VzXCI6XCJDQnV0dG9uX2Jhc2VfX2ZvY3VzXzgzXCIsXCJzdGF0ZUhpZ2hsaWdodEhvdmVyXCI6XCJDQnV0dG9uX3N0YXRlSGlnaGxpZ2h0SG92ZXJfZmZcIixcInN0YXRlSGlnaGxpZ2h0QWN0aXZlXCI6XCJDQnV0dG9uX3N0YXRlSGlnaGxpZ2h0QWN0aXZlXzM1XCIsXCJzdGF0ZURpc2FibGVkXCI6XCJDQnV0dG9uX3N0YXRlRGlzYWJsZWRfNTRcIixcImJhc2VfX2ZpcnN0SG92ZXJcIjpcIkNCdXR0b25fYmFzZV9fZmlyc3RIb3Zlcl9kNVwiLFwiYmFzZV9faGlnaGxpZ2h0QWN0aXZlXCI6XCJDQnV0dG9uX2Jhc2VfX2hpZ2hsaWdodEFjdGl2ZV9iMlwiLFwiY29udGVudFwiOlwiQ0J1dHRvbl9jb250ZW50X2NjXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiQ3VycmVuY3lfYmFzZV81N1wiLFwiaWNvblwiOlwiQ3VycmVuY3lfaWNvbl9jNVwiLFwiYmFzZV9fc21hbGxcIjpcIkN1cnJlbmN5X2Jhc2VfX3NtYWxsX2FmXCIsXCJiYXNlX19iaWdcIjpcIkN1cnJlbmN5X2Jhc2VfX2JpZ19iY1wiLFwiYmFzZV9fbGFyZ2VcIjpcIkN1cnJlbmN5X2Jhc2VfX2xhcmdlXzY1XCIsXCJiYXNlX19leHRyYUxhcmdlXCI6XCJDdXJyZW5jeV9iYXNlX19leHRyYUxhcmdlXzRkXCIsXCJpY29uX19jcmVkaXRzLXNtYWxsXCI6XCJDdXJyZW5jeV9pY29uX19jcmVkaXRzLXNtYWxsXzliXCIsXCJpY29uX19jcmVkaXRzLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9fY3JlZGl0cy1iaWdfOTZcIixcImljb25fX2NyZWRpdHMtbGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2NyZWRpdHMtbGFyZ2VfYWNcIixcImljb25fX2NyZWRpdHMtZXh0cmFMYXJnZVwiOlwiQ3VycmVuY3lfaWNvbl9fY3JlZGl0cy1leHRyYUxhcmdlXzE2XCIsXCJpY29uX19nb2xkLXNtYWxsXCI6XCJDdXJyZW5jeV9pY29uX19nb2xkLXNtYWxsXzg2XCIsXCJpY29uX19nb2xkLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9fZ29sZC1iaWdfMTVcIixcImljb25fX2dvbGQtbGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2dvbGQtbGFyZ2VfMzZcIixcImljb25fX2dvbGQtZXh0cmFMYXJnZVwiOlwiQ3VycmVuY3lfaWNvbl9fZ29sZC1leHRyYUxhcmdlX2EwXCIsXCJpY29uX19jcnlzdGFsLXNtYWxsXCI6XCJDdXJyZW5jeV9pY29uX19jcnlzdGFsLXNtYWxsXzI3XCIsXCJpY29uX19jcnlzdGFsLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9fY3J5c3RhbC1iaWdfY2RcIixcImljb25fX2NyeXN0YWwtbGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2NyeXN0YWwtbGFyZ2VfZDNcIixcImljb25fX2NyeXN0YWwtZXh0cmFMYXJnZVwiOlwiQ3VycmVuY3lfaWNvbl9fY3J5c3RhbC1leHRyYUxhcmdlXzA5XCIsXCJpY29uX194cC1zbWFsbFwiOlwiQ3VycmVuY3lfaWNvbl9feHAtc21hbGxfYTdcIixcImljb25fX3hwLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9feHAtYmlnXzk3XCIsXCJpY29uX194cC1sYXJnZVwiOlwiQ3VycmVuY3lfaWNvbl9feHAtbGFyZ2VfNmJcIixcImljb25fX3hwLWV4dHJhTGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX3hwLWV4dHJhTGFyZ2VfNjdcIixcImljb25fX2ZyZWVYUC1zbWFsbFwiOlwiQ3VycmVuY3lfaWNvbl9fZnJlZVhQLXNtYWxsX2NhXCIsXCJpY29uX19mcmVlWFAtYmlnXCI6XCJDdXJyZW5jeV9pY29uX19mcmVlWFAtYmlnXzIxXCIsXCJpY29uX19mcmVlWFAtbGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2ZyZWVYUC1sYXJnZV9jOFwiLFwiaWNvbl9fZnJlZVhQLWV4dHJhTGFyZ2VcIjpcIkN1cnJlbmN5X2ljb25fX2ZyZWVYUC1leHRyYUxhcmdlXzU4XCIsXCJpY29uX19lcXVpcENvaW4tc21hbGxcIjpcIkN1cnJlbmN5X2ljb25fX2VxdWlwQ29pbi1zbWFsbF8zMlwiLFwiaWNvbl9fZXF1aXBDb2luLWJpZ1wiOlwiQ3VycmVuY3lfaWNvbl9fZXF1aXBDb2luLWJpZ183OVwiLFwiaWNvbl9fZXF1aXBDb2luLWxhcmdlXCI6XCJDdXJyZW5jeV9pY29uX19lcXVpcENvaW4tbGFyZ2VfMmNcIixcImljb25fX2VxdWlwQ29pbi1leHRyYUxhcmdlXCI6XCJDdXJyZW5jeV9pY29uX19lcXVpcENvaW4tZXh0cmFMYXJnZV84YVwiLFwidmFsdWVcIjpcIkN1cnJlbmN5X3ZhbHVlX2UxXCIsXCJ2YWx1ZV9fZnJlZVhQXCI6XCJDdXJyZW5jeV92YWx1ZV9fZnJlZVhQX2NiXCIsXCJ2YWx1ZV9fY3JlZGl0c1wiOlwiQ3VycmVuY3lfdmFsdWVfX2NyZWRpdHNfNzZcIixcInZhbHVlX19nb2xkXCI6XCJDdXJyZW5jeV92YWx1ZV9fZ29sZF9kZFwiLFwidmFsdWVfX3hwXCI6XCJDdXJyZW5jeV92YWx1ZV9feHBfYjBcIixcInZhbHVlX19jcnlzdGFsXCI6XCJDdXJyZW5jeV92YWx1ZV9fY3J5c3RhbF8xOVwiLFwidmFsdWVfX2VxdWlwQ29pblwiOlwiQ3VycmVuY3lfdmFsdWVfX2VxdWlwQ29pbl9kMFwiLFwidmFsdWVfX25vdEVub3VnaFwiOlwiQ3VycmVuY3lfdmFsdWVfX25vdEVub3VnaF81NlwiLFwic3RvY2tcIjpcIkN1cnJlbmN5X3N0b2NrXzg3XCIsXCJzdG9ja19faW5kZW50XCI6XCJDdXJyZW5jeV9zdG9ja19faW5kZW50X2ExXCIsXCJzdG9ja19faW50ZXJhY3RpdmVcIjpcIkN1cnJlbmN5X3N0b2NrX19pbnRlcmFjdGl2ZV85M1wiLFwic3RvY2tCYWNrZ3JvdW5kXCI6XCJDdXJyZW5jeV9zdG9ja0JhY2tncm91bmRfODJcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJGb3JtYXRUZXh0X2Jhc2VfZDBcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJUZXh0QnV0dG9uX2Jhc2VfYjZcIixcImJhc2VfX3JpZ2h0XCI6XCJUZXh0QnV0dG9uX2Jhc2VfX3JpZ2h0XzM5XCIsXCJpY29uXCI6XCJUZXh0QnV0dG9uX2ljb25fMTdcIixcImljb25fX2JhY2tcIjpcIlRleHRCdXR0b25faWNvbl9fYmFja180M1wiLFwiaWNvbl9fZm9yd2FyZFwiOlwiVGV4dEJ1dHRvbl9pY29uX19mb3J3YXJkXzU5XCIsXCJpY29uX19jbG9zZVwiOlwiVGV4dEJ1dHRvbl9pY29uX19jbG9zZV81M1wiLFwiaWNvbl9faW5mb1wiOlwiVGV4dEJ1dHRvbl9pY29uX19pbmZvXzMzXCIsXCJnbG93XCI6XCJUZXh0QnV0dG9uX2dsb3dfYTRcIixcImNhcHRpb25cIjpcIlRleHRCdXR0b25fY2FwdGlvbl84MlwiLFwiY2FwdGlvbl9fYmFja1wiOlwiVGV4dEJ1dHRvbl9jYXB0aW9uX19iYWNrX2I5XCIsXCJjYXB0aW9uX19mb3J3YXJkXCI6XCJUZXh0QnV0dG9uX2NhcHRpb25fX2ZvcndhcmRfNGVcIixcImNhcHRpb25fX2Nsb3NlXCI6XCJUZXh0QnV0dG9uX2NhcHRpb25fX2Nsb3NlXzM2XCIsXCJjYXB0aW9uX19pbmZvXCI6XCJUZXh0QnV0dG9uX2NhcHRpb25fX2luZm9fMjNcIixcImdvdG9cIjpcIlRleHRCdXR0b25fZ290b19lN1wiLFwiYmFzZV9fbGVmdFwiOlwiVGV4dEJ1dHRvbl9iYXNlX19sZWZ0X2ZmXCIsXCJzaGluZVwiOlwiVGV4dEJ1dHRvbl9zaGluZV9lMlwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhcmFncmFwaC1QMTBcIjpcIlRleHRfcGFyYWdyYXBoLVAxMF8yY1wiLFwicGFyYWdyYXBoLVAxMlwiOlwiVGV4dF9wYXJhZ3JhcGgtUDEyXzIyXCIsXCJwYXJhZ3JhcGgtUDE0XCI6XCJUZXh0X3BhcmFncmFwaC1QMTRfYTdcIixcInBhcmFncmFwaC1QMTZcIjpcIlRleHRfcGFyYWdyYXBoLVAxNl85MFwiLFwicGFyYWdyYXBoLVAxOFwiOlwiVGV4dF9wYXJhZ3JhcGgtUDE4XzUwXCIsXCJwYXJhZ3JhcGgtUDI0XCI6XCJUZXh0X3BhcmFncmFwaC1QMjRfMzNcIixcImhlYWRpbmctSDE0XCI6XCJUZXh0X2hlYWRpbmctSDE0XzhiXCIsXCJoZWFkaW5nLUgxNVwiOlwiVGV4dF9oZWFkaW5nLUgxNV85ZVwiLFwiaGVhZGluZy1IMThcIjpcIlRleHRfaGVhZGluZy1IMThfYjdcIixcImhlYWRpbmctSDIwUlwiOlwiVGV4dF9oZWFkaW5nLUgyMFJfZjZcIixcImhlYWRpbmctSDIyXCI6XCJUZXh0X2hlYWRpbmctSDIyXzI3XCIsXCJoZWFkaW5nLUgyNFJcIjpcIlRleHRfaGVhZGluZy1IMjRSX2JlXCIsXCJoZWFkaW5nLUgyNFwiOlwiVGV4dF9oZWFkaW5nLUgyNF8wY1wiLFwiaGVhZGluZy1IMjhcIjpcIlRleHRfaGVhZGluZy1IMjhfNzhcIixcImhlYWRpbmctSDM2XCI6XCJUZXh0X2hlYWRpbmctSDM2XzMyXCIsXCJoZWFkaW5nLUg1NlwiOlwiVGV4dF9oZWFkaW5nLUg1Nl9jM1wiLFwiaGVhZGluZy1INzNcIjpcIlRleHRfaGVhZGluZy1INzNfOGZcIixcImhlYWRpbmctSDE0NFwiOlwiVGV4dF9oZWFkaW5nLUgxNDRfYTlcIixcIkJMQUNLX1JFQUxcIjpcIlRleHRfQkxBQ0tfUkVBTF8zMFwiLFwiV0hJVEVfUkVBTFwiOlwiVGV4dF9XSElURV9SRUFMX2JjXCIsXCJXSElURVwiOlwiVGV4dF9XSElURV82MlwiLFwiV0hJVEVfT1JBTkdFXCI6XCJUZXh0X1dISVRFX09SQU5HRV81NFwiLFwiV0hJVEVfU1BBTklTSFwiOlwiVGV4dF9XSElURV9TUEFOSVNIX2RmXCIsXCJQQVJcIjpcIlRleHRfUEFSXzE1XCIsXCJQQVJfU0VDT05EQVJZXCI6XCJUZXh0X1BBUl9TRUNPTkRBUllfNWRcIixcIlBBUl9URVJUSUFSWVwiOlwiVGV4dF9QQVJfVEVSVElBUllfYzlcIixcIklORk9fUkVEXCI6XCJUZXh0X0lORk9fUkVEXzMwXCIsXCJSRURcIjpcIlRleHRfUkVEXzY2XCIsXCJSRURfREFSS1wiOlwiVGV4dF9SRURfREFSS19kOFwiLFwiWUVMTE9XXCI6XCJUZXh0X1lFTExPV19lZFwiLFwiT1JBTkdFXCI6XCJUZXh0X09SQU5HRV9iZVwiLFwiQ1JFQU1cIjpcIlRleHRfQ1JFQU1fNTdcIixcIkJST1dOXCI6XCJUZXh0X0JST1dOXzE4XCIsXCJHUkVFTl9CUklHSFRcIjpcIlRleHRfR1JFRU5fQlJJR0hUXzNmXCIsXCJHUkVFTlwiOlwiVGV4dF9HUkVFTl9lM1wiLFwiR1JFRU5fREFSS1wiOlwiVGV4dF9HUkVFTl9EQVJLX2YxXCIsXCJCTFVFX0JPT1NURVJcIjpcIlRleHRfQkxVRV9CT09TVEVSXzIxXCIsXCJCTFVFX1RFQU1LSUxMRVJcIjpcIlRleHRfQkxVRV9URUFNS0lMTEVSX2FiXCIsXCJDUkVEXCI6XCJUZXh0X0NSRURfZjdcIixcIkdPTERcIjpcIlRleHRfR09MRF8yOFwiLFwiQk9ORFwiOlwiVGV4dF9CT05EX2JlXCIsXCJQUk9NXCI6XCJUZXh0X1BST01fNjVcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJBcHBfYmFzZV80ZlwiLFwiY2xvc2VcIjpcIkFwcF9jbG9zZV9hYlwiLFwiY29udGVudFwiOlwiQXBwX2NvbnRlbnRfOTdcIixcImhlYWRlclwiOlwiQXBwX2hlYWRlcl8xZVwiLFwicHJvZHVjdEluZm9cIjpcIkFwcF9wcm9kdWN0SW5mb183NFwiLFwiZGVzY3JpcHRpb25cIjpcIkFwcF9kZXNjcmlwdGlvbl9mNlwiLFwidG9rZW5JbWFnZVwiOlwiQXBwX3Rva2VuSW1hZ2VfODdcIixcImZvb3RlclwiOlwiQXBwX2Zvb3Rlcl9lN1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIkRlc2NyaXB0aW9uX2Jhc2VfMWRcIixcInRpdGxlXCI6XCJEZXNjcmlwdGlvbl90aXRsZV9iNlwiLFwiZGVzY3JpcHRpb25cIjpcIkRlc2NyaXB0aW9uX2Rlc2NyaXB0aW9uX2FlXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiYmFzZVwiOlwiRm9vdGVyX2Jhc2VfYzBcIixcImxpbmVcIjpcIkZvb3Rlcl9saW5lX2ZjXCIsXCJsaW5lX19maXJzdFwiOlwiRm9vdGVyX2xpbmVfX2ZpcnN0XzIxXCIsXCJsaW5lX19zZWNvbmRcIjpcIkZvb3Rlcl9saW5lX19zZWNvbmRfNzNcIixcImJnXCI6XCJGb290ZXJfYmdfNzhcIixcImNvbnRlbnRcIjpcIkZvb3Rlcl9jb250ZW50X2IzXCIsXCJwcmljZVdyYXBwZXJcIjpcIkZvb3Rlcl9wcmljZVdyYXBwZXJfNmJcIixcInByaWNlTGluZVwiOlwiRm9vdGVyX3ByaWNlTGluZV9iNFwiLFwidG9rZW5zQXZhaWxhYmxlXCI6XCJGb290ZXJfdG9rZW5zQXZhaWxhYmxlX2Y3XCIsXCJ0b2tlbnNBdmFpbGFibGVfX3Rva2Vuc1wiOlwiRm9vdGVyX3Rva2Vuc0F2YWlsYWJsZV9fdG9rZW5zX2JkXCIsXCJmaW5hbFByaWNlXCI6XCJGb290ZXJfZmluYWxQcmljZV80MVwiLFwicHJvZHVjdENvdW50ZXJcIjpcIkZvb3Rlcl9wcm9kdWN0Q291bnRlcl85YVwiLFwiYnV5QnV0dG9uXCI6XCJGb290ZXJfYnV5QnV0dG9uX2ZlXCIsXCJidXR0b25UZXh0XCI6XCJGb290ZXJfYnV0dG9uVGV4dF85YVwiLFwid2FybmluZ1wiOlwiRm9vdGVyX3dhcm5pbmdfNzZcIixcIndhcm5pbmdfX2dsb3dcIjpcIkZvb3Rlcl93YXJuaW5nX19nbG93X2UxXCIsXCJ3YXJuaW5nX19pY29uXCI6XCJGb290ZXJfd2FybmluZ19faWNvbl8xOVwiLFwidG9nZ2xlXCI6XCJGb290ZXJfdG9nZ2xlX2U4XCIsXCJ0b2dnbGVfX2NyeXN0YWxcIjpcIkZvb3Rlcl90b2dnbGVfX2NyeXN0YWxfNDNcIixcImFycm93XCI6XCJGb290ZXJfYXJyb3dfZjVcIixcImFycm93X19sYXN0XCI6XCJGb290ZXJfYXJyb3dfX2xhc3RfYTZcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJIZWFkZXJfYmFzZV8yOVwiLFwicHJvZHVjdFRpdGxlV3JhcHBlclwiOlwiSGVhZGVyX3Byb2R1Y3RUaXRsZVdyYXBwZXJfMTlcIixcInRpdGxlXCI6XCJIZWFkZXJfdGl0bGVfNDJcIixcInRva2VuQ291bnRcIjpcIkhlYWRlcl90b2tlbkNvdW50XzBmXCIsXCJ0b2tlbkNvdW50X191bmRlclRvb2x0aXBcIjpcIkhlYWRlcl90b2tlbkNvdW50X191bmRlclRvb2x0aXBfZjFcIixcInRva2VuQ291bnRfX3RleHRcIjpcIkhlYWRlcl90b2tlbkNvdW50X190ZXh0X2E4XCIsXCJ0b2tlbkNvdW50X19jb3VudFwiOlwiSGVhZGVyX3Rva2VuQ291bnRfX2NvdW50XzhlXCIsXCJ0b2tlbkNvdW50X19pY29uXCI6XCJIZWFkZXJfdG9rZW5Db3VudF9faWNvbl82N1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImJhc2VcIjpcIlRvZ2dsZUJ1dHRvbl9iYXNlXzNhXCIsXCJiZ0RlZmF1bHRcIjpcIlRvZ2dsZUJ1dHRvbl9iZ0RlZmF1bHRfZTJcIixcImJnQWN0aXZlXCI6XCJUb2dnbGVCdXR0b25fYmdBY3RpdmVfMGNcIixcImJnQWN0aXZlX192aXNpYmxlXCI6XCJUb2dnbGVCdXR0b25fYmdBY3RpdmVfX3Zpc2libGVfMGFcIixcImljb25cIjpcIlRvZ2dsZUJ1dHRvbl9pY29uX2YwXCIsXCJpY29uX19nb2xkXCI6XCJUb2dnbGVCdXR0b25faWNvbl9fZ29sZF84MlwiLFwiaWNvbl9fY3J5c3RhbFwiOlwiVG9nZ2xlQnV0dG9uX2ljb25fX2NyeXN0YWxfNDVcIixcImhvdmVyXCI6XCJUb2dnbGVCdXR0b25faG92ZXJfMmRcIixcImhvdmVyX19ob3ZlcmVkXCI6XCJUb2dnbGVCdXR0b25faG92ZXJfX2hvdmVyZWRfMDdcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJiYXNlXCI6XCJUb2tlbnNTdGVwcGVyX2Jhc2VfOTVcIixcImJhc2VfX2ZvY3VzZWRcIjpcIlRva2Vuc1N0ZXBwZXJfYmFzZV9fZm9jdXNlZF8xZlwiLFwiY3VycmVuY3lcIjpcIlRva2Vuc1N0ZXBwZXJfY3VycmVuY3lfNzRcIixcImlucHV0V3JhcHBlclwiOlwiVG9rZW5zU3RlcHBlcl9pbnB1dFdyYXBwZXJfYjFcIixcImlucHV0XCI6XCJUb2tlbnNTdGVwcGVyX2lucHV0XzAzXCIsXCJpbnB1dF9fZGlzYWJsZWRcIjpcIlRva2Vuc1N0ZXBwZXJfaW5wdXRfX2Rpc2FibGVkXzUyXCIsXCJjdXJyZW5jeUljb25cIjpcIlRva2Vuc1N0ZXBwZXJfY3VycmVuY3lJY29uXzdhXCIsXCJjb250cm9sc1wiOlwiVG9rZW5zU3RlcHBlcl9jb250cm9sc19iZlwiLFwiYnRuXCI6XCJUb2tlbnNTdGVwcGVyX2J0bl9mMlwiLFwiYnRuX19zY2FsZWRcIjpcIlRva2Vuc1N0ZXBwZXJfYnRuX19zY2FsZWRfOWFcIixcImJ0bkluY3JlbWVudFwiOlwiVG9rZW5zU3RlcHBlcl9idG5JbmNyZW1lbnRfZDJcIixcImJ0bkluY3JlbWVudF9fZGlzYWJsZWRcIjpcIlRva2Vuc1N0ZXBwZXJfYnRuSW5jcmVtZW50X19kaXNhYmxlZF83MVwiLFwiYnRuRGVjcmVtZW50XCI6XCJUb2tlbnNTdGVwcGVyX2J0bkRlY3JlbWVudF8zZFwiLFwiYnRuRGVjcmVtZW50X19kaXNhYmxlZFwiOlwiVG9rZW5zU3RlcHBlcl9idG5EZWNyZW1lbnRfX2Rpc2FibGVkXzgwXCJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsb2JieS9mZWF0dXJlL0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3L0FybW9yeVlhcmRQb3N0UHJvZ3Jlc3Npb25CdXlWaWV3XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2dhbWVmYWNlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2dhbWVmYWNlXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJsaWIvdmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuLi8uLi8uLi93b3RfZXh0L2FybW9yeV95YXJkL2d1aS9nYW1lZmFjZS9zcmMvdmlld3MvbG9iYnkvZmVhdHVyZS9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy9Bcm1vcnlZYXJkUG9zdFByb2dyZXNzaW9uQnV5Vmlldy50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwic3BhY2luZyIsImdldEFkYXB0aXZlQ29udHJvbGxlciIsIlJlYWN0IiwidXNlTWVtbyIsInN0eWxlcyIsInN0YW5kYXJkTWFyZ2lucyIsIk9iamVjdCIsImtleXMiLCJkZWZhdWx0WGxNYXJnaW5zIiwibXQiLCJtdF9fWEwiLCJtciIsIm1yX19YTCIsIm1iIiwibWJfX1hMIiwibWwiLCJtbF9fWEwiLCJkZWZhdWx0TGdNYXJnaW5zIiwibXRfX0xHIiwibXJfX0xHIiwibWJfX0xHIiwibWxfX0xHIiwiZGVmYXVsdE1kcE1hcmdpbnMiLCJtdF9fTURwIiwibXJfX01EcCIsIm1iX19NRHAiLCJtbF9fTURwIiwiZGVmYXVsdE1kTWFyZ2lucyIsIm10X19NRCIsIm1yX19NRCIsIm1iX19NRCIsIm1sX19NRCIsImRlZmF1bHRTbXBNYXJnaW5zIiwibXRfX1NNcCIsIm1yX19TTXAiLCJtYl9fU01wIiwibWxfX1NNcCIsImRlZmF1bHRTbU1hcmdpbnMiLCJtdF9fU00iLCJtcl9fU00iLCJtYl9fU00iLCJtbF9fU00iLCJkZWZhdWx0WHNNYXJnaW5zIiwibXRfX1hTIiwibXJfX1hTIiwibWJfX1hTIiwibWxfX1hTIiwiZGVmYXVsdE1hcmdpbk1hcCIsIlhMIiwiTEciLCJNRHAiLCJNRCIsIlNNcCIsIlNNIiwiWFMiLCJkZWZhdWx0TWFyZ2lucyIsIm1hcmdpbktleUxpc3QiLCJnZXRNYXJnaW5DbGFzc05hbWVzIiwibWFyZ2luTWFwIiwicmVkdWNlIiwia2V5IiwidmFsdWUiLCJjb25jYXQiLCJtYXJnaW5LZXlQcm9wZXJ0eU1hcCIsImdldE1hcmdpblN0eWxlIiwic3R5bGUiLCJwcm9wZXJ0eSIsIkJveCIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwibSIsImNvbHVtbiIsInJvdyIsImZsZXhEaXJlY3Rpb24iLCJ1bmRlZmluZWQiLCJmbGV4U3RhcnQiLCJjZW50ZXIiLCJmbGV4RW5kIiwic3BhY2VCZXR3ZWVuIiwic3BhY2VBcm91bmQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJhbGlnblNlbGYiLCJ3cmFwIiwiZmxleFdyYXAiLCJncm93Iiwic2hyaW5rIiwiZmxleCIsImNoaWxkcmVuIiwicmVzdFByb3BzIiwiY29tcHV0ZWRDbGFzc05hbWVzIiwibWFyZ2luU3R5bGUiLCJjb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsImJhc2UiLCJwbGF5U291bmQiLCJtZW1vIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkJ1dHRvblNpemUiLCJCdXR0b25UeXBlIiwiQnV0dG9uIiwic2l6ZSIsImlzRm9jdXNlZCIsInR5cGUiLCJkaXNhYmxlZCIsIm1peENsYXNzIiwic291bmRIb3ZlciIsInNvdW5kQ2xpY2siLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsImJ1dHRvbiIsImJ1dHRvbkZvY3VzIiwic2V0QnV0dG9uRm9jdXMiLCJpc0hpZ2hsaWdodEFjdGl2ZSIsInNldEhpZ2hsaWdodEFjdGl2ZSIsImlzRmlyc3RIb3ZlcmVkIiwic2V0Rmlyc3RIb3ZlcmVkIiwic2V0Rm9jdXNPbkJ1dHRvbiIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZU1vdXNlRG93bk91dHNpZGUiLCJldmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlQ2xpY2siLCJlIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVNb3VzZUxlYXZlIiwiY2xhc3NCYXNlIiwiYmFzZV9fZGlzYWJsZWQiLCJiYXNlX19mb2N1cyIsImJhc2VfX2hpZ2hsaWdodEFjdGl2ZSIsImJhc2VfX2ZpcnN0SG92ZXIiLCJjbGFzc1N0YXRlIiwic3RhdGUiLCJzdGF0ZV9fZGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnaG9zdCIsImJhY2siLCJ0ZXh0dXJlIiwic3RhdGVEaXNhYmxlZCIsInN0YXRlSGlnaGxpZ2h0SG92ZXIiLCJzdGF0ZUhpZ2hsaWdodEFjdGl2ZSIsImNvbnRlbnQiLCJSIiwic3RyaW5ncyIsInNldHRpbmdzIiwiTEFOR1VBR0VfQ09ERSIsImRlZmF1bHRQcm9wcyIsInByaW1hcnkiLCJDQnV0dG9uIiwiY3giLCJDdXJyZW5jeVR5cGUiLCJTdG9ja0JhY2tncm91bmROYW1lIiwiRm9ybWF0TnVtYmVyIiwiQ3VycmVuY3lDb21wb25lbnQiLCJpc0Rpc2NvdW50IiwiaXNJbnRlcmFjdGl2ZURpc2NvdW50IiwiaXNFbm91Z2giLCJkaXNjb3VudFZhbHVlIiwic2hvd1BsdXMiLCJzdG9ja0JhY2tncm91bmROYW1lIiwiUmVkIiwidmFsdWVDbGFzc2VzIiwidmFsdWVfX25vdEVub3VnaCIsImljb25DbGFzc2VzIiwiaWNvbiIsImRpc2NvdW50Q2xhc3NlcyIsInN0b2NrIiwic3RvY2tfX2luZGVudCIsInN0b2NrX19pbnRlcmFjdGl2ZSIsInBsdXMiLCJiYXNlQ2xhc3NlcyIsImdvbGQiLCJzdG9ja0JhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJCb29sZWFuIiwiQ3VycmVuY3kiLCJDdXJyZW5jeVNpemUiLCJTeXN0ZW1Mb2NhbGUiLCJOdW1iZXJGb3JtYXRUeXBlIiwiUHVyZUNvbXBvbmVudCIsInJlbmRlciIsImZvcm1hdCIsInByb3BzIiwiR09MRCIsIklOVEVHUkFMIiwibnVtYmVyRm9ybWF0IiwiZ2V0TnVtYmVyRm9ybWF0IiwiRnJhZ21lbnQiLCJmb3JtYXRTdHJpbmciLCJBbGlnbm1lbnQiLCJGb3JtYXRUZXh0IiwiYmluZGluZyIsInRleHQiLCJjbGFzc01peCIsImFsaWdubWVudCIsImxlZnQiLCJjb25zb2xlIiwiZXJyb3IiLCJzcGxpdCIsIm1hcCIsInRleHRMaW5lIiwibGluZUlkIiwid29yZElkIiwiZW52IiwiY3JlYXRlQ29udGV4dCIsIkJSRUFLUE9JTlRTIiwiZ2V0U2l6ZXMiLCJjbGllbnQiLCJnZXRTaXplIiwiaW5pdGlhbFdpZHRoIiwiaW5pdGlhbEhlaWdodCIsImluaXRpYWxWYWx1ZSIsIk1lZGlhQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VDYWxsT25jZSIsIlByb3ZpZGVyIiwiY29udGV4dCIsInNldFZhbHVlIiwiaGFuZGxlUmVzaXplIiwicHJlcGFyZWRXaWR0aCIsInZpZXciLCJweFRvUmVtIiwicHJlcGFyZWRIZWlnaHQiLCJlbmdpbmUiLCJvbiIsIm9mZiIsInZhbHVlQXNQcm9wIiwiTWVkaWFQcm92aWRlciIsImdldEJ5SGVpZ2h0IiwiZXh0cmFMYXJnZSIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJleHRyYVNtYWxsIiwiZXh0cmFMYXJnZVdpZHRoIiwibGFyZ2VXaWR0aCIsIm1lZGl1bVdpZHRoIiwic21hbGxXaWR0aCIsImV4dHJhU21hbGxXaWR0aCIsImV4dHJhTGFyZ2VIZWlnaHQiLCJsYXJnZUhlaWdodCIsIm1lZGl1bUhlaWdodCIsInNtYWxsSGVpZ2h0IiwiZXh0cmFTbWFsbEhlaWdodCIsIk1lZGlhIiwicmVzdCIsImJyZWFrcG9pbnRQcm9wcyIsIk1lZGlhUXVlcnkiLCJ3ZWlnaHQiLCJnZXRXaWR0aEJQV2VpZ2h0IiwiYnJlYWtwb2ludHMiLCJnZXRIZWlnaHRCUFdlaWdodCIsIlNpemVzIiwid2lkdGhCUFdlaWdodCIsImhlaWdodEJQV2VpZ2h0IiwiTWF0aCIsIm1pbiIsIlJld2FyZFR5cGUiLCJCb251c05hbWVzIiwiSW1hZ2VTaXplIiwiVmFsdWVUeXBlcyIsIlNwZWNpYWxzIiwiSGlnaGxpZ2h0Q2xhc3NlcyIsIk92ZXJsYXlDbGFzc2VzIiwiVGV4dEJ1dHRvbiIsImhvdmVyIiwiY2xpY2siLCJfb25Nb3VzZUVudGVyIiwiaGFuZGxlciIsInNldFN0YXRlIiwiX29uTW91c2VMZWF2ZSIsIl9vbk1vdXNlRG93biIsIl9vbk1vdXNlVXAiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJjYXB0aW9uIiwiZ290byIsInNpZGUiLCJjbGFzc2VzIiwiY2xhc3NJY29uIiwiY2xhc3NHbG93IiwiZ2xvdyIsImNsYXNzQ2FwdGlvbiIsImNsYXNzR290byIsInNoaW5lIiwiY29sb3JzIiwic3RhbmRhcmRDb2xvcnMiLCJ4bFN0eWxlTWFyZ2lucyIsImxnU3R5bGVNYXJnaW5zIiwibWRTdHlsZU1hcmdpbnMiLCJzbVN0eWxlTWFyZ2lucyIsInhzU3R5bGVNYXJnaW5zIiwidmFyaWFudE1hcmdpblNpemVNYXAiLCJ2YXJpYW50cyIsImlzRGVmYXVsdENvbG9yIiwiY29sb3IiLCJpbmNsdWRlcyIsImdldENvbG9yU3R5bGVPckNsYXNzTmFtZSIsImNvbG9yQ2xhc3NOYW1lIiwiY29sb3JTdHlsZSIsIlRleHQiLCJ2YXJpYW50IiwiZ2V0RnJvbUNhbGxTdGFjayIsIlZpZXdFdmVudFR5cGUiLCJjbG9uZUVsZW1lbnQiLCJTSE9XX0RFTEFZX01JTiIsIlNIT1dfREVMQVlfREVGQVVMVCIsImdldFZpZXdFdmVudEFyZ3VtZW50cyIsImFyZ3MiLCJlbnRyaWVzIiwib3V0IiwiX19UeXBlIiwibmFtZSIsIm51bWJlciIsImJvb2wiLCJzdHJpbmciLCJ0b1N0cmluZyIsImhhbmRsZVZpZXdFdmVudCIsImNvbnRlbnRJZCIsImRlY29yYXRvcklkIiwib3B0aW9ucyIsInRhcmdldElEIiwidmlld0VudiIsIlRPT0xUSVAiLCJjb250ZW50SUQiLCJkZWNvcmF0b3JJRCIsIlRvb2x0aXAiLCJpZ25vcmVTaG93RGVsYXkiLCJpZ25vcmVNb3VzZUNsaWNrIiwiaXNFbmFibGVkIiwidGFyZ2V0SWQiLCJvblNob3ciLCJvbkhpZGUiLCJyZWYiLCJ0aW1lb3V0SWQiLCJpc1Zpc2libGUiLCJwcmV2VGFyZ2V0IiwiaGlkZVRpbWVySWQiLCJyZXNJZCIsInNob3ciLCJpc01vdXNlRXZlbnQiLCJhcmd1bWVudHMiLCJoaWRlIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJvblNjcm9sbCIsImVsZW1lbnRGcm9tUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJpc1NhbWVOb2RlIiwiaGlkZVRpbWVyIiwiY2FwdHVyZSIsImNoaWxkRXZlbnQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJNRURJQV9DU1MiLCJTTUFMTF9XSURUSCIsIk1FRElVTV9XSURUSCIsIkxBUkdFX1dJRFRIIiwiRVhUUkFfTEFSR0VfV0lEVEgiLCJTTUFMTF9IRUlHSFQiLCJNRURJVU1fSEVJR0hUIiwiTEFSR0VfSEVJR0hUIiwiRVhUUkFfTEFSR0VfSEVJR0hUIiwiU01BTEwiLCJNRURJVU0iLCJMQVJHRSIsIkVYVFJBX0xBUkdFIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFJvb3REZWZhdWx0Iiwicm9vdElkIiwic3ViVmlld3MiLCJnZXQiLCJjcmVhdGUiLCJpbml0aWFsaXplciIsImdldFJvb3QiLCJzdWJzY3JpYmVycyIsIk1hcCIsIndoZW5SZWFkeSIsInRoZW4iLCJkYXRhIiwiXyIsImNhbGxiYWNrSURzIiwiZm9yRWFjaCIsImNhbGxiYWNrSUQiLCJjYWxsYmFjayIsInVuc3Vic2NyaWJlIiwiaWQiLCJyZW1vdmVEYXRhQ2hhbmdlZENhbGxiYWNrIiwiZGVsZXRlIiwicmVhZEJ5UGF0aCIsInBhdGgiLCJyb290IiwibW9kZWwiLCJyZXN1bHQiLCJsZW5ndGgiLCJlbGVtZW50IiwiYmluZCIsInN1YnNjcmliZSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmVQYXRoIiwidHJhY2tJbkRlcHRoIiwiYWRkTW9kZWxPYnNlcnZlciIsInNldCIsImNyZWF0ZUNhbGxiYWNrIiwiYXJnc01hcCIsImZuIiwiY3JlYXRlQ2FsbGJhY2tOb0FyZ3MiLCJkaXNwb3NlIiwic3Vic2NyaWJlcklkIiwiY29uc3RGYWxzZSIsImFjdGlvbiIsIm9ic2VydmFibGUiLCJkYXRhTGF5ZXIiLCJpbml0aWFsaXplTW9kZWxXaXRoQ29udGV4dCIsIm1vZGVsQ3JlYXRvciIsImNvbnRyb2xzQ3JlYXRvciIsIkNvbnRleHQiLCJEYXRhTGF5ZXJQcm92aWRlciIsIm1vZGUiLCJkYXRhTW9kZSIsIm1vY2tzIiwiY2xlYW51cHNSZWYiLCJjcmVhdGVDb250ZXh0VmFsdWUiLCJkYXRhTGF5ZXJJbnN0YW5jZSIsImV4dGVybmFsTW9kZWwiLCJnZXR0ZXIiLCJvYnNlcnZhYmxlQXJyYXkiLCJpbml0IiwiaW5pdE9ic2VydmFibGUiLCJib3giLCJlcXVhbHMiLCJvYnNlcnZhYmxlT2JqZWN0Iiwib2JzZXJ2YWJsZVByaW1pdGl2ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJhY2MiLCJrZXlzUmVjb3JkIiwia2V5c0VudHJpZXMiLCJrZXlGcm9tIiwia2V5VG8iLCJjbGVhbnVwIiwicHVzaCIsIm9ic2VydmFibGVNb2RlbCIsImFycmF5Iiwib2JqZWN0IiwicHJpbWl0aXZlcyIsImNvbnRyb2xzQXJncyIsImNvbnRyb2xzIiwic3RhcnRlZFJlZiIsImNoYW5nZU1vZGUiLCJtYWtlRW5naW5lRXZlbnQiLCJzZXRUcmFja01vdXNlT3V0c2lkZSIsIm9uUmVzaXplIiwiaW50ZXJuYWxNb3VzZSIsImRvd24iLCJ1cCIsIm1vdmUiLCJpbml0TW91c2VFdmVudHMiLCJsaXN0ZW5lcnMiLCJlbmFibGVkIiwiaW5pdGlhbGl6ZWQiLCJ1cGRhdGVMYXp5VHJhY2siLCJib2R5IiwibWFrZUV2ZW50IiwibGlzdGVuZXIiLCJhY3RpdmUiLCJ3aW5kb3dFdmVudCIsImhhbmRsZVdpbmRvd0V2ZW50IiwiZXZlbnRzIiwic3Vic2NyaWJlQXBpIiwiZGlzYWJsZSIsImVuYWJsZSIsImVuYWJsZU91dHNpZGUiLCJkaXNhYmxlT3V0c2lkZSIsIm1vdXNlIiwidW5pdCIsImdldENsaWVudFNpemVSZW0iLCJnZXRDbGllbnRTaXplUHgiLCJnZXRNb3VzZUdsb2JhbFBvc2l0aW9uIiwiZ2V0TW91c2VHbG9iYWxQb3NpdGlvblJlbSIsImdldE1vdXNlR2xvYmFsUG9zaXRpb25QeCIsImdyYXBoaWNzUXVhbGl0eSIsImlzTG93IiwiZ2V0R3JhcGhpY3NRdWFsaXR5IiwiaXNIaWdoIiwic2V0VHJhY2tNb3VzZU9uU3RhZ2UiLCJldmVudE5hbWUiLCJwcm9jZXNzIiwiTk9ERV9FTlYiLCJnZXRUZXh0dXJlVXJsIiwiY2hpbGRJZCIsInNjYWxlIiwiZ2V0Q2hpbGRUZXh0dXJlUGF0aCIsImdldEJnVXJsIiwiZGlzcGxheVN0YXR1cyIsInNob3dpbmciLCJzaG93biIsImhpZGluZyIsImhpZGRlbiIsIm9uVGV4dHVyZUZyb3plbiIsIm9uVGV4dHVyZVJlYWR5Iiwib25Eb21CdWlsdCIsIm9uTG9hZGVkIiwib25EaXNwbGF5Q2hhbmdlZCIsIm9uRm9jdXNVcGRhdGVkIiwib25BZGRlZCIsIm9uUmVtb3ZlZCIsIm9uQXR0YWNoZWQiLCJvblJlcXVlc3RQb3NpdGlvbiIsInNlbmRFdmVudCIsIkFMTF9TSURFUyIsImFkZFByZWxvYWRUZXh0dXJlIiwic2V0SW5wdXRQYWRkaW5nc1JlbSIsInBhZGRpbmdzIiwic2V0SGl0QXJlYVBhZGRpbmdzUmVtIiwiZ2V0QnJvd3NlclRleHR1cmVQYXRoIiwiZ2V0V2ViQnJvd3NlclRleHR1cmVQYXRoIiwidHJhY2tTdWJJdGVtcyIsImFkZERhdGFDaGFuZ2VkQ2FsbGJhY2siLCJzZXRTaWRlUGFkZGluZ3NSZW0iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImdldFZpZXdTaXplUmVtIiwiZ2V0Vmlld1NpemVQeCIsInJlc2l6ZSIsInJlc2l6ZVZpZXdSZW0iLCJyZXNpemVWaWV3UHgiLCJnZXRWaWV3R2xvYmFsUG9zaXRpb24iLCJnZXRWaWV3R2xvYmFsUG9zaXRpb25SZW0iLCJ4IiwicmVtVG9QeCIsInkiLCJmcmVlemVUZXh0dXJlQmVmb3JlUmVzaXplIiwiZ2V0U2NhbGUiLCJweCIsInJlbSIsInNldEFuaW1hdGVXaW5kb3ciLCJzZXRFdmVudEhhbmRsZWQiLCJpc0V2ZW50SGFuZGxlZCIsImZvcmNlVHJpZ2dlck1vdXNlTW92ZSIsImdldERpc3BsYXlTdGF0dXMiLCJnZXRTaG93aW5nU3RhdHVzIiwiZGlzcGxheVN0YXR1c0lzIiwiZXh0cmFTaXplIiwic2V0RXh0cmFTaXplUmVtIiwiZ2V0RXh0cmFTaXplUmVtIiwid2hlblR1dG9yaWFsUmVhZHkiLCJQcm9taXNlIiwiYWxsIiwicmVzb2x2ZSIsImlzRG9tQnVpbHQiLCJ2aWV3RXZlbnRUeXBlcyIsImNsb3NlUG9wb3ZlciIsImNsb3NlIiwibWluaW1pemUiLCJjcmVhdGVWaWV3RXZlbnRBcmd1bWVudHMiLCJzZW5kVmlld0V2ZW50IiwicmVzdE9wdGlvbnMiLCJzdGFydCIsIm5vb3AiLCJlbXB0eUZ1bmN0aW9uIiwiaWRlbnRpdHkiLCJhIiwiY29uc3RUcnVlIiwibG9nIiwibGluZSIsInN0YWNrIiwiRXJyb3IiLCJpbnZhbGlkIiwiY2FsbGVyIiwicG9wIiwiX19mZWF0dXJlIiwiTWVkaWFTaXplIiwidXNlTWVkaWEiLCJhZGFwdGl2ZVN1ZmZpeFNlcXVlbmNlIiwiaXNBZGFwdGl2ZVN1ZmZpeCIsImlzQWRhcHRpdmVQcm9wTmFtZSIsImF0IiwibWVkaWFTaXplU2VxdWVuY2UiLCJFeHRyYUxhcmdlIiwiTGFyZ2UiLCJNZWRpdW0iLCJTbWFsbCIsIkV4dHJhU21hbGwiLCJoYXNEZWZpbmVkQWRhcHRpdmVQcm9wcyIsInByb3BOYW1lIiwic29tZSIsInN1ZmZpeCIsIm5vcm1hbGl6ZUFkYXB0aXZlUHJvcHMiLCJtZWRpYVNpemUiLCJvdXRwdXQiLCJiYXNlUHJvcE5hbWUiLCJzbGljZSIsImpvaW4iLCJtZWRpYVNpemVJbmRleCIsImluZGV4T2YiLCJyZWxldmFudEFkYXB0aXZlU3VmZml4ZXMiLCJyZWxldmFudFByb3BlcnR5TmFtZXMiLCJyZXNvbHZlZFByb3BOYW1lIiwiZmluZCIsInJlc29sdmVkUHJvcFZhbHVlIiwiZ2V0QWRhcHRpdmVDb21wb25lbnQiLCJDb21wb25lbnQiLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZWRQcm9wcyIsIkFkYXB0aXZlQ29tcG9uZW50IiwiaGFzQWRhcHRpdmVQcm9wcyIsImdldERyYWZ0ZWRBZGFwdGl2ZVByb3BzIiwiZHJhZnRQcm9wcyIsImYiLCJjYWxsZWRSZWYiLCJLRVlfQ09ERVMiLCJzZW5kQ2xvc2VFdmVudCIsImRlZmF1bHRDYWxsYmFjayIsInVzZUtleWRvd25MaXN0ZW5lciIsIk5PTkUiLCJwcmV2ZW50UHJvcGFnYXRpb24iLCJoYW5kbGVLZXlQcmVzcyIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJ1c2VDbG9zZU9uS2V5UHJlc3MiLCJFU0NBUEUiLCJ1c2VDYWxsYmFja09uRXNjIiwidXNlQ2xvc2VPbkVzYyIsInVzZUxheW91dFJlYWR5IiwiZGVwcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiTWVkaWFXaWR0aCIsIk1lZGlhSGVpZ2h0IiwiY29udmVydFRvTWVkaWFTaXplIiwibWVkaWFDb250ZXh0IiwiY29udmVydFRvTWVkaWFXaWR0aCIsImNvbnZlcnRUb01lZGlhSGVpZ2h0IiwibWVkaWFXaWR0aCIsIm1lZGlhSGVpZ2h0IiwicmVtU2NyZWVuV2lkdGgiLCJyZW1TY3JlZW5IZWlnaHQiLCJ1c2VTY2FsZVN0YXRlIiwic2V0U2NhbGUiLCJLRVlfTU9ESUZJRVJTIiwiaXNOb25OdWxsYWJsZSIsImluZGV4IiwidW5zYWZlR2V0IiwidW53cmFwSXRlbSIsIml0ZW0iLCJjb25zdHJ1Y3RvciIsImFyciIsImV2ZXJ5IiwiZmlsdGVyIiwicHJlZGljYXRlIiwic3BsaWNlIiwibGFzdEluZGV4IiwibGFzdEluZGV4WmVybyIsIm1heCIsImxhc3RFbGVtZW50IiwiaW5kZXhGcm9tIiwiaW5kZXhUbyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibmV4dEluZGV4IiwiZW5kSW5kZXgiLCJuZXh0IiwiZG9uZSIsInRhaWwiLCJjb3VudCIsImRlbGV0ZUNvdW50IiwiZmluZExhc3QiLCJmaWx0ZXJNYXAiLCJtYXBFeGlzdHMiLCJmaW5kSW5kZXgiLCJmaW5kSW5kZXhMYXN0Iiwic2VwYXJhdG9yIiwiU3RyaW5nIiwiZm9jdXNlZFNlbGVjdGFibGVFbGVtZW50Iiwic2VsZWN0aW9uQm91bmRzIiwic3RhcnRJbmRleCIsImdldFNlbGVjdGlvbiIsImVtcHR5Iiwic2VsZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJzZWxlY3Rpb25TdGFydCIsImV2T2JqIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzZWxlY3Rpb25JbmRleCIsInNlbGVjdGlvbkVuZCIsImluZGV4Q3Vyc29yUG9zaXRpb24iLCJpbmRleFNlbGVjdGlvblN0YXJ0IiwiaW5kZXhTZWxlY3Rpb25FbmQiLCJsYXN0SW5kZXhPZiIsImFuY2hvckNhcmV0UG9zaXRpb24iLCJjYXJldFBvc2l0aW9uRnJvbVBvaW50IiwiZm9jdXNDYXJldFBvc2l0aW9uIiwib2Zmc2V0Tm9kZSIsInNlbGVjdGlvbiIsInNldEJhc2VBbmRFeHRlbnQiLCJvZmZzZXQiLCJpc051bGxhYmxlIiwic291bmROYW1lIiwiY2FsbCIsIlNvdW5kIiwicGxheUhpZ2hsaWdodCIsInBsYXlDbGljayIsInBsYXlZZXMiLCJzdHIiLCJtYXBwaW5nIiwicmVwbGFjZSIsIm1hdGNoIiwiZm9ybWF0UHJpbnRmIiwicGFkIiwic25ha2VUb0NhbWVsIiwidG9VcHBlckNhc2UiLCJub3JtYWxpemVSZXNvdXJjZSIsInVwQ2FzZUZpcnN0Q2hhciIsImNvbnZlcnROYnNwIiwiY29udmVydFp3bmJzcCIsImFkZFNlcGFyYXRvclRvUmlnaHQiLCJsYXN0IiwiYWRkU2VwYXJhdG9yVG9MZWZ0Iiwic3BsaXRBbmRGb3JtYXQiLCJzdHJpbmdUb1NwbGl0Iiwic3BsaXRFdXJvcGVhbiIsInNwbGl0UmVzdWx0Iiwic3BsaXRSZWdleCIsInN0cmluZ1dpdGhOYnNwIiwid29yZCIsInNwbGl0Q2hpbmVzZSIsImxhdGluSW5qZWN0aW9ucyIsImJyYWNrZXRzQW5kUXVvdGVzIiwicHVuY3R1YXRpb25NYXJrcyIsIm5laWdoYm9yaW5nSGllcm9nbHlwaHMiLCJtYWluUmVnZXgiLCJSZWdFeHAiLCJzb3VyY2UiLCJzdHJpbmdzVG9TcGxpdCIsIkNISU5FU0VfTEFOR1VBR0VfQ09ERVMiLCJzcGxpdFdvcmRzIiwibGFuZ3VhZ2UiLCJ0b0xvd2VyQ2FzZSIsInN1YlN0cmluZyIsIkNsaWNrT3V0c2lkZU1hbmFnZXIiLCJfbGlzdGVuTW91c2UiLCJjb250YWluZXIiLCJwYXJlbnROb2RlIiwiaW5zdGFuY2UiLCJfX2luc3RhbmNlIiwicmVnaXN0ZXIiLCJhZGRNb3VzZUxpc3RlbmVyIiwidW5yZWdpc3RlciIsInRhcmdldENvbnRhaW5lciIsInRhcmdldENhbGxiYWNrIiwicmVtb3ZlTW91c2VMaXN0ZW5lciIsIkRhdGFUcmFja2VyIiwiX2NhbGxiYWNrcyIsIl91cGRhdGVIYW5kbGVyIiwiX3ZpZXdzIiwiY2xlYXJWaWV3Q2FsbGJhY2tzIiwidmlld0lkIiwiY2FsbGJhY2tJZCIsIl9fZGF0YVRyYWNrZXIiLCJjbGVhciIsImFkZENhbGxiYWNrIiwiX2VtbWl0RGF0YUNoYW5nZWQiLCJyZW1vdmVDYWxsYmFjayIsImluZGV4ZXMiLCJvbkJpbmRpbmdzUmVhZHkiLCJWaWV3TW9kZWwiLCJ3YXRjaGluZ0ZpZWxkcyIsImRhdGFUcmFja2VyIiwibW9kZWxQYXRoIiwiY2FsbGJhY2tzIiwiX25vdGlmeU9ic2VydmVycyIsImV2YWwiLCJTZXQiLCJfYWRkQ2FsbGJhY2siLCJhZGQiLCJkZXN0cm95IiwiZHVtcFZpZXdNb2RlbCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5Iiwic3RhcnRzV2l0aCIsImkiLCJDbGlja091dHNpZGVNYW5hZ2VyQ2xhc3MiLCJVc2VyTG9jYWxlIiwiRGF0ZUZvcm1hdFR5cGUiLCJSZWFsRm9ybWF0VHlwZSIsIlRpbWVGb3JtYXRUeXBlIiwiYWRkRXNjYXBlTGlzdGVuZXIiLCJjbG9zZU9uRXNjIiwiaXNDb250ZXh0TWVudVNob3duIiwiaXNQb3BPdmVyU2hvd24iLCJpc1Rvb2x0aXBTaG93biIsIm1ha2VHbG9iYWxCb3VuZGluZ0JveCIsIm9uTGF5b3V0UmVhZHkiLCJzZW5kQ2xvc2VQb3BPdmVyRXZlbnQiLCJzZW5kTW92ZUV2ZW50Iiwic2VuZFNob3dDb250ZXh0TWVudUV2ZW50Iiwic2VuZFNob3dQb3BPdmVyRXZlbnQiLCJWaWV3RW52SGVscGVyIiwic3lzdGVtTG9jYWxlIiwiZ2V0UmVhbEZvcm1hdCIsImdldFRpbWVGb3JtYXQiLCJ1dGMiLCJnZXREYXRlRm9ybWF0IiwidXNlckxvY2FsZSIsInBhdHRlcm4iLCJ0aW1lVG9Mb2NhbCIsImdldFRpbWVTdHJpbmciLCJyZXNvdXJjZUlEIiwic2hvd01vZGVsIiwiZGVwdGgiLCJ3YXJuIiwidmFsdWVzIiwiX3Nob3dNb2RlbCIsImZyZWV6ZSIsIkZSQUNUSU9OQUwiLCJXT19aRVJPX0RJR0lUUyIsIlNIT1JUX0ZPUk1BVCIsIkxPTkdfRk9STUFUIiwiWUVBUl9NT05USCIsImNsaWVudFJlY3QiLCJfQmluZGluZ3NSZWFkeSIsIl9XaW5kb3dMb2FkZWQiLCJNT1ZFIiwiQ0xPU0UiLCJQT1BfT1ZFUiIsInNlbmRNaW5pbWl6ZUV2ZW50IiwiTUlOSU1JWkUiLCJDT05URVhUX01FTlUiLCJkaXJlY3Rpb24iLCJub2RlIiwiZ2xvYmFsUG9zaXRpb24iLCJjbGllbnRSZWN0UHgiLCJiYm94IiwiaXNXaW5kb3dTaG93bkJ5Vmlld0V2ZW50IiwiY2FsbE9uRXNjIiwiaGFuZGxlRnVuYyIsIk1lZGlhV3JhcHBlcklubmVyIiwiTWVkaWFXcmFwcGVyIiwiQ1NTIiwiV0lEVEhfQ0xBU1NFUyIsIkhFSUdIVF9DTEFTU0VTIiwiU0laRV9DTEFTU0VTIiwiUmVhY3RET00iLCJBcHAiLCJNb2RlbFByb3ZpZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJvYnNlcnZlciIsInVzZU1vZGVsIiwiRGVzY3JpcHRpb24iLCJGb290ZXIiLCJIZWFkZXIiLCJURVhUUyIsImFybW9yeV95YXJkIiwiWkVST19QUklDRSIsImNsZWFySW50ZXJuYWxDYWNoZUFmdGVyRmluYWxpemUiLCJ0b2tlbnNDb3VudCIsInBheWVkVG9rZW5zTGltaXQiLCJpc1dhbGxldEF2YWlsYWJsZSIsInVzZXJDcnlzdGFsIiwidG9rZW5QcmljZSIsImNvbXB1dGVzIiwiZ2V0VG9rZW5QcmljZSIsInRva2VuQ3J5c3RhbFByaWNlIiwiZ2V0VG9rZW5DcnlzdGFsUHJpY2UiLCJ0b2tlblJhdGUiLCJwcmljZSIsIm9uZVByaWNlIiwiR29sZCIsInRva2VuQ3J5c3RhbFJhdGUiLCJDcnlzdGFsIiwiY2xvc2VCdG4iLCJsYWJlbCIsImNhbmNlbCIsImhlYWRlciIsInByb2R1Y3RJbmZvIiwiZGVzY3JpcHRpb24iLCJ0b2tlbkltYWdlIiwiZm9vdGVyIiwiYnV5IiwicG9zdHByb2dyZXNzaW9uIiwiYnV5VG9rZW5zIiwidGl0bGUiLCJUb2tlbnNTdGVwcGVyIiwiVG9nZ2xlVHlwZSIsIlRvZ2dsZUJ1dHRvbiIsIlNURVBfU0laRSIsInRva2Vuc1ZhbHVlIiwic2V0VG9rZW5zVmFsdWUiLCJnb2xkVmFsdWUiLCJzZXRHb2xkVmFsdWUiLCJjcnlzdGFsVmFsdWUiLCJzZXRDcnlzdGFsVmFsdWUiLCJjaGVja2VkVHlwZSIsInNldENoZWNrZWRUeXBlIiwidG9nZ2xlQ2xpY2siLCJ0b2dnbGVUeXBlIiwiaXNHb2xkVG9nZ2xlQWN0aXZlIiwiaXNDcnlzdGFsbFRvZ2dsZUFjdGl2ZSIsImlzQnV5QXZhaWxhYmxlIiwiYWN0aXZlVHlwZSIsImNyeXN0YWwiLCJoYW5kbGVUb2tlbkluY3JlYXNlIiwibmV3VG9rZW5zVmFsdWUiLCJnb2xkUmF0ZSIsImNyeXN0YWxSYXRlIiwiaGFuZGxlVG9rZW5EZWNyZWFzZSIsImxpbmVfX2ZpcnN0IiwiYmciLCJsaW5lX19zZWNvbmQiLCJmaW5hbFByaWNlIiwidG9nZ2xlIiwidG9nZ2xlX19jcnlzdGFsIiwiYXJyb3ciLCJwcmljZVdyYXBwZXIiLCJwcmljZUxpbmUiLCJiaWciLCJ2aWV3cyIsImxvYmJ5IiwiZmVhdHVyZSIsInRvb2x0aXBzIiwiQXJtb3J5WWFyZFRva2VuU3RlcHBlclRvb2x0aXBWaWV3IiwicHJvZHVjdENvdW50ZXIiLCJ0b2tlbnNBdmFpbGFibGUiLCJhdmFpbGFibGVUb2tlbnMiLCJ0b2tlbnMiLCJ0b2tlbnNBdmFpbGFibGVfX3Rva2VucyIsImFycm93X19sYXN0IiwibWFpbiIsImJ1eUJ1dHRvbiIsImJ1dHRvblRleHQiLCJBcm1vcnlZYXJkV2FsbGV0Tm90QXZhaWxhYmxlVG9vbHRpcFZpZXciLCJ3YXJuaW5nIiwid2FybmluZ19fZ2xvdyIsIndhcm5pbmdfX2ljb24iLCJwcm9kdWN0VGl0bGVXcmFwcGVyIiwidG9rZW5Db3VudCIsInRva2VuQ291bnRfX3RleHQiLCJhdmFpbGFibGUiLCJTaG9wQ3VycmVuY3lUb29sdGlwVmlldyIsInRva2VuQ291bnRfX3VuZGVyVG9vbHRpcCIsInRva2VuQ291bnRfX2NvdW50IiwidG9rZW5Db3VudF9faWNvbiIsIlNPVU5EX0NMSUNLIiwiU09VTkRfSE9WRVIiLCJpc0FjdGl2ZSIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImJnRGVmYXVsdCIsImJnQWN0aXZlIiwiYmdBY3RpdmVfX3Zpc2libGUiLCJob3Zlcl9faG92ZXJlZCIsImxpa2VBcnJheSIsImNvbXB1dGVkRm4iLCJjcnlzdGFsUHJpY2UiLCJkZWZQcmljZSIsImRpc2NvdW50IiwiY3VycmVuY3lUeXBlIiwiVGV4dElucHV0Q29tcG9uZW50IiwiYXV0b0ZvY3VzIiwib25LZXlEb3duIiwiaW5wdXRSZWYiLCJzaG91bGRNb3ZlQ3Vyc29yVG9FbmQiLCJzZXRTaG91bGRNb3ZlQ3Vyc29yVG9FbmQiLCJzZXRJbnB1dFJlZiIsImhhbmRsZUtleURvd24iLCJjdXJyVGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImN1cnJWYWx1ZUxlbmd0aCIsImN1cnJTZWxlY3Rpb24iLCJ3aGljaCIsIkRFTEVURSIsIkJBQ0tTUEFDRSIsImJsdXIiLCJUZXh0SW5wdXQiLCJESUdJVFNfUkVHRVhQIiwiWDJfU0NBTEUiLCJoYW5kbGVCdG5Nb3VzZUVudGVyIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImljb25QYXRoIiwiaWNvblN0eWxlcyIsImhhbmRsZVRva2VuQ2hhbmdlIiwiY2FuQWRkIiwiY2FuU3VidHJhY3QiLCJpc1gyU2NhbGUiLCJiYXNlUmVmIiwiQVJST1dfVVAiLCJBUlJPV19ET1dOIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJjdXJyVmFsdWUiLCJOdW1iZXIiLCJleGVjIiwiaXNJbnRlZ2VyIiwiaGFuZGxlTW91c2VXaGVlbCIsImRlbHRhWSIsImhhbmRsZUFkZEJ0bkNsaWNrIiwiaGFuZGxlU3VidHJhY3RCdG5DbGljayIsImN1cnJlbmN5IiwiaW5wdXRXcmFwcGVyIiwiaW5wdXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJiYXNlX19mb2N1c2VkIiwiY3VycmVuY3lJY29uIiwiYnRuIiwiYnRuSW5jcmVtZW50IiwiYnRuX19zY2FsZWQiLCJidG5JbmNyZW1lbnRfX2Rpc2FibGVkIiwiYnRuRGVjcmVtZW50IiwiYnRuRGVjcmVtZW50X19kaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=

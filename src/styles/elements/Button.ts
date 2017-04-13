import * as ButtonTheme from './Button.theme';

export default (theme = ButtonTheme) => {
  const base = {
    cursor: 'pointer',
    display: 'inline-block',

    minHeight: '1em',

    outline: 'none',
    border: 'none',
    verticalAlign: theme.verticalAlign,
    background: theme.background,
    color: theme.textColor,

    fontFamily: theme.fontFamily,

    margin: `0em ${theme.horizontalMargin} ${theme.verticalMargin} 0em`,
    padding: `${theme.verticalPadding} ${theme.horizontalPadding} ${theme.verticalPadding + theme.shadowOffset}`,

    textTransform: theme.textTransform,
    textShadow: theme.textShadow,
    fontWeight: theme.fontWeight,
    lineHeight: theme.lineHeight,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecoration: 'none',

    borderRadius: theme.borderRadius,
    // boxShadow: theme.boxShadow,

    userSelect: 'none',
    // transition: theme.transition,
    // willChange: theme.willChange,

    WebkitTapHighlightColor: theme.tapColor
  };

  return {
    base
  };
};


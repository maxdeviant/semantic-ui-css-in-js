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
    // TODO: Figure out how to apply the shadow offset.
    // padding: `${theme.verticalPadding} ${theme.horizontalPadding} ${theme.verticalPadding + theme.shadowOffset}`
    padding: `${theme.verticalPadding} ${theme.horizontalPadding}`,

    textTransform: theme.textTransform,
    textShadow: theme.textShadow,
    fontWeight: theme.fontWeight,
    lineHeight: theme.lineHeight,
    fontStyle: 'normal',
    textAlign: 'center',
    textDecoration: 'none',

    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow,

    userSelect: 'none',
    transition: theme.transition,
    willChange: theme.willChange,

    WebkitTapHighlightColor: theme.tapColor,

    ':hover': {
      backgroundColor: theme.hoverBackgroundColor,
      backgroundImage: theme.hoverBackgroundImage,
      boxShadow: theme.hoverBoxShadow,
      color: theme.hoverColor
    }
  };

  const hoverIcon = {
    opacity: theme.iconHoverOpacity
  };

  const inverted = {
    boxShadow: `0px 0px 0px ${theme.invertedBorderSize} ${theme.neutralColors.white} inset !important`,
    background: 'transparent none',
    color: theme.neutralColors.white,
    textShadow: 'none !important'
  };

  return {
    base,
    hoverIcon,
    inverted
  };
};


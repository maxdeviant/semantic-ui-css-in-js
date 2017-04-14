declare namespace Polished {

  // Colors

  function darken(amount: number, color: string): string;

  function saturate(amount: number, color: string): string;

  // Helpers

  function em(pxval: string | number, base?: string | number): string;

  function rem(pxval: string | number, base?: string | number): string;

  function stripUnit(value: string): number;

}

declare module 'polished' {
  export = Polished;
}

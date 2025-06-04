declare module 'vega-embed' {
  export interface EmbedOptions {
    actions?: boolean;
    renderer?: 'canvas' | 'svg';
    [key: string]: any;
  }
  
  export interface EmbedResult {
    view: {
      addEventListener: (event: string, listener: (event: any, item: any) => void) => void;
      [key: string]: any;
    };
    spec: any;
    vgSpec: any;
  }
  
  export default function embed(
    el: HTMLElement | string,
    spec: any,
    options?: EmbedOptions
  ): Promise<EmbedResult>;
}

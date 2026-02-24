declare module "vanta/dist/vanta.dots.min" {
  const DOTS: (opts: Record<string, unknown>) => { destroy: () => void };
  export default DOTS;
}

declare module "vanta/dist/vanta.net.min" {
  const NET: (opts: Record<string, unknown>) => { destroy: () => void };
  export default NET;
}
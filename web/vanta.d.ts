declare module "vanta/dist/vanta.dots.min" {
  const DOTS: (opts: Record<string, unknown>) => { destroy: () => void };
  export default DOTS;
}

declare module "vanta/dist/vanta.net.min" {
  const NET: (opts: Record<string, unknown>) => { destroy: () => void };
  export default NET;
}

declare module "vanta/dist/vanta.waves.min" {
  const WAVES: (opts: Record<string, unknown>) => { destroy: () => void };
  export default WAVES;
}

declare module "vanta/dist/vanta.fog.min" {
  const FOG: (opts: Record<string, unknown>) => { destroy: () => void };
  export default FOG;
}

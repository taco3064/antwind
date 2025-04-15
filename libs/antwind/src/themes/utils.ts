export function getContrast(
  dark: boolean,
  level: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90,
): number {
  return dark ? 100 - level : level;
}

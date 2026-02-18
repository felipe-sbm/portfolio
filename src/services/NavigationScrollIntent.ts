export type NavigationScrollIntent = 'header-top' | 'footer-bottom';

let nextScrollIntent: NavigationScrollIntent | null = null;

export function setNextNavigationScrollIntent(intent: NavigationScrollIntent): void {
  nextScrollIntent = intent;
}

export function consumeNextNavigationScrollIntent(): NavigationScrollIntent | null {
  const currentIntent = nextScrollIntent;
  nextScrollIntent = null;
  return currentIntent;
}

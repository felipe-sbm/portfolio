export type Locale = 'en' | 'pt' | 'ja' | 'zh';

export type MessageValue = string | string[] | MessageTree;

export interface MessageTree {
  [key: string]: MessageValue;
}

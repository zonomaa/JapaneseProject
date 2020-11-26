export const 商品種類 = {
  果物: '果物',
  ゲーム: 'ゲーム',
  電化製品: '電化製品',
  キッチン: 'キッチン',
} as const;

export const 販売種類 = {
  販売中: '販売中',
  販売停止中: '販売停止中',
  未来販売: '未来販売',
} as const;

export const セール種類 = {
  なし: 'なし',
  セール中: 'セール中',
  会員限定セール: '会員限定セール',
} as const;

export type 商品種類型 = typeof 商品種類[keyof typeof 商品種類];
export type 販売種類型 = typeof 販売種類[keyof typeof 販売種類];
export type セール種類型 = typeof セール種類[keyof typeof セール種類];

export type 商品型 = {
  名前: string;
  金額: number;
  種類: 商品種類型;
  販売状態: 販売種類型;
  セール状態: セール種類型;
};

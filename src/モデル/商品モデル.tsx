import { セール種類, 商品型, 販売種類 } from '型/商品';

export class 商品モデル {
  public 名前: 商品型['名前'];
  public 金額: 商品型['金額'];
  public 種類: 商品型['種類'];
  public 販売状態: 商品型['販売状態'];
  public セール状態: 商品型['セール状態'];

  constructor(データ: 商品型) {
    this.名前 = データ.名前;
    this.金額 = データ.金額;
    this.種類 = データ.種類;
    this.販売状態 = データ.販売状態;
    this.セール状態 = データ.セール状態;
  }

  get 税込み金額() {
    return this.金額 * 1.1;
  }

  get セール中か() {
    return this.セール状態 === セール種類.セール中;
  }

  get 販売中か() {
    return this.販売状態 === 販売種類.販売中;
  }
}

import { 商品モデル } from 'モデル/商品モデル';
import { 商品型 } from '型/商品';

export const 商品モデルリストを生成 = (商品リスト: 商品型[]): 商品モデル[] => {
  return 商品リスト.map((商品データ) => new 商品モデル(商品データ));
};

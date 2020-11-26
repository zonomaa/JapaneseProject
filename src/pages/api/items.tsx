import { セール種類, 商品型, 商品種類, 販売種類 } from '型/商品';

const 商品一覧: 商品型[] = [
  {
    名前: 'アップル',
    金額: 200,
    種類: 商品種類.果物,
    販売状態: 販売種類.販売中,
    セール状態: セール種類.なし,
  },
  {
    名前: 'Z伝説',
    金額: 8900,
    種類: 商品種類.ゲーム,
    販売状態: 販売種類.販売中,
    セール状態: セール種類.なし,
  },
  {
    名前: 'Yパーティー',
    金額: 4900,
    種類: 商品種類.ゲーム,
    販売状態: 販売種類.販売中,
    セール状態: セール種類.セール中,
  },
  {
    名前: '熱烈価格',
    金額: 40000,
    種類: 商品種類.電化製品,
    販売状態: 販売種類.販売中,
    セール状態: セール種類.会員限定セール,
  },
  {
    名前: '絶対売れるタイトル',
    金額: 4000,
    種類: 商品種類.ゲーム,
    販売状態: 販売種類.未来販売,
    セール状態: セール種類.なし,
  },
  {
    名前: '未来販売でかつ限定セールタイトル',
    金額: 9000,
    種類: 商品種類.電化製品,
    販売状態: 販売種類.未来販売,
    セール状態: セール種類.会員限定セール,
  },
  {
    名前: '有能なまな板',
    金額: 1900,
    種類: 商品種類.キッチン,
    販売状態: 販売種類.販売中,
    セール状態: セール種類.なし,
  },
];

const 処理 = (_, レスポンス) => {
  レスポンス.statusCode = 200;
  レスポンス.setHeader('Content-Type', 'application/json');
  レスポンス.end(JSON.stringify({ 状態: '良好', 商品棚: 商品一覧 }));
};

export default 処理;

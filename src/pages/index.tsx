import React, { useEffect, useState } from 'react';
import { 商品モデル } from 'モデル/商品モデル';
import { 商品型 } from '型/商品';
import { 商品モデルリストを生成 } from '工場/商品モデルリストを生成';
import { 商品棚を作る } from '工場/商品棚をつくる';

type 商品棚 = {
  セール中の棚: 商品モデル[];
  ゲームの棚: 商品モデル[];
  家電の棚: 商品モデル[];
};

const 商品を取得する = async (): Promise<商品型[]> => {
  const 取得結果 = await fetch('/api/items');

  if (取得結果.status !== 200) throw new Error('商品取得に失敗しました');
  const { 状態, 商品棚 } = await 取得結果.json();
  if (状態 !== '良好') throw new Error('商品取得に失敗しました');

  return 商品棚;
};

function index() {
  const [{ セール中の棚, ゲームの棚, 家電の棚 }, 商品棚へセット] = useState<
    商品棚
  >({
    セール中の棚: [],
    ゲームの棚: [],
    家電の棚: [],
  });

  useEffect(() => {
    商品を取得する()
      .then((商品データ) => {
        const 商品モデルリスト = 商品モデルリストを生成(商品データ);
        const { セール中の棚, ゲームの棚, 家電の棚 } = 商品棚を作る(
          商品モデルリスト
        );
        商品棚へセット({ セール中の棚, ゲームの棚, 家電の棚 });
      })
      .catch((エラー) => {
        console.log('エラーが発生しました', エラー);
      });
  }, []);

  return (
    <>
      <h1>全部日本語 店</h1>

      <h2>セール中の棚</h2>
      <ul>
        {セール中の棚.map((商品, 位置) => (
          <li key={位置}>
            <span>
              [{商品.種類}]{商品.名前}
            </span>
            {'　'}
            <span>¥{商品.税込み金額}(税込)</span>
          </li>
        ))}
      </ul>

      <h2>ゲームの棚</h2>
      <ul>
        {ゲームの棚.map((商品, 位置) => (
          <li key={位置}>
            <span>
              [{商品.種類}]{商品.名前}
            </span>
            {'　'}
            <span>¥{商品.税込み金額}(税込)</span>
          </li>
        ))}
      </ul>

      <h2>家電の棚</h2>
      <ul>
        {家電の棚.map((商品, 位置) => (
          <li key={位置}>
            <span>
              [{商品.種類}]{商品.名前}
            </span>
            {'　'}
            <span>¥{商品.税込み金額}(税込)</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default index;

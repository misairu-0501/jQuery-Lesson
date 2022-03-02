// オプションを指定してSkipprの実行
$(".theTarget").skippr({
  // スライドショーの変化（"fade" or "slide"）
  transition : 'fade',
  // 変化にかかる時間（ミリ秒）
  speed : 1000,
  // easingの種類
  easing : 'easeOutQuart',
  // ナビゲーションの形（"block" or "bubble"）
  navType : 'bubble',
  // 子要素の種類（"div" or "img"）
  childrenElementType : 'div',
  // ナビゲーション矢印の表示（trueで表示）
  arrows : true,
  // スライドショーの自動再生
  autoPlay :  false,
  // 自動再生時のスライド切替感覚（ミリ秒）
  autoPlayDuration : 5000,
  // キーボードの矢印キーによるスライド送り設定（trueで有効）
  keyboardOnAlways : true,
  // １枚目のスライド表示に戻る矢印を表示するかどうか[false]:矢印を隠さない [true]:矢印を隠す
  hidePrevious : false
})
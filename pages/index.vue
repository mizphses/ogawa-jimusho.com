<template>
  <div>
    <Hero mainpic="/hero/load.webp">あなたと共に、この道を歩む。</Hero>
    <div style="height: 2em" />
    <h1 class="tk-heisei-maru-gothic-std is-size-3 has-text-centered">
      所長からのご挨拶
    </h1>
    <div style="height: 2em" />
    <div class="container is-fluid columns">
      <aside class="column is-4 section">
        <div class="is-horisonal-center">
          <img src="~/assets/nozomu-ogawa.webp" alt="尾川望" />
        </div>
        <p class="family-serif has-text-centered">
          所長・税理士&emsp;<span class="is-size-3">尾川 望</span>
        </p>
      </aside>
      <div class="column is-8">
        <p>会計帳簿に求められるもの、それは冷徹なまでの正確性でしょう。</p>
        <p>
          それは時として経営者の胸をかきむしるような結果を映し出すかもしれません。
        </p>
        <p>
          しかし、事業を行うということは、否応なしに多くの人たちの利害と関わることです。顧客・取引先・銀行・従業員やその家族、そのほか様々な人たちに影響を与える活動が事業活動なのです。
        </p>
        <p>
          それ故、事業活動の経緯や結果を表現する会計帳簿は正確でなくてはならないのです。
        </p>
        <p>
          その正確性を前提としなければ利害関係者との信頼は成り立ちません。そして何よりも経営者自身と事業との間に信頼できる関係が確立できないのです。
        </p>
        <p>
          経営者が会計帳簿の数字を正面から見据え、そこからいかに事業を成長させていくかを考えるとき、会計帳簿に命が吹き込まれるのです。
        </p>
        <p>
          この会計帳簿に記載された数字の中に事業が、そして経営者自身が成長するためのスタート地点があり、その成長の過程を描き出したものが経営計画書なのです。そしてその結果がまた翌年度の会計帳簿に記載されます。もちろん経営計画書通りにことは進みません。
        </p>
        <p>
          しかしそのズレにいかにアジャストしていくか、これも経営者や事業を成長させるために必要な要素でしょう。
        </p>
        <p>
          「幸福は道でも喜びでもなく、このことでもあのことでもなく、たんに成長である。私達は成長している時こそ、幸福なのである。」というウィリアム・バトラー・イェイツの言葉を借りれば、幸福を映し出したものこそ会計帳簿であり、それは新たな幸福のスタートを示すものなのです。
        </p>
        <p>
          では、幸福の始まりである正確な会計帳簿はどうすれば手に入れることができるのか。
        </p>
        <p>会計事務所に依頼すればもってきてくれるのでしょうか。</p>
        <p>
          <b>答えは否です。</b>
        </p>
        <p>
          先ほども申し上げたように会計帳簿は経営者や事業の成長の軌跡です。
        </p>
        <p>それは経験した本人にしか正確に表現できないものなのです。</p>
        <p>
          私達会計事務所のもっとも大切な仕事は、経営者がその経験を正確に会計帳簿に表現できるように表現の仕方をお伝えすること、そしてできあがった会計帳簿を経営者と一緒に読んでいくことだと考えています。そうすることで経営者とともに成長していける、幸福を共有できると考えるのです。
        </p>
      </div>
    </div>
    <div style="height: 2em" />
    <h1 class="tk-heisei-maru-gothic-std is-size-3 has-text-centered">
      所長略歴
    </h1>
    <div style="height: 2em" />
    <figure class="wp-block-table" style="padding: 1em">
      <table class="table is-hoverable is-fullwidth">
        <tbody>
          <tr>
            <td>昭和38年</td>
            <td>岡山県英田郡美作町（現 美作市）生まれ</td>
          </tr>
          <tr>
            <td>昭和60年</td>
            <td>
              明治大学商学部商学科卒業<br />尾川肝税理士事務所（現
              当事務所）就職
            </td>
          </tr>
          <tr>
            <td>昭和63年</td>
            <td>税理士試験合格</td>
          </tr>
          <tr>
            <td>平成元年</td>
            <td>税理士登録</td>
          </tr>
          <tr>
            <td>平成14年</td>
            <td>尾川望税理士事務所 所長就任</td>
          </tr>
          <tr>
            <td>平成15年</td>
            <td>岡山大学大学院法学研究科 修士課程修了</td>
          </tr>
          <tr>
            <td>平成26年</td>
            <td>岡山大学大学院 法務研究科(法科大学院) 非常勤講師就任</td>
          </tr>
          <tr>
            <td>平成30年</td>
            <td>中国税理士会 税務研究所研究員 就任</td>
          </tr>
          <tr>
            <td>令和2年</td>
            <td>岡山経済同友会 企業法務・会計委員会委員長 就任</td>
          </tr>
        </tbody>
      </table>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.family-serif {
  font-family: "A1明朝", "A1 Mincho", serif !important;
  font-weight: 400;
}
.is-horizontal-center {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>

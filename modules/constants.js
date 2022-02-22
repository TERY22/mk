const ATTACK = ['head', 'body', 'foot'];

const HIT = {
   head: 30,
   body: 25,
   foot: 20,
}

const LOGS = {
   start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
   end: [
      'Результат удара [playerWins]: [playerLose] - труп',
      '[playerLose] погиб от удара бойца [playerWins]',
      'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
   ],
   hit: [
      '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага [playerHP].',
      '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника [playerHP].',
      '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента [playerHP].',
      '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента [playerHP].',
      '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента [playerHP].',
      '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага [playerHP].',
      '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника [playerHP].',
      '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника [playerHP].',
      '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника [playerHP].',
      '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника [playerHP].',
      '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника [playerHP].',
      '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага [playerHP].',
      '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента [playerHP].',
      '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника [playerHP].',
      '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента [playerHP].',
      '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента [playerHP].',
      '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника [playerHP].',
      '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага [playerHP].',
   ],
   defence: [
      '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу [playerHP].',
      '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь [playerHP].',
      '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке [playerHP].',
      '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь [playerHP].',
      '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку [playerHP].',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение [playerHP].',
      '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют [playerHP].',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение [playerHP].'
   ],
   draw: 'Ничья - это тоже победа!'
};

export {ATTACK, HIT, LOGS};
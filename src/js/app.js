import MathCharacter from './basic';
import Magician from './magician';
import Daemon from './daemon';

console.log('app worked');

const magician = new Magician('Маг', 'magician');
const daemon = new Daemon('Демон', 'daemon');

magician.distance = 5;
magician._stoned = false;
console.log(magician._attack);

daemon.distance = 5;
daemon._stoned = true;
console.log(daemon._attack);

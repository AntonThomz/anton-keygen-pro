const crypto = require('crypto');
function AntonKeyGen() {
  let _0x3629e0 = '';
  let _0xecd360 = 0x0;
  while (_0xecd360 < 0x4) {
    let _0x2259aa = '';
    for (let _0xc12d61 = 0x0; _0xc12d61 < 0x4; _0xc12d61++) {
      const _0xc92fb3 = crypto.randomBytes(0x1);
      const _0xe0a46 = _0xc92fb3[0x0] % "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".length;
      _0x2259aa += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[_0xe0a46];
    }
    _0x3629e0 += _0x2259aa;
    if (_0xecd360 < 0x3) {
      _0x3629e0 += '-';
    }
    _0xecd360++;
  }
  return _0x3629e0;
}
module.exports = {
  'AntonKeyGen': AntonKeyGen
};
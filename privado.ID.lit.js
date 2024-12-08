"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var __privateMethod = (obj, member, method) => {
    __accessCheck(obj, member, "access private method");
    return method;
  };

  // node_modules/@iden3/js-iden3-core/dist/browser/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    Blockchain: () => o,
    BytesHelper: () => R2,
    ChainIds: () => l2,
    Claim: () => P2,
    ClaimOptions: () => C,
    Constants: () => s,
    DID: () => Q2,
    DIDNetworkFlag: () => F,
    DidMethod: () => h3,
    DidMethodByte: () => u,
    DidMethodNetwork: () => d2,
    ElemBytes: () => B2,
    ErrSlotOverflow: () => M2,
    Flags: () => L2,
    Id: () => $2,
    IdPosition: () => U3,
    MerklizedFlag: () => v2,
    MerklizedRootPosition: () => V2,
    NetworkId: () => a2,
    Param: () => K,
    Parser: () => W2,
    SchemaHash: () => k2,
    SlotName: () => H,
    StringUtils: () => O,
    SubjectFlag: () => A,
    buildDIDType: () => G4,
    chainIDfromDID: () => rt,
    checkBigIntArrayInField: () => N2,
    checkBigIntInField: () => x2,
    encoder: () => I,
    findBlockchainForDIDMethodByValue: () => Y2,
    findDIDMethodByValue: () => j2,
    findNetworkIDForDIDMethodByValue: () => z2,
    fromBigEndian: () => E,
    fromLittleEndian: () => g,
    genesisFromEthAddress: () => T2,
    getChainId: () => et,
    getDateFromUnixTimestamp: () => p2,
    getUint32: () => m2,
    getUint64: () => S2,
    getUnixTimestamp: () => b2,
    idenState: () => D,
    initDIDParams: () => J,
    putUint32: () => w2,
    putUint64: () => _2,
    registerBlockchain: () => Z2,
    registerChainId: () => tt,
    registerDidMethod: () => X2,
    registerDidMethodNetwork: () => nt,
    registerNetwork: () => q2,
    toBigEndian: () => y2,
    toLittleEndian: () => f2
  });

  // node_modules/@iden3/js-crypto/dist/browser/esm/index.js
  var cI = Object.defineProperty;
  var DI = (G7, I5) => {
    for (var E4 in I5)
      cI(G7, E4, { get: I5[E4], enumerable: true });
  };
  var M = {};
  DI(M, { beBuff2int: () => ZI, beInt2Buff: () => WI, leBuff2int: () => pI, leInt2Buff: () => lI, unstringifyBigInts: () => d });
  var B = {};
  DI(B, { abs: () => fI, add: () => iI, band: () => KI, bitLength: () => f, bits: () => l, bor: () => TI, bxor: () => PI, div: () => P, e: () => nI, eq: () => aI, exp: () => bI, fromArray: () => wI, fromRprBE: () => z, fromRprLE: () => m, fromString: () => R, geq: () => RI, gt: () => xI, isNegative: () => MI, isOdd: () => p, isZero: () => Z, land: () => qI, leq: () => OI, lor: () => VI, lt: () => yI, mod: () => hI, mul: () => QI, naf: () => tI, neg: () => kI, neq: () => uI, one: () => w, pow: () => N, shiftLeft: () => sI, shiftRight: () => W, shl: () => UI, shr: () => eI, square: () => YI, sub: () => T, toArray: () => rI, toLEBuff: () => vI, toNumber: () => JI, toRprBE: () => X, toRprLE: () => q, toString: () => SI, zero: () => y });
  var BI = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
  var R = (G7, I5) => {
    if (!I5 || I5 === 10)
      return BigInt(G7);
    if (I5 === 16)
      return G7.slice(0, 2) == "0x" ? BigInt(G7) : BigInt("0x" + G7);
    throw new Error("Unsupported radix");
  };
  var nI = R;
  var wI = (G7, I5) => {
    let E4 = BigInt(0), A5 = BigInt(I5);
    for (let o4 = 0; o4 < G7.length; o4++)
      E4 = E4 * A5 + BigInt(G7[o4]);
    return E4;
  };
  var f = (G7) => {
    let I5 = G7.toString(16);
    return (I5.length - 1) * 4 + BI[parseInt(I5[0], 16)];
  };
  var MI = (G7) => BigInt(G7) < BigInt(0);
  var Z = (G7) => G7 === y;
  var sI = (G7, I5) => G7 << I5;
  var W = (G7, I5) => G7 >> I5;
  var UI = sI;
  var eI = W;
  var p = (G7) => (G7 & w) == w;
  var tI = (G7) => {
    let I5 = G7, E4 = [];
    for (; I5; ) {
      if (I5 & w) {
        let A5 = 2 - Number(I5 % BigInt(4));
        E4.push(A5), I5 = I5 - BigInt(A5);
      } else
        E4.push(0);
      I5 = I5 >> w;
    }
    return E4;
  };
  var l = (G7) => {
    let I5 = G7, E4 = [];
    for (; I5; )
      I5 & w ? E4.push(1) : E4.push(0), I5 = I5 >> w;
    return E4;
  };
  var JI = (G7) => {
    if (G7 > BigInt(Number.MAX_SAFE_INTEGER))
      throw new Error("Number too big");
    return Number(G7);
  };
  var rI = (G7, I5) => {
    let E4 = [], A5 = G7, o4 = I5;
    for (; A5; )
      E4.unshift(Number(A5 % o4)), A5 = A5 / o4;
    return E4;
  };
  var iI = (G7, I5) => G7 + I5;
  var T = (G7, I5) => G7 - I5;
  var kI = (G7) => -G7;
  var QI = (G7, I5) => G7 * I5;
  var YI = (G7) => G7 * G7;
  var N = (G7, I5) => G7 ** I5;
  var bI = (G7, I5) => G7 ** I5;
  var fI = (G7) => G7 >= 0 ? G7 : -G7;
  var P = (G7, I5) => G7 / I5;
  var hI = (G7, I5) => G7 % I5;
  var aI = (G7, I5) => G7 === I5;
  var uI = (G7, I5) => G7 !== I5;
  var yI = (G7, I5) => G7 < I5;
  var xI = (G7, I5) => G7 > I5;
  var OI = (G7, I5) => G7 <= I5;
  var RI = (G7, I5) => G7 >= I5;
  var KI = (G7, I5) => G7 & I5;
  var TI = (G7, I5) => G7 | I5;
  var PI = (G7, I5) => G7 ^ I5;
  var qI = (G7, I5) => G7 && I5;
  var VI = (G7, I5) => G7 || I5;
  var q = (G7, I5, E4, A5) => {
    let o4 = "0000000" + E4.toString(16), D4 = new Uint32Array(G7.buffer, G7.byteOffset + I5, A5 / 4), s3 = ((o4.length - 7) * 4 - 1 >> 5) + 1;
    for (let t = 0; t < s3; t++)
      D4[t] = parseInt(o4.substring(o4.length - 8 * t - 8, o4.length - 8 * t), 16);
    for (let t = s3; t < D4.length; t++)
      D4[t] = 0;
    for (let t = D4.length * 4; t < A5; t++)
      G7[t] = JI(KI(W(E4, BigInt(t * 8)), BigInt(255)));
  };
  var X = (G7, I5, E4, A5) => {
    let o4 = "0000000" + E4.toString(16), D4 = new DataView(G7.buffer, G7.byteOffset + I5, A5), s3 = ((o4.length - 7) * 4 - 1 >> 5) + 1;
    for (let t = 0; t < s3; t++)
      D4.setUint32(A5 - t * 4 - 4, parseInt(o4.substring(o4.length - 8 * t - 8, o4.length - 8 * t), 16), false);
    for (let t = 0; t < A5 / 4 - s3; t++)
      D4.setInt32(0, 0, false);
  };
  var m = (G7, I5, E4) => {
    E4 = E4 || G7.byteLength, I5 = I5 || 0;
    let A5 = new Uint32Array(G7.buffer, G7.byteOffset + I5, E4 / 4), o4 = new Array(E4 / 4);
    return A5.forEach((D4, s3) => o4[o4.length - s3 - 1] = D4.toString(16).padStart(8, "0")), R(o4.join(""), 16);
  };
  var z = (G7, I5, E4) => {
    E4 = E4 || G7.byteLength, I5 = I5 || 0;
    let A5 = new DataView(G7.buffer, G7.byteOffset + I5, E4), o4 = new Array(E4 / 4);
    for (let D4 = 0; D4 < E4 / 4; D4++)
      o4[D4] = A5.getUint32(D4 * 4, false).toString(16).padStart(8, "0");
    return R(o4.join(""), 16);
  };
  var SI = (G7, I5 = 10) => G7.toString(I5);
  var vI = (G7) => {
    let I5 = new Uint8Array(Math.floor((f(G7) - 1) / 8) + 1);
    return q(I5, 0, G7, I5.byteLength), I5;
  };
  var y = BigInt(0);
  var w = BigInt(1);
  function d(G7) {
    if (Array.isArray(G7))
      return G7.map(d);
    if (typeof G7 == "object") {
      let A5 = {};
      for (let [o4, D4] of Object.entries(G7))
        A5[o4] = d(D4);
      return A5;
    }
    let E4 = [...Uint8Array.from(atob(G7), (A5) => A5.charCodeAt(0))].map((A5) => A5.toString(16).padStart(2, "0")).join("");
    return BigInt(`0x${E4}`);
  }
  function ZI(G7) {
    let I5 = BigInt(0), E4 = G7.length, A5 = 0, o4 = new DataView(G7.buffer, G7.byteOffset, G7.byteLength);
    for (; E4 > 0; )
      E4 >= 4 ? (E4 -= 4, I5 += BigInt(o4.getUint32(E4)) << BigInt(A5 * 8), A5 += 4) : E4 >= 2 ? (E4 -= 2, I5 += BigInt(o4.getUint16(E4)) << BigInt(A5 * 8), A5 += 2) : (E4 -= 1, I5 += BigInt(o4.getUint8(E4)) << BigInt(A5 * 8), A5 += 1);
    return I5;
  }
  function WI(G7, I5) {
    let E4 = G7, A5 = new Uint8Array(I5), o4 = new DataView(A5.buffer), D4 = I5;
    for (; D4 > 0; )
      D4 - 4 >= 0 ? (D4 -= 4, o4.setUint32(D4, Number(E4 & BigInt(4294967295))), E4 = E4 >> BigInt(32)) : D4 - 2 >= 0 ? (D4 -= 2, o4.setUint16(D4, Number(E4 & BigInt(65535))), E4 = E4 >> BigInt(16)) : (D4 -= 1, o4.setUint8(D4, Number(E4 & BigInt(255))), E4 = E4 >> BigInt(8));
    if (E4)
      throw new Error("Number does not fit in this length");
    return A5;
  }
  function pI(G7) {
    let I5 = BigInt(0), E4 = 0, A5 = new DataView(G7.buffer, G7.byteOffset, G7.byteLength);
    for (; E4 < G7.length; )
      E4 + 4 <= G7.length ? (I5 += BigInt(A5.getUint32(E4, true)) << BigInt(E4 * 8), E4 += 4) : E4 + 2 <= G7.length ? (I5 += BigInt(A5.getUint16(E4, true)) << BigInt(E4 * 8), E4 += 2) : (I5 += BigInt(A5.getUint8(E4)) << BigInt(E4 * 8), E4 += 1);
    return I5;
  }
  function lI(G7, I5) {
    let E4 = G7;
    typeof I5 > "u" && (I5 = Math.floor((f(G7) - 1) / 8) + 1, I5 == 0 && (I5 = 1));
    let A5 = new Uint8Array(I5), o4 = new DataView(A5.buffer), D4 = 0;
    for (; D4 < I5; )
      D4 + 4 <= I5 ? (o4.setUint32(D4, Number(E4 & BigInt(4294967295)), true), D4 += 4, E4 = E4 >> BigInt(32)) : D4 + 2 <= I5 ? (o4.setUint16(D4, Number(E4 & BigInt(65535)), true), D4 += 2, E4 = E4 >> BigInt(16)) : (o4.setUint8(D4, Number(E4 & BigInt(255))), D4 += 1, E4 = E4 >> BigInt(8));
    if (E4)
      throw new Error("Number does not fit in this length");
    return A5;
  }
  function V(G7) {
    if (G7 <= 0)
      throw new Error("Length must be greater than 0");
    let I5 = globalThis;
    if (I5.crypto?.getRandomValues) {
      let E4 = new Uint8Array(G7);
      return I5.crypto.getRandomValues(E4), E4;
    }
    throw new Error("Random byte generation is not supported in this environment");
  }
  var i = class {
    constructor(I5) {
      this.type = "F1", this.one = BigInt(1), this.zero = BigInt(0), this.p = BigInt(I5), this.m = w, this.negone = this.p - this.one, this.two = BigInt(2), this.half = this.p >> this.one, this.bitLength = f(this.p), this.mask = (this.one << BigInt(this.bitLength)) - this.one, this.n64 = Math.floor((this.bitLength - 1) / 64) + 1, this.n32 = this.n64 * 2, this.n8 = this.n64 * 8, this.R = this.e(this.one << BigInt(this.n64 * 64)), this.Ri = this.inv(this.R);
      let E4 = this.negone >> this.one;
      this.nqr = this.two;
      let A5 = this.pow(this.nqr, E4);
      for (; !this.eq(A5, this.negone); )
        this.nqr = this.nqr + this.one, A5 = this.pow(this.nqr, E4);
      for (this.s = 0, this.t = this.negone; (this.t & this.one) == this.zero; )
        this.s = this.s + 1, this.t = this.t >> this.one;
      this.nqr_to_t = this.pow(this.nqr, this.t), NI(this), this.shift = this.square(this.nqr), this.k = this.exp(this.nqr, BigInt(2 ** this.s));
    }
    e(I5, E4 = void 0) {
      let A5;
      if (E4 ? E4 == BigInt(16) && (A5 = BigInt("0x" + I5)) : A5 = BigInt(I5), A5 < 0) {
        let o4 = -A5;
        return o4 >= this.p && (o4 = o4 % this.p), this.p - o4;
      } else
        return A5 >= this.p ? A5 % this.p : A5;
    }
    add(I5, E4) {
      let A5 = I5 + E4;
      return A5 >= this.p ? A5 - this.p : A5;
    }
    sub(I5, E4) {
      return I5 >= E4 ? I5 - E4 : this.p - E4 + I5;
    }
    neg(I5) {
      return I5 && this.p - I5;
    }
    double(I5) {
      return this.add(I5, I5);
    }
    mul(I5, E4) {
      return I5 * E4 % this.p;
    }
    mulScalar(I5, E4) {
      return I5 * this.e(E4) % this.p;
    }
    square(I5) {
      return I5 * I5 % this.p;
    }
    eq(I5, E4) {
      return I5 == E4;
    }
    neq(I5, E4) {
      return I5 != E4;
    }
    lt(I5, E4) {
      let A5 = I5 > this.half ? I5 - this.p : I5, o4 = E4 > this.half ? E4 - this.p : E4;
      return A5 < o4;
    }
    gt(I5, E4) {
      let A5 = I5 > this.half ? I5 - this.p : I5, o4 = E4 > this.half ? E4 - this.p : E4;
      return A5 > o4;
    }
    leq(I5, E4) {
      let A5 = I5 > this.half ? I5 - this.p : I5, o4 = E4 > this.half ? E4 - this.p : E4;
      return A5 <= o4;
    }
    geq(I5, E4) {
      let A5 = I5 > this.half ? I5 - this.p : I5, o4 = E4 > this.half ? E4 - this.p : E4;
      return A5 >= o4;
    }
    div(I5, E4) {
      return this.mul(I5, this.inv(E4));
    }
    idiv(I5, E4) {
      if (!E4)
        throw new Error("Division by zero");
      return I5 / E4;
    }
    inv(I5) {
      if (!I5)
        throw new Error("Division by zero");
      let E4 = this.zero, A5 = this.p, o4 = this.one, D4 = I5 % this.p;
      for (; D4; ) {
        let s3 = A5 / D4;
        [E4, o4] = [o4, E4 - s3 * o4], [A5, D4] = [D4, A5 - s3 * D4];
      }
      return E4 < this.zero && (E4 += this.p), E4;
    }
    mod(I5, E4) {
      return I5 % E4;
    }
    pow(I5, E4) {
      return HI(this, I5, E4);
    }
    exp(I5, E4) {
      return HI(this, I5, BigInt(E4));
    }
    band(I5, E4) {
      let A5 = I5 & E4 & this.mask;
      return A5 >= this.p ? A5 - this.p : A5;
    }
    bor(I5, E4) {
      let A5 = (I5 | E4) & this.mask;
      return A5 >= this.p ? A5 - this.p : A5;
    }
    bxor(I5, E4) {
      let A5 = (I5 ^ E4) & this.mask;
      return A5 >= this.p ? A5 - this.p : A5;
    }
    bnot(I5) {
      let E4 = I5 ^ this.mask;
      return E4 >= this.p ? E4 - this.p : E4;
    }
    shl(I5, E4) {
      if (Number(E4) < this.bitLength) {
        let A5 = I5 << E4 & this.mask;
        return A5 >= this.p ? A5 - this.p : A5;
      } else {
        let A5 = this.p - E4;
        return Number(A5) < this.bitLength ? I5 >> A5 : this.zero;
      }
    }
    shr(I5, E4) {
      if (Number(E4) < this.bitLength)
        return I5 >> E4;
      {
        let A5 = this.p - E4;
        if (Number(A5) < this.bitLength) {
          let o4 = I5 << A5 & this.mask;
          return o4 >= this.p ? o4 - this.p : o4;
        } else
          return y;
      }
    }
    land(I5, E4) {
      return I5 && E4 ? this.one : this.zero;
    }
    lor(I5, E4) {
      return I5 || E4 ? this.one : this.zero;
    }
    sqrt_old(I5) {
      if (I5 == this.zero)
        return this.zero;
      if (this.pow(I5, this.negone >> this.one) != this.one)
        return null;
      let A5 = this.s, o4 = this.nqr_to_t, D4 = this.pow(I5, this.t), s3 = this.pow(I5, this.add(this.t, this.one) >> this.one);
      for (; D4 != this.one; ) {
        let t = this.square(D4), H4 = 1;
        for (; t != this.one; )
          H4++, t = this.square(t);
        let J4 = o4;
        for (let K4 = 0; K4 < A5 - H4 - 1; K4++)
          J4 = this.square(J4);
        A5 = H4, o4 = this.square(J4), D4 = this.mul(D4, o4), s3 = this.mul(s3, J4);
      }
      return s3 > this.p >> this.one && (s3 = this.neg(s3)), s3;
    }
    normalize(I5) {
      if (I5 < 0) {
        let E4 = -I5;
        return E4 >= this.p && (E4 = E4 % this.p), this.p - E4;
      } else
        return I5 >= this.p ? I5 % this.p : I5;
    }
    random() {
      let I5 = this.bitLength * 2 / 8, E4 = this.zero;
      for (let A5 = 0; A5 < I5; A5++)
        E4 = (E4 << BigInt(8)) + BigInt(V(1)[0]);
      return E4 % this.p;
    }
    toString(I5, E4 = 10) {
      E4 = E4 || 10;
      let A5;
      return I5 > this.half && E4 == 10 ? A5 = "-" + (this.p - I5).toString(E4) : A5 = I5.toString(E4), A5;
    }
    isZero(I5) {
      return I5 == this.zero;
    }
    toRprLE(I5, E4, A5) {
      q(I5, E4, A5, this.n64 * 8);
    }
    toRprBE(I5, E4, A5) {
      X(I5, E4, A5, this.n64 * 8);
    }
    toRprBEM(I5, E4, A5) {
      return this.toRprBE(I5, E4, this.mul(this.R, A5));
    }
    toRprLEM(I5, E4, A5) {
      return this.toRprLE(I5, E4, this.mul(this.R, A5));
    }
    fromRprLE(I5, E4) {
      return m(I5, E4, this.n8);
    }
    fromRprBE(I5, E4) {
      return z(I5, E4, this.n8);
    }
    fromRprLEM(I5, E4) {
      return this.mul(this.fromRprLE(I5, E4), this.Ri);
    }
    fromRprBEM(I5, E4) {
      return this.mul(this.fromRprBE(I5, E4), this.Ri);
    }
    toObject(I5) {
      return I5;
    }
    sqrt(I5) {
      throw new Error("Not implemented sqrt for F1" + I5);
    }
  };
  function NI(G7) {
    for (G7.sqrt_q = N(G7.p, G7.m), G7.sqrt_s = y, G7.sqrt_t = T(G7.sqrt_q, w); !p(G7.sqrt_t); )
      G7.sqrt_s = G7.sqrt_s + w, G7.sqrt_t = P(G7.sqrt_t, 2n);
    let I5 = G7.one;
    for (; G7.eq(I5, G7.one); ) {
      let E4 = G7.random();
      G7.sqrt_z = G7.pow(E4, G7.sqrt_t), I5 = G7.pow(G7.sqrt_z, 2n ** (G7.sqrt_s - w));
    }
    G7.sqrt_tm1d2 = P(T(G7.sqrt_t, w), 2n), G7.sqrt = (E4) => {
      if (G7.isZero(E4))
        return G7.zero;
      let A5 = G7.pow(E4, G7.sqrt_tm1d2), o4 = G7.pow(G7.mul(G7.square(A5), E4), 2n ** (G7.sqrt_s - w));
      if (G7.eq(o4, G7.negone))
        return null;
      let D4 = G7.sqrt_s, s3 = G7.mul(E4, A5), t = G7.mul(s3, A5), H4 = G7.sqrt_z;
      for (; !G7.eq(t, G7.one); ) {
        let J4 = G7.square(t), K4 = w;
        for (; !G7.eq(J4, G7.one); )
          J4 = G7.square(J4), K4++;
        A5 = H4;
        for (let C5 = 0; C5 < D4 - K4 - w; C5++)
          A5 = G7.square(A5);
        H4 = G7.square(A5), t = G7.mul(t, H4), s3 = G7.mul(s3, A5), D4 = K4;
      }
      return G7.geq(s3, G7.zero) ? s3 : G7.neg(s3);
    };
  }
  function HI(G7, I5, E4) {
    if (Z(E4))
      return G7.one;
    let A5 = l(E4);
    if (A5.length == 0)
      return G7.one;
    let o4 = I5;
    for (let D4 = A5.length - 2; D4 >= 0; D4--)
      o4 = G7.square(o4), A5[D4] && (o4 = G7.mul(o4, I5));
    return o4;
  }
  var j = class {
    constructor(I5) {
      this.F = I5, this.p = BigInt("21888242871839275222246405745257275088548364400416034343698204186575808495617"), this.pm1d2 = B.div(B.sub(this.p, B.one), 2n), this.Generator = [I5.e("995203441582195749578291179787384436505546430278305826713579947235728471134"), I5.e("5472060717959818805561601436314318772137091100104008585924551046643952123905")], this.Base8 = [I5.e("5299619240641551281634865583518297030282874472190772894086521144482721001553"), I5.e("16950150798460657717958625567821834550301663161624707787222815936182638968203")], this.order = BigInt("21888242871839275222246405745257275088614511777268538073601725287587578984328"), this.subOrder = B.shiftRight(this.order, 3n), this.A = I5.e("168700"), this.D = I5.e("168696");
    }
    addPoint(I5, E4) {
      let A5 = this.F, o4 = new Array(2), D4 = A5.mul(I5[0], E4[1]), s3 = A5.mul(I5[1], E4[0]), t = A5.mul(A5.sub(I5[1], A5.mul(this.A, I5[0])), A5.add(E4[0], E4[1])), H4 = A5.mul(D4, s3), J4 = A5.mul(this.D, H4);
      return o4[0] = A5.div(A5.add(D4, s3), A5.add(A5.one, J4)), o4[1] = A5.div(A5.add(t, A5.sub(A5.mul(this.A, D4), s3)), A5.sub(A5.one, J4)), o4;
    }
    mulPointEscalar(I5, E4) {
      let A5 = this.F, o4 = [A5.e("0"), A5.e("1")], D4 = E4, s3 = I5;
      for (; !B.isZero(D4); )
        B.isOdd(D4) && (o4 = this.addPoint(o4, s3)), s3 = this.addPoint(s3, s3), D4 = B.shiftRight(D4, B.one);
      return o4;
    }
    inSubgroup(I5) {
      let E4 = this.F;
      if (!this.inCurve(I5))
        return false;
      let A5 = this.mulPointEscalar(I5, this.subOrder);
      return E4.isZero(A5[0]) && E4.eq(A5[1], E4.one);
    }
    inCurve(I5) {
      let E4 = this.F, A5 = E4.square(I5[0]), o4 = E4.square(I5[1]);
      return !!E4.eq(E4.add(E4.mul(this.A, A5), o4), E4.add(E4.one, E4.mul(E4.mul(A5, o4), this.D)));
    }
    packPoint(I5) {
      let E4 = this.F, A5 = new Uint8Array(32);
      E4.toRprLE(A5, 0, I5[1]);
      let o4 = E4.toObject(I5[0]);
      return B.gt(o4, this.pm1d2) && (A5[31] = A5[31] | 128), A5;
    }
    unpackPoint(I5) {
      let E4 = this.F, A5 = false, o4 = [BigInt(0), BigInt(0)];
      if (I5[31] & 128 && (A5 = true, I5[31] = I5[31] & 127), o4[1] = E4.fromRprLE(I5, 0), B.gt(E4.toObject(o4[1]), this.p))
        return null;
      let D4 = E4.square(o4[1]), s3 = E4.div(E4.sub(E4.one, D4), E4.sub(this.A, E4.mul(this.D, D4))), t = E4.exp(s3, BigInt(E4.half));
      if (!E4.eq(E4.one, t))
        return null;
      let H4 = E4.sqrt(s3);
      return H4 == null ? null : (A5 && (H4 = E4.neg(H4)), o4[0] = BigInt(H4), o4);
    }
  };
  var XI = new i(BigInt("21888242871839275222246405745257275088548364400416034343698204186575808495617"));
  var n = new j(XI);
  var S = M.unstringifyBigInts(CI);
  var zI = 8;
  var gI = [56, 57, 56, 60, 60, 63, 64, 63, 60, 66, 60, 65, 70, 60, 64, 68];
  var dI = 16;
  var k = 31;
  var L = new i(B.fromString("21888242871839275222246405745257275088548364400416034343698204186575808495617"));
  var x = (G7) => L.mul(G7, L.square(L.square(G7)));
  var h = class h2 {
    static hash(I5) {
      if (!(I5.length > 0 && I5.length <= gI.length))
        throw new Error("Invalid inputs");
      let E4 = I5.length + 1, A5 = zI, o4 = gI[E4 - 2], D4 = S.C[E4 - 2], s3 = S.S[E4 - 2], t = S.M[E4 - 2], H4 = S.P[E4 - 2], J4 = [L.zero, ...I5.map((K4) => L.e(K4))];
      J4 = J4.map((K4, C5) => L.add(K4, D4[C5]));
      for (let K4 = 0; K4 < A5 / 2 - 1; K4++)
        J4 = J4.map((C5) => x(C5)), J4 = J4.map((C5, F4) => L.add(C5, D4[(K4 + 1) * E4 + F4])), J4 = J4.map((C5, F4) => J4.reduce((c3, g5, r) => L.add(c3, L.mul(t[r][F4], g5)), L.zero));
      J4 = J4.map((K4) => x(K4)), J4 = J4.map((K4, C5) => L.add(K4, D4[(A5 / 2 - 1 + 1) * E4 + C5])), J4 = J4.map((K4, C5) => J4.reduce((F4, c3, g5) => L.add(F4, L.mul(H4[g5][C5], c3)), L.zero));
      for (let K4 = 0; K4 < o4; K4++) {
        J4[0] = x(J4[0]), J4[0] = L.add(J4[0], D4[(A5 / 2 + 1) * E4 + K4]);
        let C5 = J4.reduce((F4, c3, g5) => L.add(F4, L.mul(s3[(E4 * 2 - 1) * K4 + g5], c3)), L.zero);
        for (let F4 = 1; F4 < E4; F4++)
          J4[F4] = L.add(J4[F4], L.mul(J4[0], s3[(E4 * 2 - 1) * K4 + E4 + F4 - 1]));
        J4[0] = C5;
      }
      for (let K4 = 0; K4 < A5 / 2 - 1; K4++)
        J4 = J4.map((C5) => x(C5)), J4 = J4.map((C5, F4) => L.add(C5, D4[(A5 / 2 + 1) * E4 + o4 + K4 * E4 + F4])), J4 = J4.map((C5, F4) => J4.reduce((c3, g5, r) => L.add(c3, L.mul(t[r][F4], g5)), L.zero));
      return J4 = J4.map((K4) => x(K4)), J4 = J4.map((K4, C5) => J4.reduce((F4, c3, g5) => L.add(F4, L.mul(t[g5][C5], c3)), L.zero)), L.normalize(J4[0]);
    }
    static hashBytes(I5) {
      return h2.hashBytesX(I5, dI);
    }
    static hashBytesX(I5, E4) {
      let A5 = new Array(E4).fill(BigInt(0)), o4 = false, D4, s3 = 0;
      for (let t = 0; t < parseInt(`${I5.length / k}`); t += 1)
        if (o4 = true, A5[s3] = M.beBuff2int(I5.slice(k * t, k * (t + 1))), s3 === E4 - 1) {
          D4 = h2.hash(A5), o4 = false, A5[0] = D4, A5.fill(BigInt(0), 1, k);
          for (let H4 = 1; H4 < E4; H4 += 1)
            A5[H4] = BigInt(0);
          s3 = 1;
        } else
          s3 += 1;
      if (I5.length % k != 0) {
        let t = new Uint8Array(k);
        I5.slice(parseInt(`${I5.length / k}`) * k).forEach((J4, K4) => {
          t[K4] = J4;
        }), A5[s3] = M.beBuff2int(t), o4 = true;
      }
      return o4 && (D4 = h2.hash(A5)), D4;
    }
    static spongeHashX(I5, E4) {
      if (E4 < 2 || E4 > 16)
        throw new Error("incorrect frame size");
      let A5 = new Array(E4).fill(BigInt(0)), o4 = false, D4, s3 = 0;
      for (let t = 0; t < I5.length; t++)
        o4 = true, A5[s3] = I5[t], s3 === E4 - 1 ? (D4 = this.hash(A5), o4 = false, A5 = new Array(E4).fill(BigInt(0)), A5[0] = D4, s3 = 1) : s3++;
      if (o4 && (D4 = this.hash(A5)), !D4)
        throw new Error("hash is undefined");
      return D4;
    }
  };
  h.F = L;
  var _ = h;
  var $ = _;
  var jI = Uint8Array.from([1]);
  var _I = Uint8Array.from([129]);
  function v(G7, I5, E4, A5) {
    let o4 = G7[I5 * 2] ^ G7[E4 * 2], D4 = G7[I5 * 2 + 1] ^ G7[E4 * 2 + 1];
    A5 >= 32 && (D4 = D4 ^ o4, o4 = D4 ^ o4, D4 = D4 ^ o4, A5 -= 32), A5 === 0 ? (G7[I5 * 2] = o4 >>> 0, G7[I5 * 2 + 1] = D4 >>> 0) : (G7[I5 * 2] = (o4 >>> A5 | D4 << 32 - A5) >>> 0, G7[I5 * 2 + 1] = (D4 >>> A5 | o4 << 32 - A5) >>> 0);
  }
  function Q(G7, I5, E4, A5, o4, D4, s3, t) {
    let H4 = Y.sigma, J4 = Y.u512, K4;
    K4 = G7[A5 * 2 + 1] + ((I5[H4[E4][t] * 2 + 1] ^ J4[H4[E4][t + 1] * 2 + 1]) >>> 0) + G7[o4 * 2 + 1], G7[A5 * 2] = G7[A5 * 2] + ((I5[H4[E4][t] * 2] ^ J4[H4[E4][t + 1] * 2]) >>> 0) + G7[o4 * 2] + ~~(K4 / 4294967296) >>> 0, G7[A5 * 2 + 1] = K4 >>> 0, v(G7, s3, A5, 32), K4 = G7[D4 * 2 + 1] + G7[s3 * 2 + 1], G7[D4 * 2] = G7[D4 * 2] + G7[s3 * 2] + ~~(K4 / 4294967296) >>> 0, G7[D4 * 2 + 1] = K4 >>> 0, v(G7, o4, D4, 25), K4 = G7[A5 * 2 + 1] + ((I5[H4[E4][t + 1] * 2 + 1] ^ J4[H4[E4][t] * 2 + 1]) >>> 0) + G7[o4 * 2 + 1], G7[A5 * 2] = G7[A5 * 2] + ((I5[H4[E4][t + 1] * 2] ^ J4[H4[E4][t] * 2]) >>> 0) + G7[o4 * 2] + ~~(K4 / 4294967296) >>> 0, G7[A5 * 2 + 1] = K4 >>> 0, v(G7, s3, A5, 16), K4 = G7[D4 * 2 + 1] + G7[s3 * 2 + 1], G7[D4 * 2] = G7[D4 * 2] + G7[s3 * 2] + ~~(K4 / 4294967296) >>> 0, G7[D4 * 2 + 1] = K4 >>> 0, v(G7, o4, D4, 11);
  }
  var e = class e2 {
    constructor() {
      this._h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this._s = [0, 0, 0, 0, 0, 0, 0, 0], this._block = new Uint8Array(128), this._blockOffset = 0, this._length = [0, 0, 0, 0], this._nullt = false, this._zo = jI, this._oo = _I;
    }
    _lengthCarry(I5) {
      for (let E4 = 0; E4 < I5.length && !(I5[E4] < 4294967296); ++E4)
        I5[E4] -= 4294967296, I5[E4 + 1] += 1;
    }
    _compress() {
      let I5 = e2.u512, E4 = new Array(32), A5 = new Array(32), o4, D4 = new DataView(this._block.buffer);
      for (o4 = 0; o4 < 32; ++o4)
        A5[o4] = D4.getUint32(o4 * 4);
      for (o4 = 0; o4 < 16; ++o4)
        E4[o4] = this._h[o4] >>> 0;
      for (o4 = 16; o4 < 24; ++o4)
        E4[o4] = (this._s[o4 - 16] ^ I5[o4 - 16]) >>> 0;
      for (o4 = 24; o4 < 32; ++o4)
        E4[o4] = I5[o4 - 16];
      for (this._nullt || (E4[24] = (E4[24] ^ this._length[1]) >>> 0, E4[25] = (E4[25] ^ this._length[0]) >>> 0, E4[26] = (E4[26] ^ this._length[1]) >>> 0, E4[27] = (E4[27] ^ this._length[0]) >>> 0, E4[28] = (E4[28] ^ this._length[3]) >>> 0, E4[29] = (E4[29] ^ this._length[2]) >>> 0, E4[30] = (E4[30] ^ this._length[3]) >>> 0, E4[31] = (E4[31] ^ this._length[2]) >>> 0), o4 = 0; o4 < 16; ++o4)
        Q(E4, A5, o4, 0, 4, 8, 12, 0), Q(E4, A5, o4, 1, 5, 9, 13, 2), Q(E4, A5, o4, 2, 6, 10, 14, 4), Q(E4, A5, o4, 3, 7, 11, 15, 6), Q(E4, A5, o4, 0, 5, 10, 15, 8), Q(E4, A5, o4, 1, 6, 11, 12, 10), Q(E4, A5, o4, 2, 7, 8, 13, 12), Q(E4, A5, o4, 3, 4, 9, 14, 14);
      for (o4 = 0; o4 < 16; ++o4)
        this._h[o4 % 8 * 2] = (this._h[o4 % 8 * 2] ^ E4[o4 * 2]) >>> 0, this._h[o4 % 8 * 2 + 1] = (this._h[o4 % 8 * 2 + 1] ^ E4[o4 * 2 + 1]) >>> 0;
      for (o4 = 0; o4 < 8; ++o4)
        this._h[o4 * 2] = (this._h[o4 * 2] ^ this._s[o4 % 4 * 2]) >>> 0, this._h[o4 * 2 + 1] = (this._h[o4 * 2 + 1] ^ this._s[o4 % 4 * 2 + 1]) >>> 0;
    }
    _padding() {
      let I5 = this._length.slice();
      I5[0] += this._blockOffset * 8, this._lengthCarry(I5);
      let E4 = new Uint8Array(16), A5 = new DataView(E4.buffer);
      for (let o4 = 0; o4 < 4; ++o4)
        A5.setUint32(o4 * 4, I5[3 - o4]);
      this._blockOffset === 111 ? (this._length[0] -= 8, this.update(this._oo)) : (this._blockOffset < 111 ? (this._blockOffset === 0 && (this._nullt = true), this._length[0] -= (111 - this._blockOffset) * 8, this.update(e2.padding.slice(0, 111 - this._blockOffset))) : (this._length[0] -= (128 - this._blockOffset) * 8, this.update(e2.padding.slice(0, 128 - this._blockOffset)), this._length[0] -= 111 * 8, this.update(e2.padding.slice(1, 1 + 111)), this._nullt = true), this.update(this._zo), this._length[0] -= 8), this._length[0] -= 128, this.update(new Uint8Array(A5.buffer));
    }
    digest() {
      this._padding();
      let I5 = new Uint8Array(64), E4 = new DataView(I5.buffer);
      for (let A5 = 0; A5 < 16; ++A5)
        E4.setUint32(A5 * 4, this._h[A5]);
      return new Uint8Array(E4.buffer);
    }
    update(I5) {
      let E4 = this._block, A5 = 0;
      for (; this._blockOffset + I5.length - A5 >= E4.length; ) {
        for (let o4 = this._blockOffset; o4 < E4.length; )
          E4[o4++] = I5[A5++];
        this._length[0] += E4.length * 8, this._lengthCarry(this._length), this._compress(), this._blockOffset = 0;
      }
      for (; A5 < I5.length; )
        E4[this._blockOffset++] = I5[A5++];
      return this;
    }
  };
  e.sigma = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3], [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4], [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8], [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13], [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9], [12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11], [13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10], [6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5], [10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3], [11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4], [7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8], [9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13], [2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]], e.u256 = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479], e.u512 = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731, 3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113], e.padding = Uint8Array.from([128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  var Y = e;
  var II = class G {
    constructor() {
      this.babyJub = n;
    }
    static pruneBuffer(I5) {
      return I5[0] = I5[0] & 248, I5[31] = I5[31] & 127, I5[31] = I5[31] | 64, I5;
    }
    static prv2pub(I5) {
      let E4 = this.pruneBuffer(new Y().update(I5).digest()), A5 = B.fromRprLE(E4, 0, 32);
      return n.mulPointEscalar(n.Base8, B.shr(A5, 3n));
    }
    static signPoseidon(I5, E4) {
      let A5 = new Y().update(I5).digest(), o4 = G.pruneBuffer(A5.slice(0, 32)), D4 = M.leBuff2int(o4), s3 = n.mulPointEscalar(n.Base8, B.shr(D4, 3n)), t = M.leInt2Buff(E4, 32), H4 = new Uint8Array(64);
      H4.set(A5.slice(32, 64), 0), H4.set(t, 32);
      let J4 = new Y().update(H4).digest(), K4 = M.leBuff2int(J4), C5 = new i(n.subOrder);
      K4 = C5.e(K4);
      let F4 = n.mulPointEscalar(n.Base8, K4), c3 = $.hash([F4[0], F4[1], s3[0], s3[1], E4]), g5 = C5.add(K4, C5.mul(c3, D4));
      return { R8: F4, S: g5 };
    }
    static verifyPoseidon(I5, E4, A5) {
      if (typeof E4 != "object" || !Array.isArray(E4.R8) || E4.R8.length != 2 || !n.inCurve(E4.R8) || !Array.isArray(A5) || A5.length != 2 || !n.inCurve(A5) || E4.S >= n.subOrder)
        return false;
      let D4 = $.hash([E4.R8[0], E4.R8[1], A5[0], A5[1], I5]), s3 = n.mulPointEscalar(n.Base8, E4.S), t = n.mulPointEscalar(A5, B.mul(D4, 8n));
      return t = n.addPoint(E4.R8, t), !(!n.F.eq(s3[0], t[0]) || !n.F.eq(s3[1], t[1]));
    }
    static packSignature(I5) {
      let E4 = new Uint8Array(64), A5 = n.packPoint(I5.R8);
      return E4.set(A5, 0), B.toRprLE(E4, 32, I5.S, 32), E4;
    }
    static unpackSignature(I5) {
      return { R8: n.unpackPoint(I5.slice(0, 32)), S: B.fromRprLE(I5, 32, 32) };
    }
  };
  var a = II;
  var U = class U2 {
    static encodeLength(I5) {
      return I5 * 2;
    }
    static encode(I5) {
      let E4 = new Uint8Array(U2.encodeLength(I5.length)), A5 = 0;
      for (let o4 = 0; o4 < I5.length; o4++)
        E4[A5] = U2.HEX_TABLE[I5[o4] >> 4].charCodeAt(0), E4[A5 + 1] = U2.HEX_TABLE[I5[o4] & 15].charCodeAt(0), A5 += 2;
      return E4;
    }
    static decodeString(I5) {
      return U2.decode(I5);
    }
    static fromHexChar(I5) {
      if ("0".charCodeAt(0) <= I5 && I5 <= "9".charCodeAt(0))
        return I5 - "0".charCodeAt(0);
      if ("a".charCodeAt(0) <= I5 && I5 <= "f".charCodeAt(0))
        return I5 - "a".charCodeAt(0) + 10;
      if ("A".charCodeAt(0) <= I5 && I5 <= "F".charCodeAt(0))
        return I5 - "A".charCodeAt(0) + 10;
      throw new Error(`Invalid byte char ${I5}`);
    }
    static decode(I5) {
      let E4 = 0, A5 = 1, o4 = [];
      for (; A5 < I5.length; A5 += 2) {
        let D4 = U2.fromHexChar(I5[A5 - 1].charCodeAt(0)), s3 = U2.fromHexChar(I5[A5].charCodeAt(0));
        o4[E4] = D4 << 4 | s3, E4++;
      }
      if (I5.length % 2 == 1)
        throw new Error("Invalid hex string");
      return Uint8Array.from(o4);
    }
    static encodeString(I5) {
      return new TextDecoder().decode(U2.encode(I5));
    }
  };
  U.HEX_TABLE = "0123456789abcdef", U.textEncoder = new TextEncoder();
  var b = U;
  var EI = class G2 {
    constructor(I5, E4) {
      this.R8 = I5, this.S = E4;
    }
    static newFromCompressed(I5) {
      if (I5.length !== 64)
        throw new Error("buf must be 64 bytes");
      let E4 = a.unpackSignature(I5);
      if (E4.R8 == null)
        throw new Error("unpackSignature failed");
      return new G2(E4.R8, E4.S);
    }
    compress() {
      return a.packSignature(this);
    }
    toString() {
      return this.compress().toString();
    }
    hex() {
      return b.encodeString(this.compress());
    }
  };
  var AI = class G3 {
    constructor(I5) {
      this.p = I5;
    }
    static newFromCompressed(I5) {
      if (I5.length !== 32)
        throw new Error("buf must be 32 bytes");
      let E4 = n.unpackPoint(I5);
      if (E4 == null)
        throw new Error("unpackPoint failed");
      return new G3(E4);
    }
    static newFromHex(I5) {
      let E4 = b.decodeString(I5);
      return G3.newFromCompressed(E4);
    }
    compress() {
      return n.packPoint(this.p);
    }
    toString() {
      return this.compress().toString();
    }
    hex() {
      return b.encodeString(this.compress());
    }
    verifyPoseidon(I5, E4) {
      return a.verifyPoseidon(I5, E4, this.p);
    }
  };
  var FI = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var uE = (G7) => {
    let I5 = [], E4 = "", A5 = 0, o4 = 0, D4;
    for (let s3 = 0; s3 < G7.length; s3++)
      for (A5 = 0, o4 = G7[s3], E4 += o4 || E4.length ^ s3 ? "" : "1"; A5 in I5 || o4; )
        D4 = I5[A5], D4 = D4 ? D4 * 256 + o4 : o4, o4 = D4 / 58 | 0, I5[A5] = D4 % 58, A5++;
    for (; A5--; )
      E4 += FI[I5[A5]];
    return E4;
  };
  var yE = (G7) => {
    let I5 = [], E4 = [], A5 = 0, o4 = 0, D4 = 0;
    for (let s3 = 0; s3 < G7.length; s3++) {
      if (A5 = 0, o4 = FI.indexOf(G7[s3]), o4 < 0)
        throw new Error(`Can't convert base58 string ${G7} to bytes`);
      for (o4 || E4.length ^ s3 || E4.push(0); A5 in I5 || o4; )
        D4 = I5[A5], D4 = D4 ? D4 * 58 + o4 : o4, o4 = D4 >> 8, I5[A5] = D4 % 256, A5++;
    }
    for (; A5--; )
      E4.push(I5[A5]);
    return new Uint8Array(E4);
  };
  var $I = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
  function GI(G7, I5, E4, A5, o4) {
    let D4, s3, t, H4, J4, K4, C5, F4, c3, g5, r, u4, O3;
    for (; o4 >= 64; ) {
      for (D4 = I5[0], s3 = I5[1], t = I5[2], H4 = I5[3], J4 = I5[4], K4 = I5[5], C5 = I5[6], F4 = I5[7], g5 = 0; g5 < 16; g5++)
        r = A5 + g5 * 4, G7[g5] = (E4[r] & 255) << 24 | (E4[r + 1] & 255) << 16 | (E4[r + 2] & 255) << 8 | E4[r + 3] & 255;
      for (g5 = 16; g5 < 64; g5++)
        c3 = G7[g5 - 2], u4 = (c3 >>> 17 | c3 << 32 - 17) ^ (c3 >>> 19 | c3 << 32 - 19) ^ c3 >>> 10, c3 = G7[g5 - 15], O3 = (c3 >>> 7 | c3 << 32 - 7) ^ (c3 >>> 18 | c3 << 32 - 18) ^ c3 >>> 3, G7[g5] = (u4 + G7[g5 - 7] | 0) + (O3 + G7[g5 - 16] | 0);
      for (g5 = 0; g5 < 64; g5++)
        u4 = (((J4 >>> 6 | J4 << 32 - 6) ^ (J4 >>> 11 | J4 << 32 - 11) ^ (J4 >>> 25 | J4 << 32 - 25)) + (J4 & K4 ^ ~J4 & C5) | 0) + (F4 + ($I[g5] + G7[g5] | 0) | 0) | 0, O3 = ((D4 >>> 2 | D4 << 32 - 2) ^ (D4 >>> 13 | D4 << 32 - 13) ^ (D4 >>> 22 | D4 << 32 - 22)) + (D4 & s3 ^ D4 & t ^ s3 & t) | 0, F4 = C5, C5 = K4, K4 = J4, J4 = H4 + u4 | 0, H4 = t, t = s3, s3 = D4, D4 = u4 + O3 | 0;
      I5[0] += D4, I5[1] += s3, I5[2] += t, I5[3] += H4, I5[4] += J4, I5[5] += K4, I5[6] += C5, I5[7] += F4, A5 += 64, o4 -= 64;
    }
    return A5;
  }
  var oI = class {
    constructor() {
      this.digestLength = 32;
      this.blockSize = 64;
      this.state = new Int32Array(8);
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(128);
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
      this.reset();
    }
    reset() {
      return this.state[0] = 1779033703, this.state[1] = 3144134277, this.state[2] = 1013904242, this.state[3] = 2773480762, this.state[4] = 1359893119, this.state[5] = 2600822924, this.state[6] = 528734635, this.state[7] = 1541459225, this.bufferLength = 0, this.bytesHashed = 0, this.finished = false, this;
    }
    clean() {
      for (let I5 = 0; I5 < this.buffer.length; I5++)
        this.buffer[I5] = 0;
      for (let I5 = 0; I5 < this.temp.length; I5++)
        this.temp[I5] = 0;
      this.reset();
    }
    update(I5, E4 = I5.length) {
      if (this.finished)
        throw new Error("SHA256: can't update because hash was finished.");
      let A5 = 0;
      if (this.bytesHashed += E4, this.bufferLength > 0) {
        for (; this.bufferLength < 64 && E4 > 0; )
          this.buffer[this.bufferLength++] = I5[A5++], E4--;
        this.bufferLength === 64 && (GI(this.temp, this.state, this.buffer, 0, 64), this.bufferLength = 0);
      }
      for (E4 >= 64 && (A5 = GI(this.temp, this.state, I5, A5, E4), E4 %= 64); E4 > 0; )
        this.buffer[this.bufferLength++] = I5[A5++], E4--;
      return this;
    }
    finish(I5) {
      if (!this.finished) {
        let E4 = this.bytesHashed, A5 = this.bufferLength, o4 = E4 / 536870912 | 0, D4 = E4 << 3, s3 = E4 % 64 < 56 ? 64 : 128;
        this.buffer[A5] = 128;
        for (let t = A5 + 1; t < s3 - 8; t++)
          this.buffer[t] = 0;
        this.buffer[s3 - 8] = o4 >>> 24 & 255, this.buffer[s3 - 7] = o4 >>> 16 & 255, this.buffer[s3 - 6] = o4 >>> 8 & 255, this.buffer[s3 - 5] = o4 >>> 0 & 255, this.buffer[s3 - 4] = D4 >>> 24 & 255, this.buffer[s3 - 3] = D4 >>> 16 & 255, this.buffer[s3 - 2] = D4 >>> 8 & 255, this.buffer[s3 - 1] = D4 >>> 0 & 255, GI(this.temp, this.state, this.buffer, 0, s3), this.finished = true;
      }
      for (let E4 = 0; E4 < 8; E4++)
        I5[E4 * 4 + 0] = this.state[E4] >>> 24 & 255, I5[E4 * 4 + 1] = this.state[E4] >>> 16 & 255, I5[E4 * 4 + 2] = this.state[E4] >>> 8 & 255, I5[E4 * 4 + 3] = this.state[E4] >>> 0 & 255;
      return this;
    }
    digest() {
      let I5 = new Uint8Array(this.digestLength);
      return this.finish(I5), I5;
    }
    _saveState(I5) {
      for (let E4 = 0; E4 < this.state.length; E4++)
        I5[E4] = this.state[E4];
    }
    _restoreState(I5, E4) {
      for (let A5 = 0; A5 < this.state.length; A5++)
        this.state[A5] = I5[A5];
      this.bytesHashed = E4, this.finished = false, this.bufferLength = 0;
    }
  };
  function OE(G7) {
    let I5 = new oI().update(G7), E4 = I5.digest();
    return I5.clean(), E4;
  }

  // node_modules/@iden3/js-iden3-core/dist/browser/esm/index.js
  var s = Object.freeze({ ERRORS: { DATA_OVERFLOW: new Error("data does not fits SNARK size"), INCORRECT_ID_POSITION: new Error("incorrect ID position"), NO_ID: new Error("ID is not set"), INVALID_SUBJECT_POSITION: new Error("invalid subject position"), INCORRECT_MERKLIZED_POSITION: new Error("incorrect Merklize position"), NO_MERKLIZED_ROOT: new Error("Merklized root is not set"), NETWORK_NOT_SUPPORTED_FOR_DID: new Error("network in not supported for did"), UNSUPPORTED_BLOCKCHAIN_FOR_DID: new Error("not supported blockchain for did"), UNSUPPORTED_DID_METHOD: new Error("not supported DID method"), UNKNOWN_DID_METHOD: new Error("unknown DID method"), INCORRECT_DID: new Error("incorrect DID"), UNSUPPORTED_ID: new Error("unsupported Id") }, SCHEMA: { HASH_LENGTH: 16 }, ETH_ADDRESS_LENGTH: 20, BYTES_LENGTH: 32, ELEM_BYTES_LENGTH: 4, NONCE_BYTES_LENGTH: 8, Q: BigInt("21888242871839275222246405745257275088548364400416034343698204186575808495617"), ID: { TYPE_DEFAULT: Uint8Array.from([0, 0]), TYPE_READONLY: Uint8Array.from([0, 1]), ID_LENGTH: 31 }, DID: { DID_SCHEMA: "did" }, GENESIS_LENGTH: 27 });
  var o = { Ethereum: "eth", Polygon: "polygon", Privado: "privado", Linea: "linea", Unknown: "unknown", NoChain: "", ReadOnly: "readonly" };
  var a2 = { Main: "main", Mumbai: "mumbai", Amoy: "amoy", Goerli: "goerli", Sepolia: "sepolia", Zkevm: "zkevm", Cardona: "cardona", Test: "test", Unknown: "unknown", NoNetwork: "" };
  var h3 = { Iden3: "iden3", PolygonId: "polygonid", Other: "" };
  var l2 = { [`${o.Ethereum}:${a2.Main}`]: 1, [`${o.Ethereum}:${a2.Goerli}`]: 5, [`${o.Ethereum}:${a2.Sepolia}`]: 11155111, [`${o.Polygon}:${a2.Main}`]: 137, [`${o.Polygon}:${a2.Mumbai}`]: 80001, [`${o.Polygon}:${a2.Amoy}`]: 80002, [`${o.Polygon}:${a2.Zkevm}`]: 1101, [`${o.Polygon}:${a2.Cardona}`]: 2442, [`${o.Privado}:${a2.Main}`]: 21e3, [`${o.Privado}:${a2.Test}`]: 21001, [`${o.Linea}:${a2.Main}`]: 59144, [`${o.Linea}:${a2.Sepolia}`]: 59141 };
  var u = { [h3.Iden3]: 1, [h3.PolygonId]: 2, [h3.Other]: 255 };
  var c = { [`${o.ReadOnly}:${a2.NoNetwork}`]: 0, [`${o.Polygon}:${a2.Main}`]: 17, [`${o.Polygon}:${a2.Mumbai}`]: 18, [`${o.Polygon}:${a2.Amoy}`]: 19, [`${o.Polygon}:${a2.Zkevm}`]: 20, [`${o.Polygon}:${a2.Cardona}`]: 21, [`${o.Ethereum}:${a2.Main}`]: 33, [`${o.Ethereum}:${a2.Goerli}`]: 34, [`${o.Ethereum}:${a2.Sepolia}`]: 35, [`${o.Privado}:${a2.Main}`]: 161, [`${o.Privado}:${a2.Test}`]: 162, [`${o.Linea}:${a2.Main}`]: 73, [`${o.Linea}:${a2.Sepolia}`]: 72 };
  var d2 = { [h3.Iden3]: { ...c }, [h3.PolygonId]: { ...c }, [h3.Other]: { [`${o.Unknown}:${a2.Unknown}`]: 255 } };
  var I = new TextEncoder();
  function g(t) {
    const e7 = BigInt(256);
    let r = BigInt(0), n4 = BigInt(1);
    return t.forEach((t2) => {
      r += n4 * BigInt(t2), n4 *= e7;
    }), r;
  }
  function E(t) {
    return g(t.reverse());
  }
  function f2(t, e7 = 31) {
    const r = BigInt(256), n4 = new Uint8Array(e7);
    let i4 = 0;
    for (; t > BigInt(0); )
      n4[i4] = Number(t % r), t /= r, i4 += 1;
    return n4;
  }
  function y2(t, e7 = 31) {
    return f2(t, e7).reverse();
  }
  function w2(t) {
    const e7 = new ArrayBuffer(4);
    return new DataView(e7).setUint32(0, t, true), new Uint8Array(e7);
  }
  function m2(t) {
    const e7 = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return new DataView(e7).getUint32(0, true);
  }
  function _2(t) {
    const e7 = new ArrayBuffer(8);
    return new DataView(e7).setBigUint64(0, t, true), new Uint8Array(e7);
  }
  function S2(t) {
    const e7 = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return new DataView(e7).getBigUint64(0, true);
  }
  function b2(t) {
    return Math.floor(t.getTime() / 1e3);
  }
  function p2(t) {
    return new Date(1e3 * t);
  }
  function x2(t) {
    return t < s.Q;
  }
  function N2(t) {
    return t.every((t2) => x2(t2));
  }
  function D(e7, r, n4) {
    return $.hash([e7, r, n4]);
  }
  var O = class {
    static isNotValidIDChar(t) {
      return O.isNotAlpha(t) && O.isNotDigit(t) && "." !== t && "-" !== t;
    }
    static isNotValidParamChar(t) {
      return O.isNotAlpha(t) && O.isNotDigit(t) && "." !== t && "-" !== t && "_" !== t && ":" !== t;
    }
    static isNotValidQueryOrFragmentChar(t) {
      return O.isNotValidPathChar(t) && "/" !== t && "?" !== t;
    }
    static isNotValidPathChar(t) {
      return O.isNotUnreservedOrSubdelim(t) && ":" !== t && "@" !== t;
    }
    static isNotUnreservedOrSubdelim(t) {
      switch (t) {
        case "-":
        case ".":
        case "_":
        case "~":
        case "!":
        case "$":
        case "&":
        case "'":
        case "(":
        case ")":
        case "*":
        case "+":
        case ",":
        case ";":
        case "=":
          return false;
        default:
          return !(!O.isNotAlpha(t) || !O.isNotDigit(t));
      }
    }
    static isNotHexDigit(t) {
      return O.isNotDigit(t) && (t < "A" || t > "F") && (t < "a" || t > "f");
    }
    static isNotDigit(t) {
      return t < "0" || t > "9";
    }
    static isNotAlpha(t) {
      return O.isNotSmallLetter(t) && O.isNotBigLetter(t);
    }
    static isNotBigLetter(t) {
      return t < "A" || t > "Z";
    }
    static isNotSmallLetter(t) {
      return t < "a" || t > "z";
    }
  };
  var T2 = (t) => Uint8Array.from([...new Uint8Array(7), ...t]);
  var R2 = class {
    static intToBytes(t) {
      return R2.intToNBytes(t, s.BYTES_LENGTH);
    }
    static intToNBytes(t, e7) {
      return Uint8Array.from(f2(t, e7));
    }
    static checkChecksum(t) {
      const { typ: e7, genesis: r, checksum: n4 } = R2.decomposeBytes(t);
      if (!n4.length || JSON.stringify(Uint8Array.from([0, 0])) === JSON.stringify(n4))
        return false;
      const i4 = R2.calculateChecksum(e7, r);
      return JSON.stringify(i4) === JSON.stringify(n4);
    }
    static decomposeBytes(t) {
      const e7 = t.length - 2;
      return { typ: t.slice(0, 2), genesis: t.slice(2, e7), checksum: t.slice(-2) };
    }
    static calculateChecksum(t, e7) {
      const r = [...t, ...e7].reduce((t2, e8) => t2 + e8, 0), n4 = [r >> 8, 255 & r];
      return Uint8Array.from(n4.reverse());
    }
    static hashBytes(t) {
      const r = OE(I.encode(t));
      return new Uint8Array(r);
    }
    static hexToBytes(t) {
      return b.decodeString(t);
    }
    static bytesToHex(t) {
      const e7 = [];
      for (let r = 0; r < t.length; r++) {
        const n4 = t[r] < 0 ? t[r] + 256 : t[r];
        e7.push((n4 >>> 4).toString(16)), e7.push((15 & n4).toString(16));
      }
      return e7.join("");
    }
    static bytesToInt(t) {
      return g(t);
    }
  };
  var B2 = class {
    constructor(t) {
      if (this._bytes = new Uint8Array(s.BYTES_LENGTH), t && (this._bytes = t), this._bytes.length !== s.BYTES_LENGTH)
        throw new Error("Invalid bytes length");
    }
    get bytes() {
      return this._bytes;
    }
    set bytes(t) {
      this._bytes = t;
    }
    toBigInt() {
      return R2.bytesToInt(this._bytes);
    }
    setBigInt(t) {
      if (!x2(t))
        throw s.ERRORS.DATA_OVERFLOW;
      return this._bytes = R2.intToBytes(t), this;
    }
    slotFromHex(t) {
      const e7 = b.decodeString(t);
      if (e7.length !== s.BYTES_LENGTH)
        throw new Error("Invalid bytes length");
      return this._bytes.set(e7, 0), this;
    }
    hex() {
      return b.encodeString(this._bytes);
    }
    static elemBytesToInts(t) {
      const e7 = [];
      for (let r = 0; r < t.length; r++) {
        const n4 = t[r];
        e7.push(n4.toBigInt());
      }
      return e7;
    }
    static fromInt(t) {
      if (!x2(t))
        throw s.ERRORS.DATA_OVERFLOW;
      const e7 = R2.intToBytes(t);
      return new B2(e7);
    }
  };
  var k2 = class {
    constructor(t) {
      if (this._bytes = new Uint8Array(s.SCHEMA.HASH_LENGTH), t && (this._bytes = t), this.bytes.length !== s.SCHEMA.HASH_LENGTH)
        throw new Error(`Schema hash must be ${s.SCHEMA.HASH_LENGTH} bytes long`);
    }
    get bytes() {
      return this._bytes;
    }
    marshalTextBytes() {
      return b.encode(this.bytes);
    }
    marshalText() {
      return b.encodeString(this.bytes);
    }
    static newSchemaHashFromHex(t) {
      const e7 = b.decodeString(t);
      if (e7.length !== s.SCHEMA.HASH_LENGTH)
        throw new Error(`invalid schema hash length: ${e7.length}`);
      return new k2(e7);
    }
    static newSchemaHashFromInt(t) {
      const e7 = R2.intToNBytes(t, s.SCHEMA.HASH_LENGTH), r = s.SCHEMA.HASH_LENGTH - e7.length;
      return new k2(R2.intToBytes(t).slice(r, s.SCHEMA.HASH_LENGTH));
    }
    bigInt() {
      return R2.bytesToInt(this.bytes);
    }
  };
  k2.authSchemaHash = new k2(Uint8Array.from([204, 163, 55, 26, 108, 177, 183, 21, 0, 68, 7, 227, 37, 189, 153, 60]));
  var $2 = class {
    constructor(t, e7) {
      this._checksum = R2.calculateChecksum(t, e7), this._bytes = Uint8Array.from([...t, ...e7, ...this._checksum]);
    }
    static getFromBytes(t) {
      const { typ: e7, genesis: r } = R2.decomposeBytes(t);
      return new $2(e7, r);
    }
    checksum() {
      return this._checksum;
    }
    string() {
      return uE(this._bytes);
    }
    get bytes() {
      return this._bytes;
    }
    set bytes(t) {
      this._bytes = t;
    }
    type() {
      return this._bytes.slice(0, 2);
    }
    bigInt() {
      return g(this._bytes);
    }
    equal(t) {
      return JSON.stringify(this._bytes) === JSON.stringify(t.bytes);
    }
    marshal() {
      return new TextEncoder().encode(this.string());
    }
    static unMarshal(t) {
      return $2.fromString(new TextDecoder().decode(t));
    }
    static fromBytes(t) {
      const e7 = t ?? Uint8Array.from([]);
      if (e7.length !== s.ID.ID_LENGTH)
        throw new Error("fromBytes error: byte array incorrect length");
      if (e7.every((t2) => 0 === t2))
        throw new Error("fromBytes error: byte array empty");
      const r = $2.getFromBytes(e7);
      if (!R2.checkChecksum(e7))
        throw new Error("fromBytes error: checksum error");
      return r;
    }
    static fromString(t) {
      const e7 = yE(t);
      return $2.fromBytes(e7);
    }
    static fromBigInt(t) {
      const e7 = R2.intToNBytes(t, s.ID.ID_LENGTH);
      return $2.fromBytes(e7);
    }
    static profileId(e7, r) {
      const n4 = $.hash([e7.bigInt(), r]), { typ: i4 } = R2.decomposeBytes(e7.bytes), s3 = R2.intToNBytes(n4, 27);
      return new $2(i4, s3);
    }
    static idGenesisFromIdenState(t, e7) {
      const r = B2.fromInt(e7), n4 = r.bytes.slice(r.bytes.length - 27);
      return new $2(t, n4);
    }
    static ethAddressFromId(t) {
      if (!t.bytes.slice(2, 9).every((t2) => 0 === t2))
        throw new Error("can't get Ethereum address: high bytes of genesis are not zero");
      return t.bytes.slice(9).slice(0, s.ETH_ADDRESS_LENGTH);
    }
  };
  var H;
  var A;
  var U3;
  var v2;
  var V2;
  var L2;
  !function(t) {
    t.IndexA = "IndexA", t.IndexB = "IndexB", t.ValueA = "ValueA", t.ValueB = "ValueB";
  }(H || (H = {}));
  var M2 = class extends Error {
    constructor(t) {
      super(`Slot ${t} not in field (too large)`), Object.setPrototypeOf(this, M2.prototype);
    }
  };
  !function(t) {
    t[t.Self = 0] = "Self", t[t.Invalid = 1] = "Invalid", t[t.OtherIdenIndex = 2] = "OtherIdenIndex", t[t.OtherIdenValue = 3] = "OtherIdenValue";
  }(A || (A = {})), function(t) {
    t[t.None = 0] = "None", t[t.Index = 1] = "Index", t[t.Value = 2] = "Value";
  }(U3 || (U3 = {})), function(t) {
    t[t.None = 0] = "None", t[t.Index = 32] = "Index", t[t.Value = 64] = "Value", t[t.Invalid = 128] = "Invalid";
  }(v2 || (v2 = {})), function(t) {
    t[t.None = 0] = "None", t[t.Index = 1] = "Index", t[t.Value = 2] = "Value";
  }(V2 || (V2 = {})), function(t) {
    t[t.ByteIdx = 16] = "ByteIdx", t[t.ExpirationBitIdx = 3] = "ExpirationBitIdx", t[t.UpdatableBitIdx = 4] = "UpdatableBitIdx";
  }(L2 || (L2 = {}));
  var P2 = class {
    constructor() {
      this._index = [], this._value = [];
      for (let t = 0; t < s.ELEM_BYTES_LENGTH; t++)
        this._index[t] = new B2(), this._value[t] = new B2();
    }
    static newClaim(t, ...e7) {
      const r = new P2();
      r.setSchemaHash(t);
      for (let t2 = 0; t2 < e7.length; t2++) {
        (0, e7[t2])(r);
      }
      return r;
    }
    getSchemaHash() {
      return new k2(this._index[0].bytes.slice(0, s.SCHEMA.HASH_LENGTH));
    }
    get value() {
      return this._value;
    }
    set value(t) {
      this._value = t;
    }
    get index() {
      return this._index;
    }
    set index(t) {
      this._index = t;
    }
    setSchemaHash(t) {
      this._index[0] = new B2(Uint8Array.from([...t.bytes, ...new Array(s.SCHEMA.HASH_LENGTH).fill(0)]));
    }
    setSubject(t) {
      this._index[0].bytes[L2.ByteIdx] &= 248, this._index[0].bytes[L2.ByteIdx] |= t;
    }
    getSubject() {
      let t = this._index[0].bytes[L2.ByteIdx];
      return t &= 7, t;
    }
    setFlagExpiration(t) {
      t ? this._index[0].bytes[L2.ByteIdx] |= 1 << L2.ExpirationBitIdx : this._index[0].bytes[L2.ByteIdx] &= ~(1 << L2.ExpirationBitIdx);
    }
    getFlagExpiration() {
      const t = 1 << L2.ExpirationBitIdx;
      return (this._index[0].bytes[L2.ByteIdx] & t) > 0;
    }
    getIdPosition() {
      switch (this.getSubject()) {
        case A.Self:
          return U3.None;
        case A.OtherIdenIndex:
          return U3.Index;
        case A.OtherIdenValue:
          return U3.Value;
        default:
          throw s.ERRORS.INVALID_SUBJECT_POSITION;
      }
    }
    setValueDataInts(t, e7) {
      this._value[2] = this.setSlotInt(t, H.ValueA), this._value[3] = this.setSlotInt(e7, H.ValueB);
    }
    setValueDataBytes(t, e7) {
      this._value[2] = this.setSlotBytes(t, H.ValueA), this._value[3] = this.setSlotBytes(e7, H.ValueB);
    }
    setValueData(t, e7) {
      if (!N2([t.toBigInt(), e7.toBigInt()]))
        throw s.ERRORS.DATA_OVERFLOW;
      this._value[2] = t, this._value[3] = e7;
    }
    setIndexDataInts(t, e7) {
      this._index[2] = this.setSlotInt(t, H.IndexA), this._index[3] = this.setSlotInt(e7, H.IndexB);
    }
    setIndexDataBytes(t, e7) {
      this._index[2] = this.setSlotBytes(t, H.IndexA), this._index[3] = this.setSlotBytes(e7, H.IndexB);
    }
    setSlotBytes(t, e7) {
      const r = new B2(t);
      if (!x2(r.toBigInt()))
        throw new M2(e7);
      return r;
    }
    setFlagMerklized(t) {
      let e7;
      switch (t) {
        case V2.Index:
          e7 = v2.Index;
          break;
        case V2.Value:
          e7 = v2.Value;
          break;
        default:
          e7 = v2.None;
      }
      this.index[0].bytes[L2.ByteIdx] &= 31, this.index[0].bytes[L2.ByteIdx] |= e7;
    }
    getMerklized() {
      let t = this.index[0].bytes[L2.ByteIdx];
      return t &= 224, t;
    }
    getMerklizedPosition() {
      switch (this.getMerklized()) {
        case v2.None:
          return V2.None;
        case v2.Index:
          return V2.Index;
        case v2.Value:
          return V2.Value;
        default:
          throw s.ERRORS.INCORRECT_MERKLIZED_POSITION;
      }
    }
    setSlotInt(t, e7) {
      if (t || (t = BigInt(0)), !x2(t))
        throw new M2(e7);
      return new B2().setBigInt(t);
    }
    setIndexData(t, e7) {
      if (!N2([t.toBigInt(), e7.toBigInt()]))
        throw s.ERRORS.DATA_OVERFLOW;
      this._index[2] = t, this._index[3] = e7;
    }
    resetExpirationDate() {
      this.setFlagExpiration(false);
      const t = Array.from({ length: s.NONCE_BYTES_LENGTH }, () => 0), e7 = Array.from(this._value[0].bytes);
      e7.splice(s.NONCE_BYTES_LENGTH, s.NONCE_BYTES_LENGTH, ...t), this._value[0] = new B2(Uint8Array.from(e7));
    }
    getExpirationDate() {
      if (this.getFlagExpiration()) {
        const t = S2(this._value[0].bytes.slice(8, 16));
        return p2(Number(t));
      }
      return null;
    }
    setExpirationDate(t) {
      this.setFlagExpiration(true);
      const e7 = _2(BigInt(b2(t))), r = Array.from(this._value[0].bytes);
      r.splice(s.NONCE_BYTES_LENGTH, s.NONCE_BYTES_LENGTH, ...e7), this._value[0] = new B2(Uint8Array.from(r));
    }
    getRevocationNonce() {
      return S2(this._value[0].bytes.slice(0, 8));
    }
    setRevocationNonce(t) {
      const e7 = _2(t);
      if (e7.length > s.NONCE_BYTES_LENGTH)
        throw new Error("Nonce length is not valid");
      const r = Array.from(this._value[0].bytes);
      r.splice(0, s.NONCE_BYTES_LENGTH, ...e7), this._value[0] = new B2(Uint8Array.from(r));
    }
    getValueId() {
      return $2.fromBytes(this._value[1].bytes.slice(0, -1));
    }
    setValueId(t) {
      this.resetIndexId(), this.setSubject(A.OtherIdenValue);
      const e7 = Array.from(this._index[1].bytes);
      e7.splice(0, t.bytes.length, ...t.bytes), this._value[1] = new B2(Uint8Array.from(e7));
    }
    resetIndexId() {
      this._index[1] = new B2(new Uint8Array(s.BYTES_LENGTH).fill(0));
    }
    resetValueId() {
      this._value[1] = new B2(new Uint8Array(s.BYTES_LENGTH).fill(0));
    }
    getIndexId() {
      return $2.fromBytes(this._index[1].bytes.slice(0, -1));
    }
    setIndexId(t) {
      this.resetValueId(), this.setSubject(A.OtherIdenIndex);
      const e7 = Array.from(this._index[1].bytes);
      e7.splice(0, t.bytes.length, ...t.bytes), this._index[1] = new B2(Uint8Array.from(e7));
    }
    setVersion(t) {
      const e7 = w2(t);
      this._index[0].bytes[20] = e7[0], this._index[0].bytes[21] = e7[1], this._index[0].bytes[22] = e7[2], this._index[0].bytes[23] = e7[3];
    }
    getVersion() {
      return m2(this._index[0].bytes.slice(20, 24));
    }
    setFlagUpdatable(t) {
      t ? this._index[0].bytes[L2.ByteIdx] |= 1 << L2.UpdatableBitIdx : this._index[0].bytes[L2.ByteIdx] &= ~(1 << L2.UpdatableBitIdx);
    }
    hIndex() {
      return $.hash(B2.elemBytesToInts(this._index));
    }
    getFlagUpdatable() {
      const t = 1 << L2.UpdatableBitIdx;
      return (this._index[0].bytes[L2.ByteIdx] & t) > 0;
    }
    hValue() {
      return $.hash(B2.elemBytesToInts(this._value));
    }
    hiHv() {
      return { hi: this.hIndex(), hv: this.hValue() };
    }
    setIndexMerklizedRoot(t) {
      this.resetValueMerklizedRoot(), this.setFlagMerklized(V2.Index), this.index[2] = this.setSlotInt(t, H.IndexA);
    }
    resetIndexMerklizedRoot() {
      this._index[2] = new B2(new Uint8Array(s.BYTES_LENGTH).fill(0));
    }
    setValueMerklizedRoot(t) {
      this.resetIndexMerklizedRoot(), this.setFlagMerklized(V2.Value), this.value[2] = this.setSlotInt(t, H.ValueA);
    }
    resetValueMerklizedRoot() {
      this._value[2] = new B2(new Uint8Array(s.BYTES_LENGTH).fill(0));
    }
    getMerklizedRoot() {
      switch (this.getMerklized()) {
        case v2.Index:
          return this.index[2].toBigInt();
        case v2.Value:
          return this.value[2].toBigInt();
        default:
          throw s.ERRORS.NO_MERKLIZED_ROOT;
      }
    }
    resetId() {
      this.resetIndexId(), this.resetValueId(), this.setSubject(A.Self);
    }
    getId() {
      switch (this.getSubject()) {
        case A.OtherIdenIndex:
          return this.getIndexId();
        case A.OtherIdenValue:
          return this.getValueId();
        default:
          throw s.ERRORS.NO_ID;
      }
    }
    rawSlots() {
      return { index: this._index, value: this._value };
    }
    rawSlotsAsInts() {
      return [...B2.elemBytesToInts(this._index), ...B2.elemBytesToInts(this._value)];
    }
    clone() {
      return JSON.parse(JSON.stringify(this));
    }
    marshalJson() {
      return this.rawSlotsAsInts().map((t) => t.toString());
    }
    unMarshalJson(t) {
      const e7 = JSON.parse(t).map((t2) => BigInt(t2));
      if (e7.length !== this._index.length + this._value.length)
        throw new Error("invalid number of claim's slots");
      this._index = [], this._value = [];
      for (let t2 = 0, r = s.ELEM_BYTES_LENGTH; t2 < e7.length / 2; t2++, r++)
        this._index[t2] = new B2(), this._index[t2].setBigInt(e7[t2]), this._value[t2] = new B2(), this._value[t2].setBigInt(e7[r]);
      return this;
    }
    marshalBinary() {
      const t = (t2) => t2.reduce((t3, e7) => [...t3, ...e7.bytes], []);
      return Uint8Array.from(t(this._index).concat(t(this._value)));
    }
    hex() {
      const t = this.marshalBinary();
      return b.encodeString(t);
    }
    fromHex(t) {
      const e7 = b.decodeString(t);
      return this.unMarshalBinary(e7), this;
    }
    unMarshalBinary(t) {
      const e7 = 2 * s.ELEM_BYTES_LENGTH * s.BYTES_LENGTH;
      if (t.length !== e7)
        throw new Error("unexpected length of input data");
      this._index = [], this._value = [];
      for (let e8 = 0, r = s.ELEM_BYTES_LENGTH; e8 < s.ELEM_BYTES_LENGTH; e8++, r++)
        this._index[e8] = new B2(t.slice(e8 * s.BYTES_LENGTH, (e8 + 1) * s.BYTES_LENGTH)), this._value[e8] = new B2(t.slice(r * s.BYTES_LENGTH, (r + 1) * s.BYTES_LENGTH));
    }
  };
  var C = class {
    static withFlagUpdatable(t) {
      return (e7) => e7.setFlagUpdatable(t);
    }
    static withVersion(t) {
      return (e7) => e7.setVersion(t);
    }
    static withIndexId(t) {
      return (e7) => e7.setIndexId(t);
    }
    static withValueId(t) {
      return (e7) => e7.setValueId(t);
    }
    static withFlagMerklized(t) {
      return (e7) => e7.setFlagMerklized(t);
    }
    static withId(t, e7) {
      return (r) => {
        switch (e7) {
          case U3.Index:
            r.setIndexId(t);
            break;
          case U3.Value:
            r.setValueId(t);
            break;
          default:
            throw s.ERRORS.INCORRECT_ID_POSITION;
        }
      };
    }
    static withRevocationNonce(t) {
      return (e7) => e7.setRevocationNonce(t);
    }
    static withExpirationDate(t) {
      return (e7) => e7.setExpirationDate(t);
    }
    static withIndexData(t, e7) {
      return (r) => r.setIndexData(t, e7);
    }
    static withIndexDataBytes(t, e7) {
      return (r) => r.setIndexDataBytes(t, e7);
    }
    static withIndexDataInts(t, e7) {
      return (r) => r.setIndexDataInts(t, e7);
    }
    static withValueData(t, e7) {
      return (r) => r.setValueData(t, e7);
    }
    static withValueDataBytes(t, e7) {
      return (r) => r.setValueDataBytes(t, e7);
    }
    static withValueDataInts(t, e7) {
      return (r) => r.setValueDataInts(t, e7);
    }
    static withIndexMerklizedRoot(t) {
      return (e7) => {
        e7.setFlagMerklized(V2.Index), e7.index[2] = e7.setSlotInt(t, H.IndexA);
      };
    }
    static withValueMerklizedRoot(t) {
      return (e7) => {
        e7.setFlagMerklized(V2.Value), e7.value[2] = e7.setSlotInt(t, H.ValueA);
      };
    }
    static withMerklizedRoot(t, e7) {
      return (r) => {
        switch (e7) {
          case V2.Index:
            r.setFlagMerklized(V2.Index), r.index[2] = r.setSlotInt(t, H.IndexA);
            break;
          case V2.Value:
            r.setFlagMerklized(V2.Value), r.value[2] = r.setSlotInt(t, H.ValueA);
            break;
          default:
            throw s.ERRORS.INCORRECT_MERKLIZED_POSITION;
        }
      };
    }
  };
  var F = class {
    constructor(t, e7) {
      this.blockchain = t, this.networkId = e7;
    }
    toString() {
      return `${this.blockchain}:${this.networkId}`;
    }
    static fromString(t) {
      const [e7, r] = t.split(":");
      return new F(e7.replace("_", ""), r.replace("_", ""));
    }
  };
  function G4(t, e7, r) {
    const n4 = u[t];
    if (!n4)
      throw s.ERRORS.UNSUPPORTED_DID_METHOD;
    const i4 = d2[t];
    if (!i4)
      throw s.ERRORS.NETWORK_NOT_SUPPORTED_FOR_DID;
    const o4 = i4[new F(e7, r).toString()];
    if ("number" != typeof o4)
      throw new Error(`blockchain ${e7.toString() ?? "-"} and network ${r.toString() ?? "-"} is not defined in core lib`);
    return Uint8Array.from([n4, o4]);
  }
  function z2(t, e7) {
    const r = d2[t];
    if (!r)
      throw s.ERRORS.UNSUPPORTED_DID_METHOD;
    for (const [t2, n4] of Object.entries(r))
      if (n4 === e7)
        return F.fromString(t2).networkId;
    throw s.ERRORS.NETWORK_NOT_SUPPORTED_FOR_DID;
  }
  function Y2(t, e7) {
    const r = d2[t];
    if (!r)
      throw new Error(`${s.ERRORS.NETWORK_NOT_SUPPORTED_FOR_DID}: did method ${t} is not defined in core lib`);
    for (const [t2, n4] of Object.entries(r))
      if (n4 === e7)
        return F.fromString(t2).blockchain;
    throw s.ERRORS.UNSUPPORTED_BLOCKCHAIN_FOR_DID;
  }
  function j2(t) {
    for (const [e7, r] of Object.entries(u))
      if (r === t)
        return e7;
    throw s.ERRORS.UNSUPPORTED_DID_METHOD;
  }
  var K = class {
    constructor(t, e7) {
      this.name = t, this.value = e7;
    }
    toString() {
      return this.name ? this.value ? `${this.name}=${this.value}` : this.name : "";
    }
  };
  var J = Object.freeze({ method: "", id: "", idStrings: [], params: [], path: "", pathSegments: [], query: "", fragment: "" });
  var W2 = class {
    constructor(t) {
      this.input = t, this.currentIndex = 0, this.out = { ...J };
    }
    checkLength() {
      if (this.input.length < 7)
        throw new Error("input length is less than 7");
      return this.parseScheme.bind(this);
    }
    parseScheme() {
      if ("did:" !== this.input.slice(0, 4))
        throw new Error("input does not begin with 'did:' prefix");
      return this.currentIndex = 3, this.parseMethod.bind(this);
    }
    parseMethod() {
      const t = this.input, e7 = t.length;
      let r = this.currentIndex + 1;
      const n4 = r;
      for (; ; ) {
        if (r === e7)
          throw new Error("input does not have a second `:` marking end of method name");
        const i4 = t[r];
        if (":" === i4) {
          if (r === n4)
            throw new Error(`method is empty, ${r}`);
          break;
        }
        if (O.isNotDigit(i4) && O.isNotSmallLetter(i4))
          throw new Error(`"character is not a-z OR 0-9, ${r}`);
        r += 1;
      }
      return this.currentIndex = r, this.out.method = t.slice(n4, r), this.parseId.bind(this);
    }
    parseId() {
      const t = this.input, e7 = t.length;
      let r = this.currentIndex + 1;
      const n4 = r;
      let i4 = null;
      for (; ; ) {
        if (r === e7) {
          i4 = null;
          break;
        }
        const n5 = t[r];
        if (":" === n5) {
          i4 = this.parseId;
          break;
        }
        if (";" === n5) {
          i4 = this.parseParamName;
          break;
        }
        if ("/" === n5) {
          i4 = this.parsePath;
          break;
        }
        if ("?" === n5) {
          i4 = this.parseQuery;
          break;
        }
        if ("#" === n5) {
          i4 = this.parseFragment;
          break;
        }
        if (O.isNotValidIDChar(n5))
          throw new Error(`byte is not ALPHA OR DIGIT OR '.' OR '-', ${r}`);
        r += 1;
      }
      if (r === n4)
        throw new Error(`idstring must be at least one char long, ${r}`);
      return this.currentIndex = r, this.out.idStrings = [...this.out.idStrings, t.slice(n4, r)], i4 ? i4.bind(this) : null;
    }
    parseParamName() {
      const t = this.input, e7 = this.currentIndex + 1, r = this.paramTransition(), n4 = this.currentIndex;
      if (n4 === e7)
        throw new Error(`Param name must be at least one char long, ${n4}`);
      return this.out.params = [...this.out.params, new K(t.slice(e7, n4), "")], r ? r.bind(this) : null;
    }
    parseParamValue() {
      const t = this.input, e7 = this.currentIndex + 1, r = this.paramTransition(), n4 = this.currentIndex;
      return this.out.params[this.out.params.length - 1].value = t.slice(e7, n4), r ? r.bind(this) : null;
    }
    paramTransition() {
      const t = this.input, e7 = t.length;
      let r, n4, i4, s3 = this.currentIndex + 1;
      for (; ; ) {
        if (s3 === e7) {
          n4 = null;
          break;
        }
        const o4 = t[s3];
        if (";" === o4) {
          n4 = this.parseParamName;
          break;
        }
        if ("=" === o4) {
          n4 = this.parseParamValue;
          break;
        }
        if ("/" === o4) {
          n4 = this.parsePath;
          break;
        }
        if ("?" === o4) {
          n4 = this.parseQuery;
          break;
        }
        if ("#" == o4) {
          n4 = this.parseFragment;
          break;
        }
        if ("%" == o4) {
          if (s3 + 2 >= e7 || O.isNotHexDigit(t[s3 + 1]) || O.isNotHexDigit(t[s3 + 2]))
            throw new Error(`% is not followed by 2 hex digits', ${s3}`);
          i4 = true, r = 3;
        } else
          i4 = false, r = 1;
        if (!i4 && O.isNotValidParamChar(o4))
          throw new Error(`character is not allowed in param - ${o4}',  ${s3}`);
        s3 += r;
      }
      return this.currentIndex = s3, n4 ? n4.bind(this) : null;
    }
    parsePath() {
      const t = this.input, e7 = t.length;
      let r = this.currentIndex + 1;
      const n4 = r;
      let i4, s3, o4;
      for (; ; ) {
        if (r === e7) {
          s3 = null;
          break;
        }
        const n5 = t[r];
        if ("/" === n5) {
          s3 = this.parsePath;
          break;
        }
        if ("?" === n5) {
          s3 = this.parseQuery;
          break;
        }
        if ("%" === n5) {
          if (r + 2 >= e7 || O.isNotHexDigit(t[r + 1]) || O.isNotHexDigit(t[r + 2]))
            throw new Error(`% is not followed by 2 hex digits, ${r}`);
          o4 = true, i4 = 3;
        } else
          o4 = false, i4 = 1;
        if (!o4 && O.isNotValidPathChar(n5))
          throw new Error(`character is not allowed in path, ${r}`);
        r += i4;
      }
      if (r == n4 && 0 === this.out.pathSegments.length)
        throw new Error(`first path segment must have at least one character, ${r}`);
      return this.currentIndex = r, this.out.pathSegments = [...this.out.pathSegments, t.slice(n4, r)], s3 ? s3.bind(this) : null;
    }
    parseQuery() {
      const t = this.input, e7 = t.length;
      let r = this.currentIndex + 1;
      const n4 = r;
      let i4, s3, o4 = null;
      for (; r !== e7; ) {
        const n5 = t[r];
        if ("#" === n5) {
          o4 = this.parseFragment;
          break;
        }
        if ("%" === n5) {
          if (r + 2 >= e7 || O.isNotHexDigit(t[r + 1]) || O.isNotHexDigit(t[r + 2]))
            throw new Error(`% is not followed by 2 hex digits, ${r}`);
          s3 = true, i4 = 3;
        } else
          s3 = false, i4 = 1;
        if (!s3 && O.isNotValidQueryOrFragmentChar(n5))
          throw new Error(`character is not allowed in query - ${n5}`);
        r += i4;
      }
      return this.currentIndex = r, this.out.query = t.slice(n4, r), o4 ? o4.bind(this) : null;
    }
    parseFragment() {
      const t = this.input, e7 = this.input.length;
      let r = this.currentIndex + 1;
      const n4 = r;
      let i4, s3;
      for (; r !== e7; ) {
        const n5 = t[r];
        if ("%" === n5) {
          if (r + 2 >= e7 || O.isNotHexDigit(t[r + 1]) || O.isNotHexDigit(t[r + 2]))
            throw new Error(`% is not followed by 2 hex digits, ${r}`);
          s3 = true, i4 = 3;
        } else
          s3 = false, i4 = 1;
        if (!s3 && O.isNotValidQueryOrFragmentChar(n5))
          throw new Error(`character is not allowed in fragment - ${n5}`);
        r += i4;
      }
      return this.currentIndex = r, this.out.fragment = t.slice(n4, r), null;
    }
  };
  var Q2 = class {
    constructor(t) {
      this.method = "", this.id = "", this.idStrings = [], this.params = [], this.path = "", this.pathSegments = [], this.query = "", this.fragment = "", t && Object.assign(this, t);
    }
    isUrl() {
      return this.params.length > 0 || !!this.path || this.pathSegments.length > 0 || !!this.query || !!this.fragment;
    }
    string() {
      const t = ["did:"];
      if (!this.method)
        return "";
      if (t.push(`${this.method}:`), this.id)
        t.push(this.id);
      else {
        if (!this.idStrings.length)
          return "";
        t.push(this.idStrings.join(":"));
      }
      if (this.params.length)
        for (const e7 of this.params) {
          const r = e7.toString();
          if (!r)
            return "";
          t.push(`;${r}`);
        }
      return this.path ? t.push(`/${this.path}`) : this.pathSegments.length && t.push(`/${this.pathSegments.join("/")}`), this.query && t.push(`?${this.query}`), this.fragment && t.push(`#${this.fragment}`), t.join("");
    }
    toJSON() {
      return this.string();
    }
    static parse(t) {
      const e7 = new W2(t);
      let r = e7.checkLength();
      for (; r; )
        r = r();
      return e7.out.id = e7.out.idStrings.join(":"), e7.out.path = e7.out.pathSegments.join("/"), new Q2(e7.out);
    }
    static decodePartsFromId(t) {
      const e7 = j2(t.bytes[0]);
      return { method: e7, blockchain: Y2(e7, t.bytes[1]), networkId: z2(e7, t.bytes[1]) };
    }
    static networkIdFromId(t) {
      return Q2.throwIfDIDUnsupported(t).networkId;
    }
    static methodFromId(t) {
      return Q2.throwIfDIDUnsupported(t).method;
    }
    static blockchainFromId(t) {
      return Q2.throwIfDIDUnsupported(t).blockchain;
    }
    static throwIfDIDUnsupported(t) {
      const { method: e7, blockchain: r, networkId: n4 } = Q2.decodePartsFromId(t);
      if (Q2.isUnsupported(e7, r, n4))
        throw new Error(`${s.ERRORS.UNKNOWN_DID_METHOD.message}: unsupported DID`);
      return { method: e7, blockchain: r, networkId: n4 };
    }
    static newFromIdenState(t, e7) {
      const r = $2.idGenesisFromIdenState(t, e7);
      return Q2.parseFromId(r);
    }
    static new(t, e7) {
      return Q2.parseFromId(new $2(t, e7));
    }
    static parseFromId(t) {
      if (!R2.checkChecksum(t.bytes))
        throw new Error(`${s.ERRORS.UNSUPPORTED_ID.message}: invalid checksum`);
      const { method: e7, blockchain: r, networkId: n4 } = Q2.throwIfDIDUnsupported(t), i4 = [s.DID.DID_SCHEMA, e7.toString(), r.toString()];
      n4 && i4.push(n4.toString()), i4.push(t.string());
      const o4 = i4.join(":");
      return Q2.parse(o4);
    }
    static idFromDID(t) {
      let e7;
      try {
        e7 = Q2.getIdFromDID(t);
      } catch (e8) {
        if (e8.message === s.ERRORS.UNKNOWN_DID_METHOD.message)
          return Q2.idFromUnsupportedDID(t);
        throw e8;
      }
      return e7;
    }
    static isUnsupported(t, e7, r) {
      return t == h3.Other && e7 == o.Unknown && r == a2.Unknown;
    }
    static idFromUnsupportedDID(t) {
      const r = OE(I.encode(t.string())), n4 = new Uint8Array(27), i4 = r.slice(r.length - s.GENESIS_LENGTH);
      for (let t2 = 0; t2 < n4.length; t2++)
        n4[t2] = i4[t2] ?? 0;
      const l6 = new F(o.Unknown, a2.Unknown), c3 = Uint8Array.from([u[h3.Other], d2[h3.Other][l6.toString()]]);
      return new $2(c3, n4);
    }
    static getIdFromDID(t) {
      const e7 = t.method;
      if (!u[e7] || e7 === h3.Other)
        throw s.ERRORS.UNKNOWN_DID_METHOD;
      if (t.idStrings.length > 3 || t.idStrings.length < 2)
        throw new Error(`${s.ERRORS.INCORRECT_DID}: unexpected number of ID strings`);
      const r = $2.fromString(t.idStrings[t.idStrings.length - 1]);
      if (!R2.checkChecksum(r.bytes))
        throw new Error(`${s.ERRORS.INCORRECT_DID}: incorrect ID checksum`);
      const { method: n4, blockchain: i4, networkId: o4 } = Q2.decodePartsFromId(r);
      if (n4.toString() !== e7.toString())
        throw new Error(`${s.ERRORS.INCORRECT_DID}: methods in Id and DID are different`);
      if (i4.toString() !== t.idStrings[0])
        throw new Error(`${s.ERRORS.INCORRECT_DID}: blockchains in ID and DID are different`);
      if (t.idStrings.length > 2 && o4.toString() != t.idStrings[1])
        throw new Error(`${s.ERRORS.INCORRECT_DID}: networkIDs in Id and DID are different`);
      return r;
    }
  };
  var Z2 = (t) => {
    o[t] = t;
  };
  var q2 = (t) => {
    a2[t] = t;
  };
  var X2 = (t, e7) => {
    const r = u[h3.Other];
    if (e7 >= r)
      throw new Error(`Can't register DID method byte: current '${e7.toString(2)}', maximum byte allowed: '${(r - 1).toString(2)}'`);
    if ("number" != typeof u[t] || u[t] !== e7) {
      if (Object.values(u).includes(e7))
        throw new Error(`can't register method '${t}' because DID method byte '${e7.toString(2)}' already registered for another method`);
      h3[t] = t, u[t] = e7;
    }
  };
  var tt = (t, e7, r) => {
    const n4 = `${t}:${e7}`;
    if ("number" != typeof l2[n4] || l2[n4] !== r) {
      if (Object.values(l2).includes(r))
        throw new Error(`can't register chainId ${r} for '${t}:${e7}' because it's already registered for another chain id`);
      l2[n4] = r;
    }
  };
  var et = (t, e7) => {
    e7 && (t += `:${e7}`);
    const r = l2[t];
    if (!r)
      throw new Error(`chainId not found for ${t}`);
    return r;
  };
  var rt = (t) => {
    const e7 = Q2.idFromDID(t), r = Q2.blockchainFromId(e7), n4 = Q2.networkIdFromId(e7), i4 = l2[`${r}:${n4}`];
    if ("number" != typeof i4)
      throw new Error(`chainId not found for ${r}:${n4}`);
    return i4;
  };
  var nt = ({ method: t, methodByte: e7, blockchain: r, network: n4, chainId: i4, networkFlag: s3 }) => {
    Z2(r), q2(n4), "number" == typeof e7 && X2(t, e7), d2[t] || (d2[t] = {}), "number" == typeof i4 && tt(r, n4, i4);
    const o4 = `${r}:${n4}`, a4 = d2[t][o4];
    if ("number" != typeof a4 || a4 !== s3) {
      if (Object.values(d2[t]).includes(s3))
        throw new Error(`DID network flag ${s3.toString(2)} is already registered for the another network id for '${t}' method`);
      d2[t][o4] = s3;
    }
  };

  // node_modules/@iden3/js-merkletree/dist/browser/esm/index.js
  var i2 = 32;
  var o2 = new Uint8Array(65);
  var h4 = "empty";
  var l3 = 32;
  var w3 = BigInt("21888242871839275222246405745257275088548364400416034343698204186575808495617");
  var y3 = w3 - BigInt("1");
  function g2(t, e7, i4, s3) {
    if ("a" === i4 && !s3)
      throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof e7 ? t !== e7 || !s3 : !e7.has(t))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === i4 ? s3 : "a" === i4 ? s3.call(t) : s3 ? s3.value : e7.get(t);
  }
  function v3(t, e7, i4, s3, n4) {
    if ("m" === s3)
      throw new TypeError("Private method is not writable");
    if ("a" === s3 && !n4)
      throw new TypeError("Private accessor was defined without a setter");
    if ("function" == typeof e7 ? t !== e7 || !n4 : !e7.has(t))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return "a" === s3 ? n4.call(t, i4) : n4 ? n4.value = i4 : e7.set(t, i4), i4;
  }
  var p3 = (t) => t < w3;
  var b3 = (t, e7) => t.every((t2, i4) => t2 === e7[i4]);
  var m3 = (t) => t.slice().reverse();
  var x3 = (t) => "0b" + t.reduce((t2, e7) => t2 + e7.toString(2).padStart(8, "0"), "");
  var I2 = (t, e7) => 0 != (t[parseInt((e7 / 8).toString())] & 1 << e7 % 8);
  var k3 = (t, e7) => 0 != (t[t.length - parseInt("" + e7 / 8) - 1] & 1 << e7 % 8);
  var A2 = (t, e7) => {
    t[t.length - parseInt("" + e7 / 8) - 1] |= 1 << e7 % 8;
  };
  var R3 = "0123456789abcdef";
  var S3 = (t) => {
    const e7 = new Array(2 * t.length);
    let i4 = 0;
    return t.forEach((t2) => {
      e7[i4] = R3[parseInt((t2 >> 4).toString(10))], e7[i4 + 1] = R3[parseInt((15 & t2).toString(10))], i4 += 2;
    }), e7.join("");
  };
  var B3 = (t) => new Uint8Array(2 * t.length).map((e7, i4) => t.charCodeAt(i4));
  var N3 = (t, e7) => {
    const i4 = new Array(t);
    for (let s3 = 0; s3 < t; s3 += 1)
      i4[s3] = I2(e7, s3);
    return i4;
  };
  var U4 = (t) => {
    const e7 = new ArrayBuffer(i2 * t.length), s3 = new Uint8Array(e7);
    return t.forEach((t2, e8) => {
      s3.set(t2.value, e8 * i2);
    }), s3;
  };
  var K2 = (t) => {
    const e7 = BigInt(256), s3 = new Uint8Array(i2);
    let n4 = 0;
    for (; t > BigInt(0); )
      s3[31 - n4] = Number(t % e7), t /= e7, n4 += 1;
    return s3;
  };
  var V3 = class {
    constructor(t) {
      if (t?.length) {
        if (t.length !== i2)
          throw new Error(`Expected 32 bytes, found ${t.length} bytes`);
        this.bytes = t;
      } else
        this.bytes = new Uint8Array(i2);
    }
    get value() {
      return this.bytes;
    }
    set value(t) {
      if (t.length !== i2)
        throw `Expected 32 bytes, found ${t.length} bytes`;
      this.bytes = m3(t);
    }
    string() {
      return this.bigInt().toString(10);
    }
    hex() {
      return S3(this.bytes);
    }
    equals(t) {
      return b3(this.value, t.value);
    }
    bigInt() {
      const t = m3(this.value);
      return BigInt(x3(t));
    }
    static fromString(t) {
      try {
        return V3.fromBigInt(BigInt(t));
      } catch (e7) {
        const i4 = JSON.parse(t), s3 = Uint8Array.from(Object.values(i4.bytes));
        return new V3(s3);
      }
    }
    static fromBigInt(t) {
      if (!p3(t))
        throw new Error("NewBigIntFromHashBytes: Value not inside the Finite Field");
      const e7 = K2(t);
      return new V3(m3(e7));
    }
    static fromHex(e7) {
      return e7 ? new V3(b.decodeString(e7)) : M3;
    }
    toJSON() {
      return this.string();
    }
  };
  var M3 = new V3();
  var _3 = (t) => {
    const i4 = $.hash(t);
    return V3.fromBigInt(i4);
  };
  var P3 = (t, i4) => {
    const s3 = $.hash([...i4, t]);
    return V3.fromBigInt(s3);
  };
  var J2 = (t, e7) => {
    for (let i4 = t.length; i4 < e7; i4 += 1)
      t.push(M3);
    return t;
  };
  var T3;
  var H2;
  var j3 = class {
    constructor(t) {
      T3.set(this, void 0), H2.set(this, void 0), this.prefix = t, v3(this, T3, {}, "f"), v3(this, H2, M3, "f");
    }
    async get(t) {
      const e7 = new Uint8Array([...this.prefix, ...t]);
      return g2(this, T3, "f")[e7.toString()] ? g2(this, T3, "f")[e7.toString()] : void 0;
    }
    async put(t, e7) {
      const i4 = new Uint8Array([...this.prefix, ...t]);
      g2(this, T3, "f")[i4.toString()] = e7;
    }
    async getRoot() {
      return g2(this, H2, "f");
    }
    async setRoot(t) {
      v3(this, H2, t, "f");
    }
  };
  T3 = /* @__PURE__ */ new WeakMap(), H2 = /* @__PURE__ */ new WeakMap();
  var z3 = async (t, e7) => P3(BigInt(1), [t.bigInt(), e7.bigInt()]);
  var C2 = (t, e7, i4) => {
    const s3 = new Uint8Array(65), n4 = K2(e7.bigInt()), r = K2(i4.bigInt());
    s3[0] = t;
    for (let t2 = 1; t2 < 33; t2 += 1)
      s3[t2] = n4[t2 - 1];
    for (let t2 = 33; t2 <= 65; t2 += 1)
      s3[t2] = r[t2 - 33];
    return s3;
  };
  var q3;
  var F2;
  var D2;
  var G5;
  var Q3 = class {
    constructor(t, e7) {
      q3.set(this, void 0), this.type = 1, this.entry = [t, e7], v3(this, q3, M3, "f");
    }
    async getKey() {
      return g2(this, q3, "f") === M3 ? await z3(this.entry[0], this.entry[1]) : g2(this, q3, "f");
    }
    get value() {
      return C2(this.type, this.entry[0], this.entry[1]);
    }
    get string() {
      return `Leaf I:${this.entry[0]} D:${this.entry[1]}`;
    }
  };
  q3 = /* @__PURE__ */ new WeakMap();
  var X3 = class {
    constructor(t, e7) {
      F2.set(this, void 0), this.type = 0, this.childL = t, this.childR = e7, v3(this, F2, M3, "f");
    }
    async getKey() {
      return g2(this, F2, "f") === M3 ? _3([this.childL.bigInt(), this.childR.bigInt()]) : g2(this, F2, "f");
    }
    get value() {
      return C2(this.type, this.childL, this.childR);
    }
    get string() {
      return `Middle L:${this.childL} R:${this.childR}`;
    }
  };
  F2 = /* @__PURE__ */ new WeakMap();
  var Y3 = class {
    constructor() {
      D2.set(this, void 0), this.type = 2, v3(this, D2, M3, "f");
    }
    async getKey() {
      return M3;
    }
    get value() {
      return o2;
    }
    get string() {
      return h4;
    }
  };
  D2 = /* @__PURE__ */ new WeakMap();
  var Z3 = class {
    constructor(t) {
      this._prefix = t, G5.set(this, void 0);
      const e7 = localStorage.getItem(S3(t));
      if (e7) {
        const t2 = JSON.parse(e7);
        v3(this, G5, new V3(Uint8Array.from(t2)), "f");
      } else
        v3(this, G5, M3, "f");
    }
    async get(t) {
      const e7 = new Uint8Array([...this._prefix, ...t]), i4 = S3(e7), s3 = localStorage.getItem(i4);
      if (null === s3)
        return;
      const n4 = JSON.parse(s3);
      switch (n4.type) {
        case 2:
          return new Y3();
        case 0:
          const t2 = new V3(Uint8Array.from(n4.childL)), e8 = new V3(Uint8Array.from(n4.childR));
          return new X3(t2, e8);
        case 1:
          const i5 = new V3(Uint8Array.from(n4.entry[0])), s4 = new V3(Uint8Array.from(n4.entry[1]));
          return new Q3(i5, s4);
      }
      throw `error: value found for key ${S3(e7)} is not of type Node`;
    }
    async put(t, e7) {
      const i4 = new Uint8Array([...this._prefix, ...t]), s3 = S3(i4), n4 = { type: e7.type };
      e7 instanceof X3 ? (n4.childL = Array.from(e7.childL.bytes), n4.childR = Array.from(e7.childR.bytes)) : e7 instanceof Q3 && (n4.entry = [Array.from(e7.entry[0].bytes), Array.from(e7.entry[1].bytes)]);
      const r = JSON.stringify(n4);
      localStorage.setItem(s3, r);
    }
    async getRoot() {
      return g2(this, G5, "f");
    }
    async setRoot(t) {
      v3(this, G5, t, "f"), localStorage.setItem(S3(this._prefix), JSON.stringify(Array.from(t.bytes)));
    }
  };
  function tt2(t) {
    return new Promise((e7, i4) => {
      t.oncomplete = t.onsuccess = () => e7(t.result), t.onabort = t.onerror = () => i4(t.error);
    });
  }
  function et2(t, e7) {
    const i4 = indexedDB.open(t);
    i4.onupgradeneeded = () => i4.result.createObjectStore(e7);
    const s3 = tt2(i4);
    return (t2, i5) => s3.then((s4) => i5(s4.transaction(e7, t2).objectStore(e7)));
  }
  var it;
  function st() {
    return it || (it = et2("keyval-store", "keyval")), it;
  }
  function nt2(t, e7 = st()) {
    return e7("readonly", (e8) => tt2(e8.get(t)));
  }
  function rt2(t, e7, i4 = st()) {
    return i4("readwrite", (i5) => (i5.put(e7, t), tt2(i5.transaction)));
  }
  var at;
  var ot;
  var ht;
  G5 = /* @__PURE__ */ new WeakMap();
  var lt = class {
    constructor(t, e7) {
      this._prefix = t, at.set(this, void 0), v3(this, at, M3, "f"), this._prefixHash = S3(t), this._store = et2(`${e7 ?? lt.storageName}-db`, lt.storageName);
    }
    async get(t) {
      const e7 = new Uint8Array([...this._prefix, ...t]), i4 = S3(e7), s3 = await nt2(i4, this._store);
      if (null != s3) {
        if (2 === s3.type)
          return new Y3();
        if (0 === s3.type) {
          const t2 = new V3(Uint8Array.from(s3.childL.bytes)), e8 = new V3(Uint8Array.from(s3.childR.bytes));
          return new X3(t2, e8);
        }
        if (1 === s3.type) {
          const t2 = new V3(Uint8Array.from(s3.entry[0].bytes)), e8 = new V3(Uint8Array.from(s3.entry[1].bytes));
          return new Q3(t2, e8);
        }
        throw new Error(`error: value found for key ${i4} is not of type Node`);
      }
    }
    async put(t, e7) {
      const i4 = new Uint8Array([...this._prefix, ...t]), s3 = S3(i4);
      await rt2(s3, e7, this._store);
    }
    async getRoot() {
      if (!g2(this, at, "f").equals(M3))
        return g2(this, at, "f");
      const t = await nt2(this._prefixHash, this._store);
      return v3(this, at, t ? new V3(t.bytes) : M3, "f"), g2(this, at, "f");
    }
    async setRoot(t) {
      await rt2(this._prefixHash, t, this._store), v3(this, at, t, "f");
    }
  };
  at = /* @__PURE__ */ new WeakMap(), lt.storageName = "merkle-tree";
  ot = /* @__PURE__ */ new WeakMap();
  ht = /* @__PURE__ */ new WeakMap();
  var dt;
  var wt;
  var yt;
  dt = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap();
  var vt = (t) => t.map((t2) => t2.bigInt());
  var pt = (t) => {
    const e7 = vt(t.data.value);
    let i4 = true;
    return e7.forEach((t2) => {
      p3(t2) || (i4 = false);
    }), i4;
  };
  var mt = "Key not found in the MerkleTree";
  var It = "reached maximum level of the merkle tree";
  var kt = "found an invalid node in the DB";
  var St = "the entry index already exists in the tree";
  var Lt = "Merkle Tree not writable";
  var Bt = "key not found";
  var Nt = class {
    constructor(t = M3, e7 = [], i4 = M3, s3 = M3, n4 = false, r = M3, a4 = M3, o4 = 0) {
      this.root = t, this.siblings = e7, this.oldKey = i4, this.oldValue = s3, this.isOld0 = n4, this.key = r, this.value = a4, this.fnc = o4;
    }
  };
  var Ut = class {
    constructor(t = M3, e7 = M3, i4 = [], s3 = M3, n4 = M3, r = M3, a4 = M3, o4 = false, h6 = 0) {
      this.oldRoot = t, this.newRoot = e7, this.siblings = i4, this.oldKey = s3, this.oldValue = n4, this.newKey = r, this.newValue = a4, this.isOld0 = o4, this.fnc = h6;
    }
  };
  var Et = "non-existence proof being checked against hIndex equal to nodeAux";
  var Kt = class {
    constructor(t) {
      this.existence = t?.existence ?? false, this.depth = 0, this.nodeAux = t?.nodeAux;
      const { siblings: e7, notEmpties: i4 } = this.reduceSiblings(t?.siblings);
      this.siblings = e7, this.notEmpties = i4;
    }
    bytes() {
      let t = 2 + this.notEmpties.length + l3 * this.siblings.length;
      void 0 !== this.nodeAux && (t += 64);
      const e7 = new ArrayBuffer(t), i4 = new Uint8Array(e7);
      this.existence || (i4[0] |= 1), i4[1] = this.depth, i4.set(this.notEmpties, 2);
      const s3 = U4(this.siblings);
      return i4.set(s3, this.notEmpties.length + 2), void 0 !== this.nodeAux && (i4[0] |= 2, i4.set(this.nodeAux.key.value, i4.length - 64), i4.set(this.nodeAux.value.value, i4.length - 32)), i4;
    }
    toJSON() {
      return { existence: this.existence, siblings: this.allSiblings().map((t) => t.toJSON()), node_aux: this.nodeAux ? { key: this.nodeAux.key.toJSON(), value: this.nodeAux.value.toJSON() } : void 0 };
    }
    reduceSiblings(t) {
      const e7 = [], i4 = new Uint8Array(30);
      if (!t)
        return { siblings: e7, notEmpties: i4 };
      for (let s3 = 0; s3 < t.length; s3++) {
        const n4 = t[s3];
        JSON.stringify(t[s3]) !== JSON.stringify(M3) && (A2(i4, s3), e7.push(n4), this.depth = s3 + 1);
      }
      return { notEmpties: i4, siblings: e7 };
    }
    static fromJSON(t) {
      let e7;
      const i4 = t.node_aux ?? t.nodeAux;
      i4 && (e7 = { key: V3.fromString(i4.key), value: V3.fromString(i4.value) });
      const s3 = t.existence ?? false, n4 = t.siblings.map((t2) => V3.fromString(t2));
      return new Kt({ existence: s3, nodeAux: e7, siblings: n4 });
    }
    allSiblings() {
      return Kt.buildAllSiblings(this.depth, this.notEmpties, this.siblings);
    }
    static buildAllSiblings(t, e7, i4) {
      let s3 = 0;
      const n4 = [];
      for (let r = 0; r < t; r += 1)
        k3(e7, r) ? (n4.push(i4[s3]), s3 += 1) : n4.push(M3);
      return n4;
    }
  };
  var Mt = async (t, e7, i4, s3) => {
    try {
      const n4 = await Wt(e7, i4, s3);
      return b3(t.value, n4.value);
    } catch (t2) {
      if (t2 === Et)
        return false;
      throw t2;
    }
  };
  var Wt = async (t, e7, i4) => {
    const s3 = V3.fromBigInt(e7), n4 = V3.fromBigInt(i4);
    let r;
    if (t.existence)
      r = await z3(s3, n4);
    else if (void 0 === t.nodeAux)
      r = M3;
    else {
      const e8 = t.nodeAux;
      if (b3(s3.value, e8.key.value))
        throw Et;
      r = await z3(e8.key, e8.value);
    }
    const a4 = t.allSiblings(), o4 = N3(a4.length, s3.value);
    for (let t2 = a4.length - 1; t2 >= 0; t2 -= 1)
      r = o4[t2] ? await new X3(a4[t2], r).getKey() : await new X3(r, a4[t2]).getKey();
    return r;
  };
  var $t;
  var Ot;
  var _t;
  var Pt;
  var Jt = class {
    constructor(t, e7, i4) {
      $t.set(this, void 0), Ot.set(this, void 0), _t.set(this, void 0), Pt.set(this, void 0), v3(this, $t, t, "f"), v3(this, _t, e7, "f"), v3(this, Pt, i4, "f");
    }
    async root() {
      return g2(this, Ot, "f") || v3(this, Ot, await g2(this, $t, "f").getRoot(), "f"), g2(this, Ot, "f");
    }
    get maxLevels() {
      return g2(this, Pt, "f");
    }
    async add(t, e7) {
      if (!g2(this, _t, "f"))
        throw Lt;
      v3(this, Ot, await this.root(), "f");
      const i4 = V3.fromBigInt(t), s3 = V3.fromBigInt(e7), n4 = new Q3(i4, s3), r = N3(this.maxLevels, i4.value), a4 = await this.addLeaf(n4, g2(this, Ot, "f"), 0, r);
      v3(this, Ot, a4, "f"), await g2(this, $t, "f").setRoot(g2(this, Ot, "f"));
    }
    async updateNode(t) {
      if (!g2(this, _t, "f"))
        throw Lt;
      if (2 === t.type)
        return await t.getKey();
      const e7 = await t.getKey();
      return await g2(this, $t, "f").put(e7.value, t), e7;
    }
    async addNode(t) {
      if (!g2(this, _t, "f"))
        throw Lt;
      if (2 === t.type)
        return await t.getKey();
      const e7 = await t.getKey();
      return await g2(this, $t, "f").put(e7.value, t), e7;
    }
    async addEntry(t) {
      if (!g2(this, _t, "f"))
        throw Lt;
      if (!pt(t))
        throw "elements not inside the finite field over r";
      v3(this, Ot, await g2(this, $t, "f").getRoot(), "f");
      const e7 = await t.hIndex(), i4 = await t.hValue(), s3 = new Q3(e7, i4), n4 = N3(this.maxLevels, e7.value), r = await this.addLeaf(s3, g2(this, Ot, "f"), 0, n4);
      v3(this, Ot, r, "f"), await g2(this, $t, "f").setRoot(g2(this, Ot, "f"));
    }
    async pushLeaf(t, e7, i4, s3, n4) {
      if (i4 > g2(this, Pt, "f") - 2)
        throw new Error(It);
      let r;
      if (s3[i4] === n4[i4]) {
        const a5 = await this.pushLeaf(t, e7, i4 + 1, s3, n4);
        return r = s3[i4] ? new X3(new V3(), a5) : new X3(a5, new V3()), await this.addNode(r);
      }
      const a4 = await e7.getKey(), o4 = await t.getKey();
      return r = s3[i4] ? new X3(a4, o4) : new X3(o4, a4), await this.addNode(t), await this.addNode(r);
    }
    async addLeaf(t, e7, i4, s3) {
      if (i4 > g2(this, Pt, "f") - 1)
        throw new Error(It);
      const n4 = await this.getNode(e7);
      if (void 0 === n4)
        throw Bt;
      switch (n4.type) {
        case 2:
          return this.addNode(t);
        case 1: {
          const e8 = n4.entry[0], r = t.entry[0];
          if (b3(e8.value, r.value))
            throw St;
          const a4 = N3(this.maxLevels, e8.value);
          return this.pushLeaf(t, n4, i4, s3, a4);
        }
        case 0: {
          let e8;
          if (s3[i4]) {
            const r = await this.addLeaf(t, n4.childR, i4 + 1, s3);
            e8 = new X3(n4.childL, r);
          } else {
            const r = await this.addLeaf(t, n4.childL, i4 + 1, s3);
            e8 = new X3(r, n4.childR);
          }
          return this.addNode(e8);
        }
        default:
          throw kt;
      }
    }
    async get(t) {
      const e7 = V3.fromBigInt(t), i4 = N3(this.maxLevels, e7.value);
      let s3 = await this.root();
      const n4 = [];
      for (let t2 = 0; t2 < this.maxLevels; t2++) {
        const e8 = await this.getNode(s3);
        if (void 0 === e8)
          throw mt;
        switch (e8.type) {
          case 2:
            return { key: BigInt("0"), value: BigInt("0"), siblings: n4 };
          case 1:
            return { key: e8.entry[0].bigInt(), value: e8.entry[1].bigInt(), siblings: n4 };
          case 0:
            i4[t2] ? (s3 = e8.childR, n4.push(e8.childL)) : (s3 = e8.childL, n4.push(e8.childR));
            break;
          default:
            throw kt;
        }
      }
      throw new Error(It);
    }
    async update(t, e7) {
      if (!g2(this, _t, "f"))
        throw Lt;
      if (!p3(t))
        throw "key not inside the finite field";
      if (!p3(e7))
        throw "key not inside the finite field";
      const i4 = V3.fromBigInt(t), s3 = V3.fromBigInt(e7), n4 = N3(this.maxLevels, i4.value), r = new Ut();
      r.fnc = 1, r.oldRoot = await this.root(), r.oldKey = i4, r.newKey = i4, r.newValue = s3;
      let a4 = await this.root();
      const o4 = [];
      for (let t2 = 0; t2 < this.maxLevels; t2 += 1) {
        const e8 = await this.getNode(a4);
        if (void 0 === e8)
          throw Bt;
        switch (e8.type) {
          case 2:
            throw mt;
          case 1:
            if (b3(i4.value, e8.entry[0].value)) {
              r.oldValue = e8.entry[1], r.siblings = J2([...o4], this.maxLevels);
              const t3 = new Q3(i4, s3);
              await this.updateNode(t3);
              const a5 = await this.recalculatePathUntilRoot(n4, t3, o4);
              return v3(this, Ot, a5, "f"), await g2(this, $t, "f").setRoot(a5), r.newRoot = a5, r;
            }
            break;
          case 0:
            n4[t2] ? (a4 = e8.childR, o4.push(e8.childL)) : (a4 = e8.childL, o4.push(e8.childR));
            break;
          default:
            throw kt;
        }
      }
      throw mt;
    }
    async getNode(t) {
      return b3(t.value, M3.value) ? new Y3() : await g2(this, $t, "f").get(t.value);
    }
    async recalculatePathUntilRoot(t, e7, i4) {
      for (let s3 = i4.length - 1; s3 >= 0; s3 -= 1) {
        const n4 = await e7.getKey();
        e7 = t[s3] ? new X3(i4[s3], n4) : new X3(n4, i4[s3]), await this.addNode(e7);
      }
      return await e7.getKey();
    }
    async delete(t) {
      if (!g2(this, _t, "f"))
        throw Lt;
      const e7 = V3.fromBigInt(t), i4 = N3(this.maxLevels, e7.value);
      let s3 = g2(this, Ot, "f");
      const n4 = [];
      for (let t2 = 0; t2 < g2(this, Pt, "f"); t2 += 1) {
        const r = await this.getNode(s3);
        if (void 0 === r)
          throw Bt;
        switch (r.type) {
          case 2:
            throw mt;
          case 1:
            if (b3(e7.bytes, r.entry[0].value))
              return void await this.rmAndUpload(i4, e7, n4);
            throw mt;
          case 0:
            i4[t2] ? (s3 = r.childR, n4.push(r.childL)) : (s3 = r.childL, n4.push(r.childR));
            break;
          default:
            throw kt;
        }
      }
      throw mt;
    }
    async rmAndUpload(t, e7, i4) {
      if (0 === i4.length)
        return v3(this, Ot, M3, "f"), void await g2(this, $t, "f").setRoot(g2(this, Ot, "f"));
      const s3 = i4[i4.length - 1];
      i4.length < 2 && (v3(this, Ot, i4[0], "f"), await g2(this, $t, "f").setRoot(g2(this, Ot, "f")));
      const n4 = await g2(this, $t, "f").get(s3.bytes);
      if (0 === n4?.type) {
        let e8;
        e8 = t[i4.length - 1] ? new X3(s3, M3) : new X3(M3, s3), await this.addNode(e8);
        const n5 = await this.recalculatePathUntilRoot(t, e8, i4.slice(0, i4.length - 1));
        return v3(this, Ot, n5, "f"), void await g2(this, $t, "f").setRoot(g2(this, Ot, "f"));
      }
      for (let e8 = i4.length - 2; e8 >= 0; e8 -= 1) {
        if (!b3(i4[e8].value, M3.value)) {
          let n5;
          n5 = t[e8] ? new X3(i4[e8], s3) : new X3(s3, i4[e8]), await this.addNode(n5);
          const r = await this.recalculatePathUntilRoot(t, n5, i4.slice(0, e8));
          v3(this, Ot, r, "f"), await g2(this, $t, "f").setRoot(g2(this, Ot, "f"));
          break;
        }
        if (0 === e8) {
          v3(this, Ot, s3, "f"), await g2(this, $t, "f").setRoot(g2(this, Ot, "f"));
          break;
        }
      }
    }
    async recWalk(t, e7) {
      const i4 = await this.getNode(t);
      if (void 0 === i4)
        throw Bt;
      switch (i4.type) {
        case 2:
        case 1:
          await e7(i4);
          break;
        case 0:
          await e7(i4), await this.recWalk(i4.childL, e7), await this.recWalk(i4.childR, e7);
          break;
        default:
          throw kt;
      }
    }
    async walk(t, e7) {
      b3(t.value, M3.value) && (t = await this.root()), await this.recWalk(t, e7);
    }
    async generateCircomVerifierProof(t, e7) {
      const i4 = await this.generateSCVerifierProof(t, e7);
      return i4.siblings = J2(i4.siblings, this.maxLevels), i4;
    }
    async generateSCVerifierProof(t, e7) {
      b3(e7.value, M3.value) && (e7 = await this.root());
      const { proof: i4, value: s3 } = await this.generateProof(t, e7), n4 = new Nt();
      return n4.root = e7, n4.siblings = i4.allSiblings(), void 0 !== i4.nodeAux ? (n4.oldKey = i4.nodeAux.key, n4.oldValue = i4.nodeAux.value) : (n4.oldKey = M3, n4.oldValue = M3), n4.key = V3.fromBigInt(t), n4.value = V3.fromBigInt(s3), i4.existence ? n4.fnc = 0 : n4.fnc = 1, n4;
    }
    async generateProof(t, e7) {
      let i4;
      const s3 = V3.fromBigInt(t), n4 = N3(this.maxLevels, s3.value);
      e7 || (e7 = await this.root());
      let r = e7, a4 = 0, o4 = false;
      const h6 = [];
      let l6;
      for (a4 = 0; a4 < this.maxLevels; a4 += 1) {
        const t2 = await this.getNode(r);
        if (void 0 === t2)
          throw Bt;
        switch (t2.type) {
          case 2:
            return { proof: new Kt({ existence: o4, nodeAux: l6, siblings: h6 }), value: BigInt("0") };
          case 1:
            return b3(s3.value, t2.entry[0].value) ? (o4 = true, { proof: new Kt({ existence: o4, nodeAux: l6, siblings: h6 }), value: t2.entry[1].bigInt() }) : (l6 = { key: t2.entry[0], value: t2.entry[1] }, { proof: new Kt({ existence: o4, nodeAux: l6, siblings: h6 }), value: t2.entry[1].bigInt() });
          case 0:
            n4[a4] ? (r = t2.childR, i4 = t2.childL) : (r = t2.childL, i4 = t2.childR);
            break;
          default:
            throw kt;
        }
        h6.push(i4);
      }
      throw mt;
    }
    async addAndGetCircomProof(t, e7) {
      const i4 = new Ut();
      i4.fnc = 2, i4.oldRoot = await this.root();
      let s3 = BigInt("0"), n4 = BigInt("0"), r = [];
      try {
        const e8 = await this.get(t);
        s3 = e8.key, n4 = e8.value, r = e8.siblings;
      } catch (t2) {
        if (t2 !== mt)
          throw t2;
      }
      if (void 0 === s3 || void 0 === n4)
        throw "key/value undefined";
      return i4.oldKey = V3.fromBigInt(s3), i4.oldValue = V3.fromBigInt(n4), b3(i4.oldKey.value, M3.value) && (i4.isOld0 = true), i4.siblings = J2(r, this.maxLevels), await this.add(t, e7), i4.newKey = V3.fromBigInt(t), i4.newValue = V3.fromBigInt(e7), i4.newRoot = await this.root(), i4;
    }
    async graphViz(t) {
      let e7 = 0;
      await this.walk(t, async (t2) => {
        const i4 = await t2.getKey();
        let s3, n4;
        switch (t2.type) {
          case 2:
            break;
          case 1:
            console.log(`"${i4.string()}" [style=filled]`);
            break;
          case 0:
            s3 = [t2.childL.string(), t2.childR.string()], n4 = "", s3.forEach((t3, i5) => {
              "0" === t3 && (s3[i5] = `empty${e7}`, n4 += `"${s3[i5]}" [style=dashed,label=0];
`, e7 += 1);
            }), console.log(`"${i4.string()}" -> {"${s3[1]}"}`), console.log(n4);
        }
      }), console.log("}\n");
    }
    async printGraphViz(t) {
      b3(t.value, M3.value) && (t = await this.root()), console.log(`--------
GraphViz of the MerkleTree with RootKey ${t.bigInt().toString(10)}
`), await this.graphViz(M3), console.log(`End of GraphViz of the MerkleTree with RootKey ${t.bigInt().toString(10)}
--------
`);
    }
  };
  $t = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();

  // node_modules/@iden3/js-jsonld-merklization/dist/browser/esm/index.js
  var i3 = Object.freeze({ ERRORS: { CONTEXT_NOT_DEFINED: new Error("error: context not defined on the object"), PARSED_CONTEXT_IS_NULL: new Error("error: parsed context is null"), TERM_IS_NOT_DEFINED: new Error("error: term is not defined"), NO_ID_ATTR: new Error("error: no @id attribute is defined"), CTX_TYP_IS_EMPTY: new Error("error: ctx type is empty"), FIELD_PATH_IS_EMPTY: new Error("error: filed path is empty"), UNEXPECTED_ARR_ELEMENT: new Error("error: unexpected array elements"), INVALID_REFERENCE_TYPE: new Error("error: invalid reference type"), MULTIPLE_PARENTS_FOUND: new Error("error: multiple parents found"), PARENT_NOT_FOUND: new Error("error: parent not found"), GRAPH_NOT_FOUND: new Error("error: graph not found"), QUAD_NOT_FOUND: new Error("error: quad not found"), MT_VALUE_INCORRECT_TYPE: new Error("error: incorrect type") }, DEFAULT_GRAPH_NODE_NAME: "@default", DEFAULT_GRAPH_TERM_TYPE: "DefaultGraph", QUADS_FORMAT: "application/n-quads", DIGITS_ONLY_REGEX: /^\d+$/, Q: BigInt("21888242871839275222246405745257275088548364400416034343698204186575808495617") });
  var o3 = class {
    constructor(t = $) {
      this._hasher = t;
    }
    async hash(e7) {
      return this._hasher.hash(e7);
    }
    async hashBytes(e7) {
      return this._hasher.hashBytes(e7);
    }
    prime() {
      return i3.Q;
    }
  };
  var a3 = new o3();
  var s2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function l4(e7) {
    return e7 && e7.__esModule && Object.prototype.hasOwnProperty.call(e7, "default") ? e7.default : e7;
  }
  function u2(e7) {
    if (e7.__esModule)
      return e7;
    var t = e7.default;
    if ("function" == typeof t) {
      var r = function e8() {
        return this instanceof e8 ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      r.prototype = t.prototype;
    } else
      r = {};
    return Object.defineProperty(r, "__esModule", { value: true }), Object.keys(e7).forEach(function(t2) {
      var n4 = Object.getOwnPropertyDescriptor(e7, t2);
      Object.defineProperty(r, t2, n4.get ? n4 : { enumerable: true, get: function() {
        return e7[t2];
      } });
    }), r;
  }
  var c2 = { exports: {} };
  c2.exports = function() {
    var e7 = Math.imul, t = Math.clz32;
    function r(e8) {
      return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e9) {
        return typeof e9;
      } : function(e9) {
        return e9 && "function" == typeof Symbol && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : typeof e9;
      }, r(e8);
    }
    function n4(e8, t2) {
      if (!(e8 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }
    function i4(e8, t2) {
      for (var r2, n5 = 0; n5 < t2.length; n5++)
        (r2 = t2[n5]).enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e8, r2.key, r2);
    }
    function o4(e8, t2, r2) {
      return t2 && i4(e8.prototype, t2), r2 && i4(e8, r2), Object.defineProperty(e8, "prototype", { writable: false }), e8;
    }
    function a4(e8, t2) {
      if ("function" != typeof t2 && null !== t2)
        throw new TypeError("Super expression must either be null or a function");
      e8.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e8, writable: true, configurable: true } }), Object.defineProperty(e8, "prototype", { writable: false }), t2 && l6(e8, t2);
    }
    function s3(e8) {
      return s3 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e9) {
        return e9.__proto__ || Object.getPrototypeOf(e9);
      }, s3(e8);
    }
    function l6(e8, t2) {
      return l6 = Object.setPrototypeOf || function(e9, t3) {
        return e9.__proto__ = t3, e9;
      }, l6(e8, t2);
    }
    function u4() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if ("function" == typeof Proxy)
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (e8) {
        return false;
      }
    }
    function c3() {
      return c3 = u4() ? Reflect.construct : function(e8, t2, r2) {
        var n5 = [null];
        n5.push.apply(n5, t2);
        var i5 = new (Function.bind.apply(e8, n5))();
        return r2 && l6(i5, r2.prototype), i5;
      }, c3.apply(null, arguments);
    }
    function d5(e8) {
      return -1 !== Function.toString.call(e8).indexOf("[native code]");
    }
    function h6(e8) {
      var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
      return h6 = function(e9) {
        function r2() {
          return c3(e9, arguments, s3(this).constructor);
        }
        if (null === e9 || !d5(e9))
          return e9;
        if ("function" != typeof e9)
          throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t2) {
          if (t2.has(e9))
            return t2.get(e9);
          t2.set(e9, r2);
        }
        return r2.prototype = Object.create(e9.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), l6(r2, e9);
      }, h6(e8);
    }
    function f5(e8) {
      if (void 0 === e8)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e8;
    }
    function p6(e8, t2) {
      if (t2 && ("object" == typeof t2 || "function" == typeof t2))
        return t2;
      if (void 0 !== t2)
        throw new TypeError("Derived constructors may only return object or undefined");
      return f5(e8);
    }
    function m5(e8) {
      var t2 = u4();
      return function() {
        var r2, n5 = s3(e8);
        if (t2) {
          var i5 = s3(this).constructor;
          r2 = Reflect.construct(n5, arguments, i5);
        } else
          r2 = n5.apply(this, arguments);
        return p6(this, r2);
      };
    }
    function y5(e8, t2) {
      return g5(e8) || v6(e8, t2) || w5(e8, t2) || _5();
    }
    function g5(e8) {
      if (Array.isArray(e8))
        return e8;
    }
    function v6(e8, t2) {
      var r2 = null == e8 ? null : "undefined" != typeof Symbol && e8[Symbol.iterator] || e8["@@iterator"];
      if (null != r2) {
        var n5, i5, o5 = [], a5 = true, s4 = false;
        try {
          for (r2 = r2.call(e8); !(a5 = (n5 = r2.next()).done) && (o5.push(n5.value), !t2 || o5.length !== t2); a5 = true)
            ;
        } catch (e9) {
          s4 = true, i5 = e9;
        } finally {
          try {
            a5 || null == r2.return || r2.return();
          } finally {
            if (s4)
              throw i5;
          }
        }
        return o5;
      }
    }
    function w5(e8, t2) {
      if (e8) {
        if ("string" == typeof e8)
          return b7(e8, t2);
        var r2 = Object.prototype.toString.call(e8).slice(8, -1);
        return "Object" === r2 && e8.constructor && (r2 = e8.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(e8) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? b7(e8, t2) : void 0;
      }
    }
    function b7(e8, t2) {
      (null == t2 || t2 > e8.length) && (t2 = e8.length);
      for (var r2 = 0, n5 = Array(t2); r2 < t2; r2++)
        n5[r2] = e8[r2];
      return n5;
    }
    function _5() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function E4(e8, t2) {
      var r2 = "undefined" != typeof Symbol && e8[Symbol.iterator] || e8["@@iterator"];
      if (!r2) {
        if (Array.isArray(e8) || (r2 = w5(e8)) || t2 && e8 && "number" == typeof e8.length) {
          r2 && (e8 = r2);
          var n5 = 0, i5 = function() {
          };
          return { s: i5, n: function() {
            return n5 >= e8.length ? { done: true } : { done: false, value: e8[n5++] };
          }, e: function(e9) {
            throw e9;
          }, f: i5 };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o5, a5 = true, s4 = false;
      return { s: function() {
        r2 = r2.call(e8);
      }, n: function() {
        var e9 = r2.next();
        return a5 = e9.done, e9;
      }, e: function(e9) {
        s4 = true, o5 = e9;
      }, f: function() {
        try {
          a5 || null == r2.return || r2.return();
        } finally {
          if (s4)
            throw o5;
        }
      } };
    }
    var T6 = function(e8) {
      var t2 = Math.abs, i5 = Math.max, s4 = Math.floor;
      function l7(e9, t3) {
        var r2;
        if (n4(this, l7), (r2 = u5.call(this, e9)).sign = t3, Object.setPrototypeOf(f5(r2), l7.prototype), e9 > l7.__kMaxLength)
          throw new RangeError("Maximum BigInt size exceeded");
        return r2;
      }
      a4(l7, e8);
      var u5 = m5(l7);
      return o4(l7, [{ key: "toDebugString", value: function() {
        var e9, t3 = ["BigInt["], r2 = E4(this);
        try {
          for (r2.s(); !(e9 = r2.n()).done; ) {
            var n5 = e9.value;
            t3.push((n5 ? (n5 >>> 0).toString(16) : n5) + ", ");
          }
        } catch (e10) {
          r2.e(e10);
        } finally {
          r2.f();
        }
        return t3.push("]"), t3.join("");
      } }, { key: "toString", value: function() {
        var e9 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 10;
        if (2 > e9 || 36 < e9)
          throw new RangeError("toString() radix argument must be between 2 and 36");
        return 0 === this.length ? "0" : 0 == (e9 & e9 - 1) ? l7.__toStringBasePowerOfTwo(this, e9) : l7.__toStringGeneric(this, e9, false);
      } }, { key: "valueOf", value: function() {
        throw new Error("Convert JSBI instances to native numbers using `toNumber`.");
      } }, { key: "__copy", value: function() {
        for (var e9 = new l7(this.length, this.sign), t3 = 0; t3 < this.length; t3++)
          e9[t3] = this[t3];
        return e9;
      } }, { key: "__trim", value: function() {
        for (var e9 = this.length, t3 = this[e9 - 1]; 0 === t3; )
          t3 = this[--e9 - 1], this.pop();
        return 0 === e9 && (this.sign = false), this;
      } }, { key: "__initializeDigits", value: function() {
        for (var e9 = 0; e9 < this.length; e9++)
          this[e9] = 0;
      } }, { key: "__clzmsd", value: function() {
        return l7.__clz30(this.__digit(this.length - 1));
      } }, { key: "__inplaceMultiplyAdd", value: function(e9, t3, r2) {
        r2 > this.length && (r2 = this.length);
        for (var n5 = 32767 & e9, i6 = e9 >>> 15, o5 = 0, a5 = t3, s5 = 0; s5 < r2; s5++) {
          var u6 = this.__digit(s5), c4 = 32767 & u6, d6 = u6 >>> 15, h7 = l7.__imul(c4, n5), f6 = l7.__imul(c4, i6), p7 = l7.__imul(d6, n5), m6 = a5 + h7 + o5;
          o5 = m6 >>> 30, m6 &= 1073741823, o5 += (m6 += ((32767 & f6) << 15) + ((32767 & p7) << 15)) >>> 30, a5 = l7.__imul(d6, i6) + (f6 >>> 15) + (p7 >>> 15), this.__setDigit(s5, 1073741823 & m6);
        }
        if (0 !== o5 || 0 !== a5)
          throw new Error("implementation bug");
      } }, { key: "__inplaceAdd", value: function(e9, t3, r2) {
        for (var n5, i6 = 0, o5 = 0; o5 < r2; o5++)
          i6 = (n5 = this.__halfDigit(t3 + o5) + e9.__halfDigit(o5) + i6) >>> 15, this.__setHalfDigit(t3 + o5, 32767 & n5);
        return i6;
      } }, { key: "__inplaceSub", value: function(e9, t3, r2) {
        var n5 = 0;
        if (1 & t3) {
          t3 >>= 1;
          for (var i6 = this.__digit(t3), o5 = 32767 & i6, a5 = 0; a5 < r2 - 1 >>> 1; a5++) {
            var s5 = e9.__digit(a5), l8 = (i6 >>> 15) - (32767 & s5) - n5;
            n5 = 1 & l8 >>> 15, this.__setDigit(t3 + a5, (32767 & l8) << 15 | 32767 & o5), n5 = 1 & (o5 = (32767 & (i6 = this.__digit(t3 + a5 + 1))) - (s5 >>> 15) - n5) >>> 15;
          }
          var u6 = e9.__digit(a5), c4 = (i6 >>> 15) - (32767 & u6) - n5;
          if (n5 = 1 & c4 >>> 15, this.__setDigit(t3 + a5, (32767 & c4) << 15 | 32767 & o5), t3 + a5 + 1 >= this.length)
            throw new RangeError("out of bounds");
          0 == (1 & r2) && (n5 = 1 & (o5 = (32767 & (i6 = this.__digit(t3 + a5 + 1))) - (u6 >>> 15) - n5) >>> 15, this.__setDigit(t3 + e9.length, 1073709056 & i6 | 32767 & o5));
        } else {
          t3 >>= 1;
          for (var d6 = 0; d6 < e9.length - 1; d6++) {
            var h7 = this.__digit(t3 + d6), f6 = e9.__digit(d6), p7 = (32767 & h7) - (32767 & f6) - n5, m6 = (h7 >>> 15) - (f6 >>> 15) - (n5 = 1 & p7 >>> 15);
            n5 = 1 & m6 >>> 15, this.__setDigit(t3 + d6, (32767 & m6) << 15 | 32767 & p7);
          }
          var y6 = this.__digit(t3 + d6), g6 = e9.__digit(d6), v7 = (32767 & y6) - (32767 & g6) - n5;
          n5 = 1 & v7 >>> 15;
          var w6 = 0;
          0 == (1 & r2) && (n5 = 1 & (w6 = (y6 >>> 15) - (g6 >>> 15) - n5) >>> 15), this.__setDigit(t3 + d6, (32767 & w6) << 15 | 32767 & v7);
        }
        return n5;
      } }, { key: "__inplaceRightShift", value: function(e9) {
        if (0 !== e9) {
          for (var t3, r2 = this.__digit(0) >>> e9, n5 = this.length - 1, i6 = 0; i6 < n5; i6++)
            t3 = this.__digit(i6 + 1), this.__setDigit(i6, 1073741823 & t3 << 30 - e9 | r2), r2 = t3 >>> e9;
          this.__setDigit(n5, r2);
        }
      } }, { key: "__digit", value: function(e9) {
        return this[e9];
      } }, { key: "__unsignedDigit", value: function(e9) {
        return this[e9] >>> 0;
      } }, { key: "__setDigit", value: function(e9, t3) {
        this[e9] = 0 | t3;
      } }, { key: "__setDigitGrow", value: function(e9, t3) {
        this[e9] = 0 | t3;
      } }, { key: "__halfDigitLength", value: function() {
        var e9 = this.length;
        return 32767 >= this.__unsignedDigit(e9 - 1) ? 2 * e9 - 1 : 2 * e9;
      } }, { key: "__halfDigit", value: function(e9) {
        return 32767 & this[e9 >>> 1] >>> 15 * (1 & e9);
      } }, { key: "__setHalfDigit", value: function(e9, t3) {
        var r2 = e9 >>> 1, n5 = this.__digit(r2), i6 = 1 & e9 ? 32767 & n5 | t3 << 15 : 1073709056 & n5 | 32767 & t3;
        this.__setDigit(r2, i6);
      } }], [{ key: "BigInt", value: function(e9) {
        var t3 = Number.isFinite;
        if ("number" == typeof e9) {
          if (0 === e9)
            return l7.__zero();
          if (l7.__isOneDigitInt(e9))
            return 0 > e9 ? l7.__oneDigit(-e9, true) : l7.__oneDigit(e9, false);
          if (!t3(e9) || s4(e9) !== e9)
            throw new RangeError("The number " + e9 + " cannot be converted to BigInt because it is not an integer");
          return l7.__fromDouble(e9);
        }
        if ("string" == typeof e9) {
          var n5 = l7.__fromString(e9);
          if (null === n5)
            throw new SyntaxError("Cannot convert " + e9 + " to a BigInt");
          return n5;
        }
        if ("boolean" == typeof e9)
          return true === e9 ? l7.__oneDigit(1, false) : l7.__zero();
        if ("object" === r(e9)) {
          if (e9.constructor === l7)
            return e9;
          var i6 = l7.__toPrimitive(e9);
          return l7.BigInt(i6);
        }
        throw new TypeError("Cannot convert " + e9 + " to a BigInt");
      } }, { key: "toNumber", value: function(e9) {
        var t3 = e9.length;
        if (0 === t3)
          return 0;
        if (1 === t3) {
          var r2 = e9.__unsignedDigit(0);
          return e9.sign ? -r2 : r2;
        }
        var n5 = e9.__digit(t3 - 1), i6 = l7.__clz30(n5), o5 = 30 * t3 - i6;
        if (1024 < o5)
          return e9.sign ? -1 / 0 : 1 / 0;
        var a5 = o5 - 1, s5 = n5, u6 = t3 - 1, c4 = i6 + 3, d6 = 32 === c4 ? 0 : s5 << c4;
        d6 >>>= 12;
        var h7 = c4 - 12, f6 = 12 <= c4 ? 0 : s5 << 20 + c4, p7 = 20 + c4;
        for (0 < h7 && 0 < u6 && (u6--, d6 |= (s5 = e9.__digit(u6)) >>> 30 - h7, f6 = s5 << h7 + 2, p7 = h7 + 2); 0 < p7 && 0 < u6; )
          u6--, s5 = e9.__digit(u6), f6 |= 30 <= p7 ? s5 << p7 - 30 : s5 >>> 30 - p7, p7 -= 30;
        var m6 = l7.__decideRounding(e9, p7, u6, s5);
        if ((1 === m6 || 0 === m6 && 1 == (1 & f6)) && 0 == (f6 = f6 + 1 >>> 0) && 0 != ++d6 >>> 20 && (d6 = 0, 1023 < ++a5))
          return e9.sign ? -1 / 0 : 1 / 0;
        var y6 = e9.sign ? -2147483648 : 0;
        return a5 = a5 + 1023 << 20, l7.__kBitConversionInts[1] = y6 | a5 | d6, l7.__kBitConversionInts[0] = f6, l7.__kBitConversionDouble[0];
      } }, { key: "unaryMinus", value: function(e9) {
        if (0 === e9.length)
          return e9;
        var t3 = e9.__copy();
        return t3.sign = !e9.sign, t3;
      } }, { key: "bitwiseNot", value: function(e9) {
        return e9.sign ? l7.__absoluteSubOne(e9).__trim() : l7.__absoluteAddOne(e9, true);
      } }, { key: "exponentiate", value: function(e9, t3) {
        if (t3.sign)
          throw new RangeError("Exponent must be positive");
        if (0 === t3.length)
          return l7.__oneDigit(1, false);
        if (0 === e9.length)
          return e9;
        if (1 === e9.length && 1 === e9.__digit(0))
          return e9.sign && 0 == (1 & t3.__digit(0)) ? l7.unaryMinus(e9) : e9;
        if (1 < t3.length)
          throw new RangeError("BigInt too big");
        var r2 = t3.__unsignedDigit(0);
        if (1 === r2)
          return e9;
        if (r2 >= l7.__kMaxLengthBits)
          throw new RangeError("BigInt too big");
        if (1 === e9.length && 2 === e9.__digit(0)) {
          var n5 = 1 + (0 | r2 / 30), i6 = new l7(n5, e9.sign && 0 != (1 & r2));
          i6.__initializeDigits();
          var o5 = 1 << r2 % 30;
          return i6.__setDigit(n5 - 1, o5), i6;
        }
        var a5 = null, s5 = e9;
        for (0 != (1 & r2) && (a5 = e9), r2 >>= 1; 0 !== r2; r2 >>= 1)
          s5 = l7.multiply(s5, s5), 0 != (1 & r2) && (a5 = null === a5 ? s5 : l7.multiply(a5, s5));
        return a5;
      } }, { key: "multiply", value: function(e9, t3) {
        if (0 === e9.length)
          return e9;
        if (0 === t3.length)
          return t3;
        var r2 = e9.length + t3.length;
        30 <= e9.__clzmsd() + t3.__clzmsd() && r2--;
        var n5 = new l7(r2, e9.sign !== t3.sign);
        n5.__initializeDigits();
        for (var i6 = 0; i6 < e9.length; i6++)
          l7.__multiplyAccumulate(t3, e9.__digit(i6), n5, i6);
        return n5.__trim();
      } }, { key: "divide", value: function(e9, t3) {
        if (0 === t3.length)
          throw new RangeError("Division by zero");
        if (0 > l7.__absoluteCompare(e9, t3))
          return l7.__zero();
        var r2, n5 = e9.sign !== t3.sign, i6 = t3.__unsignedDigit(0);
        if (1 === t3.length && 32767 >= i6) {
          if (1 === i6)
            return n5 === e9.sign ? e9 : l7.unaryMinus(e9);
          r2 = l7.__absoluteDivSmall(e9, i6, null);
        } else
          r2 = l7.__absoluteDivLarge(e9, t3, true, false);
        return r2.sign = n5, r2.__trim();
      } }, { key: "remainder", value: function(e9, t3) {
        if (0 === t3.length)
          throw new RangeError("Division by zero");
        if (0 > l7.__absoluteCompare(e9, t3))
          return e9;
        var r2 = t3.__unsignedDigit(0);
        if (1 === t3.length && 32767 >= r2) {
          if (1 === r2)
            return l7.__zero();
          var n5 = l7.__absoluteModSmall(e9, r2);
          return 0 === n5 ? l7.__zero() : l7.__oneDigit(n5, e9.sign);
        }
        var i6 = l7.__absoluteDivLarge(e9, t3, false, true);
        return i6.sign = e9.sign, i6.__trim();
      } }, { key: "add", value: function(e9, t3) {
        var r2 = e9.sign;
        return r2 === t3.sign ? l7.__absoluteAdd(e9, t3, r2) : 0 <= l7.__absoluteCompare(e9, t3) ? l7.__absoluteSub(e9, t3, r2) : l7.__absoluteSub(t3, e9, !r2);
      } }, { key: "subtract", value: function(e9, t3) {
        var r2 = e9.sign;
        return r2 === t3.sign ? 0 <= l7.__absoluteCompare(e9, t3) ? l7.__absoluteSub(e9, t3, r2) : l7.__absoluteSub(t3, e9, !r2) : l7.__absoluteAdd(e9, t3, r2);
      } }, { key: "leftShift", value: function(e9, t3) {
        return 0 === t3.length || 0 === e9.length ? e9 : t3.sign ? l7.__rightShiftByAbsolute(e9, t3) : l7.__leftShiftByAbsolute(e9, t3);
      } }, { key: "signedRightShift", value: function(e9, t3) {
        return 0 === t3.length || 0 === e9.length ? e9 : t3.sign ? l7.__leftShiftByAbsolute(e9, t3) : l7.__rightShiftByAbsolute(e9, t3);
      } }, { key: "unsignedRightShift", value: function() {
        throw new TypeError("BigInts have no unsigned right shift; use >> instead");
      } }, { key: "lessThan", value: function(e9, t3) {
        return 0 > l7.__compareToBigInt(e9, t3);
      } }, { key: "lessThanOrEqual", value: function(e9, t3) {
        return 0 >= l7.__compareToBigInt(e9, t3);
      } }, { key: "greaterThan", value: function(e9, t3) {
        return 0 < l7.__compareToBigInt(e9, t3);
      } }, { key: "greaterThanOrEqual", value: function(e9, t3) {
        return 0 <= l7.__compareToBigInt(e9, t3);
      } }, { key: "equal", value: function(e9, t3) {
        if (e9.sign !== t3.sign)
          return false;
        if (e9.length !== t3.length)
          return false;
        for (var r2 = 0; r2 < e9.length; r2++)
          if (e9.__digit(r2) !== t3.__digit(r2))
            return false;
        return true;
      } }, { key: "notEqual", value: function(e9, t3) {
        return !l7.equal(e9, t3);
      } }, { key: "bitwiseAnd", value: function(e9, t3) {
        if (!e9.sign && !t3.sign)
          return l7.__absoluteAnd(e9, t3).__trim();
        if (e9.sign && t3.sign) {
          var r2 = i5(e9.length, t3.length) + 1, n5 = l7.__absoluteSubOne(e9, r2), o5 = l7.__absoluteSubOne(t3);
          return n5 = l7.__absoluteOr(n5, o5, n5), l7.__absoluteAddOne(n5, true, n5).__trim();
        }
        if (e9.sign) {
          var a5 = [t3, e9];
          e9 = a5[0], t3 = a5[1];
        }
        return l7.__absoluteAndNot(e9, l7.__absoluteSubOne(t3)).__trim();
      } }, { key: "bitwiseXor", value: function(e9, t3) {
        if (!e9.sign && !t3.sign)
          return l7.__absoluteXor(e9, t3).__trim();
        if (e9.sign && t3.sign) {
          var r2 = i5(e9.length, t3.length), n5 = l7.__absoluteSubOne(e9, r2), o5 = l7.__absoluteSubOne(t3);
          return l7.__absoluteXor(n5, o5, n5).__trim();
        }
        var a5 = i5(e9.length, t3.length) + 1;
        if (e9.sign) {
          var s5 = [t3, e9];
          e9 = s5[0], t3 = s5[1];
        }
        var u6 = l7.__absoluteSubOne(t3, a5);
        return u6 = l7.__absoluteXor(u6, e9, u6), l7.__absoluteAddOne(u6, true, u6).__trim();
      } }, { key: "bitwiseOr", value: function(e9, t3) {
        var r2 = i5(e9.length, t3.length);
        if (!e9.sign && !t3.sign)
          return l7.__absoluteOr(e9, t3).__trim();
        if (e9.sign && t3.sign) {
          var n5 = l7.__absoluteSubOne(e9, r2), o5 = l7.__absoluteSubOne(t3);
          return n5 = l7.__absoluteAnd(n5, o5, n5), l7.__absoluteAddOne(n5, true, n5).__trim();
        }
        if (e9.sign) {
          var a5 = [t3, e9];
          e9 = a5[0], t3 = a5[1];
        }
        var s5 = l7.__absoluteSubOne(t3, r2);
        return s5 = l7.__absoluteAndNot(s5, e9, s5), l7.__absoluteAddOne(s5, true, s5).__trim();
      } }, { key: "asIntN", value: function(e9, t3) {
        if (0 === t3.length)
          return t3;
        if (0 > (e9 = s4(e9)))
          throw new RangeError("Invalid value: not (convertible to) a safe integer");
        if (0 === e9)
          return l7.__zero();
        if (e9 >= l7.__kMaxLengthBits)
          return t3;
        var r2 = 0 | (e9 + 29) / 30;
        if (t3.length < r2)
          return t3;
        var n5 = t3.__unsignedDigit(r2 - 1), i6 = 1 << (e9 - 1) % 30;
        if (t3.length === r2 && n5 < i6)
          return t3;
        if ((n5 & i6) !== i6)
          return l7.__truncateToNBits(e9, t3);
        if (!t3.sign)
          return l7.__truncateAndSubFromPowerOfTwo(e9, t3, true);
        if (0 == (n5 & i6 - 1)) {
          for (var o5 = r2 - 2; 0 <= o5; o5--)
            if (0 !== t3.__digit(o5))
              return l7.__truncateAndSubFromPowerOfTwo(e9, t3, false);
          return t3.length === r2 && n5 === i6 ? t3 : l7.__truncateToNBits(e9, t3);
        }
        return l7.__truncateAndSubFromPowerOfTwo(e9, t3, false);
      } }, { key: "asUintN", value: function(e9, t3) {
        if (0 === t3.length)
          return t3;
        if (0 > (e9 = s4(e9)))
          throw new RangeError("Invalid value: not (convertible to) a safe integer");
        if (0 === e9)
          return l7.__zero();
        if (t3.sign) {
          if (e9 > l7.__kMaxLengthBits)
            throw new RangeError("BigInt too big");
          return l7.__truncateAndSubFromPowerOfTwo(e9, t3, false);
        }
        if (e9 >= l7.__kMaxLengthBits)
          return t3;
        var r2 = 0 | (e9 + 29) / 30;
        if (t3.length < r2)
          return t3;
        var n5 = e9 % 30;
        if (t3.length == r2) {
          if (0 === n5)
            return t3;
          if (0 == t3.__digit(r2 - 1) >>> n5)
            return t3;
        }
        return l7.__truncateToNBits(e9, t3);
      } }, { key: "ADD", value: function(e9, t3) {
        if (e9 = l7.__toPrimitive(e9), t3 = l7.__toPrimitive(t3), "string" == typeof e9)
          return "string" != typeof t3 && (t3 = t3.toString()), e9 + t3;
        if ("string" == typeof t3)
          return e9.toString() + t3;
        if (e9 = l7.__toNumeric(e9), t3 = l7.__toNumeric(t3), l7.__isBigInt(e9) && l7.__isBigInt(t3))
          return l7.add(e9, t3);
        if ("number" == typeof e9 && "number" == typeof t3)
          return e9 + t3;
        throw new TypeError("Cannot mix BigInt and other types, use explicit conversions");
      } }, { key: "LT", value: function(e9, t3) {
        return l7.__compare(e9, t3, 0);
      } }, { key: "LE", value: function(e9, t3) {
        return l7.__compare(e9, t3, 1);
      } }, { key: "GT", value: function(e9, t3) {
        return l7.__compare(e9, t3, 2);
      } }, { key: "GE", value: function(e9, t3) {
        return l7.__compare(e9, t3, 3);
      } }, { key: "EQ", value: function(e9, t3) {
        for (; ; ) {
          if (l7.__isBigInt(e9))
            return l7.__isBigInt(t3) ? l7.equal(e9, t3) : l7.EQ(t3, e9);
          if ("number" == typeof e9) {
            if (l7.__isBigInt(t3))
              return l7.__equalToNumber(t3, e9);
            if ("object" !== r(t3))
              return e9 == t3;
            t3 = l7.__toPrimitive(t3);
          } else if ("string" == typeof e9) {
            if (l7.__isBigInt(t3))
              return null !== (e9 = l7.__fromString(e9)) && l7.equal(e9, t3);
            if ("object" !== r(t3))
              return e9 == t3;
            t3 = l7.__toPrimitive(t3);
          } else if ("boolean" == typeof e9) {
            if (l7.__isBigInt(t3))
              return l7.__equalToNumber(t3, +e9);
            if ("object" !== r(t3))
              return e9 == t3;
            t3 = l7.__toPrimitive(t3);
          } else if ("symbol" === r(e9)) {
            if (l7.__isBigInt(t3))
              return false;
            if ("object" !== r(t3))
              return e9 == t3;
            t3 = l7.__toPrimitive(t3);
          } else {
            if ("object" !== r(e9))
              return e9 == t3;
            if ("object" === r(t3) && t3.constructor !== l7)
              return e9 == t3;
            e9 = l7.__toPrimitive(e9);
          }
        }
      } }, { key: "NE", value: function(e9, t3) {
        return !l7.EQ(e9, t3);
      } }, { key: "DataViewGetBigInt64", value: function(e9, t3) {
        var r2 = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
        return l7.asIntN(64, l7.DataViewGetBigUint64(e9, t3, r2));
      } }, { key: "DataViewGetBigUint64", value: function(e9, t3) {
        var r2 = !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2], n5 = y5(r2 ? [4, 0] : [0, 4], 2), i6 = n5[0], o5 = n5[1], a5 = e9.getUint32(t3 + i6, r2), s5 = e9.getUint32(t3 + o5, r2), u6 = new l7(3, false);
        return u6.__setDigit(0, 1073741823 & s5), u6.__setDigit(1, (268435455 & a5) << 2 | s5 >>> 30), u6.__setDigit(2, a5 >>> 28), u6.__trim();
      } }, { key: "DataViewSetBigInt64", value: function(e9, t3, r2) {
        var n5 = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3];
        l7.DataViewSetBigUint64(e9, t3, r2, n5);
      } }, { key: "DataViewSetBigUint64", value: function(e9, t3, r2) {
        var n5 = !!(3 < arguments.length && void 0 !== arguments[3]) && arguments[3], i6 = 0, o5 = 0;
        if (0 < (r2 = l7.asUintN(64, r2)).length && (o5 = r2.__digit(0), 1 < r2.length)) {
          var a5 = r2.__digit(1);
          o5 |= a5 << 30, i6 = a5 >>> 2, 2 < r2.length && (i6 |= r2.__digit(2) << 28);
        }
        var s5 = y5(n5 ? [4, 0] : [0, 4], 2), u6 = s5[0], c4 = s5[1];
        e9.setUint32(t3 + u6, i6, n5), e9.setUint32(t3 + c4, o5, n5);
      } }, { key: "__zero", value: function() {
        return new l7(0, false);
      } }, { key: "__oneDigit", value: function(e9, t3) {
        var r2 = new l7(1, t3);
        return r2.__setDigit(0, e9), r2;
      } }, { key: "__decideRounding", value: function(e9, t3, r2, n5) {
        if (0 < t3)
          return -1;
        var i6;
        if (0 > t3)
          i6 = -t3 - 1;
        else {
          if (0 === r2)
            return -1;
          r2--, n5 = e9.__digit(r2), i6 = 29;
        }
        var o5 = 1 << i6;
        if (0 == (n5 & o5))
          return -1;
        if (0 != (n5 & (o5 -= 1)))
          return 1;
        for (; 0 < r2; )
          if (r2--, 0 !== e9.__digit(r2))
            return 1;
        return 0;
      } }, { key: "__fromDouble", value: function(e9) {
        l7.__kBitConversionDouble[0] = e9;
        var t3, r2 = (2047 & l7.__kBitConversionInts[1] >>> 20) - 1023, n5 = 1 + (0 | r2 / 30), i6 = new l7(n5, 0 > e9), o5 = 1048575 & l7.__kBitConversionInts[1] | 1048576, a5 = l7.__kBitConversionInts[0], s5 = 20, u6 = r2 % 30, c4 = 0;
        if (u6 < s5) {
          var d6 = s5 - u6;
          c4 = d6 + 32, t3 = o5 >>> d6, o5 = o5 << 32 - d6 | a5 >>> d6, a5 <<= 32 - d6;
        } else if (u6 === s5)
          c4 = 32, t3 = o5, o5 = a5, a5 = 0;
        else {
          var h7 = u6 - s5;
          c4 = 32 - h7, t3 = o5 << h7 | a5 >>> 32 - h7, o5 = a5 << h7, a5 = 0;
        }
        i6.__setDigit(n5 - 1, t3);
        for (var f6 = n5 - 2; 0 <= f6; f6--)
          0 < c4 ? (c4 -= 30, t3 = o5 >>> 2, o5 = o5 << 30 | a5 >>> 2, a5 <<= 30) : t3 = 0, i6.__setDigit(f6, t3);
        return i6.__trim();
      } }, { key: "__isWhitespace", value: function(e9) {
        return !!(13 >= e9 && 9 <= e9) || (159 >= e9 ? 32 == e9 : 131071 >= e9 ? 160 == e9 || 5760 == e9 : 196607 >= e9 ? 10 >= (e9 &= 131071) || 40 == e9 || 41 == e9 || 47 == e9 || 95 == e9 || 4096 == e9 : 65279 == e9);
      } }, { key: "__fromString", value: function(e9) {
        var t3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r2 = 0, n5 = e9.length, i6 = 0;
        if (i6 === n5)
          return l7.__zero();
        for (var o5 = e9.charCodeAt(i6); l7.__isWhitespace(o5); ) {
          if (++i6 === n5)
            return l7.__zero();
          o5 = e9.charCodeAt(i6);
        }
        if (43 === o5) {
          if (++i6 === n5)
            return null;
          o5 = e9.charCodeAt(i6), r2 = 1;
        } else if (45 === o5) {
          if (++i6 === n5)
            return null;
          o5 = e9.charCodeAt(i6), r2 = -1;
        }
        if (0 === t3) {
          if (t3 = 10, 48 === o5) {
            if (++i6 === n5)
              return l7.__zero();
            if (88 === (o5 = e9.charCodeAt(i6)) || 120 === o5) {
              if (t3 = 16, ++i6 === n5)
                return null;
              o5 = e9.charCodeAt(i6);
            } else if (79 === o5 || 111 === o5) {
              if (t3 = 8, ++i6 === n5)
                return null;
              o5 = e9.charCodeAt(i6);
            } else if (66 === o5 || 98 === o5) {
              if (t3 = 2, ++i6 === n5)
                return null;
              o5 = e9.charCodeAt(i6);
            }
          }
        } else if (16 === t3 && 48 === o5) {
          if (++i6 === n5)
            return l7.__zero();
          if (88 === (o5 = e9.charCodeAt(i6)) || 120 === o5) {
            if (++i6 === n5)
              return null;
            o5 = e9.charCodeAt(i6);
          }
        }
        if (0 !== r2 && 10 !== t3)
          return null;
        for (; 48 === o5; ) {
          if (++i6 === n5)
            return l7.__zero();
          o5 = e9.charCodeAt(i6);
        }
        var a5 = n5 - i6, s5 = l7.__kMaxBitsPerChar[t3], u6 = l7.__kBitsPerCharTableMultiplier - 1;
        if (a5 > 1073741824 / s5)
          return null;
        var c4 = new l7(0 | (29 + (s5 * a5 + u6 >>> l7.__kBitsPerCharTableShift)) / 30, false), d6 = 10 > t3 ? t3 : 10, h7 = 10 < t3 ? t3 - 10 : 0;
        if (0 == (t3 & t3 - 1)) {
          s5 >>= l7.__kBitsPerCharTableShift;
          var f6 = [], p7 = [], m6 = false;
          do {
            for (var y6, g6 = 0, v7 = 0; ; ) {
              if (y6 = void 0, o5 - 48 >>> 0 < d6)
                y6 = o5 - 48;
              else {
                if (!((32 | o5) - 97 >>> 0 < h7)) {
                  m6 = true;
                  break;
                }
                y6 = (32 | o5) - 87;
              }
              if (v7 += s5, g6 = g6 << s5 | y6, ++i6 === n5) {
                m6 = true;
                break;
              }
              if (o5 = e9.charCodeAt(i6), 30 < v7 + s5)
                break;
            }
            f6.push(g6), p7.push(v7);
          } while (!m6);
          l7.__fillFromParts(c4, f6, p7);
        } else {
          c4.__initializeDigits();
          var w6 = false, b8 = 0;
          do {
            for (var _6, E5 = 0, T7 = 1; ; ) {
              if (_6 = void 0, o5 - 48 >>> 0 < d6)
                _6 = o5 - 48;
              else {
                if (!((32 | o5) - 97 >>> 0 < h7)) {
                  w6 = true;
                  break;
                }
                _6 = (32 | o5) - 87;
              }
              var x6 = T7 * t3;
              if (1073741823 < x6)
                break;
              if (T7 = x6, E5 = E5 * t3 + _6, b8++, ++i6 === n5) {
                w6 = true;
                break;
              }
              o5 = e9.charCodeAt(i6);
            }
            var I5 = 0 | (s5 * b8 + (u6 = 30 * l7.__kBitsPerCharTableMultiplier - 1) >>> l7.__kBitsPerCharTableShift) / 30;
            c4.__inplaceMultiplyAdd(T7, E5, I5);
          } while (!w6);
        }
        if (i6 !== n5) {
          if (!l7.__isWhitespace(o5))
            return null;
          for (i6++; i6 < n5; i6++)
            if (o5 = e9.charCodeAt(i6), !l7.__isWhitespace(o5))
              return null;
        }
        return c4.sign = -1 === r2, c4.__trim();
      } }, { key: "__fillFromParts", value: function(e9, t3, r2) {
        for (var n5 = 0, i6 = 0, o5 = 0, a5 = t3.length - 1; 0 <= a5; a5--) {
          var s5 = t3[a5], l8 = r2[a5];
          i6 |= s5 << o5, 30 === (o5 += l8) ? (e9.__setDigit(n5++, i6), o5 = 0, i6 = 0) : 30 < o5 && (e9.__setDigit(n5++, 1073741823 & i6), i6 = s5 >>> l8 - (o5 -= 30));
        }
        if (0 !== i6) {
          if (n5 >= e9.length)
            throw new Error("implementation bug");
          e9.__setDigit(n5++, i6);
        }
        for (; n5 < e9.length; n5++)
          e9.__setDigit(n5, 0);
      } }, { key: "__toStringBasePowerOfTwo", value: function(e9, t3) {
        var r2 = e9.length, n5 = t3 - 1, i6 = n5 = (15 & (n5 = (51 & (n5 = (85 & n5 >>> 1) + (85 & n5)) >>> 2) + (51 & n5)) >>> 4) + (15 & n5), o5 = t3 - 1, a5 = e9.__digit(r2 - 1), s5 = 0 | (30 * r2 - l7.__clz30(a5) + i6 - 1) / i6;
        if (e9.sign && s5++, 268435456 < s5)
          throw new Error("string too long");
        for (var u6 = Array(s5), c4 = s5 - 1, d6 = 0, h7 = 0, f6 = 0; f6 < r2 - 1; f6++) {
          var p7 = e9.__digit(f6), m6 = (d6 | p7 << h7) & o5;
          u6[c4--] = l7.__kConversionChars[m6];
          var y6 = i6 - h7;
          for (d6 = p7 >>> y6, h7 = 30 - y6; h7 >= i6; )
            u6[c4--] = l7.__kConversionChars[d6 & o5], d6 >>>= i6, h7 -= i6;
        }
        var g6 = (d6 | a5 << h7) & o5;
        for (u6[c4--] = l7.__kConversionChars[g6], d6 = a5 >>> i6 - h7; 0 !== d6; )
          u6[c4--] = l7.__kConversionChars[d6 & o5], d6 >>>= i6;
        if (e9.sign && (u6[c4--] = "-"), -1 !== c4)
          throw new Error("implementation bug");
        return u6.join("");
      } }, { key: "__toStringGeneric", value: function(e9, t3, r2) {
        var n5 = e9.length;
        if (0 === n5)
          return "";
        if (1 === n5) {
          var i6 = e9.__unsignedDigit(0).toString(t3);
          return false === r2 && e9.sign && (i6 = "-" + i6), i6;
        }
        var o5, a5, s5 = 30 * n5 - l7.__clz30(e9.__digit(n5 - 1)), u6 = l7.__kMaxBitsPerChar[t3] - 1, c4 = s5 * l7.__kBitsPerCharTableMultiplier, d6 = 1 + (c4 = 0 | (c4 += u6 - 1) / u6) >> 1, h7 = l7.exponentiate(l7.__oneDigit(t3, false), l7.__oneDigit(d6, false)), f6 = h7.__unsignedDigit(0);
        if (1 === h7.length && 32767 >= f6) {
          (o5 = new l7(e9.length, false)).__initializeDigits();
          for (var p7, m6 = 0, y6 = 2 * e9.length - 1; 0 <= y6; y6--)
            p7 = m6 << 15 | e9.__halfDigit(y6), o5.__setHalfDigit(y6, 0 | p7 / f6), m6 = 0 | p7 % f6;
          a5 = m6.toString(t3);
        } else {
          var g6 = l7.__absoluteDivLarge(e9, h7, true, true);
          o5 = g6.quotient;
          var v7 = g6.remainder.__trim();
          a5 = l7.__toStringGeneric(v7, t3, true);
        }
        o5.__trim();
        for (var w6 = l7.__toStringGeneric(o5, t3, true); a5.length < d6; )
          a5 = "0" + a5;
        return false === r2 && e9.sign && (w6 = "-" + w6), w6 + a5;
      } }, { key: "__unequalSign", value: function(e9) {
        return e9 ? -1 : 1;
      } }, { key: "__absoluteGreater", value: function(e9) {
        return e9 ? -1 : 1;
      } }, { key: "__absoluteLess", value: function(e9) {
        return e9 ? 1 : -1;
      } }, { key: "__compareToBigInt", value: function(e9, t3) {
        var r2 = e9.sign;
        if (r2 !== t3.sign)
          return l7.__unequalSign(r2);
        var n5 = l7.__absoluteCompare(e9, t3);
        return 0 < n5 ? l7.__absoluteGreater(r2) : 0 > n5 ? l7.__absoluteLess(r2) : 0;
      } }, { key: "__compareToNumber", value: function(e9, r2) {
        if (l7.__isOneDigitInt(r2)) {
          var n5 = e9.sign, i6 = 0 > r2;
          if (n5 !== i6)
            return l7.__unequalSign(n5);
          if (0 === e9.length) {
            if (i6)
              throw new Error("implementation bug");
            return 0 === r2 ? 0 : -1;
          }
          if (1 < e9.length)
            return l7.__absoluteGreater(n5);
          var o5 = t2(r2), a5 = e9.__unsignedDigit(0);
          return a5 > o5 ? l7.__absoluteGreater(n5) : a5 < o5 ? l7.__absoluteLess(n5) : 0;
        }
        return l7.__compareToDouble(e9, r2);
      } }, { key: "__compareToDouble", value: function(e9, t3) {
        if (t3 != t3)
          return t3;
        if (t3 === 1 / 0)
          return -1;
        if (t3 === -1 / 0)
          return 1;
        var r2 = e9.sign;
        if (r2 !== 0 > t3)
          return l7.__unequalSign(r2);
        if (0 === t3)
          throw new Error("implementation bug: should be handled elsewhere");
        if (0 === e9.length)
          return -1;
        l7.__kBitConversionDouble[0] = t3;
        var n5 = 2047 & l7.__kBitConversionInts[1] >>> 20;
        if (2047 == n5)
          throw new Error("implementation bug: handled elsewhere");
        var i6 = n5 - 1023;
        if (0 > i6)
          return l7.__absoluteGreater(r2);
        var o5 = e9.length, a5 = e9.__digit(o5 - 1), s5 = l7.__clz30(a5), u6 = 30 * o5 - s5, c4 = i6 + 1;
        if (u6 < c4)
          return l7.__absoluteLess(r2);
        if (u6 > c4)
          return l7.__absoluteGreater(r2);
        var d6 = 1048576 | 1048575 & l7.__kBitConversionInts[1], h7 = l7.__kBitConversionInts[0], f6 = 20, p7 = 29 - s5;
        if (p7 !== (0 | (u6 - 1) % 30))
          throw new Error("implementation bug");
        var m6, y6 = 0;
        if (p7 < f6) {
          var g6 = f6 - p7;
          y6 = g6 + 32, m6 = d6 >>> g6, d6 = d6 << 32 - g6 | h7 >>> g6, h7 <<= 32 - g6;
        } else if (p7 === f6)
          y6 = 32, m6 = d6, d6 = h7, h7 = 0;
        else {
          var v7 = p7 - f6;
          y6 = 32 - v7, m6 = d6 << v7 | h7 >>> 32 - v7, d6 = h7 << v7, h7 = 0;
        }
        if ((a5 >>>= 0) > (m6 >>>= 0))
          return l7.__absoluteGreater(r2);
        if (a5 < m6)
          return l7.__absoluteLess(r2);
        for (var w6 = o5 - 2; 0 <= w6; w6--) {
          0 < y6 ? (y6 -= 30, m6 = d6 >>> 2, d6 = d6 << 30 | h7 >>> 2, h7 <<= 30) : m6 = 0;
          var b8 = e9.__unsignedDigit(w6);
          if (b8 > m6)
            return l7.__absoluteGreater(r2);
          if (b8 < m6)
            return l7.__absoluteLess(r2);
        }
        if (0 !== d6 || 0 !== h7) {
          if (0 === y6)
            throw new Error("implementation bug");
          return l7.__absoluteLess(r2);
        }
        return 0;
      } }, { key: "__equalToNumber", value: function(e9, r2) {
        return l7.__isOneDigitInt(r2) ? 0 === r2 ? 0 === e9.length : 1 === e9.length && e9.sign === 0 > r2 && e9.__unsignedDigit(0) === t2(r2) : 0 === l7.__compareToDouble(e9, r2);
      } }, { key: "__comparisonResultToBool", value: function(e9, t3) {
        return 0 === t3 ? 0 > e9 : 1 === t3 ? 0 >= e9 : 2 === t3 ? 0 < e9 : 3 === t3 ? 0 <= e9 : void 0;
      } }, { key: "__compare", value: function(e9, t3, r2) {
        if (e9 = l7.__toPrimitive(e9), t3 = l7.__toPrimitive(t3), "string" == typeof e9 && "string" == typeof t3)
          switch (r2) {
            case 0:
              return e9 < t3;
            case 1:
              return e9 <= t3;
            case 2:
              return e9 > t3;
            case 3:
              return e9 >= t3;
          }
        if (l7.__isBigInt(e9) && "string" == typeof t3)
          return null !== (t3 = l7.__fromString(t3)) && l7.__comparisonResultToBool(l7.__compareToBigInt(e9, t3), r2);
        if ("string" == typeof e9 && l7.__isBigInt(t3))
          return null !== (e9 = l7.__fromString(e9)) && l7.__comparisonResultToBool(l7.__compareToBigInt(e9, t3), r2);
        if (e9 = l7.__toNumeric(e9), t3 = l7.__toNumeric(t3), l7.__isBigInt(e9)) {
          if (l7.__isBigInt(t3))
            return l7.__comparisonResultToBool(l7.__compareToBigInt(e9, t3), r2);
          if ("number" != typeof t3)
            throw new Error("implementation bug");
          return l7.__comparisonResultToBool(l7.__compareToNumber(e9, t3), r2);
        }
        if ("number" != typeof e9)
          throw new Error("implementation bug");
        if (l7.__isBigInt(t3))
          return l7.__comparisonResultToBool(l7.__compareToNumber(t3, e9), 2 ^ r2);
        if ("number" != typeof t3)
          throw new Error("implementation bug");
        return 0 === r2 ? e9 < t3 : 1 === r2 ? e9 <= t3 : 2 === r2 ? e9 > t3 : 3 === r2 ? e9 >= t3 : void 0;
      } }, { key: "__absoluteAdd", value: function(e9, t3, r2) {
        if (e9.length < t3.length)
          return l7.__absoluteAdd(t3, e9, r2);
        if (0 === e9.length)
          return e9;
        if (0 === t3.length)
          return e9.sign === r2 ? e9 : l7.unaryMinus(e9);
        var n5 = e9.length;
        (0 === e9.__clzmsd() || t3.length === e9.length && 0 === t3.__clzmsd()) && n5++;
        for (var i6, o5 = new l7(n5, r2), a5 = 0, s5 = 0; s5 < t3.length; s5++)
          a5 = (i6 = e9.__digit(s5) + t3.__digit(s5) + a5) >>> 30, o5.__setDigit(s5, 1073741823 & i6);
        for (; s5 < e9.length; s5++) {
          var u6 = e9.__digit(s5) + a5;
          a5 = u6 >>> 30, o5.__setDigit(s5, 1073741823 & u6);
        }
        return s5 < o5.length && o5.__setDigit(s5, a5), o5.__trim();
      } }, { key: "__absoluteSub", value: function(e9, t3, r2) {
        if (0 === e9.length)
          return e9;
        if (0 === t3.length)
          return e9.sign === r2 ? e9 : l7.unaryMinus(e9);
        for (var n5, i6 = new l7(e9.length, r2), o5 = 0, a5 = 0; a5 < t3.length; a5++)
          o5 = 1 & (n5 = e9.__digit(a5) - t3.__digit(a5) - o5) >>> 30, i6.__setDigit(a5, 1073741823 & n5);
        for (; a5 < e9.length; a5++) {
          var s5 = e9.__digit(a5) - o5;
          o5 = 1 & s5 >>> 30, i6.__setDigit(a5, 1073741823 & s5);
        }
        return i6.__trim();
      } }, { key: "__absoluteAddOne", value: function(e9, t3) {
        var r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n5 = e9.length;
        null === r2 ? r2 = new l7(n5, t3) : r2.sign = t3;
        for (var i6, o5 = 1, a5 = 0; a5 < n5; a5++)
          o5 = (i6 = e9.__digit(a5) + o5) >>> 30, r2.__setDigit(a5, 1073741823 & i6);
        return 0 !== o5 && r2.__setDigitGrow(n5, 1), r2;
      } }, { key: "__absoluteSubOne", value: function(e9, t3) {
        for (var r2, n5 = e9.length, i6 = new l7(t3 = t3 || n5, false), o5 = 1, a5 = 0; a5 < n5; a5++)
          o5 = 1 & (r2 = e9.__digit(a5) - o5) >>> 30, i6.__setDigit(a5, 1073741823 & r2);
        if (0 !== o5)
          throw new Error("implementation bug");
        for (var s5 = n5; s5 < t3; s5++)
          i6.__setDigit(s5, 0);
        return i6;
      } }, { key: "__absoluteAnd", value: function(e9, t3) {
        var r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n5 = e9.length, i6 = t3.length, o5 = i6;
        if (n5 < i6) {
          o5 = n5;
          var a5 = e9, s5 = n5;
          e9 = t3, n5 = i6, t3 = a5, i6 = s5;
        }
        var u6 = o5;
        null === r2 ? r2 = new l7(u6, false) : u6 = r2.length;
        for (var c4 = 0; c4 < o5; c4++)
          r2.__setDigit(c4, e9.__digit(c4) & t3.__digit(c4));
        for (; c4 < u6; c4++)
          r2.__setDigit(c4, 0);
        return r2;
      } }, { key: "__absoluteAndNot", value: function(e9, t3) {
        var r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n5 = e9.length, i6 = t3.length, o5 = i6;
        n5 < i6 && (o5 = n5);
        var a5 = n5;
        null === r2 ? r2 = new l7(a5, false) : a5 = r2.length;
        for (var s5 = 0; s5 < o5; s5++)
          r2.__setDigit(s5, e9.__digit(s5) & ~t3.__digit(s5));
        for (; s5 < n5; s5++)
          r2.__setDigit(s5, e9.__digit(s5));
        for (; s5 < a5; s5++)
          r2.__setDigit(s5, 0);
        return r2;
      } }, { key: "__absoluteOr", value: function(e9, t3) {
        var r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n5 = e9.length, i6 = t3.length, o5 = i6;
        if (n5 < i6) {
          o5 = n5;
          var a5 = e9, s5 = n5;
          e9 = t3, n5 = i6, t3 = a5, i6 = s5;
        }
        var u6 = n5;
        null === r2 ? r2 = new l7(u6, false) : u6 = r2.length;
        for (var c4 = 0; c4 < o5; c4++)
          r2.__setDigit(c4, e9.__digit(c4) | t3.__digit(c4));
        for (; c4 < n5; c4++)
          r2.__setDigit(c4, e9.__digit(c4));
        for (; c4 < u6; c4++)
          r2.__setDigit(c4, 0);
        return r2;
      } }, { key: "__absoluteXor", value: function(e9, t3) {
        var r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, n5 = e9.length, i6 = t3.length, o5 = i6;
        if (n5 < i6) {
          o5 = n5;
          var a5 = e9, s5 = n5;
          e9 = t3, n5 = i6, t3 = a5, i6 = s5;
        }
        var u6 = n5;
        null === r2 ? r2 = new l7(u6, false) : u6 = r2.length;
        for (var c4 = 0; c4 < o5; c4++)
          r2.__setDigit(c4, e9.__digit(c4) ^ t3.__digit(c4));
        for (; c4 < n5; c4++)
          r2.__setDigit(c4, e9.__digit(c4));
        for (; c4 < u6; c4++)
          r2.__setDigit(c4, 0);
        return r2;
      } }, { key: "__absoluteCompare", value: function(e9, t3) {
        var r2 = e9.length - t3.length;
        if (0 != r2)
          return r2;
        for (var n5 = e9.length - 1; 0 <= n5 && e9.__digit(n5) === t3.__digit(n5); )
          n5--;
        return 0 > n5 ? 0 : e9.__unsignedDigit(n5) > t3.__unsignedDigit(n5) ? 1 : -1;
      } }, { key: "__multiplyAccumulate", value: function(e9, t3, r2, n5) {
        if (0 !== t3) {
          for (var i6 = 32767 & t3, o5 = t3 >>> 15, a5 = 0, s5 = 0, u6 = 0; u6 < e9.length; u6++, n5++) {
            var c4 = r2.__digit(n5), d6 = e9.__digit(u6), h7 = 32767 & d6, f6 = d6 >>> 15, p7 = l7.__imul(h7, i6), m6 = l7.__imul(h7, o5), y6 = l7.__imul(f6, i6);
            a5 = (c4 += s5 + p7 + a5) >>> 30, c4 &= 1073741823, a5 += (c4 += ((32767 & m6) << 15) + ((32767 & y6) << 15)) >>> 30, s5 = l7.__imul(f6, o5) + (m6 >>> 15) + (y6 >>> 15), r2.__setDigit(n5, 1073741823 & c4);
          }
          for (; 0 !== a5 || 0 !== s5; n5++) {
            var g6 = r2.__digit(n5);
            g6 += a5 + s5, s5 = 0, a5 = g6 >>> 30, r2.__setDigit(n5, 1073741823 & g6);
          }
        }
      } }, { key: "__internalMultiplyAdd", value: function(e9, t3, r2, n5, i6) {
        for (var o5 = r2, a5 = 0, s5 = 0; s5 < n5; s5++) {
          var u6 = e9.__digit(s5), c4 = l7.__imul(32767 & u6, t3), d6 = l7.__imul(u6 >>> 15, t3), h7 = c4 + ((32767 & d6) << 15) + a5 + o5;
          o5 = h7 >>> 30, a5 = d6 >>> 15, i6.__setDigit(s5, 1073741823 & h7);
        }
        if (i6.length > n5)
          for (i6.__setDigit(n5++, o5 + a5); n5 < i6.length; )
            i6.__setDigit(n5++, 0);
        else if (0 !== o5 + a5)
          throw new Error("implementation bug");
      } }, { key: "__absoluteDivSmall", value: function(e9, t3) {
        var r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        null === r2 && (r2 = new l7(e9.length, false));
        for (var n5 = 0, i6 = 2 * e9.length - 1; 0 <= i6; i6 -= 2) {
          var o5 = (n5 << 15 | e9.__halfDigit(i6)) >>> 0, a5 = 0 | o5 / t3, s5 = 0 | (o5 = ((n5 = 0 | o5 % t3) << 15 | e9.__halfDigit(i6 - 1)) >>> 0) / t3;
          n5 = 0 | o5 % t3, r2.__setDigit(i6 >>> 1, a5 << 15 | s5);
        }
        return r2;
      } }, { key: "__absoluteModSmall", value: function(e9, t3) {
        for (var r2 = 0, n5 = 2 * e9.length - 1; 0 <= n5; n5--)
          r2 = 0 | ((r2 << 15 | e9.__halfDigit(n5)) >>> 0) % t3;
        return r2;
      } }, { key: "__absoluteDivLarge", value: function(e9, t3, r2, n5) {
        var i6 = t3.__halfDigitLength(), o5 = t3.length, a5 = e9.__halfDigitLength() - i6, s5 = null;
        r2 && (s5 = new l7(a5 + 2 >>> 1, false)).__initializeDigits();
        var u6 = new l7(i6 + 2 >>> 1, false);
        u6.__initializeDigits();
        var c4 = l7.__clz15(t3.__halfDigit(i6 - 1));
        0 < c4 && (t3 = l7.__specialLeftShift(t3, c4, 0));
        for (var d6 = l7.__specialLeftShift(e9, c4, 1), h7 = t3.__halfDigit(i6 - 1), f6 = 0, p7 = a5; 0 <= p7; p7--) {
          var m6 = 32767, y6 = d6.__halfDigit(p7 + i6);
          if (y6 !== h7) {
            var g6 = (y6 << 15 | d6.__halfDigit(p7 + i6 - 1)) >>> 0;
            m6 = 0 | g6 / h7;
            for (var v7 = 0 | g6 % h7, w6 = t3.__halfDigit(i6 - 2), b8 = d6.__halfDigit(p7 + i6 - 2); l7.__imul(m6, w6) >>> 0 > (v7 << 16 | b8) >>> 0 && (m6--, !(32767 < (v7 += h7))); )
              ;
          }
          l7.__internalMultiplyAdd(t3, m6, 0, o5, u6);
          var _6 = d6.__inplaceSub(u6, p7, i6 + 1);
          0 !== _6 && (_6 = d6.__inplaceAdd(t3, p7, i6), d6.__setHalfDigit(p7 + i6, 32767 & d6.__halfDigit(p7 + i6) + _6), m6--), r2 && (1 & p7 ? f6 = m6 << 15 : s5.__setDigit(p7 >>> 1, f6 | m6));
        }
        if (n5)
          return d6.__inplaceRightShift(c4), r2 ? { quotient: s5, remainder: d6 } : d6;
        if (r2)
          return s5;
        throw new Error("unreachable");
      } }, { key: "__clz15", value: function(e9) {
        return l7.__clz30(e9) - 15;
      } }, { key: "__specialLeftShift", value: function(e9, t3, r2) {
        var n5 = e9.length, i6 = new l7(n5 + r2, false);
        if (0 === t3) {
          for (var o5 = 0; o5 < n5; o5++)
            i6.__setDigit(o5, e9.__digit(o5));
          return 0 < r2 && i6.__setDigit(n5, 0), i6;
        }
        for (var a5, s5 = 0, u6 = 0; u6 < n5; u6++)
          a5 = e9.__digit(u6), i6.__setDigit(u6, 1073741823 & a5 << t3 | s5), s5 = a5 >>> 30 - t3;
        return 0 < r2 && i6.__setDigit(n5, s5), i6;
      } }, { key: "__leftShiftByAbsolute", value: function(e9, t3) {
        var r2 = l7.__toShiftAmount(t3);
        if (0 > r2)
          throw new RangeError("BigInt too big");
        var n5 = 0 | r2 / 30, i6 = r2 % 30, o5 = e9.length, a5 = 0 !== i6 && 0 != e9.__digit(o5 - 1) >>> 30 - i6, s5 = o5 + n5 + (a5 ? 1 : 0), u6 = new l7(s5, e9.sign);
        if (0 === i6) {
          for (var c4 = 0; c4 < n5; c4++)
            u6.__setDigit(c4, 0);
          for (; c4 < s5; c4++)
            u6.__setDigit(c4, e9.__digit(c4 - n5));
        } else {
          for (var d6 = 0, h7 = 0; h7 < n5; h7++)
            u6.__setDigit(h7, 0);
          for (var f6, p7 = 0; p7 < o5; p7++)
            f6 = e9.__digit(p7), u6.__setDigit(p7 + n5, 1073741823 & f6 << i6 | d6), d6 = f6 >>> 30 - i6;
          if (a5)
            u6.__setDigit(o5 + n5, d6);
          else if (0 !== d6)
            throw new Error("implementation bug");
        }
        return u6.__trim();
      } }, { key: "__rightShiftByAbsolute", value: function(e9, t3) {
        var r2 = e9.length, n5 = e9.sign, i6 = l7.__toShiftAmount(t3);
        if (0 > i6)
          return l7.__rightShiftByMaximum(n5);
        var o5 = 0 | i6 / 30, a5 = i6 % 30, s5 = r2 - o5;
        if (0 >= s5)
          return l7.__rightShiftByMaximum(n5);
        var u6 = false;
        if (n5) {
          if (0 != (e9.__digit(o5) & (1 << a5) - 1))
            u6 = true;
          else
            for (var c4 = 0; c4 < o5; c4++)
              if (0 !== e9.__digit(c4)) {
                u6 = true;
                break;
              }
        }
        u6 && 0 === a5 && 0 == ~e9.__digit(r2 - 1) && s5++;
        var d6 = new l7(s5, n5);
        if (0 === a5) {
          d6.__setDigit(s5 - 1, 0);
          for (var h7 = o5; h7 < r2; h7++)
            d6.__setDigit(h7 - o5, e9.__digit(h7));
        } else {
          for (var f6, p7 = e9.__digit(o5) >>> a5, m6 = r2 - o5 - 1, y6 = 0; y6 < m6; y6++)
            f6 = e9.__digit(y6 + o5 + 1), d6.__setDigit(y6, 1073741823 & f6 << 30 - a5 | p7), p7 = f6 >>> a5;
          d6.__setDigit(m6, p7);
        }
        return u6 && (d6 = l7.__absoluteAddOne(d6, true, d6)), d6.__trim();
      } }, { key: "__rightShiftByMaximum", value: function(e9) {
        return e9 ? l7.__oneDigit(1, true) : l7.__zero();
      } }, { key: "__toShiftAmount", value: function(e9) {
        if (1 < e9.length)
          return -1;
        var t3 = e9.__unsignedDigit(0);
        return t3 > l7.__kMaxLengthBits ? -1 : t3;
      } }, { key: "__toPrimitive", value: function(e9) {
        var t3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "default";
        if ("object" !== r(e9))
          return e9;
        if (e9.constructor === l7)
          return e9;
        if ("undefined" != typeof Symbol && "symbol" === r(Symbol.toPrimitive)) {
          var n5 = e9[Symbol.toPrimitive];
          if (n5) {
            var i6 = n5(t3);
            if ("object" !== r(i6))
              return i6;
            throw new TypeError("Cannot convert object to primitive value");
          }
        }
        var o5 = e9.valueOf;
        if (o5) {
          var a5 = o5.call(e9);
          if ("object" !== r(a5))
            return a5;
        }
        var s5 = e9.toString;
        if (s5) {
          var u6 = s5.call(e9);
          if ("object" !== r(u6))
            return u6;
        }
        throw new TypeError("Cannot convert object to primitive value");
      } }, { key: "__toNumeric", value: function(e9) {
        return l7.__isBigInt(e9) ? e9 : +e9;
      } }, { key: "__isBigInt", value: function(e9) {
        return "object" === r(e9) && null !== e9 && e9.constructor === l7;
      } }, { key: "__truncateToNBits", value: function(e9, t3) {
        for (var r2 = 0 | (e9 + 29) / 30, n5 = new l7(r2, t3.sign), i6 = r2 - 1, o5 = 0; o5 < i6; o5++)
          n5.__setDigit(o5, t3.__digit(o5));
        var a5 = t3.__digit(i6);
        if (0 != e9 % 30) {
          var s5 = 32 - e9 % 30;
          a5 = a5 << s5 >>> s5;
        }
        return n5.__setDigit(i6, a5), n5.__trim();
      } }, { key: "__truncateAndSubFromPowerOfTwo", value: function(e9, t3, r2) {
        for (var n5, i6 = Math.min, o5 = 0 | (e9 + 29) / 30, a5 = new l7(o5, r2), s5 = 0, u6 = o5 - 1, c4 = 0, d6 = i6(u6, t3.length); s5 < d6; s5++)
          c4 = 1 & (n5 = 0 - t3.__digit(s5) - c4) >>> 30, a5.__setDigit(s5, 1073741823 & n5);
        for (; s5 < u6; s5++)
          a5.__setDigit(s5, 0 | 1073741823 & -c4);
        var h7, f6 = u6 < t3.length ? t3.__digit(u6) : 0, p7 = e9 % 30;
        if (0 === p7)
          h7 = 0 - f6 - c4, h7 &= 1073741823;
        else {
          var m6 = 32 - p7, y6 = 1 << 32 - m6;
          h7 = y6 - (f6 = f6 << m6 >>> m6) - c4, h7 &= y6 - 1;
        }
        return a5.__setDigit(u6, h7), a5.__trim();
      } }, { key: "__digitPow", value: function(e9, t3) {
        for (var r2 = 1; 0 < t3; )
          1 & t3 && (r2 *= e9), t3 >>>= 1, e9 *= e9;
        return r2;
      } }, { key: "__isOneDigitInt", value: function(e9) {
        return (1073741823 & e9) === e9;
      } }]), l7;
    }(h6(Array));
    return T6.__kMaxLength = 33554432, T6.__kMaxLengthBits = T6.__kMaxLength << 5, T6.__kMaxBitsPerChar = [0, 0, 32, 51, 64, 75, 83, 90, 96, 102, 107, 111, 115, 119, 122, 126, 128, 131, 134, 136, 139, 141, 143, 145, 147, 149, 151, 153, 154, 156, 158, 159, 160, 162, 163, 165, 166], T6.__kBitsPerCharTableShift = 5, T6.__kBitsPerCharTableMultiplier = 1 << T6.__kBitsPerCharTableShift, T6.__kConversionChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], T6.__kBitConversionBuffer = new ArrayBuffer(8), T6.__kBitConversionDouble = new Float64Array(T6.__kBitConversionBuffer), T6.__kBitConversionInts = new Int32Array(T6.__kBitConversionBuffer), T6.__clz30 = t ? function(e8) {
      return t(e8) - 2;
    } : function(e8) {
      var t2 = Math.LN2, r2 = Math.log;
      return 0 === e8 ? 30 : 0 | 29 - (0 | r2(e8 >>> 0) / t2);
    }, T6.__imul = e7 || function(e8, t2) {
      return 0 | e8 * t2;
    }, T6;
  }();
  var d3 = l4(c2.exports);
  var h5 = {};
  function f3(e7, t) {
    Object.defineProperty(e7.prototype, Symbol.toStringTag, { value: t, writable: false, enumerable: false, configurable: true });
    for (const t2 of Object.getOwnPropertyNames(e7)) {
      const r = Object.getOwnPropertyDescriptor(e7, t2);
      r.configurable && r.enumerable && (r.enumerable = false, Object.defineProperty(e7, t2, r));
    }
    for (const t2 of Object.getOwnPropertyNames(e7.prototype)) {
      const r = Object.getOwnPropertyDescriptor(e7.prototype, t2);
      r.configurable && r.enumerable && (r.enumerable = false, Object.defineProperty(e7.prototype, t2, r));
    }
    p4(t, e7), p4(`${t}.prototype`, e7.prototype);
  }
  function p4(e7, t) {
    const r = `%${e7}%`;
    if (void 0 !== h5[r])
      throw new Error(`intrinsic ${e7} already exists`);
    h5[r] = t;
  }
  function m4(e7) {
    return h5[e7];
  }
  var y4;
  var g3;
  var v4 = "slot-epochNanoSeconds";
  var w4 = "slot-timezone-identifier";
  var b4 = "slot-year";
  var _4 = "slot-month";
  var E2 = "slot-day";
  var T4 = "slot-hour";
  var x4 = "slot-minute";
  var I3 = "slot-second";
  var S4 = "slot-millisecond";
  var R4 = "slot-microsecond";
  var k4 = "slot-nanosecond";
  var j4 = "slot-calendar";
  var D3 = "slot-date-brand";
  var N4 = "slot-year-month-brand";
  var O2 = "slot-month-day-brand";
  var C3 = "slot-cached-instant";
  var A3 = "slot-time-zone";
  var M4 = "slot-years";
  var L3 = "slot-months";
  var P4 = "slot-weeks";
  var B4 = "slot-days";
  var $3 = "slot-hours";
  var F3 = "slot-minutes";
  var U5 = "slot-seconds";
  var q4 = "slot-milliseconds";
  var Y4 = "slot-microseconds";
  var W3 = "slot-nanoseconds";
  var z4 = "slot-calendar-identifier";
  var G6 = /* @__PURE__ */ new WeakMap();
  var H3 = Symbol.for("@@Temporal__GetSlots");
  (y4 = globalThis)[H3] || (y4[H3] = function(e7) {
    return G6.get(e7);
  });
  var J3 = globalThis[H3];
  var V4 = Symbol.for("@@Temporal__CreateSlots");
  (g3 = globalThis)[V4] || (g3[V4] = function(e7) {
    G6.set(e7, /* @__PURE__ */ Object.create(null));
  });
  var Q4 = globalThis[V4];
  function Z4(e7, ...t) {
    if (!e7 || "object" != typeof e7)
      return false;
    const r = J3(e7);
    return !!r && t.every((e8) => e8 in r);
  }
  function K3(e7, t) {
    const r = J3(e7)?.[t];
    if (void 0 === r)
      throw new TypeError(`Missing internal slot ${t}`);
    return r;
  }
  function X4(e7, t, r) {
    const n4 = J3(e7);
    if (void 0 === n4)
      throw new TypeError("Missing slots for the given container");
    if (n4[t])
      throw new TypeError(`${t} already has set`);
    n4[t] = r;
  }
  var ee = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
  var te = new RegExp("(?:" + [`(?:${ee.source})(?:\\/(?:${ee.source}))*`, "Etc/GMT(?:0|[-+]\\d{1,2})", "GMT[-+]?0", "EST5EDT", "CST6CDT", "MST7MDT", "PST8PDT", /(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/.source].join("|") + ")");
  var re = /(?:[+\u2212-]\d{6}|\d{4})/;
  var ne = /(?:0[1-9]|1[0-2])/;
  var ie = /(?:0[1-9]|[12]\d|3[01])/;
  var oe = new RegExp(`(${re.source})(?:-(${ne.source})-(${ie.source})|(${ne.source})(${ie.source}))`);
  var ae = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
  var se = /([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
  var le = new RegExp(`([zZ])|${se.source}?`);
  var ue = /\[(!)?([a-z_][a-z0-9_-]*)=([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)\]/g;
  var ce = new RegExp([`^${oe.source}`, `(?:(?:T|\\s+)${ae.source}(?:${le.source})?)?`, `(?:\\[!?(${te.source})\\])?`, `((?:${ue.source})*)$`].join(""), "i");
  var de = new RegExp([`^T?${ae.source}`, `(?:${le.source})?`, `(?:\\[!?${te.source}\\])?`, `((?:${ue.source})*)$`].join(""), "i");
  var he = new RegExp(`^(${re.source})-?(${ne.source})(?:\\[!?${te.source}\\])?((?:${ue.source})*)$`);
  var fe = new RegExp(`^(?:--)?(${ne.source})-?(${ie.source})(?:\\[!?${te.source}\\])?((?:${ue.source})*)$`);
  var pe = /(\d+)(?:[.,](\d{1,9}))?/;
  var me = new RegExp(`(?:${pe.source}H)?(?:${pe.source}M)?(?:${pe.source}S)?`);
  var ye = new RegExp(`^([+\u2212-])?P${/(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/.source}(?:T(?!$)${me.source})?$`, "i");
  var ge = Array.prototype.includes;
  var ve = Array.prototype.push;
  var we = globalThis.Intl.DateTimeFormat;
  var be = Math.min;
  var _e = Math.max;
  var Ee = Math.abs;
  var Te = Math.floor;
  var xe = Math.sign;
  var Ie = Math.trunc;
  var Se = Number.isNaN;
  var Re = Number.isFinite;
  var ke = Number;
  var je = String;
  var De = Number.MAX_SAFE_INTEGER;
  var Ne = Object.create;
  var Oe = Object.getOwnPropertyDescriptor;
  var Ce = Reflect.apply;
  var Ae = Reflect.ownKeys;
  var Me = d3.BigInt(0);
  var Le = d3.BigInt(1);
  var Pe = d3.BigInt(60);
  var Be = d3.BigInt(24);
  var $e = d3.BigInt(1e3);
  var Fe = d3.BigInt(1e6);
  var Ue = d3.BigInt(1e9);
  var qe = d3.BigInt(-1);
  var Ye = d3.multiply(d3.BigInt(3600), Ue);
  var We = d3.multiply(Pe, Ue);
  var ze = d3.multiply(Ye, Be);
  var Ge = d3.multiply(d3.BigInt(-86400), d3.BigInt(1e17));
  var He = d3.multiply(d3.BigInt(86400), d3.BigInt(1e17));
  var Je = -271821;
  var Ve = 275760;
  var Qe = d3.multiply(d3.BigInt(-388152), d3.BigInt(1e13));
  var Ze = d3.multiply(ze, d3.BigInt(3660));
  var Ke = d3.multiply(ze, d3.BigInt(366));
  var Xe = d3.multiply(ze, d3.BigInt(14));
  var et3 = ["iso8601", "hebrew", "islamic", "islamic-umalqura", "islamic-tbla", "islamic-civil", "islamic-rgsa", "islamicc", "persian", "ethiopic", "ethioaa", "coptic", "chinese", "dangi", "roc", "indian", "buddhist", "japanese", "gregory"];
  function tt3(e7) {
    return d3.equal(e7, Me);
  }
  function rt3(e7, t) {
    const r = e7[t];
    if (void 0 !== r)
      return r;
  }
  function nt3(e7, t, r) {
    return Ce(e7, t, arguments.length > 2 ? r : []);
  }
  function it2(e7) {
    return "object" == typeof e7 && null !== e7 || "function" == typeof e7;
  }
  function ot2(e7) {
    if ("bigint" == typeof e7)
      throw new TypeError("Cannot convert BigInt to number");
    return ke(e7);
  }
  function at2(e7) {
    const t = ot2(e7);
    if (Se(t) || 0 === t)
      return 0;
    if (!Re(t))
      return t;
    const r = Te(Ee(t));
    return 0 === r ? 0 : xe(t) * r;
  }
  function st2(e7) {
    if ("number" != typeof e7 || Se(e7) || !Re(e7))
      return false;
    const t = Ee(e7);
    return Te(t) === t;
  }
  function lt2(e7) {
    if ("symbol" == typeof e7)
      throw new TypeError("Cannot convert a Symbol value to a String");
    return je(e7);
  }
  function ut(e7) {
    const t = ot2(e7);
    if (0 === t)
      return 0;
    if (Se(t) || !Re(t))
      throw new RangeError("invalid number value");
    const r = Ie(t);
    return 0 === r ? 0 : r;
  }
  function ct(e7, t) {
    const r = ut(e7);
    if (r <= 0) {
      if (void 0 !== t)
        throw new RangeError(`property '${t}' cannot be a a number less than one`);
      throw new RangeError("Cannot convert a number less than one to a positive integer");
    }
    return r;
  }
  function dt2(e7) {
    const t = ot2(e7);
    if (!Re(t))
      throw new RangeError("infinity is out of range");
    if (!st2(t))
      throw new RangeError(`unsupported fractional value ${e7}`);
    return 0 === t ? 0 : t;
  }
  function ht2(e7, t) {
    return { quotient: d3.divide(e7, t), remainder: d3.remainder(e7, t) };
  }
  function ft(e7) {
    return d3.lessThan(e7, Me);
  }
  function pt2(e7) {
    return tt3(e7) ? 0 : ft(e7) ? -1 : 1;
  }
  function mt2(e7) {
    return d3.lessThan(e7, Me) ? d3.multiply(e7, qe) : e7;
  }
  var yt2 = /* @__PURE__ */ new Map([["year", ut], ["month", ct], ["monthCode", lt2], ["day", ct], ["hour", ut], ["minute", ut], ["second", ut], ["millisecond", ut], ["microsecond", ut], ["nanosecond", ut], ["years", dt2], ["months", dt2], ["weeks", dt2], ["days", dt2], ["hours", dt2], ["minutes", dt2], ["seconds", dt2], ["milliseconds", dt2], ["microseconds", dt2], ["nanoseconds", dt2], ["era", lt2], ["eraYear", at2], ["offset", lt2]]);
  var gt = /* @__PURE__ */ new Map([["hour", 0], ["minute", 0], ["second", 0], ["millisecond", 0], ["microsecond", 0], ["nanosecond", 0]]);
  var vt2 = [["years", "year", "date"], ["months", "month", "date"], ["weeks", "week", "date"], ["days", "day", "date"], ["hours", "hour", "time"], ["minutes", "minute", "time"], ["seconds", "second", "time"], ["milliseconds", "millisecond", "time"], ["microseconds", "microsecond", "time"], ["nanoseconds", "nanosecond", "time"]];
  var wt2 = new Map(vt2.map((e7) => [e7[0], e7[1]]));
  var bt = new Map(vt2.map(([e7, t]) => [t, e7]));
  var _t2 = vt2.map(([, e7]) => e7);
  var Et2 = Array.from(wt2.keys()).sort();
  var Tt = /* @__PURE__ */ new Map();
  function xt(e7) {
    let t = Tt.get(e7);
    return void 0 === t && (t = new we("en-us", { timeZone: je(e7), hour12: false, era: "short", year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }), Tt.set(e7, t)), t;
  }
  function It2(e7) {
    if (null == e7)
      throw new TypeError(`Expected object not ${e7}`);
    return Object(e7);
  }
  function St2(e7, t, r, n4) {
    if (null == t)
      return;
    const i4 = Ae(t);
    for (const o4 of i4)
      if (!r.some((e8) => Object.is(e8, o4)) && Object.prototype.propertyIsEnumerable.call(t, o4)) {
        const r2 = t[o4];
        if (n4 && n4.some((e8) => Object.is(e8, r2)))
          continue;
        e7[o4] = r2;
      }
  }
  function Rt(e7) {
    return Z4(e7, v4) && !Z4(e7, A3, j4);
  }
  function kt2(e7) {
    return Z4(e7, w4);
  }
  function jt(e7) {
    return Z4(e7, z4);
  }
  function Dt(e7) {
    return Z4(e7, M4, L3, B4, $3, F3, U5, q4, Y4, W3);
  }
  function Nt2(e7) {
    return Z4(e7, D3);
  }
  function Ot2(e7) {
    return Z4(e7, T4, x4, I3, S4, R4, k4) && !Z4(e7, b4, _4, E2);
  }
  function Ct(e7) {
    return Z4(e7, b4, _4, E2, T4, x4, I3, S4, R4, k4);
  }
  function At(e7) {
    return Z4(e7, N4);
  }
  function Mt2(e7) {
    return Z4(e7, O2);
  }
  function Lt2(e7) {
    return Z4(e7, v4, A3, j4);
  }
  function Pt2(e7) {
    if (Z4(e7, j4) || Z4(e7, A3))
      throw new TypeError("with() does not support a calendar or timeZone property");
    if (Ot2(e7))
      throw new TypeError("with() does not accept Temporal.PlainTime, use withPlainTime() instead");
    if (void 0 !== e7.calendar)
      throw new TypeError("with() does not support a calendar property");
    if (void 0 !== e7.timeZone)
      throw new TypeError("with() does not support a timeZone property");
  }
  function Bt2(e7, t) {
    return "never" === t ? "" : $t2(Vr(e7), t);
  }
  function $t2(e7, t) {
    return "never" === t || "auto" === t && "iso8601" === e7 ? "" : `[${"critical" === t ? "!" : ""}u-ca=${e7}]`;
  }
  function Ft(e7) {
    const t = ce.exec(e7);
    if (!t)
      throw new RangeError(`invalid ISO 8601 string: ${e7}`);
    let r = t[1];
    if ("\u2212" === r[0] && (r = `-${r.slice(1)}`), "-000000" === r)
      throw new RangeError(`invalid ISO 8601 string: ${e7}`);
    const n4 = at2(r), i4 = at2(t[2] || t[4]), o4 = at2(t[3] || t[5]), a4 = at2(t[6]), s3 = void 0 !== t[6], l6 = at2(t[7] || t[10]);
    let u4 = at2(t[8] || t[11]);
    60 === u4 && (u4 = 59);
    const c3 = (t[9] || t[12]) + "000000000", d5 = at2(c3.slice(0, 3)), h6 = at2(c3.slice(3, 6)), f5 = at2(c3.slice(6, 9));
    let p6, m5 = false;
    if (t[13])
      p6 = void 0, m5 = true;
    else if (t[14] && t[15]) {
      const e8 = "-" === t[14] || "\u2212" === t[14] ? "-" : "+", r2 = t[15] || "00", n5 = t[16] || "00", i5 = t[17] || "00";
      let o5 = t[18] || "0";
      if (p6 = `${e8}${r2}:${n5}`, +o5) {
        for (; o5.endsWith("0"); )
          o5 = o5.slice(0, -1);
        p6 += `:${i5}.${o5}`;
      } else
        +i5 && (p6 += `:${i5}`);
      "-00:00" === p6 && (p6 = "+00:00");
    }
    const y5 = t[19], g5 = t[20];
    let v6;
    for (const [, e8, t2, r2] of g5.matchAll(ue))
      if ("u-ca" === t2)
        void 0 === v6 && (v6 = r2);
      else if ("!" === e8)
        throw new RangeError(`Unrecognized annotation: !${t2}=${r2}`);
    return li(n4, i4, o4, a4, l6, u4, d5, h6, f5), { year: n4, month: i4, day: o4, hasTime: s3, hour: a4, minute: l6, second: u4, millisecond: d5, microsecond: h6, nanosecond: f5, ianaName: y5, offset: p6, z: m5, calendar: v6 };
  }
  function Ut2(e7) {
    const t = he.exec(e7);
    let r, n4, i4, o4;
    if (t) {
      let o5 = t[1];
      if ("\u2212" === o5[0] && (o5 = `-${o5.slice(1)}`), "-000000" === o5)
        throw new RangeError(`invalid ISO 8601 string: ${e7}`);
      r = at2(o5), n4 = at2(t[2]);
      const a4 = t[3];
      for (const [, e8, t2, r2] of a4.matchAll(ue))
        if ("u-ca" === t2)
          void 0 === i4 && (i4 = r2);
        else if ("!" === e8)
          throw new RangeError(`Unrecognized annotation: !${t2}=${r2}`);
      if (void 0 !== i4 && "iso8601" !== i4)
        throw new RangeError("YYYY-MM format is only valid with iso8601 calendar");
    } else {
      let t2;
      if ({ year: r, month: n4, calendar: i4, day: o4, z: t2 } = Ft(e7), t2)
        throw new RangeError("Z designator not supported for PlainYearMonth");
    }
    return { year: r, month: n4, calendar: i4, referenceISODay: o4 };
  }
  function qt(e7) {
    const t = fe.exec(e7);
    let r, n4, i4, o4;
    if (t) {
      r = at2(t[1]), n4 = at2(t[2]);
      const e8 = t[3];
      for (const [, t2, r2, n5] of e8.matchAll(ue))
        if ("u-ca" === r2)
          void 0 === i4 && (i4 = n5);
        else if ("!" === t2)
          throw new RangeError(`Unrecognized annotation: !${r2}=${n5}`);
      if (void 0 !== i4 && "iso8601" !== i4)
        throw new RangeError("MM-DD format is only valid with iso8601 calendar");
    } else {
      let t2;
      if ({ month: r, day: n4, calendar: i4, year: o4, z: t2 } = Ft(e7), t2)
        throw new RangeError("Z designator not supported for PlainMonthDay");
    }
    return { month: r, day: n4, calendar: i4, referenceISOYear: o4 };
  }
  function Yt(e7, t, r, n4) {
    let i4 = e7, o4 = t, a4 = r;
    switch (n4) {
      case "reject":
        oi(i4, o4, a4);
        break;
      case "constrain":
        ({ year: i4, month: o4, day: a4 } = ni(i4, o4, a4));
    }
    return { year: i4, month: o4, day: a4 };
  }
  function Wt2(e7, t, r, n4, i4, o4, a4) {
    let s3 = e7, l6 = t, u4 = r, c3 = n4, d5 = i4, h6 = o4;
    switch (a4) {
      case "reject":
        si(s3, l6, u4, c3, d5, h6);
        break;
      case "constrain":
        ({ hour: s3, minute: l6, second: u4, millisecond: c3, microsecond: d5, nanosecond: h6 } = function(e8, t2, r2, n5, i5, o5) {
          return { hour: ri(e8, 0, 23), minute: ri(t2, 0, 59), second: ri(r2, 0, 59), millisecond: ri(n5, 0, 999), microsecond: ri(i5, 0, 999), nanosecond: ri(o5, 0, 999) };
        }(s3, l6, u4, c3, d5, h6));
    }
    return { hour: s3, minute: l6, second: u4, millisecond: c3, microsecond: d5, nanosecond: h6 };
  }
  function zt(e7) {
    if (!it2(e7))
      return function(e8) {
        const t2 = ye.exec(e8);
        if (!t2)
          throw new RangeError(`invalid duration: ${e8}`);
        if (t2.slice(2).every((e9) => void 0 === e9))
          throw new RangeError(`invalid duration: ${e8}`);
        const r2 = "-" === t2[1] || "\u2212" === t2[1] ? -1 : 1, n5 = void 0 === t2[2] ? 0 : ut(t2[2]) * r2, i5 = void 0 === t2[3] ? 0 : ut(t2[3]) * r2, o5 = void 0 === t2[4] ? 0 : ut(t2[4]) * r2, a5 = void 0 === t2[5] ? 0 : ut(t2[5]) * r2, s4 = void 0 === t2[6] ? 0 : ut(t2[6]) * r2, l7 = t2[7], u5 = t2[8], c4 = t2[9], d6 = t2[10], h7 = t2[11];
        let f5 = 0, p6 = 0, m5 = 0;
        if (void 0 !== l7) {
          if (u5 ?? c4 ?? d6 ?? h7)
            throw new RangeError("only the smallest unit can be fractional");
          m5 = 3600 * at2((l7 + "000000000").slice(0, 9)) * r2;
        } else if (f5 = void 0 === u5 ? 0 : ut(u5) * r2, void 0 !== c4) {
          if (d6 ?? h7)
            throw new RangeError("only the smallest unit can be fractional");
          m5 = 60 * at2((c4 + "000000000").slice(0, 9)) * r2;
        } else
          p6 = void 0 === d6 ? 0 : ut(d6) * r2, void 0 !== h7 && (m5 = at2((h7 + "000000000").slice(0, 9)) * r2);
        const y5 = m5 % 1e3, g5 = Ie(m5 / 1e3) % 1e3, v6 = Ie(m5 / 1e6) % 1e3;
        return p6 += Ie(m5 / 1e9) % 60, f5 += Ie(m5 / 6e10), di(n5, i5, o5, a5, s4, f5, p6, v6, g5, y5), { years: n5, months: i5, weeks: o5, days: a5, hours: s4, minutes: f5, seconds: p6, milliseconds: v6, microseconds: g5, nanoseconds: y5 };
      }(lt2(e7));
    if (Dt(e7))
      return { years: K3(e7, M4), months: K3(e7, L3), weeks: K3(e7, P4), days: K3(e7, B4), hours: K3(e7, $3), minutes: K3(e7, F3), seconds: K3(e7, U5), milliseconds: K3(e7, q4), microseconds: K3(e7, Y4), nanoseconds: K3(e7, W3) };
    const t = { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0, microseconds: 0, nanoseconds: 0 };
    let r = function(e8) {
      if (!it2(e8))
        throw new TypeError("invalid duration-like");
      const t2 = { years: void 0, months: void 0, weeks: void 0, days: void 0, hours: void 0, minutes: void 0, seconds: void 0, milliseconds: void 0, microseconds: void 0, nanoseconds: void 0 };
      let r2 = false;
      for (const n5 of Et2) {
        const i5 = e8[n5];
        void 0 !== i5 && (r2 = true, t2[n5] = dt2(i5));
      }
      if (!r2)
        throw new TypeError("invalid duration-like");
      return t2;
    }(e7);
    for (const e8 of Et2) {
      const n5 = r[e8];
      void 0 !== n5 && (t[e8] = n5);
    }
    let { years: n4, months: i4, weeks: o4, days: a4, hours: s3, minutes: l6, seconds: u4, milliseconds: c3, microseconds: d5, nanoseconds: h6 } = t;
    return di(n4, i4, o4, a4, s3, l6, u4, c3, d5, h6), { years: n4, months: i4, weeks: o4, days: a4, hours: s3, minutes: l6, seconds: u4, milliseconds: c3, microseconds: d5, nanoseconds: h6 };
  }
  function Gt(e7) {
    return void 0 === e7 ? "constrain" : no(e7, "overflow", ["constrain", "reject"], "constrain");
  }
  function Ht(e7) {
    return void 0 === e7 ? "compatible" : no(e7, "disambiguation", ["compatible", "earlier", "later", "reject"], "compatible");
  }
  function Jt2(e7, t) {
    return no(e7, "roundingMode", ["ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", "halfEven"], t);
  }
  function Vt(e7, t) {
    return void 0 === e7 ? t : no(e7, "offset", ["prefer", "use", "ignore", "reject"], t);
  }
  function Qt(e7) {
    return no(e7, "calendarName", ["auto", "always", "never", "critical"], "auto");
  }
  function Zt(e7) {
    let t = e7.roundingIncrement;
    if (void 0 === t)
      return 1;
    if (t = ot2(t), !Re(t))
      throw new RangeError("roundingIncrement must be finite");
    const r = Ie(t);
    if (r < 1 || r > 1e9)
      throw new RangeError(`roundingIncrement must be at least 1 and at most 1e9, not ${t}`);
    return r;
  }
  function Kt2(e7, t, r) {
    const n4 = r ? t : t - 1;
    if (e7 > n4)
      throw new RangeError(`roundingIncrement must be at least 1 and less than ${n4}, not ${e7}`);
    if (t % e7 != 0)
      throw new RangeError(`Rounding increment must divide evenly into ${t}`);
  }
  function Xt(e7) {
    const t = e7.fractionalSecondDigits;
    if (void 0 === t)
      return "auto";
    if ("number" != typeof t) {
      if ("auto" !== lt2(t))
        throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);
      return "auto";
    }
    const r = Te(t);
    if (!Re(r) || r < 0 || r > 9)
      throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);
    return r;
  }
  function er(e7, t) {
    switch (e7) {
      case "minute":
        return { precision: "minute", unit: "minute", increment: 1 };
      case "second":
        return { precision: 0, unit: "second", increment: 1 };
      case "millisecond":
        return { precision: 3, unit: "millisecond", increment: 1 };
      case "microsecond":
        return { precision: 6, unit: "microsecond", increment: 1 };
      case "nanosecond":
        return { precision: 9, unit: "nanosecond", increment: 1 };
    }
    switch (t) {
      case "auto":
        return { precision: t, unit: "nanosecond", increment: 1 };
      case 0:
        return { precision: t, unit: "second", increment: 1 };
      case 1:
      case 2:
      case 3:
        return { precision: t, unit: "millisecond", increment: 10 ** (3 - t) };
      case 4:
      case 5:
      case 6:
        return { precision: t, unit: "microsecond", increment: 10 ** (6 - t) };
      case 7:
      case 8:
      case 9:
        return { precision: t, unit: "nanosecond", increment: 10 ** (9 - t) };
      default:
        throw new RangeError(`fractionalSecondDigits must be 'auto' or 0 through 9, not ${t}`);
    }
  }
  var tr = Symbol("~required~");
  function rr(e7, t, r, n4, i4 = []) {
    const o4 = [];
    for (const [, e8, t2] of vt2)
      "datetime" !== r && r !== t2 || o4.push(e8);
    o4.push(...i4);
    let a4 = n4;
    a4 === tr ? a4 = void 0 : void 0 !== a4 && o4.push(a4);
    const s3 = [...o4];
    for (const e8 of o4) {
      const t2 = bt.get(e8);
      void 0 !== t2 && s3.push(t2);
    }
    let l6 = no(e7, t, s3, a4);
    if (void 0 === l6 && n4 === tr)
      throw new RangeError(`${t} is required`);
    return wt2.has(l6) ? wt2.get(l6) : l6;
  }
  function nr(e7) {
    const t = e7.relativeTo;
    if (void 0 === t)
      return t;
    let r, n4, i4, o4, a4, s3, l6, u4, c3, d5, h6, f5, p6 = "option", m5 = false;
    if (it2(t)) {
      if (Lt2(t) || Nt2(t))
        return t;
      if (Ct(t))
        return ln(t);
      d5 = Jr(t);
      const e8 = kr(d5, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      e8.push("timeZone", "offset");
      const m6 = ar(t, e8, []), y5 = Ne(null);
      y5.overflow = "constrain", { year: r, month: n4, day: i4, hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3 } = ur(d5, m6, y5), f5 = m6.offset, void 0 === f5 && (p6 = "wall"), h6 = m6.timeZone, void 0 !== h6 && (h6 = nn(h6));
    } else {
      let e8, y5;
      if ({ year: r, month: n4, day: i4, hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3, calendar: d5, ianaName: e8, offset: f5, z: y5 } = Ft(lt2(t)), e8)
        h6 = nn(e8), y5 ? p6 = "exact" : f5 || (p6 = "wall"), m5 = true;
      else if (y5)
        throw new RangeError("Z designator not supported for PlainDate relativeTo; either remove the Z or add a bracketed time zone");
      if (d5 || (d5 = "iso8601"), !io(d5))
        throw new RangeError(`invalid calendar identifier ${d5}`);
      d5 = oo(d5);
    }
    return void 0 === h6 ? wr(r, n4, i4, d5) : Rr(yr(r, n4, i4, o4, a4, s3, l6, u4, c3, p6, "option" === p6 ? Rn(f5) : 0, h6, "compatible", "reject", m5), h6, d5);
  }
  function ir(e7, t, r, n4, i4, o4, a4, s3, l6, u4) {
    for (const [c3, d5] of [["years", e7], ["months", t], ["weeks", r], ["days", n4], ["hours", i4], ["minutes", o4], ["seconds", a4], ["milliseconds", s3], ["microseconds", l6], ["nanoseconds", u4]])
      if (0 !== d5)
        return wt2.get(c3);
    return "nanosecond";
  }
  function or(e7, t) {
    return _t2.indexOf(e7) > _t2.indexOf(t) ? t : e7;
  }
  function ar(e7, t, r, { emptySourceErrorMessage: n4 } = { emptySourceErrorMessage: "no supported properties found" }) {
    const i4 = Ne(null);
    let o4 = false;
    t.sort();
    for (const n5 of t) {
      let t2 = e7[n5];
      if (void 0 !== t2)
        o4 = true, yt2.has(n5) && (t2 = yt2.get(n5)(t2)), i4[n5] = t2;
      else if ("partial" !== r) {
        if (ge.call(r, n5))
          throw new TypeError(`required property '${n5}' missing or undefined`);
        t2 = gt.get(n5), i4[n5] = t2;
      }
    }
    if ("partial" === r && !o4)
      throw new TypeError(n4);
    return i4;
  }
  function sr(e7, t = "complete") {
    const r = ["hour", "microsecond", "millisecond", "minute", "nanosecond", "second"], n4 = ar(e7, r, "partial", { emptySourceErrorMessage: "invalid time-like" }), i4 = {};
    for (const e8 of r) {
      const r2 = Oe(n4, e8);
      void 0 !== r2 ? i4[e8] = r2.value : "complete" === t && (i4[e8] = 0);
    }
    return i4;
  }
  function lr(e7, t) {
    let r = e7;
    if (it2(r)) {
      if (Nt2(r))
        return r;
      if (Lt2(r) && (Gt(t), r = hn(K3(r, A3), K3(r, C3), K3(r, j4))), Ct(r))
        return Gt(t), wr(K3(r, b4), K3(r, _4), K3(r, E2), K3(r, j4));
      const e8 = Jr(r);
      return en(e8, ar(r, kr(e8, ["day", "month", "monthCode", "year"]), []), t);
    }
    Gt(t);
    let { year: n4, month: i4, day: o4, calendar: a4, z: s3 } = function(e8) {
      return Ft(e8);
    }(lt2(r));
    if (s3)
      throw new RangeError("Z designator not supported for PlainDate");
    if (a4 || (a4 = "iso8601"), !io(a4))
      throw new RangeError(`invalid calendar identifier ${a4}`);
    return a4 = oo(a4), wr(n4, i4, o4, a4);
  }
  function ur(e7, t, r) {
    let { hour: n4, minute: i4, second: o4, millisecond: a4, microsecond: s3, nanosecond: l6 } = sr(t);
    const u4 = Gt(r), c3 = en(e7, t, r), d5 = K3(c3, b4), h6 = K3(c3, _4), f5 = K3(c3, E2);
    return { hour: n4, minute: i4, second: o4, millisecond: a4, microsecond: s3, nanosecond: l6 } = Wt2(n4, i4, o4, a4, s3, l6, u4), { year: d5, month: h6, day: f5, hour: n4, minute: i4, second: o4, millisecond: a4, microsecond: s3, nanosecond: l6 };
  }
  function cr(e7, t) {
    let r, n4, i4, o4, a4, s3, l6, u4, c3, d5;
    if (it2(e7)) {
      if (Ct(e7))
        return e7;
      if (Lt2(e7))
        return Gt(t), hn(K3(e7, A3), K3(e7, C3), K3(e7, j4));
      if (Nt2(e7))
        return Gt(t), _r(K3(e7, b4), K3(e7, _4), K3(e7, E2), 0, 0, 0, 0, 0, 0, K3(e7, j4));
      d5 = Jr(e7);
      const h6 = ar(e7, kr(d5, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]), []);
      ({ year: r, month: n4, day: i4, hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3 } = ur(d5, h6, t));
    } else {
      let h6;
      if (Gt(t), { year: r, month: n4, day: i4, hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3, calendar: d5, z: h6 } = function(e8) {
        return Ft(e8);
      }(lt2(e7)), h6)
        throw new RangeError("Z designator not supported for PlainDateTime");
      if (li(r, n4, i4, o4, a4, s3, l6, u4, c3), d5 || (d5 = "iso8601"), !io(d5))
        throw new RangeError(`invalid calendar identifier ${d5}`);
      d5 = oo(d5);
    }
    return _r(r, n4, i4, o4, a4, s3, l6, u4, c3, d5);
  }
  function dr(e7) {
    if (Dt(e7))
      return e7;
    let { years: t, months: r, weeks: n4, days: i4, hours: o4, minutes: a4, seconds: s3, milliseconds: l6, microseconds: u4, nanoseconds: c3 } = zt(e7);
    return new (m4("%Temporal.Duration%"))(t, r, n4, i4, o4, a4, s3, l6, u4, c3);
  }
  function hr(e7) {
    if (Rt(e7))
      return e7;
    if (Lt2(e7))
      return new (m4("%Temporal.Instant%"))(K3(e7, v4));
    const t = function(e8) {
      let { year: t2, month: r, day: n4, hour: i4, minute: o4, second: a4, millisecond: s3, microsecond: l6, nanosecond: u4, offset: c3, z: d5 } = function(e9) {
        const t3 = Ft(e9);
        if (!t3.z && !t3.offset)
          throw new RangeError("Temporal.Instant requires a time zone offset");
        return t3;
      }(e8);
      if (!d5 && !c3)
        throw new RangeError("Temporal.Instant requires a time zone offset");
      const h6 = d5 ? 0 : Rn(c3);
      ({ year: t2, month: r, day: n4, hour: i4, minute: o4, second: a4, millisecond: s3, microsecond: l6, nanosecond: u4 } = Hn(t2, r, n4, i4, o4, a4, s3, l6, u4 - h6));
      const f5 = On(t2, r, n4, i4, o4, a4, s3, l6, u4);
      if (null === f5)
        throw new RangeError("DateTime outside of supported range");
      return f5;
    }(lt2(e7));
    return new (m4("%Temporal.Instant%"))(t);
  }
  function fr(e7, t) {
    let r = e7;
    if (it2(r)) {
      if (Mt2(r))
        return r;
      let e8, n5;
      if (Z4(r, j4))
        e8 = K3(r, j4), n5 = false;
      else {
        let t2 = r.calendar;
        n5 = void 0 === t2, void 0 === t2 && (t2 = "iso8601"), e8 = Hr(t2);
      }
      const i5 = ar(r, kr(e8, ["day", "month", "monthCode", "year"]), []);
      return n5 && void 0 !== i5.month && void 0 === i5.monthCode && void 0 === i5.year && (i5.year = 1972), rn(e8, i5, t);
    }
    Gt(t);
    let { month: n4, day: i4, referenceISOYear: o4, calendar: a4 } = qt(lt2(r));
    if (void 0 === a4 && (a4 = "iso8601"), !io(a4))
      throw new RangeError(`invalid calendar identifier ${a4}`);
    return a4 = oo(a4), void 0 === o4 ? (oi(1972, n4, i4), Tr(n4, i4, a4)) : rn(a4, Tr(n4, i4, a4, o4));
  }
  function pr(e7, t = "constrain") {
    let r, n4, i4, o4, a4, s3, l6 = e7;
    if (it2(l6)) {
      if (Ot2(l6))
        return l6;
      if (Lt2(l6) && (l6 = hn(K3(l6, A3), K3(l6, C3), K3(l6, j4))), Ct(l6))
        return new (m4("%Temporal.PlainTime%"))(K3(l6, T4), K3(l6, x4), K3(l6, I3), K3(l6, S4), K3(l6, R4), K3(l6, k4));
      ({ hour: r, minute: n4, second: i4, millisecond: o4, microsecond: a4, nanosecond: s3 } = sr(l6)), { hour: r, minute: n4, second: i4, millisecond: o4, microsecond: a4, nanosecond: s3 } = Wt2(r, n4, i4, o4, a4, s3, t);
    } else
      ({ hour: r, minute: n4, second: i4, millisecond: o4, microsecond: a4, nanosecond: s3 } = function(e8) {
        const t2 = de.exec(e8);
        let r2, n5, i5, o5, a5, s4, l7;
        if (t2) {
          r2 = at2(t2[1]), n5 = at2(t2[2] || t2[5]), i5 = at2(t2[3] || t2[6]), 60 === i5 && (i5 = 59);
          const e9 = (t2[4] || t2[7]) + "000000000";
          o5 = at2(e9.slice(0, 3)), a5 = at2(e9.slice(3, 6)), s4 = at2(e9.slice(6, 9)), l7 = t2[14];
          for (const [, e10, t3, r3] of l7.matchAll(ue))
            if ("u-ca" !== t3 && "!" === e10)
              throw new RangeError(`Unrecognized annotation: !${t3}=${r3}`);
          if (t2[8])
            throw new RangeError("Z designator not supported for PlainTime");
        } else {
          let t3, l8;
          if ({ hasTime: l8, hour: r2, minute: n5, second: i5, millisecond: o5, microsecond: a5, nanosecond: s4, z: t3 } = Ft(e8), !l8)
            throw new RangeError(`time is missing in string: ${e8}`);
          if (t3)
            throw new RangeError("Z designator not supported for PlainTime");
        }
        if (/[tT ][0-9][0-9]/.test(e8))
          return { hour: r2, minute: n5, second: i5, millisecond: o5, microsecond: a5, nanosecond: s4 };
        try {
          const { month: t3, day: r3 } = qt(e8);
          oi(1972, t3, r3);
        } catch {
          try {
            const { year: t3, month: r3 } = Ut2(e8);
            oi(t3, r3, 1);
          } catch {
            return { hour: r2, minute: n5, second: i5, millisecond: o5, microsecond: a5, nanosecond: s4 };
          }
        }
        throw new RangeError(`invalid ISO 8601 time-only string ${e8}; may need a T prefix`);
      }(lt2(l6))), si(r, n4, i4, o4, a4, s3);
    return new (m4("%Temporal.PlainTime%"))(r, n4, i4, o4, a4, s3);
  }
  function mr(e7, t) {
    if (it2(e7)) {
      if (At(e7))
        return e7;
      const r2 = Jr(e7);
      return tn(r2, ar(e7, kr(r2, ["month", "monthCode", "year"]), []), t);
    }
    Gt(t);
    let { year: r, month: n4, referenceISODay: i4, calendar: o4 } = Ut2(lt2(e7));
    if (void 0 === o4 && (o4 = "iso8601"), !io(o4))
      throw new RangeError(`invalid calendar identifier ${o4}`);
    return o4 = oo(o4), void 0 === i4 ? (oi(r, n4, 1), Ir(r, n4, o4)) : tn(o4, Ir(r, n4, o4, i4));
  }
  function yr(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, h6, f5, p6, y5) {
    const g5 = new (m4("%Temporal.PlainDateTime%"))(e7, t, r, n4, i4, o4, a4, s3, l6);
    if ("wall" === u4 || "ignore" === p6)
      return K3(fn(h6, g5, f5), v4);
    if ("exact" === u4 || "use" === p6) {
      const u5 = On(e7, t, r, n4, i4, o4, a4, s3, l6);
      if (null === u5)
        throw new RangeError("ZonedDateTime outside of supported range");
      return d3.subtract(u5, d3.BigInt(c3));
    }
    const b7 = mn(h6, g5);
    for (const e8 of b7) {
      const t2 = cn(h6, e8), r2 = d3.toNumber(Li(d3.BigInt(t2), We, "halfExpand"));
      if (t2 === c3 || y5 && r2 === c3)
        return K3(e8, v4);
    }
    if ("reject" === p6) {
      const e8 = Dn(c3), t2 = kt2(h6) ? K3(h6, w4) : "time zone";
      throw new RangeError(`Offset ${e8} is invalid for ${g5.toString()} in ${t2}`);
    }
    return K3(pn(b7, h6, g5, f5), v4);
  }
  function gr(e7, t) {
    let r, n4, i4, o4, a4, s3, l6, u4, c3, d5, h6, f5, p6, m5, y5 = false, g5 = "option";
    if (it2(e7)) {
      if (Lt2(e7))
        return e7;
      f5 = Jr(e7);
      const y6 = kr(f5, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      y6.push("timeZone", "offset");
      const v7 = ar(e7, y6, ["timeZone"]);
      d5 = nn(v7.timeZone), h6 = v7.offset, void 0 === h6 && (g5 = "wall"), p6 = Ht(t), m5 = Vt(t, "reject"), { year: r, month: n4, day: i4, hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3 } = ur(f5, v7, t);
    } else {
      let v7, w5;
      if ({ year: r, month: n4, day: i4, hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3, ianaName: v7, offset: h6, z: w5, calendar: f5 } = function(e8) {
        const t2 = Ft(e8);
        if (!t2.ianaName)
          throw new RangeError("Temporal.ZonedDateTime requires a time zone ID in brackets");
        return t2;
      }(lt2(e7)), d5 = nn(v7), w5 ? g5 = "exact" : h6 || (g5 = "wall"), f5 || (f5 = "iso8601"), !io(f5))
        throw new RangeError(`invalid calendar identifier ${f5}`);
      f5 = oo(f5), y5 = true, p6 = Ht(t), m5 = Vt(t, "reject"), Gt(t);
    }
    let v6 = 0;
    return "option" === g5 && (v6 = Rn(h6)), Rr(yr(r, n4, i4, o4, a4, s3, l6, u4, c3, g5, v6, d5, p6, m5, y5), d5, f5);
  }
  function vr(e7, t, r, n4, i4) {
    oi(t, r, n4), ai(t, r, n4), Q4(e7), X4(e7, b4, t), X4(e7, _4, r), X4(e7, E2, n4), X4(e7, j4, i4), X4(e7, D3, true);
  }
  function wr(e7, t, r, n4 = "iso8601") {
    const i4 = m4("%Temporal.PlainDate%"), o4 = Ne(i4.prototype);
    return vr(o4, e7, t, r, n4), o4;
  }
  function br(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3) {
    li(t, r, n4, i4, o4, a4, s3, l6, u4), ui(t, r, n4, i4, o4, a4, s3, l6, u4), Q4(e7), X4(e7, b4, t), X4(e7, _4, r), X4(e7, E2, n4), X4(e7, T4, i4), X4(e7, x4, o4), X4(e7, I3, a4), X4(e7, S4, s3), X4(e7, R4, l6), X4(e7, k4, u4), X4(e7, j4, c3);
  }
  function _r(e7, t, r, n4, i4, o4, a4, s3, l6, u4 = "iso8601") {
    const c3 = m4("%Temporal.PlainDateTime%"), d5 = Ne(c3.prototype);
    return br(d5, e7, t, r, n4, i4, o4, a4, s3, l6, u4), d5;
  }
  function Er(e7, t, r, n4, i4) {
    oi(i4, t, r), ai(i4, t, r), Q4(e7), X4(e7, _4, t), X4(e7, E2, r), X4(e7, b4, i4), X4(e7, j4, n4), X4(e7, O2, true);
  }
  function Tr(e7, t, r = "iso8601", n4 = 1972) {
    const i4 = m4("%Temporal.PlainMonthDay%"), o4 = Ne(i4.prototype);
    return Er(o4, e7, t, r, n4), o4;
  }
  function xr(e7, t, r, n4, i4) {
    oi(t, r, i4), function(e8, t2) {
      ii(e8, Je, Ve), e8 === Je ? ii(t2, 4, 12) : e8 === Ve && ii(t2, 1, 9);
    }(t, r), Q4(e7), X4(e7, b4, t), X4(e7, _4, r), X4(e7, E2, i4), X4(e7, j4, n4), X4(e7, N4, true);
  }
  function Ir(e7, t, r = "iso8601", n4 = 1) {
    const i4 = m4("%Temporal.PlainYearMonth%"), o4 = Ne(i4.prototype);
    return xr(o4, e7, t, r, n4), o4;
  }
  function Sr(e7, t, r, n4) {
    ci(t), Q4(e7), X4(e7, v4, t), X4(e7, A3, r), X4(e7, j4, n4);
    const i4 = new (m4("%Temporal.Instant%"))(K3(e7, v4));
    X4(e7, C3, i4);
  }
  function Rr(e7, t, r = "iso8601") {
    const n4 = m4("%Temporal.ZonedDateTime%"), i4 = Ne(n4.prototype);
    return Sr(i4, e7, t, r), i4;
  }
  function kr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.fields%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "fields"), e7, [t]), n4 = [];
    for (const e8 of r) {
      if ("string" != typeof e8)
        throw new TypeError("bad return from calendar.fields()");
      ve.call(n4, e8);
    }
    return n4;
  }
  function jr(e7, t, r) {
    if ("string" == typeof e7) {
      const n5 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.mergeFields%"), n5, [t, r]);
    }
    const n4 = nt3(rt3(e7, "mergeFields"), e7, [t, r]);
    if (!it2(n4))
      throw new TypeError("bad return from calendar.mergeFields()");
    return n4;
  }
  function Dr(e7, t, r, n4, i4) {
    let o4 = i4;
    if ("string" == typeof e7) {
      const i5 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.dateAdd%"), i5, [t, r, n4]);
    }
    void 0 === o4 && (o4 = rt3(e7, "dateAdd"));
    const a4 = Ce(o4, e7, [t, r, n4]);
    if (!Nt2(a4))
      throw new TypeError("invalid result");
    return a4;
  }
  function Nr(e7, t, r, n4, i4) {
    let o4 = i4;
    if ("string" == typeof e7) {
      const i5 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.dateUntil%"), i5, [t, r, n4]);
    }
    void 0 === o4 && (o4 = rt3(e7, "dateUntil"));
    const a4 = Ce(o4, e7, [t, r, n4]);
    if (!Dt(a4))
      throw new TypeError("invalid result");
    return a4;
  }
  function Or(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.year%"), r2, [t]);
    }
    let r = nt3(rt3(e7, "year"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar year result must be an integer");
    if (!st2(r))
      throw new RangeError("calendar year result must be an integer");
    return r;
  }
  function Cr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.month%"), r2, [t]);
    }
    let r = nt3(rt3(e7, "month"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar month result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar month result must be a positive integer");
    return r;
  }
  function Ar(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.monthCode%"), r2, [t]);
    }
    let r = nt3(rt3(e7, "monthCode"), e7, [t]);
    if ("string" != typeof r)
      throw new TypeError("calendar monthCode result must be a string");
    return r;
  }
  function Mr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.day%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "day"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar day result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar day result must be a positive integer");
    return r;
  }
  function Lr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.era%"), r2, [t]);
    }
    let r = nt3(rt3(e7, "era"), e7, [t]);
    if (void 0 === r)
      return r;
    if ("string" != typeof r)
      throw new TypeError("calendar era result must be a string or undefined");
    return r;
  }
  function Pr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.eraYear%"), r2, [t]);
    }
    let r = nt3(rt3(e7, "eraYear"), e7, [t]);
    if (void 0 === r)
      return r;
    if ("number" != typeof r)
      throw new TypeError("calendar eraYear result must be an integer or undefined");
    if (!st2(r))
      throw new RangeError("calendar eraYear result must be an integer or undefined");
    return r;
  }
  function Br(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.dayOfWeek%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "dayOfWeek"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar dayOfWeek result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar dayOfWeek result must be a positive integer");
    return r;
  }
  function $r(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.dayOfYear%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "dayOfYear"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar dayOfYear result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar dayOfYear result must be a positive integer");
    return r;
  }
  function Fr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.weekOfYear%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "weekOfYear"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar weekOfYear result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar weekOfYear result must be a positive integer");
    return r;
  }
  function Ur(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.yearOfWeek%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "yearOfWeek"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar yearOfWeek result must be an integer");
    if (!st2(r))
      throw new RangeError("calendar yearOfWeek result must be an integer");
    return r;
  }
  function qr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.daysInWeek%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "daysInWeek"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar daysInWeek result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar daysInWeek result must be a positive integer");
    return r;
  }
  function Yr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.daysInMonth%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "daysInMonth"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar daysInMonth result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar daysInMonth result must be a positive integer");
    return r;
  }
  function Wr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.daysInYear%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "daysInYear"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar daysInYear result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar daysInYear result must be a positive integer");
    return r;
  }
  function zr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.monthsInYear%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "monthsInYear"), e7, [t]);
    if ("number" != typeof r)
      throw new TypeError("calendar monthsInYear result must be a positive integer");
    if (!st2(r) || r < 1)
      throw new RangeError("calendar monthsInYear result must be a positive integer");
    return r;
  }
  function Gr(e7, t) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.inLeapYear%"), r2, [t]);
    }
    const r = nt3(rt3(e7, "inLeapYear"), e7, [t]);
    if ("boolean" != typeof r)
      throw new TypeError("calendar inLeapYear result must be a boolean");
    return r;
  }
  function Hr(e7) {
    if (it2(e7)) {
      if (Z4(e7, j4))
        return K3(e7, j4);
      if (!function(e8) {
        return !!jt(e8) || "dateAdd" in e8 && "dateFromFields" in e8 && "dateUntil" in e8 && "day" in e8 && "dayOfWeek" in e8 && "dayOfYear" in e8 && "daysInMonth" in e8 && "daysInWeek" in e8 && "daysInYear" in e8 && "fields" in e8 && "id" in e8 && "inLeapYear" in e8 && "mergeFields" in e8 && "month" in e8 && "monthCode" in e8 && "monthDayFromFields" in e8 && "monthsInYear" in e8 && "weekOfYear" in e8 && "year" in e8 && "yearMonthFromFields" in e8 && "yearOfWeek" in e8;
      }(e7))
        throw new TypeError("expected a Temporal.Calendar or object implementing the Temporal.Calendar protocol");
      return e7;
    }
    const t = lt2(e7);
    if (io(t))
      return oo(t);
    let r;
    try {
      ({ calendar: r } = Ft(t));
    } catch {
      try {
        ({ calendar: r } = Ut2(t));
      } catch {
        ({ calendar: r } = qt(t));
      }
    }
    if (r || (r = "iso8601"), !io(r))
      throw new RangeError(`invalid calendar identifier ${r}`);
    return oo(r);
  }
  function Jr(e7) {
    if (Z4(e7, j4))
      return K3(e7, j4);
    const { calendar: t } = e7;
    return void 0 === t ? "iso8601" : Hr(t);
  }
  function Vr(e7) {
    if ("string" == typeof e7)
      return e7;
    const t = e7.id;
    if ("string" != typeof t)
      throw new TypeError("calendar.id should be a string");
    return t;
  }
  function Qr(e7) {
    return it2(e7) ? e7 : new (m4("%Temporal.Calendar%"))(e7);
  }
  function Zr(e7, t) {
    return e7 === t || Vr(e7) === Vr(t);
  }
  function Kr(e7, t, r) {
    if (e7 === t)
      return;
    const n4 = Vr(e7), i4 = Vr(t);
    if (n4 !== i4)
      throw new RangeError(`cannot ${r} of ${n4} and ${i4} calendars`);
  }
  function Xr(e7, t) {
    if (e7 === t)
      return t;
    const r = Vr(e7), n4 = Vr(t);
    if (r === n4 || "iso8601" === r)
      return t;
    if ("iso8601" === n4)
      return e7;
    throw new RangeError("irreconcilable calendars");
  }
  function en(e7, t, r, n4) {
    if ("string" == typeof e7) {
      const n5 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.dateFromFields%"), n5, [t, r]);
    }
    const i4 = nt3(n4 ?? rt3(e7, "dateFromFields"), e7, [t, r]);
    if (!Nt2(i4))
      throw new TypeError("invalid result");
    return i4;
  }
  function tn(e7, t, r) {
    if ("string" == typeof e7) {
      const n5 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.yearMonthFromFields%"), n5, [t, r]);
    }
    let n4 = nt3(rt3(e7, "yearMonthFromFields"), e7, [t, r]);
    if (!At(n4))
      throw new TypeError("invalid result");
    return n4;
  }
  function rn(e7, t, r) {
    if ("string" == typeof e7) {
      const n5 = new (m4("%Temporal.Calendar%"))(e7);
      return nt3(m4("%Temporal.Calendar.prototype.monthDayFromFields%"), n5, [t, r]);
    }
    let n4 = nt3(rt3(e7, "monthDayFromFields"), e7, [t, r]);
    if (!Mt2(n4))
      throw new TypeError("invalid result");
    return n4;
  }
  function nn(e7) {
    if (it2(e7)) {
      if (Lt2(e7))
        return K3(e7, A3);
      if (!function(e8) {
        return !!kt2(e8) || "getOffsetNanosecondsFor" in e8 && "getPossibleInstantsFor" in e8 && "id" in e8;
      }(e7))
        throw new TypeError("expected a Temporal.TimeZone or object implementing the Temporal.TimeZone protocol");
      return e7;
    }
    return function(e8) {
      const { ianaName: t, offset: r, z: n4 } = function(e9) {
        if (new RegExp(`^${te.source}$`, "i").test(e9))
          return { ianaName: e9 };
        try {
          const t2 = Ft(e9);
          if (t2.z || t2.offset || t2.ianaName)
            return t2;
        } catch {
        }
        throw new RangeError(`Invalid time zone: ${e9}`);
      }(e8);
      return t ? kn(t) : n4 ? "UTC" : Dn(Rn(r));
    }(lt2(e7));
  }
  function on(e7) {
    if ("string" == typeof e7)
      return e7;
    const t = e7.id;
    if ("string" != typeof t)
      throw new TypeError("timeZone.id should be a string");
    return t;
  }
  function an(e7) {
    return it2(e7) ? e7 : new (m4("%Temporal.TimeZone%"))(e7);
  }
  function sn(e7, t) {
    return e7 === t || on(e7) === on(t);
  }
  function ln(e7) {
    return wr(K3(e7, b4), K3(e7, _4), K3(e7, E2), K3(e7, j4));
  }
  function un(e7) {
    return new (m4("%Temporal.PlainTime%"))(K3(e7, T4), K3(e7, x4), K3(e7, I3), K3(e7, S4), K3(e7, R4), K3(e7, k4));
  }
  function cn(e7, t, r) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.TimeZone%"))(e7);
      return nt3(m4("%Temporal.TimeZone.prototype.getOffsetNanosecondsFor%"), r2, [t]);
    }
    const n4 = nt3(r ?? rt3(e7, "getOffsetNanosecondsFor"), e7, [t]);
    if ("number" != typeof n4)
      throw new TypeError("bad return from getOffsetNanosecondsFor");
    if (!st2(n4) || Ee(n4) >= 864e11)
      throw new RangeError("out-of-range return from getOffsetNanosecondsFor");
    return n4;
  }
  function dn(e7, t) {
    return Dn(cn(e7, t));
  }
  function hn(e7, t, r) {
    const n4 = K3(t, v4), i4 = cn(e7, t);
    let { year: o4, month: a4, day: s3, hour: l6, minute: u4, second: c3, millisecond: d5, microsecond: h6, nanosecond: f5 } = Cn(n4);
    return { year: o4, month: a4, day: s3, hour: l6, minute: u4, second: c3, millisecond: d5, microsecond: h6, nanosecond: f5 } = Hn(o4, a4, s3, l6, u4, c3, d5, h6, f5 + i4), _r(o4, a4, s3, l6, u4, c3, d5, h6, f5, r);
  }
  function fn(e7, t, r) {
    return pn(mn(e7, t), e7, t, r);
  }
  function pn(e7, t, r, n4) {
    const i4 = m4("%Temporal.Instant%"), o4 = e7.length;
    if (1 === o4)
      return e7[0];
    if (o4)
      switch (n4) {
        case "compatible":
        case "earlier":
          return e7[0];
        case "later":
          return e7[o4 - 1];
        case "reject":
          throw new RangeError("multiple instants found");
      }
    const a4 = K3(r, b4), s3 = K3(r, _4), l6 = K3(r, E2), u4 = K3(r, T4), c3 = K3(r, x4), h6 = K3(r, I3), f5 = K3(r, S4), p6 = K3(r, R4), y5 = K3(r, k4), g5 = On(a4, s3, l6, u4, c3, h6, f5, p6, y5);
    if (null === g5)
      throw new RangeError("DateTime outside of supported range");
    const v6 = new i4(d3.subtract(g5, ze)), w5 = new i4(d3.add(g5, ze)), D4 = cn(t, v6), N10 = cn(t, w5) - D4;
    switch (n4) {
      case "earlier": {
        const e8 = K3(r, j4), n5 = m4("%Temporal.PlainDateTime%"), i5 = ki(a4, s3, l6, u4, c3, h6, f5, p6, y5, e8, 0, 0, 0, 0, 0, 0, 0, 0, 0, -N10, void 0);
        return mn(t, new n5(i5.year, i5.month, i5.day, i5.hour, i5.minute, i5.second, i5.millisecond, i5.microsecond, i5.nanosecond, e8))[0];
      }
      case "compatible":
      case "later": {
        const e8 = K3(r, j4), n5 = m4("%Temporal.PlainDateTime%"), i5 = ki(a4, s3, l6, u4, c3, h6, f5, p6, y5, e8, 0, 0, 0, 0, 0, 0, 0, 0, 0, N10, void 0), o5 = mn(t, new n5(i5.year, i5.month, i5.day, i5.hour, i5.minute, i5.second, i5.millisecond, i5.microsecond, i5.nanosecond, e8));
        return o5[o5.length - 1];
      }
      case "reject":
        throw new RangeError("no such instant found");
    }
  }
  function mn(e7, t, r) {
    if ("string" == typeof e7) {
      const r2 = new (m4("%Temporal.TimeZone%"))(e7);
      return nt3(m4("%Temporal.TimeZone.prototype.getPossibleInstantsFor%"), r2, [t]);
    }
    const n4 = nt3(r ?? rt3(e7, "getPossibleInstantsFor"), e7, [t]), i4 = [];
    for (const e8 of n4) {
      if (!Rt(e8))
        throw new TypeError("bad return from getPossibleInstantsFor");
      ve.call(i4, e8);
    }
    return i4;
  }
  function yn(e7) {
    let t;
    return t = e7 < 0 || e7 > 9999 ? (e7 < 0 ? "-" : "+") + `000000${Ee(e7)}`.slice(-6) : `0000${e7}`.slice(-4), t;
  }
  function gn(e7) {
    return `00${e7}`.slice(-2);
  }
  function vn(e7, t, r, n4, i4) {
    if ("minute" === i4)
      return "";
    const o4 = `:${gn(e7)}`;
    let a4, s3 = 1e6 * t + 1e3 * r + n4;
    if ("auto" === i4) {
      if (0 === s3)
        return o4;
      for (a4 = `${s3}`.padStart(9, "0"); "0" === a4[a4.length - 1]; )
        a4 = a4.slice(0, -1);
    } else {
      if (0 === i4)
        return o4;
      a4 = `${s3}`.padStart(9, "0").slice(0, i4);
    }
    return `${o4}.${a4}`;
  }
  function wn(e7, t, r) {
    let n4 = t;
    void 0 === n4 && (n4 = "UTC");
    const i4 = hn(n4, e7, "iso8601"), o4 = yn(K3(i4, b4)), a4 = gn(K3(i4, _4)), s3 = gn(K3(i4, E2)), l6 = gn(K3(i4, T4)), u4 = gn(K3(i4, x4)), c3 = vn(K3(i4, I3), K3(i4, S4), K3(i4, R4), K3(i4, k4), r);
    let d5 = "Z";
    return void 0 !== t && (d5 = Nn(cn(n4, e7))), `${o4}-${a4}-${s3}T${l6}:${u4}${c3}${d5}`;
  }
  function bn(e7, t = "auto", r) {
    function n4(e8) {
      return e8 <= De ? e8.toString(10) : d3.BigInt(e8).toString(10);
    }
    const i4 = K3(e7, M4), o4 = K3(e7, L3), a4 = K3(e7, P4), s3 = K3(e7, B4), l6 = K3(e7, $3), u4 = K3(e7, F3);
    let c3 = K3(e7, U5), h6 = K3(e7, q4), f5 = K3(e7, Y4), p6 = K3(e7, W3);
    const m5 = Wn(i4, o4, a4, s3, l6, u4, c3, h6, f5, p6);
    if (r) {
      const { unit: e8, increment: t2, roundingMode: n5 } = r;
      ({ seconds: c3, milliseconds: h6, microseconds: f5, nanoseconds: p6 } = Wi(0, 0, 0, 0, 0, 0, c3, h6, f5, p6, t2, e8, n5));
    }
    const y5 = [];
    i4 && y5.push(`${n4(Ee(i4))}Y`), o4 && y5.push(`${n4(Ee(o4))}M`), a4 && y5.push(`${n4(Ee(a4))}W`), s3 && y5.push(`${n4(Ee(s3))}D`);
    const g5 = [];
    l6 && g5.push(`${n4(Ee(l6))}H`), u4 && g5.push(`${n4(Ee(u4))}M`);
    const v6 = [];
    let w5, b7, _5, E4, T6 = Vn(0, 0, 0, c3, h6, f5, p6, 0);
    ({ quotient: T6, remainder: w5 } = ht2(T6, $e)), { quotient: T6, remainder: b7 } = ht2(T6, $e), { quotient: E4, remainder: _5 } = ht2(T6, $e);
    const x6 = 1e6 * Ee(d3.toNumber(_5)) + 1e3 * Ee(d3.toNumber(b7)) + Ee(d3.toNumber(w5));
    let I5;
    if ("auto" === t) {
      if (0 !== x6)
        for (I5 = `${x6}`.padStart(9, "0"); "0" === I5[I5.length - 1]; )
          I5 = I5.slice(0, -1);
    } else
      0 !== t && (I5 = `${x6}`.padStart(9, "0").slice(0, t));
    return I5 && v6.unshift(".", I5), d3.equal(E4, Me) && !v6.length && "auto" === t || v6.unshift(mt2(E4).toString()), v6.length && g5.push(`${v6.join("")}S`), g5.length && g5.unshift("T"), y5.length || g5.length ? `${m5 < 0 ? "-" : ""}P${y5.join("")}${g5.join("")}` : "PT0S";
  }
  function _n(e7, t = "auto") {
    return `${yn(K3(e7, b4))}-${gn(K3(e7, _4))}-${gn(K3(e7, E2))}${Bt2(K3(e7, j4), t)}`;
  }
  function En(e7, t, r = "auto", n4) {
    let i4 = K3(e7, b4), o4 = K3(e7, _4), a4 = K3(e7, E2), s3 = K3(e7, T4), l6 = K3(e7, x4), u4 = K3(e7, I3), c3 = K3(e7, S4), d5 = K3(e7, R4), h6 = K3(e7, k4);
    if (n4) {
      const { unit: e8, increment: t2, roundingMode: r2 } = n4;
      ({ year: i4, month: o4, day: a4, hour: s3, minute: l6, second: u4, millisecond: c3, microsecond: d5, nanosecond: h6 } = Bi(i4, o4, a4, s3, l6, u4, c3, d5, h6, t2, e8, r2));
    }
    return `${yn(i4)}-${gn(o4)}-${gn(a4)}T${gn(s3)}:${gn(l6)}${vn(u4, c3, d5, h6, t)}${Bt2(K3(e7, j4), r)}`;
  }
  function Tn(e7, t = "auto") {
    let r = `${gn(K3(e7, _4))}-${gn(K3(e7, E2))}`;
    const n4 = Vr(K3(e7, j4));
    "always" !== t && "critical" !== t && "iso8601" === n4 || (r = `${yn(K3(e7, b4))}-${r}`);
    const i4 = $t2(n4, t);
    return i4 && (r += i4), r;
  }
  function xn(e7, t = "auto") {
    let r = `${yn(K3(e7, b4))}-${gn(K3(e7, _4))}`;
    const n4 = Vr(K3(e7, j4));
    "always" !== t && "critical" !== t && "iso8601" === n4 || (r += `-${gn(K3(e7, E2))}`);
    const i4 = $t2(n4, t);
    return i4 && (r += i4), r;
  }
  function In(e7, t, r = "auto", n4 = "auto", i4 = "auto", o4) {
    let a4 = K3(e7, C3);
    if (o4) {
      const { unit: t2, increment: r2, roundingMode: n5 } = o4, i5 = Pi(K3(e7, v4), r2, t2, n5);
      a4 = new (m4("%Temporal.Instant%"))(i5);
    }
    const s3 = K3(e7, A3), l6 = hn(s3, a4, "iso8601");
    let u4 = `${yn(K3(l6, b4))}-${gn(K3(l6, _4))}-${gn(K3(l6, E2))}T${gn(K3(l6, T4))}:${gn(K3(l6, x4))}${vn(K3(l6, I3), K3(l6, S4), K3(l6, R4), K3(l6, k4), t)}`;
    return "never" !== i4 && (u4 += Nn(cn(s3, a4))), "never" !== n4 && (u4 += `[${"critical" === n4 ? "!" : ""}${on(s3)}]`), u4 += Bt2(K3(e7, j4), r), u4;
  }
  function Sn(e7) {
    return ao.test(je(e7));
  }
  function Rn(e7) {
    const t = ao.exec(je(e7));
    if (!t)
      throw new RangeError(`invalid time zone offset: ${e7}`);
    return ("-" === t[1] || "\u2212" === t[1] ? -1 : 1) * (1e9 * (60 * (60 * +t[2] + +(t[3] || 0)) + +(t[4] || 0)) + +((t[5] || 0) + "000000000").slice(0, 9));
  }
  function kn(e7) {
    return Sn(e7) ? Dn(Rn(e7)) : xt(je(e7)).resolvedOptions().timeZone;
  }
  function jn(e7, t) {
    const { year: r, month: n4, day: i4, hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3 } = An(e7, t), h6 = r % 400, f5 = (r - h6) / 400, p6 = d3.multiply(d3.BigInt(146097), ze), m5 = On(h6, n4, i4, o4, a4, s3, l6, u4, c3), y5 = d3.add(m5, d3.multiply(p6, d3.BigInt(f5)));
    return d3.toNumber(d3.subtract(y5, t));
  }
  function Dn(e7) {
    const t = e7 < 0 ? "-" : "+", r = Ee(e7), n4 = r % 1e9, i4 = Te(r / 1e9) % 60, o4 = Te(r / 6e10) % 60, a4 = gn(Te(r / 36e11)), s3 = gn(o4), l6 = gn(i4);
    let u4 = "";
    if (n4) {
      let e8 = `${n4}`.padStart(9, "0");
      for (; "0" === e8[e8.length - 1]; )
        e8 = e8.slice(0, -1);
      u4 = `:${l6}.${e8}`;
    } else
      i4 && (u4 = `:${l6}`);
    return `${t}${a4}:${s3}${u4}`;
  }
  function Nn(e7) {
    let t = d3.toNumber(Li(d3.BigInt(e7), We, "halfExpand"));
    const r = t < 0 ? "-" : "+";
    t = Ee(t);
    const n4 = t / 6e10 % 60;
    return `${r}${gn(Te(t / 36e11))}:${gn(n4)}`;
  }
  function On(e7, t, r, n4, i4, o4, a4, s3, l6) {
    const u4 = new Date();
    u4.setUTCHours(n4, i4, o4, a4), u4.setUTCFullYear(e7, t - 1, r);
    const c3 = u4.getTime();
    if (Se(c3))
      return null;
    let h6 = d3.multiply(d3.BigInt(c3), Fe);
    return h6 = d3.add(h6, d3.multiply(d3.BigInt(s3), $e)), h6 = d3.add(h6, d3.BigInt(l6)), d3.lessThan(h6, Ge) || d3.greaterThan(h6, He) ? null : h6;
  }
  function Cn(e7) {
    const { quotient: t, remainder: r } = ht2(e7, Fe);
    let n4 = d3.toNumber(t), i4 = d3.toNumber(r);
    i4 < 0 && (i4 += 1e6, n4 -= 1);
    const o4 = Te(i4 / 1e3) % 1e3, a4 = i4 % 1e3, s3 = new Date(n4);
    return { epochMilliseconds: n4, year: s3.getUTCFullYear(), month: s3.getUTCMonth() + 1, day: s3.getUTCDate(), hour: s3.getUTCHours(), minute: s3.getUTCMinutes(), second: s3.getUTCSeconds(), millisecond: s3.getUTCMilliseconds(), microsecond: o4, nanosecond: a4 };
  }
  function An(e7, t) {
    const { epochMilliseconds: r, millisecond: n4, microsecond: i4, nanosecond: o4 } = Cn(t), { year: a4, month: s3, day: l6, hour: u4, minute: c3, second: d5 } = function(e8, t2) {
      return function(e9) {
        const t3 = e9.split(/[^\w]+/);
        if (7 !== t3.length)
          throw new RangeError(`expected 7 parts in "${e9}`);
        const r2 = +t3[0], n5 = +t3[1];
        let i5 = +t3[2];
        const o5 = t3[3].toUpperCase();
        if ("B" === o5 || "BC" === o5)
          i5 = 1 - i5;
        else if ("A" !== o5 && "AD" !== o5)
          throw new RangeError(`Unknown era ${o5} in "${e9}`);
        let a5 = +t3[4];
        24 === a5 && (a5 = 0);
        const s4 = +t3[5], l7 = +t3[6];
        if (!(Re(i5) && Re(r2) && Re(n5) && Re(a5) && Re(s4) && Re(l7)))
          throw new RangeError(`Invalid number in "${e9}`);
        return { year: i5, month: r2, day: n5, hour: a5, minute: s4, second: l7 };
      }(xt(e8).format(new Date(t2)));
    }(e7, r);
    return Hn(a4, s3, l6, u4, c3, d5, n4, i4, o4);
  }
  function Mn(e7, t) {
    return d3.lessThan(e7, t) ? t : e7;
  }
  function Ln() {
    return d3.add(Zi(), Ze);
  }
  function Pn(e7, t) {
    if (d3.lessThan(t, Qe))
      return Pn(e7, Qe);
    const r = d3.add(t, Ke), n4 = Mn(Ln(), r);
    let i4 = Mn(Qe, t);
    const o4 = jn(e7, i4);
    let a4 = i4, s3 = o4;
    for (; o4 === s3 && d3.lessThan(d3.BigInt(i4), n4); ) {
      if (a4 = d3.add(i4, Xe), d3.greaterThan(a4, He))
        return null;
      s3 = jn(e7, a4), o4 === s3 && (i4 = a4);
    }
    return o4 === s3 ? null : so((t2) => jn(e7, t2), i4, a4, o4, s3);
  }
  function Bn(e7, t) {
    const r = Ln(), n4 = d3.greaterThan(t, r), i4 = n4 ? d3.subtract(t, Ke) : Qe;
    if ("Africa/Casablanca" === e7 || "Africa/El_Aaiun" === e7) {
      const r2 = K3(hr("2088-01-01T00Z"), v4);
      if (d3.lessThan(r2, t))
        return Bn(e7, r2);
    }
    let o4 = d3.subtract(t, Le);
    if (d3.lessThan(o4, Qe))
      return null;
    const a4 = jn(e7, o4);
    let s3 = o4, l6 = a4;
    for (; a4 === l6 && d3.greaterThan(o4, i4); ) {
      if (s3 = d3.subtract(o4, Xe), d3.lessThan(s3, Qe))
        return null;
      l6 = jn(e7, s3), a4 === l6 && (o4 = s3);
    }
    if (a4 === l6) {
      if (n4) {
        const t2 = d3.subtract(r, ze);
        return Bn(e7, t2);
      }
      return null;
    }
    return so((t2) => jn(e7, t2), s3, o4, l6, a4);
  }
  function $n(e7) {
    return void 0 !== e7 && !(e7 % 4 != 0 || e7 % 100 == 0 && e7 % 400 != 0);
  }
  function Fn(e7, t) {
    return { standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] }[$n(e7) ? "leapyear" : "standard"][t - 1];
  }
  function Un(e7, t, r) {
    const n4 = t + (t < 3 ? 10 : -2), i4 = e7 - (t < 3 ? 1 : 0), o4 = Te(i4 / 100), a4 = i4 - 100 * o4, s3 = (r + Te(2.6 * n4 - 0.2) + (a4 + Te(a4 / 4)) + (Te(o4 / 4) - 2 * o4)) % 7;
    return s3 + (s3 <= 0 ? 7 : 0);
  }
  function qn(e7, t, r) {
    let n4 = r;
    for (let r2 = t - 1; r2 > 0; r2--)
      n4 += Fn(e7, r2);
    return n4;
  }
  function Yn(e7, t, r) {
    const n4 = qn(e7, t, r), i4 = Un(e7, t, r) || 7, o4 = Un(e7, 1, 1), a4 = Te((n4 - i4 + 10) / 7);
    return a4 < 1 ? 5 === o4 || 6 === o4 && $n(e7 - 1) ? { week: 53, year: e7 - 1 } : { week: 52, year: e7 - 1 } : 53 === a4 && ($n(e7) ? 366 : 365) - n4 < 4 - i4 ? { week: 1, year: e7 + 1 } : { week: a4, year: e7 };
  }
  function Wn(e7, t, r, n4, i4, o4, a4, s3, l6, u4) {
    for (const c3 of [e7, t, r, n4, i4, o4, a4, s3, l6, u4])
      if (0 !== c3)
        return c3 < 0 ? -1 : 1;
    return 0;
  }
  function zn(e7, t) {
    let r = e7, n4 = t;
    if (!Re(r) || !Re(n4))
      throw new RangeError("infinity is out of range");
    return n4 -= 1, r += Te(n4 / 12), n4 %= 12, n4 < 0 && (n4 += 12), n4 += 1, { year: r, month: n4 };
  }
  function Gn(e7, t, r) {
    let n4 = e7, i4 = t, o4 = r;
    if (!Re(o4))
      throw new RangeError("infinity is out of range");
    ({ year: n4, month: i4 } = zn(n4, i4));
    const a4 = 146097;
    if (Ee(o4) > a4) {
      const e8 = Ie(o4 / a4);
      n4 += 400 * e8, o4 -= e8 * a4;
    }
    let s3 = 0, l6 = i4 > 2 ? n4 : n4 - 1;
    for (; s3 = $n(l6) ? 366 : 365, o4 < -s3; )
      n4 -= 1, l6 -= 1, o4 += s3;
    for (l6 += 1; s3 = $n(l6) ? 366 : 365, o4 > s3; )
      n4 += 1, l6 += 1, o4 -= s3;
    for (; o4 < 1; )
      ({ year: n4, month: i4 } = zn(n4, i4 - 1)), o4 += Fn(n4, i4);
    for (; o4 > Fn(n4, i4); )
      o4 -= Fn(n4, i4), { year: n4, month: i4 } = zn(n4, i4 + 1);
    return { year: n4, month: i4, day: o4 };
  }
  function Hn(e7, t, r, n4, i4, o4, a4, s3, l6) {
    const { deltaDays: u4, hour: c3, minute: d5, second: h6, millisecond: f5, microsecond: p6, nanosecond: m5 } = Jn(n4, i4, o4, a4, s3, l6), { year: y5, month: g5, day: v6 } = Gn(e7, t, r + u4);
    return { year: y5, month: g5, day: v6, hour: c3, minute: d5, second: h6, millisecond: f5, microsecond: p6, nanosecond: m5 };
  }
  function Jn(e7, t, r, n4, i4, o4) {
    let a4, s3 = d3.BigInt(e7), l6 = d3.BigInt(t), u4 = d3.BigInt(r), c3 = d3.BigInt(n4), h6 = d3.BigInt(i4), f5 = d3.BigInt(o4);
    return { quotient: a4, remainder: f5 } = Gi(f5, $e), h6 = d3.add(h6, a4), { quotient: a4, remainder: h6 } = Gi(h6, $e), c3 = d3.add(c3, a4), { quotient: a4, remainder: c3 } = Gi(c3, $e), u4 = d3.add(u4, a4), { quotient: a4, remainder: u4 } = Gi(u4, Pe), l6 = d3.add(l6, a4), { quotient: a4, remainder: l6 } = Gi(l6, Pe), s3 = d3.add(s3, a4), { quotient: a4, remainder: s3 } = Gi(s3, Be), { deltaDays: d3.toNumber(a4), hour: d3.toNumber(s3), minute: d3.toNumber(l6), second: d3.toNumber(u4), millisecond: d3.toNumber(c3), microsecond: d3.toNumber(h6), nanosecond: d3.toNumber(f5) };
  }
  function Vn(e7, t, r, n4, i4, o4, a4, s3) {
    const l6 = d3.BigInt(e7);
    let u4 = d3.BigInt(a4);
    0 !== e7 && (u4 = d3.subtract(d3.BigInt(a4), d3.BigInt(s3)));
    const c3 = d3.add(d3.BigInt(t), d3.multiply(l6, d3.BigInt(24))), h6 = d3.add(d3.BigInt(r), d3.multiply(c3, Pe)), f5 = d3.add(d3.BigInt(n4), d3.multiply(h6, Pe)), p6 = d3.add(d3.BigInt(i4), d3.multiply(f5, $e)), m5 = d3.add(d3.BigInt(o4), d3.multiply(p6, $e));
    return d3.add(d3.BigInt(u4), d3.multiply(m5, $e));
  }
  function Qn(e7, t) {
    const r = m4("%Temporal.Instant%"), n4 = xe(d3.toNumber(e7));
    let i4 = d3.BigInt(e7), o4 = 864e11;
    if (0 === n4)
      return { days: 0, nanoseconds: Me, dayLengthNs: o4 };
    if (!Lt2(t)) {
      let e8;
      return { quotient: e8, remainder: i4 } = ht2(i4, d3.BigInt(o4)), { days: d3.toNumber(e8), nanoseconds: i4, dayLengthNs: o4 };
    }
    const a4 = K3(t, v4), s3 = K3(t, C3), l6 = d3.add(a4, i4), u4 = new r(l6), c3 = K3(t, A3), h6 = K3(t, j4), f5 = hn(c3, s3, h6), p6 = hn(c3, u4, h6);
    let { days: y5 } = mi(K3(f5, b4), K3(f5, _4), K3(f5, E2), K3(f5, T4), K3(f5, x4), K3(f5, I3), K3(f5, S4), K3(f5, R4), K3(f5, k4), K3(p6, b4), K3(p6, _4), K3(p6, E2), K3(p6, T4), K3(p6, x4), K3(p6, I3), K3(p6, S4), K3(p6, R4), K3(p6, k4), h6, "day", Ne(null)), g5 = ji(s3, c3, h6, 0, 0, 0, y5, 0, 0, 0, 0, 0, 0), w5 = d3.BigInt(y5);
    if (1 === n4)
      for (; d3.greaterThan(w5, Me) && d3.greaterThan(g5, l6); )
        w5 = d3.subtract(w5, Le), g5 = ji(s3, c3, h6, 0, 0, 0, d3.toNumber(w5), 0, 0, 0, 0, 0, 0);
    i4 = d3.subtract(l6, g5);
    let D4 = false, N10 = new r(g5);
    do {
      const e8 = ji(N10, c3, h6, 0, 0, 0, n4, 0, 0, 0, 0, 0, 0), t2 = K3(N10, v4);
      o4 = d3.toNumber(d3.subtract(e8, t2)), D4 = d3.greaterThanOrEqual(d3.multiply(d3.subtract(i4, d3.BigInt(o4)), d3.BigInt(n4)), Me), D4 && (i4 = d3.subtract(i4, d3.BigInt(o4)), N10 = new r(e8), w5 = d3.add(w5, d3.BigInt(n4)));
    } while (D4);
    if (!tt3(w5) && pt2(w5) !== n4)
      throw new RangeError("Time zone or calendar converted nanoseconds into a number of days with the opposite sign");
    if (!tt3(i4) && pt2(i4) !== n4) {
      if (ft(i4) && 1 === n4)
        throw new Error("assert not reached");
      throw new RangeError("Time zone or calendar ended up with a remainder of nanoseconds with the opposite sign");
    }
    if (d3.greaterThanOrEqual(mt2(i4), mt2(d3.BigInt(o4))))
      throw new Error("assert not reached");
    return { days: d3.toNumber(w5), nanoseconds: i4, dayLengthNs: Ee(o4) };
  }
  function Zn(e7, t, r, n4, i4, o4, a4, s3, l6) {
    let u4 = Kn(e7, t, r, n4, i4, o4, a4, s3, l6);
    if ("positive overflow" === u4 || "negative overflow" === u4)
      throw new RangeError("Duration out of range");
    return u4;
  }
  function Kn(e7, t, r, n4, i4, o4, a4, s3, l6) {
    let u4, c3, h6, f5, p6, m5, y5 = e7;
    if (Lt2(l6)) {
      const e8 = ji(K3(l6, C3), K3(l6, A3), K3(l6, j4), 0, 0, 0, y5, t, r, n4, i4, o4, a4), s4 = K3(l6, v4);
      u4 = d3.subtract(e8, s4);
    } else
      u4 = Vn(y5, t, r, n4, i4, o4, a4, 0);
    "year" === s3 || "month" === s3 || "week" === s3 || "day" === s3 ? { days: y5, nanoseconds: u4 } = Qn(u4, l6) : y5 = 0;
    const g5 = d3.lessThan(u4, Me) ? -1 : 1;
    switch (u4 = mt2(u4), c3 = h6 = f5 = p6 = m5 = Me, s3) {
      case "year":
      case "month":
      case "week":
      case "day":
      case "hour":
        ({ quotient: c3, remainder: u4 } = ht2(u4, $e)), { quotient: h6, remainder: c3 } = ht2(c3, $e), { quotient: f5, remainder: h6 } = ht2(h6, $e), { quotient: p6, remainder: f5 } = ht2(f5, Pe), { quotient: m5, remainder: p6 } = ht2(p6, Pe);
        break;
      case "minute":
        ({ quotient: c3, remainder: u4 } = ht2(u4, $e)), { quotient: h6, remainder: c3 } = ht2(c3, $e), { quotient: f5, remainder: h6 } = ht2(h6, $e), { quotient: p6, remainder: f5 } = ht2(f5, Pe);
        break;
      case "second":
        ({ quotient: c3, remainder: u4 } = ht2(u4, $e)), { quotient: h6, remainder: c3 } = ht2(c3, $e), { quotient: f5, remainder: h6 } = ht2(h6, $e);
        break;
      case "millisecond":
        ({ quotient: c3, remainder: u4 } = ht2(u4, $e)), { quotient: h6, remainder: c3 } = ht2(c3, $e);
        break;
      case "microsecond":
        ({ quotient: c3, remainder: u4 } = ht2(u4, $e));
        break;
      case "nanosecond":
        break;
      default:
        throw new Error("assert not reached");
    }
    const w5 = d3.toNumber(m5) * g5, b7 = d3.toNumber(p6) * g5, _5 = d3.toNumber(f5) * g5, E4 = d3.toNumber(h6) * g5, T6 = d3.toNumber(c3) * g5, x6 = d3.toNumber(u4) * g5;
    for (const e8 of [y5, w5, b7, _5, E4, T6, x6])
      if (!Re(e8))
        return 1 === g5 ? "positive overflow" : "negative overflow";
    return { days: y5, hours: w5, minutes: b7, seconds: _5, milliseconds: E4, microseconds: T6, nanoseconds: x6 };
  }
  function Xn(e7, t, r, n4, i4, o4) {
    const a4 = m4("%Temporal.Duration%"), s3 = Wn(e7, t, r, n4, 0, 0, 0, 0, 0, 0);
    if (0 === s3)
      return { years: e7, months: t, weeks: r, days: n4 };
    const l6 = d3.BigInt(s3);
    let u4, c3, h6 = d3.BigInt(e7), f5 = d3.BigInt(t), p6 = d3.BigInt(r), y5 = d3.BigInt(n4);
    o4 && (c3 = lr(o4), u4 = K3(c3, j4));
    const g5 = new a4(s3), v6 = new a4(0, s3), w5 = new a4(0, 0, s3);
    switch (i4) {
      case "year":
        break;
      case "month":
        {
          if (!u4)
            throw new RangeError("a starting point is required for months balancing");
          let e8, t2;
          for ("string" != typeof u4 && (e8 = rt3(u4, "dateAdd"), t2 = rt3(u4, "dateUntil")); !tt3(h6); ) {
            const r2 = Dr(u4, c3, g5, void 0, e8), n5 = Ne(null);
            n5.largestUnit = "month";
            const i5 = Nr(u4, c3, r2, n5, t2), o5 = d3.BigInt(K3(i5, L3));
            c3 = r2, f5 = d3.add(f5, o5), h6 = d3.subtract(h6, l6);
          }
        }
        break;
      case "week": {
        if (!u4)
          throw new RangeError("a starting point is required for weeks balancing");
        const e8 = "string" != typeof u4 ? rt3(u4, "dateAdd") : void 0;
        for (; !tt3(h6); ) {
          let t2;
          ({ relativeTo: c3, days: t2 } = Ui(u4, c3, g5, e8)), y5 = d3.add(y5, d3.BigInt(t2)), h6 = d3.subtract(h6, l6);
        }
        for (; !tt3(f5); ) {
          let t2;
          ({ relativeTo: c3, days: t2 } = Ui(u4, c3, v6, e8)), y5 = d3.add(y5, d3.BigInt(t2)), f5 = d3.subtract(f5, l6);
        }
        break;
      }
      default: {
        if (tt3(h6) && tt3(f5) && tt3(p6))
          break;
        if (!u4)
          throw new RangeError("a starting point is required for balancing calendar units");
        const e8 = "string" != typeof u4 ? rt3(u4, "dateAdd") : void 0;
        for (; !tt3(h6); ) {
          let t2;
          ({ relativeTo: c3, days: t2 } = Ui(u4, c3, g5, e8)), y5 = d3.add(y5, d3.BigInt(t2)), h6 = d3.subtract(h6, l6);
        }
        for (; !tt3(f5); ) {
          let t2;
          ({ relativeTo: c3, days: t2 } = Ui(u4, c3, v6, e8)), y5 = d3.add(y5, d3.BigInt(t2)), f5 = d3.subtract(f5, l6);
        }
        for (; !tt3(p6); ) {
          let t2;
          ({ relativeTo: c3, days: t2 } = Ui(u4, c3, w5, e8)), y5 = d3.add(y5, d3.BigInt(t2)), p6 = d3.subtract(p6, l6);
        }
        break;
      }
    }
    return { years: d3.toNumber(h6), months: d3.toNumber(f5), weeks: d3.toNumber(p6), days: d3.toNumber(y5) };
  }
  function ei(e7, t, r, n4, i4) {
    if (Lt2(e7)) {
      const o4 = K3(e7, C3), a4 = K3(e7, A3), s3 = K3(e7, j4), l6 = cn(a4, o4), u4 = ji(o4, a4, s3, t, r, n4, i4, 0, 0, 0, 0, 0, 0);
      return cn(a4, new (m4("%Temporal.Instant%"))(u4)) - l6;
    }
    return 0;
  }
  function ti(e7) {
    return new (m4("%Temporal.Duration%"))(-K3(e7, M4), -K3(e7, L3), -K3(e7, P4), -K3(e7, B4), -K3(e7, $3), -K3(e7, F3), -K3(e7, U5), -K3(e7, q4), -K3(e7, Y4), -K3(e7, W3));
  }
  function ri(e7, t, r) {
    return be(r, _e(t, e7));
  }
  function ni(e7, t, r) {
    const n4 = ri(t, 1, 12);
    return { year: e7, month: n4, day: ri(r, 1, Fn(e7, n4)) };
  }
  function ii(e7, t, r) {
    if (e7 < t || e7 > r)
      throw new RangeError(`value out of range: ${t} <= ${e7} <= ${r}`);
  }
  function oi(e7, t, r) {
    ii(t, 1, 12), ii(r, 1, Fn(e7, t));
  }
  function ai(e7, t, r) {
    ui(e7, t, r, 12, 0, 0, 0, 0, 0);
  }
  function si(e7, t, r, n4, i4, o4) {
    ii(e7, 0, 23), ii(t, 0, 59), ii(r, 0, 59), ii(n4, 0, 999), ii(i4, 0, 999), ii(o4, 0, 999);
  }
  function li(e7, t, r, n4, i4, o4, a4, s3, l6) {
    oi(e7, t, r), si(n4, i4, o4, a4, s3, l6);
  }
  function ui(e7, t, r, n4, i4, o4, a4, s3, l6) {
    if (ii(e7, Je, Ve), e7 === Je && null == On(e7, t, r + 1, n4, i4, o4, a4, s3, l6 - 1) || e7 === Ve && null == On(e7, t, r - 1, n4, i4, o4, a4, s3, l6 + 1))
      throw new RangeError("DateTime outside of supported range");
  }
  function ci(e7) {
    if (d3.lessThan(e7, Ge) || d3.greaterThan(e7, He))
      throw new RangeError("Instant outside of supported range");
  }
  function di(e7, t, r, n4, i4, o4, a4, s3, l6, u4) {
    const c3 = Wn(e7, t, r, n4, i4, o4, a4, s3, l6, u4);
    for (const d5 of [e7, t, r, n4, i4, o4, a4, s3, l6, u4]) {
      if (!Re(d5))
        throw new RangeError("infinite values not allowed as duration fields");
      const e8 = xe(d5);
      if (0 !== e8 && e8 !== c3)
        throw new RangeError("mixed-sign values not allowed as duration fields");
    }
  }
  function hi(e7, t, r, n4, i4, o4, a4) {
    switch (a4) {
      case "year":
      case "month": {
        const s3 = -zi(e7, t, r, n4, i4, o4);
        if (0 === s3)
          return { years: 0, months: 0, weeks: 0, days: 0 };
        const l6 = { year: e7, month: t, day: r }, u4 = { year: n4, month: i4, day: o4 };
        let c3 = u4.year - l6.year, d5 = xi(e7, t, r, c3, 0, 0, 0, "constrain"), h6 = -zi(d5.year, d5.month, d5.day, n4, i4, o4);
        if (0 === h6)
          return "year" === a4 ? { years: c3, months: 0, weeks: 0, days: 0 } : { years: 0, months: 12 * c3, weeks: 0, days: 0 };
        let f5 = u4.month - l6.month;
        if (h6 !== s3 && (c3 -= s3, f5 += 12 * s3), d5 = xi(e7, t, r, c3, f5, 0, 0, "constrain"), h6 = -zi(d5.year, d5.month, d5.day, n4, i4, o4), 0 === h6)
          return "year" === a4 ? { years: c3, months: f5, weeks: 0, days: 0 } : { years: 0, months: f5 + 12 * c3, weeks: 0, days: 0 };
        h6 !== s3 && (f5 -= s3, f5 === -s3 && (c3 -= s3, f5 = 11 * s3), d5 = xi(e7, t, r, c3, f5, 0, 0, "constrain"));
        let p6 = 0;
        return p6 = d5.month === u4.month ? u4.day - d5.day : s3 < 0 ? -d5.day - (Fn(u4.year, u4.month) - u4.day) : u4.day + (Fn(d5.year, d5.month) - d5.day), "month" === a4 && (f5 += 12 * c3, c3 = 0), { years: c3, months: f5, weeks: 0, days: p6 };
      }
      case "week":
      case "day": {
        let s3, l6, u4;
        zi(e7, t, r, n4, i4, o4) < 0 ? (l6 = { year: e7, month: t, day: r }, s3 = { year: n4, month: i4, day: o4 }, u4 = 1) : (l6 = { year: n4, month: i4, day: o4 }, s3 = { year: e7, month: t, day: r }, u4 = -1);
        let c3 = qn(s3.year, s3.month, s3.day) - qn(l6.year, l6.month, l6.day);
        for (let e8 = l6.year; e8 < s3.year; ++e8)
          c3 += $n(e8) ? 366 : 365;
        let d5 = 0;
        return "week" === a4 && (d5 = Te(c3 / 7), c3 %= 7), d5 *= u4, c3 *= u4, { years: 0, months: 0, weeks: d5, days: c3 };
      }
      default:
        throw new Error("assert not reached");
    }
  }
  function fi(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, d5) {
    let h6 = a4 - e7, f5 = s3 - t, p6 = l6 - r, m5 = u4 - n4, y5 = c3 - i4, g5 = d5 - o4;
    const v6 = Wn(0, 0, 0, 0, h6, f5, p6, m5, y5, g5);
    h6 *= v6, f5 *= v6, p6 *= v6, m5 *= v6, y5 *= v6, g5 *= v6;
    let w5 = 0;
    if ({ deltaDays: w5, hour: h6, minute: f5, second: p6, millisecond: m5, microsecond: y5, nanosecond: g5 } = Jn(h6, f5, p6, m5, y5, g5), 0 != w5)
      throw new Error("assertion failure in DifferenceTime: _bt_.[[Days]] should be 0");
    return h6 *= v6, f5 *= v6, p6 *= v6, m5 *= v6, y5 *= v6, g5 *= v6, { hours: h6, minutes: f5, seconds: p6, milliseconds: m5, microseconds: y5, nanoseconds: g5 };
  }
  function pi(e7, t, r, n4, i4, o4) {
    const a4 = d3.subtract(t, e7);
    let s3 = 0, l6 = 0, u4 = d3.toNumber(d3.remainder(a4, $e)), c3 = d3.toNumber(d3.remainder(d3.divide(a4, $e), $e)), h6 = d3.toNumber(d3.remainder(d3.divide(a4, Fe), $e)), f5 = d3.toNumber(d3.divide(a4, Ue));
    return { hours: s3, minutes: l6, seconds: f5, milliseconds: h6, microseconds: c3, nanoseconds: u4 } = Wi(0, 0, 0, 0, 0, 0, f5, h6, c3, u4, r, n4, o4), Zn(0, s3, l6, f5, h6, c3, u4, i4);
  }
  function mi(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, d5, h6, f5, p6, m5, y5, g5, v6, w5, b7) {
    let _5 = e7, E4 = t, T6 = r, { hours: x6, minutes: I5, seconds: S6, milliseconds: R5, microseconds: k5, nanoseconds: j5 } = fi(n4, i4, o4, a4, s3, l6, h6, f5, p6, m5, y5, g5);
    const D4 = Wn(0, 0, 0, 0, x6, I5, S6, R5, k5, j5);
    zi(u4, c3, d5, _5, E4, T6) === -D4 && ({ year: _5, month: E4, day: T6 } = Gn(_5, E4, T6 - D4), { hours: x6, minutes: I5, seconds: S6, milliseconds: R5, microseconds: k5, nanoseconds: j5 } = Zn(-D4, x6, I5, S6, R5, k5, j5, w5));
    const N10 = wr(_5, E4, T6, v6), O3 = wr(u4, c3, d5, v6), C5 = or("day", w5), A5 = ro(b7);
    A5.largestUnit = C5;
    let { years: M6, months: L4, weeks: P5, days: B6 } = Nr(v6, N10, O3, A5);
    return { days: B6, hours: x6, minutes: I5, seconds: S6, milliseconds: R5, microseconds: k5, nanoseconds: j5 } = Zn(B6, x6, I5, S6, R5, k5, j5, w5), { years: M6, months: L4, weeks: P5, days: B6, hours: x6, minutes: I5, seconds: S6, milliseconds: R5, microseconds: k5, nanoseconds: j5 };
  }
  function yi(e7, t, r, n4, i4, o4) {
    const a4 = d3.subtract(t, e7);
    if (d3.equal(a4, Me))
      return { years: 0, months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0, milliseconds: 0, microseconds: 0, nanoseconds: 0 };
    const s3 = m4("%Temporal.Instant%"), l6 = new s3(e7), u4 = new s3(t), c3 = hn(r, l6, n4), h6 = hn(r, u4, n4);
    let { years: f5, months: p6, weeks: y5, days: g5 } = mi(K3(c3, b4), K3(c3, _4), K3(c3, E2), K3(c3, T4), K3(c3, x4), K3(c3, I3), K3(c3, S4), K3(c3, R4), K3(c3, k4), K3(h6, b4), K3(h6, _4), K3(h6, E2), K3(h6, T4), K3(h6, x4), K3(h6, I3), K3(h6, S4), K3(h6, R4), K3(h6, k4), n4, i4, o4);
    const v6 = ji(l6, r, n4, f5, p6, y5, 0, 0, 0, 0, 0, 0, 0);
    let w5 = d3.subtract(t, v6);
    const j5 = Rr(v6, r, n4);
    ({ nanoseconds: w5, days: g5 } = Qn(w5, j5));
    const { hours: D4, minutes: N10, seconds: O3, milliseconds: C5, microseconds: A5, nanoseconds: M6 } = Zn(0, 0, 0, 0, 0, 0, d3.toNumber(w5), "hour");
    return { years: f5, months: p6, weeks: y5, days: g5, hours: D4, minutes: N10, seconds: O3, milliseconds: C5, microseconds: A5, nanoseconds: M6 };
  }
  function gi(e7, t, r, n4, i4, o4) {
    const a4 = vt2.reduce((e8, t2) => {
      const i5 = t2[0], o5 = t2[1], a5 = t2[2];
      return "datetime" !== r && a5 !== r || n4.includes(o5) || e8.push(o5, i5), e8;
    }, []);
    let s3 = rr(t, "largestUnit", r, "auto");
    if (n4.includes(s3))
      throw new RangeError(`largestUnit must be one of ${a4.join(", ")}, not ${s3}`);
    const l6 = Zt(t);
    let u4 = Jt2(t, "trunc");
    "since" === e7 && (u4 = function(e8) {
      switch (e8) {
        case "ceil":
          return "floor";
        case "floor":
          return "ceil";
        case "halfCeil":
          return "halfFloor";
        case "halfFloor":
          return "halfCeil";
        default:
          return e8;
      }
    }(u4));
    const c3 = rr(t, "smallestUnit", r, i4);
    if (n4.includes(c3))
      throw new RangeError(`smallestUnit must be one of ${a4.join(", ")}, not ${c3}`);
    const d5 = or(o4, c3);
    if ("auto" === s3 && (s3 = d5), or(s3, c3) !== s3)
      throw new RangeError(`largestUnit ${s3} cannot be smaller than smallestUnit ${c3}`);
    const h6 = { hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[c3];
    return void 0 !== h6 && Kt2(l6, h6, false), { largestUnit: s3, roundingIncrement: l6, roundingMode: u4, smallestUnit: c3 };
  }
  function vi(e7, t, r, n4) {
    const i4 = "since" === e7 ? -1 : 1, o4 = hr(r), a4 = gi(e7, ro(n4), "time", [], "nanosecond", "second"), s3 = K3(t, v4), l6 = K3(o4, v4);
    let { hours: u4, minutes: c3, seconds: d5, milliseconds: h6, microseconds: f5, nanoseconds: p6 } = pi(s3, l6, a4.roundingIncrement, a4.smallestUnit, a4.largestUnit, a4.roundingMode);
    return new (m4("%Temporal.Duration%"))(0, 0, 0, 0, i4 * u4, i4 * c3, i4 * d5, i4 * h6, i4 * f5, i4 * p6);
  }
  function wi(e7, t, r, n4) {
    const i4 = "since" === e7 ? -1 : 1, o4 = lr(r), a4 = K3(t, j4);
    Kr(a4, K3(o4, j4), "compute difference between dates");
    const s3 = ro(n4), l6 = gi(e7, s3, "date", [], "day", "day");
    s3.largestUnit = l6.largestUnit;
    let { years: u4, months: c3, weeks: d5, days: h6 } = Nr(a4, t, o4, s3);
    return "day" === l6.smallestUnit && 1 === l6.roundingIncrement || ({ years: u4, months: c3, weeks: d5, days: h6 } = Wi(u4, c3, d5, h6, 0, 0, 0, 0, 0, 0, l6.roundingIncrement, l6.smallestUnit, l6.roundingMode, t)), new (m4("%Temporal.Duration%"))(i4 * u4, i4 * c3, i4 * d5, i4 * h6, 0, 0, 0, 0, 0, 0);
  }
  function bi(e7, t, r, n4) {
    const i4 = "since" === e7 ? -1 : 1, o4 = cr(r), a4 = K3(t, j4);
    Kr(a4, K3(o4, j4), "compute difference between dates");
    const s3 = ro(n4), l6 = gi(e7, s3, "datetime", [], "nanosecond", "day");
    let { years: u4, months: c3, weeks: d5, days: h6, hours: f5, minutes: p6, seconds: y5, milliseconds: g5, microseconds: v6, nanoseconds: w5 } = mi(K3(t, b4), K3(t, _4), K3(t, E2), K3(t, T4), K3(t, x4), K3(t, I3), K3(t, S4), K3(t, R4), K3(t, k4), K3(o4, b4), K3(o4, _4), K3(o4, E2), K3(o4, T4), K3(o4, x4), K3(o4, I3), K3(o4, S4), K3(o4, R4), K3(o4, k4), a4, l6.largestUnit, s3);
    const D4 = ln(t);
    return { years: u4, months: c3, weeks: d5, days: h6, hours: f5, minutes: p6, seconds: y5, milliseconds: g5, microseconds: v6, nanoseconds: w5 } = Wi(u4, c3, d5, h6, f5, p6, y5, g5, v6, w5, l6.roundingIncrement, l6.smallestUnit, l6.roundingMode, D4), { days: h6, hours: f5, minutes: p6, seconds: y5, milliseconds: g5, microseconds: v6, nanoseconds: w5 } = Zn(h6, f5, p6, y5, g5, v6, w5, l6.largestUnit), new (m4("%Temporal.Duration%"))(i4 * u4, i4 * c3, i4 * d5, i4 * h6, i4 * f5, i4 * p6, i4 * y5, i4 * g5, i4 * v6, i4 * w5);
  }
  function _i(e7, t, r, n4) {
    const i4 = "since" === e7 ? -1 : 1, o4 = pr(r), a4 = gi(e7, ro(n4), "time", [], "nanosecond", "hour");
    let { hours: s3, minutes: l6, seconds: u4, milliseconds: c3, microseconds: d5, nanoseconds: h6 } = fi(K3(t, T4), K3(t, x4), K3(t, I3), K3(t, S4), K3(t, R4), K3(t, k4), K3(o4, T4), K3(o4, x4), K3(o4, I3), K3(o4, S4), K3(o4, R4), K3(o4, k4));
    return { hours: s3, minutes: l6, seconds: u4, milliseconds: c3, microseconds: d5, nanoseconds: h6 } = Wi(0, 0, 0, 0, s3, l6, u4, c3, d5, h6, a4.roundingIncrement, a4.smallestUnit, a4.roundingMode), { hours: s3, minutes: l6, seconds: u4, milliseconds: c3, microseconds: d5, nanoseconds: h6 } = Zn(0, s3, l6, u4, c3, d5, h6, a4.largestUnit), new (m4("%Temporal.Duration%"))(0, 0, 0, 0, i4 * s3, i4 * l6, i4 * u4, i4 * c3, i4 * d5, i4 * h6);
  }
  function Ei(e7, t, r, n4) {
    const i4 = "since" === e7 ? -1 : 1, o4 = mr(r), a4 = K3(t, j4);
    Kr(a4, K3(o4, j4), "compute difference between months");
    const s3 = ro(n4), l6 = gi(e7, s3, "date", ["week", "day"], "month", "year");
    s3.largestUnit = l6.largestUnit;
    const u4 = kr(a4, ["monthCode", "year"]), c3 = ar(t, u4, []);
    c3.day = 1;
    const d5 = en(a4, c3), h6 = ar(o4, u4, []);
    h6.day = 1;
    const f5 = en(a4, h6);
    let { years: p6, months: y5 } = Nr(a4, d5, f5, s3);
    return "month" === l6.smallestUnit && 1 === l6.roundingIncrement || ({ years: p6, months: y5 } = Wi(p6, y5, 0, 0, 0, 0, 0, 0, 0, 0, l6.roundingIncrement, l6.smallestUnit, l6.roundingMode, d5)), new (m4("%Temporal.Duration%"))(i4 * p6, i4 * y5, 0, 0, 0, 0, 0, 0, 0, 0);
  }
  function Ti(e7, t, r, n4) {
    const i4 = "since" === e7 ? -1 : 1, o4 = gr(r), a4 = K3(t, j4);
    Kr(a4, K3(o4, j4), "compute difference between dates");
    const s3 = ro(n4), l6 = gi(e7, s3, "datetime", [], "nanosecond", "hour");
    s3.largestUnit = l6.largestUnit;
    const u4 = K3(t, v4), c3 = K3(o4, v4);
    let d5, h6, f5, p6, y5, g5, w5, b7, _5, E4;
    if ("year" !== l6.largestUnit && "month" !== l6.largestUnit && "week" !== l6.largestUnit && "day" !== l6.largestUnit)
      d5 = 0, h6 = 0, f5 = 0, p6 = 0, { hours: y5, minutes: g5, seconds: w5, milliseconds: b7, microseconds: _5, nanoseconds: E4 } = pi(u4, c3, l6.roundingIncrement, l6.smallestUnit, l6.largestUnit, l6.roundingMode);
    else {
      const e8 = K3(t, A3);
      if (!sn(e8, K3(o4, A3)))
        throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");
      ({ years: d5, months: h6, weeks: f5, days: p6, hours: y5, minutes: g5, seconds: w5, milliseconds: b7, microseconds: _5, nanoseconds: E4 } = yi(u4, c3, e8, a4, l6.largestUnit, s3)), { years: d5, months: h6, weeks: f5, days: p6, hours: y5, minutes: g5, seconds: w5, milliseconds: b7, microseconds: _5, nanoseconds: E4 } = Wi(d5, h6, f5, p6, y5, g5, w5, b7, _5, E4, l6.roundingIncrement, l6.smallestUnit, l6.roundingMode, t), { years: d5, months: h6, weeks: f5, days: p6, hours: y5, minutes: g5, seconds: w5, milliseconds: b7, microseconds: _5, nanoseconds: E4 } = Yi(d5, h6, f5, p6, y5, g5, w5, b7, _5, E4, l6.roundingIncrement, l6.smallestUnit, l6.roundingMode, t);
    }
    return new (m4("%Temporal.Duration%"))(i4 * d5, i4 * h6, i4 * f5, i4 * p6, i4 * y5, i4 * g5, i4 * w5, i4 * b7, i4 * _5, i4 * E4);
  }
  function xi(e7, t, r, n4, i4, o4, a4, s3) {
    let l6 = e7, u4 = t, c3 = r, d5 = o4, h6 = a4;
    return l6 += n4, u4 += i4, { year: l6, month: u4 } = zn(l6, u4), { year: l6, month: u4, day: c3 } = Yt(l6, u4, c3, s3), h6 += 7 * d5, c3 += h6, { year: l6, month: u4, day: c3 } = Gn(l6, u4, c3), { year: l6, month: u4, day: c3 };
  }
  function Ii(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, d5) {
    let h6 = e7, f5 = t, p6 = r, m5 = n4, y5 = i4, g5 = o4;
    h6 += a4, f5 += s3, p6 += l6, m5 += u4, y5 += c3, g5 += d5;
    let v6 = 0;
    return { deltaDays: v6, hour: h6, minute: f5, second: p6, millisecond: m5, microsecond: y5, nanosecond: g5 } = Jn(h6, f5, p6, m5, y5, g5), { deltaDays: v6, hour: h6, minute: f5, second: p6, millisecond: m5, microsecond: y5, nanosecond: g5 };
  }
  function Si(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, h6, f5, p6, y5, g5, w5, b7, _5, E4, T6) {
    const x6 = or(ir(e7, t, r, n4, i4, o4, a4, s3, l6, u4), ir(c3, h6, f5, p6, y5, g5, w5, b7, _5, E4));
    let I5, S6, R5, k5, D4, N10, O3, M6, L4, P5;
    if (T6)
      if (Nt2(T6)) {
        const v6 = m4("%Temporal.Duration%"), C5 = K3(T6, j4), A5 = new v6(e7, t, r, n4, 0, 0, 0, 0, 0, 0), B6 = new v6(c3, h6, f5, p6, 0, 0, 0, 0, 0, 0), $4 = "string" != typeof C5 ? rt3(C5, "dateAdd") : void 0, F4 = Dr(C5, T6, A5, void 0, $4), U6 = Dr(C5, F4, B6, void 0, $4), q5 = or("day", x6), Y5 = Ne(null);
        Y5.largestUnit = q5, { years: I5, months: S6, weeks: R5, days: k5 } = Nr(C5, T6, U6, Y5), { days: k5, hours: D4, minutes: N10, seconds: O3, milliseconds: M6, microseconds: L4, nanoseconds: P5 } = Zn(k5, d3.add(d3.BigInt(i4), d3.BigInt(y5)), d3.add(d3.BigInt(o4), d3.BigInt(g5)), d3.add(d3.BigInt(a4), d3.BigInt(w5)), d3.add(d3.BigInt(s3), d3.BigInt(b7)), d3.add(d3.BigInt(l6), d3.BigInt(_5)), d3.add(d3.BigInt(u4), d3.BigInt(E4)), x6);
      } else {
        const d5 = m4("%Temporal.Instant%"), B6 = K3(T6, A3), $4 = K3(T6, j4), F4 = ji(K3(T6, C3), B6, $4, e7, t, r, n4, i4, o4, a4, s3, l6, u4), U6 = ji(new d5(F4), B6, $4, c3, h6, f5, p6, y5, g5, w5, b7, _5, E4);
        "year" !== x6 && "month" !== x6 && "week" !== x6 && "day" !== x6 ? (I5 = 0, S6 = 0, R5 = 0, k5 = 0, { hours: D4, minutes: N10, seconds: O3, milliseconds: M6, microseconds: L4, nanoseconds: P5 } = pi(K3(T6, v4), U6, 1, "nanosecond", x6, "halfExpand")) : { years: I5, months: S6, weeks: R5, days: k5, hours: D4, minutes: N10, seconds: O3, milliseconds: M6, microseconds: L4, nanoseconds: P5 } = yi(K3(T6, v4), U6, B6, $4, x6, Ne(null));
      }
    else {
      if ("year" === x6 || "month" === x6 || "week" === x6)
        throw new RangeError("relativeTo is required for years, months, or weeks arithmetic");
      I5 = S6 = R5 = 0, { days: k5, hours: D4, minutes: N10, seconds: O3, milliseconds: M6, microseconds: L4, nanoseconds: P5 } = Zn(n4 + p6, d3.add(d3.BigInt(i4), d3.BigInt(y5)), d3.add(d3.BigInt(o4), d3.BigInt(g5)), d3.add(d3.BigInt(a4), d3.BigInt(w5)), d3.add(d3.BigInt(s3), d3.BigInt(b7)), d3.add(d3.BigInt(l6), d3.BigInt(_5)), d3.add(d3.BigInt(u4), d3.BigInt(E4)), x6);
    }
    return di(I5, S6, R5, k5, D4, N10, O3, M6, L4, P5), { years: I5, months: S6, weeks: R5, days: k5, hours: D4, minutes: N10, seconds: O3, milliseconds: M6, microseconds: L4, nanoseconds: P5 };
  }
  function Ri(e7, t, r, n4, i4, o4, a4) {
    let s3 = Me;
    s3 = d3.add(s3, d3.BigInt(a4)), s3 = d3.add(s3, d3.multiply(d3.BigInt(o4), $e)), s3 = d3.add(s3, d3.multiply(d3.BigInt(i4), Fe)), s3 = d3.add(s3, d3.multiply(d3.BigInt(n4), Ue)), s3 = d3.add(s3, d3.multiply(d3.BigInt(r), d3.BigInt(6e10))), s3 = d3.add(s3, d3.multiply(d3.BigInt(t), d3.BigInt(36e11)));
    const l6 = d3.add(e7, s3);
    return ci(l6), l6;
  }
  function ki(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, d5, h6, f5, p6, y5, g5, v6, w5, T6, x6) {
    let I5 = f5, { deltaDays: S6, hour: R5, minute: k5, second: j5, millisecond: D4, microsecond: N10, nanosecond: O3 } = Ii(n4, i4, o4, a4, s3, l6, p6, y5, g5, v6, w5, T6);
    I5 += S6;
    const C5 = m4("%Temporal.Duration%"), A5 = Dr(u4, wr(e7, t, r, u4), new C5(c3, d5, h6, I5, 0, 0, 0, 0, 0, 0), x6);
    return { year: K3(A5, b4), month: K3(A5, _4), day: K3(A5, E2), hour: R5, minute: k5, second: j5, millisecond: D4, microsecond: N10, nanosecond: O3 };
  }
  function ji(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, d5, h6, f5) {
    const p6 = m4("%Temporal.Duration%");
    if (0 === Wn(n4, i4, o4, a4, 0, 0, 0, 0, 0, 0))
      return Ri(K3(e7, v4), s3, l6, u4, c3, d5, h6);
    const y5 = hn(t, e7, r), g5 = Dr(r, wr(K3(y5, b4), K3(y5, _4), K3(y5, E2), r), new p6(n4, i4, o4, a4, 0, 0, 0, 0, 0, 0), f5), w5 = _r(K3(g5, b4), K3(g5, _4), K3(g5, E2), K3(y5, T4), K3(y5, x4), K3(y5, I3), K3(y5, S4), K3(y5, R4), K3(y5, k4), r);
    return Ri(K3(fn(t, w5, "compatible"), v4), s3, l6, u4, c3, d5, h6);
  }
  function Di(e7, t, r, n4) {
    const i4 = "subtract" === e7 ? -1 : 1;
    let { years: o4, months: a4, weeks: s3, days: l6, hours: u4, minutes: c3, seconds: d5, milliseconds: h6, microseconds: f5, nanoseconds: p6 } = zt(r);
    const y5 = nr(eo(n4));
    return { years: o4, months: a4, weeks: s3, days: l6, hours: u4, minutes: c3, seconds: d5, milliseconds: h6, microseconds: f5, nanoseconds: p6 } = Si(K3(t, M4), K3(t, L3), K3(t, P4), K3(t, B4), K3(t, $3), K3(t, F3), K3(t, U5), K3(t, q4), K3(t, Y4), K3(t, W3), i4 * o4, i4 * a4, i4 * s3, i4 * l6, i4 * u4, i4 * c3, i4 * d5, i4 * h6, i4 * f5, i4 * p6, y5), new (m4("%Temporal.Duration%"))(o4, a4, s3, l6, u4, c3, d5, h6, f5, p6);
  }
  function Ni(e7, t, r) {
    const n4 = "subtract" === e7 ? -1 : 1, { hours: i4, minutes: o4, seconds: a4, milliseconds: s3, microseconds: l6, nanoseconds: u4 } = function(e8, t2) {
      let r2 = zt(e8);
      for (const e9 of t2)
        if (0 !== r2[e9])
          throw new RangeError(`Duration field ${e9} not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead.`);
      return r2;
    }(r, ["years", "months", "weeks", "days"]), c3 = Ri(K3(t, v4), n4 * i4, n4 * o4, n4 * a4, n4 * s3, n4 * l6, n4 * u4);
    return new (m4("%Temporal.Instant%"))(c3);
  }
  function Oi(e7, t, r, n4) {
    const i4 = "subtract" === e7 ? -1 : 1, { years: o4, months: a4, weeks: s3, days: l6, hours: u4, minutes: c3, seconds: d5, milliseconds: h6, microseconds: f5, nanoseconds: p6 } = zt(r), m5 = eo(n4), y5 = K3(t, j4), { year: g5, month: v6, day: w5, hour: D4, minute: N10, second: O3, millisecond: C5, microsecond: A5, nanosecond: M6 } = ki(K3(t, b4), K3(t, _4), K3(t, E2), K3(t, T4), K3(t, x4), K3(t, I3), K3(t, S4), K3(t, R4), K3(t, k4), y5, i4 * o4, i4 * a4, i4 * s3, i4 * l6, i4 * u4, i4 * c3, i4 * d5, i4 * h6, i4 * f5, i4 * p6, m5);
    return _r(g5, v6, w5, D4, N10, O3, C5, A5, M6, y5);
  }
  function Ci(e7, t, r) {
    const n4 = "subtract" === e7 ? -1 : 1, { hours: i4, minutes: o4, seconds: a4, milliseconds: s3, microseconds: l6, nanoseconds: u4 } = zt(r);
    let { hour: c3, minute: d5, second: h6, millisecond: f5, microsecond: p6, nanosecond: y5 } = Ii(K3(t, T4), K3(t, x4), K3(t, I3), K3(t, S4), K3(t, R4), K3(t, k4), n4 * i4, n4 * o4, n4 * a4, n4 * s3, n4 * l6, n4 * u4);
    return { hour: c3, minute: d5, second: h6, millisecond: f5, microsecond: p6, nanosecond: y5 } = Wt2(c3, d5, h6, f5, p6, y5, "reject"), new (m4("%Temporal.PlainTime%"))(c3, d5, h6, f5, p6, y5);
  }
  function Ai(e7, t, r, n4) {
    let i4 = zt(r);
    "subtract" === e7 && (i4 = { years: -i4.years, months: -i4.months, weeks: -i4.weeks, days: -i4.days, hours: -i4.hours, minutes: -i4.minutes, seconds: -i4.seconds, milliseconds: -i4.milliseconds, microseconds: -i4.microseconds, nanoseconds: -i4.nanoseconds });
    let { years: o4, months: a4, weeks: s3, days: l6, hours: u4, minutes: c3, seconds: d5, milliseconds: h6, microseconds: f5, nanoseconds: p6 } = i4;
    ({ days: l6 } = Zn(l6, u4, c3, d5, h6, f5, p6, "day"));
    const y5 = eo(n4), g5 = K3(t, j4), v6 = kr(g5, ["monthCode", "year"]), w5 = ar(t, v6, []), b7 = Ne(null);
    St2(b7, w5, []), w5.day = 1;
    let _5 = en(g5, w5);
    const E4 = Wn(o4, a4, s3, l6, 0, 0, 0, 0, 0, 0), T6 = rt3(g5, "dateAdd"), x6 = m4("%Temporal.Duration%");
    if (E4 < 0) {
      const e8 = Dr(g5, _5, new x6(0, 1, 0, 0, 0, 0, 0, 0, 0, 0), void 0, T6), t2 = Dr(g5, e8, new x6(0, 0, 0, -1, 0, 0, 0, 0, 0, 0), void 0, T6);
      b7.day = Mr(g5, t2), _5 = en(g5, b7);
    }
    const I5 = new x6(o4, a4, s3, l6, 0, 0, 0, 0, 0, 0), S6 = ro(y5);
    return tn(g5, ar(Dr(g5, _5, I5, y5, T6), v6, []), S6);
  }
  function Mi(e7, t, r, n4) {
    const i4 = "subtract" === e7 ? -1 : 1, { years: o4, months: a4, weeks: s3, days: l6, hours: u4, minutes: c3, seconds: d5, milliseconds: h6, microseconds: f5, nanoseconds: p6 } = zt(r), m5 = eo(n4), y5 = K3(t, A3), g5 = K3(t, j4);
    return Rr(ji(K3(t, C3), y5, g5, i4 * o4, i4 * a4, i4 * s3, i4 * l6, i4 * u4, i4 * c3, i4 * d5, i4 * h6, i4 * f5, i4 * p6, m5), y5, g5);
  }
  function Li(e7, t, r) {
    if (d3.equal(t, Le))
      return e7;
    let { quotient: n4, remainder: i4 } = ht2(e7, t);
    if (d3.equal(i4, Me))
      return e7;
    const o4 = d3.lessThan(i4, Me) ? -1 : 1, a4 = mt2(d3.multiply(i4, d3.BigInt(2))), s3 = d3.equal(a4, t), l6 = d3.greaterThan(a4, t);
    switch (r) {
      case "ceil":
        o4 > 0 && (n4 = d3.add(n4, d3.BigInt(o4)));
        break;
      case "floor":
        o4 < 0 && (n4 = d3.add(n4, d3.BigInt(o4)));
        break;
      case "expand":
        n4 = d3.add(n4, d3.BigInt(o4));
        break;
      case "trunc":
        break;
      case "halfCeil":
        (l6 || s3 && o4 > 0) && (n4 = d3.add(n4, d3.BigInt(o4)));
        break;
      case "halfFloor":
        (l6 || s3 && o4 < 0) && (n4 = d3.add(n4, d3.BigInt(o4)));
        break;
      case "halfExpand":
        (l6 || s3) && (n4 = d3.add(n4, d3.BigInt(o4)));
        break;
      case "halfTrunc":
        l6 && (n4 = d3.add(n4, d3.BigInt(o4)));
        break;
      case "halfEven":
        (l6 || s3 && 1 === d3.toNumber(d3.remainder(mt2(n4), d3.BigInt(2)))) && (n4 = d3.add(n4, d3.BigInt(o4)));
    }
    return d3.multiply(n4, t);
  }
  function Pi(e7, t, r, n4) {
    let { remainder: i4 } = Gi(e7, ze);
    const o4 = d3.subtract(e7, i4), a4 = Li(i4, d3.BigInt(lo[r] * t), n4);
    return d3.add(o4, a4);
  }
  function Bi(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, d5, h6 = 864e11) {
    const { deltaDays: f5, hour: p6, minute: m5, second: y5, millisecond: g5, microsecond: v6, nanosecond: w5 } = $i(n4, i4, o4, a4, s3, l6, u4, c3, d5, h6), { year: b7, month: _5, day: E4 } = Gn(e7, t, r + f5);
    return { year: b7, month: _5, day: E4, hour: p6, minute: m5, second: y5, millisecond: g5, microsecond: v6, nanosecond: w5 };
  }
  function $i(e7, t, r, n4, i4, o4, a4, s3, l6, u4 = 864e11) {
    let c3 = Me;
    switch (s3) {
      case "day":
      case "hour":
        c3 = d3.BigInt(e7);
      case "minute":
        c3 = d3.add(d3.multiply(c3, Pe), d3.BigInt(t));
      case "second":
        c3 = d3.add(d3.multiply(c3, Pe), d3.BigInt(r));
      case "millisecond":
        c3 = d3.add(d3.multiply(c3, $e), d3.BigInt(n4));
      case "microsecond":
        c3 = d3.add(d3.multiply(c3, $e), d3.BigInt(i4));
      case "nanosecond":
        c3 = d3.add(d3.multiply(c3, $e), d3.BigInt(o4));
    }
    const h6 = "day" === s3 ? u4 : lo[s3], f5 = Li(c3, d3.BigInt(h6 * a4), l6), p6 = d3.toNumber(d3.divide(f5, d3.BigInt(h6)));
    switch (s3) {
      case "day":
        return { deltaDays: p6, hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 };
      case "hour":
        return Jn(p6, 0, 0, 0, 0, 0);
      case "minute":
        return Jn(e7, p6, 0, 0, 0, 0);
      case "second":
        return Jn(e7, t, p6, 0, 0, 0);
      case "millisecond":
        return Jn(e7, t, r, p6, 0, 0);
      case "microsecond":
        return Jn(e7, t, r, n4, p6, 0);
      case "nanosecond":
        return Jn(e7, t, r, n4, i4, p6);
      default:
        throw new Error(`Invalid unit ${s3}`);
    }
  }
  function Fi(e7, t) {
    return hi(K3(e7, b4), K3(e7, _4), K3(e7, E2), K3(t, b4), K3(t, _4), K3(t, E2), "day").days;
  }
  function Ui(e7, t, r, n4) {
    const i4 = Dr(e7, t, r, void 0, n4);
    return { relativeTo: i4, days: Fi(t, i4) };
  }
  function qi(e7, t, r, n4, i4) {
    const o4 = K3(e7, A3), a4 = K3(e7, j4);
    return Rr(ji(K3(e7, C3), o4, a4, t, r, n4, i4, 0, 0, 0, 0, 0, 0), o4, a4);
  }
  function Yi(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, h6, f5, p6) {
    let y5 = e7, g5 = t, v6 = r, w5 = n4, b7 = i4, _5 = o4, E4 = a4, T6 = s3, x6 = l6, I5 = u4;
    if (!Lt2(p6) || "year" === h6 || "month" === h6 || "week" === h6 || "day" === h6 || "nanosecond" === h6 && 1 === c3)
      return { years: y5, months: g5, weeks: v6, days: w5, hours: b7, minutes: _5, seconds: E4, milliseconds: T6, microseconds: x6, nanoseconds: I5 };
    let S6 = Vn(0, b7, _5, E4, T6, x6, I5, 0);
    const R5 = xe(d3.toNumber(S6)), k5 = K3(p6, A3), D4 = K3(p6, j4), N10 = ji(K3(p6, C3), k5, D4, y5, g5, v6, w5, 0, 0, 0, 0, 0, 0), O3 = ji(new (m4("%Temporal.Instant%"))(N10), k5, D4, 0, 0, 0, R5, 0, 0, 0, 0, 0, 0), M6 = d3.subtract(O3, N10);
    return d3.greaterThanOrEqual(d3.multiply(d3.subtract(S6, M6), d3.BigInt(R5)), Me) && ({ years: y5, months: g5, weeks: v6, days: w5 } = Si(y5, g5, v6, w5, 0, 0, 0, 0, 0, 0, 0, 0, 0, R5, 0, 0, 0, 0, 0, 0, p6), S6 = Pi(d3.subtract(S6, M6), c3, h6, f5), { hours: b7, minutes: _5, seconds: E4, milliseconds: T6, microseconds: x6, nanoseconds: I5 } = Zn(0, 0, 0, 0, 0, 0, d3.toNumber(S6), "hour")), { years: y5, months: g5, weeks: v6, days: w5, hours: b7, minutes: _5, seconds: E4, milliseconds: T6, microseconds: x6, nanoseconds: I5 };
  }
  function Wi(e7, t, r, n4, i4, o4, a4, s3, l6, u4, c3, h6, f5, p6) {
    let y5 = e7, g5 = t, v6 = r, w5 = n4, b7 = i4, _5 = o4, E4 = a4, T6 = s3, x6 = l6, I5 = d3.BigInt(u4);
    const S6 = m4("%Temporal.Duration%");
    let R5, k5, D4, N10, O3 = p6;
    if (O3) {
      if (Lt2(O3))
        k5 = O3, O3 = lr(O3);
      else if (!Nt2(O3))
        throw new TypeError("starting point must be PlainDate or ZonedDateTime");
      R5 = K3(O3, j4);
    }
    if ("year" === h6 || "month" === h6 || "week" === h6 || "day" === h6) {
      let e8, t2, r2;
      I5 = Vn(0, b7, _5, E4, T6, x6, u4, 0), k5 && (e8 = qi(k5, y5, g5, v6, w5)), { days: t2, nanoseconds: I5, dayLengthNs: r2 } = Qn(I5, e8), D4 = d3.BigInt(r2), w5 += t2, b7 = _5 = E4 = T6 = x6 = 0;
    }
    switch (h6) {
      case "year": {
        if (!R5)
          throw new RangeError("A starting point is required for years rounding");
        const e8 = new S6(y5), t2 = "string" != typeof R5 ? rt3(R5, "dateAdd") : void 0, r2 = Dr(R5, O3, e8, void 0, t2), n5 = Dr(R5, O3, new S6(y5, g5, v6), void 0, t2);
        O3 = r2, w5 += Fi(r2, n5);
        const i5 = Dr(R5, O3, new S6(0, 0, 0, w5), void 0, t2), o5 = Ne(null);
        o5.largestUnit = "year";
        const a5 = Nr(R5, O3, i5, o5).years;
        y5 += a5;
        const s4 = O3;
        O3 = Dr(R5, O3, new S6(a5), void 0, t2), w5 -= Fi(s4, O3);
        const l7 = new S6(w5 < 0 ? -1 : 1);
        let { days: u5 } = Ui(R5, O3, l7, t2);
        u5 = Ee(u5);
        const h7 = d3.multiply(d3.BigInt(u5), D4);
        I5 = d3.add(d3.add(d3.multiply(h7, d3.BigInt(y5)), d3.multiply(d3.BigInt(w5), D4)), I5);
        const p7 = Li(I5, d3.multiply(h7, d3.BigInt(c3)), f5);
        N10 = Ji(I5, h7), y5 = d3.toNumber(d3.divide(p7, h7)), I5 = Me, g5 = v6 = w5 = 0;
        break;
      }
      case "month": {
        if (!R5)
          throw new RangeError("A starting point is required for months rounding");
        const e8 = new S6(y5, g5), t2 = "string" != typeof R5 ? rt3(R5, "dateAdd") : void 0, r2 = Dr(R5, O3, e8, void 0, t2), n5 = Dr(R5, O3, new S6(y5, g5, v6), void 0, t2);
        O3 = r2, w5 += Fi(r2, n5);
        const i5 = xe(w5), o5 = new S6(0, w5 < 0 ? -1 : 1);
        let a5;
        for ({ relativeTo: O3, days: a5 } = Ui(R5, O3, o5, t2); Ee(w5) >= Ee(a5); )
          g5 += i5, w5 -= a5, { relativeTo: O3, days: a5 } = Ui(R5, O3, o5, t2);
        a5 = Ee(a5);
        const s4 = d3.multiply(d3.BigInt(a5), D4);
        I5 = d3.add(d3.add(d3.multiply(s4, d3.BigInt(g5)), d3.multiply(d3.BigInt(w5), D4)), I5);
        const l7 = Li(I5, d3.multiply(s4, d3.BigInt(c3)), f5);
        N10 = Ji(I5, s4), g5 = d3.toNumber(d3.divide(l7, s4)), I5 = Me, v6 = w5 = 0;
        break;
      }
      case "week": {
        if (!R5)
          throw new RangeError("A starting point is required for weeks rounding");
        const e8 = xe(w5), t2 = new S6(0, 0, w5 < 0 ? -1 : 1), r2 = "string" != typeof R5 ? rt3(R5, "dateAdd") : void 0;
        let n5;
        for ({ relativeTo: O3, days: n5 } = Ui(R5, O3, t2, r2); Ee(w5) >= Ee(n5); )
          v6 += e8, w5 -= n5, { relativeTo: O3, days: n5 } = Ui(R5, O3, t2, r2);
        n5 = Ee(n5);
        const i5 = d3.multiply(d3.BigInt(n5), D4);
        I5 = d3.add(d3.add(d3.multiply(i5, d3.BigInt(v6)), d3.multiply(d3.BigInt(w5), D4)), I5);
        const o5 = Li(I5, d3.multiply(i5, d3.BigInt(c3)), f5);
        N10 = Ji(I5, i5), v6 = d3.toNumber(d3.divide(o5, i5)), I5 = Me, w5 = 0;
        break;
      }
      case "day": {
        const e8 = D4;
        I5 = d3.add(d3.multiply(e8, d3.BigInt(w5)), I5);
        const t2 = Li(I5, d3.multiply(e8, d3.BigInt(c3)), f5);
        N10 = Ji(I5, e8), w5 = d3.toNumber(d3.divide(t2, e8)), I5 = Me;
        break;
      }
      case "hour": {
        const e8 = 36e11;
        let t2 = d3.multiply(d3.BigInt(b7), d3.BigInt(36e11));
        t2 = d3.add(t2, d3.multiply(d3.BigInt(_5), d3.BigInt(6e10))), t2 = d3.add(t2, d3.multiply(d3.BigInt(E4), Ue)), t2 = d3.add(t2, d3.multiply(d3.BigInt(T6), Fe)), t2 = d3.add(t2, d3.multiply(d3.BigInt(x6), $e)), t2 = d3.add(t2, I5), N10 = Ji(t2, d3.BigInt(e8));
        const r2 = Li(t2, d3.BigInt(e8 * c3), f5);
        b7 = d3.toNumber(d3.divide(r2, d3.BigInt(e8))), I5 = Me, _5 = E4 = T6 = x6 = 0;
        break;
      }
      case "minute": {
        const e8 = 6e10;
        let t2 = d3.multiply(d3.BigInt(_5), d3.BigInt(6e10));
        t2 = d3.add(t2, d3.multiply(d3.BigInt(E4), Ue)), t2 = d3.add(t2, d3.multiply(d3.BigInt(T6), Fe)), t2 = d3.add(t2, d3.multiply(d3.BigInt(x6), $e)), t2 = d3.add(t2, I5), N10 = Ji(t2, d3.BigInt(e8));
        const r2 = Li(t2, d3.BigInt(e8 * c3), f5);
        _5 = d3.toNumber(d3.divide(r2, d3.BigInt(e8))), I5 = Me, E4 = T6 = x6 = 0;
        break;
      }
      case "second": {
        const e8 = 1e9;
        let t2 = d3.multiply(d3.BigInt(E4), Ue);
        t2 = d3.add(t2, d3.multiply(d3.BigInt(T6), Fe)), t2 = d3.add(t2, d3.multiply(d3.BigInt(x6), $e)), t2 = d3.add(t2, I5), N10 = Ji(t2, d3.BigInt(e8));
        const r2 = Li(t2, d3.BigInt(e8 * c3), f5);
        E4 = d3.toNumber(d3.divide(r2, d3.BigInt(e8))), I5 = Me, T6 = x6 = 0;
        break;
      }
      case "millisecond": {
        const e8 = 1e6;
        let t2 = d3.multiply(d3.BigInt(T6), Fe);
        t2 = d3.add(t2, d3.multiply(d3.BigInt(x6), $e)), t2 = d3.add(t2, I5), N10 = Ji(t2, d3.BigInt(e8));
        const r2 = Li(t2, d3.BigInt(e8 * c3), f5);
        T6 = d3.toNumber(d3.divide(r2, d3.BigInt(e8))), I5 = Me, x6 = 0;
        break;
      }
      case "microsecond": {
        const e8 = 1e3;
        let t2 = d3.multiply(d3.BigInt(x6), $e);
        t2 = d3.add(t2, I5), N10 = Ji(t2, d3.BigInt(e8));
        const r2 = Li(t2, d3.BigInt(e8 * c3), f5);
        x6 = d3.toNumber(d3.divide(r2, d3.BigInt(e8))), I5 = Me;
        break;
      }
      case "nanosecond":
        N10 = d3.toNumber(I5), I5 = Li(d3.BigInt(I5), d3.BigInt(c3), f5);
    }
    return { years: y5, months: g5, weeks: v6, days: w5, hours: b7, minutes: _5, seconds: E4, milliseconds: T6, microseconds: x6, nanoseconds: d3.toNumber(I5), total: N10 };
  }
  function zi(e7, t, r, n4, i4, o4) {
    for (const [a4, s3] of [[e7, n4], [t, i4], [r, o4]])
      if (a4 !== s3)
        return Xi(a4 - s3);
    return 0;
  }
  function Gi(e7, t) {
    let { quotient: r, remainder: n4 } = ht2(e7, t);
    return d3.lessThan(n4, Me) && (r = d3.subtract(r, Le), n4 = d3.add(n4, t)), { quotient: r, remainder: n4 };
  }
  function Hi(e7, t) {
    const { quotient: r, remainder: n4 } = ht2(e7, t);
    return tt3(n4) || !ft(e7) == !ft(t) ? r : d3.subtract(r, Le);
  }
  function Ji(e7, t) {
    const { quotient: r, remainder: n4 } = ht2(e7, t);
    return d3.toNumber(r) + d3.toNumber(n4) / d3.toNumber(t);
  }
  function Vi(e7) {
    const t = Qi(e7);
    return void 0 !== globalThis.BigInt ? globalThis.BigInt(t.toString(10)) : t;
  }
  function Qi(e7) {
    let t = e7;
    if ("object" == typeof e7) {
      const r = e7[Symbol.toPrimitive];
      r && "function" == typeof r && (t = Ce(r, e7, ["number"]));
    }
    if ("number" == typeof t)
      throw new TypeError("cannot convert number to bigint");
    return "bigint" == typeof t ? d3.BigInt(t.toString(10)) : d3.BigInt(t);
  }
  var Zi = (() => {
    let e7 = d3.BigInt(Date.now() % 1e6);
    return () => {
      const t = d3.BigInt(Date.now()), r = d3.add(d3.multiply(t, Fe), e7);
      return e7 = d3.remainder(t, Fe), d3.greaterThan(r, He) ? He : d3.lessThan(r, Ge) ? Ge : r;
    };
  })();
  function Ki() {
    return new we().resolvedOptions().timeZone;
  }
  function Xi(e7) {
    return e7 < 0 ? -1 : e7 > 0 ? 1 : e7;
  }
  function eo(e7) {
    if (void 0 === e7)
      return Ne(null);
    if (it2(e7) && null !== e7)
      return e7;
    throw new TypeError("Options parameter must be an object, not " + (null === e7 ? "null" : typeof e7));
  }
  function to(e7, t) {
    const r = Ne(null);
    return r[e7] = t, r;
  }
  function ro(e7) {
    const t = Ne(null);
    return St2(t, eo(e7), []), t;
  }
  function no(e7, t, r, n4) {
    let i4 = e7[t];
    if (void 0 !== i4) {
      if (i4 = lt2(i4), !r.includes(i4))
        throw new RangeError(`${t} must be one of ${r.join(", ")}, not ${i4}`);
      return i4;
    }
    return n4;
  }
  function io(e7) {
    return et3.includes(oo(e7));
  }
  function oo(e7) {
    return e7.replace(/[A-Z]/g, (e8) => {
      const t = e8.charCodeAt(0);
      return String.fromCharCode(t + 32);
    });
  }
  var ao = new RegExp(`^${se.source}$`);
  function so(e7, t, r, n4 = e7(t), i4 = e7(r)) {
    let o4 = d3.BigInt(t), a4 = d3.BigInt(r), s3 = n4, l6 = i4;
    for (; d3.greaterThan(d3.subtract(a4, o4), Le); ) {
      const t2 = d3.divide(d3.add(o4, a4), d3.BigInt(2)), r2 = e7(t2);
      if (r2 === s3)
        o4 = t2, s3 = r2;
      else {
        if (r2 !== l6)
          throw new Error(`invalid state in bisection ${s3} - ${r2} - ${l6}`);
        a4 = t2, l6 = r2;
      }
    }
    return a4;
  }
  var lo = { hour: 36e11, minute: 6e10, second: 1e9, millisecond: 1e6, microsecond: 1e3, nanosecond: 1 };
  var uo = Symbol("date");
  var co = Symbol("ym");
  var ho = Symbol("md");
  var fo = Symbol("time");
  var po = Symbol("datetime");
  var mo = Symbol("instant");
  var yo = Symbol("original");
  var go = Symbol("timezone");
  var vo = Symbol("calendar-id");
  var wo = Symbol("locale");
  var bo = Symbol("options");
  var _o = (e7) => ({ value: e7, enumerable: true, writable: false, configurable: true });
  var Eo = globalThis.Intl.DateTimeFormat;
  var To = Object.assign;
  var xo = Object.prototype.hasOwnProperty;
  var Io = Reflect.apply;
  function So(e7, t) {
    let r = e7[t];
    return "function" == typeof r && (r = new Eo(e7[wo], r(e7[bo])), e7[t] = r), r;
  }
  function Ro(e7, t = {}) {
    if (!(this instanceof Ro))
      return new Ro(e7, t);
    const r = void 0 !== t, n4 = r ? To({}, t) : {}, i4 = new Eo(e7, n4), o4 = i4.resolvedOptions();
    if (r) {
      const e8 = To({}, o4);
      for (const t2 in e8)
        Io(xo, n4, [t2]) || delete e8[t2];
      this[bo] = e8;
    } else
      this[bo] = n4;
    this[wo] = o4.locale, this[yo] = i4, this[go] = o4.timeZone, this[vo] = o4.calendar, this[uo] = Ao, this[co] = Oo, this[ho] = Co, this[fo] = No, this[po] = Mo, this[mo] = Lo;
  }
  Object.defineProperty(Ro, "name", { writable: true, value: "DateTimeFormat" }), Ro.supportedLocalesOf = function(e7, t) {
    return Eo.supportedLocalesOf(e7, t);
  };
  var ko = { resolvedOptions: _o(function() {
    return this[yo].resolvedOptions();
  }), format: _o(function(e7, ...t) {
    let { instant: r, formatter: n4 } = Uo(e7, this);
    return r && n4 ? n4.format(r.epochMilliseconds) : this[yo].format(e7, ...t);
  }), formatRange: _o(function(e7, t) {
    if ($o(e7) || $o(t)) {
      if (!Fo(e7, t))
        throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");
      const { instant: r, formatter: n4 } = Uo(e7, this), { instant: i4, formatter: o4 } = Uo(t, this);
      if (r && i4 && n4 && o4 && n4 === o4)
        return n4.formatRange(r.epochMilliseconds, i4.epochMilliseconds);
    }
    return this[yo].formatRange(e7, t);
  }) };
  "formatToParts" in Eo.prototype && (ko.formatToParts = _o(function(e7, ...t) {
    let { instant: r, formatter: n4 } = Uo(e7, this);
    return r && n4 ? n4.formatToParts(r.epochMilliseconds) : this[yo].formatToParts(e7, ...t);
  })), "formatRangeToParts" in Eo.prototype && (ko.formatRangeToParts = _o(function(e7, t) {
    if ($o(e7) || $o(t)) {
      if (!Fo(e7, t))
        throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");
      const { instant: r, formatter: n4 } = Uo(e7, this), { instant: i4, formatter: o4 } = Uo(t, this);
      if (r && i4 && n4 && o4 && n4 === o4)
        return n4.formatRangeToParts(r.epochMilliseconds, i4.epochMilliseconds);
    }
    return this[yo].formatRangeToParts(e7, t);
  })), Ro.prototype = Object.create(Eo.prototype, ko), Object.defineProperty(Ro, "prototype", { writable: false, enumerable: false, configurable: false });
  var jo = Ro;
  function Do(e7 = {}, t = {}) {
    const r = To({}, e7);
    for (const e8 of ["year", "month", "day", "hour", "minute", "second", "weekday", "dayPeriod", "timeZoneName", "dateStyle", "timeStyle"])
      r[e8] = e8 in t ? t[e8] : r[e8], false !== r[e8] && void 0 !== r[e8] || delete r[e8];
    return r;
  }
  function No(e7) {
    let t = Do(e7, { year: false, month: false, day: false, weekday: false, timeZoneName: false, dateStyle: false });
    return Bo(t) || (t = To({}, t, { hour: "numeric", minute: "numeric", second: "numeric" })), t;
  }
  function Oo(e7) {
    let t = Do(e7, { day: false, hour: false, minute: false, second: false, weekday: false, dayPeriod: false, timeZoneName: false, dateStyle: false, timeStyle: false });
    return "year" in t || "month" in t || (t = To(t, { year: "numeric", month: "numeric" })), t;
  }
  function Co(e7) {
    let t = Do(e7, { year: false, hour: false, minute: false, second: false, weekday: false, dayPeriod: false, timeZoneName: false, dateStyle: false, timeStyle: false });
    return "month" in t || "day" in t || (t = To({}, t, { month: "numeric", day: "numeric" })), t;
  }
  function Ao(e7) {
    let t = Do(e7, { hour: false, minute: false, second: false, dayPeriod: false, timeZoneName: false, timeStyle: false });
    return Po(t) || (t = To({}, t, { year: "numeric", month: "numeric", day: "numeric" })), t;
  }
  function Mo(e7) {
    let t = Do(e7, { timeZoneName: false });
    return Bo(t) || Po(t) || (t = To({}, t, { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })), t;
  }
  function Lo(e7) {
    let t = e7;
    return Bo(t) || Po(t) || (t = To({}, t, { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })), t;
  }
  function Po(e7) {
    return "year" in e7 || "month" in e7 || "day" in e7 || "weekday" in e7 || "dateStyle" in e7;
  }
  function Bo(e7) {
    return "hour" in e7 || "minute" in e7 || "second" in e7 || "timeStyle" in e7 || "dayPeriod" in e7;
  }
  function $o(e7) {
    return Nt2(e7) || Ot2(e7) || Ct(e7) || Lt2(e7) || At(e7) || Mt2(e7) || Rt(e7);
  }
  function Fo(e7, t) {
    return !(!$o(e7) || !$o(t) || Ot2(e7) && !Ot2(t) || Nt2(e7) && !Nt2(t) || Ct(e7) && !Ct(t) || Lt2(e7) && !Lt2(t) || At(e7) && !At(t) || Mt2(e7) && !Mt2(t) || Rt(e7) && !Rt(t));
  }
  function Uo(e7, t) {
    const r = m4("%Temporal.PlainDateTime%");
    if (Ot2(e7)) {
      const n4 = new r(1970, 1, 1, K3(e7, T4), K3(e7, x4), K3(e7, I3), K3(e7, S4), K3(e7, R4), K3(e7, k4), t[vo]);
      return { instant: fn(t[go], n4, "compatible"), formatter: So(t, fo) };
    }
    if (At(e7)) {
      const n4 = K3(e7, b4), i4 = K3(e7, _4), o4 = K3(e7, E2), a4 = Vr(K3(e7, j4));
      if (a4 !== t[vo])
        throw new RangeError(`cannot format PlainYearMonth with calendar ${a4} in locale with calendar ${t[vo]}`);
      const s3 = new r(n4, i4, o4, 12, 0, 0, 0, 0, 0, a4);
      return { instant: fn(t[go], s3, "compatible"), formatter: So(t, co) };
    }
    if (Mt2(e7)) {
      const n4 = K3(e7, b4), i4 = K3(e7, _4), o4 = K3(e7, E2), a4 = Vr(K3(e7, j4));
      if (a4 !== t[vo])
        throw new RangeError(`cannot format PlainMonthDay with calendar ${a4} in locale with calendar ${t[vo]}`);
      const s3 = new r(n4, i4, o4, 12, 0, 0, 0, 0, 0, a4);
      return { instant: fn(t[go], s3, "compatible"), formatter: So(t, ho) };
    }
    if (Nt2(e7)) {
      const n4 = K3(e7, b4), i4 = K3(e7, _4), o4 = K3(e7, E2), a4 = Vr(K3(e7, j4));
      if ("iso8601" !== a4 && a4 !== t[vo])
        throw new RangeError(`cannot format PlainDate with calendar ${a4} in locale with calendar ${t[vo]}`);
      const s3 = new r(n4, i4, o4, 12, 0, 0, 0, 0, 0, t[vo]);
      return { instant: fn(t[go], s3, "compatible"), formatter: So(t, uo) };
    }
    if (Ct(e7)) {
      const n4 = K3(e7, b4), i4 = K3(e7, _4), o4 = K3(e7, E2), a4 = K3(e7, T4), s3 = K3(e7, x4), l6 = K3(e7, I3), u4 = K3(e7, S4), c3 = K3(e7, R4), d5 = K3(e7, k4), h6 = Vr(K3(e7, j4));
      if ("iso8601" !== h6 && h6 !== t[vo])
        throw new RangeError(`cannot format PlainDateTime with calendar ${h6} in locale with calendar ${t[vo]}`);
      let f5 = e7;
      return "iso8601" === h6 && (f5 = new r(n4, i4, o4, a4, s3, l6, u4, c3, d5, t[vo])), { instant: fn(t[go], f5, "compatible"), formatter: So(t, po) };
    }
    if (Lt2(e7))
      throw new TypeError("Temporal.ZonedDateTime not supported in DateTimeFormat methods. Use toLocaleString() instead.");
    return Rt(e7) ? { instant: e7, formatter: So(t, mo) } : {};
  }
  var qo = class {
    constructor(e7) {
      if (arguments.length < 1)
        throw new TypeError("missing argument: epochNanoseconds is required");
      const t = Qi(e7);
      ci(t), Q4(this), X4(this, v4, t);
    }
    get epochSeconds() {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, v4);
      return d3.toNumber(Hi(e7, Ue));
    }
    get epochMilliseconds() {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      const e7 = d3.BigInt(K3(this, v4));
      return d3.toNumber(Hi(e7, Fe));
    }
    get epochMicroseconds() {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      return Vi(Hi(d3.BigInt(K3(this, v4)), $e));
    }
    get epochNanoseconds() {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      return Vi(d3.BigInt(K3(this, v4)));
    }
    add(e7) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      return Ni("add", this, e7);
    }
    subtract(e7) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      return Ni("subtract", this, e7);
    }
    until(e7, t) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      return vi("until", this, e7, t);
    }
    since(e7, t) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      return vi("since", this, e7, t);
    }
    round(e7) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e7)
        throw new TypeError("options parameter is required");
      const t = "string" == typeof e7 ? to("smallestUnit", e7) : eo(e7), r = Zt(t), n4 = Jt2(t, "halfExpand"), i4 = rr(t, "smallestUnit", "time", tr);
      Kt2(r, { hour: 24, minute: 1440, second: 86400, millisecond: 864e5, microsecond: 864e8, nanosecond: 864e11 }[i4], true);
      const o4 = Pi(K3(this, v4), r, i4, n4);
      return new qo(o4);
    }
    equals(e7) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      const t = hr(e7), r = K3(this, v4), n4 = K3(t, v4);
      return d3.equal(d3.BigInt(r), d3.BigInt(n4));
    }
    toString(e7) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      const t = eo(e7), r = Xt(t), n4 = Jt2(t, "trunc"), i4 = rr(t, "smallestUnit", "time", void 0);
      if ("hour" === i4)
        throw new RangeError('smallestUnit must be a time unit other than "hour"');
      let o4 = t.timeZone;
      void 0 !== o4 && (o4 = nn(o4));
      const { precision: a4, unit: s3, increment: l6 } = er(i4, r), u4 = Pi(K3(this, v4), l6, s3, n4);
      return wn(new qo(u4), o4, a4);
    }
    toJSON() {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      return wn(this, void 0, "auto");
    }
    toLocaleString(e7, t) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      return new jo(e7, t).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.Instant");
    }
    toZonedDateTime(e7) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid argument in toZonedDateTime");
      const t = e7.calendar;
      if (void 0 === t)
        throw new TypeError("missing calendar property in toZonedDateTime");
      const r = Hr(t), n4 = e7.timeZone;
      if (void 0 === n4)
        throw new TypeError("missing timeZone property in toZonedDateTime");
      const i4 = nn(n4);
      return Rr(K3(this, v4), i4, r);
    }
    toZonedDateTimeISO(e7) {
      if (!Rt(this))
        throw new TypeError("invalid receiver");
      const t = nn(e7);
      return Rr(K3(this, v4), t, "iso8601");
    }
    static fromEpochSeconds(e7) {
      const t = ot2(e7), r = d3.multiply(d3.BigInt(t), Ue);
      return ci(r), new qo(r);
    }
    static fromEpochMilliseconds(e7) {
      const t = ot2(e7), r = d3.multiply(d3.BigInt(t), Fe);
      return ci(r), new qo(r);
    }
    static fromEpochMicroseconds(e7) {
      const t = Qi(e7), r = d3.multiply(t, $e);
      return ci(r), new qo(r);
    }
    static fromEpochNanoseconds(e7) {
      const t = Qi(e7);
      return ci(t), new qo(t);
    }
    static from(e7) {
      return Rt(e7) ? new qo(K3(e7, v4)) : hr(e7);
    }
    static compare(e7, t) {
      const r = hr(e7), n4 = hr(t), i4 = K3(r, v4), o4 = K3(n4, v4);
      return d3.lessThan(i4, o4) ? -1 : d3.greaterThan(i4, o4) ? 1 : 0;
    }
  };
  f3(qo, "Temporal.Instant");
  var Yo = Array.prototype.includes;
  var Wo = Array.prototype.push;
  var zo = globalThis.Intl.DateTimeFormat;
  var Go = Array.prototype.sort;
  var Ho = Math.abs;
  var Jo = Math.floor;
  var Vo = Object.create;
  var Qo = Object.entries;
  var Zo = Set;
  var Ko = Reflect.ownKeys;
  var Xo = Set.prototype.add;
  var ea = Set.prototype.values;
  var ta = {};
  var ra = class {
    constructor(e7) {
      if (arguments.length < 1)
        throw new RangeError("missing argument: id is required");
      const t = lt2(e7);
      if (!io(t))
        throw new RangeError(`invalid calendar identifier ${t}`);
      Q4(this), X4(this, z4, oo(t));
    }
    get id() {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return K3(this, z4);
    }
    dateFromFields(e7, t) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid fields");
      const r = eo(t), n4 = K3(this, z4);
      return ta[n4].dateFromFields(e7, r, n4);
    }
    yearMonthFromFields(e7, t) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid fields");
      const r = eo(t), n4 = K3(this, z4);
      return ta[n4].yearMonthFromFields(e7, r, n4);
    }
    monthDayFromFields(e7, t) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid fields");
      const r = eo(t), n4 = K3(this, z4);
      return ta[n4].monthDayFromFields(e7, r, n4);
    }
    fields(e7) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const t = [], r = /* @__PURE__ */ new Set(["year", "month", "monthCode", "day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"]);
      for (const n4 of e7) {
        if ("string" != typeof n4)
          throw new TypeError("invalid fields");
        if (!r.has(n4))
          throw new RangeError(`invalid field name ${n4}`);
        r.delete(n4), Wo.call(t, n4);
      }
      return ta[K3(this, z4)].fields(t);
    }
    mergeFields(e7, t) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const r = It2(e7), n4 = Vo(null);
      St2(n4, r, [], [void 0]);
      const i4 = It2(t), o4 = Vo(null);
      St2(o4, i4, [], [void 0]);
      const a4 = Ko(o4), s3 = ta[K3(this, z4)].fieldKeysToIgnore(a4), l6 = Vo(null), u4 = Ko(n4);
      for (const e8 of u4) {
        let t2;
        t2 = nt3(Yo, s3, [e8]) ? o4[e8] : n4[e8], void 0 !== t2 && (l6[e8] = t2);
      }
      return St2(l6, o4, []), l6;
    }
    dateAdd(e7, t, r) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const n4 = lr(e7), i4 = dr(t), o4 = Gt(eo(r)), { days: a4 } = Zn(K3(i4, B4), K3(i4, $3), K3(i4, F3), K3(i4, U5), K3(i4, q4), K3(i4, Y4), K3(i4, W3), "day"), s3 = K3(this, z4);
      return ta[s3].dateAdd(n4, K3(i4, M4), K3(i4, L3), K3(i4, P4), a4, o4, s3);
    }
    dateUntil(e7, t, r) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const n4 = lr(e7), i4 = lr(t);
      let o4 = rr(eo(r), "largestUnit", "date", "auto");
      "auto" === o4 && (o4 = "day");
      const { years: a4, months: s3, weeks: l6, days: u4 } = ta[K3(this, z4)].dateUntil(n4, i4, o4);
      return new (m4("%Temporal.Duration%"))(a4, s3, l6, u4, 0, 0, 0, 0, 0, 0);
    }
    year(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return At(t) || (t = lr(t)), ta[K3(this, z4)].year(t);
    }
    month(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      if (Mt2(t))
        throw new TypeError("use monthCode on PlainMonthDay instead");
      return At(t) || (t = lr(t)), ta[K3(this, z4)].month(t);
    }
    monthCode(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return At(t) || Mt2(t) || (t = lr(t)), ta[K3(this, z4)].monthCode(t);
    }
    day(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return Mt2(t) || (t = lr(t)), ta[K3(this, z4)].day(t);
    }
    era(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return At(t) || (t = lr(t)), ta[K3(this, z4)].era(t);
    }
    eraYear(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return At(t) || (t = lr(t)), ta[K3(this, z4)].eraYear(t);
    }
    dayOfWeek(e7) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7);
      return ta[K3(this, z4)].dayOfWeek(t);
    }
    dayOfYear(e7) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7);
      return ta[K3(this, z4)].dayOfYear(t);
    }
    weekOfYear(e7) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7);
      return ta[K3(this, z4)].weekOfYear(t);
    }
    yearOfWeek(e7) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7);
      return ta[K3(this, z4)].yearOfWeek(t);
    }
    daysInWeek(e7) {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7);
      return ta[K3(this, z4)].daysInWeek(t);
    }
    daysInMonth(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return At(t) || (t = lr(t)), ta[K3(this, z4)].daysInMonth(t);
    }
    daysInYear(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return At(t) || (t = lr(t)), ta[K3(this, z4)].daysInYear(t);
    }
    monthsInYear(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return At(t) || (t = lr(t)), ta[K3(this, z4)].monthsInYear(t);
    }
    inLeapYear(e7) {
      let t = e7;
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return At(t) || (t = lr(t)), ta[K3(this, z4)].inLeapYear(t);
    }
    toString() {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return K3(this, z4);
    }
    toJSON() {
      if (!jt(this))
        throw new TypeError("invalid receiver");
      return K3(this, z4);
    }
    static from(e7) {
      return Qr(Hr(e7));
    }
  };
  function na(e7) {
    if (!e7.startsWith("M"))
      throw new RangeError(`Invalid month code: ${e7}.  Month codes must start with M.`);
    const t = +e7.slice(1);
    if (isNaN(t))
      throw new RangeError(`Invalid month code: ${e7}`);
    return t;
  }
  function ia(e7, t = false) {
    return `M${e7.toString().padStart(2, "0")}${t ? "L" : ""}`;
  }
  function oa(e7, t, r = 12) {
    let { month: n4, monthCode: i4 } = e7;
    if (void 0 === i4) {
      if (void 0 === n4)
        throw new TypeError("Either month or monthCode are required");
      "reject" === t && ii(n4, 1, r), "constrain" === t && (n4 = ri(n4, 1, r)), i4 = ia(n4);
    } else {
      const e8 = na(i4);
      if (void 0 !== n4 && n4 !== e8)
        throw new RangeError(`monthCode ${i4} and month ${n4} must match if both are present`);
      if (i4 !== ia(e8))
        throw new RangeError(`Invalid month code: ${i4}`);
      if (n4 = e8, n4 < 1 || n4 > r)
        throw new RangeError(`Invalid monthCode: ${i4}`);
    }
    return { ...e7, month: n4, monthCode: i4 };
  }
  f3(ra, "Temporal.Calendar"), p4("Temporal.Calendar.from", ra.from), p4("Temporal.Calendar.prototype.dateAdd", ra.prototype.dateAdd), p4("Temporal.Calendar.prototype.dateFromFields", ra.prototype.dateFromFields), p4("Temporal.Calendar.prototype.dateUntil", ra.prototype.dateUntil), p4("Temporal.Calendar.prototype.day", ra.prototype.day), p4("Temporal.Calendar.prototype.dayOfWeek", ra.prototype.dayOfWeek), p4("Temporal.Calendar.prototype.dayOfYear", ra.prototype.dayOfYear), p4("Temporal.Calendar.prototype.daysInMonth", ra.prototype.daysInMonth), p4("Temporal.Calendar.prototype.daysInWeek", ra.prototype.daysInWeek), p4("Temporal.Calendar.prototype.daysInYear", ra.prototype.daysInYear), p4("Temporal.Calendar.prototype.era", ra.prototype.era), p4("Temporal.Calendar.prototype.eraYear", ra.prototype.eraYear), p4("Temporal.Calendar.prototype.fields", ra.prototype.fields), p4("Temporal.Calendar.prototype.inLeapYear", ra.prototype.inLeapYear), p4("Temporal.Calendar.prototype.mergeFields", ra.prototype.mergeFields), p4("Temporal.Calendar.prototype.month", ra.prototype.month), p4("Temporal.Calendar.prototype.monthCode", ra.prototype.monthCode), p4("Temporal.Calendar.prototype.monthDayFromFields", ra.prototype.monthDayFromFields), p4("Temporal.Calendar.prototype.monthsInYear", ra.prototype.monthsInYear), p4("Temporal.Calendar.prototype.weekOfYear", ra.prototype.weekOfYear), p4("Temporal.Calendar.prototype.year", ra.prototype.year), p4("Temporal.Calendar.prototype.yearMonthFromFields", ra.prototype.yearMonthFromFields), p4("Temporal.Calendar.prototype.yearOfWeek", ra.prototype.yearOfWeek), ta.iso8601 = { dateFromFields(e7, t, r) {
    let n4 = ar(e7, ["day", "month", "monthCode", "year"], ["year", "day"]);
    const i4 = Gt(t);
    n4 = oa(n4);
    let { year: o4, month: a4, day: s3 } = n4;
    return { year: o4, month: a4, day: s3 } = Yt(o4, a4, s3, i4), wr(o4, a4, s3, r);
  }, yearMonthFromFields(e7, t, r) {
    let n4 = ar(e7, ["month", "monthCode", "year"], ["year"]);
    const i4 = Gt(t);
    n4 = oa(n4);
    let { year: o4, month: a4 } = n4;
    return { year: o4, month: a4 } = function(e8, t2, r2) {
      let n5 = e8, i5 = t2;
      switch (r2) {
        case "reject":
          oi(n5, i5, 1);
          break;
        case "constrain":
          ({ year: n5, month: i5 } = ni(n5, i5));
      }
      return { year: n5, month: i5 };
    }(o4, a4, i4), Ir(o4, a4, r, 1);
  }, monthDayFromFields(e7, t, r) {
    let n4 = ar(e7, ["day", "month", "monthCode", "year"], ["day"]);
    const i4 = Gt(t);
    if (void 0 !== n4.month && void 0 === n4.year && void 0 === n4.monthCode)
      throw new TypeError("either year or monthCode required with month");
    const o4 = void 0 === n4.monthCode;
    n4 = oa(n4);
    let { month: a4, day: s3, year: l6 } = n4;
    return { month: a4, day: s3 } = Yt(o4 ? l6 : 1972, a4, s3, i4), Tr(a4, s3, r, 1972);
  }, fields: (e7) => e7, fieldKeysToIgnore(e7) {
    const t = new Zo();
    for (let r = 0; r < e7.length; r++) {
      const n4 = e7[r];
      nt3(Xo, t, [n4]), "month" === n4 ? nt3(Xo, t, ["monthCode"]) : "monthCode" === n4 && nt3(Xo, t, ["month"]);
    }
    return [...nt3(ea, t, [])];
  }, dateAdd(e7, t, r, n4, i4, o4, a4) {
    let s3 = K3(e7, b4), l6 = K3(e7, _4), u4 = K3(e7, E2);
    return { year: s3, month: l6, day: u4 } = xi(s3, l6, u4, t, r, n4, i4, o4), wr(s3, l6, u4, a4);
  }, dateUntil: (e7, t, r) => hi(K3(e7, b4), K3(e7, _4), K3(e7, E2), K3(t, b4), K3(t, _4), K3(t, E2), r), year: (e7) => K3(e7, b4), era() {
  }, eraYear() {
  }, month: (e7) => K3(e7, _4), monthCode: (e7) => ia(K3(e7, _4)), day: (e7) => K3(e7, E2), dayOfWeek: (e7) => Un(K3(e7, b4), K3(e7, _4), K3(e7, E2)), dayOfYear: (e7) => qn(K3(e7, b4), K3(e7, _4), K3(e7, E2)), weekOfYear: (e7) => Yn(K3(e7, b4), K3(e7, _4), K3(e7, E2)).week, yearOfWeek: (e7) => Yn(K3(e7, b4), K3(e7, _4), K3(e7, E2)).year, daysInWeek: () => 7, daysInMonth: (e7) => Fn(K3(e7, b4), K3(e7, _4)), daysInYear(e7) {
    let t = e7;
    return Z4(t, b4) || (t = lr(t)), $n(K3(t, b4)) ? 366 : 365;
  }, monthsInYear: () => 12, inLeapYear(e7) {
    let t = e7;
    return Z4(t, b4) || (t = lr(t)), $n(K3(t, b4));
  } };
  var aa = class {
    constructor(e7) {
      if (this.map = /* @__PURE__ */ new Map(), this.calls = 0, this.hits = 0, this.misses = 0, this.now = globalThis.performance ? globalThis.performance.now() : Date.now(), void 0 !== e7) {
        let t = 0;
        for (const r of e7.map.entries()) {
          if (++t > aa.MAX_CACHE_ENTRIES)
            break;
          this.map.set(...r);
        }
      }
    }
    get(e7) {
      const t = this.map.get(e7);
      return t && (this.hits++, this.report()), this.calls++, t;
    }
    set(e7, t) {
      this.map.set(e7, t), this.misses++, this.report();
    }
    report() {
    }
    setObject(e7) {
      if (aa.objectMap.get(e7))
        throw new RangeError("object already cached");
      aa.objectMap.set(e7, this), this.report();
    }
    static getCacheForObject(e7) {
      let t = aa.objectMap.get(e7);
      return t || (t = new aa(), aa.objectMap.set(e7, t)), t;
    }
  };
  function sa({ isoYear: e7, isoMonth: t, isoDay: r }) {
    return `${yn(e7)}-${gn(t)}-${gn(r)}T00:00Z`;
  }
  function la(e7, t) {
    return { years: e7.year - t.year, months: e7.month - t.month, days: e7.day - t.day };
  }
  aa.objectMap = /* @__PURE__ */ new WeakMap(), aa.MAX_CACHE_ENTRIES = 1e3;
  var ua = class {
    constructor() {
      this.eraLength = "short", this.hasEra = true, this.erasBeginMidYear = false;
    }
    getFormatter() {
      return void 0 === this.formatter && (this.formatter = new zo(`en-US-u-ca-${this.id}`, { day: "numeric", month: "numeric", year: "numeric", era: this.eraLength, timeZone: "UTC" })), this.formatter;
    }
    isoToCalendarDate(e7, t) {
      const { year: r, month: n4, day: i4 } = e7, o4 = JSON.stringify({ func: "isoToCalendarDate", isoYear: r, isoMonth: n4, isoDay: i4, id: this.id }), a4 = t.get(o4);
      if (a4)
        return a4;
      const s3 = this.getFormatter();
      let l6, u4;
      try {
        u4 = sa({ isoYear: r, isoMonth: n4, isoDay: i4 }), l6 = s3.formatToParts(new Date(u4));
      } catch (e8) {
        throw new RangeError(`Invalid ISO date: ${JSON.stringify({ isoYear: r, isoMonth: n4, isoDay: i4 })}`);
      }
      const c3 = {};
      for (let { type: e8, value: t2 } of l6) {
        if ("year" === e8 && (c3.eraYear = +t2), "relatedYear" === e8 && (c3.eraYear = +t2), "month" === e8) {
          const e9 = /^([0-9]*)(.*?)$/.exec(t2);
          if (!e9 || 3 != e9.length || !e9[1] && !e9[2])
            throw new RangeError(`Unexpected month: ${t2}`);
          if (c3.month = e9[1] ? +e9[1] : 1, c3.month < 1)
            throw new RangeError(`Invalid month ${t2} from ${u4}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)`);
          if (c3.month > 13)
            throw new RangeError(`Invalid month ${t2} from ${u4}[u-ca-${this.id}] (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);
          e9[2] && (c3.monthExtra = e9[2]);
        }
        "day" === e8 && (c3.day = +t2), this.hasEra && "era" === e8 && null != t2 && "" !== t2 && (t2 = t2.split(" (")[0], c3.era = t2.normalize("NFD").replace(/[^-0-9 \p{L}]/gu, "").replace(" ", "-").toLowerCase());
      }
      if (void 0 === c3.eraYear)
        throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);
      if (this.reviseIntlEra) {
        const { era: t2, eraYear: r2 } = this.reviseIntlEra(c3, e7);
        c3.era = t2, c3.eraYear = r2;
      }
      this.checkIcuBugs && this.checkIcuBugs(e7);
      const d5 = this.adjustCalendarDate(c3, t, "constrain", true);
      if (void 0 === d5.year)
        throw new RangeError(`Missing year converting ${JSON.stringify(e7)}`);
      if (void 0 === d5.month)
        throw new RangeError(`Missing month converting ${JSON.stringify(e7)}`);
      if (void 0 === d5.day)
        throw new RangeError(`Missing day converting ${JSON.stringify(e7)}`);
      return t.set(o4, d5), ["constrain", "reject"].forEach((r2) => {
        const n5 = JSON.stringify({ func: "calendarToIsoDate", year: d5.year, month: d5.month, day: d5.day, overflow: r2, id: this.id });
        t.set(n5, e7);
      }), d5;
    }
    validateCalendarDate(e7) {
      const { era: t, month: r, year: n4, day: i4, eraYear: o4, monthCode: a4, monthExtra: s3 } = e7;
      if (void 0 !== s3)
        throw new RangeError("Unexpected `monthExtra` value");
      if (void 0 === n4 && void 0 === o4)
        throw new TypeError("year or eraYear is required");
      if (void 0 === r && void 0 === a4)
        throw new TypeError("month or monthCode is required");
      if (void 0 === i4)
        throw new RangeError("Missing day");
      if (void 0 !== a4) {
        if ("string" != typeof a4)
          throw new RangeError("monthCode must be a string, not " + typeof a4);
        if (!/^M([01]?\d)(L?)$/.test(a4))
          throw new RangeError(`Invalid monthCode: ${a4}`);
      }
      if (this.constantEra) {
        if (void 0 !== t && t !== this.constantEra)
          throw new RangeError(`era must be ${this.constantEra}, not ${t}`);
        if (void 0 !== o4 && void 0 !== n4 && o4 !== n4)
          throw new RangeError(`eraYear ${o4} does not match year ${n4}`);
      }
      if (this.hasEra && void 0 === e7.era != (void 0 === e7.eraYear))
        throw new RangeError("properties 'era' and 'eraYear' must be provided together");
    }
    adjustCalendarDate(e7, t, r = "constrain", n4 = false) {
      if ("lunisolar" === this.calendarType)
        throw new RangeError("Override required for lunisolar calendars");
      let i4 = e7;
      if (this.validateCalendarDate(i4), this.constantEra) {
        const { year: e8, eraYear: t2 } = i4;
        i4 = { ...i4, era: this.constantEra, year: void 0 !== e8 ? e8 : t2, eraYear: void 0 !== t2 ? t2 : e8 };
      }
      const o4 = this.monthsInYear(i4, t);
      let { month: a4, monthCode: s3 } = i4;
      return { month: a4, monthCode: s3 } = oa(i4, r, o4), { ...i4, month: a4, monthCode: s3 };
    }
    regulateMonthDayNaive(e7, t, r) {
      const n4 = this.monthsInYear(e7, r);
      let { month: i4, day: o4 } = e7;
      return "reject" === t ? (ii(i4, 1, n4), ii(o4, 1, this.maximumMonthLength(e7))) : (i4 = ri(i4, 1, n4), o4 = ri(o4, 1, this.maximumMonthLength({ ...e7, month: i4 }))), { ...e7, month: i4, day: o4 };
    }
    calendarToIsoDate(e7, t = "constrain", r) {
      const n4 = e7;
      let i4 = this.adjustCalendarDate(e7, r, t, false);
      i4 = this.regulateMonthDayNaive(i4, t, r);
      const { year: o4, month: a4, day: s3 } = i4, l6 = JSON.stringify({ func: "calendarToIsoDate", year: o4, month: a4, day: s3, overflow: t, id: this.id });
      let u4, c3 = r.get(l6);
      if (c3)
        return c3;
      if (void 0 !== n4.year && void 0 !== n4.month && void 0 !== n4.day && (n4.year !== i4.year || n4.month !== i4.month || n4.day !== i4.day) && (u4 = JSON.stringify({ func: "calendarToIsoDate", year: n4.year, month: n4.month, day: n4.day, overflow: t, id: this.id }), c3 = r.get(u4), c3))
        return c3;
      let d5 = this.estimateIsoDate({ year: o4, month: a4, day: s3 });
      const h6 = (e8) => {
        let n5 = this.addDaysIso(d5, e8);
        if (i4.day > this.minimumMonthLength(i4)) {
          let e9 = this.isoToCalendarDate(n5, r);
          for (; e9.month !== a4 || e9.year !== o4; ) {
            if ("reject" === t)
              throw new RangeError(`day ${s3} does not exist in month ${a4} of year ${o4}`);
            n5 = this.addDaysIso(n5, -1), e9 = this.isoToCalendarDate(n5, r);
          }
        }
        return n5;
      };
      let f5 = 0, p6 = this.isoToCalendarDate(d5, r), m5 = la(i4, p6);
      if (0 !== m5.years || 0 !== m5.months || 0 !== m5.days) {
        const e8 = 365 * m5.years + 30 * m5.months + m5.days;
        d5 = this.addDaysIso(d5, e8), p6 = this.isoToCalendarDate(d5, r), m5 = la(i4, p6), 0 === m5.years && 0 === m5.months ? d5 = h6(m5.days) : f5 = this.compareCalendarDates(i4, p6);
      }
      let y5 = 8;
      for (; f5; ) {
        d5 = this.addDaysIso(d5, f5 * y5);
        const e8 = p6;
        p6 = this.isoToCalendarDate(d5, r);
        const o5 = f5;
        if (f5 = this.compareCalendarDates(i4, p6), f5) {
          if (m5 = la(i4, p6), 0 === m5.years && 0 === m5.months)
            d5 = h6(m5.days), f5 = 0;
          else if (o5 && f5 !== o5)
            if (y5 > 1)
              y5 /= 2;
            else {
              if ("reject" === t)
                throw new RangeError(`Can't find ISO date from calendar date: ${JSON.stringify({ ...n4 })}`);
              this.compareCalendarDates(p6, e8) > 0 && (d5 = this.addDaysIso(d5, -1)), f5 = 0;
            }
        }
      }
      if (r.set(l6, d5), u4 && r.set(u4, d5), void 0 === i4.year || void 0 === i4.month || void 0 === i4.day || void 0 === i4.monthCode || this.hasEra && (void 0 === i4.era || void 0 === i4.eraYear))
        throw new RangeError("Unexpected missing property");
      return d5;
    }
    temporalToCalendarDate(e7, t) {
      const r = { year: K3(e7, b4), month: K3(e7, _4), day: K3(e7, E2) };
      return this.isoToCalendarDate(r, t);
    }
    compareCalendarDates(e7, t) {
      const r = ar(e7, ["day", "month", "year"], ["day", "month", "year"]), n4 = ar(t, ["day", "month", "year"], ["day", "month", "year"]);
      return r.year !== n4.year ? Xi(r.year - n4.year) : r.month !== n4.month ? Xi(r.month - n4.month) : r.day !== n4.day ? Xi(r.day - n4.day) : 0;
    }
    regulateDate(e7, t = "constrain", r) {
      const n4 = this.calendarToIsoDate(e7, t, r);
      return this.isoToCalendarDate(n4, r);
    }
    addDaysIso(e7, t) {
      return xi(e7.year, e7.month, e7.day, 0, 0, 0, t, "constrain");
    }
    addDaysCalendar(e7, t, r) {
      const n4 = this.calendarToIsoDate(e7, "constrain", r), i4 = this.addDaysIso(n4, t);
      return this.isoToCalendarDate(i4, r);
    }
    addMonthsCalendar(e7, t, r, n4) {
      let i4 = e7;
      const { day: o4 } = i4;
      for (let e8 = 0, r2 = Ho(t); e8 < r2; e8++) {
        const { month: e9 } = i4, r3 = i4, a4 = t < 0 ? -Math.max(o4, this.daysInPreviousMonth(i4, n4)) : this.daysInMonth(i4, n4), s3 = this.calendarToIsoDate(i4, "constrain", n4);
        let l6 = this.addDaysIso(s3, a4);
        if (i4 = this.isoToCalendarDate(l6, n4), t > 0) {
          const t2 = this.monthsInYear(r3, n4);
          for (; i4.month - 1 != e9 % t2; )
            l6 = this.addDaysIso(l6, -1), i4 = this.isoToCalendarDate(l6, n4);
        }
        i4.day !== o4 && (i4 = this.regulateDate({ ...i4, day: o4 }, "constrain", n4));
      }
      if ("reject" === r && i4.day !== o4)
        throw new RangeError(`Day ${o4} does not exist in resulting calendar month`);
      return i4;
    }
    addCalendar(e7, { years: t = 0, months: r = 0, weeks: n4 = 0, days: i4 = 0 }, o4, a4) {
      const { year: s3, day: l6, monthCode: u4 } = e7, c3 = this.adjustCalendarDate({ year: s3 + t, monthCode: u4, day: l6 }, a4), d5 = this.addMonthsCalendar(c3, r, o4, a4), h6 = i4 + 7 * n4;
      return this.addDaysCalendar(d5, h6, a4);
    }
    untilCalendar(e7, t, r, n4) {
      let i4 = 0, o4 = 0, a4 = 0, s3 = 0;
      switch (r) {
        case "day":
          i4 = this.calendarDaysUntil(e7, t, n4);
          break;
        case "week": {
          const r2 = this.calendarDaysUntil(e7, t, n4);
          i4 = r2 % 7, o4 = (r2 - i4) / 7;
          break;
        }
        case "month":
        case "year": {
          const o5 = this.compareCalendarDates(t, e7);
          if (!o5)
            return { years: 0, months: 0, weeks: 0, days: 0 };
          const l6 = t.year - e7.year, u4 = t.day - e7.day;
          if ("year" === r && l6) {
            let r2 = 0;
            t.monthCode > e7.monthCode && (r2 = 1), t.monthCode < e7.monthCode && (r2 = -1), r2 || (r2 = Math.sign(u4)), s3 = r2 * o5 < 0 ? l6 - o5 : l6;
          }
          let c3, d5 = s3 ? this.addCalendar(e7, { years: s3 }, "constrain", n4) : e7;
          do {
            a4 += o5, c3 = d5, d5 = this.addMonthsCalendar(c3, o5, "constrain", n4), d5.day !== e7.day && (d5 = this.regulateDate({ ...d5, day: e7.day }, "constrain", n4));
          } while (this.compareCalendarDates(t, d5) * o5 >= 0);
          a4 -= o5, i4 = this.calendarDaysUntil(c3, t, n4);
          break;
        }
      }
      return { years: s3, months: a4, weeks: o4, days: i4 };
    }
    daysInMonth(e7, t) {
      const { day: r } = e7, n4 = this.maximumMonthLength(e7), i4 = this.minimumMonthLength(e7);
      if (i4 === n4)
        return i4;
      const o4 = r <= n4 - i4 ? n4 : i4, a4 = this.calendarToIsoDate(e7, "constrain", t), s3 = this.addDaysIso(a4, o4), l6 = this.isoToCalendarDate(s3, t), u4 = this.addDaysIso(s3, -l6.day);
      return this.isoToCalendarDate(u4, t).day;
    }
    daysInPreviousMonth(e7, t) {
      const { day: r, month: n4, year: i4 } = e7;
      let o4 = { year: n4 > 1 ? i4 : i4 - 1, month: n4, day: 1 };
      const a4 = n4 > 1 ? n4 - 1 : this.monthsInYear(o4, t);
      o4 = { ...o4, month: a4 };
      const s3 = this.minimumMonthLength(o4), l6 = this.maximumMonthLength(o4);
      if (s3 === l6)
        return l6;
      const u4 = this.calendarToIsoDate(e7, "constrain", t), c3 = this.addDaysIso(u4, -r);
      return this.isoToCalendarDate(c3, t).day;
    }
    startOfCalendarYear(e7) {
      return { year: e7.year, month: 1, monthCode: "M01", day: 1 };
    }
    startOfCalendarMonth(e7) {
      return { year: e7.year, month: e7.month, day: 1 };
    }
    calendarDaysUntil(e7, t, r) {
      const n4 = this.calendarToIsoDate(e7, "constrain", r), i4 = this.calendarToIsoDate(t, "constrain", r);
      return this.isoDaysUntil(n4, i4);
    }
    isoDaysUntil(e7, t) {
      return hi(e7.year, e7.month, e7.day, t.year, t.month, t.day, "day").days;
    }
    monthDayFromFields(e7, t, r) {
      let n4, i4, o4, a4, s3, { monthCode: l6, day: u4 } = e7;
      if (void 0 === l6) {
        let { year: n5, era: i5, eraYear: o5 } = e7;
        if (void 0 === n5 && (void 0 === i5 || void 0 === o5))
          throw new TypeError("when `monthCode` is omitted, `year` (or `era` and `eraYear`) and `month` are required");
        ({ monthCode: l6, day: u4 } = this.isoToCalendarDate(this.calendarToIsoDate(e7, t, r), r));
      }
      const c3 = this.isoToCalendarDate({ year: 1972, month: 12, day: 31 }, r), d5 = c3.monthCode > l6 || c3.monthCode === l6 && c3.day >= u4 ? c3.year : c3.year - 1;
      for (let e8 = 0; e8 < 100; e8++) {
        const c4 = this.adjustCalendarDate({ day: u4, monthCode: l6, year: d5 - e8 }, r), h6 = this.calendarToIsoDate(c4, "constrain", r), f5 = this.isoToCalendarDate(h6, r);
        if ({ year: n4, month: i4, day: o4 } = h6, f5.monthCode === l6 && f5.day === u4)
          return { month: i4, day: o4, year: n4 };
        "constrain" === t && (void 0 === a4 || f5.monthCode === a4.monthCode && f5.day > a4.day) && (a4 = f5, s3 = h6);
      }
      if ("constrain" === t && void 0 !== s3)
        return s3;
      throw new RangeError(`No recent ${this.id} year with monthCode ${l6} and day ${u4}`);
    }
  };
  var ca = class extends ua {
    constructor() {
      super(...arguments), this.id = "hebrew", this.calendarType = "lunisolar", this.months = { Tishri: { leap: 1, regular: 1, monthCode: "M01", days: 30 }, Heshvan: { leap: 2, regular: 2, monthCode: "M02", days: { min: 29, max: 30 } }, Kislev: { leap: 3, regular: 3, monthCode: "M03", days: { min: 29, max: 30 } }, Tevet: { leap: 4, regular: 4, monthCode: "M04", days: 29 }, Shevat: { leap: 5, regular: 5, monthCode: "M05", days: 30 }, Adar: { leap: void 0, regular: 6, monthCode: "M06", days: 29 }, "Adar I": { leap: 6, regular: void 0, monthCode: "M05L", days: 30 }, "Adar II": { leap: 7, regular: void 0, monthCode: "M06", days: 29 }, Nisan: { leap: 8, regular: 7, monthCode: "M07", days: 30 }, Iyar: { leap: 9, regular: 8, monthCode: "M08", days: 29 }, Sivan: { leap: 10, regular: 9, monthCode: "M09", days: 30 }, Tamuz: { leap: 11, regular: 10, monthCode: "M10", days: 29 }, Av: { leap: 12, regular: 11, monthCode: "M11", days: 30 }, Elul: { leap: 13, regular: 12, monthCode: "M12", days: 29 } }, this.hasEra = false;
    }
    inLeapYear(e7) {
      const { year: t } = e7;
      return (7 * t + 1) % 19 < 7;
    }
    monthsInYear(e7) {
      return this.inLeapYear(e7) ? 13 : 12;
    }
    minimumMonthLength(e7) {
      return this.minMaxMonthLength(e7, "min");
    }
    maximumMonthLength(e7) {
      return this.minMaxMonthLength(e7, "max");
    }
    minMaxMonthLength(e7, t) {
      const { month: r, year: n4 } = e7, i4 = this.getMonthCode(n4, r), o4 = Qo(this.months).find((e8) => e8[1].monthCode === i4);
      if (void 0 === o4)
        throw new RangeError(`unmatched Hebrew month: ${r}`);
      const a4 = o4[1].days;
      return "number" == typeof a4 ? a4 : a4[t];
    }
    estimateIsoDate(e7) {
      const { year: t } = e7;
      return { year: t - 3760, month: 1, day: 1 };
    }
    getMonthCode(e7, t) {
      return this.inLeapYear({ year: e7 }) ? 6 === t ? ia(5, true) : ia(t < 6 ? t : t - 1) : ia(t);
    }
    adjustCalendarDate(e7, t, r = "constrain", n4 = false) {
      let { year: i4, eraYear: o4, month: a4, monthCode: s3, day: l6, monthExtra: u4 } = e7;
      if (void 0 === i4 && void 0 !== o4 && (i4 = o4), void 0 === o4 && void 0 !== i4 && (o4 = i4), n4) {
        if (u4) {
          const e8 = this.months[u4];
          if (!e8)
            throw new RangeError(`Unrecognized month from formatToParts: ${u4}`);
          a4 = this.inLeapYear({ year: i4 }) ? e8.leap : e8.regular;
        }
        return s3 = this.getMonthCode(i4, a4), { year: i4, month: a4, day: l6, era: void 0, eraYear: o4, monthCode: s3 };
      }
      if (this.validateCalendarDate(e7), void 0 === a4)
        if (s3.endsWith("L")) {
          if ("M05L" !== s3)
            throw new RangeError(`Hebrew leap month must have monthCode M05L, not ${s3}`);
          if (a4 = 6, !this.inLeapYear({ year: i4 })) {
            if ("reject" === r)
              throw new RangeError(`Hebrew monthCode M05L is invalid in year ${i4} which is not a leap year`);
            a4 = 6, s3 = "M06";
          }
        } else {
          a4 = na(s3), this.inLeapYear({ year: i4 }) && a4 >= 6 && a4++;
          const e8 = this.monthsInYear({ year: i4 });
          if (a4 < 1 || a4 > e8)
            throw new RangeError(`Invalid monthCode: ${s3}`);
        }
      else if ("reject" === r ? (ii(a4, 1, this.monthsInYear({ year: i4 })), ii(l6, 1, this.maximumMonthLength({ year: i4, month: a4 }))) : (a4 = ri(a4, 1, this.monthsInYear({ year: i4 })), l6 = ri(l6, 1, this.maximumMonthLength({ year: i4, month: a4 }))), void 0 === s3)
        s3 = this.getMonthCode(i4, a4);
      else if (this.getMonthCode(i4, a4) !== s3)
        throw new RangeError(`monthCode ${s3} doesn't correspond to month ${a4} in Hebrew year ${i4}`);
      return { ...e7, day: l6, month: a4, monthCode: s3, year: i4, eraYear: o4 };
    }
  };
  var da = class extends ua {
    constructor() {
      super(...arguments), this.calendarType = "lunar", this.DAYS_PER_ISLAMIC_YEAR = 354 + 11 / 30, this.DAYS_PER_ISO_YEAR = 365.2425, this.constantEra = "ah";
    }
    inLeapYear(e7, t) {
      return 30 === this.daysInMonth({ year: e7.year, month: 12, day: 1 }, t);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength() {
      return 29;
    }
    maximumMonthLength() {
      return 30;
    }
    estimateIsoDate(e7) {
      const { year: t } = this.adjustCalendarDate(e7);
      return { year: Jo(t * this.DAYS_PER_ISLAMIC_YEAR / this.DAYS_PER_ISO_YEAR) + 622, month: 1, day: 1 };
    }
  };
  var ha = class extends da {
    constructor() {
      super(...arguments), this.id = "islamic";
    }
  };
  var fa = class extends da {
    constructor() {
      super(...arguments), this.id = "islamic-umalqura";
    }
  };
  var pa = class extends da {
    constructor() {
      super(...arguments), this.id = "islamic-tbla";
    }
  };
  var ma = class extends da {
    constructor() {
      super(...arguments), this.id = "islamic-civil";
    }
  };
  var ya = class extends da {
    constructor() {
      super(...arguments), this.id = "islamic-rgsa";
    }
  };
  var ga = class extends da {
    constructor() {
      super(...arguments), this.id = "islamicc";
    }
  };
  var va = class extends ua {
    constructor() {
      super(...arguments), this.id = "persian", this.calendarType = "solar", this.constantEra = "ap";
    }
    inLeapYear(e7, t) {
      return ha.prototype.inLeapYear.call(this, e7, t);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e7) {
      const { month: t } = e7;
      return 12 === t ? 29 : t <= 6 ? 31 : 30;
    }
    maximumMonthLength(e7) {
      const { month: t } = e7;
      return 12 === t ? 30 : t <= 6 ? 31 : 30;
    }
    estimateIsoDate(e7) {
      const { year: t } = this.adjustCalendarDate(e7);
      return { year: t + 621, month: 1, day: 1 };
    }
  };
  var wa = class extends ua {
    constructor() {
      super(...arguments), this.id = "indian", this.calendarType = "solar", this.constantEra = "saka", this.months = { 1: { length: 30, month: 3, day: 22, leap: { length: 31, month: 3, day: 21 } }, 2: { length: 31, month: 4, day: 21 }, 3: { length: 31, month: 5, day: 22 }, 4: { length: 31, month: 6, day: 22 }, 5: { length: 31, month: 7, day: 23 }, 6: { length: 31, month: 8, day: 23 }, 7: { length: 30, month: 9, day: 23 }, 8: { length: 30, month: 10, day: 23 }, 9: { length: 30, month: 11, day: 22 }, 10: { length: 30, month: 12, day: 22 }, 11: { length: 30, month: 1, nextYear: true, day: 21 }, 12: { length: 30, month: 2, nextYear: true, day: 20 } }, this.vulnerableToBceBug = "10/11/-79 Saka" !== new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian", { timeZone: "UTC" });
    }
    inLeapYear(e7) {
      return ba(e7.year + 78);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e7) {
      return this.getMonthInfo(e7).length;
    }
    maximumMonthLength(e7) {
      return this.getMonthInfo(e7).length;
    }
    getMonthInfo(e7) {
      const { month: t } = e7;
      let r = this.months[t];
      if (void 0 === r)
        throw new RangeError(`Invalid month: ${t}`);
      return this.inLeapYear(e7) && r.leap && (r = r.leap), r;
    }
    estimateIsoDate(e7) {
      const t = this.adjustCalendarDate(e7), r = this.getMonthInfo(t);
      return xi(t.year + 78 + (r.nextYear ? 1 : 0), r.month, r.day, 0, 0, 0, t.day - 1, "constrain");
    }
    checkIcuBugs(e7) {
      if (this.vulnerableToBceBug && e7.year < 1)
        throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 0001-01-01 (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)`);
    }
  };
  function ba(e7) {
    return e7 % 4 == 0 && (e7 % 100 != 0 || e7 % 400 == 0);
  }
  var _a = class extends ua {
    constructor(e7, t) {
      super(), this.calendarType = "solar", this.v8IsVulnerableToJulianBug = new Date("+001001-01-01T00:00Z").toLocaleDateString("en-US-u-ca-japanese", { timeZone: "UTC" }).startsWith("12"), this.calendarIsVulnerableToJulianBug = false, this.id = e7;
      const { eras: r, anchorEra: n4 } = function(e8) {
        let t2, r2 = e8;
        if (0 === r2.length)
          throw new RangeError("Invalid era data: eras are required");
        if (1 === r2.length && r2[0].reverseOf)
          throw new RangeError("Invalid era data: anchor era cannot count years backwards");
        if (1 === r2.length && !r2[0].name)
          throw new RangeError("Invalid era data: at least one named era is required");
        if (r2.filter((e9) => null != e9.reverseOf).length > 1)
          throw new RangeError("Invalid era data: only one era can count years backwards");
        r2.forEach((e9) => {
          if (e9.isAnchor || !e9.anchorEpoch && !e9.reverseOf) {
            if (t2)
              throw new RangeError("Invalid era data: cannot have multiple anchor eras");
            t2 = e9, e9.anchorEpoch = { year: e9.hasYearZero ? 0 : 1 };
          } else if (!e9.name)
            throw new RangeError("If era name is blank, it must be the anchor era");
        }), r2 = r2.filter((e9) => e9.name), r2.forEach((e9) => {
          const { reverseOf: t3 } = e9;
          if (t3) {
            const n6 = r2.find((e10) => e10.name === t3);
            if (void 0 === n6)
              throw new RangeError(`Invalid era data: unmatched reverseOf era: ${t3}`);
            e9.reverseOf = n6, e9.anchorEpoch = n6.anchorEpoch, e9.isoEpoch = n6.isoEpoch;
          }
          void 0 === e9.anchorEpoch.month && (e9.anchorEpoch.month = 1), void 0 === e9.anchorEpoch.day && (e9.anchorEpoch.day = 1);
        }), Go.call(r2, (e9, t3) => {
          if (e9.reverseOf)
            return 1;
          if (t3.reverseOf)
            return -1;
          if (!e9.isoEpoch || !t3.isoEpoch)
            throw new RangeError("Invalid era data: missing ISO epoch");
          return t3.isoEpoch.year - e9.isoEpoch.year;
        });
        const n5 = r2[r2.length - 1].reverseOf;
        if (n5 && n5 !== r2[r2.length - 2])
          throw new RangeError("Invalid era data: invalid reverse-sign era");
        return r2.forEach((e9, t3) => {
          e9.genericName = "era" + (r2.length - 1 - t3);
        }), { eras: r2, anchorEra: t2 || r2[0] };
      }(t);
      this.anchorEra = n4, this.eras = r;
    }
    inLeapYear(e7) {
      const { year: t } = this.estimateIsoDate({ month: 1, day: 1, year: e7.year });
      return ba(t);
    }
    monthsInYear() {
      return 12;
    }
    minimumMonthLength(e7) {
      const { month: t } = e7;
      return 2 === t ? this.inLeapYear(e7) ? 29 : 28 : [4, 6, 9, 11].indexOf(t) >= 0 ? 30 : 31;
    }
    maximumMonthLength(e7) {
      return this.minimumMonthLength(e7);
    }
    completeEraYear(e7) {
      const t = (t2, r2) => {
        const n5 = e7[t2];
        if (null != n5 && n5 != r2)
          throw new RangeError(`Input ${t2} ${n5} doesn't match calculated value ${r2}`);
      }, r = (t2) => {
        let r2;
        const n5 = { ...e7, year: t2 }, i5 = this.eras.find((e8, i6) => {
          if (i6 === this.eras.length - 1) {
            if (e8.reverseOf) {
              if (t2 > 0)
                throw new RangeError(`Signed year ${t2} is invalid for era ${e8.name}`);
              return r2 = e8.anchorEpoch.year - t2, true;
            }
            return r2 = t2 - e8.anchorEpoch.year + (e8.hasYearZero ? 0 : 1), true;
          }
          return this.compareCalendarDates(n5, e8.anchorEpoch) >= 0 && (r2 = t2 - e8.anchorEpoch.year + (e8.hasYearZero ? 0 : 1), true);
        });
        if (!i5)
          throw new RangeError(`Year ${t2} was not matched by any era`);
        return { eraYear: r2, era: i5.name };
      };
      let { year: n4, eraYear: i4, era: o4 } = e7;
      if (null != n4)
        ({ eraYear: i4, era: o4 } = r(n4)), t("era", o4), t("eraYear", i4);
      else {
        if (null == i4)
          throw new RangeError("Either `year` or `eraYear` and `era` are required");
        {
          const e8 = void 0 === o4 ? void 0 : this.eras.find((e9) => e9.name === o4 || e9.genericName === o4);
          if (!e8)
            throw new RangeError(`Era ${o4} (ISO year ${i4}) was not matched by any era`);
          if (i4 < 1 && e8.reverseOf)
            throw new RangeError(`Years in ${o4} era must be positive, not ${n4}`);
          n4 = e8.reverseOf ? e8.anchorEpoch.year - i4 : i4 + e8.anchorEpoch.year - (e8.hasYearZero ? 0 : 1), t("year", n4), { eraYear: i4, era: o4 } = r(n4);
        }
      }
      return { ...e7, year: n4, eraYear: i4, era: o4 };
    }
    adjustCalendarDate(e7, t, r = "constrain") {
      let n4 = e7;
      const { month: i4, monthCode: o4 } = n4;
      return void 0 === i4 && (n4 = { ...n4, month: na(o4) }), this.validateCalendarDate(n4), n4 = this.completeEraYear(n4), super.adjustCalendarDate(n4, t, r);
    }
    estimateIsoDate(e7) {
      const t = this.adjustCalendarDate(e7), { year: r, month: n4, day: i4 } = t, { anchorEra: o4 } = this;
      return Yt(r + o4.isoEpoch.year - (o4.hasYearZero ? 0 : 1), n4, i4, "constrain");
    }
    checkIcuBugs(e7) {
      if (this.calendarIsVulnerableToJulianBug && this.v8IsVulnerableToJulianBug && zi(e7.year, e7.month, e7.day, 1582, 10, 15) < 0)
        throw new RangeError(`calendar '${this.id}' is broken for ISO dates before 1582-10-15 (see https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)`);
    }
  };
  var Ea = class extends _a {
    constructor(e7, t) {
      super(e7, t);
    }
    inLeapYear(e7) {
      const { year: t } = e7;
      return (t + 1) % 4 == 0;
    }
    monthsInYear() {
      return 13;
    }
    minimumMonthLength(e7) {
      const { month: t } = e7;
      return 13 === t ? this.inLeapYear(e7) ? 6 : 5 : 30;
    }
    maximumMonthLength(e7) {
      return this.minimumMonthLength(e7);
    }
  };
  var Ta = class extends Ea {
    constructor() {
      super("ethioaa", [{ name: "era0", isoEpoch: { year: -5492, month: 7, day: 17 } }]);
    }
  };
  var xa = class extends Ea {
    constructor() {
      super("coptic", [{ name: "era1", isoEpoch: { year: 284, month: 8, day: 29 } }, { name: "era0", reverseOf: "era1" }]);
    }
  };
  var Ia = class extends Ea {
    constructor() {
      super("ethiopic", [{ name: "era0", isoEpoch: { year: -5492, month: 7, day: 17 } }, { name: "era1", isoEpoch: { year: 8, month: 8, day: 27 }, anchorEpoch: { year: 5501 } }]);
    }
  };
  var Sa = class extends _a {
    constructor() {
      super("roc", [{ name: "minguo", isoEpoch: { year: 1912, month: 1, day: 1 } }, { name: "before-roc", reverseOf: "minguo" }]), this.calendarIsVulnerableToJulianBug = true;
    }
  };
  var Ra = class extends _a {
    constructor() {
      super("buddhist", [{ name: "be", hasYearZero: true, isoEpoch: { year: -543, month: 1, day: 1 } }]), this.calendarIsVulnerableToJulianBug = true;
    }
  };
  var ka = class extends _a {
    constructor() {
      super("gregory", [{ name: "ce", isoEpoch: { year: 1, month: 1, day: 1 } }, { name: "bce", reverseOf: "ce" }]);
    }
    reviseIntlEra(e7) {
      let { era: t, eraYear: r } = e7;
      return "bc" !== t && "b" !== t || (t = "bce"), "ad" !== t && "a" !== t || (t = "ce"), { era: t, eraYear: r };
    }
  };
  var ja = class extends _a {
    constructor() {
      super("japanese", [{ name: "reiwa", isoEpoch: { year: 2019, month: 5, day: 1 }, anchorEpoch: { year: 2019, month: 5, day: 1 } }, { name: "heisei", isoEpoch: { year: 1989, month: 1, day: 8 }, anchorEpoch: { year: 1989, month: 1, day: 8 } }, { name: "showa", isoEpoch: { year: 1926, month: 12, day: 25 }, anchorEpoch: { year: 1926, month: 12, day: 25 } }, { name: "taisho", isoEpoch: { year: 1912, month: 7, day: 30 }, anchorEpoch: { year: 1912, month: 7, day: 30 } }, { name: "meiji", isoEpoch: { year: 1868, month: 9, day: 8 }, anchorEpoch: { year: 1868, month: 9, day: 8 } }, { name: "ce", isoEpoch: { year: 1, month: 1, day: 1 } }, { name: "bce", reverseOf: "ce" }]), this.calendarIsVulnerableToJulianBug = true, this.eraLength = "long", this.erasBeginMidYear = true;
    }
    reviseIntlEra(e7, t) {
      const { era: r, eraYear: n4 } = e7, { year: i4 } = t;
      return this.eras.find((e8) => e8.name === r) ? { era: r, eraYear: n4 } : i4 < 1 ? { era: "bce", eraYear: 1 - i4 } : { era: "ce", eraYear: i4 };
    }
  };
  var Da = class extends ua {
    constructor() {
      super(...arguments), this.calendarType = "lunisolar", this.hasEra = false;
    }
    inLeapYear(e7, t) {
      const r = this.getMonthList(e7.year, t);
      return 13 === Qo(r).length;
    }
    monthsInYear(e7, t) {
      return this.inLeapYear(e7, t) ? 13 : 12;
    }
    minimumMonthLength() {
      return 29;
    }
    maximumMonthLength() {
      return 30;
    }
    getMonthList(e7, t) {
      if (void 0 === e7)
        throw new TypeError("Missing year");
      const r = JSON.stringify({ func: "getMonthList", calendarYear: e7, id: this.id }), n4 = t.get(r);
      if (n4)
        return n4;
      const i4 = this.getFormatter(), o4 = (e8, t2) => {
        const r2 = sa({ isoYear: e8, isoMonth: 2, isoDay: 1 }), n5 = new Date(r2);
        n5.setUTCDate(t2 + 1);
        const o5 = i4.formatToParts(n5), a5 = o5.find((e9) => "month" === e9.type).value, s4 = +o5.find((e9) => "day" === e9.type).value;
        let l7 = o5.find((e9) => "relatedYear" === e9.type);
        if (void 0 === l7)
          throw new RangeError(`Intl.DateTimeFormat.formatToParts lacks relatedYear in ${this.id} calendar. Try Node 14+ or modern browsers.`);
        return l7 = +l7.value, { calendarMonthString: a5, calendarDay: s4, calendarYearToVerify: l7 };
      };
      let a4 = 17, { calendarMonthString: s3, calendarDay: l6, calendarYearToVerify: u4 } = o4(e7, a4);
      "1" !== s3 && (a4 += 29, { calendarMonthString: s3, calendarDay: l6 } = o4(e7, a4)), a4 -= l6 - 5;
      const c3 = {};
      let d5, h6, f5 = 1, p6 = false;
      do {
        ({ calendarMonthString: s3, calendarDay: l6, calendarYearToVerify: u4 } = o4(e7, a4)), d5 && (c3[h6].daysInMonth = d5 + 30 - l6), u4 !== e7 ? p6 = true : (c3[s3] = { monthIndex: f5++ }, a4 += 30), d5 = l6, h6 = s3;
      } while (!p6);
      return c3[h6].daysInMonth = d5 + 30 - l6, t.set(r, c3), c3;
    }
    estimateIsoDate(e7) {
      const { year: t, month: r } = e7;
      return { year: t, month: r >= 12 ? 12 : r + 1, day: 1 };
    }
    adjustCalendarDate(e7, t, r = "constrain", n4 = false) {
      let { year: i4, month: o4, monthExtra: a4, day: s3, monthCode: l6, eraYear: u4 } = e7;
      if (n4) {
        if (i4 = u4, a4 && "bis" !== a4)
          throw new RangeError(`Unexpected leap month suffix: ${a4}`);
        const e8 = ia(o4, void 0 !== a4), r2 = `${o4}${a4 || ""}`, n5 = this.getMonthList(i4, t)[r2];
        if (void 0 === n5)
          throw new RangeError(`Unmatched month ${r2} in Chinese year ${i4}`);
        return o4 = n5.monthIndex, { year: i4, month: o4, day: s3, era: void 0, eraYear: u4, monthCode: e8 };
      }
      if (this.validateCalendarDate(e7), void 0 === i4 && (i4 = u4), void 0 === u4 && (u4 = i4), void 0 === o4) {
        const e8 = this.getMonthList(i4, t);
        let n5 = l6.replace("L", "bis").slice(1);
        "0" === n5[0] && (n5 = n5.slice(1));
        let a5 = e8[n5];
        if (o4 = a5 && a5.monthIndex, void 0 === o4 && l6.endsWith("L") && "M13L" != l6 && "constrain" === r) {
          let t2 = l6.slice(1, -1);
          "0" === t2[0] && (t2 = t2.slice(1)), a5 = e8[t2], a5 && (o4 = a5.monthIndex, l6 = ia(t2));
        }
        if (void 0 === o4)
          throw new RangeError(`Unmatched month ${l6} in Chinese year ${i4}`);
      } else if (void 0 === l6) {
        const e8 = this.getMonthList(i4, t), n5 = Qo(e8), a5 = n5.length;
        "reject" === r ? (ii(o4, 1, a5), ii(s3, 1, this.maximumMonthLength())) : (o4 = ri(o4, 1, a5), s3 = ri(s3, 1, this.maximumMonthLength()));
        const u5 = n5.find(([, e9]) => e9.monthIndex === o4);
        if (void 0 === u5)
          throw new RangeError(`Invalid month ${o4} in Chinese year ${i4}`);
        l6 = ia(u5[0].replace("bis", ""), -1 !== u5[0].indexOf("bis"));
      } else {
        const e8 = this.getMonthList(i4, t);
        let r2 = l6.replace("L", "bis").slice(1);
        "0" === r2[0] && (r2 = r2.slice(1));
        const n5 = e8[r2];
        if (!n5)
          throw new RangeError(`Unmatched monthCode ${l6} in Chinese year ${i4}`);
        if (o4 !== n5.monthIndex)
          throw new RangeError(`monthCode ${l6} doesn't correspond to month ${o4} in Chinese year ${i4}`);
      }
      return { ...e7, year: i4, eraYear: u4, month: o4, monthCode: l6, day: s3 };
    }
  };
  var Na = class extends Da {
    constructor() {
      super(...arguments), this.id = "chinese";
    }
  };
  var Oa = class extends Da {
    constructor() {
      super(...arguments), this.id = "dangi";
    }
  };
  var Ca = class {
    constructor(e7) {
      this.helper = e7;
    }
    dateFromFields(e7, t, r) {
      const n4 = new aa(), i4 = ar(e7, this.fields(["day", "month", "monthCode", "year"]), []), o4 = Gt(t), { year: a4, month: s3, day: l6 } = this.helper.calendarToIsoDate(i4, o4, n4), u4 = wr(a4, s3, l6, r);
      return n4.setObject(u4), u4;
    }
    yearMonthFromFields(e7, t, r) {
      const n4 = new aa(), i4 = ar(e7, this.fields(["month", "monthCode", "year"]), []), o4 = Gt(t), { year: a4, month: s3, day: l6 } = this.helper.calendarToIsoDate({ ...i4, day: 1 }, o4, n4), u4 = Ir(a4, s3, r, l6);
      return n4.setObject(u4), u4;
    }
    monthDayFromFields(e7, t, r) {
      const n4 = new aa(), i4 = ar(e7, this.fields(["day", "month", "monthCode", "year"]), []), o4 = Gt(t), { year: a4, month: s3, day: l6 } = this.helper.monthDayFromFields(i4, o4, n4), u4 = Tr(s3, l6, r, a4);
      return n4.setObject(u4), u4;
    }
    fields(e7) {
      let t = e7;
      return Yo.call(t, "year") && (t = [...t, "era", "eraYear"]), t;
    }
    fieldKeysToIgnore(e7) {
      const t = new Zo();
      for (let r = 0; r < e7.length; r++) {
        const n4 = e7[r];
        switch (nt3(Xo, t, [n4]), n4) {
          case "era":
            nt3(Xo, t, ["eraYear"]), nt3(Xo, t, ["year"]);
            break;
          case "eraYear":
            nt3(Xo, t, ["era"]), nt3(Xo, t, ["year"]);
            break;
          case "year":
            nt3(Xo, t, ["era"]), nt3(Xo, t, ["eraYear"]);
            break;
          case "month":
            nt3(Xo, t, ["monthCode"]), this.helper.erasBeginMidYear && (nt3(Xo, t, ["era"]), nt3(Xo, t, ["eraYear"]));
            break;
          case "monthCode":
            nt3(Xo, t, ["month"]), this.helper.erasBeginMidYear && (nt3(Xo, t, ["era"]), nt3(Xo, t, ["eraYear"]));
            break;
          case "day":
            this.helper.erasBeginMidYear && (nt3(Xo, t, ["era"]), nt3(Xo, t, ["eraYear"]));
        }
      }
      return [...nt3(ea, t, [])];
    }
    dateAdd(e7, t, r, n4, i4, o4, a4) {
      const s3 = aa.getCacheForObject(e7), l6 = this.helper.temporalToCalendarDate(e7, s3), u4 = this.helper.addCalendar(l6, { years: t, months: r, weeks: n4, days: i4 }, o4, s3), c3 = this.helper.calendarToIsoDate(u4, "constrain", s3), { year: d5, month: h6, day: f5 } = c3, p6 = wr(d5, h6, f5, a4);
      return new aa(s3).setObject(p6), p6;
    }
    dateUntil(e7, t, r) {
      const n4 = aa.getCacheForObject(e7), i4 = aa.getCacheForObject(t), o4 = this.helper.temporalToCalendarDate(e7, n4), a4 = this.helper.temporalToCalendarDate(t, i4);
      return this.helper.untilCalendar(o4, a4, r, n4);
    }
    year(e7) {
      const t = aa.getCacheForObject(e7);
      return this.helper.temporalToCalendarDate(e7, t).year;
    }
    month(e7) {
      const t = aa.getCacheForObject(e7);
      return this.helper.temporalToCalendarDate(e7, t).month;
    }
    day(e7) {
      const t = aa.getCacheForObject(e7);
      return this.helper.temporalToCalendarDate(e7, t).day;
    }
    era(e7) {
      if (!this.helper.hasEra)
        return;
      const t = aa.getCacheForObject(e7);
      return this.helper.temporalToCalendarDate(e7, t).era;
    }
    eraYear(e7) {
      if (!this.helper.hasEra)
        return;
      const t = aa.getCacheForObject(e7);
      return this.helper.temporalToCalendarDate(e7, t).eraYear;
    }
    monthCode(e7) {
      const t = aa.getCacheForObject(e7);
      return this.helper.temporalToCalendarDate(e7, t).monthCode;
    }
    dayOfWeek(e7) {
      return ta.iso8601.dayOfWeek(e7);
    }
    dayOfYear(e7) {
      const t = aa.getCacheForObject(e7), r = this.helper.isoToCalendarDate(e7, t), n4 = this.helper.startOfCalendarYear(r);
      return this.helper.calendarDaysUntil(n4, r, t) + 1;
    }
    weekOfYear(e7) {
      return ta.iso8601.weekOfYear(e7);
    }
    yearOfWeek(e7) {
      return ta.iso8601.yearOfWeek(e7);
    }
    daysInWeek(e7) {
      return ta.iso8601.daysInWeek(e7);
    }
    daysInMonth(e7) {
      const t = aa.getCacheForObject(e7), r = this.helper.temporalToCalendarDate(e7, t), n4 = this.helper.maximumMonthLength(r);
      if (n4 === this.helper.minimumMonthLength(r))
        return n4;
      const i4 = this.helper.startOfCalendarMonth(r), o4 = this.helper.addMonthsCalendar(i4, 1, "constrain", t);
      return this.helper.calendarDaysUntil(i4, o4, t);
    }
    daysInYear(e7) {
      let t = e7;
      Z4(t, b4) || (t = lr(t));
      const r = aa.getCacheForObject(t), n4 = this.helper.temporalToCalendarDate(t, r), i4 = this.helper.startOfCalendarYear(n4), o4 = this.helper.addCalendar(i4, { years: 1 }, "constrain", r);
      return this.helper.calendarDaysUntil(i4, o4, r);
    }
    monthsInYear(e7) {
      const t = aa.getCacheForObject(e7), r = this.helper.temporalToCalendarDate(e7, t);
      return this.helper.monthsInYear(r, t);
    }
    inLeapYear(e7) {
      let t = e7;
      Z4(t, b4) || (t = lr(t));
      const r = aa.getCacheForObject(t), n4 = this.helper.temporalToCalendarDate(t, r);
      return this.helper.inLeapYear(n4, r);
    }
  };
  for (const e7 of [ca, va, Ia, Ta, xa, Na, Oa, Sa, wa, Ra, ka, ja, ha, fa, pa, ma, ya, ga]) {
    const t = new e7();
    ta[t.id] = new Ca(t);
  }
  var Aa = class {
    constructor(e7, t, r, n4 = "iso8601") {
      vr(this, ut(e7), ut(t), ut(r), Hr(n4));
    }
    get calendarId() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Vr(K3(this, j4));
    }
    get era() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Lr(K3(this, j4), this);
    }
    get eraYear() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Pr(K3(this, j4), this);
    }
    get year() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Or(K3(this, j4), this);
    }
    get month() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Cr(K3(this, j4), this);
    }
    get monthCode() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Ar(K3(this, j4), this);
    }
    get day() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Mr(K3(this, j4), this);
    }
    get dayOfWeek() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Br(K3(this, j4), this);
    }
    get dayOfYear() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return $r(K3(this, j4), this);
    }
    get weekOfYear() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Fr(K3(this, j4), this);
    }
    get yearOfWeek() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Ur(K3(this, j4), this);
    }
    get daysInWeek() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return qr(K3(this, j4), this);
    }
    get daysInMonth() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Yr(K3(this, j4), this);
    }
    get daysInYear() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Wr(K3(this, j4), this);
    }
    get monthsInYear() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return zr(K3(this, j4), this);
    }
    get inLeapYear() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Gr(K3(this, j4), this);
    }
    with(e7, t) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid argument");
      Pt2(e7);
      const r = eo(t), n4 = K3(this, j4), i4 = kr(n4, ["day", "month", "monthCode", "year"]);
      let o4 = ar(this, i4, []);
      return o4 = jr(n4, o4, ar(e7, i4, "partial")), o4 = ar(o4, i4, []), en(n4, o4, r);
    }
    withCalendar(e7) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      const t = Hr(e7);
      return new Aa(K3(this, b4), K3(this, _4), K3(this, E2), t);
    }
    add(e7, t) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      const r = dr(e7), n4 = eo(t);
      return Dr(K3(this, j4), this, r, n4);
    }
    subtract(e7, t) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      const r = ti(dr(e7)), n4 = eo(t);
      return Dr(K3(this, j4), this, r, n4);
    }
    until(e7, t) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return wi("until", this, e7, t);
    }
    since(e7, t) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return wi("since", this, e7, t);
    }
    equals(e7) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7);
      for (const e8 of [b4, _4, E2])
        if (K3(this, e8) !== K3(t, e8))
          return false;
      return Zr(K3(this, j4), K3(t, j4));
    }
    toString(e7) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return _n(this, Qt(eo(e7)));
    }
    toJSON() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return _n(this);
    }
    toLocaleString(e7, t) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return new jo(e7, t).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainDate");
    }
    toPlainDateTime(e7) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      const t = K3(this, b4), r = K3(this, _4), n4 = K3(this, E2), i4 = K3(this, j4);
      if (void 0 === e7)
        return _r(t, r, n4, 0, 0, 0, 0, 0, 0, i4);
      const o4 = pr(e7);
      return _r(t, r, n4, K3(o4, T4), K3(o4, x4), K3(o4, I3), K3(o4, S4), K3(o4, R4), K3(o4, k4), i4);
    }
    toZonedDateTime(e7) {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      let t, r;
      if (it2(e7))
        if (kt2(e7))
          t = e7;
        else {
          const n5 = e7.timeZone;
          void 0 === n5 ? t = nn(e7) : (t = nn(n5), r = e7.plainTime);
        }
      else
        t = nn(e7);
      const n4 = K3(this, b4), i4 = K3(this, _4), o4 = K3(this, E2), a4 = K3(this, j4);
      let s3 = 0, l6 = 0, u4 = 0, c3 = 0, d5 = 0, h6 = 0;
      return void 0 !== r && (r = pr(r), s3 = K3(r, T4), l6 = K3(r, x4), u4 = K3(r, I3), c3 = K3(r, S4), d5 = K3(r, R4), h6 = K3(r, k4)), Rr(K3(fn(t, _r(n4, i4, o4, s3, l6, u4, c3, d5, h6, a4), "compatible"), v4), t, a4);
    }
    toPlainYearMonth() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, j4);
      return tn(e7, ar(this, kr(e7, ["monthCode", "year"]), []));
    }
    toPlainMonthDay() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, j4);
      return rn(e7, ar(this, kr(e7, ["day", "monthCode"]), []));
    }
    getISOFields() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return { calendar: K3(this, j4), isoDay: K3(this, E2), isoMonth: K3(this, _4), isoYear: K3(this, b4) };
    }
    getCalendar() {
      if (!Nt2(this))
        throw new TypeError("invalid receiver");
      return Qr(K3(this, j4));
    }
    static from(e7, t) {
      const r = eo(t);
      return Nt2(e7) ? (Gt(r), wr(K3(e7, b4), K3(e7, _4), K3(e7, E2), K3(e7, j4))) : lr(e7, r);
    }
    static compare(e7, t) {
      const r = lr(e7), n4 = lr(t);
      return zi(K3(r, b4), K3(r, _4), K3(r, E2), K3(n4, b4), K3(n4, _4), K3(n4, E2));
    }
  };
  f3(Aa, "Temporal.PlainDate");
  var Ma = class {
    constructor(e7, t, r, n4 = 0, i4 = 0, o4 = 0, a4 = 0, s3 = 0, l6 = 0, u4 = "iso8601") {
      br(this, ut(e7), ut(t), ut(r), void 0 === n4 ? 0 : ut(n4), void 0 === i4 ? 0 : ut(i4), void 0 === o4 ? 0 : ut(o4), void 0 === a4 ? 0 : ut(a4), void 0 === s3 ? 0 : ut(s3), void 0 === l6 ? 0 : ut(l6), Hr(u4));
    }
    get calendarId() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Vr(K3(this, j4));
    }
    get year() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Or(K3(this, j4), this);
    }
    get month() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Cr(K3(this, j4), this);
    }
    get monthCode() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Ar(K3(this, j4), this);
    }
    get day() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Mr(K3(this, j4), this);
    }
    get hour() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return K3(this, T4);
    }
    get minute() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return K3(this, x4);
    }
    get second() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return K3(this, I3);
    }
    get millisecond() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return K3(this, S4);
    }
    get microsecond() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return K3(this, R4);
    }
    get nanosecond() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return K3(this, k4);
    }
    get era() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Lr(K3(this, j4), this);
    }
    get eraYear() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Pr(K3(this, j4), this);
    }
    get dayOfWeek() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Br(K3(this, j4), this);
    }
    get dayOfYear() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return $r(K3(this, j4), this);
    }
    get weekOfYear() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Fr(K3(this, j4), this);
    }
    get yearOfWeek() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Ur(K3(this, j4), this);
    }
    get daysInWeek() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return qr(K3(this, j4), this);
    }
    get daysInYear() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Wr(K3(this, j4), this);
    }
    get daysInMonth() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Yr(K3(this, j4), this);
    }
    get monthsInYear() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return zr(K3(this, j4), this);
    }
    get inLeapYear() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Gr(K3(this, j4), this);
    }
    with(e7, t) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid argument");
      Pt2(e7);
      const r = eo(t), n4 = K3(this, j4), i4 = kr(n4, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      let o4 = ar(this, i4, []);
      o4 = jr(n4, o4, ar(e7, i4, "partial")), o4 = ar(o4, i4, []);
      const { year: a4, month: s3, day: l6, hour: u4, minute: c3, second: d5, millisecond: h6, microsecond: f5, nanosecond: p6 } = ur(n4, o4, r);
      return _r(a4, s3, l6, u4, c3, d5, h6, f5, p6, n4);
    }
    withPlainTime(e7) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      const t = K3(this, b4), r = K3(this, _4), n4 = K3(this, E2), i4 = K3(this, j4);
      if (void 0 === e7)
        return _r(t, r, n4, 0, 0, 0, 0, 0, 0, i4);
      const o4 = pr(e7);
      return _r(t, r, n4, K3(o4, T4), K3(o4, x4), K3(o4, I3), K3(o4, S4), K3(o4, R4), K3(o4, k4), i4);
    }
    withPlainDate(e7) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7), r = K3(t, b4), n4 = K3(t, _4), i4 = K3(t, E2);
      let o4 = K3(t, j4);
      const a4 = K3(this, T4), s3 = K3(this, x4), l6 = K3(this, I3), u4 = K3(this, S4), c3 = K3(this, R4), d5 = K3(this, k4);
      return o4 = Xr(K3(this, j4), o4), _r(r, n4, i4, a4, s3, l6, u4, c3, d5, o4);
    }
    withCalendar(e7) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      const t = Hr(e7);
      return new Ma(K3(this, b4), K3(this, _4), K3(this, E2), K3(this, T4), K3(this, x4), K3(this, I3), K3(this, S4), K3(this, R4), K3(this, k4), t);
    }
    add(e7, t) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Oi("add", this, e7, t);
    }
    subtract(e7, t) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Oi("subtract", this, e7, t);
    }
    until(e7, t) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return bi("until", this, e7, t);
    }
    since(e7, t) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return bi("since", this, e7, t);
    }
    round(e7) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e7)
        throw new TypeError("options parameter is required");
      const t = "string" == typeof e7 ? to("smallestUnit", e7) : eo(e7), r = Zt(t), n4 = Jt2(t, "halfExpand"), i4 = rr(t, "smallestUnit", "time", tr, ["day"]), o4 = { day: 1, hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[i4];
      Kt2(r, o4, 1 === o4);
      let a4 = K3(this, b4), s3 = K3(this, _4), l6 = K3(this, E2), u4 = K3(this, T4), c3 = K3(this, x4), d5 = K3(this, I3), h6 = K3(this, S4), f5 = K3(this, R4), p6 = K3(this, k4);
      return { year: a4, month: s3, day: l6, hour: u4, minute: c3, second: d5, millisecond: h6, microsecond: f5, nanosecond: p6 } = Bi(a4, s3, l6, u4, c3, d5, h6, f5, p6, r, i4, n4), _r(a4, s3, l6, u4, c3, d5, h6, f5, p6, K3(this, j4));
    }
    equals(e7) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      const t = cr(e7);
      for (const e8 of [b4, _4, E2, T4, x4, I3, S4, R4, k4])
        if (K3(this, e8) !== K3(t, e8))
          return false;
      return Zr(K3(this, j4), K3(t, j4));
    }
    toString(e7) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      const t = eo(e7), r = Qt(t), n4 = Xt(t), i4 = Jt2(t, "trunc"), o4 = rr(t, "smallestUnit", "time", void 0);
      if ("hour" === o4)
        throw new RangeError('smallestUnit must be a time unit other than "hour"');
      const { precision: a4, unit: s3, increment: l6 } = er(o4, n4);
      return En(this, a4, r, { unit: s3, increment: l6, roundingMode: i4 });
    }
    toJSON() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return En(this, "auto");
    }
    toLocaleString(e7, t) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return new jo(e7, t).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainDateTime");
    }
    toZonedDateTime(e7, t) {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      const r = nn(e7);
      return Rr(K3(fn(r, this, Ht(eo(t))), v4), r, K3(this, j4));
    }
    toPlainDate() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return ln(this);
    }
    toPlainYearMonth() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, j4);
      return tn(e7, ar(this, kr(e7, ["monthCode", "year"]), []));
    }
    toPlainMonthDay() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, j4);
      return rn(e7, ar(this, kr(e7, ["day", "monthCode"]), []));
    }
    toPlainTime() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return un(this);
    }
    getISOFields() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return { calendar: K3(this, j4), isoDay: K3(this, E2), isoHour: K3(this, T4), isoMicrosecond: K3(this, R4), isoMillisecond: K3(this, S4), isoMinute: K3(this, x4), isoMonth: K3(this, _4), isoNanosecond: K3(this, k4), isoSecond: K3(this, I3), isoYear: K3(this, b4) };
    }
    getCalendar() {
      if (!Ct(this))
        throw new TypeError("invalid receiver");
      return Qr(K3(this, j4));
    }
    static from(e7, t) {
      const r = eo(t);
      return Ct(e7) ? (Gt(r), _r(K3(e7, b4), K3(e7, _4), K3(e7, E2), K3(e7, T4), K3(e7, x4), K3(e7, I3), K3(e7, S4), K3(e7, R4), K3(e7, k4), K3(e7, j4))) : cr(e7, r);
    }
    static compare(e7, t) {
      const r = cr(e7), n4 = cr(t);
      for (const e8 of [b4, _4, E2, T4, x4, I3, S4, R4, k4]) {
        const t2 = K3(r, e8), i4 = K3(n4, e8);
        if (t2 !== i4)
          return Xi(t2 - i4);
      }
      return 0;
    }
  };
  f3(Ma, "Temporal.PlainDateTime");
  var La = class {
    constructor(e7 = 0, t = 0, r = 0, n4 = 0, i4 = 0, o4 = 0, a4 = 0, s3 = 0, l6 = 0, u4 = 0) {
      const c3 = void 0 === e7 ? 0 : dt2(e7), d5 = void 0 === t ? 0 : dt2(t), h6 = void 0 === r ? 0 : dt2(r), f5 = void 0 === n4 ? 0 : dt2(n4), p6 = void 0 === i4 ? 0 : dt2(i4), m5 = void 0 === o4 ? 0 : dt2(o4), y5 = void 0 === a4 ? 0 : dt2(a4), g5 = void 0 === s3 ? 0 : dt2(s3), v6 = void 0 === l6 ? 0 : dt2(l6), w5 = void 0 === u4 ? 0 : dt2(u4);
      di(c3, d5, h6, f5, p6, m5, y5, g5, v6, w5), Q4(this), X4(this, M4, c3), X4(this, L3, d5), X4(this, P4, h6), X4(this, B4, f5), X4(this, $3, p6), X4(this, F3, m5), X4(this, U5, y5), X4(this, q4, g5), X4(this, Y4, v6), X4(this, W3, w5);
    }
    get years() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, M4);
    }
    get months() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, L3);
    }
    get weeks() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, P4);
    }
    get days() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, B4);
    }
    get hours() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, $3);
    }
    get minutes() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, F3);
    }
    get seconds() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, U5);
    }
    get milliseconds() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, q4);
    }
    get microseconds() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, Y4);
    }
    get nanoseconds() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return K3(this, W3);
    }
    get sign() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return Wn(K3(this, M4), K3(this, L3), K3(this, P4), K3(this, B4), K3(this, $3), K3(this, F3), K3(this, U5), K3(this, q4), K3(this, Y4), K3(this, W3));
    }
    get blank() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return 0 === Wn(K3(this, M4), K3(this, L3), K3(this, P4), K3(this, B4), K3(this, $3), K3(this, F3), K3(this, U5), K3(this, q4), K3(this, Y4), K3(this, W3));
    }
    with(e7) {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      const t = ar(e7, ["days", "hours", "microseconds", "milliseconds", "minutes", "months", "nanoseconds", "seconds", "weeks", "years"], "partial"), { years: r = K3(this, M4), months: n4 = K3(this, L3), weeks: i4 = K3(this, P4), days: o4 = K3(this, B4), hours: a4 = K3(this, $3), minutes: s3 = K3(this, F3), seconds: l6 = K3(this, U5), milliseconds: u4 = K3(this, q4), microseconds: c3 = K3(this, Y4), nanoseconds: d5 = K3(this, W3) } = t;
      return new La(r, n4, i4, o4, a4, s3, l6, u4, c3, d5);
    }
    negated() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return ti(this);
    }
    abs() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return new La(Math.abs(K3(this, M4)), Math.abs(K3(this, L3)), Math.abs(K3(this, P4)), Math.abs(K3(this, B4)), Math.abs(K3(this, $3)), Math.abs(K3(this, F3)), Math.abs(K3(this, U5)), Math.abs(K3(this, q4)), Math.abs(K3(this, Y4)), Math.abs(K3(this, W3)));
    }
    add(e7, t) {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return Di("add", this, e7, t);
    }
    subtract(e7, t) {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return Di("subtract", this, e7, t);
    }
    round(e7) {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e7)
        throw new TypeError("options parameter is required");
      let t = K3(this, M4), r = K3(this, L3), n4 = K3(this, P4), i4 = K3(this, B4), o4 = K3(this, $3), a4 = K3(this, F3), s3 = K3(this, U5), l6 = K3(this, q4), u4 = K3(this, Y4), c3 = K3(this, W3), h6 = ir(t, r, n4, i4, o4, a4, s3, l6, u4, c3);
      const f5 = "string" == typeof e7 ? to("smallestUnit", e7) : eo(e7);
      let p6 = rr(f5, "largestUnit", "datetime", void 0, ["auto"]), y5 = nr(f5);
      const g5 = Zt(f5), v6 = Jt2(f5, "halfExpand");
      let w5 = rr(f5, "smallestUnit", "datetime", void 0), b7 = true;
      w5 || (b7 = false, w5 = "nanosecond"), h6 = or(h6, w5);
      let _5 = true;
      if (p6 || (_5 = false, p6 = h6), "auto" === p6 && (p6 = h6), !b7 && !_5)
        throw new RangeError("at least one of smallestUnit or largestUnit is required");
      if (or(p6, w5) !== p6)
        throw new RangeError(`largestUnit ${p6} cannot be smaller than smallestUnit ${w5}`);
      const E4 = { hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[w5];
      return void 0 !== E4 && Kt2(g5, E4, false), { years: t, months: r, weeks: n4, days: i4 } = Xn(t, r, n4, i4, p6, y5), { years: t, months: r, weeks: n4, days: i4, hours: o4, minutes: a4, seconds: s3, milliseconds: l6, microseconds: u4, nanoseconds: c3 } = Wi(t, r, n4, i4, o4, a4, s3, l6, u4, c3, g5, w5, v6, y5), { years: t, months: r, weeks: n4, days: i4, hours: o4, minutes: a4, seconds: s3, milliseconds: l6, microseconds: u4, nanoseconds: c3 } = Yi(t, r, n4, i4, o4, a4, s3, l6, u4, c3, g5, w5, v6, y5), { days: i4, hours: o4, minutes: a4, seconds: s3, milliseconds: l6, microseconds: u4, nanoseconds: c3 } = Zn(i4, o4, a4, s3, l6, u4, c3, p6, y5), { years: t, months: r, weeks: n4, days: i4 } = function(e8, t2, r2, n5, i5, o5) {
        const a5 = m4("%Temporal.Duration%"), s4 = Wn(e8, t2, r2, n5, 0, 0, 0, 0, 0, 0);
        if (0 === s4)
          return { years: e8, months: t2, weeks: r2, days: n5 };
        const l7 = d3.BigInt(s4);
        let u5, c4, h7 = d3.BigInt(e8), f6 = d3.BigInt(t2), p7 = d3.BigInt(r2), y6 = d3.BigInt(n5);
        o5 && (c4 = lr(o5), u5 = K3(c4, j4));
        const g6 = new a5(s4), v7 = new a5(0, s4), w6 = new a5(0, 0, s4);
        switch (i5) {
          case "year": {
            if (!u5)
              throw new RangeError("a starting point is required for years balancing");
            const e9 = "string" != typeof u5 ? rt3(u5, "dateAdd") : void 0;
            let t3, r3, n6;
            for ({ relativeTo: t3, days: r3 } = Ui(u5, c4, g6, e9); d3.greaterThanOrEqual(mt2(y6), d3.BigInt(Ee(r3))); )
              y6 = d3.subtract(y6, d3.BigInt(r3)), h7 = d3.add(h7, l7), c4 = t3, { relativeTo: t3, days: r3 } = Ui(u5, c4, g6, e9);
            for ({ relativeTo: t3, days: n6 } = Ui(u5, c4, v7, e9); d3.greaterThanOrEqual(mt2(y6), d3.BigInt(Ee(n6))); )
              y6 = d3.subtract(y6, d3.BigInt(n6)), f6 = d3.add(f6, l7), c4 = t3, { relativeTo: t3, days: n6 } = Ui(u5, c4, v7, e9);
            t3 = Dr(u5, c4, g6, void 0, e9);
            const i6 = "string" != typeof u5 ? rt3(u5, "dateUntil") : void 0, o6 = Ne(null);
            o6.largestUnit = "month";
            let a6 = Nr(u5, c4, t3, o6, i6), s5 = K3(a6, L3);
            for (; d3.greaterThanOrEqual(mt2(f6), d3.BigInt(Ee(s5))); ) {
              f6 = d3.subtract(f6, d3.BigInt(s5)), h7 = d3.add(h7, l7), c4 = t3, t3 = Dr(u5, c4, g6, void 0, e9);
              const r4 = Ne(null);
              r4.largestUnit = "month", a6 = Nr(u5, c4, t3, r4, i6), s5 = K3(a6, L3);
            }
            break;
          }
          case "month": {
            if (!u5)
              throw new RangeError("a starting point is required for months balancing");
            const e9 = "string" != typeof u5 ? rt3(u5, "dateAdd") : void 0;
            let t3, r3;
            for ({ relativeTo: t3, days: r3 } = Ui(u5, c4, v7, e9); d3.greaterThanOrEqual(mt2(y6), d3.BigInt(Ee(r3))); )
              y6 = d3.subtract(y6, d3.BigInt(r3)), f6 = d3.add(f6, l7), c4 = t3, { relativeTo: t3, days: r3 } = Ui(u5, c4, v7, e9);
            break;
          }
          case "week": {
            if (!u5)
              throw new RangeError("a starting point is required for weeks balancing");
            const e9 = "string" != typeof u5 ? rt3(u5, "dateAdd") : void 0;
            let t3, r3;
            for ({ relativeTo: t3, days: r3 } = Ui(u5, c4, w6, e9); d3.greaterThanOrEqual(mt2(y6), d3.BigInt(Ee(r3))); )
              y6 = d3.subtract(y6, d3.BigInt(r3)), p7 = d3.add(p7, l7), c4 = t3, { relativeTo: t3, days: r3 } = Ui(u5, c4, w6, e9);
            break;
          }
        }
        return { years: d3.toNumber(h7), months: d3.toNumber(f6), weeks: d3.toNumber(p7), days: d3.toNumber(y6) };
      }(t, r, n4, i4, p6, y5), new La(t, r, n4, i4, o4, a4, s3, l6, u4, c3);
    }
    total(e7) {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      let t = K3(this, M4), r = K3(this, L3), n4 = K3(this, P4), i4 = K3(this, B4), o4 = K3(this, $3), a4 = K3(this, F3), s3 = K3(this, U5), l6 = K3(this, q4), u4 = K3(this, Y4), c3 = K3(this, W3);
      if (void 0 === e7)
        throw new TypeError("options argument is required");
      const d5 = "string" == typeof e7 ? to("unit", e7) : eo(e7), h6 = nr(d5), f5 = rr(d5, "unit", "datetime", tr);
      let p6;
      ({ years: t, months: r, weeks: n4, days: i4 } = Xn(t, r, n4, i4, f5, h6)), Lt2(h6) && (p6 = qi(h6, t, r, n4, 0));
      let m5 = Kn(i4, o4, a4, s3, l6, u4, c3, f5, p6);
      if ("positive overflow" === m5)
        return 1 / 0;
      if ("negative overflow" === m5)
        return -1 / 0;
      ({ days: i4, hours: o4, minutes: a4, seconds: s3, milliseconds: l6, microseconds: u4, nanoseconds: c3 } = m5);
      const { total: y5 } = Wi(t, r, n4, i4, o4, a4, s3, l6, u4, c3, 1, f5, "trunc", h6);
      return y5;
    }
    toString(e7) {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      const t = eo(e7), r = Xt(t), n4 = Jt2(t, "trunc"), i4 = rr(t, "smallestUnit", "time", void 0);
      if ("hour" === i4 || "minute" === i4)
        throw new RangeError('smallestUnit must be a time unit other than "hours" or "minutes"');
      const { precision: o4, unit: a4, increment: s3 } = er(i4, r);
      return bn(this, o4, { unit: a4, increment: s3, roundingMode: n4 });
    }
    toJSON() {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return bn(this);
    }
    toLocaleString(e7, t) {
      if (!Dt(this))
        throw new TypeError("invalid receiver");
      return "undefined" != typeof Intl && void 0 !== Intl.DurationFormat ? new Intl.DurationFormat(e7, t).format(this) : (console.warn("Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat."), bn(this));
    }
    valueOf() {
      throw new TypeError("use compare() to compare Temporal.Duration");
    }
    static from(e7) {
      return Dt(e7) ? new La(K3(e7, M4), K3(e7, L3), K3(e7, P4), K3(e7, B4), K3(e7, $3), K3(e7, F3), K3(e7, U5), K3(e7, q4), K3(e7, Y4), K3(e7, W3)) : dr(e7);
    }
    static compare(e7, t, r) {
      const n4 = dr(e7), i4 = dr(t), o4 = nr(eo(r)), a4 = K3(n4, M4), s3 = K3(n4, L3), l6 = K3(n4, P4);
      let u4 = K3(n4, B4);
      const c3 = K3(n4, $3), h6 = K3(n4, F3), f5 = K3(n4, U5), p6 = K3(n4, q4), m5 = K3(n4, Y4);
      let y5 = K3(n4, W3);
      const g5 = K3(i4, M4), v6 = K3(i4, L3), w5 = K3(i4, P4);
      let b7 = K3(i4, B4);
      const _5 = K3(i4, $3), E4 = K3(i4, F3), T6 = K3(i4, U5), x6 = K3(i4, q4), I5 = K3(i4, Y4);
      let S6 = K3(i4, W3);
      const R5 = ei(o4, a4, s3, l6, u4), k5 = ei(o4, g5, v6, w5, b7);
      0 === a4 && 0 === g5 && 0 === s3 && 0 === v6 && 0 === l6 && 0 === w5 || ({ days: u4 } = Xn(a4, s3, l6, u4, "day", o4), { days: b7 } = Xn(g5, v6, w5, b7, "day", o4));
      const j5 = Vn(u4, c3, h6, f5, p6, m5, y5, R5), D4 = Vn(b7, _5, E4, T6, x6, I5, S6, k5);
      return Xi(d3.toNumber(d3.subtract(j5, D4)));
    }
  };
  f3(La, "Temporal.Duration");
  var Pa = Object.create;
  var Ba = class {
    constructor(e7, t, r = "iso8601", n4 = 1972) {
      Er(this, ut(e7), ut(t), Hr(r), ut(n4));
    }
    get monthCode() {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      return Ar(K3(this, j4), this);
    }
    get day() {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      return Mr(K3(this, j4), this);
    }
    get calendarId() {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      return Vr(K3(this, j4));
    }
    with(e7, t) {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid argument");
      Pt2(e7);
      const r = eo(t), n4 = K3(this, j4), i4 = kr(n4, ["day", "month", "monthCode", "year"]);
      let o4 = ar(this, i4, []);
      return o4 = jr(n4, o4, ar(e7, i4, "partial")), o4 = ar(o4, i4, []), rn(n4, o4, r);
    }
    equals(e7) {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      const t = fr(e7);
      for (const e8 of [_4, E2, b4])
        if (K3(this, e8) !== K3(t, e8))
          return false;
      return Zr(K3(this, j4), K3(t, j4));
    }
    toString(e7) {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      return Tn(this, Qt(eo(e7)));
    }
    toJSON() {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      return Tn(this);
    }
    toLocaleString(e7, t) {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      return new jo(e7, t).format(this);
    }
    valueOf() {
      throw new TypeError("use equals() to compare Temporal.PlainMonthDay");
    }
    toPlainDate(e7) {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("argument should be an object");
      const t = K3(this, j4), r = kr(t, ["day", "monthCode"]), n4 = ar(this, r, []), i4 = kr(t, ["year"]);
      let o4 = jr(t, n4, ar(e7, i4, []));
      o4 = ar(o4, [.../* @__PURE__ */ new Set([...r, ...i4])], []);
      const a4 = Pa(null);
      return a4.overflow = "reject", en(t, o4, a4);
    }
    getISOFields() {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      return { calendar: K3(this, j4), isoDay: K3(this, E2), isoMonth: K3(this, _4), isoYear: K3(this, b4) };
    }
    getCalendar() {
      if (!Mt2(this))
        throw new TypeError("invalid receiver");
      return Qr(K3(this, j4));
    }
    static from(e7, t) {
      const r = eo(t);
      return Mt2(e7) ? (Gt(r), Tr(K3(e7, _4), K3(e7, E2), K3(e7, j4), K3(e7, b4))) : fr(e7, r);
    }
  };
  f3(Ba, "Temporal.PlainMonthDay");
  var $a = () => new (m4("%Temporal.Instant%"))(Zi());
  var Fa = (e7, t = Ki()) => {
    const r = nn(t), n4 = Hr(e7);
    return hn(r, $a(), n4);
  };
  var Ua = (e7 = Ki()) => hn(nn(e7), $a(), "iso8601");
  var qa = (e7, t = Ki()) => {
    const r = nn(t), n4 = Hr(e7);
    return Rr(Zi(), r, n4);
  };
  var Ya = { instant: $a, plainDateTime: Fa, plainDateTimeISO: Ua, plainDate: (e7, t = Ki()) => ln(Fa(e7, t)), plainDateISO: (e7 = Ki()) => ln(Ua(e7)), plainTimeISO: (e7 = Ki()) => un(Ua(e7)), timeZoneId: () => Ki(), zonedDateTime: qa, zonedDateTimeISO: (e7 = Ki()) => qa("iso8601", e7), [Symbol.toStringTag]: "Temporal.Now" };
  Object.defineProperty(Ya, Symbol.toStringTag, { value: "Temporal.Now", writable: false, enumerable: false, configurable: true });
  var Wa = Object.assign;
  function za(e7, t, r) {
    let n4 = K3(e7, T4), i4 = K3(e7, x4), o4 = K3(e7, I3), a4 = K3(e7, S4), s3 = K3(e7, R4), l6 = K3(e7, k4);
    if (r) {
      const { unit: e8, increment: t2, roundingMode: u4 } = r;
      ({ hour: n4, minute: i4, second: o4, millisecond: a4, microsecond: s3, nanosecond: l6 } = $i(n4, i4, o4, a4, s3, l6, t2, e8, u4));
    }
    return `${gn(n4)}:${gn(i4)}${vn(o4, a4, s3, l6, t)}`;
  }
  var Ga = class {
    constructor(e7 = 0, t = 0, r = 0, n4 = 0, i4 = 0, o4 = 0) {
      const a4 = void 0 === e7 ? 0 : ut(e7), s3 = void 0 === t ? 0 : ut(t), l6 = void 0 === r ? 0 : ut(r), u4 = void 0 === n4 ? 0 : ut(n4), c3 = void 0 === i4 ? 0 : ut(i4), d5 = void 0 === o4 ? 0 : ut(o4);
      si(a4, s3, l6, u4, c3, d5), Q4(this), X4(this, T4, a4), X4(this, x4, s3), X4(this, I3, l6), X4(this, S4, u4), X4(this, R4, c3), X4(this, k4, d5);
    }
    get hour() {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return K3(this, T4);
    }
    get minute() {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return K3(this, x4);
    }
    get second() {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return K3(this, I3);
    }
    get millisecond() {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return K3(this, S4);
    }
    get microsecond() {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return K3(this, R4);
    }
    get nanosecond() {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return K3(this, k4);
    }
    with(e7, t) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid argument");
      Pt2(e7);
      const r = Gt(eo(t)), n4 = sr(e7, "partial"), i4 = sr(this);
      let { hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3 } = Wa(i4, n4);
      return { hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3 } = Wt2(o4, a4, s3, l6, u4, c3, r), new Ga(o4, a4, s3, l6, u4, c3);
    }
    add(e7) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return Ci("add", this, e7);
    }
    subtract(e7) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return Ci("subtract", this, e7);
    }
    until(e7, t) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return _i("until", this, e7, t);
    }
    since(e7, t) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return _i("since", this, e7, t);
    }
    round(e7) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e7)
        throw new TypeError("options parameter is required");
      const t = "string" == typeof e7 ? to("smallestUnit", e7) : eo(e7), r = Zt(t), n4 = Jt2(t, "halfExpand"), i4 = rr(t, "smallestUnit", "time", tr);
      Kt2(r, { hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[i4], false);
      let o4 = K3(this, T4), a4 = K3(this, x4), s3 = K3(this, I3), l6 = K3(this, S4), u4 = K3(this, R4), c3 = K3(this, k4);
      return { hour: o4, minute: a4, second: s3, millisecond: l6, microsecond: u4, nanosecond: c3 } = $i(o4, a4, s3, l6, u4, c3, r, i4, n4), new Ga(o4, a4, s3, l6, u4, c3);
    }
    equals(e7) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      const t = pr(e7);
      for (const e8 of [T4, x4, I3, S4, R4, k4])
        if (K3(this, e8) !== K3(t, e8))
          return false;
      return true;
    }
    toString(e7) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      const t = eo(e7), r = Xt(t), n4 = Jt2(t, "trunc"), i4 = rr(t, "smallestUnit", "time", void 0);
      if ("hour" === i4)
        throw new RangeError('smallestUnit must be a time unit other than "hour"');
      const { precision: o4, unit: a4, increment: s3 } = er(i4, r);
      return za(this, o4, { unit: a4, increment: s3, roundingMode: n4 });
    }
    toJSON() {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return za(this, "auto");
    }
    toLocaleString(e7, t) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return new jo(e7, t).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainTime");
    }
    toPlainDateTime(e7) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7), r = K3(t, b4), n4 = K3(t, _4), i4 = K3(t, E2), o4 = K3(t, j4);
      return _r(r, n4, i4, K3(this, T4), K3(this, x4), K3(this, I3), K3(this, S4), K3(this, R4), K3(this, k4), o4);
    }
    toZonedDateTime(e7) {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid argument");
      const t = e7.plainDate;
      if (void 0 === t)
        throw new TypeError("missing date property");
      const r = lr(t), n4 = e7.timeZone;
      if (void 0 === n4)
        throw new TypeError("missing timeZone property");
      const i4 = nn(n4), o4 = K3(r, b4), a4 = K3(r, _4), s3 = K3(r, E2), l6 = K3(r, j4), u4 = K3(this, T4), c3 = K3(this, x4), d5 = K3(this, I3), h6 = K3(this, S4), f5 = K3(this, R4), p6 = K3(this, k4);
      return Rr(K3(fn(i4, new (m4("%Temporal.PlainDateTime%"))(o4, a4, s3, u4, c3, d5, h6, f5, p6, l6), "compatible"), v4), i4, l6);
    }
    getISOFields() {
      if (!Ot2(this))
        throw new TypeError("invalid receiver");
      return { isoHour: K3(this, T4), isoMicrosecond: K3(this, R4), isoMillisecond: K3(this, S4), isoMinute: K3(this, x4), isoNanosecond: K3(this, k4), isoSecond: K3(this, I3) };
    }
    static from(e7, t) {
      const r = Gt(eo(t));
      return Ot2(e7) ? new Ga(K3(e7, T4), K3(e7, x4), K3(e7, I3), K3(e7, S4), K3(e7, R4), K3(e7, k4)) : pr(e7, r);
    }
    static compare(e7, t) {
      const r = pr(e7), n4 = pr(t);
      for (const e8 of [T4, x4, I3, S4, R4, k4]) {
        const t2 = K3(r, e8), i4 = K3(n4, e8);
        if (t2 !== i4)
          return Xi(t2 - i4);
      }
      return 0;
    }
  };
  f3(Ga, "Temporal.PlainTime");
  var Ha = class {
    constructor(e7) {
      if (arguments.length < 1)
        throw new RangeError("missing argument: identifier is required");
      const t = kn(e7);
      Q4(this), X4(this, w4, t);
    }
    get id() {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      return K3(this, w4);
    }
    getOffsetNanosecondsFor(e7) {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      const t = hr(e7), r = K3(this, w4);
      return Sn(r) ? Rn(r) : jn(r, K3(t, v4));
    }
    getOffsetStringFor(e7) {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      return dn(this, hr(e7));
    }
    getPlainDateTimeFor(e7, t = "iso8601") {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      return hn(this, hr(e7), Hr(t));
    }
    getInstantFor(e7, t) {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      return fn(this, cr(e7), Ht(eo(t)));
    }
    getPossibleInstantsFor(e7) {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      const t = cr(e7), r = m4("%Temporal.Instant%"), n4 = K3(this, w4);
      if (Sn(n4)) {
        const e8 = On(K3(t, b4), K3(t, _4), K3(t, E2), K3(t, T4), K3(t, x4), K3(t, I3), K3(t, S4), K3(t, R4), K3(t, k4));
        if (null === e8)
          throw new RangeError("DateTime outside of supported range");
        const i5 = Rn(n4);
        return [new r(d3.subtract(e8, d3.BigInt(i5)))];
      }
      const i4 = function(e8, t2, r2, n5, i5, o4, a4, s3, l6, u4) {
        const c3 = On(t2, r2, n5, i5, o4, a4, s3, l6, u4);
        if (null === c3)
          throw new RangeError("DateTime outside of supported range");
        let h6 = d3.subtract(c3, ze);
        d3.lessThan(h6, Ge) && (h6 = c3);
        let f5 = d3.add(c3, ze);
        d3.greaterThan(f5, He) && (f5 = c3);
        const p6 = jn(e8, h6), m5 = jn(e8, f5);
        return (p6 === m5 ? [p6] : [p6, m5]).map((h7) => {
          const f6 = d3.subtract(c3, d3.BigInt(h7)), p7 = An(e8, f6);
          if (t2 === p7.year && r2 === p7.month && n5 === p7.day && i5 === p7.hour && o4 === p7.minute && a4 === p7.second && s3 === p7.millisecond && l6 === p7.microsecond && u4 === p7.nanosecond)
            return f6;
        }).filter((e9) => void 0 !== e9);
      }(n4, K3(t, b4), K3(t, _4), K3(t, E2), K3(t, T4), K3(t, x4), K3(t, I3), K3(t, S4), K3(t, R4), K3(t, k4));
      return i4.map((e8) => new r(e8));
    }
    getNextTransition(e7) {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      const t = hr(e7), r = K3(this, w4);
      if (Sn(r) || "UTC" === r)
        return null;
      let n4 = K3(t, v4);
      const i4 = m4("%Temporal.Instant%");
      return n4 = Pn(r, n4), null === n4 ? null : new i4(n4);
    }
    getPreviousTransition(e7) {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      const t = hr(e7), r = K3(this, w4);
      if (Sn(r) || "UTC" === r)
        return null;
      let n4 = K3(t, v4);
      const i4 = m4("%Temporal.Instant%");
      return n4 = Bn(r, n4), null === n4 ? null : new i4(n4);
    }
    toString() {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      return K3(this, w4);
    }
    toJSON() {
      if (!kt2(this))
        throw new TypeError("invalid receiver");
      return K3(this, w4);
    }
    static from(e7) {
      return an(nn(e7));
    }
  };
  f3(Ha, "Temporal.TimeZone"), p4("Temporal.TimeZone.prototype.getOffsetNanosecondsFor", Ha.prototype.getOffsetNanosecondsFor), p4("Temporal.TimeZone.prototype.getPossibleInstantsFor", Ha.prototype.getPossibleInstantsFor);
  var Ja = Object.create;
  var Va = class {
    constructor(e7, t, r = "iso8601", n4 = 1) {
      xr(this, ut(e7), ut(t), Hr(r), ut(n4));
    }
    get year() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Or(K3(this, j4), this);
    }
    get month() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Cr(K3(this, j4), this);
    }
    get monthCode() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Ar(K3(this, j4), this);
    }
    get calendarId() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Vr(K3(this, j4));
    }
    get era() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Lr(K3(this, j4), this);
    }
    get eraYear() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Pr(K3(this, j4), this);
    }
    get daysInMonth() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Yr(K3(this, j4), this);
    }
    get daysInYear() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Wr(K3(this, j4), this);
    }
    get monthsInYear() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return zr(K3(this, j4), this);
    }
    get inLeapYear() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Gr(K3(this, j4), this);
    }
    with(e7, t) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid argument");
      Pt2(e7);
      const r = eo(t), n4 = K3(this, j4), i4 = kr(n4, ["month", "monthCode", "year"]);
      let o4 = ar(this, i4, []);
      return o4 = jr(n4, o4, ar(e7, i4, "partial")), o4 = ar(o4, i4, []), tn(n4, o4, r);
    }
    add(e7, t) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Ai("add", this, e7, t);
    }
    subtract(e7, t) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Ai("subtract", this, e7, t);
    }
    until(e7, t) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Ei("until", this, e7, t);
    }
    since(e7, t) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Ei("since", this, e7, t);
    }
    equals(e7) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      const t = mr(e7);
      for (const e8 of [b4, _4, E2])
        if (K3(this, e8) !== K3(t, e8))
          return false;
      return Zr(K3(this, j4), K3(t, j4));
    }
    toString(e7) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return xn(this, Qt(eo(e7)));
    }
    toJSON() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return xn(this);
    }
    toLocaleString(e7, t) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return new jo(e7, t).format(this);
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.PlainYearMonth");
    }
    toPlainDate(e7) {
      if (!At(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("argument should be an object");
      const t = K3(this, j4), r = kr(t, ["monthCode", "year"]), n4 = ar(this, r, []), i4 = kr(t, ["day"]);
      let o4 = jr(t, n4, ar(e7, i4, []));
      o4 = ar(o4, [.../* @__PURE__ */ new Set([...r, ...i4])], []);
      const a4 = Ja(null);
      return a4.overflow = "reject", en(t, o4, a4);
    }
    getISOFields() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return { calendar: K3(this, j4), isoDay: K3(this, E2), isoMonth: K3(this, _4), isoYear: K3(this, b4) };
    }
    getCalendar() {
      if (!At(this))
        throw new TypeError("invalid receiver");
      return Qr(K3(this, j4));
    }
    static from(e7, t) {
      const r = eo(t);
      return At(e7) ? (Gt(r), Ir(K3(e7, b4), K3(e7, _4), K3(e7, j4), K3(e7, E2))) : mr(e7, r);
    }
    static compare(e7, t) {
      const r = mr(e7), n4 = mr(t);
      return zi(K3(r, b4), K3(r, _4), K3(r, E2), K3(n4, b4), K3(n4, _4), K3(n4, E2));
    }
  };
  f3(Va, "Temporal.PlainYearMonth");
  var Qa = jo.prototype.resolvedOptions;
  var Za = Object.create;
  var Ka = class {
    constructor(e7, t, r = "iso8601") {
      if (arguments.length < 1)
        throw new TypeError("missing argument: epochNanoseconds is required");
      Sr(this, Qi(e7), nn(t), Hr(r));
    }
    get calendarId() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Vr(K3(this, j4));
    }
    get timeZoneId() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return on(K3(this, A3));
    }
    get year() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Or(K3(this, j4), Xa(this));
    }
    get month() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Cr(K3(this, j4), Xa(this));
    }
    get monthCode() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Ar(K3(this, j4), Xa(this));
    }
    get day() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Mr(K3(this, j4), Xa(this));
    }
    get hour() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return K3(Xa(this), T4);
    }
    get minute() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return K3(Xa(this), x4);
    }
    get second() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return K3(Xa(this), I3);
    }
    get millisecond() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return K3(Xa(this), S4);
    }
    get microsecond() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return K3(Xa(this), R4);
    }
    get nanosecond() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return K3(Xa(this), k4);
    }
    get era() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Lr(K3(this, j4), Xa(this));
    }
    get eraYear() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Pr(K3(this, j4), Xa(this));
    }
    get epochSeconds() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, v4);
      return d3.toNumber(Hi(e7, Ue));
    }
    get epochMilliseconds() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, v4);
      return d3.toNumber(Hi(e7, Fe));
    }
    get epochMicroseconds() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Vi(Hi(K3(this, v4), $e));
    }
    get epochNanoseconds() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Vi(K3(this, v4));
    }
    get dayOfWeek() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Br(K3(this, j4), Xa(this));
    }
    get dayOfYear() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return $r(K3(this, j4), Xa(this));
    }
    get weekOfYear() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Fr(K3(this, j4), Xa(this));
    }
    get yearOfWeek() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Ur(K3(this, j4), Xa(this));
    }
    get hoursInDay() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const e7 = Xa(this), t = m4("%Temporal.PlainDateTime%"), r = K3(e7, b4), n4 = K3(e7, _4), i4 = K3(e7, E2), o4 = new t(r, n4, i4, 0, 0, 0, 0, 0, 0), a4 = xi(r, n4, i4, 0, 0, 0, 1, "reject"), s3 = new t(a4.year, a4.month, a4.day, 0, 0, 0, 0, 0, 0), l6 = K3(this, A3), u4 = K3(fn(l6, o4, "compatible"), v4), c3 = K3(fn(l6, s3, "compatible"), v4);
      return Ji(d3.subtract(c3, u4), Ye);
    }
    get daysInWeek() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return qr(K3(this, j4), Xa(this));
    }
    get daysInMonth() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Yr(K3(this, j4), Xa(this));
    }
    get daysInYear() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Wr(K3(this, j4), Xa(this));
    }
    get monthsInYear() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return zr(K3(this, j4), Xa(this));
    }
    get inLeapYear() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Gr(K3(this, j4), Xa(this));
    }
    get offset() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return dn(K3(this, A3), K3(this, C3));
    }
    get offsetNanoseconds() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return cn(K3(this, A3), K3(this, C3));
    }
    with(e7, t) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      if (!it2(e7))
        throw new TypeError("invalid zoned-date-time-like");
      Pt2(e7);
      const r = eo(t), n4 = K3(this, j4);
      let i4 = kr(n4, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
      i4.push("offset");
      let o4 = ar(this, i4, ["offset"]);
      o4 = jr(n4, o4, ar(e7, i4, "partial")), o4 = ar(o4, i4, ["offset"]);
      const a4 = Ht(r), s3 = Vt(r, "prefer");
      let { year: l6, month: u4, day: c3, hour: d5, minute: h6, second: f5, millisecond: p6, microsecond: m5, nanosecond: y5 } = ur(n4, o4, r);
      const g5 = Rn(o4.offset), v6 = K3(this, A3);
      return Rr(yr(l6, u4, c3, d5, h6, f5, p6, m5, y5, "option", g5, v6, a4, s3, false), v6, n4);
    }
    withPlainDate(e7) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const t = lr(e7), r = K3(t, b4), n4 = K3(t, _4), i4 = K3(t, E2);
      let o4 = K3(t, j4);
      const a4 = Xa(this), s3 = K3(a4, T4), l6 = K3(a4, x4), u4 = K3(a4, I3), c3 = K3(a4, S4), d5 = K3(a4, R4), h6 = K3(a4, k4);
      o4 = Xr(K3(this, j4), o4);
      const f5 = K3(this, A3);
      return Rr(K3(fn(f5, new (m4("%Temporal.PlainDateTime%"))(r, n4, i4, s3, l6, u4, c3, d5, h6, o4), "compatible"), v4), f5, o4);
    }
    withPlainTime(e7) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const t = m4("%Temporal.PlainTime%"), r = void 0 === e7 ? new t() : pr(e7), n4 = Xa(this), i4 = K3(n4, b4), o4 = K3(n4, _4), a4 = K3(n4, E2), s3 = K3(this, j4), l6 = K3(r, T4), u4 = K3(r, x4), c3 = K3(r, I3), d5 = K3(r, S4), h6 = K3(r, R4), f5 = K3(r, k4), p6 = K3(this, A3);
      return Rr(K3(fn(p6, new (m4("%Temporal.PlainDateTime%"))(i4, o4, a4, l6, u4, c3, d5, h6, f5, s3), "compatible"), v4), p6, s3);
    }
    withTimeZone(e7) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const t = nn(e7);
      return Rr(K3(this, v4), t, K3(this, j4));
    }
    withCalendar(e7) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const t = Hr(e7);
      return Rr(K3(this, v4), K3(this, A3), t);
    }
    add(e7, t) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Mi("add", this, e7, t);
    }
    subtract(e7, t) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Mi("subtract", this, e7, t);
    }
    until(e7, t) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Ti("until", this, e7, t);
    }
    since(e7, t) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Ti("since", this, e7, t);
    }
    round(e7) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      if (void 0 === e7)
        throw new TypeError("options parameter is required");
      const t = "string" == typeof e7 ? to("smallestUnit", e7) : eo(e7), r = Zt(t), n4 = Jt2(t, "halfExpand"), i4 = rr(t, "smallestUnit", "time", tr, ["day"]), o4 = { day: 1, hour: 24, minute: 60, second: 60, millisecond: 1e3, microsecond: 1e3, nanosecond: 1e3 }[i4];
      Kt2(r, o4, 1 === o4);
      const a4 = Xa(this);
      let s3 = K3(a4, b4), l6 = K3(a4, _4), u4 = K3(a4, E2), c3 = K3(a4, T4), h6 = K3(a4, x4), f5 = K3(a4, I3), p6 = K3(a4, S4), y5 = K3(a4, R4), g5 = K3(a4, k4);
      const w5 = m4("%Temporal.PlainDateTime%"), D4 = K3(this, A3), N10 = K3(this, j4), O3 = fn(D4, new w5(K3(a4, b4), K3(a4, _4), K3(a4, E2), 0, 0, 0, 0, 0, 0), "compatible"), M6 = ji(O3, D4, N10, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0), L4 = d3.subtract(M6, d3.BigInt(K3(O3, v4)));
      if (d3.lessThanOrEqual(L4, Me))
        throw new RangeError("cannot round a ZonedDateTime in a calendar with zero or negative length days");
      return { year: s3, month: l6, day: u4, hour: c3, minute: h6, second: f5, millisecond: p6, microsecond: y5, nanosecond: g5 } = Bi(s3, l6, u4, c3, h6, f5, p6, y5, g5, r, i4, n4, d3.toNumber(L4)), Rr(yr(s3, l6, u4, c3, h6, f5, p6, y5, g5, "option", cn(D4, K3(this, C3)), D4, "compatible", "prefer", false), D4, K3(this, j4));
    }
    equals(e7) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const t = gr(e7), r = K3(this, v4), n4 = K3(t, v4);
      return !!d3.equal(d3.BigInt(r), d3.BigInt(n4)) && !!sn(K3(this, A3), K3(t, A3)) && Zr(K3(this, j4), K3(t, j4));
    }
    toString(e7) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const t = eo(e7), r = Qt(t), n4 = Xt(t), i4 = function(e8) {
        return no(e8, "offset", ["auto", "never"], "auto");
      }(t), o4 = Jt2(t, "trunc"), a4 = rr(t, "smallestUnit", "time", void 0);
      if ("hour" === a4)
        throw new RangeError('smallestUnit must be a time unit other than "hour"');
      const s3 = function(e8) {
        return no(e8, "timeZoneName", ["auto", "never", "critical"], "auto");
      }(t), { precision: l6, unit: u4, increment: c3 } = er(a4, n4);
      return In(this, l6, r, s3, i4, { unit: u4, increment: c3, roundingMode: o4 });
    }
    toLocaleString(e7, t) {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const r = eo(t), n4 = Za(null);
      if (St2(n4, r, ["timeZone"]), void 0 !== r.timeZone)
        throw new TypeError("ZonedDateTime toLocaleString does not accept a timeZone option");
      void 0 === n4.year && void 0 === n4.month && void 0 === n4.day && void 0 === n4.weekday && void 0 === n4.dateStyle && void 0 === n4.hour && void 0 === n4.minute && void 0 === n4.second && void 0 === n4.timeStyle && void 0 === n4.dayPeriod && void 0 === n4.timeZoneName && (n4.timeZoneName = "short");
      let i4 = on(K3(this, A3));
      if (Sn(i4))
        throw new RangeError("toLocaleString does not support offset string time zones");
      i4 = kn(i4), n4.timeZone = i4;
      const o4 = new jo(e7, n4), a4 = nt3(Qa, o4, []).calendar, s3 = Vr(K3(this, j4));
      if ("iso8601" !== s3 && "iso8601" !== a4 && a4 !== s3)
        throw new RangeError(`cannot format ZonedDateTime with calendar ${s3} in locale with calendar ${a4}`);
      return o4.format(K3(this, C3));
    }
    toJSON() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return In(this, "auto");
    }
    valueOf() {
      throw new TypeError("use compare() or equals() to compare Temporal.ZonedDateTime");
    }
    startOfDay() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const e7 = Xa(this), t = m4("%Temporal.PlainDateTime%"), r = K3(this, j4), n4 = new t(K3(e7, b4), K3(e7, _4), K3(e7, E2), 0, 0, 0, 0, 0, 0, r), i4 = K3(this, A3);
      return Rr(K3(fn(i4, n4, "compatible"), v4), i4, r);
    }
    toInstant() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return new (m4("%Temporal.Instant%"))(K3(this, v4));
    }
    toPlainDate() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return ln(Xa(this));
    }
    toPlainTime() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return un(Xa(this));
    }
    toPlainDateTime() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Xa(this);
    }
    toPlainYearMonth() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, j4);
      return tn(e7, ar(this, kr(e7, ["monthCode", "year"]), []));
    }
    toPlainMonthDay() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const e7 = K3(this, j4);
      return rn(e7, ar(this, kr(e7, ["day", "monthCode"]), []));
    }
    getISOFields() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      const e7 = Xa(this), t = K3(this, A3);
      return { calendar: K3(this, j4), isoDay: K3(e7, E2), isoHour: K3(e7, T4), isoMicrosecond: K3(e7, R4), isoMillisecond: K3(e7, S4), isoMinute: K3(e7, x4), isoMonth: K3(e7, _4), isoNanosecond: K3(e7, k4), isoSecond: K3(e7, I3), isoYear: K3(e7, b4), offset: dn(t, K3(this, C3)), timeZone: t };
    }
    getCalendar() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return Qr(K3(this, j4));
    }
    getTimeZone() {
      if (!Lt2(this))
        throw new TypeError("invalid receiver");
      return an(K3(this, A3));
    }
    static from(e7, t) {
      const r = eo(t);
      return Lt2(e7) ? (Ht(r), Vt(r, "reject"), Gt(r), Rr(K3(e7, v4), K3(e7, A3), K3(e7, j4))) : gr(e7, r);
    }
    static compare(e7, t) {
      const r = gr(e7), n4 = gr(t), i4 = K3(r, v4), o4 = K3(n4, v4);
      return d3.lessThan(d3.BigInt(i4), d3.BigInt(o4)) ? -1 : d3.greaterThan(d3.BigInt(i4), d3.BigInt(o4)) ? 1 : 0;
    }
  };
  function Xa(e7) {
    return hn(K3(e7, A3), K3(e7, C3), K3(e7, j4));
  }
  f3(Ka, "Temporal.ZonedDateTime");
  var es = Object.freeze({ __proto__: null, Calendar: ra, Duration: La, Instant: qo, Now: Ya, PlainDate: Aa, PlainDateTime: Ma, PlainMonthDay: Ba, PlainTime: Ga, PlainYearMonth: Va, TimeZone: Ha, ZonedDateTime: Ka });
  var ts = [qo, ra, Aa, Ma, La, Ba, Ga, Ha, Va, Ka];
  for (const e7 of ts) {
    const t = Object.getOwnPropertyDescriptor(e7, "prototype");
    (t.configurable || t.enumerable || t.writable) && (t.configurable = false, t.enumerable = false, t.writable = false, Object.defineProperty(e7, "prototype", t));
  }
  var rs;
  var ns;
  !function(e7) {
    e7.BlankNode = "BlankNode", e7.IRI = "NamedNode", e7.Literal = "Literal", e7.Undefined = "Undefined";
  }(rs || (rs = {})), function(e7) {
    e7.Boolean = "http://www.w3.org/2001/XMLSchema#boolean", e7.Integer = "http://www.w3.org/2001/XMLSchema#integer", e7.NonNegativeInteger = "http://www.w3.org/2001/XMLSchema#nonNegativeInteger", e7.NonPositiveInteger = "http://www.w3.org/2001/XMLSchema#nonPositiveInteger", e7.NegativeInteger = "http://www.w3.org/2001/XMLSchema#negativeInteger", e7.PositiveInteger = "http://www.w3.org/2001/XMLSchema#positiveInteger", e7.DateTime = "http://www.w3.org/2001/XMLSchema#dateTime", e7.Double = "http://www.w3.org/2001/XMLSchema#double";
  }(ns || (ns = {}));
  var is = (e7) => e7.toExponential(15).replace(/(\d)0*e\+?/, "$1E");
  function os(e7) {
    if (!e7.graph.value)
      return i3.DEFAULT_GRAPH_NODE_NAME;
    if ("BlankNode" !== e7.graph.termType)
      throw new Error("graph node is not of BlankNode type");
    return e7.graph.value;
  }
  var as = (e7) => e7.sort((e8, t) => e8 < t ? -1 : e8 > t ? 1 : 0);
  var ss = new TextEncoder();
  var ls = (e7) => {
    const t = e7 / 2n;
    return { min: t - e7 + 1n, max: t };
  };
  var us = (e7, t, r) => {
    switch (e7) {
      case ns.Boolean:
        switch (t) {
          case "false":
          case "0":
            return false;
          case "true":
          case "1":
            return true;
          default:
            throw new Error("incorrect boolean value");
        }
      case ns.Integer:
      case ns.NonNegativeInteger:
      case ns.NonPositiveInteger:
      case ns.NegativeInteger:
      case ns.PositiveInteger:
        const n4 = BigInt(t), { min: i4, max: o4 } = function(e8, t2) {
          switch (e8) {
            case ns.PositiveInteger:
              return { min: 1n, max: t2 - 1n };
            case ns.NonNegativeInteger:
              return { min: 0n, max: t2 - 1n };
            case ns.Integer:
              return ls(t2);
            case ns.NegativeInteger:
              return { min: ls(t2).min, max: -1n };
            case ns.NonPositiveInteger:
              return { min: ls(t2).min, max: 0n };
            default:
              throw new Error(`unsupported XSD type: ${e8}`);
          }
        }(e7, r);
        if (n4 > o4)
          throw new Error(`integer exceeds maximum value: ${n4}`);
        if (n4 < i4)
          throw new Error(`integer is below minimum value: ${n4}`);
        return n4;
      case ns.DateTime:
        if (isNaN(Date.parse(t)))
          throw new Error(`error: error parsing time string ${t}`);
        return /^\d{4}-\d{2}-\d{2}$/.test(t) ? es.Instant.from(new Date(t).toISOString()) : es.Instant.from(t);
      case ns.Double:
        return is(parseFloat(t));
      default:
        return t;
    }
  };
  var cs;
  var ds = new TextEncoder();
  var hs = class {
    constructor(e7, t = a3) {
      this.value = e7, this.h = t;
    }
    isString() {
      return "string" == typeof this.value;
    }
    asString() {
      if (!this.isString())
        throw i3.ERRORS.MT_VALUE_INCORRECT_TYPE;
      return this.value.toString();
    }
    isTime() {
      return this.value instanceof es.Instant;
    }
    asTime() {
      if (!this.isTime())
        throw i3.ERRORS.MT_VALUE_INCORRECT_TYPE;
      return this.value;
    }
    isNumber() {
      return "number" == typeof this.value;
    }
    asNumber() {
      if (!this.isNumber())
        throw i3.ERRORS.MT_VALUE_INCORRECT_TYPE;
      return this.value;
    }
    isBool() {
      return "boolean" == typeof this.value;
    }
    asBool() {
      if (!this.isBool())
        throw i3.ERRORS.MT_VALUE_INCORRECT_TYPE;
      return this.value;
    }
    mtEntry() {
      return hs.mkValueMtEntry(this.h, this.value);
    }
    isBigInt() {
      return "bigint" == typeof this.value;
    }
    asBigInt() {
      if (!this.isBigInt())
        throw i3.ERRORS.MT_VALUE_INCORRECT_TYPE;
      return this.value;
    }
    static async mkValueInt(e7, t) {
      return t >= 0 ? BigInt(t) : e7.prime() + BigInt(t);
    }
  };
  cs = hs, hs.mkValueMtEntry = (e7, t) => {
    switch (typeof t) {
      case "number":
        return hs.mkValueInt(e7, t);
      case "string":
        return hs.mkValueString(e7, t);
      case "boolean":
        return hs.mkValueBool(e7, t);
      case "bigint":
        return hs.mkValueBigInt(e7, t);
      default:
        if (t instanceof es.Instant)
          return hs.mkValueTime(e7, t);
        throw new Error("error: unexpected type " + typeof t);
    }
  }, hs.mkValueUInt = (e7, t) => BigInt.asUintN(64, t), hs.mkValueBool = (e7, t) => t ? e7.hash([BigInt.asIntN(64, BigInt(1))]) : e7.hash([BigInt.asIntN(64, BigInt(0))]), hs.mkValueString = (e7, t) => e7.hashBytes(ds.encode(t)), hs.mkValueTime = async (e7, t) => cs.mkValueInt(e7, t.epochNanoseconds), hs.mkValueBigInt = async (e7, t) => {
    const r = e7.prime();
    if (t >= r)
      throw new Error(`value is too big: ${t}`);
    if (t < 0n) {
      const { min: e8 } = ls(r);
      if (t < e8)
        throw new Error(`value is too small: ${t}`);
      return t + r;
    }
    return t;
  };
  var fs = {};
  var ps = class e3 {
    constructor(e7, t = /* @__PURE__ */ new Map(), r = 0) {
      this.prefix = e7, this._existing = t, this.counter = r;
    }
    clone() {
      const { prefix: t, _existing: r, counter: n4 } = this;
      return new e3(t, new Map(r), n4);
    }
    getId(e7) {
      const t = e7 && this._existing.get(e7);
      if (t)
        return t;
      const r = this.prefix + this.counter;
      return this.counter++, e7 && this._existing.set(e7, r), r;
    }
    hasId(e7) {
      return this._existing.has(e7);
    }
    getOldIds() {
      return [...this._existing.keys()];
    }
  };
  var ms = self.crypto || self.msCrypto;
  var ys = class {
    constructor(e7) {
      if (!ms || !ms.subtle)
        throw new Error("crypto.subtle not found.");
      if ("sha256" === e7)
        this.algorithm = { name: "SHA-256" };
      else {
        if ("sha1" !== e7)
          throw new Error(`Unsupported algorithm "${e7}".`);
        this.algorithm = { name: "SHA-1" };
      }
      this._content = "";
    }
    update(e7) {
      this._content += e7;
    }
    async digest() {
      const e7 = new TextEncoder().encode(this._content), t = new Uint8Array(await ms.subtle.digest(this.algorithm, e7));
      let r = "";
      for (let e8 = 0; e8 < t.length; ++e8)
        r += t[e8].toString(16).padStart(2, "0");
      return r;
    }
  };
  var gs = class {
    constructor(e7) {
      this.current = e7.sort(), this.done = false, this.dir = /* @__PURE__ */ new Map();
      for (let t = 0; t < e7.length; ++t)
        this.dir.set(e7[t], true);
    }
    hasNext() {
      return !this.done;
    }
    next() {
      const { current: e7, dir: t } = this, r = e7.slice();
      let n4 = null, i4 = 0;
      const o4 = e7.length;
      for (let r2 = 0; r2 < o4; ++r2) {
        const a4 = e7[r2], s3 = t.get(a4);
        (null === n4 || a4 > n4) && (s3 && r2 > 0 && a4 > e7[r2 - 1] || !s3 && r2 < o4 - 1 && a4 > e7[r2 + 1]) && (n4 = a4, i4 = r2);
      }
      if (null === n4)
        this.done = true;
      else {
        const r2 = t.get(n4) ? i4 - 1 : i4 + 1;
        e7[i4] = e7[r2], e7[r2] = n4;
        for (const r3 of e7)
          r3 > n4 && t.set(r3, !t.get(r3));
      }
      return r;
    }
  };
  var vs = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString";
  var ws = "http://www.w3.org/2001/XMLSchema#string";
  var bs = "NamedNode";
  var _s = "BlankNode";
  var Es = "Literal";
  var Ts = "DefaultGraph";
  var xs = {};
  (() => {
    const e7 = "(?:<([^:]+:[^>]*)>)", t = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD_", r = t + "0-9-\xB7\u0300-\u036F\u203F-\u2040", n4 = "(_:(?:[" + t + "0-9])(?:(?:[" + r + ".])*(?:[" + r + "]))?)", i4 = "[ \\t]+", o4 = "[ \\t]*", a4 = "(?:" + e7 + "|" + n4 + ")" + i4, s3 = e7 + i4, l6 = "(?:" + e7 + "|" + n4 + "|" + ('(?:"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"(?:' + ("(?:\\^\\^" + e7 + ")") + "|(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*)))?)") + ")" + o4, u4 = "(?:\\.|(?:(?:" + e7 + "|" + n4 + ")" + o4 + "\\.))";
    xs.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, xs.empty = new RegExp("^" + o4 + "$"), xs.quad = new RegExp("^" + o4 + a4 + s3 + l6 + u4 + o4 + "$");
  })();
  var Is = class e4 {
    static parse(e7) {
      const t = [], r = {}, n4 = e7.split(xs.eoln);
      let i4 = 0;
      for (const e8 of n4) {
        if (i4++, xs.empty.test(e8))
          continue;
        const n5 = e8.match(xs.quad);
        if (null === n5)
          throw new Error("N-Quads parse error on line " + i4 + ".");
        const o4 = { subject: null, predicate: null, object: null, graph: null };
        if (void 0 !== n5[1] ? o4.subject = { termType: bs, value: n5[1] } : o4.subject = { termType: _s, value: n5[2] }, o4.predicate = { termType: bs, value: n5[3] }, void 0 !== n5[4] ? o4.object = { termType: bs, value: n5[4] } : void 0 !== n5[5] ? o4.object = { termType: _s, value: n5[5] } : (o4.object = { termType: Es, value: void 0, datatype: { termType: bs } }, void 0 !== n5[7] ? o4.object.datatype.value = n5[7] : void 0 !== n5[8] ? (o4.object.datatype.value = vs, o4.object.language = n5[8]) : o4.object.datatype.value = ws, o4.object.value = js(n5[6])), void 0 !== n5[9] ? o4.graph = { termType: bs, value: n5[9] } : void 0 !== n5[10] ? o4.graph = { termType: _s, value: n5[10] } : o4.graph = { termType: Ts, value: "" }, o4.graph.value in r) {
          let e9 = true;
          const n6 = r[o4.graph.value];
          for (const t2 of n6)
            if (Ss(t2, o4)) {
              e9 = false;
              break;
            }
          e9 && (n6.push(o4), t.push(o4));
        } else
          r[o4.graph.value] = [o4], t.push(o4);
      }
      return t;
    }
    static serialize(t) {
      Array.isArray(t) || (t = e4.legacyDatasetToQuads(t));
      const r = [];
      for (const n4 of t)
        r.push(e4.serializeQuad(n4));
      return r.sort().join("");
    }
    static serializeQuadComponents(e7, t, r, n4) {
      let i4 = "";
      return e7.termType === bs ? i4 += `<${e7.value}>` : i4 += `${e7.value}`, i4 += ` <${t.value}> `, r.termType === bs ? i4 += `<${r.value}>` : r.termType === _s ? i4 += r.value : (i4 += `"${function(e8) {
        return e8.replace(Rs, function(e9) {
          switch (e9) {
            case '"':
              return '\\"';
            case "\\":
              return "\\\\";
            case "\n":
              return "\\n";
            case "\r":
              return "\\r";
          }
        });
      }(r.value)}"`, r.datatype.value === vs ? r.language && (i4 += `@${r.language}`) : r.datatype.value !== ws && (i4 += `^^<${r.datatype.value}>`)), n4.termType === bs ? i4 += ` <${n4.value}>` : n4.termType === _s && (i4 += ` ${n4.value}`), i4 += " .\n", i4;
    }
    static serializeQuad(t) {
      return e4.serializeQuadComponents(t.subject, t.predicate, t.object, t.graph);
    }
    static legacyDatasetToQuads(e7) {
      const t = [], r = { "blank node": _s, IRI: bs, literal: Es };
      for (const n4 in e7) {
        e7[n4].forEach((e8) => {
          const i4 = {};
          for (const t2 in e8) {
            const n5 = e8[t2], o4 = { termType: r[n5.type], value: n5.value };
            o4.termType === Es && (o4.datatype = { termType: bs }, "datatype" in n5 && (o4.datatype.value = n5.datatype), "language" in n5 ? ("datatype" in n5 || (o4.datatype.value = vs), o4.language = n5.language) : "datatype" in n5 || (o4.datatype.value = ws)), i4[t2] = o4;
          }
          i4.graph = "@default" === n4 ? { termType: Ts, value: "" } : { termType: n4.startsWith("_:") ? _s : bs, value: n4 }, t.push(i4);
        });
      }
      return t;
    }
  };
  function Ss(e7, t) {
    return e7.subject.termType === t.subject.termType && e7.object.termType === t.object.termType && (e7.subject.value === t.subject.value && e7.predicate.value === t.predicate.value && e7.object.value === t.object.value && (e7.object.termType !== Es || e7.object.datatype.termType === t.object.datatype.termType && e7.object.language === t.object.language && e7.object.datatype.value === t.object.datatype.value));
  }
  var Rs = /["\\\n\r]/g;
  var ks = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
  function js(e7) {
    return e7.replace(ks, function(e8, t, r, n4) {
      if (t)
        switch (t) {
          case "t":
            return "	";
          case "b":
            return "\b";
          case "n":
            return "\n";
          case "r":
            return "\r";
          case "f":
            return "\f";
          case '"':
            return '"';
          case "'":
            return "'";
          case "\\":
            return "\\";
        }
      if (r)
        return String.fromCharCode(parseInt(r, 16));
      if (n4)
        throw new Error("Unsupported U escape");
    });
  }
  var Ds = ps;
  var Ns = ys;
  var Os = gs;
  var Cs = Is;
  var As = class {
    constructor({ createMessageDigest: e7 = () => new Ns("sha256"), canonicalIdMap: t = /* @__PURE__ */ new Map(), maxDeepIterations: r = 1 / 0 } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new Ds("_:c14n", t), this.createMessageDigest = e7, this.maxDeepIterations = r, this.quads = null, this.deepIterations = null;
    }
    async main(e7) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = e7;
      for (const t2 of e7)
        this._addBlankNodeQuadInfo({ quad: t2, component: t2.subject }), this._addBlankNodeQuadInfo({ quad: t2, component: t2.object }), this._addBlankNodeQuadInfo({ quad: t2, component: t2.graph });
      const t = /* @__PURE__ */ new Map(), r = [...this.blankNodeInfo.keys()];
      let n4 = 0;
      for (const e8 of r)
        ++n4 % 100 == 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: e8, hashToBlankNodes: t });
      const i4 = [...t.keys()].sort(), o4 = [];
      for (const e8 of i4) {
        const r2 = t.get(e8);
        if (r2.length > 1) {
          o4.push(r2);
          continue;
        }
        const n5 = r2[0];
        this.canonicalIssuer.getId(n5);
      }
      for (const e8 of o4) {
        const t2 = [];
        for (const r2 of e8) {
          if (this.canonicalIssuer.hasId(r2))
            continue;
          const e9 = new Ds("_:b");
          e9.getId(r2);
          const n5 = await this.hashNDegreeQuads(r2, e9);
          t2.push(n5);
        }
        t2.sort(Ms);
        for (const e9 of t2) {
          const t3 = e9.issuer.getOldIds();
          for (const e10 of t3)
            this.canonicalIssuer.getId(e10);
        }
      }
      const a4 = [];
      for (const e8 of this.quads) {
        const t2 = Cs.serializeQuadComponents(this._componentWithCanonicalId(e8.subject), e8.predicate, this._componentWithCanonicalId(e8.object), this._componentWithCanonicalId(e8.graph));
        a4.push(t2);
      }
      return a4.sort(), a4.join("");
    }
    async hashFirstDegreeQuads(e7) {
      const t = [], r = this.blankNodeInfo.get(e7), n4 = r.quads;
      for (const r2 of n4) {
        const n5 = { subject: null, predicate: r2.predicate, object: null, graph: null };
        n5.subject = this.modifyFirstDegreeComponent(e7, r2.subject, "subject"), n5.object = this.modifyFirstDegreeComponent(e7, r2.object, "object"), n5.graph = this.modifyFirstDegreeComponent(e7, r2.graph, "graph"), t.push(Cs.serializeQuad(n5));
      }
      t.sort();
      const i4 = this.createMessageDigest();
      for (const e8 of t)
        i4.update(e8);
      return r.hash = await i4.digest(), r.hash;
    }
    async hashRelatedBlankNode(e7, t, r, n4) {
      let i4;
      i4 = this.canonicalIssuer.hasId(e7) ? this.canonicalIssuer.getId(e7) : r.hasId(e7) ? r.getId(e7) : this.blankNodeInfo.get(e7).hash;
      const o4 = this.createMessageDigest();
      return o4.update(n4), "g" !== n4 && o4.update(this.getRelatedPredicate(t)), o4.update(i4), o4.digest();
    }
    async hashNDegreeQuads(e7, t) {
      const r = this.deepIterations.get(e7) || 0;
      if (r > this.maxDeepIterations)
        throw new Error(`Maximum deep iterations (${this.maxDeepIterations}) exceeded.`);
      this.deepIterations.set(e7, r + 1);
      const n4 = this.createMessageDigest(), i4 = await this.createHashToRelated(e7, t), o4 = [...i4.keys()].sort();
      for (const e8 of o4) {
        n4.update(e8);
        let r2, o5 = "";
        const a4 = new Os(i4.get(e8));
        let s3 = 0;
        for (; a4.hasNext(); ) {
          const e9 = a4.next();
          ++s3 % 3 == 0 && await this._yield();
          let n5 = t.clone(), i5 = "";
          const l6 = [];
          let u4 = false;
          for (const t2 of e9)
            if (this.canonicalIssuer.hasId(t2) ? i5 += this.canonicalIssuer.getId(t2) : (n5.hasId(t2) || l6.push(t2), i5 += n5.getId(t2)), 0 !== o5.length && i5 > o5) {
              u4 = true;
              break;
            }
          if (!u4) {
            for (const e10 of l6) {
              const t2 = await this.hashNDegreeQuads(e10, n5);
              if (i5 += n5.getId(e10), i5 += `<${t2.hash}>`, n5 = t2.issuer, 0 !== o5.length && i5 > o5) {
                u4 = true;
                break;
              }
            }
            u4 || (0 === o5.length || i5 < o5) && (o5 = i5, r2 = n5);
          }
        }
        n4.update(o5), t = r2;
      }
      return { hash: await n4.digest(), issuer: t };
    }
    modifyFirstDegreeComponent(e7, t) {
      return "BlankNode" !== t.termType ? t : { termType: "BlankNode", value: t.value === e7 ? "_:a" : "_:z" };
    }
    getRelatedPredicate(e7) {
      return `<${e7.predicate.value}>`;
    }
    async createHashToRelated(e7, t) {
      const r = /* @__PURE__ */ new Map(), n4 = this.blankNodeInfo.get(e7).quads;
      let i4 = 0;
      for (const o4 of n4)
        ++i4 % 100 == 0 && await this._yield(), await Promise.all([this._addRelatedBlankNodeHash({ quad: o4, component: o4.subject, position: "s", id: e7, issuer: t, hashToRelated: r }), this._addRelatedBlankNodeHash({ quad: o4, component: o4.object, position: "o", id: e7, issuer: t, hashToRelated: r }), this._addRelatedBlankNodeHash({ quad: o4, component: o4.graph, position: "g", id: e7, issuer: t, hashToRelated: r })]);
      return r;
    }
    async _hashAndTrackBlankNode({ id: e7, hashToBlankNodes: t }) {
      const r = await this.hashFirstDegreeQuads(e7), n4 = t.get(r);
      n4 ? n4.push(e7) : t.set(r, [e7]);
    }
    _addBlankNodeQuadInfo({ quad: e7, component: t }) {
      if ("BlankNode" !== t.termType)
        return;
      const r = t.value, n4 = this.blankNodeInfo.get(r);
      n4 ? n4.quads.add(e7) : this.blankNodeInfo.set(r, { quads: /* @__PURE__ */ new Set([e7]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: e7, component: t, position: r, id: n4, issuer: i4, hashToRelated: o4 }) {
      if ("BlankNode" !== t.termType || t.value === n4)
        return;
      const a4 = t.value, s3 = await this.hashRelatedBlankNode(a4, e7, i4, r), l6 = o4.get(s3);
      l6 ? l6.push(a4) : o4.set(s3, [a4]);
    }
    _componentWithCanonicalId(e7) {
      return "BlankNode" !== e7.termType || e7.value.startsWith(this.canonicalIssuer.prefix) ? e7 : { termType: "BlankNode", value: this.canonicalIssuer.getId(e7.value) };
    }
    async _yield() {
      return new Promise((e7) => setImmediate(e7));
    }
  };
  function Ms(e7, t) {
    return e7.hash < t.hash ? -1 : e7.hash > t.hash ? 1 : 0;
  }
  var Ls = ys;
  var Ps = As;
  var Bs = class extends Ps {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new Ls("sha1");
    }
    modifyFirstDegreeComponent(e7, t, r) {
      return "BlankNode" !== t.termType ? t : "graph" === r ? { termType: "BlankNode", value: "_:g" } : { termType: "BlankNode", value: t.value === e7 ? "_:a" : "_:z" };
    }
    getRelatedPredicate(e7) {
      return e7.predicate.value;
    }
    async createHashToRelated(e7, t) {
      const r = /* @__PURE__ */ new Map(), n4 = this.blankNodeInfo.get(e7).quads;
      let i4 = 0;
      for (const o4 of n4) {
        let n5, a4;
        if ("BlankNode" === o4.subject.termType && o4.subject.value !== e7)
          a4 = o4.subject.value, n5 = "p";
        else {
          if ("BlankNode" !== o4.object.termType || o4.object.value === e7)
            continue;
          a4 = o4.object.value, n5 = "r";
        }
        ++i4 % 100 == 0 && await this._yield();
        const s3 = await this.hashRelatedBlankNode(a4, o4, t, n5), l6 = r.get(s3);
        l6 ? l6.push(a4) : r.set(s3, [a4]);
      }
      return r;
    }
  };
  var $s = ps;
  var Fs = ys;
  var Us = gs;
  var qs = Is;
  var Ys = class {
    constructor({ createMessageDigest: e7 = () => new Fs("sha256"), canonicalIdMap: t = /* @__PURE__ */ new Map(), maxDeepIterations: r = 1 / 0 } = {}) {
      this.name = "URDNA2015", this.blankNodeInfo = /* @__PURE__ */ new Map(), this.canonicalIssuer = new $s("_:c14n", t), this.createMessageDigest = e7, this.maxDeepIterations = r, this.quads = null, this.deepIterations = null;
    }
    main(e7) {
      this.deepIterations = /* @__PURE__ */ new Map(), this.quads = e7;
      for (const t2 of e7)
        this._addBlankNodeQuadInfo({ quad: t2, component: t2.subject }), this._addBlankNodeQuadInfo({ quad: t2, component: t2.object }), this._addBlankNodeQuadInfo({ quad: t2, component: t2.graph });
      const t = /* @__PURE__ */ new Map(), r = [...this.blankNodeInfo.keys()];
      for (const e8 of r)
        this._hashAndTrackBlankNode({ id: e8, hashToBlankNodes: t });
      const n4 = [...t.keys()].sort(), i4 = [];
      for (const e8 of n4) {
        const r2 = t.get(e8);
        if (r2.length > 1) {
          i4.push(r2);
          continue;
        }
        const n5 = r2[0];
        this.canonicalIssuer.getId(n5);
      }
      for (const e8 of i4) {
        const t2 = [];
        for (const r2 of e8) {
          if (this.canonicalIssuer.hasId(r2))
            continue;
          const e9 = new $s("_:b");
          e9.getId(r2);
          const n5 = this.hashNDegreeQuads(r2, e9);
          t2.push(n5);
        }
        t2.sort(Ws);
        for (const e9 of t2) {
          const t3 = e9.issuer.getOldIds();
          for (const e10 of t3)
            this.canonicalIssuer.getId(e10);
        }
      }
      const o4 = [];
      for (const e8 of this.quads) {
        const t2 = qs.serializeQuadComponents(this._componentWithCanonicalId({ component: e8.subject }), e8.predicate, this._componentWithCanonicalId({ component: e8.object }), this._componentWithCanonicalId({ component: e8.graph }));
        o4.push(t2);
      }
      return o4.sort(), o4.join("");
    }
    hashFirstDegreeQuads(e7) {
      const t = [], r = this.blankNodeInfo.get(e7), n4 = r.quads;
      for (const r2 of n4) {
        const n5 = { subject: null, predicate: r2.predicate, object: null, graph: null };
        n5.subject = this.modifyFirstDegreeComponent(e7, r2.subject, "subject"), n5.object = this.modifyFirstDegreeComponent(e7, r2.object, "object"), n5.graph = this.modifyFirstDegreeComponent(e7, r2.graph, "graph"), t.push(qs.serializeQuad(n5));
      }
      t.sort();
      const i4 = this.createMessageDigest();
      for (const e8 of t)
        i4.update(e8);
      return r.hash = i4.digest(), r.hash;
    }
    hashRelatedBlankNode(e7, t, r, n4) {
      let i4;
      i4 = this.canonicalIssuer.hasId(e7) ? this.canonicalIssuer.getId(e7) : r.hasId(e7) ? r.getId(e7) : this.blankNodeInfo.get(e7).hash;
      const o4 = this.createMessageDigest();
      return o4.update(n4), "g" !== n4 && o4.update(this.getRelatedPredicate(t)), o4.update(i4), o4.digest();
    }
    hashNDegreeQuads(e7, t) {
      const r = this.deepIterations.get(e7) || 0;
      if (r > this.maxDeepIterations)
        throw new Error(`Maximum deep iterations (${this.maxDeepIterations}) exceeded.`);
      this.deepIterations.set(e7, r + 1);
      const n4 = this.createMessageDigest(), i4 = this.createHashToRelated(e7, t), o4 = [...i4.keys()].sort();
      for (const e8 of o4) {
        n4.update(e8);
        let r2, o5 = "";
        const a4 = new Us(i4.get(e8));
        for (; a4.hasNext(); ) {
          const e9 = a4.next();
          let n5 = t.clone(), i5 = "";
          const s3 = [];
          let l6 = false;
          for (const t2 of e9)
            if (this.canonicalIssuer.hasId(t2) ? i5 += this.canonicalIssuer.getId(t2) : (n5.hasId(t2) || s3.push(t2), i5 += n5.getId(t2)), 0 !== o5.length && i5 > o5) {
              l6 = true;
              break;
            }
          if (!l6) {
            for (const e10 of s3) {
              const t2 = this.hashNDegreeQuads(e10, n5);
              if (i5 += n5.getId(e10), i5 += `<${t2.hash}>`, n5 = t2.issuer, 0 !== o5.length && i5 > o5) {
                l6 = true;
                break;
              }
            }
            l6 || (0 === o5.length || i5 < o5) && (o5 = i5, r2 = n5);
          }
        }
        n4.update(o5), t = r2;
      }
      return { hash: n4.digest(), issuer: t };
    }
    modifyFirstDegreeComponent(e7, t) {
      return "BlankNode" !== t.termType ? t : { termType: "BlankNode", value: t.value === e7 ? "_:a" : "_:z" };
    }
    getRelatedPredicate(e7) {
      return `<${e7.predicate.value}>`;
    }
    createHashToRelated(e7, t) {
      const r = /* @__PURE__ */ new Map(), n4 = this.blankNodeInfo.get(e7).quads;
      for (const i4 of n4)
        this._addRelatedBlankNodeHash({ quad: i4, component: i4.subject, position: "s", id: e7, issuer: t, hashToRelated: r }), this._addRelatedBlankNodeHash({ quad: i4, component: i4.object, position: "o", id: e7, issuer: t, hashToRelated: r }), this._addRelatedBlankNodeHash({ quad: i4, component: i4.graph, position: "g", id: e7, issuer: t, hashToRelated: r });
      return r;
    }
    _hashAndTrackBlankNode({ id: e7, hashToBlankNodes: t }) {
      const r = this.hashFirstDegreeQuads(e7), n4 = t.get(r);
      n4 ? n4.push(e7) : t.set(r, [e7]);
    }
    _addBlankNodeQuadInfo({ quad: e7, component: t }) {
      if ("BlankNode" !== t.termType)
        return;
      const r = t.value, n4 = this.blankNodeInfo.get(r);
      n4 ? n4.quads.add(e7) : this.blankNodeInfo.set(r, { quads: /* @__PURE__ */ new Set([e7]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: e7, component: t, position: r, id: n4, issuer: i4, hashToRelated: o4 }) {
      if ("BlankNode" !== t.termType || t.value === n4)
        return;
      const a4 = t.value, s3 = this.hashRelatedBlankNode(a4, e7, i4, r), l6 = o4.get(s3);
      l6 ? l6.push(a4) : o4.set(s3, [a4]);
    }
    _componentWithCanonicalId({ component: e7 }) {
      return "BlankNode" !== e7.termType || e7.value.startsWith(this.canonicalIssuer.prefix) ? e7 : { termType: "BlankNode", value: this.canonicalIssuer.getId(e7.value) };
    }
  };
  function Ws(e7, t) {
    return e7.hash < t.hash ? -1 : e7.hash > t.hash ? 1 : 0;
  }
  var zs = ys;
  var Gs = Ys;
  var Hs = class extends Gs {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new zs("sha1");
    }
    modifyFirstDegreeComponent(e7, t, r) {
      return "BlankNode" !== t.termType ? t : "graph" === r ? { termType: "BlankNode", value: "_:g" } : { termType: "BlankNode", value: t.value === e7 ? "_:a" : "_:z" };
    }
    getRelatedPredicate(e7) {
      return e7.predicate.value;
    }
    createHashToRelated(e7, t) {
      const r = /* @__PURE__ */ new Map(), n4 = this.blankNodeInfo.get(e7).quads;
      for (const i4 of n4) {
        let n5, o4;
        if ("BlankNode" === i4.subject.termType && i4.subject.value !== e7)
          o4 = i4.subject.value, n5 = "p";
        else {
          if ("BlankNode" !== i4.object.termType || i4.object.value === e7)
            continue;
          o4 = i4.object.value, n5 = "r";
        }
        const a4 = this.hashRelatedBlankNode(o4, i4, t, n5), s3 = r.get(a4);
        s3 ? s3.push(o4) : r.set(a4, [o4]);
      }
      return r;
    }
  };
  var Js = u2(Object.freeze({ __proto__: null, default: {} }));
  !function(e7) {
    const t = As, r = Bs, n4 = Ys, i4 = Hs;
    let o4;
    try {
      o4 = Js;
    } catch (e8) {
    }
    function a4(t2) {
      return Array.isArray(t2) ? t2 : e7.NQuads.legacyDatasetToQuads(t2);
    }
    e7.NQuads = Is, e7.IdentifierIssuer = ps, e7._rdfCanonizeNative = function(e8) {
      return e8 && (o4 = e8), o4;
    }, e7.canonize = async function(e8, n5) {
      const i5 = a4(e8);
      if (n5.useNative) {
        if (!o4)
          throw new Error("rdf-canonize-native not available");
        if (n5.createMessageDigest)
          throw new Error('"createMessageDigest" cannot be used with "useNative".');
        return new Promise((e9, t2) => o4.canonize(i5, n5, (r2, n6) => r2 ? t2(r2) : e9(n6)));
      }
      if ("URDNA2015" === n5.algorithm)
        return new t(n5).main(i5);
      if ("URGNA2012" === n5.algorithm) {
        if (n5.createMessageDigest)
          throw new Error('"createMessageDigest" cannot be used with "URGNA2012".');
        return new r(n5).main(i5);
      }
      if (!("algorithm" in n5))
        throw new Error("No RDF Dataset Canonicalization algorithm specified.");
      throw new Error("Invalid RDF Dataset Canonicalization algorithm: " + n5.algorithm);
    }, e7._canonizeSync = function(e8, t2) {
      const r2 = a4(e8);
      if (t2.useNative) {
        if (!o4)
          throw new Error("rdf-canonize-native not available");
        if (t2.createMessageDigest)
          throw new Error('"createMessageDigest" cannot be used with "useNative".');
        return o4.canonizeSync(r2, t2);
      }
      if ("URDNA2015" === t2.algorithm)
        return new n4(t2).main(r2);
      if ("URGNA2012" === t2.algorithm) {
        if (t2.createMessageDigest)
          throw new Error('"createMessageDigest" cannot be used with "URGNA2012".');
        return new i4(t2).main(r2);
      }
      if (!("algorithm" in t2))
        throw new Error("No RDF Dataset Canonicalization algorithm specified.");
      throw new Error("Invalid RDF Dataset Canonicalization algorithm: " + t2.algorithm);
    };
  }(fs);
  var Vs = fs;
  var Qs = {};
  var Zs = Qs;
  Qs.isArray = Array.isArray, Qs.isBoolean = (e7) => "boolean" == typeof e7 || "[object Boolean]" === Object.prototype.toString.call(e7), Qs.isDouble = (e7) => Qs.isNumber(e7) && (-1 !== String(e7).indexOf(".") || Math.abs(e7) >= 1e21), Qs.isEmptyObject = (e7) => Qs.isObject(e7) && 0 === Object.keys(e7).length, Qs.isNumber = (e7) => "number" == typeof e7 || "[object Number]" === Object.prototype.toString.call(e7), Qs.isNumeric = (e7) => !isNaN(parseFloat(e7)) && isFinite(e7), Qs.isObject = (e7) => "[object Object]" === Object.prototype.toString.call(e7), Qs.isString = (e7) => "string" == typeof e7 || "[object String]" === Object.prototype.toString.call(e7), Qs.isUndefined = (e7) => void 0 === e7;
  var Ks = Zs;
  var Xs = {};
  var el = Xs;
  Xs.isSubject = (e7) => {
    if (Ks.isObject(e7) && !("@value" in e7 || "@set" in e7 || "@list" in e7)) {
      return Object.keys(e7).length > 1 || !("@id" in e7);
    }
    return false;
  }, Xs.isSubjectReference = (e7) => Ks.isObject(e7) && 1 === Object.keys(e7).length && "@id" in e7, Xs.isValue = (e7) => Ks.isObject(e7) && "@value" in e7, Xs.isList = (e7) => Ks.isObject(e7) && "@list" in e7, Xs.isGraph = (e7) => Ks.isObject(e7) && "@graph" in e7 && 1 === Object.keys(e7).filter((e8) => "@id" !== e8 && "@index" !== e8).length, Xs.isSimpleGraph = (e7) => Xs.isGraph(e7) && !("@id" in e7), Xs.isBlankNode = (e7) => {
    if (Ks.isObject(e7)) {
      if ("@id" in e7) {
        const t = e7["@id"];
        return !Ks.isString(t) || 0 === t.indexOf("_:");
      }
      return 0 === Object.keys(e7).length || !("@value" in e7 || "@set" in e7 || "@list" in e7);
    }
    return false;
  };
  var tl = class extends Error {
    constructor(e7 = "An unspecified JSON-LD error occurred.", t = "jsonld.Error", r = {}) {
      super(e7), this.name = t, this.message = e7, this.details = r;
    }
  };
  var rl = l4(tl);
  var nl = el;
  var il = Zs;
  var ol = Vs.IdentifierIssuer;
  var al = tl;
  var sl = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g;
  var ll = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/;
  var ul = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g;
  var cl = { accept: "application/ld+json, application/json" };
  var dl = {};
  var hl = dl;
  function fl(e7, t) {
    if (il.isArray(t))
      for (let r = 0; r < t.length; ++r)
        t[r] = fl(e7, t[r]);
    else if (nl.isList(t))
      t["@list"] = fl(e7, t["@list"]);
    else if (il.isObject(t)) {
      nl.isBlankNode(t) && (t["@id"] = e7.getId(t["@id"]));
      const r = Object.keys(t).sort();
      for (let n4 = 0; n4 < r.length; ++n4) {
        const i4 = r[n4];
        "@id" !== i4 && (t[i4] = fl(e7, t[i4]));
      }
    }
    return t;
  }
  dl.IdentifierIssuer = ol, dl.REGEX_BCP47 = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, dl.REGEX_KEYWORD = /^@[a-zA-Z]+$/, dl.clone = function(e7) {
    if (e7 && "object" == typeof e7) {
      let t;
      if (il.isArray(e7)) {
        t = [];
        for (let r = 0; r < e7.length; ++r)
          t[r] = dl.clone(e7[r]);
      } else if (e7 instanceof Map) {
        t = /* @__PURE__ */ new Map();
        for (const [r, n4] of e7)
          t.set(r, dl.clone(n4));
      } else if (e7 instanceof Set) {
        t = /* @__PURE__ */ new Set();
        for (const r of e7)
          t.add(dl.clone(r));
      } else if (il.isObject(e7)) {
        t = {};
        for (const r in e7)
          t[r] = dl.clone(e7[r]);
      } else
        t = e7.toString();
      return t;
    }
    return e7;
  }, dl.asArray = function(e7) {
    return Array.isArray(e7) ? e7 : [e7];
  }, dl.buildHeaders = (e7 = {}) => {
    const t = Object.keys(e7).some((e8) => "accept" === e8.toLowerCase());
    if (t)
      throw new RangeError('Accept header may not be specified; only "' + cl.accept + '" is supported.');
    return Object.assign({ Accept: cl.accept }, e7);
  }, dl.parseLinkHeader = (e7) => {
    const t = {}, r = e7.match(sl);
    for (let e8 = 0; e8 < r.length; ++e8) {
      let n4 = r[e8].match(ll);
      if (!n4)
        continue;
      const i4 = { target: n4[1] }, o4 = n4[2];
      for (; n4 = ul.exec(o4); )
        i4[n4[1]] = void 0 === n4[2] ? n4[3] : n4[2];
      const a4 = i4.rel || "";
      Array.isArray(t[a4]) ? t[a4].push(i4) : t.hasOwnProperty(a4) ? t[a4] = [t[a4], i4] : t[a4] = i4;
    }
    return t;
  }, dl.validateTypeValue = (e7, t) => {
    if (!(il.isString(e7) || il.isArray(e7) && e7.every((e8) => il.isString(e8)))) {
      if (t && il.isObject(e7))
        switch (Object.keys(e7).length) {
          case 0:
            return;
          case 1:
            if ("@default" in e7 && dl.asArray(e7["@default"]).every((e8) => il.isString(e8)))
              return;
        }
      throw new al('Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.', "jsonld.SyntaxError", { code: "invalid type value", value: e7 });
    }
  }, dl.hasProperty = (e7, t) => {
    if (e7.hasOwnProperty(t)) {
      const r = e7[t];
      return !il.isArray(r) || r.length > 0;
    }
    return false;
  }, dl.hasValue = (e7, t, r) => {
    if (dl.hasProperty(e7, t)) {
      let n4 = e7[t];
      const i4 = nl.isList(n4);
      if (il.isArray(n4) || i4) {
        i4 && (n4 = n4["@list"]);
        for (let e8 = 0; e8 < n4.length; ++e8)
          if (dl.compareValues(r, n4[e8]))
            return true;
      } else if (!il.isArray(r))
        return dl.compareValues(r, n4);
    }
    return false;
  }, dl.addValue = (e7, t, r, n4) => {
    if ("propertyIsArray" in (n4 = n4 || {}) || (n4.propertyIsArray = false), "valueIsArray" in n4 || (n4.valueIsArray = false), "allowDuplicate" in n4 || (n4.allowDuplicate = true), "prependValue" in n4 || (n4.prependValue = false), n4.valueIsArray)
      e7[t] = r;
    else if (il.isArray(r)) {
      0 === r.length && n4.propertyIsArray && !e7.hasOwnProperty(t) && (e7[t] = []), n4.prependValue && (r = r.concat(e7[t]), e7[t] = []);
      for (let i4 = 0; i4 < r.length; ++i4)
        dl.addValue(e7, t, r[i4], n4);
    } else if (e7.hasOwnProperty(t)) {
      const i4 = !n4.allowDuplicate && dl.hasValue(e7, t, r);
      il.isArray(e7[t]) || i4 && !n4.propertyIsArray || (e7[t] = [e7[t]]), i4 || (n4.prependValue ? e7[t].unshift(r) : e7[t].push(r));
    } else
      e7[t] = n4.propertyIsArray ? [r] : r;
  }, dl.getValues = (e7, t) => [].concat(e7[t] || []), dl.removeProperty = (e7, t) => {
    delete e7[t];
  }, dl.removeValue = (e7, t, r, n4) => {
    "propertyIsArray" in (n4 = n4 || {}) || (n4.propertyIsArray = false);
    const i4 = dl.getValues(e7, t).filter((e8) => !dl.compareValues(e8, r));
    0 === i4.length ? dl.removeProperty(e7, t) : 1 !== i4.length || n4.propertyIsArray ? e7[t] = i4 : e7[t] = i4[0];
  }, dl.relabelBlankNodes = (e7, t) => fl((t = t || {}).issuer || new ol("_:b"), e7), dl.compareValues = (e7, t) => e7 === t || (!(!nl.isValue(e7) || !nl.isValue(t) || e7["@value"] !== t["@value"] || e7["@type"] !== t["@type"] || e7["@language"] !== t["@language"] || e7["@index"] !== t["@index"]) || !!(il.isObject(e7) && "@id" in e7 && il.isObject(t) && "@id" in t) && e7["@id"] === t["@id"]), dl.compareShortestLeast = (e7, t) => e7.length < t.length ? -1 : t.length < e7.length ? 1 : e7 === t ? 0 : e7 < t ? -1 : 1;
  var pl = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
  var ml = "http://www.w3.org/2001/XMLSchema#";
  var yl;
  var gl;
  var vl = { LINK_HEADER_REL: "http://www.w3.org/ns/json-ld#context", LINK_HEADER_CONTEXT: "http://www.w3.org/ns/json-ld#context", RDF: pl, RDF_LIST: pl + "List", RDF_FIRST: pl + "first", RDF_REST: pl + "rest", RDF_NIL: pl + "nil", RDF_TYPE: pl + "type", RDF_PLAIN_LITERAL: pl + "PlainLiteral", RDF_XML_LITERAL: pl + "XMLLiteral", RDF_JSON_LITERAL: pl + "JSON", RDF_OBJECT: pl + "object", RDF_LANGSTRING: pl + "langString", XSD: ml, XSD_BOOLEAN: ml + "boolean", XSD_DOUBLE: ml + "double", XSD_INTEGER: ml + "integer", XSD_STRING: ml + "string" };
  function wl() {
    return gl || (gl = 1, yl = class {
      constructor() {
        this._requests = {};
      }
      wrapLoader(e7) {
        const t = this;
        return t._loader = e7, function() {
          return t.add.apply(t, arguments);
        };
      }
      async add(e7) {
        let t = this._requests[e7];
        if (t)
          return Promise.resolve(t);
        t = this._requests[e7] = this._loader(e7);
        try {
          return await t;
        } finally {
          delete this._requests[e7];
        }
      }
    }), yl;
  }
  var bl = Zs;
  var _l = {};
  var El = _l;
  _l.parsers = { simple: { keys: ["href", "scheme", "authority", "path", "query", "fragment"], regex: /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/ }, full: { keys: ["href", "protocol", "scheme", "authority", "auth", "user", "password", "hostname", "port", "path", "directory", "file", "query", "fragment"], regex: /^(([a-zA-Z][a-zA-Z0-9+-.]*):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(?:(((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/ } }, _l.parse = (e7, t) => {
    const r = {}, n4 = _l.parsers[t || "full"], i4 = n4.regex.exec(e7);
    let o4 = n4.keys.length;
    for (; o4--; )
      r[n4.keys[o4]] = void 0 === i4[o4] ? null : i4[o4];
    return ("https" === r.scheme && "443" === r.port || "http" === r.scheme && "80" === r.port) && (r.href = r.href.replace(":" + r.port, ""), r.authority = r.authority.replace(":" + r.port, ""), r.port = null), r.normalizedPath = _l.removeDotSegments(r.path), r;
  }, _l.prependBase = (e7, t) => {
    if (null === e7)
      return t;
    if (_l.isAbsolute(t))
      return t;
    e7 && !bl.isString(e7) || (e7 = _l.parse(e7 || ""));
    const r = _l.parse(t), n4 = { protocol: e7.protocol || "" };
    if (null !== r.authority)
      n4.authority = r.authority, n4.path = r.path, n4.query = r.query;
    else if (n4.authority = e7.authority, "" === r.path)
      n4.path = e7.path, null !== r.query ? n4.query = r.query : n4.query = e7.query;
    else {
      if (0 === r.path.indexOf("/"))
        n4.path = r.path;
      else {
        let t2 = e7.path;
        t2 = t2.substr(0, t2.lastIndexOf("/") + 1), (t2.length > 0 || e7.authority) && "/" !== t2.substr(-1) && (t2 += "/"), t2 += r.path, n4.path = t2;
      }
      n4.query = r.query;
    }
    "" !== r.path && (n4.path = _l.removeDotSegments(n4.path));
    let i4 = n4.protocol;
    return null !== n4.authority && (i4 += "//" + n4.authority), i4 += n4.path, null !== n4.query && (i4 += "?" + n4.query), null !== r.fragment && (i4 += "#" + r.fragment), "" === i4 && (i4 = "./"), i4;
  }, _l.removeBase = (e7, t) => {
    if (null === e7)
      return t;
    e7 && !bl.isString(e7) || (e7 = _l.parse(e7 || ""));
    let r = "";
    if ("" !== e7.href ? r += (e7.protocol || "") + "//" + (e7.authority || "") : t.indexOf("//") && (r += "//"), 0 !== t.indexOf(r))
      return t;
    const n4 = _l.parse(t.substr(r.length)), i4 = e7.normalizedPath.split("/"), o4 = n4.normalizedPath.split("/"), a4 = n4.fragment || n4.query ? 0 : 1;
    for (; i4.length > 0 && o4.length > a4 && i4[0] === o4[0]; )
      i4.shift(), o4.shift();
    let s3 = "";
    if (i4.length > 0) {
      i4.pop();
      for (let e8 = 0; e8 < i4.length; ++e8)
        s3 += "../";
    }
    return s3 += o4.join("/"), null !== n4.query && (s3 += "?" + n4.query), null !== n4.fragment && (s3 += "#" + n4.fragment), "" === s3 && (s3 = "./"), s3;
  }, _l.removeDotSegments = (e7) => {
    if (0 === e7.length)
      return "";
    const t = e7.split("/"), r = [];
    for (; t.length > 0; ) {
      const e8 = t.shift(), n4 = 0 === t.length;
      "." !== e8 ? ".." !== e8 ? r.push(e8) : (r.pop(), n4 && r.push("")) : n4 && r.push("");
    }
    return "/" === e7[0] && r.length > 0 && "" !== r[0] && r.unshift(""), 1 === r.length && "" === r[0] ? "/" : r.join("/");
  };
  var Tl = /^([A-Za-z][A-Za-z0-9+-.]*|_):[^\s]*$/;
  _l.isAbsolute = (e7) => bl.isString(e7) && Tl.test(e7), _l.isRelative = (e7) => bl.isString(e7);
  var { parseLinkHeader: xl, buildHeaders: Il } = hl;
  var { LINK_HEADER_CONTEXT: Sl } = vl;
  var Rl = tl;
  var kl = wl();
  var { prependBase: jl } = El;
  var Dl = /(^|(\r\n))link:/i;
  var Nl = ({ secure: e7, headers: t = {}, xhr: r } = { headers: {} }) => {
    t = Il(t);
    return new kl().wrapLoader(async function n4(i4) {
      if (0 !== i4.indexOf("http:") && 0 !== i4.indexOf("https:"))
        throw new Rl('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", { code: "loading document failed", url: i4 });
      if (e7 && 0 !== i4.indexOf("https"))
        throw new Rl(`URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`, "jsonld.InvalidUrl", { code: "loading document failed", url: i4 });
      let o4;
      try {
        o4 = await function(e8, t2, r2) {
          e8 = e8 || XMLHttpRequest;
          const n5 = new e8();
          return new Promise((e9, i5) => {
            n5.onload = () => e9(n5), n5.onerror = (e10) => i5(e10), n5.open("GET", t2, true);
            for (const e10 in r2)
              n5.setRequestHeader(e10, r2[e10]);
            n5.send();
          });
        }(r, i4, t);
      } catch (e8) {
        throw new Rl("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", { code: "loading document failed", url: i4, cause: e8 });
      }
      if (o4.status >= 400)
        throw new Rl("URL could not be dereferenced: " + o4.statusText, "jsonld.LoadDocumentError", { code: "loading document failed", url: i4, httpStatusCode: o4.status });
      let a4 = { contextUrl: null, documentUrl: i4, document: o4.response }, s3 = null;
      const l6 = o4.getResponseHeader("Content-Type");
      let u4;
      Dl.test(o4.getAllResponseHeaders()) && (u4 = o4.getResponseHeader("Link"));
      if (u4 && "application/ld+json" !== l6) {
        const e8 = xl(u4), t2 = e8[Sl];
        if (Array.isArray(t2))
          throw new Rl("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", { code: "multiple context link headers", url: i4 });
        t2 && (a4.contextUrl = t2.target), s3 = e8.alternate, s3 && "application/ld+json" == s3.type && !(l6 || "").match(/^application\/(\w*\+)?json$/) && (a4 = await n4(jl(i4, s3.target)));
      }
      return a4;
    });
  };
  var Ol = {};
  var Cl;
  var Al;
  var Ml = Ol;
  Ol.setupDocumentLoaders = function(e7) {
    "undefined" != typeof XMLHttpRequest && (e7.documentLoaders.xhr = Nl, e7.useDocumentLoader("xhr"));
  }, Ol.setupGlobals = function(e7) {
    void 0 === globalThis.JsonLdProcessor && Object.defineProperty(globalThis, "JsonLdProcessor", { writable: true, enumerable: false, configurable: true, value: e7.JsonLdProcessor });
  };
  var Ll = Pl;
  function Pl(e7) {
    var t = this;
    if (t instanceof Pl || (t = new Pl()), t.tail = null, t.head = null, t.length = 0, e7 && "function" == typeof e7.forEach)
      e7.forEach(function(e8) {
        t.push(e8);
      });
    else if (arguments.length > 0)
      for (var r = 0, n4 = arguments.length; r < n4; r++)
        t.push(arguments[r]);
    return t;
  }
  function Bl(e7, t, r) {
    var n4 = t === e7.head ? new Ul(r, null, t, e7) : new Ul(r, t, t.next, e7);
    return null === n4.next && (e7.tail = n4), null === n4.prev && (e7.head = n4), e7.length++, n4;
  }
  function $l(e7, t) {
    e7.tail = new Ul(t, e7.tail, null, e7), e7.head || (e7.head = e7.tail), e7.length++;
  }
  function Fl(e7, t) {
    e7.head = new Ul(t, null, e7.head, e7), e7.tail || (e7.tail = e7.head), e7.length++;
  }
  function Ul(e7, t, r, n4) {
    if (!(this instanceof Ul))
      return new Ul(e7, t, r, n4);
    this.list = n4, this.value = e7, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null;
  }
  Pl.Node = Ul, Pl.create = Pl, Pl.prototype.removeNode = function(e7) {
    if (e7.list !== this)
      throw new Error("removing node which does not belong to this list");
    var t = e7.next, r = e7.prev;
    return t && (t.prev = r), r && (r.next = t), e7 === this.head && (this.head = t), e7 === this.tail && (this.tail = r), e7.list.length--, e7.next = null, e7.prev = null, e7.list = null, t;
  }, Pl.prototype.unshiftNode = function(e7) {
    if (e7 !== this.head) {
      e7.list && e7.list.removeNode(e7);
      var t = this.head;
      e7.list = this, e7.next = t, t && (t.prev = e7), this.head = e7, this.tail || (this.tail = e7), this.length++;
    }
  }, Pl.prototype.pushNode = function(e7) {
    if (e7 !== this.tail) {
      e7.list && e7.list.removeNode(e7);
      var t = this.tail;
      e7.list = this, e7.prev = t, t && (t.next = e7), this.tail = e7, this.head || (this.head = e7), this.length++;
    }
  }, Pl.prototype.push = function() {
    for (var e7 = 0, t = arguments.length; e7 < t; e7++)
      $l(this, arguments[e7]);
    return this.length;
  }, Pl.prototype.unshift = function() {
    for (var e7 = 0, t = arguments.length; e7 < t; e7++)
      Fl(this, arguments[e7]);
    return this.length;
  }, Pl.prototype.pop = function() {
    if (this.tail) {
      var e7 = this.tail.value;
      return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e7;
    }
  }, Pl.prototype.shift = function() {
    if (this.head) {
      var e7 = this.head.value;
      return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e7;
    }
  }, Pl.prototype.forEach = function(e7, t) {
    t = t || this;
    for (var r = this.head, n4 = 0; null !== r; n4++)
      e7.call(t, r.value, n4, this), r = r.next;
  }, Pl.prototype.forEachReverse = function(e7, t) {
    t = t || this;
    for (var r = this.tail, n4 = this.length - 1; null !== r; n4--)
      e7.call(t, r.value, n4, this), r = r.prev;
  }, Pl.prototype.get = function(e7) {
    for (var t = 0, r = this.head; null !== r && t < e7; t++)
      r = r.next;
    if (t === e7 && null !== r)
      return r.value;
  }, Pl.prototype.getReverse = function(e7) {
    for (var t = 0, r = this.tail; null !== r && t < e7; t++)
      r = r.prev;
    if (t === e7 && null !== r)
      return r.value;
  }, Pl.prototype.map = function(e7, t) {
    t = t || this;
    for (var r = new Pl(), n4 = this.head; null !== n4; )
      r.push(e7.call(t, n4.value, this)), n4 = n4.next;
    return r;
  }, Pl.prototype.mapReverse = function(e7, t) {
    t = t || this;
    for (var r = new Pl(), n4 = this.tail; null !== n4; )
      r.push(e7.call(t, n4.value, this)), n4 = n4.prev;
    return r;
  }, Pl.prototype.reduce = function(e7, t) {
    var r, n4 = this.head;
    if (arguments.length > 1)
      r = t;
    else {
      if (!this.head)
        throw new TypeError("Reduce of empty list with no initial value");
      n4 = this.head.next, r = this.head.value;
    }
    for (var i4 = 0; null !== n4; i4++)
      r = e7(r, n4.value, i4), n4 = n4.next;
    return r;
  }, Pl.prototype.reduceReverse = function(e7, t) {
    var r, n4 = this.tail;
    if (arguments.length > 1)
      r = t;
    else {
      if (!this.tail)
        throw new TypeError("Reduce of empty list with no initial value");
      n4 = this.tail.prev, r = this.tail.value;
    }
    for (var i4 = this.length - 1; null !== n4; i4--)
      r = e7(r, n4.value, i4), n4 = n4.prev;
    return r;
  }, Pl.prototype.toArray = function() {
    for (var e7 = new Array(this.length), t = 0, r = this.head; null !== r; t++)
      e7[t] = r.value, r = r.next;
    return e7;
  }, Pl.prototype.toArrayReverse = function() {
    for (var e7 = new Array(this.length), t = 0, r = this.tail; null !== r; t++)
      e7[t] = r.value, r = r.prev;
    return e7;
  }, Pl.prototype.slice = function(e7, t) {
    (t = t || this.length) < 0 && (t += this.length), (e7 = e7 || 0) < 0 && (e7 += this.length);
    var r = new Pl();
    if (t < e7 || t < 0)
      return r;
    e7 < 0 && (e7 = 0), t > this.length && (t = this.length);
    for (var n4 = 0, i4 = this.head; null !== i4 && n4 < e7; n4++)
      i4 = i4.next;
    for (; null !== i4 && n4 < t; n4++, i4 = i4.next)
      r.push(i4.value);
    return r;
  }, Pl.prototype.sliceReverse = function(e7, t) {
    (t = t || this.length) < 0 && (t += this.length), (e7 = e7 || 0) < 0 && (e7 += this.length);
    var r = new Pl();
    if (t < e7 || t < 0)
      return r;
    e7 < 0 && (e7 = 0), t > this.length && (t = this.length);
    for (var n4 = this.length, i4 = this.tail; null !== i4 && n4 > t; n4--)
      i4 = i4.prev;
    for (; null !== i4 && n4 > e7; n4--, i4 = i4.prev)
      r.push(i4.value);
    return r;
  }, Pl.prototype.splice = function(e7, t, ...r) {
    e7 > this.length && (e7 = this.length - 1), e7 < 0 && (e7 = this.length + e7);
    for (var n4 = 0, i4 = this.head; null !== i4 && n4 < e7; n4++)
      i4 = i4.next;
    var o4 = [];
    for (n4 = 0; i4 && n4 < t; n4++)
      o4.push(i4.value), i4 = this.removeNode(i4);
    null === i4 && (i4 = this.tail), i4 !== this.head && i4 !== this.tail && (i4 = i4.prev);
    for (n4 = 0; n4 < r.length; n4++)
      i4 = Bl(this, i4, r[n4]);
    return o4;
  }, Pl.prototype.reverse = function() {
    for (var e7 = this.head, t = this.tail, r = e7; null !== r; r = r.prev) {
      var n4 = r.prev;
      r.prev = r.next, r.next = n4;
    }
    return this.head = t, this.tail = e7, this;
  };
  try {
    (Al || (Al = 1, Cl = function(e7) {
      e7.prototype[Symbol.iterator] = function* () {
        for (let e8 = this.head; e8; e8 = e8.next)
          yield e8.value;
      };
    }), Cl)(Pl);
  } catch (e7) {
  }
  var ql = Ll;
  var Yl = Symbol("max");
  var Wl = Symbol("length");
  var zl = Symbol("lengthCalculator");
  var Gl = Symbol("allowStale");
  var Hl = Symbol("maxAge");
  var Jl = Symbol("dispose");
  var Vl = Symbol("noDisposeOnSet");
  var Ql = Symbol("lruList");
  var Zl = Symbol("cache");
  var Kl = Symbol("updateAgeOnGet");
  var Xl = () => 1;
  var eu = (e7, t, r) => {
    const n4 = e7[Zl].get(t);
    if (n4) {
      const t2 = n4.value;
      if (tu(e7, t2)) {
        if (nu(e7, n4), !e7[Gl])
          return;
      } else
        r && (e7[Kl] && (n4.value.now = Date.now()), e7[Ql].unshiftNode(n4));
      return t2.value;
    }
  };
  var tu = (e7, t) => {
    if (!t || !t.maxAge && !e7[Hl])
      return false;
    const r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : e7[Hl] && r > e7[Hl];
  };
  var ru = (e7) => {
    if (e7[Wl] > e7[Yl])
      for (let t = e7[Ql].tail; e7[Wl] > e7[Yl] && null !== t; ) {
        const r = t.prev;
        nu(e7, t), t = r;
      }
  };
  var nu = (e7, t) => {
    if (t) {
      const r = t.value;
      e7[Jl] && e7[Jl](r.key, r.value), e7[Wl] -= r.length, e7[Zl].delete(r.key), e7[Ql].removeNode(t);
    }
  };
  var iu = class {
    constructor(e7, t, r, n4, i4) {
      this.key = e7, this.value = t, this.length = r, this.now = n4, this.maxAge = i4 || 0;
    }
  };
  var ou = (e7, t, r, n4) => {
    let i4 = r.value;
    tu(e7, i4) && (nu(e7, r), e7[Gl] || (i4 = void 0)), i4 && t.call(n4, i4.value, i4.key, e7);
  };
  var au = class {
    constructor(e7) {
      if ("number" == typeof e7 && (e7 = { max: e7 }), e7 || (e7 = {}), e7.max && ("number" != typeof e7.max || e7.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[Yl] = e7.max || 1 / 0;
      const t = e7.length || Xl;
      if (this[zl] = "function" != typeof t ? Xl : t, this[Gl] = e7.stale || false, e7.maxAge && "number" != typeof e7.maxAge)
        throw new TypeError("maxAge must be a number");
      this[Hl] = e7.maxAge || 0, this[Jl] = e7.dispose, this[Vl] = e7.noDisposeOnSet || false, this[Kl] = e7.updateAgeOnGet || false, this.reset();
    }
    set max(e7) {
      if ("number" != typeof e7 || e7 < 0)
        throw new TypeError("max must be a non-negative number");
      this[Yl] = e7 || 1 / 0, ru(this);
    }
    get max() {
      return this[Yl];
    }
    set allowStale(e7) {
      this[Gl] = !!e7;
    }
    get allowStale() {
      return this[Gl];
    }
    set maxAge(e7) {
      if ("number" != typeof e7)
        throw new TypeError("maxAge must be a non-negative number");
      this[Hl] = e7, ru(this);
    }
    get maxAge() {
      return this[Hl];
    }
    set lengthCalculator(e7) {
      "function" != typeof e7 && (e7 = Xl), e7 !== this[zl] && (this[zl] = e7, this[Wl] = 0, this[Ql].forEach((e8) => {
        e8.length = this[zl](e8.value, e8.key), this[Wl] += e8.length;
      })), ru(this);
    }
    get lengthCalculator() {
      return this[zl];
    }
    get length() {
      return this[Wl];
    }
    get itemCount() {
      return this[Ql].length;
    }
    rforEach(e7, t) {
      t = t || this;
      for (let r = this[Ql].tail; null !== r; ) {
        const n4 = r.prev;
        ou(this, e7, r, t), r = n4;
      }
    }
    forEach(e7, t) {
      t = t || this;
      for (let r = this[Ql].head; null !== r; ) {
        const n4 = r.next;
        ou(this, e7, r, t), r = n4;
      }
    }
    keys() {
      return this[Ql].toArray().map((e7) => e7.key);
    }
    values() {
      return this[Ql].toArray().map((e7) => e7.value);
    }
    reset() {
      this[Jl] && this[Ql] && this[Ql].length && this[Ql].forEach((e7) => this[Jl](e7.key, e7.value)), this[Zl] = /* @__PURE__ */ new Map(), this[Ql] = new ql(), this[Wl] = 0;
    }
    dump() {
      return this[Ql].map((e7) => !tu(this, e7) && { k: e7.key, v: e7.value, e: e7.now + (e7.maxAge || 0) }).toArray().filter((e7) => e7);
    }
    dumpLru() {
      return this[Ql];
    }
    set(e7, t, r) {
      if ((r = r || this[Hl]) && "number" != typeof r)
        throw new TypeError("maxAge must be a number");
      const n4 = r ? Date.now() : 0, i4 = this[zl](t, e7);
      if (this[Zl].has(e7)) {
        if (i4 > this[Yl])
          return nu(this, this[Zl].get(e7)), false;
        const o5 = this[Zl].get(e7).value;
        return this[Jl] && (this[Vl] || this[Jl](e7, o5.value)), o5.now = n4, o5.maxAge = r, o5.value = t, this[Wl] += i4 - o5.length, o5.length = i4, this.get(e7), ru(this), true;
      }
      const o4 = new iu(e7, t, i4, n4, r);
      return o4.length > this[Yl] ? (this[Jl] && this[Jl](e7, t), false) : (this[Wl] += o4.length, this[Ql].unshift(o4), this[Zl].set(e7, this[Ql].head), ru(this), true);
    }
    has(e7) {
      if (!this[Zl].has(e7))
        return false;
      const t = this[Zl].get(e7).value;
      return !tu(this, t);
    }
    get(e7) {
      return eu(this, e7, true);
    }
    peek(e7) {
      return eu(this, e7, false);
    }
    pop() {
      const e7 = this[Ql].tail;
      return e7 ? (nu(this, e7), e7.value) : null;
    }
    del(e7) {
      nu(this, this[Zl].get(e7));
    }
    load(e7) {
      this.reset();
      const t = Date.now();
      for (let r = e7.length - 1; r >= 0; r--) {
        const n4 = e7[r], i4 = n4.e || 0;
        if (0 === i4)
          this.set(n4.k, n4.v);
        else {
          const e8 = i4 - t;
          e8 > 0 && this.set(n4.k, n4.v, e8);
        }
      }
    }
    prune() {
      this[Zl].forEach((e7, t) => eu(this, t, false));
    }
  };
  var su = au;
  var { isArray: lu, isObject: uu, isString: cu } = Zs;
  var { asArray: du } = hl;
  var { prependBase: hu } = El;
  var fu = tl;
  var pu = class {
    constructor({ document: e7 }) {
      this.document = e7, this.cache = new su({ max: 10 });
    }
    getProcessed(e7) {
      return this.cache.get(e7);
    }
    setProcessed(e7, t) {
      this.cache.set(e7, t);
    }
  };
  function mu(e7) {
    throw new fu("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", { code: "invalid local context", context: e7 });
  }
  function yu({ context: e7, base: t }) {
    if (!e7)
      return;
    const r = e7["@context"];
    if (cu(r))
      e7["@context"] = hu(t, r);
    else if (lu(r))
      for (let e8 = 0; e8 < r.length; ++e8) {
        const n4 = r[e8];
        cu(n4) ? r[e8] = hu(t, n4) : uu(n4) && yu({ context: { "@context": n4 }, base: t });
      }
    else if (uu(r))
      for (const e8 in r)
        yu({ context: r[e8], base: t });
  }
  var gu = Vs.NQuads;
  var vu = tl;
  var { isArray: wu } = Zs;
  var { asArray: bu } = hl;
  var _u = {};
  var Eu = _u;
  function Tu({ event: e7, handlers: t }) {
    let r = true;
    for (let n4 = 0; r && n4 < t.length; ++n4) {
      r = false;
      const i4 = t[n4];
      if (wu(i4))
        r = Tu({ event: e7, handlers: i4 });
      else if ("function" == typeof i4)
        i4({ event: e7, next: () => {
          r = true;
        } });
      else {
        if ("object" != typeof i4)
          throw new vu("Invalid event handler.", "jsonld.InvalidEventHandler", { event: e7 });
        e7.code in i4 ? i4[e7.code]({ event: e7, next: () => {
          r = true;
        } }) : r = true;
      }
    }
    return r;
  }
  _u.defaultEventHandler = null, _u.setupEventHandler = ({ options: e7 = {} }) => {
    const t = [].concat(e7.safe ? _u.safeEventHandler : [], e7.eventHandler ? bu(e7.eventHandler) : [], _u.defaultEventHandler ? _u.defaultEventHandler : []);
    return 0 === t.length ? null : t;
  }, _u.handleEvent = ({ event: e7, options: t }) => {
    Tu({ event: e7, handlers: t.eventHandler });
  };
  var xu = /* @__PURE__ */ new Set(["empty object", "free-floating scalar", "invalid @language value", "invalid property", "null @id value", "null @value value", "object with only @id", "object with only @language", "object with only @list", "object with only @value", "relative @id reference", "relative @type reference", "relative @vocab reference", "reserved @id value", "reserved @reverse value", "reserved term", "blank node predicate", "relative graph reference", "relative object reference", "relative predicate reference", "relative subject reference", "rdfDirection not set"]);
  _u.safeEventHandler = function({ event: e7, next: t }) {
    if ("warning" === e7.level && xu.has(e7.code))
      throw new vu("Safe mode validation error.", "jsonld.ValidationError", { event: e7 });
    t();
  }, _u.logEventHandler = function({ event: e7, next: t }) {
    console.log(`EVENT: ${e7.message}`, { event: e7 }), t();
  }, _u.logWarningEventHandler = function({ event: e7, next: t }) {
    "warning" === e7.level && console.warn(`WARNING: ${e7.message}`, { event: e7 }), t();
  }, _u.unhandledEventHandler = function({ event: e7 }) {
    throw new vu("No handler for event.", "jsonld.UnhandledEvent", { event: e7 });
  }, _u.setDefaultEventHandler = function({ eventHandler: e7 } = {}) {
    _u.defaultEventHandler = e7 ? bu(e7) : null;
  };
  var Iu = hl;
  var Su = tl;
  var { isArray: Ru, isObject: ku, isString: ju, isUndefined: Du } = Zs;
  var { isAbsolute: Nu, isRelative: Ou, prependBase: Cu } = El;
  var { handleEvent: Au } = Eu;
  var { REGEX_BCP47: Mu, REGEX_KEYWORD: Lu, asArray: Pu, compareShortestLeast: Bu } = hl;
  var $u = /* @__PURE__ */ new Map();
  var Fu = {};
  var Uu = Fu;
  function qu(e7, t, r, n4, i4, o4) {
    if (null === t || !ju(t) || Fu.isKeyword(t))
      return t;
    if (t.match(Lu))
      return null;
    if (n4 && n4.hasOwnProperty(t) && true !== i4.get(t) && Fu.createTermDefinition({ activeCtx: e7, localCtx: n4, term: t, defined: i4, options: o4 }), (r = r || {}).vocab) {
      const r2 = e7.mappings.get(t);
      if (null === r2)
        return null;
      if (ku(r2) && "@id" in r2)
        return r2["@id"];
    }
    const a4 = t.indexOf(":");
    if (a4 > 0) {
      const r2 = t.substr(0, a4), s3 = t.substr(a4 + 1);
      if ("_" === r2 || 0 === s3.indexOf("//"))
        return t;
      n4 && n4.hasOwnProperty(r2) && Fu.createTermDefinition({ activeCtx: e7, localCtx: n4, term: r2, defined: i4, options: o4 });
      const l6 = e7.mappings.get(r2);
      if (l6 && l6._prefix)
        return l6["@id"] + s3;
      if (Nu(t))
        return t;
    }
    if (r.vocab && "@vocab" in e7) {
      t = e7["@vocab"] + t;
    } else if (r.base) {
      let r2, n5;
      "@base" in e7 ? e7["@base"] ? (n5 = Cu(o4.base, e7["@base"]), r2 = Cu(n5, t)) : (n5 = e7["@base"], r2 = t) : (n5 = o4.base, r2 = Cu(o4.base, t)), t = r2;
    }
    return t;
  }
  function Yu(e7, t) {
    if (!e7 || "object" != typeof e7 || !t || "object" != typeof t)
      return e7 === t;
    const r = Array.isArray(e7);
    if (r !== Array.isArray(t))
      return false;
    if (r) {
      if (e7.length !== t.length)
        return false;
      for (let r2 = 0; r2 < e7.length; ++r2)
        if (!Yu(e7[r2], t[r2]))
          return false;
      return true;
    }
    const n4 = Object.keys(e7), i4 = Object.keys(t);
    if (n4.length !== i4.length)
      return false;
    for (const r2 in e7) {
      let n5 = e7[r2], i5 = t[r2];
      if ("@container" === r2 && Array.isArray(n5) && Array.isArray(i5) && (n5 = n5.slice().sort(), i5 = i5.slice().sort()), !Yu(n5, i5))
        return false;
    }
    return true;
  }
  Fu.process = async ({ activeCtx: e7, localCtx: t, options: r, propagate: n4 = true, overrideProtected: i4 = false, cycles: o4 = /* @__PURE__ */ new Set() }) => {
    ku(t) && "@context" in t && Ru(t["@context"]) && (t = t["@context"]);
    if (0 === Pu(t).length)
      return e7;
    const a4 = [], s3 = [({ event: e8, next: t2 }) => {
      a4.push(e8), t2();
    }];
    r.eventHandler && s3.push(r.eventHandler);
    const l6 = r;
    r = { ...r, eventHandler: s3 };
    const u4 = await r.contextResolver.resolve({ activeCtx: e7, context: t, documentLoader: r.documentLoader, base: r.base });
    ku(u4[0].document) && "boolean" == typeof u4[0].document["@propagate"] && (n4 = u4[0].document["@propagate"]);
    let c3 = e7;
    n4 || c3.previousContext || (c3 = c3.clone(), c3.previousContext = e7);
    for (const n5 of u4) {
      let { document: s4 } = n5;
      if (e7 = c3, null === s4) {
        if (!i4 && 0 !== Object.keys(e7.protected).length)
          throw new Su("Tried to nullify a context with protected terms outside of a term definition.", "jsonld.SyntaxError", { code: "invalid context nullification" });
        c3 = e7 = Fu.getInitialContext(r).clone();
        continue;
      }
      const u5 = n5.getProcessed(e7);
      if (u5) {
        if (l6.eventHandler)
          for (const e8 of u5.events)
            Au({ event: e8, options: l6 });
        c3 = e7 = u5.context;
        continue;
      }
      if (ku(s4) && "@context" in s4 && (s4 = s4["@context"]), !ku(s4))
        throw new Su("Invalid JSON-LD syntax; @context must be an object.", "jsonld.SyntaxError", { code: "invalid local context", context: s4 });
      c3 = c3.clone();
      const d5 = /* @__PURE__ */ new Map();
      if ("@version" in s4) {
        if (1.1 !== s4["@version"])
          throw new Su("Unsupported JSON-LD version: " + s4["@version"], "jsonld.UnsupportedVersion", { code: "invalid @version value", context: s4 });
        if (e7.processingMode && "json-ld-1.0" === e7.processingMode)
          throw new Su("@version: " + s4["@version"] + " not compatible with " + e7.processingMode, "jsonld.ProcessingModeConflict", { code: "processing mode conflict", context: s4 });
        c3.processingMode = "json-ld-1.1", c3["@version"] = s4["@version"], d5.set("@version", true);
      }
      if (c3.processingMode = c3.processingMode || e7.processingMode, "@base" in s4) {
        let e8 = s4["@base"];
        if (null === e8 || Nu(e8))
          ;
        else {
          if (!Ou(e8))
            throw new Su('Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.', "jsonld.SyntaxError", { code: "invalid base IRI", context: s4 });
          e8 = Cu(c3["@base"], e8);
        }
        c3["@base"] = e8, d5.set("@base", true);
      }
      if ("@vocab" in s4) {
        const e8 = s4["@vocab"];
        if (null === e8)
          delete c3["@vocab"];
        else {
          if (!ju(e8))
            throw new Su('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.', "jsonld.SyntaxError", { code: "invalid vocab mapping", context: s4 });
          if (!Nu(e8) && Fu.processingMode(c3, 1))
            throw new Su('Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.', "jsonld.SyntaxError", { code: "invalid vocab mapping", context: s4 });
          {
            const t2 = qu(c3, e8, { vocab: true, base: true }, void 0, void 0, r);
            Nu(t2) || r.eventHandler && Au({ event: { type: ["JsonLdEvent"], code: "relative @vocab reference", level: "warning", message: "Relative @vocab reference found.", details: { vocab: t2 } }, options: r }), c3["@vocab"] = t2;
          }
        }
        d5.set("@vocab", true);
      }
      if ("@language" in s4) {
        const e8 = s4["@language"];
        if (null === e8)
          delete c3["@language"];
        else {
          if (!ju(e8))
            throw new Su('Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.', "jsonld.SyntaxError", { code: "invalid default language", context: s4 });
          e8.match(Mu) || r.eventHandler && Au({ event: { type: ["JsonLdEvent"], code: "invalid @language value", level: "warning", message: "@language value must be valid BCP47.", details: { language: e8 } }, options: r }), c3["@language"] = e8.toLowerCase();
        }
        d5.set("@language", true);
      }
      if ("@direction" in s4) {
        const t2 = s4["@direction"];
        if ("json-ld-1.0" === e7.processingMode)
          throw new Su("Invalid JSON-LD syntax; @direction not compatible with " + e7.processingMode, "jsonld.SyntaxError", { code: "invalid context member", context: s4 });
        if (null === t2)
          delete c3["@direction"];
        else {
          if ("ltr" !== t2 && "rtl" !== t2)
            throw new Su('Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".', "jsonld.SyntaxError", { code: "invalid base direction", context: s4 });
          c3["@direction"] = t2;
        }
        d5.set("@direction", true);
      }
      if ("@propagate" in s4) {
        const r2 = s4["@propagate"];
        if ("json-ld-1.0" === e7.processingMode)
          throw new Su("Invalid JSON-LD syntax; @propagate not compatible with " + e7.processingMode, "jsonld.SyntaxError", { code: "invalid context entry", context: s4 });
        if ("boolean" != typeof r2)
          throw new Su("Invalid JSON-LD syntax; @propagate value must be a boolean.", "jsonld.SyntaxError", { code: "invalid @propagate value", context: t });
        d5.set("@propagate", true);
      }
      if ("@import" in s4) {
        const n6 = s4["@import"];
        if ("json-ld-1.0" === e7.processingMode)
          throw new Su("Invalid JSON-LD syntax; @import not compatible with " + e7.processingMode, "jsonld.SyntaxError", { code: "invalid context entry", context: s4 });
        if (!ju(n6))
          throw new Su("Invalid JSON-LD syntax; @import must be a string.", "jsonld.SyntaxError", { code: "invalid @import value", context: t });
        const i5 = await r.contextResolver.resolve({ activeCtx: e7, context: n6, documentLoader: r.documentLoader, base: r.base });
        if (1 !== i5.length)
          throw new Su("Invalid JSON-LD syntax; @import must reference a single context.", "jsonld.SyntaxError", { code: "invalid remote context", context: t });
        const o5 = i5[0].getProcessed(e7);
        if (o5)
          s4 = o5;
        else {
          const r2 = i5[0].document;
          if ("@import" in r2)
            throw new Su("Invalid JSON-LD syntax: imported context must not include @import.", "jsonld.SyntaxError", { code: "invalid context entry", context: t });
          for (const e8 in r2)
            s4.hasOwnProperty(e8) || (s4[e8] = r2[e8]);
          i5[0].setProcessed(e7, s4);
        }
        d5.set("@import", true);
      }
      d5.set("@protected", s4["@protected"] || false);
      for (const e8 in s4)
        if (Fu.createTermDefinition({ activeCtx: c3, localCtx: s4, term: e8, defined: d5, options: r, overrideProtected: i4 }), ku(s4[e8]) && "@context" in s4[e8]) {
          const t2 = s4[e8]["@context"];
          let n6 = true;
          if (ju(t2)) {
            const e9 = Cu(r.base, t2);
            o4.has(e9) ? n6 = false : o4.add(e9);
          }
          if (n6)
            try {
              await Fu.process({ activeCtx: c3.clone(), localCtx: s4[e8]["@context"], overrideProtected: true, options: r, cycles: o4 });
            } catch (t3) {
              throw new Su("Invalid JSON-LD syntax; invalid scoped context.", "jsonld.SyntaxError", { code: "invalid scoped context", context: s4[e8]["@context"], term: e8 });
            }
        }
      n5.setProcessed(e7, { context: c3, events: a4 });
    }
    return c3;
  }, Fu.createTermDefinition = ({ activeCtx: e7, localCtx: t, term: r, defined: n4, options: i4, overrideProtected: o4 = false }) => {
    if (n4.has(r)) {
      if (n4.get(r))
        return;
      throw new Su("Cyclical context definition detected.", "jsonld.CyclicalContext", { code: "cyclic IRI mapping", context: t, term: r });
    }
    let a4;
    if (n4.set(r, false), t.hasOwnProperty(r) && (a4 = t[r]), "@type" === r && ku(a4) && "@set" === (a4["@container"] || "@set") && Fu.processingMode(e7, 1.1)) {
      const e8 = ["@container", "@id", "@protected"], n5 = Object.keys(a4);
      if (0 === n5.length || n5.some((t2) => !e8.includes(t2)))
        throw new Su("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", { code: "keyword redefinition", context: t, term: r });
    } else {
      if (Fu.isKeyword(r))
        throw new Su("Invalid JSON-LD syntax; keywords cannot be overridden.", "jsonld.SyntaxError", { code: "keyword redefinition", context: t, term: r });
      if (r.match(Lu))
        return void (i4.eventHandler && Au({ event: { type: ["JsonLdEvent"], code: "reserved term", level: "warning", message: 'Terms beginning with "@" are reserved for future use and dropped.', details: { term: r } }, options: i4 }));
      if ("" === r)
        throw new Su("Invalid JSON-LD syntax; a term cannot be an empty string.", "jsonld.SyntaxError", { code: "invalid term definition", context: t });
    }
    const s3 = e7.mappings.get(r);
    e7.mappings.has(r) && e7.mappings.delete(r);
    let l6 = false;
    if ((ju(a4) || null === a4) && (l6 = true, a4 = { "@id": a4 }), !ku(a4))
      throw new Su("Invalid JSON-LD syntax; @context term values must be strings or objects.", "jsonld.SyntaxError", { code: "invalid term definition", context: t });
    const u4 = {};
    e7.mappings.set(r, u4), u4.reverse = false;
    const c3 = ["@container", "@id", "@language", "@reverse", "@type"];
    Fu.processingMode(e7, 1.1) && c3.push("@context", "@direction", "@index", "@nest", "@prefix", "@protected");
    for (const e8 in a4)
      if (!c3.includes(e8))
        throw new Su("Invalid JSON-LD syntax; a term definition must not contain " + e8, "jsonld.SyntaxError", { code: "invalid term definition", context: t });
    const d5 = r.indexOf(":");
    if (u4._termHasColon = d5 > 0, "@reverse" in a4) {
      if ("@id" in a4)
        throw new Su("Invalid JSON-LD syntax; a @reverse term definition must not contain @id.", "jsonld.SyntaxError", { code: "invalid reverse property", context: t });
      if ("@nest" in a4)
        throw new Su("Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.", "jsonld.SyntaxError", { code: "invalid reverse property", context: t });
      const o5 = a4["@reverse"];
      if (!ju(o5))
        throw new Su("Invalid JSON-LD syntax; a @context @reverse value must be a string.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t });
      if (o5.match(Lu))
        return i4.eventHandler && Au({ event: { type: ["JsonLdEvent"], code: "reserved @reverse value", level: "warning", message: '@reverse values beginning with "@" are reserved for future use and dropped.', details: { reverse: o5 } }, options: i4 }), void (s3 ? e7.mappings.set(r, s3) : e7.mappings.delete(r));
      const l7 = qu(e7, o5, { vocab: true, base: false }, t, n4, i4);
      if (!Nu(l7))
        throw new Su("Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t });
      u4["@id"] = l7, u4.reverse = true;
    } else if ("@id" in a4) {
      let o5 = a4["@id"];
      if (o5 && !ju(o5))
        throw new Su("Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t });
      if (null === o5)
        u4["@id"] = null;
      else {
        if (!Fu.isKeyword(o5) && o5.match(Lu))
          return i4.eventHandler && Au({ event: { type: ["JsonLdEvent"], code: "reserved @id value", level: "warning", message: '@id values beginning with "@" are reserved for future use and dropped.', details: { id: o5 } }, options: i4 }), void (s3 ? e7.mappings.set(r, s3) : e7.mappings.delete(r));
        if (o5 !== r) {
          if (o5 = qu(e7, o5, { vocab: true, base: false }, t, n4, i4), !Nu(o5) && !Fu.isKeyword(o5))
            throw new Su("Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t });
          if (r.match(/(?::[^:])|\//)) {
            if (qu(e7, r, { vocab: true, base: false }, t, new Map(n4).set(r, true), i4) !== o5)
              throw new Su("Invalid JSON-LD syntax; term in form of IRI must expand to definition.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t });
          }
          u4["@id"] = o5, u4._prefix = l6 && !u4._termHasColon && null !== o5.match(/[:\/\?#\[\]@]$/);
        }
      }
    }
    if (!("@id" in u4))
      if (u4._termHasColon) {
        const o5 = r.substr(0, d5);
        if (t.hasOwnProperty(o5) && Fu.createTermDefinition({ activeCtx: e7, localCtx: t, term: o5, defined: n4, options: i4 }), e7.mappings.has(o5)) {
          const t2 = r.substr(d5 + 1);
          u4["@id"] = e7.mappings.get(o5)["@id"] + t2;
        } else
          u4["@id"] = r;
      } else if ("@type" === r)
        u4["@id"] = r;
      else {
        if (!("@vocab" in e7))
          throw new Su("Invalid JSON-LD syntax; @context terms must define an @id.", "jsonld.SyntaxError", { code: "invalid IRI mapping", context: t, term: r });
        u4["@id"] = e7["@vocab"] + r;
      }
    if ((true === a4["@protected"] || true === n4.get("@protected") && false !== a4["@protected"]) && (e7.protected[r] = true, u4.protected = true), n4.set(r, true), "@type" in a4) {
      let r2 = a4["@type"];
      if (!ju(r2))
        throw new Su("Invalid JSON-LD syntax; an @context @type value must be a string.", "jsonld.SyntaxError", { code: "invalid type mapping", context: t });
      if ("@json" === r2 || "@none" === r2) {
        if (Fu.processingMode(e7, 1))
          throw new Su(`Invalid JSON-LD syntax; an @context @type value must not be "${r2}" in JSON-LD 1.0 mode.`, "jsonld.SyntaxError", { code: "invalid type mapping", context: t });
      } else if ("@id" !== r2 && "@vocab" !== r2) {
        if (r2 = qu(e7, r2, { vocab: true, base: false }, t, n4, i4), !Nu(r2))
          throw new Su("Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.", "jsonld.SyntaxError", { code: "invalid type mapping", context: t });
        if (0 === r2.indexOf("_:"))
          throw new Su("Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.", "jsonld.SyntaxError", { code: "invalid type mapping", context: t });
      }
      u4["@type"] = r2;
    }
    if ("@container" in a4) {
      const r2 = ju(a4["@container"]) ? [a4["@container"]] : a4["@container"] || [], n5 = ["@list", "@set", "@index", "@language"];
      let i5 = true;
      const o5 = r2.includes("@set");
      if (Fu.processingMode(e7, 1.1)) {
        if (n5.push("@graph", "@id", "@type"), r2.includes("@list")) {
          if (1 !== r2.length)
            throw new Su("Invalid JSON-LD syntax; @context @container with @list must have no other values", "jsonld.SyntaxError", { code: "invalid container mapping", context: t });
        } else if (r2.includes("@graph")) {
          if (r2.some((e8) => "@graph" !== e8 && "@id" !== e8 && "@index" !== e8 && "@set" !== e8))
            throw new Su("Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set", "jsonld.SyntaxError", { code: "invalid container mapping", context: t });
        } else
          i5 &= r2.length <= (o5 ? 2 : 1);
        if (r2.includes("@type") && (u4["@type"] = u4["@type"] || "@id", !["@id", "@vocab"].includes(u4["@type"])))
          throw new Su("Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.", "jsonld.SyntaxError", { code: "invalid type mapping", context: t });
      } else
        i5 &= !Ru(a4["@container"]), i5 &= r2.length <= 1;
      if (i5 &= r2.every((e8) => n5.includes(e8)), i5 &= !(o5 && r2.includes("@list")), !i5)
        throw new Su("Invalid JSON-LD syntax; @context @container value must be one of the following: " + n5.join(", "), "jsonld.SyntaxError", { code: "invalid container mapping", context: t });
      if (u4.reverse && !r2.every((e8) => ["@index", "@set"].includes(e8)))
        throw new Su("Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.", "jsonld.SyntaxError", { code: "invalid reverse property", context: t });
      u4["@container"] = r2;
    }
    if ("@index" in a4) {
      if (!("@container" in a4) || !u4["@container"].includes("@index"))
        throw new Su(`Invalid JSON-LD syntax; @index without @index in @container: "${a4["@index"]}" on term "${r}".`, "jsonld.SyntaxError", { code: "invalid term definition", context: t });
      if (!ju(a4["@index"]) || 0 === a4["@index"].indexOf("@"))
        throw new Su(`Invalid JSON-LD syntax; @index must expand to an IRI: "${a4["@index"]}" on term "${r}".`, "jsonld.SyntaxError", { code: "invalid term definition", context: t });
      u4["@index"] = a4["@index"];
    }
    if ("@context" in a4 && (u4["@context"] = a4["@context"]), "@language" in a4 && !("@type" in a4)) {
      let e8 = a4["@language"];
      if (null !== e8 && !ju(e8))
        throw new Su("Invalid JSON-LD syntax; @context @language value must be a string or null.", "jsonld.SyntaxError", { code: "invalid language mapping", context: t });
      null !== e8 && (e8 = e8.toLowerCase()), u4["@language"] = e8;
    }
    if ("@prefix" in a4) {
      if (r.match(/:|\//))
        throw new Su("Invalid JSON-LD syntax; @context @prefix used on a compact IRI term", "jsonld.SyntaxError", { code: "invalid term definition", context: t });
      if (Fu.isKeyword(u4["@id"]))
        throw new Su("Invalid JSON-LD syntax; keywords may not be used as prefixes", "jsonld.SyntaxError", { code: "invalid term definition", context: t });
      if ("boolean" != typeof a4["@prefix"])
        throw new Su("Invalid JSON-LD syntax; @context value for @prefix must be boolean", "jsonld.SyntaxError", { code: "invalid @prefix value", context: t });
      u4._prefix = true === a4["@prefix"];
    }
    if ("@direction" in a4) {
      const e8 = a4["@direction"];
      if (null !== e8 && "ltr" !== e8 && "rtl" !== e8)
        throw new Su('Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".', "jsonld.SyntaxError", { code: "invalid base direction", context: t });
      u4["@direction"] = e8;
    }
    if ("@nest" in a4) {
      const e8 = a4["@nest"];
      if (!ju(e8) || "@nest" !== e8 && 0 === e8.indexOf("@"))
        throw new Su("Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.", "jsonld.SyntaxError", { code: "invalid @nest value", context: t });
      u4["@nest"] = e8;
    }
    const h6 = u4["@id"];
    if ("@context" === h6 || "@preserve" === h6)
      throw new Su("Invalid JSON-LD syntax; @context and @preserve cannot be aliased.", "jsonld.SyntaxError", { code: "invalid keyword alias", context: t });
    if (s3 && s3.protected && !o4 && (e7.protected[r] = true, u4.protected = true, !Yu(s3, u4)))
      throw new Su("Invalid JSON-LD syntax; tried to redefine a protected term.", "jsonld.SyntaxError", { code: "protected term redefinition", context: t, term: r });
  }, Fu.expandIri = (e7, t, r, n4) => qu(e7, t, r, void 0, void 0, n4), Fu.getInitialContext = (e7) => {
    const t = JSON.stringify({ processingMode: e7.processingMode }), r = $u.get(t);
    if (r)
      return r;
    const n4 = { processingMode: e7.processingMode, mappings: /* @__PURE__ */ new Map(), inverse: null, getInverse: function() {
      const e8 = this;
      if (e8.inverse)
        return e8.inverse;
      const t2 = e8.inverse = {}, r2 = e8.fastCurieMap = {}, n5 = {}, a4 = (e8["@language"] || "@none").toLowerCase(), s3 = e8["@direction"], l6 = e8.mappings, u4 = [...l6.keys()].sort(Bu);
      for (const e9 of u4) {
        const i5 = l6.get(e9);
        if (null === i5)
          continue;
        let u5 = i5["@container"] || "@none";
        if (u5 = [].concat(u5).sort().join(""), null === i5["@id"])
          continue;
        const c3 = Pu(i5["@id"]);
        for (const l7 of c3) {
          let c4 = t2[l7];
          const d5 = Fu.isKeyword(l7);
          if (c4)
            d5 || i5._termHasColon || n5[l7].push(e9);
          else if (t2[l7] = c4 = {}, !d5 && !i5._termHasColon) {
            n5[l7] = [e9];
            const t3 = { iri: l7, terms: n5[l7] };
            l7[0] in r2 ? r2[l7[0]].push(t3) : r2[l7[0]] = [t3];
          }
          if (c4[u5] || (c4[u5] = { "@language": {}, "@type": {}, "@any": {} }), c4 = c4[u5], o4(e9, c4["@any"], "@none"), i5.reverse)
            o4(e9, c4["@type"], "@reverse");
          else if ("@none" === i5["@type"])
            o4(e9, c4["@any"], "@none"), o4(e9, c4["@language"], "@none"), o4(e9, c4["@type"], "@none");
          else if ("@type" in i5)
            o4(e9, c4["@type"], i5["@type"]);
          else if ("@language" in i5 && "@direction" in i5) {
            const t3 = i5["@language"], r3 = i5["@direction"];
            o4(e9, c4["@language"], t3 && r3 ? `${t3}_${r3}`.toLowerCase() : t3 ? t3.toLowerCase() : r3 ? `_${r3}` : "@null");
          } else
            "@language" in i5 ? o4(e9, c4["@language"], (i5["@language"] || "@null").toLowerCase()) : "@direction" in i5 ? i5["@direction"] ? o4(e9, c4["@language"], `_${i5["@direction"]}`) : o4(e9, c4["@language"], "@none") : s3 ? (o4(e9, c4["@language"], `_${s3}`), o4(e9, c4["@language"], "@none"), o4(e9, c4["@type"], "@none")) : (o4(e9, c4["@language"], a4), o4(e9, c4["@language"], "@none"), o4(e9, c4["@type"], "@none"));
        }
      }
      for (const e9 in r2)
        i4(r2, e9, 1);
      return t2;
    }, clone: function() {
      const e8 = {};
      e8.mappings = Iu.clone(this.mappings), e8.clone = this.clone, e8.inverse = null, e8.getInverse = this.getInverse, e8.protected = Iu.clone(this.protected), this.previousContext && (e8.previousContext = this.previousContext.clone());
      e8.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (e8["@base"] = this["@base"]);
      "@language" in this && (e8["@language"] = this["@language"]);
      "@vocab" in this && (e8["@vocab"] = this["@vocab"]);
      return e8;
    }, revertToPreviousContext: function() {
      if (!this.previousContext)
        return this;
      return this.previousContext.clone();
    }, protected: {} };
    return 1e4 === $u.size && $u.clear(), $u.set(t, n4), n4;
    function i4(e8, t2, r2) {
      const n5 = e8[t2], o5 = e8[t2] = {};
      let a4, s3;
      for (const e9 of n5)
        a4 = e9.iri, s3 = r2 >= a4.length ? "" : a4[r2], s3 in o5 ? o5[s3].push(e9) : o5[s3] = [e9];
      for (const e9 in o5)
        "" !== e9 && i4(o5, e9, r2 + 1);
    }
    function o4(e8, t2, r2) {
      t2.hasOwnProperty(r2) || (t2[r2] = e8);
    }
  }, Fu.getContextValue = (e7, t, r) => {
    if (null === t) {
      if ("@context" === r)
        return;
      return null;
    }
    if (e7.mappings.has(t)) {
      const n4 = e7.mappings.get(t);
      if (Du(r))
        return n4;
      if (n4.hasOwnProperty(r))
        return n4[r];
    }
    return "@language" === r && r in e7 || "@direction" === r && r in e7 ? e7[r] : "@context" !== r ? null : void 0;
  }, Fu.processingMode = (e7, t) => t.toString() >= "1.1" ? !e7.processingMode || e7.processingMode >= "json-ld-" + t.toString() : "json-ld-1.0" === e7.processingMode, Fu.isKeyword = (e7) => {
    if (!ju(e7) || "@" !== e7[0])
      return false;
    switch (e7) {
      case "@base":
      case "@container":
      case "@context":
      case "@default":
      case "@direction":
      case "@embed":
      case "@explicit":
      case "@graph":
      case "@id":
      case "@included":
      case "@index":
      case "@json":
      case "@language":
      case "@list":
      case "@nest":
      case "@none":
      case "@omitDefault":
      case "@prefix":
      case "@preserve":
      case "@protected":
      case "@requireAll":
      case "@reverse":
      case "@set":
      case "@type":
      case "@value":
      case "@version":
      case "@vocab":
        return true;
    }
    return false;
  };
  var Wu = tl;
  var { isArray: zu, isObject: Gu, isEmptyObject: Hu, isString: Ju, isUndefined: Vu } = Zs;
  var { isList: Qu, isValue: Zu, isGraph: Ku, isSubject: Xu } = el;
  var { expandIri: ec, getContextValue: tc, isKeyword: rc, process: nc, processingMode: ic } = Uu;
  var { isAbsolute: oc } = El;
  var { REGEX_BCP47: ac, REGEX_KEYWORD: sc, addValue: lc, asArray: uc, getValues: cc, validateTypeValue: dc } = hl;
  var { handleEvent: hc } = Eu;
  var fc = {};
  var pc = fc;
  function mc({ value: e7, count: t, options: r }) {
    if (0 === t || "@value" in e7 || "@list" in e7 || 1 === t && "@id" in e7) {
      if (r.eventHandler) {
        let n4, i4;
        0 === t ? (n4 = "empty object", i4 = "Dropping empty object.") : "@value" in e7 ? (n4 = "object with only @value", i4 = "Dropping object with only @value.") : "@list" in e7 ? (n4 = "object with only @list", i4 = "Dropping object with only @list.") : 1 === t && "@id" in e7 && (n4 = "object with only @id", i4 = "Dropping object with only @id."), hc({ event: { type: ["JsonLdEvent"], code: n4, level: "warning", message: i4, details: { value: e7 } }, options: r });
      }
      return null;
    }
    return e7;
  }
  async function yc({ activeCtx: e7, activeProperty: t, expandedActiveProperty: r, element: n4, expandedParent: i4, options: o4 = {}, insideList: a4, typeKey: s3, typeScopedContext: l6 }) {
    const u4 = Object.keys(n4).sort(), c3 = [];
    let d5;
    const h6 = n4[s3] && "@json" === ec(e7, zu(n4[s3]) ? n4[s3][0] : n4[s3], { vocab: true }, { ...o4, typeExpansion: true });
    for (const a5 of u4) {
      let s4, u5 = n4[a5];
      if ("@context" === a5)
        continue;
      const f5 = ec(e7, a5, { vocab: true }, o4);
      if (null === f5 || !oc(f5) && !rc(f5)) {
        o4.eventHandler && hc({ event: { type: ["JsonLdEvent"], code: "invalid property", level: "warning", message: "Dropping property that did not expand into an absolute IRI or keyword.", details: { property: a5, expandedProperty: f5 } }, options: o4 });
        continue;
      }
      if (rc(f5)) {
        if ("@reverse" === r)
          throw new Wu("Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.", "jsonld.SyntaxError", { code: "invalid reverse property map", value: u5 });
        if (f5 in i4 && "@included" !== f5 && "@type" !== f5)
          throw new Wu("Invalid JSON-LD syntax; colliding keywords detected.", "jsonld.SyntaxError", { code: "colliding keywords", keyword: f5 });
      }
      if ("@id" === f5) {
        if (!Ju(u5)) {
          if (!o4.isFrame)
            throw new Wu('Invalid JSON-LD syntax; "@id" value must a string.', "jsonld.SyntaxError", { code: "invalid @id value", value: u5 });
          if (Gu(u5)) {
            if (!Hu(u5))
              throw new Wu('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", { code: "invalid @id value", value: u5 });
          } else {
            if (!zu(u5))
              throw new Wu('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", { code: "invalid @id value", value: u5 });
            if (!u5.every((e8) => Ju(e8)))
              throw new Wu('Invalid JSON-LD syntax; "@id" value an empty object or array of strings, if framing', "jsonld.SyntaxError", { code: "invalid @id value", value: u5 });
          }
        }
        lc(i4, "@id", uc(u5).map((t2) => {
          if (Ju(t2)) {
            const r2 = ec(e7, t2, { base: true }, o4);
            return o4.eventHandler && (null === r2 ? hc(null === t2 ? { event: { type: ["JsonLdEvent"], code: "null @id value", level: "warning", message: "Null @id found.", details: { id: t2 } }, options: o4 } : { event: { type: ["JsonLdEvent"], code: "reserved @id value", level: "warning", message: "Reserved @id found.", details: { id: t2 } }, options: o4 }) : oc(r2) || hc({ event: { type: ["JsonLdEvent"], code: "relative @id reference", level: "warning", message: "Relative @id reference found.", details: { id: t2, expandedId: r2 } }, options: o4 })), r2;
          }
          return t2;
        }), { propertyIsArray: o4.isFrame });
        continue;
      }
      if ("@type" === f5) {
        Gu(u5) && (u5 = Object.fromEntries(Object.entries(u5).map(([e8, t2]) => [ec(l6, e8, { vocab: true }), uc(t2).map((e9) => ec(l6, e9, { base: true, vocab: true }, { ...o4, typeExpansion: true }))]))), dc(u5, o4.isFrame), lc(i4, "@type", uc(u5).map((e8) => {
          if (Ju(e8)) {
            const t2 = ec(l6, e8, { base: true, vocab: true }, { ...o4, typeExpansion: true });
            return "@json" === t2 || oc(t2) || o4.eventHandler && hc({ event: { type: ["JsonLdEvent"], code: "relative @type reference", level: "warning", message: "Relative @type reference found.", details: { type: e8 } }, options: o4 }), t2;
          }
          return e8;
        }), { propertyIsArray: !!o4.isFrame });
        continue;
      }
      if ("@included" === f5 && ic(e7, 1.1)) {
        const r2 = uc(await fc.expand({ activeCtx: e7, activeProperty: t, element: u5, options: o4 }));
        if (!r2.every((e8) => Xu(e8)))
          throw new Wu("Invalid JSON-LD syntax; values of @included must expand to node objects.", "jsonld.SyntaxError", { code: "invalid @included value", value: u5 });
        lc(i4, "@included", r2, { propertyIsArray: true });
        continue;
      }
      if ("@graph" === f5 && !Gu(u5) && !zu(u5))
        throw new Wu('Invalid JSON-LD syntax; "@graph" value must not be an object or an array.', "jsonld.SyntaxError", { code: "invalid @graph value", value: u5 });
      if ("@value" === f5) {
        d5 = u5, h6 && ic(e7, 1.1) ? i4["@value"] = u5 : lc(i4, "@value", u5, { propertyIsArray: o4.isFrame });
        continue;
      }
      if ("@language" === f5) {
        if (null === u5)
          continue;
        if (!Ju(u5) && !o4.isFrame)
          throw new Wu('Invalid JSON-LD syntax; "@language" value must be a string.', "jsonld.SyntaxError", { code: "invalid language-tagged string", value: u5 });
        u5 = uc(u5).map((e8) => Ju(e8) ? e8.toLowerCase() : e8);
        for (const e8 of u5)
          Ju(e8) && !e8.match(ac) && o4.eventHandler && hc({ event: { type: ["JsonLdEvent"], code: "invalid @language value", level: "warning", message: "@language value must be valid BCP47.", details: { language: e8 } }, options: o4 });
        lc(i4, "@language", u5, { propertyIsArray: o4.isFrame });
        continue;
      }
      if ("@direction" === f5) {
        if (!Ju(u5) && !o4.isFrame)
          throw new Wu('Invalid JSON-LD syntax; "@direction" value must be a string.', "jsonld.SyntaxError", { code: "invalid base direction", value: u5 });
        u5 = uc(u5);
        for (const e8 of u5)
          if (Ju(e8) && "ltr" !== e8 && "rtl" !== e8)
            throw new Wu('Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".', "jsonld.SyntaxError", { code: "invalid base direction", value: u5 });
        lc(i4, "@direction", u5, { propertyIsArray: o4.isFrame });
        continue;
      }
      if ("@index" === f5) {
        if (!Ju(u5))
          throw new Wu('Invalid JSON-LD syntax; "@index" value must be a string.', "jsonld.SyntaxError", { code: "invalid @index value", value: u5 });
        lc(i4, "@index", u5);
        continue;
      }
      if ("@reverse" === f5) {
        if (!Gu(u5))
          throw new Wu('Invalid JSON-LD syntax; "@reverse" value must be an object.', "jsonld.SyntaxError", { code: "invalid @reverse value", value: u5 });
        if (s4 = await fc.expand({ activeCtx: e7, activeProperty: "@reverse", element: u5, options: o4 }), "@reverse" in s4)
          for (const e8 in s4["@reverse"])
            lc(i4, e8, s4["@reverse"][e8], { propertyIsArray: true });
        let t2 = i4["@reverse"] || null;
        for (const e8 in s4) {
          if ("@reverse" === e8)
            continue;
          null === t2 && (t2 = i4["@reverse"] = {}), lc(t2, e8, [], { propertyIsArray: true });
          const r2 = s4[e8];
          for (let n5 = 0; n5 < r2.length; ++n5) {
            const i5 = r2[n5];
            if (Zu(i5) || Qu(i5))
              throw new Wu('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.', "jsonld.SyntaxError", { code: "invalid reverse property value", value: s4 });
            lc(t2, e8, i5, { propertyIsArray: true });
          }
        }
        continue;
      }
      if ("@nest" === f5) {
        c3.push(a5);
        continue;
      }
      let p6 = e7;
      const m5 = tc(e7, a5, "@context");
      Vu(m5) || (p6 = await nc({ activeCtx: e7, localCtx: m5, propagate: true, overrideProtected: true, options: o4 }));
      const y5 = tc(e7, a5, "@container") || [];
      if (y5.includes("@language") && Gu(u5)) {
        s4 = vc(p6, u5, tc(p6, a5, "@direction"), o4);
      } else if (y5.includes("@index") && Gu(u5)) {
        const t2 = y5.includes("@graph"), r2 = tc(p6, a5, "@index") || "@index", n5 = "@index" !== r2 && ec(e7, r2, { vocab: true }, o4);
        s4 = await wc({ activeCtx: p6, options: o4, activeProperty: a5, value: u5, asGraph: t2, indexKey: r2, propertyIndex: n5 });
      } else if (y5.includes("@id") && Gu(u5)) {
        const e8 = y5.includes("@graph");
        s4 = await wc({ activeCtx: p6, options: o4, activeProperty: a5, value: u5, asGraph: e8, indexKey: "@id" });
      } else if (y5.includes("@type") && Gu(u5))
        s4 = await wc({ activeCtx: p6.revertToPreviousContext(), options: o4, activeProperty: a5, value: u5, asGraph: false, indexKey: "@type" });
      else {
        const n5 = "@list" === f5;
        if (n5 || "@set" === f5) {
          let e8 = t;
          n5 && "@graph" === r && (e8 = null), s4 = await fc.expand({ activeCtx: p6, activeProperty: e8, element: u5, options: o4, insideList: n5 });
        } else
          s4 = "@json" === tc(e7, a5, "@type") ? { "@type": "@json", "@value": u5 } : await fc.expand({ activeCtx: p6, activeProperty: a5, element: u5, options: o4, insideList: false });
      }
      if (null !== s4 || "@value" === f5) {
        if ("@list" !== f5 && !Qu(s4) && y5.includes("@list") && (s4 = { "@list": uc(s4) }), y5.includes("@graph") && !y5.some((e8) => "@id" === e8 || "@index" === e8)) {
          if (s4 = uc(s4), o4.isFrame || (s4 = s4.filter((e8) => null !== mc({ value: e8, count: Object.keys(e8).length, options: o4 }))), 0 === s4.length)
            continue;
          s4 = s4.map((e8) => ({ "@graph": uc(e8) }));
        }
        if (p6.mappings.has(a5) && p6.mappings.get(a5).reverse) {
          const e8 = i4["@reverse"] = i4["@reverse"] || {};
          s4 = uc(s4);
          for (let t2 = 0; t2 < s4.length; ++t2) {
            const r2 = s4[t2];
            if (Zu(r2) || Qu(r2))
              throw new Wu('Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.', "jsonld.SyntaxError", { code: "invalid reverse property value", value: s4 });
            lc(e8, f5, r2, { propertyIsArray: true });
          }
        } else
          lc(i4, f5, s4, { propertyIsArray: true });
      }
    }
    if ("@value" in i4) {
      if ("@json" === i4["@type"] && ic(e7, 1.1))
        ;
      else if ((Gu(d5) || zu(d5)) && !o4.isFrame)
        throw new Wu('Invalid JSON-LD syntax; "@value" value must not be an object or an array.', "jsonld.SyntaxError", { code: "invalid value object value", value: d5 });
    }
    for (const u5 of c3) {
      const c4 = zu(n4[u5]) ? n4[u5] : [n4[u5]];
      for (const n5 of c4) {
        if (!Gu(n5) || Object.keys(n5).some((t2) => "@value" === ec(e7, t2, { vocab: true }, o4)))
          throw new Wu("Invalid JSON-LD syntax; nested value must be a node object.", "jsonld.SyntaxError", { code: "invalid @nest value", value: n5 });
        await yc({ activeCtx: e7, activeProperty: t, expandedActiveProperty: r, element: n5, expandedParent: i4, options: o4, insideList: a4, typeScopedContext: l6, typeKey: s3 });
      }
    }
  }
  function gc({ activeCtx: e7, activeProperty: t, value: r, options: n4 }) {
    if (null == r)
      return null;
    const i4 = ec(e7, t, { vocab: true }, n4);
    if ("@id" === i4)
      return ec(e7, r, { base: true }, n4);
    if ("@type" === i4)
      return ec(e7, r, { vocab: true, base: true }, { ...n4, typeExpansion: true });
    const o4 = tc(e7, t, "@type");
    if (("@id" === o4 || "@graph" === i4) && Ju(r)) {
      const i5 = ec(e7, r, { base: true }, n4);
      return null === i5 && r.match(sc) && n4.eventHandler && hc({ event: { type: ["JsonLdEvent"], code: "reserved @id value", level: "warning", message: "Reserved @id found.", details: { id: t } }, options: n4 }), { "@id": i5 };
    }
    if ("@vocab" === o4 && Ju(r))
      return { "@id": ec(e7, r, { vocab: true, base: true }, n4) };
    if (rc(i4))
      return r;
    const a4 = {};
    if (o4 && !["@id", "@vocab", "@none"].includes(o4))
      a4["@type"] = o4;
    else if (Ju(r)) {
      const r2 = tc(e7, t, "@language");
      null !== r2 && (a4["@language"] = r2);
      const n5 = tc(e7, t, "@direction");
      null !== n5 && (a4["@direction"] = n5);
    }
    return ["boolean", "number", "string"].includes(typeof r) || (r = r.toString()), a4["@value"] = r, a4;
  }
  function vc(e7, t, r, n4) {
    const i4 = [], o4 = Object.keys(t).sort();
    for (const a4 of o4) {
      const o5 = ec(e7, a4, { vocab: true }, n4);
      let s3 = t[a4];
      zu(s3) || (s3 = [s3]);
      for (const e8 of s3) {
        if (null === e8)
          continue;
        if (!Ju(e8))
          throw new Wu("Invalid JSON-LD syntax; language map values must be strings.", "jsonld.SyntaxError", { code: "invalid language map value", languageMap: t });
        const s4 = { "@value": e8 };
        "@none" !== o5 && (a4.match(ac) || n4.eventHandler && hc({ event: { type: ["JsonLdEvent"], code: "invalid @language value", level: "warning", message: "@language value must be valid BCP47.", details: { language: a4 } }, options: n4 }), s4["@language"] = a4.toLowerCase()), r && (s4["@direction"] = r), i4.push(s4);
      }
    }
    return i4;
  }
  async function wc({ activeCtx: e7, options: t, activeProperty: r, value: n4, asGraph: i4, indexKey: o4, propertyIndex: a4 }) {
    const s3 = [], l6 = Object.keys(n4).sort(), u4 = "@type" === o4;
    for (let c3 of l6) {
      if (u4) {
        const r2 = tc(e7, c3, "@context");
        Vu(r2) || (e7 = await nc({ activeCtx: e7, localCtx: r2, propagate: false, options: t }));
      }
      let l7, d5 = n4[c3];
      zu(d5) || (d5 = [d5]), d5 = await fc.expand({ activeCtx: e7, activeProperty: r, element: d5, options: t, insideList: false, insideIndex: true }), l7 = a4 ? "@none" === c3 ? "@none" : gc({ activeCtx: e7, activeProperty: o4, value: c3, options: t }) : ec(e7, c3, { vocab: true }, t), "@id" === o4 ? c3 = ec(e7, c3, { base: true }, t) : u4 && (c3 = l7);
      for (let e8 of d5) {
        if (i4 && !Ku(e8) && (e8 = { "@graph": [e8] }), "@type" === o4)
          "@none" === l7 || (e8["@type"] ? e8["@type"] = [c3].concat(e8["@type"]) : e8["@type"] = [c3]);
        else {
          if (Zu(e8) && !["@language", "@type", "@index"].includes(o4))
            throw new Wu(`Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${o4}".`, "jsonld.SyntaxError", { code: "invalid value object", value: e8 });
          a4 ? "@none" !== l7 && lc(e8, a4, l7, { propertyIsArray: true, prependValue: true }) : "@none" === l7 || o4 in e8 || (e8[o4] = c3);
        }
        s3.push(e8);
      }
    }
    return s3;
  }
  fc.expand = async ({ activeCtx: e7, activeProperty: t = null, element: r, options: n4 = {}, insideList: i4 = false, insideIndex: o4 = false, typeScopedContext: a4 = null }) => {
    if (null == r)
      return null;
    if ("@default" === t && (n4 = Object.assign({}, n4, { isFrame: false })), !zu(r) && !Gu(r))
      return i4 || null !== t && "@graph" !== ec(e7, t, { vocab: true }, n4) ? gc({ activeCtx: e7, activeProperty: t, value: r, options: n4 }) : (n4.eventHandler && hc({ event: { type: ["JsonLdEvent"], code: "free-floating scalar", level: "warning", message: "Dropping free-floating scalar not in a list.", details: { value: r } }, options: n4 }), null);
    if (zu(r)) {
      let s4 = [];
      const l7 = tc(e7, t, "@container") || [];
      i4 = i4 || l7.includes("@list");
      for (let l8 = 0; l8 < r.length; ++l8) {
        let u5 = await fc.expand({ activeCtx: e7, activeProperty: t, element: r[l8], options: n4, insideIndex: o4, typeScopedContext: a4 });
        i4 && zu(u5) && (u5 = { "@list": u5 }), null !== u5 && (zu(u5) ? s4 = s4.concat(u5) : s4.push(u5));
      }
      return s4;
    }
    const s3 = ec(e7, t, { vocab: true }, n4), l6 = tc(e7, t, "@context");
    a4 = a4 || (e7.previousContext ? e7 : null);
    let u4 = Object.keys(r).sort(), c3 = !o4;
    if (c3 && a4 && u4.length <= 2 && !u4.includes("@context"))
      for (const t2 of u4) {
        const r2 = ec(a4, t2, { vocab: true }, n4);
        if ("@value" === r2) {
          c3 = false, e7 = a4;
          break;
        }
        if ("@id" === r2 && 1 === u4.length) {
          c3 = false;
          break;
        }
      }
    c3 && (e7 = e7.revertToPreviousContext()), Vu(l6) || (e7 = await nc({ activeCtx: e7, localCtx: l6, propagate: true, overrideProtected: true, options: n4 })), "@context" in r && (e7 = await nc({ activeCtx: e7, localCtx: r["@context"], options: n4 })), a4 = e7;
    let d5 = null;
    for (const t2 of u4) {
      if ("@type" === ec(e7, t2, { vocab: true }, n4)) {
        d5 = d5 || t2;
        const i5 = r[t2], o5 = Array.isArray(i5) ? i5.length > 1 ? i5.slice().sort() : i5 : [i5];
        for (const t3 of o5) {
          const r2 = tc(a4, t3, "@context");
          Vu(r2) || (e7 = await nc({ activeCtx: e7, localCtx: r2, options: n4, propagate: false }));
        }
      }
    }
    let h6 = {};
    await yc({ activeCtx: e7, activeProperty: t, expandedActiveProperty: s3, element: r, expandedParent: h6, options: n4, insideList: i4, typeKey: d5, typeScopedContext: a4 }), u4 = Object.keys(h6);
    let f5 = u4.length;
    if ("@value" in h6) {
      if ("@type" in h6 && ("@language" in h6 || "@direction" in h6))
        throw new Wu('Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".', "jsonld.SyntaxError", { code: "invalid value object", element: h6 });
      let t2 = f5 - 1;
      if ("@type" in h6 && (t2 -= 1), "@index" in h6 && (t2 -= 1), "@language" in h6 && (t2 -= 1), "@direction" in h6 && (t2 -= 1), 0 !== t2)
        throw new Wu('Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".', "jsonld.SyntaxError", { code: "invalid value object", element: h6 });
      const r2 = null === h6["@value"] ? [] : uc(h6["@value"]), i5 = cc(h6, "@type");
      if (ic(e7, 1.1) && i5.includes("@json") && 1 === i5.length)
        ;
      else if (0 === r2.length)
        n4.eventHandler && hc({ event: { type: ["JsonLdEvent"], code: "null @value value", level: "warning", message: "Dropping null @value value.", details: { value: h6 } }, options: n4 }), h6 = null;
      else {
        if (!r2.every((e8) => Ju(e8) || Hu(e8)) && "@language" in h6)
          throw new Wu("Invalid JSON-LD syntax; only strings may be language-tagged.", "jsonld.SyntaxError", { code: "invalid language-tagged value", element: h6 });
        if (!i5.every((e8) => oc(e8) && !(Ju(e8) && 0 === e8.indexOf("_:")) || Hu(e8)))
          throw new Wu('Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".', "jsonld.SyntaxError", { code: "invalid typed value", element: h6 });
      }
    } else if ("@type" in h6 && !zu(h6["@type"]))
      h6["@type"] = [h6["@type"]];
    else if ("@set" in h6 || "@list" in h6) {
      if (f5 > 1 && (2 !== f5 || !("@index" in h6)))
        throw new Wu('Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".', "jsonld.SyntaxError", { code: "invalid set or list object", element: h6 });
      "@set" in h6 && (h6 = h6["@set"], u4 = Object.keys(h6), f5 = u4.length);
    } else
      1 === f5 && "@language" in h6 && (n4.eventHandler && hc({ event: { type: ["JsonLdEvent"], code: "object with only @language", level: "warning", message: "Dropping object with only @language.", details: { value: h6 } }, options: n4 }), h6 = null);
    return !Gu(h6) || n4.keepFreeFloatingNodes || i4 || null !== t && "@graph" !== s3 && !(tc(e7, t, "@container") || []).includes("@graph") || (h6 = mc({ value: h6, count: f5, options: n4 })), h6;
  };
  var { isKeyword: bc } = Uu;
  var _c = el;
  var Ec = Zs;
  var Tc = hl;
  var xc = tl;
  var Ic = {};
  var Sc = Ic;
  Ic.createMergedNodeMap = (e7, t) => {
    const r = (t = t || {}).issuer || new Tc.IdentifierIssuer("_:b"), n4 = { "@default": {} };
    return Ic.createNodeMap(e7, n4, "@default", r), Ic.mergeNodeMaps(n4);
  }, Ic.createNodeMap = (e7, t, r, n4, i4, o4) => {
    if (Ec.isArray(e7)) {
      for (const i5 of e7)
        Ic.createNodeMap(i5, t, r, n4, void 0, o4);
      return;
    }
    if (!Ec.isObject(e7))
      return void (o4 && o4.push(e7));
    if (_c.isValue(e7)) {
      if ("@type" in e7) {
        let t2 = e7["@type"];
        0 === t2.indexOf("_:") && (e7["@type"] = t2 = n4.getId(t2));
      }
      return void (o4 && o4.push(e7));
    }
    if (o4 && _c.isList(e7)) {
      const a5 = [];
      return Ic.createNodeMap(e7["@list"], t, r, n4, i4, a5), void o4.push({ "@list": a5 });
    }
    if ("@type" in e7) {
      const t2 = e7["@type"];
      for (const e8 of t2)
        0 === e8.indexOf("_:") && n4.getId(e8);
    }
    Ec.isUndefined(i4) && (i4 = _c.isBlankNode(e7) ? n4.getId(e7["@id"]) : e7["@id"]), o4 && o4.push({ "@id": i4 });
    const a4 = t[r], s3 = a4[i4] = a4[i4] || {};
    s3["@id"] = i4;
    const l6 = Object.keys(e7).sort();
    for (let o5 of l6) {
      if ("@id" === o5)
        continue;
      if ("@reverse" === o5) {
        const o6 = { "@id": i4 }, s4 = e7["@reverse"];
        for (const e8 in s4) {
          const i5 = s4[e8];
          for (const s5 of i5) {
            let i6 = s5["@id"];
            _c.isBlankNode(s5) && (i6 = n4.getId(i6)), Ic.createNodeMap(s5, t, r, n4, i6), Tc.addValue(a4[i6], e8, o6, { propertyIsArray: true, allowDuplicate: false });
          }
        }
        continue;
      }
      if ("@graph" === o5) {
        i4 in t || (t[i4] = {}), Ic.createNodeMap(e7[o5], t, i4, n4);
        continue;
      }
      if ("@included" === o5) {
        Ic.createNodeMap(e7[o5], t, r, n4);
        continue;
      }
      if ("@type" !== o5 && bc(o5)) {
        if ("@index" === o5 && o5 in s3 && (e7[o5] !== s3[o5] || e7[o5]["@id"] !== s3[o5]["@id"]))
          throw new xc("Invalid JSON-LD syntax; conflicting @index property detected.", "jsonld.SyntaxError", { code: "conflicting indexes", subject: s3 });
        s3[o5] = e7[o5];
        continue;
      }
      const l7 = e7[o5];
      if (0 === o5.indexOf("_:") && (o5 = n4.getId(o5)), 0 !== l7.length)
        for (let e8 of l7)
          if ("@type" === o5 && (e8 = 0 === e8.indexOf("_:") ? n4.getId(e8) : e8), _c.isSubject(e8) || _c.isSubjectReference(e8)) {
            if ("@id" in e8 && !e8["@id"])
              continue;
            const i5 = _c.isBlankNode(e8) ? n4.getId(e8["@id"]) : e8["@id"];
            Tc.addValue(s3, o5, { "@id": i5 }, { propertyIsArray: true, allowDuplicate: false }), Ic.createNodeMap(e8, t, r, n4, i5);
          } else if (_c.isValue(e8))
            Tc.addValue(s3, o5, e8, { propertyIsArray: true, allowDuplicate: false });
          else if (_c.isList(e8)) {
            const a5 = [];
            Ic.createNodeMap(e8["@list"], t, r, n4, i4, a5), e8 = { "@list": a5 }, Tc.addValue(s3, o5, e8, { propertyIsArray: true, allowDuplicate: false });
          } else
            Ic.createNodeMap(e8, t, r, n4, i4), Tc.addValue(s3, o5, e8, { propertyIsArray: true, allowDuplicate: false });
      else
        Tc.addValue(s3, o5, [], { propertyIsArray: true });
    }
  }, Ic.mergeNodeMapGraphs = (e7) => {
    const t = {};
    for (const r of Object.keys(e7).sort())
      for (const n4 of Object.keys(e7[r]).sort()) {
        const i4 = e7[r][n4];
        n4 in t || (t[n4] = { "@id": n4 });
        const o4 = t[n4];
        for (const e8 of Object.keys(i4).sort())
          if (bc(e8) && "@type" !== e8)
            o4[e8] = Tc.clone(i4[e8]);
          else
            for (const t2 of i4[e8])
              Tc.addValue(o4, e8, Tc.clone(t2), { propertyIsArray: true, allowDuplicate: false });
      }
    return t;
  }, Ic.mergeNodeMaps = (e7) => {
    const t = e7["@default"], r = Object.keys(e7).sort();
    for (const n4 of r) {
      if ("@default" === n4)
        continue;
      const r2 = e7[n4];
      let i4 = t[n4];
      i4 ? "@graph" in i4 || (i4["@graph"] = []) : t[n4] = i4 = { "@id": n4, "@graph": [] };
      const o4 = i4["@graph"];
      for (const e8 of Object.keys(r2).sort()) {
        const t2 = r2[e8];
        _c.isSubjectReference(t2) || o4.push(t2);
      }
    }
    return t;
  };
  var { isSubjectReference: Rc } = el;
  var { createMergedNodeMap: kc } = Sc;
  var jc = {};
  var Dc = jc;
  jc.flatten = (e7) => {
    const t = kc(e7), r = [], n4 = Object.keys(t).sort();
    for (let e8 = 0; e8 < n4.length; ++e8) {
      const i4 = t[n4[e8]];
      Rc(i4) || r.push(i4);
    }
    return r;
  };
  var Nc = tl;
  var Oc = el;
  var Cc = Zs;
  var { REGEX_BCP47: Ac, addValue: Mc } = hl;
  var { handleEvent: Lc } = Eu;
  var { RDF_LIST: Pc, RDF_FIRST: Bc, RDF_REST: $c, RDF_NIL: Fc, RDF_TYPE: Uc, RDF_JSON_LITERAL: qc, XSD_BOOLEAN: Yc, XSD_DOUBLE: Wc, XSD_INTEGER: zc, XSD_STRING: Gc } = vl;
  var Hc = {};
  var Jc = Hc;
  function Vc(e7, t, r, n4) {
    if (e7.termType.endsWith("Node"))
      return { "@id": e7.value };
    const i4 = { "@value": e7.value };
    if (e7.language)
      e7.language.match(Ac) || n4.eventHandler && Lc({ event: { type: ["JsonLdEvent"], code: "invalid @language value", level: "warning", message: "@language value must be valid BCP47.", details: { language: e7.language } }, options: n4 }), i4["@language"] = e7.language;
    else {
      let o4 = e7.datatype.value;
      if (o4 || (o4 = Gc), o4 === qc) {
        o4 = "@json";
        try {
          i4["@value"] = JSON.parse(i4["@value"]);
        } catch (e8) {
          throw new Nc("JSON literal could not be parsed.", "jsonld.InvalidJsonLiteral", { code: "invalid JSON literal", value: i4["@value"], cause: e8 });
        }
      }
      if (t) {
        if (o4 === Yc)
          "true" === i4["@value"] ? i4["@value"] = true : "false" === i4["@value"] && (i4["@value"] = false);
        else if (Cc.isNumeric(i4["@value"]))
          if (o4 === zc) {
            const e8 = parseInt(i4["@value"], 10);
            e8.toFixed(0) === i4["@value"] && (i4["@value"] = e8);
          } else
            o4 === Wc && (i4["@value"] = parseFloat(i4["@value"]));
        [Yc, zc, Wc, Gc].includes(o4) || (i4["@type"] = o4);
      } else if ("i18n-datatype" === r && o4.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, e8, t2] = o4.split(/[#_]/);
        e8.length > 0 && (i4["@language"] = e8, e8.match(Ac) || n4.eventHandler && Lc({ event: { type: ["JsonLdEvent"], code: "invalid @language value", level: "warning", message: "@language value must be valid BCP47.", details: { language: e8 } }, options: n4 })), i4["@direction"] = t2;
      } else
        o4 !== Gc && (i4["@type"] = o4);
    }
    return i4;
  }
  Hc.fromRDF = async (e7, t) => {
    const { useRdfType: r = false, useNativeTypes: n4 = false, rdfDirection: i4 = null } = t, o4 = {}, a4 = { "@default": o4 }, s3 = {};
    if (i4) {
      if ("compound-literal" === i4)
        throw new Nc("Unsupported rdfDirection value.", "jsonld.InvalidRdfDirection", { value: i4 });
      if ("i18n-datatype" !== i4)
        throw new Nc("Unknown rdfDirection value.", "jsonld.InvalidRdfDirection", { value: i4 });
    }
    for (const l7 of e7) {
      const e8 = "DefaultGraph" === l7.graph.termType ? "@default" : l7.graph.value;
      e8 in a4 || (a4[e8] = {}), "@default" === e8 || e8 in o4 || (o4[e8] = { "@id": e8 });
      const u5 = a4[e8], c3 = l7.subject.value, d5 = l7.predicate.value, h6 = l7.object;
      c3 in u5 || (u5[c3] = { "@id": c3 });
      const f5 = u5[c3], p6 = h6.termType.endsWith("Node");
      if (p6 && !(h6.value in u5) && (u5[h6.value] = { "@id": h6.value }), d5 === Uc && !r && p6) {
        Mc(f5, "@type", h6.value, { propertyIsArray: true });
        continue;
      }
      const m5 = Vc(h6, n4, i4, t);
      if (Mc(f5, d5, m5, { propertyIsArray: true }), p6)
        if (h6.value === Fc) {
          const e9 = u5[h6.value];
          "usages" in e9 || (e9.usages = []), e9.usages.push({ node: f5, property: d5, value: m5 });
        } else
          h6.value in s3 ? s3[h6.value] = false : s3[h6.value] = { node: f5, property: d5, value: m5 };
    }
    for (const e8 in a4) {
      const t2 = a4[e8];
      if (!(Fc in t2))
        continue;
      const r2 = t2[Fc];
      if (r2.usages) {
        for (let e9 of r2.usages) {
          let r3 = e9.node, n5 = e9.property, i5 = e9.value;
          const o5 = [], a5 = [];
          let l7 = Object.keys(r3).length;
          for (; n5 === $c && Cc.isObject(s3[r3["@id"]]) && Cc.isArray(r3[Bc]) && 1 === r3[Bc].length && Cc.isArray(r3[$c]) && 1 === r3[$c].length && (3 === l7 || 4 === l7 && Cc.isArray(r3["@type"]) && 1 === r3["@type"].length && r3["@type"][0] === Pc) && (o5.push(r3[Bc][0]), a5.push(r3["@id"]), e9 = s3[r3["@id"]], r3 = e9.node, n5 = e9.property, i5 = e9.value, l7 = Object.keys(r3).length, Oc.isBlankNode(r3)); )
            ;
          delete i5["@id"], i5["@list"] = o5.reverse();
          for (const e10 of a5)
            delete t2[e10];
        }
        delete r2.usages;
      }
    }
    const l6 = [], u4 = Object.keys(o4).sort();
    for (const e8 of u4) {
      const t2 = o4[e8];
      if (e8 in a4) {
        const r2 = t2["@graph"] = [], n5 = a4[e8], i5 = Object.keys(n5).sort();
        for (const e9 of i5) {
          const t3 = n5[e9];
          Oc.isSubjectReference(t3) || r2.push(t3);
        }
      }
      Oc.isSubjectReference(t2) || l6.push(t2);
    }
    return l6;
  };
  var { createNodeMap: Qc } = Sc;
  var { isKeyword: Zc } = Uu;
  var Kc = el;
  var Xc = function e5(t) {
    return null === t || "object" != typeof t || null != t.toJSON ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((t2, r, n4) => t2 + (0 === n4 ? "" : ",") + e5(void 0 === r || "symbol" == typeof r ? null : r), "") + "]" : "{" + Object.keys(t).sort().reduce((r, n4, i4) => {
      if (void 0 === t[n4] || "symbol" == typeof t[n4])
        return r;
      return r + (0 === r.length ? "" : ",") + e5(n4) + ":" + e5(t[n4]);
    }, "") + "}";
  };
  var ed = tl;
  var td = Zs;
  var rd = hl;
  var { handleEvent: nd } = Eu;
  var { RDF_FIRST: id, RDF_REST: od, RDF_NIL: ad, RDF_TYPE: sd, RDF_JSON_LITERAL: ld, RDF_LANGSTRING: ud, XSD_BOOLEAN: cd, XSD_DOUBLE: dd, XSD_INTEGER: hd, XSD_STRING: fd } = vl;
  var { isAbsolute: pd } = El;
  var md = {};
  var yd = md;
  function gd(e7, t, r, n4, i4) {
    const o4 = Object.keys(t).sort();
    for (const a4 of o4) {
      const o5 = t[a4], s3 = Object.keys(o5).sort();
      for (let t2 of s3) {
        const s4 = o5[t2];
        if ("@type" === t2)
          t2 = sd;
        else if (Zc(t2))
          continue;
        for (const o6 of s4) {
          const s5 = { termType: a4.startsWith("_:") ? "BlankNode" : "NamedNode", value: a4 };
          if (!pd(a4)) {
            i4.eventHandler && nd({ event: { type: ["JsonLdEvent"], code: "relative subject reference", level: "warning", message: "Relative subject reference found.", details: { subject: a4 } }, options: i4 });
            continue;
          }
          const l6 = { termType: t2.startsWith("_:") ? "BlankNode" : "NamedNode", value: t2 };
          if (!pd(t2)) {
            i4.eventHandler && nd({ event: { type: ["JsonLdEvent"], code: "relative predicate reference", level: "warning", message: "Relative predicate reference found.", details: { predicate: t2 } }, options: i4 });
            continue;
          }
          if ("BlankNode" === l6.termType && !i4.produceGeneralizedRdf) {
            i4.eventHandler && nd({ event: { type: ["JsonLdEvent"], code: "blank node predicate", level: "warning", message: "Dropping blank node predicate.", details: { property: n4.getOldIds().find((e8) => n4.getId(e8) === t2) } }, options: i4 });
            continue;
          }
          const u4 = vd(o6, n4, e7, r, i4.rdfDirection, i4);
          u4 && e7.push({ subject: s5, predicate: l6, object: u4, graph: r });
        }
      }
    }
  }
  function vd(e7, t, r, n4, i4, o4) {
    const a4 = {};
    if (Kc.isValue(e7)) {
      a4.termType = "Literal", a4.value = void 0, a4.datatype = { termType: "NamedNode" };
      let t2 = e7["@value"];
      const r2 = e7["@type"] || null;
      if ("@json" === r2)
        a4.value = Xc(t2), a4.datatype.value = ld;
      else if (td.isBoolean(t2))
        a4.value = t2.toString(), a4.datatype.value = r2 || cd;
      else if (td.isDouble(t2) || r2 === dd)
        td.isDouble(t2) || (t2 = parseFloat(t2)), a4.value = t2.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), a4.datatype.value = r2 || dd;
      else if (td.isNumber(t2))
        a4.value = t2.toFixed(0), a4.datatype.value = r2 || hd;
      else if ("@direction" in e7 && "i18n-datatype" === i4) {
        const r3 = `https://www.w3.org/ns/i18n#${(e7["@language"] || "").toLowerCase()}_${e7["@direction"]}`;
        a4.datatype.value = r3, a4.value = t2;
      } else {
        if ("@direction" in e7 && "compound-literal" === i4)
          throw new ed("Unsupported rdfDirection value.", "jsonld.InvalidRdfDirection", { value: i4 });
        if ("@direction" in e7 && i4)
          throw new ed("Unknown rdfDirection value.", "jsonld.InvalidRdfDirection", { value: i4 });
        "@language" in e7 ? ("@direction" in e7 && !i4 && o4.eventHandler && nd({ event: { type: ["JsonLdEvent"], code: "rdfDirection not set", level: "warning", message: "rdfDirection not set for @direction.", details: { object: a4.value } }, options: o4 }), a4.value = t2, a4.datatype.value = r2 || ud, a4.language = e7["@language"]) : ("@direction" in e7 && !i4 && o4.eventHandler && nd({ event: { type: ["JsonLdEvent"], code: "rdfDirection not set", level: "warning", message: "rdfDirection not set for @direction.", details: { object: a4.value } }, options: o4 }), a4.value = t2, a4.datatype.value = r2 || fd);
      }
    } else if (Kc.isList(e7)) {
      const s3 = function(e8, t2, r2, n5, i5, o5) {
        const a5 = { termType: "NamedNode", value: id }, s4 = { termType: "NamedNode", value: od }, l6 = { termType: "NamedNode", value: ad }, u4 = e8.pop(), c3 = u4 ? { termType: "BlankNode", value: t2.getId() } : l6;
        let d5 = c3;
        for (const l7 of e8) {
          const e9 = vd(l7, t2, r2, n5, i5, o5), u5 = { termType: "BlankNode", value: t2.getId() };
          r2.push({ subject: d5, predicate: a5, object: e9, graph: n5 }), r2.push({ subject: d5, predicate: s4, object: u5, graph: n5 }), d5 = u5;
        }
        if (u4) {
          const e9 = vd(u4, t2, r2, n5, i5, o5);
          r2.push({ subject: d5, predicate: a5, object: e9, graph: n5 }), r2.push({ subject: d5, predicate: s4, object: l6, graph: n5 });
        }
        return c3;
      }(e7["@list"], t, r, n4, i4, o4);
      a4.termType = s3.termType, a4.value = s3.value;
    } else {
      const t2 = td.isObject(e7) ? e7["@id"] : e7;
      a4.termType = t2.startsWith("_:") ? "BlankNode" : "NamedNode", a4.value = t2;
    }
    return "NamedNode" !== a4.termType || pd(a4.value) ? a4 : (o4.eventHandler && nd({ event: { type: ["JsonLdEvent"], code: "relative object reference", level: "warning", message: "Relative object reference found.", details: { object: a4.value } }, options: o4 }), null);
  }
  md.toRDF = (e7, t) => {
    const r = new rd.IdentifierIssuer("_:b"), n4 = { "@default": {} };
    Qc(e7, n4, "@default", r);
    const i4 = [], o4 = Object.keys(n4).sort();
    for (const e8 of o4) {
      let o5;
      if ("@default" === e8)
        o5 = { termType: "DefaultGraph", value: "" };
      else {
        if (!pd(e8)) {
          t.eventHandler && nd({ event: { type: ["JsonLdEvent"], code: "relative graph reference", level: "warning", message: "Relative graph reference found.", details: { graph: e8 } }, options: t });
          continue;
        }
        o5 = e8.startsWith("_:") ? { termType: "BlankNode" } : { termType: "NamedNode" }, o5.value = e8;
      }
      gd(i4, n4[e8], o5, r, t);
    }
    return i4;
  };
  var { isKeyword: wd } = Uu;
  var bd = el;
  var _d = Zs;
  var Ed = hl;
  var Td = El;
  var xd = tl;
  var { createNodeMap: Id, mergeNodeMapGraphs: Sd } = Sc;
  var Rd = {};
  var kd = Rd;
  function jd(e7) {
    const t = {};
    for (const r in e7)
      void 0 !== e7[r] && (t["@" + r] = [e7[r]]);
    return [t];
  }
  function Dd(e7, t, r) {
    for (let n4 = r.length - 1; n4 >= 0; --n4) {
      const i4 = r[n4];
      if (i4.graph === t && i4.subject["@id"] === e7["@id"])
        return true;
    }
    return false;
  }
  function Nd(e7, t, r) {
    const n4 = "@" + r;
    let i4 = n4 in e7 ? e7[n4][0] : t[r];
    if ("embed" === r) {
      if (true === i4)
        i4 = "@once";
      else if (false === i4)
        i4 = "@never";
      else if ("@always" !== i4 && "@never" !== i4 && "@link" !== i4 && "@first" !== i4 && "@last" !== i4 && "@once" !== i4)
        throw new xd("Invalid JSON-LD syntax; invalid value of @embed.", "jsonld.SyntaxError", { code: "invalid @embed value", frame: e7 });
    }
    return i4;
  }
  function Od(e7) {
    if (!_d.isArray(e7) || 1 !== e7.length || !_d.isObject(e7[0]))
      throw new xd("Invalid JSON-LD syntax; a JSON-LD frame must be a single object.", "jsonld.SyntaxError", { frame: e7 });
    if ("@id" in e7[0]) {
      for (const t of Ed.asArray(e7[0]["@id"]))
        if (!_d.isObject(t) && !Td.isAbsolute(t) || _d.isString(t) && 0 === t.indexOf("_:"))
          throw new xd("Invalid JSON-LD syntax; invalid @id in frame.", "jsonld.SyntaxError", { code: "invalid frame", frame: e7 });
    }
    if ("@type" in e7[0]) {
      for (const t of Ed.asArray(e7[0]["@type"]))
        if (!_d.isObject(t) && !Td.isAbsolute(t) && "@json" !== t || _d.isString(t) && 0 === t.indexOf("_:"))
          throw new xd("Invalid JSON-LD syntax; invalid @type in frame.", "jsonld.SyntaxError", { code: "invalid frame", frame: e7 });
    }
  }
  function Cd(e7, t, r, n4) {
    let i4 = true, o4 = false;
    for (const a4 in r) {
      let s3 = false;
      const l6 = Ed.getValues(t, a4), u4 = 0 === Ed.getValues(r, a4).length;
      if ("@id" === a4) {
        if (_d.isEmptyObject(r["@id"][0] || {}) ? s3 = true : r["@id"].length >= 0 && (s3 = r["@id"].includes(l6[0])), !n4.requireAll)
          return s3;
      } else if ("@type" === a4) {
        if (i4 = false, u4) {
          if (l6.length > 0)
            return false;
          s3 = true;
        } else if (1 === r["@type"].length && _d.isEmptyObject(r["@type"][0]))
          s3 = l6.length > 0;
        else
          for (const e8 of r["@type"])
            s3 = !(!_d.isObject(e8) || !("@default" in e8)) || (s3 || l6.some((t2) => t2 === e8));
        if (!n4.requireAll)
          return s3;
      } else {
        if (wd(a4))
          continue;
        {
          const t2 = Ed.getValues(r, a4)[0];
          let o5 = false;
          if (t2 && (Od([t2]), o5 = "@default" in t2), i4 = false, 0 === l6.length && o5)
            continue;
          if (l6.length > 0 && u4)
            return false;
          if (void 0 === t2) {
            if (l6.length > 0)
              return false;
            s3 = true;
          } else if (bd.isList(t2)) {
            const r2 = t2["@list"][0];
            if (bd.isList(l6[0])) {
              const t3 = l6[0]["@list"];
              bd.isValue(r2) ? s3 = t3.some((e8) => Bd(r2, e8)) : (bd.isSubject(r2) || bd.isSubjectReference(r2)) && (s3 = t3.some((t4) => Pd(e7, r2, t4, n4)));
            }
          } else
            s3 = bd.isValue(t2) ? l6.some((e8) => Bd(t2, e8)) : bd.isSubjectReference(t2) ? l6.some((r2) => Pd(e7, t2, r2, n4)) : !!_d.isObject(t2) && l6.length > 0;
        }
      }
      if (!s3 && n4.requireAll)
        return false;
      o4 = o4 || s3;
    }
    return i4 || o4;
  }
  function Ad(e7, t) {
    const r = e7.uniqueEmbeds[e7.graph], n4 = r[t], i4 = n4.parent, o4 = n4.property, a4 = { "@id": t };
    if (_d.isArray(i4)) {
      for (let e8 = 0; e8 < i4.length; ++e8)
        if (Ed.compareValues(i4[e8], a4)) {
          i4[e8] = a4;
          break;
        }
    } else {
      const e8 = _d.isArray(i4[o4]);
      Ed.removeValue(i4, o4, a4, { propertyIsArray: e8 }), Ed.addValue(i4, o4, a4, { propertyIsArray: e8 });
    }
    const s3 = (e8) => {
      const t2 = Object.keys(r);
      for (const n5 of t2)
        n5 in r && _d.isObject(r[n5].parent) && r[n5].parent["@id"] === e8 && (delete r[n5], s3(n5));
    };
    s3(t);
  }
  function Md(e7, t) {
    if (_d.isArray(e7))
      return e7.map((e8) => Md(e8, t));
    if (_d.isObject(e7)) {
      if ("@preserve" in e7)
        return e7["@preserve"][0];
      if (bd.isValue(e7))
        return e7;
      if (bd.isList(e7))
        return e7["@list"] = Md(e7["@list"], t), e7;
      if ("@id" in e7) {
        const r = e7["@id"];
        if (t.link.hasOwnProperty(r)) {
          const n4 = t.link[r].indexOf(e7);
          if (-1 !== n4)
            return t.link[r][n4];
          t.link[r].push(e7);
        } else
          t.link[r] = [e7];
      }
      for (const r in e7)
        "@id" === r && t.bnodesToClear.includes(e7[r]) ? delete e7["@id"] : e7[r] = Md(e7[r], t);
    }
    return e7;
  }
  function Ld(e7, t, r) {
    _d.isObject(e7) ? Ed.addValue(e7, t, r, { propertyIsArray: true }) : e7.push(r);
  }
  function Pd(e7, t, r, n4) {
    if (!("@id" in r))
      return false;
    const i4 = e7.subjects[r["@id"]];
    return i4 && Cd(e7, i4, t, n4);
  }
  function Bd(e7, t) {
    const r = t["@value"], n4 = t["@type"], i4 = t["@language"], o4 = e7["@value"] ? _d.isArray(e7["@value"]) ? e7["@value"] : [e7["@value"]] : [], a4 = e7["@type"] ? _d.isArray(e7["@type"]) ? e7["@type"] : [e7["@type"]] : [], s3 = e7["@language"] ? _d.isArray(e7["@language"]) ? e7["@language"] : [e7["@language"]] : [];
    return 0 === o4.length && 0 === a4.length && 0 === s3.length || !(!o4.includes(r) && !_d.isEmptyObject(o4[0])) && (!!(!n4 && 0 === a4.length || a4.includes(n4) || n4 && _d.isEmptyObject(a4[0])) && !!(!i4 && 0 === s3.length || s3.includes(i4) || i4 && _d.isEmptyObject(s3[0])));
  }
  Rd.frameMergedOrDefault = (e7, t, r) => {
    const n4 = { options: r, embedded: false, graph: "@default", graphMap: { "@default": {} }, subjectStack: [], link: {}, bnodeMap: {} }, i4 = new Ed.IdentifierIssuer("_:b");
    Id(e7, n4.graphMap, "@default", i4), r.merged && (n4.graphMap["@merged"] = Sd(n4.graphMap), n4.graph = "@merged"), n4.subjects = n4.graphMap[n4.graph];
    const o4 = [];
    return Rd.frame(n4, Object.keys(n4.subjects).sort(), t, o4), r.pruneBlankNodeIdentifiers && (r.bnodesToClear = Object.keys(n4.bnodeMap).filter((e8) => 1 === n4.bnodeMap[e8].length)), r.link = {}, Md(o4, r);
  }, Rd.frame = (e7, t, r, n4, i4 = null) => {
    Od(r), r = r[0];
    const o4 = e7.options, a4 = { embed: Nd(r, o4, "embed"), explicit: Nd(r, o4, "explicit"), requireAll: Nd(r, o4, "requireAll") };
    e7.link.hasOwnProperty(e7.graph) || (e7.link[e7.graph] = {});
    const s3 = e7.link[e7.graph], l6 = function(e8, t2, r2, n5) {
      const i5 = {};
      for (const o5 of t2) {
        const t3 = e8.graphMap[e8.graph][o5];
        Cd(e8, t3, r2, n5) && (i5[o5] = t3);
      }
      return i5;
    }(e7, t, r, a4), u4 = Object.keys(l6).sort();
    for (const c3 of u4) {
      const u5 = l6[c3];
      if (null === i4 ? e7.uniqueEmbeds = { [e7.graph]: {} } : e7.uniqueEmbeds[e7.graph] = e7.uniqueEmbeds[e7.graph] || {}, "@link" === a4.embed && c3 in s3) {
        Ld(n4, i4, s3[c3]);
        continue;
      }
      const d5 = { "@id": c3 };
      if (0 === c3.indexOf("_:") && Ed.addValue(e7.bnodeMap, c3, d5, { propertyIsArray: true }), s3[c3] = d5, ("@first" === a4.embed || "@last" === a4.embed) && e7.is11)
        throw new xd("Invalid JSON-LD syntax; invalid value of @embed.", "jsonld.SyntaxError", { code: "invalid @embed value", frame: r });
      if (e7.embedded || !e7.uniqueEmbeds[e7.graph].hasOwnProperty(c3))
        if (!e7.embedded || "@never" !== a4.embed && !Dd(u5, e7.graph, e7.subjectStack))
          if (!e7.embedded || "@first" != a4.embed && "@once" != a4.embed || !e7.uniqueEmbeds[e7.graph].hasOwnProperty(c3)) {
            if ("@last" === a4.embed && c3 in e7.uniqueEmbeds[e7.graph] && Ad(e7, c3), e7.uniqueEmbeds[e7.graph][c3] = { parent: n4, property: i4 }, e7.subjectStack.push({ subject: u5, graph: e7.graph }), c3 in e7.graphMap) {
              let t2 = false, n5 = null;
              "@graph" in r ? (n5 = r["@graph"][0], t2 = !("@merged" === c3 || "@default" === c3), _d.isObject(n5) || (n5 = {})) : (t2 = "@merged" !== e7.graph, n5 = {}), t2 && Rd.frame({ ...e7, graph: c3, embedded: false }, Object.keys(e7.graphMap[c3]).sort(), [n5], d5, "@graph");
            }
            "@included" in r && Rd.frame({ ...e7, embedded: false }, t, r["@included"], d5, "@included");
            for (const t2 of Object.keys(u5).sort())
              if (wd(t2)) {
                if (d5[t2] = Ed.clone(u5[t2]), "@type" === t2)
                  for (const t3 of u5["@type"])
                    0 === t3.indexOf("_:") && Ed.addValue(e7.bnodeMap, t3, d5, { propertyIsArray: true });
              } else if (!a4.explicit || t2 in r)
                for (const n5 of u5[t2]) {
                  const i5 = t2 in r ? r[t2] : jd(a4);
                  if (bd.isList(n5)) {
                    const i6 = r[t2] && r[t2][0] && r[t2][0]["@list"] ? r[t2][0]["@list"] : jd(a4), o5 = { "@list": [] };
                    Ld(d5, t2, o5);
                    const s4 = n5["@list"];
                    for (const t3 of s4)
                      bd.isSubjectReference(t3) ? Rd.frame({ ...e7, embedded: true }, [t3["@id"]], i6, o5, "@list") : Ld(o5, "@list", Ed.clone(t3));
                  } else
                    bd.isSubjectReference(n5) ? Rd.frame({ ...e7, embedded: true }, [n5["@id"]], i5, d5, t2) : Bd(i5[0], n5) && Ld(d5, t2, Ed.clone(n5));
                }
            for (const e8 of Object.keys(r).sort()) {
              if ("@type" === e8) {
                if (!_d.isObject(r[e8][0]) || !("@default" in r[e8][0]))
                  continue;
              } else if (wd(e8))
                continue;
              const t2 = r[e8][0] || {};
              if (!Nd(t2, o4, "omitDefault") && !(e8 in d5)) {
                let r2 = "@null";
                "@default" in t2 && (r2 = Ed.clone(t2["@default"])), _d.isArray(r2) || (r2 = [r2]), d5[e8] = [{ "@preserve": r2 }];
              }
            }
            for (const t2 of Object.keys(r["@reverse"] || {}).sort()) {
              const n5 = r["@reverse"][t2];
              for (const r2 of Object.keys(e7.subjects)) {
                Ed.getValues(e7.subjects[r2], t2).some((e8) => e8["@id"] === c3) && (d5["@reverse"] = d5["@reverse"] || {}, Ed.addValue(d5["@reverse"], t2, [], { propertyIsArray: true }), Rd.frame({ ...e7, embedded: true }, [r2], n5, d5["@reverse"][t2], i4));
              }
            }
            Ld(n4, i4, d5), e7.subjectStack.pop();
          } else
            Ld(n4, i4, d5);
        else
          Ld(n4, i4, d5);
    }
  }, Rd.cleanupNull = (e7, t) => {
    if (_d.isArray(e7)) {
      const r = e7.map((e8) => Rd.cleanupNull(e8, t));
      return r.filter((e8) => e8);
    }
    if ("@null" === e7)
      return null;
    if (_d.isObject(e7)) {
      if ("@id" in e7) {
        const r = e7["@id"];
        if (t.link.hasOwnProperty(r)) {
          const n4 = t.link[r].indexOf(e7);
          if (-1 !== n4)
            return t.link[r][n4];
          t.link[r].push(e7);
        } else
          t.link[r] = [e7];
      }
      for (const r in e7)
        e7[r] = Rd.cleanupNull(e7[r], t);
    }
    return e7;
  };
  var $d = tl;
  var { isArray: Fd, isObject: Ud, isString: qd, isUndefined: Yd } = Zs;
  var { isList: Wd, isValue: zd, isGraph: Gd, isSimpleGraph: Hd, isSubjectReference: Jd } = el;
  var { expandIri: Vd, getContextValue: Qd, isKeyword: Zd, process: Kd, processingMode: Xd } = Uu;
  var { removeBase: eh, prependBase: th } = El;
  var { REGEX_KEYWORD: rh, addValue: nh, asArray: ih, compareShortestLeast: oh } = hl;
  var ah = {};
  var sh;
  var lh;
  var uh = ah;
  function ch(e7, t, r) {
    if ("@nest" !== Vd(e7, t, { vocab: true }, r))
      throw new $d("JSON-LD compact error; nested property must have an @nest value resolving to @nest.", "jsonld.SyntaxError", { code: "invalid @nest value" });
  }
  ah.compact = async ({ activeCtx: e7, activeProperty: t = null, element: r, options: n4 = {} }) => {
    if (Fd(r)) {
      let i5 = [];
      for (let o4 = 0; o4 < r.length; ++o4) {
        const a4 = await ah.compact({ activeCtx: e7, activeProperty: t, element: r[o4], options: n4 });
        null !== a4 && i5.push(a4);
      }
      if (n4.compactArrays && 1 === i5.length) {
        0 === (Qd(e7, t, "@container") || []).length && (i5 = i5[0]);
      }
      return i5;
    }
    const i4 = Qd(e7, t, "@context");
    if (Yd(i4) || (e7 = await Kd({ activeCtx: e7, localCtx: i4, propagate: true, overrideProtected: true, options: n4 })), Ud(r)) {
      if (n4.link && "@id" in r && n4.link.hasOwnProperty(r["@id"])) {
        const e8 = n4.link[r["@id"]];
        for (let t2 = 0; t2 < e8.length; ++t2)
          if (e8[t2].expanded === r)
            return e8[t2].compacted;
      }
      if (zd(r) || Jd(r)) {
        const i6 = ah.compactValue({ activeCtx: e7, activeProperty: t, value: r, options: n4 });
        return n4.link && Jd(r) && (n4.link.hasOwnProperty(r["@id"]) || (n4.link[r["@id"]] = []), n4.link[r["@id"]].push({ expanded: r, compacted: i6 })), i6;
      }
      if (Wd(r)) {
        if ((Qd(e7, t, "@container") || []).includes("@list"))
          return ah.compact({ activeCtx: e7, activeProperty: t, element: r["@list"], options: n4 });
      }
      const i5 = "@reverse" === t, o4 = {}, a4 = e7;
      zd(r) || Jd(r) || (e7 = e7.revertToPreviousContext());
      const s3 = Qd(a4, t, "@context");
      Yd(s3) || (e7 = await Kd({ activeCtx: e7, localCtx: s3, propagate: true, overrideProtected: true, options: n4 })), n4.link && "@id" in r && (n4.link.hasOwnProperty(r["@id"]) || (n4.link[r["@id"]] = []), n4.link[r["@id"]].push({ expanded: r, compacted: o4 }));
      let l6 = r["@type"] || [];
      l6.length > 1 && (l6 = Array.from(l6).sort());
      const u4 = e7;
      for (const t2 of l6) {
        const r2 = ah.compactIri({ activeCtx: u4, iri: t2, relativeTo: { vocab: true } }), i6 = Qd(a4, r2, "@context");
        Yd(i6) || (e7 = await Kd({ activeCtx: e7, localCtx: i6, options: n4, propagate: false }));
      }
      const c3 = Object.keys(r).sort();
      for (const s4 of c3) {
        const l7 = r[s4];
        if ("@id" !== s4)
          if ("@type" !== s4)
            if ("@reverse" !== s4)
              if ("@preserve" !== s4)
                if ("@index" !== s4)
                  if ("@graph" !== s4 && "@list" !== s4 && "@included" !== s4 && Zd(s4)) {
                    const t2 = ah.compactIri({ activeCtx: e7, iri: s4, relativeTo: { vocab: true } });
                    nh(o4, t2, l7);
                  } else {
                    if (!Fd(l7))
                      throw new $d("JSON-LD expansion error; expanded value must be an array.", "jsonld.SyntaxError");
                    if (0 === l7.length) {
                      const t2 = ah.compactIri({ activeCtx: e7, iri: s4, value: l7, relativeTo: { vocab: true }, reverse: i5 }), r2 = e7.mappings.has(t2) ? e7.mappings.get(t2)["@nest"] : null;
                      let a5 = o4;
                      r2 && (ch(e7, r2, n4), Ud(o4[r2]) || (o4[r2] = {}), a5 = o4[r2]), nh(a5, t2, l7, { propertyIsArray: true });
                    }
                    for (const t2 of l7) {
                      const r2 = ah.compactIri({ activeCtx: e7, iri: s4, value: t2, relativeTo: { vocab: true }, reverse: i5 }), a5 = e7.mappings.has(r2) ? e7.mappings.get(r2)["@nest"] : null;
                      let l8 = o4;
                      a5 && (ch(e7, a5, n4), Ud(o4[a5]) || (o4[a5] = {}), l8 = o4[a5]);
                      const u5 = Qd(e7, r2, "@container") || [], c4 = Gd(t2), d5 = Wd(t2);
                      let h6;
                      d5 ? h6 = t2["@list"] : c4 && (h6 = t2["@graph"]);
                      let f5 = await ah.compact({ activeCtx: e7, activeProperty: r2, element: d5 || c4 ? h6 : t2, options: n4 });
                      if (d5) {
                        if (Fd(f5) || (f5 = [f5]), u5.includes("@list")) {
                          nh(l8, r2, f5, { valueIsArray: true, allowDuplicate: true });
                          continue;
                        }
                        f5 = { [ah.compactIri({ activeCtx: e7, iri: "@list", relativeTo: { vocab: true } })]: f5 }, "@index" in t2 && (f5[ah.compactIri({ activeCtx: e7, iri: "@index", relativeTo: { vocab: true } })] = t2["@index"]);
                      }
                      if (c4)
                        if (u5.includes("@graph") && (u5.includes("@id") || u5.includes("@index") && Hd(t2))) {
                          let i6;
                          l8.hasOwnProperty(r2) ? i6 = l8[r2] : l8[r2] = i6 = {};
                          const o5 = (u5.includes("@id") ? t2["@id"] : t2["@index"]) || ah.compactIri({ activeCtx: e7, iri: "@none", relativeTo: { vocab: true } });
                          nh(i6, o5, f5, { propertyIsArray: !n4.compactArrays || u5.includes("@set") });
                        } else
                          u5.includes("@graph") && Hd(t2) ? (Fd(f5) && f5.length > 1 && (f5 = { "@included": f5 }), nh(l8, r2, f5, { propertyIsArray: !n4.compactArrays || u5.includes("@set") })) : (Fd(f5) && 1 === f5.length && n4.compactArrays && (f5 = f5[0]), f5 = { [ah.compactIri({ activeCtx: e7, iri: "@graph", relativeTo: { vocab: true } })]: f5 }, "@id" in t2 && (f5[ah.compactIri({ activeCtx: e7, iri: "@id", relativeTo: { vocab: true } })] = t2["@id"]), "@index" in t2 && (f5[ah.compactIri({ activeCtx: e7, iri: "@index", relativeTo: { vocab: true } })] = t2["@index"]), nh(l8, r2, f5, { propertyIsArray: !n4.compactArrays || u5.includes("@set") }));
                      else if (u5.includes("@language") || u5.includes("@index") || u5.includes("@id") || u5.includes("@type")) {
                        let i6, o5;
                        if (l8.hasOwnProperty(r2) ? i6 = l8[r2] : l8[r2] = i6 = {}, u5.includes("@language"))
                          zd(f5) && (f5 = f5["@value"]), o5 = t2["@language"];
                        else if (u5.includes("@index")) {
                          const n5 = Qd(e7, r2, "@index") || "@index", i7 = ah.compactIri({ activeCtx: e7, iri: n5, relativeTo: { vocab: true } });
                          if ("@index" === n5)
                            o5 = t2["@index"], delete f5[i7];
                          else {
                            let e8;
                            if ([o5, ...e8] = ih(f5[n5] || []), qd(o5))
                              switch (e8.length) {
                                case 0:
                                  delete f5[n5];
                                  break;
                                case 1:
                                  f5[n5] = e8[0];
                                  break;
                                default:
                                  f5[n5] = e8;
                              }
                            else
                              o5 = null;
                          }
                        } else if (u5.includes("@id")) {
                          const t3 = ah.compactIri({ activeCtx: e7, iri: "@id", relativeTo: { vocab: true } });
                          o5 = f5[t3], delete f5[t3];
                        } else if (u5.includes("@type")) {
                          const i7 = ah.compactIri({ activeCtx: e7, iri: "@type", relativeTo: { vocab: true } });
                          let a6;
                          switch ([o5, ...a6] = ih(f5[i7] || []), a6.length) {
                            case 0:
                              delete f5[i7];
                              break;
                            case 1:
                              f5[i7] = a6[0];
                              break;
                            default:
                              f5[i7] = a6;
                          }
                          1 === Object.keys(f5).length && "@id" in t2 && (f5 = await ah.compact({ activeCtx: e7, activeProperty: r2, element: { "@id": t2["@id"] }, options: n4 }));
                        }
                        o5 || (o5 = ah.compactIri({ activeCtx: e7, iri: "@none", relativeTo: { vocab: true } })), nh(i6, o5, f5, { propertyIsArray: u5.includes("@set") });
                      } else {
                        const e8 = !n4.compactArrays || u5.includes("@set") || u5.includes("@list") || Fd(f5) && 0 === f5.length || "@list" === s4 || "@graph" === s4;
                        nh(l8, r2, f5, { propertyIsArray: e8 });
                      }
                    }
                  }
                else {
                  if ((Qd(e7, t, "@container") || []).includes("@index"))
                    continue;
                  const r2 = ah.compactIri({ activeCtx: e7, iri: s4, relativeTo: { vocab: true } });
                  nh(o4, r2, l7);
                }
              else {
                const r2 = await ah.compact({ activeCtx: e7, activeProperty: t, element: l7, options: n4 });
                Fd(r2) && 0 === r2.length || nh(o4, s4, r2);
              }
            else {
              const t2 = await ah.compact({ activeCtx: e7, activeProperty: "@reverse", element: l7, options: n4 });
              for (const r2 in t2)
                if (e7.mappings.has(r2) && e7.mappings.get(r2).reverse) {
                  const i6 = t2[r2], a5 = (Qd(e7, r2, "@container") || []).includes("@set") || !n4.compactArrays;
                  nh(o4, r2, i6, { propertyIsArray: a5 }), delete t2[r2];
                }
              if (Object.keys(t2).length > 0) {
                const r2 = ah.compactIri({ activeCtx: e7, iri: s4, relativeTo: { vocab: true } });
                nh(o4, r2, t2);
              }
            }
          else {
            let t2 = ih(l7).map((e8) => ah.compactIri({ activeCtx: a4, iri: e8, relativeTo: { vocab: true } }));
            1 === t2.length && (t2 = t2[0]);
            const r2 = ah.compactIri({ activeCtx: e7, iri: "@type", relativeTo: { vocab: true } }), n5 = (Qd(e7, r2, "@container") || []).includes("@set") && Xd(e7, 1.1) || Fd(t2) && 0 === l7.length;
            nh(o4, r2, t2, { propertyIsArray: n5 });
          }
        else {
          let t2 = ih(l7).map((t3) => ah.compactIri({ activeCtx: e7, iri: t3, relativeTo: { vocab: false }, base: n4.base }));
          1 === t2.length && (t2 = t2[0]);
          o4[ah.compactIri({ activeCtx: e7, iri: "@id", relativeTo: { vocab: true } })] = t2;
        }
      }
      return o4;
    }
    return r;
  }, ah.compactIri = ({ activeCtx: e7, iri: t, value: r = null, relativeTo: n4 = { vocab: false }, reverse: i4 = false, base: o4 = null }) => {
    if (null === t)
      return t;
    e7.isPropertyTermScoped && e7.previousContext && (e7 = e7.previousContext);
    const a4 = e7.getInverse();
    if (Zd(t) && t in a4 && "@none" in a4[t] && "@type" in a4[t]["@none"] && "@none" in a4[t]["@none"]["@type"])
      return a4[t]["@none"]["@type"]["@none"];
    if (n4.vocab && t in a4) {
      const n5 = e7["@language"] || "@none", o5 = [];
      Ud(r) && "@index" in r && !("@graph" in r) && o5.push("@index", "@index@set"), Ud(r) && "@preserve" in r && (r = r["@preserve"][0]), Gd(r) ? ("@index" in r && o5.push("@graph@index", "@graph@index@set", "@index", "@index@set"), "@id" in r && o5.push("@graph@id", "@graph@id@set"), o5.push("@graph", "@graph@set", "@set"), "@index" in r || o5.push("@graph@index", "@graph@index@set", "@index", "@index@set"), "@id" in r || o5.push("@graph@id", "@graph@id@set")) : Ud(r) && !zd(r) && o5.push("@id", "@id@set", "@type", "@set@type");
      let a5 = "@language", s4 = "@null";
      if (i4)
        a5 = "@type", s4 = "@reverse", o5.push("@set");
      else if (Wd(r)) {
        "@index" in r || o5.push("@list");
        const e8 = r["@list"];
        if (0 === e8.length)
          a5 = "@any", s4 = "@none";
        else {
          let t2 = 0 === e8.length ? n5 : null, r2 = null;
          for (let n6 = 0; n6 < e8.length; ++n6) {
            const i5 = e8[n6];
            let o6 = "@none", a6 = "@none";
            if (zd(i5))
              if ("@direction" in i5) {
                o6 = `${(i5["@language"] || "").toLowerCase()}_${i5["@direction"]}`;
              } else
                "@language" in i5 ? o6 = i5["@language"].toLowerCase() : "@type" in i5 ? a6 = i5["@type"] : o6 = "@null";
            else
              a6 = "@id";
            if (null === t2 ? t2 = o6 : o6 !== t2 && zd(i5) && (t2 = "@none"), null === r2 ? r2 = a6 : a6 !== r2 && (r2 = "@none"), "@none" === t2 && "@none" === r2)
              break;
          }
          t2 = t2 || "@none", r2 = r2 || "@none", "@none" !== r2 ? (a5 = "@type", s4 = r2) : s4 = t2;
        }
      } else {
        if (zd(r))
          if ("@language" in r && !("@index" in r)) {
            o5.push("@language", "@language@set"), s4 = r["@language"];
            const e8 = r["@direction"];
            e8 && (s4 = `${s4}_${e8}`);
          } else
            "@direction" in r && !("@index" in r) ? s4 = `_${r["@direction"]}` : "@type" in r && (a5 = "@type", s4 = r["@type"]);
        else
          a5 = "@type", s4 = "@id";
        o5.push("@set");
      }
      o5.push("@none"), Ud(r) && !("@index" in r) && o5.push("@index", "@index@set"), zd(r) && 1 === Object.keys(r).length && o5.push("@language", "@language@set");
      const l7 = function(e8, t2, r2, n6, i5, o6) {
        null === o6 && (o6 = "@null");
        const a6 = [];
        if (("@id" === o6 || "@reverse" === o6) && Ud(r2) && "@id" in r2) {
          "@reverse" === o6 && a6.push("@reverse");
          const t3 = ah.compactIri({ activeCtx: e8, iri: r2["@id"], relativeTo: { vocab: true } });
          e8.mappings.has(t3) && e8.mappings.get(t3) && e8.mappings.get(t3)["@id"] === r2["@id"] ? a6.push.apply(a6, ["@vocab", "@id"]) : a6.push.apply(a6, ["@id", "@vocab"]);
        } else {
          a6.push(o6);
          const e9 = a6.find((e10) => e10.includes("_"));
          e9 && a6.push(e9.replace(/^[^_]+_/, "_"));
        }
        a6.push("@none");
        const s5 = e8.inverse[t2];
        for (const e9 of n6) {
          if (!(e9 in s5))
            continue;
          const t3 = s5[e9][i5];
          for (const e10 of a6)
            if (e10 in t3)
              return t3[e10];
        }
        return null;
      }(e7, t, r, o5, a5, s4);
      if (null !== l7)
        return l7;
    }
    if (n4.vocab && "@vocab" in e7) {
      const r2 = e7["@vocab"];
      if (0 === t.indexOf(r2) && t !== r2) {
        const n5 = t.substr(r2.length);
        if (!e7.mappings.has(n5))
          return n5;
      }
    }
    let s3 = null;
    const l6 = [];
    let u4 = e7.fastCurieMap;
    const c3 = t.length - 1;
    for (let e8 = 0; e8 < c3 && t[e8] in u4; ++e8)
      u4 = u4[t[e8]], "" in u4 && l6.push(u4[""][0]);
    for (let n5 = l6.length - 1; n5 >= 0; --n5) {
      const i5 = l6[n5], o5 = i5.terms;
      for (const n6 of o5) {
        const o6 = n6 + ":" + t.substr(i5.iri.length);
        e7.mappings.get(n6)._prefix && (!e7.mappings.has(o6) || null === r && e7.mappings.get(o6)["@id"] === t) && (null === s3 || oh(o6, s3) < 0) && (s3 = o6);
      }
    }
    if (null !== s3)
      return s3;
    for (const [r2, n5] of e7.mappings)
      if (n5 && n5._prefix && t.startsWith(r2 + ":"))
        throw new $d(`Absolute IRI "${t}" confused with prefix "${r2}".`, "jsonld.SyntaxError", { code: "IRI confused with prefix", context: e7 });
    if (!n4.vocab) {
      if ("@base" in e7) {
        if (e7["@base"]) {
          const r2 = eh(th(o4, e7["@base"]), t);
          return rh.test(r2) ? `./${r2}` : r2;
        }
        return t;
      }
      return eh(o4, t);
    }
    return t;
  }, ah.compactValue = ({ activeCtx: e7, activeProperty: t, value: r, options: n4 }) => {
    if (zd(r)) {
      const n5 = Qd(e7, t, "@type"), i5 = Qd(e7, t, "@language"), o5 = Qd(e7, t, "@direction"), a5 = Qd(e7, t, "@container") || [], s3 = "@index" in r && !a5.includes("@index");
      if (!s3 && "@none" !== n5) {
        if (r["@type"] === n5)
          return r["@value"];
        if ("@language" in r && r["@language"] === i5 && "@direction" in r && r["@direction"] === o5)
          return r["@value"];
        if ("@language" in r && r["@language"] === i5)
          return r["@value"];
        if ("@direction" in r && r["@direction"] === o5)
          return r["@value"];
      }
      const l6 = Object.keys(r).length, u4 = 1 === l6 || 2 === l6 && "@index" in r && !s3, c3 = "@language" in e7, d5 = qd(r["@value"]), h6 = e7.mappings.has(t) && null === e7.mappings.get(t)["@language"];
      if (u4 && "@none" !== n5 && (!c3 || !d5 || h6))
        return r["@value"];
      const f5 = {};
      return s3 && (f5[ah.compactIri({ activeCtx: e7, iri: "@index", relativeTo: { vocab: true } })] = r["@index"]), "@type" in r ? f5[ah.compactIri({ activeCtx: e7, iri: "@type", relativeTo: { vocab: true } })] = ah.compactIri({ activeCtx: e7, iri: r["@type"], relativeTo: { vocab: true } }) : "@language" in r && (f5[ah.compactIri({ activeCtx: e7, iri: "@language", relativeTo: { vocab: true } })] = r["@language"]), "@direction" in r && (f5[ah.compactIri({ activeCtx: e7, iri: "@direction", relativeTo: { vocab: true } })] = r["@direction"]), f5[ah.compactIri({ activeCtx: e7, iri: "@value", relativeTo: { vocab: true } })] = r["@value"], f5;
    }
    const i4 = Vd(e7, t, { vocab: true }, n4), o4 = Qd(e7, t, "@type"), a4 = ah.compactIri({ activeCtx: e7, iri: r["@id"], relativeTo: { vocab: "@vocab" === o4 }, base: n4.base });
    return "@id" === o4 || "@vocab" === o4 || "@graph" === i4 ? a4 : { [ah.compactIri({ activeCtx: e7, iri: "@id", relativeTo: { vocab: true } })]: a4 };
  };
  var dh = Vs;
  var hh = Ml;
  var fh = hl;
  var ph = class {
    constructor({ sharedCache: e7 }) {
      this.perOpCache = /* @__PURE__ */ new Map(), this.sharedCache = e7;
    }
    async resolve({ activeCtx: e7, context: t, documentLoader: r, base: n4, cycles: i4 = /* @__PURE__ */ new Set() }) {
      t && uu(t) && t["@context"] && (t = t["@context"]), t = du(t);
      const o4 = [];
      for (const a4 of t) {
        if (cu(a4)) {
          let t2 = this._get(a4);
          t2 || (t2 = await this._resolveRemoteContext({ activeCtx: e7, url: a4, documentLoader: r, base: n4, cycles: i4 })), lu(t2) ? o4.push(...t2) : o4.push(t2);
          continue;
        }
        if (null === a4) {
          o4.push(new pu({ document: null }));
          continue;
        }
        uu(a4) || mu(t);
        const s3 = JSON.stringify(a4);
        let l6 = this._get(s3);
        l6 || (l6 = new pu({ document: a4 }), this._cacheResolvedContext({ key: s3, resolved: l6, tag: "static" })), o4.push(l6);
      }
      return o4;
    }
    _get(e7) {
      let t = this.perOpCache.get(e7);
      if (!t) {
        const r = this.sharedCache.get(e7);
        r && (t = r.get("static"), t && this.perOpCache.set(e7, t));
      }
      return t;
    }
    _cacheResolvedContext({ key: e7, resolved: t, tag: r }) {
      if (this.perOpCache.set(e7, t), void 0 !== r) {
        let n4 = this.sharedCache.get(e7);
        n4 || (n4 = /* @__PURE__ */ new Map(), this.sharedCache.set(e7, n4)), n4.set(r, t);
      }
      return t;
    }
    async _resolveRemoteContext({ activeCtx: e7, url: t, documentLoader: r, base: n4, cycles: i4 }) {
      t = hu(n4, t);
      const { context: o4, remoteDoc: a4 } = await this._fetchContext({ activeCtx: e7, url: t, documentLoader: r, cycles: i4 });
      yu({ context: o4, base: n4 = a4.documentUrl || t });
      const s3 = await this.resolve({ activeCtx: e7, context: o4, documentLoader: r, base: n4, cycles: i4 });
      return this._cacheResolvedContext({ key: t, resolved: s3, tag: a4.tag }), s3;
    }
    async _fetchContext({ activeCtx: e7, url: t, documentLoader: r, cycles: n4 }) {
      if (n4.size > 10)
        throw new fu("Maximum number of @context URLs exceeded.", "jsonld.ContextUrlError", { code: "json-ld-1.0" === e7.processingMode ? "loading remote context failed" : "context overflow", max: 10 });
      if (n4.has(t))
        throw new fu("Cyclical @context URLs detected.", "jsonld.ContextUrlError", { code: "json-ld-1.0" === e7.processingMode ? "recursive context inclusion" : "context overflow", url: t });
      let i4, o4;
      n4.add(t);
      try {
        o4 = await r(t), i4 = o4.document || null, cu(i4) && (i4 = JSON.parse(i4));
      } catch (e8) {
        throw new fu("Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context.", "jsonld.InvalidUrl", { code: "loading remote context failed", url: t, cause: e8 });
      }
      if (!uu(i4))
        throw new fu("Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object.", "jsonld.InvalidUrl", { code: "invalid remote context", url: t });
      return i4 = "@context" in i4 ? { "@context": i4["@context"] } : { "@context": {} }, o4.contextUrl && (lu(i4["@context"]) || (i4["@context"] = [i4["@context"]]), i4["@context"].push(o4.contextUrl)), { context: i4, remoteDoc: o4 };
    }
  };
  var mh = fh.IdentifierIssuer;
  var yh = tl;
  var gh = au;
  var vh = gu;
  var { expand: wh } = pc;
  var { flatten: bh } = Dc;
  var { fromRDF: _h } = Jc;
  var { toRDF: Eh } = yd;
  var { frameMergedOrDefault: Th, cleanupNull: xh } = kd;
  var { isArray: Ih, isObject: Sh, isString: Rh } = Zs;
  var { isSubjectReference: kh } = el;
  var { expandIri: jh, getInitialContext: Dh, process: Nh, processingMode: Oh } = Uu;
  var { compact: Ch, compactIri: Ah } = uh;
  var { createNodeMap: Mh, createMergedNodeMap: Lh, mergeNodeMaps: Ph } = Sc;
  var { logEventHandler: Bh, logWarningEventHandler: $h, safeEventHandler: Fh, setDefaultEventHandler: Uh, setupEventHandler: qh, strictEventHandler: Yh, unhandledEventHandler: Wh } = Eu;
  var zh = function(e7) {
    const t = {}, r = new gh({ max: 100 });
    function n4(t2, { documentLoader: r2 = e7.documentLoader, ...n5 }) {
      if (t2 && "compactionMap" in t2)
        throw new yh('"compactionMap" not supported.', "jsonld.OptionsError");
      if (t2 && "expansionMap" in t2)
        throw new yh('"expansionMap" not supported.', "jsonld.OptionsError");
      return Object.assign({}, { documentLoader: r2 }, n5, t2, { eventHandler: qh({ options: t2 }) });
    }
    return e7.compact = async function(t2, i4, o4) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (null === i4)
        throw new yh("The compaction context must not be null.", "jsonld.CompactError", { code: "invalid local context" });
      if (null === t2)
        return null;
      let a4;
      (o4 = n4(o4, { base: Rh(t2) ? t2 : "", compactArrays: true, compactToRelative: true, graph: false, skipExpansion: false, link: false, issuer: new mh("_:b"), contextResolver: new ph({ sharedCache: r }) })).link && (o4.skipExpansion = true), o4.compactToRelative || delete o4.base, a4 = o4.skipExpansion ? t2 : await e7.expand(t2, o4);
      const s3 = await e7.processContext(Dh(o4), i4, o4);
      let l6 = await Ch({ activeCtx: s3, element: a4, options: o4 });
      o4.compactArrays && !o4.graph && Ih(l6) ? 1 === l6.length ? l6 = l6[0] : 0 === l6.length && (l6 = {}) : o4.graph && Sh(l6) && (l6 = [l6]), Sh(i4) && "@context" in i4 && (i4 = i4["@context"]), i4 = fh.clone(i4), Ih(i4) || (i4 = [i4]);
      const u4 = i4;
      i4 = [];
      for (let e8 = 0; e8 < u4.length; ++e8)
        (!Sh(u4[e8]) || Object.keys(u4[e8]).length > 0) && i4.push(u4[e8]);
      const c3 = i4.length > 0;
      if (1 === i4.length && (i4 = i4[0]), Ih(l6)) {
        const e8 = Ah({ activeCtx: s3, iri: "@graph", relativeTo: { vocab: true } }), t3 = l6;
        l6 = {}, c3 && (l6["@context"] = i4), l6[e8] = t3;
      } else if (Sh(l6) && c3) {
        const e8 = l6;
        l6 = { "@context": i4 };
        for (const t3 in e8)
          l6[t3] = e8[t3];
      }
      return l6;
    }, e7.expand = async function(t2, i4) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      const o4 = {}, a4 = [];
      if ("expandContext" in (i4 = n4(i4, { keepFreeFloatingNodes: false, contextResolver: new ph({ sharedCache: r }) }))) {
        const e8 = fh.clone(i4.expandContext);
        Sh(e8) && "@context" in e8 ? o4.expandContext = e8 : o4.expandContext = { "@context": e8 }, a4.push(o4.expandContext);
      }
      let s3;
      if (Rh(t2)) {
        const r2 = await e7.get(t2, i4);
        s3 = r2.documentUrl, o4.input = r2.document, r2.contextUrl && (o4.remoteContext = { "@context": r2.contextUrl }, a4.push(o4.remoteContext));
      } else
        o4.input = fh.clone(t2);
      "base" in i4 || (i4.base = s3 || "");
      let l6 = Dh(i4);
      for (const e8 of a4)
        l6 = await Nh({ activeCtx: l6, localCtx: e8, options: i4 });
      let u4 = await wh({ activeCtx: l6, element: o4.input, options: i4 });
      return Sh(u4) && "@graph" in u4 && 1 === Object.keys(u4).length ? u4 = u4["@graph"] : null === u4 && (u4 = []), Ih(u4) || (u4 = [u4]), u4;
    }, e7.flatten = async function(t2, i4, o4) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      i4 = "function" == typeof i4 ? null : i4 || null, o4 = n4(o4, { base: Rh(t2) ? t2 : "", contextResolver: new ph({ sharedCache: r }) });
      const a4 = await e7.expand(t2, o4), s3 = bh(a4);
      if (null === i4)
        return s3;
      o4.graph = true, o4.skipExpansion = true;
      return await e7.compact(s3, i4, o4);
    }, e7.frame = async function(t2, i4, o4) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (o4 = n4(o4, { base: Rh(t2) ? t2 : "", embed: "@once", explicit: false, requireAll: false, omitDefault: false, bnodesToClear: [], contextResolver: new ph({ sharedCache: r }) }), Rh(i4)) {
        const t3 = await e7.get(i4, o4);
        if (i4 = t3.document, t3.contextUrl) {
          let e8 = i4["@context"];
          e8 ? Ih(e8) ? e8.push(t3.contextUrl) : e8 = [e8, t3.contextUrl] : e8 = t3.contextUrl, i4["@context"] = e8;
        }
      }
      const a4 = i4 && i4["@context"] || {}, s3 = await e7.processContext(Dh(o4), a4, o4);
      o4.hasOwnProperty("omitGraph") || (o4.omitGraph = Oh(s3, 1.1)), o4.hasOwnProperty("pruneBlankNodeIdentifiers") || (o4.pruneBlankNodeIdentifiers = Oh(s3, 1.1));
      const l6 = await e7.expand(t2, o4), u4 = { ...o4 };
      u4.isFrame = true, u4.keepFreeFloatingNodes = true;
      const c3 = await e7.expand(i4, u4), d5 = Object.keys(i4).map((e8) => jh(s3, e8, { vocab: true }));
      u4.merged = !d5.includes("@graph"), u4.is11 = Oh(s3, 1.1);
      const h6 = Th(l6, c3, u4);
      u4.graph = !o4.omitGraph, u4.skipExpansion = true, u4.link = {}, u4.framing = true;
      let f5 = await e7.compact(h6, a4, u4);
      return u4.link = {}, f5 = xh(f5, u4), f5;
    }, e7.link = async function(t2, r2, n5) {
      const i4 = {};
      return r2 && (i4["@context"] = r2), i4["@embed"] = "@link", e7.frame(t2, i4, n5);
    }, e7.normalize = e7.canonize = async function(t2, i4) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if ("inputFormat" in (i4 = n4(i4, { base: Rh(t2) ? t2 : null, algorithm: "URDNA2015", skipExpansion: false, safe: true, contextResolver: new ph({ sharedCache: r }) }))) {
        if ("application/n-quads" !== i4.inputFormat && "application/nquads" !== i4.inputFormat)
          throw new yh("Unknown canonicalization input format.", "jsonld.CanonizeError");
        const e8 = vh.parse(t2);
        return dh.canonize(e8, i4);
      }
      const o4 = { ...i4 };
      delete o4.format, o4.produceGeneralizedRdf = false;
      const a4 = await e7.toRDF(t2, o4);
      return dh.canonize(a4, i4);
    }, e7.fromRDF = async function(e8, r2) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      r2 = n4(r2, { format: Rh(e8) ? "application/n-quads" : void 0 });
      const { format: i4 } = r2;
      let { rdfParser: o4 } = r2;
      if (i4) {
        if (o4 = o4 || t[i4], !o4)
          throw new yh("Unknown input format.", "jsonld.UnknownFormat", { format: i4 });
      } else
        o4 = () => e8;
      const a4 = await o4(e8);
      return _h(a4, r2);
    }, e7.toRDF = async function(t2, i4) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      let o4;
      o4 = (i4 = n4(i4, { base: Rh(t2) ? t2 : "", skipExpansion: false, contextResolver: new ph({ sharedCache: r }) })).skipExpansion ? t2 : await e7.expand(t2, i4);
      const a4 = Eh(o4, i4);
      if (i4.format) {
        if ("application/n-quads" === i4.format || "application/nquads" === i4.format)
          return vh.serialize(a4);
        throw new yh("Unknown output format.", "jsonld.UnknownFormat", { format: i4.format });
      }
      return a4;
    }, e7.createNodeMap = async function(t2, i4) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      i4 = n4(i4, { base: Rh(t2) ? t2 : "", contextResolver: new ph({ sharedCache: r }) });
      const o4 = await e7.expand(t2, i4);
      return Lh(o4, i4);
    }, e7.merge = async function(t2, i4, o4) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!Ih(t2))
        throw new TypeError('Could not merge, "docs" must be an array.');
      i4 = "function" == typeof i4 ? null : i4 || null, o4 = n4(o4, { contextResolver: new ph({ sharedCache: r }) });
      const a4 = await Promise.all(t2.map((t3) => {
        const r2 = { ...o4 };
        return e7.expand(t3, r2);
      }));
      let s3 = true;
      "mergeNodes" in o4 && (s3 = o4.mergeNodes);
      const l6 = o4.issuer || new mh("_:b"), u4 = { "@default": {} };
      for (let e8 = 0; e8 < a4.length; ++e8) {
        const t3 = fh.relabelBlankNodes(a4[e8], { issuer: new mh("_:b" + e8 + "-") }), r2 = s3 || 0 === e8 ? u4 : { "@default": {} };
        if (Mh(t3, r2, "@default", l6), r2 !== u4)
          for (const e9 in r2) {
            const t4 = r2[e9];
            if (!(e9 in u4)) {
              u4[e9] = t4;
              continue;
            }
            const n5 = u4[e9];
            for (const e10 in t4)
              e10 in n5 || (n5[e10] = t4[e10]);
          }
      }
      const c3 = Ph(u4), d5 = [], h6 = Object.keys(c3).sort();
      for (let e8 = 0; e8 < h6.length; ++e8) {
        const t3 = c3[h6[e8]];
        kh(t3) || d5.push(t3);
      }
      if (null === i4)
        return d5;
      o4.graph = true, o4.skipExpansion = true;
      return await e7.compact(d5, i4, o4);
    }, Object.defineProperty(e7, "documentLoader", { get: () => e7._documentLoader, set: (t2) => e7._documentLoader = t2 }), e7.documentLoader = async (e8) => {
      throw new yh("Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.", "jsonld.LoadDocumentError", { code: "loading document failed", url: e8 });
    }, e7.get = async function(t2, r2) {
      let n5;
      n5 = "function" == typeof r2.documentLoader ? r2.documentLoader : e7.documentLoader;
      const i4 = await n5(t2);
      try {
        if (!i4.document)
          throw new yh("No remote document found at the given URL.", "jsonld.NullRemoteDocument");
        Rh(i4.document) && (i4.document = JSON.parse(i4.document));
      } catch (e8) {
        throw new yh("Could not retrieve a JSON-LD document from the URL.", "jsonld.LoadDocumentError", { code: "loading document failed", cause: e8, remoteDoc: i4 });
      }
      return i4;
    }, e7.processContext = async function(e8, t2, i4) {
      return i4 = n4(i4, { base: "", contextResolver: new ph({ sharedCache: r }) }), null === t2 ? Dh(i4) : (t2 = fh.clone(t2), Sh(t2) && "@context" in t2 || (t2 = { "@context": t2 }), Nh({ activeCtx: e8, localCtx: t2, options: i4 }));
    }, e7.getContextValue = Uu.getContextValue, e7.documentLoaders = {}, e7.useDocumentLoader = function(t2) {
      if (!(t2 in e7.documentLoaders))
        throw new yh('Unknown document loader type: "' + t2 + '"', "jsonld.UnknownDocumentLoader", { type: t2 });
      e7.documentLoader = e7.documentLoaders[t2].apply(e7, Array.prototype.slice.call(arguments, 1));
    }, e7.registerRDFParser = function(e8, r2) {
      t[e8] = r2;
    }, e7.unregisterRDFParser = function(e8) {
      delete t[e8];
    }, e7.registerRDFParser("application/n-quads", vh.parse), e7.registerRDFParser("application/nquads", vh.parse), e7.url = El, e7.logEventHandler = Bh, e7.logWarningEventHandler = $h, e7.safeEventHandler = Fh, e7.setDefaultEventHandler = Uh, e7.strictEventHandler = Yh, e7.unhandledEventHandler = Wh, e7.util = fh, Object.assign(e7, fh), e7.promises = e7, e7.RequestQueue = wl(), e7.JsonLdProcessor = (lh || (lh = 1, sh = (e8) => {
      class t2 {
        toString() {
          return "[object JsonLdProcessor]";
        }
      }
      return Object.defineProperty(t2, "prototype", { writable: false, enumerable: false }), Object.defineProperty(t2.prototype, "constructor", { writable: true, enumerable: false, configurable: true, value: t2 }), t2.compact = function(t3, r2) {
        return arguments.length < 2 ? Promise.reject(new TypeError("Could not compact, too few arguments.")) : e8.compact(t3, r2);
      }, t2.expand = function(t3) {
        return arguments.length < 1 ? Promise.reject(new TypeError("Could not expand, too few arguments.")) : e8.expand(t3);
      }, t2.flatten = function(t3) {
        return arguments.length < 1 ? Promise.reject(new TypeError("Could not flatten, too few arguments.")) : e8.flatten(t3);
      }, t2;
    }), sh)(e7), hh.setupGlobals(e7), hh.setupDocumentLoaders(e7), e7;
  };
  var Gh = function() {
    return zh(function() {
      return Gh();
    });
  };
  zh(Gh);
  var Hh = Gh;
  function Jh(e7) {
    throw new Error('Could not dynamically require "' + e7 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var Vh = { exports: {} };
  Vh.exports = function() {
    function e7(t, r, n4) {
      function i4(a5, s3) {
        if (!r[a5]) {
          if (!t[a5]) {
            if (!s3 && Jh)
              return Jh(a5);
            if (o4)
              return o4(a5, true);
            var l6 = new Error("Cannot find module '" + a5 + "'");
            throw l6.code = "MODULE_NOT_FOUND", l6;
          }
          var u4 = r[a5] = { exports: {} };
          t[a5][0].call(u4.exports, function(e8) {
            return i4(t[a5][1][e8] || e8);
          }, u4, u4.exports, e7, t, r, n4);
        }
        return r[a5].exports;
      }
      for (var o4 = Jh, a4 = 0; a4 < n4.length; a4++)
        i4(n4[a4]);
      return i4;
    }
    return e7;
  }()({ 1: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0;
    const n4 = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", i4 = "http://www.w3.org/2001/XMLSchema#", o4 = "http://www.w3.org/2000/10/swap/";
    r.default = { xsd: { decimal: `${i4}decimal`, boolean: `${i4}boolean`, double: `${i4}double`, integer: `${i4}integer`, string: `${i4}string` }, rdf: { type: `${n4}type`, nil: `${n4}nil`, first: `${n4}first`, rest: `${n4}rest`, langString: `${n4}langString` }, owl: { sameAs: "http://www.w3.org/2002/07/owl#sameAs" }, r: { forSome: `${o4}reify#forSome`, forAll: `${o4}reify#forAll` }, log: { implies: `${o4}log#implies` } };
  }, {}], 2: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), r.default = r.Variable = r.Triple = r.Term = r.Quad = r.NamedNode = r.Literal = r.DefaultGraph = r.BlankNode = void 0, r.escapeQuotes = b7, r.termFromId = g5, r.termToId = v6, r.unescapeQuotes = _5;
    var n4 = i4(e7("./IRIs"));
    function i4(e8) {
      return e8 && e8.__esModule ? e8 : { default: e8 };
    }
    const { rdf: o4, xsd: a4 } = n4.default;
    let s3, l6 = 0;
    const u4 = /^"(.*".*)(?="[^"]*$)/, c3 = { namedNode: E4, blankNode: T6, variable: I5, literal: x6, defaultGraph: S6, quad: R5, triple: R5 };
    r.default = c3;
    class d5 {
      constructor(e8) {
        this.id = e8;
      }
      get value() {
        return this.id;
      }
      equals(e8) {
        return e8 instanceof d5 ? this.id === e8.id : !!e8 && this.termType === e8.termType && this.value === e8.value;
      }
      hashCode() {
        return 0;
      }
      toJSON() {
        return { termType: this.termType, value: this.value };
      }
    }
    r.Term = d5;
    class h6 extends d5 {
      get termType() {
        return "NamedNode";
      }
    }
    r.NamedNode = h6;
    class f5 extends d5 {
      get termType() {
        return "Literal";
      }
      get value() {
        return this.id.substring(1, this.id.lastIndexOf('"'));
      }
      get language() {
        const e8 = this.id;
        let t2 = e8.lastIndexOf('"') + 1;
        return t2 < e8.length && "@" === e8[t2++] ? e8.substr(t2).toLowerCase() : "";
      }
      get datatype() {
        return new h6(this.datatypeString);
      }
      get datatypeString() {
        const e8 = this.id, t2 = e8.lastIndexOf('"') + 1, r2 = t2 < e8.length ? e8[t2] : "";
        return "^" === r2 ? e8.substr(t2 + 2) : "@" !== r2 ? a4.string : o4.langString;
      }
      equals(e8) {
        return e8 instanceof f5 ? this.id === e8.id : !!e8 && !!e8.datatype && this.termType === e8.termType && this.value === e8.value && this.language === e8.language && this.datatype.value === e8.datatype.value;
      }
      toJSON() {
        return { termType: this.termType, value: this.value, language: this.language, datatype: { termType: "NamedNode", value: this.datatypeString } };
      }
    }
    r.Literal = f5;
    class p6 extends d5 {
      constructor(e8) {
        super(`_:${e8}`);
      }
      get termType() {
        return "BlankNode";
      }
      get value() {
        return this.id.substr(2);
      }
    }
    r.BlankNode = p6;
    class m5 extends d5 {
      constructor(e8) {
        super(`?${e8}`);
      }
      get termType() {
        return "Variable";
      }
      get value() {
        return this.id.substr(1);
      }
    }
    r.Variable = m5;
    class y5 extends d5 {
      constructor() {
        return super(""), s3 || this;
      }
      get termType() {
        return "DefaultGraph";
      }
      equals(e8) {
        return this === e8 || !!e8 && this.termType === e8.termType;
      }
    }
    function g5(e8, t2, r2) {
      if (t2 = t2 || c3, !e8)
        return t2.defaultGraph();
      switch (e8[0]) {
        case "?":
          return t2.variable(e8.substr(1));
        case "_":
          return t2.blankNode(e8.substr(2));
        case '"':
          if (t2 === c3)
            return new f5(e8);
          if ('"' === e8[e8.length - 1])
            return t2.literal(e8.substr(1, e8.length - 2));
          const n5 = e8.lastIndexOf('"', e8.length - 1);
          return t2.literal(e8.substr(1, n5 - 1), "@" === e8[n5 + 1] ? e8.substr(n5 + 2) : t2.namedNode(e8.substr(n5 + 3)));
        case "[":
          e8 = JSON.parse(e8);
          break;
        default:
          if (!r2 || !Array.isArray(e8))
            return t2.namedNode(e8);
      }
      return t2.quad(g5(e8[0], t2, true), g5(e8[1], t2, true), g5(e8[2], t2, true), e8[3] && g5(e8[3], t2, true));
    }
    function v6(e8, t2) {
      if ("string" == typeof e8)
        return e8;
      if (e8 instanceof d5 && "Quad" !== e8.termType)
        return e8.id;
      if (!e8)
        return s3.id;
      switch (e8.termType) {
        case "NamedNode":
          return e8.value;
        case "BlankNode":
          return `_:${e8.value}`;
        case "Variable":
          return `?${e8.value}`;
        case "DefaultGraph":
          return "";
        case "Literal":
          return `"${e8.value}"${e8.language ? `@${e8.language}` : e8.datatype && e8.datatype.value !== a4.string ? `^^${e8.datatype.value}` : ""}`;
        case "Quad":
          const r2 = [v6(e8.subject, true), v6(e8.predicate, true), v6(e8.object, true)];
          return e8.graph && "DefaultGraph" !== e8.graph.termType && r2.push(v6(e8.graph, true)), t2 ? r2 : JSON.stringify(r2);
        default:
          throw new Error(`Unexpected termType: ${e8.termType}`);
      }
    }
    r.DefaultGraph = y5, s3 = new y5();
    class w5 extends d5 {
      constructor(e8, t2, r2, n5) {
        super(""), this._subject = e8, this._predicate = t2, this._object = r2, this._graph = n5 || s3;
      }
      get termType() {
        return "Quad";
      }
      get subject() {
        return this._subject;
      }
      get predicate() {
        return this._predicate;
      }
      get object() {
        return this._object;
      }
      get graph() {
        return this._graph;
      }
      toJSON() {
        return { termType: this.termType, subject: this._subject.toJSON(), predicate: this._predicate.toJSON(), object: this._object.toJSON(), graph: this._graph.toJSON() };
      }
      equals(e8) {
        return !!e8 && this._subject.equals(e8.subject) && this._predicate.equals(e8.predicate) && this._object.equals(e8.object) && this._graph.equals(e8.graph);
      }
    }
    function b7(e8) {
      return e8.replace(u4, (e9, t2) => `"${t2.replace(/"/g, '""')}`);
    }
    function _5(e8) {
      return e8.replace(u4, (e9, t2) => `"${t2.replace(/""/g, '"')}`);
    }
    function E4(e8) {
      return new h6(e8);
    }
    function T6(e8) {
      return new p6(e8 || "n3-" + l6++);
    }
    function x6(e8, t2) {
      if ("string" == typeof t2)
        return new f5(`"${e8}"@${t2.toLowerCase()}`);
      let r2 = t2 ? t2.value : "";
      return "" === r2 && ("boolean" == typeof e8 ? r2 = a4.boolean : "number" == typeof e8 && (Number.isFinite(e8) ? r2 = Number.isInteger(e8) ? a4.integer : a4.double : (r2 = a4.double, Number.isNaN(e8) || (e8 = e8 > 0 ? "INF" : "-INF")))), "" === r2 || r2 === a4.string ? new f5(`"${e8}"`) : new f5(`"${e8}"^^${r2}`);
    }
    function I5(e8) {
      return new m5(e8);
    }
    function S6() {
      return s3;
    }
    function R5(e8, t2, r2, n5) {
      return new w5(e8, t2, r2, n5);
    }
    r.Triple = r.Quad = w5;
  }, { "./IRIs": 1 }], 3: [function(e7, t, r) {
    (function(t2) {
      (function() {
        Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0;
        var n4 = o4(e7("queue-microtask")), i4 = o4(e7("./IRIs"));
        function o4(e8) {
          return e8 && e8.__esModule ? e8 : { default: e8 };
        }
        const { xsd: a4 } = i4.default, s3 = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g, l6 = { "\\": "\\", "'": "'", '"': '"', n: "\n", r: "\r", t: "	", f: "\f", b: "\b", _: "_", "~": "~", ".": ".", "-": "-", "!": "!", $: "$", "&": "&", "(": "(", ")": ")", "*": "*", "+": "+", ",": ",", ";": ";", "=": "=", "/": "/", "?": "?", "#": "#", "@": "@", "%": "%" }, u4 = /[\x00-\x20<>\\"\{\}\|\^\`]/, c3 = { _iri: true, _unescapedIri: true, _simpleQuotedString: true, _langcode: true, _blank: true, _newline: true, _comment: true, _whitespace: true, _endOfFile: true }, d5 = /$0^/;
        class h6 {
          constructor(e8) {
            if (this._iri = /^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/, this._unescapedIri = /^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/, this._simpleQuotedString = /^"([^"\\\r\n]*)"(?=[^"])/, this._simpleApostropheString = /^'([^'\\\r\n]*)'(?=[^'])/, this._langcode = /^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i, this._prefix = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/, this._prefixed = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/, this._variable = /^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/, this._blank = /^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/, this._number = /^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/, this._boolean = /^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/, this._keyword = /^@[a-z]+(?=[\s#<:])/i, this._sparqlKeyword = /^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i, this._shortPredicates = /^a(?=[\s#()\[\]\{\}"'<>])/, this._newline = /^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/, this._comment = /#([^\n\r]*)/, this._whitespace = /^[ \t]+/, this._endOfFile = /^(?:#[^\n\r]*)?$/, e8 = e8 || {}, this._lineMode = !!e8.lineMode) {
              this._n3Mode = false;
              for (const e9 in this)
                !(e9 in c3) && this[e9] instanceof RegExp && (this[e9] = d5);
            } else
              this._n3Mode = false !== e8.n3;
            this._comments = !!e8.comments, this._literalClosingPos = 0;
          }
          _tokenizeToEnd(e8, t3) {
            let r2 = this._input, n5 = r2.length;
            for (; ; ) {
              let e9, s4;
              for (; e9 = this._newline.exec(r2); )
                this._comments && (s4 = this._comment.exec(e9[0])) && i5("comment", s4[1], "", this._line, e9[0].length), r2 = r2.substr(e9[0].length, r2.length), n5 = r2.length, this._line++;
              if (!e9 && (e9 = this._whitespace.exec(r2)) && (r2 = r2.substr(e9[0].length, r2.length)), this._endOfFile.test(r2))
                return t3 && (this._comments && (s4 = this._comment.exec(r2)) && i5("comment", s4[1], "", this._line, r2.length), r2 = null, i5("eof", "", "", this._line, 0)), this._input = r2;
              const l7 = this._line, c4 = r2[0];
              let d6 = "", h7 = "", f5 = "", p6 = null, m5 = 0, y5 = false;
              switch (c4) {
                case "^":
                  if (r2.length < 3)
                    break;
                  if ("^" !== r2[1]) {
                    this._n3Mode && (m5 = 1, d6 = "^");
                    break;
                  }
                  if (this._previousMarker = "^^", r2 = r2.substr(2), "<" !== r2[0]) {
                    y5 = true;
                    break;
                  }
                case "<":
                  if (p6 = this._unescapedIri.exec(r2))
                    d6 = "IRI", h7 = p6[1];
                  else if (p6 = this._iri.exec(r2)) {
                    if (h7 = this._unescape(p6[1]), null === h7 || u4.test(h7))
                      return o5(this);
                    d6 = "IRI";
                  } else
                    r2.length > 1 && "<" === r2[1] ? (d6 = "<<", m5 = 2) : this._n3Mode && r2.length > 1 && "=" === r2[1] && (d6 = "inverse", m5 = 2, h7 = ">");
                  break;
                case ">":
                  r2.length > 1 && ">" === r2[1] && (d6 = ">>", m5 = 2);
                  break;
                case "_":
                  ((p6 = this._blank.exec(r2)) || t3 && (p6 = this._blank.exec(`${r2} `))) && (d6 = "blank", f5 = "_", h7 = p6[1]);
                  break;
                case '"':
                  if (p6 = this._simpleQuotedString.exec(r2))
                    h7 = p6[1];
                  else if ({ value: h7, matchLength: m5 } = this._parseLiteral(r2), null === h7)
                    return o5(this);
                  null === p6 && 0 === m5 || (d6 = "literal", this._literalClosingPos = 0);
                  break;
                case "'":
                  if (!this._lineMode) {
                    if (p6 = this._simpleApostropheString.exec(r2))
                      h7 = p6[1];
                    else if ({ value: h7, matchLength: m5 } = this._parseLiteral(r2), null === h7)
                      return o5(this);
                    null === p6 && 0 === m5 || (d6 = "literal", this._literalClosingPos = 0);
                  }
                  break;
                case "?":
                  this._n3Mode && (p6 = this._variable.exec(r2)) && (d6 = "var", h7 = p6[0]);
                  break;
                case "@":
                  "literal" === this._previousMarker && (p6 = this._langcode.exec(r2)) ? (d6 = "langcode", h7 = p6[1]) : (p6 = this._keyword.exec(r2)) && (d6 = p6[0]);
                  break;
                case ".":
                  if (1 === r2.length ? t3 : r2[1] < "0" || r2[1] > "9") {
                    d6 = ".", m5 = 1;
                    break;
                  }
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "+":
                case "-":
                  (p6 = this._number.exec(r2) || t3 && (p6 = this._number.exec(`${r2} `))) && (d6 = "literal", h7 = p6[0], f5 = "string" == typeof p6[1] ? a4.double : "string" == typeof p6[2] ? a4.decimal : a4.integer);
                  break;
                case "B":
                case "b":
                case "p":
                case "P":
                case "G":
                case "g":
                  (p6 = this._sparqlKeyword.exec(r2)) ? d6 = p6[0].toUpperCase() : y5 = true;
                  break;
                case "f":
                case "t":
                  (p6 = this._boolean.exec(r2)) ? (d6 = "literal", h7 = p6[0], f5 = a4.boolean) : y5 = true;
                  break;
                case "a":
                  (p6 = this._shortPredicates.exec(r2)) ? (d6 = "abbreviation", h7 = "a") : y5 = true;
                  break;
                case "=":
                  this._n3Mode && r2.length > 1 && (d6 = "abbreviation", ">" !== r2[1] ? (m5 = 1, h7 = "=") : (m5 = 2, h7 = ">"));
                  break;
                case "!":
                  if (!this._n3Mode)
                    break;
                case ",":
                case ";":
                case "[":
                case "]":
                case "(":
                case ")":
                case "}":
                  this._lineMode || (m5 = 1, d6 = c4);
                  break;
                case "{":
                  !this._lineMode && r2.length >= 2 && ("|" === r2[1] ? (d6 = "{|", m5 = 2) : (d6 = c4, m5 = 1));
                  break;
                case "|":
                  r2.length >= 2 && "}" === r2[1] && (d6 = "|}", m5 = 2);
                  break;
                default:
                  y5 = true;
              }
              if (y5 && ("@prefix" !== this._previousMarker && "PREFIX" !== this._previousMarker || !(p6 = this._prefix.exec(r2)) ? ((p6 = this._prefixed.exec(r2)) || t3 && (p6 = this._prefixed.exec(`${r2} `))) && (d6 = "prefixed", f5 = p6[1] || "", h7 = this._unescape(p6[2])) : (d6 = "prefix", h7 = p6[1] || "")), "^^" === this._previousMarker)
                switch (d6) {
                  case "prefixed":
                    d6 = "type";
                    break;
                  case "IRI":
                    d6 = "typeIRI";
                    break;
                  default:
                    d6 = "";
                }
              if (!d6)
                return t3 || !/^'''|^"""/.test(r2) && /\n|\r/.test(r2) ? o5(this) : this._input = r2;
              const g5 = m5 || p6[0].length, v6 = i5(d6, h7, f5, l7, g5);
              this.previousToken = v6, this._previousMarker = d6, r2 = r2.substr(g5, r2.length);
            }
            function i5(t4, i6, o6, a5, s4) {
              const l7 = r2 ? n5 - r2.length : n5, u5 = { type: t4, value: i6, prefix: o6, line: a5, start: l7, end: l7 + s4 };
              return e8(null, u5), u5;
            }
            function o5(t4) {
              e8(t4._syntaxError(/^\S*/.exec(r2)[0]));
            }
          }
          _unescape(e8) {
            let t3 = false;
            const r2 = e8.replace(s3, (e9, r3, n5, i5) => {
              if ("string" == typeof r3)
                return String.fromCharCode(Number.parseInt(r3, 16));
              if ("string" == typeof n5) {
                let e10 = Number.parseInt(n5, 16);
                return e10 <= 65535 ? String.fromCharCode(Number.parseInt(n5, 16)) : String.fromCharCode(55296 + ((e10 -= 65536) >> 10), 56320 + (1023 & e10));
              }
              return i5 in l6 ? l6[i5] : (t3 = true, "");
            });
            return t3 ? null : r2;
          }
          _parseLiteral(e8) {
            if (e8.length >= 3) {
              const t3 = e8.match(/^(?:"""|"|'''|'|)/)[0], r2 = t3.length;
              let n5 = Math.max(this._literalClosingPos, r2);
              for (; (n5 = e8.indexOf(t3, n5)) > 0; ) {
                let t4 = 0;
                for (; "\\" === e8[n5 - t4 - 1]; )
                  t4++;
                if (t4 % 2 == 0) {
                  const t5 = e8.substring(r2, n5), i5 = t5.split(/\r\n|\r|\n/).length - 1, o5 = n5 + r2;
                  if (1 === r2 && 0 !== i5 || 3 === r2 && this._lineMode)
                    break;
                  return this._line += i5, { value: this._unescape(t5), matchLength: o5 };
                }
                n5++;
              }
              this._literalClosingPos = e8.length - r2 + 1;
            }
            return { value: "", matchLength: 0 };
          }
          _syntaxError(e8) {
            this._input = null;
            const t3 = new Error(`Unexpected "${e8}" on line ${this._line}.`);
            return t3.context = { token: void 0, line: this._line, previousToken: this.previousToken }, t3;
          }
          _readStartingBom(e8) {
            return e8.startsWith("\uFEFF") ? e8.substr(1) : e8;
          }
          tokenize(e8, r2) {
            if (this._line = 1, "string" == typeof e8) {
              if (this._input = this._readStartingBom(e8), "function" != typeof r2) {
                const e9 = [];
                let t3;
                if (this._tokenizeToEnd((r3, n5) => r3 ? t3 = r3 : e9.push(n5), true), t3)
                  throw t3;
                return e9;
              }
              (0, n4.default)(() => this._tokenizeToEnd(r2, true));
            } else
              this._pendingBuffer = null, "function" == typeof e8.setEncoding && e8.setEncoding("utf8"), e8.on("data", (e9) => {
                null !== this._input && 0 !== e9.length && (this._pendingBuffer && (e9 = t2.concat([this._pendingBuffer, e9]), this._pendingBuffer = null), 128 & e9[e9.length - 1] ? this._pendingBuffer = e9 : (void 0 === this._input ? this._input = this._readStartingBom("string" == typeof e9 ? e9 : e9.toString()) : this._input += e9, this._tokenizeToEnd(r2, false)));
              }), e8.on("end", () => {
                "string" == typeof this._input && this._tokenizeToEnd(r2, true);
              }), e8.on("error", r2);
          }
        }
        r.default = h6;
      }).call(this);
    }).call(this, e7("buffer").Buffer);
  }, { "./IRIs": 1, buffer: 15, "queue-microtask": 19 }], 4: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0;
    var n4 = a4(e7("./N3Lexer")), i4 = a4(e7("./N3DataFactory")), o4 = a4(e7("./IRIs"));
    function a4(e8) {
      return e8 && e8.__esModule ? e8 : { default: e8 };
    }
    let s3 = 0;
    class l6 {
      constructor(e8) {
        this._contextStack = [], this._graph = null, e8 = e8 || {}, this._setBase(e8.baseIRI), e8.factory && c3(this, e8.factory);
        const t2 = "string" == typeof e8.format ? e8.format.match(/\w*$/)[0].toLowerCase() : "", r2 = /turtle/.test(t2), i5 = /trig/.test(t2), o5 = /triple/.test(t2), a5 = /quad/.test(t2), s4 = this._n3Mode = /n3/.test(t2), l7 = o5 || a5;
        (this._supportsNamedGraphs = !(r2 || s4)) || (this._readPredicateOrNamedGraph = this._readPredicate), this._supportsQuads = !(r2 || i5 || o5 || s4), this._supportsRDFStar = "" === t2 || /star|\*$/.test(t2), l7 && (this._resolveRelativeIRI = (e9) => null), this._blankNodePrefix = "string" != typeof e8.blankNodePrefix ? "" : e8.blankNodePrefix.replace(/^(?!_:)/, "_:"), this._lexer = e8.lexer || new n4.default({ lineMode: l7, n3: s4 }), this._explicitQuantifiers = !!e8.explicitQuantifiers;
      }
      static _resetBlankNodePrefix() {
        s3 = 0;
      }
      _setBase(e8) {
        if (e8) {
          const t2 = e8.indexOf("#");
          t2 >= 0 && (e8 = e8.substr(0, t2)), this._base = e8, this._basePath = e8.indexOf("/") < 0 ? e8 : e8.replace(/[^\/?]*(?:\?.*)?$/, ""), e8 = e8.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i), this._baseRoot = e8[0], this._baseScheme = e8[1];
        } else
          this._base = "", this._basePath = "";
      }
      _saveContext(e8, t2, r2, n5, i5) {
        const o5 = this._n3Mode;
        this._contextStack.push({ type: e8, subject: r2, predicate: n5, object: i5, graph: t2, inverse: !!o5 && this._inversePredicate, blankPrefix: o5 ? this._prefixes._ : "", quantified: o5 ? this._quantified : null }), o5 && (this._inversePredicate = false, this._prefixes._ = this._graph ? `${this._graph.value}.` : ".", this._quantified = Object.create(this._quantified));
      }
      _restoreContext(e8, t2) {
        const r2 = this._contextStack.pop();
        if (!r2 || r2.type !== e8)
          return this._error(`Unexpected ${t2.type}`, t2);
        this._subject = r2.subject, this._predicate = r2.predicate, this._object = r2.object, this._graph = r2.graph, this._n3Mode && (this._inversePredicate = r2.inverse, this._prefixes._ = r2.blankPrefix, this._quantified = r2.quantified);
      }
      _readInTopContext(e8) {
        switch (e8.type) {
          case "eof":
            return null !== this._graph ? this._error("Unclosed graph", e8) : (delete this._prefixes._, this._callback(null, null, this._prefixes));
          case "PREFIX":
            this._sparqlStyle = true;
          case "@prefix":
            return this._readPrefix;
          case "BASE":
            this._sparqlStyle = true;
          case "@base":
            return this._readBaseIRI;
          case "{":
            if (this._supportsNamedGraphs)
              return this._graph = "", this._subject = null, this._readSubject;
          case "GRAPH":
            if (this._supportsNamedGraphs)
              return this._readNamedGraphLabel;
          default:
            return this._readSubject(e8);
        }
      }
      _readEntity(e8, t2) {
        let r2;
        switch (e8.type) {
          case "IRI":
          case "typeIRI":
            const t3 = this._resolveIRI(e8.value);
            if (null === t3)
              return this._error("Invalid IRI", e8);
            r2 = this._namedNode(t3);
            break;
          case "type":
          case "prefixed":
            const n5 = this._prefixes[e8.prefix];
            if (void 0 === n5)
              return this._error(`Undefined prefix "${e8.prefix}:"`, e8);
            r2 = this._namedNode(n5 + e8.value);
            break;
          case "blank":
            r2 = this._blankNode(this._prefixes[e8.prefix] + e8.value);
            break;
          case "var":
            r2 = this._variable(e8.value.substr(1));
            break;
          default:
            return this._error(`Expected entity but got ${e8.type}`, e8);
        }
        return !t2 && this._n3Mode && r2.id in this._quantified && (r2 = this._quantified[r2.id]), r2;
      }
      _readSubject(e8) {
        switch (this._predicate = null, e8.type) {
          case "[":
            return this._saveContext("blank", this._graph, this._subject = this._blankNode(), null, null), this._readBlankNodeHead;
          case "(":
            return this._saveContext("list", this._graph, this.RDF_NIL, null, null), this._subject = null, this._readListItem;
          case "{":
            return this._n3Mode ? (this._saveContext("formula", this._graph, this._graph = this._blankNode(), null, null), this._readSubject) : this._error("Unexpected graph", e8);
          case "}":
            return this._readPunctuation(e8);
          case "@forSome":
            return this._n3Mode ? (this._subject = null, this._predicate = this.N3_FORSOME, this._quantifier = this._blankNode, this._readQuantifierList) : this._error('Unexpected "@forSome"', e8);
          case "@forAll":
            return this._n3Mode ? (this._subject = null, this._predicate = this.N3_FORALL, this._quantifier = this._variable, this._readQuantifierList) : this._error('Unexpected "@forAll"', e8);
          case "literal":
            if (!this._n3Mode)
              return this._error("Unexpected literal", e8);
            if (0 === e8.prefix.length)
              return this._literalValue = e8.value, this._completeSubjectLiteral;
            this._subject = this._literal(e8.value, this._namedNode(e8.prefix));
            break;
          case "<<":
            return this._supportsRDFStar ? (this._saveContext("<<", this._graph, null, null, null), this._graph = null, this._readSubject) : this._error("Unexpected RDF* syntax", e8);
          default:
            if (void 0 === (this._subject = this._readEntity(e8)))
              return;
            if (this._n3Mode)
              return this._getPathReader(this._readPredicateOrNamedGraph);
        }
        return this._readPredicateOrNamedGraph;
      }
      _readPredicate(e8) {
        const t2 = e8.type;
        switch (t2) {
          case "inverse":
            this._inversePredicate = true;
          case "abbreviation":
            this._predicate = this.ABBREVIATIONS[e8.value];
            break;
          case ".":
          case "]":
          case "}":
            return null === this._predicate ? this._error(`Unexpected ${t2}`, e8) : (this._subject = null, "]" === t2 ? this._readBlankNodeTail(e8) : this._readPunctuation(e8));
          case ";":
            return null !== this._predicate ? this._readPredicate : this._error("Expected predicate but got ;", e8);
          case "[":
            if (this._n3Mode)
              return this._saveContext("blank", this._graph, this._subject, this._subject = this._blankNode(), null), this._readBlankNodeHead;
          case "blank":
            if (!this._n3Mode)
              return this._error("Disallowed blank node as predicate", e8);
          default:
            if (void 0 === (this._predicate = this._readEntity(e8)))
              return;
        }
        return this._readObject;
      }
      _readObject(e8) {
        switch (e8.type) {
          case "literal":
            if (0 === e8.prefix.length)
              return this._literalValue = e8.value, this._readDataTypeOrLang;
            this._object = this._literal(e8.value, this._namedNode(e8.prefix));
            break;
          case "[":
            return this._saveContext("blank", this._graph, this._subject, this._predicate, this._subject = this._blankNode()), this._readBlankNodeHead;
          case "(":
            return this._saveContext("list", this._graph, this._subject, this._predicate, this.RDF_NIL), this._subject = null, this._readListItem;
          case "{":
            return this._n3Mode ? (this._saveContext("formula", this._graph, this._subject, this._predicate, this._graph = this._blankNode()), this._readSubject) : this._error("Unexpected graph", e8);
          case "<<":
            return this._supportsRDFStar ? (this._saveContext("<<", this._graph, this._subject, this._predicate, null), this._graph = null, this._readSubject) : this._error("Unexpected RDF* syntax", e8);
          default:
            if (void 0 === (this._object = this._readEntity(e8)))
              return;
            if (this._n3Mode)
              return this._getPathReader(this._getContextEndReader());
        }
        return this._getContextEndReader();
      }
      _readPredicateOrNamedGraph(e8) {
        return "{" === e8.type ? this._readGraph(e8) : this._readPredicate(e8);
      }
      _readGraph(e8) {
        return "{" !== e8.type ? this._error(`Expected graph but got ${e8.type}`, e8) : (this._graph = this._subject, this._subject = null, this._readSubject);
      }
      _readBlankNodeHead(e8) {
        return "]" === e8.type ? (this._subject = null, this._readBlankNodeTail(e8)) : (this._predicate = null, this._readPredicate(e8));
      }
      _readBlankNodeTail(e8) {
        if ("]" !== e8.type)
          return this._readBlankNodePunctuation(e8);
        null !== this._subject && this._emit(this._subject, this._predicate, this._object, this._graph);
        const t2 = null === this._predicate;
        return this._restoreContext("blank", e8), null !== this._object ? this._getContextEndReader() : null !== this._predicate ? this._readObject : t2 ? this._readPredicateOrNamedGraph : this._readPredicateAfterBlank;
      }
      _readPredicateAfterBlank(e8) {
        switch (e8.type) {
          case ".":
          case "}":
            return this._subject = null, this._readPunctuation(e8);
          default:
            return this._readPredicate(e8);
        }
      }
      _readListItem(e8) {
        let t2 = null, r2 = null, n5 = this._readListItem;
        const i5 = this._subject, o5 = this._contextStack, a5 = o5[o5.length - 1];
        switch (e8.type) {
          case "[":
            this._saveContext("blank", this._graph, r2 = this._blankNode(), this.RDF_FIRST, this._subject = t2 = this._blankNode()), n5 = this._readBlankNodeHead;
            break;
          case "(":
            this._saveContext("list", this._graph, r2 = this._blankNode(), this.RDF_FIRST, this.RDF_NIL), this._subject = null;
            break;
          case ")":
            if (this._restoreContext("list", e8), 0 !== o5.length && "list" === o5[o5.length - 1].type && this._emit(this._subject, this._predicate, this._object, this._graph), null === this._predicate) {
              if (n5 = this._readPredicate, this._subject === this.RDF_NIL)
                return n5;
            } else if (n5 = this._getContextEndReader(), this._object === this.RDF_NIL)
              return n5;
            r2 = this.RDF_NIL;
            break;
          case "literal":
            0 === e8.prefix.length ? (this._literalValue = e8.value, n5 = this._readListItemDataTypeOrLang) : (t2 = this._literal(e8.value, this._namedNode(e8.prefix)), n5 = this._getContextEndReader());
            break;
          case "{":
            return this._n3Mode ? (this._saveContext("formula", this._graph, this._subject, this._predicate, this._graph = this._blankNode()), this._readSubject) : this._error("Unexpected graph", e8);
          default:
            if (void 0 === (t2 = this._readEntity(e8)))
              return;
        }
        if (null === r2 && (this._subject = r2 = this._blankNode()), null === i5 ? null === a5.predicate ? a5.subject = r2 : a5.object = r2 : this._emit(i5, this.RDF_REST, r2, this._graph), null !== t2) {
          if (this._n3Mode && ("IRI" === e8.type || "prefixed" === e8.type))
            return this._saveContext("item", this._graph, r2, this.RDF_FIRST, t2), this._subject = t2, this._predicate = null, this._getPathReader(this._readListItem);
          this._emit(r2, this.RDF_FIRST, t2, this._graph);
        }
        return n5;
      }
      _readDataTypeOrLang(e8) {
        return this._completeObjectLiteral(e8, false);
      }
      _readListItemDataTypeOrLang(e8) {
        return this._completeObjectLiteral(e8, true);
      }
      _completeLiteral(e8) {
        let t2 = this._literal(this._literalValue);
        switch (e8.type) {
          case "type":
          case "typeIRI":
            const r2 = this._readEntity(e8);
            if (void 0 === r2)
              return;
            t2 = this._literal(this._literalValue, r2), e8 = null;
            break;
          case "langcode":
            t2 = this._literal(this._literalValue, e8.value), e8 = null;
        }
        return { token: e8, literal: t2 };
      }
      _completeSubjectLiteral(e8) {
        return this._subject = this._completeLiteral(e8).literal, this._readPredicateOrNamedGraph;
      }
      _completeObjectLiteral(e8, t2) {
        const r2 = this._completeLiteral(e8);
        if (r2)
          return this._object = r2.literal, t2 && this._emit(this._subject, this.RDF_FIRST, this._object, this._graph), null === r2.token ? this._getContextEndReader() : (this._readCallback = this._getContextEndReader(), this._readCallback(r2.token));
      }
      _readFormulaTail(e8) {
        return "}" !== e8.type ? this._readPunctuation(e8) : (null !== this._subject && this._emit(this._subject, this._predicate, this._object, this._graph), this._restoreContext("formula", e8), null === this._object ? this._readPredicate : this._getContextEndReader());
      }
      _readPunctuation(e8) {
        let t2, r2 = this._graph;
        const n5 = this._subject, i5 = this._inversePredicate;
        switch (e8.type) {
          case "}":
            if (null === this._graph)
              return this._error("Unexpected graph closing", e8);
            if (this._n3Mode)
              return this._readFormulaTail(e8);
            this._graph = null;
          case ".":
            this._subject = null, t2 = this._contextStack.length ? this._readSubject : this._readInTopContext, i5 && (this._inversePredicate = false);
            break;
          case ";":
            t2 = this._readPredicate;
            break;
          case ",":
            t2 = this._readObject;
            break;
          case "{|":
            if (!this._supportsRDFStar)
              return this._error("Unexpected RDF* syntax", e8);
            const o5 = this._predicate, a5 = this._object;
            this._subject = this._quad(n5, o5, a5, this.DEFAULTGRAPH), t2 = this._readPredicate;
            break;
          case "|}":
            if ("Quad" !== this._subject.termType)
              return this._error("Unexpected asserted triple closing", e8);
            this._subject = null, t2 = this._readPunctuation;
            break;
          default:
            if (this._supportsQuads && null === this._graph && void 0 !== (r2 = this._readEntity(e8))) {
              t2 = this._readQuadPunctuation;
              break;
            }
            return this._error(`Expected punctuation to follow "${this._object.id}"`, e8);
        }
        if (null !== n5) {
          const e9 = this._predicate, t3 = this._object;
          i5 ? this._emit(t3, e9, n5, r2) : this._emit(n5, e9, t3, r2);
        }
        return t2;
      }
      _readBlankNodePunctuation(e8) {
        let t2;
        switch (e8.type) {
          case ";":
            t2 = this._readPredicate;
            break;
          case ",":
            t2 = this._readObject;
            break;
          default:
            return this._error(`Expected punctuation to follow "${this._object.id}"`, e8);
        }
        return this._emit(this._subject, this._predicate, this._object, this._graph), t2;
      }
      _readQuadPunctuation(e8) {
        return "." !== e8.type ? this._error("Expected dot to follow quad", e8) : this._readInTopContext;
      }
      _readPrefix(e8) {
        return "prefix" !== e8.type ? this._error("Expected prefix to follow @prefix", e8) : (this._prefix = e8.value, this._readPrefixIRI);
      }
      _readPrefixIRI(e8) {
        if ("IRI" !== e8.type)
          return this._error(`Expected IRI to follow prefix "${this._prefix}:"`, e8);
        const t2 = this._readEntity(e8);
        return this._prefixes[this._prefix] = t2.value, this._prefixCallback(this._prefix, t2), this._readDeclarationPunctuation;
      }
      _readBaseIRI(e8) {
        const t2 = "IRI" === e8.type && this._resolveIRI(e8.value);
        return t2 ? (this._setBase(t2), this._readDeclarationPunctuation) : this._error("Expected valid IRI to follow base declaration", e8);
      }
      _readNamedGraphLabel(e8) {
        switch (e8.type) {
          case "IRI":
          case "blank":
          case "prefixed":
            return this._readSubject(e8), this._readGraph;
          case "[":
            return this._readNamedGraphBlankLabel;
          default:
            return this._error("Invalid graph label", e8);
        }
      }
      _readNamedGraphBlankLabel(e8) {
        return "]" !== e8.type ? this._error("Invalid graph label", e8) : (this._subject = this._blankNode(), this._readGraph);
      }
      _readDeclarationPunctuation(e8) {
        return this._sparqlStyle ? (this._sparqlStyle = false, this._readInTopContext(e8)) : "." !== e8.type ? this._error("Expected declaration to end with a dot", e8) : this._readInTopContext;
      }
      _readQuantifierList(e8) {
        let t2;
        switch (e8.type) {
          case "IRI":
          case "prefixed":
            if (void 0 !== (t2 = this._readEntity(e8, true)))
              break;
          default:
            return this._error(`Unexpected ${e8.type}`, e8);
        }
        return this._explicitQuantifiers ? (null === this._subject ? this._emit(this._graph || this.DEFAULTGRAPH, this._predicate, this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH) : this._emit(this._subject, this.RDF_REST, this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH), this._emit(this._subject, this.RDF_FIRST, t2, this.QUANTIFIERS_GRAPH)) : this._quantified[t2.id] = this._quantifier(this._blankNode().value), this._readQuantifierPunctuation;
      }
      _readQuantifierPunctuation(e8) {
        return "," === e8.type ? this._readQuantifierList : (this._explicitQuantifiers && (this._emit(this._subject, this.RDF_REST, this.RDF_NIL, this.QUANTIFIERS_GRAPH), this._subject = null), this._readCallback = this._getContextEndReader(), this._readCallback(e8));
      }
      _getPathReader(e8) {
        return this._afterPath = e8, this._readPath;
      }
      _readPath(e8) {
        switch (e8.type) {
          case "!":
            return this._readForwardPath;
          case "^":
            return this._readBackwardPath;
          default:
            const t2 = this._contextStack, r2 = t2.length && t2[t2.length - 1];
            if (r2 && "item" === r2.type) {
              const t3 = this._subject;
              this._restoreContext("item", e8), this._emit(this._subject, this.RDF_FIRST, t3, this._graph);
            }
            return this._afterPath(e8);
        }
      }
      _readForwardPath(e8) {
        let t2, r2;
        const n5 = this._blankNode();
        if (void 0 !== (r2 = this._readEntity(e8)))
          return null === this._predicate ? (t2 = this._subject, this._subject = n5) : (t2 = this._object, this._object = n5), this._emit(t2, r2, n5, this._graph), this._readPath;
      }
      _readBackwardPath(e8) {
        const t2 = this._blankNode();
        let r2, n5;
        if (void 0 !== (r2 = this._readEntity(e8)))
          return null === this._predicate ? (n5 = this._subject, this._subject = t2) : (n5 = this._object, this._object = t2), this._emit(t2, r2, n5, this._graph), this._readPath;
      }
      _readRDFStarTailOrGraph(e8) {
        return ">>" !== e8.type ? this._supportsQuads && null === this._graph && void 0 !== (this._graph = this._readEntity(e8)) ? this._readRDFStarTail : this._error(`Expected >> to follow "${this._object.id}"`, e8) : this._readRDFStarTail(e8);
      }
      _readRDFStarTail(e8) {
        if (">>" !== e8.type)
          return this._error(`Expected >> but got ${e8.type}`, e8);
        const t2 = this._quad(this._subject, this._predicate, this._object, this._graph || this.DEFAULTGRAPH);
        return this._restoreContext("<<", e8), null === this._subject ? (this._subject = t2, this._readPredicate) : (this._object = t2, this._getContextEndReader());
      }
      _getContextEndReader() {
        const e8 = this._contextStack;
        if (!e8.length)
          return this._readPunctuation;
        switch (e8[e8.length - 1].type) {
          case "blank":
            return this._readBlankNodeTail;
          case "list":
            return this._readListItem;
          case "formula":
            return this._readFormulaTail;
          case "<<":
            return this._readRDFStarTailOrGraph;
        }
      }
      _emit(e8, t2, r2, n5) {
        this._callback(null, this._quad(e8, t2, r2, n5 || this.DEFAULTGRAPH));
      }
      _error(e8, t2) {
        const r2 = new Error(`${e8} on line ${t2.line}.`);
        r2.context = { token: t2, line: t2.line, previousToken: this._lexer.previousToken }, this._callback(r2), this._callback = u4;
      }
      _resolveIRI(e8) {
        return /^[a-z][a-z0-9+.-]*:/i.test(e8) ? e8 : this._resolveRelativeIRI(e8);
      }
      _resolveRelativeIRI(e8) {
        if (!e8.length)
          return this._base;
        switch (e8[0]) {
          case "#":
            return this._base + e8;
          case "?":
            return this._base.replace(/(?:\?.*)?$/, e8);
          case "/":
            return ("/" === e8[1] ? this._baseScheme : this._baseRoot) + this._removeDotSegments(e8);
          default:
            return /^[^/:]*:/.test(e8) ? null : this._removeDotSegments(this._basePath + e8);
        }
      }
      _removeDotSegments(e8) {
        if (!/(^|\/)\.\.?($|[/#?])/.test(e8))
          return e8;
        const t2 = e8.length;
        let r2 = "", n5 = -1, i5 = -1, o5 = 0, a5 = "/";
        for (; n5 < t2; ) {
          switch (a5) {
            case ":":
              if (i5 < 0 && "/" === e8[++n5] && "/" === e8[++n5])
                for (; (i5 = n5 + 1) < t2 && "/" !== e8[i5]; )
                  n5 = i5;
              break;
            case "?":
            case "#":
              n5 = t2;
              break;
            case "/":
              if ("." === e8[n5 + 1])
                switch (a5 = e8[1 + ++n5], a5) {
                  case "/":
                    r2 += e8.substring(o5, n5 - 1), o5 = n5 + 1;
                    break;
                  case void 0:
                  case "?":
                  case "#":
                    return r2 + e8.substring(o5, n5) + e8.substr(n5 + 1);
                  case ".":
                    if (a5 = e8[1 + ++n5], void 0 === a5 || "/" === a5 || "?" === a5 || "#" === a5) {
                      if (r2 += e8.substring(o5, n5 - 2), (o5 = r2.lastIndexOf("/")) >= i5 && (r2 = r2.substr(0, o5)), "/" !== a5)
                        return `${r2}/${e8.substr(n5 + 1)}`;
                      o5 = n5 + 1;
                    }
                }
          }
          a5 = e8[++n5];
        }
        return r2 + e8.substring(o5);
      }
      parse(e8, t2, r2) {
        if (this._readCallback = this._readInTopContext, this._sparqlStyle = false, this._prefixes = /* @__PURE__ */ Object.create(null), this._prefixes._ = this._blankNodePrefix ? this._blankNodePrefix.substr(2) : `b${s3++}_`, this._prefixCallback = r2 || u4, this._inversePredicate = false, this._quantified = /* @__PURE__ */ Object.create(null), !t2) {
          const t3 = [];
          let r3;
          if (this._callback = (e9, n5) => {
            e9 ? r3 = e9 : n5 && t3.push(n5);
          }, this._lexer.tokenize(e8).every((e9) => this._readCallback = this._readCallback(e9)), r3)
            throw r3;
          return t3;
        }
        this._callback = t2, this._lexer.tokenize(e8, (e9, t3) => {
          null !== e9 ? (this._callback(e9), this._callback = u4) : this._readCallback && (this._readCallback = this._readCallback(t3));
        });
      }
    }
    function u4() {
    }
    function c3(e8, t2) {
      const r2 = t2.namedNode;
      e8._namedNode = r2, e8._blankNode = t2.blankNode, e8._literal = t2.literal, e8._variable = t2.variable, e8._quad = t2.quad, e8.DEFAULTGRAPH = t2.defaultGraph(), e8.RDF_FIRST = r2(o4.default.rdf.first), e8.RDF_REST = r2(o4.default.rdf.rest), e8.RDF_NIL = r2(o4.default.rdf.nil), e8.N3_FORALL = r2(o4.default.r.forAll), e8.N3_FORSOME = r2(o4.default.r.forSome), e8.ABBREVIATIONS = { a: r2(o4.default.rdf.type), "=": r2(o4.default.owl.sameAs), ">": r2(o4.default.log.implies) }, e8.QUANTIFIERS_GRAPH = r2("urn:n3:quantifiers");
    }
    r.default = l6, c3(l6.prototype, i4.default);
  }, { "./IRIs": 1, "./N3DataFactory": 2, "./N3Lexer": 3 }], 5: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0;
    var n4 = e7("readable-stream"), i4 = u4(e7("./N3DataFactory")), o4 = s3(e7("./IRIs")), a4 = e7("./N3Util");
    function s3(e8) {
      return e8 && e8.__esModule ? e8 : { default: e8 };
    }
    function l6(e8) {
      if ("function" != typeof WeakMap)
        return null;
      var t2 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap();
      return (l6 = function(e9) {
        return e9 ? r2 : t2;
      })(e8);
    }
    function u4(e8, t2) {
      if (!t2 && e8 && e8.__esModule)
        return e8;
      if (null === e8 || "object" != typeof e8 && "function" != typeof e8)
        return { default: e8 };
      var r2 = l6(t2);
      if (r2 && r2.has(e8))
        return r2.get(e8);
      var n5 = { __proto__: null }, i5 = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o5 in e8)
        if ("default" !== o5 && Object.prototype.hasOwnProperty.call(e8, o5)) {
          var a5 = i5 ? Object.getOwnPropertyDescriptor(e8, o5) : null;
          a5 && (a5.get || a5.set) ? Object.defineProperty(n5, o5, a5) : n5[o5] = e8[o5];
        }
      return n5.default = e8, r2 && r2.set(e8, n5), n5;
    }
    class c3 {
      constructor(e8, t2) {
        this._size = 0, this._graphs = /* @__PURE__ */ Object.create(null), this._id = 0, this._ids = /* @__PURE__ */ Object.create(null), this._entities = /* @__PURE__ */ Object.create(null), this._blankNodeIndex = 0, t2 || !e8 || e8[0] || (t2 = e8, e8 = null), t2 = t2 || {}, this._factory = t2.factory || i4.default, e8 && this.addQuads(e8);
      }
      _termFromId(e8, t2) {
        if ("." === e8[0]) {
          const t3 = this._entities, r2 = e8.split(".");
          return this._factory.quad(this._termFromId(t3[r2[1]]), this._termFromId(t3[r2[2]]), this._termFromId(t3[r2[3]]), r2[4] && this._termFromId(t3[r2[4]]));
        }
        return (0, i4.termFromId)(e8, t2);
      }
      _termToNumericId(e8) {
        if ("Quad" === e8.termType) {
          const t2 = this._termToNumericId(e8.subject), r2 = this._termToNumericId(e8.predicate), n5 = this._termToNumericId(e8.object);
          let i5;
          return t2 && r2 && n5 && ((0, a4.isDefaultGraph)(e8.graph) || (i5 = this._termToNumericId(e8.graph))) && this._ids[i5 ? `.${t2}.${r2}.${n5}.${i5}` : `.${t2}.${r2}.${n5}`];
        }
        return this._ids[(0, i4.termToId)(e8)];
      }
      _termToNewNumericId(e8) {
        const t2 = e8 && "Quad" === e8.termType ? `.${this._termToNewNumericId(e8.subject)}.${this._termToNewNumericId(e8.predicate)}.${this._termToNewNumericId(e8.object)}${(0, a4.isDefaultGraph)(e8.graph) ? "" : `.${this._termToNewNumericId(e8.graph)}`}` : (0, i4.termToId)(e8);
        return this._ids[t2] || (this._ids[this._entities[++this._id] = t2] = this._id);
      }
      get size() {
        let e8 = this._size;
        if (null !== e8)
          return e8;
        e8 = 0;
        const t2 = this._graphs;
        let r2, n5;
        for (const i5 in t2)
          for (const o5 in r2 = t2[i5].subjects)
            for (const t3 in n5 = r2[o5])
              e8 += Object.keys(n5[t3]).length;
        return this._size = e8;
      }
      _addToIndex(e8, t2, r2, n5) {
        const i5 = e8[t2] || (e8[t2] = {}), o5 = i5[r2] || (i5[r2] = {}), a5 = n5 in o5;
        return a5 || (o5[n5] = null), !a5;
      }
      _removeFromIndex(e8, t2, r2, n5) {
        const i5 = e8[t2], o5 = i5[r2];
        delete o5[n5];
        for (const e9 in o5)
          return;
        delete i5[r2];
        for (const e9 in i5)
          return;
        delete e8[t2];
      }
      *_findInIndex(e8, t2, r2, n5, i5, o5, a5, s4) {
        let l7, u5, c4;
        const d6 = this._entities, h7 = this._termFromId(s4, this._factory), f5 = { subject: null, predicate: null, object: null };
        t2 && ((l7 = e8, e8 = {})[t2] = l7[t2]);
        for (const t3 in e8)
          if (u5 = e8[t3]) {
            f5[i5] = this._termFromId(d6[t3], this._factory), r2 && ((l7 = u5, u5 = {})[r2] = l7[r2]);
            for (const e9 in u5)
              if (c4 = u5[e9]) {
                f5[o5] = this._termFromId(d6[e9], this._factory);
                const t4 = n5 ? n5 in c4 ? [n5] : [] : Object.keys(c4);
                for (let e10 = 0; e10 < t4.length; e10++)
                  f5[a5] = this._termFromId(d6[t4[e10]], this._factory), yield this._factory.quad(f5.subject, f5.predicate, f5.object, h7);
              }
          }
      }
      _loop(e8, t2) {
        for (const r2 in e8)
          t2(r2);
      }
      _loopByKey0(e8, t2, r2) {
        let n5, i5;
        if (n5 = e8[t2])
          for (i5 in n5)
            r2(i5);
      }
      _loopByKey1(e8, t2, r2) {
        let n5, i5;
        for (n5 in e8)
          i5 = e8[n5], i5[t2] && r2(n5);
      }
      _loopBy2Keys(e8, t2, r2, n5) {
        let i5, o5, a5;
        if ((i5 = e8[t2]) && (o5 = i5[r2]))
          for (a5 in o5)
            n5(a5);
      }
      _countInIndex(e8, t2, r2, n5) {
        let i5, o5, a5, s4 = 0;
        t2 && ((i5 = e8, e8 = {})[t2] = i5[t2]);
        for (const t3 in e8)
          if (o5 = e8[t3]) {
            r2 && ((i5 = o5, o5 = {})[r2] = i5[r2]);
            for (const e9 in o5)
              (a5 = o5[e9]) && (n5 ? n5 in a5 && s4++ : s4 += Object.keys(a5).length);
          }
        return s4;
      }
      _getGraphs(e8) {
        if (!d5(e8))
          return this._graphs;
        const t2 = {};
        return t2[e8] = this._graphs[e8], t2;
      }
      _uniqueEntities(e8) {
        const t2 = /* @__PURE__ */ Object.create(null);
        return (r2) => {
          r2 in t2 || (t2[r2] = true, e8(this._termFromId(this._entities[r2], this._factory)));
        };
      }
      add(e8) {
        return this.addQuad(e8), this;
      }
      addQuad(e8, t2, r2, n5) {
        t2 || (n5 = e8.graph, r2 = e8.object, t2 = e8.predicate, e8 = e8.subject), n5 = (0, i4.termToId)(n5);
        let o5 = this._graphs[n5];
        o5 || (o5 = this._graphs[n5] = { subjects: {}, predicates: {}, objects: {} }, Object.freeze(o5)), e8 = this._termToNewNumericId(e8), t2 = this._termToNewNumericId(t2), r2 = this._termToNewNumericId(r2);
        const a5 = this._addToIndex(o5.subjects, e8, t2, r2);
        return this._addToIndex(o5.predicates, t2, r2, e8), this._addToIndex(o5.objects, r2, e8, t2), this._size = null, a5;
      }
      addQuads(e8) {
        for (let t2 = 0; t2 < e8.length; t2++)
          this.addQuad(e8[t2]);
      }
      delete(e8) {
        return this.removeQuad(e8), this;
      }
      has(e8, t2, r2, n5) {
        return e8 && e8.subject && ({ subject: e8, predicate: t2, object: r2, graph: n5 } = e8), !this.readQuads(e8, t2, r2, n5).next().done;
      }
      importStream(e8) {
        return e8.on("data", (e9) => {
          this.addQuad(e9);
        }), e8;
      }
      removeQuad(e8, t2, r2, n5) {
        t2 || (n5 = e8.graph, r2 = e8.object, t2 = e8.predicate, e8 = e8.subject), n5 = (0, i4.termToId)(n5);
        const o5 = this._graphs;
        let a5, s4, l7;
        if (!((e8 = e8 && this._termToNumericId(e8)) && (t2 = t2 && this._termToNumericId(t2)) && (r2 = r2 && this._termToNumericId(r2)) && (a5 = o5[n5]) && (s4 = a5.subjects[e8]) && (l7 = s4[t2]) && r2 in l7))
          return false;
        for (e8 in this._removeFromIndex(a5.subjects, e8, t2, r2), this._removeFromIndex(a5.predicates, t2, r2, e8), this._removeFromIndex(a5.objects, r2, e8, t2), null !== this._size && this._size--, a5.subjects)
          return true;
        return delete o5[n5], true;
      }
      removeQuads(e8) {
        for (let t2 = 0; t2 < e8.length; t2++)
          this.removeQuad(e8[t2]);
      }
      remove(e8) {
        return e8.on("data", (e9) => {
          this.removeQuad(e9);
        }), e8;
      }
      removeMatches(e8, t2, r2, i5) {
        const o5 = new n4.Readable({ objectMode: true });
        return o5._read = () => {
          for (const n5 of this.readQuads(e8, t2, r2, i5))
            o5.push(n5);
          o5.push(null);
        }, this.remove(o5);
      }
      deleteGraph(e8) {
        return this.removeMatches(null, null, null, e8);
      }
      getQuads(e8, t2, r2, n5) {
        return [...this.readQuads(e8, t2, r2, n5)];
      }
      *readQuads(e8, t2, r2, n5) {
        n5 = n5 && (0, i4.termToId)(n5);
        const o5 = this._getGraphs(n5);
        let a5, s4, l7, u5;
        if (!(e8 && !(s4 = this._termToNumericId(e8)) || t2 && !(l7 = this._termToNumericId(t2)) || r2 && !(u5 = this._termToNumericId(r2))))
          for (const e9 in o5)
            (a5 = o5[e9]) && (s4 ? u5 ? yield* this._findInIndex(a5.objects, u5, s4, l7, "object", "subject", "predicate", e9) : yield* this._findInIndex(a5.subjects, s4, l7, null, "subject", "predicate", "object", e9) : l7 ? yield* this._findInIndex(a5.predicates, l7, u5, null, "predicate", "object", "subject", e9) : u5 ? yield* this._findInIndex(a5.objects, u5, null, null, "object", "subject", "predicate", e9) : yield* this._findInIndex(a5.subjects, null, null, null, "subject", "predicate", "object", e9));
      }
      match(e8, t2, r2, n5) {
        return new h6(this, e8, t2, r2, n5);
      }
      countQuads(e8, t2, r2, n5) {
        n5 = n5 && (0, i4.termToId)(n5);
        const o5 = this._getGraphs(n5);
        let a5, s4, l7, u5, c4 = 0;
        if (e8 && !(s4 = this._termToNumericId(e8)) || t2 && !(l7 = this._termToNumericId(t2)) || r2 && !(u5 = this._termToNumericId(r2)))
          return 0;
        for (const n6 in o5)
          (a5 = o5[n6]) && (c4 += e8 ? r2 ? this._countInIndex(a5.objects, u5, s4, l7) : this._countInIndex(a5.subjects, s4, l7, u5) : t2 ? this._countInIndex(a5.predicates, l7, u5, s4) : this._countInIndex(a5.objects, u5, s4, l7));
        return c4;
      }
      forEach(e8, t2, r2, n5, i5) {
        this.some((t3) => (e8(t3), false), t2, r2, n5, i5);
      }
      every(e8, t2, r2, n5, i5) {
        let o5 = false;
        const a5 = !this.some((t3) => (o5 = true, !e8(t3)), t2, r2, n5, i5);
        return o5 && a5;
      }
      some(e8, t2, r2, n5, i5) {
        for (const o5 of this.readQuads(t2, r2, n5, i5))
          if (e8(o5))
            return true;
        return false;
      }
      getSubjects(e8, t2, r2) {
        const n5 = [];
        return this.forSubjects((e9) => {
          n5.push(e9);
        }, e8, t2, r2), n5;
      }
      forSubjects(e8, t2, r2, n5) {
        n5 = n5 && (0, i4.termToId)(n5);
        const o5 = this._getGraphs(n5);
        let a5, s4, l7;
        if (e8 = this._uniqueEntities(e8), !(t2 && !(s4 = this._termToNumericId(t2)) || r2 && !(l7 = this._termToNumericId(r2))))
          for (n5 in o5)
            (a5 = o5[n5]) && (s4 ? l7 ? this._loopBy2Keys(a5.predicates, s4, l7, e8) : this._loopByKey1(a5.subjects, s4, e8) : l7 ? this._loopByKey0(a5.objects, l7, e8) : this._loop(a5.subjects, e8));
      }
      getPredicates(e8, t2, r2) {
        const n5 = [];
        return this.forPredicates((e9) => {
          n5.push(e9);
        }, e8, t2, r2), n5;
      }
      forPredicates(e8, t2, r2, n5) {
        n5 = n5 && (0, i4.termToId)(n5);
        const o5 = this._getGraphs(n5);
        let a5, s4, l7;
        if (e8 = this._uniqueEntities(e8), !(t2 && !(s4 = this._termToNumericId(t2)) || r2 && !(l7 = this._termToNumericId(r2))))
          for (n5 in o5)
            (a5 = o5[n5]) && (s4 ? l7 ? this._loopBy2Keys(a5.objects, l7, s4, e8) : this._loopByKey0(a5.subjects, s4, e8) : l7 ? this._loopByKey1(a5.predicates, l7, e8) : this._loop(a5.predicates, e8));
      }
      getObjects(e8, t2, r2) {
        const n5 = [];
        return this.forObjects((e9) => {
          n5.push(e9);
        }, e8, t2, r2), n5;
      }
      forObjects(e8, t2, r2, n5) {
        n5 = n5 && (0, i4.termToId)(n5);
        const o5 = this._getGraphs(n5);
        let a5, s4, l7;
        if (e8 = this._uniqueEntities(e8), !(t2 && !(s4 = this._termToNumericId(t2)) || r2 && !(l7 = this._termToNumericId(r2))))
          for (n5 in o5)
            (a5 = o5[n5]) && (s4 ? l7 ? this._loopBy2Keys(a5.subjects, s4, l7, e8) : this._loopByKey1(a5.objects, s4, e8) : l7 ? this._loopByKey0(a5.predicates, l7, e8) : this._loop(a5.objects, e8));
      }
      getGraphs(e8, t2, r2) {
        const n5 = [];
        return this.forGraphs((e9) => {
          n5.push(e9);
        }, e8, t2, r2), n5;
      }
      forGraphs(e8, t2, r2, n5) {
        for (const i5 in this._graphs)
          this.some((t3) => (e8(t3.graph), true), t2, r2, n5, i5);
      }
      createBlankNode(e8) {
        let t2, r2;
        if (e8)
          for (t2 = e8 = `_:${e8}`, r2 = 1; this._ids[t2]; )
            t2 = e8 + r2++;
        else
          do {
            t2 = "_:b" + this._blankNodeIndex++;
          } while (this._ids[t2]);
        return this._ids[t2] = ++this._id, this._entities[this._id] = t2, this._factory.blankNode(t2.substr(2));
      }
      extractLists({ remove: e8 = false, ignoreErrors: t2 = false } = {}) {
        const r2 = {}, n5 = t2 ? () => true : (e9, t3) => {
          throw new Error(`${e9.value} ${t3}`);
        }, i5 = this.getQuads(null, o4.default.rdf.rest, o4.default.rdf.nil, null), a5 = e8 ? [...i5] : [];
        return i5.forEach((t3) => {
          const i6 = [];
          let s4, l7, u5 = false;
          const c4 = t3.graph;
          let d6 = t3.subject;
          for (; d6 && !u5; ) {
            const e9 = this.getQuads(null, null, d6, null), t4 = this.getQuads(d6, null, null, null);
            let r3, h7 = null, f5 = null, p6 = null;
            for (let i7 = 0; i7 < t4.length && !u5; i7++)
              r3 = t4[i7], r3.graph.equals(c4) ? s4 ? u5 = n5(d6, "has non-list arcs out") : r3.predicate.value === o4.default.rdf.first ? h7 ? u5 = n5(d6, "has multiple rdf:first arcs") : a5.push(h7 = r3) : r3.predicate.value === o4.default.rdf.rest ? f5 ? u5 = n5(d6, "has multiple rdf:rest arcs") : a5.push(f5 = r3) : e9.length ? u5 = n5(d6, "can't be subject and object") : (s4 = r3, l7 = "subject") : u5 = n5(d6, "not confined to single graph");
            for (let t5 = 0; t5 < e9.length && !u5; ++t5)
              r3 = e9[t5], s4 ? u5 = n5(d6, "can't have coreferences") : r3.predicate.value === o4.default.rdf.rest ? p6 ? u5 = n5(d6, "has incoming rdf:rest arcs") : p6 = r3 : (s4 = r3, l7 = "object");
            h7 ? i6.unshift(h7.object) : u5 = n5(d6, "has no list head"), d6 = p6 && p6.subject;
          }
          u5 ? e8 = false : s4 && (r2[s4[l7].value] = i6);
        }), e8 && this.removeQuads(a5), r2;
      }
      *[Symbol.iterator]() {
        yield* this.readQuads();
      }
    }
    function d5(e8) {
      return "string" == typeof e8 || e8 instanceof String;
    }
    r.default = c3;
    class h6 extends n4.Readable {
      constructor(e8, t2, r2, n5, i5) {
        super({ objectMode: true }), Object.assign(this, { n3Store: e8, subject: t2, predicate: r2, object: n5, graph: i5 });
      }
      get filtered() {
        if (!this._filtered) {
          const { n3Store: e8, graph: t2, object: r2, predicate: n5, subject: i5 } = this, o5 = this._filtered = new c3({ factory: e8._factory });
          for (const a5 of e8.readQuads(i5, n5, r2, t2))
            o5.addQuad(a5);
        }
        return this._filtered;
      }
      get size() {
        return this.filtered.size;
      }
      _read() {
        for (const e8 of this)
          this.push(e8);
        this.push(null);
      }
      add(e8) {
        return this.filtered.add(e8);
      }
      delete(e8) {
        return this.filtered.delete(e8);
      }
      has(e8) {
        return this.filtered.has(e8);
      }
      match(e8, t2, r2, n5) {
        return new h6(this.filtered, e8, t2, r2, n5);
      }
      *[Symbol.iterator]() {
        yield* this._filtered || this.n3Store.readQuads(this.subject, this.predicate, this.object, this.graph);
      }
    }
  }, { "./IRIs": 1, "./N3DataFactory": 2, "./N3Util": 8, "readable-stream": 38 }], 6: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0;
    var n4 = e7("readable-stream"), i4 = o4(e7("./N3Parser"));
    function o4(e8) {
      return e8 && e8.__esModule ? e8 : { default: e8 };
    }
    class a4 extends n4.Transform {
      constructor(e8) {
        let t2, r2;
        super({ decodeStrings: true }), this._readableState.objectMode = true, new i4.default(e8).parse({ on: (e9, n5) => {
          switch (e9) {
            case "data":
              t2 = n5;
              break;
            case "end":
              r2 = n5;
          }
        } }, (e9, t3) => {
          e9 && this.emit("error", e9) || t3 && this.push(t3);
        }, (e9, t3) => {
          this.emit("prefix", e9, t3);
        }), this._transform = (e9, r3, n5) => {
          t2(e9), n5();
        }, this._flush = (e9) => {
          r2(), e9();
        };
      }
      importStream(e8) {
        return e8.on("data", (e9) => {
          this.write(e9);
        }), e8.on("end", () => {
          this.end();
        }), e8.on("error", (e9) => {
          this.emit("error", e9);
        }), this;
      }
    }
    r.default = a4;
  }, { "./N3Parser": 4, "readable-stream": 38 }], 7: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0;
    var n4 = e7("readable-stream"), i4 = o4(e7("./N3Writer"));
    function o4(e8) {
      return e8 && e8.__esModule ? e8 : { default: e8 };
    }
    class a4 extends n4.Transform {
      constructor(e8) {
        super({ encoding: "utf8", writableObjectMode: true });
        const t2 = this._writer = new i4.default({ write: (e9, t3, r2) => {
          this.push(e9), r2 && r2();
        }, end: (e9) => {
          this.push(null), e9 && e9();
        } }, e8);
        this._transform = (e9, r2, n5) => {
          t2.addQuad(e9, n5);
        }, this._flush = (e9) => {
          t2.end(e9);
        };
      }
      importStream(e8) {
        return e8.on("data", (e9) => {
          this.write(e9);
        }), e8.on("end", () => {
          this.end();
        }), e8.on("error", (e9) => {
          this.emit("error", e9);
        }), e8.on("prefix", (e9, t2) => {
          this._writer.addPrefix(e9, t2);
        }), this;
      }
    }
    r.default = a4;
  }, { "./N3Writer": 9, "readable-stream": 38 }], 8: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), r.inDefaultGraph = c3, r.isBlankNode = a4, r.isDefaultGraph = u4, r.isLiteral = s3, r.isNamedNode = o4, r.isVariable = l6, r.prefix = d5, r.prefixes = h6;
    var n4 = i4(e7("./N3DataFactory"));
    function i4(e8) {
      return e8 && e8.__esModule ? e8 : { default: e8 };
    }
    function o4(e8) {
      return !!e8 && "NamedNode" === e8.termType;
    }
    function a4(e8) {
      return !!e8 && "BlankNode" === e8.termType;
    }
    function s3(e8) {
      return !!e8 && "Literal" === e8.termType;
    }
    function l6(e8) {
      return !!e8 && "Variable" === e8.termType;
    }
    function u4(e8) {
      return !!e8 && "DefaultGraph" === e8.termType;
    }
    function c3(e8) {
      return u4(e8.graph);
    }
    function d5(e8, t2) {
      return h6({ "": e8.value || e8 }, t2)("");
    }
    function h6(e8, t2) {
      const r2 = /* @__PURE__ */ Object.create(null);
      for (const t3 in e8)
        i5(t3, e8[t3]);
      function i5(e9, n5) {
        if ("string" == typeof n5) {
          const i6 = /* @__PURE__ */ Object.create(null);
          r2[e9] = (e10) => i6[e10] || (i6[e10] = t2.namedNode(n5 + e10));
        } else if (!(e9 in r2))
          throw new Error(`Unknown prefix: ${e9}`);
        return r2[e9];
      }
      return t2 = t2 || n4.default, i5;
    }
  }, { "./N3DataFactory": 2 }], 9: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0;
    var n4 = l6(e7("./IRIs")), i4 = s3(e7("./N3DataFactory")), o4 = e7("./N3Util");
    function a4(e8) {
      if ("function" != typeof WeakMap)
        return null;
      var t2 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap();
      return (a4 = function(e9) {
        return e9 ? r2 : t2;
      })(e8);
    }
    function s3(e8, t2) {
      if (!t2 && e8 && e8.__esModule)
        return e8;
      if (null === e8 || "object" != typeof e8 && "function" != typeof e8)
        return { default: e8 };
      var r2 = a4(t2);
      if (r2 && r2.has(e8))
        return r2.get(e8);
      var n5 = { __proto__: null }, i5 = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o5 in e8)
        if ("default" !== o5 && Object.prototype.hasOwnProperty.call(e8, o5)) {
          var s4 = i5 ? Object.getOwnPropertyDescriptor(e8, o5) : null;
          s4 && (s4.get || s4.set) ? Object.defineProperty(n5, o5, s4) : n5[o5] = e8[o5];
        }
      return n5.default = e8, r2 && r2.set(e8, n5), n5;
    }
    function l6(e8) {
      return e8 && e8.__esModule ? e8 : { default: e8 };
    }
    const u4 = i4.default.defaultGraph(), { rdf: c3, xsd: d5 } = n4.default, h6 = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/, f5 = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g, p6 = { "\\": "\\\\", '"': '\\"', "	": "\\t", "\n": "\\n", "\r": "\\r", "\b": "\\b", "\f": "\\f" };
    class m5 extends i4.Term {
      equals(e8) {
        return e8 === this;
      }
    }
    class y5 {
      constructor(e8, t2) {
        if (this._prefixRegex = /$0^/, e8 && "function" != typeof e8.write && (t2 = e8, e8 = null), t2 = t2 || {}, this._lists = t2.lists, e8)
          this._outputStream = e8, this._endStream = void 0 === t2.end || !!t2.end;
        else {
          let e9 = "";
          this._outputStream = { write(t3, r2, n5) {
            e9 += t3, n5 && n5();
          }, end: (t3) => {
            t3 && t3(null, e9);
          } }, this._endStream = true;
        }
        this._subject = null, /triple|quad/i.test(t2.format) ? (this._lineMode = true, this._writeQuad = this._writeQuadLine) : (this._lineMode = false, this._graph = u4, this._prefixIRIs = /* @__PURE__ */ Object.create(null), t2.prefixes && this.addPrefixes(t2.prefixes), t2.baseIRI && (this._baseMatcher = new RegExp(`^${v6(t2.baseIRI)}${t2.baseIRI.endsWith("/") ? "" : "[#?]"}`), this._baseLength = t2.baseIRI.length));
      }
      get _inDefaultGraph() {
        return u4.equals(this._graph);
      }
      _write(e8, t2) {
        this._outputStream.write(e8, "utf8", t2);
      }
      _writeQuad(e8, t2, r2, n5, i5) {
        try {
          n5.equals(this._graph) || (this._write((null === this._subject ? "" : this._inDefaultGraph ? ".\n" : "\n}\n") + (u4.equals(n5) ? "" : `${this._encodeIriOrBlank(n5)} {
`)), this._graph = n5, this._subject = null), e8.equals(this._subject) ? t2.equals(this._predicate) ? this._write(`, ${this._encodeObject(r2)}`, i5) : this._write(`;
    ${this._encodePredicate(this._predicate = t2)} ${this._encodeObject(r2)}`, i5) : this._write(`${(null === this._subject ? "" : ".\n") + this._encodeSubject(this._subject = e8)} ${this._encodePredicate(this._predicate = t2)} ${this._encodeObject(r2)}`, i5);
        } catch (e9) {
          i5 && i5(e9);
        }
      }
      _writeQuadLine(e8, t2, r2, n5, i5) {
        delete this._prefixMatch, this._write(this.quadToString(e8, t2, r2, n5), i5);
      }
      quadToString(e8, t2, r2, n5) {
        return `${this._encodeSubject(e8)} ${this._encodeIriOrBlank(t2)} ${this._encodeObject(r2)}${n5 && n5.value ? ` ${this._encodeIriOrBlank(n5)} .
` : " .\n"}`;
      }
      quadsToString(e8) {
        return e8.map((e9) => this.quadToString(e9.subject, e9.predicate, e9.object, e9.graph)).join("");
      }
      _encodeSubject(e8) {
        return "Quad" === e8.termType ? this._encodeQuad(e8) : this._encodeIriOrBlank(e8);
      }
      _encodeIriOrBlank(e8) {
        if ("NamedNode" !== e8.termType)
          return this._lists && e8.value in this._lists && (e8 = this.list(this._lists[e8.value])), "id" in e8 ? e8.id : `_:${e8.value}`;
        let t2 = e8.value;
        this._baseMatcher && this._baseMatcher.test(t2) && (t2 = t2.substr(this._baseLength)), h6.test(t2) && (t2 = t2.replace(f5, g5));
        const r2 = this._prefixRegex.exec(t2);
        return r2 ? r2[1] ? this._prefixIRIs[r2[1]] + r2[2] : t2 : `<${t2}>`;
      }
      _encodeLiteral(e8) {
        let t2 = e8.value;
        if (h6.test(t2) && (t2 = t2.replace(f5, g5)), e8.language)
          return `"${t2}"@${e8.language}`;
        if (this._lineMode) {
          if (e8.datatype.value === d5.string)
            return `"${t2}"`;
        } else
          switch (e8.datatype.value) {
            case d5.string:
              return `"${t2}"`;
            case d5.boolean:
              if ("true" === t2 || "false" === t2)
                return t2;
              break;
            case d5.integer:
              if (/^[+-]?\d+$/.test(t2))
                return t2;
              break;
            case d5.decimal:
              if (/^[+-]?\d*\.\d+$/.test(t2))
                return t2;
              break;
            case d5.double:
              if (/^[+-]?(?:\d+\.\d*|\.?\d+)[eE][+-]?\d+$/.test(t2))
                return t2;
          }
        return `"${t2}"^^${this._encodeIriOrBlank(e8.datatype)}`;
      }
      _encodePredicate(e8) {
        return e8.value === c3.type ? "a" : this._encodeIriOrBlank(e8);
      }
      _encodeObject(e8) {
        switch (e8.termType) {
          case "Quad":
            return this._encodeQuad(e8);
          case "Literal":
            return this._encodeLiteral(e8);
          default:
            return this._encodeIriOrBlank(e8);
        }
      }
      _encodeQuad({ subject: e8, predicate: t2, object: r2, graph: n5 }) {
        return `<<${this._encodeSubject(e8)} ${this._encodePredicate(t2)} ${this._encodeObject(r2)}${(0, o4.isDefaultGraph)(n5) ? "" : ` ${this._encodeIriOrBlank(n5)}`}>>`;
      }
      _blockedWrite() {
        throw new Error("Cannot write because the writer has been closed.");
      }
      addQuad(e8, t2, r2, n5, i5) {
        void 0 === r2 ? this._writeQuad(e8.subject, e8.predicate, e8.object, e8.graph, t2) : "function" == typeof n5 ? this._writeQuad(e8, t2, r2, u4, n5) : this._writeQuad(e8, t2, r2, n5 || u4, i5);
      }
      addQuads(e8) {
        for (let t2 = 0; t2 < e8.length; t2++)
          this.addQuad(e8[t2]);
      }
      addPrefix(e8, t2, r2) {
        const n5 = {};
        n5[e8] = t2, this.addPrefixes(n5, r2);
      }
      addPrefixes(e8, t2) {
        if (!this._prefixIRIs)
          return t2 && t2();
        let r2 = false;
        for (let t3 in e8) {
          let n5 = e8[t3];
          "string" != typeof n5 && (n5 = n5.value), r2 = true, null !== this._subject && (this._write(this._inDefaultGraph ? ".\n" : "\n}\n"), this._subject = null, this._graph = ""), this._prefixIRIs[n5] = t3 += ":", this._write(`@prefix ${t3} <${n5}>.
`);
        }
        if (r2) {
          let e9 = "", t3 = "";
          for (const r3 in this._prefixIRIs)
            e9 += e9 ? `|${r3}` : r3, t3 += (t3 ? "|" : "") + this._prefixIRIs[r3];
          e9 = v6(e9), this._prefixRegex = new RegExp(`^(?:${t3})[^/]*$|^(${e9})([_a-zA-Z][\\-_a-zA-Z0-9]*)$`);
        }
        this._write(r2 ? "\n" : "", t2);
      }
      blank(e8, t2) {
        let r2, n5, i5 = e8;
        switch (void 0 === e8 ? i5 = [] : e8.termType ? i5 = [{ predicate: e8, object: t2 }] : "length" in e8 || (i5 = [e8]), n5 = i5.length) {
          case 0:
            return new m5("[]");
          case 1:
            if (r2 = i5[0], !(r2.object instanceof m5))
              return new m5(`[ ${this._encodePredicate(r2.predicate)} ${this._encodeObject(r2.object)} ]`);
          default:
            let t3 = "[";
            for (let o5 = 0; o5 < n5; o5++)
              r2 = i5[o5], r2.predicate.equals(e8) ? t3 += `, ${this._encodeObject(r2.object)}` : (t3 += `${(o5 ? ";\n  " : "\n  ") + this._encodePredicate(r2.predicate)} ${this._encodeObject(r2.object)}`, e8 = r2.predicate);
            return new m5(`${t3}
]`);
        }
      }
      list(e8) {
        const t2 = e8 && e8.length || 0, r2 = new Array(t2);
        for (let n5 = 0; n5 < t2; n5++)
          r2[n5] = this._encodeObject(e8[n5]);
        return new m5(`(${r2.join(" ")})`);
      }
      end(e8) {
        null !== this._subject && (this._write(this._inDefaultGraph ? ".\n" : "\n}\n"), this._subject = null), this._write = this._blockedWrite;
        let t2 = e8 && ((r2, n5) => {
          t2 = null, e8(r2, n5);
        });
        if (this._endStream)
          try {
            return this._outputStream.end(t2);
          } catch (e9) {
          }
        t2 && t2();
      }
    }
    function g5(e8) {
      let t2 = p6[e8];
      return void 0 === t2 && (1 === e8.length ? (t2 = e8.charCodeAt(0).toString(16), t2 = "\\u0000".substr(0, 6 - t2.length) + t2) : (t2 = (1024 * (e8.charCodeAt(0) - 55296) + e8.charCodeAt(1) + 9216).toString(16), t2 = "\\U00000000".substr(0, 10 - t2.length) + t2)), t2;
    }
    function v6(e8) {
      return e8.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, "\\$&");
    }
    r.default = y5;
  }, { "./IRIs": 1, "./N3DataFactory": 2, "./N3Util": 8 }], 10: [function(e7, t, r) {
    Object.defineProperty(r, "__esModule", { value: true }), Object.defineProperty(r, "BlankNode", { enumerable: true, get: function() {
      return c3.BlankNode;
    } }), Object.defineProperty(r, "DataFactory", { enumerable: true, get: function() {
      return c3.default;
    } }), Object.defineProperty(r, "DefaultGraph", { enumerable: true, get: function() {
      return c3.DefaultGraph;
    } }), Object.defineProperty(r, "Lexer", { enumerable: true, get: function() {
      return n4.default;
    } }), Object.defineProperty(r, "Literal", { enumerable: true, get: function() {
      return c3.Literal;
    } }), Object.defineProperty(r, "NamedNode", { enumerable: true, get: function() {
      return c3.NamedNode;
    } }), Object.defineProperty(r, "Parser", { enumerable: true, get: function() {
      return i4.default;
    } }), Object.defineProperty(r, "Quad", { enumerable: true, get: function() {
      return c3.Quad;
    } }), Object.defineProperty(r, "Store", { enumerable: true, get: function() {
      return a4.default;
    } }), Object.defineProperty(r, "StreamParser", { enumerable: true, get: function() {
      return s3.default;
    } }), Object.defineProperty(r, "StreamWriter", { enumerable: true, get: function() {
      return l6.default;
    } }), Object.defineProperty(r, "Term", { enumerable: true, get: function() {
      return c3.Term;
    } }), Object.defineProperty(r, "Triple", { enumerable: true, get: function() {
      return c3.Triple;
    } }), r.Util = void 0, Object.defineProperty(r, "Variable", { enumerable: true, get: function() {
      return c3.Variable;
    } }), Object.defineProperty(r, "Writer", { enumerable: true, get: function() {
      return o4.default;
    } }), r.default = void 0, Object.defineProperty(r, "termFromId", { enumerable: true, get: function() {
      return c3.termFromId;
    } }), Object.defineProperty(r, "termToId", { enumerable: true, get: function() {
      return c3.termToId;
    } });
    var n4 = f5(e7("./N3Lexer")), i4 = f5(e7("./N3Parser")), o4 = f5(e7("./N3Writer")), a4 = f5(e7("./N3Store")), s3 = f5(e7("./N3StreamParser")), l6 = f5(e7("./N3StreamWriter")), u4 = h6(e7("./N3Util"));
    r.Util = u4;
    var c3 = h6(e7("./N3DataFactory"));
    function d5(e8) {
      if ("function" != typeof WeakMap)
        return null;
      var t2 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap();
      return (d5 = function(e9) {
        return e9 ? r2 : t2;
      })(e8);
    }
    function h6(e8, t2) {
      if (!t2 && e8 && e8.__esModule)
        return e8;
      if (null === e8 || "object" != typeof e8 && "function" != typeof e8)
        return { default: e8 };
      var r2 = d5(t2);
      if (r2 && r2.has(e8))
        return r2.get(e8);
      var n5 = { __proto__: null }, i5 = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o5 in e8)
        if ("default" !== o5 && Object.prototype.hasOwnProperty.call(e8, o5)) {
          var a5 = i5 ? Object.getOwnPropertyDescriptor(e8, o5) : null;
          a5 && (a5.get || a5.set) ? Object.defineProperty(n5, o5, a5) : n5[o5] = e8[o5];
        }
      return n5.default = e8, r2 && r2.set(e8, n5), n5;
    }
    function f5(e8) {
      return e8 && e8.__esModule ? e8 : { default: e8 };
    }
    r.default = { Lexer: n4.default, Parser: i4.default, Writer: o4.default, Store: a4.default, StreamParser: s3.default, StreamWriter: l6.default, Util: u4, DataFactory: c3.default, Term: c3.Term, NamedNode: c3.NamedNode, Literal: c3.Literal, BlankNode: c3.BlankNode, Variable: c3.Variable, DefaultGraph: c3.DefaultGraph, Quad: c3.Quad, Triple: c3.Triple, termFromId: c3.termFromId, termToId: c3.termToId };
  }, { "./N3DataFactory": 2, "./N3Lexer": 3, "./N3Parser": 4, "./N3Store": 5, "./N3StreamParser": 6, "./N3StreamWriter": 7, "./N3Util": 8, "./N3Writer": 9 }], 11: [function(e7, t, r) {
    const { AbortController: n4, AbortSignal: i4 } = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0;
    t.exports = n4, t.exports.AbortSignal = i4, t.exports.default = n4;
  }, {}], 12: [function(e7, t, r) {
    r.byteLength = c3, r.toByteArray = h6, r.fromByteArray = m5;
    for (var n4 = [], i4 = [], o4 = "undefined" != typeof Uint8Array ? Uint8Array : Array, a4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s3 = 0, l6 = a4.length; s3 < l6; ++s3)
      n4[s3] = a4[s3], i4[a4.charCodeAt(s3)] = s3;
    function u4(e8) {
      var t2 = e8.length;
      if (t2 % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r2 = e8.indexOf("=");
      return -1 === r2 && (r2 = t2), [r2, r2 === t2 ? 0 : 4 - r2 % 4];
    }
    function c3(e8) {
      var t2 = u4(e8), r2 = t2[0], n5 = t2[1];
      return 3 * (r2 + n5) / 4 - n5;
    }
    function d5(e8, t2, r2) {
      return 3 * (t2 + r2) / 4 - r2;
    }
    function h6(e8) {
      var t2, r2, n5 = u4(e8), a5 = n5[0], s4 = n5[1], l7 = new o4(d5(e8, a5, s4)), c4 = 0, h7 = s4 > 0 ? a5 - 4 : a5;
      for (r2 = 0; r2 < h7; r2 += 4)
        t2 = i4[e8.charCodeAt(r2)] << 18 | i4[e8.charCodeAt(r2 + 1)] << 12 | i4[e8.charCodeAt(r2 + 2)] << 6 | i4[e8.charCodeAt(r2 + 3)], l7[c4++] = t2 >> 16 & 255, l7[c4++] = t2 >> 8 & 255, l7[c4++] = 255 & t2;
      return 2 === s4 && (t2 = i4[e8.charCodeAt(r2)] << 2 | i4[e8.charCodeAt(r2 + 1)] >> 4, l7[c4++] = 255 & t2), 1 === s4 && (t2 = i4[e8.charCodeAt(r2)] << 10 | i4[e8.charCodeAt(r2 + 1)] << 4 | i4[e8.charCodeAt(r2 + 2)] >> 2, l7[c4++] = t2 >> 8 & 255, l7[c4++] = 255 & t2), l7;
    }
    function f5(e8) {
      return n4[e8 >> 18 & 63] + n4[e8 >> 12 & 63] + n4[e8 >> 6 & 63] + n4[63 & e8];
    }
    function p6(e8, t2, r2) {
      for (var n5, i5 = [], o5 = t2; o5 < r2; o5 += 3)
        n5 = (e8[o5] << 16 & 16711680) + (e8[o5 + 1] << 8 & 65280) + (255 & e8[o5 + 2]), i5.push(f5(n5));
      return i5.join("");
    }
    function m5(e8) {
      for (var t2, r2 = e8.length, i5 = r2 % 3, o5 = [], a5 = 16383, s4 = 0, l7 = r2 - i5; s4 < l7; s4 += a5)
        o5.push(p6(e8, s4, s4 + a5 > l7 ? l7 : s4 + a5));
      return 1 === i5 ? (t2 = e8[r2 - 1], o5.push(n4[t2 >> 2] + n4[t2 << 4 & 63] + "==")) : 2 === i5 && (t2 = (e8[r2 - 2] << 8) + e8[r2 - 1], o5.push(n4[t2 >> 10] + n4[t2 >> 4 & 63] + n4[t2 << 2 & 63] + "=")), o5.join("");
    }
    i4["-".charCodeAt(0)] = 62, i4["_".charCodeAt(0)] = 63;
  }, {}], 13: [function(e7, t, r) {
    var n4 = e7("buffer"), i4 = n4.Buffer;
    function o4(e8, t2) {
      for (var r2 in e8)
        t2[r2] = e8[r2];
    }
    function a4(e8, t2, r2) {
      return i4(e8, t2, r2);
    }
    i4.from && i4.alloc && i4.allocUnsafe && i4.allocUnsafeSlow ? t.exports = n4 : (o4(n4, r), r.Buffer = a4), o4(i4, a4), a4.from = function(e8, t2, r2) {
      if ("number" == typeof e8)
        throw new TypeError("Argument must not be a number");
      return i4(e8, t2, r2);
    }, a4.alloc = function(e8, t2, r2) {
      if ("number" != typeof e8)
        throw new TypeError("Argument must be a number");
      var n5 = i4(e8);
      return void 0 !== t2 ? "string" == typeof r2 ? n5.fill(t2, r2) : n5.fill(t2) : n5.fill(0), n5;
    }, a4.allocUnsafe = function(e8) {
      if ("number" != typeof e8)
        throw new TypeError("Argument must be a number");
      return i4(e8);
    }, a4.allocUnsafeSlow = function(e8) {
      if ("number" != typeof e8)
        throw new TypeError("Argument must be a number");
      return n4.SlowBuffer(e8);
    };
  }, { buffer: 15 }], 14: [function(e7, t, r) {
    var n4 = e7("safe-buffer").Buffer, i4 = n4.isEncoding || function(e8) {
      switch ((e8 = "" + e8) && e8.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function o4(e8) {
      if (!e8)
        return "utf8";
      for (var t2; ; )
        switch (e8) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return e8;
          default:
            if (t2)
              return;
            e8 = ("" + e8).toLowerCase(), t2 = true;
        }
    }
    function a4(e8) {
      var t2 = o4(e8);
      if ("string" != typeof t2 && (n4.isEncoding === i4 || !i4(e8)))
        throw new Error("Unknown encoding: " + e8);
      return t2 || e8;
    }
    function s3(e8) {
      var t2;
      switch (this.encoding = a4(e8), this.encoding) {
        case "utf16le":
          this.text = p6, this.end = m5, t2 = 4;
          break;
        case "utf8":
          this.fillLast = d5, t2 = 4;
          break;
        case "base64":
          this.text = y5, this.end = g5, t2 = 3;
          break;
        default:
          return this.write = v6, void (this.end = w5);
      }
      this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n4.allocUnsafe(t2);
    }
    function l6(e8) {
      return e8 <= 127 ? 0 : e8 >> 5 == 6 ? 2 : e8 >> 4 == 14 ? 3 : e8 >> 3 == 30 ? 4 : e8 >> 6 == 2 ? -1 : -2;
    }
    function u4(e8, t2, r2) {
      var n5 = t2.length - 1;
      if (n5 < r2)
        return 0;
      var i5 = l6(t2[n5]);
      return i5 >= 0 ? (i5 > 0 && (e8.lastNeed = i5 - 1), i5) : --n5 < r2 || -2 === i5 ? 0 : (i5 = l6(t2[n5])) >= 0 ? (i5 > 0 && (e8.lastNeed = i5 - 2), i5) : --n5 < r2 || -2 === i5 ? 0 : (i5 = l6(t2[n5])) >= 0 ? (i5 > 0 && (2 === i5 ? i5 = 0 : e8.lastNeed = i5 - 3), i5) : 0;
    }
    function c3(e8, t2, r2) {
      if (128 != (192 & t2[0]))
        return e8.lastNeed = 0, "\uFFFD";
      if (e8.lastNeed > 1 && t2.length > 1) {
        if (128 != (192 & t2[1]))
          return e8.lastNeed = 1, "\uFFFD";
        if (e8.lastNeed > 2 && t2.length > 2 && 128 != (192 & t2[2]))
          return e8.lastNeed = 2, "\uFFFD";
      }
    }
    function d5(e8) {
      var t2 = this.lastTotal - this.lastNeed, r2 = c3(this, e8);
      return void 0 !== r2 ? r2 : this.lastNeed <= e8.length ? (e8.copy(this.lastChar, t2, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e8.copy(this.lastChar, t2, 0, e8.length), void (this.lastNeed -= e8.length));
    }
    function h6(e8, t2) {
      var r2 = u4(this, e8, t2);
      if (!this.lastNeed)
        return e8.toString("utf8", t2);
      this.lastTotal = r2;
      var n5 = e8.length - (r2 - this.lastNeed);
      return e8.copy(this.lastChar, 0, n5), e8.toString("utf8", t2, n5);
    }
    function f5(e8) {
      var t2 = e8 && e8.length ? this.write(e8) : "";
      return this.lastNeed ? t2 + "\uFFFD" : t2;
    }
    function p6(e8, t2) {
      if ((e8.length - t2) % 2 == 0) {
        var r2 = e8.toString("utf16le", t2);
        if (r2) {
          var n5 = r2.charCodeAt(r2.length - 1);
          if (n5 >= 55296 && n5 <= 56319)
            return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e8[e8.length - 2], this.lastChar[1] = e8[e8.length - 1], r2.slice(0, -1);
        }
        return r2;
      }
      return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e8[e8.length - 1], e8.toString("utf16le", t2, e8.length - 1);
    }
    function m5(e8) {
      var t2 = e8 && e8.length ? this.write(e8) : "";
      if (this.lastNeed) {
        var r2 = this.lastTotal - this.lastNeed;
        return t2 + this.lastChar.toString("utf16le", 0, r2);
      }
      return t2;
    }
    function y5(e8, t2) {
      var r2 = (e8.length - t2) % 3;
      return 0 === r2 ? e8.toString("base64", t2) : (this.lastNeed = 3 - r2, this.lastTotal = 3, 1 === r2 ? this.lastChar[0] = e8[e8.length - 1] : (this.lastChar[0] = e8[e8.length - 2], this.lastChar[1] = e8[e8.length - 1]), e8.toString("base64", t2, e8.length - r2));
    }
    function g5(e8) {
      var t2 = e8 && e8.length ? this.write(e8) : "";
      return this.lastNeed ? t2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t2;
    }
    function v6(e8) {
      return e8.toString(this.encoding);
    }
    function w5(e8) {
      return e8 && e8.length ? this.write(e8) : "";
    }
    r.StringDecoder = s3, s3.prototype.write = function(e8) {
      if (0 === e8.length)
        return "";
      var t2, r2;
      if (this.lastNeed) {
        if (void 0 === (t2 = this.fillLast(e8)))
          return "";
        r2 = this.lastNeed, this.lastNeed = 0;
      } else
        r2 = 0;
      return r2 < e8.length ? t2 ? t2 + this.text(e8, r2) : this.text(e8, r2) : t2 || "";
    }, s3.prototype.end = f5, s3.prototype.text = h6, s3.prototype.fillLast = function(e8) {
      if (this.lastNeed <= e8.length)
        return e8.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
      e8.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e8.length), this.lastNeed -= e8.length;
    };
  }, { "safe-buffer": 13 }], 15: [function(e7, t, r) {
    (function(t2) {
      (function() {
        var t3 = e7("base64-js"), n4 = e7("ieee754");
        r.Buffer = s3, r.SlowBuffer = g5, r.INSPECT_MAX_BYTES = 50;
        var i4 = 2147483647;
        function o4() {
          try {
            var e8 = new Uint8Array(1);
            return e8.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
              return 42;
            } }, 42 === e8.foo();
          } catch (e9) {
            return false;
          }
        }
        function a4(e8) {
          if (e8 > i4)
            throw new RangeError('The value "' + e8 + '" is invalid for option "size"');
          var t4 = new Uint8Array(e8);
          return t4.__proto__ = s3.prototype, t4;
        }
        function s3(e8, t4, r2) {
          if ("number" == typeof e8) {
            if ("string" == typeof t4)
              throw new TypeError('The "string" argument must be of type string. Received type number');
            return d5(e8);
          }
          return l6(e8, t4, r2);
        }
        function l6(e8, t4, r2) {
          if ("string" == typeof e8)
            return h6(e8, t4);
          if (ArrayBuffer.isView(e8))
            return f5(e8);
          if (null == e8)
            throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e8);
          if (Q5(e8, ArrayBuffer) || e8 && Q5(e8.buffer, ArrayBuffer))
            return p6(e8, t4, r2);
          if ("number" == typeof e8)
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          var n5 = e8.valueOf && e8.valueOf();
          if (null != n5 && n5 !== e8)
            return s3.from(n5, t4, r2);
          var i5 = m5(e8);
          if (i5)
            return i5;
          if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e8[Symbol.toPrimitive])
            return s3.from(e8[Symbol.toPrimitive]("string"), t4, r2);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e8);
        }
        function u4(e8) {
          if ("number" != typeof e8)
            throw new TypeError('"size" argument must be of type number');
          if (e8 < 0)
            throw new RangeError('The value "' + e8 + '" is invalid for option "size"');
        }
        function c3(e8, t4, r2) {
          return u4(e8), e8 <= 0 ? a4(e8) : void 0 !== t4 ? "string" == typeof r2 ? a4(e8).fill(t4, r2) : a4(e8).fill(t4) : a4(e8);
        }
        function d5(e8) {
          return u4(e8), a4(e8 < 0 ? 0 : 0 | y5(e8));
        }
        function h6(e8, t4) {
          if ("string" == typeof t4 && "" !== t4 || (t4 = "utf8"), !s3.isEncoding(t4))
            throw new TypeError("Unknown encoding: " + t4);
          var r2 = 0 | v6(e8, t4), n5 = a4(r2), i5 = n5.write(e8, t4);
          return i5 !== r2 && (n5 = n5.slice(0, i5)), n5;
        }
        function f5(e8) {
          for (var t4 = e8.length < 0 ? 0 : 0 | y5(e8.length), r2 = a4(t4), n5 = 0; n5 < t4; n5 += 1)
            r2[n5] = 255 & e8[n5];
          return r2;
        }
        function p6(e8, t4, r2) {
          if (t4 < 0 || e8.byteLength < t4)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (e8.byteLength < t4 + (r2 || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          var n5;
          return (n5 = void 0 === t4 && void 0 === r2 ? new Uint8Array(e8) : void 0 === r2 ? new Uint8Array(e8, t4) : new Uint8Array(e8, t4, r2)).__proto__ = s3.prototype, n5;
        }
        function m5(e8) {
          if (s3.isBuffer(e8)) {
            var t4 = 0 | y5(e8.length), r2 = a4(t4);
            return 0 === r2.length || e8.copy(r2, 0, 0, t4), r2;
          }
          return void 0 !== e8.length ? "number" != typeof e8.length || Z5(e8.length) ? a4(0) : f5(e8) : "Buffer" === e8.type && Array.isArray(e8.data) ? f5(e8.data) : void 0;
        }
        function y5(e8) {
          if (e8 >= i4)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i4.toString(16) + " bytes");
          return 0 | e8;
        }
        function g5(e8) {
          return +e8 != e8 && (e8 = 0), s3.alloc(+e8);
        }
        function v6(e8, t4) {
          if (s3.isBuffer(e8))
            return e8.length;
          if (ArrayBuffer.isView(e8) || Q5(e8, ArrayBuffer))
            return e8.byteLength;
          if ("string" != typeof e8)
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e8);
          var r2 = e8.length, n5 = arguments.length > 2 && true === arguments[2];
          if (!n5 && 0 === r2)
            return 0;
          for (var i5 = false; ; )
            switch (t4) {
              case "ascii":
              case "latin1":
              case "binary":
                return r2;
              case "utf8":
              case "utf-8":
                return z6(e8).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r2;
              case "hex":
                return r2 >>> 1;
              case "base64":
                return J4(e8).length;
              default:
                if (i5)
                  return n5 ? -1 : z6(e8).length;
                t4 = ("" + t4).toLowerCase(), i5 = true;
            }
        }
        function w5(e8, t4, r2) {
          var n5 = false;
          if ((void 0 === t4 || t4 < 0) && (t4 = 0), t4 > this.length)
            return "";
          if ((void 0 === r2 || r2 > this.length) && (r2 = this.length), r2 <= 0)
            return "";
          if ((r2 >>>= 0) <= (t4 >>>= 0))
            return "";
          for (e8 || (e8 = "utf8"); ; )
            switch (e8) {
              case "hex":
                return M6(this, t4, r2);
              case "utf8":
              case "utf-8":
                return D4(this, t4, r2);
              case "ascii":
                return C5(this, t4, r2);
              case "latin1":
              case "binary":
                return A5(this, t4, r2);
              case "base64":
                return j5(this, t4, r2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return L4(this, t4, r2);
              default:
                if (n5)
                  throw new TypeError("Unknown encoding: " + e8);
                e8 = (e8 + "").toLowerCase(), n5 = true;
            }
        }
        function b7(e8, t4, r2) {
          var n5 = e8[t4];
          e8[t4] = e8[r2], e8[r2] = n5;
        }
        function _5(e8, t4, r2, n5, i5) {
          if (0 === e8.length)
            return -1;
          if ("string" == typeof r2 ? (n5 = r2, r2 = 0) : r2 > 2147483647 ? r2 = 2147483647 : r2 < -2147483648 && (r2 = -2147483648), Z5(r2 = +r2) && (r2 = i5 ? 0 : e8.length - 1), r2 < 0 && (r2 = e8.length + r2), r2 >= e8.length) {
            if (i5)
              return -1;
            r2 = e8.length - 1;
          } else if (r2 < 0) {
            if (!i5)
              return -1;
            r2 = 0;
          }
          if ("string" == typeof t4 && (t4 = s3.from(t4, n5)), s3.isBuffer(t4))
            return 0 === t4.length ? -1 : E4(e8, t4, r2, n5, i5);
          if ("number" == typeof t4)
            return t4 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i5 ? Uint8Array.prototype.indexOf.call(e8, t4, r2) : Uint8Array.prototype.lastIndexOf.call(e8, t4, r2) : E4(e8, [t4], r2, n5, i5);
          throw new TypeError("val must be string, number or Buffer");
        }
        function E4(e8, t4, r2, n5, i5) {
          var o5, a5 = 1, s4 = e8.length, l7 = t4.length;
          if (void 0 !== n5 && ("ucs2" === (n5 = String(n5).toLowerCase()) || "ucs-2" === n5 || "utf16le" === n5 || "utf-16le" === n5)) {
            if (e8.length < 2 || t4.length < 2)
              return -1;
            a5 = 2, s4 /= 2, l7 /= 2, r2 /= 2;
          }
          function u5(e9, t5) {
            return 1 === a5 ? e9[t5] : e9.readUInt16BE(t5 * a5);
          }
          if (i5) {
            var c4 = -1;
            for (o5 = r2; o5 < s4; o5++)
              if (u5(e8, o5) === u5(t4, -1 === c4 ? 0 : o5 - c4)) {
                if (-1 === c4 && (c4 = o5), o5 - c4 + 1 === l7)
                  return c4 * a5;
              } else
                -1 !== c4 && (o5 -= o5 - c4), c4 = -1;
          } else
            for (r2 + l7 > s4 && (r2 = s4 - l7), o5 = r2; o5 >= 0; o5--) {
              for (var d6 = true, h7 = 0; h7 < l7; h7++)
                if (u5(e8, o5 + h7) !== u5(t4, h7)) {
                  d6 = false;
                  break;
                }
              if (d6)
                return o5;
            }
          return -1;
        }
        function T6(e8, t4, r2, n5) {
          r2 = Number(r2) || 0;
          var i5 = e8.length - r2;
          n5 ? (n5 = Number(n5)) > i5 && (n5 = i5) : n5 = i5;
          var o5 = t4.length;
          n5 > o5 / 2 && (n5 = o5 / 2);
          for (var a5 = 0; a5 < n5; ++a5) {
            var s4 = parseInt(t4.substr(2 * a5, 2), 16);
            if (Z5(s4))
              return a5;
            e8[r2 + a5] = s4;
          }
          return a5;
        }
        function x6(e8, t4, r2, n5) {
          return V5(z6(t4, e8.length - r2), e8, r2, n5);
        }
        function I5(e8, t4, r2, n5) {
          return V5(G7(t4), e8, r2, n5);
        }
        function S6(e8, t4, r2, n5) {
          return I5(e8, t4, r2, n5);
        }
        function R5(e8, t4, r2, n5) {
          return V5(J4(t4), e8, r2, n5);
        }
        function k5(e8, t4, r2, n5) {
          return V5(H4(t4, e8.length - r2), e8, r2, n5);
        }
        function j5(e8, r2, n5) {
          return 0 === r2 && n5 === e8.length ? t3.fromByteArray(e8) : t3.fromByteArray(e8.slice(r2, n5));
        }
        function D4(e8, t4, r2) {
          r2 = Math.min(e8.length, r2);
          for (var n5 = [], i5 = t4; i5 < r2; ) {
            var o5, a5, s4, l7, u5 = e8[i5], c4 = null, d6 = u5 > 239 ? 4 : u5 > 223 ? 3 : u5 > 191 ? 2 : 1;
            if (i5 + d6 <= r2)
              switch (d6) {
                case 1:
                  u5 < 128 && (c4 = u5);
                  break;
                case 2:
                  128 == (192 & (o5 = e8[i5 + 1])) && (l7 = (31 & u5) << 6 | 63 & o5) > 127 && (c4 = l7);
                  break;
                case 3:
                  o5 = e8[i5 + 1], a5 = e8[i5 + 2], 128 == (192 & o5) && 128 == (192 & a5) && (l7 = (15 & u5) << 12 | (63 & o5) << 6 | 63 & a5) > 2047 && (l7 < 55296 || l7 > 57343) && (c4 = l7);
                  break;
                case 4:
                  o5 = e8[i5 + 1], a5 = e8[i5 + 2], s4 = e8[i5 + 3], 128 == (192 & o5) && 128 == (192 & a5) && 128 == (192 & s4) && (l7 = (15 & u5) << 18 | (63 & o5) << 12 | (63 & a5) << 6 | 63 & s4) > 65535 && l7 < 1114112 && (c4 = l7);
              }
            null === c4 ? (c4 = 65533, d6 = 1) : c4 > 65535 && (c4 -= 65536, n5.push(c4 >>> 10 & 1023 | 55296), c4 = 56320 | 1023 & c4), n5.push(c4), i5 += d6;
          }
          return O3(n5);
        }
        r.kMaxLength = i4, s3.TYPED_ARRAY_SUPPORT = o4(), s3.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s3.prototype, "parent", { enumerable: true, get: function() {
          if (s3.isBuffer(this))
            return this.buffer;
        } }), Object.defineProperty(s3.prototype, "offset", { enumerable: true, get: function() {
          if (s3.isBuffer(this))
            return this.byteOffset;
        } }), "undefined" != typeof Symbol && null != Symbol.species && s3[Symbol.species] === s3 && Object.defineProperty(s3, Symbol.species, { value: null, configurable: true, enumerable: false, writable: false }), s3.poolSize = 8192, s3.from = function(e8, t4, r2) {
          return l6(e8, t4, r2);
        }, s3.prototype.__proto__ = Uint8Array.prototype, s3.__proto__ = Uint8Array, s3.alloc = function(e8, t4, r2) {
          return c3(e8, t4, r2);
        }, s3.allocUnsafe = function(e8) {
          return d5(e8);
        }, s3.allocUnsafeSlow = function(e8) {
          return d5(e8);
        }, s3.isBuffer = function(e8) {
          return null != e8 && true === e8._isBuffer && e8 !== s3.prototype;
        }, s3.compare = function(e8, t4) {
          if (Q5(e8, Uint8Array) && (e8 = s3.from(e8, e8.offset, e8.byteLength)), Q5(t4, Uint8Array) && (t4 = s3.from(t4, t4.offset, t4.byteLength)), !s3.isBuffer(e8) || !s3.isBuffer(t4))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (e8 === t4)
            return 0;
          for (var r2 = e8.length, n5 = t4.length, i5 = 0, o5 = Math.min(r2, n5); i5 < o5; ++i5)
            if (e8[i5] !== t4[i5]) {
              r2 = e8[i5], n5 = t4[i5];
              break;
            }
          return r2 < n5 ? -1 : n5 < r2 ? 1 : 0;
        }, s3.isEncoding = function(e8) {
          switch (String(e8).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, s3.concat = function(e8, t4) {
          if (!Array.isArray(e8))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e8.length)
            return s3.alloc(0);
          var r2;
          if (void 0 === t4)
            for (t4 = 0, r2 = 0; r2 < e8.length; ++r2)
              t4 += e8[r2].length;
          var n5 = s3.allocUnsafe(t4), i5 = 0;
          for (r2 = 0; r2 < e8.length; ++r2) {
            var o5 = e8[r2];
            if (Q5(o5, Uint8Array) && (o5 = s3.from(o5)), !s3.isBuffer(o5))
              throw new TypeError('"list" argument must be an Array of Buffers');
            o5.copy(n5, i5), i5 += o5.length;
          }
          return n5;
        }, s3.byteLength = v6, s3.prototype._isBuffer = true, s3.prototype.swap16 = function() {
          var e8 = this.length;
          if (e8 % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t4 = 0; t4 < e8; t4 += 2)
            b7(this, t4, t4 + 1);
          return this;
        }, s3.prototype.swap32 = function() {
          var e8 = this.length;
          if (e8 % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t4 = 0; t4 < e8; t4 += 4)
            b7(this, t4, t4 + 3), b7(this, t4 + 1, t4 + 2);
          return this;
        }, s3.prototype.swap64 = function() {
          var e8 = this.length;
          if (e8 % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t4 = 0; t4 < e8; t4 += 8)
            b7(this, t4, t4 + 7), b7(this, t4 + 1, t4 + 6), b7(this, t4 + 2, t4 + 5), b7(this, t4 + 3, t4 + 4);
          return this;
        }, s3.prototype.toString = function() {
          var e8 = this.length;
          return 0 === e8 ? "" : 0 === arguments.length ? D4(this, 0, e8) : w5.apply(this, arguments);
        }, s3.prototype.toLocaleString = s3.prototype.toString, s3.prototype.equals = function(e8) {
          if (!s3.isBuffer(e8))
            throw new TypeError("Argument must be a Buffer");
          return this === e8 || 0 === s3.compare(this, e8);
        }, s3.prototype.inspect = function() {
          var e8 = "", t4 = r.INSPECT_MAX_BYTES;
          return e8 = this.toString("hex", 0, t4).replace(/(.{2})/g, "$1 ").trim(), this.length > t4 && (e8 += " ... "), "<Buffer " + e8 + ">";
        }, s3.prototype.compare = function(e8, t4, r2, n5, i5) {
          if (Q5(e8, Uint8Array) && (e8 = s3.from(e8, e8.offset, e8.byteLength)), !s3.isBuffer(e8))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e8);
          if (void 0 === t4 && (t4 = 0), void 0 === r2 && (r2 = e8 ? e8.length : 0), void 0 === n5 && (n5 = 0), void 0 === i5 && (i5 = this.length), t4 < 0 || r2 > e8.length || n5 < 0 || i5 > this.length)
            throw new RangeError("out of range index");
          if (n5 >= i5 && t4 >= r2)
            return 0;
          if (n5 >= i5)
            return -1;
          if (t4 >= r2)
            return 1;
          if (this === e8)
            return 0;
          for (var o5 = (i5 >>>= 0) - (n5 >>>= 0), a5 = (r2 >>>= 0) - (t4 >>>= 0), l7 = Math.min(o5, a5), u5 = this.slice(n5, i5), c4 = e8.slice(t4, r2), d6 = 0; d6 < l7; ++d6)
            if (u5[d6] !== c4[d6]) {
              o5 = u5[d6], a5 = c4[d6];
              break;
            }
          return o5 < a5 ? -1 : a5 < o5 ? 1 : 0;
        }, s3.prototype.includes = function(e8, t4, r2) {
          return -1 !== this.indexOf(e8, t4, r2);
        }, s3.prototype.indexOf = function(e8, t4, r2) {
          return _5(this, e8, t4, r2, true);
        }, s3.prototype.lastIndexOf = function(e8, t4, r2) {
          return _5(this, e8, t4, r2, false);
        }, s3.prototype.write = function(e8, t4, r2, n5) {
          if (void 0 === t4)
            n5 = "utf8", r2 = this.length, t4 = 0;
          else if (void 0 === r2 && "string" == typeof t4)
            n5 = t4, r2 = this.length, t4 = 0;
          else {
            if (!isFinite(t4))
              throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t4 >>>= 0, isFinite(r2) ? (r2 >>>= 0, void 0 === n5 && (n5 = "utf8")) : (n5 = r2, r2 = void 0);
          }
          var i5 = this.length - t4;
          if ((void 0 === r2 || r2 > i5) && (r2 = i5), e8.length > 0 && (r2 < 0 || t4 < 0) || t4 > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
          n5 || (n5 = "utf8");
          for (var o5 = false; ; )
            switch (n5) {
              case "hex":
                return T6(this, e8, t4, r2);
              case "utf8":
              case "utf-8":
                return x6(this, e8, t4, r2);
              case "ascii":
                return I5(this, e8, t4, r2);
              case "latin1":
              case "binary":
                return S6(this, e8, t4, r2);
              case "base64":
                return R5(this, e8, t4, r2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return k5(this, e8, t4, r2);
              default:
                if (o5)
                  throw new TypeError("Unknown encoding: " + n5);
                n5 = ("" + n5).toLowerCase(), o5 = true;
            }
        }, s3.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        };
        var N10 = 4096;
        function O3(e8) {
          var t4 = e8.length;
          if (t4 <= N10)
            return String.fromCharCode.apply(String, e8);
          for (var r2 = "", n5 = 0; n5 < t4; )
            r2 += String.fromCharCode.apply(String, e8.slice(n5, n5 += N10));
          return r2;
        }
        function C5(e8, t4, r2) {
          var n5 = "";
          r2 = Math.min(e8.length, r2);
          for (var i5 = t4; i5 < r2; ++i5)
            n5 += String.fromCharCode(127 & e8[i5]);
          return n5;
        }
        function A5(e8, t4, r2) {
          var n5 = "";
          r2 = Math.min(e8.length, r2);
          for (var i5 = t4; i5 < r2; ++i5)
            n5 += String.fromCharCode(e8[i5]);
          return n5;
        }
        function M6(e8, t4, r2) {
          var n5 = e8.length;
          (!t4 || t4 < 0) && (t4 = 0), (!r2 || r2 < 0 || r2 > n5) && (r2 = n5);
          for (var i5 = "", o5 = t4; o5 < r2; ++o5)
            i5 += W5(e8[o5]);
          return i5;
        }
        function L4(e8, t4, r2) {
          for (var n5 = e8.slice(t4, r2), i5 = "", o5 = 0; o5 < n5.length; o5 += 2)
            i5 += String.fromCharCode(n5[o5] + 256 * n5[o5 + 1]);
          return i5;
        }
        function P5(e8, t4, r2) {
          if (e8 % 1 != 0 || e8 < 0)
            throw new RangeError("offset is not uint");
          if (e8 + t4 > r2)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function B6(e8, t4, r2, n5, i5, o5) {
          if (!s3.isBuffer(e8))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t4 > i5 || t4 < o5)
            throw new RangeError('"value" argument is out of bounds');
          if (r2 + n5 > e8.length)
            throw new RangeError("Index out of range");
        }
        function $4(e8, t4, r2, n5, i5, o5) {
          if (r2 + n5 > e8.length)
            throw new RangeError("Index out of range");
          if (r2 < 0)
            throw new RangeError("Index out of range");
        }
        function F4(e8, t4, r2, i5, o5) {
          return t4 = +t4, r2 >>>= 0, o5 || $4(e8, t4, r2, 4), n4.write(e8, t4, r2, i5, 23, 4), r2 + 4;
        }
        function U6(e8, t4, r2, i5, o5) {
          return t4 = +t4, r2 >>>= 0, o5 || $4(e8, t4, r2, 8), n4.write(e8, t4, r2, i5, 52, 8), r2 + 8;
        }
        s3.prototype.slice = function(e8, t4) {
          var r2 = this.length;
          (e8 = ~~e8) < 0 ? (e8 += r2) < 0 && (e8 = 0) : e8 > r2 && (e8 = r2), (t4 = void 0 === t4 ? r2 : ~~t4) < 0 ? (t4 += r2) < 0 && (t4 = 0) : t4 > r2 && (t4 = r2), t4 < e8 && (t4 = e8);
          var n5 = this.subarray(e8, t4);
          return n5.__proto__ = s3.prototype, n5;
        }, s3.prototype.readUIntLE = function(e8, t4, r2) {
          e8 >>>= 0, t4 >>>= 0, r2 || P5(e8, t4, this.length);
          for (var n5 = this[e8], i5 = 1, o5 = 0; ++o5 < t4 && (i5 *= 256); )
            n5 += this[e8 + o5] * i5;
          return n5;
        }, s3.prototype.readUIntBE = function(e8, t4, r2) {
          e8 >>>= 0, t4 >>>= 0, r2 || P5(e8, t4, this.length);
          for (var n5 = this[e8 + --t4], i5 = 1; t4 > 0 && (i5 *= 256); )
            n5 += this[e8 + --t4] * i5;
          return n5;
        }, s3.prototype.readUInt8 = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 1, this.length), this[e8];
        }, s3.prototype.readUInt16LE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 2, this.length), this[e8] | this[e8 + 1] << 8;
        }, s3.prototype.readUInt16BE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 2, this.length), this[e8] << 8 | this[e8 + 1];
        }, s3.prototype.readUInt32LE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 4, this.length), (this[e8] | this[e8 + 1] << 8 | this[e8 + 2] << 16) + 16777216 * this[e8 + 3];
        }, s3.prototype.readUInt32BE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 4, this.length), 16777216 * this[e8] + (this[e8 + 1] << 16 | this[e8 + 2] << 8 | this[e8 + 3]);
        }, s3.prototype.readIntLE = function(e8, t4, r2) {
          e8 >>>= 0, t4 >>>= 0, r2 || P5(e8, t4, this.length);
          for (var n5 = this[e8], i5 = 1, o5 = 0; ++o5 < t4 && (i5 *= 256); )
            n5 += this[e8 + o5] * i5;
          return n5 >= (i5 *= 128) && (n5 -= Math.pow(2, 8 * t4)), n5;
        }, s3.prototype.readIntBE = function(e8, t4, r2) {
          e8 >>>= 0, t4 >>>= 0, r2 || P5(e8, t4, this.length);
          for (var n5 = t4, i5 = 1, o5 = this[e8 + --n5]; n5 > 0 && (i5 *= 256); )
            o5 += this[e8 + --n5] * i5;
          return o5 >= (i5 *= 128) && (o5 -= Math.pow(2, 8 * t4)), o5;
        }, s3.prototype.readInt8 = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 1, this.length), 128 & this[e8] ? -1 * (255 - this[e8] + 1) : this[e8];
        }, s3.prototype.readInt16LE = function(e8, t4) {
          e8 >>>= 0, t4 || P5(e8, 2, this.length);
          var r2 = this[e8] | this[e8 + 1] << 8;
          return 32768 & r2 ? 4294901760 | r2 : r2;
        }, s3.prototype.readInt16BE = function(e8, t4) {
          e8 >>>= 0, t4 || P5(e8, 2, this.length);
          var r2 = this[e8 + 1] | this[e8] << 8;
          return 32768 & r2 ? 4294901760 | r2 : r2;
        }, s3.prototype.readInt32LE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 4, this.length), this[e8] | this[e8 + 1] << 8 | this[e8 + 2] << 16 | this[e8 + 3] << 24;
        }, s3.prototype.readInt32BE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 4, this.length), this[e8] << 24 | this[e8 + 1] << 16 | this[e8 + 2] << 8 | this[e8 + 3];
        }, s3.prototype.readFloatLE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 4, this.length), n4.read(this, e8, true, 23, 4);
        }, s3.prototype.readFloatBE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 4, this.length), n4.read(this, e8, false, 23, 4);
        }, s3.prototype.readDoubleLE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 8, this.length), n4.read(this, e8, true, 52, 8);
        }, s3.prototype.readDoubleBE = function(e8, t4) {
          return e8 >>>= 0, t4 || P5(e8, 8, this.length), n4.read(this, e8, false, 52, 8);
        }, s3.prototype.writeUIntLE = function(e8, t4, r2, n5) {
          e8 = +e8, t4 >>>= 0, r2 >>>= 0, n5 || B6(this, e8, t4, r2, Math.pow(2, 8 * r2) - 1, 0);
          var i5 = 1, o5 = 0;
          for (this[t4] = 255 & e8; ++o5 < r2 && (i5 *= 256); )
            this[t4 + o5] = e8 / i5 & 255;
          return t4 + r2;
        }, s3.prototype.writeUIntBE = function(e8, t4, r2, n5) {
          e8 = +e8, t4 >>>= 0, r2 >>>= 0, n5 || B6(this, e8, t4, r2, Math.pow(2, 8 * r2) - 1, 0);
          var i5 = r2 - 1, o5 = 1;
          for (this[t4 + i5] = 255 & e8; --i5 >= 0 && (o5 *= 256); )
            this[t4 + i5] = e8 / o5 & 255;
          return t4 + r2;
        }, s3.prototype.writeUInt8 = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 1, 255, 0), this[t4] = 255 & e8, t4 + 1;
        }, s3.prototype.writeUInt16LE = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 2, 65535, 0), this[t4] = 255 & e8, this[t4 + 1] = e8 >>> 8, t4 + 2;
        }, s3.prototype.writeUInt16BE = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 2, 65535, 0), this[t4] = e8 >>> 8, this[t4 + 1] = 255 & e8, t4 + 2;
        }, s3.prototype.writeUInt32LE = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 4, 4294967295, 0), this[t4 + 3] = e8 >>> 24, this[t4 + 2] = e8 >>> 16, this[t4 + 1] = e8 >>> 8, this[t4] = 255 & e8, t4 + 4;
        }, s3.prototype.writeUInt32BE = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 4, 4294967295, 0), this[t4] = e8 >>> 24, this[t4 + 1] = e8 >>> 16, this[t4 + 2] = e8 >>> 8, this[t4 + 3] = 255 & e8, t4 + 4;
        }, s3.prototype.writeIntLE = function(e8, t4, r2, n5) {
          if (e8 = +e8, t4 >>>= 0, !n5) {
            var i5 = Math.pow(2, 8 * r2 - 1);
            B6(this, e8, t4, r2, i5 - 1, -i5);
          }
          var o5 = 0, a5 = 1, s4 = 0;
          for (this[t4] = 255 & e8; ++o5 < r2 && (a5 *= 256); )
            e8 < 0 && 0 === s4 && 0 !== this[t4 + o5 - 1] && (s4 = 1), this[t4 + o5] = (e8 / a5 >> 0) - s4 & 255;
          return t4 + r2;
        }, s3.prototype.writeIntBE = function(e8, t4, r2, n5) {
          if (e8 = +e8, t4 >>>= 0, !n5) {
            var i5 = Math.pow(2, 8 * r2 - 1);
            B6(this, e8, t4, r2, i5 - 1, -i5);
          }
          var o5 = r2 - 1, a5 = 1, s4 = 0;
          for (this[t4 + o5] = 255 & e8; --o5 >= 0 && (a5 *= 256); )
            e8 < 0 && 0 === s4 && 0 !== this[t4 + o5 + 1] && (s4 = 1), this[t4 + o5] = (e8 / a5 >> 0) - s4 & 255;
          return t4 + r2;
        }, s3.prototype.writeInt8 = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 1, 127, -128), e8 < 0 && (e8 = 255 + e8 + 1), this[t4] = 255 & e8, t4 + 1;
        }, s3.prototype.writeInt16LE = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 2, 32767, -32768), this[t4] = 255 & e8, this[t4 + 1] = e8 >>> 8, t4 + 2;
        }, s3.prototype.writeInt16BE = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 2, 32767, -32768), this[t4] = e8 >>> 8, this[t4 + 1] = 255 & e8, t4 + 2;
        }, s3.prototype.writeInt32LE = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 4, 2147483647, -2147483648), this[t4] = 255 & e8, this[t4 + 1] = e8 >>> 8, this[t4 + 2] = e8 >>> 16, this[t4 + 3] = e8 >>> 24, t4 + 4;
        }, s3.prototype.writeInt32BE = function(e8, t4, r2) {
          return e8 = +e8, t4 >>>= 0, r2 || B6(this, e8, t4, 4, 2147483647, -2147483648), e8 < 0 && (e8 = 4294967295 + e8 + 1), this[t4] = e8 >>> 24, this[t4 + 1] = e8 >>> 16, this[t4 + 2] = e8 >>> 8, this[t4 + 3] = 255 & e8, t4 + 4;
        }, s3.prototype.writeFloatLE = function(e8, t4, r2) {
          return F4(this, e8, t4, true, r2);
        }, s3.prototype.writeFloatBE = function(e8, t4, r2) {
          return F4(this, e8, t4, false, r2);
        }, s3.prototype.writeDoubleLE = function(e8, t4, r2) {
          return U6(this, e8, t4, true, r2);
        }, s3.prototype.writeDoubleBE = function(e8, t4, r2) {
          return U6(this, e8, t4, false, r2);
        }, s3.prototype.copy = function(e8, t4, r2, n5) {
          if (!s3.isBuffer(e8))
            throw new TypeError("argument should be a Buffer");
          if (r2 || (r2 = 0), n5 || 0 === n5 || (n5 = this.length), t4 >= e8.length && (t4 = e8.length), t4 || (t4 = 0), n5 > 0 && n5 < r2 && (n5 = r2), n5 === r2)
            return 0;
          if (0 === e8.length || 0 === this.length)
            return 0;
          if (t4 < 0)
            throw new RangeError("targetStart out of bounds");
          if (r2 < 0 || r2 >= this.length)
            throw new RangeError("Index out of range");
          if (n5 < 0)
            throw new RangeError("sourceEnd out of bounds");
          n5 > this.length && (n5 = this.length), e8.length - t4 < n5 - r2 && (n5 = e8.length - t4 + r2);
          var i5 = n5 - r2;
          if (this === e8 && "function" == typeof Uint8Array.prototype.copyWithin)
            this.copyWithin(t4, r2, n5);
          else if (this === e8 && r2 < t4 && t4 < n5)
            for (var o5 = i5 - 1; o5 >= 0; --o5)
              e8[o5 + t4] = this[o5 + r2];
          else
            Uint8Array.prototype.set.call(e8, this.subarray(r2, n5), t4);
          return i5;
        }, s3.prototype.fill = function(e8, t4, r2, n5) {
          if ("string" == typeof e8) {
            if ("string" == typeof t4 ? (n5 = t4, t4 = 0, r2 = this.length) : "string" == typeof r2 && (n5 = r2, r2 = this.length), void 0 !== n5 && "string" != typeof n5)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n5 && !s3.isEncoding(n5))
              throw new TypeError("Unknown encoding: " + n5);
            if (1 === e8.length) {
              var i5 = e8.charCodeAt(0);
              ("utf8" === n5 && i5 < 128 || "latin1" === n5) && (e8 = i5);
            }
          } else
            "number" == typeof e8 && (e8 &= 255);
          if (t4 < 0 || this.length < t4 || this.length < r2)
            throw new RangeError("Out of range index");
          if (r2 <= t4)
            return this;
          var o5;
          if (t4 >>>= 0, r2 = void 0 === r2 ? this.length : r2 >>> 0, e8 || (e8 = 0), "number" == typeof e8)
            for (o5 = t4; o5 < r2; ++o5)
              this[o5] = e8;
          else {
            var a5 = s3.isBuffer(e8) ? e8 : s3.from(e8, n5), l7 = a5.length;
            if (0 === l7)
              throw new TypeError('The value "' + e8 + '" is invalid for argument "value"');
            for (o5 = 0; o5 < r2 - t4; ++o5)
              this[o5 + t4] = a5[o5 % l7];
          }
          return this;
        };
        var q5 = /[^+/0-9A-Za-z-_]/g;
        function Y5(e8) {
          if ((e8 = (e8 = e8.split("=")[0]).trim().replace(q5, "")).length < 2)
            return "";
          for (; e8.length % 4 != 0; )
            e8 += "=";
          return e8;
        }
        function W5(e8) {
          return e8 < 16 ? "0" + e8.toString(16) : e8.toString(16);
        }
        function z6(e8, t4) {
          var r2;
          t4 = t4 || 1 / 0;
          for (var n5 = e8.length, i5 = null, o5 = [], a5 = 0; a5 < n5; ++a5) {
            if ((r2 = e8.charCodeAt(a5)) > 55295 && r2 < 57344) {
              if (!i5) {
                if (r2 > 56319) {
                  (t4 -= 3) > -1 && o5.push(239, 191, 189);
                  continue;
                }
                if (a5 + 1 === n5) {
                  (t4 -= 3) > -1 && o5.push(239, 191, 189);
                  continue;
                }
                i5 = r2;
                continue;
              }
              if (r2 < 56320) {
                (t4 -= 3) > -1 && o5.push(239, 191, 189), i5 = r2;
                continue;
              }
              r2 = 65536 + (i5 - 55296 << 10 | r2 - 56320);
            } else
              i5 && (t4 -= 3) > -1 && o5.push(239, 191, 189);
            if (i5 = null, r2 < 128) {
              if ((t4 -= 1) < 0)
                break;
              o5.push(r2);
            } else if (r2 < 2048) {
              if ((t4 -= 2) < 0)
                break;
              o5.push(r2 >> 6 | 192, 63 & r2 | 128);
            } else if (r2 < 65536) {
              if ((t4 -= 3) < 0)
                break;
              o5.push(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128);
            } else {
              if (!(r2 < 1114112))
                throw new Error("Invalid code point");
              if ((t4 -= 4) < 0)
                break;
              o5.push(r2 >> 18 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128);
            }
          }
          return o5;
        }
        function G7(e8) {
          for (var t4 = [], r2 = 0; r2 < e8.length; ++r2)
            t4.push(255 & e8.charCodeAt(r2));
          return t4;
        }
        function H4(e8, t4) {
          for (var r2, n5, i5, o5 = [], a5 = 0; a5 < e8.length && !((t4 -= 2) < 0); ++a5)
            n5 = (r2 = e8.charCodeAt(a5)) >> 8, i5 = r2 % 256, o5.push(i5), o5.push(n5);
          return o5;
        }
        function J4(e8) {
          return t3.toByteArray(Y5(e8));
        }
        function V5(e8, t4, r2, n5) {
          for (var i5 = 0; i5 < n5 && !(i5 + r2 >= t4.length || i5 >= e8.length); ++i5)
            t4[i5 + r2] = e8[i5];
          return i5;
        }
        function Q5(e8, t4) {
          return e8 instanceof t4 || null != e8 && null != e8.constructor && null != e8.constructor.name && e8.constructor.name === t4.name;
        }
        function Z5(e8) {
          return e8 != e8;
        }
      }).call(this);
    }).call(this, e7("buffer").Buffer);
  }, { "base64-js": 12, buffer: 15, ieee754: 17 }], 16: [function(e7, t, r) {
    var n4, i4 = "object" == typeof Reflect ? Reflect : null, o4 = i4 && "function" == typeof i4.apply ? i4.apply : function(e8, t2, r2) {
      return Function.prototype.apply.call(e8, t2, r2);
    };
    function a4(e8) {
      console && console.warn && console.warn(e8);
    }
    n4 = i4 && "function" == typeof i4.ownKeys ? i4.ownKeys : Object.getOwnPropertySymbols ? function(e8) {
      return Object.getOwnPropertyNames(e8).concat(Object.getOwnPropertySymbols(e8));
    } : function(e8) {
      return Object.getOwnPropertyNames(e8);
    };
    var s3 = Number.isNaN || function(e8) {
      return e8 != e8;
    };
    function l6() {
      l6.init.call(this);
    }
    t.exports = l6, t.exports.once = b7, l6.EventEmitter = l6, l6.prototype._events = void 0, l6.prototype._eventsCount = 0, l6.prototype._maxListeners = void 0;
    var u4 = 10;
    function c3(e8) {
      if ("function" != typeof e8)
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e8);
    }
    function d5(e8) {
      return void 0 === e8._maxListeners ? l6.defaultMaxListeners : e8._maxListeners;
    }
    function h6(e8, t2, r2, n5) {
      var i5, o5, s4;
      if (c3(r2), void 0 === (o5 = e8._events) ? (o5 = e8._events = /* @__PURE__ */ Object.create(null), e8._eventsCount = 0) : (void 0 !== o5.newListener && (e8.emit("newListener", t2, r2.listener ? r2.listener : r2), o5 = e8._events), s4 = o5[t2]), void 0 === s4)
        s4 = o5[t2] = r2, ++e8._eventsCount;
      else if ("function" == typeof s4 ? s4 = o5[t2] = n5 ? [r2, s4] : [s4, r2] : n5 ? s4.unshift(r2) : s4.push(r2), (i5 = d5(e8)) > 0 && s4.length > i5 && !s4.warned) {
        s4.warned = true;
        var l7 = new Error("Possible EventEmitter memory leak detected. " + s4.length + " " + String(t2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        l7.name = "MaxListenersExceededWarning", l7.emitter = e8, l7.type = t2, l7.count = s4.length, a4(l7);
      }
      return e8;
    }
    function f5() {
      if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function p6(e8, t2, r2) {
      var n5 = { fired: false, wrapFn: void 0, target: e8, type: t2, listener: r2 }, i5 = f5.bind(n5);
      return i5.listener = r2, n5.wrapFn = i5, i5;
    }
    function m5(e8, t2, r2) {
      var n5 = e8._events;
      if (void 0 === n5)
        return [];
      var i5 = n5[t2];
      return void 0 === i5 ? [] : "function" == typeof i5 ? r2 ? [i5.listener || i5] : [i5] : r2 ? w5(i5) : g5(i5, i5.length);
    }
    function y5(e8) {
      var t2 = this._events;
      if (void 0 !== t2) {
        var r2 = t2[e8];
        if ("function" == typeof r2)
          return 1;
        if (void 0 !== r2)
          return r2.length;
      }
      return 0;
    }
    function g5(e8, t2) {
      for (var r2 = new Array(t2), n5 = 0; n5 < t2; ++n5)
        r2[n5] = e8[n5];
      return r2;
    }
    function v6(e8, t2) {
      for (; t2 + 1 < e8.length; t2++)
        e8[t2] = e8[t2 + 1];
      e8.pop();
    }
    function w5(e8) {
      for (var t2 = new Array(e8.length), r2 = 0; r2 < t2.length; ++r2)
        t2[r2] = e8[r2].listener || e8[r2];
      return t2;
    }
    function b7(e8, t2) {
      return new Promise(function(r2, n5) {
        function i5(r3) {
          e8.removeListener(t2, o5), n5(r3);
        }
        function o5() {
          "function" == typeof e8.removeListener && e8.removeListener("error", i5), r2([].slice.call(arguments));
        }
        E4(e8, t2, o5, { once: true }), "error" !== t2 && _5(e8, i5, { once: true });
      });
    }
    function _5(e8, t2, r2) {
      "function" == typeof e8.on && E4(e8, "error", t2, r2);
    }
    function E4(e8, t2, r2, n5) {
      if ("function" == typeof e8.on)
        n5.once ? e8.once(t2, r2) : e8.on(t2, r2);
      else {
        if ("function" != typeof e8.addEventListener)
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e8);
        e8.addEventListener(t2, function i5(o5) {
          n5.once && e8.removeEventListener(t2, i5), r2(o5);
        });
      }
    }
    Object.defineProperty(l6, "defaultMaxListeners", { enumerable: true, get: function() {
      return u4;
    }, set: function(e8) {
      if ("number" != typeof e8 || e8 < 0 || s3(e8))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e8 + ".");
      u4 = e8;
    } }), l6.init = function() {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, l6.prototype.setMaxListeners = function(e8) {
      if ("number" != typeof e8 || e8 < 0 || s3(e8))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e8 + ".");
      return this._maxListeners = e8, this;
    }, l6.prototype.getMaxListeners = function() {
      return d5(this);
    }, l6.prototype.emit = function(e8) {
      for (var t2 = [], r2 = 1; r2 < arguments.length; r2++)
        t2.push(arguments[r2]);
      var n5 = "error" === e8, i5 = this._events;
      if (void 0 !== i5)
        n5 = n5 && void 0 === i5.error;
      else if (!n5)
        return false;
      if (n5) {
        var a5;
        if (t2.length > 0 && (a5 = t2[0]), a5 instanceof Error)
          throw a5;
        var s4 = new Error("Unhandled error." + (a5 ? " (" + a5.message + ")" : ""));
        throw s4.context = a5, s4;
      }
      var l7 = i5[e8];
      if (void 0 === l7)
        return false;
      if ("function" == typeof l7)
        o4(l7, this, t2);
      else {
        var u5 = l7.length, c4 = g5(l7, u5);
        for (r2 = 0; r2 < u5; ++r2)
          o4(c4[r2], this, t2);
      }
      return true;
    }, l6.prototype.addListener = function(e8, t2) {
      return h6(this, e8, t2, false);
    }, l6.prototype.on = l6.prototype.addListener, l6.prototype.prependListener = function(e8, t2) {
      return h6(this, e8, t2, true);
    }, l6.prototype.once = function(e8, t2) {
      return c3(t2), this.on(e8, p6(this, e8, t2)), this;
    }, l6.prototype.prependOnceListener = function(e8, t2) {
      return c3(t2), this.prependListener(e8, p6(this, e8, t2)), this;
    }, l6.prototype.removeListener = function(e8, t2) {
      var r2, n5, i5, o5, a5;
      if (c3(t2), void 0 === (n5 = this._events))
        return this;
      if (void 0 === (r2 = n5[e8]))
        return this;
      if (r2 === t2 || r2.listener === t2)
        0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete n5[e8], n5.removeListener && this.emit("removeListener", e8, r2.listener || t2));
      else if ("function" != typeof r2) {
        for (i5 = -1, o5 = r2.length - 1; o5 >= 0; o5--)
          if (r2[o5] === t2 || r2[o5].listener === t2) {
            a5 = r2[o5].listener, i5 = o5;
            break;
          }
        if (i5 < 0)
          return this;
        0 === i5 ? r2.shift() : v6(r2, i5), 1 === r2.length && (n5[e8] = r2[0]), void 0 !== n5.removeListener && this.emit("removeListener", e8, a5 || t2);
      }
      return this;
    }, l6.prototype.off = l6.prototype.removeListener, l6.prototype.removeAllListeners = function(e8) {
      var t2, r2, n5;
      if (void 0 === (r2 = this._events))
        return this;
      if (void 0 === r2.removeListener)
        return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== r2[e8] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete r2[e8]), this;
      if (0 === arguments.length) {
        var i5, o5 = Object.keys(r2);
        for (n5 = 0; n5 < o5.length; ++n5)
          "removeListener" !== (i5 = o5[n5]) && this.removeAllListeners(i5);
        return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
      }
      if ("function" == typeof (t2 = r2[e8]))
        this.removeListener(e8, t2);
      else if (void 0 !== t2)
        for (n5 = t2.length - 1; n5 >= 0; n5--)
          this.removeListener(e8, t2[n5]);
      return this;
    }, l6.prototype.listeners = function(e8) {
      return m5(this, e8, true);
    }, l6.prototype.rawListeners = function(e8) {
      return m5(this, e8, false);
    }, l6.listenerCount = function(e8, t2) {
      return "function" == typeof e8.listenerCount ? e8.listenerCount(t2) : y5.call(e8, t2);
    }, l6.prototype.listenerCount = y5, l6.prototype.eventNames = function() {
      return this._eventsCount > 0 ? n4(this._events) : [];
    };
  }, {}], 17: [function(e7, t, r) {
    r.read = function(e8, t2, r2, n4, i4) {
      var o4, a4, s3 = 8 * i4 - n4 - 1, l6 = (1 << s3) - 1, u4 = l6 >> 1, c3 = -7, d5 = r2 ? i4 - 1 : 0, h6 = r2 ? -1 : 1, f5 = e8[t2 + d5];
      for (d5 += h6, o4 = f5 & (1 << -c3) - 1, f5 >>= -c3, c3 += s3; c3 > 0; o4 = 256 * o4 + e8[t2 + d5], d5 += h6, c3 -= 8)
        ;
      for (a4 = o4 & (1 << -c3) - 1, o4 >>= -c3, c3 += n4; c3 > 0; a4 = 256 * a4 + e8[t2 + d5], d5 += h6, c3 -= 8)
        ;
      if (0 === o4)
        o4 = 1 - u4;
      else {
        if (o4 === l6)
          return a4 ? NaN : 1 / 0 * (f5 ? -1 : 1);
        a4 += Math.pow(2, n4), o4 -= u4;
      }
      return (f5 ? -1 : 1) * a4 * Math.pow(2, o4 - n4);
    }, r.write = function(e8, t2, r2, n4, i4, o4) {
      var a4, s3, l6, u4 = 8 * o4 - i4 - 1, c3 = (1 << u4) - 1, d5 = c3 >> 1, h6 = 23 === i4 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f5 = n4 ? 0 : o4 - 1, p6 = n4 ? 1 : -1, m5 = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
      for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (s3 = isNaN(t2) ? 1 : 0, a4 = c3) : (a4 = Math.floor(Math.log(t2) / Math.LN2), t2 * (l6 = Math.pow(2, -a4)) < 1 && (a4--, l6 *= 2), (t2 += a4 + d5 >= 1 ? h6 / l6 : h6 * Math.pow(2, 1 - d5)) * l6 >= 2 && (a4++, l6 /= 2), a4 + d5 >= c3 ? (s3 = 0, a4 = c3) : a4 + d5 >= 1 ? (s3 = (t2 * l6 - 1) * Math.pow(2, i4), a4 += d5) : (s3 = t2 * Math.pow(2, d5 - 1) * Math.pow(2, i4), a4 = 0)); i4 >= 8; e8[r2 + f5] = 255 & s3, f5 += p6, s3 /= 256, i4 -= 8)
        ;
      for (a4 = a4 << i4 | s3, u4 += i4; u4 > 0; e8[r2 + f5] = 255 & a4, f5 += p6, a4 /= 256, u4 -= 8)
        ;
      e8[r2 + f5 - p6] |= 128 * m5;
    };
  }, {}], 18: [function(e7, t, r) {
    var n4, i4, o4 = t.exports = {};
    function a4() {
      throw new Error("setTimeout has not been defined");
    }
    function s3() {
      throw new Error("clearTimeout has not been defined");
    }
    function l6(e8) {
      if (n4 === setTimeout)
        return setTimeout(e8, 0);
      if ((n4 === a4 || !n4) && setTimeout)
        return n4 = setTimeout, setTimeout(e8, 0);
      try {
        return n4(e8, 0);
      } catch (t2) {
        try {
          return n4.call(null, e8, 0);
        } catch (t3) {
          return n4.call(this, e8, 0);
        }
      }
    }
    function u4(e8) {
      if (i4 === clearTimeout)
        return clearTimeout(e8);
      if ((i4 === s3 || !i4) && clearTimeout)
        return i4 = clearTimeout, clearTimeout(e8);
      try {
        return i4(e8);
      } catch (t2) {
        try {
          return i4.call(null, e8);
        } catch (t3) {
          return i4.call(this, e8);
        }
      }
    }
    !function() {
      try {
        n4 = "function" == typeof setTimeout ? setTimeout : a4;
      } catch (e8) {
        n4 = a4;
      }
      try {
        i4 = "function" == typeof clearTimeout ? clearTimeout : s3;
      } catch (e8) {
        i4 = s3;
      }
    }();
    var c3, d5 = [], h6 = false, f5 = -1;
    function p6() {
      h6 && c3 && (h6 = false, c3.length ? d5 = c3.concat(d5) : f5 = -1, d5.length && m5());
    }
    function m5() {
      if (!h6) {
        var e8 = l6(p6);
        h6 = true;
        for (var t2 = d5.length; t2; ) {
          for (c3 = d5, d5 = []; ++f5 < t2; )
            c3 && c3[f5].run();
          f5 = -1, t2 = d5.length;
        }
        c3 = null, h6 = false, u4(e8);
      }
    }
    function y5(e8, t2) {
      this.fun = e8, this.array = t2;
    }
    function g5() {
    }
    o4.nextTick = function(e8) {
      var t2 = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r2 = 1; r2 < arguments.length; r2++)
          t2[r2 - 1] = arguments[r2];
      d5.push(new y5(e8, t2)), 1 !== d5.length || h6 || l6(m5);
    }, y5.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, o4.title = "browser", o4.browser = true, o4.env = {}, o4.argv = [], o4.version = "", o4.versions = {}, o4.on = g5, o4.addListener = g5, o4.once = g5, o4.off = g5, o4.removeListener = g5, o4.removeAllListeners = g5, o4.emit = g5, o4.prependListener = g5, o4.prependOnceListener = g5, o4.listeners = function(e8) {
      return [];
    }, o4.binding = function(e8) {
      throw new Error("process.binding is not supported");
    }, o4.cwd = function() {
      return "/";
    }, o4.chdir = function(e8) {
      throw new Error("process.chdir is not supported");
    }, o4.umask = function() {
      return 0;
    };
  }, {}], 19: [function(e7, t, r) {
    (function(e8) {
      (function() {
        let r2;
        t.exports = "function" == typeof queueMicrotask ? queueMicrotask.bind("undefined" != typeof window ? window : e8) : (e9) => (r2 || (r2 = Promise.resolve())).then(e9).catch((e10) => setTimeout(() => {
          throw e10;
        }, 0));
      }).call(this);
    }).call(this, void 0 !== s2 ? s2 : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {}], 20: [function(e7, t, r) {
    const { AbortError: n4, codes: i4 } = e7("../../ours/errors"), { isNodeStream: o4, isWebStream: a4, kControllerErrorFunction: s3 } = e7("./utils"), l6 = e7("./end-of-stream"), { ERR_INVALID_ARG_TYPE: u4 } = i4, c3 = (e8, t2) => {
      if ("object" != typeof e8 || !("aborted" in e8))
        throw new u4(t2, "AbortSignal", e8);
    };
    t.exports.addAbortSignal = function(e8, r2) {
      if (c3(e8, "signal"), !o4(r2) && !a4(r2))
        throw new u4("stream", ["ReadableStream", "WritableStream", "Stream"], r2);
      return t.exports.addAbortSignalNoValidate(e8, r2);
    }, t.exports.addAbortSignalNoValidate = function(e8, t2) {
      if ("object" != typeof e8 || !("aborted" in e8))
        return t2;
      const r2 = o4(t2) ? () => {
        t2.destroy(new n4(void 0, { cause: e8.reason }));
      } : () => {
        t2[s3](new n4(void 0, { cause: e8.reason }));
      };
      return e8.aborted ? r2() : (e8.addEventListener("abort", r2), l6(t2, () => e8.removeEventListener("abort", r2))), t2;
    };
  }, { "../../ours/errors": 39, "./end-of-stream": 26, "./utils": 35 }], 21: [function(e7, t, r) {
    const { StringPrototypeSlice: n4, SymbolIterator: i4, TypedArrayPrototypeSet: o4, Uint8Array: a4 } = e7("../../ours/primordials"), { Buffer: s3 } = e7("buffer"), { inspect: l6 } = e7("../../ours/util");
    t.exports = class {
      constructor() {
        this.head = null, this.tail = null, this.length = 0;
      }
      push(e8) {
        const t2 = { data: e8, next: null };
        this.length > 0 ? this.tail.next = t2 : this.head = t2, this.tail = t2, ++this.length;
      }
      unshift(e8) {
        const t2 = { data: e8, next: this.head };
        0 === this.length && (this.tail = t2), this.head = t2, ++this.length;
      }
      shift() {
        if (0 === this.length)
          return;
        const e8 = this.head.data;
        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e8;
      }
      clear() {
        this.head = this.tail = null, this.length = 0;
      }
      join(e8) {
        if (0 === this.length)
          return "";
        let t2 = this.head, r2 = "" + t2.data;
        for (; null !== (t2 = t2.next); )
          r2 += e8 + t2.data;
        return r2;
      }
      concat(e8) {
        if (0 === this.length)
          return s3.alloc(0);
        const t2 = s3.allocUnsafe(e8 >>> 0);
        let r2 = this.head, n5 = 0;
        for (; r2; )
          o4(t2, r2.data, n5), n5 += r2.data.length, r2 = r2.next;
        return t2;
      }
      consume(e8, t2) {
        const r2 = this.head.data;
        if (e8 < r2.length) {
          const t3 = r2.slice(0, e8);
          return this.head.data = r2.slice(e8), t3;
        }
        return e8 === r2.length ? this.shift() : t2 ? this._getString(e8) : this._getBuffer(e8);
      }
      first() {
        return this.head.data;
      }
      *[i4]() {
        for (let e8 = this.head; e8; e8 = e8.next)
          yield e8.data;
      }
      _getString(e8) {
        let t2 = "", r2 = this.head, i5 = 0;
        do {
          const o5 = r2.data;
          if (!(e8 > o5.length)) {
            e8 === o5.length ? (t2 += o5, ++i5, r2.next ? this.head = r2.next : this.head = this.tail = null) : (t2 += n4(o5, 0, e8), this.head = r2, r2.data = n4(o5, e8));
            break;
          }
          t2 += o5, e8 -= o5.length, ++i5;
        } while (null !== (r2 = r2.next));
        return this.length -= i5, t2;
      }
      _getBuffer(e8) {
        const t2 = s3.allocUnsafe(e8), r2 = e8;
        let n5 = this.head, i5 = 0;
        do {
          const s4 = n5.data;
          if (!(e8 > s4.length)) {
            e8 === s4.length ? (o4(t2, s4, r2 - e8), ++i5, n5.next ? this.head = n5.next : this.head = this.tail = null) : (o4(t2, new a4(s4.buffer, s4.byteOffset, e8), r2 - e8), this.head = n5, n5.data = s4.slice(e8));
            break;
          }
          o4(t2, s4, r2 - e8), e8 -= s4.length, ++i5;
        } while (null !== (n5 = n5.next));
        return this.length -= i5, t2;
      }
      [Symbol.for("nodejs.util.inspect.custom")](e8, t2) {
        return l6(this, { ...t2, depth: 0, customInspect: false });
      }
    };
  }, { "../../ours/primordials": 40, "../../ours/util": 41, buffer: 15 }], 22: [function(e7, t, r) {
    const { pipeline: n4 } = e7("./pipeline"), i4 = e7("./duplex"), { destroyer: o4 } = e7("./destroy"), { isNodeStream: a4, isReadable: s3, isWritable: l6, isWebStream: u4, isTransformStream: c3, isWritableStream: d5, isReadableStream: h6 } = e7("./utils"), { AbortError: f5, codes: { ERR_INVALID_ARG_VALUE: p6, ERR_MISSING_ARGS: m5 } } = e7("../../ours/errors"), y5 = e7("./end-of-stream");
    t.exports = function(...e8) {
      if (0 === e8.length)
        throw new m5("streams");
      if (1 === e8.length)
        return i4.from(e8[0]);
      const t2 = [...e8];
      if ("function" == typeof e8[0] && (e8[0] = i4.from(e8[0])), "function" == typeof e8[e8.length - 1]) {
        const t3 = e8.length - 1;
        e8[t3] = i4.from(e8[t3]);
      }
      for (let r3 = 0; r3 < e8.length; ++r3)
        if (a4(e8[r3]) || u4(e8[r3])) {
          if (r3 < e8.length - 1 && !(s3(e8[r3]) || h6(e8[r3]) || c3(e8[r3])))
            throw new p6(`streams[${r3}]`, t2[r3], "must be readable");
          if (r3 > 0 && !(l6(e8[r3]) || d5(e8[r3]) || c3(e8[r3])))
            throw new p6(`streams[${r3}]`, t2[r3], "must be writable");
        }
      let r2, g5, v6, w5, b7;
      function _5(e9) {
        const t3 = w5;
        w5 = null, t3 ? t3(e9) : e9 ? b7.destroy(e9) : I5 || x6 || b7.destroy();
      }
      const E4 = e8[0], T6 = n4(e8, _5), x6 = !!(l6(E4) || d5(E4) || c3(E4)), I5 = !!(s3(T6) || h6(T6) || c3(T6));
      if (b7 = new i4({ writableObjectMode: !(null == E4 || !E4.writableObjectMode), readableObjectMode: !(null == T6 || !T6.writableObjectMode), writable: x6, readable: I5 }), x6) {
        if (a4(E4))
          b7._write = function(e10, t3, n5) {
            E4.write(e10, t3) ? n5() : r2 = n5;
          }, b7._final = function(e10) {
            E4.end(), g5 = e10;
          }, E4.on("drain", function() {
            if (r2) {
              const e10 = r2;
              r2 = null, e10();
            }
          });
        else if (u4(E4)) {
          const e10 = (c3(E4) ? E4.writable : E4).getWriter();
          b7._write = async function(t3, r3, n5) {
            try {
              await e10.ready, e10.write(t3).catch(() => {
              }), n5();
            } catch (e11) {
              n5(e11);
            }
          }, b7._final = async function(t3) {
            try {
              await e10.ready, e10.close().catch(() => {
              }), g5 = t3;
            } catch (e11) {
              t3(e11);
            }
          };
        }
        const e9 = c3(T6) ? T6.readable : T6;
        y5(e9, () => {
          if (g5) {
            const e10 = g5;
            g5 = null, e10();
          }
        });
      }
      if (I5) {
        if (a4(T6))
          T6.on("readable", function() {
            if (v6) {
              const e9 = v6;
              v6 = null, e9();
            }
          }), T6.on("end", function() {
            b7.push(null);
          }), b7._read = function() {
            for (; ; ) {
              const e9 = T6.read();
              if (null === e9)
                return void (v6 = b7._read);
              if (!b7.push(e9))
                return;
            }
          };
        else if (u4(T6)) {
          const e9 = (c3(T6) ? T6.readable : T6).getReader();
          b7._read = async function() {
            for (; ; )
              try {
                const { value: t3, done: r3 } = await e9.read();
                if (!b7.push(t3))
                  return;
                if (r3)
                  return void b7.push(null);
              } catch {
                return;
              }
          };
        }
      }
      return b7._destroy = function(e9, t3) {
        e9 || null === w5 || (e9 = new f5()), v6 = null, r2 = null, g5 = null, null === w5 ? t3(e9) : (w5 = t3, a4(T6) && o4(T6, e9));
      }, b7;
    };
  }, { "../../ours/errors": 39, "./destroy": 23, "./duplex": 24, "./end-of-stream": 26, "./pipeline": 31, "./utils": 35 }], 23: [function(e7, t, r) {
    const n4 = e7("process/"), { aggregateTwoErrors: i4, codes: { ERR_MULTIPLE_CALLBACK: o4 }, AbortError: a4 } = e7("../../ours/errors"), { Symbol: s3 } = e7("../../ours/primordials"), { kDestroyed: l6, isDestroyed: u4, isFinished: c3, isServerRequest: d5 } = e7("./utils"), h6 = s3("kDestroy"), f5 = s3("kConstruct");
    function p6(e8, t2, r2) {
      e8 && (t2 && !t2.errored && (t2.errored = e8), r2 && !r2.errored && (r2.errored = e8));
    }
    function m5(e8, t2) {
      const r2 = this._readableState, n5 = this._writableState, o5 = n5 || r2;
      return null != n5 && n5.destroyed || null != r2 && r2.destroyed ? ("function" == typeof t2 && t2(), this) : (p6(e8, n5, r2), n5 && (n5.destroyed = true), r2 && (r2.destroyed = true), o5.constructed ? y5(this, e8, t2) : this.once(h6, function(r3) {
        y5(this, i4(r3, e8), t2);
      }), this);
    }
    function y5(e8, t2, r2) {
      let i5 = false;
      function o5(t3) {
        if (i5)
          return;
        i5 = true;
        const o6 = e8._readableState, a5 = e8._writableState;
        p6(t3, a5, o6), a5 && (a5.closed = true), o6 && (o6.closed = true), "function" == typeof r2 && r2(t3), t3 ? n4.nextTick(g5, e8, t3) : n4.nextTick(v6, e8);
      }
      try {
        e8._destroy(t2 || null, o5);
      } catch (t3) {
        o5(t3);
      }
    }
    function g5(e8, t2) {
      w5(e8, t2), v6(e8);
    }
    function v6(e8) {
      const t2 = e8._readableState, r2 = e8._writableState;
      r2 && (r2.closeEmitted = true), t2 && (t2.closeEmitted = true), (null != r2 && r2.emitClose || null != t2 && t2.emitClose) && e8.emit("close");
    }
    function w5(e8, t2) {
      const r2 = e8._readableState, n5 = e8._writableState;
      null != n5 && n5.errorEmitted || null != r2 && r2.errorEmitted || (n5 && (n5.errorEmitted = true), r2 && (r2.errorEmitted = true), e8.emit("error", t2));
    }
    function b7() {
      const e8 = this._readableState, t2 = this._writableState;
      e8 && (e8.constructed = true, e8.closed = false, e8.closeEmitted = false, e8.destroyed = false, e8.errored = null, e8.errorEmitted = false, e8.reading = false, e8.ended = false === e8.readable, e8.endEmitted = false === e8.readable), t2 && (t2.constructed = true, t2.destroyed = false, t2.closed = false, t2.closeEmitted = false, t2.errored = null, t2.errorEmitted = false, t2.finalCalled = false, t2.prefinished = false, t2.ended = false === t2.writable, t2.ending = false === t2.writable, t2.finished = false === t2.writable);
    }
    function _5(e8, t2, r2) {
      const i5 = e8._readableState, o5 = e8._writableState;
      if (null != o5 && o5.destroyed || null != i5 && i5.destroyed)
        return this;
      null != i5 && i5.autoDestroy || null != o5 && o5.autoDestroy ? e8.destroy(t2) : t2 && (o5 && !o5.errored && (o5.errored = t2), i5 && !i5.errored && (i5.errored = t2), r2 ? n4.nextTick(w5, e8, t2) : w5(e8, t2));
    }
    function E4(e8, t2) {
      if ("function" != typeof e8._construct)
        return;
      const r2 = e8._readableState, i5 = e8._writableState;
      r2 && (r2.constructed = false), i5 && (i5.constructed = false), e8.once(f5, t2), e8.listenerCount(f5) > 1 || n4.nextTick(T6, e8);
    }
    function T6(e8) {
      let t2 = false;
      function r2(r3) {
        if (t2)
          return void _5(e8, null != r3 ? r3 : new o4());
        t2 = true;
        const i5 = e8._readableState, a5 = e8._writableState, s4 = a5 || i5;
        i5 && (i5.constructed = true), a5 && (a5.constructed = true), s4.destroyed ? e8.emit(h6, r3) : r3 ? _5(e8, r3, true) : n4.nextTick(x6, e8);
      }
      try {
        e8._construct((e9) => {
          n4.nextTick(r2, e9);
        });
      } catch (e9) {
        n4.nextTick(r2, e9);
      }
    }
    function x6(e8) {
      e8.emit(f5);
    }
    function I5(e8) {
      return (null == e8 ? void 0 : e8.setHeader) && "function" == typeof e8.abort;
    }
    function S6(e8) {
      e8.emit("close");
    }
    function R5(e8, t2) {
      e8.emit("error", t2), n4.nextTick(S6, e8);
    }
    function k5(e8, t2) {
      e8 && !u4(e8) && (t2 || c3(e8) || (t2 = new a4()), d5(e8) ? (e8.socket = null, e8.destroy(t2)) : I5(e8) ? e8.abort() : I5(e8.req) ? e8.req.abort() : "function" == typeof e8.destroy ? e8.destroy(t2) : "function" == typeof e8.close ? e8.close() : t2 ? n4.nextTick(R5, e8, t2) : n4.nextTick(S6, e8), e8.destroyed || (e8[l6] = true));
    }
    t.exports = { construct: E4, destroyer: k5, destroy: m5, undestroy: b7, errorOrDestroy: _5 };
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, "./utils": 35, "process/": 18 }], 24: [function(e7, t, r) {
    const { ObjectDefineProperties: n4, ObjectGetOwnPropertyDescriptor: i4, ObjectKeys: o4, ObjectSetPrototypeOf: a4 } = e7("../../ours/primordials");
    t.exports = u4;
    const s3 = e7("./readable"), l6 = e7("./writable");
    a4(u4.prototype, s3.prototype), a4(u4, s3);
    {
      const e8 = o4(l6.prototype);
      for (let t2 = 0; t2 < e8.length; t2++) {
        const r2 = e8[t2];
        u4.prototype[r2] || (u4.prototype[r2] = l6.prototype[r2]);
      }
    }
    function u4(e8) {
      if (!(this instanceof u4))
        return new u4(e8);
      s3.call(this, e8), l6.call(this, e8), e8 ? (this.allowHalfOpen = false !== e8.allowHalfOpen, false === e8.readable && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), false === e8.writable && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true)) : this.allowHalfOpen = true;
    }
    let c3, d5;
    function h6() {
      return void 0 === c3 && (c3 = {}), c3;
    }
    n4(u4.prototype, { writable: { __proto__: null, ...i4(l6.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...i4(l6.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...i4(l6.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...i4(l6.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...i4(l6.prototype, "writableLength") }, writableFinished: { __proto__: null, ...i4(l6.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...i4(l6.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...i4(l6.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...i4(l6.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
      return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
    }, set(e8) {
      this._readableState && this._writableState && (this._readableState.destroyed = e8, this._writableState.destroyed = e8);
    } } }), u4.fromWeb = function(e8, t2) {
      return h6().newStreamDuplexFromReadableWritablePair(e8, t2);
    }, u4.toWeb = function(e8) {
      return h6().newReadableWritablePairFromDuplex(e8);
    }, u4.from = function(t2) {
      return d5 || (d5 = e7("./duplexify")), d5(t2, "body");
    };
  }, { "../../ours/primordials": 40, "./duplexify": 25, "./readable": 32, "./writable": 36 }], 25: [function(e7, t, r) {
    const n4 = e7("process/"), i4 = e7("buffer"), { isReadable: o4, isWritable: a4, isIterable: s3, isNodeStream: l6, isReadableNodeStream: u4, isWritableNodeStream: c3, isDuplexNodeStream: d5 } = e7("./utils"), h6 = e7("./end-of-stream"), { AbortError: f5, codes: { ERR_INVALID_ARG_TYPE: p6, ERR_INVALID_RETURN_VALUE: m5 } } = e7("../../ours/errors"), { destroyer: y5 } = e7("./destroy"), g5 = e7("./duplex"), v6 = e7("./readable"), { createDeferredPromise: w5 } = e7("../../ours/util"), b7 = e7("./from"), _5 = globalThis.Blob || i4.Blob, E4 = void 0 !== _5 ? function(e8) {
      return e8 instanceof _5;
    } : function(e8) {
      return false;
    }, T6 = globalThis.AbortController || e7("abort-controller").AbortController, { FunctionPrototypeCall: x6 } = e7("../../ours/primordials");
    class I5 extends g5 {
      constructor(e8) {
        super(e8), false === (null == e8 ? void 0 : e8.readable) && (this._readableState.readable = false, this._readableState.ended = true, this._readableState.endEmitted = true), false === (null == e8 ? void 0 : e8.writable) && (this._writableState.writable = false, this._writableState.ending = true, this._writableState.ended = true, this._writableState.finished = true);
      }
    }
    function S6(e8) {
      let { promise: t2, resolve: r2 } = w5();
      const i5 = new T6(), o5 = i5.signal;
      return { value: e8(async function* () {
        for (; ; ) {
          const e9 = t2;
          t2 = null;
          const { chunk: i6, done: a5, cb: s4 } = await e9;
          if (n4.nextTick(s4), a5)
            return;
          if (o5.aborted)
            throw new f5(void 0, { cause: o5.reason });
          ({ promise: t2, resolve: r2 } = w5()), yield i6;
        }
      }(), { signal: o5 }), write(e9, t3, n5) {
        const i6 = r2;
        r2 = null, i6({ chunk: e9, done: false, cb: n5 });
      }, final(e9) {
        const t3 = r2;
        r2 = null, t3({ done: true, cb: e9 });
      }, destroy(e9, t3) {
        i5.abort(), t3(e9);
      } };
    }
    function R5(e8) {
      const t2 = e8.readable && "function" != typeof e8.readable.read ? v6.wrap(e8.readable) : e8.readable, r2 = e8.writable;
      let n5, i5, s4, l7, u5, c4 = !!o4(t2), d6 = !!a4(r2);
      function p7(e9) {
        const t3 = l7;
        l7 = null, t3 ? t3(e9) : e9 && u5.destroy(e9);
      }
      return u5 = new I5({ readableObjectMode: !(null == t2 || !t2.readableObjectMode), writableObjectMode: !(null == r2 || !r2.writableObjectMode), readable: c4, writable: d6 }), d6 && (h6(r2, (e9) => {
        d6 = false, e9 && y5(t2, e9), p7(e9);
      }), u5._write = function(e9, t3, i6) {
        r2.write(e9, t3) ? i6() : n5 = i6;
      }, u5._final = function(e9) {
        r2.end(), i5 = e9;
      }, r2.on("drain", function() {
        if (n5) {
          const e9 = n5;
          n5 = null, e9();
        }
      }), r2.on("finish", function() {
        if (i5) {
          const e9 = i5;
          i5 = null, e9();
        }
      })), c4 && (h6(t2, (e9) => {
        c4 = false, e9 && y5(t2, e9), p7(e9);
      }), t2.on("readable", function() {
        if (s4) {
          const e9 = s4;
          s4 = null, e9();
        }
      }), t2.on("end", function() {
        u5.push(null);
      }), u5._read = function() {
        for (; ; ) {
          const e9 = t2.read();
          if (null === e9)
            return void (s4 = u5._read);
          if (!u5.push(e9))
            return;
        }
      }), u5._destroy = function(e9, o5) {
        e9 || null === l7 || (e9 = new f5()), s4 = null, n5 = null, i5 = null, null === l7 ? o5(e9) : (l7 = o5, y5(r2, e9), y5(t2, e9));
      }, u5;
    }
    t.exports = function e8(t2, r2) {
      if (d5(t2))
        return t2;
      if (u4(t2))
        return R5({ readable: t2 });
      if (c3(t2))
        return R5({ writable: t2 });
      if (l6(t2))
        return R5({ writable: false, readable: false });
      if ("function" == typeof t2) {
        const { value: e9, write: i6, final: o5, destroy: a5 } = S6(t2);
        if (s3(e9))
          return b7(I5, e9, { objectMode: true, write: i6, final: o5, destroy: a5 });
        const l7 = null == e9 ? void 0 : e9.then;
        if ("function" == typeof l7) {
          let t3;
          const r3 = x6(l7, e9, (e10) => {
            if (null != e10)
              throw new m5("nully", "body", e10);
          }, (e10) => {
            y5(t3, e10);
          });
          return t3 = new I5({ objectMode: true, readable: false, write: i6, final(e10) {
            o5(async () => {
              try {
                await r3, n4.nextTick(e10, null);
              } catch (t4) {
                n4.nextTick(e10, t4);
              }
            });
          }, destroy: a5 });
        }
        throw new m5("Iterable, AsyncIterable or AsyncFunction", r2, e9);
      }
      if (E4(t2))
        return e8(t2.arrayBuffer());
      if (s3(t2))
        return b7(I5, t2, { objectMode: true, writable: false });
      if ("object" == typeof (null == t2 ? void 0 : t2.writable) || "object" == typeof (null == t2 ? void 0 : t2.readable))
        return R5({ readable: null != t2 && t2.readable ? u4(null == t2 ? void 0 : t2.readable) ? null == t2 ? void 0 : t2.readable : e8(t2.readable) : void 0, writable: null != t2 && t2.writable ? c3(null == t2 ? void 0 : t2.writable) ? null == t2 ? void 0 : t2.writable : e8(t2.writable) : void 0 });
      const i5 = null == t2 ? void 0 : t2.then;
      if ("function" == typeof i5) {
        let e9;
        return x6(i5, t2, (t3) => {
          null != t3 && e9.push(t3), e9.push(null);
        }, (t3) => {
          y5(e9, t3);
        }), e9 = new I5({ objectMode: true, writable: false, read() {
        } });
      }
      throw new p6(r2, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], t2);
    };
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, "../../ours/util": 41, "./destroy": 23, "./duplex": 24, "./end-of-stream": 26, "./from": 27, "./readable": 32, "./utils": 35, "abort-controller": 11, buffer: 15, "process/": 18 }], 26: [function(e7, t, r) {
    const n4 = e7("process/"), { AbortError: i4, codes: o4 } = e7("../../ours/errors"), { ERR_INVALID_ARG_TYPE: a4, ERR_STREAM_PREMATURE_CLOSE: s3 } = o4, { kEmptyObject: l6, once: u4 } = e7("../../ours/util"), { validateAbortSignal: c3, validateFunction: d5, validateObject: h6, validateBoolean: f5 } = e7("../validators"), { Promise: p6, PromisePrototypeThen: m5 } = e7("../../ours/primordials"), { isClosed: y5, isReadable: g5, isReadableNodeStream: v6, isReadableStream: w5, isReadableFinished: b7, isReadableErrored: _5, isWritable: E4, isWritableNodeStream: T6, isWritableStream: x6, isWritableFinished: I5, isWritableErrored: S6, isNodeStream: R5, willEmitClose: k5, kIsClosedPromise: j5 } = e7("./utils");
    function D4(e8) {
      return e8.setHeader && "function" == typeof e8.abort;
    }
    const N10 = () => {
    };
    function O3(e8, t2, r2) {
      var o5, f6;
      if (2 === arguments.length ? (r2 = t2, t2 = l6) : null == t2 ? t2 = l6 : h6(t2, "options"), d5(r2, "callback"), c3(t2.signal, "options.signal"), r2 = u4(r2), w5(e8) || x6(e8))
        return C5(e8, t2, r2);
      if (!R5(e8))
        throw new a4("stream", ["ReadableStream", "WritableStream", "Stream"], e8);
      const p7 = null !== (o5 = t2.readable) && void 0 !== o5 ? o5 : v6(e8), m6 = null !== (f6 = t2.writable) && void 0 !== f6 ? f6 : T6(e8), j6 = e8._writableState, O4 = e8._readableState, A6 = () => {
        e8.writable || P5();
      };
      let M6 = k5(e8) && v6(e8) === p7 && T6(e8) === m6, L4 = I5(e8, false);
      const P5 = () => {
        L4 = true, e8.destroyed && (M6 = false), (!M6 || e8.readable && !p7) && (p7 && !B6 || r2.call(e8));
      };
      let B6 = b7(e8, false);
      const $4 = () => {
        B6 = true, e8.destroyed && (M6 = false), (!M6 || e8.writable && !m6) && (m6 && !L4 || r2.call(e8));
      }, F4 = (t3) => {
        r2.call(e8, t3);
      };
      let U6 = y5(e8);
      const q5 = () => {
        U6 = true;
        const t3 = S6(e8) || _5(e8);
        return t3 && "boolean" != typeof t3 ? r2.call(e8, t3) : p7 && !B6 && v6(e8, true) && !b7(e8, false) ? r2.call(e8, new s3()) : !m6 || L4 || I5(e8, false) ? void r2.call(e8) : r2.call(e8, new s3());
      }, Y5 = () => {
        U6 = true;
        const t3 = S6(e8) || _5(e8);
        if (t3 && "boolean" != typeof t3)
          return r2.call(e8, t3);
        r2.call(e8);
      }, W5 = () => {
        e8.req.on("finish", P5);
      };
      D4(e8) ? (e8.on("complete", P5), M6 || e8.on("abort", q5), e8.req ? W5() : e8.on("request", W5)) : m6 && !j6 && (e8.on("end", A6), e8.on("close", A6)), M6 || "boolean" != typeof e8.aborted || e8.on("aborted", q5), e8.on("end", $4), e8.on("finish", P5), false !== t2.error && e8.on("error", F4), e8.on("close", q5), U6 ? n4.nextTick(q5) : null != j6 && j6.errorEmitted || null != O4 && O4.errorEmitted ? M6 || n4.nextTick(Y5) : (p7 || M6 && !g5(e8) || !L4 && false !== E4(e8)) && (m6 || M6 && !E4(e8) || !B6 && false !== g5(e8)) ? O4 && e8.req && e8.aborted && n4.nextTick(Y5) : n4.nextTick(Y5);
      const z6 = () => {
        r2 = N10, e8.removeListener("aborted", q5), e8.removeListener("complete", P5), e8.removeListener("abort", q5), e8.removeListener("request", W5), e8.req && e8.req.removeListener("finish", P5), e8.removeListener("end", A6), e8.removeListener("close", A6), e8.removeListener("finish", P5), e8.removeListener("end", $4), e8.removeListener("error", F4), e8.removeListener("close", q5);
      };
      if (t2.signal && !U6) {
        const o6 = () => {
          const n5 = r2;
          z6(), n5.call(e8, new i4(void 0, { cause: t2.signal.reason }));
        };
        if (t2.signal.aborted)
          n4.nextTick(o6);
        else {
          const n5 = r2;
          r2 = u4((...r3) => {
            t2.signal.removeEventListener("abort", o6), n5.apply(e8, r3);
          }), t2.signal.addEventListener("abort", o6);
        }
      }
      return z6;
    }
    function C5(e8, t2, r2) {
      let o5 = false, a5 = N10;
      if (t2.signal)
        if (a5 = () => {
          o5 = true, r2.call(e8, new i4(void 0, { cause: t2.signal.reason }));
        }, t2.signal.aborted)
          n4.nextTick(a5);
        else {
          const n5 = r2;
          r2 = u4((...r3) => {
            t2.signal.removeEventListener("abort", a5), n5.apply(e8, r3);
          }), t2.signal.addEventListener("abort", a5);
        }
      const s4 = (...t3) => {
        o5 || n4.nextTick(() => r2.apply(e8, t3));
      };
      return m5(e8[j5].promise, s4, s4), N10;
    }
    function A5(e8, t2) {
      var r2;
      let n5 = false;
      return null === t2 && (t2 = l6), null !== (r2 = t2) && void 0 !== r2 && r2.cleanup && (f5(t2.cleanup, "cleanup"), n5 = t2.cleanup), new p6((r3, i5) => {
        const o5 = O3(e8, t2, (e9) => {
          n5 && o5(), e9 ? i5(e9) : r3();
        });
      });
    }
    t.exports = O3, t.exports.finished = A5;
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, "../../ours/util": 41, "../validators": 37, "./utils": 35, "process/": 18 }], 27: [function(e7, t, r) {
    const n4 = e7("process/"), { PromisePrototypeThen: i4, SymbolAsyncIterator: o4, SymbolIterator: a4 } = e7("../../ours/primordials"), { Buffer: s3 } = e7("buffer"), { ERR_INVALID_ARG_TYPE: l6, ERR_STREAM_NULL_VALUES: u4 } = e7("../../ours/errors").codes;
    function c3(e8, t2, r2) {
      let c4, d5;
      if ("string" == typeof t2 || t2 instanceof s3)
        return new e8({ objectMode: true, ...r2, read() {
          this.push(t2), this.push(null);
        } });
      if (t2 && t2[o4])
        d5 = true, c4 = t2[o4]();
      else {
        if (!t2 || !t2[a4])
          throw new l6("iterable", ["Iterable"], t2);
        d5 = false, c4 = t2[a4]();
      }
      const h6 = new e8({ objectMode: true, highWaterMark: 1, ...r2 });
      let f5 = false;
      async function p6(e9) {
        const t3 = null != e9, r3 = "function" == typeof c4.throw;
        if (t3 && r3) {
          const { value: t4, done: r4 } = await c4.throw(e9);
          if (await t4, r4)
            return;
        }
        if ("function" == typeof c4.return) {
          const { value: e10 } = await c4.return();
          await e10;
        }
      }
      async function m5() {
        for (; ; ) {
          try {
            const { value: e9, done: t3 } = d5 ? await c4.next() : c4.next();
            if (t3)
              h6.push(null);
            else {
              const t4 = e9 && "function" == typeof e9.then ? await e9 : e9;
              if (null === t4)
                throw f5 = false, new u4();
              if (h6.push(t4))
                continue;
              f5 = false;
            }
          } catch (e9) {
            h6.destroy(e9);
          }
          break;
        }
      }
      return h6._read = function() {
        f5 || (f5 = true, m5());
      }, h6._destroy = function(e9, t3) {
        i4(p6(e9), () => n4.nextTick(t3, e9), (r3) => n4.nextTick(t3, r3 || e9));
      }, h6;
    }
    t.exports = c3;
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, buffer: 15, "process/": 18 }], 28: [function(e7, t, r) {
    const { ArrayIsArray: n4, ObjectSetPrototypeOf: i4 } = e7("../../ours/primordials"), { EventEmitter: o4 } = e7("events");
    function a4(e8) {
      o4.call(this, e8);
    }
    function s3(e8, t2, r2) {
      if ("function" == typeof e8.prependListener)
        return e8.prependListener(t2, r2);
      e8._events && e8._events[t2] ? n4(e8._events[t2]) ? e8._events[t2].unshift(r2) : e8._events[t2] = [r2, e8._events[t2]] : e8.on(t2, r2);
    }
    i4(a4.prototype, o4.prototype), i4(a4, o4), a4.prototype.pipe = function(e8, t2) {
      const r2 = this;
      function n5(t3) {
        e8.writable && false === e8.write(t3) && r2.pause && r2.pause();
      }
      function i5() {
        r2.readable && r2.resume && r2.resume();
      }
      r2.on("data", n5), e8.on("drain", i5), e8._isStdio || t2 && false === t2.end || (r2.on("end", l6), r2.on("close", u4));
      let a5 = false;
      function l6() {
        a5 || (a5 = true, e8.end());
      }
      function u4() {
        a5 || (a5 = true, "function" == typeof e8.destroy && e8.destroy());
      }
      function c3(e9) {
        d5(), 0 === o4.listenerCount(this, "error") && this.emit("error", e9);
      }
      function d5() {
        r2.removeListener("data", n5), e8.removeListener("drain", i5), r2.removeListener("end", l6), r2.removeListener("close", u4), r2.removeListener("error", c3), e8.removeListener("error", c3), r2.removeListener("end", d5), r2.removeListener("close", d5), e8.removeListener("close", d5);
      }
      return s3(r2, "error", c3), s3(e8, "error", c3), r2.on("end", d5), r2.on("close", d5), e8.on("close", d5), e8.emit("pipe", r2), e8;
    }, t.exports = { Stream: a4, prependListener: s3 };
  }, { "../../ours/primordials": 40, events: 16 }], 29: [function(e7, t, r) {
    const n4 = globalThis.AbortController || e7("abort-controller").AbortController, { codes: { ERR_INVALID_ARG_VALUE: i4, ERR_INVALID_ARG_TYPE: o4, ERR_MISSING_ARGS: a4, ERR_OUT_OF_RANGE: s3 }, AbortError: l6 } = e7("../../ours/errors"), { validateAbortSignal: u4, validateInteger: c3, validateObject: d5 } = e7("../validators"), h6 = e7("../../ours/primordials").Symbol("kWeak"), { finished: f5 } = e7("./end-of-stream"), p6 = e7("./compose"), { addAbortSignalNoValidate: m5 } = e7("./add-abort-signal"), { isWritable: y5, isNodeStream: g5 } = e7("./utils"), { ArrayPrototypePush: v6, MathFloor: w5, Number: b7, NumberIsNaN: _5, Promise: E4, PromiseReject: T6, PromisePrototypeThen: x6, Symbol: I5 } = e7("../../ours/primordials"), S6 = I5("kEmpty"), R5 = I5("kEof");
    function k5(e8, t2) {
      if (null != t2 && d5(t2, "options"), null != (null == t2 ? void 0 : t2.signal) && u4(t2.signal, "options.signal"), g5(e8) && !y5(e8))
        throw new i4("stream", e8, "must be writable");
      const r2 = p6(this, e8);
      return null != t2 && t2.signal && m5(t2.signal, r2), r2;
    }
    function j5(e8, t2) {
      if ("function" != typeof e8)
        throw new o4("fn", ["Function", "AsyncFunction"], e8);
      null != t2 && d5(t2, "options"), null != (null == t2 ? void 0 : t2.signal) && u4(t2.signal, "options.signal");
      let r2 = 1;
      return null != (null == t2 ? void 0 : t2.concurrency) && (r2 = w5(t2.concurrency)), c3(r2, "concurrency", 1), async function* () {
        var i5, o5;
        const a5 = new n4(), s4 = this, u5 = [], c4 = a5.signal, d6 = { signal: c4 }, h7 = () => a5.abort();
        let f6, p7;
        null != t2 && null !== (i5 = t2.signal) && void 0 !== i5 && i5.aborted && h7(), null == t2 || null === (o5 = t2.signal) || void 0 === o5 || o5.addEventListener("abort", h7);
        let m6 = false;
        function y6() {
          m6 = true;
        }
        async function g6() {
          try {
            for await (let t3 of s4) {
              var n5;
              if (m6)
                return;
              if (c4.aborted)
                throw new l6();
              try {
                t3 = e8(t3, d6);
              } catch (e9) {
                t3 = T6(e9);
              }
              t3 !== S6 && ("function" == typeof (null === (n5 = t3) || void 0 === n5 ? void 0 : n5.catch) && t3.catch(y6), u5.push(t3), f6 && (f6(), f6 = null), !m6 && u5.length && u5.length >= r2 && await new E4((e9) => {
                p7 = e9;
              }));
            }
            u5.push(R5);
          } catch (e9) {
            const t3 = T6(e9);
            x6(t3, void 0, y6), u5.push(t3);
          } finally {
            var i6;
            m6 = true, f6 && (f6(), f6 = null), null == t2 || null === (i6 = t2.signal) || void 0 === i6 || i6.removeEventListener("abort", h7);
          }
        }
        g6();
        try {
          for (; ; ) {
            for (; u5.length > 0; ) {
              const e9 = await u5[0];
              if (e9 === R5)
                return;
              if (c4.aborted)
                throw new l6();
              e9 !== S6 && (yield e9), u5.shift(), p7 && (p7(), p7 = null);
            }
            await new E4((e9) => {
              f6 = e9;
            });
          }
        } finally {
          a5.abort(), m6 = true, p7 && (p7(), p7 = null);
        }
      }.call(this);
    }
    function D4(e8 = void 0) {
      return null != e8 && d5(e8, "options"), null != (null == e8 ? void 0 : e8.signal) && u4(e8.signal, "options.signal"), async function* () {
        let t2 = 0;
        for await (const n5 of this) {
          var r2;
          if (null != e8 && null !== (r2 = e8.signal) && void 0 !== r2 && r2.aborted)
            throw new l6({ cause: e8.signal.reason });
          yield [t2++, n5];
        }
      }.call(this);
    }
    async function N10(e8, t2 = void 0) {
      for await (const r2 of M6.call(this, e8, t2))
        return true;
      return false;
    }
    async function O3(e8, t2 = void 0) {
      if ("function" != typeof e8)
        throw new o4("fn", ["Function", "AsyncFunction"], e8);
      return !await N10.call(this, async (...t3) => !await e8(...t3), t2);
    }
    async function C5(e8, t2) {
      for await (const r2 of M6.call(this, e8, t2))
        return r2;
    }
    async function A5(e8, t2) {
      if ("function" != typeof e8)
        throw new o4("fn", ["Function", "AsyncFunction"], e8);
      async function r2(t3, r3) {
        return await e8(t3, r3), S6;
      }
      for await (const e9 of j5.call(this, r2, t2))
        ;
    }
    function M6(e8, t2) {
      if ("function" != typeof e8)
        throw new o4("fn", ["Function", "AsyncFunction"], e8);
      async function r2(t3, r3) {
        return await e8(t3, r3) ? t3 : S6;
      }
      return j5.call(this, r2, t2);
    }
    class L4 extends a4 {
      constructor() {
        super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
      }
    }
    async function P5(e8, t2, r2) {
      var i5;
      if ("function" != typeof e8)
        throw new o4("reducer", ["Function", "AsyncFunction"], e8);
      null != r2 && d5(r2, "options"), null != (null == r2 ? void 0 : r2.signal) && u4(r2.signal, "options.signal");
      let a5 = arguments.length > 1;
      if (null != r2 && null !== (i5 = r2.signal) && void 0 !== i5 && i5.aborted) {
        const e9 = new l6(void 0, { cause: r2.signal.reason });
        throw this.once("error", () => {
        }), await f5(this.destroy(e9)), e9;
      }
      const s4 = new n4(), c4 = s4.signal;
      if (null != r2 && r2.signal) {
        const e9 = { once: true, [h6]: this };
        r2.signal.addEventListener("abort", () => s4.abort(), e9);
      }
      let p7 = false;
      try {
        for await (const n5 of this) {
          var m6;
          if (p7 = true, null != r2 && null !== (m6 = r2.signal) && void 0 !== m6 && m6.aborted)
            throw new l6();
          a5 ? t2 = await e8(t2, n5, { signal: c4 }) : (t2 = n5, a5 = true);
        }
        if (!p7 && !a5)
          throw new L4();
      } finally {
        s4.abort();
      }
      return t2;
    }
    async function B6(e8) {
      null != e8 && d5(e8, "options"), null != (null == e8 ? void 0 : e8.signal) && u4(e8.signal, "options.signal");
      const t2 = [];
      for await (const n5 of this) {
        var r2;
        if (null != e8 && null !== (r2 = e8.signal) && void 0 !== r2 && r2.aborted)
          throw new l6(void 0, { cause: e8.signal.reason });
        v6(t2, n5);
      }
      return t2;
    }
    function $4(e8, t2) {
      const r2 = j5.call(this, e8, t2);
      return async function* () {
        for await (const e9 of r2)
          yield* e9;
      }.call(this);
    }
    function F4(e8) {
      if (e8 = b7(e8), _5(e8))
        return 0;
      if (e8 < 0)
        throw new s3("number", ">= 0", e8);
      return e8;
    }
    function U6(e8, t2 = void 0) {
      return null != t2 && d5(t2, "options"), null != (null == t2 ? void 0 : t2.signal) && u4(t2.signal, "options.signal"), e8 = F4(e8), async function* () {
        var r2;
        if (null != t2 && null !== (r2 = t2.signal) && void 0 !== r2 && r2.aborted)
          throw new l6();
        for await (const r3 of this) {
          var n5;
          if (null != t2 && null !== (n5 = t2.signal) && void 0 !== n5 && n5.aborted)
            throw new l6();
          e8-- <= 0 && (yield r3);
        }
      }.call(this);
    }
    function q5(e8, t2 = void 0) {
      return null != t2 && d5(t2, "options"), null != (null == t2 ? void 0 : t2.signal) && u4(t2.signal, "options.signal"), e8 = F4(e8), async function* () {
        var r2;
        if (null != t2 && null !== (r2 = t2.signal) && void 0 !== r2 && r2.aborted)
          throw new l6();
        for await (const r3 of this) {
          var n5;
          if (null != t2 && null !== (n5 = t2.signal) && void 0 !== n5 && n5.aborted)
            throw new l6();
          if (!(e8-- > 0))
            return;
          yield r3;
        }
      }.call(this);
    }
    t.exports.streamReturningOperators = { asIndexedPairs: D4, drop: U6, filter: M6, flatMap: $4, map: j5, take: q5, compose: k5 }, t.exports.promiseReturningOperators = { every: O3, forEach: A5, reduce: P5, toArray: B6, some: N10, find: C5 };
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, "../validators": 37, "./add-abort-signal": 20, "./compose": 22, "./end-of-stream": 26, "./utils": 35, "abort-controller": 11 }], 30: [function(e7, t, r) {
    const { ObjectSetPrototypeOf: n4 } = e7("../../ours/primordials");
    t.exports = o4;
    const i4 = e7("./transform");
    function o4(e8) {
      if (!(this instanceof o4))
        return new o4(e8);
      i4.call(this, e8);
    }
    n4(o4.prototype, i4.prototype), n4(o4, i4), o4.prototype._transform = function(e8, t2, r2) {
      r2(null, e8);
    };
  }, { "../../ours/primordials": 40, "./transform": 34 }], 31: [function(e7, t, r) {
    const n4 = e7("process/"), { ArrayIsArray: i4, Promise: o4, SymbolAsyncIterator: a4 } = e7("../../ours/primordials"), s3 = e7("./end-of-stream"), { once: l6 } = e7("../../ours/util"), u4 = e7("./destroy"), c3 = e7("./duplex"), { aggregateTwoErrors: d5, codes: { ERR_INVALID_ARG_TYPE: h6, ERR_INVALID_RETURN_VALUE: f5, ERR_MISSING_ARGS: p6, ERR_STREAM_DESTROYED: m5, ERR_STREAM_PREMATURE_CLOSE: y5 }, AbortError: g5 } = e7("../../ours/errors"), { validateFunction: v6, validateAbortSignal: w5 } = e7("../validators"), { isIterable: b7, isReadable: _5, isReadableNodeStream: E4, isNodeStream: T6, isTransformStream: x6, isWebStream: I5, isReadableStream: S6, isReadableEnded: R5 } = e7("./utils"), k5 = globalThis.AbortController || e7("abort-controller").AbortController;
    let j5, D4;
    function N10(e8, t2, r2) {
      let n5 = false;
      return e8.on("close", () => {
        n5 = true;
      }), { destroy: (t3) => {
        n5 || (n5 = true, u4.destroyer(e8, t3 || new m5("pipe")));
      }, cleanup: s3(e8, { readable: t2, writable: r2 }, (e9) => {
        n5 = !e9;
      }) };
    }
    function O3(e8) {
      return v6(e8[e8.length - 1], "streams[stream.length - 1]"), e8.pop();
    }
    function C5(e8) {
      if (b7(e8))
        return e8;
      if (E4(e8))
        return A5(e8);
      throw new h6("val", ["Readable", "Iterable", "AsyncIterable"], e8);
    }
    async function* A5(t2) {
      D4 || (D4 = e7("./readable")), yield* D4.prototype[a4].call(t2);
    }
    async function M6(e8, t2, r2, { end: n5 }) {
      let i5, a5 = null;
      const l7 = (e9) => {
        if (e9 && (i5 = e9), a5) {
          const e10 = a5;
          a5 = null, e10();
        }
      }, u5 = () => new o4((e9, t3) => {
        i5 ? t3(i5) : a5 = () => {
          i5 ? t3(i5) : e9();
        };
      });
      t2.on("drain", l7);
      const c4 = s3(t2, { readable: false }, l7);
      try {
        t2.writableNeedDrain && await u5();
        for await (const r3 of e8)
          t2.write(r3) || await u5();
        n5 && t2.end(), await u5(), r2();
      } catch (e9) {
        r2(i5 !== e9 ? d5(i5, e9) : e9);
      } finally {
        c4(), t2.off("drain", l7);
      }
    }
    async function L4(e8, t2, r2, { end: n5 }) {
      x6(t2) && (t2 = t2.writable);
      const i5 = t2.getWriter();
      try {
        for await (const t3 of e8)
          await i5.ready, i5.write(t3).catch(() => {
          });
        await i5.ready, n5 && await i5.close(), r2();
      } catch (e9) {
        try {
          await i5.abort(e9), r2(e9);
        } catch (e10) {
          r2(e10);
        }
      }
    }
    function P5(...e8) {
      return B6(e8, l6(O3(e8)));
    }
    function B6(t2, r2, o5) {
      if (1 === t2.length && i4(t2[0]) && (t2 = t2[0]), t2.length < 2)
        throw new p6("streams");
      const a5 = new k5(), s4 = a5.signal, l7 = null == o5 ? void 0 : o5.signal, u5 = [];
      function d6() {
        A6(new g5());
      }
      let m6, y6;
      w5(l7, "options.signal"), null == l7 || l7.addEventListener("abort", d6);
      const v7 = [];
      let R6, D5 = 0;
      function O4(e8) {
        A6(e8, 0 == --D5);
      }
      function A6(e8, t3) {
        if (!e8 || m6 && "ERR_STREAM_PREMATURE_CLOSE" !== m6.code || (m6 = e8), m6 || t3) {
          for (; v7.length; )
            v7.shift()(m6);
          null == l7 || l7.removeEventListener("abort", d6), a5.abort(), t3 && (m6 || u5.forEach((e9) => e9()), n4.nextTick(r2, m6, y6));
        }
      }
      for (let F4 = 0; F4 < t2.length; F4++) {
        const U6 = t2[F4], q5 = F4 < t2.length - 1, Y5 = F4 > 0, W5 = q5 || false !== (null == o5 ? void 0 : o5.end), z6 = F4 === t2.length - 1;
        if (T6(U6)) {
          let G7 = function(e8) {
            e8 && "AbortError" !== e8.name && "ERR_STREAM_PREMATURE_CLOSE" !== e8.code && O4(e8);
          };
          if (W5) {
            const { destroy: H4, cleanup: J4 } = N10(U6, q5, Y5);
            v7.push(H4), _5(U6) && z6 && u5.push(J4);
          }
          U6.on("error", G7), _5(U6) && z6 && u5.push(() => {
            U6.removeListener("error", G7);
          });
        }
        if (0 === F4)
          if ("function" == typeof U6) {
            if (R6 = U6({ signal: s4 }), !b7(R6))
              throw new f5("Iterable, AsyncIterable or Stream", "source", R6);
          } else
            R6 = b7(U6) || E4(U6) || x6(U6) ? U6 : c3.from(U6);
        else if ("function" == typeof U6) {
          var P6;
          if (R6 = x6(R6) ? C5(null === (P6 = R6) || void 0 === P6 ? void 0 : P6.readable) : C5(R6), R6 = U6(R6, { signal: s4 }), q5) {
            if (!b7(R6, true))
              throw new f5("AsyncIterable", `transform[${F4 - 1}]`, R6);
          } else {
            var B7;
            j5 || (j5 = e7("./passthrough"));
            const V5 = new j5({ objectMode: true }), Q5 = null === (B7 = R6) || void 0 === B7 ? void 0 : B7.then;
            if ("function" == typeof Q5)
              D5++, Q5.call(R6, (e8) => {
                y6 = e8, null != e8 && V5.write(e8), W5 && V5.end(), n4.nextTick(O4);
              }, (e8) => {
                V5.destroy(e8), n4.nextTick(O4, e8);
              });
            else if (b7(R6, true))
              D5++, M6(R6, V5, O4, { end: W5 });
            else {
              if (!S6(R6) && !x6(R6))
                throw new f5("AsyncIterable or Promise", "destination", R6);
              {
                const X5 = R6.readable || R6;
                D5++, M6(X5, V5, O4, { end: W5 });
              }
            }
            R6 = V5;
            const { destroy: Z5, cleanup: K4 } = N10(R6, false, true);
            v7.push(Z5), z6 && u5.push(K4);
          }
        } else if (T6(U6)) {
          if (E4(R6)) {
            D5 += 2;
            const ee2 = $4(R6, U6, O4, { end: W5 });
            _5(U6) && z6 && u5.push(ee2);
          } else if (x6(R6) || S6(R6)) {
            const te2 = R6.readable || R6;
            D5++, M6(te2, U6, O4, { end: W5 });
          } else {
            if (!b7(R6))
              throw new h6("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], R6);
            D5++, M6(R6, U6, O4, { end: W5 });
          }
          R6 = U6;
        } else if (I5(U6)) {
          if (E4(R6))
            D5++, L4(C5(R6), U6, O4, { end: W5 });
          else if (S6(R6) || b7(R6))
            D5++, L4(R6, U6, O4, { end: W5 });
          else {
            if (!x6(R6))
              throw new h6("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], R6);
            D5++, L4(R6.readable, U6, O4, { end: W5 });
          }
          R6 = U6;
        } else
          R6 = c3.from(U6);
      }
      return (null != s4 && s4.aborted || null != l7 && l7.aborted) && n4.nextTick(d6), R6;
    }
    function $4(e8, t2, r2, { end: i5 }) {
      let o5 = false;
      if (t2.on("close", () => {
        o5 || r2(new y5());
      }), e8.pipe(t2, { end: false }), i5) {
        let a5 = function() {
          o5 = true, t2.end();
        };
        R5(e8) ? n4.nextTick(a5) : e8.once("end", a5);
      } else
        r2();
      return s3(e8, { readable: true, writable: false }, (t3) => {
        const n5 = e8._readableState;
        t3 && "ERR_STREAM_PREMATURE_CLOSE" === t3.code && n5 && n5.ended && !n5.errored && !n5.errorEmitted ? e8.once("end", r2).once("error", r2) : r2(t3);
      }), s3(t2, { readable: false, writable: true }, r2);
    }
    t.exports = { pipelineImpl: B6, pipeline: P5 };
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, "../../ours/util": 41, "../validators": 37, "./destroy": 23, "./duplex": 24, "./end-of-stream": 26, "./passthrough": 30, "./readable": 32, "./utils": 35, "abort-controller": 11, "process/": 18 }], 32: [function(e7, t, r) {
    const n4 = e7("process/"), { ArrayPrototypeIndexOf: i4, NumberIsInteger: o4, NumberIsNaN: a4, NumberParseInt: s3, ObjectDefineProperties: l6, ObjectKeys: u4, ObjectSetPrototypeOf: c3, Promise: d5, SafeSet: h6, SymbolAsyncIterator: f5, Symbol: p6 } = e7("../../ours/primordials");
    t.exports = $4, $4.ReadableState = B6;
    const { EventEmitter: m5 } = e7("events"), { Stream: y5, prependListener: g5 } = e7("./legacy"), { Buffer: v6 } = e7("buffer"), { addAbortSignal: w5 } = e7("./add-abort-signal"), b7 = e7("./end-of-stream");
    let _5 = e7("../../ours/util").debuglog("stream", (e8) => {
      _5 = e8;
    });
    const E4 = e7("./buffer_list"), T6 = e7("./destroy"), { getHighWaterMark: x6, getDefaultHighWaterMark: I5 } = e7("./state"), { aggregateTwoErrors: S6, codes: { ERR_INVALID_ARG_TYPE: R5, ERR_METHOD_NOT_IMPLEMENTED: k5, ERR_OUT_OF_RANGE: j5, ERR_STREAM_PUSH_AFTER_EOF: D4, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: N10 } } = e7("../../ours/errors"), { validateObject: O3 } = e7("../validators"), C5 = p6("kPaused"), { StringDecoder: A5 } = e7("string_decoder"), M6 = e7("./from");
    c3($4.prototype, y5.prototype), c3($4, y5);
    const L4 = () => {
    }, { errorOrDestroy: P5 } = T6;
    function B6(t2, r2, n5) {
      "boolean" != typeof n5 && (n5 = r2 instanceof e7("./duplex")), this.objectMode = !(!t2 || !t2.objectMode), n5 && (this.objectMode = this.objectMode || !(!t2 || !t2.readableObjectMode)), this.highWaterMark = t2 ? x6(this, t2, "readableHighWaterMark", n5) : I5(false), this.buffer = new E4(), this.length = 0, this.pipes = [], this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.constructed = true, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this[C5] = null, this.errorEmitted = false, this.emitClose = !t2 || false !== t2.emitClose, this.autoDestroy = !t2 || false !== t2.autoDestroy, this.destroyed = false, this.errored = null, this.closed = false, this.closeEmitted = false, this.defaultEncoding = t2 && t2.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = false, this.readingMore = false, this.dataEmitted = false, this.decoder = null, this.encoding = null, t2 && t2.encoding && (this.decoder = new A5(t2.encoding), this.encoding = t2.encoding);
    }
    function $4(t2) {
      if (!(this instanceof $4))
        return new $4(t2);
      const r2 = this instanceof e7("./duplex");
      this._readableState = new B6(t2, this, r2), t2 && ("function" == typeof t2.read && (this._read = t2.read), "function" == typeof t2.destroy && (this._destroy = t2.destroy), "function" == typeof t2.construct && (this._construct = t2.construct), t2.signal && !r2 && w5(t2.signal, this)), y5.call(this, t2), T6.construct(this, () => {
        this._readableState.needReadable && J4(this, this._readableState);
      });
    }
    function F4(e8, t2, r2, n5) {
      _5("readableAddChunk", t2);
      const i5 = e8._readableState;
      let o5;
      if (i5.objectMode || ("string" == typeof t2 ? (r2 = r2 || i5.defaultEncoding, i5.encoding !== r2 && (n5 && i5.encoding ? t2 = v6.from(t2, r2).toString(i5.encoding) : (t2 = v6.from(t2, r2), r2 = ""))) : t2 instanceof v6 ? r2 = "" : y5._isUint8Array(t2) ? (t2 = y5._uint8ArrayToBuffer(t2), r2 = "") : null != t2 && (o5 = new R5("chunk", ["string", "Buffer", "Uint8Array"], t2))), o5)
        P5(e8, o5);
      else if (null === t2)
        i5.reading = false, z6(e8, i5);
      else if (i5.objectMode || t2 && t2.length > 0)
        if (n5)
          if (i5.endEmitted)
            P5(e8, new N10());
          else {
            if (i5.destroyed || i5.errored)
              return false;
            U6(e8, i5, t2, true);
          }
        else if (i5.ended)
          P5(e8, new D4());
        else {
          if (i5.destroyed || i5.errored)
            return false;
          i5.reading = false, i5.decoder && !r2 ? (t2 = i5.decoder.write(t2), i5.objectMode || 0 !== t2.length ? U6(e8, i5, t2, false) : J4(e8, i5)) : U6(e8, i5, t2, false);
        }
      else
        n5 || (i5.reading = false, J4(e8, i5));
      return !i5.ended && (i5.length < i5.highWaterMark || 0 === i5.length);
    }
    function U6(e8, t2, r2, n5) {
      t2.flowing && 0 === t2.length && !t2.sync && e8.listenerCount("data") > 0 ? (t2.multiAwaitDrain ? t2.awaitDrainWriters.clear() : t2.awaitDrainWriters = null, t2.dataEmitted = true, e8.emit("data", r2)) : (t2.length += t2.objectMode ? 1 : r2.length, n5 ? t2.buffer.unshift(r2) : t2.buffer.push(r2), t2.needReadable && G7(e8)), J4(e8, t2);
    }
    $4.prototype.destroy = T6.destroy, $4.prototype._undestroy = T6.undestroy, $4.prototype._destroy = function(e8, t2) {
      t2(e8);
    }, $4.prototype[m5.captureRejectionSymbol] = function(e8) {
      this.destroy(e8);
    }, $4.prototype.push = function(e8, t2) {
      return F4(this, e8, t2, false);
    }, $4.prototype.unshift = function(e8, t2) {
      return F4(this, e8, t2, true);
    }, $4.prototype.isPaused = function() {
      const e8 = this._readableState;
      return true === e8[C5] || false === e8.flowing;
    }, $4.prototype.setEncoding = function(e8) {
      const t2 = new A5(e8);
      this._readableState.decoder = t2, this._readableState.encoding = this._readableState.decoder.encoding;
      const r2 = this._readableState.buffer;
      let n5 = "";
      for (const e9 of r2)
        n5 += t2.write(e9);
      return r2.clear(), "" !== n5 && r2.push(n5), this._readableState.length = n5.length, this;
    };
    const q5 = 1073741824;
    function Y5(e8) {
      if (e8 > q5)
        throw new j5("size", "<= 1GiB", e8);
      return e8--, e8 |= e8 >>> 1, e8 |= e8 >>> 2, e8 |= e8 >>> 4, e8 |= e8 >>> 8, e8 |= e8 >>> 16, ++e8;
    }
    function W5(e8, t2) {
      return e8 <= 0 || 0 === t2.length && t2.ended ? 0 : t2.objectMode ? 1 : a4(e8) ? t2.flowing && t2.length ? t2.buffer.first().length : t2.length : e8 <= t2.length ? e8 : t2.ended ? t2.length : 0;
    }
    function z6(e8, t2) {
      if (_5("onEofChunk"), !t2.ended) {
        if (t2.decoder) {
          const e9 = t2.decoder.end();
          e9 && e9.length && (t2.buffer.push(e9), t2.length += t2.objectMode ? 1 : e9.length);
        }
        t2.ended = true, t2.sync ? G7(e8) : (t2.needReadable = false, t2.emittedReadable = true, H4(e8));
      }
    }
    function G7(e8) {
      const t2 = e8._readableState;
      _5("emitReadable", t2.needReadable, t2.emittedReadable), t2.needReadable = false, t2.emittedReadable || (_5("emitReadable", t2.flowing), t2.emittedReadable = true, n4.nextTick(H4, e8));
    }
    function H4(e8) {
      const t2 = e8._readableState;
      _5("emitReadable_", t2.destroyed, t2.length, t2.ended), t2.destroyed || t2.errored || !t2.length && !t2.ended || (e8.emit("readable"), t2.emittedReadable = false), t2.needReadable = !t2.flowing && !t2.ended && t2.length <= t2.highWaterMark, te2(e8);
    }
    function J4(e8, t2) {
      !t2.readingMore && t2.constructed && (t2.readingMore = true, n4.nextTick(V5, e8, t2));
    }
    function V5(e8, t2) {
      for (; !t2.reading && !t2.ended && (t2.length < t2.highWaterMark || t2.flowing && 0 === t2.length); ) {
        const r2 = t2.length;
        if (_5("maybeReadMore read 0"), e8.read(0), r2 === t2.length)
          break;
      }
      t2.readingMore = false;
    }
    function Q5(e8, t2) {
      return function() {
        const r2 = e8._readableState;
        r2.awaitDrainWriters === t2 ? (_5("pipeOnDrain", 1), r2.awaitDrainWriters = null) : r2.multiAwaitDrain && (_5("pipeOnDrain", r2.awaitDrainWriters.size), r2.awaitDrainWriters.delete(t2)), r2.awaitDrainWriters && 0 !== r2.awaitDrainWriters.size || !e8.listenerCount("data") || e8.resume();
      };
    }
    function Z5(e8) {
      const t2 = e8._readableState;
      t2.readableListening = e8.listenerCount("readable") > 0, t2.resumeScheduled && false === t2[C5] ? t2.flowing = true : e8.listenerCount("data") > 0 ? e8.resume() : t2.readableListening || (t2.flowing = null);
    }
    function K4(e8) {
      _5("readable nexttick read 0"), e8.read(0);
    }
    function X5(e8, t2) {
      t2.resumeScheduled || (t2.resumeScheduled = true, n4.nextTick(ee2, e8, t2));
    }
    function ee2(e8, t2) {
      _5("resume", t2.reading), t2.reading || e8.read(0), t2.resumeScheduled = false, e8.emit("resume"), te2(e8), t2.flowing && !t2.reading && e8.read(0);
    }
    function te2(e8) {
      const t2 = e8._readableState;
      for (_5("flow", t2.flowing); t2.flowing && null !== e8.read(); )
        ;
    }
    function re2(e8, t2) {
      "function" != typeof e8.read && (e8 = $4.wrap(e8, { objectMode: true }));
      const r2 = ne2(e8, t2);
      return r2.stream = e8, r2;
    }
    async function* ne2(e8, t2) {
      let r2, n5 = L4;
      function i5(t3) {
        this === e8 ? (n5(), n5 = L4) : n5 = t3;
      }
      e8.on("readable", i5);
      const o5 = b7(e8, { writable: false }, (e9) => {
        r2 = e9 ? S6(r2, e9) : null, n5(), n5 = L4;
      });
      try {
        for (; ; ) {
          const t3 = e8.destroyed ? null : e8.read();
          if (null !== t3)
            yield t3;
          else {
            if (r2)
              throw r2;
            if (null === r2)
              return;
            await new d5(i5);
          }
        }
      } catch (e9) {
        throw r2 = S6(r2, e9), r2;
      } finally {
        !r2 && false === (null == t2 ? void 0 : t2.destroyOnReturn) || void 0 !== r2 && !e8._readableState.autoDestroy ? (e8.off("readable", i5), o5()) : T6.destroyer(e8, null);
      }
    }
    function ie2(e8, t2) {
      if (0 === t2.length)
        return null;
      let r2;
      return t2.objectMode ? r2 = t2.buffer.shift() : !e8 || e8 >= t2.length ? (r2 = t2.decoder ? t2.buffer.join("") : 1 === t2.buffer.length ? t2.buffer.first() : t2.buffer.concat(t2.length), t2.buffer.clear()) : r2 = t2.buffer.consume(e8, t2.decoder), r2;
    }
    function oe2(e8) {
      const t2 = e8._readableState;
      _5("endReadable", t2.endEmitted), t2.endEmitted || (t2.ended = true, n4.nextTick(ae2, t2, e8));
    }
    function ae2(e8, t2) {
      if (_5("endReadableNT", e8.endEmitted, e8.length), !e8.errored && !e8.closeEmitted && !e8.endEmitted && 0 === e8.length) {
        if (e8.endEmitted = true, t2.emit("end"), t2.writable && false === t2.allowHalfOpen)
          n4.nextTick(se2, t2);
        else if (e8.autoDestroy) {
          const e9 = t2._writableState;
          (!e9 || e9.autoDestroy && (e9.finished || false === e9.writable)) && t2.destroy();
        }
      }
    }
    function se2(e8) {
      e8.writable && !e8.writableEnded && !e8.destroyed && e8.end();
    }
    let le2;
    function ue2() {
      return void 0 === le2 && (le2 = {}), le2;
    }
    $4.prototype.read = function(e8) {
      _5("read", e8), void 0 === e8 ? e8 = NaN : o4(e8) || (e8 = s3(e8, 10));
      const t2 = this._readableState, r2 = e8;
      if (e8 > t2.highWaterMark && (t2.highWaterMark = Y5(e8)), 0 !== e8 && (t2.emittedReadable = false), 0 === e8 && t2.needReadable && ((0 !== t2.highWaterMark ? t2.length >= t2.highWaterMark : t2.length > 0) || t2.ended))
        return _5("read: emitReadable", t2.length, t2.ended), 0 === t2.length && t2.ended ? oe2(this) : G7(this), null;
      if (0 === (e8 = W5(e8, t2)) && t2.ended)
        return 0 === t2.length && oe2(this), null;
      let n5, i5 = t2.needReadable;
      if (_5("need readable", i5), (0 === t2.length || t2.length - e8 < t2.highWaterMark) && (i5 = true, _5("length less than watermark", i5)), t2.ended || t2.reading || t2.destroyed || t2.errored || !t2.constructed)
        i5 = false, _5("reading, ended or constructing", i5);
      else if (i5) {
        _5("do read"), t2.reading = true, t2.sync = true, 0 === t2.length && (t2.needReadable = true);
        try {
          this._read(t2.highWaterMark);
        } catch (e9) {
          P5(this, e9);
        }
        t2.sync = false, t2.reading || (e8 = W5(r2, t2));
      }
      return n5 = e8 > 0 ? ie2(e8, t2) : null, null === n5 ? (t2.needReadable = t2.length <= t2.highWaterMark, e8 = 0) : (t2.length -= e8, t2.multiAwaitDrain ? t2.awaitDrainWriters.clear() : t2.awaitDrainWriters = null), 0 === t2.length && (t2.ended || (t2.needReadable = true), r2 !== e8 && t2.ended && oe2(this)), null === n5 || t2.errorEmitted || t2.closeEmitted || (t2.dataEmitted = true, this.emit("data", n5)), n5;
    }, $4.prototype._read = function(e8) {
      throw new k5("_read()");
    }, $4.prototype.pipe = function(e8, t2) {
      const r2 = this, i5 = this._readableState;
      1 === i5.pipes.length && (i5.multiAwaitDrain || (i5.multiAwaitDrain = true, i5.awaitDrainWriters = new h6(i5.awaitDrainWriters ? [i5.awaitDrainWriters] : []))), i5.pipes.push(e8), _5("pipe count=%d opts=%j", i5.pipes.length, t2);
      const o5 = t2 && false === t2.end || e8 === n4.stdout || e8 === n4.stderr ? v7 : s4;
      function a5(e9, t3) {
        _5("onunpipe"), e9 === r2 && t3 && false === t3.hasUnpiped && (t3.hasUnpiped = true, c4());
      }
      function s4() {
        _5("onend"), e8.end();
      }
      let l7;
      i5.endEmitted ? n4.nextTick(o5) : r2.once("end", o5), e8.on("unpipe", a5);
      let u5 = false;
      function c4() {
        _5("cleanup"), e8.removeListener("close", m6), e8.removeListener("finish", y6), l7 && e8.removeListener("drain", l7), e8.removeListener("error", p7), e8.removeListener("unpipe", a5), r2.removeListener("end", s4), r2.removeListener("end", v7), r2.removeListener("data", f6), u5 = true, l7 && i5.awaitDrainWriters && (!e8._writableState || e8._writableState.needDrain) && l7();
      }
      function d6() {
        u5 || (1 === i5.pipes.length && i5.pipes[0] === e8 ? (_5("false write response, pause", 0), i5.awaitDrainWriters = e8, i5.multiAwaitDrain = false) : i5.pipes.length > 1 && i5.pipes.includes(e8) && (_5("false write response, pause", i5.awaitDrainWriters.size), i5.awaitDrainWriters.add(e8)), r2.pause()), l7 || (l7 = Q5(r2, e8), e8.on("drain", l7));
      }
      function f6(t3) {
        _5("ondata");
        const r3 = e8.write(t3);
        _5("dest.write", r3), false === r3 && d6();
      }
      function p7(t3) {
        if (_5("onerror", t3), v7(), e8.removeListener("error", p7), 0 === e8.listenerCount("error")) {
          const r3 = e8._writableState || e8._readableState;
          r3 && !r3.errorEmitted ? P5(e8, t3) : e8.emit("error", t3);
        }
      }
      function m6() {
        e8.removeListener("finish", y6), v7();
      }
      function y6() {
        _5("onfinish"), e8.removeListener("close", m6), v7();
      }
      function v7() {
        _5("unpipe"), r2.unpipe(e8);
      }
      return r2.on("data", f6), g5(e8, "error", p7), e8.once("close", m6), e8.once("finish", y6), e8.emit("pipe", r2), true === e8.writableNeedDrain ? i5.flowing && d6() : i5.flowing || (_5("pipe resume"), r2.resume()), e8;
    }, $4.prototype.unpipe = function(e8) {
      const t2 = this._readableState, r2 = { hasUnpiped: false };
      if (0 === t2.pipes.length)
        return this;
      if (!e8) {
        const e9 = t2.pipes;
        t2.pipes = [], this.pause();
        for (let t3 = 0; t3 < e9.length; t3++)
          e9[t3].emit("unpipe", this, { hasUnpiped: false });
        return this;
      }
      const n5 = i4(t2.pipes, e8);
      return -1 === n5 || (t2.pipes.splice(n5, 1), 0 === t2.pipes.length && this.pause(), e8.emit("unpipe", this, r2)), this;
    }, $4.prototype.on = function(e8, t2) {
      const r2 = y5.prototype.on.call(this, e8, t2), i5 = this._readableState;
      return "data" === e8 ? (i5.readableListening = this.listenerCount("readable") > 0, false !== i5.flowing && this.resume()) : "readable" === e8 && (i5.endEmitted || i5.readableListening || (i5.readableListening = i5.needReadable = true, i5.flowing = false, i5.emittedReadable = false, _5("on readable", i5.length, i5.reading), i5.length ? G7(this) : i5.reading || n4.nextTick(K4, this))), r2;
    }, $4.prototype.addListener = $4.prototype.on, $4.prototype.removeListener = function(e8, t2) {
      const r2 = y5.prototype.removeListener.call(this, e8, t2);
      return "readable" === e8 && n4.nextTick(Z5, this), r2;
    }, $4.prototype.off = $4.prototype.removeListener, $4.prototype.removeAllListeners = function(e8) {
      const t2 = y5.prototype.removeAllListeners.apply(this, arguments);
      return "readable" !== e8 && void 0 !== e8 || n4.nextTick(Z5, this), t2;
    }, $4.prototype.resume = function() {
      const e8 = this._readableState;
      return e8.flowing || (_5("resume"), e8.flowing = !e8.readableListening, X5(this, e8)), e8[C5] = false, this;
    }, $4.prototype.pause = function() {
      return _5("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (_5("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState[C5] = true, this;
    }, $4.prototype.wrap = function(e8) {
      let t2 = false;
      e8.on("data", (r3) => {
        !this.push(r3) && e8.pause && (t2 = true, e8.pause());
      }), e8.on("end", () => {
        this.push(null);
      }), e8.on("error", (e9) => {
        P5(this, e9);
      }), e8.on("close", () => {
        this.destroy();
      }), e8.on("destroy", () => {
        this.destroy();
      }), this._read = () => {
        t2 && e8.resume && (t2 = false, e8.resume());
      };
      const r2 = u4(e8);
      for (let t3 = 1; t3 < r2.length; t3++) {
        const n5 = r2[t3];
        void 0 === this[n5] && "function" == typeof e8[n5] && (this[n5] = e8[n5].bind(e8));
      }
      return this;
    }, $4.prototype[f5] = function() {
      return re2(this);
    }, $4.prototype.iterator = function(e8) {
      return void 0 !== e8 && O3(e8, "options"), re2(this, e8);
    }, l6($4.prototype, { readable: { __proto__: null, get() {
      const e8 = this._readableState;
      return !(!e8 || false === e8.readable || e8.destroyed || e8.errorEmitted || e8.endEmitted);
    }, set(e8) {
      this._readableState && (this._readableState.readable = !!e8);
    } }, readableDidRead: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.dataEmitted;
    } }, readableAborted: { __proto__: null, enumerable: false, get: function() {
      return !(false === this._readableState.readable || !this._readableState.destroyed && !this._readableState.errored || this._readableState.endEmitted);
    } }, readableHighWaterMark: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.highWaterMark;
    } }, readableBuffer: { __proto__: null, enumerable: false, get: function() {
      return this._readableState && this._readableState.buffer;
    } }, readableFlowing: { __proto__: null, enumerable: false, get: function() {
      return this._readableState.flowing;
    }, set: function(e8) {
      this._readableState && (this._readableState.flowing = e8);
    } }, readableLength: { __proto__: null, enumerable: false, get() {
      return this._readableState.length;
    } }, readableObjectMode: { __proto__: null, enumerable: false, get() {
      return !!this._readableState && this._readableState.objectMode;
    } }, readableEncoding: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.encoding : null;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._readableState ? this._readableState.errored : null;
    } }, closed: { __proto__: null, get() {
      return !!this._readableState && this._readableState.closed;
    } }, destroyed: { __proto__: null, enumerable: false, get() {
      return !!this._readableState && this._readableState.destroyed;
    }, set(e8) {
      this._readableState && (this._readableState.destroyed = e8);
    } }, readableEnded: { __proto__: null, enumerable: false, get() {
      return !!this._readableState && this._readableState.endEmitted;
    } } }), l6(B6.prototype, { pipesCount: { __proto__: null, get() {
      return this.pipes.length;
    } }, paused: { __proto__: null, get() {
      return false !== this[C5];
    }, set(e8) {
      this[C5] = !!e8;
    } } }), $4._fromList = ie2, $4.from = function(e8, t2) {
      return M6($4, e8, t2);
    }, $4.fromWeb = function(e8, t2) {
      return ue2().newStreamReadableFromReadableStream(e8, t2);
    }, $4.toWeb = function(e8, t2) {
      return ue2().newReadableStreamFromStreamReadable(e8, t2);
    }, $4.wrap = function(e8, t2) {
      var r2, n5;
      return new $4({ objectMode: null === (r2 = null !== (n5 = e8.readableObjectMode) && void 0 !== n5 ? n5 : e8.objectMode) || void 0 === r2 || r2, ...t2, destroy(t3, r3) {
        T6.destroyer(e8, t3), r3(t3);
      } }).wrap(e8);
    };
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, "../../ours/util": 41, "../validators": 37, "./add-abort-signal": 20, "./buffer_list": 21, "./destroy": 23, "./duplex": 24, "./end-of-stream": 26, "./from": 27, "./legacy": 28, "./state": 33, buffer: 15, events: 16, "process/": 18, string_decoder: 14 }], 33: [function(e7, t, r) {
    const { MathFloor: n4, NumberIsInteger: i4 } = e7("../../ours/primordials"), { ERR_INVALID_ARG_VALUE: o4 } = e7("../../ours/errors").codes;
    function a4(e8, t2, r2) {
      return null != e8.highWaterMark ? e8.highWaterMark : t2 ? e8[r2] : null;
    }
    function s3(e8) {
      return e8 ? 16 : 16384;
    }
    function l6(e8, t2, r2, l7) {
      const u4 = a4(t2, l7, r2);
      if (null != u4) {
        if (!i4(u4) || u4 < 0)
          throw new o4(l7 ? `options.${r2}` : "options.highWaterMark", u4);
        return n4(u4);
      }
      return s3(e8.objectMode);
    }
    t.exports = { getHighWaterMark: l6, getDefaultHighWaterMark: s3 };
  }, { "../../ours/errors": 39, "../../ours/primordials": 40 }], 34: [function(e7, t, r) {
    const { ObjectSetPrototypeOf: n4, Symbol: i4 } = e7("../../ours/primordials");
    t.exports = u4;
    const { ERR_METHOD_NOT_IMPLEMENTED: o4 } = e7("../../ours/errors").codes, a4 = e7("./duplex"), { getHighWaterMark: s3 } = e7("./state");
    n4(u4.prototype, a4.prototype), n4(u4, a4);
    const l6 = i4("kCallback");
    function u4(e8) {
      if (!(this instanceof u4))
        return new u4(e8);
      const t2 = e8 ? s3(this, e8, "readableHighWaterMark", true) : null;
      0 === t2 && (e8 = { ...e8, highWaterMark: null, readableHighWaterMark: t2, writableHighWaterMark: e8.writableHighWaterMark || 0 }), a4.call(this, e8), this._readableState.sync = false, this[l6] = null, e8 && ("function" == typeof e8.transform && (this._transform = e8.transform), "function" == typeof e8.flush && (this._flush = e8.flush)), this.on("prefinish", d5);
    }
    function c3(e8) {
      "function" != typeof this._flush || this.destroyed ? (this.push(null), e8 && e8()) : this._flush((t2, r2) => {
        t2 ? e8 ? e8(t2) : this.destroy(t2) : (null != r2 && this.push(r2), this.push(null), e8 && e8());
      });
    }
    function d5() {
      this._final !== c3 && c3.call(this);
    }
    u4.prototype._final = c3, u4.prototype._transform = function(e8, t2, r2) {
      throw new o4("_transform()");
    }, u4.prototype._write = function(e8, t2, r2) {
      const n5 = this._readableState, i5 = this._writableState, o5 = n5.length;
      this._transform(e8, t2, (e9, t3) => {
        e9 ? r2(e9) : (null != t3 && this.push(t3), i5.ended || o5 === n5.length || n5.length < n5.highWaterMark ? r2() : this[l6] = r2);
      });
    }, u4.prototype._read = function() {
      if (this[l6]) {
        const e8 = this[l6];
        this[l6] = null, e8();
      }
    };
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, "./duplex": 24, "./state": 33 }], 35: [function(e7, t, r) {
    const { Symbol: n4, SymbolAsyncIterator: i4, SymbolIterator: o4, SymbolFor: a4 } = e7("../../ours/primordials"), s3 = n4("kDestroyed"), l6 = n4("kIsErrored"), u4 = n4("kIsReadable"), c3 = n4("kIsDisturbed"), d5 = a4("nodejs.webstream.isClosedPromise"), h6 = a4("nodejs.webstream.controllerErrorFunction");
    function f5(e8, t2 = false) {
      var r2;
      return !(!e8 || "function" != typeof e8.pipe || "function" != typeof e8.on || t2 && ("function" != typeof e8.pause || "function" != typeof e8.resume) || e8._writableState && false === (null === (r2 = e8._readableState) || void 0 === r2 ? void 0 : r2.readable) || e8._writableState && !e8._readableState);
    }
    function p6(e8) {
      var t2;
      return !(!e8 || "function" != typeof e8.write || "function" != typeof e8.on || e8._readableState && false === (null === (t2 = e8._writableState) || void 0 === t2 ? void 0 : t2.writable));
    }
    function m5(e8) {
      return !(!e8 || "function" != typeof e8.pipe || !e8._readableState || "function" != typeof e8.on || "function" != typeof e8.write);
    }
    function y5(e8) {
      return e8 && (e8._readableState || e8._writableState || "function" == typeof e8.write && "function" == typeof e8.on || "function" == typeof e8.pipe && "function" == typeof e8.on);
    }
    function g5(e8) {
      return !(!e8 || y5(e8) || "function" != typeof e8.pipeThrough || "function" != typeof e8.getReader || "function" != typeof e8.cancel);
    }
    function v6(e8) {
      return !(!e8 || y5(e8) || "function" != typeof e8.getWriter || "function" != typeof e8.abort);
    }
    function w5(e8) {
      return !(!e8 || y5(e8) || "object" != typeof e8.readable || "object" != typeof e8.writable);
    }
    function b7(e8) {
      return g5(e8) || v6(e8) || w5(e8);
    }
    function _5(e8, t2) {
      return null != e8 && (true === t2 ? "function" == typeof e8[i4] : false === t2 ? "function" == typeof e8[o4] : "function" == typeof e8[i4] || "function" == typeof e8[o4]);
    }
    function E4(e8) {
      if (!y5(e8))
        return null;
      const t2 = e8._writableState, r2 = e8._readableState, n5 = t2 || r2;
      return !!(e8.destroyed || e8[s3] || null != n5 && n5.destroyed);
    }
    function T6(e8) {
      if (!p6(e8))
        return null;
      if (true === e8.writableEnded)
        return true;
      const t2 = e8._writableState;
      return (null == t2 || !t2.errored) && ("boolean" != typeof (null == t2 ? void 0 : t2.ended) ? null : t2.ended);
    }
    function x6(e8, t2) {
      if (!p6(e8))
        return null;
      if (true === e8.writableFinished)
        return true;
      const r2 = e8._writableState;
      return (null == r2 || !r2.errored) && ("boolean" != typeof (null == r2 ? void 0 : r2.finished) ? null : !!(r2.finished || false === t2 && true === r2.ended && 0 === r2.length));
    }
    function I5(e8) {
      if (!f5(e8))
        return null;
      if (true === e8.readableEnded)
        return true;
      const t2 = e8._readableState;
      return !(!t2 || t2.errored) && ("boolean" != typeof (null == t2 ? void 0 : t2.ended) ? null : t2.ended);
    }
    function S6(e8, t2) {
      if (!f5(e8))
        return null;
      const r2 = e8._readableState;
      return (null == r2 || !r2.errored) && ("boolean" != typeof (null == r2 ? void 0 : r2.endEmitted) ? null : !!(r2.endEmitted || false === t2 && true === r2.ended && 0 === r2.length));
    }
    function R5(e8) {
      return e8 && null != e8[u4] ? e8[u4] : "boolean" != typeof (null == e8 ? void 0 : e8.readable) ? null : !E4(e8) && f5(e8) && e8.readable && !S6(e8);
    }
    function k5(e8) {
      return "boolean" != typeof (null == e8 ? void 0 : e8.writable) ? null : !E4(e8) && p6(e8) && e8.writable && !T6(e8);
    }
    function j5(e8, t2) {
      return y5(e8) ? !(!E4(e8) && (false !== (null == t2 ? void 0 : t2.readable) && R5(e8) || false !== (null == t2 ? void 0 : t2.writable) && k5(e8))) : null;
    }
    function D4(e8) {
      var t2, r2;
      return y5(e8) ? e8.writableErrored ? e8.writableErrored : null !== (t2 = null === (r2 = e8._writableState) || void 0 === r2 ? void 0 : r2.errored) && void 0 !== t2 ? t2 : null : null;
    }
    function N10(e8) {
      var t2, r2;
      return y5(e8) ? e8.readableErrored ? e8.readableErrored : null !== (t2 = null === (r2 = e8._readableState) || void 0 === r2 ? void 0 : r2.errored) && void 0 !== t2 ? t2 : null : null;
    }
    function O3(e8) {
      if (!y5(e8))
        return null;
      if ("boolean" == typeof e8.closed)
        return e8.closed;
      const t2 = e8._writableState, r2 = e8._readableState;
      return "boolean" == typeof (null == t2 ? void 0 : t2.closed) || "boolean" == typeof (null == r2 ? void 0 : r2.closed) ? (null == t2 ? void 0 : t2.closed) || (null == r2 ? void 0 : r2.closed) : "boolean" == typeof e8._closed && C5(e8) ? e8._closed : null;
    }
    function C5(e8) {
      return "boolean" == typeof e8._closed && "boolean" == typeof e8._defaultKeepAlive && "boolean" == typeof e8._removedConnection && "boolean" == typeof e8._removedContLen;
    }
    function A5(e8) {
      return "boolean" == typeof e8._sent100 && C5(e8);
    }
    function M6(e8) {
      var t2;
      return "boolean" == typeof e8._consuming && "boolean" == typeof e8._dumped && void 0 === (null === (t2 = e8.req) || void 0 === t2 ? void 0 : t2.upgradeOrConnect);
    }
    function L4(e8) {
      if (!y5(e8))
        return null;
      const t2 = e8._writableState, r2 = e8._readableState, n5 = t2 || r2;
      return !n5 && A5(e8) || !!(n5 && n5.autoDestroy && n5.emitClose && false === n5.closed);
    }
    function P5(e8) {
      var t2;
      return !(!e8 || !(null !== (t2 = e8[c3]) && void 0 !== t2 ? t2 : e8.readableDidRead || e8.readableAborted));
    }
    function B6(e8) {
      var t2, r2, n5, i5, o5, a5, s4, u5, c4, d6;
      return !(!e8 || !(null !== (t2 = null !== (r2 = null !== (n5 = null !== (i5 = null !== (o5 = null !== (a5 = e8[l6]) && void 0 !== a5 ? a5 : e8.readableErrored) && void 0 !== o5 ? o5 : e8.writableErrored) && void 0 !== i5 ? i5 : null === (s4 = e8._readableState) || void 0 === s4 ? void 0 : s4.errorEmitted) && void 0 !== n5 ? n5 : null === (u5 = e8._writableState) || void 0 === u5 ? void 0 : u5.errorEmitted) && void 0 !== r2 ? r2 : null === (c4 = e8._readableState) || void 0 === c4 ? void 0 : c4.errored) && void 0 !== t2 ? t2 : null === (d6 = e8._writableState) || void 0 === d6 ? void 0 : d6.errored));
    }
    t.exports = { kDestroyed: s3, isDisturbed: P5, kIsDisturbed: c3, isErrored: B6, kIsErrored: l6, isReadable: R5, kIsReadable: u4, kIsClosedPromise: d5, kControllerErrorFunction: h6, isClosed: O3, isDestroyed: E4, isDuplexNodeStream: m5, isFinished: j5, isIterable: _5, isReadableNodeStream: f5, isReadableStream: g5, isReadableEnded: I5, isReadableFinished: S6, isReadableErrored: N10, isNodeStream: y5, isWebStream: b7, isWritable: k5, isWritableNodeStream: p6, isWritableStream: v6, isWritableEnded: T6, isWritableFinished: x6, isWritableErrored: D4, isServerRequest: M6, isServerResponse: A5, willEmitClose: L4, isTransformStream: w5 };
  }, { "../../ours/primordials": 40 }], 36: [function(e7, t, r) {
    const n4 = e7("process/"), { ArrayPrototypeSlice: i4, Error: o4, FunctionPrototypeSymbolHasInstance: a4, ObjectDefineProperty: s3, ObjectDefineProperties: l6, ObjectSetPrototypeOf: u4, StringPrototypeToLowerCase: c3, Symbol: d5, SymbolHasInstance: h6 } = e7("../../ours/primordials");
    t.exports = A5, A5.WritableState = O3;
    const { EventEmitter: f5 } = e7("events"), p6 = e7("./legacy").Stream, { Buffer: m5 } = e7("buffer"), y5 = e7("./destroy"), { addAbortSignal: g5 } = e7("./add-abort-signal"), { getHighWaterMark: v6, getDefaultHighWaterMark: w5 } = e7("./state"), { ERR_INVALID_ARG_TYPE: b7, ERR_METHOD_NOT_IMPLEMENTED: _5, ERR_MULTIPLE_CALLBACK: E4, ERR_STREAM_CANNOT_PIPE: T6, ERR_STREAM_DESTROYED: x6, ERR_STREAM_ALREADY_FINISHED: I5, ERR_STREAM_NULL_VALUES: S6, ERR_STREAM_WRITE_AFTER_END: R5, ERR_UNKNOWN_ENCODING: k5 } = e7("../../ours/errors").codes, { errorOrDestroy: j5 } = y5;
    function D4() {
    }
    u4(A5.prototype, p6.prototype), u4(A5, p6);
    const N10 = d5("kOnFinished");
    function O3(t2, r2, n5) {
      "boolean" != typeof n5 && (n5 = r2 instanceof e7("./duplex")), this.objectMode = !(!t2 || !t2.objectMode), n5 && (this.objectMode = this.objectMode || !(!t2 || !t2.writableObjectMode)), this.highWaterMark = t2 ? v6(this, t2, "writableHighWaterMark", n5) : w5(false), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
      const i5 = !(!t2 || false !== t2.decodeStrings);
      this.decodeStrings = !i5, this.defaultEncoding = t2 && t2.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = $4.bind(void 0, r2), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, C5(this), this.pendingcb = 0, this.constructed = true, this.prefinished = false, this.errorEmitted = false, this.emitClose = !t2 || false !== t2.emitClose, this.autoDestroy = !t2 || false !== t2.autoDestroy, this.errored = null, this.closed = false, this.closeEmitted = false, this[N10] = [];
    }
    function C5(e8) {
      e8.buffered = [], e8.bufferedIndex = 0, e8.allBuffers = true, e8.allNoop = true;
    }
    function A5(t2) {
      const r2 = this instanceof e7("./duplex");
      if (!r2 && !a4(A5, this))
        return new A5(t2);
      this._writableState = new O3(t2, this, r2), t2 && ("function" == typeof t2.write && (this._write = t2.write), "function" == typeof t2.writev && (this._writev = t2.writev), "function" == typeof t2.destroy && (this._destroy = t2.destroy), "function" == typeof t2.final && (this._final = t2.final), "function" == typeof t2.construct && (this._construct = t2.construct), t2.signal && g5(t2.signal, this)), p6.call(this, t2), y5.construct(this, () => {
        const e8 = this._writableState;
        e8.writing || Y5(this, e8), H4(this, e8);
      });
    }
    function M6(e8, t2, r2, i5) {
      const o5 = e8._writableState;
      if ("function" == typeof r2)
        i5 = r2, r2 = o5.defaultEncoding;
      else {
        if (r2) {
          if ("buffer" !== r2 && !m5.isEncoding(r2))
            throw new k5(r2);
        } else
          r2 = o5.defaultEncoding;
        "function" != typeof i5 && (i5 = D4);
      }
      if (null === t2)
        throw new S6();
      if (!o5.objectMode)
        if ("string" == typeof t2)
          false !== o5.decodeStrings && (t2 = m5.from(t2, r2), r2 = "buffer");
        else if (t2 instanceof m5)
          r2 = "buffer";
        else {
          if (!p6._isUint8Array(t2))
            throw new b7("chunk", ["string", "Buffer", "Uint8Array"], t2);
          t2 = p6._uint8ArrayToBuffer(t2), r2 = "buffer";
        }
      let a5;
      return o5.ending ? a5 = new R5() : o5.destroyed && (a5 = new x6("write")), a5 ? (n4.nextTick(i5, a5), j5(e8, a5, true), a5) : (o5.pendingcb++, L4(e8, o5, t2, r2, i5));
    }
    function L4(e8, t2, r2, n5, i5) {
      const o5 = t2.objectMode ? 1 : r2.length;
      t2.length += o5;
      const a5 = t2.length < t2.highWaterMark;
      return a5 || (t2.needDrain = true), t2.writing || t2.corked || t2.errored || !t2.constructed ? (t2.buffered.push({ chunk: r2, encoding: n5, callback: i5 }), t2.allBuffers && "buffer" !== n5 && (t2.allBuffers = false), t2.allNoop && i5 !== D4 && (t2.allNoop = false)) : (t2.writelen = o5, t2.writecb = i5, t2.writing = true, t2.sync = true, e8._write(r2, n5, t2.onwrite), t2.sync = false), a5 && !t2.errored && !t2.destroyed;
    }
    function P5(e8, t2, r2, n5, i5, o5, a5) {
      t2.writelen = n5, t2.writecb = a5, t2.writing = true, t2.sync = true, t2.destroyed ? t2.onwrite(new x6("write")) : r2 ? e8._writev(i5, t2.onwrite) : e8._write(i5, o5, t2.onwrite), t2.sync = false;
    }
    function B6(e8, t2, r2, n5) {
      --t2.pendingcb, n5(r2), q5(t2), j5(e8, r2);
    }
    function $4(e8, t2) {
      const r2 = e8._writableState, i5 = r2.sync, o5 = r2.writecb;
      "function" == typeof o5 ? (r2.writing = false, r2.writecb = null, r2.length -= r2.writelen, r2.writelen = 0, t2 ? (r2.errored || (r2.errored = t2), e8._readableState && !e8._readableState.errored && (e8._readableState.errored = t2), i5 ? n4.nextTick(B6, e8, r2, t2, o5) : B6(e8, r2, t2, o5)) : (r2.buffered.length > r2.bufferedIndex && Y5(e8, r2), i5 ? null !== r2.afterWriteTickInfo && r2.afterWriteTickInfo.cb === o5 ? r2.afterWriteTickInfo.count++ : (r2.afterWriteTickInfo = { count: 1, cb: o5, stream: e8, state: r2 }, n4.nextTick(F4, r2.afterWriteTickInfo)) : U6(e8, r2, 1, o5))) : j5(e8, new E4());
    }
    function F4({ stream: e8, state: t2, count: r2, cb: n5 }) {
      return t2.afterWriteTickInfo = null, U6(e8, t2, r2, n5);
    }
    function U6(e8, t2, r2, n5) {
      for (!t2.ending && !e8.destroyed && 0 === t2.length && t2.needDrain && (t2.needDrain = false, e8.emit("drain")); r2-- > 0; )
        t2.pendingcb--, n5();
      t2.destroyed && q5(t2), H4(e8, t2);
    }
    function q5(e8) {
      if (e8.writing)
        return;
      for (let r3 = e8.bufferedIndex; r3 < e8.buffered.length; ++r3) {
        var t2;
        const { chunk: n6, callback: i5 } = e8.buffered[r3], o5 = e8.objectMode ? 1 : n6.length;
        e8.length -= o5, i5(null !== (t2 = e8.errored) && void 0 !== t2 ? t2 : new x6("write"));
      }
      const r2 = e8[N10].splice(0);
      for (let t3 = 0; t3 < r2.length; t3++) {
        var n5;
        r2[t3](null !== (n5 = e8.errored) && void 0 !== n5 ? n5 : new x6("end"));
      }
      C5(e8);
    }
    function Y5(e8, t2) {
      if (t2.corked || t2.bufferProcessing || t2.destroyed || !t2.constructed)
        return;
      const { buffered: r2, bufferedIndex: n5, objectMode: o5 } = t2, a5 = r2.length - n5;
      if (!a5)
        return;
      let s4 = n5;
      if (t2.bufferProcessing = true, a5 > 1 && e8._writev) {
        t2.pendingcb -= a5 - 1;
        const n6 = t2.allNoop ? D4 : (e9) => {
          for (let t3 = s4; t3 < r2.length; ++t3)
            r2[t3].callback(e9);
        }, o6 = t2.allNoop && 0 === s4 ? r2 : i4(r2, s4);
        o6.allBuffers = t2.allBuffers, P5(e8, t2, true, t2.length, o6, "", n6), C5(t2);
      } else {
        do {
          const { chunk: n6, encoding: i5, callback: a6 } = r2[s4];
          r2[s4++] = null, P5(e8, t2, false, o5 ? 1 : n6.length, n6, i5, a6);
        } while (s4 < r2.length && !t2.writing);
        s4 === r2.length ? C5(t2) : s4 > 256 ? (r2.splice(0, s4), t2.bufferedIndex = 0) : t2.bufferedIndex = s4;
      }
      t2.bufferProcessing = false;
    }
    function W5(e8) {
      return e8.ending && !e8.destroyed && e8.constructed && 0 === e8.length && !e8.errored && 0 === e8.buffered.length && !e8.finished && !e8.writing && !e8.errorEmitted && !e8.closeEmitted;
    }
    function z6(e8, t2) {
      let r2 = false;
      function i5(i6) {
        if (r2)
          j5(e8, null != i6 ? i6 : E4());
        else if (r2 = true, t2.pendingcb--, i6) {
          const r3 = t2[N10].splice(0);
          for (let e9 = 0; e9 < r3.length; e9++)
            r3[e9](i6);
          j5(e8, i6, t2.sync);
        } else
          W5(t2) && (t2.prefinished = true, e8.emit("prefinish"), t2.pendingcb++, n4.nextTick(J4, e8, t2));
      }
      t2.sync = true, t2.pendingcb++;
      try {
        e8._final(i5);
      } catch (e9) {
        i5(e9);
      }
      t2.sync = false;
    }
    function G7(e8, t2) {
      t2.prefinished || t2.finalCalled || ("function" != typeof e8._final || t2.destroyed ? (t2.prefinished = true, e8.emit("prefinish")) : (t2.finalCalled = true, z6(e8, t2)));
    }
    function H4(e8, t2, r2) {
      W5(t2) && (G7(e8, t2), 0 === t2.pendingcb && (r2 ? (t2.pendingcb++, n4.nextTick((e9, t3) => {
        W5(t3) ? J4(e9, t3) : t3.pendingcb--;
      }, e8, t2)) : W5(t2) && (t2.pendingcb++, J4(e8, t2))));
    }
    function J4(e8, t2) {
      t2.pendingcb--, t2.finished = true;
      const r2 = t2[N10].splice(0);
      for (let e9 = 0; e9 < r2.length; e9++)
        r2[e9]();
      if (e8.emit("finish"), t2.autoDestroy) {
        const t3 = e8._readableState;
        (!t3 || t3.autoDestroy && (t3.endEmitted || false === t3.readable)) && e8.destroy();
      }
    }
    O3.prototype.getBuffer = function() {
      return i4(this.buffered, this.bufferedIndex);
    }, s3(O3.prototype, "bufferedRequestCount", { __proto__: null, get() {
      return this.buffered.length - this.bufferedIndex;
    } }), s3(A5, h6, { __proto__: null, value: function(e8) {
      return !!a4(this, e8) || this === A5 && e8 && e8._writableState instanceof O3;
    } }), A5.prototype.pipe = function() {
      j5(this, new T6());
    }, A5.prototype.write = function(e8, t2, r2) {
      return true === M6(this, e8, t2, r2);
    }, A5.prototype.cork = function() {
      this._writableState.corked++;
    }, A5.prototype.uncork = function() {
      const e8 = this._writableState;
      e8.corked && (e8.corked--, e8.writing || Y5(this, e8));
    }, A5.prototype.setDefaultEncoding = function(e8) {
      if ("string" == typeof e8 && (e8 = c3(e8)), !m5.isEncoding(e8))
        throw new k5(e8);
      return this._writableState.defaultEncoding = e8, this;
    }, A5.prototype._write = function(e8, t2, r2) {
      if (!this._writev)
        throw new _5("_write()");
      this._writev([{ chunk: e8, encoding: t2 }], r2);
    }, A5.prototype._writev = null, A5.prototype.end = function(e8, t2, r2) {
      const i5 = this._writableState;
      let a5;
      if ("function" == typeof e8 ? (r2 = e8, e8 = null, t2 = null) : "function" == typeof t2 && (r2 = t2, t2 = null), null != e8) {
        const r3 = M6(this, e8, t2);
        r3 instanceof o4 && (a5 = r3);
      }
      return i5.corked && (i5.corked = 1, this.uncork()), a5 || (i5.errored || i5.ending ? i5.finished ? a5 = new I5("end") : i5.destroyed && (a5 = new x6("end")) : (i5.ending = true, H4(this, i5, true), i5.ended = true)), "function" == typeof r2 && (a5 || i5.finished ? n4.nextTick(r2, a5) : i5[N10].push(r2)), this;
    }, l6(A5.prototype, { closed: { __proto__: null, get() {
      return !!this._writableState && this._writableState.closed;
    } }, destroyed: { __proto__: null, get() {
      return !!this._writableState && this._writableState.destroyed;
    }, set(e8) {
      this._writableState && (this._writableState.destroyed = e8);
    } }, writable: { __proto__: null, get() {
      const e8 = this._writableState;
      return !(!e8 || false === e8.writable || e8.destroyed || e8.errored || e8.ending || e8.ended);
    }, set(e8) {
      this._writableState && (this._writableState.writable = !!e8);
    } }, writableFinished: { __proto__: null, get() {
      return !!this._writableState && this._writableState.finished;
    } }, writableObjectMode: { __proto__: null, get() {
      return !!this._writableState && this._writableState.objectMode;
    } }, writableBuffer: { __proto__: null, get() {
      return this._writableState && this._writableState.getBuffer();
    } }, writableEnded: { __proto__: null, get() {
      return !!this._writableState && this._writableState.ending;
    } }, writableNeedDrain: { __proto__: null, get() {
      const e8 = this._writableState;
      return !!e8 && !e8.destroyed && !e8.ending && e8.needDrain;
    } }, writableHighWaterMark: { __proto__: null, get() {
      return this._writableState && this._writableState.highWaterMark;
    } }, writableCorked: { __proto__: null, get() {
      return this._writableState ? this._writableState.corked : 0;
    } }, writableLength: { __proto__: null, get() {
      return this._writableState && this._writableState.length;
    } }, errored: { __proto__: null, enumerable: false, get() {
      return this._writableState ? this._writableState.errored : null;
    } }, writableAborted: { __proto__: null, enumerable: false, get: function() {
      return !(false === this._writableState.writable || !this._writableState.destroyed && !this._writableState.errored || this._writableState.finished);
    } } });
    const V5 = y5.destroy;
    let Q5;
    function Z5() {
      return void 0 === Q5 && (Q5 = {}), Q5;
    }
    A5.prototype.destroy = function(e8, t2) {
      const r2 = this._writableState;
      return !r2.destroyed && (r2.bufferedIndex < r2.buffered.length || r2[N10].length) && n4.nextTick(q5, r2), V5.call(this, e8, t2), this;
    }, A5.prototype._undestroy = y5.undestroy, A5.prototype._destroy = function(e8, t2) {
      t2(e8);
    }, A5.prototype[f5.captureRejectionSymbol] = function(e8) {
      this.destroy(e8);
    }, A5.fromWeb = function(e8, t2) {
      return Z5().newStreamWritableFromWritableStream(e8, t2);
    }, A5.toWeb = function(e8) {
      return Z5().newWritableStreamFromStreamWritable(e8);
    };
  }, { "../../ours/errors": 39, "../../ours/primordials": 40, "./add-abort-signal": 20, "./destroy": 23, "./duplex": 24, "./legacy": 28, "./state": 33, buffer: 15, events: 16, "process/": 18 }], 37: [function(e7, t, r) {
    const { ArrayIsArray: n4, ArrayPrototypeIncludes: i4, ArrayPrototypeJoin: o4, ArrayPrototypeMap: a4, NumberIsInteger: s3, NumberIsNaN: l6, NumberMAX_SAFE_INTEGER: u4, NumberMIN_SAFE_INTEGER: c3, NumberParseInt: d5, ObjectPrototypeHasOwnProperty: h6, RegExpPrototypeExec: f5, String: p6, StringPrototypeToUpperCase: m5, StringPrototypeTrim: y5 } = e7("../ours/primordials"), { hideStackFrames: g5, codes: { ERR_SOCKET_BAD_PORT: v6, ERR_INVALID_ARG_TYPE: w5, ERR_INVALID_ARG_VALUE: b7, ERR_OUT_OF_RANGE: _5, ERR_UNKNOWN_SIGNAL: E4 } } = e7("../ours/errors"), { normalizeEncoding: T6 } = e7("../ours/util"), { isAsyncFunction: x6, isArrayBufferView: I5 } = e7("../ours/util").types, S6 = {};
    function R5(e8) {
      return e8 === (0 | e8);
    }
    function k5(e8) {
      return e8 === e8 >>> 0;
    }
    const j5 = /^[0-7]+$/, D4 = "must be a 32-bit unsigned integer or an octal string";
    function N10(e8, t2, r2) {
      if (void 0 === e8 && (e8 = r2), "string" == typeof e8) {
        if (null === f5(j5, e8))
          throw new b7(t2, e8, D4);
        e8 = d5(e8, 8);
      }
      return A5(e8, t2), e8;
    }
    const O3 = g5((e8, t2, r2 = c3, n5 = u4) => {
      if ("number" != typeof e8)
        throw new w5(t2, "number", e8);
      if (!s3(e8))
        throw new _5(t2, "an integer", e8);
      if (e8 < r2 || e8 > n5)
        throw new _5(t2, `>= ${r2} && <= ${n5}`, e8);
    }), C5 = g5((e8, t2, r2 = -2147483648, n5 = 2147483647) => {
      if ("number" != typeof e8)
        throw new w5(t2, "number", e8);
      if (!s3(e8))
        throw new _5(t2, "an integer", e8);
      if (e8 < r2 || e8 > n5)
        throw new _5(t2, `>= ${r2} && <= ${n5}`, e8);
    }), A5 = g5((e8, t2, r2 = false) => {
      if ("number" != typeof e8)
        throw new w5(t2, "number", e8);
      if (!s3(e8))
        throw new _5(t2, "an integer", e8);
      const n5 = r2 ? 1 : 0, i5 = 4294967295;
      if (e8 < n5 || e8 > i5)
        throw new _5(t2, `>= ${n5} && <= ${i5}`, e8);
    });
    function M6(e8, t2) {
      if ("string" != typeof e8)
        throw new w5(t2, "string", e8);
    }
    function L4(e8, t2, r2 = void 0, n5) {
      if ("number" != typeof e8)
        throw new w5(t2, "number", e8);
      if (null != r2 && e8 < r2 || null != n5 && e8 > n5 || (null != r2 || null != n5) && l6(e8))
        throw new _5(t2, `${null != r2 ? `>= ${r2}` : ""}${null != r2 && null != n5 ? " && " : ""}${null != n5 ? `<= ${n5}` : ""}`, e8);
    }
    const P5 = g5((e8, t2, r2) => {
      if (!i4(r2, e8)) {
        const n5 = o4(a4(r2, (e9) => "string" == typeof e9 ? `'${e9}'` : p6(e9)), ", ");
        throw new b7(t2, e8, "must be one of: " + n5);
      }
    });
    function B6(e8, t2) {
      if ("boolean" != typeof e8)
        throw new w5(t2, "boolean", e8);
    }
    function $4(e8, t2, r2) {
      return null != e8 && h6(e8, t2) ? e8[t2] : r2;
    }
    const F4 = g5((e8, t2, r2 = null) => {
      const i5 = $4(r2, "allowArray", false), o5 = $4(r2, "allowFunction", false);
      if (!$4(r2, "nullable", false) && null === e8 || !i5 && n4(e8) || "object" != typeof e8 && (!o5 || "function" != typeof e8))
        throw new w5(t2, "Object", e8);
    }), U6 = g5((e8, t2) => {
      if (null != e8 && "object" != typeof e8 && "function" != typeof e8)
        throw new w5(t2, "a dictionary", e8);
    }), q5 = g5((e8, t2, r2 = 0) => {
      if (!n4(e8))
        throw new w5(t2, "Array", e8);
      if (e8.length < r2)
        throw new b7(t2, e8, `must be longer than ${r2}`);
    });
    function Y5(e8, t2) {
      q5(e8, t2);
      for (let r2 = 0; r2 < e8.length; r2++)
        M6(e8[r2], `${t2}[${r2}]`);
    }
    function W5(e8, t2) {
      q5(e8, t2);
      for (let r2 = 0; r2 < e8.length; r2++)
        B6(e8[r2], `${t2}[${r2}]`);
    }
    function z6(e8, t2 = "signal") {
      if (M6(e8, t2), void 0 === S6[e8]) {
        if (void 0 !== S6[m5(e8)])
          throw new E4(e8 + " (signals must use all capital letters)");
        throw new E4(e8);
      }
    }
    const G7 = g5((e8, t2 = "buffer") => {
      if (!I5(e8))
        throw new w5(t2, ["Buffer", "TypedArray", "DataView"], e8);
    });
    function H4(e8, t2) {
      const r2 = T6(t2), n5 = e8.length;
      if ("hex" === r2 && n5 % 2 != 0)
        throw new b7("encoding", t2, `is invalid for data of length ${n5}`);
    }
    function J4(e8, t2 = "Port", r2 = true) {
      if ("number" != typeof e8 && "string" != typeof e8 || "string" == typeof e8 && 0 === y5(e8).length || +e8 != +e8 >>> 0 || e8 > 65535 || 0 === e8 && !r2)
        throw new v6(t2, e8, r2);
      return 0 | e8;
    }
    const V5 = g5((e8, t2) => {
      if (void 0 !== e8 && (null === e8 || "object" != typeof e8 || !("aborted" in e8)))
        throw new w5(t2, "AbortSignal", e8);
    }), Q5 = g5((e8, t2) => {
      if ("function" != typeof e8)
        throw new w5(t2, "Function", e8);
    }), Z5 = g5((e8, t2) => {
      if ("function" != typeof e8 || x6(e8))
        throw new w5(t2, "Function", e8);
    }), K4 = g5((e8, t2) => {
      if (void 0 !== e8)
        throw new w5(t2, "undefined", e8);
    });
    function X5(e8, t2, r2) {
      if (!i4(r2, e8))
        throw new w5(t2, `('${o4(r2, "|")}')`, e8);
    }
    const ee2 = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
    function te2(e8, t2) {
      if (void 0 === e8 || !f5(ee2, e8))
        throw new b7(t2, e8, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
    }
    function re2(e8) {
      if ("string" == typeof e8)
        return te2(e8, "hints"), e8;
      if (n4(e8)) {
        const t2 = e8.length;
        let r2 = "";
        if (0 === t2)
          return r2;
        for (let n5 = 0; n5 < t2; n5++) {
          const i5 = e8[n5];
          te2(i5, "hints"), r2 += i5, n5 !== t2 - 1 && (r2 += ", ");
        }
        return r2;
      }
      throw new b7("hints", e8, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
    }
    t.exports = { isInt32: R5, isUint32: k5, parseFileMode: N10, validateArray: q5, validateStringArray: Y5, validateBooleanArray: W5, validateBoolean: B6, validateBuffer: G7, validateDictionary: U6, validateEncoding: H4, validateFunction: Q5, validateInt32: C5, validateInteger: O3, validateNumber: L4, validateObject: F4, validateOneOf: P5, validatePlainFunction: Z5, validatePort: J4, validateSignalName: z6, validateString: M6, validateUint32: A5, validateUndefined: K4, validateUnion: X5, validateAbortSignal: V5, validateLinkHeaderValue: re2 };
  }, { "../ours/errors": 39, "../ours/primordials": 40, "../ours/util": 41 }], 38: [function(e7, t, r) {
    const n4 = e7("../stream"), i4 = e7("../stream/promises"), o4 = n4.Readable.destroy;
    t.exports = n4.Readable, t.exports._uint8ArrayToBuffer = n4._uint8ArrayToBuffer, t.exports._isUint8Array = n4._isUint8Array, t.exports.isDisturbed = n4.isDisturbed, t.exports.isErrored = n4.isErrored, t.exports.isReadable = n4.isReadable, t.exports.Readable = n4.Readable, t.exports.Writable = n4.Writable, t.exports.Duplex = n4.Duplex, t.exports.Transform = n4.Transform, t.exports.PassThrough = n4.PassThrough, t.exports.addAbortSignal = n4.addAbortSignal, t.exports.finished = n4.finished, t.exports.destroy = n4.destroy, t.exports.destroy = o4, t.exports.pipeline = n4.pipeline, t.exports.compose = n4.compose, Object.defineProperty(n4, "promises", { configurable: true, enumerable: true, get: () => i4 }), t.exports.Stream = n4.Stream, t.exports.default = t.exports;
  }, { "../stream": 42, "../stream/promises": 43 }], 39: [function(e7, t, r) {
    const { format: n4, inspect: i4, AggregateError: o4 } = e7("./util"), a4 = globalThis.AggregateError || o4, s3 = Symbol("kIsNodeError"), l6 = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], u4 = /^([A-Z][a-z0-9]*)+$/, c3 = "__node_internal_", d5 = {};
    function h6(e8, t2) {
      if (!e8)
        throw new d5.ERR_INTERNAL_ASSERTION(t2);
    }
    function f5(e8) {
      let t2 = "", r2 = e8.length;
      const n5 = "-" === e8[0] ? 1 : 0;
      for (; r2 >= n5 + 4; r2 -= 3)
        t2 = `_${e8.slice(r2 - 3, r2)}${t2}`;
      return `${e8.slice(0, r2)}${t2}`;
    }
    function p6(e8, t2, r2) {
      if ("function" == typeof t2)
        return h6(t2.length <= r2.length, `Code: ${e8}; The provided arguments length (${r2.length}) does not match the required ones (${t2.length}).`), t2(...r2);
      const i5 = (t2.match(/%[dfijoOs]/g) || []).length;
      return h6(i5 === r2.length, `Code: ${e8}; The provided arguments length (${r2.length}) does not match the required ones (${i5}).`), 0 === r2.length ? t2 : n4(t2, ...r2);
    }
    function m5(e8, t2, r2) {
      r2 || (r2 = Error);
      class n5 extends r2 {
        constructor(...r3) {
          super(p6(e8, t2, r3));
        }
        toString() {
          return `${this.name} [${e8}]: ${this.message}`;
        }
      }
      Object.defineProperties(n5.prototype, { name: { value: r2.name, writable: true, enumerable: false, configurable: true }, toString: { value() {
        return `${this.name} [${e8}]: ${this.message}`;
      }, writable: true, enumerable: false, configurable: true } }), n5.prototype.code = e8, n5.prototype[s3] = true, d5[e8] = n5;
    }
    function y5(e8) {
      const t2 = c3 + e8.name;
      return Object.defineProperty(e8, "name", { value: t2 }), e8;
    }
    function g5(e8, t2) {
      if (e8 && t2 && e8 !== t2) {
        if (Array.isArray(t2.errors))
          return t2.errors.push(e8), t2;
        const r2 = new a4([t2, e8], t2.message);
        return r2.code = t2.code, r2;
      }
      return e8 || t2;
    }
    class v6 extends Error {
      constructor(e8 = "The operation was aborted", t2 = void 0) {
        if (void 0 !== t2 && "object" != typeof t2)
          throw new d5.ERR_INVALID_ARG_TYPE("options", "Object", t2);
        super(e8, t2), this.code = "ABORT_ERR", this.name = "AbortError";
      }
    }
    m5("ERR_ASSERTION", "%s", Error), m5("ERR_INVALID_ARG_TYPE", (e8, t2, r2) => {
      h6("string" == typeof e8, "'name' must be a string"), Array.isArray(t2) || (t2 = [t2]);
      let n5 = "The ";
      e8.endsWith(" argument") ? n5 += `${e8} ` : n5 += `"${e8}" ${e8.includes(".") ? "property" : "argument"} `, n5 += "must be ";
      const o5 = [], a5 = [], s4 = [];
      for (const e9 of t2)
        h6("string" == typeof e9, "All expected entries have to be of type string"), l6.includes(e9) ? o5.push(e9.toLowerCase()) : u4.test(e9) ? a5.push(e9) : (h6("object" !== e9, 'The value "object" should be written as "Object"'), s4.push(e9));
      if (a5.length > 0) {
        const e9 = o5.indexOf("object");
        -1 !== e9 && (o5.splice(o5, e9, 1), a5.push("Object"));
      }
      if (o5.length > 0) {
        switch (o5.length) {
          case 1:
            n5 += `of type ${o5[0]}`;
            break;
          case 2:
            n5 += `one of type ${o5[0]} or ${o5[1]}`;
            break;
          default: {
            const e9 = o5.pop();
            n5 += `one of type ${o5.join(", ")}, or ${e9}`;
          }
        }
        (a5.length > 0 || s4.length > 0) && (n5 += " or ");
      }
      if (a5.length > 0) {
        switch (a5.length) {
          case 1:
            n5 += `an instance of ${a5[0]}`;
            break;
          case 2:
            n5 += `an instance of ${a5[0]} or ${a5[1]}`;
            break;
          default: {
            const e9 = a5.pop();
            n5 += `an instance of ${a5.join(", ")}, or ${e9}`;
          }
        }
        s4.length > 0 && (n5 += " or ");
      }
      switch (s4.length) {
        case 0:
          break;
        case 1:
          s4[0].toLowerCase() !== s4[0] && (n5 += "an "), n5 += `${s4[0]}`;
          break;
        case 2:
          n5 += `one of ${s4[0]} or ${s4[1]}`;
          break;
        default: {
          const e9 = s4.pop();
          n5 += `one of ${s4.join(", ")}, or ${e9}`;
        }
      }
      if (null == r2)
        n5 += `. Received ${r2}`;
      else if ("function" == typeof r2 && r2.name)
        n5 += `. Received function ${r2.name}`;
      else if ("object" == typeof r2) {
        var c4;
        null !== (c4 = r2.constructor) && void 0 !== c4 && c4.name ? n5 += `. Received an instance of ${r2.constructor.name}` : n5 += `. Received ${i4(r2, { depth: -1 })}`;
      } else {
        let e9 = i4(r2, { colors: false });
        e9.length > 25 && (e9 = `${e9.slice(0, 25)}...`), n5 += `. Received type ${typeof r2} (${e9})`;
      }
      return n5;
    }, TypeError), m5("ERR_INVALID_ARG_VALUE", (e8, t2, r2 = "is invalid") => {
      let n5 = i4(t2);
      return n5.length > 128 && (n5 = n5.slice(0, 128) + "..."), `The ${e8.includes(".") ? "property" : "argument"} '${e8}' ${r2}. Received ${n5}`;
    }, TypeError), m5("ERR_INVALID_RETURN_VALUE", (e8, t2, r2) => {
      var n5;
      return `Expected ${e8} to be returned from the "${t2}" function but got ${null != r2 && null !== (n5 = r2.constructor) && void 0 !== n5 && n5.name ? `instance of ${r2.constructor.name}` : "type " + typeof r2}.`;
    }, TypeError), m5("ERR_MISSING_ARGS", (...e8) => {
      let t2;
      h6(e8.length > 0, "At least one arg needs to be specified");
      const r2 = e8.length;
      switch (e8 = (Array.isArray(e8) ? e8 : [e8]).map((e9) => `"${e9}"`).join(" or "), r2) {
        case 1:
          t2 += `The ${e8[0]} argument`;
          break;
        case 2:
          t2 += `The ${e8[0]} and ${e8[1]} arguments`;
          break;
        default: {
          const r3 = e8.pop();
          t2 += `The ${e8.join(", ")}, and ${r3} arguments`;
        }
      }
      return `${t2} must be specified`;
    }, TypeError), m5("ERR_OUT_OF_RANGE", (e8, t2, r2) => {
      let n5;
      return h6(t2, 'Missing "range" argument'), Number.isInteger(r2) && Math.abs(r2) > 2 ** 32 ? n5 = f5(String(r2)) : "bigint" == typeof r2 ? (n5 = String(r2), (r2 > 2n ** 32n || r2 < -(2n ** 32n)) && (n5 = f5(n5)), n5 += "n") : n5 = i4(r2), `The value of "${e8}" is out of range. It must be ${t2}. Received ${n5}`;
    }, RangeError), m5("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), m5("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), m5("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), m5("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), m5("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), m5("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), m5("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), m5("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), m5("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), m5("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), m5("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), t.exports = { AbortError: v6, aggregateTwoErrors: y5(g5), hideStackFrames: y5, codes: d5 };
  }, { "./util": 41 }], 40: [function(e7, t, r) {
    t.exports = { ArrayIsArray: (e8) => Array.isArray(e8), ArrayPrototypeIncludes: (e8, t2) => e8.includes(t2), ArrayPrototypeIndexOf: (e8, t2) => e8.indexOf(t2), ArrayPrototypeJoin: (e8, t2) => e8.join(t2), ArrayPrototypeMap: (e8, t2) => e8.map(t2), ArrayPrototypePop: (e8, t2) => e8.pop(t2), ArrayPrototypePush: (e8, t2) => e8.push(t2), ArrayPrototypeSlice: (e8, t2, r2) => e8.slice(t2, r2), Error, FunctionPrototypeCall: (e8, t2, ...r2) => e8.call(t2, ...r2), FunctionPrototypeSymbolHasInstance: (e8, t2) => Function.prototype[Symbol.hasInstance].call(e8, t2), MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties: (e8, t2) => Object.defineProperties(e8, t2), ObjectDefineProperty: (e8, t2, r2) => Object.defineProperty(e8, t2, r2), ObjectGetOwnPropertyDescriptor: (e8, t2) => Object.getOwnPropertyDescriptor(e8, t2), ObjectKeys: (e8) => Object.keys(e8), ObjectSetPrototypeOf: (e8, t2) => Object.setPrototypeOf(e8, t2), Promise, PromisePrototypeCatch: (e8, t2) => e8.catch(t2), PromisePrototypeThen: (e8, t2, r2) => e8.then(t2, r2), PromiseReject: (e8) => Promise.reject(e8), ReflectApply: Reflect.apply, RegExpPrototypeTest: (e8, t2) => e8.test(t2), SafeSet: Set, String, StringPrototypeSlice: (e8, t2, r2) => e8.slice(t2, r2), StringPrototypeToLowerCase: (e8) => e8.toLowerCase(), StringPrototypeToUpperCase: (e8) => e8.toUpperCase(), StringPrototypeTrim: (e8) => e8.trim(), Symbol, SymbolFor: Symbol.for, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, TypedArrayPrototypeSet: (e8, t2, r2) => e8.set(t2, r2), Uint8Array };
  }, {}], 41: [function(e7, t, r) {
    const n4 = e7("buffer"), i4 = Object.getPrototypeOf(async function() {
    }).constructor, o4 = globalThis.Blob || n4.Blob, a4 = void 0 !== o4 ? function(e8) {
      return e8 instanceof o4;
    } : function(e8) {
      return false;
    };
    class s3 extends Error {
      constructor(e8) {
        if (!Array.isArray(e8))
          throw new TypeError("Expected input to be an Array, got " + typeof e8);
        let t2 = "";
        for (let r2 = 0; r2 < e8.length; r2++)
          t2 += `    ${e8[r2].stack}
`;
        super(t2), this.name = "AggregateError", this.errors = e8;
      }
    }
    t.exports = { AggregateError: s3, kEmptyObject: Object.freeze({}), once(e8) {
      let t2 = false;
      return function(...r2) {
        t2 || (t2 = true, e8.apply(this, r2));
      };
    }, createDeferredPromise: function() {
      let e8, t2;
      return { promise: new Promise((r2, n5) => {
        e8 = r2, t2 = n5;
      }), resolve: e8, reject: t2 };
    }, promisify: (e8) => new Promise((t2, r2) => {
      e8((e9, ...n5) => e9 ? r2(e9) : t2(...n5));
    }), debuglog: () => function() {
    }, format: (e8, ...t2) => e8.replace(/%([sdifj])/g, function(...[e9, r2]) {
      const n5 = t2.shift();
      return "f" === r2 ? n5.toFixed(6) : "j" === r2 ? JSON.stringify(n5) : "s" === r2 && "object" == typeof n5 ? `${n5.constructor !== Object ? n5.constructor.name : ""} {}`.trim() : n5.toString();
    }), inspect(e8) {
      switch (typeof e8) {
        case "string":
          if (e8.includes("'")) {
            if (!e8.includes('"'))
              return `"${e8}"`;
            if (!e8.includes("`") && !e8.includes("${"))
              return `\`${e8}\``;
          }
          return `'${e8}'`;
        case "number":
          return isNaN(e8) ? "NaN" : Object.is(e8, -0) ? String(e8) : e8;
        case "bigint":
          return `${String(e8)}n`;
        case "boolean":
        case "undefined":
          return String(e8);
        case "object":
          return "{}";
      }
    }, types: { isAsyncFunction: (e8) => e8 instanceof i4, isArrayBufferView: (e8) => ArrayBuffer.isView(e8) }, isBlob: a4 }, t.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
  }, { buffer: 15 }], 42: [function(e7, t, r) {
    const { Buffer: n4 } = e7("buffer"), { ObjectDefineProperty: i4, ObjectKeys: o4, ReflectApply: a4 } = e7("./ours/primordials"), { promisify: { custom: s3 } } = e7("./ours/util"), { streamReturningOperators: l6, promiseReturningOperators: u4 } = e7("./internal/streams/operators"), { codes: { ERR_ILLEGAL_CONSTRUCTOR: c3 } } = e7("./ours/errors"), d5 = e7("./internal/streams/compose"), { pipeline: h6 } = e7("./internal/streams/pipeline"), { destroyer: f5 } = e7("./internal/streams/destroy"), p6 = e7("./internal/streams/end-of-stream"), m5 = e7("./stream/promises"), y5 = e7("./internal/streams/utils"), g5 = t.exports = e7("./internal/streams/legacy").Stream;
    g5.isDisturbed = y5.isDisturbed, g5.isErrored = y5.isErrored, g5.isReadable = y5.isReadable, g5.Readable = e7("./internal/streams/readable");
    for (const w5 of o4(l6)) {
      let _5 = function(...e8) {
        if (new.target)
          throw c3();
        return g5.Readable.from(a4(b7, this, e8));
      };
      const b7 = l6[w5];
      i4(_5, "name", { __proto__: null, value: b7.name }), i4(_5, "length", { __proto__: null, value: b7.length }), i4(g5.Readable.prototype, w5, { __proto__: null, value: _5, enumerable: false, configurable: true, writable: true });
    }
    for (const E4 of o4(u4)) {
      let x6 = function(...e8) {
        if (new.target)
          throw c3();
        return a4(T6, this, e8);
      };
      const T6 = u4[E4];
      i4(x6, "name", { __proto__: null, value: T6.name }), i4(x6, "length", { __proto__: null, value: T6.length }), i4(g5.Readable.prototype, E4, { __proto__: null, value: x6, enumerable: false, configurable: true, writable: true });
    }
    g5.Writable = e7("./internal/streams/writable"), g5.Duplex = e7("./internal/streams/duplex"), g5.Transform = e7("./internal/streams/transform"), g5.PassThrough = e7("./internal/streams/passthrough"), g5.pipeline = h6;
    const { addAbortSignal: v6 } = e7("./internal/streams/add-abort-signal");
    g5.addAbortSignal = v6, g5.finished = p6, g5.destroy = f5, g5.compose = d5, i4(g5, "promises", { __proto__: null, configurable: true, enumerable: true, get: () => m5 }), i4(h6, s3, { __proto__: null, enumerable: true, get: () => m5.pipeline }), i4(p6, s3, { __proto__: null, enumerable: true, get: () => m5.finished }), g5.Stream = g5, g5._isUint8Array = function(e8) {
      return e8 instanceof Uint8Array;
    }, g5._uint8ArrayToBuffer = function(e8) {
      return n4.from(e8.buffer, e8.byteOffset, e8.byteLength);
    };
  }, { "./internal/streams/add-abort-signal": 20, "./internal/streams/compose": 22, "./internal/streams/destroy": 23, "./internal/streams/duplex": 24, "./internal/streams/end-of-stream": 26, "./internal/streams/legacy": 28, "./internal/streams/operators": 29, "./internal/streams/passthrough": 30, "./internal/streams/pipeline": 31, "./internal/streams/readable": 32, "./internal/streams/transform": 34, "./internal/streams/utils": 35, "./internal/streams/writable": 36, "./ours/errors": 39, "./ours/primordials": 40, "./ours/util": 41, "./stream/promises": 43, buffer: 15 }], 43: [function(e7, t, r) {
    const { ArrayPrototypePop: n4, Promise: i4 } = e7("../ours/primordials"), { isIterable: o4, isNodeStream: a4, isWebStream: s3 } = e7("../internal/streams/utils"), { pipelineImpl: l6 } = e7("../internal/streams/pipeline"), { finished: u4 } = e7("../internal/streams/end-of-stream");
    function c3(...e8) {
      return new i4((t2, r2) => {
        let i5, u5;
        const c4 = e8[e8.length - 1];
        if (c4 && "object" == typeof c4 && !a4(c4) && !o4(c4) && !s3(c4)) {
          const t3 = n4(e8);
          i5 = t3.signal, u5 = t3.end;
        }
        l6(e8, (e9, n5) => {
          e9 ? r2(e9) : t2(n5);
        }, { signal: i5, end: u5 });
      });
    }
    e7("../../lib/stream.js"), t.exports = { finished: u4, pipeline: c3 };
  }, { "../../lib/stream.js": 42, "../internal/streams/end-of-stream": 26, "../internal/streams/pipeline": 31, "../internal/streams/utils": 35, "../ours/primordials": 40 }] }, {}, [10])(10);
  var Qh = Vh.exports;
  var Zh = class {
    constructor(e7, t) {
      this.graphName = e7, this.idx = t;
    }
    toString() {
      return `${this.graphName}:${this.idx}`;
    }
  };
  var Kh = class {
    constructor(e7, t) {
      this.tp = e7, this.val = t;
    }
    toString() {
      return JSON.stringify(this);
    }
    static getRefFromQuad(e7) {
      return e7.termType === rs.IRI ? new Kh(rs.IRI, e7.value) : e7.termType === rs.BlankNode ? new Kh(rs.BlankNode, e7.value) : new Kh(rs.Undefined, "");
    }
  };
  var Xh = class {
    async loadDocument(e7, t = []) {
      const r = e7.startsWith("http:"), n4 = e7.startsWith("https:");
      if (!r && !n4)
        throw new rl('URL could not be dereferenced; only "http" and "https" URLs are supported.', "jsonld.InvalidUrl", { code: "loading document failed", url: e7 });
      let i4 = null;
      const { res: o4, body: a4 } = await rf({ url: e7 }), s3 = { contextUrl: null, documentUrl: e7, document: a4 || null };
      if (o4.status >= 400)
        throw new rl(`URL "${e7}" could not be dereferenced: ${o4.statusText}`, "jsonld.InvalidUrl", { code: "loading document failed", url: e7, httpStatusCode: o4.status });
      const l6 = o4.headers.get("link");
      let u4 = o4.headers.get("location");
      const c3 = o4.headers.get("content-type");
      if (l6 && "application/ld+json" !== c3 && "application/json" !== c3) {
        const t2 = hl.parseLinkHeader(l6), r2 = t2[vl.LINK_HEADER_CONTEXT];
        if (Array.isArray(r2))
          throw new rl("URL could not be dereferenced, it has more than one associated HTTP Link Header.", "jsonld.InvalidUrl", { code: "multiple context link headers", url: e7 });
        r2 && (s3.contextUrl = r2.target), i4 = t2.alternate, i4 && "application/ld+json" == i4.type && !(c3 || "").match(/^application\/(\w*\+)?json$/) && (u4 = El.prependBase(e7, i4.target));
      }
      if ((i4 || o4.status >= 300 && o4.status < 400) && u4) {
        if (-1 === t.length)
          throw new rl("URL could not be dereferenced; there were too many redirects.", "jsonld.TooManyRedirects", { code: "loading document failed", url: e7, httpStatusCode: o4.status, redirects: t });
        if (-1 !== t.indexOf(e7))
          throw new rl("URL could not be dereferenced; infinite redirection was detected.", "jsonld.InfiniteRedirectDetected", { code: "recursive context inclusion", url: e7, httpStatusCode: o4.status, redirects: t });
        t.push(e7);
        const r2 = new URL(u4, e7).href;
        return this.loadDocument(r2, t);
      }
      return t.push(e7), s3;
    }
  };
  var ef = "cat";
  async function tf(e7, t, r) {
    if (!t && !r)
      throw new rl("IPFS is not configured", "jsonld.IPFSNotConfigured", { code: "loading document failed", url: nf + e7 });
    return null !== t ? await async function(e8, t2) {
      const r2 = new URL(function(e9, t3) {
        const r3 = "/api/v0";
        for (; e9.endsWith("/"); )
          e9 = e9.slice(0, -1);
        return e9.endsWith(r3) || (e9 += r3), e9 + "/" + t3;
      }(t2, ef));
      r2.searchParams.append("arg", e8);
      const { res: n4, body: i4 } = await rf({ url: r2, method: "POST" });
      if (200 != n4.status)
        throw new Error(`Error calling IPFS node: [${n4.status}] ${n4.statusText}
${i4}`);
      return { contextUrl: null, document: i4 || null, documentUrl: nf + e8 };
    }(e7, t) : await async function(e8, t2) {
      const r2 = new Xh(), n4 = await r2.loadDocument(function(e9, t3) {
        return function(e10) {
          for (; e10.endsWith("/"); )
            e10 = e10.slice(0, -1);
          return e10;
        }(e9) + "/ipfs/" + function(e10) {
          for (; e10.startsWith("/"); )
            e10 = e10.slice(1);
          return e10;
        }(t3);
      }(t2, e8), []);
      return n4.contextUrl = null, n4.documentUrl = nf + e8, n4;
    }(e7, r);
  }
  async function rf({ url: e7, method: t }) {
    const r = {};
    void 0 !== t && (r.method = t);
    try {
      (e7 = new URL(e7)).username && e7.password && (r.headers = { ...r.headers ?? {}, authorization: `Basic ${btoa(e7.username + ":" + e7.password)}` }, e7 = function(e8) {
        const t3 = new URL(e8);
        return t3.username = "", t3.password = "", t3.href;
      }(e7));
      const t2 = await fetch(e7, r);
      if (t2.status >= 300 && t2.status < 400)
        return { res: t2, body: null };
      const n4 = await t2.text();
      return n4 && n4.length > 0 && n4.startsWith("{") ? { res: t2, body: JSON.parse(n4) } : { res: t2, body: n4 };
    } catch (t2) {
      if (t2.response)
        return { res: t2.response, body: null };
      throw new rl("URL could not be dereferenced, an error occurred.", "jsonld.LoadDocumentError", { code: "loading document failed", url: e7, cause: t2 });
    }
  }
  var nf = "ipfs://";
  function of(e7) {
    return e7?.hasher ?? a3;
  }
  function af(e7) {
    const t = e7?.ipfsNodeURL ?? null, r = e7?.ipfsGatewayURL ?? null;
    return e7?.documentLoader ?? ((e8 = null, t2 = null) => async (r2) => {
      if (r2.startsWith(nf)) {
        const n4 = r2.slice(nf.length);
        return await tf(n4, e8, t2);
      }
      return new Xh().loadDocument(r2, []);
    })(t, r);
  }
  var sf = class {
    constructor(e7 = /* @__PURE__ */ new Map()) {
      this.graphs = e7;
    }
    static async fromDocument(e7, t = af()) {
      const r = await Hh.canonize(e7, { format: i3.QUADS_FORMAT, documentLoader: t }), n4 = new Qh.Parser({ format: i3.QUADS_FORMAT }).parse(r), o4 = new sf();
      for (const e8 of n4) {
        const t2 = e8.graph.termType === i3.DEFAULT_GRAPH_TERM_TYPE ? i3.DEFAULT_GRAPH_NODE_NAME : e8.graph.value, r2 = o4.graphs.get(t2) ?? [];
        r2.push(e8), o4.graphs.set(t2, r2);
      }
      return o4;
    }
    static getQuad(e7, t) {
      const r = e7.graphs.get(t.graphName);
      if (!r)
        throw i3.ERRORS.GRAPH_NOT_FOUND;
      if (t.idx >= r.length)
        throw i3.ERRORS.QUAD_NOT_FOUND;
      return r[t.idx];
    }
    static iterGraphsOrdered(e7, t) {
      const r = [];
      for (const t2 of e7.graphs.keys())
        r.push(t2);
      r.sort((e8, t2) => e8.localeCompare(t2));
      for (const n4 of r) {
        t(n4, e7.graphs.get(n4));
      }
    }
    static findParent(e7, t) {
      const r = sf.findParentInsideGraph(e7, t);
      return r || sf.findGraphParent(e7, t);
    }
    static findParentInsideGraph(e7, t) {
      const r = os(t);
      let n4;
      const o4 = e7.graphs.get(r);
      if (!o4)
        return;
      const a4 = Kh.getRefFromQuad(t.subject);
      if (a4.tp === rs.Undefined)
        return;
      let s3 = false;
      for (let e8 = 0; e8 < o4.length; e8++) {
        const l6 = o4[e8];
        if (l6.equals(t))
          continue;
        const u4 = Kh.getRefFromQuad(l6.object);
        if (u4.tp !== rs.Undefined && (a4?.tp === u4?.tp && a4?.val === u4?.val)) {
          if (s3)
            throw i3.ERRORS.MULTIPLE_PARENTS_FOUND;
          s3 = true, n4 = new Zh(r, e8);
        }
      }
      return n4;
    }
    static findGraphParent(e7, t) {
      if (!t.graph)
        return;
      const r = Kh.getRefFromQuad(t.graph);
      if (r.tp === rs.Undefined)
        return;
      if (r.tp !== rs.BlankNode)
        throw new Error("graph parent can only be a blank node");
      let n4, o4 = false;
      for (const [a4, s3] of e7.graphs)
        for (let e8 = 0; e8 < s3.length; e8++) {
          const l6 = s3[e8];
          if (l6.equals(t))
            continue;
          const u4 = Kh.getRefFromQuad(l6.object);
          if (u4.tp !== rs.Undefined && r.toString() == u4.toString()) {
            if (o4)
              throw i3.ERRORS.MULTIPLE_PARENTS_FOUND;
            o4 = true, n4 = new Zh(a4, e8);
          }
        }
      if (o4)
        return n4;
      throw i3.ERRORS.PARENT_NOT_FOUND;
    }
  };
  sf.assertDatasetConsistency = (e7) => {
    for (const [t, r] of e7.graphs)
      for (const e8 of r) {
        if (!t)
          throw new Error("empty graph name");
        if (t === i3.DEFAULT_GRAPH_NODE_NAME && e8.graph.id)
          throw new Error("graph should be nil for @default graph");
        if (!e8.graph.id && t !== i3.DEFAULT_GRAPH_NODE_NAME)
          throw new Error("graph should not be nil for non-@default graph");
      }
  };
  var lf = class {
    constructor(e7 = [], t = a3) {
      this.parts = e7, this.hasher = t;
    }
    reverse() {
      return this.parts.reverse();
    }
    append(e7) {
      this.parts = [...this.parts, ...e7];
    }
    prepend(e7) {
      this.parts = [...e7, ...this.parts];
    }
    async mtEntry() {
      const e7 = this.hasher ?? a3, t = new Array(this.parts.length).fill(BigInt(0));
      for (let r = 0; r < this.parts.length; r += 1) {
        const n4 = this.parts[r];
        if ("string" == typeof n4) {
          const i4 = ss.encode(n4);
          t[r] = await e7.hashBytes(i4);
        } else {
          if ("number" != typeof n4)
            throw new Error("error: unexpected type " + typeof n4);
          t[r] = BigInt(n4);
        }
      }
      return e7.hash(t);
    }
    async pathFromContext(e7, t, r) {
      const n4 = JSON.parse(e7);
      if (!n4["@context"])
        throw i3.ERRORS.CONTEXT_NOT_DEFINED;
      const o4 = { documentLoader: af(r) }, a4 = await Hh.processContext(null, null, o4);
      let s3 = await Hh.processContext(a4, n4, o4);
      const l6 = t.split(".");
      for (const e8 in l6) {
        const t2 = l6[e8];
        if (i3.DIGITS_ONLY_REGEX.test(t2))
          this.parts.push(parseInt(t2));
        else {
          const e9 = s3.mappings.get(t2);
          if ("object" != typeof e9)
            throw i3.ERRORS.TERM_IS_NOT_DEFINED;
          const r2 = e9["@id"];
          if (!r2)
            throw i3.ERRORS.NO_ID_ATTR;
          e9["@context"] && (s3 = await Hh.processContext(s3, e9, o4)), this.parts.push(r2);
        }
      }
    }
    async typeFromContext(e7, t, r) {
      const n4 = JSON.parse(e7);
      if (!("@context" in n4))
        throw i3.ERRORS.PARSED_CONTEXT_IS_NULL;
      const o4 = { documentLoader: af(r) }, a4 = await Hh.processContext(null, null, o4);
      let s3 = await Hh.processContext(a4, n4, o4);
      const l6 = t.split(".");
      for (const e8 in l6) {
        const t2 = uf(s3, l6[e8]);
        t2.hasContext && (s3 = await Hh.processContext(s3, t2.typeDef, o4)), this.parts.push(t2["@id"]);
      }
      return lf.getTypeMapping(s3, l6[l6.length - 1]);
    }
    static getTypeMapping(e7, t) {
      let r = "";
      const n4 = e7.mappings.get("@type");
      n4 && (r = n4);
      const i4 = e7.mappings.get(t);
      return i4 && i4["@type"] && (r = i4["@type"]), r;
    }
    static async pathFromDocument(e7, t, r, n4, o4) {
      if (0 === r.length)
        return [];
      const a4 = r[0], s3 = r.slice(1), l6 = { documentLoader: af(o4) };
      if (i3.DIGITS_ONLY_REGEX.test(a4)) {
        return [parseInt(a4), ...await lf.pathFromDocument(e7, t, s3, true, o4)];
      }
      if ("object" != typeof t)
        throw new Error("error: expected type object got " + typeof t);
      if (Array.isArray(t)) {
        if (!t.length)
          throw new Error("error: can't generate path on zero-sized array");
        if (!n4)
          throw i3.ERRORS.UNEXPECTED_ARR_ELEMENT;
        return lf.pathFromDocument(e7, t[0], r, false, o4);
      }
      if ("@context" in t)
        if (e7)
          e7 = await Hh.processContext(e7, t, l6);
        else {
          const r2 = await Hh.processContext(null, null, l6);
          e7 = await Hh.processContext(r2, t, l6);
        }
      const u4 = as(Object.keys(t)), c3 = e7;
      for (const r2 in u4) {
        const n5 = u4[r2];
        if ("@type" !== n5) {
          const t2 = e7.mappings.get(n5);
          if ("object" != typeof t2)
            continue;
          if ("@type" !== t2["@id"])
            continue;
        }
        let i4 = [];
        if (Array.isArray(t[n5]))
          t[n5].forEach((e8) => {
            if ("string" != typeof e8)
              throw new Error("error: @type value must be an array of strings: " + typeof e8);
            i4.push(e8), i4 = as(i4);
          });
        else {
          if ("string" != typeof t[n5])
            throw new Error("error: unexpected @type field type: " + typeof t[n5]);
          i4.push(t[n5]);
        }
        for (const t2 of i4) {
          const r3 = c3.mappings.get(t2);
          "object" == typeof r3 && "@context" in r3 && (e7 = await Hh.processContext(e7, r3, l6));
        }
        break;
      }
      const d5 = uf(e7, a4);
      if (d5.hasContext)
        if (e7)
          e7 = await Hh.processContext(e7, d5.typeDef, l6);
        else {
          const t2 = await Hh.processContext(null, null, l6);
          e7 = await Hh.processContext(t2, d5.typeDef, l6);
        }
      const h6 = await lf.pathFromDocument(e7, t[a4], s3, true, o4);
      return [d5["@id"], ...h6];
    }
    static async newPathFromCtx(e7, t, r) {
      const n4 = new lf([], of(r));
      return await n4.pathFromContext(e7, t, r), n4;
    }
    static async fromDocument(e7, t, r, n4) {
      const o4 = JSON.parse(t), a4 = r.split(".");
      if (0 === a4.length)
        throw i3.ERRORS.FIELD_PATH_IS_EMPTY;
      const s3 = await lf.pathFromDocument(e7, o4, a4, false, n4);
      return new lf(s3, of(n4));
    }
    static async newTypeFromContext(e7, t, r) {
      const n4 = new lf([], of(r));
      return await n4.typeFromContext(e7, t, r);
    }
    static async getTypeIDFromContext(e7, t, r) {
      const n4 = JSON.parse(e7), i4 = { documentLoader: af(r) }, o4 = await Hh.processContext(null, null, i4), a4 = (await Hh.processContext(o4, n4, i4)).mappings.get(t);
      if (!a4)
        throw new Error(`looks like ${t} is not a type`);
      const s3 = a4["@id"];
      if (!s3)
        throw new Error(`@id attribute is not found for type ${t}`);
      if ("string" != typeof s3)
        throw new Error(`@id attribute is not a string for type ${t}`);
      return s3;
    }
  };
  function uf(e7, t) {
    const r = e7.mappings.get(t);
    if ("object" != typeof r)
      throw i3.ERRORS.TERM_IS_NOT_DEFINED;
    const n4 = r["@id"];
    if (!n4)
      throw i3.ERRORS.NO_ID_ATTR;
    if ("string" != typeof n4)
      throw new Error("error: @id attr is not of type string: " + typeof n4);
    return { "@id": n4, hasContext: "@context" in r, typeDef: r };
  }
  lf.newPath = (e7) => {
    const t = new lf();
    return t.append(e7), t;
  }, lf.getContextPathKey = async (e7, t, r, n4) => {
    if ("" === t)
      throw i3.ERRORS.CTX_TYP_IS_EMPTY;
    if ("" === r)
      throw i3.ERRORS.FIELD_PATH_IS_EMPTY;
    const o4 = await lf.newPathFromCtx(e7, `${t}.${r}`, n4), a4 = await lf.newPathFromCtx(e7, t, n4);
    return new lf(o4.parts.slice(a4.parts.length));
  };
  var cf = class {
    constructor(e7) {
      this.graph = os(e7);
      const t = e7.subject;
      switch (t.termType) {
        case rs.IRI:
          this.subject = { tp: rs.IRI, val: t.value };
          break;
        case rs.BlankNode:
          this.subject = { tp: rs.BlankNode, val: t.value };
          break;
        default:
          throw new Error("invalid subject type");
      }
      if (e7.predicate.termType !== rs.IRI)
        throw new Error("invalid predicate type");
      this.predicate = e7.predicate.value;
    }
    toString() {
      return JSON.stringify(this);
    }
  };
  cf.countEntries = (e7) => {
    const t = /* @__PURE__ */ new Map();
    for (const r of e7) {
      const e8 = new cf(r);
      let n4 = t.get(e8.toString()) ?? 0;
      t.set(e8.toString(), ++n4);
    }
    return t;
  };
  var df = class {
    constructor(e7 = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), r = a3) {
      this.parents = e7, this.children = t, this.hasher = r;
    }
    static getIriValue(e7) {
      if (e7.predicate.termType === rs.IRI)
        return e7.predicate.value;
      throw new Error("type is not IRI");
    }
    path(e7, t, r) {
      const n4 = new lf([], this.hasher);
      "number" == typeof r && n4.append([r]);
      const i4 = sf.getQuad(t, e7), o4 = df.getIriValue(i4);
      n4.append([o4]);
      let a4 = e7;
      for (; ; ) {
        const e8 = this.parents.get(a4.toString());
        if (!e8)
          break;
        const r2 = sf.getQuad(t, e8), i5 = new cf(r2), o5 = this.children.get(i5.toString());
        if (!o5)
          throw new Error("parent mapping not found");
        const s3 = sf.getQuad(t, a4), l6 = Kh.getRefFromQuad(s3.subject), u4 = o5.get(l6.toString());
        if ("number" != typeof u4)
          throw new Error("child not found in parents mapping");
        const c3 = df.getIriValue(r2);
        1 === o5.size ? n4.append([c3]) : n4.append([u4, c3]), a4 = e8;
      }
      return n4.reverse(), n4;
    }
    static async newRelationship(e7, t) {
      const r = new df(/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), t);
      return sf.iterGraphsOrdered(e7, (t2, n4) => {
        for (let i4 = 0; i4 < n4.length; i4++) {
          const o4 = n4[i4], a4 = sf.findParent(e7, o4);
          if (!a4)
            continue;
          const s3 = new Zh(t2, i4);
          r.parents.set(s3.toString(), a4);
          const l6 = sf.getQuad(e7, a4), u4 = new cf(l6);
          let c3 = r.children.get(u4.toString());
          c3 || (c3 = /* @__PURE__ */ new Map(), r.children.set(u4.toString(), c3));
          const d5 = Kh.getRefFromQuad(o4.subject);
          if ("number" != typeof c3.get(d5.toString())) {
            const e8 = c3.size;
            c3.set(d5.toString(), e8);
          }
        }
      }), r;
    }
  };
  var hf = class {
    constructor(e7, t, r = "", n4 = a3) {
      if (this.key = e7, this.value = t, this.dataType = r, this.hasher = n4, !e7.parts.length)
        throw new Error("key length is zero");
      ((e8) => {
        switch (typeof e8) {
          case "boolean":
          case "string":
          case "bigint":
          case "number":
            return;
          case "object":
            if (e8 instanceof es.Instant)
              return;
        }
        throw new Error(`unexpected value type ${typeof e8}, expected boolean | number | Temporal.Instant | string`);
      })(t);
    }
    getHasher() {
      return this.hasher;
    }
    getKeyMtEntry() {
      return this.key.mtEntry();
    }
    getValueMtEntry() {
      return hs.mkValueMtEntry(this.getHasher(), this.value);
    }
    async getKeyValueMTEntry() {
      return { k: await this.getKeyMtEntry(), v: await this.getValueMtEntry() };
    }
    static async fromDataSet(e7, t = a3) {
      sf.assertDatasetConsistency(e7);
      if (!e7.graphs.get(i3.DEFAULT_GRAPH_NODE_NAME).length)
        throw new Error("@default graph not found in dataset");
      const r = await df.newRelationship(e7, t), n4 = [];
      return sf.iterGraphsOrdered(e7, (i4, o4) => {
        const a4 = cf.countEntries(o4), s3 = /* @__PURE__ */ new Map();
        for (let l6 = 0; l6 < o4.length; l6++) {
          let u4 = "";
          const c3 = o4[l6], d5 = new Zh(i4, l6), h6 = new cf(c3);
          let f5;
          const p6 = c3.object.termType, m5 = c3.object.value;
          switch (p6) {
            case rs.Literal:
              u4 = c3?.object?.datatype?.value, f5 = us(u4, m5, t.prime());
              break;
            case rs.IRI:
              if (!p6)
                throw new Error("object IRI is nil");
              f5 = m5;
              break;
            case rs.BlankNode:
              if (r.children.get(h6.toString()))
                continue;
              throw new Error("BlankNode is not supported yet");
            case "Variable":
              f5 = m5;
              break;
            default:
              throw new Error("unexpected Quad's Object type");
          }
          let y5;
          switch (a4.get(h6.toString())) {
            case 0:
              throw new Error("[assertion] key not found in counts");
            case 1:
              break;
            default:
              const e8 = h6.toString();
              y5 = s3.get(e8) ?? 0, s3.set(e8, y5 + 1);
          }
          const g5 = r.path(d5, e7, y5), v6 = new hf(g5, f5, u4, t);
          n4.push(v6);
        }
      }), n4;
    }
  };
  hf.newRDFEntry = (e7, t) => {
    const r = new hf(e7, t);
    switch (typeof t) {
      case "number":
      case "string":
      case "boolean":
        r.value = t;
        break;
      default:
        if (!(t instanceof es.Instant))
          throw new Error("error: incorrect value type " + typeof t);
        r.value = t;
    }
    return r;
  };
  var ff = class {
    constructor(e7 = null, i4 = null, o4 = a3, s3 = /* @__PURE__ */ new Map(), l6 = null, u4 = af()) {
      if (this.srcDoc = e7, this.mt = i4, this.hasher = o4, this.entries = s3, this.compacted = l6, this.documentLoader = u4, !i4) {
        const { db: e8, writable: i5, maxLevels: o5 } = ((e9 = "", n4 = true, i6 = 40) => ({ db: new j3(B3(e9)), writable: n4, maxLevels: i6 }))();
        this.mt = new Jt(e8, i5, o5);
      }
    }
    async proof(e7) {
      const t = await e7.mtEntry(), { proof: r } = await this.mt.generateProof(t);
      if (r.existence) {
        if (!this.entries.has(t.toString()))
          throw new Error("error: [assertion] no entry found while existence is true");
        const e8 = this.entries.get(t.toString());
        return { proof: r, value: new hs(e8.value, this.hasher) };
      }
      return { proof: r };
    }
    mkValue(e7) {
      return new hs(e7, this.hasher);
    }
    async resolveDocPath(e7, t) {
      const r = await lf.fromDocument(null, this.srcDoc, e7, t);
      return r.hasher = this.hasher, r;
    }
    async entry(e7) {
      const t = await e7.mtEntry(), r = this.entries.get(t.toString());
      if (!r)
        throw new Error("entry not found");
      return r;
    }
    async jsonLDType(e7) {
      return (await this.entry(e7)).dataType;
    }
    async root() {
      return this.mt.root();
    }
    rawValue(e7) {
      let t = e7.parts, r = this.compacted;
      const n4 = [];
      for (; t.length > 0; ) {
        const e8 = t[0];
        if ("string" == typeof e8) {
          if (n4.push(e8), r = r[e8] ?? r["@graph"][e8], !r)
            throw new Error("value not found");
        } else {
          if ("number" != typeof e8)
            throw new Error(`unexpected type of path ${n4.join(" / ")}`);
          n4.push(e8.toString()), r = this.rvExtractArrayIdx(r, e8);
        }
        t = t.slice(1);
      }
      return void 0 !== r["@value"] ? r["@value"] : r;
    }
    rvExtractArrayIdx(e7, t) {
      if (!Array.isArray(e7))
        throw new Error("expected array");
      if (t < 0 || t >= e7.length)
        throw new Error("index is out of range");
      return e7[t];
    }
    static async merklizeJSONLD(e7, t) {
      const r = of(t), n4 = af(t), i4 = new ff(e7, null, r, /* @__PURE__ */ new Map(), null, n4), o4 = JSON.parse(i4.srcDoc), a4 = await sf.fromDocument(o4, n4), s3 = await hf.fromDataSet(a4, r);
      for (const e8 of s3) {
        const t2 = await e8.getKeyMtEntry();
        i4.entries.set(t2.toString(), e8);
      }
      return await (async (e8, t2) => {
        for (const r2 of t2) {
          const { k: t3, v: n5 } = await r2.getKeyValueMTEntry();
          await e8.add(t3, n5);
        }
      })(i4.mt, s3), i4.compacted = await Hh.compact(o4, {}, { documentLoader: n4, base: null, compactArrays: true, compactToRelative: true }), i4;
    }
    static async hashValue(e7, t) {
      return this.hashValueWithHasher(a3, e7, t);
    }
    static async hashValueWithHasher(e7, t, r) {
      const n4 = ((e8, t2) => {
        const r2 = t2 === ns.Double;
        switch (typeof e8) {
          case "string":
            return r2 ? is(parseFloat(e8)) : e8;
          case "boolean":
            return `${e8}`;
          case "number":
            return r2 ? is(e8) : `${e8}`;
          default:
            throw new Error("unsupported type");
        }
      })(r, t), i4 = us(t, n4, e7.prime());
      return await hs.mkValueMtEntry(e7, i4);
    }
    get options() {
      return { hasher: this.hasher, documentLoader: this.documentLoader };
    }
  };

  // node_modules/ffjavascript/build/browser.esm.js
  var hexLen = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
  function fromString(s3, radix) {
    if (!radix || radix == 10) {
      return BigInt(s3);
    } else if (radix == 16) {
      if (s3.slice(0, 2) == "0x") {
        return BigInt(s3);
      } else {
        return BigInt("0x" + s3);
      }
    }
  }
  var e6 = fromString;
  function fromArray(a4, radix) {
    let acc = BigInt(0);
    radix = BigInt(radix);
    for (let i4 = 0; i4 < a4.length; i4++) {
      acc = acc * radix + BigInt(a4[i4]);
    }
    return acc;
  }
  function bitLength$6(a4) {
    const aS = a4.toString(16);
    return (aS.length - 1) * 4 + hexLen[parseInt(aS[0], 16)];
  }
  function isNegative$4(a4) {
    return BigInt(a4) < BigInt(0);
  }
  function isZero$1(a4) {
    return !a4;
  }
  function shiftLeft(a4, n4) {
    return BigInt(a4) << BigInt(n4);
  }
  function shiftRight(a4, n4) {
    return BigInt(a4) >> BigInt(n4);
  }
  var shl = shiftLeft;
  var shr = shiftRight;
  function isOdd$5(a4) {
    return (BigInt(a4) & BigInt(1)) == BigInt(1);
  }
  function naf(n4) {
    let E4 = BigInt(n4);
    const res = [];
    while (E4) {
      if (E4 & BigInt(1)) {
        const z6 = 2 - Number(E4 % BigInt(4));
        res.push(z6);
        E4 = E4 - BigInt(z6);
      } else {
        res.push(0);
      }
      E4 = E4 >> BigInt(1);
    }
    return res;
  }
  function bits(n4) {
    let E4 = BigInt(n4);
    const res = [];
    while (E4) {
      if (E4 & BigInt(1)) {
        res.push(1);
      } else {
        res.push(0);
      }
      E4 = E4 >> BigInt(1);
    }
    return res;
  }
  function toNumber$1(s3) {
    if (s3 > BigInt(Number.MAX_SAFE_INTEGER)) {
      throw new Error("Number too big");
    }
    return Number(s3);
  }
  function toArray(s3, radix) {
    const res = [];
    let rem = BigInt(s3);
    radix = BigInt(radix);
    while (rem) {
      res.unshift(Number(rem % radix));
      rem = rem / radix;
    }
    return res;
  }
  function add(a4, b7) {
    return BigInt(a4) + BigInt(b7);
  }
  function sub(a4, b7) {
    return BigInt(a4) - BigInt(b7);
  }
  function neg(a4) {
    return -BigInt(a4);
  }
  function mul(a4, b7) {
    return BigInt(a4) * BigInt(b7);
  }
  function square$2(a4) {
    return BigInt(a4) * BigInt(a4);
  }
  function pow(a4, b7) {
    return BigInt(a4) ** BigInt(b7);
  }
  function exp$1(a4, b7) {
    return BigInt(a4) ** BigInt(b7);
  }
  function abs$1(a4) {
    return BigInt(a4) >= 0 ? BigInt(a4) : -BigInt(a4);
  }
  function div(a4, b7) {
    return BigInt(a4) / BigInt(b7);
  }
  function mod(a4, b7) {
    return BigInt(a4) % BigInt(b7);
  }
  function eq(a4, b7) {
    return BigInt(a4) == BigInt(b7);
  }
  function neq(a4, b7) {
    return BigInt(a4) != BigInt(b7);
  }
  function lt3(a4, b7) {
    return BigInt(a4) < BigInt(b7);
  }
  function gt2(a4, b7) {
    return BigInt(a4) > BigInt(b7);
  }
  function leq(a4, b7) {
    return BigInt(a4) <= BigInt(b7);
  }
  function geq(a4, b7) {
    return BigInt(a4) >= BigInt(b7);
  }
  function band(a4, b7) {
    return BigInt(a4) & BigInt(b7);
  }
  function bor(a4, b7) {
    return BigInt(a4) | BigInt(b7);
  }
  function bxor(a4, b7) {
    return BigInt(a4) ^ BigInt(b7);
  }
  function land(a4, b7) {
    return BigInt(a4) && BigInt(b7);
  }
  function lor(a4, b7) {
    return BigInt(a4) || BigInt(b7);
  }
  function lnot(a4) {
    return !BigInt(a4);
  }
  function toRprLE(buff, o4, e7, n8) {
    const s3 = "0000000" + e7.toString(16);
    const v6 = new Uint32Array(buff.buffer, buff.byteOffset + o4, n8 / 4);
    const l6 = ((s3.length - 7) * 4 - 1 >> 5) + 1;
    for (let i4 = 0; i4 < l6; i4++)
      v6[i4] = parseInt(s3.substring(s3.length - 8 * i4 - 8, s3.length - 8 * i4), 16);
    for (let i4 = l6; i4 < v6.length; i4++)
      v6[i4] = 0;
    for (let i4 = v6.length * 4; i4 < n8; i4++)
      buff[i4] = toNumber$1(band(shiftRight(e7, i4 * 8), 255));
  }
  function toRprBE(buff, o4, e7, n8) {
    const s3 = "0000000" + e7.toString(16);
    const v6 = new DataView(buff.buffer, buff.byteOffset + o4, n8);
    const l6 = ((s3.length - 7) * 4 - 1 >> 5) + 1;
    for (let i4 = 0; i4 < l6; i4++)
      v6.setUint32(n8 - i4 * 4 - 4, parseInt(s3.substring(s3.length - 8 * i4 - 8, s3.length - 8 * i4), 16), false);
    for (let i4 = 0; i4 < n8 / 4 - l6; i4++)
      v6[i4] = 0;
  }
  function fromRprLE(buff, o4, n8) {
    n8 = n8 || buff.byteLength;
    o4 = o4 || 0;
    const v6 = new Uint32Array(buff.buffer, buff.byteOffset + o4, n8 / 4);
    const a4 = new Array(n8 / 4);
    v6.forEach((ch2, i4) => a4[a4.length - i4 - 1] = ch2.toString(16).padStart(8, "0"));
    return fromString(a4.join(""), 16);
  }
  function fromRprBE(buff, o4, n8) {
    n8 = n8 || buff.byteLength;
    o4 = o4 || 0;
    const v6 = new DataView(buff.buffer, buff.byteOffset + o4, n8);
    const a4 = new Array(n8 / 4);
    for (let i4 = 0; i4 < n8 / 4; i4++) {
      a4[i4] = v6.getUint32(i4 * 4, false).toString(16).padStart(8, "0");
    }
    return fromString(a4.join(""), 16);
  }
  function toString(a4, radix) {
    return a4.toString(radix);
  }
  function toLEBuff(a4) {
    const buff = new Uint8Array(Math.floor((bitLength$6(a4) - 1) / 8) + 1);
    toRprLE(buff, 0, a4, buff.byteLength);
    return buff;
  }
  var zero = e6(0);
  var one = e6(1);
  var _Scalar = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    abs: abs$1,
    add,
    band,
    bitLength: bitLength$6,
    bits,
    bor,
    bxor,
    div,
    e: e6,
    eq,
    exp: exp$1,
    fromArray,
    fromRprBE,
    fromRprLE,
    fromString,
    geq,
    gt: gt2,
    isNegative: isNegative$4,
    isOdd: isOdd$5,
    isZero: isZero$1,
    land,
    leq,
    lnot,
    lor,
    lt: lt3,
    mod,
    mul,
    naf,
    neg,
    neq,
    one,
    pow,
    shiftLeft,
    shiftRight,
    shl,
    shr,
    square: square$2,
    sub,
    toArray,
    toLEBuff,
    toNumber: toNumber$1,
    toRprBE,
    toRprLE,
    toString,
    zero
  });
  var _revTable$1 = [];
  for (let i4 = 0; i4 < 256; i4++) {
    _revTable$1[i4] = _revSlow$1(i4, 8);
  }
  function _revSlow$1(idx, bits2) {
    let res = 0;
    let a4 = idx;
    for (let i4 = 0; i4 < bits2; i4++) {
      res <<= 1;
      res = res | a4 & 1;
      a4 >>= 1;
    }
    return res;
  }
  function exp(F4, base3, e7) {
    if (isZero$1(e7))
      return F4.one;
    const n4 = bits(e7);
    if (n4.length == 0)
      return F4.one;
    let res = base3;
    for (let i4 = n4.length - 2; i4 >= 0; i4--) {
      res = F4.square(res);
      if (n4[i4]) {
        res = F4.mul(res, base3);
      }
    }
    return res;
  }
  function buildSqrt(F4) {
    if (F4.m % 2 == 1) {
      if (eq(mod(F4.p, 4), 1)) {
        if (eq(mod(F4.p, 8), 1)) {
          if (eq(mod(F4.p, 16), 1)) {
            alg5_tonelliShanks(F4);
          } else if (eq(mod(F4.p, 16), 9)) {
            alg4_kong(F4);
          } else {
            throw new Error("Field withot sqrt");
          }
        } else if (eq(mod(F4.p, 8), 5)) {
          alg3_atkin(F4);
        } else {
          throw new Error("Field withot sqrt");
        }
      } else if (eq(mod(F4.p, 4), 3)) {
        alg2_shanks(F4);
      }
    } else {
      const pm2mod4 = mod(pow(F4.p, F4.m / 2), 4);
      if (pm2mod4 == 1) {
        alg10_adj(F4);
      } else if (pm2mod4 == 3) {
        alg9_adj(F4);
      } else {
        alg8_complex(F4);
      }
    }
  }
  function alg5_tonelliShanks(F4) {
    F4.sqrt_q = pow(F4.p, F4.m);
    F4.sqrt_s = 0;
    F4.sqrt_t = sub(F4.sqrt_q, 1);
    while (!isOdd$5(F4.sqrt_t)) {
      F4.sqrt_s = F4.sqrt_s + 1;
      F4.sqrt_t = div(F4.sqrt_t, 2);
    }
    let c0 = F4.one;
    while (F4.eq(c0, F4.one)) {
      const c3 = F4.random();
      F4.sqrt_z = F4.pow(c3, F4.sqrt_t);
      c0 = F4.pow(F4.sqrt_z, 2 ** (F4.sqrt_s - 1));
    }
    F4.sqrt_tm1d2 = div(sub(F4.sqrt_t, 1), 2);
    F4.sqrt = function(a4) {
      const F5 = this;
      if (F5.isZero(a4))
        return F5.zero;
      let w5 = F5.pow(a4, F5.sqrt_tm1d2);
      const a0 = F5.pow(F5.mul(F5.square(w5), a4), 2 ** (F5.sqrt_s - 1));
      if (F5.eq(a0, F5.negone))
        return null;
      let v6 = F5.sqrt_s;
      let x6 = F5.mul(a4, w5);
      let b7 = F5.mul(x6, w5);
      let z6 = F5.sqrt_z;
      while (!F5.eq(b7, F5.one)) {
        let b2k = F5.square(b7);
        let k5 = 1;
        while (!F5.eq(b2k, F5.one)) {
          b2k = F5.square(b2k);
          k5++;
        }
        w5 = z6;
        for (let i4 = 0; i4 < v6 - k5 - 1; i4++) {
          w5 = F5.square(w5);
        }
        z6 = F5.square(w5);
        b7 = F5.mul(b7, z6);
        x6 = F5.mul(x6, w5);
        v6 = k5;
      }
      return F5.geq(x6, F5.zero) ? x6 : F5.neg(x6);
    };
  }
  function alg4_kong(F4) {
    F4.sqrt = function() {
      throw new Error("Sqrt alg 4 not implemented");
    };
  }
  function alg3_atkin(F4) {
    F4.sqrt = function() {
      throw new Error("Sqrt alg 3 not implemented");
    };
  }
  function alg2_shanks(F4) {
    F4.sqrt_q = pow(F4.p, F4.m);
    F4.sqrt_e1 = div(sub(F4.sqrt_q, 3), 4);
    F4.sqrt = function(a4) {
      if (this.isZero(a4))
        return this.zero;
      const a1 = this.pow(a4, this.sqrt_e1);
      const a0 = this.mul(this.square(a1), a4);
      if (this.eq(a0, this.negone))
        return null;
      const x6 = this.mul(a1, a4);
      return F4.geq(x6, F4.zero) ? x6 : F4.neg(x6);
    };
  }
  function alg10_adj(F4) {
    F4.sqrt = function() {
      throw new Error("Sqrt alg 10 not implemented");
    };
  }
  function alg9_adj(F4) {
    F4.sqrt_q = pow(F4.p, F4.m / 2);
    F4.sqrt_e34 = div(sub(F4.sqrt_q, 3), 4);
    F4.sqrt_e12 = div(sub(F4.sqrt_q, 1), 2);
    F4.frobenius = function(n4, x6) {
      if (n4 % 2 == 1) {
        return F4.conjugate(x6);
      } else {
        return x6;
      }
    };
    F4.sqrt = function(a4) {
      const F5 = this;
      const a1 = F5.pow(a4, F5.sqrt_e34);
      const alfa = F5.mul(F5.square(a1), a4);
      const a0 = F5.mul(F5.frobenius(1, alfa), alfa);
      if (F5.eq(a0, F5.negone))
        return null;
      const x0 = F5.mul(a1, a4);
      let x6;
      if (F5.eq(alfa, F5.negone)) {
        x6 = F5.mul(x0, [F5.F.zero, F5.F.one]);
      } else {
        const b7 = F5.pow(F5.add(F5.one, alfa), F5.sqrt_e12);
        x6 = F5.mul(b7, x0);
      }
      return F5.geq(x6, F5.zero) ? x6 : F5.neg(x6);
    };
  }
  function alg8_complex(F4) {
    F4.sqrt = function() {
      throw new Error("Sqrt alg 8 not implemented");
    };
  }
  function quarterRound(st3, a4, b7, c3, d5) {
    st3[a4] = st3[a4] + st3[b7] >>> 0;
    st3[d5] = (st3[d5] ^ st3[a4]) >>> 0;
    st3[d5] = (st3[d5] << 16 | st3[d5] >>> 16 & 65535) >>> 0;
    st3[c3] = st3[c3] + st3[d5] >>> 0;
    st3[b7] = (st3[b7] ^ st3[c3]) >>> 0;
    st3[b7] = (st3[b7] << 12 | st3[b7] >>> 20 & 4095) >>> 0;
    st3[a4] = st3[a4] + st3[b7] >>> 0;
    st3[d5] = (st3[d5] ^ st3[a4]) >>> 0;
    st3[d5] = (st3[d5] << 8 | st3[d5] >>> 24 & 255) >>> 0;
    st3[c3] = st3[c3] + st3[d5] >>> 0;
    st3[b7] = (st3[b7] ^ st3[c3]) >>> 0;
    st3[b7] = (st3[b7] << 7 | st3[b7] >>> 25 & 127) >>> 0;
  }
  function doubleRound(st3) {
    quarterRound(st3, 0, 4, 8, 12);
    quarterRound(st3, 1, 5, 9, 13);
    quarterRound(st3, 2, 6, 10, 14);
    quarterRound(st3, 3, 7, 11, 15);
    quarterRound(st3, 0, 5, 10, 15);
    quarterRound(st3, 1, 6, 11, 12);
    quarterRound(st3, 2, 7, 8, 13);
    quarterRound(st3, 3, 4, 9, 14);
  }
  var ChaCha = class {
    constructor(seed) {
      seed = seed || [0, 0, 0, 0, 0, 0, 0, 0];
      this.state = [
        1634760805,
        857760878,
        2036477234,
        1797285236,
        seed[0],
        seed[1],
        seed[2],
        seed[3],
        seed[4],
        seed[5],
        seed[6],
        seed[7],
        0,
        0,
        0,
        0
      ];
      this.idx = 16;
      this.buff = new Array(16);
    }
    nextU32() {
      if (this.idx == 16)
        this.update();
      return this.buff[this.idx++];
    }
    nextU64() {
      return add(mul(this.nextU32(), 4294967296), this.nextU32());
    }
    nextBool() {
      return (this.nextU32() & 1) == 1;
    }
    update() {
      for (let i4 = 0; i4 < 16; i4++)
        this.buff[i4] = this.state[i4];
      for (let i4 = 0; i4 < 10; i4++)
        doubleRound(this.buff);
      for (let i4 = 0; i4 < 16; i4++)
        this.buff[i4] = this.buff[i4] + this.state[i4] >>> 0;
      this.idx = 0;
      this.state[12] = this.state[12] + 1 >>> 0;
      if (this.state[12] != 0)
        return;
      this.state[13] = this.state[13] + 1 >>> 0;
      if (this.state[13] != 0)
        return;
      this.state[14] = this.state[14] + 1 >>> 0;
      if (this.state[14] != 0)
        return;
      this.state[15] = this.state[15] + 1 >>> 0;
    }
  };
  function getRandomBytes(n4) {
    let array = new Uint8Array(n4);
    {
      if (typeof globalThis.crypto !== "undefined") {
        globalThis.crypto.getRandomValues(array);
      } else {
        for (let i4 = 0; i4 < n4; i4++) {
          array[i4] = Math.random() * 4294967296 >>> 0;
        }
      }
    }
    return array;
  }
  function getRandomSeed() {
    const arr = getRandomBytes(32);
    const arrV = new Uint32Array(arr.buffer);
    const seed = [];
    for (let i4 = 0; i4 < 8; i4++) {
      seed.push(arrV[i4]);
    }
    return seed;
  }
  var threadRng = null;
  function getThreadRng() {
    if (threadRng)
      return threadRng;
    threadRng = new ChaCha(getRandomSeed());
    return threadRng;
  }
  var FFT = class {
    constructor(G7, F4, opMulGF) {
      this.F = F4;
      this.G = G7;
      this.opMulGF = opMulGF;
      let rem = F4.sqrt_t || F4.t;
      let s3 = F4.sqrt_s || F4.s;
      let nqr = F4.one;
      while (F4.eq(F4.pow(nqr, F4.half), F4.one))
        nqr = F4.add(nqr, F4.one);
      this.w = new Array(s3 + 1);
      this.wi = new Array(s3 + 1);
      this.w[s3] = this.F.pow(nqr, rem);
      this.wi[s3] = this.F.inv(this.w[s3]);
      let n4 = s3 - 1;
      while (n4 >= 0) {
        this.w[n4] = this.F.square(this.w[n4 + 1]);
        this.wi[n4] = this.F.square(this.wi[n4 + 1]);
        n4--;
      }
      this.roots = [];
      this._setRoots(Math.min(s3, 15));
    }
    _setRoots(n4) {
      for (let i4 = n4; i4 >= 0 && !this.roots[i4]; i4--) {
        let r = this.F.one;
        const nroots = 1 << i4;
        const rootsi = new Array(nroots);
        for (let j5 = 0; j5 < nroots; j5++) {
          rootsi[j5] = r;
          r = this.F.mul(r, this.w[i4]);
        }
        this.roots[i4] = rootsi;
      }
    }
    fft(p6) {
      if (p6.length <= 1)
        return p6;
      const bits2 = log2$1(p6.length - 1) + 1;
      this._setRoots(bits2);
      const m5 = 1 << bits2;
      if (p6.length != m5) {
        throw new Error("Size must be multiple of 2");
      }
      const res = __fft(this, p6, bits2, 0, 1);
      return res;
    }
    ifft(p6) {
      if (p6.length <= 1)
        return p6;
      const bits2 = log2$1(p6.length - 1) + 1;
      this._setRoots(bits2);
      const m5 = 1 << bits2;
      if (p6.length != m5) {
        throw new Error("Size must be multiple of 2");
      }
      const res = __fft(this, p6, bits2, 0, 1);
      const twoinvm = this.F.inv(this.F.mulScalar(this.F.one, m5));
      const resn = new Array(m5);
      for (let i4 = 0; i4 < m5; i4++) {
        resn[i4] = this.opMulGF(res[(m5 - i4) % m5], twoinvm);
      }
      return resn;
    }
  };
  function log2$1(V5) {
    return ((V5 & 4294901760) !== 0 ? (V5 &= 4294901760, 16) : 0) | ((V5 & 4278255360) !== 0 ? (V5 &= 4278255360, 8) : 0) | ((V5 & 4042322160) !== 0 ? (V5 &= 4042322160, 4) : 0) | ((V5 & 3435973836) !== 0 ? (V5 &= 3435973836, 2) : 0) | (V5 & 2863311530) !== 0;
  }
  function __fft(PF, pall, bits2, offset, step) {
    const n4 = 1 << bits2;
    if (n4 == 1) {
      return [pall[offset]];
    } else if (n4 == 2) {
      return [
        PF.G.add(pall[offset], pall[offset + step]),
        PF.G.sub(pall[offset], pall[offset + step])
      ];
    }
    const ndiv2 = n4 >> 1;
    const p1 = __fft(PF, pall, bits2 - 1, offset, step * 2);
    const p22 = __fft(PF, pall, bits2 - 1, offset + step, step * 2);
    const out = new Array(n4);
    for (let i4 = 0; i4 < ndiv2; i4++) {
      out[i4] = PF.G.add(p1[i4], PF.opMulGF(p22[i4], PF.roots[bits2][i4]));
      out[i4 + ndiv2] = PF.G.sub(p1[i4], PF.opMulGF(p22[i4], PF.roots[bits2][i4]));
    }
    return out;
  }
  var ZqField = class {
    constructor(p6) {
      this.type = "F1";
      this.one = BigInt(1);
      this.zero = BigInt(0);
      this.p = BigInt(p6);
      this.m = 1;
      this.negone = this.p - this.one;
      this.two = BigInt(2);
      this.half = this.p >> this.one;
      this.bitLength = bitLength$6(this.p);
      this.mask = (this.one << BigInt(this.bitLength)) - this.one;
      this.n64 = Math.floor((this.bitLength - 1) / 64) + 1;
      this.n32 = this.n64 * 2;
      this.n8 = this.n64 * 8;
      this.R = this.e(this.one << BigInt(this.n64 * 64));
      this.Ri = this.inv(this.R);
      const e7 = this.negone >> this.one;
      this.nqr = this.two;
      let r = this.pow(this.nqr, e7);
      while (!this.eq(r, this.negone)) {
        this.nqr = this.nqr + this.one;
        r = this.pow(this.nqr, e7);
      }
      this.s = 0;
      this.t = this.negone;
      while ((this.t & this.one) == this.zero) {
        this.s = this.s + 1;
        this.t = this.t >> this.one;
      }
      this.nqr_to_t = this.pow(this.nqr, this.t);
      buildSqrt(this);
      this.FFT = new FFT(this, this, this.mul.bind(this));
      this.fft = this.FFT.fft.bind(this.FFT);
      this.ifft = this.FFT.ifft.bind(this.FFT);
      this.w = this.FFT.w;
      this.wi = this.FFT.wi;
      this.shift = this.square(this.nqr);
      this.k = this.exp(this.nqr, 2 ** this.s);
    }
    e(a4, b7) {
      let res;
      if (!b7) {
        res = BigInt(a4);
      } else if (b7 == 16) {
        res = BigInt("0x" + a4);
      }
      if (res < 0) {
        let nres = -res;
        if (nres >= this.p)
          nres = nres % this.p;
        return this.p - nres;
      } else {
        return res >= this.p ? res % this.p : res;
      }
    }
    add(a4, b7) {
      const res = a4 + b7;
      return res >= this.p ? res - this.p : res;
    }
    sub(a4, b7) {
      return a4 >= b7 ? a4 - b7 : this.p - b7 + a4;
    }
    neg(a4) {
      return a4 ? this.p - a4 : a4;
    }
    mul(a4, b7) {
      return a4 * b7 % this.p;
    }
    mulScalar(base3, s3) {
      return base3 * this.e(s3) % this.p;
    }
    square(a4) {
      return a4 * a4 % this.p;
    }
    eq(a4, b7) {
      return a4 == b7;
    }
    neq(a4, b7) {
      return a4 != b7;
    }
    lt(a4, b7) {
      const aa2 = a4 > this.half ? a4 - this.p : a4;
      const bb = b7 > this.half ? b7 - this.p : b7;
      return aa2 < bb;
    }
    gt(a4, b7) {
      const aa2 = a4 > this.half ? a4 - this.p : a4;
      const bb = b7 > this.half ? b7 - this.p : b7;
      return aa2 > bb;
    }
    leq(a4, b7) {
      const aa2 = a4 > this.half ? a4 - this.p : a4;
      const bb = b7 > this.half ? b7 - this.p : b7;
      return aa2 <= bb;
    }
    geq(a4, b7) {
      const aa2 = a4 > this.half ? a4 - this.p : a4;
      const bb = b7 > this.half ? b7 - this.p : b7;
      return aa2 >= bb;
    }
    div(a4, b7) {
      return this.mul(a4, this.inv(b7));
    }
    idiv(a4, b7) {
      if (!b7)
        throw new Error("Division by zero");
      return a4 / b7;
    }
    inv(a4) {
      if (!a4)
        throw new Error("Division by zero");
      let t = this.zero;
      let r = this.p;
      let newt = this.one;
      let newr = a4 % this.p;
      while (newr) {
        let q5 = r / newr;
        [t, newt] = [newt, t - q5 * newt];
        [r, newr] = [newr, r - q5 * newr];
      }
      if (t < this.zero)
        t += this.p;
      return t;
    }
    mod(a4, b7) {
      return a4 % b7;
    }
    pow(b7, e7) {
      return exp(this, b7, e7);
    }
    exp(b7, e7) {
      return exp(this, b7, e7);
    }
    band(a4, b7) {
      const res = a4 & b7 & this.mask;
      return res >= this.p ? res - this.p : res;
    }
    bor(a4, b7) {
      const res = (a4 | b7) & this.mask;
      return res >= this.p ? res - this.p : res;
    }
    bxor(a4, b7) {
      const res = (a4 ^ b7) & this.mask;
      return res >= this.p ? res - this.p : res;
    }
    bnot(a4) {
      const res = a4 ^ this.mask;
      return res >= this.p ? res - this.p : res;
    }
    shl(a4, b7) {
      if (Number(b7) < this.bitLength) {
        const res = a4 << b7 & this.mask;
        return res >= this.p ? res - this.p : res;
      } else {
        const nb = this.p - b7;
        if (Number(nb) < this.bitLength) {
          return a4 >> nb;
        } else {
          return this.zero;
        }
      }
    }
    shr(a4, b7) {
      if (Number(b7) < this.bitLength) {
        return a4 >> b7;
      } else {
        const nb = this.p - b7;
        if (Number(nb) < this.bitLength) {
          const res = a4 << nb & this.mask;
          return res >= this.p ? res - this.p : res;
        } else {
          return 0;
        }
      }
    }
    land(a4, b7) {
      return a4 && b7 ? this.one : this.zero;
    }
    lor(a4, b7) {
      return a4 || b7 ? this.one : this.zero;
    }
    lnot(a4) {
      return a4 ? this.zero : this.one;
    }
    sqrt_old(n4) {
      if (n4 == this.zero)
        return this.zero;
      const res = this.pow(n4, this.negone >> this.one);
      if (res != this.one)
        return null;
      let m5 = this.s;
      let c3 = this.nqr_to_t;
      let t = this.pow(n4, this.t);
      let r = this.pow(n4, this.add(this.t, this.one) >> this.one);
      while (t != this.one) {
        let sq = this.square(t);
        let i4 = 1;
        while (sq != this.one) {
          i4++;
          sq = this.square(sq);
        }
        let b7 = c3;
        for (let j5 = 0; j5 < m5 - i4 - 1; j5++)
          b7 = this.square(b7);
        m5 = i4;
        c3 = this.square(b7);
        t = this.mul(t, c3);
        r = this.mul(r, b7);
      }
      if (r > this.p >> this.one) {
        r = this.neg(r);
      }
      return r;
    }
    normalize(a4, b7) {
      a4 = BigInt(a4, b7);
      if (a4 < 0) {
        let na2 = -a4;
        if (na2 >= this.p)
          na2 = na2 % this.p;
        return this.p - na2;
      } else {
        return a4 >= this.p ? a4 % this.p : a4;
      }
    }
    random() {
      const nBytes = this.bitLength * 2 / 8;
      let res = this.zero;
      for (let i4 = 0; i4 < nBytes; i4++) {
        res = (res << BigInt(8)) + BigInt(getRandomBytes(1)[0]);
      }
      return res % this.p;
    }
    toString(a4, base3) {
      base3 = base3 || 10;
      let vs2;
      if (a4 > this.half && base3 == 10) {
        const v6 = this.p - a4;
        vs2 = "-" + v6.toString(base3);
      } else {
        vs2 = a4.toString(base3);
      }
      return vs2;
    }
    isZero(a4) {
      return a4 == this.zero;
    }
    fromRng(rng2) {
      let v6;
      do {
        v6 = this.zero;
        for (let i4 = 0; i4 < this.n64; i4++) {
          v6 += rng2.nextU64() << BigInt(64 * i4);
        }
        v6 &= this.mask;
      } while (v6 >= this.p);
      v6 = v6 * this.Ri % this.p;
      return v6;
    }
    fft(a4) {
      return this.FFT.fft(a4);
    }
    ifft(a4) {
      return this.FFT.ifft(a4);
    }
    toRprLE(buff, o4, e7) {
      toRprLE(buff, o4, e7, this.n64 * 8);
    }
    toRprBE(buff, o4, e7) {
      toRprBE(buff, o4, e7, this.n64 * 8);
    }
    toRprBEM(buff, o4, e7) {
      return this.toRprBE(buff, o4, this.mul(this.R, e7));
    }
    toRprLEM(buff, o4, e7) {
      return this.toRprLE(buff, o4, this.mul(this.R, e7));
    }
    fromRprLE(buff, o4) {
      return fromRprLE(buff, o4, this.n8);
    }
    fromRprBE(buff, o4) {
      return fromRprBE(buff, o4, this.n8);
    }
    fromRprLEM(buff, o4) {
      return this.mul(this.fromRprLE(buff, o4), this.Ri);
    }
    fromRprBEM(buff, o4) {
      return this.mul(this.fromRprBE(buff, o4), this.Ri);
    }
    toObject(a4) {
      return a4;
    }
  };
  var utils$6 = {};
  utils$6.bigInt2BytesLE = function bigInt2BytesLE(_a2, len) {
    const b7 = Array(len);
    let v6 = BigInt(_a2);
    for (let i4 = 0; i4 < len; i4++) {
      b7[i4] = Number(v6 & 0xFFn);
      v6 = v6 >> 8n;
    }
    return b7;
  };
  utils$6.bigInt2U32LE = function bigInt2BytesLE2(_a2, len) {
    const b7 = Array(len);
    let v6 = BigInt(_a2);
    for (let i4 = 0; i4 < len; i4++) {
      b7[i4] = Number(v6 & 0xFFFFFFFFn);
      v6 = v6 >> 32n;
    }
    return b7;
  };
  utils$6.isOcamNum = function(a4) {
    if (!Array.isArray(a4))
      return false;
    if (a4.length != 3)
      return false;
    if (typeof a4[0] !== "number")
      return false;
    if (typeof a4[1] !== "number")
      return false;
    if (!Array.isArray(a4[2]))
      return false;
    return true;
  };
  var build_int = function buildInt(module, n64, _prefix) {
    const prefix = _prefix || "int";
    if (module.modules[prefix])
      return prefix;
    module.modules[prefix] = {};
    const n32 = n64 * 2;
    const n8 = n64 * 8;
    function buildCopy() {
      const f5 = module.addFunction(prefix + "_copy");
      f5.addParam("px", "i32");
      f5.addParam("pr", "i32");
      const c3 = f5.getCodeBuilder();
      for (let i4 = 0; i4 < n64; i4++) {
        f5.addCode(
          c3.i64_store(
            c3.getLocal("pr"),
            i4 * 8,
            c3.i64_load(
              c3.getLocal("px"),
              i4 * 8
            )
          )
        );
      }
    }
    function buildZero() {
      const f5 = module.addFunction(prefix + "_zero");
      f5.addParam("pr", "i32");
      const c3 = f5.getCodeBuilder();
      for (let i4 = 0; i4 < n64; i4++) {
        f5.addCode(
          c3.i64_store(
            c3.getLocal("pr"),
            i4 * 8,
            c3.i64_const(0)
          )
        );
      }
    }
    function buildOne() {
      const f5 = module.addFunction(prefix + "_one");
      f5.addParam("pr", "i32");
      const c3 = f5.getCodeBuilder();
      f5.addCode(
        c3.i64_store(
          c3.getLocal("pr"),
          0,
          c3.i64_const(1)
        )
      );
      for (let i4 = 1; i4 < n64; i4++) {
        f5.addCode(
          c3.i64_store(
            c3.getLocal("pr"),
            i4 * 8,
            c3.i64_const(0)
          )
        );
      }
    }
    function buildIsZero() {
      const f5 = module.addFunction(prefix + "_isZero");
      f5.addParam("px", "i32");
      f5.setReturnType("i32");
      const c3 = f5.getCodeBuilder();
      function getCompCode(n4) {
        if (n4 == 0) {
          return c3.ret(c3.i64_eqz(
            c3.i64_load(c3.getLocal("px"))
          ));
        }
        return c3.if(
          c3.i64_eqz(
            c3.i64_load(c3.getLocal("px"), n4 * 8)
          ),
          getCompCode(n4 - 1),
          c3.ret(c3.i32_const(0))
        );
      }
      f5.addCode(getCompCode(n64 - 1));
      f5.addCode(c3.ret(c3.i32_const(0)));
    }
    function buildEq() {
      const f5 = module.addFunction(prefix + "_eq");
      f5.addParam("px", "i32");
      f5.addParam("py", "i32");
      f5.setReturnType("i32");
      const c3 = f5.getCodeBuilder();
      function getCompCode(n4) {
        if (n4 == 0) {
          return c3.ret(c3.i64_eq(
            c3.i64_load(c3.getLocal("px")),
            c3.i64_load(c3.getLocal("py"))
          ));
        }
        return c3.if(
          c3.i64_eq(
            c3.i64_load(c3.getLocal("px"), n4 * 8),
            c3.i64_load(c3.getLocal("py"), n4 * 8)
          ),
          getCompCode(n4 - 1),
          c3.ret(c3.i32_const(0))
        );
      }
      f5.addCode(getCompCode(n64 - 1));
      f5.addCode(c3.ret(c3.i32_const(0)));
    }
    function buildGte() {
      const f5 = module.addFunction(prefix + "_gte");
      f5.addParam("px", "i32");
      f5.addParam("py", "i32");
      f5.setReturnType("i32");
      const c3 = f5.getCodeBuilder();
      function getCompCode(n4) {
        if (n4 == 0) {
          return c3.ret(c3.i64_ge_u(
            c3.i64_load(c3.getLocal("px")),
            c3.i64_load(c3.getLocal("py"))
          ));
        }
        return c3.if(
          c3.i64_lt_u(
            c3.i64_load(c3.getLocal("px"), n4 * 8),
            c3.i64_load(c3.getLocal("py"), n4 * 8)
          ),
          c3.ret(c3.i32_const(0)),
          c3.if(
            c3.i64_gt_u(
              c3.i64_load(c3.getLocal("px"), n4 * 8),
              c3.i64_load(c3.getLocal("py"), n4 * 8)
            ),
            c3.ret(c3.i32_const(1)),
            getCompCode(n4 - 1)
          )
        );
      }
      f5.addCode(getCompCode(n64 - 1));
      f5.addCode(c3.ret(c3.i32_const(0)));
    }
    function buildAdd() {
      const f5 = module.addFunction(prefix + "_add");
      f5.addParam("x", "i32");
      f5.addParam("y", "i32");
      f5.addParam("r", "i32");
      f5.setReturnType("i32");
      f5.addLocal("c", "i64");
      const c3 = f5.getCodeBuilder();
      f5.addCode(c3.setLocal(
        "c",
        c3.i64_add(
          c3.i64_load32_u(c3.getLocal("x")),
          c3.i64_load32_u(c3.getLocal("y"))
        )
      ));
      f5.addCode(c3.i64_store32(
        c3.getLocal("r"),
        c3.getLocal("c")
      ));
      for (let i4 = 1; i4 < n32; i4++) {
        f5.addCode(c3.setLocal(
          "c",
          c3.i64_add(
            c3.i64_add(
              c3.i64_load32_u(c3.getLocal("x"), 4 * i4),
              c3.i64_load32_u(c3.getLocal("y"), 4 * i4)
            ),
            c3.i64_shr_u(c3.getLocal("c"), c3.i64_const(32))
          )
        ));
        f5.addCode(c3.i64_store32(
          c3.getLocal("r"),
          i4 * 4,
          c3.getLocal("c")
        ));
      }
      f5.addCode(c3.i32_wrap_i64(c3.i64_shr_u(c3.getLocal("c"), c3.i64_const(32))));
    }
    function buildSub() {
      const f5 = module.addFunction(prefix + "_sub");
      f5.addParam("x", "i32");
      f5.addParam("y", "i32");
      f5.addParam("r", "i32");
      f5.setReturnType("i32");
      f5.addLocal("c", "i64");
      const c3 = f5.getCodeBuilder();
      f5.addCode(c3.setLocal(
        "c",
        c3.i64_sub(
          c3.i64_load32_u(c3.getLocal("x")),
          c3.i64_load32_u(c3.getLocal("y"))
        )
      ));
      f5.addCode(c3.i64_store32(
        c3.getLocal("r"),
        c3.i64_and(
          c3.getLocal("c"),
          c3.i64_const("0xFFFFFFFF")
        )
      ));
      for (let i4 = 1; i4 < n32; i4++) {
        f5.addCode(c3.setLocal(
          "c",
          c3.i64_add(
            c3.i64_sub(
              c3.i64_load32_u(c3.getLocal("x"), 4 * i4),
              c3.i64_load32_u(c3.getLocal("y"), 4 * i4)
            ),
            c3.i64_shr_s(c3.getLocal("c"), c3.i64_const(32))
          )
        ));
        f5.addCode(c3.i64_store32(
          c3.getLocal("r"),
          i4 * 4,
          c3.i64_and(c3.getLocal("c"), c3.i64_const("0xFFFFFFFF"))
        ));
      }
      f5.addCode(c3.i32_wrap_i64(c3.i64_shr_s(c3.getLocal("c"), c3.i64_const(32))));
    }
    function buildMul() {
      const f5 = module.addFunction(prefix + "_mul");
      f5.addParam("x", "i32");
      f5.addParam("y", "i32");
      f5.addParam("r", "i32");
      f5.addLocal("c0", "i64");
      f5.addLocal("c1", "i64");
      for (let i4 = 0; i4 < n32; i4++) {
        f5.addLocal("x" + i4, "i64");
        f5.addLocal("y" + i4, "i64");
      }
      const c3 = f5.getCodeBuilder();
      const loadX = [];
      const loadY = [];
      function mulij(i4, j5) {
        let X5, Y5;
        if (!loadX[i4]) {
          X5 = c3.teeLocal("x" + i4, c3.i64_load32_u(c3.getLocal("x"), i4 * 4));
          loadX[i4] = true;
        } else {
          X5 = c3.getLocal("x" + i4);
        }
        if (!loadY[j5]) {
          Y5 = c3.teeLocal("y" + j5, c3.i64_load32_u(c3.getLocal("y"), j5 * 4));
          loadY[j5] = true;
        } else {
          Y5 = c3.getLocal("y" + j5);
        }
        return c3.i64_mul(X5, Y5);
      }
      let c0 = "c0";
      let c1 = "c1";
      for (let k5 = 0; k5 < n32 * 2 - 1; k5++) {
        for (let i4 = Math.max(0, k5 - n32 + 1); i4 <= k5 && i4 < n32; i4++) {
          const j5 = k5 - i4;
          f5.addCode(
            c3.setLocal(
              c0,
              c3.i64_add(
                c3.i64_and(
                  c3.getLocal(c0),
                  c3.i64_const(4294967295)
                ),
                mulij(i4, j5)
              )
            )
          );
          f5.addCode(
            c3.setLocal(
              c1,
              c3.i64_add(
                c3.getLocal(c1),
                c3.i64_shr_u(
                  c3.getLocal(c0),
                  c3.i64_const(32)
                )
              )
            )
          );
        }
        f5.addCode(
          c3.i64_store32(
            c3.getLocal("r"),
            k5 * 4,
            c3.getLocal(c0)
          )
        );
        [c0, c1] = [c1, c0];
        f5.addCode(
          c3.setLocal(
            c1,
            c3.i64_shr_u(
              c3.getLocal(c0),
              c3.i64_const(32)
            )
          )
        );
      }
      f5.addCode(
        c3.i64_store32(
          c3.getLocal("r"),
          n32 * 4 * 2 - 4,
          c3.getLocal(c0)
        )
      );
    }
    function buildSquare() {
      const f5 = module.addFunction(prefix + "_square");
      f5.addParam("x", "i32");
      f5.addParam("r", "i32");
      f5.addLocal("c0", "i64");
      f5.addLocal("c1", "i64");
      f5.addLocal("c0_old", "i64");
      f5.addLocal("c1_old", "i64");
      for (let i4 = 0; i4 < n32; i4++) {
        f5.addLocal("x" + i4, "i64");
      }
      const c3 = f5.getCodeBuilder();
      const loadX = [];
      function mulij(i4, j5) {
        let X5, Y5;
        if (!loadX[i4]) {
          X5 = c3.teeLocal("x" + i4, c3.i64_load32_u(c3.getLocal("x"), i4 * 4));
          loadX[i4] = true;
        } else {
          X5 = c3.getLocal("x" + i4);
        }
        if (!loadX[j5]) {
          Y5 = c3.teeLocal("x" + j5, c3.i64_load32_u(c3.getLocal("x"), j5 * 4));
          loadX[j5] = true;
        } else {
          Y5 = c3.getLocal("x" + j5);
        }
        return c3.i64_mul(X5, Y5);
      }
      let c0 = "c0";
      let c1 = "c1";
      let c0_old = "c0_old";
      let c1_old = "c1_old";
      for (let k5 = 0; k5 < n32 * 2 - 1; k5++) {
        f5.addCode(
          c3.setLocal(c0, c3.i64_const(0)),
          c3.setLocal(c1, c3.i64_const(0))
        );
        for (let i4 = Math.max(0, k5 - n32 + 1); i4 < k5 + 1 >> 1 && i4 < n32; i4++) {
          const j5 = k5 - i4;
          f5.addCode(
            c3.setLocal(
              c0,
              c3.i64_add(
                c3.i64_and(
                  c3.getLocal(c0),
                  c3.i64_const(4294967295)
                ),
                mulij(i4, j5)
              )
            )
          );
          f5.addCode(
            c3.setLocal(
              c1,
              c3.i64_add(
                c3.getLocal(c1),
                c3.i64_shr_u(
                  c3.getLocal(c0),
                  c3.i64_const(32)
                )
              )
            )
          );
        }
        f5.addCode(
          c3.setLocal(
            c0,
            c3.i64_shl(
              c3.i64_and(
                c3.getLocal(c0),
                c3.i64_const(4294967295)
              ),
              c3.i64_const(1)
            )
          )
        );
        f5.addCode(
          c3.setLocal(
            c1,
            c3.i64_add(
              c3.i64_shl(
                c3.getLocal(c1),
                c3.i64_const(1)
              ),
              c3.i64_shr_u(
                c3.getLocal(c0),
                c3.i64_const(32)
              )
            )
          )
        );
        if (k5 % 2 == 0) {
          f5.addCode(
            c3.setLocal(
              c0,
              c3.i64_add(
                c3.i64_and(
                  c3.getLocal(c0),
                  c3.i64_const(4294967295)
                ),
                mulij(k5 >> 1, k5 >> 1)
              )
            )
          );
          f5.addCode(
            c3.setLocal(
              c1,
              c3.i64_add(
                c3.getLocal(c1),
                c3.i64_shr_u(
                  c3.getLocal(c0),
                  c3.i64_const(32)
                )
              )
            )
          );
        }
        if (k5 > 0) {
          f5.addCode(
            c3.setLocal(
              c0,
              c3.i64_add(
                c3.i64_and(
                  c3.getLocal(c0),
                  c3.i64_const(4294967295)
                ),
                c3.i64_and(
                  c3.getLocal(c0_old),
                  c3.i64_const(4294967295)
                )
              )
            )
          );
          f5.addCode(
            c3.setLocal(
              c1,
              c3.i64_add(
                c3.i64_add(
                  c3.getLocal(c1),
                  c3.i64_shr_u(
                    c3.getLocal(c0),
                    c3.i64_const(32)
                  )
                ),
                c3.getLocal(c1_old)
              )
            )
          );
        }
        f5.addCode(
          c3.i64_store32(
            c3.getLocal("r"),
            k5 * 4,
            c3.getLocal(c0)
          )
        );
        f5.addCode(
          c3.setLocal(
            c0_old,
            c3.getLocal(c1)
          ),
          c3.setLocal(
            c1_old,
            c3.i64_shr_u(
              c3.getLocal(c0_old),
              c3.i64_const(32)
            )
          )
        );
      }
      f5.addCode(
        c3.i64_store32(
          c3.getLocal("r"),
          n32 * 4 * 2 - 4,
          c3.getLocal(c0_old)
        )
      );
    }
    function buildSquareOld() {
      const f5 = module.addFunction(prefix + "_squareOld");
      f5.addParam("x", "i32");
      f5.addParam("r", "i32");
      const c3 = f5.getCodeBuilder();
      f5.addCode(c3.call(prefix + "_mul", c3.getLocal("x"), c3.getLocal("x"), c3.getLocal("r")));
    }
    function _buildMul1() {
      const f5 = module.addFunction(prefix + "__mul1");
      f5.addParam("px", "i32");
      f5.addParam("y", "i64");
      f5.addParam("pr", "i32");
      f5.addLocal("c", "i64");
      const c3 = f5.getCodeBuilder();
      f5.addCode(c3.setLocal(
        "c",
        c3.i64_mul(
          c3.i64_load32_u(c3.getLocal("px"), 0, 0),
          c3.getLocal("y")
        )
      ));
      f5.addCode(c3.i64_store32(
        c3.getLocal("pr"),
        0,
        0,
        c3.getLocal("c")
      ));
      for (let i4 = 1; i4 < n32; i4++) {
        f5.addCode(c3.setLocal(
          "c",
          c3.i64_add(
            c3.i64_mul(
              c3.i64_load32_u(c3.getLocal("px"), 4 * i4, 0),
              c3.getLocal("y")
            ),
            c3.i64_shr_u(c3.getLocal("c"), c3.i64_const(32))
          )
        ));
        f5.addCode(c3.i64_store32(
          c3.getLocal("pr"),
          i4 * 4,
          0,
          c3.getLocal("c")
        ));
      }
    }
    function _buildAdd1() {
      const f5 = module.addFunction(prefix + "__add1");
      f5.addParam("x", "i32");
      f5.addParam("y", "i64");
      f5.addLocal("c", "i64");
      f5.addLocal("px", "i32");
      const c3 = f5.getCodeBuilder();
      f5.addCode(c3.setLocal("px", c3.getLocal("x")));
      f5.addCode(c3.setLocal(
        "c",
        c3.i64_add(
          c3.i64_load32_u(c3.getLocal("px"), 0, 0),
          c3.getLocal("y")
        )
      ));
      f5.addCode(c3.i64_store32(
        c3.getLocal("px"),
        0,
        0,
        c3.getLocal("c")
      ));
      f5.addCode(c3.setLocal(
        "c",
        c3.i64_shr_u(
          c3.getLocal("c"),
          c3.i64_const(32)
        )
      ));
      f5.addCode(c3.block(c3.loop(
        c3.br_if(
          1,
          c3.i64_eqz(c3.getLocal("c"))
        ),
        c3.setLocal(
          "px",
          c3.i32_add(
            c3.getLocal("px"),
            c3.i32_const(4)
          )
        ),
        c3.setLocal(
          "c",
          c3.i64_add(
            c3.i64_load32_u(c3.getLocal("px"), 0, 0),
            c3.getLocal("c")
          )
        ),
        c3.i64_store32(
          c3.getLocal("px"),
          0,
          0,
          c3.getLocal("c")
        ),
        c3.setLocal(
          "c",
          c3.i64_shr_u(
            c3.getLocal("c"),
            c3.i64_const(32)
          )
        ),
        c3.br(0)
      )));
    }
    function buildDiv() {
      _buildMul1();
      _buildAdd1();
      const f5 = module.addFunction(prefix + "_div");
      f5.addParam("x", "i32");
      f5.addParam("y", "i32");
      f5.addParam("c", "i32");
      f5.addParam("r", "i32");
      f5.addLocal("rr", "i32");
      f5.addLocal("cc", "i32");
      f5.addLocal("eX", "i32");
      f5.addLocal("eY", "i32");
      f5.addLocal("sy", "i64");
      f5.addLocal("sx", "i64");
      f5.addLocal("ec", "i32");
      const c3 = f5.getCodeBuilder();
      const Y5 = c3.i32_const(module.alloc(n8));
      const Caux = c3.i32_const(module.alloc(n8));
      const Raux = c3.i32_const(module.alloc(n8));
      const C5 = c3.getLocal("cc");
      const R5 = c3.getLocal("rr");
      const pr1 = module.alloc(n8 * 2);
      const R1 = c3.i32_const(pr1);
      const R22 = c3.i32_const(pr1 + n8);
      f5.addCode(c3.if(
        c3.getLocal("c"),
        c3.setLocal("cc", c3.getLocal("c")),
        c3.setLocal("cc", Caux)
      ));
      f5.addCode(c3.if(
        c3.getLocal("r"),
        c3.setLocal("rr", c3.getLocal("r")),
        c3.setLocal("rr", Raux)
      ));
      f5.addCode(c3.call(prefix + "_copy", c3.getLocal("x"), R5));
      f5.addCode(c3.call(prefix + "_copy", c3.getLocal("y"), Y5));
      f5.addCode(c3.call(prefix + "_zero", C5));
      f5.addCode(c3.call(prefix + "_zero", R1));
      f5.addCode(c3.setLocal("eX", c3.i32_const(n8 - 1)));
      f5.addCode(c3.setLocal("eY", c3.i32_const(n8 - 1)));
      f5.addCode(c3.block(c3.loop(
        c3.br_if(
          1,
          c3.i32_or(
            c3.i32_load8_u(
              c3.i32_add(Y5, c3.getLocal("eY")),
              0,
              0
            ),
            c3.i32_eq(
              c3.getLocal("eY"),
              c3.i32_const(3)
            )
          )
        ),
        c3.setLocal("eY", c3.i32_sub(c3.getLocal("eY"), c3.i32_const(1))),
        c3.br(0)
      )));
      f5.addCode(
        c3.setLocal(
          "sy",
          c3.i64_add(
            c3.i64_load32_u(
              c3.i32_sub(
                c3.i32_add(Y5, c3.getLocal("eY")),
                c3.i32_const(3)
              ),
              0,
              0
            ),
            c3.i64_const(1)
          )
        )
      );
      f5.addCode(
        c3.if(
          c3.i64_eq(
            c3.getLocal("sy"),
            c3.i64_const(1)
          ),
          c3.drop(c3.i64_div_u(c3.i64_const(0), c3.i64_const(0)))
        )
      );
      f5.addCode(c3.block(c3.loop(
        c3.block(c3.loop(
          c3.br_if(
            1,
            c3.i32_or(
              c3.i32_load8_u(
                c3.i32_add(R5, c3.getLocal("eX")),
                0,
                0
              ),
              c3.i32_eq(
                c3.getLocal("eX"),
                c3.i32_const(7)
              )
            )
          ),
          c3.setLocal("eX", c3.i32_sub(c3.getLocal("eX"), c3.i32_const(1))),
          c3.br(0)
        )),
        c3.setLocal(
          "sx",
          c3.i64_load(
            c3.i32_sub(
              c3.i32_add(R5, c3.getLocal("eX")),
              c3.i32_const(7)
            ),
            0,
            0
          )
        ),
        c3.setLocal(
          "sx",
          c3.i64_div_u(
            c3.getLocal("sx"),
            c3.getLocal("sy")
          )
        ),
        c3.setLocal(
          "ec",
          c3.i32_sub(
            c3.i32_sub(
              c3.getLocal("eX"),
              c3.getLocal("eY")
            ),
            c3.i32_const(4)
          )
        ),
        c3.block(c3.loop(
          c3.br_if(
            1,
            c3.i32_and(
              c3.i64_eqz(
                c3.i64_and(
                  c3.getLocal("sx"),
                  c3.i64_const("0xFFFFFFFF00000000")
                )
              ),
              c3.i32_ge_s(
                c3.getLocal("ec"),
                c3.i32_const(0)
              )
            )
          ),
          c3.setLocal(
            "sx",
            c3.i64_shr_u(
              c3.getLocal("sx"),
              c3.i64_const(8)
            )
          ),
          c3.setLocal(
            "ec",
            c3.i32_add(
              c3.getLocal("ec"),
              c3.i32_const(1)
            )
          ),
          c3.br(0)
        )),
        c3.if(
          c3.i64_eqz(c3.getLocal("sx")),
          [
            ...c3.br_if(
              2,
              c3.i32_eqz(c3.call(prefix + "_gte", R5, Y5))
            ),
            ...c3.setLocal("sx", c3.i64_const(1)),
            ...c3.setLocal("ec", c3.i32_const(0))
          ]
        ),
        c3.call(prefix + "__mul1", Y5, c3.getLocal("sx"), R22),
        c3.drop(c3.call(
          prefix + "_sub",
          R5,
          c3.i32_sub(R22, c3.getLocal("ec")),
          R5
        )),
        c3.call(
          prefix + "__add1",
          c3.i32_add(C5, c3.getLocal("ec")),
          c3.getLocal("sx")
        ),
        c3.br(0)
      )));
    }
    function buildInverseMod() {
      const f5 = module.addFunction(prefix + "_inverseMod");
      f5.addParam("px", "i32");
      f5.addParam("pm", "i32");
      f5.addParam("pr", "i32");
      f5.addLocal("t", "i32");
      f5.addLocal("newt", "i32");
      f5.addLocal("r", "i32");
      f5.addLocal("qq", "i32");
      f5.addLocal("qr", "i32");
      f5.addLocal("newr", "i32");
      f5.addLocal("swp", "i32");
      f5.addLocal("x", "i32");
      f5.addLocal("signt", "i32");
      f5.addLocal("signnewt", "i32");
      f5.addLocal("signx", "i32");
      const c3 = f5.getCodeBuilder();
      const aux1 = c3.i32_const(module.alloc(n8));
      const aux2 = c3.i32_const(module.alloc(n8));
      const aux3 = c3.i32_const(module.alloc(n8));
      const aux4 = c3.i32_const(module.alloc(n8));
      const aux5 = c3.i32_const(module.alloc(n8));
      const aux6 = c3.i32_const(module.alloc(n8));
      const mulBuff = c3.i32_const(module.alloc(n8 * 2));
      const aux7 = c3.i32_const(module.alloc(n8));
      f5.addCode(
        c3.setLocal("t", aux1),
        c3.call(prefix + "_zero", aux1),
        c3.setLocal("signt", c3.i32_const(0))
      );
      f5.addCode(
        c3.setLocal("r", aux2),
        c3.call(prefix + "_copy", c3.getLocal("pm"), aux2)
      );
      f5.addCode(
        c3.setLocal("newt", aux3),
        c3.call(prefix + "_one", aux3),
        c3.setLocal("signnewt", c3.i32_const(0))
      );
      f5.addCode(
        c3.setLocal("newr", aux4),
        c3.call(prefix + "_copy", c3.getLocal("px"), aux4)
      );
      f5.addCode(c3.setLocal("qq", aux5));
      f5.addCode(c3.setLocal("qr", aux6));
      f5.addCode(c3.setLocal("x", aux7));
      f5.addCode(c3.block(c3.loop(
        c3.br_if(
          1,
          c3.call(prefix + "_isZero", c3.getLocal("newr"))
        ),
        c3.call(prefix + "_div", c3.getLocal("r"), c3.getLocal("newr"), c3.getLocal("qq"), c3.getLocal("qr")),
        c3.call(prefix + "_mul", c3.getLocal("qq"), c3.getLocal("newt"), mulBuff),
        c3.if(
          c3.getLocal("signt"),
          c3.if(
            c3.getLocal("signnewt"),
            c3.if(
              c3.call(prefix + "_gte", mulBuff, c3.getLocal("t")),
              [
                ...c3.drop(c3.call(prefix + "_sub", mulBuff, c3.getLocal("t"), c3.getLocal("x"))),
                ...c3.setLocal("signx", c3.i32_const(0))
              ],
              [
                ...c3.drop(c3.call(prefix + "_sub", c3.getLocal("t"), mulBuff, c3.getLocal("x"))),
                ...c3.setLocal("signx", c3.i32_const(1))
              ]
            ),
            [
              ...c3.drop(c3.call(prefix + "_add", mulBuff, c3.getLocal("t"), c3.getLocal("x"))),
              ...c3.setLocal("signx", c3.i32_const(1))
            ]
          ),
          c3.if(
            c3.getLocal("signnewt"),
            [
              ...c3.drop(c3.call(prefix + "_add", mulBuff, c3.getLocal("t"), c3.getLocal("x"))),
              ...c3.setLocal("signx", c3.i32_const(0))
            ],
            c3.if(
              c3.call(prefix + "_gte", c3.getLocal("t"), mulBuff),
              [
                ...c3.drop(c3.call(prefix + "_sub", c3.getLocal("t"), mulBuff, c3.getLocal("x"))),
                ...c3.setLocal("signx", c3.i32_const(0))
              ],
              [
                ...c3.drop(c3.call(prefix + "_sub", mulBuff, c3.getLocal("t"), c3.getLocal("x"))),
                ...c3.setLocal("signx", c3.i32_const(1))
              ]
            )
          )
        ),
        c3.setLocal("swp", c3.getLocal("t")),
        c3.setLocal("t", c3.getLocal("newt")),
        c3.setLocal("newt", c3.getLocal("x")),
        c3.setLocal("x", c3.getLocal("swp")),
        c3.setLocal("signt", c3.getLocal("signnewt")),
        c3.setLocal("signnewt", c3.getLocal("signx")),
        c3.setLocal("swp", c3.getLocal("r")),
        c3.setLocal("r", c3.getLocal("newr")),
        c3.setLocal("newr", c3.getLocal("qr")),
        c3.setLocal("qr", c3.getLocal("swp")),
        c3.br(0)
      )));
      f5.addCode(c3.if(
        c3.getLocal("signt"),
        c3.drop(c3.call(prefix + "_sub", c3.getLocal("pm"), c3.getLocal("t"), c3.getLocal("pr"))),
        c3.call(prefix + "_copy", c3.getLocal("t"), c3.getLocal("pr"))
      ));
    }
    buildCopy();
    buildZero();
    buildIsZero();
    buildOne();
    buildEq();
    buildGte();
    buildAdd();
    buildSub();
    buildMul();
    buildSquare();
    buildSquareOld();
    buildDiv();
    buildInverseMod();
    module.exportFunction(prefix + "_copy");
    module.exportFunction(prefix + "_zero");
    module.exportFunction(prefix + "_one");
    module.exportFunction(prefix + "_isZero");
    module.exportFunction(prefix + "_eq");
    module.exportFunction(prefix + "_gte");
    module.exportFunction(prefix + "_add");
    module.exportFunction(prefix + "_sub");
    module.exportFunction(prefix + "_mul");
    module.exportFunction(prefix + "_square");
    module.exportFunction(prefix + "_squareOld");
    module.exportFunction(prefix + "_div");
    module.exportFunction(prefix + "_inverseMod");
    return prefix;
  };
  var build_timesscalar = function buildTimesScalar(module, fnName, elementLen, opAB, opAA, opCopy, opInit) {
    const f5 = module.addFunction(fnName);
    f5.addParam("base", "i32");
    f5.addParam("scalar", "i32");
    f5.addParam("scalarLength", "i32");
    f5.addParam("r", "i32");
    f5.addLocal("i", "i32");
    f5.addLocal("b", "i32");
    const c3 = f5.getCodeBuilder();
    const aux = c3.i32_const(module.alloc(elementLen));
    f5.addCode(
      c3.if(
        c3.i32_eqz(c3.getLocal("scalarLength")),
        [
          ...c3.call(opInit, c3.getLocal("r")),
          ...c3.ret([])
        ]
      )
    );
    f5.addCode(c3.call(opCopy, c3.getLocal("base"), aux));
    f5.addCode(c3.call(opInit, c3.getLocal("r")));
    f5.addCode(c3.setLocal("i", c3.getLocal("scalarLength")));
    f5.addCode(c3.block(c3.loop(
      c3.setLocal("i", c3.i32_sub(c3.getLocal("i"), c3.i32_const(1))),
      c3.setLocal(
        "b",
        c3.i32_load8_u(
          c3.i32_add(
            c3.getLocal("scalar"),
            c3.getLocal("i")
          )
        )
      ),
      ...innerLoop(),
      c3.br_if(1, c3.i32_eqz(c3.getLocal("i"))),
      c3.br(0)
    )));
    function innerLoop() {
      const code2 = [];
      for (let i4 = 0; i4 < 8; i4++) {
        code2.push(
          ...c3.call(opAA, c3.getLocal("r"), c3.getLocal("r")),
          ...c3.if(
            c3.i32_ge_u(c3.getLocal("b"), c3.i32_const(128 >> i4)),
            [
              ...c3.setLocal(
                "b",
                c3.i32_sub(
                  c3.getLocal("b"),
                  c3.i32_const(128 >> i4)
                )
              ),
              ...c3.call(opAB, c3.getLocal("r"), aux, c3.getLocal("r"))
            ]
          )
        );
      }
      return code2;
    }
  };
  var build_batchinverse = buildBatchInverse$3;
  function buildBatchInverse$3(module, prefix) {
    const n8 = module.modules[prefix].n64 * 8;
    const f5 = module.addFunction(prefix + "_batchInverse");
    f5.addParam("pIn", "i32");
    f5.addParam("inStep", "i32");
    f5.addParam("n", "i32");
    f5.addParam("pOut", "i32");
    f5.addParam("outStep", "i32");
    f5.addLocal("itAux", "i32");
    f5.addLocal("itIn", "i32");
    f5.addLocal("itOut", "i32");
    f5.addLocal("i", "i32");
    const c3 = f5.getCodeBuilder();
    const AUX = c3.i32_const(module.alloc(n8));
    f5.addCode(
      c3.setLocal("itAux", c3.i32_load(c3.i32_const(0))),
      c3.i32_store(
        c3.i32_const(0),
        c3.i32_add(
          c3.getLocal("itAux"),
          c3.i32_mul(
            c3.i32_add(
              c3.getLocal("n"),
              c3.i32_const(1)
            ),
            c3.i32_const(n8)
          )
        )
      )
    );
    f5.addCode(
      c3.call(prefix + "_one", c3.getLocal("itAux")),
      c3.setLocal("itIn", c3.getLocal("pIn")),
      c3.setLocal("itAux", c3.i32_add(c3.getLocal("itAux"), c3.i32_const(n8))),
      c3.setLocal("i", c3.i32_const(0)),
      c3.block(c3.loop(
        c3.br_if(1, c3.i32_eq(c3.getLocal("i"), c3.getLocal("n"))),
        c3.if(
          c3.call(prefix + "_isZero", c3.getLocal("itIn")),
          c3.call(
            prefix + "_copy",
            c3.i32_sub(c3.getLocal("itAux"), c3.i32_const(n8)),
            c3.getLocal("itAux")
          ),
          c3.call(
            prefix + "_mul",
            c3.getLocal("itIn"),
            c3.i32_sub(c3.getLocal("itAux"), c3.i32_const(n8)),
            c3.getLocal("itAux")
          )
        ),
        c3.setLocal("itIn", c3.i32_add(c3.getLocal("itIn"), c3.getLocal("inStep"))),
        c3.setLocal("itAux", c3.i32_add(c3.getLocal("itAux"), c3.i32_const(n8))),
        c3.setLocal("i", c3.i32_add(c3.getLocal("i"), c3.i32_const(1))),
        c3.br(0)
      )),
      c3.setLocal("itIn", c3.i32_sub(c3.getLocal("itIn"), c3.getLocal("inStep"))),
      c3.setLocal("itAux", c3.i32_sub(c3.getLocal("itAux"), c3.i32_const(n8))),
      c3.setLocal(
        "itOut",
        c3.i32_add(
          c3.getLocal("pOut"),
          c3.i32_mul(
            c3.i32_sub(c3.getLocal("n"), c3.i32_const(1)),
            c3.getLocal("outStep")
          )
        )
      ),
      c3.call(prefix + "_inverse", c3.getLocal("itAux"), c3.getLocal("itAux")),
      c3.block(c3.loop(
        c3.br_if(1, c3.i32_eqz(c3.getLocal("i"))),
        c3.if(
          c3.call(prefix + "_isZero", c3.getLocal("itIn")),
          [
            ...c3.call(
              prefix + "_copy",
              c3.getLocal("itAux"),
              c3.i32_sub(c3.getLocal("itAux"), c3.i32_const(n8))
            ),
            ...c3.call(
              prefix + "_zero",
              c3.getLocal("itOut")
            )
          ],
          [
            ...c3.call(prefix + "_copy", c3.i32_sub(c3.getLocal("itAux"), c3.i32_const(n8)), AUX),
            ...c3.call(
              prefix + "_mul",
              c3.getLocal("itAux"),
              c3.getLocal("itIn"),
              c3.i32_sub(c3.getLocal("itAux"), c3.i32_const(n8))
            ),
            ...c3.call(
              prefix + "_mul",
              c3.getLocal("itAux"),
              AUX,
              c3.getLocal("itOut")
            )
          ]
        ),
        c3.setLocal("itIn", c3.i32_sub(c3.getLocal("itIn"), c3.getLocal("inStep"))),
        c3.setLocal("itOut", c3.i32_sub(c3.getLocal("itOut"), c3.getLocal("outStep"))),
        c3.setLocal("itAux", c3.i32_sub(c3.getLocal("itAux"), c3.i32_const(n8))),
        c3.setLocal("i", c3.i32_sub(c3.getLocal("i"), c3.i32_const(1))),
        c3.br(0)
      ))
    );
    f5.addCode(
      c3.i32_store(
        c3.i32_const(0),
        c3.getLocal("itAux")
      )
    );
  }
  var build_batchconvertion = buildBatchConvertion$3;
  function buildBatchConvertion$3(module, fnName, internalFnName, sizeIn, sizeOut, reverse) {
    if (typeof reverse === "undefined") {
      if (sizeIn < sizeOut) {
        reverse = true;
      } else {
        reverse = false;
      }
    }
    const f5 = module.addFunction(fnName);
    f5.addParam("pIn", "i32");
    f5.addParam("n", "i32");
    f5.addParam("pOut", "i32");
    f5.addLocal("i", "i32");
    f5.addLocal("itIn", "i32");
    f5.addLocal("itOut", "i32");
    const c3 = f5.getCodeBuilder();
    if (reverse) {
      f5.addCode(
        c3.setLocal(
          "itIn",
          c3.i32_add(
            c3.getLocal("pIn"),
            c3.i32_mul(
              c3.i32_sub(
                c3.getLocal("n"),
                c3.i32_const(1)
              ),
              c3.i32_const(sizeIn)
            )
          )
        ),
        c3.setLocal(
          "itOut",
          c3.i32_add(
            c3.getLocal("pOut"),
            c3.i32_mul(
              c3.i32_sub(
                c3.getLocal("n"),
                c3.i32_const(1)
              ),
              c3.i32_const(sizeOut)
            )
          )
        ),
        c3.setLocal("i", c3.i32_const(0)),
        c3.block(c3.loop(
          c3.br_if(1, c3.i32_eq(c3.getLocal("i"), c3.getLocal("n"))),
          c3.call(internalFnName, c3.getLocal("itIn"), c3.getLocal("itOut")),
          c3.setLocal("itIn", c3.i32_sub(c3.getLocal("itIn"), c3.i32_const(sizeIn))),
          c3.setLocal("itOut", c3.i32_sub(c3.getLocal("itOut"), c3.i32_const(sizeOut))),
          c3.setLocal("i", c3.i32_add(c3.getLocal("i"), c3.i32_const(1))),
          c3.br(0)
        ))
      );
    } else {
      f5.addCode(
        c3.setLocal("itIn", c3.getLocal("pIn")),
        c3.setLocal("itOut", c3.getLocal("pOut")),
        c3.setLocal("i", c3.i32_const(0)),
        c3.block(c3.loop(
          c3.br_if(1, c3.i32_eq(c3.getLocal("i"), c3.getLocal("n"))),
          c3.call(internalFnName, c3.getLocal("itIn"), c3.getLocal("itOut")),
          c3.setLocal("itIn", c3.i32_add(c3.getLocal("itIn"), c3.i32_const(sizeIn))),
          c3.setLocal("itOut", c3.i32_add(c3.getLocal("itOut"), c3.i32_const(sizeOut))),
          c3.setLocal("i", c3.i32_add(c3.getLocal("i"), c3.i32_const(1))),
          c3.br(0)
        ))
      );
    }
  }
  var build_batchop = buildBatchConvertion$2;
  function buildBatchConvertion$2(module, fnName, internalFnName, sizeIn, sizeOut, reverse) {
    if (typeof reverse === "undefined") {
      if (sizeIn < sizeOut) {
        reverse = true;
      } else {
        reverse = false;
      }
    }
    const f5 = module.addFunction(fnName);
    f5.addParam("pIn1", "i32");
    f5.addParam("pIn2", "i32");
    f5.addParam("n", "i32");
    f5.addParam("pOut", "i32");
    f5.addLocal("i", "i32");
    f5.addLocal("itIn1", "i32");
    f5.addLocal("itIn2", "i32");
    f5.addLocal("itOut", "i32");
    const c3 = f5.getCodeBuilder();
    if (reverse) {
      f5.addCode(
        c3.setLocal(
          "itIn1",
          c3.i32_add(
            c3.getLocal("pIn1"),
            c3.i32_mul(
              c3.i32_sub(
                c3.getLocal("n"),
                c3.i32_const(1)
              ),
              c3.i32_const(sizeIn)
            )
          )
        ),
        c3.setLocal(
          "itIn2",
          c3.i32_add(
            c3.getLocal("pIn2"),
            c3.i32_mul(
              c3.i32_sub(
                c3.getLocal("n"),
                c3.i32_const(1)
              ),
              c3.i32_const(sizeIn)
            )
          )
        ),
        c3.setLocal(
          "itOut",
          c3.i32_add(
            c3.getLocal("pOut"),
            c3.i32_mul(
              c3.i32_sub(
                c3.getLocal("n"),
                c3.i32_const(1)
              ),
              c3.i32_const(sizeOut)
            )
          )
        ),
        c3.setLocal("i", c3.i32_const(0)),
        c3.block(c3.loop(
          c3.br_if(1, c3.i32_eq(c3.getLocal("i"), c3.getLocal("n"))),
          c3.call(internalFnName, c3.getLocal("itIn1"), c3.getLocal("itIn2"), c3.getLocal("itOut")),
          c3.setLocal("itIn1", c3.i32_sub(c3.getLocal("itIn1"), c3.i32_const(sizeIn))),
          c3.setLocal("itIn2", c3.i32_sub(c3.getLocal("itIn2"), c3.i32_const(sizeIn))),
          c3.setLocal("itOut", c3.i32_sub(c3.getLocal("itOut"), c3.i32_const(sizeOut))),
          c3.setLocal("i", c3.i32_add(c3.getLocal("i"), c3.i32_const(1))),
          c3.br(0)
        ))
      );
    } else {
      f5.addCode(
        c3.setLocal("itIn1", c3.getLocal("pIn1")),
        c3.setLocal("itIn2", c3.getLocal("pIn2")),
        c3.setLocal("itOut", c3.getLocal("pOut")),
        c3.setLocal("i", c3.i32_const(0)),
        c3.block(c3.loop(
          c3.br_if(1, c3.i32_eq(c3.getLocal("i"), c3.getLocal("n"))),
          c3.call(internalFnName, c3.getLocal("itIn1"), c3.getLocal("itIn2"), c3.getLocal("itOut")),
          c3.setLocal("itIn1", c3.i32_add(c3.getLocal("itIn1"), c3.i32_const(sizeIn))),
          c3.setLocal("itIn2", c3.i32_add(c3.getLocal("itIn2"), c3.i32_const(sizeIn))),
          c3.setLocal("itOut", c3.i32_add(c3.getLocal("itOut"), c3.i32_const(sizeOut))),
          c3.setLocal("i", c3.i32_add(c3.getLocal("i"), c3.i32_const(1))),
          c3.br(0)
        ))
      );
    }
  }
  var bigint = {};
  function compare(a4, b7) {
    return a4 === b7 ? 0 : a4 > b7 ? 1 : -1;
  }
  function square$1(n4) {
    return n4 * n4;
  }
  function isOdd$4(n4) {
    return n4 % 2n !== 0n;
  }
  function isEven(n4) {
    return n4 % 2n === 0n;
  }
  function isNegative$3(n4) {
    return n4 < 0n;
  }
  function isPositive(n4) {
    return n4 > 0n;
  }
  function bitLength$5(n4) {
    if (isNegative$3(n4)) {
      return n4.toString(2).length - 1;
    } else {
      return n4.toString(2).length;
    }
  }
  function abs(n4) {
    return n4 < 0n ? -n4 : n4;
  }
  function isUnit(n4) {
    return abs(n4) === 1n;
  }
  function modInv$3(a4, n4) {
    var t = 0n, newT = 1n, r = n4, newR = abs(a4), q5, lastT, lastR;
    while (newR !== 0n) {
      q5 = r / newR;
      lastT = t;
      lastR = r;
      t = newT;
      r = newR;
      newT = lastT - q5 * newT;
      newR = lastR - q5 * newR;
    }
    if (!isUnit(r))
      throw new Error(a4.toString() + " and " + n4.toString() + " are not co-prime");
    if (compare(t, 0n) === -1) {
      t = t + n4;
    }
    if (isNegative$3(a4)) {
      return -t;
    }
    return t;
  }
  function modPow$2(n4, exp2, mod3) {
    if (mod3 === 0n)
      throw new Error("Cannot take modPow with modulus 0");
    var r = 1n, base3 = n4 % mod3;
    if (isNegative$3(exp2)) {
      exp2 = exp2 * -1n;
      base3 = modInv$3(base3, mod3);
    }
    while (isPositive(exp2)) {
      if (base3 === 0n)
        return 0n;
      if (isOdd$4(exp2))
        r = r * base3 % mod3;
      exp2 = exp2 / 2n;
      base3 = square$1(base3) % mod3;
    }
    return r;
  }
  function compareAbs(a4, b7) {
    a4 = a4 >= 0n ? a4 : -a4;
    b7 = b7 >= 0n ? b7 : -b7;
    return a4 === b7 ? 0 : a4 > b7 ? 1 : -1;
  }
  function isDivisibleBy(a4, n4) {
    if (n4 === 0n)
      return false;
    if (isUnit(n4))
      return true;
    if (compareAbs(n4, 2n) === 0)
      return isEven(a4);
    return a4 % n4 === 0n;
  }
  function isBasicPrime(v6) {
    var n4 = abs(v6);
    if (isUnit(n4))
      return false;
    if (n4 === 2n || n4 === 3n || n4 === 5n)
      return true;
    if (isEven(n4) || isDivisibleBy(n4, 3n) || isDivisibleBy(n4, 5n))
      return false;
    if (n4 < 49n)
      return true;
  }
  function prev(n4) {
    return n4 - 1n;
  }
  function millerRabinTest(n4, a4) {
    var nPrev = prev(n4), b7 = nPrev, r = 0, d5, i4, x6;
    while (isEven(b7))
      b7 = b7 / 2n, r++;
    next:
      for (i4 = 0; i4 < a4.length; i4++) {
        if (n4 < a4[i4])
          continue;
        x6 = modPow$2(BigInt(a4[i4]), b7, n4);
        if (isUnit(x6) || x6 === nPrev)
          continue;
        for (d5 = r - 1; d5 != 0; d5--) {
          x6 = square$1(x6) % n4;
          if (isUnit(x6))
            return false;
          if (x6 === nPrev)
            continue next;
        }
        return false;
      }
    return true;
  }
  function isPrime$1(p6) {
    var isPrime2 = isBasicPrime(p6);
    if (isPrime2 !== void 0)
      return isPrime2;
    var n4 = abs(p6);
    var bits2 = bitLength$5(n4);
    if (bits2 <= 64)
      return millerRabinTest(n4, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
    var logN = Math.log(2) * Number(bits2);
    var t = Math.ceil(logN);
    for (var a4 = [], i4 = 0; i4 < t; i4++) {
      a4.push(BigInt(i4 + 2));
    }
    return millerRabinTest(n4, a4);
  }
  bigint.bitLength = bitLength$5;
  bigint.isOdd = isOdd$4;
  bigint.isNegative = isNegative$3;
  bigint.abs = abs;
  bigint.isUnit = isUnit;
  bigint.compare = compare;
  bigint.modInv = modInv$3;
  bigint.modPow = modPow$2;
  bigint.isPrime = isPrime$1;
  bigint.square = square$1;
  var buildInt2 = build_int;
  var utils$5 = utils$6;
  var buildExp$2 = build_timesscalar;
  var buildBatchInverse$2 = build_batchinverse;
  var buildBatchConvertion$1 = build_batchconvertion;
  var buildBatchOp = build_batchop;
  var { bitLength: bitLength$4, modInv: modInv$2, modPow: modPow$1, isPrime, isOdd: isOdd$3, square } = bigint;
  var build_f1m = function buildF1m(module, _q, _prefix, _intPrefix) {
    const q5 = BigInt(_q);
    const n64 = Math.floor((bitLength$4(q5 - 1n) - 1) / 64) + 1;
    const n32 = n64 * 2;
    const n8 = n64 * 8;
    const prefix = _prefix || "f1m";
    if (module.modules[prefix])
      return prefix;
    const intPrefix = buildInt2(module, n64, _intPrefix);
    const pq = module.alloc(n8, utils$5.bigInt2BytesLE(q5, n8));
    const pR2 = module.alloc(utils$5.bigInt2BytesLE(square(1n << BigInt(n64 * 64)) % q5, n8));
    const pOne = module.alloc(utils$5.bigInt2BytesLE((1n << BigInt(n64 * 64)) % q5, n8));
    const pZero = module.alloc(utils$5.bigInt2BytesLE(0n, n8));
    const _minusOne = q5 - 1n;
    const _e2 = _minusOne >> 1n;
    const pe2 = module.alloc(n8, utils$5.bigInt2BytesLE(_e2, n8));
    const _ePlusOne = _e2 + 1n;
    const pePlusOne = module.alloc(n8, utils$5.bigInt2BytesLE(_ePlusOne, n8));
    module.modules[prefix] = {
      pq,
      pR2,
      n64,
      q: q5,
      pOne,
      pZero,
      pePlusOne
    };
    function buildOne() {
      const f5 = module.addFunction(prefix + "_one");
      f5.addParam("pr", "i32");
      const c3 = f5.getCodeBuilder();
      f5.addCode(c3.call(intPrefix + "_copy", c3.i32_const(pOne), c3.getLocal("pr")));
    }
    function buildAdd() {
      const f5 = module.addFunction(prefix + "_add");
      f5.addParam("x", "i32");
      f5.addParam("y", "i32");
      f5.addParam("r", "i32");
      const c3 = f5.getCodeBuilder();
      f5.addCode(
        c3.if(
          c3.call(intPrefix + "_add", c3.getLocal("x"), c3.getLocal("y"), c3.getLocal("r")),
          c3.drop(c3.call(intPrefix + "_sub", c3.getLocal("r"), c3.i32_const(pq), c3.getLocal("r"))),
          c3.if(
            c3.call(intPrefix + "_gte", c3.getLocal("r"), c3.i32_const(pq)),
            c3.drop(c3.call(intPrefix + "_sub", c3.getLocal("r"), c3.i32_const(pq), c3.getLocal("r")))
          )
        )
      );
    }
    function buildSub() {
      const f5 = module.addFunction(prefix + "_sub");
      f5.addParam("x", "i32");
      f5.addParam("y", "i32");
      f5.addParam("r", "i32");
      const c3 = f5.getCodeBuilder();
      f5.addCode(
        c3.if(
          c3.call(intPrefix + "_sub", c3.getLocal("x"), c3.getLocal("y"), c3.getLocal("r")),
          c3.drop(c3.call(intPrefix + "_add", c3.getLocal("r"), c3.i32_const(pq), c3.getLocal("r")))
        )
      );
    }
    function buildNeg() {
      const f5 = module.addFunction(prefix + "_neg");
      f5.addParam("x", "i32");
      f5.addParam("r", "i32");
      const c3 = f5.getCodeBuilder();
      f5.addCode(
        c3.call(prefix + "_sub", c3.i32_const(pZero), c3.getLocal("x"), c3.getLocal("r"))
      );
    }
    function buildIsNegative() {
      const f5 = module.addFunction(prefix + "_isNegative");
      f5.addParam("x", "i32");
      f5.setReturnType("i32");
      const c3 = f5.getCodeBuilder();
      const AUX = c3.i32_const(module.alloc(n8));
      f5.addCode(
        c3.call(prefix + "_fromMontgomery", c3.getLocal("x"), AUX),
        c3.call(intPrefix + "_gte", AUX, c3.i32_const(pePlusOne))
      );
    }
    function buildSign() {
      const f5 = module.addFunction(prefix + "_sign");
      f5.addParam("x", "i32");
      f5.setReturnType("i32");
      const c3 = f5.getCodeBuilder();
      const AUX = c3.i32_const(module.alloc(n8));
      f5.addCode(
        c3.if(
          c3.call(intPrefix + "_isZero", c3.getLocal("x")),
          c3.ret(c3.i32_const(0))
        ),
        c3.call(prefix + "_fromMontgomery", c3.getLocal("x"), AUX),
        c3.if(
          c3.call(intPrefix + "_gte", AUX, c3.i32_const(pePlusOne)),
          c3.ret(c3.i32_const(-1))
        ),
        c3.ret(c3.i32_const(1))
      );
    }
    function buildMReduct() {
      const carries = module.alloc(n32 * n32 * 8);
      const f5 = module.addFunction(prefix + "_mReduct");
      f5.addParam("t", "i32");
      f5.addParam("r", "i32");
      f5.addLocal("np32", "i64");
      f5.addLocal("c", "i64");
      f5.addLocal("m", "i64");
      const c3 = f5.getCodeBuilder();
      const np32 = Number(0x100000000n - modInv$2(q5, 0x100000000n));
      f5.addCode(c3.setLocal("np32", c3.i64_const(np32)));
      for (let i4 = 0; i4 < n32; i4++) {
        f5.addCode(c3.setLocal("c", c3.i64_const(0)));
        f5.addCode(
          c3.setLocal(
            "m",
            c3.i64_and(
              c3.i64_mul(
                c3.i64_load32_u(c3.getLocal("t"), i4 * 4),
                c3.getLocal("np32")
              ),
              c3.i64_const("0xFFFFFFFF")
            )
          )
        );
        for (let j5 = 0; j5 < n32; j5++) {
          f5.addCode(
            c3.setLocal(
              "c",
              c3.i64_add(
                c3.i64_add(
                  c3.i64_load32_u(c3.getLocal("t"), (i4 + j5) * 4),
                  c3.i64_shr_u(c3.getLocal("c"), c3.i64_const(32))
                ),
                c3.i64_mul(
                  c3.i64_load32_u(c3.i32_const(pq), j5 * 4),
                  c3.getLocal("m")
                )
              )
            )
          );
          f5.addCode(
            c3.i64_store32(
              c3.getLocal("t"),
              (i4 + j5) * 4,
              c3.getLocal("c")
            )
          );
        }
        f5.addCode(
          c3.i64_store32(
            c3.i32_const(carries),
            i4 * 4,
            c3.i64_shr_u(c3.getLocal("c"), c3.i64_const(32))
          )
        );
      }
      f5.addCode(
        c3.call(
          prefix + "_add",
          c3.i32_const(carries),
          c3.i32_add(
            c3.getLocal("t"),
            c3.i32_const(n32 * 4)
          ),
          c3.getLocal("r")
        )
      );
    }
    function buildMul() {
      const f5 = module.addFunction(prefix + "_mul");
      f5.addParam("x", "i32");
      f5.addParam("y", "i32");
      f5.addParam("r", "i32");
      f5.addLocal("c0", "i64");
      f5.addLocal("c1", "i64");
      f5.addLocal("np32", "i64");
      for (let i4 = 0; i4 < n32; i4++) {
        f5.addLocal("x" + i4, "i64");
        f5.addLocal("y" + i4, "i64");
        f5.addLocal("m" + i4, "i64");
        f5.addLocal("q" + i4, "i64");
      }
      const c3 = f5.getCodeBuilder();
      const np32 = Number(0x100000000n - modInv$2(q5, 0x100000000n));
      f5.addCode(c3.setLocal("np32", c3.i64_const(np32)));
      const loadX = [];
      const loadY = [];
      const loadQ = [];
      function mulij(i4, j5) {
        let X5, Y5;
        if (!loadX[i4]) {
          X5 = c3.teeLocal("x" + i4, c3.i64_load32_u(c3.getLocal("x"), i4 * 4));
          loadX[i4] = true;
        } else {
          X5 = c3.getLocal("x" + i4);
        }
        if (!loadY[j5]) {
          Y5 = c3.teeLocal("y" + j5, c3.i64_load32_u(c3.getLocal("y"), j5 * 4));
          loadY[j5] = true;
        } else {
          Y5 = c3.getLocal("y" + j5);
        }
        return c3.i64_mul(X5, Y5);
      }
      function mulqm(i4, j5) {
        let Q5, M6;
        if (!loadQ[i4]) {
          Q5 = c3.teeLocal("q" + i4, c3.i64_load32_u(c3.i32_const(0), pq + i4 * 4));
          loadQ[i4] = true;
        } else {
          Q5 = c3.getLocal("q" + i4);
        }
        M6 = c3.getLocal("m" + j5);
        return c3.i64_mul(Q5, M6);
      }
      let c0 = "c0";
      let c1 = "c1";
      for (let k5 = 0; k5 < n32 * 2 - 1; k5++) {
        for (let i4 = Math.max(0, k5 - n32 + 1); i4 <= k5 && i4 < n32; i4++) {
          const j5 = k5 - i4;
          f5.addCode(
            c3.setLocal(
              c0,
              c3.i64_add(
                c3.i64_and(
                  c3.getLocal(c0),
                  c3.i64_const(4294967295)

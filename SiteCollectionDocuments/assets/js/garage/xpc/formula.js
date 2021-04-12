/* ============= :: FORMULAS :: ============ */
// Create by AKARATE PONGSAWANG
// contact Aware.be.Late@gmail.com
// Version 1.0 on 24/12/2019

Number.prototype.formatNumber = function () {
    var n = Math.abs(this.valueOf()),
        d = String(n).match(/\.\d+/g);
    (d == null) && (d = "");
    n = Math.floor(n);
    n += '';
    return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + d;
}
Number.prototype.fixed = function (d, u) {
    var e = Math.pow(10, d),
        n = Math.round(this.valueOf() * e * 10) * 0.1;
    return (+!u ? Math.round(n) : u > 0 ? Math.ceil(n) : Math.floor(n)) / e;
}
jQuery.fn.forceNumber = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var reg = /[\d\.\-]/gi,
                key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (reg.test(key)) {
                e.preventDefault();
                return false;
            }
        });
    });
}
jQuery.fn.forceDecNumber = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var m = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),
                mobilekey = m ? parseInt(e.originalEvent.keyIdentifier.substring(2), 16) : 0;
            var reg = /[\d\.\-]/,
                key = mobilekey || e.charCode || e.keyCode || 0,
                fn = (e.key == "Enter") || (e.key == "Backspace") || (e.key == "Tab") || (e.key == "Decimal") || (/(Arrow)?(Right|Left)$/.test(e.key)),
                flg = fn || (reg.test(e.key)) || (e.key == null),
                flgdec = (e.key == "Decimal") || (e.key == ".") || (e.key == null),
                dec = (/\./.test(this.value)) && ((key == 190) || (key == 110)) && flgdec;
            return !dec && flg && (
                key == 8 ||
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40 && !m) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};


// Utilities Function //
function priceDW(n) {
    n = n.fixed(3, -1);
    return MROUND(n, (n >= 2) ? 0.02 : 0.01);
}

function MROUND(n, m) {
    return jsAcc(m * Math.round(n / m));
}

function jsAcc(n) {
    return +(parseFloat(n).toPrecision(12));
}

function convertToNumber(s) {
    if (s == "") s = "0";
    s += '';
    var n = s.replace(/[,]/g, "");
    if (isNaN(n)) return 0;
    return parseFloat(n);
}

function formatNumber(n, f) {
    var t = (f != undefined) ? (n).toFixed(f) : String(n),
        d = t.match(/\.\d+/g),
        v = (n < 0) ? "-" : "";
    (d == null) && (d = "");
    n = parseInt(Math.abs(n));
    n += '';
    return v + n.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + d;
}

function formatToNumber(s) {
    if (isNaN(s)) return parseFloat(s.replace(/[,]/g, ""));
    return parseFloat(s);
}

function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
}


function fxRATE(a, t, h, o, M, e) {
    e = void 0 === e ? .01 : e, o = void 0 === o ? 0 : o, M = void 0 === M ? 0 : M;
    var i, r, v, b = 1e-10,
        d = 0,
        n = 0,
        s = 0,
        f = e;
    for (Math.abs(f) < b ? h * (1 + a * f) + t * (1 + f * M) * a + o : h * (n = Math.exp(a * Math.log(1 + f))) + t * (1 / f + M) * (n - 1) + o, i = h + t * a + o, r = h * n + t * (1 / f + M) * (n - 1) + o, s = v = 0, d = f; Math.abs(i - r) > b && s < 10;) f = (r * v - i * d) / (r - i), v = d, d = f, i = r, r = Math.abs(f) < b ? h * (1 + a * f) + t * (1 + f * M) * a + o : h * (n = Math.exp(a * Math.log(1 + f))) + t * (1 / f + M) * (n - 1) + o, ++s;
    return f
};


var _0x91fe = ["\x4A\x20\x72\x28\x29\x7B\x6B\x20\x62\x3D\x28\x65\x5B\x30\x5D\x3D\x3D\x36\x29\x3F\x36\x3A\x2B\x65\x5B\x30\x5D\x2C\x37\x3D\x28\x65\x5B\x31\x5D\x3D\x3D\x36\x29\x3F\x36\x3A\x2B\x65\x5B\x31\x5D\x2A\x30\x2E\x52\x2C\x39\x3D\x28\x65\x5B\x32\x5D\x3D\x3D\x36\x29\x3F\x36\x3A\x2B\x65\x5B\x32\x5D\x2C\x38\x3D\x28\x65\x5B\x33\x5D\x3D\x3D\x36\x29\x3F\x36\x3A\x2B\x65\x5B\x33\x5D\x2C\x68\x3D\x28\x65\x5B\x34\x5D\x3D\x3D\x36\x29\x3F\x36\x3A\x2B\x65\x5B\x34\x5D\x2C\x6C\x3D\x28\x65\x5B\x35\x5D\x21\x3D\x50\x29\x3F\x31\x2B\x37\x3A\x31\x3B\x66\x28\x21\x65\x2E\x49\x29\x7B\x70\x2E\x6D\x28\x27\x72\x28\x4B\x2C\x20\x37\x2C\x20\x39\x2C\x20\x38\x2C\x20\x68\x2C\x20\x5B\x6C\x5D\x29\x27\x29\x3B\x70\x2E\x6D\x28\x27\x2A\x2A\x20\x4C\x20\x4D\x20\x25\x4E\x20\x4F\x27\x2C\x27\x74\x2D\x77\x3A\x22\x53\x2D\x54\x22\x3B\x20\x78\x3A\x23\x79\x3B\x20\x74\x2D\x7A\x3A\x41\x3B\x27\x2C\x27\x2A\x2A\x27\x29\x3B\x70\x2E\x6D\x28\x27\x42\x20\x43\x20\x2D\x3E\x20\x44\x2E\x45\x2E\x46\x40\x47\x2E\x48\x27\x29\x3B\x67\x20\x36\x7D\x66\x28\x62\x3D\x3D\x36\x29\x7B\x66\x28\x37\x3D\x3D\x30\x29\x67\x2D\x28\x39\x2B\x68\x29\x2F\x38\x3B\x6B\x20\x63\x3D\x38\x2A\x6C\x2D\x68\x2A\x37\x2C\x6A\x3D\x38\x2A\x6C\x2B\x39\x2A\x37\x2C\x6F\x3D\x31\x2B\x37\x3B\x67\x20\x69\x2E\x6D\x28\x63\x2F\x6A\x29\x2F\x69\x2E\x6D\x28\x6F\x29\x7D\x66\x28\x65\x5B\x31\x5D\x3D\x3D\x36\x29\x7B\x66\x28\x38\x3D\x3D\x30\x29\x67\x20\x73\x2A\x28\x69\x2E\x6E\x28\x2D\x68\x2F\x39\x2C\x31\x2F\x62\x29\x2D\x31\x29\x3B\x66\x28\x69\x2E\x75\x28\x39\x2B\x62\x2A\x38\x29\x3C\x31\x29\x67\x20\x30\x3B\x6B\x20\x64\x3D\x32\x2F\x62\x2A\x69\x2E\x6D\x28\x2D\x38\x2A\x62\x2F\x39\x29\x3B\x51\x28\x6B\x20\x61\x3D\x30\x3B\x61\x3C\x76\x3B\x61\x2B\x2B\x29\x7B\x6B\x20\x63\x3D\x69\x2E\x6E\x28\x31\x2B\x64\x2C\x2D\x62\x29\x2C\x6A\x3D\x63\x2F\x28\x31\x2B\x64\x29\x2C\x6F\x3D\x39\x2B\x38\x2A\x28\x31\x2D\x63\x29\x2F\x64\x2B\x68\x2A\x63\x2C\x71\x3D\x2D\x38\x2A\x28\x31\x2D\x63\x29\x2F\x64\x2F\x64\x2B\x38\x2A\x62\x2A\x6A\x2F\x64\x2D\x68\x2A\x62\x2A\x6A\x3B\x64\x2D\x3D\x6F\x2F\x71\x3B\x28\x69\x2E\x75\x28\x6F\x2F\x71\x29\x3C\x55\x2D\x56\x29\x26\x26\x28\x61\x3D\x76\x29\x7D\x67\x20\x64\x2A\x73\x7D\x66\x28\x39\x3D\x3D\x36\x29\x7B\x66\x28\x37\x3D\x3D\x30\x29\x67\x2D\x28\x68\x2B\x38\x2A\x62\x29\x3B\x6B\x20\x63\x3D\x38\x2A\x6C\x2F\x37\x2C\x6A\x3D\x69\x2E\x6E\x28\x31\x2B\x37\x2C\x62\x29\x3B\x67\x28\x63\x2D\x68\x29\x2F\x6A\x2D\x63\x7D\x66\x28\x38\x3D\x3D\x36\x29\x7B\x66\x28\x37\x3D\x3D\x30\x29\x67\x2D\x28\x39\x2B\x68\x29\x2F\x62\x3B\x6B\x20\x63\x3D\x69\x2E\x6E\x28\x31\x2B\x37\x2C\x62\x29\x3B\x67\x2D\x37\x2F\x6C\x2A\x28\x39\x2B\x28\x39\x2B\x68\x29\x2F\x28\x63\x2D\x31\x29\x29\x7D\x66\x28\x68\x3D\x3D\x36\x29\x7B\x66\x28\x37\x3D\x3D\x30\x29\x67\x2D\x39\x2B\x38\x2A\x62\x3B\x6B\x20\x63\x3D\x38\x2A\x6C\x2F\x37\x2C\x6A\x3D\x69\x2E\x6E\x28\x31\x2B\x37\x2C\x62\x29\x3B\x67\x20\x63\x2D\x6A\x2A\x28\x39\x2B\x63\x29\x7D\x7D", "\x7C", "\x73\x70\x6C\x69\x74", "\x7C\x7C\x7C\x7C\x7C\x7C\x6E\x75\x6C\x6C\x7C\x69\x72\x7C\x70\x6D\x74\x7C\x70\x76\x7C\x7C\x7C\x7C\x7C\x61\x72\x67\x75\x6D\x65\x6E\x74\x73\x7C\x69\x66\x7C\x72\x65\x74\x75\x72\x6E\x7C\x66\x76\x7C\x4D\x61\x74\x68\x7C\x5F\x73\x31\x7C\x76\x61\x72\x7C\x67\x69\x7C\x6C\x6F\x67\x7C\x70\x6F\x77\x7C\x5F\x73\x32\x7C\x63\x6F\x6E\x73\x6F\x6C\x65\x7C\x5F\x73\x33\x7C\x66\x6E\x5F\x42\x41\x7C\x31\x30\x30\x7C\x66\x6F\x6E\x74\x7C\x61\x62\x73\x7C\x34\x30\x30\x7C\x66\x61\x6D\x69\x6C\x79\x7C\x63\x6F\x6C\x6F\x72\x7C\x35\x39\x31\x62\x63\x37\x7C\x73\x69\x7A\x65\x7C\x31\x32\x70\x78\x7C\x66\x6F\x6C\x6C\x6F\x77\x7C\x6D\x65\x7C\x61\x77\x61\x72\x65\x7C\x62\x65\x7C\x6C\x61\x74\x65\x7C\x67\x6D\x61\x69\x6C\x7C\x63\x6F\x6D\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x6E\x70\x7C\x66\x6F\x72\x6D\x75\x6C\x61\x7C\x62\x79\x7C\x63\x41\x4B\x41\x52\x41\x54\x45\x7C\x50\x4F\x4E\x47\x53\x41\x57\x41\x4E\x47\x7C\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x7C\x66\x6F\x72\x7C\x30\x31\x7C\x66\x75\x74\x75\x72\x61\x7C\x6C\x69\x67\x68\x74\x7C\x31\x65\x7C\x31\x34", "", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\x5C\x77\x2B", "\x5C\x62", "\x67"];
eval(function (_0x87a8x1, _0x87a8x2, _0x87a8x3, _0x87a8x4, _0x87a8x5, _0x87a8x6) {
    _0x87a8x5 = function (_0x87a8x3) {
        return (_0x87a8x3 < _0x87a8x2 ? _0x91fe[4] : _0x87a8x5(parseInt(_0x87a8x3 / _0x87a8x2))) + ((_0x87a8x3 = _0x87a8x3 % _0x87a8x2) > 35 ? String[_0x91fe[5]](_0x87a8x3 + 29) : _0x87a8x3.toString(36))
    };
    if (!_0x91fe[4][_0x91fe[6]](/^/, String)) {
        while (_0x87a8x3--) {
            _0x87a8x6[_0x87a8x5(_0x87a8x3)] = _0x87a8x4[_0x87a8x3] || _0x87a8x5(_0x87a8x3)
        };
        _0x87a8x4 = [function (_0x87a8x5) {
            return _0x87a8x6[_0x87a8x5]
        }];
        _0x87a8x5 = function () {
            return _0x91fe[7]
        };
        _0x87a8x3 = 1
    };
    while (_0x87a8x3--) {
        if (_0x87a8x4[_0x87a8x3]) {
            _0x87a8x1 = _0x87a8x1[_0x91fe[6]](new RegExp(_0x91fe[8] + _0x87a8x5(_0x87a8x3) + _0x91fe[8], _0x91fe[9]), _0x87a8x4[_0x87a8x3])
        }
    };
    return _0x87a8x1
}(_0x91fe[0], 58, 58, _0x91fe[3][_0x91fe[2]](_0x91fe[1]), 0, {}));


function(instance, properties, context){
	function _0x15e3(_0x2474d7, _0x12902c) {
    const _0x132d20 = _0x132d();
    return _0x15e3 = function (_0x15e365, _0x1068e7) {
        _0x15e365 = _0x15e365 - 0xbc;
        let _0x3a4c19 = _0x132d20[_0x15e365];
        return _0x3a4c19;
    }, _0x15e3(_0x2474d7, _0x12902c);
}
(function (_0x5a56a6, _0x213664) {
    const _0x487168 = _0x15e3, _0x33656d = _0x5a56a6();
    while (!![]) {
        try {
            const _0x5d2bd3 = -parseInt(_0x487168(0xd1)) / 0x1 + -parseInt(_0x487168(0xc2)) / 0x2 * (-parseInt(_0x487168(0xc6)) / 0x3) + parseInt(_0x487168(0xca)) / 0x4 + -parseInt(_0x487168(0xd7)) / 0x5 * (-parseInt(_0x487168(0xd6)) / 0x6) + -parseInt(_0x487168(0xcc)) / 0x7 + parseInt(_0x487168(0xcd)) / 0x8 + -parseInt(_0x487168(0xc7)) / 0x9;
            if (_0x5d2bd3 === _0x213664)
                break;
            else
                _0x33656d['push'](_0x33656d['shift']());
        } catch (_0x554d96) {
            _0x33656d['push'](_0x33656d['shift']());
        }
    }
}(_0x132d, 0xb925f));
function _0x132d() {
    const _0x89fdf1 = [
        'observe',
        '1294724ifzkYA',
        'target',
        'observer',
        'forEach',
        'getElementById',
        '3540Dvnezs',
        '5970tRZrKd',
        'split',
        'type',
        'body',
        'addedNodes',
        'trim',
        'cells',
        '56qCzVor',
        'includes',
        'data',
        'run',
        '103365iIppkE',
        '1419624GGevQi',
        'map',
        'getElementsByTagName',
        '2551624dnkDaK',
        'scroll_speed_factor',
        '2399404VttTqM',
        '1971944sMQFIG',
        'ELEMENT_NODE',
        'rgs'
    ];
    _0x132d = function () {
        return _0x89fdf1;
    };
    return _0x132d();
}
function update(_0x29f655, _0x5fb9aa, _0x582c9e) {
    const _0x19edc1 = _0x15e3;
    function _0x48ace9() {
        const _0x20e8f6 = _0x15e3;
        _0x29f655[_0x20e8f6(0xc4)][_0x20e8f6(0xc5)](_0x5fb9aa[_0x20e8f6(0xcf)], _0x5fb9aa[_0x20e8f6(0xc1)], _0x5fb9aa[_0x20e8f6(0xcb)]);
    }
    const _0x4fd5ce = _0x5fb9aa[_0x19edc1(0xcf)][_0x19edc1(0xbc)](',')['map'](_0x621fdc => _0x621fdc[_0x19edc1(0xc0)]()), _0x3b7ec1 = _0x5fb9aa[_0x19edc1(0xc1)]['split'](',')[_0x19edc1(0xc8)](_0x1e274f => _0x1e274f[_0x19edc1(0xc0)]());
    function _0x4e1bbf(_0x23482c) {
        const _0x47012b = _0x19edc1;
        if (_0x4fd5ce[_0x47012b(0xc3)](_0x23482c['id']))
            return !![];
        if (_0x3b7ec1[_0x47012b(0xc3)](_0x23482c['id']))
            return !![];
        for (let _0x4c546b of _0x23482c[_0x47012b(0xc9)]('*')) {
            if (_0x4fd5ce[_0x47012b(0xc3)](_0x4c546b['id']))
                return !![];
        }
        for (let _0x2d6412 of _0x23482c[_0x47012b(0xc9)]('*')) {
            if (_0x3b7ec1[_0x47012b(0xc3)](_0x2d6412['id']))
                return !![];
        }
        return ![];
    }
    !_0x29f655['data'][_0x19edc1(0xd3)] && (_0x29f655[_0x19edc1(0xc4)][_0x19edc1(0xd3)] = new MutationObserver(_0x30f892 => {
        const _0x215880 = _0x19edc1;
        for (let _0x3e4d1b of _0x30f892) {
            if (_0x3e4d1b['type'] === 'childList')
                for (let _0x159826 of _0x3e4d1b[_0x215880(0xbf)]) {
                    if (_0x159826['nodeType'] === Node[_0x215880(0xce)] && _0x4e1bbf(_0x159826)) {
                        _0x48ace9();
                        return;
                    }
                }
            else {
                if (_0x3e4d1b[_0x215880(0xbd)] === 'attributes' && _0x3e4d1b['attributeName'] === 'id') {
                    if (_0x4fd5ce[_0x215880(0xc3)](_0x3e4d1b[_0x215880(0xd2)]['id'])) {
                        _0x48ace9();
                        return;
                    }
                    if (_0x3b7ec1[_0x215880(0xc3)](_0x3e4d1b[_0x215880(0xd2)]['id'])) {
                        _0x48ace9();
                        return;
                    }
                }
            }
        }
    }), _0x29f655[_0x19edc1(0xc4)]['observer'][_0x19edc1(0xd0)](document[_0x19edc1(0xbe)], {
        'childList': !![],
        'subtree': !![],
        'attributes': !![],
        'attributeFilter': ['id']
    })), _0x4fd5ce[_0x19edc1(0xd4)](_0x221507 => {
        const _0x4e262f = _0x19edc1;
        if (document[_0x4e262f(0xd5)](_0x221507)) {
            _0x48ace9();
            return;
        }
    }), _0x3b7ec1[_0x19edc1(0xd4)](_0x343559 => {
        const _0x497ea6 = _0x19edc1;
        if (document[_0x497ea6(0xd5)](_0x343559)) {
            _0x48ace9();
            return;
        }
    }), _0x48ace9();
}
	 update(instance, properties, context);
}
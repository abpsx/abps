var FFI = require('ffi');
var iconv = require('iconv-lite');

function GBK(text) {
    var newText = text + '\0';
    var buf = iconv.encode(newText, 'gb2312');
    return buf;
}

function U(text) {
    var newText = text + '\0';
    var buf = iconv.encode(newText, 'utf16');
    return buf;
}

var user32 = new FFI.Library('user32', {
    'MessageBoxA':
        [
            'int32', ['int32', 'string', 'string', 'int32']
        ],
    'MessageBoxW':
        [
            'int32', ['int32', 'string', 'string', 'int32']
        ]
});
// var OK_or_Cancel = user32.MessageBoxW(
//     0, U('中文(Unicode)的内容提示测试，祖国你好'), U('中文的标题'), 1
// );
// console.log(OK_or_Cancel);

// user32.MessageBoxA(0, GBK('dll模块加载成功!'), GBK('中文的标题'), 1);




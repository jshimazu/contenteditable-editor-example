// contentEditableのWarningを消す, reactの次バージョンで修正されるらしいので暫定処置
console.error = (function() {
    var error = console.error

    return function(exception) {
        if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
            error.apply(console, arguments)
        }
    }
})()

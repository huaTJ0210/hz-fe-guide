const obj = {
    toString: function () {
        return '123'
    },
    valueOf: function () {
        return 2
    }
}

    console.log(obj + 1)
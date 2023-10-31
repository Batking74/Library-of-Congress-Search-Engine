var search = $('#input');
var format = $('#select');
var button = $('#btn');
console.log(format.val())
button.click(function() {
    fetch(`https://www.loc.gov/${format.val()}/?q=${search.val()}&fo=json`)
    .then(function(res) { return res.json()})
    .then(function(data) {
        console.log(data)
    })
})
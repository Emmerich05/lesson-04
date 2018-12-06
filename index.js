function Handbag (params) {
        this.name = "Handbag"
}
Handbag.prototype.addToHandbag = function (key) {
        this[key] = key
}
Handbag.prototype.removeFromHandbag = function (key) {
        delete this[key]
}
var content = new Handbag()
content.addToHandbag ("lipstick")
console.log (content)
content.removeFromHandbag ("lipstick")
console.log (content)
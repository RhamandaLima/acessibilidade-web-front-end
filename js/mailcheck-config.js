var campoEmail = document.querySelector('#email');
var sugestao = document.querySelector('#campoEmail');

var domains = ['gmail.com', 'uol.com', 'outlook.com', 'alura.com.br'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", "br"];

var superStringDistance = function (string1, string2) {
    // a string distance algorithm of your choosing
}

document.querySelector('#email').addEventListener('blur', function () {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function (suggestion) {
           console.log(suggestion.full)
        }
    });
});
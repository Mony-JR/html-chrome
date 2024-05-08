var Browser;
(function (Browser) {
    Browser[Browser["Chromes"] = 1] = "Chromes";
    Browser[Browser["Firefox"] = 2] = "Firefox";
    Browser[Browser["Safari"] = 3] = "Safari";
    Browser[Browser["Edge"] = 4] = "Edge";
})(Browser || (Browser = {}));
console.log(Browser);
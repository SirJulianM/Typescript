"use strict";
var Estado;
(function (Estado) {
    Estado[Estado["inactivo"] = 0] = "inactivo";
    Estado[Estado["activo"] = 1] = "activo";
})(Estado || (Estado = {}));
console.log(Estado.activo);

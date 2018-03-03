var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 1] = "Brown";
    EyeColor[EyeColor["Black"] = 2] = "Black";
    EyeColor[EyeColor["Blue"] = 3] = "Blue";
})(EyeColor || (EyeColor = {}));
; // Blak =2, Blue =3 
var myEyeColor = EyeColor.Brown;
console.log(EyeColor.Brown); // 1
console.log(EyeColor[1]); // Brown
//# sourceMappingURL=tutorial45.js.map
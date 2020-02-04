function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var outputValue = "";
    var input = UnsignedInt;
    while (UnsignedInt > 0)
    {
      outputValue += UnsignedInt % 2;
      UnsignedInt = Math.floor(UnsignedInt/2);
    }

    var splitString = outputValue.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

  // Show the output on the screen
  FormatAndShowOutput([input, UnsignedIntBaseFrom, UnsignedIntBaseTo, joinArray], 1);

}

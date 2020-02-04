function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    var outputValue = "";
    var outputValueTwosComplement = "";
    var input = SignedDecimalInt;
    while (SignedDecimalInt > 0)
    {
      outputValue += SignedDecimalInt % 2;
      outputValueTwosComplement += SignedDecimalInt % 2;
      SignedDecimalInt = Math.floor(SignedDecimalInt/2);
    }

    var joinArray3 = outputValueTwosComplement;
    var outputValueTwosComplement2 = "";

    for (int i = 0 ; i < joinArray3.length; i++)
    {
      if ((counter.subString(i,i+1)).equals("1") && (counter.subString(i+1,i+2)).equals("0"))
      {
        
      }
    }


    while (outputValueTwosComplement.length != 23)
    {
          outputValueTwosComplement += "1";
    }
    while (outputValue.length != 23)
    {
        outputValue += "0";
    }

    var splitString = outputValue.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");


    //var splitString2 = outputValueTwosComplement.split("");
    //var reverseArray2 = splitString2.reverse();
    //var joinArray2 = reverseArray2.join("");




    // Show the output on the screen
    FormatAndShowOutput([joinArray, joinArray3, input], 2);
}

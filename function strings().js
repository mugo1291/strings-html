function strings()
{
    var string1 = document.getElementById("firstStr").value;
    var string2 = document.getElementById("secondStr").value;

    var splitStr = string1.split("");
    document.getElementById("splitstr").innerHTML = splitStr.join(",");
    var reverseStr = splitStr.reverse();
    document.getElementById("reversestr").innerHTML = reverseStr.join(",")
    var joinStr =reverseStr.join("");
    document.getElementById("joinstr").innerHTML = joinStr;

    if(string1 == joinStr)
    {
        alert("palindrome");
    }  
else{
    alert("NOT a palindrome");
}

}
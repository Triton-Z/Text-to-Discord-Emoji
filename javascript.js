let result;

function calculate(){
    var text = document.getElementById("value").value.toUpperCase();
    var translatedText = 0;
    var list_i = 1;
    var alphabet = ["A:regional_indicator_a:", "B:regional_indicator_b:", "C:regional_indicator_c:", "D:regional_indicator_d:", "E:regional_indicator_e:", "F:regional_indicator_f:", "G:regional_indicator_g:", "H:regional_indicator_h:", "I:regional_indicator_i:", "J:regional_indicator_j:", "K:regional_indicator_k:", "L:regional_indicator_l:",  "M:regional_indicator_m:", "N:regional_indicator_n:", "O:regional_indicator_o:", "P:regional_indicator_p:", "Q:regional_indicator_q:", "S:regional_indicator_s:", "T:regional_indicator_t:", "U:regional_indicator_u:", "V:regional_indicator_v:", "W:regional_indicator_w:", "X:regional_indicator_x:", "Y:regional_indicator_y:", "Z:regional_indicator_z:",];
    for (var i = 0; i<text.length; i++)
    {
        while (!alphabet[list_i-1].includes(text.substring(i, i+1)))
    {
        list_i++;
        if (list_i === alphabet.length)
        {
            break;
        }
    }  
        if (alphabet[list_i-1].includes(text.substring(i, i+1)))
        {
            translatedText = (translatedText + alphabet[list_i-1].substring(1, alphabet[list_i-1].length)+" ");
            list_i = 1;
        } else if (alphabet.length)
        {
            translatedText = (translatedText + text.substring(i, i+1)+"     ");
            list_i = 1; 
        }
    }
        result = translatedText.substring(1, translatedText.length);
        document.getElementById("result").innerHTML = ("Result - " + translatedText.substring(1, translatedText.length));
}





function update() 
{
    document.getElementById("value").value = document.getElementById("value").value.toUpperCase();
}

function copytxt ()
{
    navigator.clipboard.writeText(result); 
}

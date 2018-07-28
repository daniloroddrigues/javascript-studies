/**
 * Created by damty on 10/01/2018.
 */

var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var toHackerCase = function (text) {

    var hackerTextArray = [];

    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === 'o') {
            hackerTextArray.push(0);
        } else if (text.charAt(i) === 'l') {
            hackerTextArray.push(1);
        } else if (text.charAt(i) === 'e') {
            hackerTextArray.push(3);
        } else if (text.charAt(i) === 'a') {
            hackerTextArray.push(4);
        } else if (text.charAt(i) === 's') {
            hackerTextArray.push(5);
        } else if (text.charAt(i) === 't') {
            hackerTextArray.push(7);
        } else {
            hackerTextArray.push(text.charAt(i));
        }
    }

    return hackerTextArray.join('');
};

var finalText = toHackerCase(text);
console.log(finalText);

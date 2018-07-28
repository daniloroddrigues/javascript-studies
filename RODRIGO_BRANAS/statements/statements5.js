/**
 * Created by damty on 10/01/2018.
 */

var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var toHackerCase = function (text) {

    // 0 NaN undefined null '' false
    if (!text) throw 'Invalid text.';

    var hackerTextArray = [];
    var i = 0;

    while (i < text.length) {

        switch (text.charAt(i)) {
            case 'o':
                hackerTextArray.push(0);
                break;

            case 'l':
                hackerTextArray.push(1);
                break;

            case 'e':
                hackerTextArray.push(3);
                break;

            case 'a':
                hackerTextArray.push(4);
                break;

            case 's':
                hackerTextArray.push(5);
                break;

            case 't':
                hackerTextArray.push(7);
                break;

            default:
                hackerTextArray.push(text.charAt(i));
                break;
        }

        i++;
    }

    return hackerTextArray.join('');
};

try {
    console.log(toHackerCase());
} catch (e) {
    console.log('Error: ' + e);
}

console.log(toHackerCase(text));

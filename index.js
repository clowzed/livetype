String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function livetype(node, times = 1, cursor = "▮", typing_delay = 100, delay_between_times = 1000) {
    let saved_text = node.innerText;

    while (times) {
        console.log(node);
        console.log(node.innerText);
        let string_length = node.innerText.length;

        let new_content = cursor;

        for (let i = 0; i < string_length; i++) {
            await delay(typing_delay);

            new_content = new_content.substring(0, new_content.length - 1)
            new_content += saved_text[i];
            new_content += cursor;
            node.innerText = new_content;
        }

        node.innerText = node.innerText.substring(0, node.innerText.length - 1);
        times--;

        await delay(delay_between_times);
    }
}
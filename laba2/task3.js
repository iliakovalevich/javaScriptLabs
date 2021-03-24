book = {};
function addressBook(action) {

    action = action.split(" ");

    if (action[0] == 'ADD') {
        firstname = action[1];
        phone = action[2].split(',');
        if (!book.hasOwnProperty(firstname)) {
            book[firstname] = phone;
        }
        else {

            for (i = 0; i < phone.length; i++) {

                book[firstname].push(phone[i]);

            }
        }
    }
    else if (action[0] == 'SHOW') {
        for (key in book) {
            console.log(key + ": " + book[key]);
        }
    }
    else if (action[0] == 'REMOVE_PHONE') {
        phones = action[1];

        for (phone in book) {
            if (book[phone].includes(phones)) {
                index = book[phone].indexOf(phones);
                book[phone].splice(index, 1);
            }
        }
    }
}
addressBook('ADD Ivan 555-10-01,555-10-03');
addressBook('ADD Ivan 555-10-02');
addressBook('REMOVE_PHONE 555-10-03');
addressBook('ADD Alex 555-20-01');
addressBook('SHOW');
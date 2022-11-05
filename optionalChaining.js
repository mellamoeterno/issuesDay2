const user = {
    name: 'diego',
    age: '27',
    address: {
        street: 'test street',
        number: 176,
        zip: {
            code: '13213123',
            city: 'rio grande'
        }
    },
};

//if commented on the zip property the output as with the document.body(...) will be 'not informed'.


//the optional chaining '?.' is used for cases when trying to access an property
//that does'nt exist, this for dealing with possible objects with null value or that does'nt exist
//and making the process shorter for fixing it.

// document.body.innerText = user.address
//    ? user.address.zip 
//     ? user.address.zip.code
//     : 'Not informed'
//  :'not informed'

//^^ this would be for fixing it

//so for this cases the optional chaining '?.'is used for
//going as:

document.body.innerText = user.address?.zip?.code ?? 'not informed'
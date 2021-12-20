// Log-in Validation
const getElemVal = (id) => document.getElementById(id).value;

export default function validateSignIn(idEmail, idPassword) {
    let error = '';
    let data = {
        email: getElemVal(idEmail),
        password: getElemVal(idPassword),
    };

    if (!data.password || data.password.length < 6) {
        error = `*Password must hace 6 letters*`;
    }

    if (data.email) {
        let reges = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let res = reges.test(data.email);
        if (!res) {
            error += '*Must enter  valid email*';
        }
    } else {
        error += '*Must enter  valid email*';
    }


    return error || data;
}
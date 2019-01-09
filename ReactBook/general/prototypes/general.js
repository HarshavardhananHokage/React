let max = 2;
let min = 1;
function returnsAPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let random = Math.floor((Math.random() * (max - min + 1)) + min);
            if (random === 2) {
                resolve("Success");
            } else {
                reject("failure");
            }
        }, 3000);
    });
}

async function sample() {
    let str;
    let promiseArray = [returnsAPromise(), returnsAPromise(), returnsAPromise()];
    try {
        str = await Promise.all(promiseArray);
        //console.log(str);
    } catch (err) {
        //console.log(err);
        str = err;
    }
    return str;
}


async function consolePrinter() {
    let str = await sample();
    console.log(str);
}

consolePrinter();
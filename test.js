const examplePromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Example of a Promise Chaining");
    }, 1000);
    resolve();
});

const examplePromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Example of a Promise Chaining");
    }, 1000);
    resolve();
});

examplePromise().then((res) => {
    console.log(res);
});

const exampleMiddleware = (req, res, next) => {
    const params = req.params;
    // check
    // authentication
};

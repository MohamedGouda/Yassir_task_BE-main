import * as App from './app';
const port = process.env.PORT;

App.default.listen(port, () => {
    console.log(`server started at port ${port}`);
});



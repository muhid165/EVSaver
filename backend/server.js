const app = require('./app')
const connectDb = require('./data/database');
connectDb();


app.listen(process.env.PORT,() => {
    console.log(`server is running on port ${process.env.PORT}`);
});

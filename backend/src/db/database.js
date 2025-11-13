import mongoose from "mongoose";

const Database = async () => {
    try {
        const DatabaseConnection = await mongoose.connect(process.env.URL);

        console.log(DatabaseConnection.connection.host);
        console.log('Database Connected Successfully !!');

    } catch (err) {
        console.log(`Database Connection Failed !!`, err);
    }
}

export default Database;
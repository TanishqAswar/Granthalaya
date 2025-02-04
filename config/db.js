import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB Database host: ${conn.connection.host}`.bgCyan.white)
    } catch (error) {
        console.log('Error in connecting DB'.bgRed.green)
        console.log(error)
    }
}

export default connectDB;
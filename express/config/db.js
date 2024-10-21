import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DBNAME,
    process.env.USERNAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'postgres',
        port: process.env.PORT,
    }
);

try{
    await sequelize.authenticate();
    console.log("DataBase Terhubung")
}catch(err) {
    console.log("Konesksi Gagal",err)
}

export default sequelize;
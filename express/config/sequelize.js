import sequelize from "./db.js";



const db = {
    sequelize
};

await sequelize.sync();
await sequelize.sync({alter:true})

export default db
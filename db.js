const Sequelize = require("sequelize")
const mysql = require('mysql2/promise');
const dotenv =require("dotenv")
 dotenv.config();

initialize();
async function initialize() {
    const { DBHOST,  DBUSER, DBPASSWORD, DBDB } = process.env;
    const connection = await mysql.createConnection({ host: DBHOST,  user: DBUSER, password: DBPASSWORD });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DBDB}\`;`);
    const sequelize = new Sequelize(
        DBDB,
        DBUSER,
        DBPASSWORD,
        {
            
            host: DBHOST,
            dialect: 'mysql',
            logging: false
        });

    
    db.sequelize = sequelize;

    db.Model = require("./modules/book/book.model")(sequelize)
    db.Model1 = require("./modules/review/review.model")(sequelize)
    
    
    // db.Model.hasMany(db.Model1);
    // db.Model1.belongsTo(db.Model);
    
    db.Model1.hasMany(db.Model);
    db.Model.belongsTo(db.Model1);
    

    await sequelize.sync();
}

module.exports = db = {};

// const sequelize = new Sequelize("book-store", "root", "", {
//     host: "localhost",
//     logging: false,
//     dialect: "mysql"
// });

// const db = {};

// sequelize
//     .authenticate()
//     .then(() => {
        
//         console.log("Connection has been established successfully");

//         // Synchronize the database with the models (create tables if they don't exist)
//         sequelize.sync({force:false})
//             .then(() => {
//                 console.log("Database synchronized");
//             })
//             .catch((error) => {
//                 console.error("Error syncing database:", error);
//             });
//     })
//     .catch((error) => {
//         console.error("Connection failed:", error);
//     });

// db.sequelize = sequelize;
// db.Model = require("./modules/book/book.model")(sequelize)
// db.Model1 = require("./modules/review/review.model")(sequelize)


// // db.Model.hasMany(db.Model1);
// // db.Model1.belongsTo(db.Model);

// db.Model1.hasMany(db.Model);
// db.Model.belongsTo(db.Model1);

// module.exports = db;




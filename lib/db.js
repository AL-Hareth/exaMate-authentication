import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize("defaultdb", "alhareth", "aTou-U76DrnlshlxoBLIQg", {
    dialect: "postgres",
    host: "elvish-beast-13760.8nj.gcp-europe-west1.cockroachlabs.cloud",
    port: 26257,
    database: "defaultdb",
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }    
});

export async function connect() {
    await sequelize.sync();
    try {
        await sequelize.authenticate();
        console.log("connected to the DB");
    } catch (error) {
        console.log(error);
    }
}

export class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
    },
    tokens: {
        type: DataTypes.JSON,
        defaultValue: {
            tanslation: 1000,
            summarization: 5,
            explination: 10,
            note: 10,
            quiz: 5,
            flash_cards: 5
        }
    },
    subscription: { 
        type: DataTypes.STRING, // possible values: "free", "basic", "premium"
        defaultValue: "free"
    },
    password: DataTypes.STRING,
    googleId: DataTypes.STRING,
    salt: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User'
});


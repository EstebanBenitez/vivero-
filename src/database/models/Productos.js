module.exports= (sequelize, DataTypes) => {
    let alias= "productos"
    let cols= {

        id_productos: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            notNull: false,
            primaryKey: true,
            unique: true,
        },
        nombre: {
            type: DataTypes.STRING,
            notNull: false,
       
        },
        imagen: {
            allowNull: false,
			type: DataTypes.STRING,
        },
       
        precio: {
        type: DataTypes.STRING,
        notNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            notNull: false,
            }
    }
    let config = {
        tableName: "productos",
        timestamps: false,
      };
        const Productos= sequelize.define(alias, cols, config)
      
        return Productos
};
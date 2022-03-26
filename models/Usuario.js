module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario',{
        id:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        sobrenome: DataType.STRING,
        setor: DataType.STRING,
        ativo: DataType.INTEGER,
        perfil: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING
    },{
        tableName: 'usuarios',
        timestamps: false
    })

    return Usuario;
};
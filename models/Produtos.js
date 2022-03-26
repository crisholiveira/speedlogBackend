module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto',{
        id:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: DataType.INTEGER,
        nome: DataType.STRING,
        
    }, { tableName: 'produtos',
        timestamps: false
    }
    );
        Produto.associate = (models) => {
            Produto.belongsToMany(models.Requisicao,
                {   as:'requisicao',
                    through: 'produto_requisicao',
                    foreignKey: 'produtos_id',
                    otherKey: 'requisicoes_id',
                    timestamps: false
                }
            )}
            

    return Produto;
};

//não terminei
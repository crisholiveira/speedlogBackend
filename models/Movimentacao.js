module.exports = (sequelize, DataType) => {
    const Movimentacao = sequelize.define('Movimentacao',{
        id:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data_entrada: DataType.DATE, 
        data_saida: DataType.INTEGER,
        qtd_entrada: DataType.INTEGER,
        qtd_saida: DataType.INTEGER,
        qtd_ajuste: DataType.INTEGER,
        tableName: 'movimentacao'
    },{
        tableName: 'movimentacao',
        timestamps: false
        }
    );

    Movimentacao.associate = (models) => {
        Movimentacao.belongsToMany(models.Requisicao,
            {   as:'requisicao',
                through: 'movimentacao_requisicao',
                foreignKey: 'movimentacao_id',
                otherKey: 'requisicao_id',
                timestamps: false
            }
        );
    }


    return Movimentacao;
};

//não terminei






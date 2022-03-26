module.exports = (sequelize, DataType) => {
    const Requisicao = sequelize.define('Requisicao',{
        id: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        qtd_solicitada: DataType.INTEGER,
        qtd_liberada: DataType.INTEGER,
        observacao: DataType.STRING,
        usuarios_id: { type: DataType.INTEGER } //se refere a chave estrangeira
           
    },{
        tableName: 'requisicoes'
    });

    Requisicao.associate = (models) => {
        Requisicao.belongsToMany(models.Movimentacao,
            {   as:'movimentacao',
                through: 'movimentacao_requisicao',
                foreignKey: 'requisicao_id',
                otherKey: 'movimentacao_id',
                timestamps: false
            }
        ),
        Requisicao.belongsToMany(models.Produto,{
            as: 'produto',
            through: 'produto_requisicao',
            foreignKey: 'requisicoes_id',
            otherKey: 'produtos_id',
            timestamps: false
        })

    }

    return Requisicao;
}


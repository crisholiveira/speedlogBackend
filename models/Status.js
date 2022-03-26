module.exports = (sequelize, DataType) => {
    const Status = sequelize.define('status',{
        id:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
         estatus: DataType.STRING,
    },{
        tableName: 'status_requisicao'
    }
    )

    return Status;
};
        
    

//não terminei
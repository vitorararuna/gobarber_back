module.exports ={
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'gobarber',
    define:{
        timestamps: true, //garante as colunas "createdAt" e "updatedAt" em cada tabela do BD
        underscored: true,
        underscoredAll: true,

    },
};

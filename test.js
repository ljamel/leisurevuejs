let sqlConfig = {
    user: 'root',
    password: 'noura1896',
    server: 'localhost',
    database: 'cadito',
    port: 1433,
    options: {
        "encrypt": true,
        "enableArithAbort": true
    }
};

try {

    let pool;
    let result;
    [pool, result] = Promise.all([sqlConfig.connect(sqlConfig), pool.request()
        .query('SELECT * FROM [dbo].[SomeTable]')]);
    console.log(result);
} catch (err) {
    console.error(err);
    throw new Error(err);
}
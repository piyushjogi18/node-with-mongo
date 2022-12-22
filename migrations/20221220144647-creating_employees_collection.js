export const up = async (db, client) => {
    try{
        await db.createCollection('employees');
        console.log('employees collection created');
    }catch(err){
       console.log(err);
    }
};

export const down = async (db, client) => {
    try{
        await db.dropCollection('employees');
        console.log('employees collection droppped');
    }catch(err){
       console.log(err);
    }
};

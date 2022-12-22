export const up = async (db, client) => {
    try{
        await db.createCollection('dept_emp');
        await db.createCollection('dept_manager');
        await db.createCollection('salaries');
        console.log('necessary collection created');
      }catch(err){
        console.log(err);
      }
};

export const down = async (db, client) => {
    try{
        await db.dropCollection('dept_emp');
        await db.dropCollection('dept_manager');
        await db.dropCollection('salaries');
        console.log('necessary collection droppped');
      }catch(err){
        console.log(err);
      }
};

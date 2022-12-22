export const up = async (db, client) => {
  try{
    await db.createCollection('departments');
    console.log('departments collection created');
  }catch(err){
    console.log(err);
  }
};

export const down = async (db, client) => {
    try{
        await db.dropCollection('departments');
        console.log('departments collection droppped');
      }catch(err){
        console.log(err);
      }
};

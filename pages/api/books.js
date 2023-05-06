
import mongodb, { MongoClient } from 'mongodb'
 
 
  async function handler(req,res){

   const client=await MongoClient.connect(
    "mongodb+srv://damijan0034:bernandinac@cluster0.2xrgiha.mongodb.net/")

    //create database
    const db=client.db("books")
    
    if(req.method =='GET'){
       const books=await db.collection("books").find().sort().toArray();
       if(!books){
        return res.status(500).json({ message:"Internal server error"});
       }
       return res.status(200).json({message:books});

    } else if(req.method ==='POST'){
        const{name,description,imgUrl}=req.body;
        const newBook={
            name,
            description,
            imgUrl,
            
        }
        
       const book= await db.collection("books").insertOne(newBook);
        return res.status(201).json({message:"Added",book:newBook});

       
    }
}

export default handler
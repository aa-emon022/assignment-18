import { PrismaClient } from "@prisma/client";


import { NextResponse } from "next/server";


// -------------------------------------------          
//             Insert a data
// -------------------------------------------

export async function POST(){
    BigInt.prototype.toJSON=function(){
        return this.toString
    }
     
    try{
        
        const prisma=new PrismaClient()
        const post_meta=await prisma.post_meta.create({
            data:{
                post: { connect: { id: 7 } },
                key:'NEW KEY',
                content:"new content",
                
            }
        })
        
        return NextResponse.json({status:"success",data:post_meta})
    }
    catch (e){
        return NextResponse.json({status:"fail",data:e.message})
    }
}

// -------------------------------------------          
//             Read all a data
// -------------------------------------------

export async function GET(){
    BigInt.prototype.toJSON=function(){
        return this.toString
    }
   
    try{

   const prisma =new PrismaClient();
   const postCategory=await prisma.post_meta.findMany({
    include:{post:true},
   //include:{category:true},
   })

        return NextResponse.json({status:"pass",data:postCategory})
    }
catch(e){
    return NextResponse.json({status:"fail",data:e})
}

}

// -------------------------------------------          
//            update all a data
// -------------------------------------------

export async function PUT(){
    BigInt.prototype.toJSON=function(){
        return this.toString
    }
     
    try{
        
        const prisma=new PrismaClient()
        const post_meta=await prisma.post_meta.create({
            where:{id:1},
            data:{
                post: { connect: { id: 7 } },
                key:'update NEW KEY',
                content:"new content",
                
            }
        })
        
        return NextResponse.json({status:"success",data:post_meta})
    }
    catch (e){
        return NextResponse.json({status:"fail",data:e.message})
    }
}

 // -------------------------------------------          
//             Delete all a data
// -------------------------------------------


export async function DELETE(){
    try{
        const prisma =new PrismaClient()
    const comment=await prisma.post_meta.delete({
        where:{id:1},
       
    })
        return NextResponse.json({status:"success",data:comment})
    }
    catch(e){
        return NextResponse.json({status:"fail",data:e})
    }
}

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// -------------------------------------------          
//             Insert a data
// -------------------------------------------


export async function POST(){

    BigInt.prototype.toJSON = function () {
        return this.toString;
      };
      try {
        const prisma = new PrismaClient();
        const commentInsert = await prisma.post_comment.create({
          data: {
            post: { connect: { id: 6 } },
            title: "New Post Title",
            published: 2,
            updatedAt: new Date(),
            publishedAt: new Date(),
            content: "Post content",
           
            
            },
        });
        return NextResponse.json({ status: "pass", data: commentInsert });
      } catch (e) {
        return NextResponse.json({ status: "fail", data: e.message });
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
   const postCategory=await prisma.post_comment.findMany({
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
    try{
        const prisma =new PrismaClient()
    const comment=await prisma.post_comment.update({
        where:{id:6},
        data:{
            post: { connect: { id: 6 } },
            title: "update New Post Title",
            published: 2,
            updatedAt: new Date(),
            publishedAt: new Date(),
            content: "Post content",
        }
    })
        return NextResponse.json({status:"success",data:comment})
    }
    catch(e){
        return NextResponse.json({status:"fail",data:e})
    }
}

 // -------------------------------------------          
//             Delete all a data
// -------------------------------------------

export async function DELETE(){
    try{
        const prisma =new PrismaClient()
    const comment=await prisma.post_comment.delete({
        where:{id:6},
       
    })
        return NextResponse.json({status:"success",data:comment})
    }
    catch(e){
        return NextResponse.json({status:"fail",data:e})
    }
}

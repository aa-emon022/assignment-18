
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// -------------------------------------------          
//            Insert a data
// -------------------------------------------

export async function POST(){
    BigInt.prototype.toJSON=function(){
        return this.toString
    }
try{
    const prisma=new PrismaClient()
    const tagInsert=await prisma.tag.create({
        data: {
            
            title: "New Post Title",
            metaTitle: "Meta Title",
            slug: "new-post-slug",
            content: "Post content",
                
            
          },
    })
    return NextResponse.json({status:"pass",data:tagInsert})
}
catch(e){
    return NextResponse.json({status:"fail",data: e.message })
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
   const tagGets=await prisma.tag.findMany({
    
   })

        return NextResponse.json({status:"pass",data:tagGets})
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
     
     const tagUpdate= await prisma.tag.update({
         where: { id:1},
         data:{
            title: "update New Post Title",
            metaTitle: "Meta Title",
            slug: "new-post-slug",
            content: "Post content",
            
         }
     })
     return NextResponse.json({status:"pass",data:tagUpdate})
    }
    catch(e){
     return NextResponse.json({status:"fail"})
    }
 
 }


  // -------------------------------------------          
//             Delete all a data
// -------------------------------------------
export async function DELETE(){
    BigInt.prototype.toJSON=function(){
     return this.toString
    }
 
    try{
     const prisma=new PrismaClient()
     
     const tagDelete= await prisma.tag.delete({
         where: { id:1},
     })
     return NextResponse.json({status:"pass",data:tagDelete})
    }
    catch(e){
     return NextResponse.json({status:"fail"})
    }
 
 }
 
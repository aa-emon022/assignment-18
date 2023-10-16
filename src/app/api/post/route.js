
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// -------------------------------------------          
//            Insert a data
// -------------------------------------------

export async function POST() {
  BigInt.prototype.toJSON = function () {
    return this.toString;
  };
  try {
    const prisma = new PrismaClient();
    const postInsert = await prisma.post.create({
      data: {
        title: "2New Post Title",
        metaTitle: "Meta Title",
        slug: "new-post-slug",
        summary: "Summary text",
        published: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),
        content: "Post content",
        user: { connect: { id: 1 } },
        post_comment: {
          create: {
            title: "2New Post Title",
            published: 1,
            updatedAt: new Date(),
            publishedAt: new Date(),
            content: "Post content",
            //authorId: 1,
          },
        },
        post_meta: {
          create: {
            key: "NEW KEY",
            content: "new content",
          },
        },
      },
    });
    return NextResponse.json({ status: "pass", data: postInsert });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}

// -------------------------------------------          
//             Read all a data
// -------------------------------------------

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString;
  };

  try {
    const prisma = new PrismaClient();
    const userGets = await prisma.post.findMany({
      include: { post_comment: true, post_meta: true },
    });

    return NextResponse.json({ status: "pass", data: userGets });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
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
     
     const userUpdate= await prisma.post.update({
          where: { id: 1 },
         data:{
            title: "update New Post Title",
            metaTitle: "Meta Title",
            slug: "new-post-slug",
            summary: "Summary text",
            published: 1, 
            createdAt: new Date(), 
            updatedAt: new Date(), 
            publishedAt: new Date(), 
            content: "Post content",
            
           
            
         }
     })
     return NextResponse.json({status:"pass",data:userUpdate})
    }
    catch(e){
     return NextResponse.json({status:"fail",data:e.message})
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
     
     const userDelete= await prisma.post.delete({
         where: { id:1},
     })
     return NextResponse.json({status:"pass",data:userDelete})
    }
    catch(e){
     return NextResponse.json({status:"fail",data:e.message})
    }
 
 }
 
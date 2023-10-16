import { PrismaClient } from "@prisma/client";


import { NextResponse } from "next/server";
// -------------------------------------------          
//             Insert a data
// -------------------------------------------
export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  try {
    const prisma = new PrismaClient();

    let users = await prisma.user.create({
      data: {
        firstname: "John3",
        middleName: "Doe",
        lastName: "Smith",
        mobile: "1234567890",
        email: "john@example.com",
        passwordHash: "hashed_password",
        registered: new Date(), 
        lastLogin: new Date(), 
        intro: "Intro text",
        profile: "Profile text",
        post: {
          create: {
           
            title: "New Post Title",
            metaTitle: "Meta Title",
            slug: "new-post-slug",
            summary: "Summary text",
            published: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            publishedAt: new Date(),
            content: "Post content",
            //post_comment:"new"
          },
        },
      },
    });
    return NextResponse.json({ status: "success", data: users });
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
   const userGets=await prisma.user.findMany({
    include:{post:true},
   })

        return NextResponse.json({status:"pass",data:userGets})
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
     
     const userUpdate= await prisma.user.update({
         where: { id:3},
         data:{
        firstname: "John2",
        middleName: "Doe",
        lastName: "Smith",
        mobile: "1234567890",
        email: "john@example.com",
        passwordHash: "hashed_password",
        registered: new Date(), 
        lastLogin: new Date(), 
        intro: "Intro text",
        profile: "Profile text",
         }
     })
     return NextResponse.json({status:"pass",data:userUpdate})
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
    
    const userDelete= await prisma.user.delete({
        where: { id:3},
    })
    return NextResponse.json({status:"pass",data:userDelete})
   }
   catch(e){
    return NextResponse.json({status:"fail"})
   }

}


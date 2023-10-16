import { PrismaClient } from "@prisma/client";


import { NextResponse } from "next/server";

// -------------------------------------------          
//             Insert a data
// -------------------------------------------

export async function POST() {
  BigInt.prototype.toJSON = function () {
    return this.toString;
  };

  try {
    const prisma = new PrismaClient();
    const post_category = await prisma.post_category.create({
      data: {
        post: { connect: { id: 1 } },
        category: { connect: { id: 1 } },
      },
    });

    return NextResponse.json({ status: "success", data: post_category });
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
    const postCategory = await prisma.post_category.findMany({
      include: { post: true, category: true },
      //include:{category:true},
    });

    return NextResponse.json({ status: "pass", data: postCategory });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

// -------------------------------------------          
//            update all a data
// -------------------------------------------


export async function PUT() {
  BigInt.prototype.toJSON = function () {
    return this.toString;
  };

  try {
    const prisma = new PrismaClient();
    const postCategory = await prisma.post_category.update({
      where: { id: 1 },
      data: {
        post: {
          update: {
            title: "update post categories New Post Title",
            metaTitle: " post categories Meta Title",
            slug: "new-post-slug",
            summary: " post categories Summary text",
            published: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
            publishedAt: new Date(),
            content: " post categories Post content",
          },
        },
        category: {
          update: {
            title: "post categories  New category insert",
            metaTitle: " post categories New meta",
            slug: "new",
            content: " New  text",
          },
        },
      },
    });

    return NextResponse.json({ status: "pass", data: postCategory });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}


 // -------------------------------------------          
//             Delete all a data
// -------------------------------------------


export async function DELETE() {
  try {
    const prisma = new PrismaClient();
    const postCategory = await prisma.post_category.deleteMany({
      where: {
        post: { id: 1 },
        category: { id: 1 },
      },
    });

    return NextResponse.json({ status: "pass", data: postCategory });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}




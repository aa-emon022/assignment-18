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
    const postTag = await prisma.post_tag.create({
      data: {
        post: { connect: { id: 1 } },
        tag: { connect: { id: 2 } },
      },
    });
    return NextResponse.json({ status: "success", data: postTag });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}


// -------------------------------------------          
//             Read all a data
// -------------------------------------------


export async function GET() {
  try {
    const prisma = new PrismaClient();
    const postTag = await prisma.post_tag.findMany({
      include: { post: true, tag: true },
    });
    return NextResponse.json({ status: "fail", data: postTag });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}



// -------------------------------------------          
//            update all a data
// -------------------------------------------



export async function PUT() {
  try {
    const prisma = new PrismaClient();
    const postTag = await prisma.post_tag.update({
      include: { post: true, tag: true },
      where: { id: 1 },
      data: {
        post: {
          update: {
            title: "update post tag New Post Title",
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

        tag: {
          update: {
            title: "New Post tag Title",
            metaTitle: "Meta Title",
            slug: "new-post-slug",

            content: "Post content",
          },
        },
      },
    });
    return NextResponse.json({ status: "success", data: postTag });
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
    const postCategory = await prisma.post_tag.deleteMany({
      where: {
        post: { id: 1 },
        tag: { id: 1 },
      },
    });

    return NextResponse.json({ status: "pass", data: postCategory });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}

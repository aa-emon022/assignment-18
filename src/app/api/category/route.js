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
    const categoryInsert = await prisma.category.create({
      data: {
        title: "category insert",
        metaTitle: "meta",
        slug: "new",
        content: "text",
      },
    });

    return NextResponse.json({ status: "success", data: categoryInsert });
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
    const categoryGet = await prisma.category.findMany();
    return NextResponse.json({ status: "Success", data: categoryGet });
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
    const categoryGet = await prisma.category.update({
      where: { id: 1 },
      data: {
        title: "New category insert",
        metaTitle: " New meta",
        slug: "new",
        content: " New  text",
      },
    });
    return NextResponse.json({ status: "fail", data: categoryGet });
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
    const categoryGet = await prisma.category.delete({
      where: { id: 1 },
    });
    return NextResponse.json({ status: "success", data: categoryGet });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.message });
  }
}

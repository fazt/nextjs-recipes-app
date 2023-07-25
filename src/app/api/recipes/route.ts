import { auth } from "@clerk/nextjs";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { userId } = auth();

  console.log(body);

  if (!userId) return NextResponse.json({ success: false });

  const newRecipe = await prisma.recipe.create({
    data: {
      ...body,
      userId,
    },
  });

  return NextResponse.json(newRecipe, {
    status: 201,
  });
}

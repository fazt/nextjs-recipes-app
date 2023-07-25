import { auth } from "@clerk/nextjs";
import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function POST() {
  const { userId } = auth();
  console.log(userId);
  await prisma.textGenerations.upsert({
    where: {
      user: userId
    },
    update: {
      n: {
        increment: 1,
      }
    },
    create: {
      user: userId,
      n: 1,
      text: "Hello World!",
    }
  });

  return NextResponse.json({ success: true });
}

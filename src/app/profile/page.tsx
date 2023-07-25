import { auth } from "@clerk/nextjs";
import { prisma } from "@/libs/prisma";

async function loadUserData() {
  const user = auth();
  const data = await prisma.textGenerations.findFirst({
    where: {
      user: user.userId,
    },
  });
  return data;
}

async function ProfilePage() {
  const user = await loadUserData();
  console.log(user);

  return (
    <div>
      <h1>profile</h1>
    </div>
  );
}

export default ProfilePage;

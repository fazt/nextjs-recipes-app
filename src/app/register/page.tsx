import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
      <SignUp />
    </div>
  );
}

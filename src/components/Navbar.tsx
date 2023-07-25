"use client";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-slate-200">
      <div className="container mx-auto flex justify-between py-7">
        <Link
          href={isSignedIn ? "/dashboard" : "/"}
          className="text-2xl font-extrabold"
        >
          NextRecipe
        </Link>

        <ul className="flex gap-x-2">
          {isSignedIn ? (
            <>
              <li>
                <Link href="/recipes">My Recipes</Link>
              </li>
              <UserButton />
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

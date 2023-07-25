"use client"
import { UserButton } from "@clerk/nextjs";
import axios from 'axios'

function DashboardPage() {
  return (
    <div>
      <h1>dashboard page</h1>
      <UserButton afterSignOutUrl="/" />

      <button onClick={async () => {
        const res = await axios.post("/api/generate");
        console.log(res)
      }}>
        Generate
      </button>
    </div>
  );
}

export default DashboardPage;

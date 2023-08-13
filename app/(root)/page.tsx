import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <main>
      <h1 className="text-xl">Admin Dashboard</h1>
      <p>This is a protected route</p>
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}

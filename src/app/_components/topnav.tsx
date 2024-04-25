import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Topnav() {
    return (
        <nav className="flex items-center justify-between border-b w-full p-4 text-xs 
        font-semibold">
          <div>Gallery</div>
    
          <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
          </div>
        </nav>
      );
}

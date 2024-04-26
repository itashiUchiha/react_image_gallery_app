
"use client";
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "@uploadthing/react";
import { useRouter } from "next/navigation";

export default function Topnav() {
    const router= useRouter(); 
    return (
        <nav className="flex items-center justify-between border-b w-full p-4 text-xs 
        font-semibold">
          <div>Gallery</div>
          <div className="flex  flex-rowgap-4">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton endpoint="imageUploader" 
                onClientUploadComplete ={() => {
                    router.refresh();

                }}/>
                <UserButton/>
            </SignedIn>
          </div>
        </nav>
      );
}

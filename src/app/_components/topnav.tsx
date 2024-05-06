import {  SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simpleUploadButton";

export default function Topnav() {
    return (
        <nav className="flex items-center justify-between border-b w-full p-4 text-xs 
        font-semibold">
          <div>Gallery</div>
          <div className="flex  flex-rowgap-4 gap-4 items-center cursor-pointer">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <SimpleUploadButton/>
                <UserButton/>
            </SignedIn>
          </div>
        </nav>
      );
}

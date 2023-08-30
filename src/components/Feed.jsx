import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Feed() {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  return (
    <main
      className={`grid ${
        session
          ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
          : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"
      }  `}
    >
      <section className="md:col-span-2">
        {/* stories */}
        <Stories />

        {/* posts */}
        <Posts />
      </section>
      <section className="hidden  md:inline-flex md:col-span-1">
        <div className="fixed w-[380px]">
          {/* mini-profile */}
          <MiniProfile />

          {/* suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}

import Stories from "./Stories";
import Posts from "./Posts";

export default function Feed() {
  return (
    <main>
      <section>
        {/* stories */}
        <Stories />

        {/* posts */}
        <Posts />
      </section>
      <section>
        {/* mini-profile */}

        {/* suggestions */}
      </section>
    </main>
  );
}

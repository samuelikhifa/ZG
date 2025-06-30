import GetImage from "@/components/GetImage";
import Loading from "@/components/Loading";
import { Suspense } from "react";

const Home = ({ searchParams }: { searchParams?: { query: string } }) => {
  const query = searchParams?.query || "";
  console.log(query);

  return (
    <main>
      <Suspense key={query} fallback={<Loading />}>
        <GetImage query={query} />
      </Suspense>
    </main>
  );
};

export default Home;

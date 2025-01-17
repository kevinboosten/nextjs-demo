import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Home({ title, ducks }) {
  return (
    <>
      <Head>
        <title>Rubber Duckies</title>
        <meta name="description" content="Duckify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <nav className="flex items-center">
          <h1 className="text-4xl font-bold text-center my-8 text-red-600">
            {title}
          </h1>
          <ul className="flex gap-4 font-bold text-blue-600 underline ml-auto">
            <li>
              <Link href="/news/duckies">
                <a>Duck news</a>
              </Link>
            </li>
            <li>
              <Link href="/news/rubber-duckies">
                <a>Rubber Duck news</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="grid grid-cols-4 gap-4">
          {ducks &&
            ducks.gifs.map((duck, index) => (
              // https://nextjs.org/docs/api-reference/next/image
              // https://nextjs.org/docs/basic-features/image-optimization
              <Image
                key={index}
                src={`https://random-d.uk/api/${duck}`}
                alt="Duckies"
                width={350}
                height={350}
              />
            ))}
        </div>
      </main>
    </>
  );
}
export default Home;

// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export const getServerSideProps = async () => {
  const res = await fetch("https://random-d.uk/api/v2/list");
  const json = await res.json();

  return {
    props: {
      title: "Rubber Duckies",
      ducks: json
    }
  };
};

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="py-12 dark:bg-gray-900">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold dark:text-white">
            The Transformative Power of
            <span className="text-indigo-800"> Artificial Intelligence</span>
          </h1>
          <p className="text-gray-500 dark:text-white">
            Artificial Intelligence (AI) has rapidly evolved from a futuristic
            concept to a vital component of modern life. From healthcare to
            entertainment, AI has revolutionized how we work, interact, and
            innovate. But what makes AI such a game-changer? In this blog, we'll
            explore the fascinating world of AI, its applications, and its
            potential to shape the future.
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 mb-8">
          <div className="relative md:w-5/12">
            <img
              className="rounded-2xl"
              src="/images/Ani.jpg"
            />
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-red-600 mb-3 font-bold text-center uppercase lg:text-xl">
                Artificial Narrow Intelligence (ANI)
              </h1>
              <Link href="/blog/blog-ai">
                <button className="w-full px-6 py-3 text-xs text-white transition duration-300 ease-in-out transform bg-indigo-800 border-indigo-400 border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">
                  Detailed Blog
                </button>
              </Link>
            </div>
          </div>

          <div className="relative md:w-5/12">
            <img
              className="rounded-2xl"
              src="/images/Agi.png"
            />
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-red-700 mb-3 font-bold text-center uppercase lg:text-xl">
                Artificial General Intelligence (AGI)
              </h1>
              <Link href="/blog/blog-agi">
                <button className="w-full px-4 py-3 text-xs text-white transition duration-300 ease-in-out transform bg-indigo-800 border-indigo-400 border-2 rounded-full lg:text-md focus:outline-none hover:scale-110 font-medium">
                  Detailed Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

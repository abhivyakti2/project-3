import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
export const metadata:Metadata={
  title:"NextJS Concepts",
  description:"Features"
}
async function ServerData(){
  //simulate serverside fetching
  const data =await new Promise(resolve =>{
    setTimeout(()=>resolve({message:'Server side data loaded!'}))
  })
  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-44">
    <h3> Server Component</h3>
    <p>{(data as any).message}</p>
    <small className="text-blue-600">This renders the server</small>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Next JS concepts
      </h1>
      <div className="grid md:grid-cols2 gap-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold"> Server Components</h2>
          <ServerData/>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">App Router & Routing</h2>
           <div className="space-y-2">
            <Link href="/blog/1" className="block bg-green-100 p-3 rounded hover:bg-green-200 transition-colors" >Blog</Link>
            <Link href="/about" className="block bg-green-100 p-3 rounded hover:bg-purple-200 transition-colors" >About</Link>
             <Link href="/api/hello" className="block bg-orange-100 p-3 rounded hover:bg-green-200 transition-colors" >API</Link>

           </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Image Optimized</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-sm mb-2">Next JS automatic Image Optimization</p>
            <div className="bg-gray-300 h-32 rounded-flex items-center justify-center">
              <span className="text-gray-600"> Image Component</span>
            </div>
            <code>{'<Image src="/pic.jpg" alt="..." width={300} height={200}/>'}</code>
          </div>
        </section>
<section className="space-y-4">
  <h2 className="text-2xl font-semibold">Client components</h2>
  <Link href="/interactive" className="block bg-red-100 p-3 rounded hover:bg-red-200 transition-colors">
  Interactive Page</Link>
</section>

      </div>
<section className="mt-12">
  <h2 className="text-2xl font-semibold mb-4">Features Demonstrated</h2>
  <div className="grid"></div>
</section>

    </main>
  );
}

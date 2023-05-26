import Image from 'next/image'
import imageContoh from "@/public/download20210802075712.png"

async function getPosts(){
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    next:{
      revalidate: 10,
    },
    cache: 'no-cache'
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const post = await getPosts();
  console.log(post);
  return (
    <>
    {/* <section id='hero' className='bg-start px-10'></section> */}
    <section id='hero' className='bg-startnews px-10'>
      <div className='container h-screen'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <h1 className='text-2xl font-bold'>test</h1>
            <div className='card'>
              <h1>helo</h1>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <Image src={imageContoh} width={300} height={300} alt="test" quality={50}></Image>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <h1>test3</h1>
          </div>
        </div>
      </div>
    </section>
      <h1>home</h1>
      <Image src={imageContoh} width={300} height={300} alt="test" quality={50}></Image>
      <Image src="https://areatopik.com/wp-content/uploads/2022/10/Kobo-Nangis.jpg" width={300} height={300} alt="test" quality={50}></Image>

    <section id='post' className='post bg-secondary'>
      <div className='container h-screen'>
        <div className='flex flex-wrap'>
          {post.map((post:any) =>(
            <div className='w-full lg:w-1/3' key={post.userId}>
              <div className='card'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div> 
          ))}
        </div> 
      </div>
    </section>
    </> 
  )
}


import Link from 'next/link'

export default async function Home() {
  console.log('homepage');
  try {
    let res = await fetch("/api/posts").then(
      response => {
        //handle response            
        console.log(response);
      }
    );
    // console.log('Post Response', res);
  } catch (e) {
      console.error(e);
  }
  // let data = await res.json();
  // console.log(data);

  return (
    
     <div>
       <Link href="/contact" className='text-2xl font-bold absolute right-32 border-2 px-5 py-3 bg-info bg-sky-400 top-8 butt text-white rounded-lg '>Create Post</Link>
     </div>
    
  );
}

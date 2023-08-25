import Hero from "../sections/Hero";
import type { THero } from '../sections/Hero';

export default function Home({ hero }) {
  return (
    <>
      <div>
        <Hero data={hero} />
      </div>
    </>
  );
}

// Use this function on pages to fetch data from server at build time and pass on to
// the Page component
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
export const getStaticProps: GetStaticProps<{ hero: THero[] }> = async () => {
  //const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json();
  return { 
    props: {
      hero: data
    }
  }
} 

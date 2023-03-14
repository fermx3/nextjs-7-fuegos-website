import Head from 'next/head';
import Hero from '@/components/Hero/Hero.component';
import InstagramFeed from '@/components/InstagramFeed/InstagramFeed.component';
import MenuSection from '@/components/menu-section/MenuSection.component';
import GoogleReviewsSection from '@/components/GoogleReviewsSection/GoogleReviewsSection.component';
import { getGoogleReviews, getIgPics } from '@/lib/api-utils';

export default function Home({ googleReviews, igPics }) {
  console.log(igPics);
  return (
    <>
      <Head>
        <title>7 fuegos</title>
        <meta name='description' content='7 fuegos Restaurante en Tulum' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <InstagramFeed igPics={igPics} />
        <MenuSection />
        <GoogleReviewsSection googleReviews={googleReviews} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const googleReviews = await getGoogleReviews();
  const googleReviewsFiltered = googleReviews.filter(
    (review) => review.rating >= 4
  );

  const igPics = await getIgPics();

  return {
    props: {
      googleReviews: googleReviewsFiltered,
      igPics,
    },
  };
};

import BookDetails from '@/components/BookDetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
  const res = await fetch('https://openlibrary.org/works/OL1730832W.json');
  const data = await res.json();
  return { props: { book: data } };
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer: YI-LIEN HSIEH" />

      <p>
        Hello! My name is YI-LIEN HSIEH, and I am currently studying at Seneca College.
        I have a strong interest in British and French royal history, especially books
        that explore the lives of important historical figures from different perspectives.
        I chose "Marie Antoinette: The Journey" by Antonia Fraser because this book presents
        the life of Marie Antoinette in a more fair and human way, rather than judging her
        only by common stereotypes. Fraser's careful research and engaging writing style
        help bring Marie Antoinette's story to life and show her as a complex person behind
        the many myths and legends.
      </p>

      <BookDetails book={props.book} workId="OL1730832W" showFavouriteBtn={false} />
    </>
  );
}
import Head from 'next/head';

type HeadTitleProps = {
  title: string;
};

const HeadTitle = ({ title }: HeadTitleProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default HeadTitle;

const PreviewPage = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-3xl">Working On!</h1>
        <p>
          I am actually working on this site, please stay on to check updates!
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 underline underline-offset-4 "
          href="mailto:pcorderoe@gmail.com;patricio@espejozen.cl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me
        </a>
      </footer>
    </div>
  );
};

export default PreviewPage;

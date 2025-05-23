import LandingPage from "./landing/page";
import PreviewPage from "./preview/page";


export default function Home() {
  const previewMode = parseInt(process.env.NEXT_PUBLIC_PREVIEW || '0');
  console.log("Preview mode:", previewMode);
  return (
    previewMode === 1 ? <PreviewPage /> : <LandingPage />
  );
}

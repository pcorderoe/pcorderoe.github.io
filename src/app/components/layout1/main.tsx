import Link from "next/link";

const MainPage = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-nav">
          <ul className="main-nav-left">
            <li>
              <Link href={`https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_ID}`} target="_blank" rel="noopener noreferrer">
                <i className="pi pi-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href={`https://www.github.com/${process.env.NEXT_PUBLIC_GITHUB_ID}`} target="_blank" rel="noopener noreferrer">
                <i className="pi pi-github"></i>
              </Link>
            </li>
          </ul>
          <ul className="main-nav-right">
            <li>
              <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} target="_blank" rel="noopener noreferrer">
                <i className="pi pi-envelope"></i>
                <span>Keep in touch</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MainPage;
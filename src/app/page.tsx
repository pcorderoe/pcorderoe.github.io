import WorkingOn from "./working-on";


export default function Home() {
  return (
    <>
      { 
        process.env.NEXT_PUBLIC_ENV === 'workingon' &&
        (<WorkingOn />)
      }
    </>
  )
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'
import Card from '../components/Card'
import { Exhibition } from '../interfaces'
import ExhibitionFetching from '../services/exhibitions-fetching'

interface HomeProps {
  exhibitions: Exhibition[]
}

const Home: NextPage<HomeProps> = ({ exhibitions }) => {
  const [filtererdExhibitions, setFilteredExhibitions] = useState<Exhibition[]>(exhibitions)
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = exhibitions.filter((exhibition) => exhibition.title.toLowerCase().match(searchTerm.toLowerCase()))
      setFilteredExhibitions(filtered)
    }, 750)

    return () => clearTimeout(timeoutId)
  }, [exhibitions, searchTerm])

  const onChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => setSearchTerm(value)

  return (
    <div className='d-flex flex-column vh-100'>
      <Head>
        <title>Art Exhibition Browser</title>
        <meta name="description" content="Browser for art exhibitions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-light bg-light border-bottom">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Art Exhibition Browser</span>
          <form className="d-flex">
            <input value={searchTerm} onChange={onChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </nav>

      <main className='flex-fill pt-3'>
        <div className='container'>
          
          <div className='row row-cols-1 row-cols-md-2'>
            {
              filtererdExhibitions.length
              ? filtererdExhibitions.map((exhibition) => (
                  <div key={exhibition._id} className="col mb-3">
                    <Card exhibition={exhibition} />
                  </div>
                ))
              : <div className='col col-md-12 pt-5 text-center display-4 text-warning'>No exhibition found... 😕</div>
            }
          </div>
        </div>
      </main>

      <footer className='px-3 py-2 bg-dark bg-gradient d-flex'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className='text-light'
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <span className='ms-auto text-muted small'><small>&copy; Mathieu Clément 2022</small></span>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const exhibitionsFetching = new ExhibitionFetching()
  const exhibitions = await exhibitionsFetching.getExhibitions()
  // Pass data to the page via props
  return { props: { exhibitions } }
}

export default Home

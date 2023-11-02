import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useGalleries } from '../api/galleriesHelper';
import { fetchGalleries } from '../api/galleriesHelper';

export default function Home() {
  const [page, setPage] = useState(1); // Start with page 1 (or any other initial page)

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery({
      queryKey: ['galleries', page],
      queryFn: () => fetchGalleries(page),
    });

    console.log(data)

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const renderGallery =data?.data.map((item) => {

      
     return(
      <div className="flex w-1/3 flex-wrap pb-6 " key={item.id}>
      <div className="w-full p-1  md:p-2">
        <img
          alt="gallery"
          className="block h-full w-full rounded-t-lg object-cover object-center"
          src={item.main_image} />
          <p className='text-center text-black bg-slate-200 rounded-b-lg py-1'>{item.name}</p>
      </div>
    </div>
     )


  });

  return (
    <div>
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
      {isFetching ? <span> Loading...</span> : null}{' '}
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        renderGallery
      )}
        </div>
      </div>


        <div className="flex flex-col justify-center items-center pt-6">
            <div className=''>Current Page: {page}</div>
            <br />
             <div className="items-center">
             <button
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
                onClick={() => {
                  setPage(page - 1);
                }}
                disabled={page === 1}
                >
                Previous Page
              </button>{' '}
              <button
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'
                onClick={() => {
                  setPage(page + 1);
                }}
                // Disable the Next Page button until we know a next page is available
              
                disabled={data?.to === data?.total}>
                Next Page
          </button>
             </div>
        </div>


    </div>
  );
}

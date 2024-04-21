import React, { useState } from 'react'
import { useGif } from '../Hooks/useGif';
import { Spinner } from './Spinner';

export const Tags = () => {
  
  const [tag, setTag] = useState('');
  const {gif, loading , fetchData} = useGif(tag);

  return (
    <div className='bg-blue-400 w-1/2 mt-5 rounded-lg border border-black flex flex-col items-center gap-5 '>
      <h1 className='font-bold text-[20px] underline uppercase'>Random {tag} GIF</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width="500" alt='gif'></img>)
      }
      <input
        placeholder='Type here to see'
        className='bg-white w-10/12 rounded-lg text-center py-2 font-bold'
        value={tag}
        onChange={(event) => setTag(event.target.value)}
      />

      <button className='bg-yellow-300 w-10/12 mb-[15px] rounded-lg text-center py-2 font-bold'
        onClick={() => fetchData(tag)}>
        GENERATE
      </button>
    </div>
  )
}
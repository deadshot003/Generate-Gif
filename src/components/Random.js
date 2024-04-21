
import { Spinner } from './Spinner';
import { useGif } from '../Hooks/useGif';

export const Random = () => {

    const {gif, loading , fetchData} = useGif();

  return (
    <div className='bg-green-400 w-1/2 mt-5 rounded-lg border border-black flex flex-col items-center gap-5 '>
       <h1 className='font-bold text-[20px] underline uppercase'>A Random GIF</h1>
       {
        loading ? (<Spinner/>) : (<img src={gif} width="500" alt='gif'></img>)
       }
       
       <button className='bg-yellow-300 w-10/12 mt-[20px] mb-[15px] rounded-lg text-center py-2 font-bold'
       onClick={() => fetchData()}>
        GENERATE
       </button>
    </div>
  )
}
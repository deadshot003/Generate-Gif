
import { Random } from './components/Random';
import { Tags } from './components/Tags';

function App() {
  return (
    <div className=' h-full w-full flex flex-col items-center background '>
      <h1 className='bg-white w-11/12 mt-[35px] rounded-lg text-center py-2 font-bold text-2xl'>Random Gif</h1>
      <div className='flex flex-col w-full h-full items-center'>
        <Random/>
        <Tags/>
      </div>
    </div>
  );
}

export default App;

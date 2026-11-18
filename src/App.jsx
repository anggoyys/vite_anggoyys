import Counter from './components/Counter'
import ThemeSwap from './components/ThemeSwap'

const App = () => {
  return (
    <div>
      <h1 className='bg-blue-400'>Rebahin.Id</h1>
      <button className='btn btn-primary btn-l'>Pesan Sekarang</button>
      <Counter/>
    <div className=''>
      <ThemeSwap/>
    </div>
    </div>


  )
}

export default App
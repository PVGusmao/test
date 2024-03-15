import { useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox'
import { pageList } from './utils/pageList'

function App() {
  const [allChecked, setAllChecked] = useState(false);

  return (
      <main className='main'>
        <section className='all-pages'>
          <Checkbox
            name='All pages'
            allChecked={allChecked}
            setAllChecked={setAllChecked}
          />
        </section>

        <div className='separator' />

        <section className='page-list'>
          {
            pageList.map((element, index) => (
              <Checkbox
                key={index}
                name={element.name}
                allChecked={allChecked}
              />
            ))
          }          
        </section>

        <div className='separator' />

        <section className='button-wrapper'>
          <button className="button">Done</button>
        </section>

      </main>
  )
}

export default App

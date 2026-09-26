import { useState } from 'react'
import faq from '../api/faq.json'
import FAQ from './FAQ'

const Accordion = () => {
  const [data, setData] = useState(faq)
  const [openId, setOpenId] = useState(null)

  const handleShowClose = (id) => {
    // const currentlyOpenData = data.find((curElem) => curElem.id === id)
    // openId === currentlyOpenData.id ? setOpenId(null) : setOpenId(currentlyOpenData.id)

    openId === id ? setOpenId(null) : setOpenId(id)
  }

  return (
    <div className=" text-white bg-neutral-900 p-4 flex flex-col items-center">
      <div className="min-h-screen max-w-2xl w-full flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Accordion</h1>
        <div className="flex flex-col justify-center items-center w-full">
          <ul className="w-full space-y-4">
            {data.map((curElem) => (
              <FAQ
                key={curElem.id}
                curData={curElem}
                openId={openId}
                setOpenId={setOpenId}
                handleShowClose={handleShowClose}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Accordion

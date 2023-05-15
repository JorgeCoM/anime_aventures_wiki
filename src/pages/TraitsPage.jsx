import { TraitsData } from '../data/TraitsData'
// import { useData } from '../hooks'

// const [dataSections] = useData(TraitsData)

// console.log(dataSections)

const TraitsDataTitle = TraitsData.map(n => n.sectionTitle)
const TraitsDataTitle2 = TraitsData.map(n => n.sectionTitle2)
const TraitsDataContent = TraitsData.map(n => n.sectionContent)
const TraitsDataImg = TraitsData.map(n => n.sectionImg)
const [img] = TraitsDataImg
const TraitsDataIcons = TraitsData.map(n => n.sectionIcons)
const [[icon1, icon2]] = TraitsDataIcons
const [texts, texts2] = TraitsData.map(n => n.sectionContents)


// console.log(texts2.text1)

export const TraitsPage = () => {
  return (
    <div className="text-white">
      <div className='flex flex-col'>
        <div className='p-10'>
          <div className='mb-10'>
            <div>
              <h2 className='font-bold text-3xl mb-2'>
                {TraitsDataTitle}
              </h2>
              <img className='float-right' src={img} alt={TraitsDataTitle} />
            </div>
            {TraitsDataContent}
            <img className=' inline' src={icon1.img} alt={icon1.name} />
            <p className=' inline font-bold'>{icon1.name}</p>
            <p className=' inline pl-3'>or</p>
            <img className=' inline' src={icon2.img} alt={icon2.name} />
            <p className=' inline font-bold'>{icon2.name}</p>
          </div>
          <div>
            <h2 className='font-bold text-3xl mb-2'>
              {TraitsDataTitle2}
            </h2>
            <div>
              {texts2.text1}
              <img className=' inline' src={icon1.img} alt={icon1.name} />
            <p className=' inline font-bold'>{icon1.name}</p>
            <img className=' inline' src={icon2.img} alt={icon2.name} />
            <p className='inline font-bold'>{icon2.name}</p>
            <p className='ml-2 inline'>{texts2.text2}</p>
            <p className='my-4'> {texts2.text3} </p>
            <p className='my-4'> {texts2.text4} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

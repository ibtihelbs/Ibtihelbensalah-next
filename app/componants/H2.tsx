interface contentProp{content:string}
const H2:React.FC<contentProp> = ({content}) => {
  return (
    <h2 className='font-audio italic text-2xl md:text-4xl'>{content}</h2>
  )
}

export default H2
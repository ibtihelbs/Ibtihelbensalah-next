interface contentProp{content:string}
const H1:React.FC<contentProp> = ({content}) => {
  return (
    <h1 className='font-audio text-3xl md:text-6xl'>{content}</h1>
  )
}

export default H1
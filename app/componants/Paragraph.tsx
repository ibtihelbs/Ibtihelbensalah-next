interface contentProp{content:string}
const Paragraph:React.FC<contentProp> = ({content}) => {
  return (
    <p className=' text-2xl '>{content}</p>
  )
}

export default Paragraph
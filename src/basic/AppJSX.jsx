import './App.css';

export default function AppJSX() {
  const name = 'ellie'
  const list =['우유', '딸기', '바나나', '요거트']
  return( 
  <>
    <h1 className='orange'>{`Hello ${name}`}</h1>
    <h2>Hello</h2>
    <p>{name}</p>
    <ul>
      {
        list.map((item)=><li>{item}</li>)
      }
    </ul>
  </>
)}


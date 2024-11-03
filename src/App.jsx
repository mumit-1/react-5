import { useState } from 'react'
import './App.css'
import Bookmark from './Bookmarks/Bookmark'
import Blog from './Components/Blog/blog'
import Header from './Components/header/Header'


function App() {
  const[bookmark,setBookmark] = useState([])
  const[readingTime,setReadingTime] = useState(0)
const handleBookmark = (data) =>{
  const newArray = [...bookmark,data]
  setBookmark(newArray)
}
const handleReadingTime = (time) =>{
  setReadingTime(readingTime+time)
}

  return (
    <>
     
    <div className=' max-w-screen-xl mx-auto px-2'>
      <Header></Header>

      <div className='lg:flex md:flex'>
        <Blog handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blog>
        <Bookmark bookmark={bookmark} readingTime={readingTime}></Bookmark>
      </div>
    </div>
    </>
  )
}

export default App

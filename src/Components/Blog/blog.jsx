import { useEffect } from "react";
import { useState } from "react";
import BlogS from "../../BlogS/BlogS";
import PropTypes from 'prop-types';

const Blog = ({handleBookmark,handleReadingTime}) => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="lg:w-2/3 md:w-1/3">
            <div>
                
               {
            blogs.map(blog=><BlogS key={blog.id} data={blog} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></BlogS>)
               }
            </div>
        </div>
    );
};

Blog.propTypes = {

  handleBookmark : PropTypes.func.isRequired,
  handleReadingTime : PropTypes.func.isRequired
}

export default Blog;
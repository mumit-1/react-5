import { IoBookmarkOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const BlogS = ({data,handleBookmark,handleReadingTime}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = data
    return (
        <div className="py-3 drop-shadow-xl">
            <div className="py-3">
                <div className="">
                    <img className="h-80 w-full object-cover rounded-2xl" src={cover} alt="" />
                </div>
                <div className="flex justify-between items-center py-4 px-1">
                    <div className="">
                        <img className="w-12 h-12 object-cover  rounded-full" src={author_img} alt="" />
                    </div>
                    <div className="flex-1 px-2.5">
                        <h1 className="font-bold text-lg">{author}</h1>
                        <h1>{posted_date}</h1>
                    </div>
                    <div className="flex items-center gap-1 self-start">
                        <p>{reading_time}m read time    </p>
                        
                        <button onClick={()=>handleBookmark(data)} className="block text-xl relative top-0.5 text-cyan-600"><IoBookmarkOutline></IoBookmarkOutline></button>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-3xl py-3">{title}</p>
                </div>
                <div>
                    <p className="py-2">
                    {
                        hashtags.map((has,idx)=><span key={idx}><a>{has}</a>             </span>)
                    }
                    </p>
                    <button onClick={()=>handleReadingTime(reading_time)}><p className=" text-red-600 py-2">Mark as read</p></button>
                </div>
            </div> 
            <hr />          
        </div>
    );
};

BlogS.propTypes = {
    data: PropTypes.object.isRequired,
  handleBookmark : PropTypes.func.isRequired,
  handleReadingTime : PropTypes.func.isRequired,
}

export default BlogS;
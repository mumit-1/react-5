import PropTypes from 'prop-types';
const Bookmark = ({bookmark,readingTime}) => {
    
    return (
        <div className="text-2xl lg:w-1/3 md:w-1/3 ">
            <div className="bg-indigo-100 text-center p-3 m-2 mt-7 lg:ml-7 md:ml-5 border-2 border-indigo-500 rounded-xl sticky top-2">
                <p className="text-xl">Spent time on read {readingTime}min</p>
            </div>
            <div className="bg-stone-300 p-4 mb-5 mt-3 lg:ml-7 md:ml-5 rounded-xl sticky top-2">
                <p className="text-center text-lg font-bold">Bookmarked Blogs:{bookmark.length}</p>
                <div className=''>
                    {
                        bookmark.map(single=><p className='bg-white my-2 p-3 text-lg rounded-xl' key={single.id}>{single.title}</p>)
                    }
                </div>
            </div>            

        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,

}

export default Bookmark;
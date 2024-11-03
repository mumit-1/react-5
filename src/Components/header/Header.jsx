import profile from '../../../knowledge-cafe/images/profile.png'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-3 py-5'>
                <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
                <div>
                        <img src={profile} alt="" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;
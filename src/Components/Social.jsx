import google from '../assets/Google.png'
import apple from '../assets/apple.png'
const Social = () => {
    return (
        <div className="flex gap-4">
            <button className="border-[1px] w-full py-3 rounded-lg flex items-center justify-center gap-2"><img className='w-7' src={google} alt="" />Sign in with Google</button>
            <button className="border-[1px] w-full py-3 rounded-lg flex items-center justify-center gap-2"><img className='w-7' src={apple} alt="" />Sign in with Apple</button>
        </div>
    );
};

export default Social;
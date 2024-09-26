import Camera from '../Webcam/Camera'
import useTabSwitchCount from '../../utils/useTabSwitchCount'
const Navbar = () => {
  const tabSwitchCount = useTabSwitchCount();
  return (
    <>
    <div className='bg-blue-400 border border-gray-50 p-2 mt-2 '>
        <div className='flex justify-end gap-10 items-center'>
          <p className='font-medium text-lg text-rose-600'>Tab Switches : {tabSwitchCount}</p>
          <Camera/>
        </div>
    </div>
    </>
  )
}

export default Navbar
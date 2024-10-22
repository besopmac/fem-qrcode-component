import qrcode from '../../assets/images/image-qr-code.png'

const Card = () => {
  return (
    <div className="w-full max-w-80 p-4 rounded-[20px] bg-white card-shadow">
      <img src={qrcode} alt="" className='rounded-[10px]' />
      <div className="flex flex-col gap-6 align-center py-6 px-4">
        <h1 className='text-center text-slate-900 font-bold text-[22px] leading-tight'>Improve your front-end skills by building projects</h1>
        <p className='text-center text-slate-500 text-[15px] leading-snug'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default Card
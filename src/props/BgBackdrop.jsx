

const BgBackdrop = () => {
  return (
    <div>
      <div className="fixed left-0 top-0 w-full h-[100vh] -z-50 bg-custom-gradient"></div>
      <div className="fixed left-0 top-0 w-full h-[100vh] -z-10 bg-white/[.7] backdrop-blur-[200px]"></div>
    </div>
  )
}

export default BgBackdrop
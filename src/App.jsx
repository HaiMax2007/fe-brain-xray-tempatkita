function App() {

  const handleAnalysis = () => {}
  const handleImageChange = () => {}

  return (
    <div className="bg-blue-50 min-h-screen px-10 py-10">
      <div className="w-full flex justify-center items-center gap-5">
        <img src="/logo.png" alt="Logo" className="w-[60px] h-[60px] object-cover mix-blend-color-burn" />
        <h1 className="font-bold capitalize text-4xl">brain <span className="bg-blue-200 px-2 text-blue-600">x ray</span> analysis system</h1>
      </div>
      <p className="text-center text-lg mt-5">Upload gambar scan X-ray otak untuk analisis otomatis</p>
      <div className="grid grid-cols-2 max-w-[1000px] mx-auto mt-15 gap-6">
        <form onSubmit={handleAnalysis} className="bg-white p-4 rounded space-y-4" encType="multipart/form-data">
          <div className="flex items-center gap-3">
            <img src="/upload.png" alt="upload" className="w-5 h-5" />
            <h2 className="font-semibold">Upload X-Ray Otak</h2>
          </div>
          <div className="h-[250px] flex flex-col justify-center items-center border-[2px] border-black/20 border-dashed w-full relative py-6 px-3 rounded-xl hover:border-blue-500 transition-all">
            <label htmlFor="upload" className="absolute w-full h-full cursor-pointer">
              <input className="hidden" type="file" accept="image/*" id="upload" onChange={handleImageChange} />
            </label>
            <img src="/file.png" alt="file" className="w-14 h-14" />  
            <span className="text-blue-600 mt-4">Klik untuk upload gambar</span>
            <span className="text-black/40 text-xs">Format: JPG, PNG, JPEG (Max 5MB)</span>
          </div>
        </form>
        <div className="bg-white p-4 rounded">
          <div className="flex items-center gap-3">
            <img src="/thinking.png" alt="brain" className="w-5 h-5" />
            <h2 className="font-semibold">Hasil Analisis</h2>
          </div>
          <div className="flex flex-col justify-center items-center h-full gap-8">
            <img src="/file.png" alt="file" className="w-24 h-24" />
            <span className="text-lg">Silakan upload gambar X-ray untuk memulai analisis</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded col-span-2">
          <h2 className="font-semibold">Tentang Sistem Analisis</h2>
          <div className="">

          </div>
        </div>
      </div>
    </div>
  )
}

export default App

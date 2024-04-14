import { PiCertificate } from "react-icons/pi";
import ImgSertifikat1 from "../asset/sertifikat1.png"
import ImgSertifikat2 from "../asset/sertifikat2.png"
import ImgSertifikat3 from "../asset/sertifikat3.png"
import ImgSertifikat4 from "../asset/sertifikat4.png"

const prestasi = [
    { id: 1, linkGambar: ImgSertifikat1 },
    { id: 2, linkGambar: ImgSertifikat2 },
    { id: 3, linkGambar: ImgSertifikat3 },
    { id: 4, linkGambar: ImgSertifikat4 },
]


const Tim = () => {
    return (
        <>
            <div className='container'>
                <div className='w-full h-20'>
                    <div className='flex justify-center mb-1 mt-10 font-bold text-2xl'>
                        <PiCertificate style={{ width: '40px', height: '40px', marginRight: '5px' }} /><h1>the certificate that I got</h1>
                    </div>
                    <div className="grid md:grid-cols-3 grid-rows-1">
                        {prestasi.slice(0, 4).map((item) => (
                            <div key={item.id} className="mx-auto md:mt-4 mt-1 mb-3 md:w-96 w-[350px] transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                                <img loading="lazy" className="h-48 w-full object-contain mt-10" src={item.linkGambar} alt="setifikat" />
                                <div className="p-4">
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tim

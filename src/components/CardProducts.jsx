import Image from 'next/image'
import React from 'react'

const CardProducts = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <Image src="/icons/new.png" alt='' width={24} height={24} />
                    <h2 className='text-xl text-[#333333] font-semibold'>Iklan Terbaru Disekitarmu</h2>

                </div>
                <div>
                    <a href="">Lihat Semua</a>

                </div>

            </div>

            <div className='py-6'>
                <div className='grid grid-cols-4 gap-3'>
                    <div className='bg-white rounded-xl h-[320px]'></div>
                    <div className='bg-white rounded-xl h-[320px]'></div>
                    <div className='bg-white rounded-xl h-[320px]'></div>
                    <div className='bg-white rounded-xl h-[320px]'></div>


                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <Image src="/icons/new.png" alt='' width={24} height={24} />
                    <h2 className='text-xl text-[#333333] font-semibold'>Iklan Terbaru Lainnya</h2>

                </div>
                <div>
                    <a href="">Lihat Semua</a>

                </div>

            </div>

            <div className='py-6'>
                <div className='grid grid-cols-4 gap-3'>
                    <div className='bg-white rounded-xl h-[320px]'></div>
                    <div className='bg-white rounded-xl h-[320px]'></div>
                    <div className='bg-white rounded-xl h-[320px]'></div>
                    <div className='bg-white rounded-xl h-[320px]'></div>


                </div>
            </div>
        </>
    )
}

export default CardProducts
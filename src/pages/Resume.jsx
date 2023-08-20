import React, { useState, useEffect } from 'react'
import Layout from '../layout'
import Button from '../components/Button'
import pdf from '../assets/Curriculum.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function Resume() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        // Limpia el listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const scale = width > 786 ? 1.2 : 0.6

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-full mt-16">
                <Button text="Download Curriculum" actionType="download" target={pdf} />
                <div className="my-10 w-full max-w-2xl h-auto">
                    <Document file={pdf}>
                        <Page pageNumber={1} scale={scale} renderTextLayer={false} />
                    </Document>
                </div>
                <div className="mb-16">
                    <Button text="Download Curriculum" actionType="download" target={pdf} />
                </div>
            </div>
        </Layout>
    )
}

export default Resume

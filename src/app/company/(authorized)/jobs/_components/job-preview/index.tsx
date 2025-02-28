interface JobPreviewProps {
    is_company_preview: boolean
}
export default function JobPreview({is_company_preview}:JobPreviewProps){
    console.log(is_company_preview) // TODO: some button show
    return (
        <>Job Preview</>
    )
}
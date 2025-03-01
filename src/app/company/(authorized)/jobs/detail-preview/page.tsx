"use client"

import { ArrowLeftOutlined } from "@ant-design/icons";
import JobPreview from "../_components/job-preview";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    return (
        <div>
            {id && <div className="text-blue-600 cursor-pointer mb-4 ml-3" onClick={() => { router.push('/company/jobs/create') }}>
                <ArrowLeftOutlined /> Kembali ke pembuatan iklan
            </div>}


            <div className="container mx-auto">
                <JobPreview showApplyButton />
            </div>
        </div>
    )

}
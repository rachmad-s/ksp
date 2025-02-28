"use client"

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import JobPreview from "../_components/job-preview";

export default function Page(){
    const [showModal, setShowModal] = useState(false)
    return <div className="container mx-auto">Create Job
        <div>
            <Link className="text-blue-500" href={'/company/jobs/detail-preview'}>Toast - Detail clicked</Link>
        </div>
        <div>
            <button onClick={() => { setShowModal(true) }}>Preview Samping</button>
            <br />
            <Link className="text-blue-500" href={'/company/jobs/detail-preview?id=123'}>Preview Full</Link>
        </div>
        <Modal
            title=""
            style={{ right: 0, top: 0, position: 'absolute' }}
            open={showModal}
            onOk={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
            width={1000}
            footer={null}
        >
            <div onClick={() => setShowModal(false)} className="text-blue-600 cursor-pointer my-3"><ArrowLeftOutlined /> Kembali ke pembuatan iklan</div>

            <div className="container mx-auto">
                <JobPreview showApplyButton />
            </div>
        </Modal>
    </div>
}
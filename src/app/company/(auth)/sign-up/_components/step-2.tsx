import { Avatar, Button } from "antd";
import { BankOutlined, EditOutlined } from '@ant-design/icons';
import Text from "antd/es/typography/Text";
import Image from "next/image";

function SignUpFormStep2() {
    return (
        <div className="w-screen h-screen">
            <div className="bg-white border-b border-[#E0E0E0] py-2.5 px-2.5">
                <div className="container mx-auto">
                    <Image src={'/images/logo-mandiri.svg'} alt="Logo" height={48} width={120} />
                </div>
            </div>
            <div className="container mx-auto py-8">
                <div className="flex gap-8">
                    <div className="relative">
                        <Avatar size={144} icon={<BankOutlined />} style={{
                            color: '#1677FF', backgroundColor: '#BAE0FF',
                        }} />
                        <div className="absolute bottom-0 right-0">
                            <Button icon={<EditOutlined />}>

                            </Button>
                        </div>
                    </div>
                    <div>
                        <Text editable type={"secondary"}>Nama Perusahaan</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpFormStep2;
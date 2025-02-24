import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Image from "next/image";
import { Button, Card, Input, Select } from "antd";

function SignUpFormStep1( {
    nextStep
}: {
    nextStep: () => void;
}) {
    return (
        <div className="w-screen h-screen">
            <div className="bg-white border-b border-[#E0E0E0] py-2.5 px-2.5">
                <div className="container mx-auto">
                    <Image src={'/images/logo-mandiri.svg'} alt="Logo" height={48} width={120} />
                </div>
            </div>
            <div className="flex justify-center py-12">
                <div className="w-[588px]">
                    <Card>
                        <div className="flex flex-col gap-6">
                            <Title level={2} style={{ margin: 0 }}>Buat Akun Perusahaan</Title>
                            <Text>Masukan beberapa detail tentang bisnis Anda untuk memverifikasi Akun. Kami tidak akan membagikan detail informasi Anda dengan siapa pun.</Text>
                            <div className="flex gap-3">
                                <Input placeholder="Nama Depan" />
                                <Input placeholder="Nama Belakang" />
                            </div>
                            <div className="flex gap-3">
                                <Input placeholder="Nama Bisnis" />
                            </div>
                            <div className="flex gap-3">
                                <Select
                                    className="w-full"
                                    placeholder="Negara"
                                    options={[
                                        { value: 'Indonesia', label: 'Indonesia' },
                                        { value: 'Malaysia', label: 'Malaysia' },
                                        { value: 'Singapura', label: 'Singapura' },
                                        { value: 'Thailand', label: 'Thailand' },
                                    ]}
                                />
                            </div>
                            <div className="flex gap-3">
                                <Input placeholder="Nomor Telepon" />
                            </div>
                            <div>
                                <Button type="primary" onClick={nextStep}>
                                    Buat Akun
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default SignUpFormStep1;
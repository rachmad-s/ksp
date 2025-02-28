import Navbar from "@/components/navbar"

export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
    <div className="mb-5">
        <Navbar />
        <div>
            {children}
        </div>
    </div>
    )
}
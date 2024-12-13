import Image from "next/image";

export default function NotificationCard() {
    return (
        <article className="flex items-start gap-2 text-xs">
            <div className="size-8">
                <Image src={"/company_founder.jpg"} alt={"company_founder"} height={50} width={50} className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
                <p className="font-semibold">Muhammad Ahmad</p>
                <p><span className="">Downloaded</span> - <span>Inter Font</span></p>
            </div>
            <div className="ml-auto">
                <p>Dec 13</p>
            </div>
        </article>
    )
}
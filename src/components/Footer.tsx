import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-textPrimary">
      <div className="px-5 py-5 mx-auto max-w-screen-xl flex-col justify-start items-center gap-10 flex text-textPrimary text-lg font-normal font-poppins">
        <div className="w-full py-4">
          <Link
            href={"/"}
            className="text-primary text-2xl font-semibold font-poppins text-start"
          >
            LOGO
          </Link>
        </div>
        <div className="self-stretch justify-between items-start inline-flex flex-col sm:flex-row gap-2">
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Feedback</Link>
            <Link href={"/"}>Community</Link>
          </div>
          <div className="flex-col justify-start items-start gap-4 hidden md:inline-flex">
            <Link href={"/"}>Trust Safety & Security</Link>
            <Link href={"/"}>Help & Support</Link>
            <Link href={"/"}>Upwork Foundation</Link>
          </div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <Link href={"/"}>Terms of Service</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>QA Notice at Collection</Link>
            <Link href={"/"}>Cookie Settings</Link>
          </div>
          <div className="flex-col justify-start items-start gap-4 hidden lg:inline-flex">
            <p className="text-secondary">Attributions</p>
            <a href="https://storyset.com/user">
              User illustrations by Storyset
            </a>
            <Link href={"/"}>Cookie Policy</Link>
            <Link href={"/"}>Enterprise Solution</Link>
          </div>
        </div>
        <div className="self-stretch pb-4 border-b border-textSecondary justify-between flex-col gap-4 md:flex-row items-center inline-flex">
          <div className="justify-start items-center gap-4 md:gap-10 flex-col md:flex-row flex">
            <div className="text-textPrimary text-xl font-medium font-poppins">
              Follow Us
            </div>
            <div className="justify-start items-center gap-2 md:gap-6 flex">
              <div className="w-10 h-10 p-1 rounded-full border-2 border-textPrimary justify-center items-center flex">
                <Image
                  src={"/facebook_icon.svg"}
                  alt={"Facebook"}
                  width={15}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 rounded-full p-2 border-2 border-textPrimary justify-center items-center flex">
                <Image
                  src={"/x_icon.svg"}
                  alt={"Twitter"}
                  width={15}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 rounded-full p-2 border-2 border-textPrimary justify-center items-center flex">
                <Image
                  src={"/linkedin_icon.svg"}
                  alt={"LinkedIn"}
                  width={15}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 rounded-full p-2 border-2 border-textPrimary justify-center items-center flex">
                <Image
                  src={"/youtube_icon.svg"}
                  alt={"YouTube"}
                  width={15}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 rounded-full p-2 border-2 border-textPrimary flex-col justify-center items-center inline-flex">
                <Image
                  src={"/instagram_icon.svg"}
                  alt={"Instagram"}
                  width={15}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-2 md:gap-10 flex">
            <div className="text-textPrimary text-xl font-medium font-poppins">
              Mobile App
            </div>
            <div className="justify-start items-center gap-2 md:gap-6 flex">
              <div className="w-10 h-10 rounded-full p-2 border-2 border-textPrimary justify-center items-center flex">
                <Image
                  src={"/apple.svg"}
                  alt={"Apple Store"}
                  width={15}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-10 h-10 rounded-full p-2 border-2 border-textPrimary justify-center items-center flex">
                <Image
                  src={"/android_icon.svg"}
                  alt={"android"}
                  width={15}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div>© 2015 - 2024 Company ® Global Inc.</div>
      </div>
    </footer>
  );
}

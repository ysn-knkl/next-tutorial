import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col flex-center gap-4 p-5 wrapper text-center sm:flex-row flex-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>
          2024 Evently. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
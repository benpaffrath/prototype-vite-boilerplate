import Image from 'next/image'

export function Logo({ shrink = 1 }: { shrink?: number }) {
    return (
        <Image
            src="/logo.png"
            alt="Logo"
            width={212 / shrink}
            height={50.2 / shrink}
        />
    )
}

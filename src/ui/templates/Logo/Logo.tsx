import Image from 'next/image';

export const Logo = () => { 
  return (
    <Image
      src="/logo.svg"
      alt="MySide logo"
      width={169}
      height={53}
    />
  )
}
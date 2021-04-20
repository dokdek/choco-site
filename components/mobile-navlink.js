import Link from "next/link";

export default function MobileNavlink({name, isActive, link}) {
    if (isActive) {
      return (
        <Link href={link}>
        <a
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
          {name}
        </a>
        </Link>
      );
    } else {
      return (
        <Link href={link}>
        <a
          href={link}
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
          {name}
        </a>
        </Link>
      );
    }
  }
  
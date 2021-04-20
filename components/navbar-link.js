import Link from "next/link";

export default function Navlink({name, isActive, link}) {
  if (isActive) {
    return (
      <Link href={link}>
      <a
        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {name}
      </a>
      </Link>
    );
  } else {
    return (
      <Link href={link}>
      <a
        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {name}
      </a>
      </Link>
    );
  }
}

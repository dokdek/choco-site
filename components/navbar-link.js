export default function Navlink({name, isActive, link}) {
  if (isActive) {
    return (
      <a
        href={link}
        class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {name}
      </a>
    );
  } else {
    return (
      <a
        href={link}
        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {name}
      </a>
    );
  }
}

export default function MobileNavlink({name, isActive, link}) {
    if (isActive) {
      return (
        <a
          href={link}
          class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
          {name}
        </a>
      );
    } else {
      return (
        <a
          href={link}
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
          {name}
        </a>
      );
    }
  }
  
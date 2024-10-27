import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const about = [
  {
    name: "Who We Are",
    description: "Learn about who we are",
    href: "#",
  },
  {
    name: "Board Members",
    description: "Learn about the board members of Hands and Voices",
    href: "#",
  },
  {
    name: "Staff",
    description: "Learn about the staff of Hands and Voices",
    href: "#",
  },
  {
    name: "Contact Us",
    description: "Reach out to Hands and Voices",
    href: "#",
  },
];
const programs = [
  {
    name: "Guide By your Side (GBYS)",
    description:
      "A trusted companion for families of children who are deaf or hard of hearing, providing emotional support, practical advice, and connection to a community of peers and educators.",
    href: "#",
  },
  {
    name: "Education Advocacy (ASTRA)",
    description:
      "Navigating the education system can be complex, but with ASTRA, families of children who are deaf or hard of hearing have a trusted ally to help them advocate for their child's needs and secure the support they deserve.",
    href: "#",
  },
  {
    name: "O.U.R. Children's Safety Project",
    description:
      "Breaking the silence: O.U.R. Children's Safety Project works to prevent child abuse and neglect in the deaf and hard of hearing community, and supports families in creating a safe and nurturing environment for their children.",
    href: "#",
  },
  {
    name: "DHH Committee Members (DHH)",
    description:
      "Comprised of individuals who are deaf or hard of hearing, parents, educators, and professionals, the DHH Committee works to address the unique needs and challenges of the deaf and hard of hearing community.",
    href: "#",
  },
];

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Hands and Voices Logo"
                src="../../../src/assets/images/01_hvlogo.png"
                className="h-14 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Home
              </a>
              {/* Integrated Flyout Menu for "About" */}
              <Popover className="relative">
                <PopoverButton className="inline-flex items-center gap-x-1 border-b-2 border-transparent px-1 pt-1 h-full text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                  <span>About</span>
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                </PopoverButton>
                <PopoverPanel className="absolute z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    {about.map((item) => (
                      <div
                        key={item.name}
                        className="relative rounded-lg p-2 hover:bg-gray-50"
                      >
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              {/* Integrated Flyout Menu for "Programs" */}
              <Popover className="relative">
                <PopoverButton className="inline-flex items-center gap-x-1 border-b-2 border-transparent px-1 pt-1 h-full  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                  <span>Programs</span>
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                </PopoverButton>
                <PopoverPanel className="absolute z-10 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="p-4">
                    {programs.map((item) => (
                      <div
                        key={item.name}
                        className="relative rounded-lg p-2 hover:bg-gray-50"
                      >
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Resources
              </a>
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Membership
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            ></button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pb-4 pt-2">
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            Calendar
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

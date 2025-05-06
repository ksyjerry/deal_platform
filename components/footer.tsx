export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-0 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6 mb-6">
          {/* PwC Logo */}
          <div className="flex flex-row items-end gap-x-4">
            <img
              src="https://crystalpng.com/wp-content/uploads/2025/05/pwc-logo.png"
              alt="PwC Logo"
              className="h-16 w-auto"
            />
            <div className="text-base text-gray-900">
              © {currentYear} Samil PriceWaterhouseCoopers. All rights reserved.
            </div>
          </div>
        </div>

        {/* Bottom links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6">
          <a
            href="#"
            className="text-base hover:text-[#F4511E] transition-colors text-gray-900"
          >
            개인정보 처리방침
          </a>
          <a
            href="#"
            className="text-base hover:text-[#F4511E] transition-colors text-gray-900"
          >
            Cookie policy
          </a>
          <a
            href="#"
            className="text-base hover:text-[#F4511E] transition-colors text-gray-900"
          >
            Legal disclaimer
          </a>
          <a
            href="#"
            className="text-base hover:text-[#F4511E] transition-colors text-gray-900"
          >
            About site provider
          </a>
          <a
            href="#"
            className="text-base hover:text-[#F4511E] transition-colors text-gray-900"
          >
            Site map
          </a>
        </div>
      </div>
    </footer>
  );
}

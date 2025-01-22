import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 justify-center items-center">
        <div className="p-4">
          <h2 className="text-md font-semibold text-white">About Us</h2>
          <p className="text-sm">
            A music school is a vibrant institution where students learn,
            practice, and master musical instruments, theory, and performance
            skills.
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-md font-semibold text-white">Quick Links</h2>
          <div>
            <ul className="text-sm">
              <li className="py-1">
                <Link href={"/"} className="hover:text-white">
                  Home
                </Link>
              </li>
              <li className="py-1">
                <Link href={"/about"} className="hover:text-white">
                  About
                </Link>
              </li>
              <li className="py-1">
                <Link href={"/courses"} className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li className="py-1">
                <Link href={"/contact"} className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-md font-semibold text-white">Follow us</h2>
          <div className="flex flex-col text-sm gap-1">
            <Link href={"/"} className="hover:text-white">
              Facebook
            </Link>
            <Link href={"/"} className="hover:text-white">
              X
            </Link>
            <Link href={"/"} className="hover:text-white">
              Instagram
            </Link>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-md font-semibold text-white">Contact Us</h2>
          <address>
            Shilpokola,
            <br /> Dampara Chattogram-4000,
            <br /> Bangladesh.
            <br />
            Phone:+880 133 2522552
          </address>
        </div>
      </div>
      <p className="text-center text-xs pt-8 ">
        &copy; All Rights Reserved by Prowesd IT{" "}
      </p>
    </footer>
  );
};

export default Footer;

import { IconEmail, IconLocation, IconPhone } from "@/lib/icons";
import Logo from "./Logo";

export default function Footer() {
  const quickLinks = [
    { name: "Men Eyeglasses", link: "#" },
    { name: "Women Eyeglasses", link: "#" },
    { name: "Men Sunglasses", link: "#" },
    { name: "Women Sunglasses", link: "#" },
  ];
  const company = [
    { name: "Our Blog", link: "#" },
    { name: "Return & Exchange Policy", link: "#" },
    { name: "Reviews", link: "#" },
    { name: "Privacy Policy", link: "#" },
    { name: "Terms And Conditions", link: "#" },
  ];

  return (
    <footer className="">
      <div className="bg-neutral-100">
        <div>
          <Logo />
          <p className="flex gap-1">
            <IconLocation /> Address ABC, New York, Unites States
          </p>
          <p className="flex gap-1">
            <IconPhone /> Help Line & Whatsapp: +123 456 789
          </p>
          <p className="flex gap-1">
            <IconEmail /> someaddress@gmail.com
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bg-neutral-300">
        <p>© Copyright 2023 Vision Vault All rights reserved.</p>
      </div>
    </footer>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-center h-24 bg-black">
      <p className="text-white text-sm">
        Copyright &copy; Ecommerce Shop {`${new Date().getFullYear()}`} All
        rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

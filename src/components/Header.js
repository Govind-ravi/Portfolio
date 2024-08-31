import Logo from "../assests/Logo.PNG";

const Header = () => {
  return (
    <nav className='px-10 py-6 flex justify-between items-center'>
      <div className='flex items-center'>
        <div className='w-20'><img src={Logo} alt="Logo" /></div>
        <span className='text-3xl'>TechPortfolio</span>
      </div>
      <div className='flex items-center gap-16 text-lg'>
        <div><a href="#home">Home</a></div>
        <div><a href="#about">About</a></div>
        <div><a href="#projects">Projects</a></div>
        <div><a href="/">Skills</a></div>
        <div><a href="/">Contact</a></div>
      </div>
    </nav>
  );
};

export default Header;

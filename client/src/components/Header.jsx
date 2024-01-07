import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <header className="w-full bg-brown-800">
            <nav className="py-6 px-10 flex items-center justify-between">
                <h3 className="text-xl uppercase font-semibold text-white">navbar</h3>
                <div className="flex items-center gap-3">
                    <Link to="/students" className="text-base uppercase font-semibold text-white">
                        Students
                    </Link>
                    <Link to="/projects" className="text-base uppercase font-semibold text-white">
                        Projects
                    </Link>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header
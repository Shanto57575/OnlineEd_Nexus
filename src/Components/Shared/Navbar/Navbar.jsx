import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogOut from "@/Components/auth/LogOut";


const Navbar = async () => {
	const session = await getServerSession(authOptions)
	// console.log(session, 'user session')
	const menu = (
		<>
			<div className="lg:flex items-center lg:text-xl">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/courses">Courses</Link>
				</li>
				<li>
					<Link href="/blogs">Blogs</Link>
				</li>
				{session && <li>
					<Link href="/dashboard">Dashboard</Link>
				</li>}
			</div>
		</>
	);
	return (
		<div className="fixed w-full bg-white z-50 shadow-sm">
			<div className="navbar lg:w-3/4 w-11/12 mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{menu}
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-xl md:text-4xl text-[#0083db]">
						ED_NEXUS
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 mt-3">{menu}</ul>
				</div>
				<div className="navbar-end">

					{session ? <div className="dropdown dropdown-end">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle avatar bg-[#0083db] mr-3"
						>
							<div className="w-10 rounded-full">
								<FaUserGraduate className="flex justify-center items-center text-white text-xl ml-[10px] mt-[10px]" />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<div>
									<div className="flex items-center gap-2">
										<CgProfile className="text-lg" />
										<Link href="/profile" className="justify-between">Profile</Link>
									</div>
									<div className="badge bg-[#0083db] text-white">New</div>
								</div>
							</li>
							<li>
								<div>
									<div className="flex items-center gap-2">
										<FiSettings className="text-lg" />
										<Link href="/settings" className="justify-between">Settings</Link>
									</div>
								</div>
							</li>
							<li>
								<div>
									<div className="flex items-center gap-2">

										<FiLogOut className="text-lg" />
										<LogOut />
									</div>
								</div>
							</li>
						</ul>
					</div>
						:
						<div className="">
							<Link href="/login">
								<button className="text-white lg:text-xl bg-[#0083db] w-24 py-1 border-2 border-[#0083db] rounded-md font-semibold">
									Login
								</button>
							</Link>
						</div>}
				</div>
			</div>
		</div>
	);
};

export default Navbar;

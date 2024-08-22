function Button({children}) {
    return (
        <button className=" w-32 h-10  border-2 border-green-main flex items-center justify-center text-md text-green-main tracking-wide font-semibold cursor-pointer">
            {children}
        </button>
    )
}

export default Button

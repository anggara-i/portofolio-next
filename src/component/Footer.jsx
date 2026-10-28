export default function Footer() {
    return (
    <footer>
        <div className="w-full bg-blue-950 px-4 py-5 text-center text-sm text-white">
            &copy; {new Date().getUTCFullYear()} Indra Anggara. All right reserved.
        </div>
    </footer>
    )
}
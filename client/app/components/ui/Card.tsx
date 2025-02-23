export default function Card({ children, className = "", ...props }) {
    return (
        <div
            className={`w-fit px-4 py-2 rounded bg-white shadow-md ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

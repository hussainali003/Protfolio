export default function CodeLines({number}) {
    return (
        <div className="h-full flex flex-col items-end pt-2 px-3">
            {
                Array.from({ length: number }, (_, index) => (
                    <p key={index} className="text-number">
                        {index + 1}
                    </p>
                ))
            }
        </div>
    )
}
export default function CodeLines({number}) {
    return (
        <div className="h-full flex flex-col items-end pt-2 px-3 max-[640px]:text-sm">
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
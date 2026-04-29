interface TitleProps {
    text: string
}
export function Title({ text }: TitleProps){
    return (
        <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{text}</h2>
            <div className="absolute bottom-0 left-0 w-[55px] h-1.5 bg-pink-500 rounded-sm"></div>
        </div>
    );
}
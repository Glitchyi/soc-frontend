export default function LinesOfCode(prop) {
    return (
        <div className="mx-10 ">
            <h1 className={"text-[200px] font-bold text-darkpacha"}>{prop.count}</h1>
            <h2 className={"text-7xl font-bold text-darkpacha"}>Lines of code updated</h2>
        </div>
    );
}
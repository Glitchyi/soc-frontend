export default function Stats(prop) {
    return (
        <div className={"flex items-center gap-16"}>
            <div className={"flex items-center gap-3"}>
                <h2 className={"text-6xl font-bold text-darkpacha"}>
                    {prop.repos}
                </h2>
                <h3 className={"text-2xl font-bold text-darkpacha"}>
                    Repositories
                </h3>
            </div>
            <div className={"flex items-center gap-3"}>
                <h2 className={"text-6xl font-bold text-darkpacha"}>
                    {prop.prs}
                </h2>
                <h3 className={"text-2xl font-bold text-darkpacha"}>
                    Pull Requests
                </h3>
            </div>
            <div className={"flex items-center gap-3"}>
                <h2 className={"text-6xl font-bold text-darkpacha"}>
                    {prop.contributors}
                </h2>
                <h3 className={"text-2xl font-bold text-darkpacha"}>
                    Contributors
                </h3>
            </div>
        </div>
    );
}

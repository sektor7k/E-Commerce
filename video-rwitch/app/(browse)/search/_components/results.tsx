import { getSearch } from "@/lib/search-service";
import { ResultCard } from "./result-card";

interface ResultsProps {
    term?: string;
}

export const Results = async ({
    term
}: ResultsProps) => {
    const data = await getSearch(term);

    return (
        <div>
            <h2 className="mb-4 text-lg font-semibold ">
                Results for term &quot;{term}&quot;
            </h2>
            {data.length === 0 && (
                <p className="text-sm text-muted-foreground">
                    No results found. Try searching for something else
                </p>
            )}
            <div className="flex flex-col gap-y-4">
                {data.map((result) => (
                    <ResultCard data={result} key={result.id} />
                ))}
            </div>
        </div>
    )
}

export const ResultsSkeleton = () => {
    return (
        <div>

        </div>
    )
}
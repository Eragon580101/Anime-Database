import { AnimeResponseData } from "..";

export interface ScrollProps {
    data: AnimeResponseData[],
    setActive: React.Dispatch<React.SetStateAction<string | undefined>>,
    title?: string,
    text1?: string,
    text2?: string,
    character?: boolean,
    actor?: boolean,
    anime?: boolean,
}